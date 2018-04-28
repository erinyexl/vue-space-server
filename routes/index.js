var express = require('express');
var server = require('./server');
var authorize = require('./authorize');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express index page'});
});

router.get('/authorize',function (req, res, next) {
    //重定向到认证接口,并配置参数
    //注意这里使用的是node的https模块发起的请求
    var path = "https://api.weibo.com/oauth2/authorize";
    path += '?client_id=' + authorize.appkey+'&redirect_uri='+authorize.oauth_callback_url;
    path += '&response_type=code';
    //转发到授权服务器
    res.redirect(path);
})

router.post('/access_token',function (req,res,next) {
    var dataJson = {
        client_id: authorize.appkey,
        client_secret: authorize.secret,
        grant_type: 'authorization_code',
        code: req.body.code,
        redirect_uri: authorize.oauth_callback_url
    }
    server.find(dataJson, '/oauth2/access_token', function(data){
        res.json(JSON.parse(data));
    })
})

router.post('/get_token_info',function (req,res,next) {
    server.find(req.body, '/oauth2/get_token_info', function (data) {
        res.json(JSON.parse(data));
    })
})

router.get('wblists',function (req,res,next) {
    server.find(req.body, '2/statuses/home_timeline.json', function (data) {
        res.json(JSON.parse(data));
    })
})

module.exports = router;
