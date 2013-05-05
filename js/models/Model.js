
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
				title : "",
				organizer : "",
				attendee : "",
				date : {
					start : "",
					end : ""
				},
				kind : "",
				etag : "",
				summary : "",
				description : "",
				timeZone : "",
				googleReminders = [],
				nextPageToken = "",
				googleEvent = []
				
			};
		}
	});
	
	return Model;
});