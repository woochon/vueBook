import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home'
import Login from '../views/login'
import Throttle from '../views/throttle'
import Directive from '../views/directive'
import Scroll from '../views/scroll'
import Date from '../views/date'
import Tabs from '../views/tabs'
import Page from '../views/myPage'
import myImg from '../views/img'
import Area from '../views/dataArea'
import showModel from '../views/showModal'
import showScroll from '../views/showScroll'
import shopCart1 from '../views/shopCart1'
import shopCart2 from '../views/shopCart2'
import showSelect from '../views/showSelect'
import store from '../views/store'
import tree from '../views/tree'
import storeModule from '../views/storeModule'
import showInputNumber from '../views/showInputNumber'
import mock from '../views/mock'
import Forbidden from '../views/forbidden'
import NotFound from '../views/404'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect:'/home'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path:'/throttle',
      name:'throttle',
      component:Throttle
    },
    {
      path:'/mock',
      name:'mock',
      component:mock
    },
    {
          path:'/tree',
          name:'tree',
          component:tree
    },
    {
      path:'/store',
      name:'store',
      component:store,
      children:[
        {
          path:'module',
          name:'storeModule',
          component:storeModule
        }
      ]
    }
  ]
});

// 准备动态添加的路由
export const DynamicRoutes = [
  {
        path:'/directive',
        name:'directive',
        component:Directive,
        meta:{
          requiresAuth:true
        }
      },
      {
        path:'/scroll',
        name:'scroll',
        component:Scroll,
        meta:{
          requiresAuth:true
        }
      },
      {
        path:'/date',
        name:'date',
        component:Date,
        meta:{
          requiresAuth:true
        }
      },
      {
        path:'/tabs',
        name:'tabs',
        component:Tabs,
        meta:{
          requiresAuth:true
        }
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
      {
        path:'/area',
        name:'area',
        component:Area
      },
      {
        path:'/showModel',
        name:'showModel',
        component:showModel
      },
      {
        path:'/showScroll',
        name:'showScroll',
        component:showScroll
      },
      {
        path:'/shopCart1',
        name:'shopCart1',
        component:shopCart1
      },
      {
        path: '/shopCart2',
        name: 'shopCart2',
        component: shopCart2
      },
      {
        path:'/showSelect',
        name:'showSelect',
        component:showSelect
      },
      {
        path:'/showInputNumber',
        name:'showInputNumber',
        component:showInputNumber
      },
      {
        path:'/403',
        name:'forbidden',
        component:Forbidden
      },
      {
        path:'*',
        name:'notFound',
        component:NotFound
      }
];
