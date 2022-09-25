import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { AxiosResponse } from "axios"
import { userLogin } from "../../../api"
import registryRoute from "../../../utils/registryRoute"

interface IResponseType extends AxiosResponse {
  token?: string
}

const useForm = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const resetBtn = () => {
    setUsername("")
    setPassword("")
  }

  // useEffect(() => {
  //   document.documentElement.addEventListener("keyup", loginKey)

  //   return () => {
  //     document.documentElement.removeEventListener("keyup", loginKey)
  //   }
  // }, [])

  const loginBtn = async () => {
    const res: IResponseType = await userLogin(username, password)
    if (res.token) {
      sessionStorage.setItem("token", res.token)
      sessionStorage.setItem("username", username)
      registryRoute()
      navigate("/home")
    }
  }

  // // 绑定键盘事件
  // const loginKey = (event: KeyboardEvent) => {
  //   if (event.code === "Enter") {
  //     loginBtn()
  //   }
  // }

  return {
    username,
    setUsername,
    password,
    setPassword,
    resetBtn,
    loginBtn
  }
}

export default useForm