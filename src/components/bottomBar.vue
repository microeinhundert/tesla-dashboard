<template>
  <div class="bottom-bar">
    <div class="l-container l-left">
      <div class="battery-status-container">
        <div class="battery-status-icon h-relative">
          <div
            :style="{ width: `${battery.percentage}%` }"
            class="battery-fill"/>
        </div>
        <span class="range-left h-margin-left-lg">{{ battery.range }}<span class="unit h-font-muted h-margin-left-sm">{{ units.distance }}</span></span>
      </div>
      <div class="temperature h-margin-left-lg">15°<span class="unit h-font-muted h-margin-left-sm">{{ units.temperature }}</span></div>
    </div>
    <div class="l-container l-right">
      <div class="clock">{{ hours }}<span>:</span>{{ minutes }}</div>
      <div class="transmission-gears h-margin-left-lg">
        <span
          v-for="gear in gears"
          :key="gear"
          :class="{ 'active' : transmission.currentGear === gear }"
          class="gear">{{ gear }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data: () => ({
    gears: ['P', 'R', 'N', 'D'],
    hours: '--',
    minutes: '--',
  }),
  created() {
    this.getCurrentTime();
  },
  methods: {
    getCurrentTime() {
      const self = this,
        today = new Date(),
        h = today.getHours();
      let m = today.getMinutes();
      m = self.formatTime(m);
      self.hours = h;
      self.minutes = m;
    },

    formatTime(i) {
      let value = i;
      if (value < 10) { value = `0${i}`; } // add zero in front of numbers < 10

      return value;
    },
  },
  computed: {
    ...mapGetters('app', {
      transmission: 'getTransmissionState',
      units: 'getUnits',
      battery: 'getBatteryInfo',
    }),
  },
};
</script>

<style lang="scss">
.bottom-bar {
    display: flex;
    max-width: 77%;
    flex-basis: 100%;
    align-self: flex-end;
    letter-spacing: 1.5px;
    margin-bottom: 25px;
    font-size: 1.8em;
    .l-container {
        display: flex;
        flex: 1;
        align-items: center;
        &.l-left {
            justify-content: flex-start;
        }
        &.l-right {
            justify-content: flex-end;
        }
    }
}

.battery-status-container {
    display: flex;
    align-items: center;
    .battery-status-icon {
        padding: 3px;
        size: 90px 30px;
        border: 2px solid $grey-500;
        border-radius: 5px;
        .battery-fill {
            height: 100%;
            border-radius: 2px;
            will-change: width;
            max-width: 100%;
            transition: width 0.5s;
            background-color: $green;
        }
        &:after {
            @include absolute($top: 50%, $right: -7px);
            width: 5px;
            height: 12px;
            border-radius: 0 2px 2px 0;
            background-color: $grey-500;
            content: '';
            transform: translateY(-50%);
        }
    }
}

.transmission-gears {
    .gear {
        padding-left: 25px;
        text-shadow: 1px 1px 2px rgba($grey-400, 0.7);
        font-weight: 500;
        font-size: 1.2em;
        &:not(.active) {
            color: $black;
        }
    }
}
</style>
