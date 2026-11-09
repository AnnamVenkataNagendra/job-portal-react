
import React, { useEffect, useState } from 'react'
import connection from '../LoginApi/connection'
import { useNavigate, useParams } from 'react-router-dom'

const DeleteJobs = () => {

    const[getDelete,setDelete]=useState('')
    const {id}=useParams();
    const navigate=useNavigate();
        const deleteId=async()=>{
         try{
           const response=await connection.deleteById(id)
           console.log('deleted', response.data)
           setDelete(response.data.message)
           alert('Delete Successfylly')
           navigate('/recruiter')

         }
         catch(err){
          console.log('unavle to detele', err)
          alert('unable to delete')
         }
        }
  return (
    <div className='container mt-4'>
     <h3 className='text-white'>Welcome to Recruiter DashBoard</h3>
      <button className='btn btn-danger' onClick={deleteId}>Delete Button</button>
      <h5 className='text-success'>{getDelete}</h5>
    </div>
  )
}

export default DeleteJobs
