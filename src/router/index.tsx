import {lazy} from "react"
import {Navigate} from "react-router-dom"
import Login from "../pages/Login"
const Home = lazy(() => import("../pages/Home"))
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"))

const routes = [
  {
    path: "/",
    element: sessionStorage.getItem("token") ? <Navigate to="/home" /> : <Navigate to="/login" />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "*",
    element: <NotFoundPage />
  }
]

export default routes