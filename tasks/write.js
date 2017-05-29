let Movie = require('../model').Movie;
let async = require('async');
let debug = require('debug')('crawl:write');

exports.write = function(movies,callback){
	async.forEach(movies,function(movie,cb){
		Movie.create(movie,cb);
		debug(`写入电影:${movie.name}`)
		
	},callback);
};

/*
//测试代码
exports.write([
	{name:'超级大山炮',url:'sanpao'},
	{name:'白鹿原',url:'bailuyuan'}
],function(err){
	console.log(err);
});*/

