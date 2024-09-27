import React from 'react';
import Road from "../../assets/road.png";
const FullScreenMap = () => {
  return (
    <>
    <div className="relative w-full h-screen">
      {/* Google Maps iframe */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.5181973210727!2d-122.47825562370191!3d37.79742781869725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808587f1235a7597%3A0x9e7156f5730fcd0!2sFort%20Winfield%20Scott%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1694758025661!5m2!1sen!2sus"
        className="absolute inset-0 w-full h-full"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    {/* gaddi */}
    <div className="relative flex mt-10">
        <img src={Road} alt="Road" className="w-full h-16 lg:h-24  bg-[#f1f5f9]"  />
      </div>
    </>
  );
};

export default FullScreenMap;
