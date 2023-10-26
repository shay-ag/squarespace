var tl = gsap.timeline()

tl.from("nav img, .nav-part2, .nav-part3", {
    y: -100,
    duration: 1,
    delay: 0.5,
    opacity: 0,
    stagger: 0.4
})

tl.from(".homepage h1", {
    y: 100,
    duration: 1,
    opacity: 0,
    stagger:0.3
})

tl.from(".homepage img", {
    scale: 0,
    opacity: 0,
    duration: 1,
})

tl.from(".scroll", {
    scale: 0,
    opacity: 0
})
tl.to(".scroll", {
    y: 20,
    repeat: -1,
    duration: 0.5,
    yoyo: true
})