import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloWorld2 from '@/components/second'
import increse from '@/components/increment'
import myAddress from '@/components/cityselect'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/home',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/name/ddd',
            name: 'second',
            component: HelloWorld2
        },
        {
            path: '/add',
            component: increse
        },
        {
            path: '/address',
            component: myAddress
        },
        {
            path: '*',
            redirect(to){
                console.log(to);
                return '/add'
            }

        }
    ]
})