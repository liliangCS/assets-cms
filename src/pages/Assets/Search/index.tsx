import React from "react"
import style from "./style.module.scss"

export default function Search() {
  return (
    <div className={style.search}>
      <div className={style.input}>
        <input type="text" /><button>搜索</button>
      </div>
      <div className={style.addImg}>
        <button>添加图片</button>  
      </div>
    </div>
  )
}
