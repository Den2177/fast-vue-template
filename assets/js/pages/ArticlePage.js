import {getLikedArticles, saveLikedArticles} from "../helpers/storage.js";
export default {
    components: {},
    data() {
        return {
            article: this.$root.visionArticle,
        }
    },
    watch: {},
    created() {

    },
    mounted() {

    },
    methods: {
        likeArticle() {
            let articles = getLikedArticles();
            articles.push(this.article.id);
            saveLikedArticles(articles);

            this.$root.showNotification({message: "Статья добавлена в закладки"});
        }
    },
    computed: {},
    template: `
        <div class="component-container">
            <main class="main">
                <div class="one-article">
                    <div class="container">
                        <div class="one-article-body double">
                            <div class="full-image">
                                <img src="/assets/images/helps-item-3-72d5ca33bc62e5c08d9a61940e0d24cd82e11ee1f88cd567b2458a55516c3a08.svg"
                                     alt="full-image">
                            </div>
                            <div class="article-content vertical">
                                <div class="header-block">
                                    <h2>{{article.title}}</h2>
                                </div>
                                <h4 class="author">
                                    {{article.author.name}}
                                </h4>
                                <div class="text">{{article.text}}</div>
                                <div class="date right">{{article.created_at}}</div>
                                <div class="view-counter text">{{article.views}} просмтора
                                </div>
                                <button class="btn" @click="likeArticle">Добавить в закладки</button>
                            </div>

                        </div>

                    </div>
                </div>
            </main>
        </div>`,
}
