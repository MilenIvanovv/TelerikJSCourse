import renderTemp from "../loadTemp.js";
import {setupUserProfile} from "../user.js";

//rendering,appending
function renderLoginPage() {
    const container = $("#container");
    //renderTemp
    return renderTemp(container,"loginPage");
    //other stuff
}

//attaching events listeners
function attachingLoginPageEvents() {
    $("#login-btn").click(login);
}

//Page features
function login() {

    let userData = JSON.stringify({
        username: $("#username-log").val(),
        passHash: $("#password-log").val()
    });

    let login = new Promise((resolve,reject) => {
        $.ajax({
            method:"PUT",
            url: "api/auth",
            headers: { "Content-Type": "application/json" },
            data: userData,
            success: resolve,
            dataType:"json",
            error: (err) => {
                console.log(err);
            }
        });
    });

    login
    .then((data) => {
        alert("login success!");
        setupUserProfile(data);
        console.log(data);
    })
    .catch((error) => {
        alert("fail!");
        console.log(error.responseText);
    })

    return login;
}

//build
async function buildLoginPage() {
    await renderLoginPage();
    await attachingLoginPageEvents(); 
    $(window).trigger("buildFinished");
}

//tools

//exports
export default buildLoginPage;
