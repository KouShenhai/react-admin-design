var e=Object.defineProperty,t=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,l=(t,s,r)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[s]=r,a=(e,a)=>{for(var i in a||(a={}))s.call(a,i)&&l(e,i,a[i]);if(t)for(var i of t(a))r.call(a,i)&&l(e,i,a[i]);return e};import{y as i,r as n,z as x,j as d,R as o,C as m,a as c,A as p,I as h,E as j,B as f}from"./index-26bed70f.js";import{P as y,C as b}from"./websiteSetting-27a29c49.js";import{I as u}from"./index-a57acf76.js";import"./DownOutlined-5baf3412.js";const g=()=>{const[e]=i.useForm(),[t,s]=n.useState({start:0,end:2020,duration:4,decimals:0,separator:",",prefix:"￥ ",suffix:" rmb"}),r=n.useRef(null),{start:l,reset:g}=x(a({ref:r},t));n.useEffect((()=>{g()}),[]);return d.jsx(y,{plugin:b,children:d.jsxs(o,{gutter:12,children:[d.jsx(m,{span:6,children:d.jsx(c,{title:"正向增加",bordered:!1,bodyStyle:{height:"300px"},children:d.jsx(p,{start:0,end:2020,duration:4,style:{height:"100%",fontSize:"40px",color:"#e65d6e"},className:"flex-center"})})}),d.jsx(m,{span:12,children:d.jsxs(c,{title:"自定义配置",bordered:!1,bodyStyle:{height:"300px"},children:[d.jsx("div",{className:"flex-center",style:{marginBottom:"30px"},children:d.jsx("span",{ref:r,style:{fontSize:"40px",color:"#e65d6e"}})}),d.jsxs(i,{form:e,initialValues:a({},t),layout:"inline",labelAlign:"left",labelCol:{style:{width:"80px",marginBottom:"12px"}},onValuesChange:e=>{s(a(a({},t),e))},children:[d.jsx(i.Item,{label:"startVal:",name:"start",children:d.jsx(u,{min:0,max:1e4,style:{width:"100px"}})}),d.jsx(i.Item,{label:"endVal:",name:"end",children:d.jsx(u,{min:0,max:1e4,style:{width:"100px"}})}),d.jsx(i.Item,{label:"duration:",name:"duration",children:d.jsx(u,{min:1,max:100,style:{width:"100px"}})}),d.jsx(i.Item,{label:"decimals:",name:"decimals",children:d.jsx(u,{min:0,max:100,style:{width:"100px"}})}),d.jsx(i.Item,{label:"separator:",name:"separator",children:d.jsx(h,{style:{width:"100px"}})}),d.jsx(i.Item,{label:"prefix:",name:"prefix",children:d.jsx(h,{style:{width:"100px"}})}),d.jsx(i.Item,{label:"suffix:",name:"suffix",children:d.jsx(h,{style:{width:"100px"}})}),d.jsx(i.Item,{children:d.jsxs(j,{children:[d.jsx(f,{type:"primary",onClick:l,children:"开始"}),d.jsx(f,{type:"primary",danger:!0,onClick:g,children:"重置"})]})})]})]})}),d.jsx(m,{span:6,children:d.jsx(c,{title:"反向减少",bordered:!1,bodyStyle:{height:"300px"},children:d.jsx(p,{start:2020,end:0,duration:4,style:{height:"100%",fontSize:"40px",color:"#30b08f"},className:"flex-center"})})})]})})};export{g as default};
