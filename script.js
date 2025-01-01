document.addEventListener("DOMContentLoaded", () => {
    // Scroll-based animation for .scroll-text elements
    document.addEventListener("scroll", () => {
        const scrollElements = document.querySelectorAll(".scroll-text");
        const windowHeight = window.innerHeight;

        scrollElements.forEach(element => {
            const elementOffset = element.getBoundingClientRect().top;

            if (elementOffset < windowHeight - 100) {
                element.classList.add("visible");
            }
        });
    });

    // Get elements for navigation menu
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    // Toggle menu visibility on button click
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        const isExpanded = navMenu.classList.contains("active");
        menuToggle.setAttribute("aria-expanded", isExpanded);
    });

    // Close menu when clicking outside (optional feature)
    document.addEventListener("click", (event) => {
        if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            navMenu.classList.remove("visible");
            // menuToggle.setAttribute("aria-expanded", "false");
        }
    });
});

