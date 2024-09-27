import React from 'react'
import IMG1 from '../../../assets/blog1.jpg'
import SVG1 from '../../../assets/aboutsvg1.svg'
import ProImage from '../../../assets/teacher1.jpg'
import { MdAvTimer } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import Road from "../../../assets/road.png";

const EventCard = ({ id, image, title, time, location, proImg, author, role, svgImg }) => {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg mt-10'>
      <div className='relative'>
        <img src={image} alt={id} className='w-full h-full object-cover transform transition-transform duration-300 hover:scale-110' />
        <div className='absolute top-0 left-0 '>
          <img src={svgImg} alt={id} className='w-28 h-28 inline-block top-0 left-0  relative ' />
          <span className='text-xs font-bold text-white absolute top-12 left-9 '>21March</span>
        </div>
      </div>
      <div className='p-4'>
        <h1 className='text-2xl text-blue-500 font-medium text-start mb-2'>{title}</h1>
        <h2 className='text-lg font-extralight flex '><MdAvTimer className='text-red-500 mt-1 mr-2' />{time}</h2>
        <h3 className='text-lg font-thin mb-4 flex'><CiLocationOn className='text-red-500 mt-1 mr-2' />{location}</h3>
        <div className='flex items-center ml-3'>
          <img src={proImg} alt={id} className='w-12 h-12 rounded-full mr-4' />
          <div>
            <h1 className='text-red-400'><span className='text-gray-500'>By</span> {author}</h1>
            <h2 className='text-lg'>{role}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

function AllEvents() {
  const allEvents = [
    {
      id: 1,
      image: IMG1,
      title: "The biggest children dental care event of this year",
      time: "05 pm - 05 pm",
      location: "Vancouver, Canada",
      proImg: ProImage,
      author: "Thang",
      role: "General Developer",
      svgImg: SVG1
    },
    {
      id: 2,
      image: IMG1,
      title: "The biggest children dental care event of this year",
      time: "05 pm - 05 pm",
      location: "Vancouver, Canada",
      proImg: ProImage,
      author: "Thang",
      role: "General Developer",
      svgImg: SVG1
    },
    {
      id: 3,
      image: IMG1,
      title: "The biggest children dental care event of this year",
      time: "05 pm - 05 pm",
      location: "Vancouver, Canada",
      proImg: ProImage,
      author: "Thang",
      role: "General Developer",
      svgImg: SVG1
    },
    {
      id: 4,
      image: IMG1,
      title: "The biggest children dental care event of this year",
      time: "05 pm - 05 pm",
      location: "Vancouver, Canada",
      proImg: ProImage,
      author: "Thang",
      role: "General Developer",
      svgImg: SVG1
    },
    {
      id: 5,
      image: IMG1,
      title: "The biggest children dental care event of this year",
      time: "05 pm - 05 pm",
      location: "Vancouver, Canada",
      proImg: ProImage,
      author: "Thang",
      role: "General Developer",
      svgImg: SVG1
    },
    {
      id: 6,
      image: IMG1,
      title: "The biggest children dental care event of this year",
      time: "05 pm - 05 pm",
      location: "Vancouver, Canada",
      proImg: ProImage,
      author: "Thang",
      role: "General Developer",
      svgImg: SVG1
    },
    {
      id: 7,
      image: IMG1,
      title: "The biggest children dental care event of this year",
      time: "05 pm - 05 pm",
      location: "Vancouver, Canada",
      proImg: ProImage,
      author: "Thang",
      role: "General Developer",
      svgImg: SVG1
    },
    {
      id: 8,
      image: IMG1,
      title: "The biggest children dental care event of this year",
      time: "05 pm - 05 pm",
      location: "Vancouver, Canada",
      proImg: ProImage,
      author: "Thang",
      role: "General Developer",
      svgImg: SVG1
    },
    {
      id: 9,
      image: IMG1,
      title: "The biggest children dental care event of this year",
      time: "05 pm - 05 pm",
      location: "Vancouver, Canada",
      proImg: ProImage,
      author: "Thang",
      role: "General Developer",
      svgImg: SVG1
    },
  ]
  
  return (
    <>
    <div className='min-h-screen bg-white w-full px-4 mb-6 '>
      <div className='container mx-auto px-4'>
        <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10'>
          {allEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
    </div>


     {/* gaddi */}
     <div className="relative flex">
        <img src={Road} alt="Road" className="w-full h-16 lg:h-24  bg-[#f1f5f9]"  />
      </div>
    </>
  )
}

export default AllEvents