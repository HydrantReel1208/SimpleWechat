<template>
  <div>
    <div v-if="hasAccount">
      <h3>用户登录</h3>
      <form>
        <p>账号: <input placeholder="请填写账号" v-model="login.name" required></p>
        <br>
        <p>密码: <input type="password" placeholder="请填写密码" v-model="login.password" required></p>
        <br>
        <input class="login-item" type="submit" value="登录" @click="loginUser">
        <p @click="">没有账号，去注册</p>
      </form>
    </div>
    <div v-else>
      <h3>用户注册</h3>
      <form>
        <p>账号: <input placeholder="请填写账号" v-model="register.name" required></p>
        <br>
        <p>密码: <input type="password" placeholder="请设置密码" v-model="register.password" required></p>
        <br>
        <input class="login-item" type="submit" value="注册" @click="registerUser">
        <p>已有账号，去登陆</p>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: "Login",
  data() {
    return {
      hasAccount: false,
      login: {
        name: "",
        password: ""
      },
      register: {
        name: "",
        password: ""
      }
    }
  },
  methods: {
    changeState() {
      this.hasAccount = !this.hasAccount
    },
    verify() {
      if (this.username === '') {
        alert('用户名不能为空');
        return 0;
      }
      if (this.password === '') {
        alert('密码不能为空');
        return 0;
      }
    },
    async registerUser() {
      this.verify()
      try {
        let response = await this.$http.post("/register", this.register);
        console.log(response);
        let token = response.data.token;
        if (token) {
          localStorage.setItem("jwt", token);
          this.$router.push("/friend");
          console.log("Registration Was successful");
        } else {
          console.log( "Something Went Wrong");
        }
      } catch (err) {
        let error = err.response;
        if (error.status === 409) {
          console.log(error.data.message);
        } else {
          console.log(error.data.err.message);
        }
      }
    },
    async loginUser() {
      this.verify()
      try {
        let response = await this.$http.post("/user/login", this.login);
        let token = response.data.token;
        localStorage.setItem("jwt", token);
        if (token) {
          console.log("Login Successful");
          this.$router.push("/friend");
        }
      } catch (err) {
        console.log("Something Went Wrong");
        console.log(err.response);
      }
    }
  }
}
</script>

<style scoped>
h3 {
  text-align: center;
  color: #333;
  font-size: 24px;
  font-weight: 400;
  line-height: 100px;
}

input {
  width: 200px;
  height: 30px;
  line-height: 30px;
  margin: 0 auto;
  padding: 0;
  display: inline-block;
  outline: none;
  margin-bottom: 5px;
}

p {
  height: 30px;
  line-height: 30px;
  padding-left: 38px;
}


.login-item {
  position: relative;
  display: block;
  width: 250px;
  margin: 0 auto;
  box-sizing: border-box;
  font-size: 14px;
  text-align: center;
  text-decoration: none;
  color: #ffffff;
  border-radius: 5px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  overflow: hidden;
  background-color: #1aad19;
  border: none;
  cursor: pointer;
  margin-top: 5px;
}


</style>
