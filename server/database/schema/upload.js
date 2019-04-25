// schema  文档
// model
// entity 一条数据

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UploadSchema = new Schema({
  key:String,                  //用于提交文件的key
  path:String,                 //当前存储文件路径
  file_name:String,            //当前存储文件名称
  file_type:String,            //当前存储文件类型
  file_size:Number,            //当前存储文件大小
  save_name:String,            //当前存储文件名
  user:String,                 //存储该文件的用户ID
  storage_time:String,       //文件存放时间

});

/*UploadSchema.pre('save',function(next){
  if(this.isNew){
    this.meta.createAt = this.meta.updateAt;
  }else{
    this.meta.updateAt = Date.now();
  }
  next();
});

UploadSchema.statics = {

};*/
module.exports = mongoose.model('upload',UploadSchema);
