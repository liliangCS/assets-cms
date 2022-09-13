import { useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import registryRoute from "../utils/registryRoute"
import checkLoginStatus from "../utils/checkLoginStatus"
import messageBox from "../utils/messageBox"

const useLoginStatus = () => {
  const navigate = useNavigate()
  const location = useLocation()
  if (checkLoginStatus()) {
    registryRoute()
  }
  useEffect(() => {
    if (!checkLoginStatus()) {
      if (location.pathname === "/login") return
      messageBox("检测到登录信息失效，请重新登陆")
      navigate("/login")
    }
  }, [])
}

export default useLoginStatus