import React from "react"
import style from "./style.module.scss"
// import SideBar from "./SideBar"

export default function Home() {
  return (
    <div className={style.home}>
      {/* 侧边栏 */}
      <div className={style.aside}>侧边栏</div>
      {/* 主体内容区 */}
      <div className={style.main}>
        {/* 头部区域 */}
        <div className={style.header}>头部区域</div>
        {/* 移动端tab栏（屏幕宽度800px之下显示） */}
        <div className={style.tab}>tab栏</div>
        {/* 主体内容区 */}
        <div className={style.content}>主体内容区</div>
      </div>
    </div>
  )
}
