const config = require("./config")
const path = require('path')
const express = require('express')
const app = express()
const routes = require("./routes")

const bodyParser = require('body-parser');
// const multer = require('multer');

//设置端口
app.set("port",config.port);
// 设置模板目录
app.set("views",path.join(__dirname,"views"));
// 设置模版引擎
app.set("view engine","ejs");
// 设置静态文件目录
app.use(express.static(path.join(__dirname,"public")));

app.use(bodyParser.json()); // 解析application/json
app.use(bodyParser.urlencoded({ extended: true })); //解析application/x-www-form-urlencoded
// app.use(multer()); // 解析multipart/form-data

//安装路由
app.use( routes);
//app.use(config.baseDir, routes);

// 监听端口，启动程序
const server = app.listen(app.get('port'),function(){
    console.log(`访问地址在 localhost:${server.address().port}` );
});
