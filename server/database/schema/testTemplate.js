//1.引入
const mongoose = require('mongoose');

//2.建立连接
mongoose.connect('mongodb://127.0.0.1:27017/woochon',{ useNewUrlParser: true } );

//3.操作users表(集合)  定义一个Schema

let UserSchema  = mongoose.Schema({
  name:String,
  age:Number,
  status:Number
});


//4.定义数据库模型 操作数据库
// model里面的第一个参数要注意：1.首字母大写 2.要和数据库(集合)名称对应

// const User = mongoose.model('User',UserSchema);  //默认操作users表
const User = mongoose.model('User',UserSchema,'user'); //操作第三个设置的user表

//5.查询users表的数据
/*User.find({},function(err,doc){
    if(err){
        console.log(err);
    }else{
        console.log(doc);
    }
});*/



//6.增加数据
// 6.1实例化Model  通过实例化User Model创建增加数据
// 6.2实例化.save()

/*const u = new User({
    name:'李四',
    age:20,
    status:1
});

u.save((err)=>{
    if(err){
        console.log('失败');
    }else{
        console.log('成功');
    }
});*/

//7更新数据
/*User.updateOne(
    {'_id':'5cbbc71e2e058b143803c9bb'},
    {
        name:'lisi'
    },
    (err,doc)=>{
        if(err){
            return console.log(err);
        }else{
            console.log(doc);
        }
    }
);*/

//8删除数据
User.deleteOne({
  '_id':'5cbbc71e2e058b143803c9bb'
},(err,doc)=>{
  if(err){
    return console.log(err);
  }else{
    console.log(doc);
  }
});
