
import React, { useEffect } from 'react'
import NavBarPage from './NavBarPage'
import Hero from '../Components/Hero'
import JobCard from '../Components/JobCard'

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
    </div>
  )
}

export default Home
