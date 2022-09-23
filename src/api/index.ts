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

// 获取所有图片的请求
const getAllImage = (): any => {
  return http.get("/image")
}

export { userLogin, addImage, getAllImage }