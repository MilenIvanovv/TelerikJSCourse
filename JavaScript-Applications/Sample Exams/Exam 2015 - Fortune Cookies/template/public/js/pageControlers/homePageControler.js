import renderTemp from "../loadTemp.js";
import {getAllcookies} from "../features/features.js";
import {like} from "../features/features.js";
import {dislike} from "../features/features.js";

//rendering,appending
function renderHomePage() {
    const container = $("#container");
    //renderTemp

    return renderTemp(container,"homePage");
    //other stuff
}

function renderAllCookies(result) {
    const container = $("#cookies");
    //renderTemp
    return renderTemp(container,"cookies",result);
    //other stuff
}

//attaching events listeners
function attachingCookiesEvents() {
    $(".like").click(likeAndRebuild);
    $(".dislike").click(dislikeAndRebuild);
}


//build
async function buildHomePage() {
    await renderHomePage();
    buldCookies();
}

async function likeAndRebuild(event) {
    await like(event);
    buldCookies();
}

async function dislikeAndRebuild(event) {
    await dislike(event);
    buldCookies();
}

async function buldCookies() {
    let data = await getAllcookies();
    await renderAllCookies(data);
    await attachingCookiesEvents();
    $(window).trigger("buildFinished");
}

//tools

//exports
export default buildHomePage;




