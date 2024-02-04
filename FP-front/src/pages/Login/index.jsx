import React, { useState } from 'react'
import "./index.scss";
import { Link } from 'react-router-dom';
const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const handleInput = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  return (
    <>
      <section id='login'>
        <div className='login_container'>
          <div className='login_content'>
            <h2>Hello <span>Welcome</span> Back</h2>
            <form action="">
              <div className='login_input'>
                <input type="email" placeholder='Enter Your Email' name='email' value={FormData.email} onChange={handleInput} required />
              </div>
              <div className='login_input'>
                <input type="password" placeholder='Password' name='password' value={FormData.password} onChange={handleInput} required />
              </div>
              <button type='submit'>Login</button>
            </form>

            <p>Dont have Account <Link to={"/register"}>Register Now</Link></p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login