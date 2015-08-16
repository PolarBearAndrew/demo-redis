var express = require('express');
var router  = express.Router();
var redis   = require("redis").createClient(); //redis


redis.on("error", function (err) {
    console.log("Error " + err);
});

//連線時觸發
//redis.on("connect", runSample);

router.get('/set', function(req, res, next) {

  //寫入資料
  redis.set("demoRedis", req.query.value, function (err, reply) {
    res.render('index', { title: '寫入資料:' + reply.toString() });
  });
});

router.get('/get', function(req, res, next) {

  var value = req.query.value;

  //取得資料
  redis.get("demoRedis", function (err, reply) {
      res.render('index', { title: '取得資料:' + reply.toString() });
  });
});

module.exports = router;
