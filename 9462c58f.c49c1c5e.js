(window.webpackJsonp=window.webpackJsonp||[]).push([[291],{381:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n(3),b=n(8),r=(n(0),n(584)),l={id:"viewpagerandroid",title:"\ud83d\udea7 ViewPagerAndroid"},c={unversionedId:"viewpagerandroid",id:"version-0.63/viewpagerandroid",isDocsHomePage:!1,title:"\ud83d\udea7 ViewPagerAndroid",description:"\u5df2\u8fc7\u65f6\u3002 Use @react-native-community/viewpager instead.",source:"@site/versioned_docs/version-0.63/viewpagerandroid.md",slug:"/viewpagerandroid",permalink:"/docs/0.63/viewpagerandroid",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/versioned_docs/version-0.63/viewpagerandroid.md",version:"0.63",lastUpdatedAt:1620208575},i=[{value:"Props",id:"props",children:[{value:"<code>initialPage</code>",id:"initialpage",children:[]},{value:"<code>keyboardDismissMode</code>",id:"keyboarddismissmode",children:[]},{value:"<code>onPageScroll</code>",id:"onpagescroll",children:[]},{value:"<code>onPageScrollStateChanged</code>",id:"onpagescrollstatechanged",children:[]},{value:"<code>onPageSelected</code>",id:"onpageselected",children:[]},{value:"<code>pageMargin</code>",id:"pagemargin",children:[]},{value:"<code>peekEnabled</code>",id:"peekenabled",children:[]},{value:"<code>scrollEnabled</code>",id:"scrollenabled",children:[]},{value:"<code>setPage</code>",id:"setpage",children:[]},{value:"<code>setPageWithoutAnimation</code>",id:"setpagewithoutanimation",children:[]}]},{value:"\u7c7b\u578b\u5b9a\u4e49",id:"\u7c7b\u578b\u5b9a\u4e49",children:[{value:"ViewPagerScrollState",id:"viewpagerscrollstate",children:[]}]}],o={toc:i};function p(e){var t=e.components,n=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"\u5df2\u8fc7\u65f6\u3002")," Use ",Object(r.b)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-viewpager"},"@react-native-community/viewpager")," instead.")),Object(r.b)("p",null,"\u4e00\u4e2a\u5141\u8bb8\u5728\u5b50\u89c6\u56fe\u4e4b\u95f4\u5de6\u53f3\u7ffb\u9875\u7684\u5bb9\u5668\u3002\u6bcf\u4e00\u4e2a ViewPagerAndroid \u7684\u5b50\u5bb9\u5668\u4f1a\u88ab\u89c6\u4f5c\u4e00\u4e2a\u5355\u72ec\u7684\u9875\uff0c\u5e76\u4e14\u4f1a\u88ab\u62c9\u4f38\u586b\u6ee1 ViewPagerAndroid\u3002"),Object(r.b)("p",null,"\u6ce8\u610f\u6240\u6709\u7684\u5b50\u89c6\u56fe\u90fd\u5fc5\u987b\u662f\u7eaf View\uff0c\u800c\u4e0d\u80fd\u662f\u81ea\u5b9a\u4e49\u7684\u590d\u5408\u5bb9\u5668\u3002\u4f60\u53ef\u4ee5\u7ed9\u6bcf\u4e2a\u5b50\u89c6\u56fe\u8bbe\u7f6e\u6837\u5f0f\u5c5e\u6027\u8b6c\u5982 padding \u6216 backgroundColor\u3002"),Object(r.b)("p",null,"\u4f8b\u5982:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'render() {\n  return (\n    <ViewPagerAndroid\n      style={styles.viewPager}\n      initialPage={0}>\n      <View style={styles.pageStyle} key="1">\n        <Text>First page</Text>\n      </View>\n      <View style={styles.pageStyle} key="2">\n        <Text>Second page</Text>\n      </View>\n    </ViewPagerAndroid>\n  );\n}\n\n...\n\nconst styles = {\n  ...\n  viewPager: {\n    flex: 1\n  },\n  pageStyle: {\n    alignItems: \'center\',\n    padding: 20,\n  }\n}\n')),Object(r.b)("hr",null),Object(r.b)("h1",{id:"\u6587\u6863"},"\u6587\u6863"),Object(r.b)("h2",{id:"props"},"Props"),Object(r.b)("h3",{id:"initialpage"},Object(r.b)("inlineCode",{parentName:"h3"},"initialPage")),Object(r.b)("p",null,"\u521d\u59cb\u9009\u4e2d\u7684\u9875\u7684\u4e0b\u6807\u3002\u4f60\u53ef\u4ee5\u7528 setPage \u51fd\u6570\u6765\u7ffb\u9875\uff0c\u5e76\u4e14\u7528 onPageSelected \u6765\u76d1\u542c\u9875\u7684\u53d8\u5316\u3002"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(r.b)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"number"),Object(r.b)("td",{parentName:"tr",align:null},"\u5426")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"keyboarddismissmode"},Object(r.b)("inlineCode",{parentName:"h3"},"keyboardDismissMode")),Object(r.b)("p",null,"\u51b3\u5b9a\u5728\u6ed1\u52a8\u7684\u65f6\u5019\u662f\u5426\u8981\u8ba9\u8f6f\u952e\u76d8\u6d88\u5931\u3002"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"none \uff08\u9ed8\u8ba4\u503c\uff09\uff0c\u62d6\u62fd\u4e0d\u4f1a\u8ba9\u952e\u76d8\u6d88\u5931\u3002"),Object(r.b)("li",{parentName:"ul"},"on-drag\uff0c \u5f53\u62d6\u62fd\u5f00\u59cb\u7684\u65f6\u5019\u4f1a\u8ba9\u952e\u76d8\u6d88\u5931\u3002")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(r.b)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"enum('none', 'on-drag')"),Object(r.b)("td",{parentName:"tr",align:null},"\u5426")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"onpagescroll"},Object(r.b)("inlineCode",{parentName:"h3"},"onPageScroll")),Object(r.b)("p",null,"\u5f53\u5728\u9875\u95f4\u5207\u6362\u65f6\uff08\u4e0d\u8bba\u662f\u7531\u4e8e\u52a8\u753b\u8fd8\u662f\u7531\u4e8e\u7528\u6237\u5728\u9875\u95f4\u6ed1\u52a8/\u62d6\u62fd\uff09\u6267\u884c\u3002"),Object(r.b)("p",null,"\u56de\u8c03\u53c2\u6570\u4e2d\u7684 event.nativeEvent \u5bf9\u8c61\u4f1a\u5305\u542b\u5982\u4e0b\u6570\u636e\uff1a"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"position \u4ece\u5de6\u6570\u8d77\u7b2c\u4e00\u4e2a\u5f53\u524d\u53ef\u89c1\u7684\u9875\u9762\u7684\u4e0b\u6807\u3002"),Object(r.b)("li",{parentName:"ul"},"offset \u4e00\u4e2a\u5728","[0,1]",'\u4e4b\u5185\u7684\u8303\u56f4(\u53ef\u4ee5\u7b49\u4e8e 0 \u6216 1)\uff0c\u4ee3\u8868\u5f53\u524d\u9875\u9762\u5207\u6362\u7684\u72b6\u6001\u3002\u503c x \u8868\u793a\u73b0\u5728"position"\u6240\u8868\u793a\u7684\u9875\u6709(1 - x)\u7684\u90e8\u5206\u53ef\u89c1\uff0c\u800c\u4e0b\u4e00\u9875\u6709 x \u7684\u90e8\u5206\u53ef\u89c1\u3002')),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(r.b)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"function"),Object(r.b)("td",{parentName:"tr",align:null},"\u5426")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"onpagescrollstatechanged"},Object(r.b)("inlineCode",{parentName:"h3"},"onPageScrollStateChanged")),Object(r.b)("p",null,"\u9875\u9762\u6ed1\u52a8\u72b6\u6001\u53d8\u5316\u65f6\u8c03\u7528\u6b64\u56de\u8c03\u51fd\u6570\u3002\u9875\u9762\u6ed1\u52a8\u72b6\u6001\u53ef\u80fd\u4e3a\u4ee5\u4e0b\u4e09\u79cd\u4e4b\u4e00\uff1a"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"idle \u7a7a\u95f2\uff0c\u610f\u5473\u7740\u5f53\u524d\u6ca1\u6709\u4ea4\u4e92\u3002"),Object(r.b)("li",{parentName:"ul"},"dragging \u62d6\u52a8\u4e2d\uff0c\u610f\u5473\u7740\u5f53\u524d\u9875\u9762\u6b63\u5728\u88ab\u62d6\u52a8\u3002"),Object(r.b)("li",{parentName:"ul"},"settling \u5904\u7406\u4e2d\uff0c\u610f\u5473\u7740\u5f53\u524d\u9875\u9762\u53d1\u751f\u8fc7\u4ea4\u4e92\uff0c\u4e14\u6b63\u5728\u7ed3\u675f\u5f00\u5934\u6216\u6536\u5c3e\u7684\u52a8\u753b\u3002")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(r.b)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"function"),Object(r.b)("td",{parentName:"tr",align:null},"\u5426")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"onpageselected"},Object(r.b)("inlineCode",{parentName:"h3"},"onPageSelected")),Object(r.b)("p",null,"\u8fd9\u4e2a\u56de\u8c03\u4f1a\u5728\u9875\u9762\u5207\u6362\u5b8c\u6210\u540e\uff08\u5f53\u7528\u6237\u5728\u9875\u9762\u95f4\u6ed1\u52a8\uff09\u8c03\u7528\u3002"),Object(r.b)("p",null,"\u56de\u8c03\u53c2\u6570\u4e2d\u7684 event.nativeEvent \u5bf9\u8c61\u4f1a\u5305\u542b\u5982\u4e0b\u7684\u5b57\u6bb5\uff1a"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"position \u5f53\u524d\u88ab\u9009\u4e2d\u7684\u9875\u9762\u4e0b\u6807")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(r.b)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"function"),Object(r.b)("td",{parentName:"tr",align:null},"\u5426")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"pagemargin"},Object(r.b)("inlineCode",{parentName:"h3"},"pageMargin")),Object(r.b)("p",null,"\u9875\u9762\u6ed1\u52a8\u65f6\u4e24\u4e2a\u9875\u9762\u4e4b\u95f4\u7684\u95f4\u8ddd\u3002\u4ec5\u4ec5\u5728\u6ed1\u52a8\u65f6\u53ef\u89c1\uff0c\u9875\u9762\u4e4b\u95f4\u4ecd\u7136\u65f6\u8fb9\u5bf9\u8fb9\u7684\u3002"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(r.b)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"number"),Object(r.b)("td",{parentName:"tr",align:null},"\u5426")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"peekenabled"},Object(r.b)("inlineCode",{parentName:"h3"},"peekEnabled")),Object(r.b)("p",null,"\u662f\u5426\u5728\u5f53\u524d\u9875\u6ed1\u52a8\u65f6\u5c55\u793a\u524d\u4e00\u9875\u6216\u8005\u540e\u4e00\u9875\uff0c\u9ed8\u8ba4\u4e3a false"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(r.b)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"bool"),Object(r.b)("td",{parentName:"tr",align:null},"\u5426")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"scrollenabled"},Object(r.b)("inlineCode",{parentName:"h3"},"scrollEnabled")),Object(r.b)("p",null,"\u8bbe\u4e3a false \u65f6\u53ef\u7981\u6b62\u6eda\u52a8\u3002\u9ed8\u8ba4\u503c\u4e3a true"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(r.b)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"bool"),Object(r.b)("td",{parentName:"tr",align:null},"\u5426")))),Object(r.b)("h3",{id:"setpage"},Object(r.b)("inlineCode",{parentName:"h3"},"setPage")),Object(r.b)("p",null,"A helper function to scroll to a specific page in the ViewPager. The transition between pages will be animated."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"position - index of page that will be selected")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(r.b)("th",{parentName:"tr",align:null},"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Number"),Object(r.b)("td",{parentName:"tr",align:null},"Yes")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"setpagewithoutanimation"},Object(r.b)("inlineCode",{parentName:"h3"},"setPageWithoutAnimation")),Object(r.b)("p",null,"A helper function to scroll to a specific page in the ViewPager. The transition between pages will ",Object(r.b)("em",{parentName:"p"},"not")," be animated."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"position - index of page that will be selected")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),Object(r.b)("th",{parentName:"tr",align:null},"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Number"),Object(r.b)("td",{parentName:"tr",align:null},"Yes")))),Object(r.b)("h2",{id:"\u7c7b\u578b\u5b9a\u4e49"},"\u7c7b\u578b\u5b9a\u4e49"),Object(r.b)("h3",{id:"viewpagerscrollstate"},"ViewPagerScrollState"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"\\$Enum")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u5e38\u91cf:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Value"),Object(r.b)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"idle"),Object(r.b)("td",{parentName:"tr",align:null})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"dragging"),Object(r.b)("td",{parentName:"tr",align:null})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"settling"),Object(r.b)("td",{parentName:"tr",align:null})))),Object(r.b)("hr",null),Object(r.b)("h5",{id:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm9333-yahoo007556-sunnylqm111"},"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",Object(r.b)("a",{parentName:"h5",href:"https://github.com/search?q=sunnylqm&type=Users"},"sunnylqm"),"(93.33%), ",Object(r.b)("a",{parentName:"h5",href:"https://github.com/search?q=yahoo.007&type=Users"},"yahoo.007"),"(5.56%), ",Object(r.b)("a",{parentName:"h5",href:"https://github.com/search?q=sunnylqm&type=Users"},"sunnylqm"),"(1.11%)"))}p.isMDXComponent=!0},584:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return j}));var a=n(0),b=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,b=function(e,t){if(null==e)return{};var n,a,b={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(b[n]=e[n]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(b[n]=e[n])}return b}var o=b.a.createContext({}),p=function(e){var t=b.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return b.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},O=b.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),d=p(n),O=a,j=d["".concat(l,".").concat(O)]||d[O]||u[O]||r;return n?b.a.createElement(j,c(c({ref:t},o),{},{components:n})):b.a.createElement(j,c({ref:t},o))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=O;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var o=2;o<r;o++)l[o]=n[o];return b.a.createElement.apply(null,l)}return b.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);