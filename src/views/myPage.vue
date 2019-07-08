<template>
  <div class="my-page">
    {{msg}}
    <Page @on-change="pageChange"></Page>
    <div>
      <button @click="edit" v-if="rules.edit_button">编辑</button>
      <button @click="public" v-if="rules.publish_button">发布</button>
      <div>{{rules}}</div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex';
  import Page from '../components/page'
  export default{
    name:'myPage',
    data(){
      return {
        msg:'myPage'
      }
    },
    components:{
      Page
    },
    computed:{
      ...mapState({
        rules:state=>state.user.rules
      })
    },
    methods:{
      pageChange(data){
        console.log('currentPage='+data);
      },
      edit(){
        console.log(this.rules);
      },
      public(){

      }
    }
  }
</script>
