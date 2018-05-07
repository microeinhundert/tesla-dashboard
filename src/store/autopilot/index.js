import actions from './actions';
import mutations from './mutations';

const autopilot = {
  namespaced: true,
  state: {
    isAvailable: true,
    isActive: true,
    detectedLane: true,
  },
  actions,
  mutations,
  getters: {
    getAutopilotState: state => state,
  },
};

export default autopilot;
