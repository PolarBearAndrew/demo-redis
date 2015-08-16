# demo-redis
demo redis cache

* [Redis](http://redis.io)
* [Redis - doc](http://redis.io/documentation)
* [Redis - npm](https://www.npmjs.com/package/redis)
* [Redis - GUI](http://redisdesktop.com)

## 安裝

先從官方網站下載 Redis，解開壓縮檔之後，執行

``` bat
$ make 
```

Redis 會自行安裝，需要一段時間

``` bat
$ make test
```

Redis 會自行進行測試，測時完成後即可啟動，啟動並不需要在指定的資料夾下，屬於全域的

``` bat
$ redis-server
```

接著在 GUI 的介面中進行連線就可以檢視現在 Redis 內的資料。


## 使用

在 Node.js 引用 Redis 的套件並且連線

``` js
var redis = require("redis").createClient('6379', '127.0.0.1'); //port, IP
```

redis.set 寫入值

``` js
redis.set( key, value, function( err, reply ){
  console.log( reply.toString() ); // 新增成功會回傳 ok
});
```

redis.get 取得值

``` js
redis.get( key, function( err, reply ){
  console.log( reply.toString() ); // 新增會回傳 value
});
```

cache 資料的存活時間

``` js
redis.expire( key, 60);
```

redis 錯誤 callback function

``` js
redis.on( "connect", callback );
```

redis 錯誤 callback function

``` js
redis.on( "error", callback );
```

redis 驗證

``` js
redis.auth("AndrewChen");
```