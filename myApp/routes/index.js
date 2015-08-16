var express = require('express');
var router  = express.Router();
var redis   = require("redis").createClient('6379', '127.0.0.1'); //redis

//redis 錯誤訊息
redis.on("error", function (err) {
    console.log("Error " + err);
});

//連線時觸發
//redis.on("connect", runSample);
//
//redis.auth("AndrewChen"); //驗證

router.get('/set', function(req, res, next) {

  //寫入資料
  redis.set("demoRedis", req.query.value, function (err, reply) {

    //設定存活時間 60s = 1 min
    redis.expire('demoRedis', 60);

    //回應頁面
    res.render('index', { title: '寫入資料:' + reply.toString() });
  });
});

router.get('/get', function(req, res, next) {

  //取得資料
  redis.get("demoRedis", function (err, reply) {

    //有人讀取時，刷新存活時間
    redis.expire('demoRedis', 60);

    //回應頁面
    var value = reply.toString() || '無快取資料';

    res.render('index', { title: '取得資料:' + value });
  });
});

module.exports = router;
