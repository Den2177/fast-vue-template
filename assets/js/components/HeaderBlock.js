import {removeUser} from "../helpers/storage.js";

export default {
    data() {
        return {

        }
    },
    created() {

    },
    mounted() {

    },
    methods: {
        logout() {
            removeUser();
            this.$root.user = null;
            this.$root.changePage('register-page');
        },
        login() {
          this.$root.changePage('login-page');
        },
        register() {
            this.$root.changePage('register-page');
        },


    },
    computed: {
        userIsAdmin() {

            const roles = this.$root.user?.roles;
            let isHasAdminRole = false;

            if (roles) {
                roles.forEach(role => {

                    if (role.name === 'admin') {
                        isHasAdminRole = true;
                    }
                });
            }

            return isHasAdminRole;
        },
        isAuthed() {
            return !!this.$root.user;
        }
    },
    watch() {

    },
    template: `<header class="header card">
    <div class="container">
        <a href="#" class="logo" @click.prevent="$root.changePage('main-page');">
            <img src="/assets/images/logo.svg" alt="main-logo">
        </a>

        <div class="mobile-hidden">
            <nav class="links">
                <a href="blog.html" class="link" @click.prevent="$root.changePage('blog-page');">Блог</a>
                <a href="#" class="link">Подарочные сертификаты</a>
                <a href="#" class="link">Для Психологов</a>
                <a href="#" class="link" v-if="userIsAdmin" @click.prevent="$root.changePage('admin-page');">Панель администратора</a>
            </nav>
            <div class="flex-row">
                <button class="btn" @click="login" v-if="!isAuthed">Вход</button>
                <button class="btn" @click="register" v-if="!isAuthed">Регистрация</button>
                <button class="btn" @click="logout" v-if="isAuthed">Выход</button>
                <button class="btn">Выбрать психолога</button>
            </div>
        </div>

        <div class="burger">
            <span></span>
        </div>


    </div>
</header>`
}