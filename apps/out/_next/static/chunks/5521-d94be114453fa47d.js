(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5521],{38790:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var r=n(57437),i=n(2265),o=n(8349),a=n(78740),c=n(82673),s=n(75393),l=n(75377),_=n(6371),h=n(68104),d=n(1342),g=n(12048),x=n(32011),u=n(930),m=n(18501),y=n(16691),f=n.n(y);function A(){return(0,r.jsxs)(x.Z.Row,{style:{width:"inherit"},gap:"10px",alignItems:"flex-end",children:[(0,r.jsx)(f(),{src:u.Z.src,width:40,height:40,alt:"Logo"}),(0,r.jsx)(m.Z.Div,{content:"Registry VN",fontWeight:"bold",size:"heading4",lineHeight:"small"})]})}var p=n(78582),T=n.n(p),H=n(24033);function b(e,t,n,r,i){return{key:t,icon:n,children:r,label:e,type:i}}function j(e){let{active:t,openMenu:n}=e,u=[b("Bảng điều khiển","dashboard",(0,r.jsx)(o.Z,{})),b("Quản l\xfd c\xe1c trung t\xe2m","center",(0,r.jsx)(a.Z,{})),b("Quản l\xfd phương tiện","carOpen",(0,r.jsx)(c.Z,{}),[b("Tra cứu phương tiện","car"),b("Tải l\xean dữ liệu","upload")]),b("Tra cứu đăng kiểm","inspection",(0,r.jsx)(s.Z,{})),b("Thống k\xea","statistic",(0,r.jsx)(l.Z,{})),b("T\xe0i khoản","setting",(0,r.jsx)(_.Z,{}),[b("C\xe0i đặt","setting/profile"),b("Đăng xuất","auth")])],m=["carOpen","accountOpen"],[y,f]=(0,i.useState)(!1),[p,j]=(0,i.useState)([n]),S=(0,H.useRouter)();return(0,r.jsxs)("div",{children:[(0,r.jsx)(h.Z,{title:"Tải l\xean dữ liệu xe đ\xe3 đăng k\xed",open:y,onOk:()=>{f(!1)},onCancel:()=>{f(!1)},footer:[],children:(0,r.jsx)(d.ZP,{status:"500",title:"500",subTitle:"Chức năng n\xe0y tạm thời bị kh\xf3a. Vui l\xf2ng thử lại sau.",style:{paddingBottom:0}})}),(0,r.jsxs)(x.Z.Col,{gap:"50px",style:{maxWidth:"256px"},children:[(0,r.jsx)("button",{className:T().button,children:(0,r.jsx)(A,{})}),(0,r.jsx)(g.Z,{defaultSelectedKeys:[t],onClick:e=>{let t=e.keyPath[0];if("upload"===e.keyPath[0]){f(!0);return}S.prefetch("/".concat(e.keyPath[0])),S.push("/".concat(e.keyPath[0])),"auth"===t&&localStorage.clear()},mode:"inline",openKeys:p,onOpenChange:e=>{let t=e.find(e=>-1===p.indexOf(e));t&&-1===m.indexOf(t)?j(e):j(t?[t]:[]),console.log(t+" "+e)},style:{width:256},items:u})]})]})}},32011:function(e,t,n){"use strict";var r=n(57437);function i(e){let{className:t,style:n,children:i,...o}=e;return(0,r.jsx)("div",{className:t,style:{...o,...n},children:i})}n(2265),t.Z={Row:function(e){return(0,r.jsx)(i,{display:"flex",flexDirection:"row",...e})},Col:function(e){return(0,r.jsx)(i,{display:"flex",flexDirection:"column",...e})},Cell:function(e){return(0,r.jsx)(i,{...e})}}},84503:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(57437),i=n(22876),o=n(39231),a=n(23172),c=n(79532),s={src:"/_next/static/media/search1.3bf40045.png"},l={src:"/_next/static/media/search3.478969e0.png"},_=n(25028),h={src:"/_next/static/media/car.ee5cf353.png"},d=n(37102),g=n(61396),x=n.n(g),u=e=>{let t="car"===e.search;return console.log(e.data.length),0!==e.searchText.trim().length?e.data.length>0?(0,r.jsx)(i.Z,{itemLayout:"horizontal",bordered:!0,dataSource:e.data,pagination:{align:"center",showSizeChanger:!1},style:{width:"100%",margin:"3rem auto",backgroundColor:"white"},renderItem:e=>(0,r.jsx)(i.Z.Item,{actions:[(0,r.jsx)(x(),{href:"/".concat(t?"car":"inspection","/").concat(e.car_id),children:"Xem chi tiết"})],children:(0,r.jsx)(i.Z.Item.Meta,{avatar:(0,r.jsx)(o.C,{src:t?h.src:d.Z.src,size:20}),title:t?e.number_plate:e.inspection_number,description:""!==e.car_id&&"#".concat(t?e.registration_number:e.inspection_id),style:{textAlign:"left"}})}),loading:e.loading}):(0,r.jsxs)(a.Z,{active:!0,title:!1,paragraph:{rows:10,width:"100%"},style:{margin:"4rem 0"},loading:e.loading,children:[(0,r.jsx)(c.Z,{src:_.Z,width:250,preview:!1,style:{margin:"4rem 0"}}),(0,r.jsx)("br",{}),(0,r.jsxs)("span",{children:['Kh\xf4ng c\xf3 kết quả cho "',e.searchText,'" !!!']})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("br",{}),(0,r.jsx)(c.Z,{src:t?s.src:l.src,width:250,style:{margin:"4rem 0"},preview:!1}),(0,r.jsx)("br",{}),(0,r.jsxs)("span",{style:{fontSize:"14px"},children:["Bắt đầu t\xecm kiếm ",t?"phương tiện":"đăng kiểm"," n\xe0o!"]})]})}},17696:function(e,t,n){"use strict";var r=n(57437),i=n(71144),o=n(20068),a=n(24033),c=n(2265);t.Z=e=>{let[t,n]=(0,c.useState)([]),s=(0,a.useRouter)(),[l,_]=(0,c.useState)(""),h="car"===e.search,d=e=>new Promise(t=>setTimeout(t,e));return(0,c.useEffect)(()=>{let e=async()=>{await d(100);try{let e=await fetch("".concat("http://fall2324w3g10.int3306.freeddns.org","/api/v1/").concat(h?"cars":"inspections","/search?").concat(h?"number_plate":"inspection_number","=").concat(l),{headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("accessToken")}});if(!e.ok)throw Error("Fail to get data");let t=await e.json(),r=[];t.data.forEach(e=>{r.push({label:h?e.number_plate:e.inspection_number,value:h?e.number_plate:e.inspection_number,id:h?e.car_id:e.inspection_id})}),n(r.slice(0,5))}catch(e){n([]),console.log(e)}};0===l.length?n([]):e()},[l]),(0,r.jsx)(i.Z,{style:{width:"100%",marginTop:"100px"},options:t,onSelect:(e,t)=>{s.push("/".concat(h?"car":"inspection","/").concat(t.id))},onChange:e=>_(e.trim()),children:(0,r.jsx)(o.Z.Search,{size:"large",placeholder:"Nhập ".concat("car"===e.search?"biển số xe":"số đăng kiểm"),onSearch:async()=>{if(e.setSearchText(l),n([]),l){e.setLoading(!0);try{let t=await fetch("".concat("http://fall2324w3g10.int3306.freeddns.org","/api/v1/").concat(h?"cars":"inspections","/search?").concat(h?"number_plate":"inspection_number","=").concat(l),{headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("accessToken")}});if(!t.ok)throw Error("Fail to fetch data to result");let n=await t.json();e.setData(n.data),e.setLoading(!1)}catch(t){e.setData([]),e.setLoading(!1),console.log(t)}}},enterButton:!0,allowClear:!0,style:{maxWidth:"100%"}})})}},18501:function(e,t,n){"use strict";var r=n(57437),i=n(54440),o=n.n(i),a=n(73015),c=n.n(a);let s={div:"",span:"",h1:c().asH1,h2:c().asH2,h3:c().asH3,h4:c().asH4,h5:c().asH5,h6:c().asH6},l={heading1:c().sizeHeading1,heading2:c().sizeHeading2,heading3:c().sizeHeading3,heading4:c().sizeHeading4,heading5:c().sizeHeading5,heading6:c().sizeHeading6,body:c().sizeBody,bodySmall:c().sizeBodySmall,bodyExtraSmall:c().sizeBodyExtraSmall,extraLarge:c().sizeExtraLarge,none:""},_={large:c().lineHeightLarge,medium:c().lineHeightMedium,small:c().lineHeightSmall,none:""},h={ink:c().colorInk,ink80:c().colorInk80,ink50:c().colorInk50,ink30:c().colorInk30,ink10:c().colorInk10,primary:c().colorPrimary,primary80:c().colorPrimary80,primary50:c().colorPrimary50,primary30:c().colorPrimary30,primary10:c().colorPrimary10,secondary:c().colorSecondary,secondary80:c().colorSecondary80,secondary50:c().colorSecondary50,secondary30:c().colorSecondary30,secondary10:c().colorSecondary10,white:c().colorWhite,white80:c().colorWhite80,white50:c().colorWhite50,white30:c().colorWhite30,white10:c().colorWhite10,grey:c().colorGrey,grey80:c().colorGrey80,grey50:c().colorGrey50,grey30:c().colorGrey30,grey10:c().colorGrey10,inherit:c().colorInherit,none:""},d={regular:c().fontWeightRegular,semibold:c().fontWeightSemibold,bold:c().fontWeightBold,black:c().fontWeightBlack,none:""},g={1:c().maxLines1,2:c().maxLines2,3:c().maxLines3,4:c().maxLines4,5:c().maxLines5,none:""};function x(e){let{className:t,style:n,as:i="div",content:a,children:x=a,size:u="body",lineHeight:m="none",color:y="ink",fontWeight:f="none",maxLines:A="none",...p}=e;return(0,r.jsx)("div",{className:o()(t,c().container),style:n,...p,children:(0,r.jsx)(i,{className:o()(s[i],l[u],_[m],h[y],d[f],g[A]),children:x})})}t.Z={Div:x,Span:function(e){let{className:t,style:n,as:i="span",content:a,children:g=a,size:x="none",lineHeight:u="none",color:m="none",fontWeight:y="none",...f}=e;return(0,r.jsx)(i,{className:o()(t,c().container,s[i],l[x],_[u],h[m],d[y]),style:n,...f,children:g})},H1:function(e){return(0,r.jsx)(x,{as:"h1",...e})},H2:function(e){return(0,r.jsx)(x,{as:"h2",...e})},H3:function(e){return(0,r.jsx)(x,{as:"h3",...e})},H4:function(e){return(0,r.jsx)(x,{as:"h4",...e})},H5:function(e){return(0,r.jsx)(x,{as:"h5",...e})},H6:function(e){return(0,r.jsx)(x,{as:"h6",...e})}}},78582:function(e){e.exports={button:"NavBar_button__wE8m5"}},73015:function(e){e.exports={container:"Text_container__jYyhq",asH1:"Text_asH1__t9TKS",asH2:"Text_asH2__TpFo5",asH3:"Text_asH3__zn_o2",asH4:"Text_asH4__cMaO_",asH5:"Text_asH5__PNa26",asH6:"Text_asH6__Jd5WP",sizeHeading1:"Text_sizeHeading1__46yiy",sizeHeading2:"Text_sizeHeading2__DIAE8",sizeHeading3:"Text_sizeHeading3__ADEer",sizeHeading4:"Text_sizeHeading4__Hmlp2",sizeHeading5:"Text_sizeHeading5__wdNxD",sizeHeading6:"Text_sizeHeading6___5T8_",sizeBody:"Text_sizeBody__TTGJU",sizeBodySmall:"Text_sizeBodySmall__OMLnU",sizeBodyExtraSmall:"Text_sizeBodyExtraSmall__C6a7I",sizeExtraLarge:"Text_sizeExtraLarge__PLB17",lineHeightLarge:"Text_lineHeightLarge__jQJSl",lineHeightMedium:"Text_lineHeightMedium__2HH4u",lineHeightSmall:"Text_lineHeightSmall__hGmCd",colorInk:"Text_colorInk__4lVlf",colorInk80:"Text_colorInk80__5KJ2t",colorInk50:"Text_colorInk50__wngEr",colorInk30:"Text_colorInk30__zZqt3",colorInk10:"Text_colorInk10__03oV8",colorPrimary:"Text_colorPrimary__ZqWrm",colorPrimary80:"Text_colorPrimary80__NC56I",colorPrimary50:"Text_colorPrimary50__vSiZb",colorPrimary30:"Text_colorPrimary30__rdvgx",colorPrimary10:"Text_colorPrimary10__dcaL2",colorSecondary:"Text_colorSecondary__sIw97",colorSecondary80:"Text_colorSecondary80__V3FHf",colorSecondary50:"Text_colorSecondary50__N32C8",colorSecondary30:"Text_colorSecondary30__qKqaL",colorSecondary10:"Text_colorSecondary10__sXKK6",colorWhite:"Text_colorWhite__30qqg",colorWhite80:"Text_colorWhite80__QbcH4",colorWhite50:"Text_colorWhite50__YP6S3",colorWhite30:"Text_colorWhite30__ZCNj0",colorWhite10:"Text_colorWhite10__5QhZX",colorGrey:"Text_colorGrey__MtJfX",colorGrey80:"Text_colorGrey80__nS8Fn",colorGrey50:"Text_colorGrey50__biXlP",colorGrey30:"Text_colorGrey30__ot2b3",colorGrey10:"Text_colorGrey10__VzFuB",colorInherit:"Text_colorInherit__Aek_x",fontWeightRegular:"Text_fontWeightRegular__5drCS",fontWeightSemibold:"Text_fontWeightSemibold__3Pcvr",fontWeightBold:"Text_fontWeightBold__UipBi",fontWeightBlack:"Text_fontWeightBlack__6ncM4",maxLines1:"Text_maxLines1__Gkc3l",maxLines2:"Text_maxLines2__Zx_DS",maxLines3:"Text_maxLines3__pry93",maxLines4:"Text_maxLines4__oKLUn",maxLines5:"Text_maxLines5__RMmKG"}},37102:function(e,t){"use strict";t.Z={src:"/_next/static/media/checked.1df2f380.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA8ElEQVR42mNgYNBkZIAA9ulTFi3be3jfn70H9/6eNGHOFAYQuHfzJjOInj1jycJDD/b/n/J+0t/pH6b/331x+//G4ropDFAgsffE3p9zP8z63/i8+d/8e3P/9V+e83/VmsW/GaBAdu+pPb9mf5z97+SjQ/9mnV30r/Ri/9/165f9Yfj3bBcLSMXChavXbrux5X/e+c5/ORe7/288ue5/d0PrMgYQuH0oqDwk3GrPhJb+tRu2rvi1YcuKX33NHYtADmf4f0ev788Zuf83lhhXMECAHMhNDDDw96zcxb97GfpB7B+317EwQMHF44dBvmMEAMfbeEGV0TUEAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},25028:function(e,t){"use strict";t.Z={src:"/_next/static/media/void.1de65ab5.svg",height:835,width:798,blurWidth:0,blurHeight:0}},930:function(e,t){"use strict";t.Z={src:"/_next/static/media/logo.cfa00cdd.png",height:256,width:256,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+AX1cXAOxpKT9fQAAABNrHgDdLE5YPzcsjgoH8gzOyZilAX9ycgCTjo4QpAAAI2QAAOy1vYSqMDUuNu3q4QD58bcAAQB3ciC67PWh/zA3Pu37BgAjMPf/Hh8E/wT98AL99sMAAZqFh9gu9P8nwFNa/w8KCwH44NYAWBrXAAsU+v6/uXWEAchjZdMXIxQsDOr7/fD19QEPDBL/5QbsA+rW2t9Hs78lAcxta/8AIf4ACeQNAJr8AgBf/fkAAyL3AP672vSZuNgtAayfof0bExb99gL99f0ICfsC+fgEB/b8Dd/h4fledG4oAWlmbfvl/fZ+7U5EkXj8BRCq+/Ty88LKWxb6AYmanJUkK61/wUDohZEAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}}}]);