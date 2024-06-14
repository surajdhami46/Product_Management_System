import React from 'react'
import "./LoginPage.css"

const Login = () => {
  return (
    <div className='Login'>
      <h3>Log in</h3>
      <form className="logInForm">
        <div className='inputGroup'>
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
          <button type="submit" class="btn btn-success">Log in</button>
        </div>
      </form>
      <div className='login'>
        <p>Already have an account?</p>
        <button type="submit" class="btn btn-primary">New Registaration</button>
      </div>
    </div>
  )
}

export default Login;
