import React from 'react'
import HomeService from './HomeService'
import SerForKid from './SerForKid'
import HomeActivity from './HomeActivity'
import Footer from '../../../components/Footer'
import EnrollChildSection from './Enroll'
import TeacherProfile from './TeacherService'

function Services() {
  return (
    <>
    <HomeService/>
    <SerForKid/>
    <HomeActivity/>
    <EnrollChildSection/>
    <TeacherProfile/>
    <Footer/>
    </>
  )
}

export default Services