import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()
    return (
        <div className='nav'>
            <nav>
                <div className='navItem'>
                    <ul>
                        <li>
                            <a href='/user'>User</a>
                        </li>
                        <li>
                            <a href="/product">Your Product</a>
                        </li>
                        <li>
                            <a href="/product/add">Add Product</a>
                        </li>
                        <li>
                            <p className=' cursor-pointer' onClick={() => {
                                localStorage.removeItem('token')
                                navigate('/')
                            }}>Log Out</p>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header
