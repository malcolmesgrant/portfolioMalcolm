

$("ul").click("li.AboutMe", function() {
    $('html,body').animate({
        scrollTop: $(".blurb").offset().top},
        'slow');
});
$("ul").click("li.Projects", function() {
    $('html,body').animate({
        scrollTop: $(".Projects").offset().top},
        'slow');
});
