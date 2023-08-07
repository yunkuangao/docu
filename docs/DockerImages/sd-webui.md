# stable diffusion webui

# usage

```
docker run -it -d -p 7860:7860 --gpus all initialencounter/sd-webui:latest bash -c "bash start.sh"
```

如过你在宿主机上下载了模型可以使用以下命令，挂载目录到容器：

```
docker run -v 模型目录/models:/stable-diffusion-webui/models -it -d -p 7860:7860 --gpus all initialencounter/sd-webui:latest bash -c "bash start.sh"
```
