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
export default {
  ready() {
    console.log('LayoutManager:', this.layout.type || this.layout.children);
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
