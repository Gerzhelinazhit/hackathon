<template>
    <div class="top-viewed cl-filter">
        <h1>filter3</h1>
        <b-col class="mt-3 mr-1 ml-1 mb-3">
            <b-row>
                <b-form inline>

                    <b-form-select
                        class="mb-2 mr-sm-2 mb-sm-0"
                        v-model="chosenGround"
                        :options="typeOfGround"
                        id="inline-form-custom-select-pref"
                    >
                        <template v-slot:first>
                            <option :value="null">Выберите вид угодий...</option>
                        </template>
                    </b-form-select>

                    <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Remember my preference</b-form-checkbox>

                    <b-button variant="primary">Save</b-button>
                </b-form>
            </b-row>
            <b-row>

            </b-row>
        </b-col>


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
