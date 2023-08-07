# nonebot-plugin-puzzle
在QQ群玩数字华容道，基于nonebot框架的数字华容道插件，plugin of puzzle base on nonebot frame

原游戏[扫雷联萌](https://tapsss.com)


## 部署
`pip install nonebot-plugin-puzzle`
并在pyproject.toml#plugins中添加`nonebot_plugin_puzzle`或者
将nonebot_plugin_puzzle拷贝到bot根目录src/plugin下
在bot.py中添加如下代码
`nonebot.load_plugins('src/plugins/nonebot_plugin_puzzle')`

## 命令
|  方法  | 命令  |
|  ----  | ----  |
| 开始游戏  | puzzle\|pz\|华容道 |
| 自定义游戏 |def[数组]|
| 结束游戏  | pz结束\|def结束      |
| 显示排名  | rankpuzzle15 | 

## 示例

### 华容道图
![alt 华容道](https://gchat.qpic.cn/gchatpic_new/2743836019/3889899914-3062470892-8AC6759BA232E3E39A6D67575F80D98E/0?term=3&amp)

### 自定义
![alt 自定义](https://gchat.qpic.cn/gchatpic_new/2743836019/3889899914-2767912414-71B2F6BCEEFFCAD4967651D27558C1AB/0?term=3&amp)


## 联系作者
### QQ群399899914
