// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router,{DynamicRoutes} from './router'
import store from './store'
import {getToken, setToken} from "./lib/util";

import toast from './components/toast'
import messageBox from './components/toast2'
import Mock from './mock'

import iView from 'iview';
import 'iview/dist/styles/iview.css';

import 'vue-area-linkage/dist/index.css';
import VueAreaLinkage from 'vue-area-linkage';
Vue.use(VueAreaLinkage);

Vue.config.productionTip = false;
Vue.use(iView);
Vue.use(toast);
Vue.use(messageBox);

if(process.env.NODE_ENV !== 'production'){
  require('./mock');
}


// const HAS_LOGIN = false;
router.beforeEach((to,from,next)=>{
  /*
  * 如果有token调用接口判断token是否过期
  * 如果没有token,跳登录
  * */
  const token = getToken();
  console.log(token,'=====');
  if(token){
    store.dispatch('authorization',token).then(()=>{
      if(to.name==='login') next({name:'home'});
      else next();
    }).catch(()=>{
      //setToken('');
      next({name:'login'})
    })
  }else{
    if(to.name==='login') next();
    else next({name:'login'})
  }
});

/*router.beforeEach((to,from,next)=>{

  const token = getToken();
  if(token){
    if(!store.state.permission.hasGetRules){
      store.dispatch('authorization').then(rules=>{
        store.dispatch('concat_routes',rules).then((routers)=>{
          /!*router.addRoutes(JSON.parse(JSON.stringify(routers)));*!/
          next({...to,replace:true})
        }).catch(()=>{
          next({name:'login'})
        })
      })
    }else{
      next();
    }
  }else{
    if(to.name==='login'){
      next();
    }else{
      next({name:'login'})
    }
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
