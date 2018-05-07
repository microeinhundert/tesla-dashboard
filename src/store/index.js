import Vue from 'vue';
import Vuex from 'vuex';

// import modules
import app from './app';
import autopilot from './autopilot';

Vue.use(Vuex);

/* eslint-disable no-new */
const store = new Vuex.Store({
  strict: true,
  modules: {
    app,
    autopilot,
  },
});

export default store;
