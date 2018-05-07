import actions from './actions';
import mutations from './mutations';

const app = {
  namespaced: true,
  state: {
    currentSpeed: 65,
    transmission: {
      currentGear: 'D',
    },
    cruiseControl: {
      isActive: true,
      speed: 90,
    },
    batteryInfo: {
      percentage: 65,
      range: 299,
    },
    units: {
      speed: 'km/h',
      temperature: 'C',
      distance: 'km',
      energy: 'Wh',
    },
  },
  actions,
  mutations,
  getters: {
    getTransmissionState: state => state.transmission,
    getCruiseControlState: state => state.cruiseControl,
    getUnits: state => state.units,
    getCurrentSpeed: state => state.currentSpeed,
    getBatteryInfo: state => state.batteryInfo,
  },
};

export default app;
