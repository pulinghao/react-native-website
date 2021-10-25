(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[81068],{35318:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),s=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,k=u["".concat(d,".").concat(m)]||u[m]||c[m]||l;return r?n.createElement(k,o(o({ref:t},p),{},{components:r})):n.createElement(k,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},27803:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return d},toc:function(){return s},default:function(){return c}});var n=r(29603),a=r(50120),l=(r(27378),r(35318)),o={id:"progressbarandroid",title:"\ud83d\udea7 ProgressBarAndroid"},i=void 0,d={unversionedId:"progressbarandroid",id:"version-0.63/progressbarandroid",isDocsHomePage:!1,title:"\ud83d\udea7 ProgressBarAndroid",description:"\u5df2\u8fc7\u65f6\u3002 Use @react-native-community/progress-bar-android instead.",source:"@site/versioned_docs/version-0.63/progressbarandroid.md",sourceDirName:".",slug:"/progressbarandroid",permalink:"/docs/0.63/progressbarandroid",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/progressbarandroid.md",tags:[],version:"0.63",frontMatter:{id:"progressbarandroid",title:"\ud83d\udea7 ProgressBarAndroid"}},s=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"Props",id:"props",children:[{value:"<code>animating</code>",id:"animating",children:[]},{value:"<code>color</code>",id:"color",children:[]},{value:"<code>indeterminate</code>",id:"indeterminate",children:[]},{value:"<code>progress</code>",id:"progress",children:[]},{value:"<code>styleAttr</code>",id:"styleattr",children:[]},{value:"<code>testID</code>",id:"testid",children:[]}]}],p={toc:s};function c(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u5df2\u8fc7\u65f6\u3002")," Use ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/progress-bar-android"},"@react-native-community/progress-bar-android")," instead.")),(0,l.kt)("p",null,"\u5c01\u88c5\u4e86 Android \u5e73\u53f0\u4e0a\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"ProgressBar"),"\u7684 React \u7ec4\u4ef6\u3002\u8fd9\u4e2a\u7ec4\u4ef6\u53ef\u4ee5\u7528\u6765\u8868\u793a\u5e94\u7528\u6b63\u5728\u52a0\u8f7d\u6216\u8005\u6709\u4e9b\u4e8b\u60c5\u6b63\u5728\u8fdb\u884c\u4e2d\u3002"),(0,l.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("div",{className:"snack-player","data-snack-name":"ProgressBarAndroid","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7BView%2C%20StyleSheet%2C%20ProgressBarAndroid%2C%20Text%7D%20from%20'react-native'%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.example%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%3ECircle%20Progress%20Indicator%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CProgressBarAndroid%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.example%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%3EHorizontal%20Progress%20Indicator%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CProgressBarAndroid%20styleAttr%3D%22Horizontal%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.example%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%3EColored%20Progress%20Indicator%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CProgressBarAndroid%20styleAttr%3D%22Horizontal%22%20color%3D%22%232196F3%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.example%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%3EFixed%20Progress%20Value%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CProgressBarAndroid%0A%20%20%20%20%20%20%20%20%20%20styleAttr%3D%22Horizontal%22%0A%20%20%20%20%20%20%20%20%20%20indeterminate%3D%7Bfalse%7D%0A%20%20%20%20%20%20%20%20%20%20progress%3D%7B0.5%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%7D%2C%0A%20%20example%3A%20%7B%0A%20%20%20%20marginVertical%3A%2024%2C%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),(0,l.kt)("hr",null),(0,l.kt)("h1",{id:"\u6587\u6863"},"\u6587\u6863"),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("h3",{id:"animating"},(0,l.kt)("inlineCode",{parentName:"h3"},"animating")),(0,l.kt)("p",null,"\u662f\u5426\u663e\u793a\u8fdb\u5ea6\u6761\uff08\u9ed8\u8ba4\u4e3a true \u663e\u793a\uff09\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"color"},(0,l.kt)("inlineCode",{parentName:"h3"},"color")),(0,l.kt)("p",null,"\u8fdb\u5ea6\u6761\u7684\u989c\u8272\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/0.63/colors"},"color")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"indeterminate"},(0,l.kt)("inlineCode",{parentName:"h3"},"indeterminate")),(0,l.kt)("p",null,"\u51b3\u5b9a\u8fdb\u5ea6\u6761\u662f\u5426\u8981\u663e\u793a\u4e00\u4e2a\u4e0d\u786e\u5b9a\u7684\u8fdb\u5ea6\u3002\u6ce8\u610f\u8fd9\u4e2a\u5728 styleAttr \u662f Horizontal \u7684\u65f6\u5019\u5fc5\u987b\u662f false\uff0c\u5e76\u4e14\u9700\u8981\u8bbe\u7f6e",(0,l.kt)("inlineCode",{parentName:"p"},"progress"),"\u503c\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"indeterminateType"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"progress"},(0,l.kt)("inlineCode",{parentName:"h3"},"progress")),(0,l.kt)("p",null,"\u5f53\u524d\u7684\u8fdb\u5ea6\u503c\uff08\u5728 0 \u5230 1 \u4e4b\u95f4\uff09\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"styleattr"},(0,l.kt)("inlineCode",{parentName:"h3"},"styleAttr")),(0,l.kt)("p",null,"\u8fdb\u5ea6\u6761\u7684\u6837\u5f0f\u3002\u53ef\u53d6\u503c\u6709\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Horizontal"),(0,l.kt)("li",{parentName:"ul"},"Normal (default)"),(0,l.kt)("li",{parentName:"ul"},"Small"),(0,l.kt)("li",{parentName:"ul"},"Large"),(0,l.kt)("li",{parentName:"ul"},"Inverse"),(0,l.kt)("li",{parentName:"ul"},"SmallInverse"),(0,l.kt)("li",{parentName:"ul"},"LargeInverse")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enum('Horizontal', 'Normal', 'Small', 'Large', 'Inverse', 'SmallInverse', 'LargeInverse')"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"testid"},(0,l.kt)("inlineCode",{parentName:"h3"},"testID")),(0,l.kt)("p",null,"\u7528\u6765\u5728\u7aef\u5230\u7aef\u6d4b\u8bd5\u4e2d\u5b9a\u4f4d\u8fd9\u4e2a\u89c6\u56fe\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426")))),(0,l.kt)("hr",null),(0,l.kt)("h5",{id:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm10000"},"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",(0,l.kt)("a",{parentName:"h5",href:"https://github.com/search?q=sunnylqm&type=Users"},"sunnylqm"),"(100.00%)"))}c.isMDXComponent=!0}}]);