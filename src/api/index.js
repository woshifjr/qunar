//管理各个组件的数据
import axios from 'axios'
//设置后台返回的数据格式
axios.interceptors.response.use(function (response){
    return response.data.data
})

//请求home组件的数据接口
export let getHome=()=>{
    return axios.get('/static/mock/index.json')
}
//请求city组件的数据接口
export let getCites=()=>{
    return axios.get('/static/mock/city.json')
}
//请求detail组件的数据接口
export let getDetail=(id)=>{
    return axios.get('/static/mock/detail/'+id+'.json')
}
//请求week组件的数据接口
export let getWeeks=(id)=>{
    return axios.get('/static/mock/week/'+id+'.json')
}


