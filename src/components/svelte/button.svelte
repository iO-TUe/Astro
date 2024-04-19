<script setup lang="ts">
    export let disabled: boolean;
    export let fn: Function;
    export let sign: string;

    // console.log(`Script: "${sign}" button`);
</script>

<!-- {console.log(`Render: "${sign}" Button`) ?? ""} -->
<button class="button" {disabled} on:click={fn()} aria-label={sign}>
    {sign}
</button>

<style scoped>
    /* BUTTONS -------------------------------------- */
    .button {
        background: var(--qwik-dirty-black);
        border: none;
        border-radius: 8px;
        color: white;
        padding: 8px 5px 5px;
        text-align: center;
        font-weight: 700;
        font-size: 2rem;
        min-width: 50px;

        &:not([disabled]):hover {
            cursor: pointer;
            background: var(--qwik-dark-blue);
        }

        &[disabled] {
            filter: opacity(0.7);
        }
    }
</style>
