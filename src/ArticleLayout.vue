<template>
  <div>
    <!-- <topic-display type="article-header" :topics="topics"></topic-display> -->
    <h1>{{ title }}</h1>
    <!-- <contributor-display type="article-byline" :contributor="contributor"></contributor-display> -->
    <div style="margin-left: 30px; background-color: rgba(0,0,0,0.35); padding: 20px">
      <layout-manager :layout="layout"></layout-manager>
    </div>
  </div>
</template>

<script>
import _ from 'ramda';
import L from 'ramda-lens';
import LayoutManager from './LayoutManager.vue';

const childrenLens = _.lensProp('children');
const contributorLens = _.lensProp('contributor');
const dataLens = _.lensProp('data');
const itemLens = _.lensProp('item');
const layoutLens = _.lensProp('layout');
const titleLens = _.lensProp('title');
const topicsLens = _.lensProp('topics');

const articleContributor = _.compose(itemLens, dataLens, contributorLens);
const articleLayout = _.compose(itemLens, layoutLens);
const articleTopics = _.compose(itemLens, dataLens, topicsLens);
const articleTitle = _.compose(itemLens, dataLens, titleLens);

const article = { type: 'article-layout', data: { title: 'Please, for the Love of God, Stop with All These Shitty Mashups' }};
const footer = { type: 'footer-layout' };
const header = { type: 'header-layout', data: { title: 'Noisey' }};

export default {
  components: {
    'layout-manager': LayoutManager
  },
  computed: {
    contributor() {
      return L.view(articleContributor, this);
    },
    layout() {
      console.log('layout', L.view(articleLayout, this));
      return L.view(articleLayout, this) || [];
    },
    title() {
      return L.view(articleTitle, this) || '';
    },
    topics() {
      return L.view(articleTopics, this) || [];
    }
  },
  data() {
    return {
      // layout: { children: [header, article, footer] }
    };
  },
  props: [ 'item' ],
  ready() {
    // console.log('article');
  }
}
</script>

<style>

</style>
