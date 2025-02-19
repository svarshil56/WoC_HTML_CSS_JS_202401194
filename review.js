document.addEventListener("DOMContentLoaded", function () {
    // Logo animation
    gsap.from("#symbol", { 
        opacity: 0, 
        y: -50, 
        duration: 1, 
        ease: "power2.out" 
    });

    // Navigation links animation
    gsap.from(".nav-item", { 
        opacity: 0, 
        y: -20, 
        duration: 0.8, 
        stagger: 0.2, 
        ease: "power2.out" 
    });

    // Testimonials fade-in animation
    gsap.from(".h-full", { 
        opacity: 0, 
        y: 30, 
        duration: 1, 
        stagger: 0.3, 
        scrollTrigger: {
            trigger: ".h-full",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });

    // Footer animation
    gsap.from("#footer", { 
        opacity: 0, 
        y: 50, 
        duration: 1, 
        ease: "power2.out", 
        scrollTrigger: {
            trigger: "#footer",
            start: "top 90%",
            toggleActions: "play none none none"
        }
    });
});
