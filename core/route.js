exports.getStaticRoute = function() {
	return /^\/(favicon.ico|images|css)/i;
};

//解析URL,获取Controller/Action,分析出GET参数
exports.getActionInfo = function(req) {
	var url_parse = require('url').parse;
	var urlInfo = url_parse(req.url, true);
	//---分析pathname,获取Controller和Action
	var pathnames = [],
		controller = '',
		action = '',
		_GET = {};
	//过滤
	var fingers = urlInfo.pathname.split('/');
	for (var i = 0; i < fingers.length; i++) {
		var finger = fingers[i] + ''; //强制转换为string
		if(finger != '') pathnames.push(finger);
	}
	//分析
	if (pathnames.length > 0) {
		controller = pathnames[0];
		action = pathnames[1] ? pathnames[1] : 'index';
		//其他参数,作为GET
		for(var i = 2; i < pathnames.length; i += 2) {
			_GET[pathnames[i]] = pathnames[i + 1];
		}
	}
	//---分析query string,并入到GET数组
	for (var x in urlInfo.query) {
		_GET[x] = urlInfo.query[x]; //已存在的将被覆盖
	}
	//---返回一个结构
	return {
		"controller": controller,
		"action": action,
		"_GET": _GET
	};
};