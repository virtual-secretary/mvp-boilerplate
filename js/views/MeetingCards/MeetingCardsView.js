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
        "text!tpl/MeetingCards/Listing.mustache"
        
        //NO EXPORT
        
], function(
		$, Mustache, Marionette, 
		cardTpl, listingTpl ) {
			var MeetingCardView = Marionette.Region.extend({
				initalize  : function() {
					options = options || {};
				},
				render : function() {
					
					var parent = {
							cards : Mustache.render(cardTpl) + Mustache.render(cardTpl)
					}
					
					this.el.innerHTML = Mustache.render(listingTpl, parent);
					//console.log(this.el.html());
					
					
					
					return this;
				},
				onShow : function() {
					this.render();
					$("div.card-main").click(function(e){
							e.stopPropagation();
							var self = this;
							var element = e.currentTarget;
							$(element).parent().children(".card-extended").slideToggle();
							
					});
				}
			});
			
			return MeetingCardView;
});