(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9679],{1262:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/zh-CN/start",function(){return t(4576)}])},4576:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return HOC},useTOC:function(){return useTOC}});var a=t(5893),n=t(7812),o=t(5493),s=t(8925),d=t(2748);function useTOC(e){return[]}function _missingMdxReference(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}let i=(0,n.c)(function(e){let r=Object.assign({h1:"h1",p:"p",a:"a",hr:"hr"},(0,s.a)(),e.components);return d.o||_missingMdxReference("Cards",!1),d.o.Card||_missingMdxReference("Cards.Card",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.h1,{children:"Get Started"}),"\n",(0,a.jsxs)(r.p,{children:["我们假设你已经入门了 gRPC、Node.js 和 JavaScript，有一个基础的认知。官方文档是最好的老师，关于基础 gPRC 入门推荐: ",(0,a.jsx)(r.a,{href:"https://github.com/grpc/grpc-node/tree/master/examples/helloworld/dynamic_codegen",children:"link"})," 。"]}),"\n",(0,a.jsx)(r.p,{children:"快速入门教程将会分成 3 篇，最终带你们完成一个完整的基于 gRPCity 的微服务服务端开发与客户端调用。"}),"\n",(0,a.jsxs)(r.p,{children:["入门教程对应的项目代码已经放到了GitHub: ",(0,a.jsx)(r.a,{href:"https://github.com/chakhsu/grpcity-basic-demo",children:"link"})," 。"]}),"\n",(0,a.jsx)(r.hr,{}),"\n",(0,a.jsxs)(d.o,{children:[(0,a.jsx)(d.o.Card,{title:"Proto Loader →",href:"/start/proto-loader"}),(0,a.jsx)(d.o.Card,{title:"Server Side →",href:"/start/server"}),(0,a.jsx)(d.o.Card,{title:"Client Side →",href:"/start/client"})]})]})},"/zh-CN/start",{filePath:"pages/zh-CN/start.mdx",timestamp:1699236606e3,pageMap:o.v,frontMatter:{},title:"Get Started"},"undefined"==typeof RemoteContent?useTOC:RemoteContent.useTOC);function HOC(e){return i(e)}},2748:function(e,r,t){"use strict";t.d(r,{o:function(){return l}});var a=t(5893),n=t(512),o=t(1664),s=t.n(o);let d={cards:(0,n.Z)("nextra-cards _mt-4 _gap-4 _grid","_not-prose"),card:(0,n.Z)("nextra-card _group _flex _flex-col _justify-start _overflow-hidden _rounded-lg _border _border-gray-200","_text-current _no-underline dark:_shadow-none","hover:_shadow-gray-100 dark:hover:_shadow-none _shadow-gray-100","active:_shadow-sm active:_shadow-gray-200","_transition-all _duration-200 hover:_border-gray-300"),title:(0,n.Z)("_flex _font-semibold _items-start _gap-2 _p-4 _text-gray-700 hover:_text-gray-900")},i=(0,a.jsx)("span",{className:"_transition-transform _duration-75 group-hover:_translate-x-[2px]",children:"→"}),l=Object.assign(function({children:e,num:r=3,className:t,style:o,...s}){return(0,a.jsx)("div",{className:(0,n.Z)(d.cards,t),...s,style:{...o,"--rows":r},children:e})},{displayName:"Cards",Card:function({children:e,title:r,icon:t,image:o,arrow:l,href:u,...c}){let h=l?i:null;return o?(0,a.jsxs)(s(),{href:u,className:(0,n.Z)(d.card,"_bg-gray-100 _shadow dark:_border-neutral-700 dark:_bg-neutral-800 dark:_text-gray-50 hover:_shadow-lg dark:hover:_border-neutral-500 dark:hover:_bg-neutral-700"),...c,children:[e,(0,a.jsxs)("span",{className:(0,n.Z)(d.title,"dark:_text-gray-300 dark:hover:_text-gray-100"),children:[t,(0,a.jsxs)("span",{className:"_flex _gap-1",children:[r,h]})]})]}):(0,a.jsx)(s(),{href:u,className:(0,n.Z)(d.card,"_bg-transparent _shadow-sm dark:_border-neutral-800 hover:_bg-slate-50 hover:_shadow-md dark:hover:_border-neutral-700 dark:hover:_bg-neutral-900"),...c,children:(0,a.jsxs)("span",{className:(0,n.Z)(d.title,"dark:_text-neutral-200 dark:hover:_text-neutral-50 _flex _items-center"),children:[t,r,h]})})}})},5493:function(e,r,t){"use strict";t.d(r,{v:function(){return a}});let a=[{data:{index:"首页",start:"快速开始",guide:"用户指南",apis:"API"}},{name:"apis",route:"/zh-CN/apis",children:[{data:{grpcloader:"gRPC Loader",server:"Server","client-proxy":"Client Proxy"}},{name:"client-proxy",route:"/zh-CN/apis/client-proxy",frontMatter:{sidebar_label:"Client Proxy"}},{name:"grpcloader",route:"/zh-CN/apis/grpcloader",frontMatter:{sidebar_label:"Grpcloader"}},{name:"server",route:"/zh-CN/apis/server",frontMatter:{sidebar_label:"Server"}}]},{name:"apis",route:"/zh-CN/apis",frontMatter:{sidebar_label:"Apis"}},{name:"guide",route:"/zh-CN/guide",children:[{data:{loader:"Loader",config:"Config",server:"Server",client:"Client",metadata:"Metadata","stream-v2":"Stream v2",stream:"Stream",credentials:"Credentials",status:"Status",error:"Error",middleware:"Middleware",proto:"Proto"}},{name:"client",route:"/zh-CN/guide/client",frontMatter:{sidebar_label:"Client"}},{name:"config",route:"/zh-CN/guide/config",frontMatter:{sidebar_label:"Config"}},{name:"credentials",route:"/zh-CN/guide/credentials",frontMatter:{sidebar_label:"Credentials"}},{name:"error",route:"/zh-CN/guide/error",frontMatter:{sidebar_label:"Error"}},{name:"loader",route:"/zh-CN/guide/loader",frontMatter:{sidebar_label:"Loader"}},{name:"metadata",route:"/zh-CN/guide/metadata",frontMatter:{sidebar_label:"Metadata"}},{name:"middleware",route:"/zh-CN/guide/middleware",frontMatter:{sidebar_label:"Middleware"}},{name:"proto",route:"/zh-CN/guide/proto",frontMatter:{sidebar_label:"Proto"}},{name:"server",route:"/zh-CN/guide/server",frontMatter:{sidebar_label:"Server"}},{name:"status",route:"/zh-CN/guide/status",frontMatter:{sidebar_label:"Status"}},{name:"stream-v2",route:"/zh-CN/guide/stream-v2",frontMatter:{sidebar_label:"Stream V2"}},{name:"stream",route:"/zh-CN/guide/stream",frontMatter:{sidebar_label:"Stream"}}]},{name:"guide",route:"/zh-CN/guide",frontMatter:{sidebar_label:"Guide"}},{name:"index",route:"/zh-CN",frontMatter:{sidebar_label:"Index"}},{name:"start",route:"/zh-CN/start",children:[{data:{"proto-loader":"Proto Loader",server:"Server Side",client:"Client Side"}},{name:"client",route:"/zh-CN/start/client",frontMatter:{sidebar_label:"Client"}},{name:"proto-loader",route:"/zh-CN/start/proto-loader",frontMatter:{sidebar_label:"Proto Loader"}},{name:"server",route:"/zh-CN/start/server",frontMatter:{sidebar_label:"Server"}}]},{name:"start",route:"/zh-CN/start",frontMatter:{sidebar_label:"Start"}}]}},function(e){e.O(0,[7812,9774,2888,179],function(){return e(e.s=1262)}),_N_E=e.O()}]);