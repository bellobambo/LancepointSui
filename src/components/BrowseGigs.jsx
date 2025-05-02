"use client";

import React, { useEffect } from "react";
import { useZkLogin } from "use-sui-zklogin";

const BrowseGigs = () => {
  const { accounts } = useZkLogin({
    urlZkProver: "https://prover-dev.mystenlabs.com/v1",
    generateSalt: async () => {
      return { salt: window.crypto.getRandomValues(new Uint32Array(1))[0] };
    },
  });
  const zksub = accounts?.[0]?.sub;
  console.log("zksub", zksub);

  useEffect(() => {
    const fetchGigData = async () => {
      try {
        const response = await fetch("/api/new-gig");
        if (!response.ok) {
          throw new Error("Failed to fetch gig data");
        }
        const data = await response.json();
        console.log("gigs", data);
      } catch (error) {
        toast.error(`Error loading gig data: ${error.message}`);
      }
    };

    fetchGigData();
  }, [zksub]);

  return (
    <div>
      <div className="flex justify-center mt-20 mb-10 px-4">
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md space-y-6 w-full max-w-4xl">
          <div className="text-2xl font-semibold text-left">
            Responsive Design Enhancement
          </div>

          <div className="flex items-center space-x-2">
            <div className="p-1 bg-black text-white w-[9rem] text-[12px] text-center rounded-4xl	font-medium">
              Frontend Developer
            </div>
            <div className="p-1 bg-[#337936] text-white w-[9rem] text-[12px] text-center rounded-4xl	font-medium">
              1000 usdt
            </div>
            <div className="p-1 bg-black text-white w-[9rem] text-[12px] text-center rounded-4xl	font-medium">
              2 weeks - 07/04 - 21/04
            </div>
          </div>

          <div>
            <p className="font-medium text-[12px] text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet,
              repellendus ea aspernatur fuga enim pariatur voluptatum nam
              necessitatibus sunt alias voluptates expedita dolore cupiditate
              quas, distinctio a beatae commodi rerum minima ut, magnam tenetur
              quo.
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <div className="p-1 bg-black text-white w-[9rem] text-[10px] text-center rounded-4xl	font-medium">
              Mobile Responsiveness
            </div>

            <div className="p-1 bg-black text-white w-[9rem] text-[10px] text-center rounded-4xl	font-medium">
              API Reliability
            </div>
          </div>

          <div className="flex justify-end items-center ">
            <div className="p-3 bg-black text-white w-[9rem] text-[14px] text-center rounded-4xl	font-[600]">
              View Milestones
            </div>
          </div>
          <div className="flex justify-end items-center ">
            <div className="p-3 bg-black text-white w-[9rem] text-[14px] text-center rounded-4xl	font-[600]">
              Apply
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center  px-4 my-10">
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md space-y-6 w-full max-w-4xl">
          <div className="text-2xl font-semibold text-left">
            Responsive Design Enhancement
          </div>

          <div className="flex items-center space-x-2">
            <div className="p-1 bg-black text-white w-[9rem] text-[12px] text-center rounded-4xl	font-medium">
              Frontend Developer
            </div>
            <div className="p-1 bg-[#337936] text-white w-[9rem] text-[12px] text-center rounded-4xl	font-medium">
              1000 usdt
            </div>
            <div className="p-1 bg-black text-white w-[9rem] text-[12px] text-center rounded-4xl	font-medium">
              2 weeks - 07/04 - 21/04
            </div>
          </div>

          <div>
            <p className="font-medium text-[12px] text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet,
              repellendus ea aspernatur fuga enim pariatur voluptatum nam
              necessitatibus sunt alias voluptates expedita dolore cupiditate
              quas, distinctio a beatae commodi rerum minima ut, magnam tenetur
              quo.
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <div className="p-1 bg-black text-white w-[9rem] text-[10px] text-center rounded-4xl	font-medium">
              Mobile Responsiveness
            </div>

            <div className="p-1 bg-black text-white w-[9rem] text-[10px] text-center rounded-4xl	font-medium">
              API Reliability
            </div>
          </div>

          <div className="flex justify-end items-center ">
            <div className="p-3 bg-black text-white w-[9rem] text-[14px] text-center rounded-4xl	font-[600]">
              View Milestones
            </div>
          </div>
          <div className="flex justify-end items-center ">
            <div className="p-3 bg-black text-white w-[9rem] text-[14px] text-center rounded-4xl	font-[600]">
              Apply
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseGigs;
