<template>
  <div class="my_iview">
    <Select v-model="model1" style="width:200px">
      <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
  </div>
</template>
<script>
  export default{
    name:'myIview',
    data(){
      return {
        cityList: [
          {
            value: 'New York',
            label: 'New York'
          },
          {
            value: 'London',
            label: 'London'
          },
          {
            value: 'Sydney',
            label: 'Sydney'
          },
          {
            value: 'Ottawa',
            label: 'Ottawa'
          },
          {
            value: 'Paris',
            label: 'Paris'
          },
          {
            value: 'Canberra',
            label: 'Canberra'
          }
        ],
        model1: ''
      }
    }
  }
</script>
<style scoped>
  /deep/ .ivu-select-single .ivu-select-selection .ivu-select-placeholder,/deep/ .ivu-select-single .ivu-select-selection .ivu-select-selected-value{
    height: 40px;
    line-height: 40px;
  }
  /deep/ .ivu-select-single .ivu-select-selection{
    height: 40px;
    line-height: 40px;
  }
  /*/deep/ .ivu-select-default{
    border: 1px solid blue;
  }*/
  /deep/ .ivu-select-selection{
    border: 1px solid red;
    border-radius: 0;
  }
  /deep/ .ivu-select-selection-default{
    border: 1px solid #000;
    border-radius: 0;
  }
  /deep/ .ivu-select-visible{
    box-shadow: none;
  }
  /deep/ .ivu-select-selection-focused{
    border: 1px solid blue;
    box-shadow: none;
    outline:none;
  }
</style>
