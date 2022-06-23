import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

document.querySelector('button').addEventListener('click', () => {
    document.querySelector('audio').play();
});