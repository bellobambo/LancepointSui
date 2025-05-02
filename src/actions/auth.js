"use server";
import { getCollection } from "@/lib/db";

export async function registerWithZKLogin(zksub, walletAddress) {
  const userCollection = await getCollection("users");
  if (!userCollection) {
    return { error: "Database connection failed" };
  }

  try {
    // Check if user exists with either zksub or walletAddress
    const existingUser = await userCollection.findOne({
      $or: [{ zksub }, { walletAddress }],
    });

    if (!existingUser) {
      // User doesn't exist - create new one
      const insertResult = await userCollection.insertOne({
        zksub,
        walletAddress,
        authMethod: "zklogin",
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      if (!insertResult.acknowledged) {
        return { error: "Failed to create user" };
      }

      return { success: true, isNewUser: true };
    }

    // User already exists
    return { success: true, isNewUser: false };
  } catch (error) {
    console.error("ZK registration error:", error);

    // Handle duplicate key errors specifically
    if (error.code === 11000 || error.message.includes("duplicate key")) {
      return { success: true, isNewUser: false };
    }

    return { error: error.message || "Registration failed. Please try again." };
  }
}
