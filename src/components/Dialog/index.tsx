import React from "react"
import {createPortal} from "react-dom"
import style from "./style.module.scss"

interface IDialogPropsType{
  title?: string
  isShow?: boolean
  [prop: string]: any
}

function Dialog(props: IDialogPropsType) {
  return createPortal(
    <div className={style.dialog + (props.isShow ? "" : " hidden")}>
      {/* 遮罩层 */}
      <div className={style.backdrop} onClick={props.onClose}></div>
      {/* 主体内容 */}
      <div className={style.container}>
        <h2>{props.title}</h2>
        <div className={style.content}>
          {props.children || props.text}
        </div>
        <div className={style.handle}>
          <div className={style.cancel} onClick={props.onClose}>取消</div>
          <div className={style.confirm} onClick={props.onSure}>确定</div>
        </div>
      </div>
    </div>,
    document.querySelector("#dialog")!
  )
}

Dialog.defaultProps = {
  title: "默认标题",
  isShow: false,
  text: "这是一段替代文本"
}

export default Dialog
