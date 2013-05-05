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
		"js/views/Home/HomeView",
        //MODULES
        "js/util/QueryStringUtils",
        //NO EXPORTS
		"bootstrap"
], function(
		$, Backbone, Marionette,
		HeaderView, FooterView, MeetingCardsView, HomeView,
		QueryStringUtils
	) {
		var QueryStringUtils = new QueryStringUtils();
		
		var Router = Backbone.Router.extend({
			routes: {
				"meetings" : "meeting",
				"" : "default"
			},
			initialize: function(){
				var self = this;
				this.app = new Marionette.Application();
				
				this.$header = $("#header")[0];
				this.$footer = $("#footer")[0];
				this.$body = $("#main-body")[0];
				
				//$("#content").attr("id","main-body");
				
				//if(!this.checkLogin()) {
				//		window.location = "/#/login";
				//} else {
					var views = {
							header : new HeaderView({
								//model : self.user,
								el : self.$header
							}),
							footer : new FooterView({
								el : self.$footer
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
				self.$header.style.display = "block";
				var view = new MeetingCardsView({
					el : self.$body
				});	
				self.app.body.show(view);
			},
			default : function() {
				
				var self = this;
				self.$header.style.display = "none";
				var view = new HomeView({
					el : self.$body
				});
				self.app.body.show(view);
			}
		});
		
		return Router;
	}
);
