<script lang="ts">
import { defineComponent } from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { VueAutocompleteInputSample } from '@/entry.esm';

export default defineComponent({
  name: 'ServeDev',
  // components: {
  //  VueAutocompleteInputSample,
  // }
});
</script>

<template>
  <div id="app">
    <vue-autocomplete-input-sample />
  </div>
</template>
