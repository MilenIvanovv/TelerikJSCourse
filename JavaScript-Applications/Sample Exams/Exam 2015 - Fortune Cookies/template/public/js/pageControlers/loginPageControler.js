import renderTemp from "../loadTemp.js";
import {login} from "../features/features.js";
import {buildHeader} from "../pageControlers/headerControler.js";

//rendering,appending
function renderLoginPage() {
    const container = $("#container");
    //renderTemp
    return renderTemp(container,"loginPage");
    //other stuff
}

//attaching events listeners
function attachingLoginPageEvents() {
    $("#login-btn").click(loingAndRebuild);
}

async function loingAndRebuild(event) {
    await login(event);
    buildHeader();
}


//build
async function buildLoginPage() {
    await renderLoginPage();
    attachingLoginPageEvents(); 
    $(window).trigger("buildFinished");
}

//tools

//exports
export default buildLoginPage;
