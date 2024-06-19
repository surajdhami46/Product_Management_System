import React, { useEffect, useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import Header from './component/Header/Header';
import Product from './pages/product';
import DetailPage from './pages/detailPage';
import NotFoundPage from './pages/NotFoundPage';
import AddProduct from './pages/product/addProduct';
import UserProfile from './component/Dashboard/UserForm';
import { AuthProvider } from './context/authContext';
import ProductList from './component/card/ProductList';
import AllCatagory from './pages/catagory/AllCatagory';

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
      path: "/login",
      element: <Login />

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
        <ProductList />
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
      path: "/logout",
      element: token ? <>
        <Header />

        <DetailPage />
      </>
        : <Login />
    },
    {
      path: "/product/add",
      element: token ? <>
        <Header />
        <AddProduct />
      </> : <Login />
    },
    {
      path: "/product/update/:id",
      element: token ? <> <Header /> <AddProduct /> </> : <Login />
    },
    {
      path: "/user",
      element: token ? <>
        <Header />
        <UserProfile />
      </> : <Login />
    },
    {
      path: "/catagory",
      element: token ? <AllCatagory /> : <Login />
    },
    {
      path: "*",
      element: <NotFoundPage />
    },
  ]);

  return (
    <div className="">

      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
