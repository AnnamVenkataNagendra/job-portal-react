
import React, { useEffect, useState } from 'react'
import connection from '../LoginApi/connection';
import { useNavigate } from 'react-router-dom';

const CandidateApplication = () => {
  const [getApp,setApp]=useState([]);
  const navigate=useNavigate();
  const CandiateApplication=async()=>{
   try {
    const res = await connection.getCandidateApplication();
    setApp(res.data.applicationData);

} catch (err) {
    console.log('unable to fetch', err);
} 
  }

  const viewApplication=()=>{
    CandiateApplication();
  }
  const candidate = JSON.parse(localStorage.getItem('user'));
  const hendelClick=()=>{
   localStorage.removeItem('token');
   localStorage.removeItem('user');
   alert('Are you sure want to logout')
   navigate('/')
  }
  return (
    <div className='container-fluid p-4'>
       <div  className='alert alert-dark rounded-4'>
      <h2>Welcome to Job Application !</h2>
      <h4 className='text-primary'>Welcome to {candidate? candidate.name : candidate}</h4>
     </div>
     {
      getApp.map((app)=>{
       return(
         <>
        <div className="card border-0 shadow-sm rounded-4 p-4 mb-4 bg-dark text-white">
          <div className='row mb-3'>
          <div className="col-md-6">
            <p className="mb-2">
            <strong>Company:</strong>{' '}
            {app.company_name}
            </p>
            </div>
            <div className='col-md-6'>
             <p className='mb-2'>
              <strong>Location:</strong>{' '}
              {app.location} | <span className='badge bg-success text-dark py-1 px-1'>{app.job_type}</span>
             </p>
            </div>
            <div className='col-md-6'>
             <p className='mb-2'>
              <strong>Application Status:</strong>{' '}
              <span className='badge bg-warning text-dark py-2 px-2'>{app.application_status}</span>
             </p>
            </div>
              <div className='col-md-6'>
             <p className='mb-2'>
              <strong>Application Id:</strong>{' '}
              <span> {app.application_id}</span>
             </p>
            </div>
          </div>
        </div>
        </>
       )
      })
     }
      <button className='btn btn-danger w-25 rounded-3' onClick={hendelClick}>Logout</button>
      <button className='btn btn-primary ms-5 w-25' onClick={viewApplication}>View Application</button>      
    </div>
  )
}

export default CandidateApplication
