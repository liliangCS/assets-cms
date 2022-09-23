import React, { useEffect }from "react"
import style from "./style.module.scss"
import GoTop from "../../components/GoTop"
import Search from "./Search"
import ImageList from "./ImageList"
import useImageData from "./hooks/useImageData"

export default function Assets() {
  const { imageList, loadImageData } = useImageData()
  // 初始化数据
  useEffect(() => {
    loadImageData()
  }, [])

  // 更新数据
  const updateData = () => {
    loadImageData()
  }

  return (
    <div className={style.assets}>
      {/* 回到顶部 */}
      <GoTop></GoTop>
      {/* 图片检索 */}
      <Search updateData={updateData}></Search>
      {/* 图片列表 */}
      <ImageList imageList={imageList}></ImageList>
    </div>
  )
}
