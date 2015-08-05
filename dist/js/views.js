require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"views":[function(require,module,exports){
var views={"about":"<header>\n  <a href=\"#portfolio\" id=\"logo\">\n    <h1>Mark Harper</h1>\n    <h2>Developer</h2>\n  </a>\n  <nav>\n    <ul>\n      <li><a href=\"#portfolio\">Portfolio</a></li>\n      <li><a href=\"#about\" class=\"selected\">About</a></li>\n      <li><a href=\"#contact\">Contact</a></li>\n    </ul>\n  </nav>\n</header>\n<div id=\"wrapper\">\n  <section>\n    <img src=\"img/MarkHarperPhoto.jpg\" alt=\"Photograph of Mark Harper\" class=\"profile-photo\">\n    <h3>About</h3>\n    <p>Hi, I'm Mark Harper! I'm a front end web developer with a passion for clean and functional UI's.</p>\n    <p>Currently, my focus is on combining jQuery, Backbone.js and D3.js to tell interesting visual stories with data.</p>\n    <p>If you'd like to follow me on Twitter, my username is <a href=\"http://twitter.com/IAmMarkHarper\">@IAmMarkHarper</a>.</p>\n  </section>\n  <footer>\n    <a href=\"http://twitter.com/IAmMarkHarper\"><svg class=\"icon-twitter-square social-icon\"><use xlink:href=\"#icon-twitter-square\"></use></svg></a>\n    <a href=\"https://github.com/MarkHarper\"><svg class=\"icon-github-square social-icon\"><use xlink:href=\"#icon-github-square\"></use></svg></a>\n    <a href=\"https://www.linkedin.com/pub/mark-harper/74/631/67\"><svg class=\"icon-linkedin-square social-icon\"><use xlink:href=\"#icon-linkedin-square\"></use></svg></span></a>\n    <p>&copy; 2015 Mark Harper.</p>\n  </footer>\n</div>\n","contact":"<header>\n  <a href=\"#portfolio\" id=\"logo\">\n    <h1>Mark Harper</h1>\n    <h2>Developer</h2>\n  </a>\n  <nav>\n    <ul>\n      <li><a href=\"#portfolio\">Portfolio</a></li>\n      <li><a href=\"#about\">About</a></li>\n      <li><a href=\"#contact\" class=\"selected\">Contact</a></li>\n    </ul>\n  </nav>\n</header>\n<div id=\"wrapper\">\n  <section id=\"primary\">\n    <h3>General Information</h3>\n    <p>I am currently seeking front end development work, as I have recently The Iron Yard's front end engineering program.</p>\n    <p>If you would like to hire me, work with me, or simply want to talk about web development, it is best to reach me through email.</p>\n  </section>\n  <section id=\"secondary\">\n    <h3>Contact Details</h3>\n    <ul class=\"contact-info\">\n      <li class=\"phone\"><a href=\"tel:919-698-9265\">(919)-698-9265</a></li>\n      <li class=\"mail\"><a href=\"mailto:markharper20@gmail.com\">markharper20@gmail.com</a></li>\n      <li class=\"twitter\"><a href=\"http://twitter.com/intent/tweet?screen_name=nickrp\">@IAmMarkHarper</a></li>\n    </ul>\n  </section>\n  <footer>\n    <a href=\"http://twitter.com/IAmMarkHarper\"><svg class=\"icon-twitter-square social-icon\"><use xlink:href=\"#icon-twitter-square\"></use></svg></a>\n    <a href=\"https://github.com/MarkHarper\"><svg class=\"icon-github-square social-icon\"><use xlink:href=\"#icon-github-square\"></use></svg></a>\n    <a href=\"https://www.linkedin.com/pub/mark-harper/74/631/67\"><svg class=\"icon-linkedin-square social-icon\"><use xlink:href=\"#icon-linkedin-square\"></use></svg></span></a>\n    <p>&copy; 2015 Mark Harper.</p>\n  </footer>\n</div>\n\n","home":"<header>\n  <a href=\"#portfolio\" id=\"logo\">\n    <h1>Mark Harper</h1>\n    <h2>Developer</h2>\n  </a>\n  <nav>\n    <ul>\n      <li><a href=\"#portfolio\" class=\"selected\">Portfolio</a></li>\n      <li><a href=\"#about\">About</a></li>\n      <li><a href=\"#contact\">Contact</a></li>\n    </ul>\n  </nav>\n</header>\n<div id=\"wrapper\">\n  <section>\n    <ul id=\"gallery\">\n      <li>\n        <a href=\"http://markharper.io/smashingboxes/\">\n          <img src=\"img/screenshots/Smashing Academy.clipular.png\" alt=\"\">\n          <p>Smashing Boxes Rebuild</p>\n        </a>\n      </li>\n      <li>\n        <a href=\"http://markharper.io/memory-game/\">\n          <img src=\"img/screenshots/memory-game.clipular.png\" alt=\"\">\n          <p>Memory Game</p>\n        </a>\n      </li>\n      <li>\n        <a href=\"http://markharper.io/user-management/\">\n          <img src=\"img/screenshots/User-Management.clipular.png\" alt=\"\">\n          <p>User Sign In App</p>\n        </a>\n      </li>\n      <li>\n        <a href=\"http://markharper.io/appointments-app/\">\n          <img src=\"img/screenshots/Appointments.clipular.png\" alt=\"\">\n          <p>Appointment Manager</p>\n        </a>\n      </li>\n      <li>\n        <a href=\"https://salty-ridge-9318.herokuapp.com/\">\n          <img src=\"img/screenshots/Opossum.clipular.png\" id=\"survey-app\" alt=\"\">\n          <p>Survey Manager</p>\n        </a>\n      </li>\n      <li>\n        <a href=\"http://www.builditgreen.io\">\n          <img src=\"img/screenshots/B I G.clipular.png\" alt=\"\">\n          <p>Build It Green</p>\n        </a>\n      </li>\n    </ul>\n  </section>\n  <footer>\n    <a href=\"http://twitter.com/IAmMarkHarper\"><svg class=\"icon-twitter-square social-icon\"><use xlink:href=\"#icon-twitter-square\"></use></svg></a>\n    <a href=\"https://github.com/MarkHarper\"><svg class=\"icon-github-square social-icon\"><use xlink:href=\"#icon-github-square\"></use></svg></a>\n    <a href=\"https://www.linkedin.com/pub/mark-harper/74/631/67\"><svg class=\"icon-linkedin-square social-icon\"><use xlink:href=\"#icon-linkedin-square\"></use></svg></span></a>\n    <p>&copy; 2015 Mark Harper</p>\n  </footer>\n</div>\n\n"};
if (typeof module !== "undefined" && module.exports) { module.exports = views; }
},{}]},{},[]);
