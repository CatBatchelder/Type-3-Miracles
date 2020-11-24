import {gsap} from "gsap";


const zoomTL = gsap.timeline();

gsap.set("#Page-1", {scale: 3.5});

//var textDrawSpeed = 1;

export function zoomAnimation(){
    zoomTL.to("#Page-1", {y: -200, duration: 3, ease: "none"})
        .to("#Page-1", {y: -400, x:-200, duration: 3, scale: 2, ease: "none"})
        .to("#Page-1", {y: -400, x:-400, scale: 1.75, duration: 3, ease: "none"})
        .to("#Page-1", {y: 0, x:0, scale: 1, duration: 3})
        .to("#text", {fill: "#000", duration: 1})
        .to("#Page-1", {scale: .01, alpha:0, duration: 4, transformOrigin: "center"}, "path")
        .to("#text", {fill: "#ff0000", duration: 2}, "path")
        .to("#paths", {stroke: "#ff0000", duration: 2}, "path")
        ;
 

    return zoomTL;

}
