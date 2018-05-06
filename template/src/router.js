import Router from 'vue-router';
import Vue from 'vue';

import HelloView from './HelloView';
import MapView from './MapView';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    redirect: '/hello',
  }, {
    path: '/hello',
    name: 'Hello',
    component: HelloView
  }, {
    path: '/map',
    name: 'Map',
    component: MapView
  }],
});
