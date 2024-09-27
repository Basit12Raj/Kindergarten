import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Img from '../assets/heroImg.png'
import Arrow from '../assets/HeroArrow.png'
import Star from '../assets/HeroStar.png'
import Flower from '../assets/HeroFlower.png'

const contents = [
  {
    heading1: "Play & Learn How to",
    heading2: "Create New Things",
    paragraph: "Get your kids excited about discovering something new by disguising the learning activities as fun time."
  },
  {
    heading1: "Explore & Discover",
    heading2: "Exciting Adventures",
    paragraph: "Embark on a journey of creativity and innovation with our interactive learning experiences."
  }
];

const imageVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const ContentBlock = ({ content }) => (
  <motion.div
    key={content.heading1}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
  >
    <div className='text-4xl lg:text-6xl font-bold text-center text-gray-800 py-6 lg:py-9'>
      <h1 className=''>{content.heading1}</h1>
      <h1 className='lg:text-start lg:ml-11 mt-3'>{content.heading2}</h1>
    </div>
    <p className='text-gray-600 text-center brightness-75 text-lg lg:text-xl font-thin px-4 lg:px-0'>
      {content.paragraph}
    </p>
  </motion.div>
);

function HeroSection() {
  const [contentIndex, setContentIndex] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setContentIndex((prevIndex) => (prevIndex + 1) % contents.length);
      setKey(prevKey => prevKey + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className="min-h-screen bg-[#c7d7e5] flex flex-col lg:flex-row pt-11">
      <div className='w-full lg:w-1/2 pt-16 lg:pt-64 space-y-8 lg:space-y-11 px-4 lg:ml-10'>
        <motion.img 
          key={`arrow-${key}`}
          src={Arrow} 
          alt="" 
          className='hidden lg:block lg:ml-72 lg:-mt-52 lg:mb-24' 
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        />
        <AnimatePresence mode="wait">
          <ContentBlock content={contents[contentIndex]} key={contentIndex} />
        </AnimatePresence>
        <div className='flex justify-center lg:justify-start'>
          <button className='bg-[#f86a9a] text-white py-3 px-10 rounded-full hover:bg-blue-700 transition duration-300'>
            Discover More
          </button>
        </div>
      </div>
      <div className='hidden lg:block lg:w-1/2 lg:mt-64 lg:-ml-40'>
        <div className='lg:-mt-56 lg:ml-64'>
          <motion.img 
            key={`star-${key}`}
            src={Star} 
            alt="" 
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.img 
            key={`flower-${key}`}
            src={Flower} 
            alt="" 
            className='ml-48 -mt-32'
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          />
        </div>
        <img src={Img} alt="" className='h-fit w-full lg:-mt-32' />
      </div>
    </div>

    </>
  )
}

export default HeroSection