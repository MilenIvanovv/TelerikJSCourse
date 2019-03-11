
import renderTemp from "../loadTemp.js";
import {register} from "../features/features.js";

//rendering,appending
function renderRegisterPage() {
    const container = $("#container");
    //renderTemp
    return renderTemp(container,"registerPage");
    //other stuff
}

//attaching events listeners
function attachingRegisterPageEvents() {
    $("#register-btn").click(register);
}



//build
async function buildRegisterPage() {
    await renderRegisterPage();
    attachingRegisterPageEvents(); 
    $(window).trigger("buildFinished");
}

//tools

//exports
export default buildRegisterPage;


