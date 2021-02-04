import Vue from 'vue';
import Router from 'vue-router';


Vue.use(Router);

let router = new Router({
    routes: [{
        path: '/',
        name: 'home',
        meta: {
            index: true,
            title: ''
        },
        component: () =>
            import( /* webpackChunkName: "index" */ '@views/Index.vue')
    }, {
        path: '/advertising',
        name: 'advertising',
        meta: {
            index: true,
            title: '广告页'
        },
        component: () =>
            import( /* webpackChunkName: "advertising" */ '@views/Advertising.vue')
    }, {
        path: '/donation-records',
        name: 'donation-records',
        meta: {
            index: true,
            title: '捐献记录'
        },
        component: () =>
            import( /* webpackChunkName: "donation-records" */ '@views/DonationRecords.vue')
    }, {
        path: '/payment-completed',
        name: 'payment-completed',
        meta: {
            index: true,
            title: '支付完成'
        },
        component: () =>
            import( /* webpackChunkName: "payment-completed" */ '@views/PaymentCompleted.vue')
    }]
});
router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
});
export default router;