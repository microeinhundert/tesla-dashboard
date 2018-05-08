<template>
  <div class="travel-info-container">

    <div class="l-container l-left">
      <!-- cruise control status icon -->
      <div
        :class="{ 'is-active' : cruiseControl.isActive }"
        class="cruise-status-icon h-center-text">
        <span
          v-if="cruiseControl.isActive"
          class="cruise-mode">Max</span>
        <span class="cruise-speed h-stretch-y">{{ cruiseControl.speed }}</span>
      </div>
    </div>

    <div class="l-container l-middle">
      <!-- speedometer -->
      <div class="speedometer h-center-text">
        <h1 class="current-speed h-stretch-y">{{ currentSpeed }}</h1>
        <span class="unit h-font-muted">{{ units.speed }}</span>
      </div>
    </div>

    <div class="l-container l-right">
      <!-- autopilot status icon -->
      <div
        v-if="autopilot.isAvailable"
        :class="{ 'is-active' : autopilot.isActive }"
        class="autopilot-status-icon">
        <svg viewBox="0 0 45.9 45.9">
          <path
            :fill="autopilot.isActive ? '#d7d7d7' : '#5E5F63'"
            d="M37.51 20.4c-5-1.35-9.75-3.58-15.13-3.2-4.22-.24-8.14 1.36-12.19 2.29-1.78.41-4.08 1.66-5.23-.36s1-3.65 2.42-4.91A34 34 0 0 0 11 9.89c3.71-4.47 11.14-6.21 17.28-4.12C31.9 7 35 8.75 37 12.32c.79 1.46 2.44 2.42 3.48 3.78.87 1.13 1.79 2.56.81 4s-2.47.67-3.75.32m3.07 8.22a31.34 31.34 0 0 1-6.11 9.54 7.17 7.17 0 0 1-5.59 2.35c-1.43-.05-2.21-.68-1.93-2.83.35-3.49 1.42-7.23 5.51-9.28 1.7-.85 3.36-1.77 5.08-2.56.94-.43 2-1.27 3-.3s.47 2.09.05 3.07M16.4 40.51a7.17 7.17 0 0 1-5.59-2.35 31.38 31.38 0 0 1-6.11-9.54c-.41-1-.83-2.19.05-3.07s2.05-.13 3 .3c1.72.79 3.38 1.71 5.08 2.56 4.09 2 5.16 5.79 5.51 9.28.28 2.15-.5 2.78-1.93 2.83M23 0a23 23 0 1 0 23 23A23 23 0 0 0 23 0"/>
        </svg>
      </div>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('app', {
      currentSpeed: 'getCurrentSpeed',
      cruiseControl: 'getCruiseControlState',
      units: 'getUnits',
    }),
    ...mapGetters('autopilot', {
      autopilot: 'getAutopilotState',
    }),
  },
};
</script>

<style lang="scss">
.travel-info-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;

    .cruise-status-icon {
        display: flex;
        flex-direction: column;
        justify-content: center;
        border: 2px solid;
        border-radius: 50%;
        transform: translateY(-1em);
        &.is-active {
            size: 77px;
            border-color: $blue;
            .cruise-speed {
                font-size: 2em;
                line-height: 1em;
            }
        }
        &:not(.is-active) {
            margin: 10px;
            size: 55px;
            border-color: $grey-400;
            .cruise-speed {
                color: $grey-400;
                font-size: 1.3em;
            }
        }
        .cruise-mode {
            text-transform: uppercase;
            font-size: 0.8em;
        }
    }

    .speedometer {
        .current-speed {
            margin: 0;
            line-height: 0.95em;
        }
        .unit {
            display: inline-block;
            margin-top: 7px;
            font-size: 1.3em;
        }
    }

    .autopilot-status-icon {
        padding: 12px;
        size: 77px;
        border-radius: 50%;
        transform: translateY(-1em);
        &.is-active {
            background-color: $blue;
        }
    }
}
</style>
