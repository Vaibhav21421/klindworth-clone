gsap.from("#pg2 img",{
    width:"20%",
    delay:2,
    duration:2,
    scrollTrigger:{
        scroller:"body",
        trigger:"#pg2",
        markers:true,
        scrub:2,
        // top:0, 
        start:"top 10%",
        end:"top 0",
        pin:true


    }

    
})