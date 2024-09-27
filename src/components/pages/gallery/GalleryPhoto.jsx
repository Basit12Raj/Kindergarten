import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import IMG1 from '../../../assets/blog1.jpg';
import Road from "../../../assets/road.png";

const Card = ({ id, image, title, description, onImageClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const shortTitle = title.split(' ').slice(0, 4).join(' ');
  const shortDescription = description.split(' ').slice(0, 15).join(' ');

  return (
    <div 
      className='max-w-sm rounded shadow-sm relative'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='relative'>
        <img src={image} alt={id} className='h-full w-full' />
        {isHovered && (
          <div 
            className='absolute inset-0 bg-blue-500 bg-opacity-50 flex items-center justify-center cursor-pointer'
            onClick={() => onImageClick(image)}
          >
            <Plus className='text-white' size={24} />
          </div>
        )}
      </div>
      <div className='mt-5 flex flex-col justify-center items-center'>
        <h1 className='text-xl text-blue-600 hover:text-red-500'>{shortTitle}...</h1>
        <p className='text-md text-center mt-4 font-thin'>{shortDescription}...</p>
      </div>
    </div>
  );
};

function GalleryPhoto() {
  const [visibleCards, setVisibleCards] = useState(8);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const CardData = [
    // ... (your existing CardData array)
    {
        id: 1,
        image: IMG1,
        title: "Develop and Learn Through Fun And Creativity Develop and Learn Through",
        description: "With our fun and creative classes, children will be encouraged to explore their passions, develop new skills, and make memorable memories. Whether you're a beginner or an experienced artist, we're here to help you grow and grow."
      },
      {
        id: 2,
        image: IMG1,
        title: "Develop and Learn Through Fun And Creativity Develop and Learn Through",
        description: "With our fun and creative classes, children will be encouraged to explore their passions, develop new skills, and make memorable memories. Whether you're a beginner or an experienced artist, we're here to help you grow and grow."
      },
      {
        id: 3,
        image: IMG1,
        title: "Develop and Learn Through Fun And Creativity Develop and Learn Through",
        description: "With our fun and creative classes, children will be encouraged to explore their passions, develop new skills, and make memorable memories. Whether you're a beginner or an experienced artist, we're here to help you grow and grow."
      },
      {
        id: 4,
        image: IMG1,
        title: "Develop and Learn Through Fun And Creativity Develop and Learn Through",
        description: "With our fun and creative classes, children will be encouraged to explore their passions, develop new skills, and make memorable memories. Whether you're a beginner or an experienced artist, we're here to help you grow and grow."
      },
      {
        id: 5,
        image: IMG1,
        title: "Develop and Learn Through Fun And Creativity Develop and Learn Through",
        description: "With our fun and creative classes, children will be encouraged to explore their passions, develop new skills, and make memorable memories. Whether you're a beginner or an experienced artist, we're here to help you grow and grow."
      },
      {
        id: 6,
        image: IMG1,
        title: "Develop and Learn Through Fun And Creativity Develop and Learn Through",
        description: "With our fun and creative classes, children will be encouraged to explore their passions, develop new skills, and make memorable memories. Whether you're a beginner or an experienced artist, we're here to help you grow and grow."
      },
      {
        id: 7,
        image: IMG1,
        title: "Develop and Learn Through Fun And Creativity Develop and Learn Through",
        description: "With our fun and creative classes, children will be encouraged to explore their passions, develop new skills, and make memorable memories. Whether you're a beginner or an experienced artist, we're here to help you grow and grow."
      },
      {
        id: 8,
        image: IMG1,
        title: "Develop and Learn Through Fun And Creativity Develop and Learn Through",
        description: "With our fun and creative classes, children will be encouraged to explore their passions, develop new skills, and make memorable memories. Whether you're a beginner or an experienced artist, we're here to help you grow and grow."
      },
      {
        id: 9,
        image: IMG1,
        title: "Develop and Learn Through Fun And Creativity Develop and Learn Through",
        description: "With our fun and creative classes, children will be encouraged to explore their passions, develop new skills, and make memorable memories. Whether you're a beginner or an experienced artist, we're here to help you grow and grow."
      },
      {
        id: 10,
        image: IMG1,
        title: "Develop and Learn Through Fun And Creativity Develop and Learn Through",
        description: "With our fun and creative classes, children will be encouraged to explore their passions, develop new skills, and make memorable memories. Whether you're a beginner or an experienced artist, we're here to help you grow and grow."
      },
      {
        id: 11,
        image: IMG1,
        title: "Develop and Learn Through Fun And Creativity Develop and Learn Through",
        description: "With our fun and creative classes, children will be encouraged to explore their passions, develop new skills, and make memorable memories. Whether you're a beginner or an experienced artist, we're here to help you grow and grow."
      },
      {
        id: 12,
        image: IMG1,
        title: "Develop and Learn Through Fun And Creativity Develop and Learn Through",
        description: "With our fun and creative classes, children will be encouraged to explore their passions, develop new skills, and make memorable memories. Whether you're a beginner or an experienced artist, we're here to help you grow and grow."
      }
  ];

  const showMoreCards = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 4);
  };

  const handleImageClick = (image) => {
    setFullscreenImage(image);
  };

  const closeFullscreenImage = () => {
    setFullscreenImage(null);
  };

  return (
    <>
    <div className='mt-28 px-24'>
      <div className='grid grid-cols-4 gap-12'>
        {CardData.slice(0, visibleCards).map((card) => (
          <Card key={card.id} {...card} onImageClick={handleImageClick} />
        ))}
      </div>
      {visibleCards < CardData.length && ( 
        <div className='mt-10 text-center pb-14'>
          <button
            className='px-10 py-3 bg-[#f26a8e] text-white rounded-full hover:bg-[#e9849f]'
            onClick={showMoreCards}
          >
            See More
          </button>
        </div>
      )}
      {fullscreenImage && (
        <div className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50'>
          <div className='relative max-w-4xl max-h-full'>
            <img src={fullscreenImage} alt="Fullscreen" className='max-w-full max-h-[90vh] object-contain' />
            <button 
              className='absolute top-4 right-4 text-white bg-black bg-opacity-50 p-2 rounded-full'
              onClick={closeFullscreenImage}
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
    {/* gaddi */}
    <div className="relative flex mt-20">
    <img src={Road} alt="Road" className="w-full h-16 lg:h-24  bg-[#f1f5f9]"  />
  </div>
 </>
  );
}

export default GalleryPhoto;