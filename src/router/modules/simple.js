import Layout from '@/layout/index.vue'

export default {
  path : '/simple',
  name : 'Simple',
  component : Layout,
  redirect : '/simple/index',
  meta : {
    title : 'Simple',
    icon : 'directive'
  },
  children : [
    {
      path : 'index',
      component : () => import( '@/views/simple/index.vue' ),
      name : 'simple1',
      meta : { title : 'Aja', icon : 'devices', noCache : true }
    },
    {
      path : 'index',
      component : () => import( '@/views/simple/index.vue' ),
      name : 'simple2',
      meta : { title : 'Banget', icon : 'table', noCache : true }
    }
  ]
}
