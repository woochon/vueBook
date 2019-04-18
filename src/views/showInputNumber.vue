<template>
  <div class="showInputNumber">
    {{msg}}
    <InputNumber v-model.number="number"></InputNumber>
  </div>
</template>
<script>
  import InputNumber from '../components/inputNumber'
  export default{
    name:'showInputNumber',
    data(){
      return {
        msg:'test',
        number:10
      }
    },
    components:{
      InputNumber
    },
    methods:{

    }
  }
</script>
<style scoped>

</style>
