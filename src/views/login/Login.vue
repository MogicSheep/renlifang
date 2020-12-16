<!--登录-->
<template>
  <div class="login">
    <div class="login-bg">
      <div class="ct">
        <div class="caption">人立方</div>
        <el-form ref="form" :model="form" :rules="rules" class="content">
          <el-form-item prop="account" class="login-input account">
            <el-input
              prefix-icon="el-icon-s-custom"
              v-model="form.account"
              placeholder="请输入账号"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item prop="password" class="login-input password">
            <el-input
              prefix-icon="el-icon-lock"
              v-model="form.password"
              placeholder="请输入密码"
              autocomplete="off"
              show-password
              clearable
              @keyup.enter.native="login"
            ></el-input>
          </el-form-item>
          <el-form-item class="submit">
            <el-button :loading="loading" type="primary" @click="login"
              >登录</el-button
            >
          </el-form-item>
          <el-form-item>
            <el-link type="primary" @click="download">浏览器下载</el-link>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
//import * as types from "../../store/types";
//import Http from "../../http/http";
//import md5 from "js-md5";
import { CHROME_DOWNLOAD_URL } from "../../assets/config/http.config";

export default {
  name: "Login",
  data() {
    //验证账号
    const validateAccount = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"));
      } else {
        callback();
      }
    };
    //验证密码
    const validatePassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      form: {
        account: "",
        password: ""
      },
      rules: {
        account: [{ validator: validateAccount, trigger: "blur" }],
        password: [{ validator: validatePassword, trigger: "blur" }]
      },
      loading: false
    };
  },
  methods: {
    //浏览器下载
    download() {
      window.open(CHROME_DOWNLOAD_URL, "_self");
    },
    //登录
    login() {
      if(this.form.account==='admin'&&this.form.password==="123456")
      {
        this.$router.push("/");
      }
      // this.$refs["form"].validate(valid => {
      //   if (valid) {
      //     const account = this.form.account;
      //     const password = md5(this.form.password);
      //     this.loading = true;
      //     Http.doLogin(account, password)
      //       .then(res => {
      //         this.loading = false;
      //         if (res && res.length > 0) {
      //           const user = res[0];
      //           this.$store.commit(types.USER_INFO, user);
      //           this.$store.commit(types.TOKEN, user.token);
      //           this.$store.commit(types.ROLE, user.role);
      //           Http.setToken(user.token);
      //           this.$storage.clear();
      //           this.$storage.set(types.USER_INFO, user);
      //           this.$storage.set(types.TOKEN, user.token);
      //           this.$storage.set(types.ROLE, user.role);
      //           this.$router.push("/");
      //           if (user.password === "1") {
      //             this.$message.warning("您的密码有风险,请尽快修改密码!");
      //           }
      //         } else {
      //           this.$message.error("登录失败");
      //         }
      //       })
      //       .catch(err => {
      //         this.loading = false;
      //         if (typeof err === "object") {
      //           this.$message.error(err.toJSON());
      //         } else if (typeof err === "string") {
      //           this.$message.error(err);
      //         }
      //       });
      //   }
      // });
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .login-bg {
    width: 30%;
    padding: 10px;
    .ct {
      .caption {
        user-select: none;
        font-size: 40px;
        font-weight: bold;
        text-align: center;
        color: #3a61aa;
        margin-top: 10%;
        margin-bottom: 10%;
      }
      .content {
        margin: 10% 15%;
      }
      .password {
        margin-top: 8%;
      }
      .submit {
        margin-top: 12%;
        .el-button {
          width: 100%;
          font-size: 20px;
          border: none;
          background: linear-gradient(to right, #3e66b1, #213e82);
        }
      }
    }
  }
}
</style>
