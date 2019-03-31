<template>
  <div class="date-picker">
    <input type="text" v-model="date" @focus="handlerFocus" ref="dater"/>
    <div class="date-wrapper" :style="myStyle">
      <div class="action">
        <a class="btn tableCell previous" @click="handlerMonth('min')">&lt;</a>
        {{year}}-{{month}}
        <a class="btn tableCell next" @click="handlerMonth('add')">&gt;</a></div>
      <div class="head">
        <span v-for="(item,index) in weekList" :key="index" class="tableCell">{{item}}</span>
      </div>
      <div class="body">
        <span v-for="(item,index) in monthData" :key="index" @click="handlerDays(item)" class="tableCell">{{item.date}}</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name:'myDatePicker',
    data(){
      return {
        msg:'test',
        date:'',
        weekList:['日','一','二','三','四','五','六'],
        monthData:null,
        show:false,
        top:0,
        left:0,
        month:new Date().getMonth() +1,
        year:new Date().getFullYear(),
        tmpYear:new Date().getFullYear(),
        tmpMonth:new Date().getMonth() +1,
        myStyle:{}
      }
    },
    props:{
      /*分隔符*/
      separator:{
        type:String,
        default:'-'
      }
    },
    mounted(){
      this.monthData = this.getMonthData();
    },
    watch:{
      show(val){
        if(val){
          console.log('show='+val);
          this.myStyle = {display:'block',position:'absolute', top: this.top+'px',left:this.left+'px'}
        }else{
          console.log('show='+val);
          this.myStyle = {display:'none'};
        }
      }
    },
    methods:{
      getMonthData(year,month){
        const ret=[];
        if(!year||!(typeof (month))){
          const today = new Date();
          year=today.getFullYear();
          month=today.getMonth()+1;
        }
        //当月第一天及星期几
        const firstDay = new Date(year,month-1,1);
        let firstDayWeekDay=firstDay.getDay();
        if(firstDayWeekDay===0){
          firstDayWeekDay=7;
        }
        //上个月显示天数
        const preMonthDayCount = firstDayWeekDay-1;

        for(let i= 0; i<7*6;i+=1){
          let date = i-preMonthDayCount;
          const da = new Date(year,month-1,date);
          ret.push({
            year:da.getFullYear(),
            month:da.getMonth()+1,
            date:da.getDate()
          })
        }
        return ret
      },
      elementPosition(obj) {
        let curLeft = 0, curTop = 0;
        if (obj.offsetParent) {
          curLeft = obj.offsetLeft;
          curTop = obj.offsetTop;
          while (obj = obj.offsetParent) {
            curLeft += obj.offsetLeft;
            curTop += obj.offsetTop;
          }
        }
        return { x: curLeft, y: curTop };
      },
      handlerFocus(){
        this.show = true;
        const dom =this.$refs.dater;
        let position= this.elementPosition(dom);
        this.left = position.x;
        this.top = position.y+dom.getClientRects().height+2;
      },
      handlerMonth(flag){
        let year = this.tmpYear;
        let month = this.tmpMonth;
        if(flag==='min'){
          month -= 1;
          this.tmpMonth -=1;
          if(this.tmpMonth<1){
            this.tmpYear -=1;
            this.tmpMonth =12;
          }
        }else if(flag ==='add'){
          month += 1;
          this.tmpMonth +=1;
          if(this.tmpMonth>12){
            this.tmpYear +=1;
            this.tmpMonth =1;
          }
        }
        this.$set(this,'monthData',this.getMonthData(year,month));
        this.year = this.monthData[20].year;
        this.month = this.monthData[20].month;

        return false;
      },
      handlerDays(data){
        this.date = data.year+this.separator+this.padding(data.month)+this.separator+this.padding(data.date);
        this.$emit('date',this.date);
        this.show=false;
      },
      padding(num){
        if(num<10){
          return '0'+num;
        }
        return num;
      }
    }
  }
</script>
<style scoped>
  input{
    width: 210px;
    height: 24px;
    line-height: 24px;
    border:1px solid #ccc;
    border-radius: 4px;
    padding: 5px;
    box-sizing: border-box;
  }
  input:focus{
    outline: none;
    border: 1px solid deepskyblue;
  }
  .tableCell{
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
  .date-wrapper{
    width: 210px;
    display: none;
    user-select: none;
  }
  .date-wrapper .action{
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color:ghostwhite;
    border-bottom: 1px solid darkgrey;
  }
  .date-wrapper .action .btn{
    text-decoration: none;
  }
  .date-wrapper .action .btn:hover{
    color: deepskyblue;
    cursor: pointer;
  }
  .date-wrapper .action .btn.previous{
    float: left;
  }
  .date-wrapper .action .btn.next{
    float: right;
  }

  .date-wrapper .head span,.date-wrapper .body span{
    display: inline-block;
    border: 1px solid gainsboro;
    font-size: 14px;
    border-top: none;
    border-right:none;
    border-collapse: collapse;
    box-sizing: border-box;
  }
  .date-wrapper .head span:nth-of-type(7),.date-wrapper .body span:nth-of-type(7n){
    border-right: 1px solid gainsboro;
    /*background-color: red;*/
  }
  .date-wrapper .body span:hover{
    cursor: pointer;
    background-color: darkgray;
  }
</style>

<!--
Date对象越界自动进退位处理
当月第一天
new Date(year,month-1,1);
当月最后一天
new Date(year,month,0);
如：第三月的第一天  new Date(2019,2,1);

-->
