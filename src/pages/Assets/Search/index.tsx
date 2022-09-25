import React, {useState} from "react"
import style from "./style.module.scss"
import DialogForm from "../DialogForm"
import { addImage } from "../../../api"

interface IPropType {
  updateData: any
}

export default function Search(props: IPropType) {
  // dialog组件显示与隐藏
  const [isShow, setIsShow] = useState(false)

  // 展示弹框
  const handleShowDialog = () => {
    setIsShow(true)
  }
  // 关闭弹框
  const handleCloseDialogForm = () => {
    setIsShow(false)
  }
  // 确定按钮
  const handleSureClickForm = async (picName: string, picUrl: string) => {
    let flag = false
    const res = await addImage(picName, picUrl)
    // 添加成功
    if (res.status === 200) {
      flag = true
      props.updateData()
    }
    return flag
  }

  return (
    <div className={style.search}>
      <DialogForm
        isShow={isShow}
        handleCloseDialogForm={handleCloseDialogForm}
        handleSureClickForm={handleSureClickForm}
        ></DialogForm>
      <div className={style.btn} onClick={handleShowDialog}>
        添加图片
      </div>
    </div>
  )
}
