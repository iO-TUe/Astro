<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{ value: number, max: number, recurse: boolean}>()
const bool = ref(false)
// console.log('Script: Gauge')
setTimeout(() => bool.value = props.recurse, 0)

</script>

<template>
    <!-- {{ console.log('Render: Gauge') }} -->
    <div role='feed' class="wrapper" @click="bool = true">
        <svg viewBox="0 0 120 120" class="gauge">
            <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#41b883" />
                    <stop offset="1000%" stop-color="#34495e" />
                </linearGradient>
            </defs>

            <circle r="56" cx="60" cy="60" stroke-width="8" style="fill: #000; stroke: #0000">
            </circle>

            <circle r="56" cx="60" cy="60" stroke-width="8" class="stroke"
                :style="`stroke-dasharray: ${props.value * 3.51}, 351.858;`"></circle>
        </svg>
        <span class="value">{{ props.value }}</span>
    </div>

    <div v-if="bool && props.max > 0" class="recurse">
        <Gauge :value="props.value + 1" :max="props.max - 1" :recurse=true />
        <Gauge :value="props.value - 1" :max="props.max - 1" :recurse=true />
    </div>
</template>

<style scoped>
.wrapper {
    position: relative;
}

.gauge {
    width: 100%;
    min-width: 100px;
}

.value {
    position: absolute;
    top: 50%;
    left: 50%;
    color: white;
    font-size: 3rem;
    transform: translate(-50%, -50%);
    text-align: center;
}

circle {
    transition: all 150ms;

    &.stroke {
        transform: rotate(-87.9537deg);
        transform-origin: 50% 50%;
        stroke-linecap: round;
        stroke: url(#gradient);
        fill: none;
    }
}
</style>
