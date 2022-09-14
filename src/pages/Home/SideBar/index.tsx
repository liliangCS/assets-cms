import React from "react"
import {useNavigate} from "react-router-dom"
import style from "./style.module.scss"
import Profile from "../../../components/Profile"

export default function SideBar(props: any) {
  const navigate = useNavigate()
  const addHidden = () => {
    const {toggleStatus} = props
    return toggleStatus ? "" : "hidden"
  }

  return (
    <div className={style["side-bar"]}>
      <Profile toggleStatus={props.toggleStatus}></Profile>
      <div
        className={style["menu-tab"]}
        onClick={() => {
          navigate("/home/assets")
        }}
      >
        <span className="iconfont icon-xiangce"></span>
        <span className={addHidden()}>图片资源</span>
        <span
          className={"iconfont icon-youjiantou_huaban" + addHidden()}
        ></span>
      </div>
      <div
        className={style["menu-tab"]}
        onClick={() => {
          navigate("/home/user")
        }}
      >
        <span className="iconfont icon-shezhi"></span>
        <span className={addHidden()}>用户管理</span>
        <span
          className={"iconfont icon-youjiantou_huaban" + addHidden()}
        ></span>
      </div>
    </div>
  )
}
