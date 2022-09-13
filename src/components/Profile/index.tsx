import React from "react"
import style from "./style.module.scss"
import profile from "../../assets/images/profile.jpg"

export default function Profile() {
  return (
    <div className={style.profile}>
      <img src={profile} alt="" />
      <span>{sessionStorage.getItem("username")}</span>
    </div>
  )
}
