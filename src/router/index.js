import Vue from 'vue'
import Router from 'vue-router'
import home from '../views/HelloWorld'
import Throttle from '../views/throttle'
import Directive from '../views/directive'
import Scroll from '../views/scroll'
import Date from '../views/date'
import Tabs from '../views/tabs'
import Page from '../views/myPage'
import myImg from '../views/img'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: home
    },
    {
      path:'/throttle',
      name:'throttle',
      component:Throttle
    },
    {
      path:'/directive',
      name:'directive',
      component:Directive
    },
    {
      path:'/scroll',
      name:'scroll',
      component:Scroll
    },
    {
      path:'/date',
      name:'date',
      component:Date
    },
    {
      path:'/tabs',
      name:'tabs',
      component:Tabs
    },
    {
      path:'/mypage',
      name:'mypage',
      component:Page
    },
    {
      path:'/img',
      name:'img',
      component:myImg
    },
  ]
})
