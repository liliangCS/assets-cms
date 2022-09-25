import React, { useState, useEffect } from "react"
import style from "./style.module.scss"
import Dialog from "../../../components/Dialog"
import messageBox from "../../../utils/messageBox"
import { getImageById } from "../../../api"

function DialogForm(props: any) {
  const {
    title,
    isShow,
    handleCloseDialogForm,
    handleSureClickForm,
    imageId
  } = props
  // 图片名称
  const [picName, setPicName] = useState("")
  // 图片地址
  const [picUrl, setPicUrl] = useState("")

  // 重置表单
  function resetForm() {
    setPicName("")
    setPicUrl("")
  }

  // 弹框关闭
  const handleCloseDialog = () => {
    // 判断是添加对话框还是编辑对话框
    if (imageId === undefined) {
      // 清空表单
      resetForm()
    } else {
      // 重新请求
      getImageById(imageId).then((res: any) => {
        const { name, imgUrl } = res
        setPicName(name)
        setPicUrl(imgUrl)
      })
    }
    handleCloseDialogForm()
  }

  // 确定按钮
  const handleSureClick = async () => {
    if (picName === "" || picUrl === "") return messageBox("图片名称或地址不能为空")
    const flag = await handleSureClickForm(picName, picUrl)
    if (flag) {
      handleCloseDialog()
    }
  }

  useEffect(() => {
    if (imageId !== undefined && imageId > -1) {
      getImageById(imageId).then((res: any) => {
        const { name, imgUrl } = res
        setPicName(name)
        setPicUrl(imgUrl)
      })
    }
  }, [imageId])

  return (
    <Dialog
      title={title}
      isShow={isShow}
      onClose={handleCloseDialog}
      onSure={handleSureClick}
    >
      {/* 表单组件 */}
      <div className={style["dialog-form"]}>
        <div className={style.name}>
          <span>图片名称</span>
          <input
            type="text"
            value={picName}
            onChange={(e) => setPicName(e.target.value)}
          />
        </div>
        <div className={style.url}>
          <span>图片地址</span>
          <input
            type="text"
            value={picUrl}
            onChange={(e) => setPicUrl(e.target.value)}
          />
        </div>
      </div>
    </Dialog>
  )
}

DialogForm.defaultProps = {
  title: "添加图片"
}


export default DialogForm