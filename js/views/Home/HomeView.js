define([
    //LIBRARIES
    "jquery",
    "backbone",
    "marionette",
    "mustache",
    //MODELS
   
    //VIEWS
    
    //TEMPLATES
    "text!tpl/Home/Home.mustache"
    //NO EXPORTS
],function(
		$, Backbone, Marionette, Mustache,
		tpl
	) {
		var homeView = Marionette.Region.extend({
			initalize : function() {
				options = options || {};
				
			},
			render : function() {
				this.el.innerHTML = Mustache.render(tpl);
				return this;
			},
			onShow : function() {
				this.render();
			}
		});
		
		return homeView;
});