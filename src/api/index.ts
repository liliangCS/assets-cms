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
const getAllImage = () => {
  return http.get("/image")
}

// 分页获取图片，默认一页20张图片
const getPartImage = (pageIndex: number, pageSize = 20) => {
  return http.post("/image/division", {
    pageSize,
    pageIndex
  })
}

export { userLogin, addImage, getAllImage, getPartImage }