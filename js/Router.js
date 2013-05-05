//filename : router.js

define([
        //LIBARIES
        "jquery",
        "backbone",
        "marionette",
        //MODELS
        
        //VIEWS
        "js/views/HeaderView",
		"js/views/FooterView",
		"js/views/MeetingCards/MeetingCardsView",
        //MODULES
        "js/util/QueryStringUtils",
        //NO EXPORTS
		"bootstrap"
], function(
		$, Backbone, Marionette,
		HeaderView, FooterView, MeetingCardsView,
		QueryStringUtils
	) {
		var QueryStringUtils = new QueryStringUtils();
		
		var Router = Backbone.Router.extend({
			routes: {
				"meetings" : "meeting",
				"" : "meeting"
			},
			initialize: function(){
				var self = this;
				this.app = new Marionette.Application();
				
				//$("#content").attr("id","main-body");
				
				//if(!this.checkLogin()) {
				//		window.location = "/#/login";
				//} else {
					var views = {
							header : new HeaderView({
								//model : self.user,
								el : $("#header")[0]
							}),
							footer : new FooterView({
								el : $("#footer")[0]//self.$footer.get(0)
							})
					};
					/*
					this.views.header.render();
					this.views.footer.render();
					*/
				
				self.app.addRegions({
					header : "#header",
					footer : "#footer",
					body : "#main-body"
				});
				
				
				//app.header.attachView(this.views.header);
				self.app.header.show(views.header);
				self.app.footer.show(views.footer);
				//self.app.on('initalize:after', function(){
				//	Backbone.history.start();
				//});
	
					/* need to include a calander library here */
				//}
			},
			about : function() {
			
			},
			login : function() {
				
			},
			meeting : function() {
				var self = this;
				var view = new MeetingCardsView({
					el : $("#main-body")[0]
				});	
				self.app.body.show(view);
			},
			connect : function() {
				
			}
		});
		
		return Router;
	}
);
