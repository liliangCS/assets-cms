import React from "react"
import { useRoutes } from "react-router-dom"
import routes from "./router"
import registryRoute from "./utils/registryRoute"
import checkLoginStatus from "./utils/checkLoginStatus"

export default function App() {
  if (checkLoginStatus()) {
    registryRoute()
  }
  const element = useRoutes(routes)
  return (
    <div>
      {
        element
      }
    </div>
  )
}
