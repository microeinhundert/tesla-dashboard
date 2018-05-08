<template>
  <div class="consumption-container h-relative">
    <svg class="outer-consumption-graph">
      <g class="graph-inner">
        <g class="ring">
          <path
            class="fill"
            d="M5 85a197 197 0 0 1 345 179"/>
          <rect
            class="breakpoint"
            rx="2"
            transform="rotate(18 348 261)"/>
          <path
            class="outer"
            d="M0 81a204 204 0 1 1 280 290"/>
        </g>
        <text
          class="value"
          x="4"
          y="34">400</text>
        <text
          class="value"
          x="157"
          y="19">200</text>
        <text
          class="value"
          x="289"
          y="102">100</text>
        <text
          class="value"
          x="340"
          y="248">kW</text>
        <text
          class="value"
          x="293"
          y="386">-50</text>
      </g>
    </svg>
    <div class="inner-container">
      <div
        ref="consumptionGraph"
        class="consumption-graph"/>
      <div class="consumption-info h-center-text">
        <p class="average-consumption h-font-muted">Avg. <span>274</span> {{ units.energy }}/{{ units.distance }}</p>
        <a class="distance h-font-muted">Past 30 {{ units.distance }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import MG from 'metrics-graphics';
import 'metrics-graphics/dist/metricsgraphics.css';

export default {
  created() {
    this.generateEnergyGraph();
  },
  methods: {
    generateEnergyGraph() {
      setTimeout(() => {
        MG.data_graphic({
          data: [{
            distance: 20,
            consumption: 12,
          },
          {
            distance: 40,
            consumption: 18,
          },
          {
            distance: 60,
            consumption: 20,
          },
          {
            distance: 80,
            consumption: 32,
          },
          {
            distance: 100,
            consumption: 15,
          },
          {
            distance: 120,
            consumption: 24,
          },
          {
            distance: 140,
            consumption: 30,
          },
          {
            distance: 160,
            consumption: 25,
          },
          ],
          height: 270,
          target: this.$refs.consumptionGraph,
          x_accessor: 'distance',
          y_accessor: 'consumption',
          x_axis: false,
          y_axis: false,
          show_tooltips: false,
          show_rollover_text: false,
          baselines: [{
            value: 20,
          }],
        });
      }, 0);
    },
  },
  computed: {
    ...mapGetters('app', {
      units: 'getUnits',
    }),
  },
};
</script>

<style lang="scss">
.consumption-container {
    .outer-consumption-graph {
        size: 420px 406px;
        .graph-inner {
            fill: none;
            .ring {
                transform: translate(2px, 34px);
                .outer {
                    stroke: $grey-400;
                    stroke-width: 3px;
                }
                .breakpoint {
                    size: 23px 5px;
                    fill: $grey-500;
                    x: 336px;
                    y: 259px;
                }
                .fill {
                    stroke: $green;
                    stroke-dasharray: 450px;
                    stroke-dashoffset: 554px;
                    stroke-width: 13px;
                }
            }
            .value {
                font-size: 24px;
                transform: translateX(40px);
                fill: $grey-500;
            }
        }
    }
    .inner-container {
        @include absolute($right: 25%, $bottom: 15%, $left: 0);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        .consumption-graph {
            margin-right: 2em;
            @supports (mask-image: linear-gradient(to right, transparent 15%, $black 60%)) {
                mask-image: linear-gradient(to right, transparent 15%, $black 60%);
            }
            .mg-baselines line {
                stroke: $grey-500;
                stroke-width: 2px;
                stroke-dasharray: 3;
            }
            .mg-main-line {
                stroke-width: 3px;
            }
            .mg-area1-color {
                fill: url("#energy-graph-gradient");
            }
            .mg-line1-color {
                stroke: url("#energy-graph-line-gradient");
            }
        }

        .consumption-info {
            margin-top: -4.5em;
            .average-consumption {
                margin-bottom: 10px;
                text-shadow: 1px 1px 2px rgba($black, 0.7);
                font-size: 1.7em;
                span {
                    color: $grey-600;
                }
            }
            .distance {
                font-size: 1.3em;
            }
        }
    }
}
</style>
