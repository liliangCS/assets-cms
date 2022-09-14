import { useState } from "react"

const useToggleStatus = () => {
  const [ toggleStatus, setToggleStatus ] = useState(true)
  const handleToggle = () => {
    setToggleStatus(!toggleStatus)
  }

  return {
    toggleStatus,
    handleToggle
  }
}

export default useToggleStatus