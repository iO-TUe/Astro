/** @jsxImportSource @builder.io/qwik */
import { $, component$, useOnDocument, useSignal, useStore, useStylesScoped$ } from "@builder.io/qwik"
import Counter from "./counter"
import Item from "./item"


export default component$(() => {
    useStylesScoped$(/*scss*/`
        input {
            width: 100%;
        }

        .list {
            padding-inline-start: 0;
        }

        #counters :global(.counters) {
            display: flex;
        }
    `)

    const id = useSignal(0)
    const input = useSignal('')
    const items = useStore<{ $: { id: number, text: string }[] }>({ $: [] })
    const i = useSignal<HTMLInputElement>()

    const addItem = $(({ key }: KeyboardEvent) => {
        if (key === 'Enter' && input.value) {
            items.$.push({ id: id.value++, text: input.value })
            input.value = ""
        }
    })

    const removeItem = $((rid: number) => {
        items.$ = items.$.filter(({ id }) => id !== rid)
    })

    useOnDocument('DOMContentLoaded', $(() => {
        i.value!.disabled = false
    }))

    // { console.log('Script: App') }
    return <>
        {/* {console.log('Render: App')} */}
        <section id="todo">
            <label >
                <h2>Add new item</h2>
                <input ref={i} disabled id="input" bind:value={input} onKeyUp$={addItem} />
            </label>
            <ul class="list">
                {items.$.map(item => <Item key={item.id} item={item} remove$={removeItem} />)}
            </ul>
        </section>
        <section id="counters">
            <Counter initialValue={50} maxValue={500} recurse={false} />
        </section>

    </>
})
