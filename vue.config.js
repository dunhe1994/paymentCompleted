//自定义配置
const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    publicPath: process.env.VUE_APP_PUBLICPATH,
    outputDir: process.env.VUE_APP_OUTDIR,
    assetsDir: 'static',
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/assets/sass/index.scss";`
            }
        },
        extract: false,
    },
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@as', resolve('src/assets'))
            .set('@cp', resolve('src/components'))
            .set('@service', resolve('src/service'))
            .set('@static', resolve('src/static'))
            .set('@views', resolve('src/views'));
        //保存自动格式化
        config.module
            .rule('eslint')
            .use('eslint-loader')
            .loader('eslint-loader')
            .tap(options => {
                options.fix = true;
                return options;
            });
    },
    configureWebpack: {
        externals: {
            'vue': 'Vue',
            'vue-router': 'VueRouter',
            "axios": "axios",
            "vuex": "Vuex",
            "weixin-js-sdk": "wx",
            "qrcodejs2": "QRCode",
            "html2canvas": "html2canvas",
            "crypto-js": "CryptoJS",
            "qs": "Qs",
            "exif-js": "EXIF"
        },
    },
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: false,
    devServer: {
        open: true,
        disableHostCheck: true,
        proxy: {
            '/': {
                target: 'https://app.js.abchina.com/jiangsu/testsuzhou/gate/api/merchant/', // 后台接口域名
                // target: '192.168.1.105:8202',
                ws: true, //如果要代理 websockets，配置这个参数
                secure: false, // 如果是https接口，需要配置这个参数
                changeOrigin: true, //是否跨域
                //将/rng替换为空 如果请求路径为/rng/aaa 实际路径为http://45.105.124.130:8081/aaa
                pathRewrite: {
                    '^/rng': ''
                }
            }
        }
    }
};