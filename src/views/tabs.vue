<template>
  <div>
    <Tab v-model="activeKey">
      <Pane label="标签1" name="1">
        标签1的内容
      </Pane>
      <Pane label="标签2" name="2">
        标签2的内容
      </Pane>
      <Pane label="标签3" name="3">
        标签3的内容
      </Pane>
    </Tab>
  </div>
</template>
<script>
  import Tab from '../components/tab'
  import Pane from '../components/tab/pane.vue'
  export default{
    name:'viewTabs',
    data(){
      return {
        activeKey:'1'
      }
    },
    components:{
      Tab,
      Pane
    },
    methods:{

    }
  }
</script>
