import React, { useState } from 'react'
import IMG1 from '../../assets/3.jpg'
import Gaddi1 from "../../assets/gaddi1.png"
import Road from "../../assets/road.png"

function Courses() {
  const classData = [
    {
      id: 1,
      title: 'Painting Class for Young Children',
      price: '$15 / per day',
      image: IMG1,
    },
    {
      id: 2,
      title: 'Dance Class for Young Children',
      price: '$10 / per day',
      image: IMG1,
    },
    {
      id: 3,
      title: 'Music Class for Toddlers',
      price: '$10 / per day',
      image: IMG1,
    },
    {
      id: 4,
      title: 'Cooking Class for Kids',
      price: '$12 / per day',
      image: IMG1,
    },
    {
      id: 5,
      title: 'Art Class for Young Minds',
      price: '$14 / per day',
      image: IMG1,
    },
    {
      id: 6,
      title: 'Crafts Class for Creative Kids',
      price: '$13 / per day',
      image: IMG1,
    },
    {
      id: 7,
      title: 'Cooking Class for Kids',
      price: '$12 / per day',
      image: IMG1,
    },
    {
      id: 8,
      title: 'Art Class for Young Minds',
      price: '$14 / per day',
      image: IMG1,
    },
    {
      id: 9,
      title: 'Crafts Class for Creative Kids',
      price: '$13 / per day',
      image: IMG1,
    },
  ];

  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 6

  const displayedCards = classData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  )

  return (
    <>
      <div className='min-h-screen w-full bg-slate-100 shadow-lg'>
        <div className='flex flex-wrap justify-center gap-3 pt-9 mb-6 px-4'>
          {['ALL', 'Computer Science', 'Entrepreneurship', 'Marketing', 'Music Education'].map((category) => (
            <button key={category} className='px-4 py-2 bg-white rounded-full hover:bg-red-400 hover:text-white shadow-xl text-sm sm:text-base sm:px-6 sm:py-3 md:px-8 md:py-4'>
              {category}
            </button>
          ))}
        </div>

        <div className="px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedCards.map((classItem) => (
              <div key={classItem.id} className="flex justify-center">
                <div className="w-full max-w-sm bg-[#56509f] text-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:text-white group">
                  <div className="relative">
                    <div className="overflow-hidden h-48 sm:h-56">
                      <img
                        src={classItem.image}
                        alt={classItem.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-100 hover:brightness-75"
                      />
                    </div>
                    <div className="absolute -bottom-10 right-1 transform -translate-x-1/2 bg-[#f9c00c] text-center rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center shadow-lg">
                      <p className="text-xs sm:text-sm font-semibold text-white">
                        {classItem.price}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6 text-center pt-12 sm:pt-14">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4 hover:text-yellow-600">
                      {classItem.title}
                    </h2>
                    <p className="text-xs sm:text-sm mb-4 sm:mb-6">
                      Lorem Ipsum is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard...
                    </p>
                    <div className="grid grid-cols-3 gap-2 sm:gap-4 text-xs sm:text-sm font-semibold">
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

          <div className="flex justify-start mt-8 space-x-2 sm:space-x-4 overflow-x-auto pb-4">
            {[...Array(Math.ceil(classData.length / itemsPerPage)).keys()].map(
              (number) => (
                <button
                  key={number}
                  onClick={() => setCurrentPage(number)}
                  className={`px-2 py-2 rounded-full border-2 text-sm sm:text-base ${
                    currentPage === number
                      ? "bg-red-400 text-white"
                      : "bg-white text-red-400"
                  }`}
                >
                  {number + 1} 
                </button>
              )
            )}
          </div>
        </div>
      </div>

      <div className="relative flex mt-8 mb-8">
        <div className="absolute -top-20 right-8 hidden lg:block z-10">
          <img src={Gaddi1} alt="Gaddi1" className="w-[350px] bg-[#f1f5f9]" />
        </div>
        <img src={Road} alt="Road" className="w-full h-16 lg:h-24 bg-[#f1f5f9]" />
      </div>
    </>
  )
}

export default Courses