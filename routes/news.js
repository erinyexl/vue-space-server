var express = require('express');
var router = express.Router();

router.get('/',function (req,res,next) {
    res.json([
        {
            articleID: 1,
            title: "首脑会晤开场白 金正恩提\"冷面\"文在寅谈\"春天\""
        },
        {
            articleID: 2,
            title: "山西警方破获涉黑团伙案件 为首的是县法院副院长"
        },
        {
            articleID: 3,
            title: "美国公司涉嫌侵犯中国芯片设备 在上海被海关扣下"
        },
        {
            articleID: 4,
            title: "自杀程序员苏享茂前妻翟欣欣发长文 否认逼其跳楼"
        }
    ])
})

router.get('/newsDetails',function (req,res,next) {
    res.json([
        {
            articleID: 1,
            title: "首脑会晤开场白 金正恩提\"冷面\"文在寅谈\"春天\"",
            article: "文在寅和金正恩见面后，两人步行前往板门店广场，检阅韩国三军仪仗队。身着多彩民族盛装、演奏民谣阿里郎的韩军传统仪仗队也执行了礼宾任务，文在寅说，“很多外国人也喜欢我们的传统仪仗队，今天仪仗队规模小，很可惜。来青瓦台的话，能看到更棒的场面。”金正恩则表示，“总统先生如若邀请，我随时可去青瓦台。”"
        }
    ])
})

module.exports = router;