<template>
  <div class="toast2">
    <h2>{{title}}</h2>
    <p>{{content}}</p>
    <div>
      <div @click="handleCancel">{{cancel}}</div>
      <div @click="handleOk">{{ok}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'toast2',
    data() {
      return {}
    }
  }
</script>

<style scoped>
  .toast2 {
    position: fixed;
    width: 200px;
    border: 1px solid #ccc;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: rgba(0,0,0,.75);
    color: #fff;
  }
  .toast2 h2{
    text-align: center;
    line-height: 40px;
    font-size: 18px;
  }
  .toast2 p{
    text-align: center;
    line-height: 40px;
  }
  .toast2 > div{
    position: relative;
    display: flex;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 30px;
    border-top: 1px solid #ccc;
  }
  .toast2 > div div{
    flex:1;
    text-align: center;
    line-height: 30px;
    border-right: 1px solid #ccc;
  }
  .toast2 > div div:last-child{
    border: none;
  }
</style>
