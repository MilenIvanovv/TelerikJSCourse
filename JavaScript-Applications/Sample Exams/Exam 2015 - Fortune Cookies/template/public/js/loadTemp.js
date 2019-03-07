function getTempalte(tempName) {
    return new Promise((resolve,reject) => {
        $.get({
            url:"./templates/" + tempName + ".handlebars",
            success: (data) => resolve(data)
        })
    })
}

async function compileTemp(tempName,data) {
    let template = await getTempalte(tempName);
    let page = Handlebars.compile(template);
    return page(data);
}

function renderTemp($selection,tempName,data) {
    return new Promise((resolve,reject) => {
        compileTemp(tempName,data)
        .then((page) => {
            $selection.html(page);
        })
        .then(() => { resolve()})
    })
}

export default renderTemp;