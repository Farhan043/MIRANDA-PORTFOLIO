const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


gsap.from("#nav img, #nav h5, #nav i", {
        y: -100,
        duration:1,
        delay: 3,
        opacity: 0,
        stagger:0.2 
            
})


var t1 = gsap.timeline()

t1.to("#page1", {
    y: "100vh",
    scale: 0.6,
    duration:0
})

t1.to("#page1", {
    y: "30vh",
    duration: 1,
    delay:1
})
t1.to("#page1", {
    y: "0vh",
    rotate: 360,
    scale:1
})



let menuIcon = document.querySelector('#menu');

menuIcon.onclick = function () {
    sidebar.classList.rotate
}