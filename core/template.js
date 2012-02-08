/**
 * 模板处理类 Template
 */

exports.class = function(){
	
};
exports.class.prototype = {
	parse: function(file, assign) {
		var fs = require('fs');
		var result = '';
		try {
			var content = fs.readFileSync(file, 'utf8');
			//替换变量
			if(content) {
				result = content.replace(/\{\$(\w+)?\}/g, function() {
					return assign[arguments[1]]; //取第一个匹配项 即为 变量名
				});
			}
		} catch (e) {
			console.log(e); //DEBUG
		} finally {
			return result;
		}
	}
};