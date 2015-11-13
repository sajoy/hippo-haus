$(function() {
  $("form").on("submit", function(e) {
    e.preventDefault();

    $(".result").text("You have obviously not adequately prepared for this party. You need HIPPO now!");
  });
});
