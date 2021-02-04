(function(doc, win) {
    var a = document;
    var b = a.querySelector('meta[name="viewport"]');
    if (!b) {
        b = a.createElement("meta");
        b.setAttribute("name", "viewport");
        b.setAttribute(
            "content",
            "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        );
        var c = a.documentElement;
        c.firstElementChild.insertBefore(b, c.firstElementChild.childNodes[2]);
    }
    var scale = window.screen.width / 750;
    b.setAttribute(
        "content",
        "width=750, initial-scale=" +
        scale +
        ", maximum-scale=" +
        scale +
        ", minimum-scale=" +
        scale
    );
    var d =
        "@charset \"utf-8\";html{color:#000;background:#fff;overflow-y:scroll;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}html *{outline:0;-webkit-text-size-adjust:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}html,body{font-family:sans-serif}body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td,hr,button,article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{margin:0;padding:0}input,select,textarea{font-size:100%}table{border-collapse:collapse;border-spacing:0}fieldset,img{border:0}abbr,acronym{border:0;font-variant:normal}del{text-decoration:line-through}address,caption,cite,code,dfn,em,th,var{font-style:normal;font-weight:500}ol,ul{list-style:none}caption,th{text-align:left}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:500}q:before,q:after{content:''}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}a:hover{text-decoration:underline}ins,a{text-decoration:none}#spinner {position:fixed;top:0;left:0;right:0;bottom:0;background:#fff;z-index:19891204;}#spinner .tips {position:absolute;top:calc(30% + 100px);text-align:center;font-size:32px;width:100%;}.spinner {position:absolute;top:30%;left:50%;margin-left:-150px;width:300px;text-align:center;font-size:10px;}.spinner>div {background-color:#96E9A3;height:120px;width:14px;display:inline-block;border-radius:40px;animation:stretchdelay 1s infinite ease-in-out;-webkit-animation:stretchdelay 1s infinite ease-in-out;}.spinner .rect2 {margin-left:6px;animation-delay:-0.9s;-webkit-animation-delay:-0.9s;}.spinner .rect3 {animation-delay:-0.8s;-webkit-animation-delay:-0.8s;margin-left:6px;}@keyframes stretchdelay {0%, 40%, 100% {-webkit-transform:scaleY(0.6) } 20% {-webkit-transform:scaleY(1.0) }}@-webkit-keyframes stretchdelay {0%, 40%, 100% {-webkit-transform:scaleY(0.6) } 20% {-webkit-transform:scaleY(1.0) }}#spinner .tips {position:absolute;top:calc(30% + 120px);text-align:center;font-size:32px;width:100%;}.sui-panel-toast{position:fixed; margin:0px; z-index:9999;font-size: 28px;text-align:center; padding: 12px 22px; opacity: 0.7; border-radius:6px; box-shadow:0 1px 2px #999;background:#000; color:#fff;}";
    var e = a.createElement("style");
    if ((a.getElementsByTagName("head")[0].appendChild(e), e.styleSheet))
        e.styleSheet.disabled || (e.styleSheet.cssText = d);
    else
        try {
            e.innerHTML = d;
        } catch (f) {
            e.innerText = d;
        }
})(document, window);