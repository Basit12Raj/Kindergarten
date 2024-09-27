import React from "react";
import Phool from "../assets/phool.png";
import Choose from "../assets/Choise1.png";
import Choose1 from '../assets/Choose2.png'
import Choose2 from '../assets/choose3.png'
import Choose3 from '../assets/choose4.png'

function ChooseCard({ image, title, description, iconBgColor, rounded = false }) {
  return (
    <div className="max-w-xs mx-auto p-4 bg-white rounded-lg text-center">
      <div className={`relative border-2 border-dotted border-black transform ${rounded ? '-rotate-6 rounded-full' : '-rotate-6'}`}>
        <img
          src={image}
          alt={title}
          className={`shadow-lg px-3 py-3 ${rounded ? 'rounded-full' : 'rounded-lg'}`}
        />
        <div className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 ${iconBgColor} p-2 rounded-full`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </div>
      </div>
      <h3 className="text-lg font-bold text-blue-900 mt-6">{title}</h3>
      <p className="text-gray-700 mt-2">{description}</p>
    </div>
  );
}

function ChooseUs() {
  return (
    <div className="min-h-screen w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-center text-center mb-12 space-y-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Why choose us</h1>
        <div className="flex justify-center">
          <img src={Phool} alt="" className="h-6 w-fit" />
        </div>
        <p className="text-sm max-w-2xl mx-auto">
          We have strict criteria when selecting our teachers; they must be
          native English speakers with higher degrees and, most importantly,
          a passion for teaching.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <ChooseCard
          image={Choose}
          title="GREAT TEACHERS"
          description="Rewarding task of instructing young children between the ages of 5 and 6 years old"
          iconBgColor="bg-green-500"
        />
        <ChooseCard
          image={Choose1}
          title="DELICIOUS MEALS"
          description="Healthy meals with balanced nutrition and suitable for each child."
          iconBgColor="bg-blue-500"
          rounded={true}
        />
        <ChooseCard
          image={Choose2}
          title="EXCELLENT PROGRAMMES"
          description="The stories, games, quizzes, and worksheets given here are great ways for lessons."
          iconBgColor="bg-red-500"
        />
        <ChooseCard
          image={Choose3}
          title="SATISFIED PARENTS"
          description="Parents are more satisfied with our service and teachers when they choose us."
          iconBgColor="bg-green-500"
          rounded={true}
        />
      </div>
    </div>
  );
}

export default ChooseUs;