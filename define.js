//---Global requirements
require('./core/iutil');

//---Global initialize
route = require('./core/route'),
config = require('./config/config');
Controller = require('./core/controller').class; //基类全局定义

//---Config
var path = require('path');
ROOT_PATH = __dirname; //网站根目录
CONTROLLER_PATH = path.join(ROOT_PATH, 'controller');
VIEW_PATH = path.join(ROOT_PATH, 'view');