<template>
  <div class="layout-manager">
    <component
      v-if="layout.type"
      :is="layout.type"
      :item="layout"></component>
    <layout-manager
      v-for="child in layout.children"
      :layout="child"></layout-manager>
  </div>
</template>

<script>
import ArticleLayout from './ArticleLayout.vue';
import FooterLayout from './FooterLayout.vue';
import HeaderLayout from './HeaderLayout.vue';

export default {
  ready() {
    console.log('LayoutManager:', this.layout.type || this.layout.children);
  },
  components: {
    'article-layout': ArticleLayout,
    'footer-layout': FooterLayout,
    'header-layout': HeaderLayout
  },
  data() {
    return {
      cType: 'article-layout'
    };
  },
  name: 'layout-manager',
  props: [ 'layout' ]
}
</script>

<style>

</style>
