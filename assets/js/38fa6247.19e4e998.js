(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[1363],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},37380:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i={title:"Overview"},l={unversionedId:"platform-engineers/cloud-services",id:"platform-engineers/cloud-services",isDocsHomePage:!1,title:"Overview",description:"Cloud services are important components of your application, and KubeVela allows you to provision and consume them in a consistent experience.",source:"@site/docs/platform-engineers/cloud-services.md",sourceDirName:"platform-engineers",slug:"/platform-engineers/cloud-services",permalink:"/docs/next/platform-engineers/cloud-services",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/platform-engineers/cloud-services.md",version:"current",lastUpdatedBy:"\u5929\u5143",lastUpdatedAt:1625472226,formattedLastUpdatedAt:"7/5/2021",frontMatter:{title:"Overview"},sidebar:"docs",previous:{title:"Attach Traits",permalink:"/docs/next/platform-engineers/kube/trait"},next:{title:"Terraform",permalink:"/docs/next/platform-engineers/terraform"}},c=[{value:"How Does KubeVela Manage Cloud Services?",id:"how-does-kubevela-manage-cloud-services",children:[]},{value:"Does KubeVela Talk to the Clouds?",id:"does-kubevela-talk-to-the-clouds",children:[]},{value:"Can a Instance of Cloud Services be Shared by Multiple Applications?",id:"can-a-instance-of-cloud-services-be-shared-by-multiple-applications",children:[]}],s={toc:c};function u(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Cloud services are important components of your application, and KubeVela allows you to provision and consume them in a consistent experience."),(0,a.kt)("h2",{id:"how-does-kubevela-manage-cloud-services"},"How Does KubeVela Manage Cloud Services?"),(0,a.kt)("p",null,"In KubeVela, the needed cloud services are claimed as ",(0,a.kt)("em",{parentName:"p"},"components")," in an application, and consumed via ",(0,a.kt)("em",{parentName:"p"},"Service Binding Trait")," by other components."),(0,a.kt)("h2",{id:"does-kubevela-talk-to-the-clouds"},"Does KubeVela Talk to the Clouds?"),(0,a.kt)("p",null,"KubeVela relies on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/terraform-controller"},"Terraform Controller")," or ",(0,a.kt)("a",{parentName:"p",href:"http://crossplane.io/"},"Crossplane")," as providers to talk to the clouds. Please check the documentations below for detailed steps."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./terraform"},"Terraform")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./crossplane"},"Crossplane"))),(0,a.kt)("h2",{id:"can-a-instance-of-cloud-services-be-shared-by-multiple-applications"},"Can a Instance of Cloud Services be Shared by Multiple Applications?"),(0,a.kt)("p",null,"Yes. Though we currently defer this to providers so by default the cloud service instances are not shared and dedicated per ",(0,a.kt)("inlineCode",{parentName:"p"},"Application"),". A workaround for now is you could use a separate ",(0,a.kt)("inlineCode",{parentName:"p"},"Application")," to declare the cloud service only, then other ",(0,a.kt)("inlineCode",{parentName:"p"},"Application")," can consume it via service binding trait in a shared approach."),(0,a.kt)("p",null,"In the future, we are considering making this part as a standard feature of KubeVela so you could claim whether a given cloud service component should be shared or not."))}u.isMDXComponent=!0}}]);