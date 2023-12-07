import axios from "axios"

const api=axios.create({baseURL:"https://fakestoreapi.com/"})
console.log(api)
api.interceptors.response.use(

(response)=>response.data,
(errpr)=>Promise.reject(errpr)


)
export default api; 