window.addEventListener("scroll", function () {
    if (document.body.clientWidth <= 1024) {
        if (sticky.getBoundingClientRect().top <= 111) {
            sticky.classList.add("sticky_top");
        } else {
            sticky.classList.remove("sticky_top");
        }    } else {
        if (sticky.getBoundingClientRect().top <= 64) {
            sticky.classList.add("sticky_top");
        } else {
            sticky.classList.remove("sticky_top");
        }
    };
})
