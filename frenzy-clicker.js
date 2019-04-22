javascript:(function() {
	window.modo_cc = window.modo_cc || {active: null};
	
	setInterval(function() {
		if (Game.hasBuff('Click frenzy') || Game.hasBuff('Cookie storm')) {
			window.modo_cc.active = setInterval(function() {
				if (Game.hasBuff('Cookie storm'))
				{
					Game.shimmers.forEach(function(shimmer)
					{
					    shimmer.pop()
					})
				}
				else if (Game.hasBuff('Click frenzy'))
				{
					Game.ClickCookie();
				}
				else {
					clearInterval(window.modo_cc.active);
				}
			}, 100);
		}
	}, 500);
	
	
}());