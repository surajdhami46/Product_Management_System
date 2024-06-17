import React, { useEffect, useState } from 'react'
import "./RegisterPage.css"
import { Link, useNavigate } from 'react-router-dom'


const RegisterPage = () => {

  const [user, setUser] = useState(() => {
    const data = localStorage.getItem('data');
    return data ? JSON.parse(data) : [{
      name: 'admin',
      email: 'admin@gmail.com',
      password: 'admin',
      role: "ADMIN"
    }];
  });

  const navigate = useNavigate()

  const handleSummit = (e) => {
    try {
      e.preventDefault()
      var formData = new FormData(e.target);

      let name = formData.get('name')
      let email = formData.get('email')
      let password = formData.get('password')

      const checkEmail = user.find(item => item.email === email)

      if (checkEmail) {
        throw new Error('email already exits')
      }

      setUser((pre => ([...pre, {
        name,
        email,
        password,
        role: 'USER'
      }])))


      // navigate('/')

    } catch (error) {
      alert(error)
    }



  }

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(user));

  }, [user])


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
