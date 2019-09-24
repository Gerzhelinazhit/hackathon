import Vue from 'vue';
import VueRouter from 'vue-router';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';
import Map from './components/Map';

import ManuresList from './components/ManuresList';
import TechnicksList from './components/TechnicksList';
import WorkersList from './components/WorkersList';
import Farm from './components/Farm';



Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: Map
        },
        {
            path: '/c1',
            component: Component1
        },
        {
            path: '/c2',
            component: Component2
        },
        {
            path: '/c3',
            component: Component3
        },
        {
            path: '/manures',
            component: ManuresList
        },
        {
            path: '/technics',
            component: TechnicksList
        },
        {
            path: '/workers',
            component: WorkersList
        },
        {
            path: '/farm',
            component: Farm
        }

    ],
    mode: 'history'    //mb changed on production
});
