import react from "@astrojs/react"
import solid from "@astrojs/solid-js"
import svelte from "@astrojs/svelte"
import vue from "@astrojs/vue"
import qwik from "@qwikdev/astro"
import { defineConfig } from 'astro/config'

export default defineConfig({
    integrations: [
        qwik({ include: ['**/qwik/*'] }),
        react({ include: ['**/react/*.tsx'] }),
        solid({ include: ['**/solid/*'] }),
        svelte({ include: ['**/svelte/*'] }),
        vue({ include: ['**/vue/*.vue'] })]
})
