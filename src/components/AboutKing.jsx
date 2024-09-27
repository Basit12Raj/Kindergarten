import React from 'react'
import Child from '../assets/CirclesIMG.jpg'
import { Star } from 'lucide-react';

function AboutKing() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <div className="order-1 lg:order-1">
          <div className="flex justify-center lg:justify-start">
            <img src={Child} alt="Kindergarten" className="w-full max-w-md rounded-lg " />
          </div>
        </div>
        <div className="order-2 lg:order-2">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <h2 className="text-3xl font-bold text-blue-900 mb-2">About Kindergarten</h2>
            <div className="flex items-center mb-4">
              <div className="h-px bg-pink-300 flex-grow"></div>
              <svg className="w-6 h-6 mx-2 text-pink-300" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L7 12 2 7l10 5 10-5-5 5z" />
              </svg>
              <div className="h-px bg-pink-300 flex-grow"></div>
            </div>
           
            <p className="text-gray-600 mb-6">
              All our preschools have all-weather indoor play areas, an art studio or an atelier,
              technology corners and much else; and most have outdoor play spaces and even
              swimming pools specifically for the younger ones. Our programs ensure that
              children in our care everywhere have access to the highest quality of international.
            </p>
           
            <ul className="space-y-2 mb-6">
              {[
                'Individual attention in a small-class setting',
                'Educational field trips and school presentations',
                'Positive learning environment for your child'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <Star className="w-5 h-5 text-pink-400 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
           
            <button className="w-full sm:w-auto px-6 py-2 border-2 border-pink-400 text-pink-400 rounded-full hover:bg-pink-400 hover:text-white transition-colors duration-300">
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutKing