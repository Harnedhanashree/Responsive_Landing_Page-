document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("navbar");

    // Add background color change on scroll
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Change link colors on hover
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("mouseover", function() {
            link.style.color = "#ff7f50";
        });

        link.addEventListener("mouseout", function() {
            link.style.color = "white";
        });
    });

    // Smooth scrolling to sections
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});
