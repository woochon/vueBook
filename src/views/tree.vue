<template>
  <div class="tree">
    <VueTree
      v-model="checkedIds"
      :tree-data="treeData"
      :options="options"
    ></VueTree>
  </div>
</template>
<script>
  import Axios from 'axios'
  import VueTree from 'vue-simple-tree/src/components/VueTree.vue'
  export default{
    name:'tree',
    data(){
      return {
        treeData:[],
        options:{},
        checkedIds:[]
      }
    },
    components:{
      VueTree
    },
    mounted(){
      this.getData();
    },
    methods:{
      getData(){
        Axios.get('/static/tree.json').then(res=>{
          console.log(res);
          this.treeData = res.data.data;
          console.log(this.treeData);
        });
       },
    }
  }
</script>
<style scoped>
.tree{
  background-color: peachpuff;
}
</style>
