<template>
  <div
    id="app"
    class="h-center-element">
    <div class="dashboard-container h-relative">
      <transition
        name="fade"
        appear>
        <main class="dashboard-inner h-relative">
          <section class="l-dashboard-section l-left"/>
          <section class="l-dashboard-section l-middle h-relative">
            <travel-info/>
          </section>
          <section class="l-dashboard-section l-right">
            <component is="energyGraph"/>
          </section>
          <bottom-bar/>
        </main>
      </transition>
      <autopilot/>
    </div>
    <div class="global-defs-container">
      <svg
        width="0"
        height="0"
        viewBox="0 0 1920 720">
        <defs>
          <clipPath id="dashboard-mask">
            <path d="M763.302752,0 L1762.43593,0 C1801.12282,0 1842.40677,29.7496323 1854.12475,66.6174302 C1854.12475,66.6174302 1920,252.359375 1920,376 C1920,499.640625 1818.40525,659.25552 1818.40525,659.25552 C1799.15803,692.80377 1752.20115,720 1713.51692,720 L763.302752,720 L206.483076,720 C167.798846,720 120.841972,692.80377 101.594755,659.25552 C101.594755,659.25552 0,499.640625 0,376 C0,252.359375 65.8752479,66.6174302 65.8752479,66.6174302 C77.5932295,29.7496323 118.877182,0 157.564071,0 L763.302752,0 Z"/>
          </clipPath>
          <linearGradient
            id="energy-graph-gradient"
            x1="0%"
            y1="100%"
            x2="0%"
            y2="0%"
            spreadMethod="pad">
            <stop
              offset="5%"
              stop-color="#a65223"
              stop-opacity="0" />
            <stop
              offset="95%"
              stop-color="#a65223"
              stop-opacity="0.7" />
          </linearGradient>
          <linearGradient
            id="energy-graph-line-gradient"
            spreadMethod="pad">
            <stop
              offset="40%"
              stop-color="#e08222"
              stop-opacity="0.5" />
            <stop
              offset="70%"
              stop-color="#e08222"
              stop-opacity="1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  </div>
</template>

<script>
import autopilot from '@/components/autopilot';
import travelInfo from '@/components/travelInfo';
import bottomBar from '@/components/bottomBar';
import energyGraph from '@/components/energyGraph';

export default {
  components: {
    autopilot,
    travelInfo,
    bottomBar,
    energyGraph,
  },
};
</script>

<style lang="scss">
* {
    box-sizing: border-box;
}

body,
html {
    size: 100vw 100vh;
}

body {
  overflow: hidden;
  -webkit-font-smoothing: antialiased;
}

#app {
    size: 100%;
}

.dashboard-container {
    overflow: hidden;
    min-width: 1920px;
    height: 720px;
    background: linear-gradient(to top, #3a3b3c, cubic-bezier(0.48, 0.30, 0.64, 1.00), #0E0F0E);
    color: $grey-600;
    font-family: $ui-font;
    letter-spacing: 1.5px;
    user-select: none;
    clip-path: url("#dashboard-mask");
    .dashboard-inner {
        z-index: 2;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding-top: 4em;
        height: 100%;
    }
}

h1 {
    font-weight: 500;
    font-size: 7em;
}

figure {
    margin: 0;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
}

// helper classes
.h {
    &-relative {
        position: relative;
    }
    &-stretch-y {
        transform: scale(1, 1.07);
    }
    &-font {
        &-muted {
            color: $grey-500;
        }
    }
    &-margin {
        &-right {
            &-sm {
                margin-right: 0.3em;
            }
            &-lg {
                margin-right: 1.3em;
            }
        }
        &-left {
            &-sm {
                margin-left: 0.3em;
            }
            &-lg {
                margin-left: 1.3em;
            }
        }
    }
    &-center {
        &-text {
            text-align: center;
        }
        &-element {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
}

// dashboard-section layout
.l-dashboard-section {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    &.l-middle {
        flex: 0.8;
        align-items: flex-start;
    }
}

// transitions
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
