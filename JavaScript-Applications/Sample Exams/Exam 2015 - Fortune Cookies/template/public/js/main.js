
import setupRouter from "./routing.js";
import buildHeader from "./pageControlers/headerControler.js";

//gloabl events
$(window).on("buildFinished", () => {});


//header
buildHeader();
//router
setupRouter();