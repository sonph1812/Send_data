const http = require('http');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;
const server = http.createServer(function (req, res) {

    var decoder = new StringDecoder('utf-8');
    var buffer = '';
    req.on('data', function (data) {
        buffer += decoder.write(data);
    });
    req.on('end', function (end) {
        buffer += decoder.end();
        res.end('Hello Node Js');
        console.log(buffer);
    });


})
server.listen(3000,function (){
    console.log("đang chạy")
})