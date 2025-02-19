document.addEventListener("DOMContentLoaded", function () {
    gsap.from("header", { duration: 1, opacity: 0, y: -50, ease: "power2.out" });

    gsap.from(".nav-item", {
        duration: 1,
        opacity: 0,
        y: -20,
        stagger: 0.2,
        ease: "power2.out"
    });

    gsap.from("#contact-title", { duration: 1, opacity: 0, y: -30, ease: "power2.out", delay: 0.5 });
    gsap.from("#contact-desc", { duration: 1, opacity: 0, y: -20, ease: "power2.out", delay: 0.7 });

    gsap.from(".input-field", {
        duration: 1,
        opacity: 0,
        x: -50,
        stagger: 0.3,
        ease: "power2.out",
        delay: 1
    });

    gsap.to(".submit-btn", {
        scale: 1.1,
        duration: 0.3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
    });

    gsap.from("#footer", {
        scrollTrigger: {
            trigger: "#footer",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        duration: 1,
        opacity: 0,
        y: 50,
        ease: "power2.out"
    });
});
