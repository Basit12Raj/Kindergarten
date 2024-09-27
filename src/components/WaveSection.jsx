import React from "react";
import Wave from "../assets/wave5.svg";
import Wave1 from "../assets/wave5.svg";
import { MdAbc } from "react-icons/md";
import { GrUserWorker } from "react-icons/gr";
import { ImEarth } from "react-icons/im";
import { BsCardText } from "react-icons/bs";
import RedStar1 from '../assets/redStar1.svg'
import Blue from '../assets/blue1.svg'
import Green from '../assets/green1.svg'
import Yellow from '../assets/yellow1.svg'

function WaveSection() {
  const features = [
    { icon: MdAbc, title: "ACTIVE LEARNING", description: "Full Day Program meets Monday through Friday. Operating hours are from 7am to 6pm.", image: Blue, hoverColor: "hover:text-blue-600" },
    { icon: GrUserWorker, title: "EXPERT TEACHERS", description: "We are situated in Hanoi with a half acre of private building with modern amenities & security guard.", image: RedStar1, hoverColor: "hover:text-red-600" },
    { icon: ImEarth, title: "STRATEGIC LOCATION", description: "We are situated in Hanoi with a half acre of private building with modern amenities & security guard.", image: Green, hoverColor: "hover:text-green-500" },
    { icon: BsCardText, title: "FULL DAY PROGRAMS", description: "Full Day Program meets Monday through Friday. Operating hours are from 7am to 6pm.", image: Yellow, hoverColor: "hover:text-yellow-500" },
  ];

  return (
    <div className="bg-transparent mt-8 md:mt-16 lg:-mt-48">
      <div className="flex">
        <img src={Wave} alt="" className="w-1/2" />
        <img src={Wave1} alt="" className="w-1/2" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-8 lg:px-16 py-8 lg:py-16">
        {features.map((feature, index) => (
          <div key={index} className="relative pb-9 h-[400px] flex flex-col items-center justify-center">
            <img
              src={feature.image}
              alt=""
              className="w-full h-full object-cover -mb-12"
            />
            <feature.icon className="absolute text-white z-10 text-4xl sm:text-5xl top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            <div className="text-center mb-24 px-4">
              <h1 className={`text-xl sm:text-2xl text-black ${feature.hoverColor}`}>{feature.title}</h1>
              <p className="mt-2 text-sm">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WaveSection;