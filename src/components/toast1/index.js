import Vue from 'vue';
import Toast from './toast.vue';

export const messageBox = (function(){
  //默认配置
  const defaults ={
    title:'',
    content:'',
    cancel:'取消',
    ok:'确认',
    handleCancel:null,
    handleOk:null
  };
  const MyComponent = Vue.extend(Toast);
  return function(opts){
    for(let attr in opts){
      defaults[attr]=opts[attr];
    }
    //const MyComponent = Vue.extend(Toast);
    const vm = new MyComponent({
      el:document.createElement('div'),
      data:{
        title:defaults.title,
        content:defaults.content,
        cancel:defaults.cancel,
        ok:defaults.ok
      },
      methods:{
        handleCancel(){
          defaults.handleCancel && defaults.handleCancel.apply(this);
          document.body.removeChild(vm.$el);
        },
        handleOk(){
          defaults.handleOk && defaults.handleOk.apply(this);
          document.body.removeChild(vm.$el);
        }
      }
    });
    document.body.appendChild(vm.$el)
  }
})();
