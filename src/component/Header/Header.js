import React from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar, Popconfirm, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import _ from 'lodash';
import cloco from '../../asset/cloco.png';

const Header = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('token'));

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
        message.success('Logout successfully');
    };

    const handleCancel = () => {
        message.error('Click on No');
    };

    const menuLink = [
        {
            title: "Users",
            url: "/user",
        },
        {
            title: "Products",
            url: "/product",
        },
        {
            title: "Add Product",
            url: "/product/add",
        },

    ];

    return (
        <header>
            <section className="relative px-[60px] w-full pt-4 lg:pt-8 flex items-center justify-between  font-semibold text-sm leading-6 text-slate-200 border-b shadow-sm mb-[40px] pb-[10px]">
                <article className="flex w-full items-center justify-between">
                    <Link to={'/dashboard'}>
                        <img src={cloco} alt="Logo" width={64} height={64} />
                    </Link>
                    <div className="flex items-center">
                        <div className="flex items-center gap-x-8 border-r  border-slate-800 pr-6">
                            {menuLink.map((item) => (
                                <div key={item.title}>
                                    <a
                                        href={item.url}
                                        className="hover:text-sky-400 text-slate-900"
                                    >
                                        {item.title}
                                    </a>
                                </div>
                            ))}
                        </div>
                        <div className=' pl-1'>
                            <Popconfirm
                                title="Are you sure you want to logout?"
                                onConfirm={handleLogout}
                                onCancel={handleCancel}
                                okText="Yes"
                                cancelText="No"
                            >
                                <div className='flex gap-x-1 items-center cursor-pointer hover:text-sky-400 text-slate-900'>
                                    <Avatar src='https://api.dicebear.com/7.x/miniavs/svg?seed=1' />
                                    <p>{_.upperFirst(user?.name)}</p>
                                    <DownOutlined />
                                </div>
                            </Popconfirm>
                        </div>
                    </div>
                </article>
            </section>
        </header>
    );
};

export default Header;

{/* <div className='nav px-[60px]'>
<nav className='flex justify-between items-center w-full h-16'>

   

    <div className='navItem'>
        <ul className=' font-semibold text-[18px]'>
            <li className=''>
                <a href='/user' className=' hover:text-[#aaa6c3] '>User</a>
            </li>
            <li>
                <a href='/product' className=' hover:text-[#aaa6c3]'>Your Product</a>
            </li>
            <li>
                <a href='/product/add' className=' hover:text-[#aaa6c3]'>Add Product</a>
            </li>

        </ul>
    </div>

    
</nav>
</div> */}