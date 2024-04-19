<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Counter from './counter.vue'
import Item from './item.vue'

let id = 0
const items = ref<{ id: number; text: string }[]>([])
const input = ref("")
const i = ref<HTMLInputElement>()

function addItem() {
    if (input.value) {
        items.value.push({ id: id++, text: input.value })
        input.value = ""
    }
}

function removeItem(rid: number) {
    items.value = items.value.filter(({ id }) => id !== rid)
}

onMounted(() => {
    i.value!.disabled = false
})
</script>

<template>
    <section id="todo">
        <label>
            <h2>Add new item</h2>
            <input ref="i" disabled id="input" v-model="input" @keyup.enter="addItem" />
        </label>
        <ul class="list">
            <Item v-for="item in items" :key="item.id" :item="item" :remove="removeItem" />
        </ul>
    </section>
    <section id="counters">
        <Counter :initialValue="50" :maxValue=500 :recurse="false" />
    </section>
</template>

<style>
input {
    width: 100%;
}

.list {
    padding-inline-start: 0;
}

#counters .counters {
    display: flex;
}
</style>
