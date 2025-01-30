// // gsap.to() -> Initial to Final
// // gsap.from() -> Final to Initial

// gsap.to("#Subjects",{duration: 3,delay:5, scale: .8, opacity: 1, stagger: 0.5,});
// gsap.to("#symbol",{duration: 1, rotation: 360,x:100, scale: 1, opacity: 1, ease: "bounce", stagger: 0.5,borderColor: "red",borderRadius: "0%",backgroundColor: "black",});
// gsap.to("#header",{duration: 2, x: 100, scale: 1, opacity: 1, ease: "bounce", stagger: 0.5,});
// gsap.from("#intro",{duration: 2,stagger:1,opacity:0,color : "green",y:30});
// gsap.to("#image",{duration: 2,delay : 1, borderRadius:"50%",scale: 1, opacity: 1, stagger: 0.5,repeat: 1, yoyo: true,});

var tl = gsap.timeline();
tl.from("#symbol",{duration: 1,delay:.25,y:-30,x:-30, scale: 1, opacity: 0, ease: "bounce", stagger: 0.5,});
tl.from("#header",{duration: 1, y:-30, scale: 1, opacity: 0, ease: "bounce", stagger: 0.5,});
tl.from("#inhe",{duration: 1,x:100, scale: 1, opacity: 0, ease: "bounce", stagger: 0.5,});
tl.from("#intro",{duration: 1,stagger:1,opacity:0,color : "green",y:30});
tl.from("#image",{duration: .5, borderRadius:"100%",scale: 1, opacity: 0, stagger: 0.5,});
tl.from("#Subjects",{duration: 2,y:-40,x:-40, scale: .4, opacity: 0,ease:"bounce", stagger: 0.5,});
tl.from("#teacher",{duration: 1,stagger:1,opacity:0,color : "green",y:30});
