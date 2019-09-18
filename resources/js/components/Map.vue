<template>

    <div id="map">
        <h1>Here will be leaflet map</h1>
    </div>
</template>

<script>
import L from  'leaflet'

    export default {
        name: "Map",
        mounted() {
            // initialize the map
            var map = L.map('map').setView([53.54, 27.30], 8);

            // load a tile layer
            L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZGFyeWFjaHlydWsiLCJhIjoiY2swbzEwNnlrMDViYzNrcXI4NDAyN2gyNiJ9.d5mwHr6_wkJRtV0aXZv7Mg', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                id: 'mapbox.streets',
                accessToken: 'pk.eyJ1IjoiZGFyeWFjaHlydWsiLCJhIjoiY2swbzEwNnlrMDViYzNrcXI4NDAyN2gyNiJ9.d5mwHr6_wkJRtV0aXZv7Mg'
            }).addTo(map);


        }
    }
</script>

<style scoped>
    html {
        height: 100%;
    }
    body{
        height: 100%;
        width: 100%;
        padding: 0;
        margin: 0;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        height: 100%;
        width: 100%;
    }

    #map {
        height: 100%;
    }

</style>
