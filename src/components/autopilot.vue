<template>
  <div class="autopilot-container">
    <figure
      class="car"
      :style="`background-image: url(${require('../assets/car.png')});`"/>
    <div class="road">
      <transition name="fade">
        <div
          v-if="autopilot.detectedLane"
          class="lane h-relative"/>
      </transition>
      <div class="road-backdrop"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('autopilot', {
      autopilot: 'getAutopilotState',
    }),
  },
};
</script>

<style lang="scss">
.autopilot-container {
    @include absolute($all: 0);
    display: flex;
    justify-content: center;
    @supports (mask-image: linear-gradient(to bottom, transparent 30%, $black 60%)) {
        mask-image: linear-gradient(to bottom, transparent 30%, $black 60%);
    }
    &:before {
        @include absolute($all: 0, $index: 1);
        background: linear-gradient(to top, transparent, cubic-bezier(0.48, 0.30, 0.64, 1.00), #0E0F0E);
        content: '';
    }
    .car {
        @include absolute($right: 0, $bottom: 2em, $left: 0);
        @supports (mix-blend-mode: hard-light) {
            mix-blend-mode: hard-light;
        }
        z-index: 1;
        height: 250px;
    }
    .road {
        display: flex;
        justify-content: center;
        transform: perspective(0.1em) rotateX(0.4deg);
        position: relative;
        .road-backdrop {
            background: linear-gradient(to right, rgba($white, 0), rgba($white, 0.3), rgba($white, 0));
            @include absolute;
            min-width: 300px;
            height: 100%;
        }
        .lane {
            z-index: 1;
            border: solid $grey-200;
            border-width: 0 3px;
            background-color: lighten($grey-400, 10%);
            min-width: 130px;
            &:before {
                @include absolute($top: 0, $left: 1px, $bottom: 0);
                width: 3px;
                background-color: lighten($blue, 10%);
                content: '';
            }
            &:after {
                @include absolute($top: 0, $right: 1px, $bottom: 0);
                width: 3px;
                background-color: lighten($blue, 10%);
                content: '';
            }
        }
    }
}
</style>
