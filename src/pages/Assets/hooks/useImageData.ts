import { useState } from "react"
import { getAllImage } from "../../../api"

const useImageData = () => {
  const [ imageList, setImageList ] = useState([])

  const loadImageData = () => {
    getAllImage().then((res: any) => {
      setImageList(res)
    })
  }
  
  return { imageList, loadImageData }
}

export default useImageData