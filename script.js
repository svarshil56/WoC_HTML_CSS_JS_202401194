// // // gsap.to() -> Initial to Final
// // // gsap.from() -> Final to Initial

// // gsap.to("#Subjects",{duration: 3,delay:5, scale: .8, opacity: 1, stagger: 0.5,});
// // gsap.to("#symbol",{duration: 1, rotation: 360,x:100, scale: 1, opacity: 1, ease: "bounce", stagger: 0.5,borderColor: "red",borderRadius: "0%",backgroundColor: "black",});
// // gsap.to("#header",{duration: 2, x: 100, scale: 1, opacity: 1, ease: "bounce", stagger: 0.5,});
// // gsap.from("#intro",{duration: 2,stagger:1,opacity:0,color : "green",y:30});
// // gsap.to("#image",{duration: 2,delay : 1, borderRadius:"50%",scale: 1, opacity: 1, stagger: 0.5,repeat: 1, yoyo: true,});

// // script.js
// var tl = gsap.timeline();
// tl.from("#symbol",{duration: 1,delay:.25,y:-30,x:-30, scale: 1, opacity: 0, ease: "bounce", stagger: 0.5,});
// tl.from("#header",{duration: 1, y:-30, scale: 1, opacity: 0, ease: "bounce", stagger: 0.5,});
// tl.from("#inhe",{duration: 1,x:100, scale: 1, opacity: 0, ease: "bounce", stagger: 0.5,});
// tl.from("#intro",{duration: 1,stagger:1,opacity:0,color : "green",y:30});
// tl.from("#image",{duration: .5, borderRadius:"100%",scale: 1, opacity: 0, stagger: 0.5,});
// tl.from("#Subjects",{duration: 2,y:-40,x:-40, scale: .4, opacity: 0,ease:"bounce", stagger: 0.5,});
// tl.from("#teacher",{duration: 1,stagger:1,opacity:0,color : "green",y:30});
// Initialize GSAP with ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Initial page load animations
const initialAnimation = () => {
    const tl = gsap.timeline();
    
    // Header animations
    tl.from(".nav-section", {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
    });
    
    // Nav items stagger
    tl.from(".nav-item", {
        y: -50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "back.out(1.7)"
    }, "-=0.5");
    
    // Hero content animation
    tl.from(".hero-content", {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power4.out"
    }, "-=0.3");
    
    // Hero image animation
    tl.from(".hero-image", {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
    }, "-=0.5");
};

// Scroll trigger animations
const scrollAnimations = () => {
    // Subjects section cards
    gsap.from("#Subjects",{
        delay: 3.2,
        duration: 1.5,
        y:-40,
        x:-40,
        scale: .4,
        opacity: 0,
        ease:"bounce",
        stagger: 0.5,});

    
    // Teachers section
    gsap.from(".teacher-cards", {
        delay : .5,
        scrollTrigger: {
            
            trigger: ".teachers-section",
            start: "top center",
            toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
    });
    
    // Text reveal animations
    gsap.utils.toArray(".text-reveal").forEach(text => {
        gsap.from(text, {
            scrollTrigger: {
                trigger: text,
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power4.out"
        });
    });
};

// Smooth scroll implementation
const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: {
                        y: target,
                        offsetY: 70
                    },
                    ease: "power4.inOut"
                });
            }
        });
    });
};

// Initialize all animations
document.addEventListener('DOMContentLoaded', () => {
    initialAnimation();
    scrollAnimations();
    initSmoothScroll();
});

// Intersection Observer for fade-in elements
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

// Observe all elements with 'hidden' class
document.querySelectorAll('.hidden').forEach(element => {
    observer.observe(element);
});


