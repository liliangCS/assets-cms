import React from "react"
import style from "./style.module.scss"
import profile from "../../assets/images/profile.jpg"

export default function Profile(props: any) {
  const addHidden = () => {
    return props.toggleStatus ? "" : "hidden"
  }

  return (
    <div className={style.profile}>
      <img src={profile} alt="" />
      <span className={addHidden()}>{sessionStorage.getItem("username")}</span>
    </div>
  )
}
