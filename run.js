var Server = require('./server').class,
	MyApplication = require('./application').class;

//---New one server to run a application
(new Server(8080)).runApplication(MyApplication); //为以后可扩展出各种application,这里直接将类作为参数传给server