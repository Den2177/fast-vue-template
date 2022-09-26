import request from "../helpers/request.js";
import ModalWindow from "../components/ModalWindow.js";
import {saveUser, getCurrentUser} from "../helpers/storage.js";
export default {
    components: {ModalWindow},
    data() {
        return {
            userFields: {
                roles: [],
            },
            updateUserFields: {
                roles: [],
            },
            therapistFields: {
                education: [
                    {
                        year: "",
                        description: "",
                    }
                ]
            },
            users: [],
            accessingRoles: [],
        }
    },
    watch: {},
    created() {
        this.getRoles();
        this.getUsers();
    },
    mounted() {

    },
    methods: {
        getUsers() {
            request.get(this.$root.api + '/admin/users').then(res => this.users = res.data);
        },
        createUser() {
            request.post(this.$root.api + '/admin/users', this.userFields).then(res => {
                this.getUsers();
            })
        },
        addEducationField() {
            this.therapistFields.education.push({
                year: "",
                description: "",
            });
        },
        getRoles() {
            request.get(this.$root.api + '/roles').then(res => {
                this.accessingRoles = res;
            });
        },
        deleteUser(userId) {
            request.destroy(this.$root.api + '/admin/users/' + userId).then(res => {
                this.users = this.users.filter(user => user.id !== userId);
            });
        },
        createTherapist() {
            request.post(this.$root.api + '/admin/users/therapists', this.therapistFields).then(res => {
                this.getUsers();
            });
        },
        editUser(userId) {
            this.$refs['popup'].open().then(res => {
                if (!res) return;

                request.put(this.$root.api + '/admin/users/' + userId, this.updateUserFields).then(res => {
                    if (userId === getCurrentUser()?.id) {
                        saveUser(res.data);
                    }

                    this.getUsers();
                });
            })

        }
    },
    computed: {},
    template: `
        <div class="bc-white">

            <main class="main">

                <div class="admin">

                    <div class="container">

                        <div class="admin-body">

                            <table class="card">
                                <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Lastname</th>
                                    <th>Patronymic</th>
                                    <th>Email</th>
                                </tr>

                                </thead>
                                <tbody>
                                <tr v-for="user in users">
                                    <td>{{user.id}}</td>
                                    <td>{{user.name || 'without name'}}</td>
                                    <td>{{user.lastname || 'without lastname'}}</td>
                                    <td>{{user.patronymic || 'without patronymic'}}</td>
                                    <td>{{user.email || 'without email'}}</td>

                                    <td>
                                        <a href="#" class="link red" @click.prevent="deleteUser(user.id)">Удалить</a>
                                    </td>
                                    <td>
                                        <a href="#" class="link red"
                                           @click.prevent="editUser(user.id)">Редактировать</a>
                                    </td>
                                </tr>

                                </tbody>
                            </table>

                            <div class="double-top mt20">
                                <form action="#" class="admin-form card bordered vertical" @submit.prevent="createUser">
                                    <h3>Добавить пользователя</h3>
                                    <input type="text" class="input" placeholder="Имя" v-model="userFields.name">
                                    <input type="text" class="input" placeholder="Фамилия"
                                           v-model="userFields.lastname">
                                    <input type="text" class="input" placeholder="Отчество"
                                           v-model="userFields.patronymic">
                                    <input type="email" class="input" placeholder="Почта" v-model="userFields.email">
                                    <input type="password" class="input" placeholder="Пароль"
                                           v-model="userFields.password">
                                    <div class="roles-block">
                                        <div>Роли</div>
                                        <div class="role vertical" v-for="role in accessingRoles">
                                            <label>
                                                <input type="checkbox" v-model="userFields.roles" :value="role.id">
                                                <span>{{role.name}}</span>
                                            </label>
                                        </div>
                                    </div>

                                    <button class="btn" type="submit">Добавить</button>
                                </form>

                                <form action="#" class="admin-form card bordered vertical"
                                      @submit.prevent="createTherapist">
                                    <h3>Добавить терапевта</h3>
                                    <input type="text" class="input" placeholder="Имя" v-model="therapistFields.name">
                                    <input type="text" class="input" placeholder="Фамилия"
                                           v-model="therapistFields.lastname">
                                    <input type="text" class="input" placeholder="Отчество"
                                           v-model="therapistFields.patronymic">
                                    <input type="email" class="input" placeholder="Почта"
                                           v-model="therapistFields.email">
                                    <input type="password" class="input" placeholder="Пароль"
                                           v-model="therapistFields.password">
                                    <input type="number" class="input" placeholder="Опыт"
                                           v-model="therapistFields.experience">
                                    <input type="text" class="input" placeholder="Тип сессии"
                                           v-model="therapistFields.session_type">
                                    <input type="number" class="input" placeholder="Цена за сессию"
                                           v-model="therapistFields.session_price">
                                    <textarea class="input" placeholder="О терапевте"
                                              v-model="therapistFields.about"></textarea>
                                    <div class="educations">
                                        <h4>Образование</h4>
                                        <div class="education vertical mt20"
                                             v-for="education in therapistFields.education">
                                            <input type="number" class="input" placeholder="Год"
                                                   v-model="education.year">
                                            <textarea class="input" cols="30" rows="10" placeholder="Описание"
                                                      v-model="education.description"></textarea>
                                        </div>
                                        <button class="btn mt20" @click.prevent="addEducationField">Добавить поле
                                            образования
                                        </button>
                                    </div>

                                    <button class="btn">Добавить</button>
                                </form>
                            </div>

                        </div>

                    </div>
                </div>
            </main>

        </div>
        <modal-window ref="popup">
            <template #content>
                <form action="#" class="admin-form card bordered vertical">
                    <input type="text" class="input" placeholder="Имя" v-model="updateUserFields.name">
                    <input type="text" class="input" placeholder="Фамилия" v-model="updateUserFields.lastname">
                    <input type="text" class="input" placeholder="Отчество" v-model="updateUserFields.patronymic">
                    <input type="email" class="input" placeholder="Почта" v-model="updateUserFields.email">
                    <input type="password" class="input" placeholder="Пароль" v-model="updateUserFields.password">
                    <div class="roles-block">
                        <div>Роли</div>
                        <div class="role vertical" v-for="role in accessingRoles">
                            <label>
                                <input type="checkbox" v-model="updateUserFields.roles" :value="role.id">
                                <span>{{role.name}}</span>
                            </label>
                        </div>
                    </div>
                </form>
            </template>
        </modal-window>
    `,
}