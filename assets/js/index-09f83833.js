import{r,j as e,y as g,x as d,I as j,B as T,z as k}from"./index-791c0cb3.js";import{P as I,X as v}from"./websiteSetting-8ca4307a.js";import{u as E}from"./useExcel-da8a8bec.js";import{C as w}from"./index-c2cc2a77.js";import{S as C}from"./index-7d58505f.js";import{T as R}from"./Table-d35dc907.js";import{R as N}from"./index-47b566cc.js";import"./pickAttrs-1ad0bff6.js";import"./List-202fce49.js";import"./CheckOutlined-66e922b5.js";import"./DownOutlined-2561d0de.js";import"./iconUtil-dd43f931.js";import"./objectDestructuringEmpty-24e23e90.js";import"./useForceUpdate-8e1dde49.js";import"./index-c7238210.js";const P=[{key:1001,name:"张三",sex:"男",phone:15266001235,birth:"2002-05-06",education:"高中",hobby:"羽毛球、篮球、听歌、阅读",forbid:!1,editable:!0},{key:1002,name:"李四",sex:"男",phone:15266006621,birth:"1998-09-21",education:"初中",hobby:"乒乓球、排球、游泳",forbid:!0,editable:!1},{key:1003,name:"王五",sex:"男",phone:15264848125,birth:"1993-06-06",education:"本科",hobby:"旱冰、滑雪、跳高、打游戏",forbid:!1,editable:!1},{key:1004,name:"辛八",sex:"男",phone:15248491001,birth:"1995-08-03",education:"大专",hobby:"网球、篮球、跳伞",forbid:!0,editable:!1},{key:1005,name:"刘二",sex:"女",phone:15248411021,birth:"1999-11-05",education:"本科",hobby:"滑翔、游泳、篮球、看电影",forbid:!0,editable:!1},{key:1006,name:"赵七",sex:"男",phone:15298621500,birth:"2000-07-18",education:"大专",hobby:"游泳、篮球、潜水",forbid:!1,editable:!1},{key:1007,name:"杨一",sex:"女",phone:15267499461,birth:"1998-12-25",education:"高中",hobby:"冲浪、上网、看书、打游戏",forbid:!1,editable:!1}],O=W=>{const{Item:a}=d,{Group:c}=N,{exportDataToExcel:b}=E(),p={fileName:"",autoWidth:!0,fileType:"xlsx"},m=[{title:"编号",dataIndex:"key",align:"center"},{title:"姓名",dataIndex:"name",align:"center"},{title:"性别",dataIndex:"sex",align:"center"},{title:"手机",dataIndex:"phone",align:"center"},{title:"学历",dataIndex:"education",align:"center"},{title:"爱好",dataIndex:"hobby",align:"center"}],[h,i]=r.useState([]),[s,o]=r.useState([]);function x(t){i(t)}function u(t,l,n){o(n)}function f(t,l){o(l)}function y(t){if(console.log("values",t),!s.length){k.warning("请勾选要导出的数据项！");return}const{fileName:l,autoWidth:n,fileType:S}=t;b({data:s,header:["编号","姓名","性别","手机","学历","爱好"],key:["key","name","sex","phone","education","hobby"],fileName:l,autoWidth:n,bookType:S}),i([]),o([])}return e.jsx(I,{plugin:v,children:e.jsx(w,{bordered:!1,children:e.jsxs(g,{direction:"vertical",size:16,style:{width:"100%"},children:[e.jsxs(d,{layout:"inline",autoComplete:"off",initialValues:p,onFinish:y,children:[e.jsx(a,{label:"文件名:",name:"fileName",children:e.jsx(j,{placeholder:"文件名"})}),e.jsx(a,{label:"自动宽度:",name:"autoWidth",children:e.jsx(c,{options:[{label:"自动",value:!0},{label:"固定",value:!1}]})}),e.jsx(a,{label:"文件类型:",name:"fileType",children:e.jsx(C,{options:[{label:"xlsx",value:"xlsx"},{label:"csv",value:"csv"},{label:"txt",value:"txt"}],style:{width:"180px"}})}),e.jsx(a,{children:e.jsx(T,{type:"primary",htmlType:"submit",children:"导出Excel"})})]}),e.jsx(R,{dataSource:P,columns:m,rowSelection:{selectedRowKeys:h,onChange:x,onSelect:u,onSelectAll:f},pagination:!1})]})})})};export{O as default};
