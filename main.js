
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
