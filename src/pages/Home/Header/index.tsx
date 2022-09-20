import React, { useState } from "react"
import {useLocation, useNavigate} from "react-router-dom"
import style from "./style.module.scss"
import Profile from "../../../components/Profile"
import Dialog from "../../../components/Dialog"

export default function Header(props: any) {
  const navigate = useNavigate()
  const {pathname} = useLocation()
  const [ isShow, setIsShow ] = useState(false)
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
  // 确定退出登陆
  const handleSureClick = () => {
    setIsShow(false)
    sessionStorage.clear()
    navigate("/login")
  }
  
  // 显示弹出框
  const handleShowDialog = () => {
    setIsShow(true)
  }
  // 关闭弹出框
  const handCloseDialog = () => {
    setIsShow(false)
  }

  return (
    <div className={style.header}>
      <Dialog 
        title="温馨提示" 
        isShow={isShow} 
        onClose={handCloseDialog} 
        onSure={handleSureClick}
      >确定退出登陆吗？</Dialog>
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
        <span onClick={handleShowDialog}>退出登陆</span>
      </div>
    </div>
  )
}
