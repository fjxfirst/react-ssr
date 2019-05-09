import axios from 'axios'
const instance =axios.create({
  baseURL:'https://api.douban.com' //对于服务器端
})
export default instance