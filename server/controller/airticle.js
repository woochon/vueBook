/*
* 文章分类管理
* */
/*const userService = require('../service/user');*/
/*const DB =require('../mongoDB/index');*/
module.exports={
    getCategoryList:async (ctx,next)=>{
        let data = await ctx.state.DB.find('article',{});
        console.log(data);
    }
};
