// module dependent from module test1 && test2
log('LOADED: module test3');
jsLoader.require('test1', 'test2', function() {
	jsLoader.module('test3', function() {
		// module code goes here
		log('EXECUTED: module test3 waiting for module test1 && test2');
		jsLoader.domready(function() {
			log('EXECUTED: domready block in module test3');
		});
	});
});
