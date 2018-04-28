const https = require('https');
var querystring=require('querystring');

exports.find = function (req, path, success) {
    //发送 http Post 请求
    var postData=querystring.stringify(req);

    var options = {
        host: 'api.weibo.com',
        // port: 80,
        path: path,
        method: 'POST',
        headers:{
            //'Content-Type':'application/x-www-form-urlencoded',
            'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
            'Content-Length':Buffer.byteLength(postData)
        }
    };
    var requ = https.request(options, function(res) {
        console.log('Status:',res.statusCode);
        console.log('headers:',JSON.stringify(res.headers));
        res.setEncoding('utf-8');
        res.on('data',function(data){
            success(data);
        });
    });
    requ.on('error',function(err){
        console.error(err);
    });
    requ.write(postData);
    requ.end();
}