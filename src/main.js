// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router,{DynamicRoutes} from './router'
import store from './store'
import {getToken, setToken} from "./lib/util";
// import Mock from './mock'

import iView from 'iview';
import 'iview/dist/styles/iview.css';

import 'vue-area-linkage/dist/index.css';
import VueAreaLinkage from 'vue-area-linkage';
import permission from "./store/module/user";
Vue.use(VueAreaLinkage);

Vue.config.productionTip = false;
Vue.use(iView);

if(process.env.NODE_ENV !== 'production'){
  require('./mock');
}
/*router.beforeEach((to,from,next)=>{
  /!*if(to.path!=='/login'||to.path!=='/'){
    let tmp =[];
    if(!localStorage.getItem('token')){
      tmp = DynamicRoutes.filter((item)=>{
        return (!item.meta)||(item.meta&&(!item.meta.requiresAuth));
      });
    }else{
      tmp = DynamicRoutes.filter((item)=>{
        return (!item.meta)||(item.meta&&(!item.meta.requiresAuth));
      });
    }
    router.addRoutes(tmp);
    localStorage.setItem('addRoutes',JSON.stringify(tmp));
    next();
  }else{
    next({path:'/login'});
  }*!/
  /!*let tmp =[];
  if(!localStorage.getItem('token')){
      tmp = DynamicRoutes.filter((item)=>{
        return (!item.meta)||(item.meta&&(!item.meta.requiresAuth));
      });
    }else{
      tmp = DynamicRoutes.filter((item)=>{
        return (!item.meta)||(item.meta&&(!item.meta.requiresAuth));
      });
    }
  router.addRoutes(tmp);
  console.log(router);
  localStorage.setItem('addRoutes',JSON.stringify(tmp));
  console.log(typeof (localStorage.getItem('hasLogin')));
  if(localStorage.getItem('hasLogin')==='1'){
    next({path:to.fullPath});
  }else{
    next();
  }*!/
  if(to.path==='/login'){
    load_onece = false;
  }
  if(!load_onece){
    let tmp =[];
    if(localStorage.getItem('hasLogin')==='1'){
      tmp = DynamicRoutes.filter((item)=>{
        return (!item.meta)||(item.meta&&(item.meta.requiresAuth))
      });
      router.addRoutes(tmp);
      localStorage.setItem('addRoutes',JSON.stringify(tmp));
      load_onece=true;
      next()
    }else{
      tmp = DynamicRoutes.filter((item)=>{
        return !item.meta;
      });
      router.addRoutes(tmp);
      localStorage.setItem('addRoutes',JSON.stringify(tmp));
      load_onece=true;
      next();
    }
  }else{
    next();
  }
});*/

router.beforeEach((to,from,next)=>{
  const token = getToken();
  console.log(store.state.permission.hasGetRules);
  console.log(token);
  if (token) {
    if (!store.state.permission.hasGetRules) {
      console.log('0000');
      store.dispatch('authorization').then(rules => {
        console.log(rules,'rules');
        store.dispatch('concatRoutes', rules).then(routers => {
          router.addRoutes(routers);
          next({ ...to, replace: true })
        }).catch(() => {
          next({ name: 'login' })
        })
      }).catch(() => {
        setToken('');
        next({ name: 'login' })
      })
    } else {
      next()
    }
  } else {
    if (to.name === 'login') next()
    else next({ name: 'login' })
  }
});


/*const HAS_LOGIN = false;
router.beforeEach((to,from,next)=>{
  /!*
  * 如果有token调用接口判断token是否过期
  * 如果没有token,跳登录
  * *!/
  const token = getToken();
  console.log(token,'=====');
  if(token){
    console.log('5555');
    store.dispatch('authorization',token).then(()=>{
      console.log('3333');
      if(to.name==='login') next({name:'home'});
      else next();
    }).catch(()=>{
      console.log('clear token');
      //setToken('');
      next({name:'login'})
    })
  }else{
    console.log('1000000');
    if(to.name==='login') next();
    else next({name:'login'})
  }
});*/

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
