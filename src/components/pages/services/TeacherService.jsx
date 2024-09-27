import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from '../../../assets/teacher1.jpg'
import img2 from '../../../assets/teacher2.jpg'
import Road from "../../../assets/road.png";



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
  <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md pt-14">
    <img src={image} alt={name} className="w-52 h-52 rounded-full mb-4" />
    <h3 className="text-lg font-semibold">{name}</h3>
    <p className="text-sm text-gray-600">{role}</p>
  </div>
);

const TeacherProfile = () => {
  const [index, setIndex] = useState(0);

  // Handlers for navigation
  const goPrev = () => setIndex(index > 0 ? index - 1 : 0);
  const goNext = () => setIndex(index < teacherData.length - 4 ? index + 1 : index);

  return (
    <>
    <div className="container mx-auto px-4 py-8 mt-60 min-h-screen w-full">
      <h2 className="text-5xl font-bold text-center mb-8">Our Teachers</h2>
      <h2 className="text-xl font-thin text-center ">Man face fruit divided seasons herb from herb moveth whose.</h2>
      <h2 className="text-sm font-thin text-center mb-8"> Dominion gathered winged morning, man won’t had fly beginning</h2>

      <div className="flex justify-between items-center">
        <button
          onClick={goPrev}
          className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full"
          disabled={index === 0}
        >
          <ChevronLeft size={24} />
        </button>

        <div className="flex space-x-4 overflow-hidden">
          {teacherData.slice(index, index + 4).map((teacher, idx) => (
            <TeacherCard key={idx} {...teacher} />
          ))}
        </div>

        <button
          onClick={goNext}
          className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full"
          disabled={index >= teacherData.length - 4}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="mt-8 text-center">
        <button className="px-10 py-2 bg-pink-400 text-white rounded-full hover:bg-pink-500">
          VIEW ALL
        </button>
      </div>
    </div>

    {/* gaddi */}
    <div className="relative flex">
       
        {/* Second image (Road) spans the full width */}
        <img src={Road} alt="Road" className="w-full h-16 lg:h-24 z-10" />
      </div>


    </>

    
  );
};

export default TeacherProfile;
