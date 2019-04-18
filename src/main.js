// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'vue-area-linkage/dist/index.css';
import VueAreaLinkage from 'vue-area-linkage';
Vue.use(VueAreaLinkage);

Vue.config.productionTip = false;

router.beforeEach((to,from,next)=>{
  console.log('123456');
  if(!localStorage.getItem('token')){
    if(!to.matched.some(record => record.meta.requiresAuth)){
      next();
    }
    else{
      next({path:'/login'})
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
