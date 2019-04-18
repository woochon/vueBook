<!-- 递归组件 -->
<template>
  <div class="inputNumber">
    <span class="iconfont icon-jiantouarrow483" @click="handleReduce" :class="{disable:tmpNumber<=min}"></span>
    <input type="text" v-model="tmpNumber" @change="handleChange">
    <span class="iconfont icon-jiantoushang"  :class="{disable:tmpNumber>=max}" @click="handleIncrease"></span>
  </div>
</template>
<script>
  export default{
    name:'inputNumber',
    data(){
      return {
        tmpNumber:this.value,
      }
    },
    props:{
      value:{
        type:Number,
        default:0
      },
      min:{
        type:Number,
        default:1
      },
      max:{
        type:Number,
        default:10
      },
    },
    watch:{
      value(val){
        this.updateValue(val);
      }
    },
    methods:{
      handleReduce(){
        let tmp = Number(this.tmpNumber);
        if(tmp<=this.min){
          return ;
        }else{
          tmp -=1;
        }
        this.tmpNumber = tmp;
        this.$emit('input',this.tmpNumber);
      },
      handleIncrease(){
        let tmp = Number(this.tmpNumber);
        if(tmp>=this.max){
          return ;
        }else{
          tmp +=1;
        }
        this.tmpNumber = tmp;
        this.$emit('input',this.tmpNumber);
      },
      handleChange(e){
        let val = e.target.value.trim();
        let max = this.max;
        let min = this.min;
        if(this.isValueNumber(val)){
          val=Number(val);
          this.tmpNumber = val;
          if(val>=max){
            this.tmpNumber = max;
          }else if(val<=min){
            this.tmpNumber = min;
          }else{
            e.target.value = this.tmpNumber
          }
        }
      },
      isValueNumber(value){
        return (/(^-?[0-9]+\.{1}\d+$)|(^-?[1-9][0-9]*$)|(^-?0{1}$)/).test(value+'')
      },
      updateValue(val){
        if(val>this.max) val=this.max;
        if(val<this.min) val = this.min;
        this.tmpNumber = val;
      }
    }
  }
</script>
<style scoped>
  .inputNumber{
    display: inline-block;
    font-size: 14px;
    box-sizing: border-box;
    user-select: none;
  }
  .inputNumber span{
    display: inline-block;
    width: 20px;
    height: 20px;
    line-height: 20px;
    position: relative;
    border: 1px solid #666;
    cursor: pointer;
  }
  .inputNumber span.disable{
    cursor:not-allowed
  }
  .inputNumber span:first-child{
    border-right: 1px solid #fff;
    right: -4px;
  }
  .inputNumber span:last-child{
    border-left: 1px solid #fff;
    left: -4px;
  }
  .inputNumber input{
    border: 1px solid #666;
    width: 40px;
    height: 20px;
    line-height: 20px;
    outline: none;
    vertical-align: top;
    text-align: center;
  }
  .inputNumber input:focus{
    border: 1px solid blue;
  }
</style>
