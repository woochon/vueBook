<template>
  <div class="showModel">
    <Model v-model="show" :scrollable="true" :showCloseIcon="true">
      <div slot="headers">弹框</div>
      <div slot="footers">
        <button @click="confirm">确定</button>
        <button @click="cancel">取消</button>
      </div>
    </Model>
    <button @click="toggle">展开或收起</button>
  </div>
</template>
<script>
  import Model from '../components/model'
  export default{
    name:'showModel',
    data(){
      return {
        msg:'test',
        show:false
      }
    },
    components:{
      Model
    },
    methods:{
      toggle(){
        this.show =!this.show;
      },
      confirm(){
        this.show = false;
      },
      cancel(){
        this.show = false;
      }
    }
  }
</script>
<style scoped>
  .showModel{
    margin-top: 200px;
    margin-left: 100px;
    position: relative;
    height: 3000px;
  }
</style>
