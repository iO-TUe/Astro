/** @jsxImportSource @builder.io/qwik */
import { $, component$, useSignal, useStore, useStylesScoped$ } from "@builder.io/qwik"
import Counter from "./counter.gen"
import Item from "./item"


export default component$(() => {
    useStylesScoped$(/*scss*/`
        .App-main {
            background-color: var(--main-background);
            height: calc(100vh - 114px);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: calc(10px + 2vmin);
            color: white;
            padding: 0 2em
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
    `)

    const id = useSignal(0)
    const items = useStore<{ $: { id: number, text: string }[] }>({ $: [] })
    const input = useSignal<HTMLInputElement>()

    const addItem = $(({ key }: KeyboardEvent, el: HTMLInputElement) => {
        if (key === 'Enter' && el.value) {
            items.$.push({ id: id.value++, text: el.value })
            el.value = ''
        }
    })

    const removeItem = $((rid: number) => {
        items.$ = items.$.filter(({ id }) => id !== rid)
    })

    // { console.log('Script: App') }
    return <>
        {/* {console.log('Render: App')} */}
        <main class="App-main">
            <section id="todo">
                <label >
                    <h2>Add new item</h2>
                    <input ref={input} id="input" onKeyUp$={addItem} />
                </label>
                <ul class="list">
                    {items.$.map(item => <Item key={item.id} item={item} remove$={removeItem} />)}
                </ul>
            </section>
            <section id="counters">
                <Counter initialValue={50} maxValue={5} recurse={false} />
            </section>
        </main>
    </>
})
