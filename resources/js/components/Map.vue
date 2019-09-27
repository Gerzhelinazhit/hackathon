<template>
    <div id="mapid">
        <div id="map">
            <b-form class="form-custom pos-tr">
                <div class="mt-1"><strong>Select a type of growing plant:</strong></div>
                <b-form-select
                    v-model="selected"
                    :options="options"
                    size="sm"
                    class="mb-1">
                </b-form-select>
            </b-form>
        </div>

        <b-button class="top-viewed layers-btn" v-if="(!this.$parent.addField && !this.showLayers)" @click="showLayers = !showLayers">
            Слои для отображения
        </b-button>

        <div class="top-viewed layers-list" v-if="(!this.$parent.addField && this.showLayers)">
            <div class="mt-2 mr-2 ml-2 mb-2">
                <b-form-checkbox v-model="statusF1"
                                 @change="onAddFields1">
                    Границы зарегистрированных земельных участков
                </b-form-checkbox>
                <b-form-checkbox v-model="statusF2"
                                 @change="onAddFields2">
                    Границы элементарных участков
                </b-form-checkbox>
                <b-form-checkbox v-model="statusF3"
                                 @change="onAddFields3">
                    Границы участков хозяйств
                </b-form-checkbox>

                <b-row class="mt-1 mb-1 ml-2 mr-2 d-flex justify-content-between align-items-center">
                    <b-button @click="showLayers = !showLayers">
                        Скрыть слои
                    </b-button>
                    <b-button @click="showFilters = !showFilters">
                        Фильтры
                    </b-button>
                </b-row>

            </div>



        </div>

        <RightMenu v-if="this.$parent.addField"></RightMenu>
        <FieldData v-if="polyPopup" :poly="polyCharacteristic"></FieldData>

       <!-- <FilterBaseField v-if="statusF1"></FilterBaseField> -->
        <div class="filter-container" v-if="this.showFilters">
            <FilterElemField v-if="(this.showFilters && this.statusF2)"></FilterElemField>
            <FilterCultureField v-if="(this.showFilters&& this.statusF3)"></FilterCultureField>
            <b-row class="mt-1 ml-3 mb-2"
                   v-if="(this.showFilters && (this.statusF2 || this.statusF3))">
                <b-button variant="primary"
                          @click="alert('aaaaaa')">
                    Отфильтровать данные на карте
                </b-button>
            </b-row>

        </div>



    </div>

</template>






<script>
import L from  'leaflet'
import 'leaflet-draw'

import Pagination from "bootstrap-vue/esm/mixins/pagination";

    export default {
        name: "Map",
        components: {Pagination},
        data() {
            return{
                map: null,
                fieldsLayer: null,
                elFieldsLayer: null,
                growingCulturesLayer: null,
                mainLayer: null,
                selected: null,
                options: [],
                addNewField: false,
                polyCharacteristic: null,
                polyPopup: false,

                // flags for filters
                baseFieldChosen: false,
                elemFieldChosen: false,
                cultureFieldChosen: false,


                statusF1: false,
                statusF2: false,
                statusF3: false,

                showLayers: false,
                showFilters: false,

                elementsFromDB:[                //тут будут данные
                    {
                        id:1,
                        points: [[52.509, 27.31],
                            [52.503, 27.04],
                            [52.51, 27.44]]
                    },
                    {
                        id:2,
                        points: [[52.529, 27.41],
                            [52.523, 27.44],
                            [52.521, 27.64]]
                    },
                    {
                        id:3,
                        points: [[52.569, 27.61],
                            [52.563, 27.74],
                            [52.561, 27.94]]
                    }
                ]
            }

        },
        methods: {
            onAddFields3(){
                if(this.statusF3 === false){
                    console.log('3-checked');
                    this.growingCulturesLayer.addTo(this.map);
                }
                else{
                    console.log('3-unchecked');
                    this.map.removeLayer(this.growingCulturesLayer);
                }

            },
            onAddFields2() {
                if(this.statusF2 === false){
                    console.log('2-checked');
                    this.elFieldsLayer.addTo(this.map);
                }
                else{
                    console.log('2-unchecked');
                    this.map.removeLayer(this.elFieldsLayer);
                }

            },
            onAddFields1() {
                if(this.statusF1 === false){
                    console.log('1-checked');
                    this.fieldsLayer.addTo(this.map);
                }
                else{
                    console.log('1-unchecked');
                    this.map.removeLayer(this.fieldsLayer);
                }

            },



            getMapLayer(dataArr, layerId) {
                var cont = this;
                var squaresArr = [];
                var nLayer = null;


                if (layerId == 1){
                    nLayer = this.addPolyToLayer(dataArr, 'red')
                }
                if (layerId == 2){
                    nLayer = this.addPolyToLayer(dataArr, 'green')
                }
                if (layerId == 3){
                    nLayer = this.addPolyToLayer(dataArr, 'blue')
                }
                return nLayer;
            },
            addPolyToLayer(dataArr, layerColor){
                var cntr = 0;
                var newLayer = new L.FeatureGroup();
                for(cntr; cntr<dataArr.length; cntr++) {

                    var polygon = L.polygon(dataArr[cntr].points, {
                        color: layerColor,
                        fillColor: layerColor,
                        fillOpacity: 0.5,
                        //id: dataArr[cntr].id,
                        data: dataArr[cntr]
                    });
                   // var text = "Я полигон с id=" + dataArr[cntr].id ;

                   // polygon.bindPopup(text);
                    polygon.on('click', this.onPolygonClicked);
                    newLayer.addLayer(polygon);
                }
                return newLayer;
            },
           /* hideModal() {
                this.$refs['poly-modal'].hide();
            },
            */
            onPolygonClicked(e){
                console.log('Clicked',e.target.options.data);
                this.polyPopup = true;
                this.polyCharacteristic = e.target.options.data;

            },


            createField() {
                //this.$refs['poly-modal'].hide();

                var drawnLayers = new L.FeatureGroup();
                this.map.addLayer(drawnLayers);

                var drawPluginOptions = {
                    position: 'topright',
                    draw: {
                        polygon: {
                            allowIntersection: false, // Restricts shapes to simple polygons
                            drawError: {
                                color: '#e1e100', // Color the shape will turn when intersects
                                message: '<strong>Oh snap!<strong> you can\'t draw that!' // Message that will show when intersect
                            },
                            shapeOptions: {
                                color: '#97009c'
                            }
                        },
                        // disable toolbar item by setting it to false
                        polyline: false,
                        circle: false, // Turns off this drawing tool
                        rectangle: false,
                        marker: false,
                    },
                    edit: {
                        featureGroup: drawnLayers, //REQUIRED!!
                        remove: false
                    }
                };

                var drawControl = new L.Control.Draw(drawPluginOptions);
                this.map.addControl(drawControl);

                this.map.on('draw:created', function(e) {
                    var type = e.layerType,
                        layer = e.layer;
                    drawnLayers.addLayer(layer);

                    console.log('new field params', layer._latlngs);


                });


                console.log('hi', drawnLayers.valueOf());
                this.addNewField = true;

            }
        },
        mounted() {

            // карта типа спутник
            var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            });

            /*
            // просто карта
            this.mainLayer = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZGFyeWFjaHlydWsiLCJhIjoiY2swbzEwNnlrMDViYzNrcXI4NDAyN2gyNiJ9.d5mwHr6_wkJRtV0aXZv7Mg',
                {
                maxZoom: 18,
                id: 'mapbox.streets',
                accessToken: 'pk.eyJ1IjoiZGFyeWFjaHlydWsiLCJhIjoiY2swbzEwNnlrMDViYzNrcXI4NDAyN2gyNiJ9.d5mwHr6_wkJRtV0aXZv7Mg'
            });

            //названия на карте
            var CartoDB_VoyagerOnlyLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}{r}.png', {
                subdomains: 'abcd',
                maxZoom: 19
            });



            // базовые карты для выбора

            var baseMaps = {
                "Basic": this.mainLayer,
                "Satellite": Esri_WorldImagery
            };
            */

            //кастомный слой 1
            this.elFieldsLayer = this.getMapLayer(this.elementsFromDB,1);
            //кастомный слой 2
            this.fieldsLayer = this.getMapLayer(this.elementsFromDB,2);
            //кастомный слой 3
            this.growingCulturesLayer = this.getMapLayer(this.elementsFromDB,3);

            /*var overlayMaps = {
                "Поля": this.fieldsLayer,
                "Элементарные участки": this.elFieldsLayer,
                "Поля для хозяев (вручную)": this.growingCulturesLayer
            };
            */

            // initialize the map
            this.map = L.map('map', {
                center: [53.54, 27.30],
                zoom: 8,
                // тут добавляем все нужные слои
                layers: [Esri_WorldImagery]
            });
            //L.control.layers(baseMaps).addTo(this.map);


        },



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
        height: calc(100% - 55px);
        z-index: 0

    }
    .form-custom {
        position: absolute;

        width: 260px;
        background-color: white;
        border-radius: 5px;

    }
    .pos-tr{
        top: 10px;
        right: 100px;
    }
    .pos-br{
        bottom: 10px;
        right: 100px;
    }
    #mapid {
        height: 100%;
        width: 100%;
    }

    .layers-list{
        top: 60px;
        right: 10px;
        position: absolute;
        background: white;
        border-radius: 5px;
    }
    .layers-btn{
        top: 60px;
        right: 10px;
        position: absolute;
        border-radius: 5px;
    }
    .filter-container {
        position: absolute;
        z-index: 1000;
        top: 200px;
        right: 10px;
        background-color: white;
        border-radius: 5px;
        width: 400px

    }

</style>
