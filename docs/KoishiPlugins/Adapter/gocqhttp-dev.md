# koishi-plugin-gocqhttp-dev
 
[![npm](https://img.shields.io/npm/v/koishi-plugin-gocqhttp-dev?style=flat-square)](https://www.npmjs.com/package/koishi-plugin-gocqhttp-dev)

适配 [signServer-v1.1.7](https://github.com/rhwong/go-cqhttp-dev/releases/tag/v1.1.1-dev)的 go-cqhttp 启动器

由于 go-cqhttp-dev 的 [releases](https://github.com/rhwong/go-cqhttp-dev/releases/tag/v1.1.1-dev) 中不存在 darwin, 目前只支持 windows 和 linux 平台

本插件抄自[koishi-plugin-gocqhttp](https://github.com/koishijs/koishi-plugin-gocqhttp)

部署 SignServer [点我](https://github.com/fuqiuluo/unidbg-fetch-qsign/wiki)

目前支持以下功能：

- [x] 扫描二维码登录
- [x] 手机短信验证码
- [x] captcha 图片
- [x] 滑条验证
- [x] 配置签名服务器
- [ ] 设置登录设备

## 安装

```sh
npm install koishi-plugin-gocqhttp-dev
```

## 使用方法

要使用此插件，需要完成这些配置：

```yaml
# 0. 启动 qsign, 这个插件，直至日志出现 `qsign 环境准备就绪！`
# koishi.yml
plugins:
  # 1. 添加这个插件
  gocqhttp:

  adapter-onebot:
    selfId: '123456789'
    protocol: ws-reverse
    # 2. 向机器人配置中添加 gocqhttp 属性
    # 未设置 enabled=true 的机器人不会创建子进程
    gocqhttp:
      enabled: true
      password: xxxxx
      # 3.设置 signServer
      signServer: http://127.0.0.1：8901
      # 4.设置 signServerKey
      signServerKey: '***'
```

## 问题反馈
* QQ群：399899914
* 小伙伴如果遇到问题或者有新的想法，欢迎到[这里](https://github.com/initialencounter/koishi-plugin-gocqhttp/issues)反馈哦~