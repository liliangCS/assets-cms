const checkLoginStatus = () => {
  return sessionStorage.getItem("token") ? true : false
}

export default checkLoginStatus