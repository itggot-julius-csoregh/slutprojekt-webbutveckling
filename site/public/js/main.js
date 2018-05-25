function toggleMenu() {
    var element = document.querySelector(".wrapper");
    element.classList.toggle("show-menu");

    var element = document.querySelector(".fade-plane");
    element.classList.toggle("fade");

    var element = document.querySelector(".menu-icon");
    element.classList.toggle("fade-menu-icon");

    var element = document.querySelector(".close-icon");
    element.classList.toggle("show-close-icon");
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