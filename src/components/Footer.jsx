import React from 'react';
import { Facebook, Twitter, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import Logo from '../assets/logo.png';
import IMG1 from '../assets/class1.jpg'
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-blue-50 pt-12 pb-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Kindergarten Section */}
          <div>
            <div className="flex items-center mb-4">
              <img src={Logo} alt="Kindergarten Logo" className="h-16 w-16 mr-2" />
              <h2 className="text-2xl font-bold text-blue-500">kindergarten</h2>
            </div>
            <p className="text-gray-600 mb-4">Early development is fundamental to the growth of your child.</p>
            <div className="flex space-x-4">
              <Facebook className="text-gray-400 hover:text-blue-500 cursor-pointer" />
              <Linkedin className="text-gray-400 hover:text-blue-500 cursor-pointer" />
              {/* <FaSquareXTwitter className="text-gray-400 hover:text-black cursor-pointer" /> */}
              <Phone className="text-gray-400 hover:text-blue-500 cursor-pointer" />
              <Mail className="text-gray-400 hover:text-blue-500 cursor-pointer" />
            </div>
          </div>

          {/* Useful Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">USEFUL LINKS</h3>
            <div className="grid grid-cols-2 gap-2">
              {['Home', 'Courses', 'FAQ', 'About us', 'Gallery', 'Blog', 'Membership', 'Contact us', 'Service', 'Our teacher'].map((link) => (
                <a key={link} href="#" className="text-gray-600 hover:text-blue-500">{link}</a>
              ))}
            </div>
          </div>

          {/* Connect Us Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">CONNECT US</h3>
            <div className="space-y-2">
              <p className="flex items-center text-gray-600">
                <Phone className="h-5 w-5 mr-2 text-pink-500" />
                (04) 3245-6988
              </p>
              <p className="flex items-center text-gray-600">
                <Mail className="h-5 w-5 mr-2 text-pink-500" />
                support@constructor.com
              </p>
              <p className="flex items-center text-gray-600">
                <Phone className="h-5 w-5 mr-2 text-pink-500" />
                (102) 6969 8888
              </p>
              <p className="flex items-center text-gray-600">
                <MapPin className="h-5 w-5 mr-2 text-pink-500" />
                A26BT5 Building, SilverC Street, London, England
              </p>
            </div>
          </div>

          {/* Recent Posts Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">RECENT POSTS</h3>
            <div className="space-y-4">
              {[
                { title: '8 Ways To Keep Your Heart Forever Young', date: 'December 27, 2017', image: IMG1 },
                { title: 'How Drugs Alter The Brain', date: 'December 27, 2017', image: IMG1 }
              ].map((post, index) => (
                <div key={index} className="flex items-center">
                  <img src={post.image} alt={post.title} className="w-16 h-16 object-cover rounded mr-4" />
                  <div>
                    <h4 className="text-sm font-semibold">{post.title}</h4>
                    <p className="text-xs text-gray-500">{post.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Copyright */}
        <div className="border-t border-gray-200 pt-4 text-center text-sm text-gray-500">
          <p>StarKid | Kindergarten WordPress Theme © Powered by ThimPress.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;