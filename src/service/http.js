import axios from "axios";
import { Toast } from "vant";
import Store from "@/store/index.js";
let baseURL = process.env.VUE_APP_API_URL;
if (process.env.NODE_ENV == "development") {
    baseURL = window.location.origin;
}
// baseURL = 'http://47.103.73.133/api/merchant';
let config = {
    timeout: 60 * 1000, // Timeout
    headers: {
        "Content-Type": "application/json",
        // "Authorization" : 'Bearer '+Store.getters.getAuthorization
    },
    withCredentials: false, // Check cross-site Access-Control
    ransformRequest: [
        function(data) {
            // 做任何你想要的数据转换
            return data;
        },
    ],

    transformResponse: [
        function(data) {
            // 预留后期过滤
            // return typeof data === "string"&&data !=="" ? JSON.parse(data) : null;
            return data;
        },
    ],
    validateStatus: function(status) {
        return status >= 200 && status <= 500; // default
    },
};

const _axios = axios.create(config);

// axios请求拦截
_axios.interceptors.request.use(
    function(conf) {
        conf.headers.Authorization = 'Bearer ' + Store.getters.getAuthorization;
        if (process.env.NODE_ENV == 'development') {
            conf.headers.Authorization = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJtZXJjaGFudENsYXNzaWZ5IjowLCJtZXJjaGFudElkIjoxMzQ0MTc3OTQ0MDUzOTY4ODk3LCJzdGFmZk5hbWUiOiLmnajlv5fojaMiLCJzdG9yZUlkIjoxMzQ0MTc3OTQ0MTU0NjMyMTk0LCJzdGFmZlR5cGUiOjEsImlhdCI6MTYxMTAyMTUyMywic3RhZmZJZCI6MTM0NDE3Nzk0NDE4ODE4NjYyNSwianRpIjoibWVyY2hhbnQ6and0OjRiMmQyYzM5LTc4ZDMtNGU3ZC1iZjg3LTBiZWFiMWNlOTljOCJ9.DLzP2d2onvYBKMlNGFep301q9swj6_psndMiUF6yNk8";
        }
        // Do something before request is sent
        // 
        return conf;
    },
    function(error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// axios 请求响应拦截处理error事件
_axios.interceptors.response.use((response) => {
    try {
        if (response.status == 200 && typeof response.data != "object") {
            response.data = JSON.parse(response.data);
        }
    } catch (error) {
        console.log(error);
    }
    return response;
});

/**
 * http状态异常处理
 * @param {*} response
 */
const httpErrorCB = function(response, showToast) {
    switch (response.status) {
    case 404:
        if (showToast) Toast(response.status);
        break;
    default:
        break;
    }
    return response;
};

/*
 * http状态异常处理
 * @param {*} response
 */
const resultErrorCB = function(data, showToast) {
    switch (data.errCode) {
    case 404:
        if (showToast) Toast(data.status);
        break;
    case -1:
        if (showToast) Toast(data.errMsg);
        break;
    default:
        if (showToast) Toast(data.errMsg);
        break;
    }

    return data;
};

const callback = function(res, showToast, resolve, reject, showLoading) {

    if (res.status > 200 && res.status < 500) {
        return reject(httpErrorCB(res, showToast));
    }
    if (res.data.errCode != 0) {
        return reject(resultErrorCB(res.data, showToast));
    }
    resolve(res.data.value);
};

export default {
    /**
     *
     * @param {*} param0
     *   url 请求地址
     *   data 数据
     *   showToast 是否展示错误提示框
     *   showLoading 是否显示loading
     */
    get({ url, data, showToast = true, showLoading = true }) {
        if (showLoading) Vue.prototype.$changeLoading(true);
        return new Promise((resolve, reject) => {
            _axios({
                method: "get",
                url: /^htt(p|s)/.test(url) ? url : `${baseURL}${url}`,
                // url:'http://192.168.1.105:8202'+url,
                params: data,
            }).then((res) => {
                if (showLoading) Vue.prototype.$changeLoading(false);
                callback(res, showToast, resolve, reject, showLoading);
            }).catch(err => {
                Vue.prototype.$changeLoading(false);
                reject(err);
            });
        });
    },
    /**
     *
     * @param {*} param0
     *   url 请求地址
     *   data 数据
     *   showToast 是否展示错误提示框
     *   showLoading 是否显示loading
     */
    post({ url, data, showToast = true, showLoading = true }) {
        if (showLoading) Vue.prototype.$changeLoading(true);
        return new Promise((resolve, reject) => {
            _axios({
                method: "post",
                url: /^htt(p|s)/.test(url) ? url : `${baseURL}${url}`,
                data,
            }).then((res) => {
                if (showLoading) Vue.prototype.$changeLoading(false);
                callback(res, showToast, resolve, reject, showLoading);
            }).catch(err => {
                if (showLoading) Vue.prototype.$changeLoading(false);
                reject(err);
            });
        });
    },
};