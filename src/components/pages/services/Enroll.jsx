import React from 'react';
import IMG from '../../../assets/ServiceIMG2.png'
import img from '../../../assets/blog1.jpg'

const EnrollChildSection = () => {
  return (
    <>
    <div className='grid grid-rows-2 py-20 w-full h-screen'>
        
        {/* 2 */}
      <div className="row-span-1 grid grid-cols-5">
        {/* <div></div> */}
        <img
          src={img}
          alt=""
          className="col-span-1 h-full w-full hover:brightness-75 "
        />
        <img
          src={img}
          alt=""
          className="col-span-1 h-full w-full hover:brightness-75 "
        />
        <img
          src={img}
          alt=""
          className="col-span-1 h-full w-full hover:brightness-75 "
        />
        <img
          src={img}
          alt=""
          className="col-span-1 h-full w-full hover:brightness-75 "
        />
        <img
          src={img}
          alt=""
          className="col-span-1 h-full w-full hover:brightness-75 "
        />
      </div>

    
    <div className="w-full bg-orange-500 text-white row-span-1">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 flex items-start">
            <div className="mr-4">
              <img src={IMG} alt="Cartoon child" className="w-full h-full" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-2">How to Enroll Your Child to a Class?</h2>
              <p className="text-sm mb-2">Venenatis aenean interdumvehicula est node maecenas. Praes ent arcu gravida vehicula</p>
            </div>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 ">
            <form className="flex flex-col md:flex-row items-end">
              <div className="flex-1 w-full md:w-auto mb-4 md:mb-0 md:mr-4">
                <label htmlFor="name" className="block text-sm mb-1">Name *</label>
                <input type="text" id="name" className="w-full px-3 py-2 bg-transparent border-b border-white text-white placeholder-white" placeholder="Your name" />
              </div>
              <div className="flex-1 w-full md:w-auto mb-4 md:mb-0 md:mr-4">
                <label htmlFor="phone" className="block text-sm mb-1">Phone *</label>
                <input type="tel" id="phone" className="w-full px-3 py-2 bg-transparent border-b border-white text-white placeholder-white" placeholder="Your phone" />
              </div>
              <div className="flex-1 w-full md:w-auto mb-4 md:mb-0 md:mr-4">
                <label htmlFor="email" className="block text-sm mb-1">Email Address *</label>
                <input type="email" id="email" className="w-full px-3 py-2 bg-transparent border-b border-white text-white placeholder-white" placeholder="Your email" />
              </div>
              <div>
              <button type="submit" className="w-full md:w-auto bg-white text-orange-500 font-bold py-2 px-6 rounded-full hover:bg-orange-100 transition duration-300">
                GET IT NOW
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
    </div>

    </div>
    </>
  );
};

export default EnrollChildSection;