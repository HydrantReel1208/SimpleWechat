<template>
	<div class="content">
		<div class="msgList">
			<search></search>
			<chatList></chatList>
		</div>
		<div class="chatBox">
			<message></message>
			<send-text></send-text>
		</div>
	</div>
</template>

<script>
import search from '../../components/search/search'
import chatList from '../../components/chatList/chatList'
import message from '../../components/message/message'
import sendText from '../../components/sendText/sendText'
export default {
   components: {
   	 search,
   	 chatList,
   	 message,
   	 sendText
   }
}
</script>

<style lang="stylus" scoped>
.content
  display: flex
  width: 800px
  .msgList
    width: 250px
    background: rgb(230,230,230)
  .chatBox
    flex: 1
</style>
