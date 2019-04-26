'use strict';

javascript:(function() {
	class FrenzyClicker {
	
		constructor() {
			this.mainTicker = 0;
			this.settings = {
				frequency: 100,
				debug: true,
			};
			this.ccVersion = 2.019,
			this.version = "2.019.4",
			this.clickBuffs = [
				"Elder frenzy",
				"Click frenzy",
				"Cursed finger",
				"Cookie storm",
				"Dragonflight"
			]
			this.hadBuffs = false;
			this.hadCookieStorm = false;
			
			window.FrenzyClicker = this;
		}
		
		
	
		tick() {
			let self = window.FrenzyClicker;
			if (!self.hasAnyClickBuffs()) {
				if (self.hadBuffs) {
					self.hadBuffs = false;
					self.debug("Buff(s) off.");
					if (self.hadCookieStorm) {
						self.hadCookieStorm = false;
						self.debug("Ensuring Cookie Storm leftovers are cleaned up.");
						while (Game.shimmers.length > 0)
							Game.shimmers.forEach((shimmer) => shimmer.pop());
					}
				}
				return;
			}
				
			if (!self.hadBuffs) {
				self.debug("Buff(s) on.");
			}
				
			if (Game.hasBuff('Cookie storm')) {
				if (!self.hadCookieStorm) {
					self.hadCookieStorm = true;
				}
				Game.shimmers.forEach((shimmer) => shimmer.pop())
			}
			if (Game.hasBuff('Click frenzy') || Game.hasBuff('Dragonflight') || Game.hasBuff('Elder frenzy') || Game.hasBuff('Cursed finger')) {
				Game.ClickCookie();
			}
			
			self.hadBuffs = true;
		}
		
		
		hasAnyClickBuffs() {
			return this.clickBuffs.some((buff) => Game.hasBuff(buff));
		}
		
		
		run() {
			if (!this.isRunning()) {
				// Check for version match
				let load = true;
				if (Game.version != this.ccVersion) {
					load = confirm("Frency Clicker " + this.version + " is meant for Cookie Clicker version " + this.ccVersion + ", you are playing version " + Game.version + ". Start anyway?");
				}
				if (!load)
					return false;

				this.mainTicker = setInterval(this.tick, this.Speed);
				
				let title = "Frenzy Clicker " + this.version + " loaded";
				let text = "Click speed: once every " + this.Speed + " milliseconds, or " + (1000 / this.Speed).toFixed(2) + " times per second.";
				
				Game.Notify(title, text);
				console.info(title + ". " + text);
			}
			return this;
		}
		
		
		isRunning() {
			return this.mainTicker > 0;
		}
		
		
		debug(...params) {
			if (this.Debug)
				console.debug.apply(console, params);
		}
	
	
		get Speed() { return this.settings.frequency; }
		set Speed(val) { return this.settings.frequency = val; }
		
		get Debug() { return this.settings.debug; }
		set Debug(val) { return this.settings.debug = val; }
	}
	
	return new FrenzyClicker().run();
}());