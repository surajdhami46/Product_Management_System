
import Login from "./pages/LoginPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import { useEffect } from "react";
import Header from "./component/Header";
import Product from "./pages/product";
import DetailPage from "./pages/detailPage";
import NotFoundPage from "./pages/NotFoundPage";
import AddProduct from "./pages/product/addProduct";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/register",
      element: <RegisterPage />
    },
    {
      path: "/dashboard",
      element: <>
        <DashboardPage />
      </>
    },
    {
      path: "/product",
      element: <>
        <Product />
      </>
    },
    {
      path: "/product/:id",
      element: <>
        <DetailPage />
      </>
    },
    {
      path: "/product/add",
      element: <>
        <AddProduct />
      </>
    },
    {
      path: "*",
      element: <>
        <NotFoundPage />
      </>
    },

  ])
  return (
    <div className="App">
      <Header />
      <RouterProvider router={route}></RouterProvider>
    </div>
  )
}

export default App;
