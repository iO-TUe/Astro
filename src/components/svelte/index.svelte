<script lang="ts">
    import Counter from "./counter.gen.svelte";
    import Item from "./item.svelte";

    let id = 0;
    let items: { id: number; text: string }[] = [];
    let input: HTMLInputElement;

    function addItem({ key }: KeyboardEvent) {
        if (key === "Enter" && input.value) {
            items.push({ id: id++, text: input.value });
            input.value = "";
            items = items;
        }
    }

    function removeItem(ev: CustomEvent) {
        items = items.filter(({ id }) => id !== ev.detail.id);
    }

    // console.log("Script: App");
</script>

<div class="App">
    <!-- {console.log("Render: App") ?? ""} -->
    <main class="App-main">
        <section id="todo">
            <label>
                <h2>Add new item</h2>
                <input id="input" bind:this={input} on:keyup={addItem} />
            </label>
            <ul class="list">
                {#each items as item (item.id)}
                    <Item bind:item on:remove={removeItem} />
                {/each}
            </ul>
        </section>
        <section id="counters">
            <Counter initialValue={50} maxValue={5} recurse={false} />
        </section>
    </main>
</div>

<style>
    .App-main {
        background-color: var(--main-background);
        height: calc(100vh - 114px);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: calc(10px + 2vmin);
        color: white;
        padding: 0 2em;
    }

    input {
        width: 100%;
    }

    .list {
        padding-inline-start: 0;
    }

    #counters {
        height: 10vh;
    }

    #counters :global(.counters) {
        display: flex;
    }
</style>
