import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login'
import register from "@/components/login/register"
import index from "@/components/view/index"
import map from "@/components/homepage/map"
import meua from "@/components/meualist/meua"
import equipstatus from "@/components/meualist/equipstatus"
import warning from "@/components/meualist/warning"
import information from "@/components/meualist/information"

import main from "@/components/homepage/main"

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/register',
        name: 'register',
        component: register,
    }, {
        path: '/login',
        name: 'login',
        component: login,
    }, {
        path: '/index',
        name: 'index',
        component: index,
    }, {
        path: '/map',
        name: 'map',
        component: map,
    }, {
        path: '/main',
        name: 'main',
        component: main,
    }, {
        path: '/meua',
        name: 'meua',
        component: meua,
        children: [{
            path: '/equipstatus',
            component: equipstatus
        }, {
            path: '/warning',
            component: warning
        }, {
            path: '/information',
            component: information
        }]
    }]
})