// Loading Spinner
window.addEventListener("load", function () {
    document.getElementById("loading-spinner").style.display = "none";
    document.querySelectorAll(".content").forEach(section => {
        section.classList.add("visible");
    });
});

// Intersection Observer for animations on scroll
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    { threshold: 0.5 }
);

document.querySelectorAll(".fade-in, .slide-in").forEach(section => {
    observer.observe(section);
});
