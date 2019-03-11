import renderTemp from "../loadTemp.js";
import {logout} from "../features/features.js";

//rendering,appending
function renderHeader() {
    const container = $("#header");
    //renderTemp
    let tempData ={
        isLogged: window.localStorage.getItem("isLogged")
    }
    return renderTemp(container,"header",tempData);
    //other stuff
}

//attaching events listeners
function attachingHeaderEvents() {
    $("#logout-btn").click(logoutAndRebuld);
}


//build
async function logoutAndRebuld(event) {
    logout(event);
    buildHeader();
}



export async function buildHeader() {
    await renderHeader();
    attachingHeaderEvents();
    $(window).trigger("buildFinished");
}

//tools

//exports
export default buildHeader;
