/** @jsxImportSource solid-js */
import { For, type Component } from 'solid-js'
import { createStore } from 'solid-js/store'
import Counter from "./counter.gen"
import './index.css'
import Item from "./item"

const Todo: Component = () => {
    let id = 0
    const [items, setItems] = createStore<{ id: number, text: string }[]>([])
    let input: HTMLInputElement

    function addItem({ key }: KeyboardEvent) {
        if (key === "Enter" && input.value) {
            setItems([...items, { id: id++, text: input.value }])
            input.value = ''
        }
    }

    function removeItem(rid: number) {
        setItems(items.filter(({ id }) => id !== rid))
    }

    return <>
        <section id="todo">
            <label >
                <h2>Add new item</h2>
                <input ref={input!} id="input" onKeyUp={addItem} />
            </label>
            <ul class="list">
                <For each={items}>{(item) =>
                    <Item item={item} remove={removeItem} />
                }</For>
            </ul>
        </section>
        <section id="counters">
            <Counter initialValue={50} maxValue={5} recurse={false} />
        </section>
    </>
}

export default Todo
