import renderTemp from "../loadTemp.js";
import {getAllcookies} from "../features/features.js";
import {like} from "../features/features.js";
import {dislike} from "../features/features.js";
import {reShare} from "../features/features.js";
import {filterByCategory} from "../features/features.js";
import {getCategories} from "../features/features.js";

//rendering,appending
function renderHomePage(result) {
    const container = $("#container");
    //renderTemp

    return renderTemp(container,"homePage",result);
    //other stuff
}

function renderAllCookies(result) {
    const container = $("#cookies");
    //renderTemp
    return renderTemp(container,"cookies",result);
    //other stuff
}

//attaching events listeners
function attachingHomePageEvents() {
    $("#category-search").change(filterAndBuild);
}

function attachingCookiesEvents() {
    $(".like").click(likeAndRebuild);
    $(".dislike").click(dislikeAndRebuild);
    $(".re-share-btn").click(reshareAndReBuild);
}


//build
async function filterAndBuild() {
    let data = await getAllcookies();
    let cookies = filterByCategory(data);
    await renderAllCookies(cookies);
    await attachingCookiesEvents();
    $(window).trigger("buildFinished");
}

async function buildHomePage() {
    let data = await getCategories();
    await renderHomePage(data);
    attachingHomePageEvents();
    buildAllCookies();
}

async function likeAndRebuild(event) {
    await like(event);
    buildAllCookies();
}

async function dislikeAndRebuild(event) {
    await dislike(event);
    buildAllCookies();
}

async function reshareAndReBuild(event) {
    await reShare(event);
    buildAllCookies();
}

async function buildAllCookies() {
    let data = await getAllcookies();
    await renderAllCookies(data);
    await attachingCookiesEvents();
    $(window).trigger("buildFinished");
}

//tools

//exports
export default buildHomePage;




