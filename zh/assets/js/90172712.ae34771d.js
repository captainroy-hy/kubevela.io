(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[6888],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(t),d=o,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||a;return t?r.createElement(f,c(c({ref:n},p),{},{components:t})):r.createElement(f,c({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var l=2;l<a;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},43951:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return i},default:function(){return p}});var r=t(22122),o=t(19756),a=(t(67294),t(3905)),c={title:"\u4e91\u670d\u52a1"},s={unversionedId:"end-user/components/cloud-services",id:"end-user/components/cloud-services",isDocsHomePage:!1,title:"\u4e91\u670d\u52a1",description:"KubeVela \u5141\u8bb8\u4f60\u5728\u4e00\u81f4\u7684 API \u4e2d\u58f0\u660e\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u6240\u9700\u7684\u4e91\u670d\u52a1\u3002 \u76ee\u524d\uff0c\u6211\u4eec\u63a8\u8350\u4f7f\u7528 Terraform \u6765\u652f\u6301\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/end-user/components/cloud-services.md",sourceDirName:"end-user/components",slug:"/end-user/components/cloud-services",permalink:"/zh/docs/next/end-user/components/cloud-services",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/end-user/components/cloud-services.md",version:"current",lastUpdatedBy:"Wei (\u6bb5\u5c11)",lastUpdatedAt:1629449082,formattedLastUpdatedAt:"2021/8/20",frontMatter:{title:"\u4e91\u670d\u52a1"},sidebar:"docs",previous:{title:"CUE \u7ec4\u4ef6",permalink:"/zh/docs/next/end-user/components/cue"},next:{title:"\u914d\u7f6e\u7f51\u5173",permalink:"/zh/docs/next/end-user/traits/ingress"}},i=[{value:"Terraform",id:"terraform",children:[{value:"Alibaba Cloud RDS and OSS",id:"alibaba-cloud-rds-and-oss",children:[]}]}],l={toc:i};function p(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"KubeVela \u5141\u8bb8\u4f60\u5728\u4e00\u81f4\u7684 API \u4e2d\u58f0\u660e\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u6240\u9700\u7684\u4e91\u670d\u52a1\u3002 \u76ee\u524d\uff0c\u6211\u4eec\u63a8\u8350\u4f7f\u7528 Terraform \u6765\u652f\u6301\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u4f60\u5bf9 KubeVela \u4e2d\u5982\u4f55\u7ef4\u62a4\u8fd9\u4e9b\u529f\u80fd\u611f\u5174\u8da3\uff0c\u8bf7\u67e5\u770b ",(0,a.kt)("a",{parentName:"p",href:"../../platform-engineers/components/component-terraform"},"\u4e91\u670d\u52a1\u5e73\u53f0\u56e2\u961f\u6307\u5357"),"\u3002")),(0,a.kt)("p",null,"\u5e94\u7528\u90e8\u7f72\u8ba1\u5212\u5c06\u901a\u8fc7 ",(0,a.kt)("a",{parentName:"p",href:"../traits/service-binding"},"Service Binding Trait")," \u4f7f\u7528\u4e91\u670d\u52a1\u3002"),(0,a.kt)("h2",{id:"terraform"},"Terraform"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f \u672c\u8282\u5047\u8bbe ",(0,a.kt)("a",{parentName:"p",href:"../../platform-engineers/components/component-terraform"},"Terraform \u76f8\u5173\u529f\u80fd")," \u5df2\u5b89\u88c5\u5728\u4f60\u7684\u5e73\u53f0\u4e2d\u3002")),(0,a.kt)("p",null,"\u68c0\u67e5\u4e91\u8d44\u6e90 component \u548c trait \u7684\u53c2\u6570\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl vela show alibaba-rds\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"# Properties\n+----------------------------+-------------------------------------------------------------------------+-----------------------------------------------------------+----------+---------+\n|            NAME            |                               DESCRIPTION                               |                           TYPE                            | REQUIRED | DEFAULT |\n+----------------------------+-------------------------------------------------------------------------+-----------------------------------------------------------+----------+---------+\n| bucket                     | OSS bucket name                                                         | string                                                    | true     |         |\n| acl                        | OSS bucket ACL, supported 'private', 'public-read', 'public-read-write' | string                                                    | true     |         |\n| writeConnectionSecretToRef | The secret which the cloud resource connection will be written to       | [writeConnectionSecretToRef](#writeConnectionSecretToRef) | false    |         |\n+----------------------------+-------------------------------------------------------------------------+-----------------------------------------------------------+----------+---------+\n\n\n## writeConnectionSecretToRef\n+-----------+-----------------------------------------------------------------------------+--------+----------+---------+\n|   NAME    |                                 DESCRIPTION                                 |  TYPE  | REQUIRED | DEFAULT |\n+-----------+-----------------------------------------------------------------------------+--------+----------+---------+\n| name      | The secret name which the cloud resource connection will be written to      | string | true     |         |\n| namespace | The secret namespace which the cloud resource connection will be written to | string | false    |         |\n+-----------+-----------------------------------------------------------------------------+--------+----------+---------+\n\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl vela show service-binding\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"# Properties\n+-------------+------------------------------------------------+------------------+----------+---------+\n|    NAME     |                  DESCRIPTION                   |       TYPE       | REQUIRED | DEFAULT |\n+-------------+------------------------------------------------+------------------+----------+---------+\n| envMappings | The mapping of environment variables to secret | map[string]{...} | true     |         |\n+-------------+------------------------------------------------+------------------+----------+---------+\n")),(0,a.kt)("h3",{id:"alibaba-cloud-rds-and-oss"},"Alibaba Cloud RDS and OSS"),(0,a.kt)("p",null,"\u793a\u4f8b ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/tree/master/docs/examples/terraform/cloud-resource-provision-and-consume/application.yaml"},"application")," \u5982\u4e0b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: webapp\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      properties:\n        image: zzxwill/flask-web-application:v0.3.1-crossplane\n        ports: 80\n      traits:\n        - type: service-binding\n          properties:\n            envMappings:\n              # environments refer to db-conn secret\n              DB_PASSWORD:\n                secret: db-conn                                   # 1) If the env name is the same as the secret key, secret key can be omitted.\n              endpoint:\n                secret: db-conn\n                key: DB_HOST                                      # 2) If the env name is different from secret key, secret key has to be set.\n              username:\n                secret: db-conn\n                key: DB_USER\n              # environments refer to oss-conn secret\n              BUCKET_NAME:\n                secret: oss-conn\n\n    - name: sample-db\n      type: alibaba-rds\n      properties:\n        instance_name: sample-db\n        account_name: oamtest\n        password: U34rfwefwefffaked\n        writeConnectionSecretToRef:\n          name: db-conn\n\n    - name: sample-oss\n      type: alibaba-oss\n      properties:\n        bucket: vela-website\n        acl: private\n        writeConnectionSecretToRef:\n          name: oss-conn\n\n\n")))}p.isMDXComponent=!0}}]);