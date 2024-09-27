import React, { useState, useEffect } from 'react'
import { PlusCircle, X, ChevronLeft, ChevronRight } from 'lucide-react'
import Phool from '../assets/phool.png'
import gallery1 from '../assets/gallery1.jpg'
import gallery2 from '../assets/gallery2.jpg'
import gallery3 from '../assets/3.jpg'
import gallery4 from '../assets/gallery4.jpg'
import gallery5 from '../assets/5.jpg'
import gallery6 from '../assets/gallery6.jpg'

const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6]

function OurGallery() {
  const [fullscreenImage, setFullscreenImage] = useState(null)
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleImageClick = (image) => {
    setFullscreenImage(image)
  }

  const closeFullscreen = () => {
    setFullscreenImage(null)
  }

  const handlePrev = () => {
    setCurrentMobileIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentMobileIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))
  }

  const ImageWithHover = ({ src, className }) => (
    <div className="relative group">
      <img src={src} alt="" className={`${className} transition-all duration-300 group-hover:blur-sm`} />
      <div 
        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        onClick={() => handleImageClick(src)}
      >
        <PlusCircle className="text-red-700 w-12 h-12 cursor-pointer" />
      </div>
    </div>
  )

  const MobileGallery = () => (
    <div className="relative w-full h-[400px] flex items-center justify-center">
      <ImageWithHover src={galleryImages[currentMobileIndex]} className="h-[300px] w-[300px] rounded-xl shadow-md" />
      <button onClick={handlePrev} className="absolute left-2 bg-white rounded-full p-2">
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button onClick={handleNext} className="absolute right-2 bg-white rounded-full p-2">
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  )

  return (
    <div className="my-16">
      <div className="flex flex-col justify-center text-center mb-12 space-y-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Our Gallery</h1>
        <div className="flex justify-center">
          <img src={Phool} alt="" className="h-6 w-fit" />
        </div>
      </div>
      {isMobile ? (
        <MobileGallery />
      ) : (
        <div className='grid min-h-screen grid-cols-5 px-7 w-full'>
          {/* 1 */}
          <div className='col-span-1 bg-white h-[400px] w-[253px] max-h-screen space-y-2'>
            <div className='h-1/2 flex justify-center'>
              <ImageWithHover src={gallery1} className='h-[190px] w-[190px] rounded-xl shadow-md' />
            </div>
            <div className='h-1/2 flex justify-center'>
              <ImageWithHover src={gallery2} className='h-[190px] w-[190px] rounded-xl shadow-md' />
            </div>
          </div>

          {/* 2 */}
          <div className='col-span-1 bg-white h-[400px] w-[253px] max-h-screen space-y-2 mt-8'>
            <div className='h-1/2 flex justify-center'>
              <ImageWithHover src={gallery3} className='h-[190px] w-[190px] rounded-xl shadow-md' />
            </div>
            <div className='h-1/2 flex justify-center'>
              <ImageWithHover src={gallery4} className='h-[190px] w-[190px] rounded-xl shadow-md' />
            </div>
          </div>

          {/* 3 */}
          <div className='col-span-1 bg-white h-[400px] w-[253px] max-h-screen space-y-2'>
            <div className='h-1/2 flex justify-center'>
              <ImageWithHover src={gallery5} className='h-[190px] w-[190px] rounded-xl shadow-md' />
            </div>
            <div className='h-1/2 flex justify-center'>
              <ImageWithHover src={gallery6} className='h-[190px] w-[190px] rounded-xl shadow-md' />
            </div>
          </div>

          {/* 4 */}
          <div className='col-span-1 bg-white h-[400px] w-[253px] max-h-screen space-y-2 mt-8'>
            <div className='h-1/2 flex justify-center'>
              <ImageWithHover src={gallery1} className='h-[190px] w-[190px] rounded-xl shadow-md' />
            </div>
            <div className='h-1/2 flex justify-center'>
              <ImageWithHover src={gallery2} className='h-[190px] w-[190px] rounded-xl shadow-md' />
            </div>
          </div>

          {/* 5 */}
          <div className='col-span-1 bg-white h-[400px] w-[253px] max-h-screen space-y-2'>
            <div className='h-1/2 flex justify-center'>
              <ImageWithHover src={gallery3} className='h-[190px] w-[190px] rounded-xl shadow-md' />
            </div>
            <div className='h-1/2 flex justify-center'>
              <ImageWithHover src={gallery4} className='h-[190px] w-[190px] rounded-xl shadow-md' />
            </div>
          </div>
        </div>
      )}
      {fullscreenImage && (
        <div className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50'>
          <div className='relative max-w-4xl max-h-[90vh]'>
            <img src={fullscreenImage} alt="Fullscreen" className='max-w-full max-h-full object-contain' />
            <button 
              onClick={closeFullscreen}
              className='absolute top-4 right-4 text-white hover:text-gray-300'
            >
              <X className='w-8 h-8 text-black' />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default OurGallery