<template>
  <div class="login">
    <div class="title">
      <h2>CMS管理系统</h2>
      <p class="desc">CMS management System</p>
    </div>
    <div class="main-wrapper">
      <div class="item">
        <label for="email">邮　箱:</label>
        <input type="text" id="email" class="theme" placeholder="请输入邮箱" v-model="email">
      </div>
      <div class="item">
      <label for="pwd">密　码:</label>
      <input type="password" id="pwd" class="theme" placeholder="请输入密码" v-model="password">
    </div>
      <div class="item">
        <label for="re_PWD">验证码:</label>
        <input type="text" id="re_PWD" class="theme special" placeholder="请输入验证码" v-model="identify">
        <!--<img class="identify" src="http://localhost:3000/getIdentityCode">-->
        <!--<span v-html="tmpIdentify" class="identify"></span>-->
      </div>
      <div class="error">
        {{warmMsg}}
      </div>
      <div class="btn-wrapper">
        <div class="my-btn" @click="login">登录</div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
  name:"Login",
  data(){
    return {
       warmMsg:'管理员(账号:admin,密码:123456),普通用户:(账号:normal,密码:123456)',
       email:'',
       password:'',
       identify:'',
        tmpIdentify:'',
        codeText:''
    };
  },
  created(){

  },
  methods:{
    login(){
      console.log('123');
      this.$router.push({path:'/home'});
      localStorage.setItem('hasLogin',1);
    }
  }
};
</script>
<style type="text/scss" scoped>
    .login{
      position: absolute;
      width: 500px;
      height: 350px;
      top: 50%;
      left: 50%;
      background-color: #fff;
      transform: translate(-50%,-50%);
    }
    .login .title{
      text-align: center;
      color: blue;
      font-size: 24px;
      font-weight: bold;
    }
    .login .title .desc{
      margin-top: 10px;
      font-size: 22px;
    }
    .login .main-wrapper{
      padding: 20px 0;
    }

    .login .main-wrapper .item{
      padding: 5px 0;
      line-height: 24px;
      text-align: center;
    }
    .login .main-wrapper .item .theme{
      width: 340px;
      border-radius: 3px;
      border:1px solid gray;
      outline: none;
      padding-left: 12px;
    }
    .login .main-wrapper .item .theme.special{
      width: 200px;
    }
    .login .main-wrapper .item .theme:active,.login .main-wrapper .item .theme:focus{
      border:1px solid blue;
    }
    .login .main-wrapper .item .identify{
      display: inline-block;
      width: 100px;
      height: 24px;
      background-color: $color-background;
      margin-left: 35px;
      position: relative;
      top: 7px;
      cursor: pointer;
    }
    .login .main-wrapper .item .error{
      padding-left: 0px;
    }
    .login .main-wrapper .error{
      padding-left: 55px;
      margin: 10px 0;
      color: $color-sub-theme;
    }
    .login .main-wrapper .my-btn{
      width: 390px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      color: #fff;
      margin: 10px auto auto 55px;
      background-color: navy;
    }

</style>
