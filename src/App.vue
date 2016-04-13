<template>
  <div id="app">
    <h1>dynamic layout</h1>
    <layout-manager :layout="layout"></layout-manager>
  </div>
</template>

<script>
import _ from 'ramda';

const deepClone = _.compose(JSON.parse, JSON.stringify);

const article = { type: 'article-layout', data: { title: 'Please, for the Love of God, Stop with All These Shitty Mashups', }};
const footer = { type: 'footer-layout' };
const header = { type: 'header-layout', data: { title: 'Noisey' }};

const babyArticle = deepClone(article);


article.layout = { children: [ deepClone(header), babyArticle, deepClone(footer) ] };
babyArticle.layout = { children: [ deepClone(header), deepClone(babyArticle), deepClone(footer) ] };

export default {
  data() {
    return {
      layout: { children: [header, article, footer] }
    };
  },
  ready() {
    console.log('App:', this.layout);
  }

}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
