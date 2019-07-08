const Mock = require('mockjs');
const Random = Mock.Random;
export const getUserInfo =(option)=>{
  return {
    name:'listen',
    firstName:option,
    // avatar:Random.image('200*100','red','write','png','image'),
    avatar:Random.image('100x50'),
    //avatar:Random.image('200x100'),
    img:Random.dataImage()
  }
};
export const login = ()=>{
  console.log('222222');
  return {
    code: 200,
    data: {
      token: 'xxx'
    },
    mes: ''
  }
};

export const authorization =()=>{
  console.log('33333');
  return {
    code:200,
    data:{
      token:'xxx',
      page:{
        directive:false,
        scroll:false,
        date:false,
        tabs:false,
        mypage:true,
        img:true,
        area:true,
        showModel:true,
        showScroll:true,
        shopCart1:true,
        shopCart2:true,
        showSelect:true,
        showInputNumber:true,
        forbidden:true
      },
      component:{
        edit_button:true,
        publish_button:false
      }
    }
  }
};
