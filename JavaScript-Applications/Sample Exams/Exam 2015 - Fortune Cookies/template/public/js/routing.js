import MyRouter from "./myRouter.js";
import {homePage} from "./pageControlers/homePageControler.js";
import buildLoginPage from "./pageControlers/loginPageControler.js";
import buildRegisterPage from "./pageControlers/registerPageControler.js";

function setupRouter() {
    const router = new MyRouter();

    window.addEventListener("load",router.navigate);
    window.addEventListener("hashchange",router.navigate);
    
    router.on("#/home",homePage)
        .on("#/register",buildRegisterPage)
        .on("#/login",buildLoginPage);
}

export default setupRouter;



