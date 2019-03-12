import {setupUserProfile} from "../user.js";

//Page features
export function logout() {
    window.localStorage.removeItem("userData");
    window.localStorage.removeItem("isLogged");
    window.localStorage.removeItem("authKey");
}

//Page features
export function getAllcookies() {

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
        // console.log(data);
    })
    .catch((error) => {
        alert("fail");
        console.log(error.responseText);
    })

    return promise;
}

export function getHourlyCookie() {

    let promise = new Promise((resolve,reject) => {
        $.ajax({
            method:"GET",
            url: "api/my-cookie",
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
    })
    .catch((error) => {
        alert("fail");
        console.log(error.responseText);
    })

    return promise;
}

export function like(event) {
    let cookieId = $(event.target).closest(".cookie").attr("data");
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
        $(window).trigger("cookieChange");
        $(window).trigger("headerChnage");
    })
    .catch((error) => {
        alert("fail");
        console.log(error.responseText);
    })

    return promise;
    
}

export function dislike(event) {
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
        $(window).trigger("cookieChange");
        $(window).trigger("headerChnage");
    })
    .catch((error) => {
        alert("fail");
        console.log(error.responseText);
    })

    return promise;
}

//Page features
export function login() {

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
        $(window).trigger("headerChnage");

        alert("login success!");
        setupUserProfile(data);
        // console.log(data);
    })
    .catch((error) => {
        alert("fail!");
        console.log(error);
    })

    return login;
}



//Page features
export function register() {

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
        // console.log(data);
    })
    .catch((error) => {
        alert("fail");
        console.log(error.responseText);
    })

    return register;
}


//Page features
export function share() {

    let userData = {
        text: $("#cookie-text").val(),
        category: $("#cookie-category").val()
    };
    let img = $("#cookie-img");
    if(img.length){
        userData.img = img.val()
    }

    let promise = new Promise((resolve,reject) => {
        $.ajax({
            method:"POST",
            url: "api/cookies",
            headers: { 
                "Content-Type": "application/json",
                "x-auth-key": window.localStorage.getItem("authKey") 
            },
            data: JSON.stringify(userData),
            success: resolve,
            error: reject
        });
    });

    promise
    .then((data) => {
        // console.log(data);
    })
    .catch((error) => {
        alert("fail");
        console.log(error.responseText);
    })

    return promise;
}

export function reShare(event) {
    let target = $(event.target);

    let userData = {
        text: target.parent().find(".text").text(),
        category: target.parent().find(".category").text()
    };
    let img = target.parent().find("img");
    if(img.length){
        userData.img = img.attr("src")
    }

    let promise = new Promise((resolve,reject) => {
        $.ajax({
            method:"POST",
            url: "api/cookies",
            headers: { 
                "Content-Type": "application/json",
                "x-auth-key": window.localStorage.getItem("authKey") 
            },
            data: JSON.stringify(userData),
            success: resolve,
            error: reject
        });
    });

    promise
    .then((data) => {
        $(window).trigger("cookieChange");
    })
    .catch((error) => {
        console.log(error.responseText);
    })

    return promise;
}

export function filter(selectedCategory,data) {
    let cookies = data.result;
    let filteredCookies = [];

    if(selectedCategory === ""){
        return data;
    }
   
    for (let i = 0, len = cookies.length; i < len ; i++) {
        if(cookies[i].category === selectedCategory)  {
            filteredCookies.push(cookies[i]);
        }     
    }

    return {result:filteredCookies};
}

export function getCategories() {
    let promise = new Promise((resolve,reject) => {
        $.ajax({
            method:"GET",
            url: "api/categories",
            success: resolve,
            error: reject
        });
    });

    promise
    .then((data) => {
    })
    .catch((error) => {
        console.log(error.responseText);
    })

    return promise;
}
