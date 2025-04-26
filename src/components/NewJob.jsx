export default function NewJob() {
  return (
    <div className="flex justify-center my-20 px-4">
      <form className="bg-white p-6 md:p-8 rounded-lg shadow-md space-y-6 w-full max-w-4xl">
        <div className="text-2xl font-semibold text-left">Description</div>

        <div>
          <p className="font-medium text-[14px]">
            What talent are you looking for?
          </p>
          <input
            placeholder="What services will you be offering?"
            className="w-full p-5  border border-[#ACACAC] rounded-md  mt-5"
          />
        </div>

        <div className="flex items-center space-x-2">
          <div className="p-1 bg-black text-white w-[9rem] text-[12px] text-center rounded-md	font-medium">
            Product Designer X
          </div>
          <div className=" text-[12px] text-center rounded-md	font-medium">
            Add New Tag
          </div>
        </div>

        <div>
          <p className="font-medium text-[14px]">Job Title</p>
          <input
            placeholder="Job Title"
            className="w-full p-5  border border-[#ACACAC] rounded-md  mt-5"
          />
        </div>

        <div>
          <p className="font-medium text-[14px]">Job Description</p>
          <textarea
            placeholder="What services will you be offering?"
            className="w-full p-3 h-32 rounded-md resize-none border border-[#ACACAC] mt-5"
          ></textarea>
        </div>

        <div className="flex items-center space-x-10 w-full">
          <div className="flex-1">
            <p className="font-medium text-[14px]">Start Date</p>
            <input
              placeholder="Job Title"
              className="w-full p-5 border border-[#ACACAC] rounded-md mt-5"
            />
          </div>
          <div className="flex-1">
            <p className="font-medium text-[14px]">End Date</p>
            <input
              placeholder="Job Title"
              className="w-full p-5 border border-[#ACACAC] rounded-md mt-5"
            />
          </div>
        </div>

        <div className="text-2xl font-semibold text-left">Payment</div>
        <span className="font-medium text-[14px]">
          Specify the amount to be paid for the job
        </span>

        <div className="flex items-center space-x-10 w-full">
          <br />
          <div>
            <input
              placeholder="Token"
              className="w-full p-5 border border-[#ACACAC] rounded-md mt-5"
            />
          </div>
          <div>
            <input
              placeholder="Amount"
              className="w-full p-5 border border-[#ACACAC] rounded-md mt-5"
            />
          </div>
        </div>

        <div className="flex items-center space-x-10 w-full">
          <div className="flex-1">
            <div className="text-2xl font-semibold text-left">Milestone 1</div>

            <input
              placeholder="Header"
              className="w-full p-5  border border-[#ACACAC] rounded-md  mt-5"
            />

            <textarea
              placeholder="Body"
              className="w-full p-3 h-32 rounded-md resize-none border border-[#ACACAC] mt-5"
            ></textarea>
            <input
              placeholder="Date"
              className="w-full p-5  border border-[#ACACAC] rounded-md  mt-5"
            />
          </div>
          <div className="flex-1">
            <div className="text-2xl font-semibold text-left">Milestone 2</div>

            <input
              placeholder="Header"
              className="w-full p-5  border border-[#ACACAC] rounded-md  mt-5"
            />

            <textarea
              placeholder="Body"
              className="w-full p-3 h-32 rounded-md resize-none border border-[#ACACAC] mt-5"
            ></textarea>
            <input
              placeholder="Date"
              className="w-full p-5  border border-[#ACACAC] rounded-md  mt-5"
            />
          </div>
        </div>

        <div className="flex items-center space-x-10 w-full">
          <div className="flex-1">
            <div className="text-2xl font-semibold text-left">Milestone 3</div>

            <input
              placeholder="Header"
              className="w-full p-5  border border-[#ACACAC] rounded-md  mt-5"
            />

            <textarea
              placeholder="Body"
              className="w-full p-3 h-32 rounded-md resize-none border border-[#ACACAC] mt-5"
            ></textarea>
            <input
              placeholder="Date"
              className="w-full p-5  border border-[#ACACAC] rounded-md  mt-5"
            />
          </div>
          <div className="flex-1">
            <div className="text-2xl font-semibold text-left">Milestone 4</div>

            <input
              placeholder="Header"
              className="w-full p-5  border border-[#ACACAC] rounded-md  mt-5"
            />

            <textarea
              placeholder="Body"
              className="w-full p-3 h-32 rounded-md resize-none border border-[#ACACAC] mt-5"
            ></textarea>
            <input
              placeholder="Date"
              className="w-full p-5  border border-[#ACACAC] rounded-md  mt-5"
            />
          </div>
        </div>

        <div className="flex items-center justify-center  cursor-pointer">
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
