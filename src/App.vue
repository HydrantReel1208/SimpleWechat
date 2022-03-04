<template>
  <div id="app">
    <div class="login-container">
      <Login />
    </div>
<!--    <div class="user-container">-->
<!--      <div class="sidebar">-->
<!--        <mycard></mycard>-->
<!--      </div>-->
<!--      <div class="main">-->
<!--        <router-view></router-view>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script>
// import myCard from './components/myCard/myCard'
import {mapActions} from 'vuex'
import Login from "./page/login/login";

export default {
  components: {
    Login,
    // myCard
  },
  created() {
    this.$store.dispatch('initData')
  }
}
</script>

<style lang="stylus" scoped>
.login-container
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 300px;
  transform: translate(-50%, -50%);
  border-radius: 4px;
  background-color:  #fff;
  box-shadow: #999 0 2px 10px;

.user-container
  display: flex
  border-radius 50px
  margin: 20px auto
  width: 860px
  height: 600px
  background-color: #fff

  .sidebar
    width: 60px
    height: 600px
    background: #2b2c2f

  .main
    flex: 1
    height: 600px
    background: #f2f2f2
</style>
