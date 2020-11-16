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
            
            .from("#loval1",{ duration: dotsDrawSpeed, alpha: 0, ease:"none", fill: "#ff0000",  motionPath: { path: "#lpath1", align: "#lpath1", start:1, end:0 }}, "apath")
            .to("#loval1", {alpha:0}, "cpath")
            .from("#loval2",{ duration: dotsDrawSpeed, alpha: 0, ease:"none", fill: "#ff0000",  motionPath: { path: "#lpath2", align: "#lpath2", start:1, end:0 }}, "cpath")
            .to("#loval2", {alpha:0}, "lpath")
            .from("#loval3",{ duration: dotsDrawSpeed, alpha: 0, ease:"none", fill: "#ff0000",  motionPath: { path: "#lpath3", align: "#lpath3", start:1, end:0 }}, "lpath")
            .to("#loval3", {alpha:0}, "epath")

            .from("#eoval1",{ duration: dotsDrawSpeed, alpha: 0, ease:"none", fill: "#ff0000",  motionPath: { path: "#epath1", align: "#epath1", start:1, end:0 }}, "cpath")
            .to("#eoval1", {alpha:0}, "lpath")
            .from("#eoval2",{ duration: dotsDrawSpeed, alpha: 0, ease:"none", fill: "#ff0000",  motionPath: { path: "#epath2", align: "#epath2", start:1, end:0 }}, "lpath")
            .to("#eoval2", {alpha:0}, "epath")
            .from("#eoval3",{ duration: dotsDrawSpeed, alpha: 0, ease:"none", fill: "#ff0000",  motionPath: { path: "#epath3", align: "#epath3", start:1, end:0 }}, "epath")
            .to("#eoval3", {alpha:0}, "spath")

            .from("#soval1",{ duration: dotsDrawSpeed, alpha: 0, ease:"none", fill: "#ff0000",  motionPath: { path: "#spath1", align: "#spath1", start:1, end:0 }}, "epath")
            .to("#soval1", {alpha:0}, "spath")
            .from("#soval2",{ duration: dotsDrawSpeed, alpha: 0, ease:"none", fill: "#ff0000",  motionPath: { path: "#spath2", align: "#spath2", start:1, end:0 }}, "spath")
            .to("#soval2", {alpha:0}, "path")
        
            ;
 

    return dotsTL;

}

