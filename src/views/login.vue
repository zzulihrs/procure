<template>
  <el-form ref="form" class="login_container" label-width="70px" :inline="true" :model="form" :rules="rules">
    <h3 class="login_title">系统登录</h3>
    <el-form-item label="用户名" prop="username">
      <el-input v-model="form.username" placeholder="请输入账号"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
    </el-form-item>
    <el-form-item prop="login">
      <el-button style="margin-left: 48px; margin-top: 10px;" type="primary" @click="submit">登录</el-button>
    </el-form-item>
  </el-form>

</template>

<script>
import Cookie from 'js-cookie'
import {getMenu} from "@/api";

export default {
  name: "login",
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          {required: true, trigger: 'blur', message: '请输入用户名'}
        ],
        password: [
          {required: true, trigger: 'blur', message: '请输入密码'}
        ],
      }
    }
  },
  methods: {
    // 登录
    submit() {
      // // token 信息
      // const token = this.generateGUID();
      // // token信息存入cookie用于不同页面间的通信
      // Cookie.set('token', token);

      // 校验通过
      console.log('submit');
      this.$refs.form.validate((valid) => {
        if(valid) {
          getMenu(this.form).then(({ data }) => {
            console.log(data);
            if(data.code == 20000) {
              let token = data.data.token;
              Cookie.set('token', token);
              // 跳转到首页
              this.$router.push('/home')
            } else {
              this.$message.error(data.data.message);
            }
          });
        }
      });
    },
    generateGUID() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = Math.random() * 16 | 0,
            v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }
  }
}
</script>

<style lang="less" scoped>
.login_container {
  width: 350px;
  border: 1px solid #eaeaea;
  margin: 180px auto;
  padding: 35px 35px 15px 35px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 25px #cac6c6;
  box-sizing: border-box;
  .login_title {
    text-align: center;
    margin-bottom: 40px;
    color: #505458;
  }
  .el-input {
    width: 198px;
  }
}
</style>