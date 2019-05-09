import axios from 'axios'

const createInstance = (req) => axios.create({
  baseURL: 'https://api.douban.com', //对于服务器端
  headers: {
    cookie: req.get('cookie') || ''
  }
})
export default createInstance