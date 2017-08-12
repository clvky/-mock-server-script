
//发送用户数据
function sendUserPost(){
    console.log("开始发送请求");
    axios({
        method: 'post',
        url: '/api/user',
        data:"data="+JSON.stringify({
            name:"小明",
            age:233232
        })
    }).then(function(resp) {
        document.querySelector("#userCode").innerHTML = JSON.stringify(resp.data,null, '\t');
        console.log("结束发送请求");
    });
}

//增加book数据
function addBookInfo(){
    axios({
        method: 'post',
        url: '/api/book/add',
        data:"data="+JSON.stringify(JSON.parse(document.querySelector("#bookAddData").innerHTML))

    }).then(function(resp) {
        if(resp.data.code === 1){
            alert(resp.data.message)
        } else {
            alert("增加失败");
        }
    });
}

//查询book数据
function queryBookInfo(){
    axios({
        method: 'get',
        url: '/api/book/query'
    }).then(function(resp) {
        if(resp.data.code === 1){
            document.querySelector("#bookQueryData").innerHTML = JSON.stringify(resp.data,null, '\t');
        } else {
            alert(resp.data.message);
        }
    });
}

//查询book数据
function deleteBookInfo(){
    axios({
        method: 'post',
        url: '/api/book/delete',
        data:"data="+JSON.stringify({key:'book'})
    }).then(function(resp) {
        if(resp.data.code === 1){
            alert(resp.data.message)
        } else {
            alert("删除失败");
        }
    });
}
