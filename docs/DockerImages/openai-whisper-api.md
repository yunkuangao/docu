# openai-whisper-api

将请求的格式改为base64

适用于koishi-plugin-whisper-asr [![npm](https://img.shields.io/npm/v/koishi-plugin-whisper-asr?style=flat-square)](https://www.npmjs.com/package/koishi-plugin-whisper-asr)

搭配[adapter-wechaty](https://www.npmjs.com/package/@initencounter/koishi-plugin-adapter-wechaty)及[![npm](https://img.shields.io/npm/v/koishi-plugin-davinci-003?style=flat-square)](https://www.npmjs.com/package/koishi-plugin-davinci-003)可以在微信搭建语音回复的ChatGPT机器人

部署方法
```
docker run -d --gpus all -p 9000:9000 -e ASR_MODEL=base -e ASR_ENGINE=openai_whisper initialencounter/openai-whisper-asr-webservice:latest-gpu
```