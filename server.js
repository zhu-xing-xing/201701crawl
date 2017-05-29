let express = require('express');
let path = require('path');
let Movie = require('./model').Movie;
let app = express();
app.set('view engine','ejs');
//
app.use(express.static(path.resolve('node_modules')));

app.get('/',function(req,res){
	Movie.find({},function(err,movies){
		res.render('index',{movies});
	});
});
app.listen(8080);
