//file : MeetingCardsView

define([
        //LIBRARIES
        "jquery",
        "mustache",
        "marionette",
           
        //MODELS 
        
        //VIEWS
        
        //TEMPLATES
        "text!tpl/MeetingCards/Card.mustache",
        "text!tpl/MeetingCards/Listing.mustache",
        "text!tpl/MeetingCards/demo.mustache"
        
        //NO EXPORT
        //"jquery-notify"
], function(
		$, Mustache, Marionette, 
		cardTpl, listingTpl, demoTpl ) {
			var MeetingCardView = Marionette.Region.extend({
				initialize  : function(options) {
					options = options || {};
					
					console.log(options);
					this.collection = options.collection;
					//console.log(this.constructor.);
					//this.constructor.call(this, options);
					
					this.listenTo(this.collection, "reset", this.render);
					this.collection.fetch();
				},
				render : function() {
					/*
					var parent = {
							cards : Mustache.render(cardTpl) + Mustache.render(cardTpl)
					}*/
					
					this.el.innerHTML = Mustache.render(demoTpl);//, parent);
					return this;
				},
				renderCards : function() {
					//var CardLib = this.collection.toJSON();
					var data = [];
					/*for(var i in CardLib) {
						data.push({
							
						});
					}*/
					var boggie;
					$.ajax({
						async : false,
						
					}).done(function(data){
						boggie = data;
					});
					
				
					console.log(boggie);
					
					
					return data;
				},
				onShow : function() {
					this.render();
					$("#musicPlayerSpot").html("<audio autoplay='autoplay' id='game-audio' preload='auto' autobuffer style='display:none'><source src='sound/My%20my%20look%20at%20how%20busy.mp3' />Your browser does not support audio element</audio>");
					
					window.setTimeout(function(){
						$("#musicPlayerSpot").html("<audio autoplay='autoplay' id='game-audio' preload='auto' autobuffer style='display:none'><source src='sound/You%20are%20so%20powerful%20and%20wise.mp3' />Your browser does not support audio element</audio>");
					
						window.setTimeout(function(){
							$("#musicPlayerSpot").html("<audio autoplay='autoplay' id='game-audio' preload='auto' autobuffer style='display:none'><source src='sound/I%20have%20assembled%20your%20schedule.mp3' />Your browser does not support audio element</audio>");
							window.setTimeout(function(){
								$("#musicPlayerSpot").html("<audio autoplay='autoplay' id='game-audio' preload='auto' autobuffer style='display:none'><source src='sound/These%20are%20the%20meetings.mp3' />Your browser does not support audio element</audio>");
								
							},3500);
						},4000);					
					},3500)
					
					
					
					$("div.card-main").click(function(e){
							e.stopPropagation();
							var self = this;
							var element = e.currentTarget;
							$(element).parent().children(".card-extended").slideToggle();
					});
					
					$(".popUp-btn").click(function(e){
						e.stopPropagation();
						var self = this;
						var name = $(this).attr("data-name");
						$("#overlay-message").attr("placeholder",
						"I wrote a follow up message for your meeting yesterday! Here it is:"+
									 
						"Hi there, I really enjoyed meeting up with you yesterday. Thanks again for taking some time to get together and share ideas."+
									 
						"Looking forward to keeping in touch in the future,"+
									 
						"Andrew"		
						
						);
						
						$("#musicPlayerSpot").html("<audio autoplay='autoplay' id='game-audio' preload='auto' autobuffer style='display:none'><source src='sound/Explanation.mp3' />Your browser does not support audio element</audio>");

						
						$(".overlay-name").html(name);
						$(".overlay").fadeIn();
						
						
					});
					$("#overlay-send").click(function(){
						$(".overlay").fadeOut();
					});
					$("#overlay-cancel").click(function(){
						$(".overlay").fadeOut();
					});
					//$("#notification").notify();
					//$("#notification").notify("create", { title : "hello" , text : "You have a meeting coming up" });
				}
			});
			
			return MeetingCardView;
});