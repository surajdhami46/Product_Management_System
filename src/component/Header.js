import React from 'react'
import './Header.css'

const Header = () => {
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
                            <a href="/product">Add Product</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header
