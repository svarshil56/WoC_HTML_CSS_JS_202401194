// Initialize GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

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
})

//Course cards stagger animation - Modified for better scroll trigger
// const courseCards = document.querySelectorAll('.xl\\:w-1\\/4');
// courseCards.forEach((card, index) => {
//   gsap.from(card, {
//     scrollTrigger: {
//       trigger: card,
//       start: "top bottom-=100", // Trigger earlier
//       end: "top center",
//       toggleActions: "play none none reverse",
//       markers: true, // For debugging
//     },
//     y: 100,
//     opacity: 0,
//     duration: 1,
//     delay: index * 0.2,
//     ease: "power2.out"
//   });
// });

// Course titles reveal animation
const courseTitles = gsap.utils.toArray('.text-5xl');
courseTitles.forEach(title => {
  gsap.from(title, {
    scrollTrigger: {
      trigger: title,
      start: "top bottom-=50",
      toggleActions: "play none none reverse"
    },
    x: -50,
    opacity: 0,
    duration: 0.8
  });
});

// Button hover animations
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('mouseenter', () => {
    gsap.to(button, {
      scale: 1.05,
      duration: 0.3,
      ease: "power1.out"
    });
  });

  button.addEventListener('mouseleave', () => {
    gsap.to(button, {
      scale: 1,
      duration: 0.3,
      ease: "power1.out"
    });
  });
});

// Footer sections animation
gsap.from('#footer div.lg\\:w-1\\/4', {
  scrollTrigger: {
    trigger: '#footer',
    start: "top 80%",
    toggleActions: "play none none reverse"
  },
  y: 50,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  ease: "power2.out"
});

// Social icons hover animation
const socialIcons = document.querySelectorAll('#footer svg');
socialIcons.forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    gsap.to(icon, {
      scale: 1.2,
      rotation: 10,
      duration: 0.3
    });
  });

  icon.addEventListener('mouseleave', () => {
    gsap.to(icon, {
      scale: 1,
      rotation: 0,
      duration: 0.3
    });
  });
});

// Add smooth scrolling behavior
// window.addEventListener('load', () => {
//   document.documentElement.style.scrollBehavior = 'smooth';
// });