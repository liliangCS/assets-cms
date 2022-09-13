import React from "react"
import style from "./style.module.scss"
import Profile from "../../../components/Profile"

export default function SideBar() {
  return (
    <div className={style["side-bar"]}>
      <Profile></Profile>
      <div className={style["menu-tab"]}>
        <span className="iconfont icon-xiangce"></span>
        <span>图片资源</span>
        <span className="iconfont icon-youjiantou_huaban"></span>
      </div>
      <div className={style["menu-tab"]}>
        <span className="iconfont icon-shezhi"></span>
        <span>用户管理</span>
        <span className="iconfont icon-youjiantou_huaban"></span>
      </div>
    </div>
  )
}
