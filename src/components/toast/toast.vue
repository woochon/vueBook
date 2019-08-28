<template>
  <div class="toast" v-if="isShow">
    {{message}}
  </div>
</template>

<script>
  export default {
    name: 'toast',
    props:{
      /*message:{
        type:String,
        default:'默认提示'
      },
      duration:{
        type:Number,
        default:2000
      }*/
    },
    data() {
      return {
        message:'',
        isShow: false
      }
    },
    methods:{
      show(message,duration=2000) {
        this.isShow = true;
        this.message = message;
        setTimeout(()=>{
          this.message= '';
          this.isShow = false;
        },duration)
      }
    }
  }
</script>

<style scoped>
  .toast {
    position: fixed;
    z-index:999;
    background-color: red;

    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 8px 10px;
    background-color: rgba(0,0,0,.75);
    color: #fff;
  }
</style>
