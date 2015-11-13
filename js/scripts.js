$(function() {
  $("form").on("submit", function(e) {
    e.preventDefault();

    $(".result").text("It is obvious that you need Hippo!");
  });
});
