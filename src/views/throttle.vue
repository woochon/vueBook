<template>
  <div>
    <h2>窗口大小变化事件</h2>
    <h2>点击事件不带参数节流</h2>
    <button @click="test(true)">点击测试</button>
    <h2>点击事件带参数节流</h2>
    <ul>
      <li v-for="(item,key) in list" @click="getItemInfo(list)">{{item.name}}</li>
    </ul>
    <h2>窗口滚动事件节流</h2>
    <div style="height: 2000px;background-color: purple;"></div>
  </div>
</template>
<script>
  /* 函数节流的正确用法,参数可以在function中传递 */
  /* https://www.cnblogs.com/crazycode2/p/10122293.html  */
  import _ from 'lodash';
  export default{
    name:'',
    data(){
      return {
        msg:'test',
        count:0,
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
        ]
      }
    },
    methods:{
      test:_.throttle(function(data){
        console.log('123124',data);
      },2000),
      /*getItemInfo(data){
        console.log(data.name);
      }*/
      getItemInfo:_.throttle(function(data){
        console.log(data);
        console.log(this.msg);
        this.count++;
        console.log(this.count);
      },3000),
    },
    created(){
      window.addEventListener('resize',_.throttle(function(){
        console.log('resize='+document.documentElement.clientWidth);
      },1000));

      window.addEventListener('scroll',_.throttle(function(){
        console.log('scroll='+scrollY);
      },1000));
    },
    destroyed(){
      document.removeEventListener('resize');
      document.removeEventListener('scroll');
    }
  }
</script>
