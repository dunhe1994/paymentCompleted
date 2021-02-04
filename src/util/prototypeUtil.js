import Vue from 'vue';
const sourcePoint = {}; //标记该资源是否已加载
/**
 * 资源加载对象
 */
function createSource() {
    let obj = Object.create({});
    obj.isLoaded = false;
    obj.handler = [];
    obj.targetHandler = function targetHandler(fnName) {
        for (let k in this.handler) {
            this.handler[k][fnName] && this.handler[k][fnName]();
        }
        this.handler = [];
    };
    return obj;
}

let tools = {
    /**
     * @name: 
     * @msg: //格式化时间
     * @param {*} format
     * @return {*}
     */
    dateFormat: (time = "", format = 'yyyy-MM-dd hh:mm:ss') => {
        var date = time ? new Date(Number(time)) : new Date();
        let result = format;
        const opt = {
            "y+": String(date.getFullYear()),
            "M+": String(date.getMonth() + 1),
            "d+": String(date.getDate()),
            "h+": String(date.getHours()),
            "m+": String(date.getMinutes()),
            "s+": String(date.getSeconds())
        };
        for (var k in opt) {
            let ret = result.match(k);
            if (ret) {
                result = result.replace(ret[0], (opt[k].padStart(ret[0].length, "0")));
            }
        }
        return result;
    },
    phoneFormat: (phone) => {
        return phone.replace(/^(\d{3})(\d{4})(\d{4})$/, '$1 $2 $3');
    },

    /**
     * @param {String} srcPath 脚本地址
     * 1.判断sourcePoint是否存在加载记录且是否加载完成
     *   未完成则缓存一个Promise到handler中
     *   完成则直接return Promise.resolve();
     * 2.创建一个加载记录对象
     * 3.返回一个promise加载脚本 通过onload onerror方法触发加载记录中的handler
     */

    $loaderScript: function(srcPath) {
        if (sourcePoint[srcPath] && !sourcePoint[srcPath].isLoaded) {
            return new Promise((resolve, reject) => {
                sourcePoint[srcPath].handler.push({ resolve, reject });
            });
        }
        if (sourcePoint[srcPath] && sourcePoint[srcPath].isLoaded) {
            return Promise.resolve();
        }

        sourcePoint[srcPath] = createSource();
        return new Promise((resolve, reject) => {
            let script = document.createElement("script");
            script.src = srcPath;
            script.onload = function() {
                setTimeout(() => {
                    sourcePoint[srcPath].isLoaded = true;
                    sourcePoint[srcPath].targetHandler("resolve");
                    resolve();
                }, 1000 / 60);
            };
            script.onerror = function(e) {
                delete sourcePoint[srcPath];
                reject(e);
                sourcePoint[srcPath].targetHandler("reject");
            };
            document.body.appendChild(script);
        });
    },

    /**
     * @name: 
     * @msg: 解析url中的参数
     * @param {*}
     * @return {*}
     */
    getUrlParams: (url) => {
        let url1 = url || window.location.href;
        let arr = url1.slice(url1.indexOf('?') + 1).split('&');
        let params = {};
        for (let i = 0; i < arr.length; i++) {
            let item = arr[i].split('=');
            params[item[0]] = item[1];
        }
        return params;
    },
};
for (let i in tools) {
    Vue.prototype[i] = tools[i];
}
export default tools;