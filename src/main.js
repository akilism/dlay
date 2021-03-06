import Vue from 'vue';
import App from './App.vue';
import ArticleLayout from './ArticleLayout.vue';
import FooterLayout from './FooterLayout.vue';
import HeaderLayout from './HeaderLayout.vue';
import LayoutManager from './LayoutManager.vue';

Vue.component('layout-manager', LayoutManager);
Vue.component('article-layout', ArticleLayout);
Vue.component('footer-layout', FooterLayout);
Vue.component('header-layout', HeaderLayout);

new Vue({
  el: 'body',
  components: { App }
});


