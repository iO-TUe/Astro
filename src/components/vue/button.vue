<script setup lang="ts">
const { disabled, fn, sign } = defineProps<{ disabled: boolean, fn: () => void, sign: string }>()
// console.log(`Script: "${sign}" button`)
</script>

<template>
    <!-- {{ console.log(`Render: "${sign}" Button`) }} -->
    <button class="button" :disabled="disabled" @click="fn()" :aria-label="sign">
        {{ sign }}
    </button>
</template>

<style scoped>
/* BUTTONS -------------------------------------- */
.button {
    background: var(--qwik-dirty-black);
    border: none;
    border-radius: 8px;
    color: white;
    padding: 8px 5px 5px;
    text-align: center;
    font-weight: 700;
    font-size: 2rem;
    min-width: 50px;

    &:not([disabled]):hover {
        cursor: pointer;
        background: var(--qwik-dark-blue);
    }

    &[disabled] {
        filter: opacity(0.7);
    }
}
</style>
