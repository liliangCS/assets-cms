import { lazy } from "react"
import routes from "../router"
const Home = lazy(() => import("../pages/Home"))
const route = {
  path: "/home",
  element: <Home />
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