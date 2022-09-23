import React, {useState} from "react"
import style from "./style.module.scss"
import Dialog from "../../../components/Dialog"
import messageBox from "../../../utils/messageBox"
import { addImage } from "../../../api"

interface IPropType {
  updateData: any
}

export default function Search(props: IPropType) {
  // dialog组件显示与隐藏
  const [isShow, setIsShow] = useState(false)
  // 图片名称
  const [picName, setPicName] = useState("")
  // 图片地址
  const [picUrl, setPicUrl] = useState("")

  // 重置表单
  function resetForm() {
    setPicName("")
    setPicUrl("")
  }

  // 展示弹框
  const handleShowDialog = () => {
    setIsShow(true)
  }
  // 关闭弹框
  const handleCloseDialog = () => {
    resetForm()
    setIsShow(false)
  }
  // 确定按钮
  const handleSureClick = async () => {
    if (picName === "" || picUrl === "") return messageBox("图片名称或地址不能为空")
    const res = await addImage(picName, picUrl)
    // 添加成功关闭对话框
    if (res.status === 200) {
      handleCloseDialog()
      props.updateData()
    }
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
        <div className="dialog-form">
          <div className="name">
            <span>图片名称</span><input type="text" value={picName} onChange={e => setPicName(e.target.value)}/>
          </div>
          <div className="url">
            <span>图片地址</span><input type="text" value={picUrl} onChange={e => setPicUrl(e.target.value)}/>
          </div>
        </div>
      </Dialog>
      <div className={style.btn} onClick={handleShowDialog}>
        添加图片
      </div>
    </div>
  )
}
