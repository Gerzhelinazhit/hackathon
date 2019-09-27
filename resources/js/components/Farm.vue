<template>
    <div>
        <b-card class="mt-3" no-body>

            <b-tabs card>
                <b-tab
                    title="Агро-хим состав"
                    active
                    ><!--@click="drawMap2"-->
                    <b-card-text>Список полей</b-card-text>
                    <b-row>
                        <b-col sm="3">
                            <b-list-group class="mb-3 list-custom">
                                <b-list-group-item
                                    class="d-flex justify-content-between align-items-center"
                                    v-for="item in items"
                                    @click="showItemSubtree(item)">
                                    {{item.name}}

                                    <b-badge variant="primary" pill>{{item.childrenAmount}}</b-badge>

                                    <!-- <b-list-group class="mb-3 list-custom" v-if="item.showSubtree">
                                         <b-list-group-item
                                             class="d-flex justify-content-between align-items-center"
                                             v-for="sitem in this.subitemsShow"
                                             {{sitem.name}}>

                                         </b-list-group-item>

                                     </b-list-group> -->
                                </b-list-group-item>




                            </b-list-group>

                        </b-col>
                        <b-col sm="9">
                            <b-row>
                                <b-col sm="6">
                                    <div>
                                        <b-table
                                            :items="table2items"
                                            :fields="table2fields"
                                            :tbody-tr-class="rowClass"
                                            sticky-header
                                            small>
                                            <template v-slot:thead-top="data">
                                                <b-tr>
                                                    <b-th colspan="1"></b-th>
                                                    <b-th variant="primary">
                                                        <b-button @click="createChart('pH 2018', [1,34,5,6,7,8,9])">
                                                            Гр
                                                        </b-button>
                                                    </b-th>
                                                    <b-th variant="primary">
                                                        <b-button @click="createChart('гумус 2018', [1,8,7,8,9])">
                                                            Гр
                                                        </b-button>
                                                    </b-th>
                                                    <b-th variant="primary">
                                                        <b-button @click="createChart('CaO 2018', [1,8,7,8,9])">
                                                            Гр
                                                        </b-button>
                                                    </b-th>
                                                    <b-th variant="primary">
                                                        <b-button @click="createChart('P2O5 2018', [1,8,7,8,9])">
                                                            Гр
                                                        </b-button>
                                                    </b-th>
                                                    <b-th variant="primary">
                                                        <b-button @click="createChart('K2O 2018', [1,8,7,8,9])">
                                                            Гр
                                                        </b-button>
                                                    </b-th>
                                                    <b-th variant="primary">
                                                        <b-button @click="createChart('Mg 2018', [1,8,7,8,9])">
                                                            Гр
                                                        </b-button>
                                                    </b-th>

                                                </b-tr>
                                            </template>


                                            <template v-slot:cell(actions)="row">
                                                <label >
                                                    <b-button size="sm" class="mr-1" variant="warning" @click="onChangeDevice(row)">
                                                        <img src="../img/edit.png" style="max-width: 20px; max-height: 20px">
                                                    </b-button>
                                                </label>
                                            </template>
                                        </b-table>
                                    </div>
                                </b-col>

                                <b-col sm="6">
                                    <div class="map-container1">
                                        <div id="map2"></div>
                                    </div>
                                </b-col>
                            </b-row>
                        </b-col>
                    </b-row>
                </b-tab>

                <b-tab
                    title="Севооборот"
                    ><!--@click="drawMap3"-->
                    <b-card-text>Cписок полей</b-card-text>
                    <b-row>
                        <b-col sm="3">
                            <b-list-group class="mb-3 list-custom">
                                <b-list-group-item
                                    class="d-flex justify-content-between align-items-center"
                                    v-for="item in items">
                                    {{item.name}}
                                </b-list-group-item>
                            </b-list-group>
                        </b-col>

                        <b-col sm="9">
                            <b-row>
                                <b-col sm="6">
                                    <div>
                                        <b-table
                                            :items="table1items"
                                            :fields="table1fields"
                                            :per-page="10"
                                            :tbody-tr-class="rowClass">

                                            <template v-slot:cell(actions)="row">
                                                <label >
                                                    <b-button size="sm" class="mr-1" variant="warning" @click="onChangeDevice(row)">
                                                        <img src="../img/edit.png" style="max-width: 20px; max-height: 20px">
                                                    </b-button>
                                                </label>
                                            </template>
                                        </b-table>
                                    </div>
                                </b-col>
                                <b-col sm="6">
                                    <div class="map-container1">
                                        <div id="map3"></div>
                                    </div>
                                </b-col>
                            </b-row>


                        </b-col>
                    </b-row>

                </b-tab>
            </b-tabs>



        </b-card>

        <b-modal id="bv-modal-example" ref="modalE">
            <Chart
                :labels="['Янв', 'Фев', 'Март', 'Апр', 'Май','Июнь','Июль','Авг','Сент','Окт','Ноя','Дек']"
                :datasets="this.datasets"
            >
            </Chart>

        </b-modal>
    </div>

</template>

<script>
    import L from "leaflet";
    //import 'vue-chartjs'
    import Chart from './Chart'



    export default {
        name: "Farm",
        components: {
            Chart
        },
        data(){
            return{

                // for chart to draw
                datasets: null,

                // for map1
                map2: null,
                Esri_WorldImagery: null,
                elemFieldLayer: null,

                //for map2
                map3: null,
                Esri_WorldImagery2: null,
                fieldLayer: null,



                items: [
                    {
                        id: 1,
                        name: 'Поле 1',
                        childrenAmount: 3,
                        showSubtree: false
                    },
                    {
                        id: 2,
                        name: 'Поле 2',
                        childrenAmount: 5,
                        showSubtree: false
                    },
                    {
                        id: 3,
                        name: 'Поле 3',
                        childrenAmount: 7,
                        showSubtree: false
                    },
                    {
                        id: 4,
                        name: 'Поле 5',
                        childrenAmount: 11,
                        showSubtree: false
                    }

                ],
                subItems: [
                    {
                        id: 1,
                        parentId: 1,
                        name: 'Участок 1',
                    },
                    {
                        id: 2,
                        parentId: 1,
                        name: 'Участок 2',
                    },
                    {
                        id: 3,
                        parentId: 2,
                        name: 'Участок 3',
                    },
                    {
                        id: 4,
                        parentId: 3,
                        name: 'Участок 5',
                    }
                ],
                subitemsShow: [
                    {
                        id: 1,
                        parentId: 1,
                        name: 'Участок 1',
                    },
                    {
                        id: 2,
                        parentId: 1,
                        name: 'Участок 2',
                    },
                ],
                table2fields: [
                    {key: 'date', label: 'Дата'},
                    {key: 'pH', label: 'pH'},
                    {key: 'humus', label: 'гумус'},
                    {key: 'CaO', label: 'CaO'},
                    {key: 'P2O5', label: 'P2O5'},
                    {key: 'K2O', label: 'K2O'},
                    {key: 'Mg', label: 'Mg'},
                    {key: 'actions', label: 'действия'},

                ],
                table2items: [
                    { date: '24.09.2019', pH: '20', humus: '10', CaO: '2', P2O5: '3', K2O: '4', Mg: '2', status: 'awesome' },
                    { date: '23.09.2019', pH: '20', humus: '10', CaO: '2', P2O5: '3', K2O: '4', Mg: '2' },
                    { date: '22.09.2019', pH: '20', humus: '10', CaO: '2', P2O5: '3', K2O: '4', Mg: '2' },
                ],
                table1fields: [
                    {key: 'culture', label: 'Культура'},
                    {key: 'from', label: 'Посадка с'},
                    {key: 'to', label: 'Посадка по'},
                    {key: 'actions', label: 'действия'},

                ],
                table1items: [
                    { culture: 'Рожь', from: '24.07.2019', to: '24.09.2019', status: 'awesome' },
                    { culture: 'Пшеница', from: '24.03.2019', to: '24.05.2019' },
                    { culture: 'Овес', from: '24.07.2018', to: '24.09.2018' },
                    { culture: 'Пшеница', from: '24.03.2017', to: '24.05.2017' },
                    { culture: 'Овес', from: '24.07.2016', to: '24.09.2016' },
                ]

            }
        },

        methods: {
            drawMap2(mlayer){

                // initialize the 2 map
                this.map2 = L.map('map2', {
                    center: [53.5, 24.30],
                    zoom: 14,
                    // тут добавляем все нужные слои
                    layers: mlayer
                });
            },
            drawMap3(layer) {
                // просто карта
               /* var mainLayer = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZGFyeWFjaHlydWsiLCJhIjoiY2swbzEwNnlrMDViYzNrcXI4NDAyN2gyNiJ9.d5mwHr6_wkJRtV0aXZv7Mg',
                    {
                        maxZoom: 18,
                        id: 'mapbox.streets',
                        accessToken: 'pk.eyJ1IjoiZGFyeWFjaHlydWsiLCJhIjoiY2swbzEwNnlrMDViYzNrcXI4NDAyN2gyNiJ9.d5mwHr6_wkJRtV0aXZv7Mg'
                    });
                */



                this.map3 = L.map('map3', {
                    center: [53.54, 27.30],
                    zoom: 14,
                    // тут добавляем все нужные слои
                    layers: layer
                });
            },

            showItemSubtree(item){
                this.subItems.forEach(function (subitem) {
                    if(subitem.parentId == item.id){
                        this.subitemsShow.push(subitem);
                    }
                });
                item.showSubtree = !item.showSubtree;

            },

            rowClass(item, type) {
                if (!item) return;
                if (item.status === 'awesome') return 'table-success';
            },
            onChangeDevice(item){
                alert(item);
            },


            createChart(label, dataArr){

                this.datasets = [
                    {
                        label: label,
                        data: dataArr //[300, 700, 450, 750, 450]
                    }
                ];



                this.$refs['modalE'].show();





            },
            addPolyToLayer(dataArr, layerColor){
                console.log(dataArr);
                var cntr = 0;
                var newLayer = new L.FeatureGroup();


                    var polygon = L.polygon(dataArr, {
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

                return newLayer;
            },
        },

        mounted() {
            // карта типа спутник
            this.Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
                maxZoom: 16,
            });
            // карта типа спутник
            this.Esri_WorldImagery2 = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
                maxZoom: 16,
            });

            var arr = [[53.509, 24.31], //[53.5, 24.30]
                [53.503, 24.04],
                [53.51, 24.35]];
            var arr2 = [[52.509, 27.31],
                [52.503, 27.04],
                [52.51, 27.44]];

            // 53.54, 27.30

            // layers for polygons
            this.elemFieldLayer = this.addPolyToLayer(arr, 'red'); //[53.5, 24.30]


            this.fieldLayer = this.addPolyToLayer(arr2, 'red');




            this.drawMap2([this.Esri_WorldImagery, this.elemFieldLayer]);
            this.drawMap3([this.Esri_WorldImagery2, this.fieldLayer]);


        },

    }
</script>

<style scoped>
    .list-custom{
        overflow-y: auto;
    }
    #map2 {
        min-width: 100%;
        min-height: 100%;

    }
    #map3 {
        min-width: 100%;
        min-height: 100%;
    }
    .map-container1{
        height: 500px;
    }
    #myChart{
        width: 100px;
        height: 100px;
        max-width: 200px;
        max-height: 200px;
    }

</style>
