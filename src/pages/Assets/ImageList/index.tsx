import React from "react"
import style from "./style.module.scss"

interface IImageType {
  id: number
  name: string
  imgUrl: string
  createAt: string
}

interface IPropType {
  imageList: Array<IImageType>
}

export default function ImageList(props: IPropType) {
  return (
    <div className={style["image-list"]}>
      {
        props.imageList.map(item => {
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
