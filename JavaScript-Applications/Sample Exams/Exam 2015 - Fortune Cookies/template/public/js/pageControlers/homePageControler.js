import renderTemp from "../loadTemp.js";

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
    $(".like").click(like);
    $(".dislike").click(dislike);
}

//Page features
function getAllcookies() {

    let promise = new Promise((resolve,reject) => {
        $.ajax({
            method:"GET",
            url: "api/cookies",
            headers: { 
                "Content-Type": "application/json",
                "x-auth-key": window.localStorage.getItem("authKey") 
            },
            success: resolve,
            error: reject
        });
    });

    promise
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        alert("fail");
        console.log(error.responseText);
    })

    return promise;
}

function like(event) {
    let cookieId = $(event.target).closest(".cookie").attr("data");
    debugger;
    let promise = new Promise((resolve,reject) => {
        $.ajax({
            method:"PUT",
            url: "api/cookies/" + cookieId,
            headers: { 
                "Content-Type": "application/json",
                "x-auth-key": window.localStorage.getItem("authKey") 
            },
            data:JSON.stringify({type:"like"}),
            success: resolve,
            error: reject
        });
    });

    promise
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        alert("fail");
        console.log(error.responseText);
    })

    return promise;
    
}

function dislike(event) {
    let cookieId = $(event.target).closest(".cookie").attr("data");
    let promise = new Promise((resolve,reject) => {
        $.ajax({
            method:"PUT",
            url: "api/cookies/" + cookieId,
            headers: { 
                "Content-Type": "application/json",
                "x-auth-key": window.localStorage.getItem("authKey") 
            },
            data:JSON.stringify({type:"dislike"}),
            success: resolve,
            error: reject
        });
    });

    promise
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        alert("fail");
        console.log(error.responseText);
    })

    return promise;
}



//build
async function buildHomePage() {
    await renderHomePage();
    let data = await getAllcookies();
    await renderAllCookies(data);
    await attachingCookiesEvents();
    $(window).trigger("buildFinished");
}

//tools

//exports
export default buildHomePage;




