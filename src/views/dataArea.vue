<template>
  <div>
    <area-select  :level="2" type='text' :data="pcaa" v-model="selected1" @change="show1"></area-select>
    <area-select v-model="selected2" :data="pca" @change="show2"></area-select>

    <area-cascader v-model="selected3" :data="pca" @change="show3"></area-cascader>
    <area-cascader v-model="selected4" :data="pcaa" @change="show4"></area-cascader>
  </div>
</template>
<script>
  import { pcaa, pca } from 'area-data';
  export default{
    name:'areaView',
    data(){
      return {
        pcaa:pcaa,
        pca:pca,
        selected1:[],
        selected2:[],
        selected3:[],
        selected4:[],
      }
    },
    methods:{
      show1(data){
        console.log(data);
        console.log(this.selected1);
      },
      show2(data){
        console.log(data);
        console.log(this.selected2);
      },
      show3(data){
        console.log(data);
        console.log(this.selected3);
      },
      show4(data){
        console.log(data);
        console.log(this.selected4);
      },
    }
  }
</script>

<!--
npm 地址
https://www.npmjs.com/package/vue-area-linkage
github 地址
https://dwqs.github.io/vue-area-linkage/
-->
