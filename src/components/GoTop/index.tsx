import React, {useState, useEffect} from "react"
import style from "./style.module.scss"

export default function GoTop() {
  // 滚动容器
  const mainEl = document.getElementById("main")!
  // 是否显示
  const [isShow, setIsShow] = useState(false)

  // 滚动事件的监听函数
  const scrollEvent = () => {
    if (mainEl.scrollTop === 0) {
      setIsShow(false)
    } else {
      setIsShow(true)
    }
  }

  // 挂载时绑定监听，卸载时取消监听
  useEffect(() => {
    mainEl.addEventListener("scroll", scrollEvent)
    return () => {
      mainEl.removeEventListener("scroll", scrollEvent)
    }
  }, [])

  // 回到顶部
  const goTop = () => {
    mainEl.scrollTop = 0
  }

  return (
    <div
      className={style["go-top"] + (isShow ? "" : " hidden")}
      onClick={goTop}
    >
      <span className="iconfont icon-qudingbu"></span>
    </div>
  )
}
