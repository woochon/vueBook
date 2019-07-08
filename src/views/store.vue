<template>
  <div class="store">
      <button @click="handleLayout">退出登录</button>
      <h3>store(不带module)</h3>
      <router-link to="/store/module" tag="h3">store(带module)</router-link>
      <router-view></router-view>
  </div>
</template>
<script>
  import {mapActions} from 'vuex'
  export default{
    name:'store',
    data(){
      return {

      }
    },
    created(){
      console.log(this.$store.state.appName);

    },
    methods:{
      ...mapActions([
        'layout'
      ]),
      handleLayout(){
        this.layout();
        this.$router.push({name:'login'});
      }
    }
  }
</script>
