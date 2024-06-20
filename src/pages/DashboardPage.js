import React from 'react'
import _ from 'lodash'
import Login from './LoginPage';

const DashboardPage = () => {
  let data = JSON.parse(localStorage.getItem('token'));
  let userList = JSON.parse(localStorage.getItem('data'))

  const arr = [
    {
      title: 'Total Products',
      value: '194',
      color: '#00b26f'
    },
    {
      title: 'Total User',
      value: userList.length,
      color: '#ff8300'
    },
    {
      title: 'Total Category',
      value: '24',
      color: '#00b5e9'
    },
    {
      title: 'Total customer',
      value: '2000+',
      color: '#fa4251'
    }
  ]


  return (
    <section className='max-w-[1440px] mx-auto'>

      <article>
        <div className=' border-b py-[16px]'>
          <p className=' font-bold text-gray-400 text-[30px] leading-[42px]'>Welcome {_.upperFirst(data?.name)}!</p>
        </div>

      </article>

      <article className=' flex items-center justify-center py-[60px]'>
        <div className=' flex items-center gap-x-[20px]'>
          {
            arr.map(item => <div key={item?.title} className={` h-[180px] w-[260px] p-[40px] rounded-sm`}
              style={{
                background: item.color
              }}

            >
              <p className=' text-white text-[36px] font-medium '>{item.value}</p>
              <p className='text-[#8ddfc1] text-[18px] font-normal'>{item.title}</p>
            </div>)
          }
        </div>
      </article>

    </section>
  )
}

export default DashboardPage
