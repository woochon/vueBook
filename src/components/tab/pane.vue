<template>
  <div class="pane" v-show="show">
    <slot></slot>
  </div>
</template>
<script>

  export default{
    name:'pane',
    data(){
      return {
        show:true
      }
    },
    props:{
      name:{
        type:String
      },
      label:{
        type:String,
        default:''
      }
    },
    watch:{
      label(){
        this.updateNav();
      }
    },
    mounted(){
      this.updateNav();
    },
    methods:{
      updateNav(){
        this.$parent.updateNav();
      }
    }
  }
</script>
