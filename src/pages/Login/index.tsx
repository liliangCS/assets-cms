import React from "react"
import useMotto from "./hooks/useMotto"
import useForm from "./hooks/useForm"
import style from "./style.module.scss"

export default function Login() {
  // 格言设置
  const motto = useMotto()
  // 表单处理
  const form  = useForm()

  return (
    <div className={style.login}>
      <div className={style["login-box"]}>
        <div className={style.left}>{motto}</div>
        <div className={style.right}>
          <h2>资源管理后台</h2>
          <div className={style.form}>
            <div className={style["user-info"]}>
              <span className="iconfont icon-yiliaohangyedeICON-"></span>
              <input type="text" value={form.username} onChange={e => form.setUsername(e.target.value)}/>
            </div>
            <div className={style["user-info"]}>
              <span className="iconfont icon-mima"></span>
              <input type="password" value={form.password} onChange={e => form.setPassword(e.target.value)}/>
            </div>

            <div className={style["operation"]}>
              <div className={style["btn-reset"]} onClick={form.resetBtn}>重置</div>
              <div className={style["btn-login"]} onClick={form.loginBtn}>登陆</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
