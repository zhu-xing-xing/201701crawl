let read = require('./read').read;
let write = require('./write').write;
let async = require('async'); //为了处理读与写
let debug = require('debug')('crawl:main');  //写日志

let url = 'http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1';
let Movie = require('../model').Movie;


function start(){
	async.waterfall([
		function(callback){
			Movie.remove({},callback);
		},
		function(data,callback){
			read(url,callback);//read之后会把参数传递给callback,并执行callback
		},
		function(movies,callback){
			write(movies,callback);
		}
	],function(){
		debug('全部任务完成');
	})
}
start();