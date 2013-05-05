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
					//$("#notification").notify();
					//$("#notification").notify("create", { title : "hello" , text : "You have a meeting coming up" });
				}
			});
			
			return MeetingCardView;
});