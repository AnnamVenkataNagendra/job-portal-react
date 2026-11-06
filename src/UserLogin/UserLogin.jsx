
import React, { useState } from 'react'
import connection from '../LoginApi/connection'
import { Link, useNavigate } from 'react-router-dom'
const UserLogin = () => {
    const [getLoginForm, setLoginForm] = useState({
        email: '',
        password: ''
    })
    const handleLogin = (e) => {
        setLoginForm({
            ...getLoginForm,
            [e.target.name]: e.target.value
        })
    }
    const usenavigate=useNavigate();
    const handekClick = async (e) => {
        e.preventDefault();

        try {
            const res = await connection.login(getLoginForm)
            alert('Login successful')
            console.log('login success', res)
            setLoginForm({email:'', password:''})
            localStorage.setItem('token',res.data.success.token);
            localStorage.setItem('user',JSON.stringify(res.data.success.user));
            if (res.data.success.user.role === 'candidate') {
            usenavigate('/candidate');
            }else if (res.data.success.user.role === 'recruiter') {
            usenavigate('/recruiter');}
        }
        catch (err) {
            console.log('invalid credentials', err)
            alert('Invalid user credentials')
            setLoginForm({email:'', password:''})
        }
    }

    return (
        <form onSubmit={handekClick}>
            <div className='container border border-3 w-50 p-3 mt-3 rounded-3'>

                <h1 className='bi bi-person-fill text-primary'>
                    User Login Form
                </h1>

                <dl>
                    <dt className='text-white'>User Email:</dt>
                    <dd>
                        <input
                            type='email'
                            name='email'
                            className='form-control w-50 mx-auto'
                            placeholder="Enter your email"
                            required
                            value={getLoginForm.email}
                            onChange={handleLogin}
                        />
                    </dd>

                    <dt className='text-white'>User Password:</dt>
                    <dd>
                        <input
                            type='password'
                            name='password'
                            className='form-control w-50 mx-auto'
                            placeholder="Enter your password"
                            required
                            value={getLoginForm.password}
                            onChange={handleLogin}
                        />
                    </dd>

                    <button className='btn btn-dark w-25' type='submit'>
                        Login
                    </button>

                    <Link className='ms-4 btn btn-danger w-25' to='/register'>
                        New User?
                    </Link>
                </dl>
            </div>
        </form>
    )
}

export default UserLogin
