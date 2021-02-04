/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-01-06 16:14:46
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-01-06 16:46:11
 */
import Vue from 'vue';
const filterMap = {
    numberFixedTo(num = 0) {
        return Number(num).toFixed(2);
    }
};
for (let i in filterMap) {
    Vue.filter(i, filterMap[i]);
}
export default filterMap;