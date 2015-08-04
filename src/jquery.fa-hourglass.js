(function ( $ ) {
	$.fn.faHourglass = function() {
		toggle_fa_hour_glass(this, ['fa-hourglass-start', 'fa-hourglass-half', 'fa-hourglass-end'], -1);

		function toggle_fa_hour_glass(element, states, current_state){
			if(current_state <= 0)
				element.removeClass(states[states.length - 1]);
			else
				element.removeClass(states[current_state]);

			element.addClass(states[++current_state]);
			
			if(current_state >= (states.length - 1)) {
				element.addClass('rotate');
				setTimeout(function(){
					element.removeClass('rotate');
					toggle_fa_hour_glass(element, states, -1);
				}, 800)
			} else {
				setTimeout(function(){
					toggle_fa_hour_glass(element, states, current_state);
				}, 800)
			}
		}				
	};
}( jQuery ));