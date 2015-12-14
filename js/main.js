require.config({
	baseUrl: 'js', 
	paths: {
		'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min'
	}
});
/*
require(['selector'], function(query){
	var els = query('.wrapper');
	console.log(els);
});*/

/*require(['selector', 'event'], function($, E){
	var els = $('p');
	for (var i = 0; i < els.length; i++) {
		E.bind(els[i], 'click', function(){
			alert(this.innerHTML);
		});
	}
}, function(err) {
	console.log(err);
});*/

/*
 * 更强大的paths参数
 * requirejs2.0配置了一个数组，顺序映射，
 * 当前面的路径没有载入成功时可以接着载入下一个路径
*/
/*
require.config({
	enforceDefine: true,
	paths: {
		jquery: [
			'https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min',
			'lib/jquery'
		]
	}
});

require(['jquery', function($){}]);
*/

/*
 * undef函数移除模块的注册
 * 像上面的例子所示，如果http请求失败
 * 可以移除注册的模块
*/
/*require(['jquery'], function($){

}, function (err){
	var failedId = err.requireModules && err.requireModules[0];
	if (failedId === 'jquery') {
		requirejs.undef(failedId);
	}
});*/

require(['jquery'], function($){
	$("p").on("click", function(){
		alert("clicked")
	});
});