import React from "react";

const LiveGigs = () => {
  return (
    <div>
      <div className="flex justify-center mt-20 mb-10 px-4">
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md space-y-6 w-full max-w-4xl">
          <div className="text-2xl font-semibold text-left">Job Review</div>
          <div className="text-2xl font-semibold text-left">
            Responsive Design Enhancement
          </div>

          <div>
            <p className="font-medium text-[12px] text-black">
              As a frontend developer, I excel in crafting immersive digital
              experiences through responsive web development and intuitive UI
              design. My focus on cross-browser compatibility, accessibility,
              and performance optimization ensures that websites are both
              visually appealing and functional. Collaborating closely with
              designers and backend developers, I deliver cohesive frontend
              solutions that exceed client expectations.
            </p>
          </div>

          <div className="text-[16px] font-bold text-left">Jane Doe</div>

          <div className="flex items-center space-x-2">
            <div className="p-2 bg-black text-white w-[12rem] rounded-sm text-[12px] text-center font-semibold">
              Mobile Responsiveness
            </div>

            <div className="p-2  bg-[#2A4A2B]  text-[#61FF00] w-[9rem] text-[12px] text-center font-semibold rounded-sm">
              95 jobs completed
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <textarea
              rows={10}
              className="w-full border border-black p-3 rounded-md"
            />
          </div>

          <div className="flex items-start flex-col  space-y-2">
            <div className="  font-bold text-[16px]">Star Rating</div>
          </div>

          <div className="flex items-center  justify-center flex-col  space-y-2">
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
    </div>
  );
};

export default LiveGigs;
