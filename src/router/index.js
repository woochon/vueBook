import Vue from 'vue'
import Router from 'vue-router'
import { routes } from './routes'
import store from '../store/'

Vue.use(Router);

const router = new Router({
  mode:'history',
  routes
});


router.beforeEach((to,from,next)=>{
  /*const token = '';
  if(token){
    if(!store.state.permission.hasGetRouters){
      store.dispatch('authorization').then(routers=>{
        store.dispath('getPermissionList',routers).then(res=>{
          router.addRoutes(JSON.parse(JSON.stringify(res)));
          next({...to,replace:true})
        }).catch(()=>{
          next({name:'login'})
        })
      })
    }
  }else{
    if(to.name==='login'){
      next();
    }else{
      next({name:'login'})
    }
  }*/
  next();
});

export default router;













































/*to.meta&& setTitle(to.meta.title);
if(to.name!=='login'){
  if(HAS_LOGIN){
    next()
  }else{
    next({name:'login'})
  }
}else{
  //防止出现在url栏手动输入地址
  if(HAS_LOGIN){
    next({name:'HelloWorld'})
  }else{
    next();
  }
}*/
/*export const setTitle=(title)=>{
  window.document.title=title||'undefined'
};*/


// 准备动态添加的路由
/*export const routeMaps = [
  {
    path: '/',
    name: 'index',
    redirect:'/home'
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
  },
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
  }
];*/
