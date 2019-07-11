
var GoogleMapModule = (function() {

    var map;
    function initMap() {
        var markerPostion = {lat: 33.7489954, lng: -84.3879824}
        map = new google.maps.Map(document.getElementById('map'), {
        center: markerPostion,
        zoom: 8

        });

        var infoWindow = new google.maps.InfoWindow({
            content: "Welcome!!"
        })
        var marker = new google.maps.Marker({
        position: markerPostion,
        map: map
        });

        marker.addListener('click', function() {
            infoWindow.open(map, marker);
        })
    }

    return {
        initMap: initMap
    }
})();