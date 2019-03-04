let button = document.getElementById("redirect");
button.addEventListener("click",redirectButton);

function Time(ms) {
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            resolve();
        },ms);
    })
}
async function redirectButton() {
    button.innerHTML = "wait 2 sec";
    await Time(2000);
    window.location.href = "http://www.youtube.com";
}