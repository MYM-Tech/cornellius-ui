import { createApp } from 'vue';
import Lazyload from './components/LazyLoad/LazyLoad';
import Page from './components/Page';
import errorImage from './components/LazyLoad/Implementation/1.jpg';
import loadImage from './components/LazyLoad/Implementation/2.jpg';

const App = createApp(Page);
App.use(Lazyload, { loadingImageUrl: loadImage, errorImageUrl: errorImage });
App.mount('#app');
