import React from 'react'

const DashboardPage = () => {
    let data = JSON.parse(localStorage.getItem('data'));
  return (
    <div>
        <div>
            <h2>username: {data.name}</h2>
            <h2>username: {data.email}</h2>
        </div>
      dashboard
    </div>
  )
}

export default DashboardPage
