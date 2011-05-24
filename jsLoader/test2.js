// module dependent from module test1
log('LOADED: module test2');
jsLoader.require('test1', function() {
	jsLoader.module('test2', function() {
		// module code goes here
		log('EXECUTED: module test2 waiting for module test1');
	});
});
