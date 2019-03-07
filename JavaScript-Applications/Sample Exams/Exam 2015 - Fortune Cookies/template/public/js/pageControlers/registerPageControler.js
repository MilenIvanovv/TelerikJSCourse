
import renderTemp from "../loadTemp.js";

//rendering,appending
function renderRegisterPage() {
    const container = $("#container");
    //renderTemp
    return renderTemp(container,"registerPage");
    //other stuff
}

//attaching events listeners
function attachingRegisterPageEvents() {
    $("#register-btn").click(register);
}

//Page features
function register() {

    let userData = JSON.stringify({
        username: $("#username-reg").val(),
        passHash: $("#password-reg").val()
    });

    let register = new Promise((resolve,reject) => {
        $.ajax({
            method:"POST",
            url: "api/users",
            headers: { "Content-Type": "application/json" },
            data: userData,
            success: resolve,
            error: reject
        });
    });

    register
    .then((data) => {
        alert("register success!");
        console.log(data);
    })
    .catch((error) => {
        alert("fail");
        console.log(error.responseText);
    })

    return register;
}

//build
async function buildRegisterPage() {
    await renderRegisterPage();
    attachingRegisterPageEvents(); 
    $(window).trigger("buildFinished");
}

//tools

//exports
export default buildRegisterPage;


