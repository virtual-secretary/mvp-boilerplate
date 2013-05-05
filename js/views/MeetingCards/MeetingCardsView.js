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
        
        //NO EXPORT
        //"jquery-notify"
], function(
		$, Mustache, Marionette, 
		cardTpl, listingTpl ) {
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
					
					var parent = {
							cards : Mustache.render(cardTpl) + Mustache.render(cardTpl)
					}
					
					this.el.innerHTML = Mustache.render(listingTpl, parent);
					return this;
				},
				renderCards : function() {
					var CardLib = this.collection.toJSON();
					var data = [];
					for(var i in CardLib) {
						data.push({
							
						});
					}
					
					return data;
				},
				onShow : function() {
					this.render();
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