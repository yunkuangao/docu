# PaddleSpeech

```
docker run -it -p 8880-8889:8880-8889 --gpus all initialencounter/paddlespeech:ttsfinetune-latest /bin/bash
```
镜像集成了 jupyterlab，进入容器后，可通过以下命令开启服务。
```
jupyter lab --ip=0.0.0.0 --port=8880 --allow-root --notebook-dir=/home/aistudio
```

## Finetune 教程
参考自[【有手就行】使用自己的声音做语音合成](https://aistudio.baidu.com/aistudio/projectdetail/5003396)

- 1.将你的语音文件放到 work/init 目录下
    >可通过 docker cp 或者 scp 将你的语音文件放到这个目录
    >语音文件要求
    
- 2.开始训练
    - 对于萌新
        >直接运行```python main.py```
    - 有一定深度学习经验的朋友
        >可以编辑 main.py 里的代码
        >根据自己的需要来微调模型




## 同时支持将微调后的模型部署为 FastAPI

- 修改app.py文件
```shell
cd /home/aistudio/initialencunter/PaddleSpeech
```
```python
# 将 model 替换为你的exp_name
am_inference_dir = os.path.abspath("/home/aistudio/inferrence/init")
# 如果你的 exp_name 为 "demo"
# 则将代码修改为
am_inference_dir = os.path.abspath("/home/aistudio/inferrence/demo")
```
- 启动接口
```shell
python app.py
```


## 问题反馈
* QQ群：399899914

* 小伙伴如果遇到问题或者有新的想法，欢迎到[这里](https://github.com/initialencounter/mykoishi/issues)反馈哦~

语音文件要求
> 对于语音合成任务，对数据是有一定要求的，尽可能上传干净的人声数据，比如像示例中的人声数据，在安静环境下录制，录制设备无论是手机，电脑，还是别的设备都可以，注意一定要控制噪音，或者提前使用音频剪辑软件进行降噪。（一定要是中文数据，这个项目目前只支持中文数据！！其它语言预标注环节会出错！）
- 1.音频不要太长，也不要太短，2s~10s之间，音频太长会报错！
- 2.音频尽量是干净人声，不要有BGM，不要有比较大的杂音，不要有一些奇奇怪怪的声效，比如回声等
- 3.声音的情绪尽量稳定,以说话的语料为主，不要是『嗯』『啊』『哈』之类的语气词
- 4.音频数量大于5 条！！否则会报错！！
关于录音工具的选择：
你可以使用一些在线运行的录音工具或者 【Adobe Audition】，【Cool Edit Pro】, 【Audacity】 等录音软件录制音频，保存为 24000采样率的 Wav 格式
也可以通过手机录音后，使用格式工厂等格式转换软件，将手机录音转换成 Wav 格式后上传到这个项目中。