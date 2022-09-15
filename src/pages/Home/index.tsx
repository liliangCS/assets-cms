import React, { Suspense } from "react"
import { Outlet } from "react-router-dom"
import style from "./style.module.scss"
import SideBar from "./SideBar" 
import Header from "./Header"
import useToggleStatus from "./hooks/useToggleStatus"

export default function Home() {
  // 侧边栏伸缩状态
  const { toggleStatus, handleToggle } = useToggleStatus()

  return (
    <div className={style.home}>
      {/* 侧边栏 */}
      <div className={style.aside + (toggleStatus ? "" : " limit-width")}>
        <SideBar toggleStatus={toggleStatus}></SideBar>
      </div>
      {/* 主体内容区 */}
      <div className={style.main}>
        {/* 头部区域 */}
        <div className={style.header}>
          <Header handleToggle={handleToggle} toggleStatus={toggleStatus}></Header>
        </div> 
        {/* 移动端tab栏（屏幕宽度800px之下显示） */}
        <div className={style.tab}>tab栏</div>
        {/* 主体内容区 */}
        <div className={style.content}>
          <Suspense fallback={ <span>加载中......</span> }>
            <Outlet></Outlet>
          </Suspense>
        </div>
      </div>
    </div>
  )
}
