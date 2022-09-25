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

// 根据id查询图片
const getImageById = (imageId: number): any => {
  return http.get(`/image/${imageId}`)
}

// 根据id更新图片信息
const updateImageById = (imageId: number, name: string, imgUrl: string) => {
  return http.patch(`/image/${imageId}`, {
    name,
    imgUrl
  })
}

// 根据id删除图片
const removeImageById = (imageId: number) => {
  return http.delete(`/image/${imageId}`)
}

export {
  userLogin,
  addImage,
  getAllImage,
  getPartImage,
  getImageById,
  updateImageById,
  removeImageById
}