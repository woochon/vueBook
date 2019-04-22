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
  name: 'HelloWorld',
  data () {
    return {
      msg: '路由列表',
      routes: [
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
      ]
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
