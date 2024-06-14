
import Login from "./pages/LoginPage";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";

function App() {
  const route = createBrowserRouter([
    {
      path:"/",
      element: <Login/>
    },
    {
      path:"/RegisterPage",
      element: <RegisterPage/>
    },

  ])
  return (
    <div className="App">
    <RouterProvider router={route}></RouterProvider>
    </div>
  )
}

export default App;
