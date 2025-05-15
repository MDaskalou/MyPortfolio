// === TYPED TEXT EFFECT ===
window.onload = function () {
    var typed = new Typed('.text', {
        strings: ["Frontend Developer", "Backend Developer", "Dancer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
};

// === FADE-IN SECTION EFFECT ===
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});

// === SWIPER INIT FOR PORTFOLIO ===
document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper(".portfolio-swiper", {
        effect: "slide",
        grabCursor: true,
        centeredSlides: false,
        slidesPerView: 1,
        loop: true,
        spaceBetween: 30, // lägg lite luft mellan slides
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});

// === HAMBURGER MENU TOGGLE ===
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const nav = document.getElementById("navLinks");

    hamburger.addEventListener("click", () => {
        nav.classList.toggle("open");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("open");
        });
    });
});

// === SCROLL TO TOP BUTTON ===
document.addEventListener("DOMContentLoaded", () => {
    const scrollBtn = document.getElementById("scrollTopBtn");

    window.addEventListener("scroll", () => {
        scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    scrollBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
