
import setupRouter from "./routing.js";

//gloabl events
$(window).on("buildFinished", () => console.log("buildFinished"));
setupRouter();