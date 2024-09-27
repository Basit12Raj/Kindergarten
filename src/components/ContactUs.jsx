import React, { useState } from "react";
import Road from "../assets/road.png";
import Gaddi from "../assets/gaddi.png";
import Gaddi1 from "../assets/gaddi1.png";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="bg-[#dbf5fd] lg:grid lg:grid-cols-2 py-12 lg:py-0">
        <div className="lg:col-span-1 lg:py-24 px-4 lg:px-0">
          <div className="p-4 lg:p-8 max-w-lg mx-auto mt-4 lg:mt-10">
            <h2 className="text-start text-3xl lg:text-4xl font-bold mb-4">
              Quick Contact
            </h2>
            <p className="text-start text-gray-600 mb-8">
              We will be happy to assist you with any question regarding online
              and in store purchases. Contact us for answers.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-5">
                <div className="w-full">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    required
                    onChange={handleChange}
                    value={formData.name}
                    className="w-full p-3 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>
                <div className="w-full">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    required
                    onChange={handleChange}
                    value={formData.email}
                    className="w-full p-3 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your message"
                  rows="4"
                  onChange={handleChange}
                  value={formData.message}
                  className="w-full p-3 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                ></textarea>
              </div>
              <div className="">
                <button
                  type="submit"
                  className="w-full lg:w-52 p-3 bg-pink-500 hover:bg-pink-600 text-white rounded-xl transition-colors duration-200"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="hidden lg:block lg:col-span-1"></div>
      </div>

      {/* gaddi */}
      <div className="relative flex">
        {/* First image (Gaddi1) positioned to the right */}
        <div className="absolute -top-36 right-8 hidden lg:block">
          <img src={Gaddi1} alt="Gaddi1" className="w-[550px]" />
        </div>

        {/* Second image (Road) spans the full width */}
        <img src={Road} alt="Road" className="w-full h-16 lg:h-24 z-10" />
      </div>
    </>
  );
}

export default ContactUs;