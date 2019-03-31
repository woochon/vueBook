<template>
  <div class="tabs">
    <div class="tabs-bar">
    <!-- 标签页标题，这里要用v-for -->
      <div
        :class="tabCls(item)"
        v-for="(item,index) in navList"
        @click="handleChange(index)">
        {{item.label}}
      </div>
    </div>
    <div class="tabs-content">
    <!-- 这里的slot就是嵌套的pane -->
      <slot></slot>
    </div>
  </div>
</template>
<script>
  import Pane from './pane.vue'
  export default{
    name:'tab',
    data(){
      return {
        navList:[],
        //因为不能修改value,所以复制一份自己维护
        currentValue:this.value
      }
    },
    props:{
      // 这里的value是为了可以使用v-model
      value:{
        type:[String,Number]
      }
    },
    components:{
      Pane
    },
    watch:{
      value(val){
        this.currentValue = val;
      },
      currentValue(){
        //在当前选中的tab发生变化时，更新pan的显示状态
        this.updateStatus();
      }
    },
    methods:{
      getTabs(){
        /* 通过遍历子组件，得到所有的pane组件 */
        return this.$children.filter(function(item){
          return item.$options.name === 'pane';
        });
      },
      updateNav(){
        this.navList = [];
        /* 设置对this的引用，在function回调里this并不是vue实例 */
        const _this = this;
        this.getTabs().forEach(function(pane,index){
          _this.navList.push({
            label:pane.label,
            name:pane.name || index
          });
          /* 如果没有给pane设置name，默认设置它的索引 */
          if(!pane.name){
            pane.name = index;
          }
          /* 设置当前选中的tab索引 */
          if(index ===0){
            if(!_this.currentValue){
              _this.currentValue = pane.name || index;
            }
          }
        });
        this.updateStatus();
      },
      updateStatus(){
        let tabs = this.getTabs();
        const _this = this;
        //显示当前选中的tab对应的pane组件，影藏没有选中的
        tabs.forEach(function(tab){
          return tab.show=tab.name === _this.currentValue;
        });
      },
      tabCls(item){
        return [
          'tabs-tab',
          {
            //给当前选中的tab加上一个class
            'tabs-tab-active':item.name === this.currentValue
          }
        ]
      },
      handleChange(index){
        let nav = this.navList[index];
        let name = nav.name;
        //改变当前选中的tab,并处罚下面的watch
        this.currentValue = name;
        //更新value
        this.$emit('input',name);
        //触发一个自定义事件，供父级调用
        this.$emit('on-click',name);
      }
    }
  }
</script>
<style scoped>
  .tabs{
    font-size: 14px;
    color: #657180;
  }
  .tabs-bar:after{
    content:'';
    display: block;
    width: 100%;
    height: 1px;
    background-color: #d7dde4;
    margin-top: -1px;
  }
  .tabs-tab{
    display: inline-block;
    padding: 4px 16px;
    margin-right: 6px;
    background-color: #fff;
    border: 1px solid #d7dde4;
    cursor: pointer;
    position: relative;
  }
  .tabs-tab-active{
    color: #3399ff;
    border-top: 1px solid #3399ff;
    border-bottom: 1px solid #fff;
  }
  .tabs-tab-active:before{
    content:'';
    display: block;
    height: 1px;
    background-color: #39f;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
  .tabs-content{
    padding: 8px 0;
  }
</style>
