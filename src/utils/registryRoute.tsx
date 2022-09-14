import { lazy } from "react"
import routes from "../router"
const Home = lazy(() => import("../pages/Home"))
const Assets = lazy(() => import("../pages/Assets"))
const User = lazy(() => import("../pages/User"))

const route = {
  path: "/home",
  element: <Home />,
  children: [
    {
      path: "",
      element: <div>首页</div>
    },
    {
      path: "assets",
      element: <Assets />
    },
    {
      path: "user",
      element: <User />
    }
  ]
}

// interface IRouteType {
//   path: string
//   element: JSX.Element
//   children?: Array<IRouteType>
// }
const registryRoute = () => {
  routes.push(route)
}

export default registryRoute