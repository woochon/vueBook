<template>
  <div class="better-scroll" ref="slider">
    <h2>水平方向滚动-导航栏(自定义)</h2>
    <div class="wrapper" ref="wrapper">
      <ul class="horizontal_nav_list" ref="horizontalNavList">
        <li v-for="(item,index) in horizontal_nav_list" :key="index" class="item">{{item}}</li>
      </ul>
    </div>
    <div class="select-list" ref="goodsInfo">
      <div class="leftWrapper" ref="menuListWrapper">
        <ul class="left" ref="menuListGroup">
          <li v-for="(menu,index) in menuList" :key="index">{{menu.name}}</li>
        </ul>
      </div>
      <div class="rightWrapper" ref="goodsListWrapper">
        <ul class="right" ref="goodsListGroup">
          <li v-for="(good,index) in goodsList">
            <span>{{good.name}}</span>
            <span class="boll" @click="handleClick(index,$event)"></span>
          </li>
        </ul>
      </div>
    </div>
    <div class="bar">
      <span ref="target"></span>
    </div>
  </div>
</template>
<script>
  import Scroll from '../components/scroll'
  import { elementPosition } from '../common/js/compatibility'
  import BetterScroll from 'better-scroll'
  export default{
    name:'show_better_scroll',
    data(){
      return {
        horizontal_nav_list:['关注','推荐','要闻','盘面','数据','直播','7*24','热议'],
        menuList:[
          {
            name:'粥1',
            id:1
          },
          {
            name:'粥2',
            id:1
          },
          {
            name:'粥3',
            id:1
          },
          {
            name:'粥4',
            id:1
          },
          {
            name:'粥5',
            id:1
          },
          {
            name:'粥6',
            id:1
          },
          {
            name:'粥7',
            id:1
          },
          {
            name:'粥8',
            id:1
          },
          {
            name:'粥9',
            id:1
          },
          {
            name:'粥10',
            id:1
          },
          {
            name:'粥11',
            id:1
          },
          {
            name:'粥12',
            id:1
          },
          {
            name:'粥13',
            id:1
          },
          {
            name:'粥14',
            id:1
          },
          {
            name:'粥15',
            id:1
          },
          {
            name:'粥16',
            id:1
          },
          {
            name:'粥17',
            id:1
          }
        ],
        goodsList:[
          {
            name:'粥1',
            id:1
          },
          {
            name:'粥2',
            id:1
          },
          {
            name:'粥3',
            id:1
          },
          {
            name:'粥4',
            id:1
          },
          {
            name:'粥5',
            id:1
          },
          {
            name:'粥6',
            id:1
          },
          {
            name:'粥7',
            id:1
          },
          {
            name:'粥8',
            id:1
          },
          {
            name:'粥9',
            id:1
          },
          {
            name:'粥10',
            id:1
          },
          {
            name:'粥11',
            id:1
          },
          {
            name:'粥12',
            id:1
          },
          {
            name:'粥13',
            id:1
          },
          {
            name:'粥14',
            id:1
          },
          {
            name:'粥15',
            id:1
          },
          {
            name:'粥16',
            id:1
          },
          {
            name:'粥17',
            id:1
          }
        ],
      }
    },
    components:{
      Scroll
    },
    mounted(){
      setTimeout(()=>{
        this._setSliderWidth();
        this._setLeftScroll();
        this._setRightScroll();
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
        });
      },
      /* 左边滚动 */
      _setLeftScroll(){
        console.log(this.$refs.goodsInfo.offsetHeight);
        this.$refs.menuListWrapper.style.height = this.$refs.goodsInfo.offsetHeight + 'px';
        this.$nextTick(()=>{
          if(!this.scrollLeft){
            this.scrollLeft = new BetterScroll(this.$refs.menuListWrapper);
            console.log(this.scrollLeft);
          }else{
            this.scrollLeft.refresh();
          }
        });
      },
      /* 右边滚动 */
      _setRightScroll(){
        console.log(this.$refs.goodsInfo.offsetHeight);
        this.$refs.goodsListWrapper.style.height = this.$refs.goodsInfo.offsetHeight + 'px';
        this.$nextTick(()=>{
          if(!this.scrollRight){
            this.scrollRight = new BetterScroll(this.$refs.goodsListWrapper,{
              click:true
            });
          }else{
            this.scrollRight.refresh();
          }
        });
      },

      handleClick(index,$event){
        /*console.log('123');
        console.log(index,$event);
        console.log($event.target.offsetHeight,$event.target.offsetLeft);
        const rect1 = $event.target.getBoundingClientRect();
        console.log(rect1);
        const rect2 = this.$refs.target.getBoundingClientRect();
        console.log(rect2);*/
        const start = elementPosition($event.target);

        const end = elementPosition(this.$refs.target);

        const x = start.x - end.x;
        const y = start.y - end.y;
        const span = document.createElement('span');
        document.body.appendChild(span);
        span.style.cssText = `width: 15px;height: 15px;border-radius: 50%;background-color: #fff;position:absolute;top:${start.y}px;left:${start.x}px;background:green;z-index:9999`;
        setTimeout(()=>{
          span.style.transform = `translate3d(${-x}px,${-y}px,0)`;
          span.style.transition = `all 1s cubic-bezier(0.17, 1.37, 0.91, -0.23)`;
          span.addEventListener('transitionend',function(e){
            console.log(e,'=====');
            span.parentNode.removeChild(span)
          },false);
        },30);
      }
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
  .select-list{
    position: absolute;
    top: 55px;
    bottom: 55px;
    right: 0;
    left: 0;
    display: flex;
    background-color: greenyellow;
    z-index: 20;
  }
  .select-list .leftWrapper{
    width: 60px;
    height: 100%;
    font-size: 18px;
    background-color: blue;
    overflow: hidden;
  }
  .select-list .leftWrapper  ul{
    width: 60px;
    list-style: none;
  }
  .select-list .left li{
    flex:0 0 60px;
    /*width: 60px;*/
    height: 40px;
    line-height: 40px;
    text-align: center;
  }

  .select-list .rightWrapper{
    flex:1;
    height: 100%;
    font-size: 18px;
    background-color: blue;
    overflow: hidden;
  }
  .select-list .rightWrapper  ul{
    width: 100%;
    list-style: none;
  }
  .select-list .right li{
    width: 100%;
    height: 90px;
    display: flex;
    background-color: red;
    justify-content: space-between;
    align-items: center;
  }
  .select-list .right li .boll{
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #fff;
    margin-right: 20px;
  }
  .bar{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 55px;
    background-color: pink;
    line-height: 55px;
  }
  .bar span{
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin-left: 20px;
    background-color: #000;
  }

</style>
