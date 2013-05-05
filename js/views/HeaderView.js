//Filename : HeaderView

define([
        //LIBRARIES
        "jquery",
        "mustache",
        "marionette",
           
        //MODELS 
        
        //VIEWS
        
        //TEMPLATES
        "text!tpl/header.mustache"
        
        //NO EXPORT
        
], function(
		$, Mustache, Marionette, 
		tpl ) {
			var HeaderView = Marionette.Region.extend({
				initalize  : function() {
					options = options || {};
					options.tpl = tpl;
					
				},
				render : function() {
					
					this.el.innerHTML = Mustache.render(tpl);			
					return this;
				},
				onShow : function() {
					this.render();
				}
			});
			
			return HeaderView;
});