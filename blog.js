document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        const extraContent = this.nextElementSibling;
        if (extraContent.style.display === "block") {
            extraContent.style.display = "none";
            this.textContent = "Read More";
        } else {
            extraContent.style.display = "block";
            this.textContent = "Show Less";
        }
    });
});
