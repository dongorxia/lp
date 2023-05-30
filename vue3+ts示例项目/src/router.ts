import {createRouter, createWebHistory} from 'vue-router'
import home from './pages/home.vue'
import other from './pages/other.vue'
import vuex from './pages/vuex.vue'



const routes = [
    {
        name:'home',
        path:'/',
        component:home,
        children:[]
    },
    {
        name:'other',
        path:'/other',
        component:other,
        children:[]
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})


router.beforeEach(async (to,from)=>{
    return true
})

export default router