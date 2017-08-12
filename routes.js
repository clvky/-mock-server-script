const config = require("./config")
const express = require("express");
const low = require('lowdb')
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

//获取用户提交数据
router.post(baseDir+"/user",function(req,res,next){
    let data = req.body.data;
    let result = {
        code:1,
        message:"获取信息成功",
        data:JSON.parse(req.body.data)
    }
    res.json(result);
});

//返回json信息，接收任何请方式
router.all(baseDir+"/info",function(req,res,next){
    //配置你需要的返回json数据
    res.json(require("./api/info.json"))
});

//以下是本地 增加、查询、删除
//增加书本数据
router.post(baseDir+"/book/add",function(req,res,next){
    const db = low('./api/book.json');
    db.set('book',JSON.parse(req.body.data)).write()
    let result = {
        code:1,
        message:"增加信息成功"
    }
    res.json(result);
});

//查询书本数据
router.get(baseDir+"/book/query",function(req,res,next){
    //配置你需要的返回json 对象数据
    res.json({
        code:1,
        message:"查询书本数据成功",
        data:require("./api/book.json")
    })
});

//删除书本数据
router.post(baseDir+"/book/delete",function(req,res,next){
    const db = low('./api/book.json');
    db.set(JSON.parse(req.body.data).key,[]).write()
    let result = {
        code:1,
        message:"删除成功"
    }
    res.json(result);
});

module.exports = router;
