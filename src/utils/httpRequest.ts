import axios, { AxiosInstance } from "axios"

class HttpRequest {
  instance: AxiosInstance
  constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL,
      timeout: 5000
    })
    this.instance.interceptors.request.use(config => {
      return config
    })
    this.instance.interceptors.response.use(response => {
      return response.data
    }, reject => {
      return reject.response.data
    })
  }

  get(url: string, params: any) {
    return this.instance.request({
      url,
      params,
      method: "GET"
    })
  }

  post(url: string, data: any) {
    return this.instance.request({
      url,
      data,
      method: "POST"
    })
  }
}

const http = new HttpRequest("http://127.0.0.1:7788")

export {
  http
}