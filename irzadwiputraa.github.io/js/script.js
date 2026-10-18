
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const menuIcon = menuToggle.querySelector("i");

// Membuka dan menutup menu HP
menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    const menuIsOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", menuIsOpen);

    if (menuIsOpen) {
        menuIcon.classList.replace("fa-bars", "fa-xmark");
    } else {
        menuIcon.classList.replace("fa-xmark", "fa-bars");
    }
});

// Menutup menu setelah link dipilih
navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");

        menuIcon.classList.replace("fa-xmark", "fa-bars");
    });
});
