<template>
    <div id="main-container">
        <b-navbar toggleable="lg" type="dark" variant="info" class="nav-top">
            <b-navbar-brand>AgroNET</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item>
                        <router-link to="/home">
                            Карта
                        </router-link>

                    </b-nav-item>

                    <b-nav-item-dropdown right>
                        <!-- Using 'button-content' slot -->
                        <template  v-slot:button-content>
                            <em>Справочники</em>
                        </template>
                        <b-dropdown-item>
                            <router-link to="/workers">
                                Сотрудники
                            </router-link>
                        </b-dropdown-item>
                        <b-dropdown-item>
                            <router-link to="/technics">
                                Техника
                            </router-link>
                        </b-dropdown-item>
                        <b-dropdown-item>
                            <router-link to="/manures">
                                Удобрения
                            </router-link>
                        </b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">

                    <b-nav-item  @click="onStartConstructor">
                        Добавить поле
                    </b-nav-item>

                    <b-nav-item>
                        <router-link to="/farm">
                            Хозяйство
                        </router-link>
                    </b-nav-item>

                    <b-nav-item-dropdown right>
                        <!-- Using 'button-content' slot -->
                        <template v-slot:button-content>
                            <em>Меню пользователя</em>
                        </template>
                        <b-dropdown-item class="nav-top">Профиль</b-dropdown-item>
                        <b-dropdown-item class="nav-top">Выход</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>

        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data(){
            return{
                addField: false,
            }
        },
        mounted(){
        },
        methods: {
            onStartConstructor(){
                this.addField = !this.addField;
            }
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
    .top-viewed{
        z-index: 100;
    }
    .nav-top{
        z-index: 150;
    }

</style>
