<template>
  <div class="outer">
    <div class="wrapper">
      <img src="../assets/img01.jpg" alt="" class="first-img">
      <img src="../assets/img01.jpg" alt="" class="second-img">
      <div class="main" ref="main">
        <div class="slot left-up" @mousedown="leftUp"></div>
        <div class="slot up" @mousedown="up"></div>
        <div class="slot right-up" @mousedown="rightUp"></div>
        <div class="slot right"  @mousedown="right"></div>
        <div class="slot right-down" @mousedown="rightDown"></div>
        <div class="slot down" @mousedown="down"></div>
        <div class="slot left-down" @mousedown="leftDown"></div>
        <div class="slot left" @mousedown="left"></div>
      </div>
    </div>
  </div>
</template>
<script>
  import {elementPosition} from '../common/js/compatibility'
  export default{
    name:'myImg',
    data(){
      return {
        msg:'test',
        keyDown:false, // 标识触点是否被按下
        direction:''   // 标识哪个触电被按下
      }
    },
    watch:{
      keyDown(val){
        if(val){
          console.log('key down');
          window.addEventListener('mousemove',this.handlerMove,false);
        }else{
          console.log('key up');
          window.removeEventListener('mousemove',this.handlerMove,false);
        }
      }
    },
    methods:{
      leftUp(){
        this.keyDown=true;
        this.direction='leftUp';
        window.addEventListener('mouseup',this.handlerUp,false);
      },
      up(){
        this.keyDown=true;
        this.direction='up';
        window.addEventListener('mouseup',this.handlerUp,false);
      },
      rightUp(){
        this.keyDown=true;
        this.direction='rightUp';
        window.addEventListener('mouseup',this.handlerUp,false);
      },
      right(){
        this.keyDown=true;
        this.direction='right';
        window.addEventListener('mouseup',this.handlerUp,false);
      },
      rightDown(){
        this.keyDown=true;
        this.direction='rightDown';
        window.addEventListener('mouseup',this.handlerUp,false);
      },
      down(){
        this.keyDown=true;
        this.direction='down';
        window.addEventListener('mouseup',this.handlerUp,false);
      },
      leftDown(){
        this.keyDown=true;
        this.direction='leftDown';
        window.addEventListener('mouseup',this.handlerUp,false);
      },
      left(){
        this.keyDown=true;
        this.direction='left';
        window.addEventListener('mouseup',this.handlerUp,false);
      },


      handlerUp(){
        this.keyDown=false;
        window.removeEventListener('mouseup',this.handlerUp,false);
      },
      handlerMove(e){
        if(this.keyDown){
          let x=e.clientX; //鼠标x坐标
          let y=e.clientY; //鼠标x坐标
          let addWidth = ''; //鼠标移动后选取框增加的框度
          let addHeight = ''; //鼠标移动后选取框增加的高度
          const dom = this.$refs.main;   //dom节点
          let widthBefore = dom .offsetWidth; //选取框变化前的宽度
          let heightBefore = dom .offsetHeight; //选取框变化前的宽度

          switch (this.direction) {
            case 'right':
              addWidth = x - elementPosition(dom).x-widthBefore; //鼠标移动后增加的宽度
              dom.style.width = addWidth + widthBefore + 'px';
              break;
            case 'left':
              addWidth =elementPosition(dom).x-x; //鼠标移动后增加的宽度
              dom.style.width = addWidth + widthBefore + 'px';
              dom.style.left = dom.offsetLeft - addWidth+ 'px';
              break;
            case 'up':
              addHeight = elementPosition(dom).y - y;  //鼠标移动后增加的高度
              dom.style.height = heightBefore+addHeight +'px';
              dom.style.top = dom.offsetTop - addHeight + 'px';
              break;
            case 'down':
              console.log('direction down');
              addHeight = y - elementPosition(dom).y - heightBefore;  //鼠标移动后增加的高度
              dom.style.height = heightBefore+addHeight +'px';
              break;
            default:
              console.log('出错');
          }
        }
      }
    }
  }
</script>
<style scoped>
  .outer{
    width: 1600px;
    height: 800px;
    background-color: #ccc;
    padding: 50px;
  }
  .wrapper{
    position: relative;
    width: 1024px;
    height: 512px;
  }
  .wrapper .first-img{
    opacity: 0.5;
  }
  .wrapper .second-img{
    position: absolute;
    top: 0;
    left: 0;
    clip:rect(0,200px,200px,0);
    z-index:1;
  }
  .wrapper .main{
    position: absolute;
    left: 0;
    top: 0;
    width: 200px;
    height: 200px;
    border: 1px solid #fff;
    box-sizing: border-box;
    z-index:2;
  }
  .wrapper .main .slot{
    position: absolute;
    width: 8px;
    height: 8px;
    background-color: #fff;
    margin-left: -4px;
    margin-top: -4px;
  }
  .wrapper .main .slot.left-up{
    left: 0;
    top: 0;
    cursor: nw-resize;
  }
  .wrapper .main .slot.up{
    left: 50%;
    top: 0;
    cursor: n-resize;
  }
  .wrapper .main .slot.right-up{
    left: 100%;
    top: 0;
    cursor: ne-resize;
  }
  .wrapper .main .slot.right{
    left: 100%;
    top: 50%;
    cursor: e-resize;
  }
  .wrapper .main .slot.right-down{
    left: 100%;
    top: 100%;
    cursor: se-resize;
  }
  .wrapper .main .slot.down{
    left: 50%;
    top: 100%;
    cursor: s-resize;
  }
  .wrapper .main .slot.left-down{
    left: 0;
    top: 100%;
    cursor: sw-resize;
  }
  .wrapper .main .slot.left{
    left: 0;
    top: 50%;
    cursor: w-resize;
  }
</style>
