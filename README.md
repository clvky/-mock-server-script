## mock-server-script

前提安装`nodejs`

一个接口模拟数据的脚本。只需clone到本地，

然后启动服务就可以了，前台只需要代理到本服务地址`http://localhost:9000`

1. 自定义请求路径，想要什么路径自己定义
2. 接收`get/post`等数据提交
3. 当你修改脚本后会自动重启

### 安装

```bash
git clone 项目地址 # clone项目
npm i  #安装依赖
npm run ms #启动服务
```

访问地址在: http://localhost:9000

## 使用

1. 启动服务后，添加并书写你需要的返回数据,如下：
    目录：`/api/user.js`
    ```javascript
    var Mock = require('mockjs')
    var Random = Mock.Random;

    var data = {
        ret:0,
        message:'获取列表成功',
        results:[]
    }
    var len = 10;
    for (var i=0;i<len;i++){
        data.results.push({
            id:i+1,
            name:Random.cname(),
            age:Random.natural(1, 100),
            level:Random.natural(1, 100),
            attr:Random.cword('金木水火土',1)
        })
    }
    module.exports = data
    ```
2. 设置你想要的返回路径

    在目录：`routes.js`，增加你的相应脚本
    ```javascript
    //根目录
    router.all("/",function(req,res,next){
        res.render("index");
    });

    //返回用户数据
    router.get(baseDir+"/user",function(req,res,next){
        //配置你需要的返回json 对象数据
        res.json(require("./api/user"))
    });

    //获取提交数据
    router.post(baseDir+"/user",function(req,res,next){
        let data = req.body.data;
        let result = {
            code:1,
            message:"获取信息成功",
            data:JSON.parse(req.body.data)
        }
        res.json(result);
    });

    //返回信息
    router.all(baseDir+"/info",function(req,res,next){
        //配置你需要的返回json数据
        res.json(require("./api/info.json"))
    });
    ```

## 配置文件

在`config.js`，自己根据需要去修改

重启服务配置参考[nodemon](https://github.com/remy/nodemon)模块配置

## 相关链接

1. [nodemon](https://github.com/remy/nodemon)
