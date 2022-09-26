import RootApplication from './components/RootApplication.js';

const {createApp} = Vue;

const app = createApp(
    RootApplication
);

app.mount('#app');
