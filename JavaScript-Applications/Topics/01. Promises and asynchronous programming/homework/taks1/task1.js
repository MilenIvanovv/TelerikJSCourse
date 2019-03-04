
    function AddBtnPromise() {
        let locationBtn = document.getElementById("get-location");
        return new Promise((resolve, reject) => {
            locationBtn.addEventListener("click", () => {
                resolve()
            });
        });
    }
    function getLocation(options) {
        if ("geolocation" in navigator) {
            return new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(location => {
                    resolve(location);
                }, () => {
                    reject();
                },options); 
            })
        }
        throw "No Gelocation available";
    }

    function initMap(location) {
        console.log(location);
        let position = [location.coords.longitude,location.coords.latitude];
        let map = new ol.Map({
            target: 'map',
            layers: [
              new ol.layer.Tile({
                source: new ol.source.OSM()
              })
            ],
            view: new ol.View({
              center: ol.proj.fromLonLat(position),
              zoom: 14
            })
          });
    };

    (async function Location() {
        let response,
            promise,
            options = {
                enableHighAccuracy:true,
                timeout:6000,
                maximumAge:Infinity
            };
        await AddBtnPromise();
        promise = getLocation(options);
        let e = document.getElementById("map");
        e.innerHTML = "<p>LOADING</p>";
        response = await promise
        e.innerHTML = "";
        initMap(response);
    })();