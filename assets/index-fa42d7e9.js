var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=(t,r,n)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,l=(e,l)=>{for(var a in l||(l={}))r.call(l,a)&&o(e,a,l[a]);if(t)for(var a of t(l))n.call(l,a)&&o(e,a,l[a]);return e};import{d as a,r as i,bK as d,y as s,j as c,a as p}from"./index-26bed70f.js";import{P as f,f as u}from"./websiteSetting-27a29c49.js";import{r as b}from"./index-b55ce3dc.js";import{R as h}from"./index-c077d20b.js";import{S as g}from"./index-d346be7a.js";import"./pickAttrs-24beb854.js";var x={exports:{}};const y=a(x.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t){e.exports=i},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(2),l=(n=o)&&n.__esModule?n:{default:n};t.default=l.default},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(0),a=c(l),i=c(r(3)),d=c(r(4)),s=c(r(5));function c(e){return e&&e.__esModule?e:{default:e}}r(6);var p=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.handleExpand=r.handleExpand.bind(r),r.collapse=r.collapse.bind(r),r.toggleExpand=r.toggleExpand.bind(r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.expandAll,r=e.data;t&&this.toggleExpand(r,!0)}},{key:"componentWillUnmount",value:function(){}},{key:"handleExpand",value:function(e,t){"expand"in t?(t.expand=!t.expand,!t.expand&&t.children&&this.collapse(t.children),this.forceUpdate()):(t.expand=!0,this.forceUpdate())}},{key:"collapse",value:function(e){var t=this;e.forEach((function(e){e.expand&&(e.expand=!1),e.children&&t.collapse(e.children)}))}},{key:"toggleExpand",value:function(e,t){var r=this;Array.isArray(e)?e.forEach((function(e){e.expand=t,e.children&&r.toggleExpand(e.children,t)})):(e.expand=t,e.children&&r.toggleExpand(e.children,t)),this.forceUpdate()}},{key:"render",value:function(){var e=this,t=this.props,r=t.horizontal,o=t.node,l=t.data,i=t.onClick;return a.default.createElement("div",{className:"org-tree-container"},a.default.createElement("div",{className:(0,d.default)("org-tree",{horizontal:r})},a.default.createElement(s.default,n({data:l,node:o,onExpand:function(t,r){return e.handleExpand(t,r)},onClick:function(e,t){return i&&i(e,t)}},this.props))))}}]),t}(l.Component);p.propTypes={data:i.default.object,node:i.default.object,horizontal:i.default.bool,collapsable:i.default.bool,expandAll:i.default.bool,renderContent:i.default.func,labelWidth:i.default.number,labelClassName:i.default.string,onClick:i.default.func},p.defaultProps={node:{label:"label",expand:"expand",children:"children"},renderContent:function(e){return e.label}},t.default=p},function(e,t){e.exports=b()},function(e,t){e.exports=d()},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.render=t.renderChildren=t.renderLabel=t.renderBtn=t.renderNode=void 0;var n,o=r(0),l=(n=o)&&n.__esModule?n:{default:n},a=function(e,t){var r=t.node;return!(Array.isArray(e[r.children])&&e[r.children].length>0)},i=t.renderNode=function(e,t){var r=t.node,n=["org-tree-node"],o=[];return a(e,t)?n.push("is-leaf"):t.collapsable&&!e[r.expand]&&n.push("collapsed"),o.push(s(e,t)),t.collapsable&&!e[r.expand]||o.push(c(e.children,t)),l.default.createElement("div",{key:e.id,className:n.join(" ")},o)},d=t.renderBtn=function(e,t){var r=t.onExpand,n=t.node,o=["org-tree-node-btn"];return e[n.expand]&&o.push("expanded"),l.default.createElement("span",{key:e.id,className:o.join(" "),onClick:function(t){t.stopPropagation(),"function"==typeof r&&r(t,e)}})},s=t.renderLabel=function(e,t){var r=t.node,n=e[r.label],o=t.renderContent,i=t.onClick,s=[];if("function"==typeof o){var c=o(e);c&&s.push(c)}else s.push(n);t.collapsable&&!a(e,t)&&s.push(d(e,t));var p=["org-tree-node-label-inner"],f=t.labelWidth,u=t.labelClassName;return"number"==typeof f&&(f+="px"),u&&p.push(u),l.default.createElement("div",{key:"label_"+e.id,className:"org-tree-node-label",onClick:function(t){return"function"==typeof i&&i(t,e)}},[l.default.createElement("div",{key:"label_inner_"+e.id,className:p.join(" "),style:{width:f}},s)])},c=t.renderChildren=function(e,t){if(Array.isArray(e)&&e.length){var r=e.map((function(e){return i(e,t)}));return l.default.createElement("div",{key:"children_"+r[0].key,className:"org-tree-node-children"},r)}return""},p=t.render=function(e){return i(e.data,e)};t.default=p},function(e,t,r){var n=r(7);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(9)(n,o),n.locals&&(e.exports=n.locals)},function(e,t,r){(e.exports=r(8)(!1)).push([e.i,".org-tree-container{display:inline-block;padding:15px;background-color:#fff}.org-tree{display:table;text-align:center}.org-tree:before,.org-tree:after{content:'';display:table}.org-tree:after{clear:both}.org-tree-node,.org-tree-node-children{position:relative;margin:0;padding:0;list-style-type:none}.org-tree-node:before,.org-tree-node-children:before,.org-tree-node:after,.org-tree-node-children:after{transition:all 0.35s}.org-tree-node-label{position:relative;display:inline-block}.org-tree-node-label .org-tree-node-label-inner{padding:10px 15px;text-align:center;color:black;border-radius:3px;box-shadow:0 1px 5px rgba(0,0,0,0.15)}.org-tree-node-btn{position:absolute;top:100%;left:50%;width:20px;height:20px;z-index:10;margin-left:-11px;margin-top:9px;background-color:#fff;border:1px solid #ccc;border-radius:50%;box-shadow:0 0 2px rgba(0,0,0,0.15);cursor:pointer;transition:all 0.35s ease}.org-tree-node-btn:hover{background-color:#e7e8e9;transform:scale(1.15)}.org-tree-node-btn:before,.org-tree-node-btn:after{content:'';position:absolute}.org-tree-node-btn:before{top:50%;left:4px;right:4px;height:0;border-top:1px solid #ccc}.org-tree-node-btn:after{top:4px;left:50%;bottom:4px;width:0;border-left:1px solid #ccc}.org-tree-node-btn.expanded:after{border:none}.org-tree-node{padding-top:20px;display:table-cell;vertical-align:top}.org-tree-node.is-leaf,.org-tree-node.collapsed{padding-left:10px;padding-right:10px}.org-tree-node:before,.org-tree-node:after{content:'';position:absolute;top:0;left:0;width:50%;height:19px}.org-tree-node:after{left:50%;border-left:1px solid #ddd}.org-tree-node:not(:first-child):before,.org-tree-node:not(:last-child):after{border-top:1px solid #ddd}.collapsable .org-tree-node.collapsed{padding-bottom:30px}.collapsable .org-tree-node.collapsed .org-tree-node-label:after{content:'';position:absolute;top:100%;left:0;width:50%;height:20px;border-right:1px solid #ddd}.org-tree>.org-tree-node{padding-top:0}.org-tree>.org-tree-node:after{border-left:0}.org-tree-node-children{padding-top:20px;display:table}.org-tree-node-children:before{content:'';position:absolute;top:0;left:50%;width:0;height:20px;border-left:1px solid #ddd}.org-tree-node-children:after{content:'';display:table;clear:both}.horizontal .org-tree-node{display:table-cell;float:none;padding-top:0;padding-left:20px}.horizontal .org-tree-node.is-leaf,.horizontal .org-tree-node.collapsed{padding-top:10px;padding-bottom:10px}.horizontal .org-tree-node:before,.horizontal .org-tree-node:after{width:19px;height:50%}.horizontal .org-tree-node:after{top:50%;left:0;border-left:0}.horizontal .org-tree-node:only-child:before{top:1px;border-bottom:1px solid #ddd}.horizontal .org-tree-node:not(:first-child):before,.horizontal .org-tree-node:not(:last-child):after{border-top:0;border-left:1px solid #ddd}.horizontal .org-tree-node:not(:only-child):after{border-top:1px solid #ddd}.horizontal .org-tree-node .org-tree-node-inner{display:table}.horizontal .org-tree-node-label{display:table-cell;vertical-align:middle}.horizontal.collapsable .org-tree-node.collapsed{padding-right:30px}.horizontal.collapsable .org-tree-node.collapsed .org-tree-node-label:after{top:0;left:100%;width:20px;height:50%;border-right:0;border-bottom:1px solid #ddd}.horizontal .org-tree-node-btn{top:50%;left:100%;margin-top:-11px;margin-left:9px}.horizontal>.org-tree-node:only-child:before{border-bottom:0}.horizontal .org-tree-node-children{display:table-cell;padding-top:0;padding-left:20px}.horizontal .org-tree-node-children:before{top:50%;left:0;width:20px;height:0;border-left:0;border-top:1px solid #ddd}.horizontal .org-tree-node-children:after{display:none}.horizontal .org-tree-node-children>.org-tree-node{display:block}.text-center{text-align:center}.org-tree-node-label .org-tree-node-label-inner-blue{background:#1890ff;color:white}.org-tree-node-label .org-tree-node-label-inner-green{background:#52c41a;color:white}.org-tree-node-label .org-tree-node-label-inner-cyan{background:#13c2c2;color:white}.org-tree-node-label .org-tree-node-label-inner-pink{background:#eb2f96;color:white}.org-tree-node-label .org-tree-node-label-inner-orange{background:#fa8c16;color:white}.org-tree-node-label .org-tree-node-label-inner-yellow{background:#fadb14;color:white}.org-tree-node-label .org-tree-node-label-inner-gold{background:#faad14;color:white}.org-tree-node-label .org-tree-node-label-inner-red{background:#f5222d;color:white}\n",""])},function(e,t,r){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=function(e,t){var r,n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var l=(r=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),a=o.sources.map((function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"}));return[n].concat(a).concat([l]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r})).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},o=0;o<this.length;o++){var l=this[o][0];null!=l&&(n[l]=!0)}for(o=0;o<e.length;o++){var a=e[o];null!=a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),t.push(a))}},t}},function(e,t,r){var n,o,l={},a=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=n.apply(this,arguments)),o}),i=function(e,t){return t?t.querySelector(e):document.querySelector(e)},d=function(e){var t={};return function(e,r){if("function"==typeof e)return e();if(void 0===t[e]){var n=i.call(this,e,r);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(o){n=null}t[e]=n}return t[e]}}(),s=null,c=0,p=[],f=r(10);function u(e,t){for(var r=0;r<e.length;r++){var n=e[r],o=l[n.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](n.parts[a]);for(;a<n.parts.length;a++)o.parts.push(v(n.parts[a],t))}else{var i=[];for(a=0;a<n.parts.length;a++)i.push(v(n.parts[a],t));l[n.id]={id:n.id,refs:1,parts:i}}}}function b(e,t){for(var r=[],n={},o=0;o<e.length;o++){var l=e[o],a=t.base?l[0]+t.base:l[0],i={css:l[1],media:l[2],sourceMap:l[3]};n[a]?n[a].parts.push(i):r.push(n[a]={id:a,parts:[i]})}return r}function h(e,t){var r=d(e.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=p[p.length-1];if("top"===e.insertAt)n?n.nextSibling?r.insertBefore(t,n.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),p.push(t);else if("bottom"===e.insertAt)r.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=d(e.insertAt.before,r);r.insertBefore(t,o)}}function g(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=p.indexOf(e);t>=0&&p.splice(t,1)}function x(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var n=r.nc;n&&(e.attrs.nonce=n)}return y(t,e.attrs),h(e,t),t}function y(e,t){Object.keys(t).forEach((function(r){e.setAttribute(r,t[r])}))}function v(e,t){var r,n,o,l;if(t.transform&&e.css){if(!(l="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=l}if(t.singleton){var a=c++;r=s||(s=x(t)),n=j.bind(null,r,a,!1),o=j.bind(null,r,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",y(t,e.attrs),h(e,t),t}(t),n=E.bind(null,r,t),o=function(){g(r),r.href&&URL.revokeObjectURL(r.href)}):(r=x(t),n=k.bind(null,r),o=function(){g(r)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var r=b(e,t);return u(r,t),function(e){for(var n=[],o=0;o<r.length;o++){var a=r[o];(i=l[a.id]).refs--,n.push(i)}for(e&&u(b(e,t),t),o=0;o<n.length;o++){var i;if(0===(i=n[o]).refs){for(var d=0;d<i.parts.length;d++)i.parts[d]();delete l[i.id]}}}};var m,w=(m=[],function(e,t){return m[e]=t,m.filter(Boolean).join("\n")});function j(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=w(t,o);else{var l=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(l,a[t]):e.appendChild(l)}}function k(e,t){var r=t.css,n=t.media;if(n&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}function E(e,t,r){var n=r.css,o=r.sourceMap,l=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||l)&&(n=f(n)),o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([n],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(a),i&&URL.revokeObjectURL(i)}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var r=t.protocol+"//"+t.host,n=r+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,t){var o,l=t.trim().replace(/^"(.*)"$/,(function(e,t){return t})).replace(/^'(.*)'$/,(function(e,t){return t}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(l)?e:(o=0===l.indexOf("//")?l:0===l.indexOf("/")?r+l:n+l.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")}))}}])),v={id:1,label:"XXX科技有限公司",children:[{id:2,pid:1,label:"产品研发部",children:[{id:5,pid:2,label:"产品经理"},{id:6,pid:2,label:"UI设计"},{id:9,pid:2,label:"研发-前端"},{id:10,pid:2,label:"研发-后端"},{id:12,pid:2,label:"测试"}]},{id:3,pid:1,label:"销售部",children:[{id:7,pid:3,label:"销售一部",children:[{id:14,pid:7,label:"售前"},{id:15,pid:7,label:"售后"},{id:16,pid:7,label:"客服"}]},{id:8,pid:3,label:"销售二部"},{id:13,pid:3,label:"销售三部"}]},{id:4,pid:1,label:"财务部"},{id:11,pid:1,label:"HR人事"}]},m=()=>{const[e]=s.useForm(),[t,r]=i.useState({horizontal:!1,expandAll:!0});return c.jsx(f,{plugin:u,children:c.jsxs(p,{bordered:!1,bodyStyle:{minHeight:"400px"},children:[c.jsxs(s,{form:e,initialValues:l({},t),layout:"inline",labelAlign:"left",onValuesChange:e=>{r(l(l({},t),e))},children:[c.jsx(s.Item,{label:"排列方式：",name:"horizontal",children:c.jsxs(h.Group,{optionType:"button",buttonStyle:"solid",children:[c.jsx(h.Button,{value:!0,children:"水平"}),c.jsx(h.Button,{value:!1,children:"垂直"})]})}),c.jsx(s.Item,{label:"展开全部：",name:"expandAll",valuePropName:"checked",children:c.jsx(g,{})})]}),c.jsx("div",{style:{textAlign:"center"},children:c.jsx(y,{data:v,collapsable:!0,horizontal:t.horizontal,expandAll:t.expandAll})})]})})};export{m as default};
