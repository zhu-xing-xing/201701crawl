let request = require('request');
let iconv = require('iconv-lite');
let cheerio = require('cheerio');

//负责读取url地址中的内容,读到之后调用回调函数
exports.read = function(url,callback){
	request({url,encoding:null},function(err,response,body){
		body = iconv.decode(body,'gbk');  //body由buffer=>字符串
		let $ = cheerio.load(body);//得到一个对象
		let movies = [];
		
		$('.keyword .list-title').each(function(index,item){
			let $this = $(item); //转化为$对象
			let movie = {
				name:$this.text(),
				url:$this.attr('href')
			};
			movies.push(movie);
		});
		callback(err,movies);
	})
};

exports.read('http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1',(err,movies)=>{
	console.log(movies);
});