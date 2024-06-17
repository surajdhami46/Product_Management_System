import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import Product from "./pages/product";
import DetailPage from "./pages/detailPage";
import AddProduct from "./pages/product/addProduct";
import UserProfile from "./component/Dashboard/UserForm";
import NotFoundPage from "./pages/NotFoundPage";

export const route = createBrowserRouter([
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
        path: "/product/update/:id",
        element: <>
            <AddProduct />
        </>
    },
    {
        path: "/user",
        element: <>
            <UserProfile />
        </>
    },
    {
        path: "*",
        element: <>
            <NotFoundPage />
        </>
    },

])
