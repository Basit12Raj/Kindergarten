import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from '../../assets/teacher1.jpg';
import img2 from '../../assets/teacher2.jpg';
import Road from '../../assets/road.png';
import Gaddi1 from '../../assets/gaddi1.png';

// Teacher data
const teacherData = [
  { name: 'Sarah Smith', role: 'Head Teacher', image: img1 },
  { name: 'Kate Mangos', role: 'Head Teacher', image: img2 },
  { name: 'Starline Lara', role: 'Head Teacher', image: img1 },
  { name: 'Tom Vivash', role: 'Head Teacher', image: img2 },
  { name: 'John Doe', role: 'Math Teacher', image: img1 },
  { name: 'Jane Smith', role: 'Science Teacher', image: img2 },
  { name: 'Mike Johnson', role: 'English Teacher', image: img1 },
  { name: 'Emily Brown', role: 'History Teacher', image: img1 },
  { name: 'Chris Lee', role: 'PE Teacher', image: img2 },
  { name: 'Anna White', role: 'Art Teacher', image: img2 },
];

// Component to display each teacher
const TeacherCard = ({ name, role, image }) => (
  <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md pt-10">
    <img src={image} alt={name} className="w-40 h-40 sm:w-52 sm:h-52 rounded-full mb-4 object-cover" />
    <h3 className="text-md sm:text-lg font-semibold">{name}</h3>
    <p className="text-xs sm:text-sm text-gray-600">{role}</p>
  </div>
);

const TeacherProfiles = () => {
  const [index, setIndex] = useState(0);

  // Handlers for navigation
  const goPrev = () => setIndex(index > 0 ? index - 1 : 0);
  const goNext = () => setIndex(index < teacherData.length - 3 ? index + 1 : index);

  return (
    <>
      <div className="container mx-auto px-4 py-8 mt-60 w-full">
        <h2 className="text-3xl sm:text-5xl font-bold text-center mb-6 sm:mb-8">Our Teachers</h2>
        <p className="text-sm sm:text-xl font-thin text-center mb-6">
          Man face fruit divided seasons herb from herb moveth whose. Dominion gathered winged morning, man won’t had fly beginning.
        </p>

        <div className="flex justify-between items-center">
          {/* Previous Button */}
          <button
            onClick={goPrev}
            className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full disabled:opacity-50"
            disabled={index === 0}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Carousel */}
          <div className="flex space-x-4 overflow-hidden w-full justify-center">
            {/* Show 1 teacher profile on small screens and 3-4 on larger screens */}
            {teacherData.slice(index, index + (window.innerWidth < 640 ? 1 : 4)).map((teacher, idx) => (
              <TeacherCard key={idx} {...teacher} />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={goNext}
            className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full disabled:opacity-50"
            disabled={index >= teacherData.length - (window.innerWidth < 640 ? 1 : 4)}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* View All Button */}
        <div className="mt-8 text-center">
          <button className="px-6 sm:px-10 py-2 bg-pink-400 text-white rounded-full hover:bg-pink-500">
            VIEW ALL
          </button>
        </div>
      </div>

      {/* Road and Gaddi Section */}
      <div className="relative flex mt-8">
        {/* Gaddi Image */}
        <div className="absolute -top-16 right-8 hidden lg:block">
          <img src={Gaddi1} alt="Gaddi1" className="w-[350px]" />
        </div>

        {/* Road Image */}
        <img src={Road} alt="Road" className="w-full h-12 sm:h-16 lg:h-24 z-10" />
      </div>
    </>
  );
};

export default TeacherProfiles;
