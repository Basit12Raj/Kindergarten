import React, { useState } from 'react';
import { ChevronDown, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import IMG1 from '../../assets/teacher1.jpg';
import IMG2 from '../../assets/teacher2.jpg';
import Road from "../../assets/road.png";

const teacherData = [
  { name: 'Charliebrown', role: 'Developer', image: IMG1, description: 'American computer scientist and mathematician, Professor Emeritus at Stanford University.' },
  { name: 'Jane Doe', role: 'Math Teacher', image: IMG2, description: 'Experienced mathematics educator with a passion for making complex concepts accessible.' },
  { name: 'John Smith', role: 'Science Instructor', image: IMG2, description: 'Innovative science teacher with a focus on hands-on experiments and practical applications.' },
  { name: 'Emily Johnson', role: 'English Professor', image: IMG1, description: 'Dedicated literature enthusiast with expertise in contemporary American fiction.' },
  { name: 'Michael Lee', role: 'History Teacher', image: IMG1, description: 'Engaging historian specializing in world civilizations and cultural studies.' },
  { name: 'Sarah Williams', role: 'Art Instructor', image: IMG2, description: 'Creative artist with a background in various mediums and art history.' },
  { name: 'David Brown', role: 'Physical Education', image: IMG2, description: 'Former athlete turned educator, promoting health and fitness for all ages.' },
  { name: 'Lisa Garcia', role: 'Music Teacher', image: IMG1, description: 'Accomplished musician teaching both classical and contemporary styles.' },
];

const TeacherCard = ({ name, role, description, image }) => (
  <div className="bg-white shadow-xl rounded-lg p-4 flex flex-col md:flex-row items-center md:items-start">
    <div className="w-40 h-40 md:w-64 md:h-64 flex-shrink-0 bg-gray-400 rounded-full mb-4 md:mb-0">
      <img src={image} alt={name} className="w-full h-full object-cover rounded-full" />
    </div>
    <div className="md:ml-8 flex-grow text-center md:text-left md:py-12">
      <h3 className="text-2xl md:text-3xl font-semibold text-purple-600">{name}</h3>
      <p className="text-sm text-gray-500 mb-1">{role}</p>
      <p className="text-lg md:text-xl font-thin mb-2">{description}</p>
      <div className="flex justify-center md:justify-start space-x-2 pt-4">
        <Facebook className="w-7 h-7 text-blue-600 cursor-pointer hover:text-blue-800" />
        <Twitter className="w-7 h-7 text-blue-400 cursor-pointer hover:text-blue-600" />
        <Linkedin className="w-7 h-7 text-blue-700 cursor-pointer hover:text-blue-900" />
        <Instagram className="w-7 h-7 text-pink-600 cursor-pointer hover:text-pink-800" />
      </div>
    </div>
  </div>
);

const TeacherSection = () => {
  const [visibleCards, setVisibleCards] = useState(6);
  const showMoreCards = () => {
    setVisibleCards(teacherData.length);
  };

  return (
    <>
      <div className="container mx-auto px-4 py-14 mt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teacherData.slice(0, visibleCards).map((teacher, index) => (
            <TeacherCard key={index} {...teacher} />
          ))}
        </div>
        {visibleCards < teacherData.length && (
          <div className="text-center mt-8">
            <button
              onClick={showMoreCards}
              className="bg-purple-600 text-white px-6 py-2 rounded-full flex items-center mx-auto hover:bg-purple-700 transition-colors"
            >
              See More <ChevronDown className="ml-2" />
            </button>
          </div>
        )}
      </div>
      {/* Road image */}
      <div className="relative flex">
        <img src={Road} alt="Road" className="w-full h-16 lg:h-24 bg-[#f1f5f9]" />
      </div>
    </>
  );
};

export default TeacherSection;