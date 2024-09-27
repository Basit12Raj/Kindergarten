import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import { Calendar, ChevronLeft, ChevronRight, UserRound } from "lucide-react";
import IMG1 from "../../assets/3.jpg";
import BlogImg1 from '../../assets/blog1.jpg'
import BlogImg2 from '../../assets/blog2.jpeg'
import Road from "../../assets/road.png";

const BlogCard = ({ id, images, date, title, author, description }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mt-12 mx-auto">
      <div className="relative">
        <img
          className="w-full h-48 object-cover"
          src={images[currentImageIndex]}
          alt={title}
        />
        <div className="absolute top-1/2 left-0 w-full flex justify-between p-2">
          <ChevronLeft
            size={24}
            className="text-white cursor-pointer"
            onClick={prevImage}
          />
          <ChevronRight
            size={24}
            className="text-white cursor-pointer"
            onClick={nextImage}
          />
        </div>
        <div className="absolute left-1 bottom-0 flex items-center text-xs sm:text-sm text-white mb-2 bg-gray-400 px-3 py-1 w-fit">
          <Calendar className="mr-1" size={12} />
          {date}
        </div>
      </div>

      <div className="px-4 py-3">
        <Link to={`/blog/${id}`} className="font-bold text-lg sm:text-xl hover:text-red-400 mb-2">{title}</Link>
        <div className="px-1 pt-2 pb-1 mt-1 flex items-center">
          <UserRound className="mr-2 text-red-500" size={14} />
          <span className="inline-block text-xs sm:text-sm font-extralight text-gray-700">
            {author}
          </span>
        </div>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    </div>
  );
};

function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      images: [BlogImg1, BlogImg2],
      date: "February 21, 2019",
      title: "Play is Our Brain’s Favourite Way of Learning",
      author: "by Thang",
      description:
        "If you are a newbie to managing a WordPress website, then congratulations! You are here at the right track with...",
    },
    {
      id: 2,
      images: [ BlogImg2,BlogImg1],
      date: "February 22, 2022",
      title: "Play is Our Brain’s Favourite Way of Learning",
      author: "by ABK",
      description:
        "If you are a newbie to managing a WordPress website, then congratulations! You are here at the right track with...",
    },
    {
      id: 3,
      images: [BlogImg1, BlogImg2],
      date: "September 6, 2011",
      title: "Play is Our Brain’s Favourite Way of Learning",
      author: "by Salam",
      description:
        "If you are a newbie to managing a WordPress website, then congratulations! You are here at the right track with...",
    },
    {
      id: 4,
      images: [BlogImg2,BlogImg1],
      date: "February 21, 2019",
      title: "Play is Our Brain’s Favourite Way of Learning",
      author: "by Thang",
      description:
        "If you are a newbie to managing a WordPress website, then congratulations! You are here at the right track with...",
    },
    {
      id: 5,
      images: [BlogImg1, BlogImg2],
      date: "February 21, 2019",
      title: "Play is Our Brain’s Favourite Way of Learning",
      author: "by Thang",
      description:
        "If you are a newbie to managing a WordPress website, then congratulations! You are here at the right track with...",
    },
    {
      id: 6,
      images: [BlogImg2,BlogImg1],
      date: "February 21, 2019",
      title: "Play is Our Brain’s Favourite Way of Learning",
      author: "by Thang",
      description:
        "If you are a newbie to managing a WordPress website, then congratulations! You are here at the right track with...",
    },
    {
      id: 7,
      images: [BlogImg1, BlogImg2],
      date: "February 21, 2019",
      title: "Play is Our Brain’s Favourite Way of Learning",
      author: "by Thang",
      description:
        "If you are a newbie to managing a WordPress website, then congratulations! You are here at the right track with...",
    },
    {
      id: 8,
      images: [BlogImg2,BlogImg1],
      date: "February 21, 2019",
      title: "Play is Our Brain’s Favourite Way of Learning",
      author: "by Thang",
      description:
        "If you are a newbie to managing a WordPress website, then congratulations! You are here at the right track with...",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  const tags = [
    "baby", "boys", "children", "dance", "girls", "infant", "math",
    "music", "painting", "science", "toddlers",
  ];

  return (
    <>
      <div className="min-h-screen w-full px-4 sm:px-6 lg:px-14 bg-white mb-20">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Left Section */}
          <div className="lg:col-span-2 bg-white min-h-screen overflow-y-auto mb-8 lg:mb-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {blogPosts.map((post) => (
                <BlogCard key={post.id} {...post} />
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:sticky lg:top-14 lg:h-[1450px] pt-4 bg-white w-full">
            {/* Search */}
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
              <form onSubmit={handleSearch} className="mt-6">
                <div className="relative">
                  <input
                    type="text"
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="What are you Looking for?"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <CiSearch className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <button
                    type="submit"
                    className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100 rounded-r-lg"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>

            {/* Categories */}
            <div className="px-4 sm:px-7 py-8 space-y-4">
              <h1 className="text-blue-500 text-xl sm:text-2xl font-mono">CATEGORIES</h1>
              <ul className="text-lg sm:text-xl flex flex-col font-thin">
                {["Activities", "Children", "Education", "Parents"].map((category, index) => (
                  <div key={index} className="flex items-center">
                    <GoDotFill className="mr-2 h-3 w-3 text-blue-600" />
                    <li>{category}</li>
                  </div>
                ))}
              </ul>
            </div>

            {/* Latest Posts */}
            <div className="px-4 sm:px-7 py-3">
              <h1 className="text-blue-500 text-xl sm:text-2xl font-mono mb-6">LATEST POSTS</h1>
              {[
                { title: "8 ways to keep your heart forever young", date: "December 27, 2017" },
                { title: "How Drugs Alter The Brain", date: "December 27, 2017" },
                { title: "Red-Green Colour Blindness", date: "December 27, 2017" }
              ].map((post, index) => (
                <div key={index} className="flex mt-6">
                  <img src={IMG1} alt="" className="w-20 h-20 sm:w-24 sm:h-24 rounded-md object-cover" />
                  <div className="ml-4 sm:ml-6 mt-1">
                    <h1 className="text-lg sm:text-xl font-semibold text-blue-500 hover:text-red-500">
                      {post.title}
                    </h1>
                    <p className="text-xs sm:text-sm py-2 font-extralight">{post.date}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Free Call */}
            <div className="py-6 px-4 flex flex-col justify-center items-center bg-[#56509f] space-y-4 text-white mt-8 rounded-md mx-auto max-w-xs">
              <h1 className="text-2xl sm:text-3xl text-white font-bold">Free Call</h1>
              <p className="text-center text-sm sm:text-base">
                Pulvinar est metro ligula blandit maecenas
              </p>
              <h1 className="text-2xl sm:text-3xl">1-900-22-44-88</h1>
              <button className="px-6 py-2 bg-red-500 rounded-full text-sm sm:text-base">
                CONTACT US
              </button>
            </div>

            {/* Tags */}
            <div className="px-4 sm:px-7 py-8">
              <h1 className="text-blue-500 text-xl sm:text-2xl font-mono mb-6">TAGS</h1>
              <div className="flex flex-wrap gap-2 justify-center">
                {tags.map((tag, index) => (
                  <div
                    key={index}
                    className="px-3 py-1 text-xs sm:text-sm bg-gray-100 text-gray-600 rounded-full shadow-sm hover:bg-[#f26a8e] hover:text-white cursor-pointer transition-all"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Road Image */}
      <div className="relative flex">
        <img
          src={Road}
          alt="Road"
          className="w-full h-12 sm:h-16 lg:h-24 object-cover bg-[#f1f5f9]"
        />
      </div>
    </>
  );
}

export default BlogSection;