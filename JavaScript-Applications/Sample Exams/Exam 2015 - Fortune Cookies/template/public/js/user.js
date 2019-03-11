function setupUserProfile({result}) {
    window.localStorage.setItem("userData",result);
    window.localStorage.setItem("isLogged",true);
    window.localStorage.setItem("authKey",result.authKey);
}

export {setupUserProfile};