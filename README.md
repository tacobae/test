# Frenzy Clicker

A simple add-on for [Cookie Clicker](http://orteil.dashnet.org/cookieclicker/) that auto-clicks during Click Frenzy, Cookie Storm, Dragonflight, Elder Frenzy and Cursed Finger.

## How to use

Create a bookmark with this line in the address bar:

    javascript:( function () { Game.LoadMod('http://apps.modo.lv/cookie-clicker/frenzy-clicker.js'); }() );

With Cookie Clicker open, click the bookmark.

## Configuration
You can tweak the clicking speed by changing the FC's `Speed` setting (clicking frequency in milliseconds) in your browser's JavaScript Console (the default is 100, meaning 10 times per second):

    FrenzyClicker.Speed = 200

## Other mods
Frenzy Clicker should not conflict with any other mods (using other auto-clickers at the same time might slow down the game, though). To easily load FC and other mods together, just add them to the bookmark.

### Cookie Monster

    javascript:( function () {
      Game.LoadMod('https://aktanusa.github.io/CookieMonster/CookieMonster.js');
      Game.LoadMod('http://apps.modo.lv/cookie-clicker/frenzy-clicker.js');
    }() );
