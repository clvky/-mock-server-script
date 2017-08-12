const config = require("./config")
const express = require("express");
const router = express.Router();
const baseDir = config.baseDir;

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

module.exports = router;
