var http = require('http'),
	querystring = require('querystring');

/**
 * Server 类
 * 创建一个服务器,运行指定的application
 */
exports.class = function(port){
	this._port = port;
}
exports.class.prototype = {
	runApplication: function(appClass) {
		http.createServer(function(req, res) {
			console.log('[' + req.method + ']', req.url);
			var _postData = '';
			
			//提取POST数据
			req.on('data', function(data) {
				_postData += data;
				console.log('[Received]' + data.length);
			});
			
			req.on('end', function() {
				//保存POST数据
				req.post = querystring.parse(_postData);
				//交由dispatcher
				new appClass(req, res);
			});
			
		}).listen(this._port);
		console.log('Server is running at port ' + this._port);
	}
}