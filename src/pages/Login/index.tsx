import React from "react"
import style from "./style.module.scss"

export default function Login() {
  return (
    <div className={style.login}>
      <div className={style["login-box"]}>
        <div className={style.left}></div>
        <div className={style.right}>
          <h2>资源管理后台</h2>
          <div className={style.form}>
            <div className={style["user-info"]}>
              <span className="iconfont icon-yiliaohangyedeICON-"></span>
              <input type="text" />
            </div>
            <div className={style["user-info"]}>
              <span className="iconfont icon-mima"></span>
              <input type="password" />
            </div>

            <div className={style["operation"]}>
              <div className={style["btn-reset"]}>重置</div>
              <div className={style["btn-login"]}>登陆</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
