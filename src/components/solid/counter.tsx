/** @jsxImportSource solid-js */
import { createSignal, For } from "solid-js"
import Button from './button'
import './counter.css'
import Gauge from './gauge'

export default function Counter(props: { initialValue: number, maxValue: number, recurse: boolean }) {
    const [count, setCount] = createSignal(props.initialValue)
    function add() {
        if (count() < 100) setCount(count() + 1)
    }
    function subtract() {
        if (count() > 0) setCount(count() - 1)
    }

    // console.log("Script: Counter")

    return <>
        <div class="wrapper">
            <Button disabled={count() === 0} fn={subtract} sign="-" />
            <div class="counters">
                <For each={[...Array(props.recurse ? 1 : props.maxValue)]}>{() =>
                    <Gauge value={count()} max={props.maxValue} recurse={false} />
                }</For>
            </div>
            <Button disabled={count() === 100} fn={add} sign="+" />
        </div>
    </>
};
