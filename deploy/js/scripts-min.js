gsap.set("#outline",{alpha:0}),gsap.set(".burger-lines",{transformOrigin:"50% 50%"});var lineToLine=gsap.timeline({paused:!0});lineToLine.to("#top-line",{duration:.25,y:5},"move-lines").to("#bottom-line",{duration:.25,y:-5},"move-lines"),$("#burger-container").on("mouseenter",(function(){console.log("mouse enter"),lineToLine.play()})),$("#burger-container").on("mouseleave",(function(){console.log("mouse leave"),lineToLine.reverse()})),$("#burger-container").on("click",(function(){console.log("click"),gsap.set("#outline",{alpha:1}),gsap.timeline().to("#burger-container",{duration:.25,rotate:-180},"create-x").to("#top-line",{duration:.25,rotate:45},"create-x").to("#bottom-line",{duration:.25,rotate:-45},"create-x").from("#outline",{duration:.5,drawSVG:"0"},"create-x")})),$(document).ready((function(){gsap.registerPlugin(DrawSVGPlugin)}));