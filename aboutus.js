// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Initialize GSAP animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Header Animation
  gsap.from('.header-content', {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  });

  // Navigation Links Stagger
  gsap.from('.nav-links a', {
    opacity: 0,
    y: 20,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power2.out',
    delay: 0.5
  });

  // Hero Section Animation
  const heroTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.hero-section',
      start: 'top center',
      end: 'bottom center',
      toggleActions: 'play none none reverse'
    }
  });

  heroTl
    .from('.hero-image', {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    })
    .from('.about-label', {
      y: 30,
      opacity: 0,
      duration: 0.6
    }, '-=0.4')
    .from('.hero-title', {
      y: 50,
      opacity: 0,
      duration: 0.8
    }, '-=0.3')
    .from('.hero-text', {
      y: 30,
      opacity: 0,
      duration: 0.6
    }, '-=0.4')
    .from('.learn-more-btn', {
      scale: 0.8,
      opacity: 0,
      duration: 0.5
    }, '-=0.2');

  // Scroll-triggered animations for sections
  gsap.utils.toArray('section').forEach((section, i) => {
    const elements = section.children;
    
    gsap.from(elements, {
      scrollTrigger: {
        trigger: section,
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out'
    });
  });

  // Footer Animation
  gsap.from('#footer', {
    scrollTrigger: {
      trigger: '#footer',
      start: 'top bottom',
      toggleActions: 'play none none reverse'
    },
    y: 50,
    opacity: 0,
    duration: 1
  });

  // Smooth Scroll for Navigation Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      
      if (target) {
        gsap.to(window, {
          duration: 1,
          scrollTo: {
            y: target,
            offsetY: 80
          },
          ease: 'power3.inOut'
        });
      }
    });
  });

  // Parallax Effect for Hero Image
  gsap.to('.hero-image', {
    scrollTrigger: {
      trigger: '.hero-section',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    },
    y: 100,
    ease: 'none'
  });

  // Header Scroll Effect
  ScrollTrigger.create({
    start: 'top -80',
    end: 99999,
    toggleClass: {
      className: 'bg-white shadow-md',
      targets: '.nav-section'
    }
  });
});
