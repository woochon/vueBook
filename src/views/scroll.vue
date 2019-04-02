<template>
  <div class="scroll">
    <button id="button">按钮</button>
    <button class="button" @click="clickToSee('ele',1,'both')">click to see</button>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>2</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>3</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p style="text-align: center;"><a id="ele" href="#">see me</a></p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>3</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>4</p>
    <p>1</p>
    <p>1</p>
  </div>
</template>
<script>
  /* 滚动到指定的元素 */
  import {scroll} from '../common/js/compatibility'
  export default{
    name:'scrollCus',
    data(){
      return {
        msg:'test'
      }
    },
    methods:{
      /*
      * @clickToSee(elementId,time,direction)
      *
      * elementId:要滚动到的元素的id
      * time:滚动到指定元素的时间(s)
      * 滚动方向: 水平方向(horizontal) 和垂直方向(vertical)
      * */
      elementPosition(obj) {
        let curleft = 0, curtop = 0;
        if (obj.offsetParent) {
          curleft = obj.offsetLeft;
          curtop = obj.offsetTop;
          while (obj = obj.offsetParent) {
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
          }
        }
        return { x: curleft, y: curtop };
      },
      clickToSee(elementId,time=1,direction='horizontal'){
        let ele = document.getElementById(elementId);
        let count = 0;
        let timer = null;
        if(direction==='horizontal'){
          let c_top = scroll(elementId).top;
          let e_top = ele.offsetTop;
          let hor_diff = e_top-c_top;
          let hor_step = hor_diff/(20*time);
          timer = setInterval(function(){
            window.scrollBy(0,hor_step);
            count+=1;
            if(count>=(20*time)){
              clearInterval(timer);
            }
          },50);
        }else if(direction==='vertical'){
          let c_left=scroll().left;
          let e_left= ele.offsetLeft;
          let ver_diff = e_left-c_left;
          let ver_step = ver_diff/(20*time);
          timer = setInterval(function(){
            window.scrollBy(ver_step,0);
            count+=1;
            if(count>=(20*time)){
              clearInterval(timer);
            }
          },50);
        }else if(direction==='both'){
          let c_top = scroll(elementId).top;
          let e_top = ele.offsetTop;
          let hor_diff = e_top-c_top;
          let hor_step = hor_diff/(20*time);

          let c_left=scroll().left;
          let e_left= ele.offsetLeft;
          let ver_diff = e_left-c_left;
          let ver_step = ver_diff/(20*time);
          timer = setInterval(function(){
            window.scrollBy(ver_step,hor_step);
            count+=1;
            if(count>=(20*time)){
              clearInterval(timer);
            }
          },50);
        }
      },
    },
    mounted(){
      console.log(this.elementPosition(document.getElementById('ele')));
    }
  }
</script>
<style scoped>
  .button {
    position: fixed;
    bottom: 50%;
    right: 50%;
  }
  .scroll{
    width: 3000px;
  }
</style>
