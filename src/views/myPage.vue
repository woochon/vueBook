<template>
  <div class="my-page">
    {{msg}}
    <Page @on-change="pageChange"></Page>
  </div>
</template>
<script>
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
    methods:{
      pageChange(data){
        console.log('currentPage='+data);
      }
    }
  }
</script>
