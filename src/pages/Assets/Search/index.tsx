import React, {useState} from "react"
import style from "./style.module.scss"
import Dialog from "../../../components/Dialog"

export default function Search() {
  const [isShow, setIsShow] = useState(false)
  // 展示弹框
  const handleShowDialog = () => {
    setIsShow(true)
  }
  // 关闭弹框
  const handleCloseDialog = () => {
    setIsShow(false)
  }
  // 确定按钮
  const handleSureClick = () => {
    console.log("111")
  }

  return (
    <div className={style.search}>
      <Dialog
        title="添加图片"
        isShow={isShow}
        onClose={handleCloseDialog}
        onSure={handleSureClick}
      >
        {/* 表单组件 */}
      </Dialog>
      <div className={style.btn} onClick={handleShowDialog}>
        添加图片
      </div>
    </div>
  )
}
