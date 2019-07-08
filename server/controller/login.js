const jwt = require('jsonwebtoken');
module.exports ={
  /*index:async (ctx,next)=>{
    // await ctx.render('user/index',{title:'欢迎来到'});
    let res='';
    res=await ctx.state.DB.find('user',{});
    /!*console.log(res);*!/
    await ctx.render('user/index',{title:'欢迎来到',msgList:res});
  },*/
  login:async(ctx,next)=>{
    console.log('2222');
    const {userName,password} = ctx.request.body;
    console.log(userName,password);
    if(userName){
      if(!userName||!password||password!=='123'){
        ctx.response.status=401;
        ctx.send({
          code:401,
          msg:'userName or password is wrong',
          data:null
        });
      }else{
        ctx.send({
          code:200,
          msg:'success',
          data:{
            token:jwt.sign({name:userName},'abcd',{
              expiresIn:60
            })
          }
        })
      }
    }else{
      ctx.status(401).send({
        code:401,
        mes:'user name is  empty',
        data:{}
      })
    }
  },
  authorization:async (ctx,next)=>{
    const userName = ctx.request.body;
    ctx.send({
      code:200,
      msg:'success',
      data:{
        data:{
          token:jwt.sign({name:userName},'abcd',{
            expiresIn:24*60*60
          })
        }
      }
    });
  }
};
