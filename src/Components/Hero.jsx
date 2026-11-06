import React from 'react'
import '../App.css'
const Hero = () => {
  return (
   <section className='text-center mt-3 text-white'>
      <h1>
         Find Your <span className='text-primary'>Dream Job</span> <br></br> Today
        </h1>
          <p>
          Discover thousands of job opportunities from top companies.<br></br>
          <span className='text-warning'> Start your career journey with JobConnect.</span>
        </p>
          <div className='d-flex gap-4 justify-content-center'>
            <input type='text' placeholder='enter job title' className='form-control w-25 border border-2 rounded-4'/>
            <input type='text' placeholder='location' className='form-control w-25  border border-2 rounded-4'/>
            <button className='btn btn-success'>Search Jobs</button>
         </div>
   </section>
  )
}

export default Hero
