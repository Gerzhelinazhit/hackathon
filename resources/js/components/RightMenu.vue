<template>
    <div>
        <div class="constructor-menu">
            <div class="mt-1 mr-1 ml-1 mb-1">
                <p>Выберите необходимую иконку<br>для  рисования



                </p>
            </div>
        </div>

        <div class="right-menu">
            <h3 class="mt-3 ml-3" >Параметры поля</h3>
            <b-form  @submit="onSubmit" @reset="onReset" class="mt-3 mr-3 ml-3 mb-3">

                <b-row class="my-1">
                    <b-col sm="5">
                        <label for="input-1">Наименование</label>
                    </b-col>
                    <b-col sm="7">
                        <b-form-input size="sm" id="input-1" v-model="form.name" required placeholder="Наименование поля"></b-form-input>
                    </b-col>
                </b-row>

                <b-row class="my-1">
                    <b-col sm="5">
                        <label for="input-2">Расположение</label>
                    </b-col>
                    <b-col sm="7">
                        <b-form-input size="sm" id="input-2" v-model="form.place" required placeholder="Расположение поля"></b-form-input>
                    </b-col>
                </b-row>

                <b-row class="my-1">
                    <b-col sm="5">
                        <label for="input-3">Зоны</label>
                    </b-col>
                    <b-col sm="7">
                        <b-form-input id="input-3" size="sm" v-model="form.zone" required placeholder=""></b-form-input>
                    </b-col>
                </b-row>

                <b-row class="my-1">
                    <b-col sm="5">
                        <label for="input-4">Вид угодий</label>
                    </b-col>
                    <b-col sm="7">
                        <b-form-select id="input-4" size="sm" v-model="form.culType" :options="culTypes" required placeholder="Выберите вид угодий"></b-form-select>
                    </b-col>
                </b-row>

                <!--<b-row class="my-1">
                    <b-col sm="5">
                        <label for="input-5">Культура</label>
                    </b-col>
                    <b-col sm="7">
                        <b-form-select id="input-5" size="sm" v-model="form.culture" :options="cultures" required placeholder="Выберите культуру"></b-form-select>
                    </b-col>
                </b-row> -->

                <b-row class="my-1">
                    <b-col sm="5">
                        <label for="input-6">Бальность поля</label>
                    </b-col>
                    <b-col sm="7">
                        <b-form-select id="input-6" size="sm" v-model="form.bal" :options="balls" required placeholder="Выберите бальность поля"></b-form-select>
                    </b-col>
                </b-row>

                <b-button type="submit" variant="primary">Сохранить</b-button>
                <b-button type="reset" variant="danger">Отмена</b-button>

            </b-form>
        </div>

    </div>

</template>

<script>
    import L from 'leaflet'
    import 'leaflet-draw'

    export default {
        data() {
            return {
                show: false,
                drawControl: null,
                newPolygon: null,
                form: {
                    name: '',
                    place: '',
                    zone: null,
                    culType: null,
                    culture: null,
                    bal: null
                },
                zones: [{ text: 'Select One', value: null },'1', '2', '3', '4'],
                culTypes: [{ text: 'Select One', value: null },'type1', 'type2'],
                cultures: [{ text: 'Select One', value: null },'Carrots', 'Beans', 'Tomatoes', 'Corn'],
                balls: [{ text: 'Select One', value: null },'1', '2', '3', '4']
            }
        },
        mounted() {
            //this.$parent.createField();
            var drawnLayers = new L.FeatureGroup();
            this.$parent.map.addLayer(drawnLayers);

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

            this.drawControl = new L.Control.Draw(drawPluginOptions);
            this.$parent.map.addControl(this.drawControl);

            this.$parent.map.on('draw:created', function(e) {
                var type = e.layerType;
                this.newPolygon = e.layer;
                drawnLayers.addLayer(this.newPolygon);

                console.log('new field params', this.newPolygon._latlngs);

            });
            console.log('hi', drawnLayers.valueOf());
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault();
                alert(JSON.stringify(this.form));// here add to server
                //alert(this.newPolygon._latlngs);
                this.$parent.$parent.addField = false;
                this.$parent.map.removeControl(this.drawControl);
            },
            onReset(evt) {
                evt.preventDefault();
                // Reset our form values
                this.form.name = '';
                this.form.place = '';
                this.form.zone = null;
                this.form.culType = null;
                this.form.culture = null;
                this.form.bal = null;

                // Trick to reset/clear native browser form validation state
                this.show = false;
                this.$nextTick(() => {
                    this.show = true
                });

                console.log(this.$parent.$parent.addField);

                this.$parent.$parent.addField = false;
                console.log(this.$parent.$parent.addField);

                this.$parent.map.removeControl(this.drawControl);
            }
        }
    }
</script>

<style scoped>
    .right-menu {
        position: absolute;
        z-index: 10;
        top: 180px;
        right: 10px;
        background-color: white;
        border-radius: 5px;
        width: 300px;

    }
    .constructor-menu{
        position: absolute;
        z-index: 10;
        top: 67px;
        right: 45px;
        background-color: white;
        border-radius: 5px;

    }

</style>
