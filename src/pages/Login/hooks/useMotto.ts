import {useState, useEffect} from "react"

const useMotto = () => {
  const MOTTO = "花无凋零之时，爱无传达之期，爱情亘古不变，紫罗兰永世长存。"
  let index = 0
  const [motto, setMotto] = useState("")
  // motto字递增函数
  function automation(timer: NodeJS.Timer) {
    if (index === MOTTO.length - 1) clearInterval(timer)
    setMotto((motto) => motto + MOTTO[index++])
  }
  useEffect(() => {
    if (document.documentElement.clientWidth <= 800) {
      console.log("移动端屏幕宽度为：", document.documentElement.clientWidth)
      return
    }
    const timer = setInterval(() => {
      automation(timer)
    }, 500)

    return () => {
      if (timer) {
        clearInterval(timer)
      }
    }
  }, [])

  return motto
}

export default useMotto