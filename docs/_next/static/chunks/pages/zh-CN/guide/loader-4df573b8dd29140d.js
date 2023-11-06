(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8660],{6201:function(i,s,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/zh-CN/guide/loader",function(){return e(3930)}])},3930:function(i,s,e){"use strict";e.r(s),e.d(s,{default:function(){return HOC},useTOC:function(){return useTOC}});var h=e(5893),n=e(7812),r=e(5493),l=e(8925),a=e(5192);function useTOC(i){return[{value:"目录获取",id:"目录获取",depth:3},{value:"单个目录加载",id:"单个目录加载",depth:3},{value:"多个目录加载",id:"多个目录加载",depth:3},{value:"初始化 init()",id:"初始化-init",depth:3},{value:"选项说明",id:"选项说明",depth:3},{value:"示例",id:"示例",depth:4}]}let t=(0,n.c)(function(i){let{toc:s=useTOC(i)}=i,e=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code",span:"span",strong:"strong",ul:"ul",li:"li",h3:"h3",a:"a",h4:"h4"},(0,l.a)(),i.components);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(e.h1,{children:"Loader"}),"\n",(0,h.jsx)(e.p,{children:"我们使用 Proto Loader 的时候，只需要在创建实例的时候，传入参数即可。"}),"\n",(0,h.jsx)(e.pre,{icon:a.Dr,"data-language":"js","data-copy":"",children:(0,h.jsxs)(e.code,{children:[(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"import"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" GrpcLoader "}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"from"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" 'grpcity'"})]}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"const"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" loader"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" ="}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" new"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" GrpcLoader"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"({ location, files })"})]})]})}),"\n",(0,h.jsx)(e.p,{children:(0,h.jsxs)(e.strong,{children:["为什么传参是",(0,h.jsx)(e.code,{children:"location"}),"和",(0,h.jsx)(e.code,{children:"files"}),"？"]})}),"\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsxs)(e.li,{children:[(0,h.jsx)(e.code,{children:"location"}),"是指 proto 文件目录，包含 service 引用的 proto，如",(0,h.jsx)(e.code,{children:"model.proto"}),"、",(0,h.jsx)(e.code,{children:"empty.proto"}),"等等这些被独立引用的文件。"]}),"\n",(0,h.jsxs)(e.li,{children:[(0,h.jsx)(e.code,{children:"files"}),"是指具体的",(0,h.jsx)(e.code,{children:"service.proto"}),"文件，告诉底层 service 的定义来自这些文件，是具体的服务体现。"]}),"\n"]}),"\n",(0,h.jsx)(e.p,{children:"**带来的好处: **"}),"\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsx)(e.li,{children:"service 加载非常清晰，知道是哪些 service 会被使用"}),"\n",(0,h.jsx)(e.li,{children:"proto 的目录结构，可以自定义，不影响加载"}),"\n"]}),"\n",(0,h.jsx)(e.h3,{id:s[0].id,children:s[0].value}),"\n",(0,h.jsx)(e.p,{children:"ESM 模块的代码文件目录获取如下:"}),"\n",(0,h.jsx)(e.pre,{icon:a.Dr,"data-language":"js","data-copy":"",children:(0,h.jsxs)(e.code,{children:[(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"import"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" GrpcLoader "}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"from"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" 'grpcity'"})]}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"import"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" path "}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"from"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" 'node:path'"})]}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"import"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" { fileURLToPath } "}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"from"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" 'node:url'"})]}),"\n",(0,h.jsx)(e.span,{children:" "}),"\n",(0,h.jsx)(e.span,{children:(0,h.jsx)(e.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"// get this file dir path"})}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"const"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" __dirname"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" ="}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" path."}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"dirname"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"fileURLToPath"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"import"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"."}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"meta"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:".url))"})]})]})}),"\n",(0,h.jsxs)(e.p,{children:["如果是 CommonJS 模块的代码只 ",(0,h.jsx)(e.code,{children:"__dirname"})," 是全局的，只需要在需要用到的地方直接使用即可。"]}),"\n",(0,h.jsx)(e.h3,{id:s[1].id,children:s[1].value}),"\n",(0,h.jsx)(e.p,{children:"大多数情况下，我们只需要加载一次proto目录，并指定多个service，如下所示:"}),"\n",(0,h.jsx)(e.pre,{icon:a.Dr,"data-language":"js","data-copy":"",children:(0,h.jsxs)(e.code,{children:[(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"export"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" default"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" new"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" GrpcLoader"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"({"})]}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    location: path."}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"join"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(__dirname, "}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'./proto'"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"),"})]}),"\n",(0,h.jsx)(e.span,{children:(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    files: ["})}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"        'path/to/service-a.proto'"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,h.jsx)(e.span,{children:(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"        'path/to/service-b.proto'"})}),"\n",(0,h.jsx)(e.span,{children:(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    ]"})}),"\n",(0,h.jsx)(e.span,{children:(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"})"})})]})}),"\n",(0,h.jsx)(e.h3,{id:s[2].id,children:s[2].value}),"\n",(0,h.jsxs)(e.p,{children:["有时候，我们需要跨业务进行服务调用，这个时候就会出现多个proto目录都需要加载的情况，我们的",(0,h.jsx)(e.code,{children:"gRPCity"}),"已经做好了这块的多proto目录的加载支持了。如下所示:"]}),"\n",(0,h.jsx)(e.pre,{icon:a.Dr,"data-language":"js","data-copy":"",children:(0,h.jsxs)(e.code,{children:[(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"export"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" default"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" new"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" GrpcLoader"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(["})]}),"\n",(0,h.jsx)(e.span,{children:(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    {"})}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"        location: path."}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"join"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(__dirname, "}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'./proto1'"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"),"})]}),"\n",(0,h.jsx)(e.span,{children:(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"        files: ["})}),"\n",(0,h.jsx)(e.span,{children:(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"            'path/to/service-a.proto'"})}),"\n",(0,h.jsx)(e.span,{children:(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"        ]"})}),"\n",(0,h.jsx)(e.span,{children:(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    },"})}),"\n",(0,h.jsx)(e.span,{children:(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    {"})}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"        location: path."}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"join"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(__dirname, "}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'./proto2'"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"),"})]}),"\n",(0,h.jsx)(e.span,{children:(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"        files: ["})}),"\n",(0,h.jsx)(e.span,{children:(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"            'path/to/service-b.proto'"})}),"\n",(0,h.jsx)(e.span,{children:(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"        ]"})}),"\n",(0,h.jsx)(e.span,{children:(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    },"})}),"\n",(0,h.jsx)(e.span,{children:(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"])"})})]})}),"\n",(0,h.jsx)(e.h3,{id:s[3].id,children:s[3].value}),"\n",(0,h.jsx)(e.p,{children:(0,h.jsx)(e.strong,{children:"为什么 loader 还需要 init ？"})}),"\n",(0,h.jsx)(e.p,{children:"init 是真正把proto加载的执行。同时也是自定义参数和环境的配置位置，功能更加独立，可以放到服务框架流程中的第一步，只需要执行一次。"}),"\n",(0,h.jsx)(e.pre,{icon:a.Dr,"data-language":"js","data-copy":"",children:(0,h.jsx)(e.code,{children:(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"await"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" loader."}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"init"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(options)"})]})})}),"\n",(0,h.jsx)(e.h3,{id:s[4].id,children:s[4].value}),"\n",(0,h.jsx)(e.p,{children:"options 的参数说明，包含如下参数:"}),"\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsxs)(e.li,{children:["services: （可选）跟 initClient() 里的参数一样，如果有这个参数，则可以跳过initClient，直接完成client的初始化。同时支持字符串和对象参数；","\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsxs)(e.li,{children:["string: ip+port 格式，如 ",(0,h.jsx)(e.code,{children:"127.0.0.1:9099"}),"；"]}),"\n",(0,h.jsxs)(e.li,{children:["object: ",(0,h.jsx)(e.code,{children:"{ host, port }"}),"；","\n",(0,h.jsxs)(e.ul,{children:["\n",(0,h.jsx)(e.li,{children:"host: 字符串，支持 ip 和域名；"}),"\n",(0,h.jsx)(e.li,{children:"port: 数字，最小值为0，最大值为65535；"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,h.jsx)(e.li,{children:"isDev: （可选）布尔值，是否为开发模式；"}),"\n",(0,h.jsxs)(e.li,{children:["packagePrefix: （可选）字符串，service name 包前缀，如: ",(0,h.jsx)(e.code,{children:"dev"}),", ",(0,h.jsx)(e.code,{children:"stage"}),"等等；"]}),"\n",(0,h.jsx)(e.li,{children:"loadOptions: （可选）proto load options；"}),"\n",(0,h.jsx)(e.li,{children:"channelOptions: （可选）proto channel options；"}),"\n",(0,h.jsx)(e.li,{children:"appName: （可选）字符串，当前应用的应用名，用来标记；"}),"\n"]}),"\n",(0,h.jsxs)(e.p,{children:["其中",(0,h.jsx)(e.code,{children:"loadOptions"}),"和",(0,h.jsx)(e.code,{children:"channelOptions"}),"更多说明请看这一篇: ",(0,h.jsx)(e.a,{href:"/guide/config",children:"Config"})]}),"\n",(0,h.jsx)(e.h4,{id:s[5].id,children:s[5].value}),"\n",(0,h.jsxs)(e.p,{children:["注意使用了",(0,h.jsx)(e.code,{children:"packagePrefix"}),"之后，服务端和客户端都要一致。"]}),"\n",(0,h.jsx)(e.p,{children:"test 环境，配置如下:"}),"\n",(0,h.jsx)(e.pre,{icon:a.Dr,"data-language":"js","data-copy":"",children:(0,h.jsxs)(e.code,{children:[(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"await"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" loader."}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"init"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"({"})]}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    isDev: "}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"true"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    packagePrefix: "}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'test'"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,h.jsx)(e.span,{children:(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    services: {"})}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"        'dev.path.to.serviceA'"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": "}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'domain.local:9099'"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"        'path.to.serviceB'"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": "}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'192.168.32.111:10099'"})]}),"\n",(0,h.jsx)(e.span,{children:(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    },"})}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    appName: "}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'myApp'"})]}),"\n",(0,h.jsx)(e.span,{children:(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"})"})})]})}),"\n",(0,h.jsx)(e.p,{children:"stage 环境，配置如下:"}),"\n",(0,h.jsx)(e.pre,{icon:a.Dr,"data-language":"js","data-copy":"",children:(0,h.jsxs)(e.code,{children:[(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"await"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" loader."}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"init"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"({"})]}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    isDev: "}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"false"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    packagePrefix: "}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'dev'"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,h.jsx)(e.span,{children:(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    services: {"})}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"        'dev.path.to.serviceA'"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": "}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'domain.local:9099'"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"        'path.to.serviceB'"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": "}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'192.168.32.111:10099'"})]}),"\n",(0,h.jsx)(e.span,{children:(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    },"})}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    appName: "}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'myApp'"})]}),"\n",(0,h.jsx)(e.span,{children:(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"})"})})]})}),"\n",(0,h.jsx)(e.p,{children:"production 环境，直接忽略掉一些配置项即可，配置如下:"}),"\n",(0,h.jsx)(e.pre,{icon:a.Dr,"data-language":"js","data-copy":"",children:(0,h.jsxs)(e.code,{children:[(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"await"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" loader."}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"init"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"({"})]}),"\n",(0,h.jsx)(e.span,{children:(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    services: {"})}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"        'dev.path.to.serviceA'"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": "}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'domain.local:9099'"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"        'path.to.serviceB'"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": "}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'192.168.32.111:10099'"})]}),"\n",(0,h.jsx)(e.span,{children:(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    },"})}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    appName: "}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'myApp'"})]}),"\n",(0,h.jsx)(e.span,{children:(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"})"})})]})})]})},"/zh-CN/guide/loader",{filePath:"pages/zh-CN/guide/loader.mdx",timestamp:1699236606e3,pageMap:r.v,frontMatter:{},title:"Loader"},"undefined"==typeof RemoteContent?useTOC:RemoteContent.useTOC);function HOC(i){return t(i)}},5493:function(i,s,e){"use strict";e.d(s,{v:function(){return h}});let h=[{data:{index:"首页",start:"快速开始",guide:"用户指南",apis:"API"}},{name:"apis",route:"/zh-CN/apis",children:[{data:{grpcloader:"gRPC Loader",server:"Server","client-proxy":"Client Proxy"}},{name:"client-proxy",route:"/zh-CN/apis/client-proxy",frontMatter:{sidebar_label:"Client Proxy"}},{name:"grpcloader",route:"/zh-CN/apis/grpcloader",frontMatter:{sidebar_label:"Grpcloader"}},{name:"server",route:"/zh-CN/apis/server",frontMatter:{sidebar_label:"Server"}}]},{name:"apis",route:"/zh-CN/apis",frontMatter:{sidebar_label:"Apis"}},{name:"guide",route:"/zh-CN/guide",children:[{data:{loader:"Loader",config:"Config",server:"Server",client:"Client",metadata:"Metadata","stream-v2":"Stream v2",stream:"Stream",credentials:"Credentials",status:"Status",error:"Error",middleware:"Middleware",proto:"Proto"}},{name:"client",route:"/zh-CN/guide/client",frontMatter:{sidebar_label:"Client"}},{name:"config",route:"/zh-CN/guide/config",frontMatter:{sidebar_label:"Config"}},{name:"credentials",route:"/zh-CN/guide/credentials",frontMatter:{sidebar_label:"Credentials"}},{name:"error",route:"/zh-CN/guide/error",frontMatter:{sidebar_label:"Error"}},{name:"loader",route:"/zh-CN/guide/loader",frontMatter:{sidebar_label:"Loader"}},{name:"metadata",route:"/zh-CN/guide/metadata",frontMatter:{sidebar_label:"Metadata"}},{name:"middleware",route:"/zh-CN/guide/middleware",frontMatter:{sidebar_label:"Middleware"}},{name:"proto",route:"/zh-CN/guide/proto",frontMatter:{sidebar_label:"Proto"}},{name:"server",route:"/zh-CN/guide/server",frontMatter:{sidebar_label:"Server"}},{name:"status",route:"/zh-CN/guide/status",frontMatter:{sidebar_label:"Status"}},{name:"stream-v2",route:"/zh-CN/guide/stream-v2",frontMatter:{sidebar_label:"Stream V2"}},{name:"stream",route:"/zh-CN/guide/stream",frontMatter:{sidebar_label:"Stream"}}]},{name:"guide",route:"/zh-CN/guide",frontMatter:{sidebar_label:"Guide"}},{name:"index",route:"/zh-CN",frontMatter:{sidebar_label:"Index"}},{name:"start",route:"/zh-CN/start",children:[{data:{"proto-loader":"Proto Loader",server:"Server Side",client:"Client Side"}},{name:"client",route:"/zh-CN/start/client",frontMatter:{sidebar_label:"Client"}},{name:"proto-loader",route:"/zh-CN/start/proto-loader",frontMatter:{sidebar_label:"Proto Loader"}},{name:"server",route:"/zh-CN/start/server",frontMatter:{sidebar_label:"Server"}}]},{name:"start",route:"/zh-CN/start",frontMatter:{sidebar_label:"Start"}}]}},function(i){i.O(0,[7812,9774,2888,179],function(){return i(i.s=6201)}),_N_E=i.O()}]);