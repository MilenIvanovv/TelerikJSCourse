function setupUserProfile(data) {
    window.localStorage.setItem("userData",data);
    window.localStorage.setItem("isLogged",true);
}

export {setupUserProfile};