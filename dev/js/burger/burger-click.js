var lineToX = gsap.timeline({paused:true});
lineToX.to("#burger-container",{duration:0.25, rotate:-180},"create-x")
.to("#top-line",{duration:0.25, rotate:45},"create-x")
.to("#bottom-line",{duration:0.25, rotate:-45},"create-x")
.from("#outline",{duration:0.5, drawSVG:"0"},"create-x");

$("#burger-container").on("click", function(){
    console.log("click");
    if(canYouSeeNav === false){
        gsap.set("#outline",{alpha:1});
        lineToX.play();
        // grow background
        gsap.to("#nav-bg",{duration:0.5, scale:100, alpha:0.85});
        // set nav position to flex
        gsap.set("nav",{display:"flex"});
        gsap.from("nav li",{duration:0.5, alpha:0, stagger:0.15, delay:0.25, y:50});

        canYouSeeNav = true;
    }else{
        lineToX.reverse();
        // shrink background
        gsap.to("#nav-bg",{duration:0.25, scale:1});
        gsap.to("nav li",{duration:0.25, alpha:0, onComplete:hideNav});
        canYouSeeNav = false;
    }
});
