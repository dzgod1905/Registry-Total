(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5473:function(e,t,s){Promise.resolve().then(s.bind(s,9042))},9042:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return D}});var i=s(7437),n=s(2826),o=s(3918),r=s(2265),a=s(3730),l=s(3688),c=s(2192),h=s(7602),d=s.n(h),m=()=>(0,i.jsxs)("div",{className:d().intro,children:[(0,i.jsxs)("div",{className:d().logo,children:[(0,i.jsx)(c.Z,{src:"/_next/static/media/logo.cfa00cdd.png",height:32,preview:!1}),(0,i.jsx)("h1",{className:d().title,children:"Registry"})]}),(0,i.jsx)(l.ZP,{theme:{token:{colorBgContainer:"var(--color-black)"}},children:(0,i.jsxs)(a.Z,{autoplay:!0,children:[(0,i.jsxs)("div",{children:[(0,i.jsx)(c.Z,{src:"/_next/static/media/carousel-1.599dae79.svg",preview:!1,className:d().img}),(0,i.jsx)("h2",{className:d().subtitle,children:"Đảm bảo phương tiện di chuyển an to\xe0n hơn"})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)(c.Z,{src:"/_next/static/media/carousel-2.b12b0d95.svg",preview:!1,className:d().img}),(0,i.jsx)("h2",{className:d().subtitle,children:"Giải quyết đăng kiểm nhanh ch\xf3ng v\xe0 uy t\xedn"})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)(c.Z,{src:"/_next/static/media/carousel-3.da4b21f8.svg",preview:!1,className:d().img}),(0,i.jsx)("h2",{className:d().subtitle,children:"Thống k\xea trở n\xean dễ d\xe0ng hơn bao giờ hết"})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)(c.Z,{src:"/_next/static/media/carousel-4.45cd3fbe.svg",preview:!1,className:d().img}),(0,i.jsx)("h2",{className:d().subtitle,children:"Theo d\xf5i th\xf4ng tin đăng kiểm tr\xean to\xe0n quốc"})]})]})})]}),u=s(4636),g=s.n(u),p=s(422),f=s(192),x=s(8194),j=s(467),y=s(4586),_=s(2305),b=s.n(_),k=s(6468),N=e=>{let[t,s]=(0,r.useState)(!1),[n,o]=y.default.useNotification(),a=()=>{n.error({message:"Lỗi",description:"Th\xf4ng tin đăng nhập kh\xf4ng ch\xednh x\xe1c."})},c=async e=>{s(!0);try{let t=await fetch("http://localhost:3000/api/v1/users/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!t.ok)throw a(),s(!1),Error("Can not authenticate.");await t.json()}catch(e){s(!1),console.error(e)}};return(0,i.jsx)(l.ZP,{theme:{token:{colorBgContainer:"#F1F6F5",borderRadius:10,controlHeight:34,colorBgContainerDisabled:"#4096ff",colorTextDisabled:"#fff",colorErrorOutline:"none",controlOutline:"none"}},children:(0,i.jsxs)("div",{className:b().form,children:[o,(0,i.jsx)("h1",{className:b().title,children:"Welcome back!"}),(0,i.jsxs)(f.Z,{name:"login",className:b().login,onFinish:c,children:[(0,i.jsx)(f.Z.Item,{name:"email",rules:[{required:!0,message:"H\xe3y nhập email"}],children:(0,i.jsx)(x.Z,{prefix:(0,i.jsx)(k.WNJ,{className:b().icon}),placeholder:"Email",type:"email",autoComplete:"off",size:"large",className:b().input})}),(0,i.jsx)(f.Z.Item,{name:"password",rules:[{required:!0,message:"H\xe3y nhập mật khẩu"}],children:(0,i.jsx)(x.Z.Password,{prefix:(0,i.jsx)(k.gMo,{className:b().icon}),type:"password",size:"large",placeholder:"Mật khẩu",autoComplete:"off",className:b().input})}),(0,i.jsx)(f.Z.Item,{children:(0,i.jsx)(j.Z.Link,{onClick:()=>e.turnOnForgotMode(),className:b().forgot,children:"Qu\xean mật khẩu?"})}),(0,i.jsx)(f.Z.Item,{children:(0,i.jsx)(p.ZP,{type:"primary",htmlType:"submit",className:b().button,size:"large",loading:t,disabled:t,style:{fontSize:"1.6rem"},children:t?"Đang đăng nhập...":"Đăng nhập"})})]})]})})},Z=s(6472),v=s(6813),C=s.n(v),w=e=>{let[t,s]=(0,r.useState)(!1),n=async t=>{s(!0);try{let i=await fetch("http://localhost:3000/api/v1/users/forgotPassword",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!i.ok)throw e.openNotification("Lỗi","Kh\xf4ng t\xecm thấy email n\xe0y."),e.setStatus("error"),s(!1),Error("Could not find email.");e.setStatus("finish"),e.setFindingEmail(!1),e.setVerifying(!0),e.next()}catch(e){console.error(e)}};return(0,i.jsxs)(f.Z,{name:"findEmail",onFinish:n,children:[(0,i.jsx)(f.Z.Item,{name:"email",rules:[{required:!0,message:"H\xe3y nhập email"}],children:(0,i.jsx)(x.Z,{prefix:(0,i.jsx)(k.WNJ,{className:C().icon}),placeholder:"Email",type:"email",autoComplete:"off",size:"large",className:C().input,style:{paddingLeft:".4rem"}})}),(0,i.jsxs)(f.Z.Item,{children:[(0,i.jsx)(p.ZP,{type:"primary",htmlType:"submit",className:C().button,size:"large",loading:t,style:{fontSize:"1.6rem"},disabled:t,children:t?"Đang t\xecm kiếm":"Tiếp tục"}),(0,i.jsx)(l.ZP,{theme:{token:{colorBgContainerDisabled:"rgba(0, 0, 0, 0.04)",colorTextDisabled:"rgba(0, 0, 0, 0.25)"}},children:(0,i.jsx)(p.ZP,{htmlType:"button",className:C().button,style:{height:"4.2rem"},disabled:t,onClick:()=>{e.turnOffForgotMode()},children:"Trở về đăng nhập"})})]})]})},T=e=>{let[t,s]=(0,r.useState)(!1),n=async t=>{s(!0);try{let i=await fetch("http://localhost:3000/api/v1/users/checkResetToken",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!i.ok)throw e.openNotification("Lỗi","M\xe3 x\xe1c thực kh\xf4ng ch\xednh x\xe1c."),e.setStatus("error"),s(!1),Error("Could not authenticate.");e.setStatus("finish"),e.setTokenReset(t.token),e.setVerifying(!1),e.setResetting(!0),e.next()}catch(e){console.error(e)}};return(0,i.jsxs)(f.Z,{name:"verify-token",onFinish:n,children:[(0,i.jsx)(f.Z.Item,{name:"token",rules:[{required:!0,message:"H\xe3y nhập m\xe3 x\xe1c thực"}],children:(0,i.jsx)(x.Z.Password,{placeholder:"M\xe3 x\xe1c thực",type:"password",autoComplete:"off",size:"large",className:C().input})}),(0,i.jsxs)(f.Z.Item,{children:[(0,i.jsx)(p.ZP,{type:"primary",htmlType:"submit",className:C().button,size:"large",loading:t,disabled:t,style:{fontSize:"1.6rem"},children:"Tiếp tục"}),(0,i.jsx)(l.ZP,{theme:{token:{colorBgContainerDisabled:"rgba(0, 0, 0, 0.04)",colorTextDisabled:"rgba(0, 0, 0, 0.25)"}},children:(0,i.jsx)(p.ZP,{htmlType:"button",className:C().button,style:{height:"4.2rem"},disabled:t,onClick:()=>{e.turnOffForgotMode()},children:"Trở về đăng nhập"})})]})]})},S=e=>{let[t,s]=(0,r.useState)(!1),{error:n}=y.default,o=async t=>{s(!0);try{let i=await fetch("http://localhost:3000/api/v1/users/resetPassword/".concat(e.tokenReset),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!i.ok)throw s(!1),Error("Could not authenticate.");await i.json()}catch(e){s(!1),console.error(e)}};return(0,i.jsxs)(f.Z,{name:"reset",onFinish:o,children:[(0,i.jsx)(f.Z.Item,{name:"password",rules:[{required:!0,message:"H\xe3y nhập mật khẩu mới"}],children:(0,i.jsx)(x.Z.Password,{prefix:(0,i.jsx)(k.gMo,{}),placeholder:"Mật khẩu mới",type:"password",autoComplete:"off",size:"large"})}),(0,i.jsx)(f.Z.Item,{name:"passwordConfirm",dependencies:["password"],rules:[{required:!0,message:"H\xe3y nhập lại mật khẩu"},e=>{let{getFieldValue:t}=e;return{validator:(e,s)=>s&&t("password")!==s?Promise.reject(Error("Mật khẩu kh\xf4ng tr\xf9ng khớp")):Promise.resolve()}}],children:(0,i.jsx)(x.Z.Password,{prefix:(0,i.jsx)(k.gMo,{}),placeholder:"Nhập lại mật khẩu mới",type:"password",autoComplete:"off",size:"large"})}),(0,i.jsxs)(f.Z.Item,{children:[(0,i.jsx)(p.ZP,{type:"primary",htmlType:"submit",size:"large",loading:t,disabled:t,children:"Tiếp tục"}),(0,i.jsx)(l.ZP,{theme:{token:{colorBgContainerDisabled:"rgba(0, 0, 0, 0.04)",colorTextDisabled:"rgba(0, 0, 0, 0.25)"}},children:(0,i.jsx)(p.ZP,{htmlType:"button",style:{height:"4.2rem"},disabled:t,onClick:()=>{e.turnOffForgotMode()},children:"Trở về đăng nhập"})})]})]})};let P=[{title:"T\xecm kiếm",key:"find"},{title:"X\xe1c thực",key:"authenticate"},{title:"Đặt lại mật khẩu",key:"reset"}];var F=e=>{let[t,s]=(0,r.useState)(!0),[n,o]=(0,r.useState)(!1),[a,c]=(0,r.useState)(!1),[h,d]=(0,r.useState)(""),[m,u]=(0,r.useState)(0),[g,p]=(0,r.useState)("process"),[f,x]=y.default.useNotification(),j=(e,t)=>{f.error({message:e,description:t})},_=()=>{u(e=>e+1)},b=()=>{e.turnOffForgotMode()},k=P.map(e=>({key:e.key,title:e.title}));return(0,i.jsxs)("div",{className:C().reset,children:[x,(0,i.jsx)(Z.Z,{status:"process",progressDot:!0,size:"small",current:m,items:k}),(0,i.jsxs)("h1",{className:C().title,children:[t&&"H\xe3y bắt đầu bằng c\xe1ch t\xecm kiếm email của bạn",n&&"H\xe3y kiểm tra h\xf2m thư của bạn nh\xe9",a&&"Thiết lập lại mật khẩu"]}),(0,i.jsx)(l.ZP,{theme:{token:{colorBgContainer:"#F1F6F5",borderRadius:10,controlHeight:34,colorBgContainerDisabled:"#4096ff",colorTextDisabled:"#fff",colorErrorOutline:"none",controlOutline:"none"}},children:(0,i.jsxs)("div",{style:{width:"70%"},children:[t&&(0,i.jsx)(w,{turnOffForgotMode:b,setFindingEmail:s,setVerifying:o,next:_,openNotification:j,setStatus:p}),n&&(0,i.jsx)(T,{turnOffForgotMode:b,setVerifying:o,setResetting:c,next:_,openNotification:j,setTokenReset:d,setStatus:p}),a&&(0,i.jsx)(S,{turnOffForgotMode:b,tokenReset:h})]})})]})};let O=new Date().getFullYear();var M=()=>{let[e,t]=(0,r.useState)(!1);return(0,i.jsxs)("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[!e&&(0,i.jsx)(N,{turnOnForgotMode:()=>{t(!0)}}),e&&(0,i.jsx)(F,{turnOffForgotMode:()=>{t(!1)}}),(0,i.jsxs)("div",{className:g().copy,children:["\xa9 ",O," all right reserved"]})]})};s(1790);var E=()=>((0,r.useEffect)(()=>{document.title="Đăng nhập"},[]),(0,i.jsxs)(o.Z,{children:[(0,i.jsx)(n.Z,{lg:10,xs:0,children:(0,i.jsx)(m,{})}),(0,i.jsx)(n.Z,{lg:14,xs:24,children:(0,i.jsx)(M,{})})]}));function D(){return(0,i.jsx)(E,{})}},1790:function(){},4636:function(e){e.exports={copy:"AuthenticationForm_copy__QQGca"}},7602:function(e){e.exports={intro:"IntroCarousel_intro__jCt_c",title:"IntroCarousel_title__KeNsU",img:"IntroCarousel_img__ysiXB",logo:"IntroCarousel_logo__E8r_1",subtitle:"IntroCarousel_subtitle__Y_ZSc"}},2305:function(e){e.exports={form:"Login_form__7WFev",login:"Login_login__c5fry",title:"Login_title__cPbqC",icon:"Login_icon__Z1GdH",input:"Login_input__VJfS8",forgot:"Login_forgot__4NQDD",button:"Login_button__WDO6O"}},6813:function(e){e.exports={reset:"Reset_reset__wnes6",input:"Reset_input__HCu71",icon:"Reset_icon__oLfez",button:"Reset_button__tiwRw",title:"Reset_title__5W_2_"}}},function(e){e.O(0,[190,684,971,472,744],function(){return e(e.s=5473)}),_N_E=e.O()}]);