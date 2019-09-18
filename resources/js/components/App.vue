<template>
    <div id="main-container">
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand>AgroNET</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="#">Что-то</b-nav-item>
                    <b-nav-item href="#">Что-то еще</b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">

                    <b-nav-item-dropdown text="Тип отображения" right>
                        <b-dropdown-item>
                            Карта полей
                        </b-dropdown-item>

                        <b-dropdown-item>
                            Элементарные участки
                        </b-dropdown-item>

                        <b-dropdown-item>
                            Поля по типу посевов
                        </b-dropdown-item>

                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown right>
                        <!-- Using 'button-content' slot -->
                        <template v-slot:button-content>
                            <em>Меню пользователя</em>
                        </template>
                        <b-dropdown-item href="#">Профиль</b-dropdown-item>
                        <b-dropdown-item href="#">Выход</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>

        <router-view></router-view>


        <div id="mapid"></div>



    </div>



</template>

<script>
    export default {
        name: 'App',
        data(){
            return{}
        },
        mounted(){


        },
        methods: {

        }
    }
</script>


<style>
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

        height: 100%;
        width: 100%;
    }

    #mapid {

        height: 100%;
        width: 100%;
    }

</style>
