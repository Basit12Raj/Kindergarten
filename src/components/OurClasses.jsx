import React from "react";
import Class1 from "../assets/class1.jpg";
import Class2 from "../assets/class2.jpg";
import Class3 from "../assets/class3.jpg";
import Phool from '../assets/phool.png';

function OurClasses() {
  const classData = [
    { id: 1, image: Class1, title: "PAINTING CLASS FOR YOUNG CHILDREN", price: "$15/month" },
    { id: 2, image: Class2, title: "MUSIC CLASS FOR TODDLERS", price: "$20/month" },
    { id: 3, image: Class3, title: "DANCE CLASS FOR KIDS & MORE", price: "$18/month" },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Our Classes</h1>
        {/* <img src={Phool} alt="Decorative Flower" className="mx-auto w-8 h-8 sm:w-32" /> */}
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
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard...
                </p>
                <div className="grid grid-cols-3 gap-4 text-sm font-semibold">
                  <div>
                    <p>2-5</p>
                    <span>Years Old</span>
                  </div>
                  <div>
                    <p>22</p>
                    <span>Class Size</span>
                  </div>
                  <div>
                    <p>4 skills</p>
                    <span>Educators</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurClasses;