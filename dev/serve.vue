<template>
  <autocomplete-input
    :input="inputOptions"
    :list="listOptions"
    @change="testOnChange"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const inputOptions = {
  styles: {
    border: '1px solid green'
  }
};

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

const listOptions = {
  items
};

// import { AutocompleteInputSample } from '@/entry.esm';

export default defineComponent({
  name: 'ServeDev',
  setup() {
    const testOnChange = () => console.log('change')

    return {
      testOnChange,
      listOptions,
      inputOptions
    }
  }
});
</script>
