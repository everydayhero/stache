$(document).ready(function () {
    $(".vid-arrow-up").on("click", function (event) {
        event.preventDefault();
        $(".video-list").stop().animate({
            scrollTop: "-=336"
        }, 750);
    });
    $(".vid-arrow-down").on("click", function (event) {
        event.preventDefault();
        $(".video-list").stop().animate({
            scrollTop: "+=336"
        }, 750);
    });
  
    $(".vid-arrow-left").on("click", function (event) {
        event.preventDefault();
        $(".video-list").stop().animate({
            scrollLeft: "-=320"
        }, 750);
    });
    $(".vid-arrow-right").on("click", function (event) {
        event.preventDefault();
        $(".video-list").stop().animate({
            scrollLeft: "+=320"
        }, 750);
    });

    $(".video-item").on("click", function(event){
      event.preventDefault();
      var source = $(this).attr("href");
      source += "?autoplay=1&rel=0&showinfo=0&autohide=1";
      $("#video-iframe").attr("src", source);
    })
    
    $('.video-list').swiperight(function() {
      $(this).stop().animate({
            scrollLeft: "-=320"
        }, 750);
    });
    
    $('.video-list').swipeleft(function() {
      $(this).stop().animate({
            scrollLeft: "+=320"
        }, 750);
    });
});

