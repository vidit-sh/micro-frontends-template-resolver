!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/templates",r(r.s=14)}([function(e,t){e.exports=require("express")},function(e,t){e.exports=require("path")},function(e,t,r){"use strict";t.a={home:"home.html"}},function(e,t,r){"use strict";r.d(t,"a",function(){return n}),r.d(t,"b",function(){return o});const n=(e,t)=>{if(e){var r=t("<script>");r.attr({type:"text/javascript",src:e}),t("body").append(r)}},o=(e,t)=>{if(e){var r=t("<link>");r.attr({type:"text/css",rel:"stylesheet",href:e}),t("head").append(r)}}},function(e,t){e.exports=require("http")},function(e,t){e.exports=require("chalk")},function(e,t){e.exports=require("http-errors")},function(e,t){e.exports=require("cookie-parser")},function(e,t){e.exports=require("morgan")},function(e,t,r){"use strict";(function(e){r(0);var n=r(1),o=r.n(n),s=r(10),i=r.n(s),c=r(11),u=r.n(c),a=r(12),l=r(2),p=r(3);const f=process.env.MODULE_RESOLVER_ENDPOINT||"http://localhost:8001";t.a=(async(t,r,n)=>{const s=t.path.split("/")[1];if(l.a[s]){const t=u.a.load(i.a.readFileSync(o.a.resolve(e,"../templates/",l.a[s]))),n=[];t("[data-module]").each((e,r)=>{const o=t(r),s=o.attr("data-module");n.push(Object(a.a)(f+"/"+s,e=>{o.html(e.html),e.css.forEach(function(e){Object(p.b)(e,t)}),e.js.forEach(function(e){Object(p.a)(e,t)})}))}),await Promise.all(n),r.send(t.html())}else r.send("Unknown page.")})}).call(this,"src/utils")},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("cheerio")},function(e,t,r){"use strict";var n=r(13),o=r.n(n);t.a=((e,t)=>o()(e).then(function(e){return e.json()}).then(t))},function(e,t){e.exports=require("node-fetch")},function(e,t,r){r(15),e.exports=r(17)},function(e,t,r){"use strict";r.r(t);r(16)},function(e,t){e.exports=require("@babel/polyfill")},function(e,t,r){"use strict";r.r(t);var n=r(4),o=r.n(n),s=r(5),i=r.n(s),c=r(6),u=r.n(c),a=r(0),l=r.n(a),p=(r(1),r(7)),f=r.n(p),d=r(8),h=r.n(d),b=r(9);const v=l()();v.use(h()("dev")),v.use(l.a.json()),v.use(l.a.urlencoded({extended:!1})),v.use(f()()),v.get("*",b.a),v.use((e,t,r)=>{r(u()(404))}),v.use((e,t,r,n)=>{r.locals.message=e.message,r.locals.error="development"===t.app.get("env")?e:{},r.status(e.status||500),r.send("Error occurred : "+e.message)});var x=v;const y=(e=>{const t=parseInt(e,10);return isNaN(t)?e:t>=0&&t})(process.env.PORT||"8000");x.set("port",y);const m=o.a.createServer(x);m.listen(y),m.on("error",e=>{if("listen"!==e.syscall)throw e;const t="string"==typeof y?"Pipe "+y:"Port "+y;switch(e.code){case"EACCES":console.error(t+" requires elevated privileges"),process.exit(1);break;case"EADDRINUSE":console.error(t+" is already in use"),process.exit(1);break;default:throw e}}),m.on("listening",()=>{const e=m.address(),t="string"==typeof e?"pipe :"+e:"port :"+e.port;console.log(i.a.blue("Listening on "+t))})}]);