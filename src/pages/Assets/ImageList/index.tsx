import React, {useState} from "react"
import style from "./style.module.scss"
import ImageItem from "../ImageItem"
import DialogForm from "../DialogForm"
import Dialog from "../../../components/Dialog"
import { updateImageById, removeImageById } from "../../../api"

// interface IImageType {
//   id: number
//   name: string
//   imgUrl: string
//   createAt: string
// }

// interface IPropType {
//   imageList: Array<IImageType>
// }

export default function ImageList(props: any) {

  // 图片id
  const [imageId, setImageId] = useState(-1)

  // ----------------------编辑图片对话框逻辑--------------------------------
  // dialogform组件显示与隐藏
  const [editIsShow, setEditIsShow] = useState(false)
  // 展示编辑弹框
  const handleShowEditDialog = (imageId: number) => {
    setImageId(imageId)
    setEditIsShow(true)
  }
  // 关闭编辑弹框
  const handleCloseDialogForm = () => {
    setEditIsShow(false)
  }
  // 确定按钮（编辑弹框）
  const handleSureClickForm = async (picName: string, picUrl: string) => {
    let flag = false
    const res = await updateImageById(imageId, picName, picUrl)
    // 更新成功关闭对话框
    if (res.status === 200) {
      flag = true
      props.updateData()
    }
    return flag
  }


  // ----------------------删除图片对话框逻辑-----------------------------------
  // dialog组件显示与隐藏
  const [deleteIsShow, setDeleteIsShow] = useState(false)
  // 显示删除对话框 
  const handleShowDeleteDialog = (imageId: number) => {
    setImageId(imageId)
    setDeleteIsShow(true)
  }
  // 关闭删除对话框
  const handleCloseDialog = () => {
    setDeleteIsShow(false)
  }
  // 确定删除按钮
  const handleSureClick = async () => {
    const res = await removeImageById(imageId)
    // 删除成功关闭对话框
    if (res.status === 200) {
      handleCloseDialog()
      props.updateData()
    }
  }

  return (
    <div className={style["image-list"]}>
      {/* 编辑对话框 */}
      <DialogForm
        title="更新图片"
        isShow={editIsShow}
        handleCloseDialogForm={handleCloseDialogForm}
        handleSureClickForm={handleSureClickForm}
        imageId={imageId}
      />
      {/* 删除对话框 */}
      <Dialog
        title="温馨提示"
        isShow={deleteIsShow}
        onClose={handleCloseDialog}
        onSure={handleSureClick}>确定要删除这张图片吗？</Dialog>
      {props.imageList.map((item: any) => {
        return (
          // 图片
          <ImageItem
            imgInfo={item}
            key={item.id}
            onEdit={() => handleShowEditDialog(item.id)}
            onDelete={() => handleShowDeleteDialog(item.id)}
          />
        )
      })}
    </div>
  )
}
