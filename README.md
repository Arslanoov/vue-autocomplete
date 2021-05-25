# Vue Autocomplete

Install

    npm i -S @arslanoov/vue-autocomplete-input

Setup (Vue 3)

    import AutocompleteInput from "@arslanoov/vue-autocomplete-input"
    import "@arslanoov/vue-autocomplete-input/dist/vue-autocomplete-input.esm.css"
    app.use(AutocompleteInput)

Example use

    <autocomplete-input
        @change="onChange"
        @select="onSelect"
        @submit="onSubmit"
        :items="items"
        :value="value"
        :case-sensitive="false"
    />

Demo

    npm run serve

Build

    npm run build
