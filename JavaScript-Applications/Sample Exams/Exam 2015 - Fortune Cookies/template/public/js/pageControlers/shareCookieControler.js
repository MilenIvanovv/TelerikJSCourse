
import renderTemp from "../loadTemp.js";
import {share} from "../features/features.js";

//rendering,appending
function renderShareCookie() {
    const container = $("#container");

    let tempData = {
        isLogged: window.localStorage.getItem("isLogged")
    }
    //renderTemp
    return renderTemp(container,"shareCookie",tempData);
    //other stuff
}

//attaching events listeners
function attachingShareCookieEvents() {
    $("#share-btn").click(share);
}



//build
async function buildShareCookie() {
    await renderShareCookie();
    attachingShareCookieEvents(); 
    $(window).trigger("buildFinished");
}

//tools

//exports
export default buildShareCookie;


