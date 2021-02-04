import Vue from 'vue';
import App from './App.vue';
import router from './router';
import request from '@/service/http'; //封装的ajax
import '@/assets/js/index.js'; //适配
import '@/util/lib'; //全局组件类
import '@/util/prototypeUtil'; //工具类
import '@/assets/sass/reset.scss'; //重置css
import * as $api from "@/service/api"; //请求的接口
import store from '@/store';


Vue.config.productionTip = false;

Object.assign(Vue.prototype, { $request: request, $api });

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");