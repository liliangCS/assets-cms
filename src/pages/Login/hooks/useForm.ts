import {useState} from "react"

const useForm = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const resetBtn = () => {
    setUsername("")
    setPassword("")
  }
  const loginBtn = () => {
    const formInfo = { username, password }
    console.log(formInfo)
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