import React, { useState } from 'react';
import { Phone, Mail, Building, MapPin, Clock } from 'lucide-react';

const QuickInquiryContact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Quick Inquiry Form */}
        <div className="flex-1">
          <h2 className="text-3xl font-semibold text-indigo-700 mb-2">Quick Inquiry</h2>
          <div className="w-16 h-1 bg-red-300 mb-6"></div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="flex gap-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
            <div>
              <button
                type="submit"
                className="px-8 py-3 bg-pink-400 text-white rounded-full hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 uppercase font-semibold"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Get in Touch */}
        <div className="flex-1">
          <h2 className="text-3xl font-semibold text-indigo-700 mb-2">Get in Touch</h2>
          <div className="w-16 h-1 bg-red-300 mb-6"></div>
          <p className="text-gray-600 mb-6">
            Color categories and physical specifications of color are also associated with objects or materials based on their physical properties such as light absorption, reflection, or emission spectra. properties such as light absorption, reflection.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <Phone className="text-pink-400 mr-3" size={20} />
              <span>(04) 3245-6988</span>
            </div>
            <div className="flex items-center">
              <Mail className="text-pink-400 mr-3" size={20} />
              <span>support@constructor.com</span>
            </div>
            <div className="flex items-center">
              <Building className="text-pink-400 mr-3" size={20} />
              <span>(102) 6969 8888</span>
            </div>
            <div className="flex items-center">
              <MapPin className="text-pink-400 mr-3" size={20} />
              <span>A26BT5 Building, Silver C Street, England</span>
            </div>
            <div className="flex items-center">
              <Clock className="text-pink-400 mr-3" size={20} />
              <span>Open hours: 8.00-18.00 Mon-Fri</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickInquiryContact;