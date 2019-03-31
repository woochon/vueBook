<template>
  <div class="date-picker">
    <datePicker1 @date="getDate" separator="/"></datePicker1>
    <div style="height: 270px;padding: 50px;margin: 300px">
      <datePicker2 @date="getDate1" separator="-"></datePicker2>
    </div>

  </div>
</template>
<script>
  import datePicker1 from '../components/datepicker/datepicker'
  import datePicker2 from '../components/datepicker/datepicker'
  export default{
    name:'date',
    data(){
      return {

      }
    },
    components:{
      datePicker1,
      datePicker2,
    },
    methods:{
      getDate(data){
        console.log(data);
      },
      getDate1(data){
        console.log(data);
      }
    }
  }
</script>
<style scoped>

</style>
