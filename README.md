# json-to-elment-ui-demo

## how to run
### 启动后端
指定数据库连接信息
```
docker run --rm -p 10051:10051 --name tio-boot-table-to-json litongjava/tio-boot-table-to-json:1.0 /usr/java/jdk1.8.0_211/bin/java -jar tio-boot-table-to-json-1.0.jar --jdbc.url=jdbc:mysql://192.168.3.9:3307/ruoyi_vue_pro --jdbc.user=root --jdbc.pswd=robot_123456# --jdbc.showSql=true
```
后端启动成功之后默认占用10051端口

### 启用转发
go-http-agent 是我的另一个开源项目使用下面的命令启动,程序会将本机端口10050的数据转发192.168.3.9:10051,即后端服务的地址.之所以监听本机的10050端口是因为本程序默认访问该端口
```shell script
go-http-agent --port 10050 --context-path / --proxy-url http://192.168.3.9:10051
```

### 下载静态文件
前往本项目的release下载静态文件
### 启动http-server
```
cd 下载后的静态资源的目录  
http-server .
```
http-server默认监听3000端口
测试
http://127.0.0.1:3000/#/datas
## how to build
### Project setup
```
yarn install
```

#### Compiles and hot-reloads for development
```
yarn serve
```

#### Compiles and minifies for production
```
yarn build
```

#### Run your unit tests
```
yarn test:unit
```

#### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
