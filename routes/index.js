var express = require('express');
var router = express.Router();
var server = require('./server');
var API_CONFIG = require('./api-config');

/* GET home page. */
router.get('/', function (req,res,next) {
    res.render('index', {title: 'Express index page'});
});

router.get('/authorize',function (req,res,next) {
    //重定向到认证接口,并配置参数
    //注意这里使用的是node的https模块发起的请求
    var path = "https://api.weibo.com/oauth2/authorize";
    path += '?client_id=' + API_CONFIG.WEIBO_OAUTH.APPKEY+'&redirect_uri='+API_CONFIG.WEIBO_OAUTH.OAUTH_CALLBACK_URL;
    path += '&response_type=code';
    //转发到授权服务器
    res.redirect(path);
})

router.post('/access_token',function (req,res,next) {
    var dataJson = {
        client_id: API_CONFIG.WEIBO_OAUTH.APPKEY,
        client_secret: API_CONFIG.WEIBO_OAUTH.SECRET,
        grant_type: 'authorization_code',
        code: req.body.code,
        redirect_uri: API_CONFIG.WEIBO_OAUTH.OAUTH_CALLBACK_URL
    }
    server.httpsPost(dataJson, '/oauth2/access_token', function(data){
        res.json(JSON.parse(data));
    })
})

router.post('/get_token_info',function (req,res,next) {
    server.httpsPost(req.body, '/oauth2/get_token_info', function (data) {
        res.json(JSON.parse(data));
    })
})

router.get('/home_timeline',function (req,res,next) {
    server.httpsGet(req.query, API_CONFIG.WEIBO_API.HOME_TIMELINE, function (data) {
        res.json(JSON.parse(data));
    })
})

router.get('/user_timeline',function (req,res,next) {
    server.httpsGet(req.query, API_CONFIG.WEIBO_API.USER_TIMELINE, function (data) {
        res.json(JSON.parse(data));
    })
})

router.get('/statuses_show',function (req,res,next) {
    server.httpsGet(req.query, API_CONFIG.WEIBO_API.STATUSES_SHOW, function (data) {
        res.json(JSON.parse(data));
    })
})

module.exports = router;
