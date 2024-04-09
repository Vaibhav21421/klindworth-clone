gsap.to("#pg1 img",{
    width:"100%",
    top:0,
    delay:2,
    duration:2,
    scrollTrigger:{
        scroller:"body",
        trigger:"#pg1",
        markers:true,
        scrub:2,
        // top:0, 
        start:"top 0%",
        end:"top -100%",
        pin:true


    }

    
})