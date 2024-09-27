import React from "react";
import IMG1 from "../../assets/3.jpg";
import IMG2 from "../../assets/5.jpg";
import IMG3 from "../../assets/6.jpg";
import SVG1 from "../../assets/aboutsvg1.svg";
import SVG2 from '../../assets/aboutsvg2.svg'
import SVG3 from '../../assets/aboutsvg3.svg'
import ICON1 from '../../assets/svgicon1.png'
import ICON2 from '../../assets/svgicon2.png'
import ICON3 from '../../assets/svgicon3.png'

function About3() {
  return (
    <div className="w-full bg-[#56509f] mt-28 space-y-10">

      {/* Icons Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">

        {/* Icon Card 1 */}
        <div className="flex flex-col items-center text-center">
          <div className="relative flex items-center justify-center">
            <img src={SVG1} alt="Background" className="w-48 h-48 md:w-64 md:h-64" />
            <img src={ICON1} alt="Icon" className="absolute w-12 h-12 md:w-16 md:h-16" />
          </div>
          <div className="mt-6">
            <h3 className="text-white text-xl md:text-2xl font-semibold mb-2">Sport Games</h3>
            <p className="text-purple-200 text-sm md:text-base font-light">
              Man face fruit divided seasons herb from herb moveth whose. Dominion gather winged morning man won't.
            </p>
          </div>
        </div>

        {/* Icon Card 2 */}
        <div className="flex flex-col items-center text-center">
          <div className="relative flex items-center justify-center">
            <img src={SVG2} alt="Background" className="w-48 h-48 md:w-64 md:h-64" />
            <img src={ICON2} alt="Icon" className="absolute w-12 h-12 md:w-16 md:h-16" />
          </div>
          <div className="mt-6">
            <h3 className="text-white text-xl md:text-2xl font-semibold mb-2">Art & Craft</h3>
            <p className="text-purple-200 text-sm md:text-base font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla accusamus atque vitae.
            </p>
          </div>
        </div>

        {/* Icon Card 3 */}
        <div className="flex flex-col items-center text-center">
          <div className="relative flex items-center justify-center">
            <img src={SVG3} alt="Background" className="w-48 h-48 md:w-64 md:h-64" />
            <img src={ICON3} alt="Icon" className="absolute w-12 h-12 md:w-16 md:h-16" />
          </div>
          <div className="mt-6">
            <h3 className="text-white text-xl md:text-2xl font-semibold mb-2">Music & Dance</h3>
            <p className="text-purple-200 text-sm md:text-base font-light">
              Officiis ad accusantium exercitationem, explicabo libero doloremque magni quas aliquid tempora.
            </p>
          </div>
        </div>
      </div>

      {/* Image Gallery Section */}
      <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
        <img
          src={IMG1}
          alt="Gallery Image 1"
          className="w-full h-48 md:h-64 object-cover transition-transform hover:scale-105"
        />
        <img
          src={IMG2}
          alt="Gallery Image 2"
          className="w-full h-48 md:h-64 object-cover transition-transform hover:scale-105"
        />
        <img
          src={IMG3}
          alt="Gallery Image 3"
          className="w-full h-48 md:h-64 object-cover transition-transform hover:scale-105"
        />
        <img
          src={IMG1}
          alt="Gallery Image 4"
          className="hidden md:block w-full h-64 object-cover transition-transform hover:scale-105"
        />
        <img
          src={IMG2}
          alt="Gallery Image 5"
          className="hidden md:block w-full h-64 object-cover transition-transform hover:scale-105"
        />
      </div>
    </div>
  );
}

export default About3;
