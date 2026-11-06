
import React, { useState } from 'react'
import connection from '../LoginApi/connection'
import { useNavigate } from 'react-router-dom'

const NewJobs = () => {
    const [getPostJobs,setPostJobs]=useState({
        title:'',
        company_name:'',
        location:'',
        job_type: 'Full-time',
        salary:'',
        description:'',
        requirement:''
    })
    const navigate=useNavigate();
    const hendelClick=(e)=>{
        setPostJobs({
            ...getPostJobs,
             [e.target.name]:e.target.value
        })
    }

    const handelSubmitForm=async(e)=>{
      e.preventDefault()
      
      try{
        const res=await connection.newJobs(getPostJobs)
        console.log(res.data);
        alert('New Job created Succesfully!')
        setPostJobs({
        title:'',
        company_name:'',
        location:'',
        salary:'',
        description:'',
        requirement:''
        })
        navigate('/recruiter')
      }
      catch(err){
        console.log('unable to post new jobs', err)
        alert('please try again!')
        setPostJobs({
        title:'',
        company_name:'',
        location:'',
        salary:'',
        description:'',
        requirement:''
        })
      }
    }
  return (
    <form onSubmit={handelSubmitForm}>
        <div className='container job-post w-50 p-3 mt-3 '>
             <h2 className='bi bi-person-fill text-warning'> Post a New Job</h2>
             <dl>
                <dt>Title:</dt>
                    <dd>
                        <input
                            type='text'
                            name='title'
                            className='form-control max-auto'
                            placeholder="Enter your title"
                            value={getPostJobs.title}
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
                            value={getPostJobs.company_name}
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
                            value={getPostJobs.location}
                            onChange={hendelClick}
                            required
                        />
                    </dd>
                    <dt>Jobtype:</dt>
                    <dd>
                       <select 
                          className="form-control"
                          name="job_type"
                          value={getPostJobs.job_type}
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
                            value={getPostJobs.salary}
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
                            value={getPostJobs.description}
                            onChange={hendelClick}
                            required
                        />
                    </dd>
                      <dt>Requirement:</dt>
                    <dd>
                        <textarea
                            type='text'
                            name='requirement'
                            className='form-control max-auto'
                            placeholder="Enter your requirement"
                            value={getPostJobs.requirement}
                            onChange={hendelClick}
                            required
                        />
                    </dd>
             </dl>
              <button className='btn btn-primary w-50' type='submit'>Post Job</button>
        </div>
    </form>
  )
}

export default NewJobs
