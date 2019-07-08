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
  return new Promise((resolve,reject)=>{
    resolve({
      code:200,
      msg:'登录成功',
      data:{
        token:'xxxx',
      }
    })
  })
};

export const getAuthorization =()=>{
  console.log('123');
  return new Promise((resolve,reject)=>{
    resolve({
      code:200,
      data:{
        data:{
          token:'XXXXx'
        },
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
    });
  })
};
