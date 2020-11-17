import {gsap} from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

const textTL = gsap.timeline();


var textDrawSpeed = 1;

var begTextDrawSpeed = 2;

export function textAnimation(){
    textTL.from("#mpath1",{ duration: begTextDrawSpeed, drawSVG: "0", ease:"none"}, "mpath")
        .from("#mpath2",{ duration: begTextDrawSpeed, drawSVG: "0", ease:"none"}, "mpath")
        .from("#mpath3",{ duration: begTextDrawSpeed, drawSVG: "0", ease:"none"}, "mpath")
        .from("#M",{ duration: textDrawSpeed, alpha:0, ease:"none"}, "ipath")
        .from("#ipath1",{ duration: begTextDrawSpeed, drawSVG: "0", ease:"none"}, "mpath")
        .from("#ipath2",{ duration: textDrawSpeed, drawSVG: "0", ease:"none"}, "ipath")
        .from("#ipath3",{ duration: textDrawSpeed, drawSVG: "0", ease:"none"}, "ipath")
        .from("#I",{ duration: textDrawSpeed, alpha:0, ease:"none"}, "rpath")
        .from("#outerrpath2",{ duration: textDrawSpeed, drawSVG: "0", ease:"none"}, "ipath")
        .from("#outerrpath1",{ duration: textDrawSpeed, drawSVG: "0", ease:"none"}, "rpath")
        .from("#innerrpath",{ duration: textDrawSpeed, drawSVG: "0", ease:"none"}, "ipath")
        .from("#R",{ duration: textDrawSpeed, alpha:0, ease:"none"}, "apath")
        .from("#outerapath2",{ duration: textDrawSpeed, drawSVG: "0", ease:"none"}, "ipath")
        .from("#outerapath1",{ duration: textDrawSpeed, drawSVG: "0", ease:"none"}, "rpath")
        .from("#innerapath",{ duration: textDrawSpeed, drawSVG: "0", ease:"none"}, "apath")
        .from("#A",{ duration: textDrawSpeed, alpha:0, ease:"none"}, "cpath")
        .from("#cpath1",{ duration: textDrawSpeed, drawSVG: "0", ease:"none"}, "rpath")
        .from("#cpath2",{ duration: textDrawSpeed, drawSVG: "0", ease:"none"}, "apath")
        .from("#cpath3",{ duration: textDrawSpeed, drawSVG: "0", ease:"none"}, "cpath")
        .from("#C",{ duration: textDrawSpeed, alpha:0, ease:"none"}, "lpath")
        .from("#lpath1",{ duration: textDrawSpeed, drawSVG: "0", ease:"none"}, "apath")
        .from("#lpath2",{ duration: textDrawSpeed, drawSVG: "0", ease:"none"}, "cpath")
        .from("#lpath3",{ duration: textDrawSpeed, drawSVG: "0", ease:"none"}, "lpath")
        .from("#L",{ duration: textDrawSpeed, alpha:0, ease:"none"}, "epath")
        .from("#epath1",{ duration: textDrawSpeed, drawSVG: "0", ease:"none"}, "cpath")
        .from("#epath2",{ duration: textDrawSpeed, drawSVG: "0", ease:"none"}, "lpath")
        .from("#epath3",{ duration: textDrawSpeed, drawSVG: "0", ease:"none"}, "epath")
        .from("#E",{ duration: textDrawSpeed, alpha:0, ease:"none"}, "spath")
        .from("#spath1",{ duration: textDrawSpeed, drawSVG: "0", ease:"none"}, "epath")
        .from("#spath2",{ duration: textDrawSpeed, drawSVG: "0", ease:"none"}, "spath")
        .from("#spath3",{ duration: textDrawSpeed, drawSVG: "0", ease:"none"}, "spath")
        .from("#S",{ duration: textDrawSpeed, alpha:0, ease:"none"})
        .to("#text", {fill: "#000", duration: 3}, "path")
        .to("#paths", {stroke: "#000", duration: 3}, "path")
        ;
 

    return textTL;

}
