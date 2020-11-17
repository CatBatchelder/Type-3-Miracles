console.log( "is scripts working");

import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

import {textAnimation} from "./text/text.js";
import {dotsAnimation} from "./text/dots.js";
import {zoomAnimation} from "./text/zoom.js";


const mainTL = gsap.timeline()
mainTL.add(textAnimation(), "start")
.add(dotsAnimation(), "start")
.add(zoomAnimation(), "start")



// // //instantiate GSDevTools with default settings
GSDevTools.create();

