<template>
  <h1>{{ title }}</h1>
</template>

<script>
import _ from 'ramda';
import L from 'ramda-lens';

const itemLens = _.lensProp('item');
const dataLens = _.lensProp('data');
const titleLens = _.compose(itemLens, dataLens, _.lensProp('title'));

export default {
  computed: {
    title() {
      return L.view(titleLens, this) || "No Site Title";
    }
  },
  data() {
    return {};
  },
  ready() {
    // console.log('header');
  },
  props: [ 'item' ]
}
</script>

<style>

</style>
