function toggleMenu() {
    var element = document.querySelector(".wrapper");
    element.classList.toggle("show-menu");

    var element = document.querySelector(".fade-plane");
    element.classList.toggle("fade");
/* TODO: fix dis
    var element = document.querySelector("body");
    element.classList.toggle("no-scroll"); */
}

$(document).ready(function () {
    $(".logo").click(function(){
        window.location = $(this).find("a:first").attr("href");
        return false;
    });
});