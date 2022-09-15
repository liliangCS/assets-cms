import React from "react"
import {useLocation, useNavigate} from "react-router-dom"
import style from "./style.module.scss"
import Profile from "../../../components/Profile"

export default function Header(props: any) {
  const navigate = useNavigate()
  const {pathname} = useLocation()
  const pathMapRoute = new Map([
    ["/home/assets", "图片资源"],
    ["/home/user", "用户管理"]
  ])
  const handleClick = () => {
    props.handleToggle()
  }
  const goHome = () => {
    navigate("/home")
  }
  // 退出登陆
  const goLogin = () => {
    if (window.confirm("确定退出登陆吗?")) {
      sessionStorage.clear()
      navigate("/login")
    }
  }
  return (
    <div className={style.header}>
      <div className={style.profile}>
        <Profile></Profile>
      </div>
      <div className={style.left}>
        <span
          className={
            "iconfont icon-" + (props.toggleStatus ? "zuosuojin" : "yousuojin")
          }
          onClick={handleClick}
        ></span>
        {pathname === "/home" ? (
          <div onClick={goHome}>首页</div>
        ) : (
          <div>
            <span onClick={goHome}>首页</span>/
            <span>{pathMapRoute.get(pathname)}</span>
          </div>
        )}
      </div>
      <div className={style.right}>
        <span onClick={goLogin}>退出登陆</span>
      </div>
    </div>
  )
}
