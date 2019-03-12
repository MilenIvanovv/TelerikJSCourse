import renderTemp from "../loadTemp.js";
import {getAllcookies} from "../features/features.js";
import {like} from "../features/features.js";
import {dislike} from "../features/features.js";
import {reShare} from "../features/features.js";
import {filter as filter} from "../features/features.js";
import {getCategories} from "../features/features.js";

//tools


function sort(data,propery) {
    if(propery === "Likes"){
        data.result.sort(compareLikes);
    }
    if(propery === "Date"){
        data.result.sort(compareDates);
    }
    return data;
}

function compareLikes(a,b) {
    if (a.likes > b.likes)
        return -1;
    if (a.likes < b.likes)
        return 1;
    return 0;
}

function compareDates(a,b){
    return new Date(b.shareDate) - new Date(a.shareDate);
};


//rendering,appending
function renderHomePage(result) {
    const container = $("#container");
    return renderTemp(container,"homePage",result);
}

function renderCookies(result) {
    const container = $("#cookies");
    return renderTemp(container,"cookies",result);
}

//attaching events listeners
function attachingHomePageEvents() {
    $("#category-search").change(changeFilterPropertyHandler);
    $("#cookies-sort").change(changeSortPropertyHandler);
}

function attachingCookiesEvents() {
    $(".like").click(like);
    $(".dislike").click(dislike);
    $(".re-share-btn").click(reShare);
}

//Event handlers
function changeSortPropertyHandler(event) {
    let propery = $(event.target).val();
    changeCookieSort(propery);
}

function changeFilterPropertyHandler(event) {
    let propery = $(event.target).val();
    changeCookieFilter(propery);
}


//build
async function buildHomePage(queryParams) {
    $(window).on("cookieChange",loadCookies);



    let data = await getCategories();
    await renderHomePage(data); //categories are needed for a dropdown menu in HomePage component
    attachingHomePageEvents();
    if(queryParams){
        changeCookieFilter(queryParams.category);
        return;
    }
    $(window).trigger("cookieChange");
}

function changeCookieSort(propery) {
    window.localStorage.property = propery;
    $(window).trigger("cookieChange");
}

function changeCookieFilter(category) {
    window.localStorage.category = category;
    $(window).trigger("cookieChange");
}


async function loadCookies() {
    let category = window.localStorage.getItem("category") || "";
    let propery = window.localStorage.getItem("property") || "Likes";
    let data = await getAllcookies();
    data = filter(category,data);
    data = sort(data,propery);
    await renderCookies(data);
    await attachingCookiesEvents();
}


//exports
export default buildHomePage;




