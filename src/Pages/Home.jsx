
import React, { useEffect } from 'react'
import NavBarPage from './NavBarPage'
import Hero from '../Components/Hero'
import JobCard from '../Components/JobCard'
import FooterComponent from '../Components/FooterComponent'

const Home = () => {
    useEffect(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('user')
    },[]);
  return (
    <div>
      <NavBarPage/>
      <Hero/>
      <JobCard/>
      <FooterComponent/>
    </div>
  )
}

export default Home
