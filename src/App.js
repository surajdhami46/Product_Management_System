
import Login from "./pages/LoginPage";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";

function App() {
  const route = createBrowserRouter([
    {
      path:"/",
      element: <Login/>
    },
    {
      path:"/register",
      element: <RegisterPage/>
    },
    {
      path:"/dashboard",
      element: <DashboardPage/>
    },

  ])
  return (
    <div className="App">
    <RouterProvider router={route}></RouterProvider>
    </div>
  )
}

export default App;
