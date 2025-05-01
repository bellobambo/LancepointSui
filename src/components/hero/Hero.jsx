"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import ZKLogin from "@/lib/ZKlogin";

const Hero = () => {
  const profiles = [
    {
      id: 1,
      imgSrc: "/images/profile1.png",
      position: "top-0 left-1/2 -translate-x-1/2",
      size: "w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16",
    }, // Top center
    {
      id: 2,
      imgSrc: "/images/profile2.png",
      position: "top-1/4 left-1/2 translate-x-8",
      size: "w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16",
      isSelected: true,
    }, // Top right with blue border
    {
      id: 3,
      imgSrc: "/images/profile3.png",
      position: "top-1/3 right-0 -translate-x-4",
      size: "w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20",
    }, // Right side
    {
      id: 4,
      imgSrc: "/images/profile4.png",
      position: "bottom-1/4 right-1/4",
      size: "w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16",
    }, // Bottom right
    {
      id: 5,
      imgSrc: "/images/profile5.png",
      position: "bottom-0 left-1/2 -translate-x-1/3",
      size: "w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20",
    }, // Bottom
    {
      id: 6,
      imgSrc: "/images/profile6.png",
      position: "left-[10%] top-1/2",
      size: "w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14",
    }, // Left side
    {
      id: 7,
      imgSrc: "/images/profile7.png",
      position: "left-0 top-1/4",
      size: "w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18",
    }, // Left top
  ];

  // const profileRefs = useRef([]);

  // useEffect(() => {
  //   profileRefs.current = profileRefs.current.slice(0, profiles.length);

  //   profiles.forEach((profile, index) => {
  //     const element = profileRefs.current[index];
  //     if (!element) return;

  //     const radius = profile.orbit * 80;

  //     const animate = (timestamp) => {
  //       const angle = (timestamp / profile.speed + profile.startPosition) % 360;
  //       const radians = (angle * Math.PI) / 180;

  //       const x = Math.cos(radians) * radius;
  //       const y = Math.sin(radians) * radius;

  //       element.style.transform = `translate(${x}px, ${y}px)`;

  //       requestAnimationFrame(animate);
  //     };

  //     requestAnimationFrame(animate);
  //   });
  // }, [profiles]);

  return (
    <div className="relative flex items-center justify-between flex-col md:flex-row py-8 sm:py-12 bg-transparent min-h-[400px] sm:min-h-[500px]">
      {/* Main content */}
      <div className="max-w-xs sm:max-w-sm md:max-w-lg mb-20 md:mb-0">
        <h1 className="text-3xl text-center sm:text-left sm:text-4xl md:text-5xl font-bold leading-tight mb-4 sm:mb-6">
          Where Talent
          <br />
          Meets
          <br />
          Opportunity
        </h1>
        <p className="text-[16px] font-[600] text-center sm:text-left sm:text-base text-black my-10 sm:mb-8">
          Match with top talent or clients, submit your work with confidence,
          and get paid seamlessly, all in one platform
        </p>
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
          <ZKLogin />
        </div>
      </div>

      {/* Profile images floating around */}

      {/* <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex justify-center items-center"> */}
      {/* Concentric orbit rings - exactly as in reference image */}
      {/* <div className="absolute w-[160px] h-[160px] md:w-[200px] md:h-[200px] lg:w-[240px] lg:h-[240px] rounded-full border border-white/50"></div>
        <div className="absolute w-[320px] h-[320px] md:w-[380px] md:h-[380px] lg:w-[440px] lg:h-[440px] rounded-full border border-white/50"></div> */}

      {/* Play button */}
      {/* <button 
          className="absolute z-20 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-lg"
        >
          <div className="text-purple-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </button> */}

      {/* Profiles */}
      {/* {profiles.map((profile) => (
          <div 
            key={profile.id}
            className={`absolute ${profile.position} ${profile.size} rounded-full overflow-hidden z-10 ${profile.isSelected ? 'border-2 border-blue-400' : ''}`}
          >
            <Image 
              src={profile.imgSrc} 
              alt={`Profile ${profile.id}`} 
              layout="fill" 
              objectFit="cover"
            />
            {profile.isSelected && (
              <div className="absolute -bottom-6 left-0 w-full text-center text-xs text-blue-400">59 × 59</div>
            )}
          </div>
        ))} */}
      {/* </div> */}
    </div>
  );
};

export default Hero;
