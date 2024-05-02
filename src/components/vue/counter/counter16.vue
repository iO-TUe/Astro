<script setup lang="ts">
import { onMounted, ref } from "vue"
import Button from "../button.vue"
import Gauge from "../gauge.vue"

const props = defineProps<{ initialValue: number, maxValue: number, recurse: boolean }>()
const count = ref(props.initialValue)

function subtract() {
    if (count.value > 0) count.value--
}

function add() {
    if (count.value < 100) count.value++
}

onMounted(() => {
    if (typeof window != 'undefined') {
        const delay = Date.now() + 50
        while (Date.now() < delay) {
            console.log()   
        }
    }
})

// console.log('Script: Counter')
</script>

<template>
    <!-- {{ console.log("Render: Counter") }} -->
    <div class='wrapper'>
        <Button :disabled="count === 0" :fn="subtract" sign="-" />
        <div class="counters">
            <Gauge v-for="(_, idx) in recurse ? 1 : props.maxValue" :key="idx" :value="count"
                :max="props.maxValue" :recurse="false" />
        </div>
        <Button :disabled="count === 100" :fn="add" sign="+" />
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
