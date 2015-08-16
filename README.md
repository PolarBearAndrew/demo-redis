# demo-redis
demo redis cache

* [Redis](http://redis.io)
* [Redis - doc](http://redis.io/documentation)
* [Redis - npm](https://www.npmjs.com/package/redis)
* [Redis - GUI](http://redisdesktop.com)

先從官方網站下載 Redis，解開壓縮檔之後，執行

```
$ make 
```

Redis 會自行安裝，需要一段時間

```
$ make test
```

Redis 會自行進行測試，測時完成後即可啟動，啟動並不需要在指定的資料夾下，屬於全域的

```
$ redis-server
```

接著在 GUI 的介面中進行連線即可