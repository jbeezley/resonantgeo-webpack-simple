<template lang="pug">
full-screen-viewport
  geojs-map-viewport(
    :viewport.sync='viewport'
  )
    geojs-tile-layer(
      :url='url',
      :attribution='attribution'
    )

  side-panel(
    :top='64',
    :toolbar='toolbar',
    :footer='true'
  )
    v-expansion-panel
      v-expansion-panel-content
        div(slot='header')
          span Side bar item #1
        v-card
          v-card-text Information
          v-card-actions
            v-spacer
            v-btn(small) Action button

    template(slot='actions')
      side-panel-action
        v-icon note_add
    template(slot='footer')
      span Side panel footer
      v-spacer
      v-icon delete_sweep
</template>

<style lang="stylus" scoped>
.footer i
  cursor pointer
</style>

<script>
export default {
  data() {
    return {
      toolbar: {
        title: 'Side panel',
        icon: 'info',
      },
      viewport: {
        center: [-100, 30],
        zoom: 4,
      },
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: 'Tile data &copy; <a href="http://osm.org/copyright"> OpenStreetMap</a> contributors',
    };
  },
};
</script>
