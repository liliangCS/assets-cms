import {useState} from "react"
import { userLogin } from "../../../api"
const useForm = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const resetBtn = () => {
    setUsername("")
    setPassword("")
  }
  const loginBtn = async () => {
    const res = await userLogin(username, password)
    console.log(res)
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