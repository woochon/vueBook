<template>
  <div class="better-scroll" ref="slider">
    <h2>水平方向滚动-导航栏(自定义)</h2>
    <div class="wrapper" ref="wrapper">
      <ul class="horizontal_nav_list" ref="horizontalNavList">
        <li v-for="(item,index) in horizontal_nav_list" :key="index" class="item">{{item}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
  import Scroll from '../components/scroll'
  import BetterScroll from 'better-scroll'
  export default{
    name:'show_better_scroll',
    data(){
      return {
        horizontal_nav_list:['关注','推荐','要闻','盘面','数据','直播','7*24','热议']
      }
    },
    components:{
      Scroll
    },
    mounted(){
      setTimeout(()=>{
        this._setSliderWidth();
      },25)
    },
    methods:{
      _setSliderWidth () {
        this.children = this.$refs.horizontalNavList.children;
        let width = 0;
        for (let i = 0; i < this.children.length; i++) {
          width +=  this.children[i].clientWidth;
        }
        this.$refs.horizontalNavList.style.width = width + 'px';
        this.$nextTick(()=>{
          if(!this.scroll){
            this.scroll = new BetterScroll(this.$refs.wrapper,{
              startX: 0,
              click: true,
              scrollX: true,
              // 忽略竖直方向的滚动
              scrollY: false,
              eventPassthrough: "vertical"
            });
            console.log(this.scroll);
          }else{
            this.scroll.refresh();
          }
        })
      },
    }
  }
</script>
<style scoped>
  .better-scroll{
    width: 100%;
  }
  .wrapper{
    width: 100%;
    overflow: hidden;
  }
  .horizontal_nav_list{
    height: 24px;
    font-size: 16px;
    list-style: none;
  }
  .horizontal_nav_list .item{
    padding: 0 12px;
    background-color: pink;
    height: 24px;
    line-height: 24px;
    text-align: center;
    display: inline-block;
  }

</style>
