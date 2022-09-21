import { http } from "../utils/httpRequest"

// 用户登陆的请求
const userLogin = (username: string, password: string) => {
  return http.post("/user/login", {
    username,
    password
  })
}

// 添加图片的请求
const addImage = (name: string, imgUrl: string) => {
  return http.post("/image", {
    name,
    imgUrl
  })
}

export { userLogin, addImage }