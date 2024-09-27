import React from 'react'
import { Link } from 'react-router-dom'
import Home from './about/Home'
import About1 from './about/About1'
import About2 from './about/About2'
import About3 from './about/About3'
import Team from './about/Team'
import Footer from './Footer'

function About() {
  return (
    <>
    <Home/>
    <About1/>
    <About2/>
    <About3/>
    <Team/>
    <Footer/>
    {/* <Link to="/about">About</Link> */}
    </>
  )
}

export default About