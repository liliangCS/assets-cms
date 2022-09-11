import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { AxiosResponse } from "axios"
import { userLogin } from "../../../api"

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

  const loginBtn = async () => {
    const res: IResponseType = await userLogin(username, password)
    if (res.token) {
      sessionStorage.setItem("token", res.token)
      navigate("/home")
    }
  }

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