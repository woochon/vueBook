const Koa = require('koa');
const path = require('path');
const bodyParser = require('koa-bodyparser');
const jwt = require('jsonwebtoken');
//const verify = util.promisify(jwt.verify); // 解密
const nunjucks = require('koa-nunjucks-2');
const staticFiles = require('koa-static');
const db_connect = require('./database/index');
const router = require('./router');
const middleware = require('./middleware');
const jwtKoa = require('koa-jwt');
const jsonp = require('koa-cors');

const hasOneOf =(str,arr)=>{
  return arr.some(item=>item.includes(str));
};
const whiteListUrl = {
  get:[],
  post:['/login']
};



(function async(){
  const app = new Koa();
  middleware(app);
  app.use(jsonp());
// 指定 public目录为静态资源目录，用来存放 js css images 等
  app.use(staticFiles(path.resolve(__dirname, "./public")));
  app.use(nunjucks({
    ext: 'html',
    path: path.join(__dirname, 'views'),// 指定视图目录
    nunjucksConfig: {
      trimBlocks: true // 开启转义 防Xss
    }
  }));
  app.use(bodyParser());
  app.use((ctx,next)=>{
    let method = ctx.req.method.toLowerCase();
    let path = ctx.url;
    //console.log(ctx);
    console.log(method,path,'====');
    console.log(whiteListUrl[method],hasOneOf(path,whiteListUrl[method]),'++++');
    if(whiteListUrl[method]&&hasOneOf(path,whiteListUrl[method])){
      console.log('123456');
      next();
    }
    else{
      const token = ctx.header.authorization;  // 获取jwt
      console.log(token);
      let payload;
      if(!token){
        ctx.response.status=401;
        ctx.send({
          code:401,
          msg:'no token',
          data:null
        })
      }else{
        jwt.verify(token,'abcd',(error,decode)=>{
          if(error){
            ctx.send({
              code:401,
              msg:'no token',
              data:null
            })
          }else{
            ctx.request.body.userName = decode.name;
            next();
          }
        });
      }
    }
  });
  app.use((ctx,next)=>{
    jwtKoa({secret:'abcd'}).unless({
      path:['/login']
    });
    next();
  });
  router(app);
  app.listen(3000, ()=>{
    console.log('server is running at http://localhost:3000')
  });
})();

