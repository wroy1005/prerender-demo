import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import Foo from '@/components/Foo'
// import Bar from '@/components/Bar'

const Foo = () => import('@/components/Foo')
const Bar = () => import('@/components/Bar')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { 
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/foo',
      name: 'foo',
      component: Foo
    },
    {
      path: '/bar',
      name: 'bar',
      component: Bar
    }
  ]
})
