javascript:(function() {
	let FC = window.FrenzyClicker || (window.FrenzyClicker = {
		CCVersion: 2.019,
		Version: "2.019.2",
		Checking: null,
		Clicking: null,
		Debug: false,
		Speed: 100,
	});
	
	// Reset in case of reload
	clearInterval(FC.Clicking);
	clearInterval(FC.Checking);

	// Check for version match
	let load = true;
	if (Game.version != FC.CCVersion) {
		load = confirm("Frency Clicker " + FC.Version + " is meant for Cookie Clicker version " + FC.CCVersion + ", you are playing version " + Game.version + ". Load anyway?");
	}
	if (!load)
		return;
		
	// Set up the clicking
	setInterval(function() {
		if (FC.Clicking > 0) {
			debug("Clicking big cookie (frenzy) or all golden cookies (storm) " + (1000 / FC.Speed).toFixed(2) + " times per second.")
			return;
		}
			
		if (Game.hasBuff('Click frenzy') || Game.hasBuff('Cookie storm')) {
			debug("Buff active, starting clicking.");
			FC.Clicking = setInterval(function() {
				if (Game.hasBuff('Cookie storm')) {
					Game.shimmers.forEach(function(shimmer) {
					    shimmer.pop()
					})
				}
				else if (Game.hasBuff('Click frenzy')) {
					Game.ClickCookie();
				}
				else {
					debug("Buff over, stopping clicking.");
					FC.Clicking = clearInterval(FC.Clicking);
				}
			}, FC.Speed);
		}
		else
			debug("Waiting for frenzy or storm.");
	}, 500);
	
	function debug(...params) {
		if (FC.Debug)
			console.debug.apply(console, params);
	}
}());