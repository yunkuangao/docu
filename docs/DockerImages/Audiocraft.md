# Audiocraft
Audiocraft是一个基于深度学习的音频处理和生成库。它具有最先进的编码器音频压缩器/标记器，以及MusicGen，一个简单而可控的音乐生成LM，具有文本和旋律调节。

Audiocraft is a library for audio processing and generation with deep learning. It features the state-of-the-art EnCodec audio compressor / tokenizer, along with MusicGen, a simple and controllable music generation LM with textual and melodic conditioning.


# usage

```
docker run -it -d -p 7862:7860 --gpus all initialencounter/audiocraft:latest bash -c "bash .start.sh"
```