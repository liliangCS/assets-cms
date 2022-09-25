import React from "react"
import style from "./style.module.scss"

interface IPropType {
  imgInfo: any
  onEdit: any
  onDelete: any
}

export default function ImageItem(props: IPropType) {
  const { imgInfo, onEdit, onDelete } = props
  return (
    <div className={style["image-item"]}>
      <img src={imgInfo.imgUrl} alt="" />
      <div className={style.name}>{imgInfo.name}</div>
      <div className={style.operation}>
        <span className="iconfont icon-bianji" onClick={onEdit}></span>
        <span className="iconfont icon-shanchu" onClick={onDelete}></span>
      </div>
    </div>
  )
}
