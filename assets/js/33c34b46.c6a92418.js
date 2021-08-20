(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[3828],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return m}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),s=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return o.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return t?o.createElement(f,i(i({ref:n},c),{},{components:t})):o.createElement(f,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},59020:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var o=t(22122),r=t(19756),a=(t(67294),t(3905)),i={title:"Workflow"},l={unversionedId:"core-concepts/workflow",id:"core-concepts/workflow",isDocsHomePage:!1,title:"Workflow",description:"Workflow in KubeVela empowers users to glue any operational tasks to automate the delivery of applications to hybrid environments.",source:"@site/docs/core-concepts/workflow.md",sourceDirName:"core-concepts",slug:"/core-concepts/workflow",permalink:"/docs/next/core-concepts/workflow",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/core-concepts/workflow.md",version:"current",lastUpdatedBy:"Hongchao Deng",lastUpdatedAt:1629285729,formattedLastUpdatedAt:"8/18/2021",frontMatter:{title:"Workflow"},sidebar:"docs",previous:{title:"Application",permalink:"/docs/next/core-concepts/application"},next:{title:"Helm",permalink:"/docs/next/end-user/components/helm"}},p=[],s={toc:p};function c(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Workflow in KubeVela empowers users to glue any operational tasks to automate the delivery of applications to hybrid environments.\nIt is designed to customize the control logic -- not just blindly apply all resources, but provide more procedural flexiblity.\nThis provides solutions to build more complex operations, e.g. workflow suspend, approval gate, data flow, multi-stage rollout, A/B testing."),(0,a.kt)("p",null,"Workflow is modular by design.\nEach module is defined by a Definition CRD and exposed via K8s API.\nUnder the hood, it uses a powerful declarative language -- CUE as the superglue for your favourite tools and processes."),(0,a.kt)("p",null,"Here is an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nspec:\n  components:\n    - name: database\n      type: helm\n      properties:\n        repoUrl: chart-repo-url\n        chart: mysql\n\n    - name: web\n      type: helm\n      properties:\n        repoUrl: chart-repo-url\n        chart: my-web\n\n  # Deploy the database first and then the web component.\n  # In each step, it ensures the resource has been deployed successfully before jumping to next step.\n  # The connection information will be emitted as output from database and input for web component.\n  workflow:\n\n    # Workflow contains multiple steps and each step instantiates from a Definition.\n    # By running a workflow of an application, KubeVela will orchestrate the flow of data between steps.\n    steps:\n      - name: deploy-database\n        type: apply-and-wait\n        outputs:\n          - name: db-conn\n            exportKey: outConn\n        properties:\n          component: database\n          resourceType: StatefulSet\n          resourceAPIVersion: apps/v1beta2\n          names:\n            - mysql\n\n      - name: deploy-web\n        type: apply-and-wait\n        inputs:\n          - from: db-conn # input comes from the output from `deploy-database` step\n            parameterKey: dbConn\n        properties:\n          component: web\n          resourceType: Deployment\n          resourceAPIVersion: apps/v1\n          names:\n            - my-web\n\n---\napiVersion: core.oam.dev/v1beta1\nkind: WorkflowStepDefinition\nmetadata:\n  name: apply-and-wait\nspec:\n  schematic:\n    cue:\n      template: |\n        import (\n            "vela/op"\n        )\n        parameter: {\n          component: string\n          names: [...string]\n          resourceType: string\n          resourceAPIVersion: string\n          dbConn?: string\n        }\n        // apply the component\n        apply: op.#ApplyComponent & {\n          component: parameter.component\n          if dbConn != _|_ {\n            spec: containers: [{env: [{name: "DB_CONN",value: parameter.dbConn}]}]\n          }\n        }\n        // iterate through given resource names and wait for them\n        step: op.#Steps & {\n          for index, resource in parameter.names {\n            // read resource object\n            "resource-\\(index)": op.#Read & {\n              value: {\n                kind: parameter.resourceType\n                apiVersion: parameter.resourceAPIVersion\n                metadata: {\n                  name: resource\n                  namespace: context.namespace\n                }\n              }\n            }\n            // wait until resource object satisfy given condition.\n            "wait-\\(index)": op.#ConditionalWait & {\n              if step["resource-\\(index)"].workload.status.ready == "true" {\n                continue: true\n              }\n            }\n          }\n        }\n        outConn: apply.status.address.ip\n')),(0,a.kt)("p",null,"Here are more detailed explanation of the above example:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"There is a WorkflowStepDefinition that defines the templated operation process:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"It applies the specified component.\nIt uses the ",(0,a.kt)("inlineCode",{parentName:"li"},"op.#ApplyComponent")," action which applies all resources of a component."),(0,a.kt)("li",{parentName:"ul"},"It then waits all resources of given names to be ready.\nIt uses ",(0,a.kt)("inlineCode",{parentName:"li"},"op.#Read")," action which reads a resource into specified key,\nand then uses ",(0,a.kt)("inlineCode",{parentName:"li"},"op#ConditionalWait")," which waits until the ",(0,a.kt)("inlineCode",{parentName:"li"},"continue")," field becomes true."))),(0,a.kt)("li",{parentName:"ul"},"There is an Application that uses the predefined Definition to initiate delivery of two service components:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"It first does ",(0,a.kt)("inlineCode",{parentName:"li"},"apply-and-wait")," on ",(0,a.kt)("inlineCode",{parentName:"li"},"database")," component.\nThis will invoke the templated process as defined above with given properties."),(0,a.kt)("li",{parentName:"ul"},"Once the first step is finished, it outputs the value of the ",(0,a.kt)("inlineCode",{parentName:"li"},"outConn")," key to output named ",(0,a.kt)("inlineCode",{parentName:"li"},"db-conn"),",\nwhich basically means any steps can use the output ",(0,a.kt)("inlineCode",{parentName:"li"},"db-conn")," as input later."),(0,a.kt)("li",{parentName:"ul"},"The second step that takes an input ",(0,a.kt)("inlineCode",{parentName:"li"},"db-conn")," from previous output will\nget the value of ",(0,a.kt)("inlineCode",{parentName:"li"},"db-conn")," and fill it into the parameter key ",(0,a.kt)("inlineCode",{parentName:"li"},"dbConn"),"."),(0,a.kt)("li",{parentName:"ul"},"It then does ",(0,a.kt)("inlineCode",{parentName:"li"},"apply-and-wait")," on ",(0,a.kt)("inlineCode",{parentName:"li"},"web")," component.\nThis will invoke the same templated process as before except that this time the ",(0,a.kt)("inlineCode",{parentName:"li"},"dbConn")," field will have value.\nThis basically means the container env field will be rendered as well."),(0,a.kt)("li",{parentName:"ul"},"Once the second step is finished, the workflow will run to completion and stop.")))),(0,a.kt)("p",null,"So far we have introduced the basic concept of KubeVela Workflow. For next steps, you can:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../end-user/workflow/apply-component"},"Try out hands-on workflow scenarios"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../platform-engineers/workflow/steps"},"Read how to create your own Definition module"),". "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/oam-dev/kubevela/blob/master/design/vela-core/workflow_policy.md"},"Learn the design behind the workflow system"),".")))}c.isMDXComponent=!0}}]);