<template lang="pug">
v-app
  app-toolbar(
    :tabs='tabs',
    :title='title',
    user-icon='account_circle'
  )

  keep-alive
    router-view
</template>

<style lang="stylus">
html,body,.application,.application--wrap
  height 100vh
  overflow hidden
</style>

<script>
import ResonantGeo from 'resonantgeo';
import Vue from 'vue';

Vue.use(ResonantGeo);

export default {
  name: 'app',
  data () {
    return {
      title: 'ResonantGEO template',
      tabs: [{
        title: 'Hello',
        route: '/hello',
        icon: 'home',
      }, {
        title: 'Map',
        route: '/map',
        icon: 'zoom_out_map',
      }],
    }
  }
}
</script>
