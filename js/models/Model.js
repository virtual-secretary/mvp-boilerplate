
define([
        "jquery",
        "underscore",
        "backbone"
], function($, _, Backbone){
	
	var Model = Backbone.Model.extend({
		urlRoot : "",
		defaults : function() {
			return {
				firstName : "",
				lastName : "",
				subject : "",
				title : ""
			};
		}
	});
	
	return Model;
});