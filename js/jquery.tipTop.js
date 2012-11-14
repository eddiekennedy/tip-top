(function($) {
	$.fn.tipTop = function(options) {
		this.hover(function(event) {
			// Define variables
			var obj = $(this),
			t = obj.position().top,
			l = obj.position().left,
			w = obj.outerWidth(),
			h = obj.outerHeight(),
			titleText = obj.attr('title'),
			theTooltip, tooltopContent, tooltipPoint, p, b;
			// Remove and store the <a> title
			obj.data('tipText', titleText).removeAttr('title');
			// Build the tooltip
			theTooltip = $('<div class="tiptop"></div>');
			tooltipContent = $('<div class="tiptop-content"></div>').html(titleText);
			tooltipPoint = $('<p class="tiptop-point"></p>');
			// Append the tooltip
			theTooltip.append(tooltipContent, tooltipPoint).appendTo('body').css({'display':'none'});
			p = ((w - theTooltip.outerWidth()) / 2) + l;
			b = ((t - theTooltip.outerHeight()));
			//b = (t - (theTooltip.outerHeight() /2 )
			//Position the tooltip
			theTooltip.css({'top': b + 'px', 'left': p +'px'}).fadeIn('fast');
		}, function() {
			//Define variables
			var obj = $(this);
			// Re-attach the title to the <a>
	    	obj.attr('title', obj.data('tipText'));
			// Remove the tooltip
	    	$('.tiptop').remove();
		});
	};
})(jQuery);