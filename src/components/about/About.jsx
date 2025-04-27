const About = () => {
  return (
    <div className="py-12 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="inline-block mb-8 px-6 py-2 bg-transparent border border-black rounded-full shadow-sm">
          <h2 className="text-[20px] sm:text-[25px] font-medium">What is Lancepoint?</h2>
        </div>
        
        <h3 className="text-[30px] sm:text-[40px] sm:text-4xl font-bold mb-4">
          Your Freelance Career,<br />
          Supercharged by Web3 & AI
        </h3>
        
        <p className="text-black font-[500] text-[16px] sm:text-base max-w-3xl mx-auto">
        LancePoint is a next-generation freelancing platform designed for trust, speed, and global freedom. Built on blockchain, powered by AI, and integrated with seamless crypto-to-fiat systems, LancePoint bridges the gap between modern freelancing and future-forward technology.
        </p>
      </div>
    </div>
  );
};

export default About;