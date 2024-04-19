<script lang="ts">
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();
    export let item: { id: number; text: string };
</script>

<li class="item" data-id={item.text}>
    <span>{item.text}</span>
    <button on:click={() => dispatch("remove", { id: item.id })}>x</button>
</li>

<style>
    .item {
        display: flex;
        justify-content: space-between;
    }
</style>
