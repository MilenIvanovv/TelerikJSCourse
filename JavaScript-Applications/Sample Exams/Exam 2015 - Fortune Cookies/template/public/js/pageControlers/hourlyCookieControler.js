import renderTemp from "../loadTemp.js";
import {getHourlyCookie} from "../features/features.js";
import {like} from "../features/features.js";
import {dislike} from "../features/features.js";

//rendering,appending
function renderHourlyPage(result) {
    const container = $("#container");
    //renderTemp
    return renderTemp(container,"hourlyCookie",result);
    //other stuff
}

function renderAllCookies(result) {
    const container = $(".cookies");
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
async function likeAndRebuild(event) {
    await like(event);
    buildHourlyCookie();
}

async function dislikeAndRebuild(event) {
    await dislike(event);
    buildHourlyCookie();
}

async function buildHourlyCookie() {
    let data = await getHourlyCookie();
    let array = [data.result]
    let obj = {
        result:array
    }
    await renderHourlyPage();
    await renderAllCookies(obj);
    await attachingCookiesEvents();
    $(window).trigger("buildFinished");
}
//tools

//exports
export default buildHourlyCookie;




