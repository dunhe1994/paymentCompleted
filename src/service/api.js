import http from "@/service/http.js";

//获取捐献详情
export const getDetail = (data) => {
    return http.get({ url: '/staff/login', data });
};