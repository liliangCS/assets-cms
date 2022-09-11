let timer: any = null
const messageBox = (text: string, duration = 2000) => {
  if (timer) return
  const divEl = document.createElement("div")
  divEl.innerText = text
  divEl.className = "messageBox"
  document.documentElement.appendChild(divEl)
  timer = setTimeout(() => {
    document.documentElement.removeChild(divEl)
    timer = null
  }, duration)
}

export default messageBox