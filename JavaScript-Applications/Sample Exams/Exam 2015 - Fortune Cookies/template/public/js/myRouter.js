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
                this._routes[i].callback();
                return;
            }            
        }
        this.homePage();
    }

    static doHashMatch(pageHash){
        return pageHash === window.location.hash;
    }
}