
// timeline for the burger lines to become 1 line
var lineToLine = gsap.timeline({paused:true});
lineToLine.to("#top-line",{duration:0.25, y:5},"move-lines")
.to("#bottom-line",{duration:0.25, y:-5},"move-lines");


$("#burger").on("mouseenter", function(){
    console.log("mouse enter");
    // play the timeline to combine the lines into 1 line
    lineToLine.play();
});
