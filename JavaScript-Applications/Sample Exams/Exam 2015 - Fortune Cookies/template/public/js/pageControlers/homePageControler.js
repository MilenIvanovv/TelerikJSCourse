import renderTemp from "../loadTemp.js";

//rendering,appending
function renderHomePage() {
    const container = $("#container");
    //renderTemp

    return renderTemp(container,"homePage");
    //other stuff
}

//attaching events listeners


//Page features


//build
async function buildHomePage() {
    await renderHomePage();
    $(window).trigger("buildFinished");
}

//tools

//exports
export default buildHomePage;




