import React from 'react'
import IMG1 from '../../../assets/ServiceIMG1.jpg'
import SVG1 from '../../../assets/aboutsvg1.svg'
import SVG2 from '../../../assets/aboutsvg2.svg'
import SVG3 from '../../../assets/aboutsvg3.svg'
import Icon1 from '../../../assets/svgicon1.png'
import Icon2 from '../../../assets/svgicon2.png'
import Icon3 from '../../../assets/svgicon3.png'

function HomeActivity() {
  return (
    <div className='h-screen bg-[#f8f6f3] grid grid-cols-2'>
        <div className='col-span-1 flex justify-center items-center'>
            <img src={IMG1} alt="" className='text justify-center ' />
        </div>
        <div className='col-span-1 flex flex-col  justify-center'>
            <h1 className='text-5xl text-[#56509f] mb-5'>Our Activities</h1>
            <p className='font-thin'>Venenatis aenean interdumvehicula est node maecenas. Praesent arcu gravida vehicula est node maecenas loareet morbi a dosis luctus. Urna eget lacinia eleifend praesent luctus a arcu quistis. Aenean interdum lives and in the lives of others.</p>
            <div className='grid grid-cols-2 mt-12  '>
                <div className='space-y-2 text-lg font-semibold'>
                    <div className='flex'>
                    <img src={SVG1} alt="" className='h-20 w-20' />
                    <h1 className='flex mt-6 '>Play Area</h1>
                    </div>
                    <div className='flex'>
                    <img src={SVG2} alt="" className='h-20 w-20' />
                    <h1 className='flex mt-6 '>Activity Rooms</h1>
                    </div>
                    <div className='flex'>
                    <img src={SVG3} alt="" className='h-20 w-20' />
                    <h1 className='flex mt-6 '>Music And Art Room</h1>
                    </div>
                </div>
                <div className='space-y-2 text-lg font-semibold'>
                    <div className='flex'>
                    <img src={SVG1} alt="" className='h-20 w-20' />
                    <h1 className='flex mt-6 '>Play Area</h1>
                    </div>
                    <div className='flex relative '>
                    <img src={SVG2} alt="" className='h-20 w-20' />
                   
                    <h1 className='flex mt-6 '>Activity Rooms</h1>
                    </div>
                    <div className='flex'>
                    <img src={SVG3} alt="" className='h-20 w-20' />
                    <h1 className='flex mt-6 '>Music And Art Room</h1>
                    </div>
                </div>
                
            </div>
        </div>

    </div>
  )
}

export default HomeActivity