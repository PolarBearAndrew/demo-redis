# demo-redis

<center>
![Redis](http://acom.azurecomcdn.net/80C57D/cdn/images/cvt-13f9af988a3bce151b5f3666660fb76825069825048a47e2c3f78ca61c38c685/page/services/cache/redis.png?t=popn)
</center>

* [Redis](http://redis.io)
* [Redis - 官方文件](http://redis.io/documentation)
* [Redis - npm](https://www.npmjs.com/package/redis)
* [Redis - GUI](http://redisdesktop.com)

## 簡介

Redis 是以 key-value 的形式在伺服器的記憶體中儲存資訊的方式，為伺服器命名做快取(cache)。有別於其他 noSQL 或是 RDB，key-value 即是使用一個 key 的值對應到一筆資料。而 Redis 的特色就是將這筆資料，寫在記憶體裡面。

大概有幾種狀況會將資料寫入到快取中：

* 在一定時間內會被大量請求的資料，如：新聞的 Top 10。
* 某些伺服器會頻繁使用的資料，或全域變數。如：
* 測試用的資料，短時間內要使用的假資料。
* 也能當成 Session 使用。(相當不健康的觀念)

Redis 本身會瓜分伺服器的記憶體來使用，Node.js 連線所使用的記憶體相對於 PHP/Apache 較少，除非能非常準確地掌握 Session 的數量，否則不建議 Redit 當成 Session 使用，同樣的意思不應該將 Redis 當成資料庫來只用。如果對 Redis 有相當大的需求，應該特地架設 Redis 的伺服器，避免兩套系統互相搶奪記憶體資源。

## 安裝

先從官方網站下載 Redis，解開壓縮檔之後，在資料夾下執行以下指令

``` bat
$ make 
```

輸入指令後，Redis 會自行安裝，需要一段時間

``` bat
$ make test
```

Redis 會自行進行測試，測時完成後即可啟動，啟動並不需要在指定的資料夾下，屬於全域的

``` bat
$ redis-server
```

接著在 [Redis - GUI](http://redisdesktop.com) 的介面中進行連線就可以檢視現在 Redis 內的資料。


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
如果在 redis.conf 中有設定需要驗證的話，須在在此填入驗證碼，類似密碼的意思。

``` js
redis.auth("AndrewChen");
```