(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[39033],{35318:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(a),u=r,g=m["".concat(c,".").concat(u)]||m[u]||p[u]||o;return a?n.createElement(g,i(i({ref:t},d),{},{components:a})):n.createElement(g,i({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},13737:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var n=a(29603),r=a(50120),o=(a(27378),a(35318)),i={id:"imagebackground",title:"ImageBackground"},l=void 0,c={unversionedId:"imagebackground",id:"version-0.66/imagebackground",isDocsHomePage:!1,title:"ImageBackground",description:"A common feature request from developers familiar with the web is background-image. To handle this use case, you can use the ` component, which has the same props as `, and add whatever children to it you would like to layer on top of it.",source:"@site/versioned_docs/version-0.66/imagebackground.md",sourceDirName:".",slug:"/imagebackground",permalink:"/docs/imagebackground",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/imagebackground.md",tags:[],version:"0.66",frontMatter:{id:"imagebackground",title:"ImageBackground"},sidebar:"version-0.66/\u7ec4\u4ef6",previous:{title:"Image",permalink:"/docs/image"},next:{title:"KeyboardAvoidingView",permalink:"/docs/keyboardavoidingview"}},s=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"Props",id:"props",children:[{value:"Image Props",id:"image-props",children:[]},{value:"<code>imageStyle</code>",id:"imagestyle",children:[]},{value:"<code>imageRef</code>",id:"imageref",children:[]},{value:"<code>style</code>",id:"style",children:[]}]}],d={toc:s};function p(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A common feature request from developers familiar with the web is ",(0,o.kt)("inlineCode",{parentName:"p"},"background-image"),". To handle this use case, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"<ImageBackground>")," component, which has the same props as ",(0,o.kt)("inlineCode",{parentName:"p"},"<Image>"),", and add whatever children to it you would like to layer on top of it."),(0,o.kt)("p",null,"You might not want to use ",(0,o.kt)("inlineCode",{parentName:"p"},"<ImageBackground>")," in some cases, since the implementation is very simple. Refer to ",(0,o.kt)("inlineCode",{parentName:"p"},"<ImageBackground>"),"'s ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/react-native/blob/master/Libraries/Image/ImageBackground.js"},"source code")," for more insight, and create your own custom component when needed."),(0,o.kt)("p",null,"Note that you must specify some width and height style attributes."),(0,o.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("div",{className:"snack-player","data-snack-name":"ImageBackground","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20ImageBackground%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20image%20%3D%20%7B%20uri%3A%20%22https%3A%2F%2Fzh-hans.reactjs.org%2Flogo-og.png%22%20%7D%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20(%0A%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%3CImageBackground%20source%3D%7Bimage%7D%20style%3D%7Bstyles.image%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EInside%3C%2FText%3E%0A%20%20%20%20%3C%2FImageBackground%3E%0A%20%20%3C%2FView%3E%0A)%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20flexDirection%3A%20%22column%22%0A%20%20%7D%2C%0A%20%20image%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20resizeMode%3A%20%22cover%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20text%3A%20%7B%0A%20%20%20%20color%3A%20%22white%22%2C%0A%20%20%20%20fontSize%3A%2042%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%2C%0A%20%20%20%20textAlign%3A%20%22center%22%2C%0A%20%20%20%20background%3A%20%22%23000000a0%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),(0,o.kt)("hr",null),(0,o.kt)("h1",{id:"\u6587\u6863"},"\u6587\u6863"),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("h3",{id:"image-props"},(0,o.kt)("a",{parentName:"h3",href:"/docs/image#props"},"Image Props")),(0,o.kt)("h3",{id:"imagestyle"},(0,o.kt)("inlineCode",{parentName:"h3"},"imageStyle")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,o.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/image-style-props"},"image styles")),(0,o.kt)("td",{parentName:"tr",align:null},"\u5426")))),(0,o.kt)("h3",{id:"imageref"},(0,o.kt)("inlineCode",{parentName:"h3"},"imageRef")),(0,o.kt)("p",null,"Allows to set a reference to the inner ",(0,o.kt)("inlineCode",{parentName:"p"},"Image")," component"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,o.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://zh-hans.reactjs.org/docs/refs-and-the-dom.html"},"Ref")),(0,o.kt)("td",{parentName:"tr",align:null},"\u5426")))),(0,o.kt)("h3",{id:"style"},(0,o.kt)("inlineCode",{parentName:"h3"},"style")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/view-style-props"},"View Style"))))))}p.isMDXComponent=!0}}]);