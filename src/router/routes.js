import Login from '../views/login'
import NotFound from '../views/noneFound'
/*export const routes= [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path:'*',
    component:NotFound
  }
];*/
export const routes= [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'index',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    component: ()=>import('../views/home')
  },
  {
    path:'/throttle',
    name:'throttle',
    component:()=>import('../views/throttle')
  },
  {
    path:'/mock',
    name:'mock',
    component:()=>import('../views/mock')
  },
  {
    path:'/tree',
    name:'tree',
    component:()=>import('../views/tree')
  },
  {
    path:'/store',
    name:'store',
    component:()=>import('../views/store'),
    children:[
      {
        path:'module',
        name:'storeModule',
        component:()=>import('../views/storeModule')
      }
    ]
  },
  {
    path:'/directive',
    name:'directive',
    component:()=>import('../views/directive')
  },
  {
    path:'/scroll',
    name:'scroll',
    component:()=>import('../views/scroll')
  },
  {
    path:'/date',
    name:'date',
    component:()=>import('../views/date')
  },
  {
    path:'/tabs',
    name:'tabs',
    component:()=>import('../views/tabs')
  },
  {
    path:'/mypage',
    name:'mypage',
    component:()=>import('../views/myPage')
  },
  {
    path:'/img',
    name:'img',
    component:()=>import('../views/img')
  },
  {
    path:'/area',
    name:'area',
    component:()=>import('../views/dataArea')
  },
  {
    path:'/showModel',
    name:'showModel',
    component:()=>import('../views/showModal')
  },
  {
    path:'/showScroll',
    name:'showScroll',
    component:()=>import('../views/showScroll')
  },
  {
    path:'/shopCart1',
    name:'shopCart1',
    component:()=>import('../views/shopCart1')
  },
  {
    path: '/shopCart2',
    name: 'shopCart2',
    component: ()=>import('../views/shopCart2')
  },
  {
    path:'/showSelect',
    name:'showSelect',
    component:()=>import('../views/showSelect')
  },
  {
    path:'/showInputNumber',
    name:'showInputNumber',
    component:()=>import('../views/showInputNumber')
  },
  {
    path: '/403',
    name: 'forbidden',
    component: () => import('../views/forbidden')
  },
  {
    path:'*',
    // name:'noneFound',
    component:NotFound
  }
];
export const routeMaps = [
  {
    path: '/',
    name: 'index',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    component: ()=>import('../views/home')
  },
  {
    path:'/throttle',
    name:'throttle',
    component:()=>import('../views/throttle')
  },
  {
    path:'/mock',
    name:'mock',
    component:()=>import('../views/mock')
  },
  {
    path:'/tree',
    name:'tree',
    component:()=>import('../views/tree')
  },
  {
    path:'/store',
    name:'store',
    component:()=>import('../views/store'),
    children:[
      {
        path:'module',
        name:'storeModule',
        component:()=>import('../views/storeModule')
      }
    ]
  },
  {
    path:'/directive',
    name:'directive',
    component:()=>import('../views/directive')
  },
  {
    path:'/scroll',
    name:'scroll',
    component:()=>import('../views/scroll')
  },
  {
    path:'/date',
    name:'date',
    component:()=>import('../views/date')
  },
  {
    path:'/tabs',
    name:'tabs',
    component:()=>import('../views/tabs')
  },
  {
    path:'/mypage',
    name:'mypage',
    component:()=>import('../views/myPage')
  },
  {
    path:'/img',
    name:'img',
    component:()=>import('../views/img')
  },
  {
    path:'/area',
    name:'area',
    component:()=>import('../views/dataArea')
  },
  {
    path:'/showModel',
    name:'showModel',
    component:()=>import('../views/showModal')
  },
  {
    path:'/showScroll',
    name:'showScroll',
    component:()=>import('../views/showScroll')
  },
  {
    path:'/shopCart1',
    name:'shopCart1',
    component:()=>import('../views/shopCart1')
  },
  {
    path: '/shopCart2',
    name: 'shopCart2',
    component: ()=>import('../views/shopCart2')
  },
  {
    path:'/showSelect',
    name:'showSelect',
    component:()=>import('../views/showSelect')
  },
  {
    path:'/showInputNumber',
    name:'showInputNumber',
    component:()=>import('../views/showInputNumber')
  },
  {
    path: '/403',
    name: 'forbidden',
    component: () => import('../views/forbidden')
  }
];
