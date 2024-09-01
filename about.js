document.addEventListener("DOMContentLoaded", function () {
    // Scroll animations
    const animateElements = document.querySelectorAll(".animate");
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        {
            threshold: 0.2
        }
    );

    animateElements.forEach(element => observer.observe(element));

    // Discover More button functionality
    const discoverMoreBtn = document.getElementById("discoverMoreBtn");
    const moreContent = document.getElementById("moreContent");

    discoverMoreBtn.addEventListener("click", function () {
        moreContent.style.display = moreContent.style.display === "none" ? "block" : "none";
        discoverMoreBtn.textContent = moreContent.style.display === "none" ? "DISCOVER MORE" : "SHOW LESS";
    });

    // Adding fade-in effect on scroll for sections
    const sections = document.querySelectorAll(".about-text-wrapper, .section-bottom");

    const fadeInObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("fade-in");
                }
            });
        },
        {
            threshold: 0.3
        }
    );

    sections.forEach(section => fadeInObserver.observe(section));
});
