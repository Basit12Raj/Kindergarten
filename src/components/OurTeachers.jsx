import React, { useState, useEffect } from 'react';
import { FaFacebook, FaSkype } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

import Teacher1 from '../assets/teacher1.jpg';
import Teacher2 from '../assets/teacher2.jpg';

const teachers = [
    {
        name: "LUCIA JONES",
        role: "Art teacher",
        description: "She is an American artist, her skills in teaching art are truly inspiring.",
        image: Teacher1
      },
      {
        name: "SANDREA",
        role: "Music teacher",
        description: "Coming from a musical family, Sandrea's passion for music is infectious.",
        image: Teacher2
      },
      {
        name: "LUCIA JONES",
        role: "Art teacher",
        description: "She is an American artist, her skills in teaching art are truly inspiring.",
        image: Teacher1
      },
      {
        name: "SANDREA",
        role: "Music teacher",
        description: "Coming from a musical family, Sandrea's passion for music is infectious.",
        image: Teacher2
      },
      {
        name: "LUCIA JONES",
        role: "Art teacher",
        description: "She is an American artist, her skills in teaching art are truly inspiring.",
        image: Teacher1
      },
      {
        name: "SANDREA",
        role: "Music teacher",
        description: "Coming from a musical family, Sandrea's passion for music is infectious.",
        image: Teacher2
      },
      
      
];

const TeacherCard = ({ teacher }) => (
  <div className='w-full max-w-[350px] mx-auto bg-white flex flex-col justify-center items-center p-4'>
    <div>
      <img src={teacher.image} alt={teacher.name} className='rounded-full w-32 h-32 object-cover border-2 border-dotted border-red-500 p-1' />
    </div>
    <div className='text-center px-4 py-6 space-y-3'>
      <h1 className='text-2xl'>{teacher.name} <span className='text-red-500'>/{teacher.role}</span></h1>
      <p className='font-thin text-lg'>{teacher.description}</p>
    </div>
    <div className='flex justify-center space-x-3'>
      <FaFacebook className='h-8 w-8 text-blue-600' />
      <FaSquareXTwitter className='h-8 w-8 text-red-400' />
      <FaSkype className='h-8 w-8 text-green-500' />
    </div>
  </div>
);

function OurTeachers() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavigation = (direction) => {
    if (direction === 'next') {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teachers.length);
    } else {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + teachers.length) % teachers.length);
    }
  };

  const visibleTeachers = isMobile 
    ? [teachers[currentIndex]] 
    : teachers.slice(currentIndex, currentIndex + 3); 

  return (
    <div className='bg-white py-16 px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col items-center pb-8'>
        <h1 className='text-3xl sm:text-4xl text-black font-extralight mb-4'>Meet Our Teachers</h1>
        <div className='w-20 h-1 bg-red-500'></div>
      </div>

      <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'} gap-8 mt-8 text-black`}>
        {visibleTeachers.map((teacher, index) => (
          <TeacherCard key={index} teacher={teacher} />
        ))}
      </div>

      {/* Navigation Controls */}
      <div className='flex justify-center items-center space-x-4 mt-8'>
        <button
          onClick={() => handleNavigation('prev')}
          // className='bg-red-500 text-white px-4 py-2 rounded-full'
          aria-label="Previous teacher"
        >
          
        </button>
        <div className='flex space-x-2'>
          {teachers.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full ${
                index === currentIndex ? 'bg-red-500' : 'bg-gray-300'
              }`}
              aria-label={`Go to teacher ${index + 1}`}
            />
          ))}
        </div>
        <button
          onClick={() => handleNavigation('next')}
          // className='bg-red-500 text-white  rounded-full'
          aria-label="Next teacher"
        >
          
        </button>
      </div>
    </div>
  );
}

export default OurTeachers;
