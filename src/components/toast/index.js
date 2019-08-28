import Toast from './toast.vue';
const obj = {};

obj.install = function(Vue){
  // 1.创建组件构造器
  const ToastConstructor = Vue.extend(Toast);

  // 2.new方式生成组件对象
  const ToastObj = new ToastConstructor();

  console.log(ToastObj);

  // 3.将组件对象挂在到某个div上
  ToastObj.$mount(document.createElement('div'));
  console.log(ToastObj.$el);

  // 4.将组件添加到body中
  document.body.appendChild(ToastObj.$el);

  Vue.prototype.$toast = ToastObj;
}
export default obj;
