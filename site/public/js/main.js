function toggleMenu() {
    var element = document.querySelector(".wrapper");
    element.classList.toggle("show-menu");

    var element = document.querySelector(".container");
    element.classList.toggle("fade");

    var element = document.querySelector("body");
    element.classList.toggle("no-scroll");
}

