import React,{useState} from "react";
import { useParams } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import IMG1 from "../../assets/3.jpg";
import IMG2 from "../../assets/5.jpg";
import IMG3 from "../../assets/6.jpg";
import Footer from '../../components/Footer'
import Road from "../../assets/road.png";
import { DiCssTricks } from "react-icons/di";
import BlogsImg from '../../assets/blogs.png'
import BlogImg1 from '../../assets/blog1.jpg'
import BlogImg2 from '../../assets/blog2.jpeg'

// Simulate your blog data (you could replace this with an API call)
const blogPosts = [
    {
        id: 1,
        image: BlogImg1,
        date: "February 21, 2019",
        title: "Play is Our Brain’s Favourite Way of Learning",
        author: "by Thang",
        description:
          "If you are a newbie to managing a WordPress website, then congratulations! You are here at the right track with us because we are going to introduce you one of the most basic knowledge when owning a WordPress page: how to find your site the best WordPress Hosting service. This process is often overlooked by most of the website owners. But it can be considered the most important key point to bring your site to stand out of the crowd. A great hosting service could help you to improve SEO and increase sales as well.But first thing first, what is a hosting? Well, basically it is a space that contains all the data related to your website such as your source codes, uploaded contents    images, sounds and other media and your database. Imagine your site is a mixture of      juices and a jar can be considered a hosting.",
          description2: "But it can be considered the most important key point to bring your site to stand out of the crowd. A great hosting service could help you to improve SEO and increase sales as well.But first thing first, what is a hosting? Well, basically it is a space that contains all the data related to your website such as your source codes, uploaded contents    images, sounds and other media and your database. Imagine your site is a mixture of      juices and a jar can be considered a hosting."
      },
      {
        id: 2,
        image: BlogImg1,
        date: "February 22, 2022",
        title: "Play is Our Brain’s Favourite Way of Learning",
        author: "by ABK",
        description:
          "If you are a newbie to managing a WordPress website, then congratulations! You are here at the right track with...",
      },
      {
        id: 3,
        image: BlogImg2,
        date: "September 6, 2011",
        title: "Play is Our Brain’s Favourite Way of Learning",
        author: "by Salam",
        description:
          "If you are a newbie to managing a WordPress website, then congratulations! You are here at the right track with...",
      },
      {
        id: 4,
        image: BlogImg1,
        date: "February 21, 2019",
        title: "Play is Our Brain’s Favourite Way of Learning",
        author: "by Thang",
        description:
          "If you are a newbie to managing a WordPress website, then congratulations! You are here at the right track with...",
      },
      {
        id: 5,
        image: BlogImg2,
        date: "February 21, 2019",
        title: "Play is Our Brain’s Favourite Way of Learning",
        author: "by Thang",
        description:
          "If you are a newbie to managing a WordPress website, then congratulations! You are here at the right track with...",
      },
      {
        id: 6,
        image: BlogImg2,
        date: "February 21, 2019",
        title: "Play is Our Brain’s Favourite Way of Learning",
        author: "by Thang",
        description:
          "If you are a newbie to managing a WordPress website, then congratulations! You are here at the right track with...",
      },
      {
        id: 7,
        image: BlogImg1,
        date: "February 21, 2019",
        title: "Play is Our Brain’s Favourite Way of Learning",
        author: "by Thang",
        description:
          "If you are a newbie to managing a WordPress website, then congratulations! You are here at the right track with...",
      },
      {
        id: 8,
        image: BlogImg2,
        date: "February 21, 2019",
        title: "Play is Our Brain’s Favourite Way of Learning",
        author: "by Thang",
        description:
          "If you are a newbie to managing a WordPress website, then congratulations! You are here at the right track with...",
      },
];

function BlogDetails() {
    const [searchTerm, setSearchTerm] = useState("");
  const { id } = useParams(); 
  const blogPost = blogPosts.find((post) => post.id === parseInt(id)); 
  if (!blogPost) {
    return <div>Blog post not found!</div>;
  }


  

  const handleSearch = (e) => {
    e.preventDefault();
    //TODO: Search Logics here
    console.log("Searching for:", searchTerm);
  };

  const tags = [
    "baby",
    "boys",
    "children",
    "dance",
    "girls",
    "infant",
    "math",
    "music",
    "painting",
    "science",
    "toddlers",
  ];

  return (
    <>
    <div className="min-h-screen grid grid-cols-3 w-full px-14 bg-white space-x-4  mb-20">
    <div className="container mx-auto px-6 py-10 col-span-2">
      <h1 className="text-3xl font-bold mb-4 text-center">{blogPost.title}</h1>
      <p className="text-sm text-gray-500 mb-6 text-center">
        By {blogPost.author} on {blogPost.date}
      </p>
      <img
        src={blogPost.image}
        alt={blogPost.title}
        className=" object-cover w-full h-[600px] overflow-hidden rounded-md mb-6"
      />
      <p className="text-base text-gray-700 ">{blogPost.description}</p>
      <div className="flex mt-6">
      <DiCssTricks  className="text-red-500 mr-6 -mt-3" size={64}/><h1 className="text-2xl text-[#56509f]">I’m a Copywriter in a Digital Agency, I was searching for courses that’ll help me broaden my skill set. Before signing up for Rob’s course I tried many web development courses, but no course comes.</h1>
      </div>
      {/* TAGS */}
      <div className=" px-7 py-8 flex">
              <h1 className="text-blue-500 text-2xl font-mono py-6 mt-1">TAGS:</h1>
              <div>
                <div className="flex flex-wrap gap-2 justify-center mt-6">
                  {tags.map((tag, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full shadow-sm hover:bg-[#f26a8e] hover:text-white cursor-pointer transition-all"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
        </div>

        <div className="px-10 py-5">
            <img src={BlogsImg} alt="" className="w-full h-full" />
        </div>

        <p className="text-base text-gray-700 ">{blogPost.description2}</p>

    </div>


    {/* //TODO: Right Section */}

    {/* Right Section */}
    <div className="sticky top-14 h-[1450px] pt-4 col-span-1 bg-white min-h-screen w-full">
          <div>
            {/* Button */}
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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
                    <CiSearch
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
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

            {/* CATEGORIES */}
            <div className="px-7 py-14 space-y-4">
              <h1 className="text-blue-500 text-2xl font-mono">CATEGORIES</h1>
              <ul className="text-xl flex flex-col font-thin">
                <div className="flex ">
                  <GoDotFill className="mt-2 mr-2 h-3 w-3 text-blue-600" />
                  <li className="">Activities</li>
                </div>

                <div className="flex">
                  <GoDotFill className="mt-2 mr-2 h-3 w-3 text-blue-600" />
                  <li>Children</li>
                </div>

                <div className="flex">
                  <GoDotFill className="mt-2 mr-2 h-3 w-3 text-blue-600" />
                  <li>Edication</li>
                </div>

                <div className="flex ">
                  <GoDotFill className="mt-2 mr-2 h-3 w-3 text-blue-600" />
                  <li>Parents</li>
                </div>
              </ul>
            </div>

            {/* LATEST POSTS */}
            <div className="px-7 py-3">
              <h1 className="text-blue-500 text-2xl font-mono">LATEST POSTS</h1>
              <div className="flex mt-12">
                <img src={IMG1} alt="" className="w-24 h-24 rounded-md" />
                <div className="ml-6 mt-1">
                  <h1 className="text-xl font-semibold text-blue-500 hover:text-red-500">
                    8 ways to keep your heart forever young
                  </h1>
                  <p className="text-sm py-3 font-extralight">
                    December 27, 2017
                  </p>
                </div>
              </div>
              <div className="flex mt-10">
                <img src={IMG1} alt="" className="w-24 h-24 rounded-md" />
                <div className="ml-6 mt-1">
                  <h1 className="text-xl font-semibold text-blue-500 hover:text-red-500 ">
                    How Drugs Alter The Brain
                  </h1>
                  <p className="text-sm py-4 font-extralight">
                    December 27, 2017
                  </p>
                </div>
              </div>
              <div className="flex mt-10">
                <img src={IMG1} alt="" className="w-24 h-24 rounded-md" />
                <div className="ml-6 mt-1">
                  <h1 className="text-xl font-semibold text-blue-500 hover:text-red-500 ">
                    Red-Green Colour Blindness
                  </h1>
                  <p className="text-sm py-4 font-extralight">
                    December 27, 2017
                  </p>
                </div>
              </div>
            </div>

            {/* //Free Call */}
            <div className="py-4 px-4 flex flex-col justify-center items-center bg-[#56509f] space-y-6 text-white mt-12 rounded-md w-[300px] ml-16">
              <h1 className="text-3xl text-white font-bold">Free Call</h1>
              <p className="text-center">
                Pulvinar est metro ligula blandit maecenas
              </p>
              <h1 className="text-3xl">1-900-22-44-88</h1>
              <button className="px-8 py-2 bg-red-500 rounded-full">
                CONTACT US
              </button>
            </div>

            {/* TAGS */}
            <div className=" px-7 py-8">
              <h1 className="text-blue-500 text-2xl font-mono py-6">TAGS</h1>
              <div>
                <div className="flex flex-wrap gap-2 justify-center mt-6">
                  {tags.map((tag, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full shadow-sm hover:bg-[#f26a8e] hover:text-white cursor-pointer transition-all"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        </div>

        {/* gaddi */}
      <div className="relative flex">
        <img
          src={Road}
          alt="Road"
          className="w-full h-16 lg:h-24  bg-[#f1f5f9]"
        />
      </div>

        <Footer/>
      




    </>
  );
}

export default BlogDetails;
