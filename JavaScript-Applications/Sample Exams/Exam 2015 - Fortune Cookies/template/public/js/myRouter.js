export default class MyRouter {
    constructor(homePageCallBack) {
        this._routes = []; //"_" as if its private
        this.homePage = homePageCallBack;
    }
    
    on = (pageHash,callback) => {
        this._routes.push({
            hash:pageHash,
            callback:callback
        });

        return this;
    }

    navigate = () => {
        let len = this._routes.length;
        for (let i = 0; i < len; i++) {
            if(this.constructor.doHashMatch(this._routes[i].hash)){
                this._routes[i].callback(this.getQueryParams());
                return;
            }            
        }
        
        this.homePage();
    }

    static doHashMatch(pageHash){
        return window.location.hash.includes(pageHash);
    }

    getQueryParams(){
        let paramsString;
        let searchParams;
        let params = {};
        if(window.location.hash.includes("?")){
            paramsString = window.location.hash.split("?")[1];
            searchParams = new URLSearchParams(paramsString);
            for (let p of searchParams) {
                params[p[0]] = p[1];
            }
            return params;
        }
        return;
    }
} 