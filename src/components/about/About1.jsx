import React from 'react'
import HeroImg from '../../assets/about1.jpg'
import HeroSig from '../../assets/Signature.png'

function About1() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 bg-white w-full min-h-screen'>
        <div className='col-span-1 flex justify-center items-center'>
            <img src={HeroImg} alt="" className='w-full h-auto object-cover' />
        </div>
        <div className='col-span-1 flex flex-col justify-center text-center space-y-6 px-6 md:px-20 py-10 md:py-0'>
            <h1 className='text-3xl md:text-4xl font-bold'>About KidSchool</h1>
            <p className='text-xs md:text-sm'>
                Man face fruit divided seasons herb from herb moveth whose. Dominion gathered winged morning, man won’t had fly beginning. Light fruitful open voidwithout itselfSo fish under The given own etiam.
            </p>
            <p className='text-xs md:text-sm'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod and tempor incididunt ut labore et dolore. Creating Prissy expectant involuntarily limpet Our school. Lorem ipsum dolor sit amet, consectetur adcing elit Lorem ipsum dolor sit amet, consectetur adip iscing elit psum dolor sit amet. Aenean consectetur fringilla mi.
            </p>
            <div className='text-center flex justify-center pt-5'>
                <img src={HeroSig} alt="" className='w-32 h-auto md:w-fit md:h-fit'/>
            </div>
        </div>
    </div>
  )
}

export default About1
