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
                                                        <b-button v-b-modal.bv-modal-example @click="createChart">
                                                            Гр
                                                        </b-button>
                                                    </b-th>
                                                    <b-th variant="primary">
                                                        <b-button>
                                                            Гр
                                                        </b-button>
                                                    </b-th>
                                                    <b-th variant="primary">
                                                        <b-button>
                                                            Гр
                                                        </b-button>
                                                    </b-th>
                                                    <b-th variant="primary">
                                                        <b-button>
                                                            Гр
                                                        </b-button>
                                                    </b-th>
                                                    <b-th variant="primary">
                                                        <b-button>
                                                            Гр
                                                        </b-button>
                                                    </b-th>
                                                    <b-th variant="primary">
                                                        <b-button>
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
        <canvas id="myChart"></canvas>
        <b-modal id="bv-modal-example" >



        </b-modal>
    </div>

</template>

<script>
    import L from "leaflet";
    import 'vue-chartjs'

    export default {
        name: "Farm",
        data(){
            return{
                map2: null,
                map3: null,
                Esri_WorldImagery: null,
                Esri_WorldImagery2: null,
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
                    layers: [mlayer]
                });
            },
            drawMap3() {
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
                    layers: [this.Esri_WorldImagery2]
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


            createChart(){
               // this.$refs['bv-modal-example'].show();


                var ctx = document.getElementById('myChart');
                console.log('ctx', ctx);
                /*var myChart = new Chart(ctx, {
                    type: 'horizontalBar',
                    data: {
                        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                        datasets: [{
                            label: '# of Votes',
                            data: [12, 10, 3, 5, 2, 3],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }
                });

*/

            }
        },
        mounted() {
            // карта типа спутник
            this.Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            });
            // карта типа спутник
            this.Esri_WorldImagery2 = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            });


            this.drawMap2(this.Esri_WorldImagery);
            this.drawMap3();


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
