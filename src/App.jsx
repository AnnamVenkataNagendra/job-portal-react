import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserRegister from './UserLogin/UserRegister'
import Home from './Pages/Home'
import UserLogin from './UserLogin/UserLogin'
import CandidateDashBoard from './CandidateDashBoard/CandidateDashBoard'
import RecuriterDashBorad from './RecruiterDashboard/RecuriterDashBorad'
import NewJobs from './RecruiterDashboard/NewJobs'
import UpdateJobs from './RecruiterDashboard/UpdateJobs'
import DeleteJobs from './RecruiterDashboard/DeleteJobs'
import RecruiterApplication from './RecruiterDashboard/RecruiterApplication'
import CandidateApplication from './CandidateDashBoard/CandidateApplication'
const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<UserLogin/>}/>
        <Route path='/register' element={<UserRegister/>}/>
        <Route path='/candidate' element={<CandidateDashBoard/>}/>
        <Route path='/recruiter' element={<RecuriterDashBorad/>}/>
        <Route path='/newjobs' element={<NewJobs/>}/>
        <Route path='/update/:id' element={<UpdateJobs/>}/>
        <Route path='delete/:id' element={<DeleteJobs/>}/>
        <Route path='/view' element={<RecruiterApplication/>}/>
        <Route path='/candidateapp' element={<CandidateApplication/>}/>
      </Routes>
  )
}

export default App
