import React, { useState, useEffect } from "react";
import { User, School, Bus, UserCheck } from "lucide-react";
import Cloud from '../assets/countsvg.svg'

const CountItem = ({ icon: Icon, count, label }) => {
  const [currentCount, setCurrentCount] = useState(0);

  useEffect(() => {
    if (currentCount < count) {
      const timer = setTimeout(() => {
        setCurrentCount(prevCount => Math.min(prevCount + Math.ceil(count / 100), count));
      }, 10);
      return () => clearTimeout(timer);
    }
  }, [currentCount, count]);

  return (
    <div className="bg-[#0fbaf4] w-full max-w-[16rem] h-48 sm:h-64 sm:-mt-56 rounded-2xl sm:rounded-full flex flex-col items-center justify-center text-white mx-auto mb-6 sm:mb-0 transition-all duration-300 ease-in-out transform hover:scale-105">
      <div className="border-2 border-white border-dashed rounded-xl sm:rounded-full w-full h-full max-w-[14rem] sm:w-56 sm:h-56 flex flex-col items-center justify-center p-4">
        <Icon size={32} className="mb-2" />
        <div className="text-3xl sm:text-4xl font-bold mb-1">{currentCount}</div>
        <div className="text-xs sm:text-sm uppercase tracking-wider text-center px-2">{label}</div>
      </div>
    </div>
  );
};

function Counts() {
  const items = [
    { icon: User, count: 3468, label: "Total Students" },
    { icon: School, count: 896, label: "Class Rooms" },
    { icon: Bus, count: 275, label: "School Bus" },
    { icon: UserCheck, count: 180, label: "Total Teachers" },
  ];

  return (
    <div className="relative mt-8 sm:mt-[-200px] min-h-screen"> 
      <div className="relative">
        <div className="flex">
          <img src={Cloud} alt="" className="w-1/2" />
          <img src={Cloud} alt="" className="w-1/2" />
        </div>
        <div className="relative z-20 min-h-80 pt-12 sm:pt-44 w-full bg-[#0fbaf4]">
          <div className="px-4 lg:px-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
              {items.map((item, index) => (
                <div key={index} className="flex justify-center">
                  <CountItem {...item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counts;