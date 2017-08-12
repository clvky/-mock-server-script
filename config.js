module.exports = {
    env: {
        NODE_ENV: '"production"'
    },
    nodemon:{
        script: 'index.js',//服务脚本
        ext: 'js json',
        restartable: "rs",
        ignore: [
            ".git",
            ".svn",
            "node_modules/**/node_modules"
        ],
        verbose: true,
        execMap: {
            "js": "node --harmony"
        }
    },
    baseDir:'/api',//基本根目录
    port: 9000,//服务端口
}
