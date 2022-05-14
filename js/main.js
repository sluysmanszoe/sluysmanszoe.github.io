// $(document).ready(function(){
//     $('#loading-overlay').remove();
//     $('header, main, footer').css('visibility','visible');
// });

$(window).on('load', function () {
    $(".dot").css("animation-name","none");
    $(".home-icon").css("z-index","8");
    $("#loading-overlay").fadeOut("slow");
    console.log("geladen");
});