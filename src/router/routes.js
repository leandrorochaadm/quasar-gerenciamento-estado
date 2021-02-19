
const routes = [
  {
    path: '/',
    component: () => import('pages/Home.vue'),
  },
  {
    path: '/usuarios/:id',
    props:true,
    component: () => import('pages/Usuarios.vue'),
  },
  {
    path: '/select',
    component: () => import('pages/Select.vue'),
  },
  {
    path: '/select2',
    component: () => import('pages/Select2.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
