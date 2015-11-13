var responses = ["It is so obvious you need HIPPO!",
                 "You have obviously not adequately prepared for this party. You need HIPPO now!",
                 "Your party is weak; get cool with HIPPO!",
                 "HIPPO IS WHAT YOU ARE NEEDING AT THIS TIME",
                 "You are needing deiner hippo upgrade version 4",
                 "Your party... it needs hippo"
               ];

function getRandomInt(min, max) {
 return Math.floor(Math.random() * (max - min)) + min;
}

$(function() {
  $("form").on("submit", function(e) {
    e.preventDefault();
    $(".result").text(responses[getRandomInt(0,5)]);
  });
});
