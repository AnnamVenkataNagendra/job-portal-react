import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import connection from '../LoginApi/connection';

const CandidateDashBoard = () => {
  const [jobs,setJobs]=useState([])
  const [selectedJobId, setSelectedJobId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [resumeUrl, setResumeUrl] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  const fetchJobs = async () => {
        try {
          const res = await connection.jobs();
          setJobs(res.data.success);
        } catch (error) {
          console.error('Unable to load jobs', error);
        }
      };
     const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const res = await connection.appliedJobd({
            job_id: selectedJobId,
            resume_url: resumeUrl,
            cover_letter: coverLetter
        });
        console.log(res)
        alert('Applied successfully');
        setShowForm(false);
        setResumeUrl('');
        setCoverLetter('');

    } catch (error) {
        alert('Application failed', error);
    }
};
  useEffect(()=>{
   fetchJobs()
  },[])
  const handleApply = (jobId) => {
    setSelectedJobId(jobId);
    setShowForm(true);
};
  return (
    <div className="container-fluid bg-light min-vh-100 p-4">
     <div className='bg-dark text-white rounded-4 p-3 mb-4'>
      <h2>Welcome to JobConnect!</h2>
        <p className="mb-0">
            Find your dream job and track your career journey.
        </p>
        <Link to='/' className='btn btn-primary mt-3'>Browse Jobs</Link>
     </div>
     <div className='d-flex gap-4'>
       <div className='card border-0 shadow-sm p-5 w-25'>
          <h6 className='fw-bold'>Available Jobs</h6>
          <h1>{jobs.length}</h1>
          <span>Explore opportunities</span>
       </div>
        <div className='card border-0 rou shadow-sm p-5 w-25'>
          <h6 className='text-center fw-bold'>Your Jobs</h6>
         <Link to='/candidateapp' className='text-decoration-none text-center bg-warning text-dark rounded-pill px-3 py-2'><span>Your application</span></Link>
       </div>
        <div className='card border-0 shadow-sm p-5 w-25'>
          <h6 className='fw-bold'>Under Review</h6>
          <span>Application in prograss</span>
       </div>
        <div className='card border-0 shadow-sm p-5 w-25'>
          <h6 className='fw-bold'>Shortlisted</h6>
          <span>Potential opportunities</span>
       </div>
     </div>
      <div className="card border-0 shadow-sm p-4 mt-5">
      <div className='d-flex justify-content-between text-center'>
          <h3>Latest Job Opportunities</h3>
          <Link className='btn btn-outline-primary' to='/'>View All Jobs</Link>
        </div>
        <div className='d-flex flex-wrap justify-content-around text-center '>
          {
            jobs.map((job)=>{
              return(
                <div key={job.id}
                   className='card w-25 m-3 p-4 border-0 rounded-4 shadow-sm bg-dark text-white'>
                   <h4>{job.title}</h4>
                   <p>{job.location} | {job.job_type}</p>
                   <p>₹ {job.salary}</p>
                   <div className='card-footer'>
                    <button className='btn btn-primary w-100' onClick={()=>{handleApply(job.id)}}>Apply</button>
                  </div>
                </div>
              )
            })
          }
        </div>
     </div>
    {showForm && (
    <div className="card shadow p-4 mt-4">
        <h3>Apply for Job</h3>

        <form onSubmit={handleSubmit}>

            <label>Resume URL</label>
            <input
                type="url"
                className="form-control mb-3"
                value={resumeUrl}
                onChange={(e) => setResumeUrl(e.target.value)}
                placeholder="Enter resume URL"
                required
            />

            <label>Cover Letter</label>
            <textarea
                className="form-control mb-3"
                value={coverLetter}
                onChange={(e) => setCoverLetter(e.target.value)}
                placeholder="Write your cover letter"
                required
            />

            <button type="submit" className="btn btn-primary">
                Submit Application
            </button>

            <button
                type="button"
                className="btn btn-secondary ms-2"
                onClick={() => setShowForm(false)}
            >
                Cancel
            </button>

        </form>
    </div>
)}
    </div>
  )
}

export default CandidateDashBoard
