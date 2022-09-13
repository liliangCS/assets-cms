import React from "react"
import { useRoutes} from "react-router-dom"
import useLoginStatus from "./hooks/useLoginStatus"
import routes from "./router"


export default function App() {
  // 判断是否登陆，未登录则跳转到登陆页
  useLoginStatus()
  const element = useRoutes(routes)
  return (
    <div>
      {
        element
      }
    </div>
  )
}
