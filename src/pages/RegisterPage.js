import React, { useContext, useEffect, useState } from 'react'
import "./RegisterPage.css"
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext'
import { message } from 'antd'


const RegisterPage = () => {


  const navigate = useNavigate()


  const { userList, setUserList } = useContext(AuthContext)

  const handleSummit = (e) => {
    try {
      e.preventDefault()
      var formData = new FormData(e.target);

      let name = formData.get('name')
      let email = formData.get('email')
      let password = formData.get('password')

      const checkEmail = userList.find(item => item.email === email)

      if (checkEmail) {
        throw new Error('email already exits')
      }

      setUserList((pre => ([...pre, {
        name,
        email,
        password,
        role: 'USER'
      }])))

      message.success('Register successfully')

      navigate('/login')



    } catch (error) {
      alert(error)
    }
    // navigate('/login')

  }





  return (
    <div className='addUser'>
      <h3>Register User</h3>
      <form className="addRegisterForm" onSubmit={(e) => handleSummit(e)}>
        <div className='inputGroup'>
          <label htmlFor="name">Name:</label>
          <input type="text"
            id="name"
            name='name'
            autoComplete='off'
            placeholder='Enter Your Name'
          />
          <label htmlFor="email">Email:</label>
          <input type="email"
            id="email"
            name='email'
            autoComplete='off'
            placeholder='Enter Your email'
          />
          <label htmlFor="password">password:</label>
          <input type="password"
            name="password"
            id="password"
            autoComplete='off'
            placeholder='Enter password'
          />
          <button type="submit" class="btn btn-success">Register</button>
        </div>
      </form>
      <div className='login'>
        <p>Already have an account?</p>
        <Link to="/" type="submit" >Log in</Link>
      </div>
    </div>
  )
}

export default RegisterPage
