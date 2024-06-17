import React from 'react'

const DashboardPage = () => {
  let data = JSON.parse(localStorage.getItem('token'));
  return (
    <div>
      <div>
        <h2>username: {data.name}</h2>
        <h2>username: {data.email}</h2>
        <h1 class="text-3xl font-bold underline text-red-900">
          Hello world!
        </h1>
      </div>
      dashboard
    </div>
  )
}

export default DashboardPage
