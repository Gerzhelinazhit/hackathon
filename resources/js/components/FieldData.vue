<template>
    <div class="top-viewed mPopup">


        <b-card
            border-variant="light"
            header="Информация о поле"
            class="text-center">
            <b-card-text>
                <p>Поле с id={{poly.id}} <br> И точками{{poly.points}}</p>
                <b-col>
                    <b-row>
                        Расположение: {{poly.points[0]}}
                    </b-row>
                    <b-row>
                        Культура: {{poly.points[0]}}
                    </b-row>
                    <b-row>
                        Площадь: {{poly.points[0]}}
                    </b-row>



                    <b-row>
                        Погода?????
                    </b-row>
                </b-col>
            </b-card-text>

            <b-button @click="onChangePolygon" variant="primary">Изменить</b-button>
        </b-card>

    </div>

</template>

<script>
    export default {
        name: "FieldData",
        props: {poly: Object},
        data() {
            return{
                //poly: null,
            }
        },
        mounted() {
            this.$parent.map.panTo(this.poly.points[0]);
        },
        methods: {
            onChangePolygon(){
                console.log('change event');
                this.$parent.polyPopup = false;
            }
        }
    }
</script>

<style scoped>
    .mPopup{
        position: absolute;
        top: 30%;
        left: 30%;
        background-color: white;
        border-radius: 5px;
    }

</style>
