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
