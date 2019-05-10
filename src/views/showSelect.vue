<template>
  <div>
    <mySelect
      :options="options"
      @on-change="handlerChange"
      v-model="select"
      :height="40"
    ></mySelect>
    <button @click="changeSelect">改变select</button>
    <button @click="getSelect">获取select</button>
  </div>
</template>
<script>
  import mySelect from '../components/select';
  export default{
    name:'showSelect',
    data(){
      return {
        select:'',
        options:[
          {
            value:'js',
            label:'javascript'
          },
          {
            value:'java',
            label:'后台'
          },
          {
            value:'html',
            label:'前端'
          }
        ]
      }
    },
    components:{
      mySelect
    },
    methods:{
      handlerChange(data){
        console.log(data);
      },
      changeSelect(){
        this.select = 'java';
      },
      getSelect(){
        console.log(this.select);
      }
    }
  }
</script>
