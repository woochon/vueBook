<template>
  <div class="outer">
    <canvas width="512px" height="206px" ref="canvas"></canvas>
    <img :src="tmpImg" alt="" ref="uploadImg">
    <button @click="getAvatar">生成头像</button>
    <div class="wrapper">
      <img src="../assets/img01.jpg" alt="" class="first-img" ref="firstImg">
      <img src="../assets/img01.jpg" alt="" class="second-img" ref="secondImg">
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
    <div class="preview">
      <img src="../assets/img01.jpg" alt="" class="previewImg" ref="previewImg">
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
        direction:'',   // 标识哪个触电被按下,
        tmpImg:''
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
    mounted(){
      document.addEventListener('selectstart',this.handlerSelectStart,false);
    },
    destroyed(){
      //document.removeEventListener('selectstart',this,handlerSelectStart,false);
    },
    methods:{
      // 防止出现选中框
      handlerSelectStart(e){
        e.returnValue=false;
      },

      getAvatar(){
        const dom = this.$refs.firstImg;
        const main = this.$refs.main;
        const canvas= this.$refs.canvas;
        const ctx=canvas.getContext("2d");
        ctx.clearRect(0,0,512,216);
        console.log(main.offsetLeft);
        console.log(main.offsetTop);
        ctx.drawImage(dom,main.offsetLeft*2,main.offsetTop*2,dom.offsetWidth,dom.offsetHeight,0,0,main.offsetWidth*2,main.offsetHeight*2);
        /*document.body.appendChild(canvas);*/
        let data=canvas.toDataURL();
        this.tmpImg=data;
        /*this.$refs.uploadImg.style.width = main.offsetWidth+'px';
        this.$refs.uploadImg.style.height = main.offsetHeight+'px';*/
        /*console.log(data);
        data=data.split(',')[1];
        data=window.atob(data);
        var ia = new Uint8Array(data.length);
        for (var i = 0; i < data.length; i++) {
          ia[i] = data.charCodeAt(i);
        }
        console.log(ia);
        var blob=new Blob([ia],{type:"image/png",endings:'transparent'});
        console.log(blob);*/
        /*let imgUrl=window.URL.createObjectURL(data);
        this.tmpImg=imgUrl;
        this.$refs.uploadImg.onload=function(){
          console.log('图片加载成功');
          URL.revokeObjectURL(imgUrl);
        }*/

      },

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
          switch (this.direction) {
            case 'leftUp':
              this.moveUp(e);
              this.moveLeft(e);
              break;
            case 'up':
              this.moveUp(e);
              break;
            case 'rightUp':
              this.moveRight(e);
              this.moveUp(e);
              break;
            case 'right':
              this.moveRight(e);
              break;
            case 'rightDown':
              this.moveRight(e);
              this.moveDown(e);
              break;
            case 'down':
              this.moveDown(e);
              break;
            case 'leftDown':
              this.moveDown(e);
              this.moveLeft(e);
              break;
            case 'left':
              this.moveLeft(e);
              break;
            default:
              console.log('出错');
          }
          this.setSelectRectLight();
          this.setPreviewRect();
        }
      },
      moveUp(e){
        let y=e.clientY; //鼠标x坐标
        let addHeight = ''; //鼠标移动后选取框增加的高度
        const dom = this.$refs.main;   //dom节点
        // let widthBefore = dom .offsetWidth; //选取框变化前的宽度
        let heightBefore = dom.offsetHeight; //选取框变化前的宽度
        addHeight = elementPosition(dom).y - y;  //鼠标移动后增加的高度
        dom.style.height = heightBefore+addHeight +'px';
        dom.style.top = dom.offsetTop - addHeight + 'px';
      },
      moveRight(e){
        let x=e.clientX; //鼠标x坐标
        let addWidth = ''; //鼠标移动后选取框增加的高度
        const dom = this.$refs.main;   //dom节点
        let widthBefore = dom .offsetWidth; //选取框变化前的宽度
        addWidth = x - elementPosition(dom).x-widthBefore; //鼠标移动后增加的宽度
        dom.style.width = addWidth + widthBefore + 'px';
      },
      moveDown(e){
        let y=e.clientY; //鼠标x坐标
        let addHeight = ''; //鼠标移动后选取框增加的高度
        const dom = this.$refs.main;   //dom节点
        let heightBefore = dom .offsetHeight; //选取框变化前的宽度
        addHeight = y-elementPosition(dom).y - heightBefore;  //鼠标移动后增加的高度
        dom.style.height = heightBefore+addHeight +'px';
      },
      moveLeft(e){
        let x=e.clientX; //鼠标x坐标
        let addWidth = ''; //鼠标移动后选取框增加的高度
        const dom = this.$refs.main;   //dom节点
        let widthBefore = dom .offsetWidth; //选取框变化前的宽度
        addWidth = elementPosition(dom).x-x; //鼠标移动后增加的宽度
        dom.style.width = widthBefore + addWidth+ 'px';
        dom.style.left = dom.offsetLeft - addWidth+ 'px';
      },

      /* 设置选中区明亮 */
      setSelectRectLight(){
        const dom = this.$refs.main;   //dom节点
        const top = dom.offsetTop;
        const right= dom.offsetLeft + dom.offsetWidth;
        const bottom=dom.offsetTop+dom.offsetHeight;
        const left = dom.offsetLeft;
        /*this.$refs.secondImg.style.left = left +'px';
        this.$refs.secondImg.style.top = top +'px';*/
        this.$refs.secondImg.style.clip=`rect(${top}px,${right}px,${bottom}px,${left}px)`;
      },

      /* 设置预览区 */
      setPreviewRect(){
        const dom = this.$refs.main;   //dom节点
        const top = dom.offsetTop;
        const right= dom.offsetLeft + dom.offsetWidth;
        const bottom=dom.offsetTop+dom.offsetHeight;
        const left = dom.offsetLeft;
        this.$refs.previewImg.position='absolute';
        this.$refs.previewImg.style.left=`-${left}px`;
        this.$refs.previewImg.style.top=`-${top}px`;
        this.$refs.previewImg.style.clip=`rect(${top}px,${right}px,${bottom}px,${left}px)`;
      }
    }
  }
</script>
<style scoped>
  img{
    width: 512px;
    height: 206px;
  }
  .outer{
    width: 1600px;
    height: 800px;
    background-color: #ccc;
    padding: 50px;
    position: relative;
  }
  .outer .preview{
    position: absolute;
    width: 512px;
    height: 206px;
    left: 700px;
    top: 50px;
    overflow: hidden;
  }
  .wrapper{
    position: relative;
    width: 512px;
    height: 206px;
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
  .outer .previewImg{
    position: absolute;
    top: 0;
    right: 0;
    clip:rect(0,200px,200px,0);
  }

</style>
