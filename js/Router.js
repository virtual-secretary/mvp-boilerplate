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
        //MODULES
        "js/util/QueryStringUtils",
        //NO EXPORTS
		"bootstrap"
], function(
		$, Backbone, Marionette,
		HeaderView, FooterView,
		QueryStringUtils
	) {
		var QueryStringUtils = new QueryStringUtils();
		
		var Router = Backbone.Router.extend({
			routes:{
				"connect" : "connect",
				"login" : "login",
				"meetings" : "meetings",
				"" : "meetings"
			},
			initialize: function(){
				var self = this;
				var app = new Marionette.Application();
				
				$("#content").attr("id","main-body");
				
				//if(!this.checkLogin()) {
				//		window.location = "/#/login";
				//} else {
					this.views = {
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
				
				app.addRegions({
					header : "#header",
					footer : "#footer",
					body : "#main-body"
				});
				
				//app.header.attachView(this.views.header);
				app.header.show(this.views.header);
				app.footer.show(this.views.footer)
				//app.footer.attachView(this.views.footer);
				
				app.on('initalize:after', function(){
					Backbone.history.start();
				});
				
				/*
				this.views = {
						header : new HeaderView({
							//model : self.user,
							//el : self.$header.get(0)
						}),
						footer : new FooterView({
							//el : self.$footer.get(0)
						})
				};
				
				this.regions = {
					header : new Marionette.Region({
						el : "#header"
					}),
					footer : new Marionette.Region({
						el : "#footer"
					}),
					body : new Marionette.Region({
						el : "#main-body"
					}) 
				};
				
				this.region.header.show(this.views.header);
				this.region.footer.show(this.views.footer); */
	
					/* need to include a calander library here */
				//}
			},
			about : function() {
			
			},
			login : function() {
				
			},
			meetings : function() {
				var self = this;
			},
			connect : function() {
				
			}
		});
		
		return Router;
	}
);
