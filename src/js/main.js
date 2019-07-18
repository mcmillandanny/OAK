
var GoogleMapModule = (function() {

    var map;
    function initMap() {
        var markerPostion = {lat: 35.522610, lng: -97.548180}
        map = new google.maps.Map(document.getElementById('map'), {
        center: markerPostion,
        zoom: 11
        });

        var infoWindow = new google.maps.InfoWindow({
            content: "OAK"
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
