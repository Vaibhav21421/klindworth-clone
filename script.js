const nav_switch = document.querySelector("#nav-switch");

const line1 = document.querySelector("#nav-switch #line1");
const line2 = document.querySelector("#nav-switch #line2");



nav_switch.addEventListener("mouseenter",()=>{
    console.log("hi");
    line2.style.transform = "rotate(-90deg)";
    
    nav_switch.style.width = "4vw";
    nav_switch.style.borderRadius = "50%"; 


    
    // line1.style.position="absolute";
    // line1.style.marginTop="20%";
})

nav_switch.addEventListener("mouseleave",()=>{
    console.log("bi")
    line2.style.transform = "rotate(0deg)";
    nav_switch.style.borderRadius = "25px"; 

    nav_switch.style.width = "9.7vw";

   


    // line1.style.position="inherit";
    // line1.style.marginTop="initial";
})





gsap.to("#pg1 img",{
    width:"100%",
    top:0,
    delay:2,
    duration:2,
    scrollTrigger:{
        scroller:"body",
        trigger:"#pg1",
        // markers:true,
        scrub:1,
        // top:0, 
        start:"top 0%",
        end:"top -100%",
        pin:true


    }

    
})