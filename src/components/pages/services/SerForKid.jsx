import React from 'react'
import SVG1 from '../../../assets/aboutsvg1.svg'
import SVG2 from '../../../assets/aboutsvg2.svg'
import SVG3 from '../../../assets/aboutsvg3.svg'
import Icon1 from '../../../assets/svgicon1.png'
import Icon2 from '../../../assets/svgicon2.png'
import Icon3 from '../../../assets/svgicon3.png'
import { PiFlowerLotusThin } from "react-icons/pi";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FiAward } from "react-icons/fi";

const ServiceCard = ({id, svg, iconPng, title})=>{
    return(
        <div className='max-w-sm px-10 py-8 mt-10'>
            <div className='relative flex justify-center items-center  '>
                <img src={svg} alt={id} className='w-60 h-60 relative' />
                <img src={iconPng} alt={id} className='absolute w-16 h-16 text-black' />
                {/* <FiAward  className='absolute h-14 w-14 '/> */}
            </div>

            <div className='flex flex-col justify-center mt-1'>
                <h1 className='text-center text-xl text-[#56509f]'>{title}</h1>
                <div className='flex justify-center text-green-400'>
                <PiFlowerLotusThin className='' />
                </div>
                <p className='text-center mt-3 font-extralight'>
                Man face fruit divided seasons herb from herb moveth whose. Dominion gather winged morning man won’t</p>
                <div className='flex justify-center text-red-600 mt-3 '>
                <FaLongArrowAltRight className='' />
                </div>
            </div>

        </div>
    )
}

function SerForKid() {

    const ServiceData = [
        {
            id: 1,
            svg: SVG1,
            iconPng: Icon1,
            title: "Sport Games",
        },
        {
            id: 2,
            svg: SVG2,
            iconPng: Icon2,
            title: "Sport Games",
        },
        {
            id: 3,
            svg: SVG3,
            iconPng: Icon3,
            title: "Sport Games",
        },
        {
            id: 4,
            svg: SVG1,
            iconPng: Icon1,
            title: "Sport Games",
        },
        {
            id: 5,
            svg: SVG2,
            iconPng: Icon2,
            title: "Sport Games",
        },
        {
            id: 6,
            svg: SVG3,
            iconPng: Icon3,
            title: "Sport Games",
        },
    ]



  return (
    
    <div className='min-h-screen px-16'>
        <h1 className='text-4xl flex justify-center pt-20'>Services for KidSchool</h1>
        <p className='text-sm flex justify-center mt-4'>Man face fruit divided seasons herb from herb moveth whose. Dominion </p>
        <p className='text-sm flex justify-center '>gathered winged morning, man won’t had fly beginning</p>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
            {ServiceData.map((card)=>(
                <ServiceCard key={card.id} {...card}/>
            ))}
        </div>
    </div>
    
  )
}

export default SerForKid