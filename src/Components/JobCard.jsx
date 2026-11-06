
import React, { useEffect, useState } from 'react';
import '../App.css';
import connection from '../LoginApi/connection';
import { useNavigate } from 'react-router-dom';

const JobCard = () => {

  const [getJobs, setJobs] = useState([]);
  const usenavigate = useNavigate();
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await connection.jobs();
        setJobs(res.data.success);
      } catch (error) {
        console.error('Unable to load jobs', error);
      }
    };

    fetchJobs();
  }, []);
    const handelApply = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please login before applying');
      usenavigate('/login');
      return;
    }
  };
  return (
    <div className='Jobs-card'>

      <h2>Latest Job Opportunities</h2>

      <p className='text-success'>
        Explore the latest jobs posted by recruiters.
      </p>

      <div className='d-flex flex-wrap justify-content-center'>

        {getJobs.map((data) => (

          <div
            key={data.id}
            className='card w-25 m-3 p-4 bg-dark text-white'
          >

            <h4>{data.title}</h4>

            <h4>{data.company_name}</h4>

            <p>
              {data.location}

              <span className='text-primary ms-2'>
                {data.job_type}
              </span>
            </p>

            <span>{`₹ ${data.salary}`}</span>

            <p>{data.description}</p>

            <div className='card-footer'>

              <button
                className='btn btn-danger w-100'
                onClick={() => handelApply(data.id)}
              >
                Apply
              </button>

            </div>

          </div>

        ))}

      </div>
    </div>
  );
};

export default JobCard;
