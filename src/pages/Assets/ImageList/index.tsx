import React, { useState, useEffect } from "react"
import style from "./style.module.scss"
import { getAllImage } from "../../../api"

export default function ImageList() {
  const [ imageList, setImageList ] = useState<any[]>([])
  // 初始化/更新图片列表
  const loadImageData = async () => {
    const res = await getAllImage()
    console.log(res)
    setImageList(res)
  }
  // 初始化
  useEffect(() => {
    loadImageData()
  }, [])
  return (
    <div className={style["image-list"]}>
      {
        imageList.map(item => {
          return (
            <div className={style["image-item"]} key={item.id}>
              <img src={item.imgUrl} alt="" />
            </div>
          )
        })
      }
    </div>
  )
}
