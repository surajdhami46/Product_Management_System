import React from 'react'
import "./LoginPage.css"
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

const navigate = useNavigate()

const handleSummit = (e) => {
e.preventDefault()
try {
  
  let data = JSON.parse(localStorage.getItem('data'))
  var formData = new FormData(e.target);
  
  let email = formData.get('email')
  let password = formData.get('password')

  if(data.email !== email){
    throw new Error("invalid email")
  }

  if(data.password !== password){
    throw new Error('password is incorrect')
  }

  navigate('/dashboard')  

} catch (error) {
  alert(error)
}
}





  return (
    <div className='Login'>
      <h3>Log in</h3>
      <form className="logInForm" onSubmit={(e)=>handleSummit(e)}>
        <div className='inputGroup'>
          <label htmlFor="email">Email:</label>
          <input type="email"
          id="email"
          name="email"
          autoComplete='off'
          placeholder='Enter Your email'
          />
          <label htmlFor="password">password:</label>
          <input type="password"
          id="password"
          name="password"
          autoComplete='off'
          placeholder='Enter password'
          />
          <button type="submit" class="btn btn-success">Log in</button>
        </div>
      </form>
      <div className='login'>
        <p>Already have an account?</p>
        <Link to ="/register" type="submit" class="btn btn-primary">New Registaration</Link>
      </div>
    </div>
  )
}

export default Login;
