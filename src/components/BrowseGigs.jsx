"use client";

import React, { useEffect, useState } from "react";
import { useZkLogin } from "use-sui-zklogin";
import { toast } from "react-hot-toast";

const BrowseGigs = () => {
  const { accounts } = useZkLogin({
    urlZkProver: "https://prover-dev.mystenlabs.com/v1",
    generateSalt: async () => {
      return { salt: window.crypto.getRandomValues(new Uint32Array(1))[0] };
    },
  });

  const zksub = accounts?.[0]?.sub;
  const [gigs, setGigs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [milestones, setMilestones] = useState([]);
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    const fetchGigData = async () => {
      try {
        const response = await fetch("/api/new-gig");
        if (!response.ok) throw new Error("Failed to fetch gig data");
        const data = await response.json();
        console.log("Fetched gig data:", data);
        setGigs(data);
      } catch (error) {
        toast.error(`Error loading gig data: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchGigData();
  }, [zksub]);

  const handleViewMilestones = (milestonesData) => {
    setMilestones(milestonesData || []);
    setShowModal(true);
  };

  const handleApplyClick = (gig) => {
    setSelectedJob(gig);
    setShowApplicationModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setMilestones([]);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh] text-gray-600 text-lg">
        Loading gigs...
      </div>
    );
  }

  return (
    <div className="px-4">
      {gigs.map((gig) => {
        const isOwner = gig.userId === zksub;

        return (
          <div key={gig._id} className="flex justify-center mt-10 mb-10">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md space-y-6 w-full max-w-4xl">
              <div className="text-2xl font-semibold text-left">
                {gig.jobTitle}
              </div>

              <div className="flex items-center space-x-2">
                <div className="p-1 bg-black text-white w-[9rem] text-[12px] text-center rounded-4xl font-medium">
                  {gig.services?.[0] || "Service"}
                </div>
                <div className="p-1 bg-[#337936] text-white w-[9rem] text-[12px] text-center rounded-4xl font-medium">
                  {gig.payment?.amount} {gig.payment?.token}
                </div>
                <div className="p-1 bg-black text-white w-[9rem] text-[12px] text-center rounded-4xl font-medium">
                  {gig.startDate} - {gig.endDate}
                </div>
              </div>

              <p className="font-medium text-[12px] text-gray-500">
                {gig.jobDescription}
              </p>

              <div className="flex items-center space-x-2">
                {gig.services?.map((service, i) => (
                  <div
                    key={i}
                    className="p-1 bg-black text-white w-[9rem] text-[10px] text-center rounded-4xl font-medium"
                  >
                    {service}
                  </div>
                ))}
              </div>

              <div className="flex justify-start items-center">
                <div
                  onClick={() => handleViewMilestones(gig.milestones)}
                  className="p-1 bg-black text-white w-[9rem] text-[14px] text-center rounded-4xl font-[600] cursor-pointer"
                >
                  View Milestones
                </div>
              </div>

              <div className="flex justify-start items-center">
                <div
                  onClick={() => handleApplyClick(gig)}
                  className={`p-3 w-[9rem] text-[14px] shadow-md text-center rounded-4xl font-[600] ${
                    isOwner
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-white text-black cursor-pointer"
                  }`}
                  style={{
                    pointerEvents: isOwner ? "none" : "auto",
                    opacity: isOwner ? 0.5 : 1,
                  }}
                >
                  Apply
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-white/30 backdrop-blur-sm">
          <div className="bg-white rounded-xl p-6 w-full max-w-md space-y-4 border-black border">
            <h2 className="text-xl font-semibold text-center mb-2">
              Milestones
            </h2>
            {milestones.length > 0 ? (
              milestones.map((ms, i) => (
                <div
                  key={i}
                  className="border p-3 rounded-lg shadow-sm bg-gray-50"
                >
                  <h3 className="font-bold">{ms.header}</h3>
                  <p className="text-sm text-gray-700">{ms.body}</p>
                  <p className="text-xs text-gray-500 mt-1">Date: {ms.date}</p>
                </div>
              ))
            ) : (
              <p className="text-center text-sm text-gray-600">
                No milestones available.
              </p>
            )}
            <button
              onClick={closeModal}
              className="mt-4 w-full bg-black text-white py-2 rounded-xl font-semibold cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {showApplicationModal && selectedJob && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-white/20 backdrop-blur-sm">
          <div className="bg-white rounded-xl p-6 w-full max-w-md space-y-4 border border-black">
            <h2 className="text-xl font-semibold text-start">
              Job Application
            </h2>

            <div>
              <p className="font-[400] text-[12px]">
                Let the employer know what you are offering.
              </p>
            </div>

            <div>
              <textarea
                className="border border-black rounded-md w-full p-2 placeholder:text-xs"
                name=""
                placeholder="What services will you be offering?"
                rows={3}
                id=""
              ></textarea>
            </div>
            <div>
              <input
                className="w-full border-black border p-2 rounded-md placeholder:text-xs"
                placeholder="Github / Portfolio link"
              />
            </div>
            <div className="flex justify-between font-[600] text-[12px]">
              <span className="">Submission Deadline</span>
              <span>{selectedJob.endDate}</span>
            </div>
            <div className="flex justify-between font-[600] text-[12px]">
              <span>Payment</span>
              <span>
                {selectedJob.payment?.amount} {selectedJob.payment?.token}
              </span>
            </div>

            <div className="flex justify-between space-x-2">
              <button
                onClick={() => {
                  setShowApplicationModal(false);
                  setSelectedJob(null);
                }}
                className="mt-4 w-full bg-black text-white py-2 rounded-xl font-semibold cursor-pointer text-[14px]"
              >
                Upload
              </button>
              <button
                onClick={() => {
                  setShowApplicationModal(false);
                  setSelectedJob(null);
                }}
                className="mt-4 w-full bg-black text-white py-2 rounded-xl font-semibold cursor-pointer text-[14px]"
              >
                Apply
              </button>
            </div>
            <button
              onClick={() => {
                setShowApplicationModal(false);
                setSelectedJob(null);
              }}
              className="mt-4 w-full bg-white border border-black text-black py-2 rounded-xl font-semibold text-[14px] cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BrowseGigs;
