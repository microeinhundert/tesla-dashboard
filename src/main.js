import Vue from 'vue';
import 'normalize.css';
import app from './app';
import store from './store';
import './components';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(app),
});
