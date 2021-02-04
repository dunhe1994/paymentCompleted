import Vue from 'vue';
import {
    Toast,
    Popup,
} from 'vant';
import gLoadingCom from "@/components/Loading.vue";
const gLoading = {
    install(V) {
        let el = document.createElement("div");
        let Is = V.extend(gLoadingCom);
        let is = new Is().$mount();
        V.prototype.$changeLoading = function(show) {
            is.show = show;
        };
        document.body.appendChild(is.$el);
    }
};
const gToast = {
    install(v) {
        v.prototype.$Toast = function(message) {
            return Toast({ type: "text", message });
        };
        v.prototype.$ToastErr = function(message) {
            return Toast({ type: "fail", message });
        };
        v.prototype.$ToastOk = function(message) {
            return Toast({ type: "success", message });
        };
        v.prototype.$ToastLoading = function(message) {
            return new Promise((resolve, reject) => {
                Toast({
                    type: "loading",
                    message,
                    onClose: () => {
                        resolve();
                    }
                });
            });
        };
        v.prototype.$ToastHTML = function(message) {
            return new Promise((resolve, reject) => {
                Toast({
                    type: "html",
                    message,
                    onClose: () => {
                        resolve();
                    }
                });
            });
        };

    }
};


// import 'vant/lib/index.css';

const componentArr = [
    Toast,
    Popup,
    gLoading,
    gToast,
];

componentArr.reduce((pre, cur) => pre.use(cur), Vue);