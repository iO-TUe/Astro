<script lang="ts">
    import Gauge from "./gauge.svelte";

    export let value: number;
    export let max: number;
    export let recurse: boolean;
    let bool = false;
    // console.log("Script: Gauge");
    setTimeout(() => (bool = recurse), 0);
</script>

<!-- {console.log("Render: Gauge") ?? ""} -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<div role="feed" class="wrapper" on:click={() => ((bool = true))}>
    <svg viewBox="0 0 120 120" class="gauge">
        <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#ffffff" />
                <stop offset="1000%" stop-color="#ff3e00" />
            </linearGradient>
        </defs>

        <circle
            r="56"
            cx="60"
            cy="60"
            stroke-width="8"
            style="fill: #000; stroke: #0000"
        >
        </circle>

        <circle
            r="56"
            cx="60"
            cy="60"
            stroke-width="8"
            class="stroke"
            style={`stroke-dasharray: ${value * 3.51}, 351.858;`}
        ></circle>
    </svg>
    <span class="value">{value}</span>
</div>

{#if bool && max > 0}
    <div class="recurse">
        <Gauge value={value + 1} max={max - 1} recurse={true} />
        <Gauge value={value - 1} max={max - 1} recurse={true} />
    </div>
{/if}

<style>
    .wrapper {
        position: relative;
    }

    .gauge {
        width: 100%;
        min-width: 100px;
    }

    .value {
        position: absolute;
        top: 50%;
        left: 50%;
        color: white;
        font-size: 3rem;
        transform: translate(-50%, -50%);
        text-align: center;
    }

    circle {
        transition: all 150ms;

        &.stroke {
            transform: rotate(-87.9537deg);
            transform-origin: 50% 50%;
            stroke-linecap: round;
            stroke: url(#gradient);
            fill: none;
        }
    }
</style>
