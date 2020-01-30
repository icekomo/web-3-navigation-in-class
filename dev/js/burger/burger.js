
var canYouSeeNav = false;
gsap.set("#nav-bg",{transformOrigin:"50% 50%"});

// hide outline
gsap.set("#outline",{alpha:0});
// reset the roation pin for the lines
gsap.set(".burger-lines",{transformOrigin:"50% 50%"});

// hide the Navigation
gsap.set("nav",{display:"none"});


function hideNav(){
    gsap.set("nav",{display:"none"});
    gsap.set("nav li",{alpha:1});
}
