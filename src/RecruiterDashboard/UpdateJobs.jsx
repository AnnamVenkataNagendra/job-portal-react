import React, {useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import connection from '../LoginApi/connection';

const UpdateJobs = () => {
     const [getUpdateJobs,setUpdateJobs]=useState({
            title:'',
            company_name:'',
            location:'',
            job_type: 'Full-time',
            salary:'',
            description:'',
            requirements:''
        })  
        const usenavigate=useNavigate();
        const {id}=useParams();
        console.log("Job ID:", id);
        const hendelClick=(e)=>{
            setUpdateJobs({
                ...getUpdateJobs,
                 [e.target.name]:e.target.value
            })
        }
        const handelSubmit=async(e)=>{
         e.preventDefault()
            try{
             const res=await connection.updateByID(id, getUpdateJobs)
             console.log(res.data.message)
             alert('Job updated successfully!')
             setUpdateJobs({
                title:'',
                company_name:'',
                location:'',
                job_type: '',
                salary:'',
                description:'',
                requirements:''
                })
                usenavigate('/recruiter')
            }
            catch(err){
                alert('unable to update job posted');
                console.log("updated failed!", err)
                setUpdateJobs({
                title:'',
                company_name:'',
                location:'',
                job_type: '',
                salary:'',
                description:'',
                requirements:''
                })
            }  
        }
  return (
         <form onSubmit={handelSubmit}>
        <div className='container job-post w-50 p-3 mt-3 '>
             <h2 className='bi bi-person-fill text-warning'> Update a New Job</h2>
             <dl>
                <dt>Title:</dt>
                    <dd>
                        <input
                            type='text'
                            name='title'
                            className='form-control max-auto'
                            placeholder="Enter your title"
                            value={getUpdateJobs.title}
                            onChange={hendelClick}
                            required
                        />
                    </dd>
                    <dt>Company Name:</dt>
                    <dd>
                        <input
                            type='text'
                            name='company_name'
                            className='form-control max-auto'
                            placeholder="Enter your company name"
                            value={getUpdateJobs.company_name}
                            onChange={hendelClick}
                            required
                        />
                    </dd>
                    <dt>location:</dt>
                    <dd>
                        <input
                            type='text'
                            name='location'
                            className='form-control max-auto'
                            placeholder="Enter your location"
                            value={getUpdateJobs.location}
                            onChange={hendelClick}
                            required
                        />
                    </dd>
                    <dt>Jobtype:</dt>
                    <dd>
                       <select 
                          className="form-control"
                          name="job_type"
                          value={getUpdateJobs.job_type}
                          onChange={hendelClick}
                       >
                         <option value="Full-time">Full-time</option>
                         <option value="Part-time">Part-time</option>
                         <option value="Internship">Internship</option>
                         <option value="Contract">Contract</option>
                       </select>
                    </dd>
                     <dt>Salary:</dt>
                    <dd>
                        <input
                            type='number'
                            name='salary'
                            className='form-control max-auto'
                            placeholder="Enter your salary"
                            value={getUpdateJobs.salary}
                            onChange={hendelClick}
                            required
                        />
                    </dd>
                     <dt>Description:</dt>
                    <dd>
                        <textarea
                            type='text'
                            name='description'
                            className='form-control max-auto'
                            placeholder="Enter your location"
                            value={getUpdateJobs.description}
                            onChange={hendelClick}
                            required
                        />
                    </dd>
                      <dt>Requirement:</dt>
                    <dd>
                        <textarea
                            type='text'
                            name='requirements'
                            className='form-control max-auto'
                            placeholder="Enter your requirement"
                            value={getUpdateJobs.requirements}
                            onChange={hendelClick}
                            required
                        />
                    </dd>
             </dl>
              <button className='btn btn-primary w-50' type='submit'>Update Job</button>
        </div>
    </form>
  )
}

export default UpdateJobs
