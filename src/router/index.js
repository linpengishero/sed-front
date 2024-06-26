import { createRouter, createWebHashHistory } from "vue-router"
import store from '../store'

const routes = [
    {
    path: "/",
    name: "Home",
    redirect: '/home',
    component: () => import('../views/Home.vue'),
    children: 
    [
        {
            path: '/home',
            name: 'home',
            component: () => import('../views/Home.vue'),
            meta: { title: 'home', keepAlive: true }
        }
    ]},
    {
        path: "/",
        name: "mHome",
        redirect: '/mhome',
        component: () => import('../views/mHome.vue'),
        children: 
        [
            {
                path: '/mhome',
                name: 'mhome',
                component: () => import('../views/mHome.vue'),
                meta: { title: 'mhome', keepAlive: true }
            }
        ]}
]




const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

function isMobile(){
    if((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
            return  true;
        } else {
            return  false;
        }
}

router.beforeEach(async (to, from, next)=>{
    let address = window.connectedAddress
    
    if(to.path.includes('/m'))
    {
        next()
    }

    if(isMobile())
    {
        next('/m'+to.name)
    }

    next()
    
});

router.beforeEach(async (to, from, next)=>{
    console.log(to.query.code)
    store.dispatch('setCurrentFather', to.query.code)
    next()
    
});
export default router
