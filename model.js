//为了复用,写在外面了
let mongoose = require('mongoose');

//启动并连接数据库
mongoose.connect('mongodb://127.0.0.1/201701crawl');

let MovieSchema = new mongoose.Schema({
	name:String,
	url:String
});

let Movie = mongoose.model('Movie',MovieSchema);
exports.Movie = Movie;