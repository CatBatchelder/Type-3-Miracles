import {gsap} from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

const dotsTL = gsap.timeline();

gsap.set(".ovals", {xPercent: -50, yPercent:-50});

var dotsDrawSpeed = 1;

export function dotsAnimation(){
    dotsTL.from("#moval1",{ duration: dotsDrawSpeed, alpha: 0, ease:"none", fill: "#ff0000",  motionPath: { path: "#mpath1", align: "#mpath1", start:1, end:0 }}, "mpath")
            .to("#moval1", {alpha:0}, "ipath")
            .from("#moval2",{ duration: dotsDrawSpeed, alpha: 0, ease:"none", fill: "#ff0000",  motionPath: { path: "#mpath2", align: "#mpath2", start:1, end:0 }}, "mpath")
            .to("#moval2", {alpha:0}, "ipath")
            .from("#moval3",{ duration: dotsDrawSpeed, alpha: 0, ease:"none", fill: "#ff0000",  motionPath: { path: "#mpath3", align: "#mpath3", start:1, end:0 }}, "mpath")
            .to("#moval3", {alpha:0}, "ipath")

            .from("#ioval1",{ duration: dotsDrawSpeed, alpha: 0, ease:"none", fill: "#ff0000",  motionPath: { path: "#ipath1", align: "#ipath1", start:1, end:0 }}, "mpath")
            .to("#ioval1", {alpha:0}, "ipath")
            .from("#ioval2",{ duration: dotsDrawSpeed, alpha: 0, ease:"none", fill: "#ff0000",  motionPath: { path: "#ipath2", align: "#ipath2", start:1, end:0 }}, "ipath")
            .to("#ioval2", {alpha:0}, "rpath")
            .from("#ioval3",{ duration: dotsDrawSpeed, alpha: 0, ease:"none", fill: "#ff0000",  motionPath: { path: "#ipath3", align: "#ipath3", start:1, end:0 }}, "ipath")
            .to("#ioval3", {alpha:0}, "rpath")

            .from("#roval1",{ duration: dotsDrawSpeed, alpha: 0, ease:"none", fill: "#ff0000",  motionPath: { path: "#outerrpath2", align: "#outerrpath2", start:1, end:0 }}, "mpath")
            .to("#roval1", {alpha:0}, "ipath")
            .from("#roval2",{ duration: dotsDrawSpeed, alpha: 0, ease:"none", fill: "#ff0000",  motionPath: { path: "#outerrpath1", align: "#outerrpath1", start:1, end:0 }}, "rpath")
            .to("#roval2", {alpha:0}, "apath")
            .from("#roval3",{ duration: dotsDrawSpeed, alpha: 0, ease:"none", fill: "#ff0000",  motionPath: { path: "#innerrpath", align: "#innerrpath", start:1, end:0 }}, "ipath")
            .to("#roval3", {alpha:0}, "rpath")

            .from("#aoval1",{ duration: dotsDrawSpeed, alpha: 0, ease:"none", fill: "#ff0000",  motionPath: { path: "#outerapath2", align: "#outerapath2", start:1, end:0 }}, "ipath")
            .to("#aoval1", {alpha:0}, "rpath")
            .from("#aoval2",{ duration: dotsDrawSpeed, alpha: 0, ease:"none", fill: "#ff0000",  motionPath: { path: "#outerapath1", align: "#outerapath1", start:1, end:0 }}, "rpath")
            .to("#aoval2", {alpha:0}, "apath")
            .from("#aoval3",{ duration: dotsDrawSpeed, alpha: 0, ease:"none", fill: "#ff0000",  motionPath: { path: "#innerapath", align: "#innerapath", start:1, end:0 }}, "apath")
            .to("#aoval3", {alpha:0}, "cpath")

            .from("#coval1",{ duration: dotsDrawSpeed, alpha: 0, ease:"none", fill: "#ff0000",  motionPath: { path: "#cpath1", align: "#cpath1", start:1, end:0 }}, "rpath")
            .to("#coval1", {alpha:0}, "apath")
            .from("#coval2",{ duration: dotsDrawSpeed, alpha: 0, ease:"none", fill: "#ff0000",  motionPath: { path: "#cpath2", align: "#cpath2", start:1, end:0 }}, "apath")
            .to("#coval2", {alpha:0}, "cpath")
            .from("#coval3",{ duration: dotsDrawSpeed, alpha: 0, ease:"none", fill: "#ff0000",  motionPath: { path: "#cpath3", align: "#cpath3", start:1, end:0 }}, "cpath")
            .to("#coval3", {alpha:0}, "lpath")
            
            ;
 

    return dotsTL;

}

