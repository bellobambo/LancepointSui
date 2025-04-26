export default function NewJob() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-6">
        <div className="text-2xl font-semibold text-center">
          Job Application
        </div>

        <div>
          <textarea
            placeholder="What services will you be offering?"
            className="w-full p-3 h-32 border border-black rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-black"
          ></textarea>
        </div>
      </form>
    </div>
  );
}
