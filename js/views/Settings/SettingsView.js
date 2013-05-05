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
				$(".socialConnect-btn").click(function(){
					$(this).append("&nbsp;&nbsp;<i class='icon-ok'/>");
				});
			}
		});
		
		return settingsView;
});
