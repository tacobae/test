# Frenzy Clicker

A simple add-on for [Cookie Clicker](http://orteil.dashnet.org/cookieclicker/) that auto-clicks during Click Frenzy and Cookie Storm.

## How to use

Create a bookmark with this line in the address bar:

    javascript:( function () { Game.LoadMod('http://apps.modo.lv/cookie-clicker/frenzy-clicker.js'); }() );

With Cookie Clicker open, click the bookmark.

## Other mods
Frenzy Clicker should not conflict with any other mods (using other auto-clickers at the same time might slow down the game, though). To easily load FC and other mods together, just add them to the bookmark.

### Cookie Monster

    javascript:( function () {
      Game.LoadMod('https://aktanusa.github.io/CookieMonster/CookieMonster.js');
      Game.LoadMod('http://apps.modo.lv/cookie-clicker/frenzy-clicker.js');
    }() );
