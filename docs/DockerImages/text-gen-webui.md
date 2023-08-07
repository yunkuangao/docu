# text-gen-webui

## usage

```
docker run --gpus all -d -it -p 7860:7860 initialencounter/text-gen-webui:latest
```

## start
```
conda activate textgen; 
cd /text-generation-webui; 
python server.py --api --listen --listen-host "0.0.0.0" --listen-port 7860
```