
import renderTemp from "../loadTemp.js";

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

//Page features
function share() {

    let userData = JSON.stringify({
        text: $("#cookie-text").val(),
        category: $("#cookie-category").val()
    });

    let register = new Promise((resolve,reject) => {
        $.ajax({
            method:"POST",
            url: "api/cookies",
            headers: { 
                "Content-Type": "application/json",
                "x-auth-key": window.localStorage.getItem("authKey") 
            },
            data: userData,
            success: resolve,
            error: reject
        });
    });

    register
    .then((data) => {
        alert("share success!");
        console.log(data);
    })
    .catch((error) => {
        alert("fail");
        console.log(error.responseText);
    })

    return register;
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


