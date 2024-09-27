import React from 'react'
import HeroImg from '../../assets/about1.jpg'
import { FiPhoneCall } from "react-icons/fi";

function About2() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 bg-white w-full min-h-screen'>
        <div className='col-span-1 flex flex-col justify-center text-center space-y-6 px-6 md:px-20 py-10 md:py-0'>
            <h1 className='text-3xl md:text-4xl font-bold'>About KidSchool</h1>
            <p className='text-xs md:text-sm'>
                Man face fruit divided seasons herb from herb moveth whose. Dominion gathered winged morning, man won’t had fly beginning. Light fruitful open voidwithout itselfSo fish under The given own etiam.
            </p>
            <p className='text-xs md:text-sm'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod and tempor incididunt ut labore et dolore. Creating Prissy expectant involuntarily limpet Our school. Lorem ipsum dolor sit amet, consectetur adcing elit Lorem ipsum dolor sit amet, consectetur adip iscing elit psum dolor sit amet. Aenean consectetur fringilla mi.
            </p>
            <div className='flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6 ml-0 md:ml-6'>
                <FiPhoneCall className='text-4xl md:text-5xl mt-2 text-red-600'/>
                <div className='flex flex-col px-0 md:px-3'>
                    <h2 className='text-sm flex justify-start font-thin'>Need help? Call us Now</h2>
                    <h1 className='text-2xl md:text-4xl text-red-600'>(+88) 12345 6789</h1>
                </div>
            </div>
        </div>
        <div className='col-span-1 flex justify-center items-center'>
            <img src={HeroImg} alt="" className='w-full h-auto object-cover' />
        </div>
    </div>
  )
}

export default About2
