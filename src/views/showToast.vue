<template>
  <div class="showToast">
    <button @click="showToast">显示Toast</button>
    <button @click="showMessage">显示messageBox</button>
    <button @click="showMes">显示messageBox对象方式</button>

    <div v-if="showFullScreen">
      <button @click="handleFullScreen('half')">进入全屏</button>
      <button @click="handleFullScreen('full')">退出全屏</button>
    </div>
  </div>
</template>

<script>
  import { messageBox } from '../components/toast1'
  export default {
    name: 'showToast',
    data() {
      return {
        title:'ad',
        showFullScreen:false,

      }
    },
    created(){
      this.showFullScreen = window.navigator.userAgent.indexOf('MSIE')<0;
    },
    methods:{
      handleFullScreen(state){
        let main = document.body
        if (state==='full') {
          if (document.exitFullscreen) {
            document.exitFullscreen()
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen()
          } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen()
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen()
          }
        } else if(state==='half'){
          if (main.requestFullscreen) {
            main.requestFullscreen()
          } else if (main.mozRequestFullScreen) {
            main.mozRequestFullScreen()
          } else if (main.webkitRequestFullScreen) {
            main.webkitRequestFullScreen()
          } else if (main.msRequestFullscreen) {
            main.msRequestFullscreen()
          }
        }
      },
      showTitle(){
        console.log(this.title);
      },
      showToast(){
        console.log(this.$toast);
        this.$toast.show('haha',5000);
      },
      showMessage(){
        let that = this;
        messageBox({
          title:'沈阳',
          content:'内容阿萨德发挥擦搜ID发财树六还不阿斯顿发的发多岁的',
          cancel:'去下',
          ok:'城市定位',
          handleOk(){
            that.showTitle();
          },
          handleCancel() {
            console.log(this); //指向messageBox组件
            that.showToast('你好啊',5000);
            that.showTitle();
          }
        })
      },
      showMes(){
        const that = this;
        this.$messageBox({
          title:'messageBoxTitle',
          content:'messageBoxContent',
          ok:'box确认',
          cancel:'box取消',
          handleCancel(){
            console.log(this); //指向messageBox组件
            that.showToast('你好啊',5000);
            that.showTitle();
          },
          handleOk() {
            that.showTitle();
          }
        })
      }
    }
  }
</script>

<style scoped>
  .showToast {
    background: red
  }
</style>
