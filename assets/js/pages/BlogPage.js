import request from "../helpers/request.js";
import {getLikedArticles} from "../helpers/storage.js";
export default {
    components: {},
    data() {
        return {
            paginator: null,
        }
    },
    watch: {},
    created() {
        this.getArticles();
    },
    mounted() {

    },
    methods: {
        nextPage() {
            const page = this.paginator.current_page + 1;

            if (page > Math.ceil(this.paginator.total / this.paginator.per_page)) return;

            this.getArticles(page);
        },
        prevPage() {
            const page = this.paginator.current_page - 1;

            if (page < 1) return;

            this.getArticles(page);

        },
        getArticles(page = 1) {
            request.get(this.$root.api + '/articles?page=' + page).then(res => {
                this.paginator = res.data;
            });
        },
        showArticle(article) {
            this.$root.visionArticle = article;
            this.$root.changePage('article-page');
        },
        isLikedArticle(articleId) {
            return getLikedArticles()?.includes(articleId) || false;
        },
    },
    computed: {},
    template: `
        <div class="component-container">
            <main class="main">
                <article class="articles">
                    <div class="container">
                        <div class="header-block">
                            <h2><span class="blue">Наши</span> посты</h2>
                        </div>
                        <div class="article-body">
                            <div class="posts" v-if="paginator">

                                <div class="post card vertical" :class="{'is-liked': isLikedArticle(post.id)}"
                                     v-for="post in paginator.articles" @click.prevent="showArticle(post)">
                                    <div class="post-image">
                                        <img src="/assets/images/helps-item-1-ccd5d1cd6bb901795eb04ee4d09b9d3711d704507e18c3c1b1d636183d62ce1e.svg"
                                             alt="post-image">
                                    </div>
                                    <h3>{{post.title}}</h3>
                                    <div class="author-name">{{post.author.name}}</div>
                                    <div class="post-content text">{{post.text}}</div>
                                    <div class="date right">{{post.created_at}}</div>

                                </div>


                            </div>
                            <nav class="pagination links flex-row center mt20">
                                <a href="#" class="btn" @click.prevent="prevPage"> &lt; Назад</a>
                                <a href="#" class="btn" @click.prevent="nextPage"> Далее &gt;</a>
                            </nav>
                        </div>

                    </div>
                </article>
            </main>
        </div>
    `,
}
