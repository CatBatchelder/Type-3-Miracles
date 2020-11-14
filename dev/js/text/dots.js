import {gsap} from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

const dotsTL = gsap.timeline();


var dotsDrawSpeed = 1;

export function dotsAnimation(){
    dotsTL.from("#moval1",{ duration: dotsDrawSpeed, alpha:0, ease:"none", motionPath: { path: "#mpath1", align: "#mpath1" }});
 

    return dotsTL;

}
