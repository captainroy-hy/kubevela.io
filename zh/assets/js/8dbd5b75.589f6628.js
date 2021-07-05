(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[7414],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=i(n),d=o,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var i=2;i<a;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},57358:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return c}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),l={title:"\u4f7f\u7528 Cloud Volumes"},s={unversionedId:"end-user/traits/volumes",id:"end-user/traits/volumes",isDocsHomePage:!1,title:"\u4f7f\u7528 Cloud Volumes",description:"\u672c\u8282\u4ecb\u7ecd\u5982\u4f55\u5c06 Cloud Volumes \u9644\u52a0\u5230\u7ec4\u4ef6\u3002 \u4f8b\u5982\uff0cAWS ElasticBlockStore\u3001",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/end-user/traits/volumes.md",sourceDirName:"end-user/traits",slug:"/end-user/traits/volumes",permalink:"/zh/docs/next/end-user/traits/volumes",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/end-user/traits/volumes.md",version:"current",lastUpdatedBy:"\u5929\u5143",lastUpdatedAt:1625472226,formattedLastUpdatedAt:"2021/7/5",frontMatter:{title:"\u4f7f\u7528 Cloud Volumes"},sidebar:"docs",previous:{title:"\u4f7f\u7528 Sidecar",permalink:"/zh/docs/next/end-user/traits/sidecar"},next:{title:"\u4f7f\u7528 Service Binding",permalink:"/zh/docs/next/end-user/traits/service-binding"}},u=[],i={toc:u};function c(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u8282\u4ecb\u7ecd\u5982\u4f55\u5c06 Cloud Volumes \u9644\u52a0\u5230\u7ec4\u4ef6\u3002 \u4f8b\u5982\uff0cAWS ElasticBlockStore\u3001\nAzure Disk\u3001\u963f\u91cc\u4e91OSS\u7b49\u3002"),(0,a.kt)("p",null,"\u4e91\u5377\u4e0d\u662f KubeVela \u4e2d\u7684\u5185\u7f6e\u529f\u80fd\uff0c\u56e0\u6b64\u60a8\u9700\u8981\u5148\u542f\u7528\u8fd9\u4e9b\u7279\u6027\u3002 \u8ba9\u6211\u4eec\u4ee5 AWS EBS \u4e3a\u4f8b\u3002"),(0,a.kt)("p",null,"\u5b89\u88c5\u5e76\u68c0\u67e5 AWS EBS volume \u7279\u5f81\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"TraitDefinition"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/docs/examples/app-with-volumes/td-awsEBS.yaml\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl vela show aws-ebs-volume\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"+-----------+----------------------------------------------------------------+--------+----------+---------+\n|   NAME    |                          DESCRIPTION                           |  TYPE  | REQUIRED | DEFAULT |\n+-----------+----------------------------------------------------------------+--------+----------+---------+\n| name      | The name of volume.                                            | string | true     |         |\n| mountPath |                                                                | string | true     |         |\n| volumeID  | Unique id of the persistent disk resource.                     | string | true     |         |\n| fsType    | Filesystem type to mount.                                      | string | true     | ext4    |\n| partition | Partition on the disk to mount.                                | int    | false    |         |\n| readOnly  | ReadOnly here will force the ReadOnly setting in VolumeMounts. | bool   | true     | false   |\n+-----------+----------------------------------------------------------------+--------+----------+---------+\n")),(0,a.kt)("p",null,"\u7136\u540e\u6211\u4eec\u73b0\u5728\u53ef\u4ee5\u5c06\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"aws-ebs")," volume \u9644\u52a0\u5230\u4e00\u4e2a\u7ec4\u4ef6\u4e0a\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: app-worker\nspec:\n  components:\n    - name: myworker\n      type: worker\n      properties:\n        image: "busybox"\n        cmd:\n          - sleep\n          - "1000"\n      traits:\n        - type: aws-ebs-volume\n          properties:\n            name: "my-ebs"\n            mountPath: "/myebs"\n            volumeID: "my-ebs-id"\n')))}c.isMDXComponent=!0}}]);