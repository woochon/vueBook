// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router,{DynamicRoutes} from './router'
import store from './store'
// import Mock from './mock'

import 'vue-area-linkage/dist/index.css';
import VueAreaLinkage from 'vue-area-linkage';
Vue.use(VueAreaLinkage);

Vue.config.productionTip = false;

if(process.env.NODE_ENV !== 'production'){
  require('./mock');
  console.log('123');
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
  /!*if(localStorage.getItem('hasLogin')==='1'){
    let tmp =[];
    tmp = DynamicRoutes.filter((item)=>{
      return (!item.meta)||(item.meta&&(!item.meta.requiresAuth));
    });
    router.addRoutes(tmp);
    localStorage.setItem('addRoutes',JSON.stringify(tmp));
    next()
  }else{
    next();
  }*!/
});*/

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
