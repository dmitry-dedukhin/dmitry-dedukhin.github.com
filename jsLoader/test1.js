// module with no dependencies
log('LOADED: module test1');
jsLoader.module('test1', function() {
	// module code goes here
	log('EXECUTED: module test1');
});
