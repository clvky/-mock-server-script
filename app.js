const nodemon = require('nodemon');
const config = require("./config");

nodemon(config.nodemon);
nodemon.on('start', function() {
    //console.log('App has started');
}).on('quit', function() {
    //console.log('App has quit');
}).on('restart', function(files) {
    //console.log('App restarted due to: ', files);
});
