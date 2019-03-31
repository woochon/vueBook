const Time = {
  // 获取当前时间戳
  getUnix:function(){
    let date = new Date();
    return date.getTime();
  },
  // 获取今天0点0分0秒的时间戳
  getTodayUnix:function(){
    let date=new Date();
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date.getTime();
  },
  //获取今年1月1日0点0分0秒的时间戳
  getYearUnix:function(){
    let date=new Date();
    date.setMonth(0);
    date.setDate(1);
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date.getTime();
  },
  // 获取标准年月日
  getStandardDate:function(time){
    let date=new Date(time);
    let month = date.getMonth()+1<10?'0'+date.getMonth():date.getMonth();
    let day =date.getDate()<10?'0'+date.getDate():date.getDate();
    return date.getFullYear()+'-'+month+'-'+day;
  },
  //转化时间提示
  getTimeTip:function(timestamp){
    let now = this.getUnix();
    let today =this.getTodayUnix();
    // 将时间戳转化为秒级
    let timer=(now-timestamp)/1000;
    let tip='';
    if(Math.floor(timer/60)<1){
      tip='刚刚';
    }else if(timer<3600){
      tip=Math.floor(timer/60)+'分钟前';
    }else if(timer>=3600&&(timestamp>today)){
      tip=Math.floor(timer/3600)+'小时前';
    }else if(timer/86400<=31){
      tip=Math.ceil(timer/86400)+'天前';
    }else{
      tip=this.getStandardDate(timestamp)
    }
    return tip;
  }
};

export default Time;
