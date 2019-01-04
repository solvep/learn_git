import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        default:HelloWorld,
        left:Hi1,
        right:Hi2}
    },{
      path:'/Hi',
      component:Hi,
      children:[
        {
          path:'/',
          name:'Hi',
          component:Hi
        } ,
        {
          path:'Hi1',
          name:'Hi1',
          component:Hi1
        }  ,
        {
          path:'Hi2',
          name:'Hi2',
          component:Hi2
        }   
      ]
    },
  ]
})
