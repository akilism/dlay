<template>
  <article>
    <h1>{{ title }}</h1>
    <!-- <topic-display type="article-header" :topics="topics"></topic-display> -->
    <!-- <contributor-display type="article-byline" :contributor="contributor"></contributor-display> -->
    <div style="margin-left: 30px; background-color: rgba(0,0,0,0.35); padding: 20px">
      <layout-manager :layout="layout"></layout-manager>
    </div>
  </article>
</template>

<script>
import _ from 'ramda';
import L from 'ramda-lens';

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

export default {
  computed: {
    contributor() {
      return L.view(articleContributor, this);
    },
    layout() {
      // console.log('layout', L.view(articleLayout, this));
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
    return {};
  },
  name: 'article-layout',
  props: [ 'item' ],
  ready() {
    // console.log('article');
  }
}
</script>

<style>

</style>
