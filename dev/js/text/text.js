import {gsap} from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

const textTL = gsap.timeline();


export function textAnimation(){
    textTL.from("#M",{ duration: 5, drawSVG: "0"}); 

    return textTL;

}
