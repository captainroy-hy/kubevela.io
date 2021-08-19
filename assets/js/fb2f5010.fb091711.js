(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[3820],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return i},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,l(l({ref:t},i),{},{components:n})):a.createElement(h,l({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98218:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return i}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),l={title:"Aggregated Health Probe"},p={unversionedId:"end-user/debug/health",id:"end-user/debug/health",isDocsHomePage:!1,title:"Aggregated Health Probe",description:"The HealthyScope allows you to define an aggregated health probe for all components in same application.",source:"@site/docs/end-user/debug/health.md",sourceDirName:"end-user/debug",slug:"/end-user/debug/health",permalink:"/docs/next/end-user/debug/health",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/end-user/debug/health.md",version:"current",lastUpdatedBy:"Wei (\u6bb5\u5c11)",lastUpdatedAt:1627555412,formattedLastUpdatedAt:"7/29/2021",frontMatter:{title:"Aggregated Health Probe"},sidebar:"docs",previous:{title:"Observability",permalink:"/docs/next/end-user/addons/observability"},next:{title:"Monitoring",permalink:"/docs/next/end-user/debug/monitoring"}},s=[],c={toc:s};function i(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"HealthyScope")," allows you to define an aggregated health probe for all components in same application."),(0,o.kt)("p",null,"1.Create health scope instance."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1alpha2\nkind: HealthScope\nmetadata:\n  name: health-check\n  namespace: default\nspec:\n  probe-interval: 60\n  workloadRefs:\n  - apiVersion: apps/v1\n    kind: Deployment\n    name: express-server\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Create an application that drops in this health scope.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: vela-app\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      properties:\n        image: crccheck/hello-world\n        port: 8080 # change port\n        cpu: 0.5 # add requests cpu units\n      scopes:\n        healthscopes.core.oam.dev: health-check\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Check the reference of the aggregated health probe (",(0,o.kt)("inlineCode",{parentName:"li"},"status.service.scopes"),").")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get app vela-app -o yaml\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: vela-app\n...\nstatus:\n...\n  services:\n   - healthy: true\n     name: express-server\n     scopes:\n       - apiVersion: core.oam.dev/v1alpha2\n         kind: HealthScope\n         name: health-check\n")),(0,o.kt)("p",null,"4.Check health scope detail."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get healthscope health-check -o yaml\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1alpha2\nkind: HealthScope\nmetadata:\n  name: health-check\n...\nspec:\n  probe-interval: 60\n  workloadRefs:\n    - apiVersion: apps/v1\n      kind: Deployment\n      name: express-server\nstatus:\n  healthConditions:\n    - componentName: express-server\n      diagnosis: 'Ready:1/1 '\n      healthStatus: HEALTHY\n      targetWorkload:\n        apiVersion: apps/v1\n        kind: Deployment\n        name: express-server\n  scopeHealthCondition:\n    healthStatus: HEALTHY\n    healthyWorkloads: 1\n    total: 1\n")),(0,o.kt)("p",null,"It shows the aggregated health status for all components in this application."))}i.isMDXComponent=!0}}]);