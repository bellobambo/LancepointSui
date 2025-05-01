import { getCollection } from "@/lib/db";
import gigSchema from "@/lib/CreateGig";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();

    const validatedData = gigSchema.safeParse(body);

    if (!validatedData.success) {
      return NextResponse.json(
        { error: validatedData.error.errors },
        { status: 400 }
      );
    }

    const collection = await getCollection("gigs");
    if (!collection) {
      throw new Error("Database connection failed");
    }

    const result = await collection.insertOne(validatedData.data);

    return NextResponse.json(
      {
        success: true,
        message: "Job created successfully",
        jobId: result.insertedId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating job:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const collection = await getCollection("gigs");
    if (!collection) {
      throw new Error("Database connection failed");
    }

    const jobs = await collection.find({}).toArray();

    return NextResponse.json(jobs);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
