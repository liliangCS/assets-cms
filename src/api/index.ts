import { http } from "../utils/httpRequest"

// 用户登陆的请求
const userLogin = (username: string, password: string) => {
  return http.post("/user/login", {
    username,
    password
  })
}

export { userLogin }