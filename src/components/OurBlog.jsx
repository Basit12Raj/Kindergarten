import React from 'react'
import Class1 from "../assets/class1.jpg";
import Class2 from "../assets/class2.jpg";
import Class3 from "../assets/class3.jpg";
import Phool from '../assets/phool.png';
import { FaStreetView, FaRegHeart } from "react-icons/fa";
import Cloud from '../assets/countsvg.svg'

function OurBlog() {
    const classData = [
        { id: 1, image: Class1, title: "8 ways to keep your heart forever", Paragraph: "Heart disease is the leading cause of death for both men and", price: "27 DEC" },
        { id: 2, image: Class2, title: "How Drugs Alter The Brain Effcet", Paragraph: "Drugs interfere with the way neurons send, receive, and process signals", price: "30 DEC" },
        { id: 3, image: Class3, title: "Red-Green Colour Blindness rudeness", Paragraph: "Heart disease is the leading cause of death for both men and", price: "12 JAN" },
      ];
  return (
    <div className=" px-4 sm:px-6 lg:px-8 py-12 bg-[#a0e9ff]">
    <div className="flex flex-col justify-center text-center mb-12 space-y-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Our Blog</h1>
        <div className="flex justify-center">
          <img src={Phool} alt="" className="h-6 w-fit" />
        </div>
        <p className="text-sm max-w-2xl mx-auto">
        This is where we show you all the amazing news about our pupils, our teachers, happening and upcoming events,....
        </p>
      </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {classData.map((classItem) => (
        <div key={classItem.id} className="flex justify-center">
          <div className="w-full max-w-sm bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:bg-red-400 hover:text-white group">
            <div className="relative">
              <div className="overflow-hidden h-56">
                <img
                  src={classItem.image}
                  alt={classItem.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white text-center rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
                <p className="text-sm font-semibold text-red-400 group-hover:text-red-400">{classItem.price}</p>
              </div>
            </div>
            <div className="p-6 text-center pt-14">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">
                {classItem.title}
              </h2>
              <p className="text-sm mb-6">
              {classItem.Paragraph}
              </p>
              <div className="grid grid-cols-3 gap-4  font-semibold">
                <div className='flex space-x-2'>
                  <FaStreetView className='text-xl mt-1 text-blue-500' />
                  <span className='text-xl font-thin hover:text-black'>Things</span>
                </div>
                <div className='flex space-x-2'>
                <FaRegHeart className='text-xl mt-1 text-blue-500' />
                <span className='text-xl font-thin hover:text-black'>Things</span>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default OurBlog