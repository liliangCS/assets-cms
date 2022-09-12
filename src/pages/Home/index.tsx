import React from "react"
import style from "./style.module.scss"
// import SideBar from "./SideBar"

export default function Home() {
  return (
    <div className={style.home}>
      {/* 侧边栏 */}
      <div className={style.aside}>
        侧边栏
      </div>
      {/* 主体内容区 */}
      <div className={style.main}>
        主体内容区
      </div>
    </div>
  )
}
