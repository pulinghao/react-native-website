(window.webpackJsonp=window.webpackJsonp||[]).push([[478],{560:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(8),i=(r(0),r(584)),o={id:"libraries",title:"\u4f7f\u7528\u7b2c\u4e09\u65b9\u5e93",author:"Brent Vatne",authorURL:"https://twitter.com/notbrent",description:"This guide introduces React Native developers to finding, installing, and using third-party libraries in their apps."},l={unversionedId:"libraries",id:"version-0.63/libraries",isDocsHomePage:!1,title:"\u4f7f\u7528\u7b2c\u4e09\u65b9\u5e93",description:"This guide introduces React Native developers to finding, installing, and using third-party libraries in their apps.",source:"@site/versioned_docs/version-0.63/libraries.md",slug:"/libraries",permalink:"/docs/0.63/libraries",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/versioned_docs/version-0.63/libraries.md",version:"0.63",lastUpdatedAt:1619689866,sidebar:"version-0.63/docs",previous:{title:"Testing",permalink:"/docs/0.63/testing-overview"},next:{title:"\u4f7f\u7528 TypeScript",permalink:"/docs/0.63/typescript"}},c=[{value:"\u9009\u62e9\u4e00\u4e2a\u5305\u7ba1\u7406\u5668",id:"\u9009\u62e9\u4e00\u4e2a\u5305\u7ba1\u7406\u5668",children:[]},{value:"\u5b89\u88c5\u7b2c\u4e09\u65b9\u5e93",id:"\u5b89\u88c5\u7b2c\u4e09\u65b9\u5e93",children:[]},{value:"\u94fe\u63a5 iOS \u539f\u751f\u4ee3\u7801",id:"\u94fe\u63a5-ios-\u539f\u751f\u4ee3\u7801",children:[]},{value:"\u94fe\u63a5 Android \u539f\u751f\u4ee3\u7801",id:"\u94fe\u63a5-android-\u539f\u751f\u4ee3\u7801",children:[]},{value:"\u641c\u7d22\u7b2c\u4e09\u65b9\u5e93",id:"\u641c\u7d22\u7b2c\u4e09\u65b9\u5e93",children:[]},{value:"\u5224\u65ad\u7b2c\u4e09\u65b9\u5e93\u7684\u517c\u5bb9\u6027",id:"\u5224\u65ad\u7b2c\u4e09\u65b9\u5e93\u7684\u517c\u5bb9\u6027",children:[{value:"\u5b83\u652f\u6301 React Native \u5417\uff1f",id:"\u5b83\u652f\u6301-react-native-\u5417\uff1f",children:[]},{value:"\u5b83\u652f\u6301\u67d0\u4e2a\u7cfb\u7edf\u5e73\u53f0\u5417\uff1f",id:"\u5b83\u652f\u6301\u67d0\u4e2a\u7cfb\u7edf\u5e73\u53f0\u5417\uff1f",children:[]},{value:"\u5b83\u652f\u6301\u6211\u7684 React Native \u7684\u7248\u672c\u5417?",id:"\u5b83\u652f\u6301\u6211\u7684-react-native-\u7684\u7248\u672c\u5417",children:[]}]}],s={toc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"React Native \u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u5185\u7f6e\u7684",Object(i.b)("a",{parentName:"p",href:"components-and-apis"},"\u6838\u5fc3\u7ec4\u4ef6\u548c API"),"\uff0c\u4f46\u5e76\u4e0d\u5c40\u9650\u4e8e\u6b64\u3002React Native \u6709\u4e00\u4e2a\u5e9e\u5927\u7684\u793e\u533a\uff0c\u5982\u679c\u6838\u5fc3\u7ec4\u4ef6\u548c API \u4e0d\u80fd\u6ee1\u8db3\u4f60\u7684\u9700\u6c42\uff0c\u4f60\u5b8c\u5168\u53ef\u4ee5\u53bb\u793e\u533a\u7684\u5e7f\u9614\u5929\u5730\u4e2d\u5bfb\u6c42\u5408\u9002\u7684\u7b2c\u4e09\u65b9\u5e93\u3002"),Object(i.b)("h2",{id:"\u9009\u62e9\u4e00\u4e2a\u5305\u7ba1\u7406\u5668"},"\u9009\u62e9\u4e00\u4e2a\u5305\u7ba1\u7406\u5668"),Object(i.b)("p",null,"React Native libraries are typically installed from the ",Object(i.b)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm registry")," using a Node.js package manager such as ",Object(i.b)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/npm"},"npm CLI")," or ",Object(i.b)("a",{parentName:"p",href:"https://classic.yarnpkg.com/en/"},"Yarn \u7ecf\u5178\u7248(v1)"),"."),Object(i.b)("p",null,"If you have Node.js installed on your computer then you already have the npm CLI installed. Some developers prefer to use Yarn Classic for slightly faster install times and additional advanced features like Workspaces. Both tools work great with React Native. We will assume npm for the rest of this guide for simplicity of explanation."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\ud83d\udca1 \u5728 JavaScript \u793e\u533a\uff0c\u201c\u5e93\uff08library\uff09\u201d\u548c\u201c\u5305\uff08package\uff09\u201d\u8fd9\u4e24\u4e2a\u672f\u8bed\u4e00\u76f4\u662f\u6df7\u7528\u7684\uff0c\u53ef\u89c6\u4e3a\u7b49\u540c\u3002")),Object(i.b)("h2",{id:"\u5b89\u88c5\u7b2c\u4e09\u65b9\u5e93"},"\u5b89\u88c5\u7b2c\u4e09\u65b9\u5e93"),Object(i.b)("p",null,"To install a library in your project, navigate to your project directory in your terminal and run ",Object(i.b)("inlineCode",{parentName:"p"},"npm install <name-of-the-library>"),". Let's try this with ",Object(i.b)("inlineCode",{parentName:"p"},"react-native-webview"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npm install react-native-webview\n")),Object(i.b)("p",null,"The library that we installed includes native code, and we need to link to our app before we use it."),Object(i.b)("h2",{id:"\u94fe\u63a5-ios-\u539f\u751f\u4ee3\u7801"},"\u94fe\u63a5 iOS \u539f\u751f\u4ee3\u7801"),Object(i.b)("p",null,"React Native uses CocoaPods to manage iOS project dependencies and most React Native libraries follow this same convention. If a library you are using does not, then please refer to their README for additional instruction. In most cases, the following instructions will apply."),Object(i.b)("p",null,"Run ",Object(i.b)("inlineCode",{parentName:"p"},"pod install")," in our ",Object(i.b)("inlineCode",{parentName:"p"},"ios")," directory in order to link it to our native iOS project. A shortcut for doing this without switching to the ",Object(i.b)("inlineCode",{parentName:"p"},"ios")," directory is to run ",Object(i.b)("inlineCode",{parentName:"p"},"npx pod-install"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npx pod-install\n")),Object(i.b)("p",null,"Once this is complete, re-build the app binary to start using your new library:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npx react-native run-ios\n")),Object(i.b)("h2",{id:"\u94fe\u63a5-android-\u539f\u751f\u4ee3\u7801"},"\u94fe\u63a5 Android \u539f\u751f\u4ee3\u7801"),Object(i.b)("p",null,"React Native uses Gradle to manage Android project dependencies. After you install a library with native dependencies, you will need to re-build the app binary to use your new library:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npx react-native run-android\n")),Object(i.b)("h2",{id:"\u641c\u7d22\u7b2c\u4e09\u65b9\u5e93"},"\u641c\u7d22\u7b2c\u4e09\u65b9\u5e93"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://reactnative.directory"},"React Native Directory")," is a searchable database of libraries built specifically for React Native. This is the first place to look for a library for your React Native app."),Object(i.b)("p",null,"Many of the libraries you will find on the directory are from ",Object(i.b)("a",{parentName:"p",href:"https://github.com/react-native-community/"},"React Native Community")," or ",Object(i.b)("a",{parentName:"p",href:"https://docs.expo.io/versions/latest/"},"Expo"),"."),Object(i.b)("p",null,"Libraries built by the React Native Community are driven by volunteers and individuals at companies that depend on React Native. They often support iOS, tvOS, Android, Windows, but this varies across projects. Many of the libraries in this organization were once React Native Core Components and APIs."),Object(i.b)("p",null,"Libraries built by Expo are all written in TypeScript and support iOS, Android, and react-native-web wherever possible. They usually require that you first install ",Object(i.b)("a",{parentName:"p",href:"https://github.com/expo/expo/tree/master/packages/react-native-unimodules"},"react-native-unimodules")," in order to use in your React Native app."),Object(i.b)("p",null,"After React Native Directory, the ",Object(i.b)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm registry")," is the next best place if you can't find a library specifically for React Native on the directory. The npm registry is the definitive source for JavaScript libraries, but the libraries that it lists may not all be compatible with React Native. React Native is one of many JavaScript programming environments, including Node.js, web browsers, Electron, and more, and npm includes libraries that work for all of these environments."),Object(i.b)("h2",{id:"\u5224\u65ad\u7b2c\u4e09\u65b9\u5e93\u7684\u517c\u5bb9\u6027"},"\u5224\u65ad\u7b2c\u4e09\u65b9\u5e93\u7684\u517c\u5bb9\u6027"),Object(i.b)("h3",{id:"\u5b83\u652f\u6301-react-native-\u5417\uff1f"},"\u5b83\u652f\u6301 React Native \u5417\uff1f"),Object(i.b)("p",null,"Usually libraries built ",Object(i.b)("em",{parentName:"p"},"specifically for other platforms")," will not work with React Native. Examples include ",Object(i.b)("inlineCode",{parentName:"p"},"react-select")," which is built for the web and specifically targets ",Object(i.b)("inlineCode",{parentName:"p"},"react-dom"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"rimraf")," which is built for Node.js and interacts with your computer file system. Other libraries like ",Object(i.b)("inlineCode",{parentName:"p"},"lodash")," use only JavaScript langauge features and work in any environment. You will gain a sense for this over time, but until then the easiest way to find out is to try it yourself. You can remove packages using ",Object(i.b)("inlineCode",{parentName:"p"},"npm uninstall")," if it turns out that it does not work in React Native."),Object(i.b)("h3",{id:"\u5b83\u652f\u6301\u67d0\u4e2a\u7cfb\u7edf\u5e73\u53f0\u5417\uff1f"},"\u5b83\u652f\u6301\u67d0\u4e2a\u7cfb\u7edf\u5e73\u53f0\u5417\uff1f"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://reactnative.directory/"},"React Native Directory")," allows you to filter by platform compatibility, such as iOS, Android, Web, and Windows. If the library you would like to use is not currently listed there, refer to the README for the library to learn more."),Object(i.b)("h3",{id:"\u5b83\u652f\u6301\u6211\u7684-react-native-\u7684\u7248\u672c\u5417"},"\u5b83\u652f\u6301\u6211\u7684 React Native \u7684\u7248\u672c\u5417?"),Object(i.b)("p",null,"The latest version of a library is typically compatible with the latest version of React Native. If you are using an older version, you should refer to the README to know which version of the library you should install. You can install a particular version of the library by running ",Object(i.b)("inlineCode",{parentName:"p"},"npm install <library-name>@<version-number>"),", for example: ",Object(i.b)("inlineCode",{parentName:"p"},"npm install @react-native-community/netinfo@^2.0.0"),"."),Object(i.b)("hr",null),Object(i.b)("h5",{id:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm9740-sunnylqm260"},"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",Object(i.b)("a",{parentName:"h5",href:"https://github.com/search?q=sunnylqm&type=Users"},"sunnylqm"),"(97.40%), ",Object(i.b)("a",{parentName:"h5",href:"https://github.com/search?q=sunnylqm&type=Users"},"sunnylqm"),"(2.60%)"))}p.isMDXComponent=!0},584:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(r),d=n,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return r?a.a.createElement(m,l(l({ref:t},s),{},{components:r})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);