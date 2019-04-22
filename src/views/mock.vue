<template>
  <div class="mock">
    <img v-for="(item,index) in mock.list" :key="index" :src="item.image" alt="">
  </div>
</template>
<script>
  const Mock = require('mockjs');
  const Random = Mock.Random;
  // import Axios from 'axios'
  export default{
    name:'mock',
    data(){
      return {
        mock:'',
      }
    },
    created(){
      console.log(Random.image('200*100', 'red', 'write', 'png', 'image'));
      const data = Mock.mock({
        'list|1-10':[{
          'id|+1':1,
          'image':Random.image('200*100','red','write','png','image')
          /*'url':'http://xxxx/xxx.cloudden.com/@name'*/
        }],
        'name|1-3':'ab',
        'string|2':'woochon',
        'number|+1':202,
        'random|1-100':100,
        'boolean1|1':true,
        'boolean2|1-2':true,
      });
      console.log(data);
      this.mock=data;
      /*Axios.post('/news/api').then(res=>{
        console.log(res);
        this.mock=res;
      })*/

    },
    methods:{

    }
  }
</script>
