<template>
  <div class="store">
      <h3>store(不带module)</h3>

      <router-link to="/store/module" tag="h3">store(带module)</router-link>
      <router-view></router-view>
  </div>
</template>
<script>
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

    }
  }
</script>
