import React, { useEffect, useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import Header from './component/Header';
import Product from './pages/product';
import DetailPage from './pages/detailPage';
import NotFoundPage from './pages/NotFoundPage';
import AddProduct from './pages/product/addProduct';
import UserProfile from './component/Dashboard/UserForm';

function App() {

  const [token, setToken] = useState({})

  useEffect(() => {
    setToken(localStorage.getItem('token'))
  }, [token])

  const routes = createBrowserRouter([
    {
      path: "/",
      element: token ? <>
        <Header />
        <DashboardPage />
      </>
        : <Login />
    },
    {
      path: "/register",
      element: <RegisterPage />
    },
    {
      path: "/dashboard",
      element: <>
        <Header />
        <DashboardPage />
      </>
    },
    {
      path: "/product",
      element: token ? <>
        <Header />

        <Product />
      </>
        : <Login />
    },
    {
      path: "/product/:id",
      element: token ? <>
        <Header />

        <DetailPage />
      </>
        : <Login />
    },
    {
      path: "/product/add",
      element: token ? <AddProduct /> : <Login />
    },
    {
      path: "/product/update/:id",
      element: token ? <AddProduct /> : <Login />
    },
    {
      path: "/user",
      element: token ? <UserProfile /> : <Login />
    },
    {
      path: "*",
      element: <NotFoundPage />
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
