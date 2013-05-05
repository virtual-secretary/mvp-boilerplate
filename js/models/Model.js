
define([
        "jquery",
        "underscore",
        "backbone"
], function($, _, Backbone){
	
	var Model = Backbone.Model.extend({
		
		hasData: function(){
			
			if(this.get("data"))
			{
				return true;
			}
			
			else
			{
				return false;
			}
		},
		
		fetch: function(params){
			
			var self = this;
			
			if(!params)
			{
				params = this.get("params");
			}
			
			else
			{
				this.set({params: params}, {silent: true});
			}
			
			if(params)
			{
				
				if((params.days == 1 ^ params.days == 7) && params.delta_t == undefined) 
					params.delta_t = "HOURLY";
				
				$.ajax({
					type: "GET",
					url: self.get("url") + "?" + $.param(params),
					statusCode : {
						401 : function() {
								window.location = "/#/login";
						}
					}
				}).done(function(data){
					//console.log(data);
					self.set("data", data);
					self.trigger("change");
				}).fail(function(err){
					if(err.status === 401)
						return;
					console.log("err", err);
				});
			}
		},
		
		_super: function(){
			return this.constructor.__super__;
		}
	},{
		ROOT_URL: "/api/v2/analytics"
	});
	
	return Model;
});