import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import City from '@/components/city/City'
import Detail from '@/components/detail/Detail'
import Week from '@/components/week/Week'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'/',
      component:Home
   },
   {
     path:'/city',
     component:City
   },
   {
     path:'/detail/:id',
     name:'detailLink',
     component:Detail
   },
   {
     path:'/week/:id',
     name:'weekLink',
     component:Week
   }
  ]
})
