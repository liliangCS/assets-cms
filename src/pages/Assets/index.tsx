import React from "react"
import Search from "./Search"
import style from "./style.module.scss"

export default function Assets() {
  return (
    <div className={style.assets}>
      {/* 图片检索 */}
      <Search></Search>
    </div>
  )
}
