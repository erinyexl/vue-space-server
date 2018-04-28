var https = require('https');
var qs = require('querystring');
var API_CONFIG = require('./api-config');

// GET
exports.httpsGet = function (request, path, success) {
    var reqString = qs.stringify(request);

    var options = {
        host: API_CONFIG.WEIBO_API.HOST,
        path: path+'?'+reqString,
        method: 'GET'
    }

    var req = https.request(options, function (res) {
        console.log('Status:',res.statusCode);
        // console.log('headers:',JSON.stringify(res.headers));
        res.setEncoding('utf-8');
        res.on('data',function(chunk){
            success(chunk);
        });
    })
    req.on('error',function(err){
        console.error('err:',err);
    });
    req.write(reqString);
    req.end();
}

// POST
exports.httpsPost = function (request, path, success) {
    var reqString = qs.stringify(request);

    var options = {
        host: API_CONFIG.WEIBO_API.HOST,
        path: path,
        method: 'POST',
        headers:{
            'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
            'Content-Length':Buffer.byteLength(reqString)
        }
    };
    var req = https.request(options, function(res) {
        console.log('Status:',res.statusCode);
        console.log('headers:',JSON.stringify(res.headers));
        res.setEncoding('utf-8');
        res.on('data',function(chunk){
            success(chunk);
        });
    });
    req.on('error',function(err){
        console.error(err);
    });
    req.write(reqString);
    req.end();
}