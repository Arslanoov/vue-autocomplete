<template>
  <autocomplete-input
    :items="items"
    @change="testOnChange"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const items = [
  {
    id: 1,
    value: 'Item 1'
  },
  {
    id: 2,
    value: 'Item 2'
  },
  {
    id: 3,
    value: 'Item 3'
  }
];

// import { AutocompleteInputSample } from '@/entry.esm';

export default defineComponent({
  name: 'ServeDev',
  setup() {
    const testOnChange = () => console.log('change')

    return {
      testOnChange,
      items
    }
  }
});
</script>
