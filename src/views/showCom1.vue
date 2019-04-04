<!-- 递归组件 -->
<template>
  <div >

  </div>
</template>
<script>
  export default{
    name:'childComponent',
    data(){
      return {
        msg:'test'
      }
    },
    props:{
      count:Number,
      default:1
    },
    methods:{

    }
  }
</script>
