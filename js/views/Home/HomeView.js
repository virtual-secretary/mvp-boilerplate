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
				this.constructor.__super__.initialize.call(this, options)
			},
			render : function() {
				this.el.innerHTML = Mustache.render(tpl);
				return this;
			},
			onShow : function() {
				this.render();
				
				$(".landing-btn").click(function(){
					$.ajax({
						type : "POST",
						url : "/api/login",
						data : {
							username : $("input.username").val(),
							password : $("input.password").val(),
							remember : ($("input[type='checkbox']").prop("checked")? true : false)
						}
					}).always(function(data)){
						
					}
				});
			}
		});
		
		return homeView;
});