import request from "../helpers/request.js";
import {saveUser} from "../helpers/storage.js";

export default {
    components: {},
    data() {
        return {
            userFields: {
                email: "",
                password: "",
                password_repeat: "",
            },

        }
    },
    watch: {},
    created() {

    },
    mounted() {

    },
    methods: {
        submit() {
            request.post(this.$root.api + '/register', this.userFields).then(res => {

                if (res.errors) {
                    const fields = Object.entries(res.errors);

                    const message = fields.reduce((mes, curr) => {
                        mes += curr[1].join('<br>');
                        mes += '<br>';
                        return mes;
                    }, "");

                    this.$root.showNotification({message: message, isError: true})
                    return null;
                }

                saveUser(res.data.user);
                this.$root.changePage('main-page');
                this.$root.user = res.data.user;
            });
        }
    },
    computed: {},
    template: `
        <div class="container">
            <main class="main">
                <div class="container">
                    <div class="card vertical auth-block">
                        <form action="#" class="vertical" @submit.prevent="submit">
                            <input type="text" class="input" placeholder="Почта" v-model="userFields.email">
                            <input type="password" class="input" placeholder="Пароль" v-model="userFields.password">
                            <input type="password" class="input" placeholder="Повтор пароля"
                                   v-model="userFields.password_repeat">
                            <button class="btn mt20" type="submit">Зарегистрироваться</button>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    `
}