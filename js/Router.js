//filename : router.js

define([
        //LIBARIES
        "jquery",
        "backbone",
        "marionette",
        //MODELS
        "js/models/Model",
        //VIEWS
        "js/views/HeaderView",
		"js/views/FooterView",
		"js/views/MeetingCards/MeetingCardsView",
		"js/views/Home/HomeView",
		"js/views/Settings/SettingsView",
        //MODULES
        "js/util/QueryStringUtils",
        //NO EXPORTS
		"bootstrap"
], function(
		$, Backbone, Marionette,
		CardModel,
		HeaderView, FooterView, MeetingCardsView, HomeView, SettingsView,
		QueryStringUtils
	) {
		var QueryStringUtils = new QueryStringUtils();
		
		var Router = Backbone.Router.extend({
			routes: {
				"meetings" : "meeting",
				"settings" : "settings",
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
				
				var CardLibrary = Backbone.Collection.extend({
						model : CardModel,
						url : '/data'
				});	
				
				this.myCards = new CardLibrary();
				//self.app.on('initalize:after', function(){
				//	Backbone.history.start();
				//});
	
					/* need to include a calander library here */
				//}
			},
			meeting : function() {
				var self = this;
				self.$header.style.display = "block";
				var view = new MeetingCardsView({
					collection : self.myCards,
					el : self.$body
				});	
				self.app.body.show(view);
			},
			settings : function() {
				var self = this;
				self.$header.style.display = "block";
				var view = new SettingsView({
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
