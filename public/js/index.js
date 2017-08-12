
sendPost();
function sendPost(){
    console.log("开始发送请求");
    axios({
        method: 'post',
        url: '/api/user',
        data:"data="+JSON.stringify({
            name:"小明",
            age:233232
        })
    }).then(function(resp) {
        console.log(resp.data);
        console.log("结束发送请求");
    });
}
