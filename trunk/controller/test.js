/**
 * Test Controller类
 */

exports.class = function() {
	Controller.apply(this, arguments); //[Required]
};
exports.class.prototype = {
	index: function() {
		this.vendor('testd', {var1: '[VAR1]', var2: '[VAR2]', var3: '[VAR3]'});
	}
};
//继承自Controller基类
inherit(exports.class, Controller); //[Required]