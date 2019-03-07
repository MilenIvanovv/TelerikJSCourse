import renderTemp from "../loadTemp.js";

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
    $("#logout-btn").click(logout);
}

//Page features
function logout() {
    window.localStorage.removeItem("userData");
    window.localStorage.removeItem("isLogged");
}

//build
async function buildHeader() {
    await renderHeader();
    attachingHeaderEvents();
    $(window).trigger("buildFinished");
}

//tools

//exports
export default buildHeader;
