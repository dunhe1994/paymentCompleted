import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        userInfo: "",
        authorization: "",
    },
    getters: {
        /**
         * 获取用户信息
         * @param {*} param0 
         */
        userInfo(state) {
            let userInfo;
            try {
                userInfo = state.userInfo || JSON.parse(sessionStorage.getItem(`${process.env.VUE_APP_ENV}_user`));
            } catch (error) {
                console.log(error);
            }

            if (!state.userInfo && userInfo) {
                state.commit("setUserInfo", userInfo);
            }
            return userInfo || {};
        },
        getAuthorization(state) {
            return state.authorization || sessionStorage.getItem('shop_token');
        },
    },
    mutations: {
        /**
         * 
         * @param {*} state 
         * @param {*} userInfo 用户信息json
         */
        setUserInfo(state, userInfo) {
            sessionStorage.setItem(`${process.env.VUE_APP_ENV}_user`, JSON.stringify(userInfo));
            state.userInfo = userInfo;
        },
        setToken(state, token) {
            sessionStorage.setItem('shop_token', token);
            state.authorization = token;
        },
    },
    actions: {

    }
});