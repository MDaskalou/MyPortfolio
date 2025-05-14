
window.onload = function () {
    var typed = new Typed('.text', {
        strings: ["Frontend Developer", "Backend Developer", "Dancer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
};

document.addEventListener("DOMContentLoaded", () => {
    console.log("✅ Script is running");

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
document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper(".portfolio-swiper", {
        effect: "slide",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('navLinks').classList.remove('open');
    });
});

function toggleMenu() {
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('open');
}
document.addEventListener("DOMContentLoaded", () => {
    const scrollBtn = document.getElementById("scrollTopBtn");

    window.addEventListener("scroll", () => {
        scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    scrollBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Hamburger toggle
    const hamburger = document.querySelector(".hamburger");
    const nav = document.getElementById("navLinks");

    hamburger.addEventListener("click", () => {
        nav.classList.toggle("open");
    });

    // Close menu on link click (optional)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('open');
        });
    });
});
