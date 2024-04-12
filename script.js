const nav_switch = document.querySelector("#nav-switch");
const nav_switch_parent = document.querySelector("#nav-switch-parent");
const line1 = document.querySelector("#nav-switch #line1");
const line2 = document.querySelector("#nav-switch #line2");
const bothlines = document.querySelector(".line")

const nav_pg = document.querySelector("#nav-pg");

var count = 0;
//click pr slide down












nav_switch_parent.addEventListener("mouseenter",()=>{
    line2.style.transform = "rotate(-90deg)";
    nav_switch.style.gap = "0px";
    nav_switch.style.width = "4vw";
    nav_switch.style.borderRadius = "50%"; 


   
    
    
    
    // line1.style.position="absolute";
    // line1.style.marginTop="20%";
})

nav_switch_parent.addEventListener("mouseleave",()=>{
    line2.style.transform = "rotate(0deg)";
    nav_switch.style.borderRadius = "25px"; 
    nav_switch.style.gap = "7px"
    nav_switch.style.width = "9.7vw";
    
    
    
    
    
    
    
    
})




//nav-pg animation

const tl = gsap.timeline()
tl.to("#nav-pg",{
    top:"0vh",
    duration:0.1
})
tl.from("#nav-pg #part-2 h1",{
    opacity:0,
    delay:0.1,
    duration:0.4,
    y:30,
    stagger:0.19
})
tl.from("#nav-pg #part-3",{
    opacity:0,
    duration:1.3,
})

tl.pause();

        
        
        





        
        
        
        
        
        nav_switch_parent.addEventListener("click",()=>{
            if(count == 0){
                // nav_pg.style.top="0";
                count++;
                // console.log(count);
                tl.play();
            }
            else{
                // tl.reset();
                // nav_pg.style.top="-130vh";
                count = 0;
                gsap.to("#nav-pg #part-2 h1",{
                    opacity:0,
                    duration:0.5    
                })
                gsap.to("#nav-pg #part-3",{
                    opacity:0,
                    duration:0.5
                })
                tl.to("#nav-pg",{
                    top:"-130vh",
                    duration:0.1,
                    delay:0.5
                })


                // tl.reverse();
                // console.log(count);
            }
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