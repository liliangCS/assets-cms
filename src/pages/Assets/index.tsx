import React from "react"
import style from "./style.module.scss"
import Search from "./Search"
import ImageList from "./ImageList"

export default function Assets() {
  return (
    <div className={style.assets}>
      {/* 图片检索 */}
      <Search></Search>
      {/* 图片列表 */}
      <ImageList></ImageList>
    </div>
  )
}
