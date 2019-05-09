import axios from  'axios'
const instance =axios.create({
  baseURL:'/api' //对于浏览器端
})
export default instance