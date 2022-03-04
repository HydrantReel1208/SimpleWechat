<template>
	<div class="content">
		<div class="friend-wrapper">
			<search></search>
      <friendList></friendList>
		</div>
		<div class="friendInfo">
			<info></info>
		</div>
	</div>
</template>

<script>
import search from '../../components/search/search'
import friendList from '../../components/friendList/friendList'
import info from '../../components/info/info'
import VueJwtDecode from "vue-jwt-decode";
export default{
  data(){
    return{
      user: {}
    }
  },
  getUserDetails() {
    let token = localStorage.getItem("jwt");
    let decoded = VueJwtDecode.decode(token);
    this.user = decoded;
  },
  logUserOut() {
    localStorage.removeItem("jwt");
    this.$router.push("/");
  },
  created() {
    this.getUserDetails();
  },
    components: {
        search,
        friendList,
        info
    }
}
</script>

<style lang="stylus" scoped>
.content
  display: flex
  width: 800px
  .friend-wrapper
    width: 250px
    background: rgb(230,230,230)
  .friendInfo
    flex: 1
</style>
