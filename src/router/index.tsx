import {lazy} from "react"
import {Navigate} from "react-router-dom"
import Login from "../pages/Login"
import checkLoginStatus from "../utils/checkLoginStatus"
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"))

const routes = [
  {
    path: "/",
    element: checkLoginStatus() ? <Navigate to="/home" /> : <Navigate to="/login" />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "*",
    element: <NotFoundPage />
  }
]

export default routes