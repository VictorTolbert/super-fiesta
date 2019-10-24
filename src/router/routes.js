import MainLayout from '@/layouts/Main.vue'
import Home from '@/pages/home.vue'

import auth from './groups/auth'
import dashboard from './groups/dashboard'
import profile from './groups/profile'
import other from './groups/other'

export default [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        name: 'home',
        path: '',
        component: Home,
      },
      ...auth,
      ...dashboard,
      ...profile,
      ...other,
      {
        path: '*',
        component: () => import(/* webpackChunkName: "page404" */ '@/pages/404.vue'),
      },
    ],
  },
]
