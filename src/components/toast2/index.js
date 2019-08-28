import Vue from 'vue';
import Toast from './messageBox.vue';

const obj = {};

obj.install = function(Vue,opts){
    const MyComponent = Vue.extend(Toast);
    Vue.prototype.$messageBox = function(opts){
      //默认配置
      const defaults ={
        title:'标题',
        content:'内容',
        cancel:'取消',
        ok:'确认',
        handleCancel:null,
        handleOk:null
      };
      for(let attr in opts){
        defaults[attr]=opts[attr];
      }
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
}
export default obj;

