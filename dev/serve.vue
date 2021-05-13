<template>
  <autocomplete-input
    @select="testOnSelect"
    @change="testOnChange"
    :items="items"
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
  },
  {
    id: 4,
    value: 'Item 4'
  },
  {
    id: 5,
    value: 'Item 5'
  },
  {
    id: 6,
    value: 'Item 6'
  }
];

// import { AutocompleteInputSample } from '@/entry.esm';

export default defineComponent({
  name: 'ServeDev',
  setup() {
    const testOnSelect = () => console.log('selected')
    const testOnChange = () => console.log('change')

    return {
      testOnSelect,
      testOnChange,
      items
    }
  }
});
</script>
