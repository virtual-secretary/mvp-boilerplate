
define([
        "jquery",
        "underscore",
        "backbone"
], function($, _, Backbone){
	
	var Model = Backbone.Model.extend({
		urlRoot : "",
		defaults : function() {
			return {
				firstname : "",
				nah: ""
					/*
				kind : "",
				etag : "",
				id : "",
				htmllink : "",
				created : "",
				updated : "",
				summary : "",
				description : "",
				location : "",
				colorId : "",
				creator : "",
				origanizer : "",
				start : "",
				end : "",
				recurrence : [],
				recurringEventId : "",
				originalStartTime : "",
				transparency : "",
				visibility : "",
				iCalUID :"",
				sequence : "",
				attendees : [],
				attendeesOmitted : false,
				extendedProperties : [],
				gadget : "",
				anyoneCanAddSelf : "",
				guestsCanInviteOthers : "",
				guestsCanSeeOtherGuests : "",
				privateCopy
				*/
			};
		}
	});
	
	return Model;
});