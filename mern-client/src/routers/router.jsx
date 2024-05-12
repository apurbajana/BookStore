import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import App from "../App";
  import Home from "../home/Home";
  import Shop from "../shop/Shop";
  import About from "../components/About";
  import Blog from "../components/Blog";
import SingleBook from "../shop/SingleBook";
import DashBoardLayout from "../dashboard/DashBoardLayout";
import DashBoard from "../dashboard/DashBoard";
import UploadBook from "../dashboard/UploadBook";
import ManageBooks from "../dashboard/ManageBooks";
import EditBooks from "../dashboard/EditBooks";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import PrivateRoute from "../privateroute/PrivateRoute";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
            path: '/',
            element:<Home />
        },
        {
            path:"/shop",
            element: <Shop/>
        },
        {
            path: "/about",
            element: <About/>
        },
        {
            path:"/blog",
            element:<Blog/>
        },
        {
          path: "/book/:id",
          element:<SingleBook/>,
          loader: ({params})=>fetch(`https://bookstore-server-m0wg.onrender.com/book/${params.id}`)
        }
      ]
    },
    {
      path:"/admin/dashboard",
      element:<DashBoardLayout/>,
      children: [
        {
          path:"/admin/dashboard",
          element:<PrivateRoute><DashBoard/></PrivateRoute>
        },
        {
          path:"/admin/dashboard/upload",
          element:<UploadBook/>
        },
        {
          path:"/admin/dashboard/manage",
          element:<ManageBooks/>
        },
        {
          path:"/admin/dashboard/edit-books/:id",
          element:<EditBooks/>,
          loader: ({params})=>fetch(`https://bookstore-server-m0wg.onrender.com/book/${params.id}`)
        }
      ]
    },
    {
      path:"/sign-up",
      element:<SignUp/>
    },{
      path:"/login",
      element:<Login/>
    }
  ]);
  export default router;
