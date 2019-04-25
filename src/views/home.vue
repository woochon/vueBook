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
export default {
  name: 'home',
  data () {
    return {
      msg: '路由列表',
      /*routes: [
        {
          path: '/',
          name: 'login'
        },
        {
          path: '/login',
          name: 'login'
        },
        {
          path: '/home',
          name: 'home'
        },
        {
          path:'/throttle',
          name:'throttle'
        },
        {
          path:'/directive',
          name:'directive'
        },
        {
          path:'/scroll',
          name:'scroll'
        },
        {
          path:'/date',
          name:'date'
        },
        {
          path:'/tabs',
          name:'tabs'
        },
        {
          path:'/mypage',
          name:'mypage'
        },
        {
          path:'/img',
          name:'img'
        },
        {
          path:'/area',
          name:'area'
        },
        {
          path:'/mock',
          name:'mock'
        },
        {
          path:'/showModel',
          name:'showModel'
        },
        {
          path:'/showScroll',
          name:'showScroll'
        },
        {
          path:'/shopCart1',
          name:'shopCart1'
        },
        {
          path: '/shopCart2',
          name: 'shopCart2'
        },
        {
          path:'/showSelect',
          name:'showSelect'
        },
        {
          path:'/showInputNumber',
          name:'showInputNumber'
        },
      ]*/
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
}
li {
  margin: 10px 10px;
  line-height: 30px;
  cursor: pointer;
  background-color: lightgoldenrodyellow;
  padding: 0 20px;
}
a {
  color: #42b983;
}
</style>
