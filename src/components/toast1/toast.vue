<template>
  <div class="messageBox">
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
    name: 'messageBox',
    data() {
      return {}
    }
  }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .messageBox {
    position: fixed;
    width: 200px;
    /*height: 110px;*/
    border: 1px solid #ccc;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: rgba(0,0,0,.75);
    color: #fff;
  }
  .messageBox h2{
    text-align: center;
    line-height: 40px;
    font-size: 18px;
  }
  .messageBox p{
    text-align: center;
    line-height: 40px;
  }
  .messageBox > div{
    position: relative;
    display: flex;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 30px;
    border-top: 1px solid #ccc;
  }
  .messageBox > div div{
    flex:1;
    text-align: center;
    line-height: 30px;
    border-right: 1px solid #ccc;
  }
  .messageBox > div div:last-child{
    border: none;
  }
</style>
