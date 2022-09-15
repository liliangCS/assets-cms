import React from "react"
import { useNavigate } from "react-router-dom"
import style from "./style.module.scss"

export default function TabBar() {
  const navigate = useNavigate()

  return (
    <div className={style["tab-bar"]}>
      <div className={style.item} onClick={() => {navigate("/home/assets")}}>
        <span>图片资源</span>
      </div>
      <div className={style.item} onClick={() => {navigate("/home/user")}}>
        <span>用户管理</span>
      </div>
    </div>
  )
}
