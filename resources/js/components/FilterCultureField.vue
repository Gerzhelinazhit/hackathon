<template>
    <div class="top-viewed mr-3">
        <h5 class="mt-1 ml-3">
            Фильтр границ участков хозяйств
        </h5>

        <b-form inline>
            <b-col class="mr-1 ml-1 mb-1">
                <b-row class="mr-1">
                    <b-col sm="6">
                        <label for="inline-form-custom-select1">По виду угодий</label>
                    </b-col>
                    <b-col sm="6" >
                        <b-form-select
                            size="sm"
                            class=" mr-sm-2 mb-sm-0 mr-1"
                            v-model="chosenGround"
                            :options="typeOfGround"
                            id="inline-form-custom-select1">

                            <template v-slot:first>
                                <option :value="null">Выберите вид угодий...</option>
                            </template>
                        </b-form-select>
                    </b-col>
                </b-row>

                <b-row class="mt-1">
                    <b-col sm="6">
                        <label for="inline-form-custom-select2">По типу культуры</label>
                    </b-col>
                    <b-col sm="6">
                        <b-form-select
                            size="sm"
                            class="mr-sm-2 mb-sm-0"
                            v-model="chosenCulture"
                            :options="cultures"
                            id="inline-form-custom-select2"
                        >
                            <template v-slot:first>
                                <option :value="null">Выберите культуру...</option>
                            </template>
                        </b-form-select>
                    </b-col>
                </b-row>
            </b-col>

        </b-form>

    </div>
</template>

<script>
    export default {
        name: "FilterCultureField",
        data() {
            return {
                chosenGround: null,
                chosenCulture: null,
                typeOfGround: [
                    'type1',
                    'type2',
                    'type3'
                ],
                cultures: [
                    'Рожь',
                    'Пшеница',
                    'Свекла',
                    'Картофель'
                ]
            }
        }
    }
</script>

<style scoped>
    .cl-filter {
        position: absolute;
        top: 60px;
        left: 60px;
        background: white;
        border-radius: 5px;
    }

</style>
