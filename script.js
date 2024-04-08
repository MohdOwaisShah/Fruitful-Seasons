let hamburger = document.querySelector("header i");
let ham_navigation = document.querySelector(".hamburger-navigation");
ham_navigation.style.display = "none";
let res_navigation = document.querySelectorAll(".hamburger-navigation");
let i = 0;
res_navigation.forEach((nav) => {
    nav.addEventListener("click", () => {
        hamburger.style.position = "relative";
        hamburger.style.left = "23px";
        ham_navigation.style.display = "none";
        hamburger.className = "ri-menu-line";
    })
})
hamburger.addEventListener("click", function () {
    if (i == 0) {
        hamburger.style.position = "fixed";
        hamburger.style.left = "726px";
        hamburger.className = "ri-close-large-line";
        ham_navigation.style.display = "flex";
        res_navigation.style.display="block";
        i = 1;
    }
    else {
        hamburger.style.position = "relative";
        hamburger.style.left = "23px";
        ham_navigation.style.display = "none";
        hamburger.className = "ri-menu-line";
        i = 0
    }
})
