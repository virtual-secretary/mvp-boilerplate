//file : MeetingCardsView

define([
        //LIBRARIES
        "jquery",
        "mustache",
        "marionette",
           
        //MODELS 
        
        //VIEWS
        
        //TEMPLATES
        "text!tpl/MeetingCards/Card.mustache"
        
        //NO EXPORT
        
], function(
		$, Mustache, Marionette, 
		tpl ) {
			var MeetingCardView = Marionette.Region.extend({
				initalize  : function() {
					options = options || {};
					options.tpl = tpl;
				},
				render : function() {
					//console.log(Mustache.render(tpl));
					console.log("asd");
					this.el.innerHTML = Mustache.render(tpl);
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