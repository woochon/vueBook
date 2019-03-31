<template>
  <div class="directive">
    <!--<div class="main" v-clickoutside.esc="handleClose">
      <button @click="toggle">点击显示下拉菜单</button>
      <div class="dropdown" v-show="show">
        <p>下拉框内容，点击外面区域可以关闭</p>
      </div>
    </div>-->
    <h2>点击事件不带参数指令</h2>
    <div class="main" v-newClick="handleClose">
          <button @click="toggle">点击显示下拉菜单</button>
          <div class="dropdown" v-show="show">
            <ul>
              <li v-for="(item,key) in list" @click="getItemInfo(item)">{{item.name}}</li>
            </ul>
          </div>
        </div>

    <h2>keyup事件节流指定</h2>
    <input type="text" v-model="text" v-debounce="search">

    <h2>时间转化指令</h2>
    <span v-time="time"></span>

  </div>
</template>
<script>
  /* 自定义指令函数传参问题无法解决 */
  /* 改造clickoutside 鼠标移入时显示下拉框,鼠标移除时收起下拉框,点击下拉列表时下显示数据  */
  /* action 鼠标移入时显示下拉框,鼠标移除时收起下拉框  */
  import Time from '../common/js/time'
  export default{
    name:'directive',
    data(){
      return {
        msg:'directive',
        show:false,
        text:'',
        list:[
          {
            name:'vue',
            index:0
          },
          {
            name:'node',
            index:1
          },
          {
            name:'html',
            index:2
          },
          {
            name:'js',
            index:3
          }
        ],
        time:1488930695721
      }
    },
    directives:{
      clickoutside:{
        bind(el,binding,vNode){
          console.log(binding);
          function documnentHandler(e){
            if(el.contains(e.target)){
              return false;
            }
            if(binding.expression){
              binding.value();  // 执行methods函数中的函数,参数可不传
            }
          }
          el._vueClickOutside_=documnentHandler;
          document.addEventListener('click',documnentHandler);
          if(binding.modifiers.esc){
            function keyHandler(e){
              binding.value(e);
            }
            document.addEventListener('keydown',keyHandler);
            el._vueKeyHandler_=keyHandler;
          }
        },
        insert(el,binding,vNode,oldNode){

        },
        update(el,binding,vNode){
          console.log(binding.expression);
        },
        unbind(el,binding,vNode){
          document.removeEventListener('click',el._vueClickOutside_);
          delete el._vueClickOutside_;

          if(binding.modifiers.esc){
            document.removeEventListener('keydown',el._vueKeyHandler_);
            delete el._vueKeyHandler_;
          }
        }
      },
      debounce:{
        bind:function(el,binding){
          el._timer=null;
          el.addEventListener('keyup',()=>{
            console.log(el._timer);
            if(el._timer){
              clearTimeout(el._timer);
            }
            el._timer = setTimeout(()=>{
              binding.value();
            },1000)
          })
        },
        unbind:function(el){
          el.removeEventListener('keyup');
          delete el._timer
        }
      },
      newClick:{
        bind:function(el,binding){
          function handler(e){
            if(!el.contains(e.target)){
              binding.value(e);
            }

          }
          el._hander_=handler;
          document.addEventListener('mouseover',handler);
        },
        unbind:function(el){
          document.removeEventListener('mouseover');
          delete el._hander_;
        }
      },
      time:{
        bind:function(el,binding){
          el.innerHTML=Time.getTimeTip(binding.value);
          el._timer_=setInterval(function(){
            el.innerHTML=Time.getTimeTip(binding.value)
          },1000)
        },
        unbind:function(el){
          clearInterval(el._timer_);
          delete el._timer_;
        }
      }
    },
    methods:{
      toggle(){
        this.show=true;
      },
      handleClose(){
        this.show = false;
      },
      search(){
        console.log(this.text);
      },
      getItemInfo(data){
        console.log(data.name);
      }
    }
  }
</script>
<style scoped>
  .main{
    width: 125px;
  }
  button{
    display: block;
    width: 100%;
    color: #fff;
    background-color: #39f;
    border:0;
    padding: 6px;
    text-align: center;
    font-size: 12px;
    border-radius: 4px;
    cursor:pointer;
    outline:none;
    position: relative;
  }
  button:active{
    top: 1px;
    left: 1px;
  }
  .dropdown{
    width: 100%;
    height: 150px;
    margin:5px 0;
    font-size: 12px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 1px 6px rgba(0,0,0,.2);
  }
  .dropdown p{
    display: inline-block;
    padding: 6px;
  }
</style>
