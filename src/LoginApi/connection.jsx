
import  axios from 'axios'

const API_URL='http://localhost:4500/register/api';
const JOBS_API="http://localhost:4500/jobs/api/fetch";
const APPLIED_JOBS='http://localhost:4500/apply/api';
const RECURITER_JOBS='http://localhost:4500/jobs/api/dashboard';
const NEW_JOBS='http://localhost:4500/jobs/api';
const UPDATE_ID='http://localhost:4500/jobs/api';
const DELETE_ID='http://localhost:4500/jobs/api';
const RECRUITER_APPLICATION='http://localhost:4500/jobs/api';
const APPLICATION_STATUS='http://localhost:4500/jobs/api';
const CANDIDATE_APP='http://localhost:4500/apply/api';

class ConnectionApi 
{

   register(data){
    return axios.post(`${API_URL}/post`,data)
   }
   login(login){
    return axios.post(`${API_URL}/login`,login)
   }
   jobs(){
      return axios.get(JOBS_API);
   }
   appliedJobd(data){
      const token=localStorage.getItem('token')
      return axios.post(`${APPLIED_JOBS}/jobpost`,data,{
         headers:{
            Authorization :`Bearer ${token}`
         }
      })
   }
 recruiterDashboard() {
    const token = localStorage.getItem('token');
    return axios.get(RECURITER_JOBS,{
       headers: {
            Authorization: `Bearer ${token}`
        }
    })
}
 newJobs(data)
 {
   const token = localStorage.getItem('token');
   return axios.post(`${NEW_JOBS}/jobs`,data,{
      headers:{
         Authorization: `Bearer ${token}`
      }
   })
 }
 updateByID(Id,data){
   const token = localStorage.getItem('token');
   return axios.put(`${UPDATE_ID}/update/${Id}`,data,{
        headers:{
         Authorization: `Bearer ${token}`
     }
   })
 }
 deleteById(Id){
   const token = localStorage.getItem('token');
   return axios.delete(`${DELETE_ID}/delete/${Id}`,{
        headers:{
         Authorization: `Bearer ${token}`
     }
   })
 }
 getRecruiterApplication(){
   const token = localStorage.getItem('token');
   return axios.get(`${RECRUITER_APPLICATION}/retrive`,{
        headers:{
         Authorization: `Bearer ${token}`
     }
   })
 }
  getApplicationStatus(id,status){
   const token = localStorage.getItem('token');
   return axios.put(`${APPLICATION_STATUS}/status/${id}`,{status},{
        headers:{
         Authorization: `Bearer ${token}`
     }
   })
 }
 getCandidateApplication(){
   const token = localStorage.getItem('token');
   return axios.get(`${CANDIDATE_APP}/fetch`,{
      headers:{
         Authorization: `Bearer ${token}`
      }
   })
 }
}
export default new ConnectionApi();