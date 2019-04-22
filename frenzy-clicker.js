javascript:(function() {
	let FC = window.FrenzyClicker || (window.FrenzyClicker = {
		CCVersion: 2.019,
		Version: 2.019.1
		Checking: null,
		Clicking: null,
		Debug: false
	});
	
	// Reset in case of reload
	clearInterval(FC.Clicking);
	clearInterval(FC.Checking);

	// Check for version match
	let load = true;
	if (Game.version != FC.Version) {
		load = confirm("Frency Clicker " + FC.Version + " is meant for Cookie Clicker version " + FC.CCVersion + ", you are playing version " + Game.version + ". Load anyway?");
	}
	if (!load)
		return;
		
	// Set up the clicking
	setInterval(function() {
		if (FC.Clicking) {
			debug("FC already clicking, nothing to do.")
			return;
		}
			
		debug("Checking for buffs.");
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
					debug("Buff over, stoping clicking.");
					clearInterval(FC.Clicking);
				}
			}, 100);
		}
	}, 500);
	
	function debug(...params) {
		if (FC.Debug)
			console.debug(console, params);
	}
}());