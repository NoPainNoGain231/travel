import Vue from "vue";
import VueRouter from "vue-router";     //引入vue-router库
import Login from "../views/login";
import Home from "../views/home";

Vue.use(VueRouter)      //vue加载vue-router库

const routes = [
    {
        path:'/login',
        component:Login,
    },
    {
        path:'/home',
        component:Home,
    }
]

const router = new VueRouter({
    mode:'hash',
    base:process.env.BASE_URL,
    routes:routes
})

export default router