(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[5901],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return m},kt:function(){return u}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(t),u=o,f=d["".concat(p,".").concat(u)]||d[u]||c[u]||i;return t?a.createElement(f,r(r({ref:n},m),{},{components:t})):a.createElement(f,r({ref:n},m))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2272:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return r},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var a=t(2122),o=t(9756),i=(t(7294),t(3905)),r={title:"Manage X-Definition"},l={unversionedId:"platform-engineers/cue/definition-edit",id:"platform-engineers/cue/definition-edit",isDocsHomePage:!1,title:"Manage X-Definition",description:"In KubeVela CLI (>= v1.1.0), vela def command group provides a series of convenient definition writing tools. With these commands, users only need to write CUE files to generate and edit definitions, instead of composing Kubernetes YAML object with mixed CUE string.",source:"@site/docs/platform-engineers/cue/definition-edit.md",sourceDirName:"platform-engineers/cue",slug:"/platform-engineers/cue/definition-edit",permalink:"/docs/next/platform-engineers/cue/definition-edit",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/platform-engineers/cue/definition-edit.md",version:"current",lastUpdatedBy:"\u5929\u5143",lastUpdatedAt:1629518797,formattedLastUpdatedAt:"8/21/2021",frontMatter:{title:"Manage X-Definition"},sidebar:"docs",previous:{title:"CUE Basic",permalink:"/docs/next/platform-engineers/cue/basic"},next:{title:"CUE Advanced",permalink:"/docs/next/platform-engineers/cue/advanced"}},p=[{value:"init",id:"init",children:[]},{value:"vet",id:"vet",children:[]},{value:"render / apply",id:"render--apply",children:[]},{value:"get / list / edit / del",id:"get--list--edit--del",children:[]}],s={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In KubeVela CLI (>= v1.1.0), ",(0,i.kt)("inlineCode",{parentName:"p"},"vela def")," command group provides a series of convenient definition writing tools. With these commands, users only need to write CUE files to generate and edit definitions, instead of composing Kubernetes YAML object with mixed CUE string."),(0,i.kt)("h2",{id:"init"},"init"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"vela def init")," is a command that helps users bootstrap new definitions. To create an empty trait definition, run ",(0,i.kt)("inlineCode",{parentName:"p"},'vela def init my-trait -t trait --desc "My trait description."')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"my-trait": {\n        annotations: {}\n        attributes: {\n                appliesToWorkloads: []\n                conflictsWith: []\n                definitionRef:   ""\n                podDisruptive:   false\n                workloadRefPath: ""\n        }\n        description: "My trait description."\n        labels: {}\n        type: "trait"\n}\ntemplate: patch: {}\n')),(0,i.kt)("p",null,"Or you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"vela def init my-comp --interactive")," to initiate definitions interactively."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ vela def init my-comp --interactive\nPlease choose one definition type from the following values: component, trait, policy, workload, scope, workflow-step\n> Definition type: component\n> Definition description: My component definition.\nPlease enter the location the template YAML file to build definition. Leave it empty to generate default template.\n> Definition template filename: \nPlease enter the output location of the generated definition. Leave it empty to print definition to stdout.\n> Definition output filename: my-component.cue\nDefinition written to my-component.cue\n")),(0,i.kt)("p",null,"In addition, users can create definitions from existing YAML files. For example, if a user want to create a ComponentDefinition which is designed to generate a deployment, and this deployment has already been created elsewhere, he/she can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--template-yaml")," flag to complete the transformation. The YAML file is as below"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: hello-world\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app.kubernetes.io/name: hello-world\n  template:\n    metadata:\n      labels:\n        app.kubernetes.io/name: hello-world\n    spec:\n      containers:\n      - name: hello-world\n        image: somefive/hello-world\n        ports: \n        - name: http\n          containerPort: 80\n          protocol: TCP\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: hello-world-service\nspec:\n  selector:\n    app: hello-world\n  ports:\n  - name: http\n    protocol: TCP\n    port: 80\n    targetPort: 8080\n  type: LoadBalancer\n")),(0,i.kt)("p",null,"Running ",(0,i.kt)("inlineCode",{parentName:"p"},'vela def init my-comp -t component --desc "My component." --template-yaml ./my-deployment.yaml')," to get the CUE-format ComponentDefinition"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"my-comp": {\n        annotations: {}\n        attributes: workload: definition: {\n                apiVersion: "<change me> apps/v1"\n                kind:       "<change me> Deployment"\n        }\n        description: "My component."\n        labels: {}\n        type: "component"\n}\ntemplate: {\n        output: {\n                metadata: name: "hello-world"\n                spec: {\n                        replicas: 1\n                        selector: matchLabels: "app.kubernetes.io/name": "hello-world"\n                        template: {\n                                metadata: labels: "app.kubernetes.io/name": "hello-world"\n                                spec: containers: [{\n                                        name:  "hello-world"\n                                        image: "somefive/hello-world"\n                                        ports: [{\n                                                name:          "http"\n                                                containerPort: 80\n                                                protocol:      "TCP"\n                                        }]\n                                }]\n                        }\n                }\n                apiVersion: "apps/v1"\n                kind:       "Deployment"\n        }\n        outputs: "hello-world-service": {\n                metadata: name: "hello-world-service"\n                spec: {\n                        ports: [{\n                                name:       "http"\n                                protocol:   "TCP"\n                                port:       80\n                                targetPort: 8080\n                        }]\n                        selector: app: "hello-world"\n                        type: "LoadBalancer"\n                }\n                apiVersion: "v1"\n                kind:       "Service"\n        }\n        parameter: {}\n\n}\n')),(0,i.kt)("p",null,"Then the user can make further modifications based on the definition file above, like removing ",(0,i.kt)("em",{parentName:"p"},"\\<change me",">")," in ",(0,i.kt)("strong",{parentName:"p"},"workload.definition"),"\u3002"),(0,i.kt)("h2",{id:"vet"},"vet"),(0,i.kt)("p",null,"After initializing definition files, run ",(0,i.kt)("inlineCode",{parentName:"p"},"vela def vet my-comp.cue")," to validate if there are any syntax error in the definition file. It can be used to detect some simple errors such as missing brackets."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ vela def vet my-comp.cue\nValidation succeed.\n")),(0,i.kt)("h2",{id:"render--apply"},"render / apply"),(0,i.kt)("p",null,"After confirming the definition file has correct syntax. users can run  ",(0,i.kt)("inlineCode",{parentName:"p"},"vela def apply my-comp.cue --namespace my-namespace")," to apply this definition in the ",(0,i.kt)("inlineCode",{parentName:"p"},"my-namespace")," namespace\u3002If you want to check the transformed Kubernetes YAML file, ",(0,i.kt)("inlineCode",{parentName:"p"},"vela def apply my-comp.cue --dry-run")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"vela def render my-comp.cue -o my-comp.yaml")," can achieve that."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: ComponentDefinition\nmetadata:\n  annotations:\n    definition.oam.dev/description: My component.\n  labels: {}\n  name: my-comp\n  namespace: vela-system\nspec:\n  schematic:\n    cue:\n      template: |\n        output: {\n                metadata: name: "hello-world"\n                spec: {\n                        replicas: 1\n                        selector: matchLabels: "app.kubernetes.io/name": "hello-world"\n                        template: {\n                                metadata: labels: "app.kubernetes.io/name": "hello-world"\n                                spec: containers: [{\n                                        name:  "hello-world"\n                                        image: "somefive/hello-world"\n                                        ports: [{\n                                                name:          "http"\n                                                containerPort: 80\n                                                protocol:      "TCP"\n                                        }]\n                                }]\n                        }\n                }\n                apiVersion: "apps/v11"\n                kind:       "Deployment"\n        }\n        outputs: "hello-world-service": {\n                metadata: name: "hello-world-service"\n                spec: {\n                        ports: [{\n                                name:       "http"\n                                protocol:   "TCP"\n                                port:       80\n                                targetPort: 8080\n                        }]\n                        selector: app: "hello-world"\n                        type: "LoadBalancer"\n                }\n                apiVersion: "v1"\n                kind:       "Service"\n        }\n        parameter: {}\n  workload:\n    definition:\n      apiVersion: apps/v1\n      kind: Deployment\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ vela def apply my-comp.cue -n my-namespace\nComponentDefinition my-comp created in namespace my-namespace.\n")),(0,i.kt)("h2",{id:"get--list--edit--del"},"get / list / edit / del"),(0,i.kt)("p",null,"While you can use native kubectl tools to confirm the results of the apply command, as mentioned above, the YAML object mixed with raw CUE template string is complex. Using ",(0,i.kt)("inlineCode",{parentName:"p"},"vela def get")," will automatically convert the YAML object into the CUE-format definition."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ vela def get my-comp -t component\n")),(0,i.kt)("p",null,"Or you can list all defintions installed through ",(0,i.kt)("inlineCode",{parentName:"p"},"vela def list")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ vela def list -n my-namespace -t component\nNAME                    TYPE                    NAMESPACE       DESCRIPTION  \nmy-comp                 ComponentDefinition     my-namespace    My component.\n")),(0,i.kt)("p",null,"Similarly, using ",(0,i.kt)("inlineCode",{parentName:"p"},"vela def edit")," to edit definitions in pure CUE-format. The transformation between CUE-format definition and YAML object is done by the command. Besides, you can specify the ",(0,i.kt)("inlineCode",{parentName:"p"},"EDITOR")," environment variable to use your favourate editor."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ EDITOR=vim vela def edit my-comp\n")),(0,i.kt)("p",null,"Finally, ",(0,i.kt)("inlineCode",{parentName:"p"},"vela def del")," can be utilized to delete existing definitions."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ vela def del my-comp -n my-namespace  \nAre you sure to delete the following definition in namespace my-namespace?\nComponentDefinition my-comp: My component.\n[yes|no] > yes\nComponentDefinition my-comp in namespace my-namespace deleted.\n")))}m.isMDXComponent=!0}}]);