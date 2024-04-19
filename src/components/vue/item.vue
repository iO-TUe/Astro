<script setup lang="ts">
const props = defineProps<{ item: { id: number, text: string }, remove: (id: number) => void }>()
</script>

<template>
    <li class="item" :data-id="item.text">
        <span>{{ props.item.text }}</span>
        <button @click="props.remove(props.item.id)">x</button>
    </li>
</template>

<style>
.item {
    display: flex;
    justify-content: space-between;
}
</style>
