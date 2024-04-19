<script setup lang="ts">
import { ref } from "vue";
import Buttons from "./button.vue";
import Gauge from "./gauge.vue";

const props = defineProps<{ initialValue: number, maxValue: number, recurse: boolean }>()
const count = ref(props.initialValue)

function subtract() {
    if (count.value > 0) count.value--
}

function add() {
    if (count.value < 100) count.value++
}

// console.log('Script: Counter')
</script>

<template>
    <!-- {{ console.log("Render: Counter") }} -->
    <div class='wrapper'>
        <Buttons :disabled="count === 0" :fn="subtract" sign="-" />
        <div class="counters">
            <Gauge v-for="(_, idx) in recurse ? 1 : props.maxValue" :value="count"
                :max="props.maxValue" :recurse="false"  />
        </div>
        <Buttons :disabled="count === 100" :fn="add" sign="+" />
    </div>
</template>

<style scoped>
.wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
}

.counters:has(.recurse) {
    display: flex;
    align-items: center;
}
</style>
