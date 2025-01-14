---
title:  内置工作流步骤
---

为了便于用户使用，KubeVela 提供了一些内置的工作流步骤。

## apply-application

### 简介

部署当前 Application 中的所有组件和运维特征。

### 参数

| 参数名 | 类型 | 说明 |
| :---: | :--: | :--: |
| - | - | - |

### 示例

```yaml
apiVersion: core.oam.dev/v1beta1
kind: Application
metadata:
  name: first-vela-workflow
  namespace: default
spec:
  components:
  - name: express-server
    type: webservice
    properties:
      image: crccheck/hello-world
      port: 8000
    traits:
    - type: ingress
      properties:
        domain: testsvc.example.com
        http:
          /: 8000
  workflow:
    steps:
      - name: express-server
        type: apply-application
```

## depends-on-app

### 简介

等待指定的 Application 完成。

### 参数

| 参数名 | 类型 | 说明 |
| :---: | :--: | :--: |
| name | string | 需要等待的 Application 名称 |
| namespace | string | 需要等待的 Application 所在的命名空间 |

### 示例

```yaml
apiVersion: core.oam.dev/v1beta1
kind: Application
metadata:
  name: first-vela-workflow
  namespace: default
spec:
  components:
  - name: express-server
    type: webservice
    properties:
      image: crccheck/hello-world
      port: 8000
    traits:
    - type: ingress
      properties:
        domain: testsvc.example.com
        http:
          /: 8000
  workflow:
    steps:
      - name: express-server
        type: depends-on-app
        properties:
          name: another-app
          namespace: default
```

## multi-env

### 简介

将 Application 在不同的环境和策略中部署。

### 参数

| 参数名 | 类型 | 说明 |
| :---: | :--: | :--: |
| policy | string | 需要关联的策略名 |
| env | string | 需要关联的环境名 |

### 示例

```yaml
apiVersion: core.oam.dev/v1beta1
kind: Application
metadata:
  name: multi-env-demo
  namespace: default
spec:
  components:
    - name: nginx-server
      type: webservice
      properties:
        image: nginx:1.21
        port: 80

  policies:
    - name: env
      type: env-binding
      properties:
        created: false
        envs:
          - name: test
            patch:
              components:
                - name: nginx-server
                  type: webservice
                  properties:
                    image: nginx:1.20
                    port: 80
            placement:
              namespaceSelector:
                name: test
          - name: prod
            patch:
              components:
                - name: nginx-server
                  type: webservice
                  properties:
                    image: nginx:1.20
                    port: 80
            placement:
              namespaceSelector:
                name: prod

  workflow:
    steps:
      - name: deploy-test-server
        type: multi-env
        properties:
          policy: env
          env: test
      - name: deploy-prod-server
        type: multi-env
        properties:
          policy: env
          env: prod
```

## webhook-notification

### 简介

向指定的 Webhook 发送信息。

### 参数

| 参数名 | 类型 | 说明 |
| :---: | :--: | :-- |
| slack | Object | 可选值，如果需要发送 Slack 信息，则需填写其 url 及 message |
| slack.url | String | 必填值，Slack 的 Webhook 地址 |
| slack.message | Object | 必填值，需要发送的 Slack 信息，请符合 [Slack 信息规范](https://api.slack.com/reference/messaging/payload) |
| dingding | Object | 可选值，如果需要发送钉钉信息，则需填写其 url 及 message |
| dingding.url | String | 必填值，钉钉的 Webhook 地址 |
| dingding.message | Object | 必填值，需要发送的钉钉信息，请符合 [钉钉信息规范](https://developers.dingtalk.com/document/robots/custom-robot-access/title-72m-8ag-pqw) |

### 示例

```yaml
apiVersion: core.oam.dev/v1beta1
kind: Application
metadata:
  name: first-vela-workflow
  namespace: default
spec:
  components:
  - name: express-server
    type: webservice
    properties:
      image: crccheck/hello-world
      port: 8000
    traits:
    - type: ingress
      properties:
        domain: testsvc.example.com
        http:
          /: 8000
  workflow:
    steps:
      - name: dingtalk-message
        type: webhook-notification
        properties:
          dingding:
            # 钉钉 Webhook 地址，请查看：https://developers.dingtalk.com/document/robots/custom-robot-access
            url: xxx
            message:
              msgtype: text
              text:
                context: 开始运行工作流
      - name: application
        type: apply-application
      - name: slack-message
        type: webhook-notification
        properties:
          slack:
            # Slack Webhook 地址，请查看：https://api.slack.com/messaging/webhooks
            url: xxx
            message:
              text: 工作流运行完成
```

## suspend

### 简介

暂停当前工作流，可以通过 `vela workflow resume appname` 继续已暂停的工作流。

> 有关于 `vela workflow` 命令的介绍，可以详见 [vela cli](../../cli/vela_workflow)。

### 参数

| 参数名 | 类型 | 说明 |
| :---: | :--: | :--: |
| - | - | - |

### 示例

```yaml
apiVersion: core.oam.dev/v1beta1
kind: Application
metadata:
  name: first-vela-workflow
  namespace: default
spec:
  components:
  - name: express-server
    type: webservice
    properties:
      image: crccheck/hello-world
      port: 8000
    traits:
    - type: ingress
      properties:
        domain: testsvc.example.com
        http:
          /: 8000
  workflow:
    steps:
      - name: slack-message
        type: webhook-notification
        properties:
          slack:
            # Slack Webhook 地址，请查看：https://api.slack.com/messaging/webhooks
            url: xxx
            message:
              text: 准备开始部署应用，请管理员审批并继续工作流
      - name: manual-approval
        type: suspend
      - name: express-server
        type: apply-application
```