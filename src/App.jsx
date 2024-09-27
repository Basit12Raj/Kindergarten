import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import About from "./components/About"
import Root from "./components/Root"
import Classes from "./components/Classes"
import Teachers from "./components/Teachers"
import Blogs from "./components/Blogs"
import BlogDetails from "./components/blogs/BlogDetails"
import Events from "./components/pages/events/Events"
import Services from "./components/pages/services/Services"
import Gallery from "./components/pages/gallery/Gallery"
import Faq from "./components/pages/faq/Faq"
import Contact from "./components/contact/Contact"
import Membership from "./components/pages/membership/Membership"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/class",
        element: <Classes/>
      },
      {
        path: "/teachers",
        element: <Teachers/>
      },
      {
        path: "/blog",
        element: <Blogs/>
      },
      {
        path: "/blog/:id",
        element: <BlogDetails/>
      },
      {
        path: "/membership",
        element: <Membership/>
      },
      {
        path: "/events",
        element: <Events/>
      },
      {
        path: "/services",
        element: <Services/>
      },
      {
        path: "/gallery",
        element: <Gallery/>
      },
      {
        path: "/faq",
        element: <Faq/>
      },
      {
        path: "/contact",
        element: <Contact/>
      }
    ]
    
  }
])

function App() {

  return (
    <>
   
    <RouterProvider router={router}>
    </RouterProvider>
    
    
  
    {/* <KindergartenSection/> */}
    </>
  )
}

export default App
