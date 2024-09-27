import React from "react";
import IMG from "../assets/OurActivaties1.png";

function OurActivities() {
  return (
    <div className="min-h-screen text-black mt-8">
      <h1 className="flex justify-center text-center text-4xl font-bold py-10">
        Our Activities
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 md:px-28 w-full">
        {/* Column 1 */}
        <div className="space-y-4 mt-6 md:mt-20">
          <div className="h-40 w-full bg-white shadow-md rounded-lg hover:bg-[#0fbaf4] text-gray-800 hover:text-white transition duration-300">
            <div className="space-y-2 px-6 py-9">
              <h1 className="text-xl font-semibold">CREATIVE ACTIVITIES</h1>
              <p className="text-sm">Help developing your child's creativity.</p>
              <h1 className="text-start">read more ...</h1>
            </div>
          </div>
          <div className="h-40 w-full bg-white shadow-md rounded-lg hover:bg-[#f96a9a] text-gray-800 hover:text-white transition duration-300">
            <div className="space-y-2 px-6 py-9">
              <h1 className="text-xl font-semibold">CREATIVE ACTIVITIES</h1>
              <p>Help developing your child's creativity.</p>
              <h1 className="text-start">read more ...</h1>
            </div>
          </div>
        </div>

        {/* Column 2 (Hidden on small screens) */}
        <div className="hidden md:flex justify-center -mx-16 z-20">
          <div className="rounded-full border-2 border-dashed border-black bg-white">
            <img src={IMG} alt="Our Activities" className="px-8 py-8" />
          </div>
        </div>

        {/* Column 3 */}
        <div className="space-y-4 mt-6 md:mt-20">
          <div className="h-40 w-full bg-white shadow-md rounded-lg hover:bg-[#f9b001] text-gray-800 hover:text-white transition duration-300">
            <div className="space-y-2 px-6 py-9 ml-0 md:ml-14">
              <h1 className="text-xl font-semibold">CREATIVE ACTIVITIES</h1>
              <p>Help developing your child's creativity.</p>
              <h1 className="text-start">read more ...</h1>
            </div>
          </div>
          <div className="h-40 w-full bg-white shadow-md rounded-lg hover:bg-[#43cd66] text-gray-800 hover:text-white transition duration-300">
            <div className="space-y-2 px-6 py-9 ml-0 md:ml-14">
              <h1 className="text-xl font-semibold">CREATIVE ACTIVITIES</h1>
              <p>Help developing your child's creativity and skills.</p>
              <h1 className="text-start">read more ...</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurActivities;
