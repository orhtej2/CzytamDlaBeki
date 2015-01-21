var pageMod = require("sdk/page-mod");
var data = require("sdk/self").data;

pageMod.PageMod({
  include: [ "http://niezalezna.pl/*", /http:\/\/.*\.niezalezna\.pl\/.*/, "http://naszeblogi.pl/*", "http://rebelya.pl/*",
			 /http:\/\/.*\.rebelya\.pl\/.*/, "http://salon24.pl/*", /http:\/\/.*\.salon24\.pl\/.*/, "http://wpolityce.pl/*",
			 /http:\/\/*.wpolityce\.pl\/.*/, "http://nowyekran.pl/*", /http:\/\/.*\.nowyekran\.pl\/.*/, "http://www.pch24.pl/*",
			 /http:\/\/.*\.pch24\.pl\/.*/, "http://prawy.pl/*", "http://prawica.net/*", "http://fronda.pl/*",
			 /http:\/\/.*\.fronda\.pl\/.*/, "http://oksiuta.blog.onet.pl/*", "http://korwin-mikke.blog.onet.pl/*",
			 "http://korwin-mikke.pl/*", "http://nczas.pl/*", "http://nowaprawica.org.pl/*" ],
  contentScriptFile: "./dlabeki.js",
  attachTo: "top",
  contentScriptOptions: {
	imageURL: data.url("ribbon1_red_top_right.png")
  }
});