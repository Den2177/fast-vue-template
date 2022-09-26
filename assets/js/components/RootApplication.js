import RegisterPage from "../pages/RegisterPage.js";
import HeaderBlock from "./HeaderBlock.js";
import LoginPage from "../pages/LoginPage.js";
import MainPage from "../pages/MainPage.js";
import AdminPage from "../pages/AdminPage.js";
import BlogPage from "../pages/BlogPage.js";
import ArticlePage from "../pages/ArticlePage.js";
import FooterBlock from "./FooterBlock.js";
import {getCurrentUser} from "../helpers/storage.js";
import {savePage, getLastPage} from "../helpers/storage.js";

export default {
    components: {RegisterPage, MainPage, HeaderBlock, LoginPage, AdminPage, BlogPage, ArticlePage, FooterBlock},
    data() {
        return {
            route: "/main",
            componentName: 'main-page',
            api: "http://127.0.0.1:8000/api",
            user: getCurrentUser() || null,
            notifications: [],
            visionArticle: null,
            html: (strings, ...values) => String.raw({ raw: strings }, ...values),
        }
    },
    created() {
        this.getPage();
    },
    mounted() {

    },
    methods: {
        getPage() {
            const page = getLastPage();

            if (page) {
                this.componentName = page;
            }

        },
        changePage(pageName) {
            this.componentName = pageName;
        },
        showNotification(notification) {
            notification.id = Date.now();

            this.notifications.push(notification);

            setTimeout(() => {
                this.notifications = this.notifications.filter(notif => notif.id !== notification.id);
            }, 4000);
        },

    },
    computed: {

    },
    watch: {
        componentName(newValue) {
            savePage(newValue);
        },
    },
    template: `
    <header-block></header-block>
    <component :is="componentName"></component>
    <footer-block></footer-block>
    
    <div class="notifications" v-if="notifications.length">
    <div class="notification" v-for="notification in notifications" :class="{red: notification.isError}">
    <div class="message" v-html="notification.message"></div>
</div>
</div>
    `,
}