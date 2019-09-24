<template>
    <div id="main-container">
        <b-navbar toggleable="lg" type="dark" variant="info" class="top-viewed">
            <b-navbar-brand>AgroNET</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="#">Список хозяйств</b-nav-item>
                    <b-nav-item-dropdown right>
                        <!-- Using 'button-content' slot -->
                        <template  v-slot:button-content>
                            <em>Справочники</em>
                        </template>
                        <b-dropdown-item href="#">Сотрудники</b-dropdown-item>
                        <b-dropdown-item href="#">Техника</b-dropdown-item>
                        <b-dropdown-item href="#">Удобрения</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item  @click="onStartConstructor">Добавить поле</b-nav-item>

                    <b-nav-item>Хозяйство</b-nav-item>



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

</style>
