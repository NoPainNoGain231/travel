import Vue from "vue";
import VueRouter from "vue-router";     //引入vue-router库
import Login from '../views/login';
import Home from '../views/home';
import PerInfoHome from '../views/perInfoHome'
import PerInfo from '../views/perInfoHome/components/main/components/perInfo'

Vue.use(VueRouter)      //vue加载vue-router库

const routes = [
    {
        path: '/',
        name: 'login',
        component: Login,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/home',
        component: Home,
    },
    {
        path:'/perInfoHome',
        component: PerInfoHome,
        children:[
            {
                path:'/perInfo',
                component:PerInfo,
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routes
})

// 添加路由导航守卫
// 添加路由导航守卫
// 用来对访问的路由进行权限控制
// 除了login这个路由其他的路由都要进行了登录之后才能访问
router.beforeEach((to, from, next) => {
// 判断访问的是否是登录页面
// 判断当前sessionStorage中是否有token(判断是否登录过)
	if(to.path=== '/login' || window.sessionStorage.getItem('token')) return next()
	return next('/login')
})

export default router