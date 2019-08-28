<template>
  <ul>
    <router-link
      tag="li"
      v-for="(item,index) in routes"
      :key="index"
      :to="{name:item.name}"
    >
      {{item.name}}
    </router-link>
  </ul>
</template>

<script>
  import {routeMaps} from '../router/routes'
export default {
  name: 'home',
  data () {
    return {
      msg: '路由列表',
      routes:[]
    }
  },
  created(){
    /*console.log(this.$router.options.routes);
    console.log(this.$router);
    let tmp  = JSON.parse(localStorage.getItem('addRoutes'));
    let allRoutes =this.$router.options.routes;
    if(tmp&&tmp.length>0){
      allRoutes = this.$router.options.routes.concat(tmp);
      localStorage.removeItem('addRoutes');
    }
    console.log(allRoutes);*/
    this.$set(this,'routes',this.$router.options.routes);
  },
  watch:{
    'route'(val){
      console.log('=====',val);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
li {
  width: 45%;
  margin: 10px 0 ;
  line-height: 30px;
  cursor: pointer;
  background-color: lightgoldenrodyellow;
  text-align: center;
}
a {
  color: #42b983;
}
</style>
