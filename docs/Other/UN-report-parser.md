# UN_report_parse

解析锂电池 UN报告 的关键消息，目前支持 4 家机构的 UN报告

## 使用方法
### Flask 版
- 1. 克隆本项目
    ```shell
    git clone https://github.com/initialencounter/UN_report_parse
    ```
- 2. 安装依赖 
    ```shell
    cd UN_report_parse
    pip install -r requirements.txt
    ```
- 3. 启动服务
    ```shell
    python webui.py
    ```
- 4. 访问服务
在浏览器中输入`http://127.0.0.1:5000/`

### FastAPI 版
- 1. 克隆本项目
    ```shell
    git clone https://github.com/initialencounter/UN_report_parse
    ```
- 2. 安装依赖 
    ```shell
    cd UN_report_parse
    pip install -r requirements_FastAPI.txt
    ```
- 3. 启动服务
    ```shell
    python webui_FastAPI.py
    ```
- 4. 访问服务
在浏览器中输入`http://127.0.0.1:5001/`


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments
[pdfminer.six](https://github.com/pdfminer/pdfminer.six)