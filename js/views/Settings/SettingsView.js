//file : SettingsView

define([
        //LIBRARIES
        "jquery",
        "mustache",
        "marionette",
        //MODELS
        
        //VIEWS
        
        //TEMPLATES
        "text!/tpl/Settings/Settings.mustache"
        //NO EXPORT
],function(
		$, Mustache, Marionette,
		tpl
){
		var settingsView = Marionette.Region.extend({
			initialize : function(options) {
				options = options || {};
			},
			render : function() {
				this.el.innerHTML = Mustache.render(tpl);
			},
			onShow : function() {
				this.render();
			}
		});
		
		return settingsView;
});
