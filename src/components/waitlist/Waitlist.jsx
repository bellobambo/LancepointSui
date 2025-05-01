import Image from 'next/image';

const Waitlist = () => {
  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Left column - Image */}
        <div className="hidden md:block">
          <div className="relative w-full h-96">
            <Image 
              src="/images/contact.png" 
              alt="Freelancer working on laptop"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
        
        {/* Right column - Form */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Join the waitlist</h2>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-black text-white rounded-lg py-3 font-medium hover:bg-gray-800 transition duration-300 mt-4"
            >
              Join
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Waitlist;
