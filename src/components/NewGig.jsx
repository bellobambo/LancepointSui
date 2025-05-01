"use client";

import { useState } from "react";

export default function NewGig() {
  const [formData, setFormData] = useState({
    services: [],
    jobTitle: "",
    jobDescription: "",
    startDate: "",
    endDate: "",
    payment: {
      token: "",
      amount: 0,
    },
    milestones: [],
  });

  const [currentService, setCurrentService] = useState("");
  const [currentMilestone, setCurrentMilestone] = useState({
    header: "",
    body: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.includes("payment.")) {
      const paymentField = name.split(".")[1];
      setFormData({
        ...formData,
        payment: {
          ...formData.payment,
          [paymentField]:
            paymentField === "amount" ? parseFloat(value) || 0 : value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleServiceAdd = () => {
    if (currentService.trim()) {
      setFormData({
        ...formData,
        services: [...formData.services, currentService.trim()],
      });
      setCurrentService("");
    }
  };

  const handleMilestoneAdd = () => {
    if (currentMilestone.header.trim() && currentMilestone.date) {
      setFormData({
        ...formData,
        milestones: [...formData.milestones, currentMilestone],
      });
      setCurrentMilestone({
        header: "",
        body: "",
        date: "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error creating job:", errorData);
        alert("Failed to create job");
        return;
      }

      const data = await response.json();
      alert("Job created successfully!");
      console.log("Job created:", data);
      // Reset form or redirect as needed
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while creating the job");
    }
  };

  return (
    <div className="flex justify-center my-20 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 md:p-8 rounded-lg shadow-md space-y-6 w-full max-w-4xl"
      >
        <div className="text-2xl font-semibold text-left">Description</div>

        <div>
          <p className="font-medium text-[14px]">
            What talent are you looking for?
          </p>
          <input
            value={currentService}
            onChange={(e) => setCurrentService(e.target.value)}
            placeholder="What services will you be offering?"
            className="w-full p-5 border border-[#ACACAC] rounded-md mt-5"
          />
          <button
            type="button"
            onClick={handleServiceAdd}
            className="mt-2 text-[12px] text-center rounded-md font-medium"
          >
            Add Service
          </button>
        </div>

        <div className="flex items-center space-x-2">
          {formData.services.map((service, index) => (
            <div
              key={index}
              className="p-1 bg-black text-white w-[9rem] text-[12px] text-center rounded-md font-medium"
            >
              {service} X
            </div>
          ))}
        </div>

        <div>
          <p className="font-medium text-[14px]">Job Title</p>
          <input
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            placeholder="Job Title"
            className="w-full p-5 border border-[#ACACAC] rounded-md mt-5"
            required
          />
        </div>

        <div>
          <p className="font-medium text-[14px]">Job Description</p>
          <textarea
            name="jobDescription"
            value={formData.jobDescription}
            onChange={handleChange}
            placeholder="Describe the job in detail"
            className="w-full p-3 h-32 rounded-md resize-none border border-[#ACACAC] mt-5"
            required
          ></textarea>
        </div>

        <div className="flex items-center space-x-10 w-full">
          <div className="flex-1">
            <p className="font-medium text-[14px]">Start Date</p>
            <input
              name="startDate"
              type="date"
              value={formData.startDate}
              onChange={handleChange}
              className="w-full p-5 border border-[#ACACAC] rounded-md mt-5"
              required
            />
          </div>
          <div className="flex-1">
            <p className="font-medium text-[14px]">End Date</p>
            <input
              name="endDate"
              type="date"
              value={formData.endDate}
              onChange={handleChange}
              className="w-full p-5 border border-[#ACACAC] rounded-md mt-5"
              required
            />
          </div>
        </div>

        <div className="text-2xl font-semibold text-left">Payment</div>
        <span className="font-medium text-[14px]">
          Specify the amount to be paid for the job
        </span>

        <div className="flex items-center space-x-10 w-full">
          <div>
            <input
              name="payment.token"
              value={formData.payment.token}
              onChange={handleChange}
              placeholder="Token (e.g., USDC, ETH)"
              className="w-full p-5 border border-[#ACACAC] rounded-md mt-5"
              required
            />
          </div>
          <div>
            <input
              name="payment.amount"
              type="number"
              value={formData.payment.amount}
              onChange={handleChange}
              placeholder="Amount"
              className="w-full p-5 border border-[#ACACAC] rounded-md mt-5"
              required
            />
          </div>
        </div>

        <div className="text-2xl font-semibold text-left">Milestones</div>

        <div className="space-y-4">
          <input
            value={currentMilestone.header}
            onChange={(e) =>
              setCurrentMilestone({
                ...currentMilestone,
                header: e.target.value,
              })
            }
            placeholder="Milestone Header"
            className="w-full p-5 border border-[#ACACAC] rounded-md mt-5"
          />
          <textarea
            value={currentMilestone.body}
            onChange={(e) =>
              setCurrentMilestone({ ...currentMilestone, body: e.target.value })
            }
            placeholder="Milestone Description"
            className="w-full p-3 h-32 rounded-md resize-none border border-[#ACACAC] mt-5"
          ></textarea>
          <input
            type="date"
            value={currentMilestone.date}
            onChange={(e) =>
              setCurrentMilestone({ ...currentMilestone, date: e.target.value })
            }
            placeholder="Due Date"
            className="w-full p-5 border border-[#ACACAC] rounded-md mt-5"
          />
          <button
            type="button"
            onClick={handleMilestoneAdd}
            className="bg-gray-200 rounded-md px-4 py-2"
          >
            Add Milestone
          </button>
        </div>

        <div className="space-y-4">
          {formData.milestones.map((milestone, index) => (
            <div key={index} className="border p-4 rounded-md">
              <h3 className="font-bold">{milestone.header}</h3>
              <p>{milestone.body}</p>
              <p className="text-sm text-gray-500">Due: {milestone.date}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center cursor-pointer">
          <button
            className="bg-black rounded-2xl text-white p-1 w-[16rem]"
            type="submit"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}
