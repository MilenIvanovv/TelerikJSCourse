import MyRouter from "./myRouter.js";
import buildHomePage from "./pageControlers/homePageControler.js";
import buildLoginPage from "./pageControlers/loginPageControler.js";
import buildRegisterPage from "./pageControlers/registerPageControler.js";
import buildShareCookie from "./pageControlers/shareCookieControler.js";
import buildHourlyCookie from "./pageControlers/hourlyCookieControler.js";

function setupRouter() {
    const router = new MyRouter(buildHomePage);

    window.addEventListener("load",router.navigate);
    window.addEventListener("hashchange",router.navigate);
    
    router.on("#/home",buildHomePage)
        .on("#/register",buildRegisterPage)
        .on("#/login",buildLoginPage)
        .on("#/my-cookie",buildHourlyCookie)
        .on("#/share",buildShareCookie);
}

export default setupRouter;



