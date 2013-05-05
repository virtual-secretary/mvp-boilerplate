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
				$("#musicPlayerSpot").html("<audio autoplay='autoplay' id='game-audio' preload='auto' autobuffer style='display:none'><source src='sound/Welcome%20message.mp3' />Your browser does not support audio element</audio>");
				$(".landing-btn").click(function(){
						/*
					$.ajax({
						type : "POST",
						url : "/api/login",
						data : {
							username : $("input.username").val(),
							password : $("input.password").val(),
							remember : ($("input[type='checkbox']").prop("checked")? true : false),
							callback : "/#meetings"
						}
					}).always(function(data){
						//console.log(data);
						
						
						
					}); */
					//window.location.href = "#meetings";
						
					if(($("input.username").val() == "rex") && ($("input.password").val() == "somepass")) {
						window.setTimeout(function(){
							window.location.href = "#meetings";
						},500)
					} else {
						alert("incorrect credentials, please try again!");
					}
					
				});
			}
		});
		
		return homeView;
});