import {gsap} from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

const dotsTL = gsap.timeline();

//gsap.set("#moval1", {x: 387, y: 173});

var dotsDrawSpeed = 1;

export function dotsAnimation(){
    dotsTL.from("#moval1",{ duration: dotsDrawSpeed, alpha:0, ease:"none", motionPath: { path: "#mpath1", align: "self", alignOrigin: [0.5, 0.5] }});
 

    return dotsTL;

}
