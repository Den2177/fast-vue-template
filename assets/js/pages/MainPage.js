export default {
    components: {},
    data() {
        return {}
    },
    watch: {},
    created() {

    },
    mounted() {

    },
    methods: {},
    computed: {},

    template: `
        <main class="main">
            <div class="banner">
                <div class="container">
                    <div class="double">
                        <div class="main-content vertical">
                            <h1><span class="black">Психология</span> - путь к исцелению!</h1>
                            <div class="flex-row">
                                <button class="btn">Для себя</button>
                                <button class="btn">Для двоих</button>
                            </div>
                        </div>

                        <div class="main-image">
                            <img src="/assets/images/banner-phone-d2a2225bb0a9c084e5f6d32f9795797708123fc50b6163ee7bc664fe3f31cc0b.webp"
                                 alt="psycho">
                        </div>

                    </div>
                </div>
            </div>
            <section class="statistics-block">
                <div class="container">
                    <div class="header-block">
                        <h2><span class="blue">Наша</span> статистика</h2>
                    </div>
                    <div class="stat-items">
                        <div class="stat-item card">
                            <div class="number">342</div>

                            <h3 class="stat-message">
                                Регистраций сегодня

                            </h3>
                        </div>
                        <div class="stat-item card">
                            <div class="number">65</div>

                            <h3 class="stat-message">
                                Количество клиентов

                            </h3>
                        </div>
                        <div class="stat-item card">
                            <div class="number">23</div>

                            <h3 class="stat-message">
                                Количество специалистов

                            </h3>
                        </div>
                        <div class="stat-item card">
                            <div class="number">534</div>

                            <h3 class="stat-message">
                                Количество заявок

                            </h3>
                        </div>
                    </div>

                </div>
            </section>
            <section class="master-info">
                <div class="container">
                    <div class="header-block">
                        <h2>
                            О наших <span class="blue">специалистах</span>
                        </h2>
                        <div class="subtitle">
                            Мы строго отбираем специалистов
                            и работаем только с самыми опытными
                            Только 17% психологов проходят наш отбор
                        </div>
                    </div>

                    <div class="master-property">
                        <div class="card master vertical">
                            <h3 class="master-name bold">
                                Образование
                            </h3>
                            <div class="description text">Высшее психологическое, гуманитарное и дополнительное
                                психотерапевтическое.
                            </div>
                        </div>
                        <div class="card master vertical">
                            <h3 class="master-name bold">
                                Опыт работы
                            </h3>
                            <div class="description text">От трёх лет. За это время накапливается хороший практический
                                опыт.
                            </div>
                        </div>
                        <div class="card master vertical">
                            <h3 class="master-name bold">
                                Собеседование
                            </h3>
                            <div class="description text">Проверяем самое важное: навыки и успешные кейсы из практики.
                            </div>
                        </div>
                        <div class="card master vertical">
                            <h3 class="master-name bold">
                                Обучение
                            </h3>
                            <div class="description text">И мастерам важно учиться. Развиваем через семинары и
                                супервизии.
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section class="advantages">
                <div class="container">
                    <div class="advantages-list vertical">
                        <div class="advantage flex-row">
                            <div class="adv-number">
                                1.
                            </div>
                            <div class="adv-content vertical">
                                <h3>Консультации по безопасному видеочату</h3>
                                <div class="advantages-text">На нашей платформе видеоконсультации проходят в защищенном
                                    личном
                                    кабинете. Конфиденциальные сессии с вашим психологом доступны из любой точки мира.
                                </div>
                            </div>
                        </div>
                        <div class="advantage flex-row">
                            <div class="adv-number">
                                2.
                            </div>
                            <div class="adv-content vertical">
                                <h3>Простое управление расписанием</h3>
                                <div class="advantages-text">Назначайте и переносите, мы напомним и не дадим вам
                                    забыть.
                                </div>
                            </div>
                        </div>
                        <div class="advantage flex-row">
                            <div class="adv-number">
                                3.
                            </div>
                            <div class="adv-content vertical">
                                <h3>
                                    Сопровождение на всех этапах
                                </h3>
                                <div class="advantages-text">Ответим на вопросы о психологии, поможем, поддержим,
                                    объясним,
                                    направим.
                                </div>
                            </div>
                        </div>
                        <div class="advantage flex-row">
                            <div class="adv-number">
                                4.
                            </div>
                            <div class="adv-content vertical">
                                <h3>
                                    от 2 850 ₽ за сессию
                                </h3>
                                <div class="advantages-text">
                                    Мы установили единую и минимально возможную цену за индивидуальную сессию, чтобы
                                    терапия
                                    была доступна каждому.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="master-select">
                <div class="container">
                    <div class="algorithm">
                        <div class="step">
                            <div class="header-block vertical aic">
                                <div class="number">
                                    1.
                                </div>
                                <div class="step-message">Заполните анкету</div>
                            </div>

                            <h3 class="step-content center mb20">
                                Что бы вы хотели обсудить?
                            </h3>
                            <div class="variants">
                                <div class="variant">
                                    Карьерная мотивация?
                                </div>
                                <div class="variant">
                                    Отношения с родителями
                                </div>
                                <div class="variant">
                                    Собственная самооценка
                                </div>
                                <div class="variant">
                                    Депрессия
                                </div>
                                <div class="variant">
                                    Чувство тревоги
                                </div>
                            </div>
                        </div>

                        <div class="step">
                            <div class="header-block vertical aic">
                                <div class="">
                                    <div class="number aic">
                                        2.
                                    </div>
                                </div>

                                <div class="step-message">Алгоритм выдаст 3-4 подходящих специалистов</div>
                            </div>

                            <h3 class="step-content center mb20">
                                Под ваш запрос подходят:
                            </h3>
                            <div class="variants">
                                <div class="card">
                                    <div class="variant-image">
                                        <img src="/assets/images/therapist-item-5-bbf4130ba1dd5dbe5bcfafce22a6df78479d518242b5c9f43708cff8c7f03c9c.webp"
                                             alt="">
                                    </div>
                                    <h4 class="variant-name">Ольга Владимировна</h4>
                                </div>
                                <div class="card">
                                    <div class="variant-image">
                                        <img src="/assets/images/therapist-item-4-9b7e848fe2c4acbb978ba612f01bfad2115eeea8d6fa0e10e9cda0bff44524c8.webp"
                                             alt="">
                                    </div>
                                    <h4 class="variant-name">Михаил Попов</h4>
                                </div>
                                <div class="card">
                                    <div class="variant-image">
                                        <img src="/assets/images/therapist-item-3-f7dc6ce79ddccbe4b752cc24241119e96ce3eb0542356aed1d7b620c17dff74a.webp"
                                             alt="">
                                    </div>
                                    <h4 class="variant-name">Евгений Шульц</h4>
                                </div>
                                <div class="card">
                                    <div class="variant-image">
                                        <img src="/assets/images/therapist-item-2-736afa2c17134bd0d97ca82472bb01df47e2e42489c97c9a984a83122948b414.webp"
                                             alt="">
                                    </div>
                                    <h4 class="variant-name">Данияр Маратович</h4>
                                </div>

                            </div>
                        </div>

                        <div class="step">
                            <div class="header-block vertical aic">
                                <div class="">
                                    <div class="number aic">
                                        3.
                                    </div>
                                </div>

                                <div class="step-message">Выберите специалиста и время консультации</div>
                            </div>

                            <h3 class="step-content center mb20">
                                Когда вам удобно?
                            </h3>
                            <div class="variants places">
                                <div class="card">
                                    <div class="variant-date text">
                                        <i>20.09.2022</i>
                                    </div>
                                    <h4 class="variant-name">18:00</h4>
                                </div>
                                <div class="card">
                                    <div class="variant-date text">
                                        <i>20.10.2022</i>
                                    </div>
                                    <h4 class="variant-name">20:00</h4>
                                </div>
                                <div class="card">
                                    <div class="variant-date text">
                                        <i>22.09.2022</i>
                                    </div>
                                    <h4 class="variant-name">22:00</h4>
                                </div>
                                <div class="card">
                                    <div class="variant-date text">
                                        <i>23.09.2023</i>
                                    </div>
                                    <h4 class="variant-name">18:44</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="gift-block" id="sertificats">
                <div class="container">
                    <div class="gift-box double">
                        <div class="content vertical">
                            <h3>Забери свой подарочный сертификат!</h3>
                            <div class="text">Вы|бери подарочный сертификат который подходит именно тебе!</div>
                            <button class="btn" onclick="showModal()">Выбрать сертификат</button>
                        </div>
                        <div class="gift-image">
                            <img src="https://assets.yasno.live/assets/main-page/gifts-7f5435e586f13027f77c2effc8746611f327a70fc0a78efdc943405c42f14378.svg"
                                 alt="podarok">
                        </div>
                    </div>
                </div>
            </section>
        </main>
    `,
}