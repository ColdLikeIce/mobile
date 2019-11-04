import Vue from 'vue'
import Router from 'vue-router'
const HelloWorld = () => import('../components/HelloWorld')

Vue.use(Router)

const routes = [{
  path: '/',
  redirect: '/HelloWorld',
  name: 'HelloWorld'
}, {
  path: '/HelloWorld',
  component: HelloWorld,
  name: 'HelloWorld'
}
]

// eslint-disable-next-line no-undef
const router = new Router({
  routes,
  mode: 'history',
  strict: process.env.NODE_ENV !== 'production',

  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop
      }
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  }
})

export default router
