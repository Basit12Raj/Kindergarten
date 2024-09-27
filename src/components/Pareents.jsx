import React, { useState, useEffect } from 'react'
import Phool from '../assets/phool.png';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import IMG1 from '../assets/3.jpg'
import IMG2 from '../assets/5.jpg'
import IMG3 from '../assets/6.jpg'

const testimonials = [
    { id: 1, name: 'John Doe', role: 'Designer 1', image: IMG1, text: 'A data analyst collects, processes, and interprets large datasets to help organizations make informed decisions' },
    { id: 2, name: 'Jane Smith', role: 'Developer', image: IMG2, text: 'A data scientist leverages advanced algorithms, statistical models, and machine learning to extract valuable insights from complex datasets' },
    { id: 3, name: 'MIA WATSON 2', role: 'Designer 2', image: IMG3, text: 'This is my first time to consult in this hospital and I\'m lucky I got a perfect doctor who takes care of me since day one of my consultation, until the day of my surgery.' },
    { id: 4, name: 'Alice Johnson', role: 'Manager', image: IMG1, text: 'A musician expresses emotions and stories through melodies, harmonies, and rhythms, creating memorable auditory experiences.' },
    { id: 5, name: 'Bob Brown', role: 'Analyst', image: IMG3, text: 'Their role involves understanding user needs, sketching ideas, and refining them into polished designs that communicate the intended message effectively' },
];

function Parents() {
    const [currentIndex, setCurrentIndex] = useState(2);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const nextTestimonial = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }
    };

    const prevTestimonial = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
        }
    };

    useEffect(() => {
        if (isTransitioning) {
            const timer = setTimeout(() => setIsTransitioning(false), 300);
            return () => clearTimeout(timer);
        }
    }, [isTransitioning]);

    const getVisibleTestimonials = () => {
        const prev = (currentIndex - 1 + testimonials.length) % testimonials.length;
        const next = (currentIndex + 1) % testimonials.length;
        return [prev, currentIndex, next];
    };

    return (
        <div className='bg-white py-8 sm:py-16 mt-8 mb-8'>
            <div className="flex flex-col justify-center text-center mb-8 sm:mb-12 space-y-4 px-4">
                <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-800">What Parents Say</h1>
                <div className="flex justify-center">
                    <img src={Phool} alt="" className="h-4 sm:h-6 w-fit" />
                </div>
                <p className="text-xs sm:text-sm max-w-2xl mx-auto text-gray-600">
                    Hear from our satisfied parents about their experiences with our school and teachers.
                </p>
            </div>

            <div className="relative flex flex-col items-center justify-center py-3 px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center w-full mb-6 sm:mb-8 h-32 sm:h-40 relative">
                    {getVisibleTestimonials().map((index, i) => (
                        <div
                            key={testimonials[index].id}
                            className={`absolute transition-all duration-300 ease-in-out ${
                                i === 0 ? '-translate-x-8 sm:-translate-x-16 scale-75 opacity-50' :
                                i === 1 ? 'z-10' :
                                'translate-x-8 sm:translate-x-16 scale-75 opacity-50'
                            }`}
                            style={{transform: `translateX(${(i - 1) * (window.innerWidth < 640 ? 50 : 100)}px) scale(${i === 1 ? 1 : 0.75})`}}
                        >
                            <img
                                src={testimonials[index].image}
                                alt={testimonials[index].name}
                                className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-full shadow-lg"
                            />
                        </div>
                    ))}
                </div>

                <div className="text-center max-w-md px-4 h-40 sm:h-48 flex flex-col justify-start">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">{testimonials[currentIndex].name}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">{testimonials[currentIndex].role}</p>
                    <p className="text-xs sm:text-sm text-gray-700 italic">{testimonials[currentIndex].text}</p>
                </div>

                <button 
                    onClick={prevTestimonial} 
                    className="absolute left-2 sm:left-20 top-1/2 transform -translate-y-1/2 bg-white p-1 sm:p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200 disabled:opacity-50"
                    disabled={isTransitioning}
                >
                    <ChevronLeft className="w-6 h-6 sm:w-10 sm:h-10 text-gray-600" />
                </button>
                <button 
                    onClick={nextTestimonial} 
                    className="absolute right-2 sm:right-20 top-1/2 transform -translate-y-1/2 bg-white p-1 sm:p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200 disabled:opacity-50"
                    disabled={isTransitioning}
                >
                    <ChevronRight className="w-6 h-6 sm:w-10 sm:h-10 text-gray-600" />
                </button>
            </div>
        </div>
    )
}

export default Parents