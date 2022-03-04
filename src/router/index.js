import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
// 共三个页面： 聊天页面，好友页面，个人简历分别对应一下路由
  routes: [
    {
      path: '/login',
      component: require('@/page/login/login.vue')
    },
    {
      path: '/chat',
      component: require('@/page/chat/chat.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/friend',
      component: require('@/page/friend/friend.vue'),
      meta: {
        requiresAuth: true
      }
    }
  ],
  linkActiveClass: 'active'
})
// router.push({ path: '/chat' });
router.push({ path: '/login' });
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem("jwt") == null) {
      next({
        path: "/login"
      });
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router
