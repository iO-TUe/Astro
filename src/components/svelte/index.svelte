<script lang="ts">
    import { onMount } from "svelte";
    import Counter from "./counter.svelte";
    import Item from "./item.svelte";

    let id = 0;
    let items: { id: number; text: string }[] = [];
    let input = "";
    let i: HTMLInputElement;

    onMount(() => {
        i!.disabled = false;
    });

    function addItem({ key }: KeyboardEvent) {
        if (key === "Enter" && input) {
            items.push({ id: id++, text: input });
            input = "";
            items = items;
        }
    }

    function removeItem(ev: CustomEvent) {
        items = items.filter(({ id }) => id !== ev.detail.id);
    }

    // console.log("Script: App");
</script>

<div class="App">
    <section id="todo">
        <label>
            <h2>Add new item</h2>
            <input
                disabled
                id="input"
                bind:this={i}
                bind:value={input}
                on:keyup={addItem}
            />
        </label>
        <ul class="list">
            {#each items as item (item.id)}
                <Item bind:item on:remove={removeItem} />
            {/each}
        </ul>
    </section>
    <section id="counters">
        <Counter initialValue={50} maxValue={500} recurse={false} />
    </section>
</div>

<style>
    input {
        width: 100%;
    }

    .list {
        padding-inline-start: 0;
    }

    #counters :global(.counters) {
        display: flex;
    }
</style>
