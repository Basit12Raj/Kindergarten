import React, { useState, useRef, useEffect } from "react";
import Logo from "../assets/logo.png";
import {
  FaHome,
  FaCodeBranch,
  FaBars,
  FaTimes,
  FaAngleDown,
  FaAngleUp,
} from "react-icons/fa";
import { PiHandPeace } from "react-icons/pi";
import { MdFlightClass } from "react-icons/md";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { IoChatbubblesOutline } from "react-icons/io5";
import { RiContactsBook2Fill } from "react-icons/ri";
import { BsHouseDoor, BsNewspaper, BsFileEarmark } from "react-icons/bs";
import svg from "../assets/svg5.svg";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const dropdownRefs = {
    home: useRef(null),
    blog: useRef(null),
    pages: useRef(null),
  };
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleMouseEnter = (menu) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        activeDropdown &&
        !dropdownRefs[activeDropdown].current.contains(event.target)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeDropdown]);

  const renderDesktopDropdownItems = (items, menu) => (
    <ul
      className={`absolute left-2 text-sm mt-2 w-48 ${
        menu === "pages" ? "bg-[#f63979]" : "bg-blue-400"
      } text-white shadow-lg rounded-md overflow-hidden`}
    >
      {items.map((item, index) => (
        <li
          key={index}
          className={`px-4 py-2 ${
            menu === "pages" ? "hover:bg-[#e75d8b]" : "hover:bg-blue-300"
          } transition-colors duration-200`}
        >
          {typeof item === "string" ? (
            item
          ) : (
            <Link to={item.path} className="block w-full h-full">
              {item.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenMobileDropdown(null);
  };

  const toggleMobileDropdown = (dropdown) => {
    setOpenMobileDropdown(openMobileDropdown === dropdown ? null : dropdown);
  };

  const renderMobileDropdownItems = (items, icon) => (
    <ul className="ml-6 mt-2 space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-center space-x-2">
          {React.cloneElement(icon, { className: "text-sm" })}
          {typeof item === "string" ? (
            <span className="text-sm">{item}</span>
          ) : (
            <Link to={item.path} className="text-sm">
              {item.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );

  const renderMobileMenu = () => (
    <div
      className={`fixed top-0 left-0 w-1/2 h-full bg-gray-800 text-white transform ${
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out z-50 overflow-y-auto`}
    >
      <div className="flex justify-end p-4">
        <FaTimes
          onClick={toggleMobileMenu}
          className="text-2xl cursor-pointer"
        />
      </div>
      <h1 className="text-white text-lg mb-4 ml-5 border-l-2 border-amber-600 px-3 border-dashed">
        Menu
      </h1>
      <ul className="flex flex-col space-y-4 p-4">
        <li className="border-b border-gray-600 pb-2">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleMobileDropdown("home")}
          >
            <div className="flex items-center space-x-2">
              <FaHome className="text-lg" />
              <span>Home</span>
            </div>
            {openMobileDropdown === "home" ? <FaAngleUp /> : <FaAngleDown />}
          </div>
          {openMobileDropdown === "home" &&
            renderMobileDropdownItems(
              ["Home 1", "Home 2", "Home 3"],
              <BsHouseDoor />
            )}
        </li>
        <Link to='/about' className="flex items-center space-x-2 border-b border-gray-600 pb-2">
          <PiHandPeace className="text-lg" />
          <span>About Us</span>
        </Link>
        <Link to='/class' className="flex items-center space-x-2 border-b border-gray-600 pb-2">
          <MdFlightClass className="text-lg" />
          <span>Classes</span>
        </Link>
        <Link to='/teachers' className="flex items-center space-x-2 border-b border-gray-600 pb-2">
          <LiaChalkboardTeacherSolid className="text-lg" />
          <span>Teachers</span>
        </Link>
        <Link to='/blog' className="border-b border-gray-600 pb-2">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleMobileDropdown("blog")}
          >
            <div className="flex items-center space-x-2">
              <IoChatbubblesOutline className="text-lg" />
              <span>Blog</span>
            </div>
            {openMobileDropdown === "blog" ? <FaAngleUp /> : <FaAngleDown />}
          </div>
          {openMobileDropdown === "blog" &&
            renderMobileDropdownItems(
              ["Blog Grid", "Blog List"],
              <BsNewspaper />
            )}
        </Link>
        <li className="border-b border-gray-600 pb-2">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleMobileDropdown("pages")}
          >
            <div className="flex items-center space-x-2">
              <FaCodeBranch className="text-lg" />
              <span>Pages</span>
            </div>
            {openMobileDropdown === "pages" ? <FaAngleUp /> : <FaAngleDown />}
          </div>
          {openMobileDropdown === "pages" &&
            renderMobileDropdownItems(
              [
                { type: "link", label: "Events", path: "/events" },
                { type: "link", label: "Services", path: "/services" },
                { type: "link", label: "Gallery", path: "/gallery" },
                { type: "link", label: "FAQ", path: "/faq" },
                { type: "link", label: "Membership Level", path: "/membership" },
              
              ],
              <BsFileEarmark />
            )}
        </li>
        <Link to='/contact' className="flex items-center space-x-2 pb-2">
          <RiContactsBook2Fill className="text-lg" />
          <span>Contact Us</span>
        </Link>
      </ul>
    </div>
  );

  return (
    <nav className="flex justify-between h-28 w-full bg-slate-100 border-b-2">
      <div className="py-5">
        <img src={Logo} alt="Logo" className="h-20 w-full px-16" />
        <img src={svg} alt="svg" className="w-60 h-[40px]" />
      </div>
      <div className="mr-2 cursor-pointer">
        {/* Mobile menu icon */}
        <div className="md:hidden">
          <FaBars onClick={toggleMobileMenu} className="text-2xl mt-11 mr-4" />
        </div>
        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-12 mr-36 py-8 text-xl">
          {/* Home with Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("home")}
            onMouseLeave={handleMouseLeave}
            ref={dropdownRefs.home}
          >
            <NavLink
              to="/"
              className={({isActive})=>
              `${isActive? "border-b-2 border-blue-500" : ""}
              text-blue-500 hover:border-b-2 hover:border-blue-500`
              
              }
            >
              <FaHome className="ml-3 text-2xl" />
              <span>Home</span>
            </NavLink>
            {activeDropdown === "home" &&
              renderDesktopDropdownItems(
                ["Home 1", "Home 2", "Home 3"],
                "home"
              )}
          </div>

          {/* About Us */}
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${
                isActive ? "border-b-2 border-[#f86f9a]" : ""
              } text-[#f86f9a] hover:border-b-2 hover:border-[#f86f9a]`
            }
          >
            <PiHandPeace className="ml-5 text-2xl" />
            <span>About Us</span>
          </NavLink>

          {/* Classes */}
          <NavLink
            to="/class"
            className={({isActive})=>
              `${isActive? "border-b-2 border-[#43cd66]" : ""}
            text-[#43cd66] hover:border-b-2 hover:border-[#43cd66]`
            }
          >
            <MdFlightClass className="ml-5 text-2xl" />
            <span>Classes</span>
          </NavLink>

          {/* Teachers */}
          <NavLink
            to="/teachers"
            className={({isActive})=>
            `${isActive ? "border-b-2 border-[#f9b001]" : ""}
            text-[#f9b001] hover:border-b-2 hover:border-[#f9b001]`}
          >
            <LiaChalkboardTeacherSolid className="ml-5 text-2xl" />
            <span>Teachers</span>
          </NavLink>

          {/* Blog with Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("blog")}
            onMouseLeave={handleMouseLeave}
            ref={dropdownRefs.blog}
          >
            <NavLink
              to="/blog"
              className={({isActive})=>
              `${isActive ? "border-b-2 border-[#3b82f6]" : ""}
              text-[#3b82f6] hover:border-b-2 hover:border-[#3b82f6]`}
            >
              <IoChatbubblesOutline className="ml-2 text-2xl" />
              <span>Blog</span>
            </NavLink>
            {activeDropdown === "blog" &&
              renderDesktopDropdownItems(["Blog Grid", "Blog List"], "blog")}
          </div>

          {/* Pages with Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("pages")}
            onMouseLeave={handleMouseLeave}
            ref={dropdownRefs.pages}
          >
            <li className="text-[#f86ab4] hover:border-b-2 hover:border-[#f86ab4]">
              <FaCodeBranch className="ml-5 text-2xl" />
              <span>Pages</span>
            </li>
            {activeDropdown === "pages" &&
              renderDesktopDropdownItems(
                [
                  { type: "link", label: "Events", path: "/events" },
                  { type: "link", label: "Services", path: "/services" },
                  { type: "link", label: "Gallery", path: "/gallery" },
                  { type: "link", label: "FAQ", path: "/faq" },
                  { type: "link", label: "Membership Level", path: "/membership" },
                ],
                "pages"
              )}
          </div>

          {/* Contact Us */}
          <NavLink to="/contact" className={({isActive})=>
            `${isActive ? "border-b-2 border-[#43cd66]" : ""}
            text-[#43cd66] hover:border-b-2 hover:border-[#43cd66]`
          }>
            <RiContactsBook2Fill className="ml-7 text-2xl" />
            <span>Contact Us</span>
          </NavLink>
        </ul>
      </div>
      {renderMobileMenu()}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleMobileMenu}
        ></div>
      )}
    </nav>
  );
}

export default Navbar;
