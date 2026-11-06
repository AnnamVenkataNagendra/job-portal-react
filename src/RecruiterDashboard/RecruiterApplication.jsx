
import React, { useEffect, useState } from 'react';
import connection from '../LoginApi/connection';
import { useNavigate } from 'react-router-dom';

const RecruiterApplications = () => {
    const [applications, setApplications] = useState([]);
    const navigate=useNavigate();
    const fetchApplications = async () => {
        try {
            const res = await connection.getRecruiterApplication();
            setApplications(res.data.applicants);
        } catch (error) {
            console.log('Unable to fetch applications', error);
        }
    };
    const updateStatus=async(id,status)=>{

        try{
          const res= await connection.getApplicationStatus(id,status);
          setApplications((prevApplications) =>
          prevApplications.map((app) =>
          app.application_id === id
          ? { ...app, status: status }
         : app));
          alert(res.data.message)
        }catch(err){ 
          alert('Unable to update application status')
        }

    }
   useEffect(() => {
        fetchApplications();
    }, []);

    const recruiter=()=>
    {
        navigate('/recruiter')
    }
    return (
        <div className="container py-4">
            <h2 className="alert alert-light">
                Applications Received
            </h2>
            <p className="text-white mb-4">
                Review candidates who applied for your jobs.
            </p>
            {
               applications.map((app)=>{
                return(
                    <>
                       <div
                        className="card border-0 shadow-sm rounded-4 p-4 mb-4"
                        key={app.application_id}>
                         <div className="d-flex align-items-center gap-3">
                                <div
                                    className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
                                    style={{
                                        width: '60px',
                                        height: '60px',
                                        fontSize: '18px'
                                    }}
                                >
                                    {app.candidate_name}
                                </div>
                                    <div>
                                    <h5 className="fw-bold mb-1">
                                        {app.candidate_name}
                                    </h5>

                                    <p className="text-muted mb-0">
                                        {app.candidate_email}
                                    </p>
                                </div>
                         </div>
                          <div className='row mt-2'>
                                 <div className="col-md-6">
                                <p className="mb-2">
                                    <strong>Applied Job:</strong>{' '}
                                    {app.job_title}
                                </p>
                            </div>
                               <div className="col-md-6">
                                <p className="mb-2">
                                    <strong>Company:</strong>{' '}
                                    {app.company_name}
                                </p>
                            </div>
                            <div className="col-md-6">
                                <p className="mb-2">
                                    <strong>Applied Date:</strong>{' '}
                                    {new Date(app.applied_at).toLocaleDateString()}
                                </p>
                            </div>
                              <div className="col-md-6">
                                <strong>Application Id:</strong>{' '}<span>{app.application_id}</span>
                            </div>
                              <div className="col-md-6">
                                <strong>Application Status:</strong>{' '}<span className="badge bg-warning text-dark rounded-pill px-3 py-2">{app.application_status}</span>
                            </div>

                                </div>
                                 <div className='mb-3'>
                                <p className='mb-2'>
                                    <strong>Resume:</strong>{' '}
                                     <a href={app.resume_url}>View</a>
                                </p>

                            </div>
                        <div className="mb-4">
                            <strong>Cover Letter:</strong>

                            <p className="text-muted mt-2 mb-0">
                                {app.cover_letter || 'No cover letter provided'}
                            </p>
                        </div>
                         <select
                         className='form-select'
                         value={app.application_status}
                         onChange={(e)=>{app.application_status=e.target.value}}>
                        <option value="Applied">Applied</option>
                        <option value="Under Review">Under Review</option>
                        <option value="Shortlisted">Shortlisted</option>
                        <option value="Rejected">Rejected</option>
                        <option value="Selected">Selected</option>
                        </select>
                         <div className='d-flex'>
                              <button className="btn btn-primary mt-3 w-25" onClick={() => updateStatus(app.application_id, app.application_status)}>
                          Update Status
                          </button>
                           <button className="btn btn-danger mt-3 w-25 ms-5" onClick={ recruiter}>
                          Recruiter DashBoard
                          </button>
                         </div>
                        </div>
                    </>
                )
               })
            }
        </div>
    );
};

export default RecruiterApplications;
