$(document).ready(function() {
    // Add event listeners to the navigation links.
    $("nav a").click(function() {
      var sectionId = $(this).attr("href");
      $("html, body").animate({ scrollTop: $(sectionId).offset().top }, 500);
    });
  });
  