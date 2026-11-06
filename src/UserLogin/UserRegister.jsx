
import React, { useState } from 'react'
import '../App.css'
import connection from '../LoginApi/connection'
import { useNavigate } from 'react-router-dom'

const UserRegister = () => {
    const [formData, setFormdata] = useState({
        name: '',
        email: '',
        password: '',
        role: 'candidate'
    })
    const [getTrue, setTrue] = useState('')
    const usenavigate=useNavigate();
    const handleChange = (e) => {
        setFormdata({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
        const handelSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await connection.register(formData)
            console.log('Register successfully', response)
            setTrue("Registration successful!")
            setFormdata({
                 name: '',
                 email: '',
                 password: '',
                 role: 'candidate'
            })
            alert('Registration successful!')
            usenavigate("/login")
        } catch (err) {
            console.log(err)
            setTrue("Registration failed. Please try again.")
             setFormdata({
                 name: '',
                 email: '',
                 password: '',
                 role: 'candidate'
            })
        }
    }

    return (
        <form onSubmit={handelSubmit}>
            <div className='container border border-3 w-50 p-3 mt-3 rounded-3'>

                <h1 className='bi bi-person-fill text-dark'>
                    User Register Form
                </h1>

                <dl>
                    <dt>User Name:</dt>
                    <dd>
                        <input
                            type='text'
                            name='name'
                            className='form-control w-50 mx-auto'
                            placeholder="Enter your name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </dd>

                    <dt>User Email:</dt>
                    <dd>
                        <input
                            type='email'
                            name='email'
                            className='form-control w-50 mx-auto'
                            placeholder="Enter your email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </dd>

                    <dt>User Password:</dt>
                    <dd>
                        <input
                            type='password'
                            name='password'
                            className='form-control w-50 mx-auto'
                            placeholder="Enter your password"
                            required
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </dd>

                    <dt>User Role:</dt>
                    <dd>
                        <select
                            name='role'
                            value={formData.role}
                            onChange={handleChange}
                        >
                            <option value="candidate">Candidate</option>
                            <option value="recruiter">Recruiter</option>
                        </select>
                    </dd>

                    <button className='btn btn-primary w-50' type='submit'>
                        Register
                    </button>

                    <p className={
                        getTrue == 'Registration successful!'
                            ? 'text-success'
                            : 'text-danger'
                    }>
                        {getTrue}
                    </p>

                </dl>
            </div>
        </form>
    )
}

export default UserRegister
