const Upload= require('../database/schema/upload');

/*const file = new Upload({
  key:'key1',                  //用于提交文件的key
  path:'asd',                 //当前存储文件路径
  file_name:'1.txt',            //当前存储文件名称
  file_type:'txt',            //当前存储文件类型
  file_size:1000,            //当前存储文件大小
  save_name:'new.txt',            //当前存储文件名
  user:'woochon',                 //存储该文件的用户ID
  storage_time:Date.now,       //文件存放时间
});

file.save((err)=>{
  if(err){
    console.log('失败');
  }else{
    console.log('成功');
  }
});*/


module.exports={
  index:async (ctx,next)=>{
    const file = new Upload({
      key:'key1',                  //用于提交文件的key
      path:'asd',                 //当前存储文件路径
      file_name:'1.txt',            //当前存储文件名称
      file_type:'txt',            //当前存储文件类型
      file_size:1000,            //当前存储文件大小
      save_name:'new.txt',            //当前存储文件名
      user:'woochon',                 //存储该文件的用户ID
      storage_time:'asdfa',       //文件存放时间
    });
    let code = 0;
    try{
      await file.save();
      code = 0 ;
    }catch (e) {
      code = 1 ;
    }
    //await ctx.render('upload/index')
    await ctx.send({code})
  }
};
