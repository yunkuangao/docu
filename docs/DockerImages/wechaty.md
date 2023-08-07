# wechaty

## 准备
* openai apikey
* 开通过微信支付的微信账号，（不开通微信支付可能会登不上）

## 步骤

- 1.启动容器
    - `docker run -p 5141:5140 initialencounter/koishi-wechaty:latest bash -c "cd /koimux_bot && yarn start"`
- 2.扫码
    - `docker logs 容器ID`或者直接登录koishi控制台
- 3.配置davinci-003
    - 输入key，启用插件

## 联系我
- qq群：399899914
- 哔哩哔哩：https://space.bilibili.com/225995995