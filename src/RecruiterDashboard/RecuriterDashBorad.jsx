
import React, { useEffect, useState } from 'react';
import '../App.css';
import connection from '../LoginApi/connection';
import { Link, useNavigate } from 'react-router-dom';
const RecruiterDashboard = () => {
  const[getApplication,setApplication]=useState([]);
  const [getCount,setCount]=useState(0)
  const [getAppCount,setAppCount]=useState(0);
  const usenavigate=useNavigate()
  useEffect(()=>{
      const getmyApplicationJobs =async ()=>{
      const response=await connection.recruiterDashboard();
      setApplication(response.data.jobs)
      setCount(response.data.totalJobs)
    }
   getmyApplicationJobs();
  },[])
  useEffect(() => {
    const fetchDashboard = async () => {
        try {
            const res = await connection.getRecruiterApplication();
            setAppCount(res.data.count);
            console.log(res.data.count)
        } catch (error) {
            console.log(error);
        }
    };
    fetchDashboard();
}, []);
const user = JSON.parse(localStorage.getItem('user'));
const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    alert('Logout successful');
    usenavigate('/login');
};
    return (
       <div className='recruiter-layout'>
        <aside className='recruiter-sidebar'>
          <h2>💼 JobConnect</h2>
          <p className="sidebar-subtitle">Find • Hire • Grow</p>
          <nav>
            <button className="active">🏠 Dashboard</button>
           <button>
                <Link to='/newjobs' className='text-decoration-none text-white'>
                            ➕ Post Job
                </Link>
            </button>
               <button>
                        💼 My Jobs
                    </button>
                    <button>
                        👥 Applications
                    </button>
                    <button>
                        👤 Profile
                    </button>
                    <button onClick={()=>{handleLogout()}}>
                        ↪ Logout
                    </button>
          </nav>

          <div className="sidebar-promo">
                 <h3>🚀 Build Your Dream Team</h3>
                  <p>Post jobs and find the best talent!</p>
                </div>
        </aside>
           <div className='recruiter-main'>
            <header className="dashboard-header">
                    <input
                        type="text"
                        placeholder="Search your jobs..." className='form-control'
                    />
                    <h3>Recruiter Dashboard</h3>
                </header>
                      <section className="welcome-banner">
                    <div>
                        <h1>Welcome back, {user?.name}!</h1>
                        <p>
                           Welcome to your JobConnect Recruiter Dashboard.
                            Manage your jobs and applications here.
                        </p>
                    </div>
                    <span>👨‍💻</span>
                </section>
                <section className="stats-grid">
                   <div className="stat-card">
                        <span>💼</span>
                        <div>
                            <p>Total Jobs Posted</p>
                            <p>{getCount}</p>
                        </div>
                    </div>
                       <div className="stat-card">
                        <span>👥</span>
                        <div>
                            <p>Total Applications</p>
                            <p>{getAppCount}</p>
                        </div>
                    </div>
                        <div className="stat-card">
                        <span>✅</span>
                        <div>
                            <p>Active Jobs</p>
                            <h2>--</h2>
                        </div>
                    </div>
                        <div className="stat-card">
                        <span>⏳</span>
                        <div>
                            <p>Pending Review</p>
                            <h2>--</h2>
                        </div>
                    </div>
                </section>
                <section className='section-job'>
                  <div className='section-div'>
                    <h1>💼 My Posted Jobs</h1>
                     <Link to='/newjobs' className='btn btn-primary'>
                            + Post New Job
                        </Link>
                  </div>
                  <table>
                    <thead>
                      <tr>
                        <th>JobId</th>
                        <th>Job Title</th>
                        <th>Company</th>
                        <th>Location</th>
                        <th>JobType</th>
                        <th>Update</th>
                        <th>Delete</th>
                        <th>View</th>
                      </tr>
                    </thead>
                    <tbody>
                     {
                      getApplication.map((result)=>{
                        return(
                        <tr key={result.id}>
                        <td>{result.id}</td>
                        <td>{result.title}</td>
                        <td>{result.company_name}</td>
                        <td>{result.location}</td>
                        <td>{result.job_type}</td>
                        <td><Link  to={`/update/${result.id}`} className='btn btn-primary'>Update</Link></td>
                        <td><Link  to={`/delete/${result.id}`} className='btn btn-danger'>Delete</Link></td>
                        <td><Link className='btn btn-dark' to='/view'>View</Link></td>
                       </tr>
                       
                        )
                        
                      })
                     }
                    </tbody>
                  </table>
                </section>
           </div>
        </div>
    );
};

export default RecruiterDashboard;
