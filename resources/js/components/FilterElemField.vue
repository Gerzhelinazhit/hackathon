<template>
    <div class="top-viewed mt-3 ml-3">
        <h5>Фильтр для элементарных участков</h5>

        <b-form inline>
            <b-col class="mt-1 mr-1 mb-1">
                <b-row>
                    <b-col sm="3">
                        <label for="inline-11">pH</label>
                    </b-col>
                    <b-col sm="9">
                        <b-row class="mr-1">
                            <b-col sm="2">
                                <p>От</p>
                            </b-col>
                            <b-col sm="4">
                                <b-form-input
                                    class="w-100"
                                    id="inline-11"
                                    size="sm"
                                    v-model="filterOptions.ph.from">
                                </b-form-input>
                            </b-col>
                            <b-col sm="2">
                                <p>до</p>
                            </b-col>
                            <b-col sm="4">
                                <b-form-input
                                    class="w-100"
                                    id="inline-12"
                                    size="sm"
                                    v-model="filterOptions.ph.to">
                                </b-form-input>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>

                <b-row class="mr-1">
                    <b-col sm="3">
                        <label for="inline-31">Гумус</label>
                    </b-col>
                    <b-col sm="9">
                        <b-row>

                            <b-col sm="2">
                                <p>От</p>
                            </b-col>
                            <b-col sm="4">
                                <b-form-input
                                    class="w-100"
                                    id="inline-31"
                                    size="sm"
                                    v-model="filterOptions.humus.from">
                                </b-form-input>
                            </b-col>
                            <b-col sm="2">
                                <p>до</p>
                            </b-col>
                            <b-col sm="4">
                                <b-form-input
                                    class="w-100"
                                    id="inline-32"
                                    size="sm"
                                    v-model="filterOptions.humus.to">
                                </b-form-input>
                            </b-col>

                        </b-row>
                    </b-col>
                </b-row>

                <b-row class="mr-1">
                    <b-col sm="3">
                        <label for="inline-41">CaO</label>
                    </b-col>
                    <b-col sm="9">
                        <b-row>

                            <b-col sm="2">
                                <p>От</p>
                            </b-col>
                            <b-col sm="4">
                                <b-form-input
                                    class="w-100"
                                    id="inline-41"
                                    size="sm"
                                    v-model="filterOptions.CaO.from">
                                </b-form-input>
                            </b-col>
                            <b-col sm="2">
                                <p>до</p>
                            </b-col>
                            <b-col sm="4">
                                <b-form-input
                                    class="w-100"
                                    id="inline-42"
                                    size="sm"
                                    v-model="filterOptions.CaO.to">
                                </b-form-input>
                            </b-col>

                        </b-row>
                    </b-col>
                </b-row>

                <b-row class="mr-1">
                    <b-col sm="3">
                        <label for="inline-51">P2O5</label>
                    </b-col>
                    <b-col sm="9">
                        <b-row>

                            <b-col sm="2">
                                <p>От</p>
                            </b-col>
                            <b-col sm="4">
                                <b-form-input
                                    class="w-100"
                                    id="inline-51"
                                    size="sm"
                                    v-model="filterOptions.P2O5.from">
                                </b-form-input>
                            </b-col>
                            <b-col sm="2">
                                <p>до</p>
                            </b-col>
                            <b-col sm="4">
                                <b-form-input
                                    class="w-100"
                                    id="inline-52"
                                    size="sm"
                                    v-model="filterOptions.P2O5.to">
                                </b-form-input>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>

                <b-row class="mr-1">
                    <b-col sm="3">
                        <label for="inline-61">K2O</label>
                    </b-col>
                    <b-col sm="9">
                        <b-row>

                            <b-col sm="2">
                                <p>От</p>
                            </b-col>
                            <b-col sm="4">
                                <b-form-input
                                    class="w-100"
                                    id="inline-61"
                                    size="sm"
                                    v-model="filterOptions.K2O.from">
                                </b-form-input>
                            </b-col>
                            <b-col sm="2">
                                <p>до</p>
                            </b-col>
                            <b-col sm="4">
                                <b-form-input
                                    class="w-100"
                                    id="inline-62"
                                    size="sm"
                                    v-model="filterOptions.K2O.to">
                                </b-form-input>
                            </b-col>

                        </b-row>
                    </b-col>
                </b-row>

                <b-row class="mr-1">
                    <b-col sm="3">
                        <label for="inline-21">Mg</label>
                    </b-col>
                    <b-col sm="9">
                        <b-row>
                            <b-col sm="2">
                                <p>От</p>
                            </b-col>
                            <b-col sm="4">
                                <b-form-input
                                    class="w-100"
                                    id="inline-21"
                                    size="sm"
                                    v-model="filterOptions.Mg.from">
                                </b-form-input>

                            </b-col>
                            <b-col sm="2">
                                <p>до</p>
                            </b-col>
                            <b-col sm="4">
                                <b-form-input
                                    class="w-100"
                                    id="inline-22"
                                    size="sm"
                                    v-model="filterOptions.Mg.to">
                                </b-form-input>
                            </b-col>

                        </b-row>
                    </b-col>
                </b-row>


                <b-row class="mt-1">
                    <b-col sm="5">
                        <label for="inline-select">Градиент по</label>
                    </b-col>
                    <b-col sm="7">
                        <b-form-select
                            size="sm"
                            class="mb-2 mr-sm-2 mb-sm-0"
                            v-model="chosenType"
                            :options="typesFilter"
                            id="inline-select"
                        >
                            <template v-slot:first>
                                <option :value="null">Не отображать градиент</option>
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
        name: "FilterElemField",
        data() {
            return{
                chosenType: null,
                typesFilter: [
                    'pH',
                    'гумус',
                    'CaO',
                    'P2O5',
                    'K20',
                    'Mg',
                ],
                filterOptions: {
                    ph: {
                        from: null,
                        to: null
                    },
                    humus: {
                        from: null,
                        to: null
                    },
                    CaO: {
                        from: null,
                        to: null
                    },
                    P2O5: {
                        from: null,
                        to: null
                    },
                    K2O: {
                        from: null,
                        to: null
                    },
                    Mg: {
                        from: null,
                        to: null
                    },
                }

            }
        },
        methods: {
            onFilterClick(){
                alert(JSON.stringify(this.filterOptions));
                this.filterOptions.ph.from = null;
                this.filterOptions.ph.to = null;
                this.filterOptions.Mg.from = null;
                this.filterOptions.Mg.to = null;
                this.filterOptions.humus.from = null;
                this.filterOptions.humus.to = null;
                this.filterOptions.CaO.from = null;
                this.filterOptions.CaO.to = null;
                this.filterOptions.P2O5.from = null;
                this.filterOptions.P2O5.to = null;
                this.filterOptions.K2O.from = null;
                this.filterOptions.K2O.to = null;
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
