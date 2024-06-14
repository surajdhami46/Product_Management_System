import React from 'react'
import "./RegisterPage.css"

const RegisterPage = () => {
  return (
    <div className='addUser'>
      <h3>Register User</h3>
      <form className="addRegisterForm">
        <div className='inputGroup'>
          <label htmlFor="name">Name:</label>
          <input type="text"
          id="name"
          autoComplete='off'
          placeholder='Enter Your Name'
          />
          <label htmlFor="email">Email:</label>
          <input type="email"
          id="email"
          autoComplete='off'
          placeholder='Enter Your email'
          />
          <label htmlFor="password">password:</label>
          <input type="password"
          id="password"
          autoComplete='off'
          placeholder='Enter password'
          />
          <button type="submit" class="btn btn-success">Register</button>
        </div>
      </form>
      <div className='login'>
        <p>Already have an account?</p>
        <button type="submit" class="btn btn-primary">Log in</button>
      </div>
    </div>
  )
}

export default RegisterPage
