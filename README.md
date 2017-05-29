## 爬虫
### 1.初始化项目
```
npm init -y
touch .gitignore
```

### 2.安装依赖的模块
```
npm install request cheerio cron ejs debug express async mongoose iconv-lite -S
```

### 3.实现的思路
1. 向指定的网页发出请求,并得到响应
2. 把得到的电影数组保存到数据库中
3. 编写main方法实现爬虫
4. 创建服务并显示保存的电影
