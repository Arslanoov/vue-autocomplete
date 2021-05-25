<template>
  <div>
    <autocomplete-input
      @select="testOnSelect"
      @change="testOnChange"
      :items="items"
      :value="content"
      :case-sensitive="false"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

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
  },
  {
    id: 7,
    value: 'test 7'
  }
];

// import { AutocompleteInputSample } from '@/entry.esm';

export default defineComponent({
  name: 'ServeDev',
  setup() {
    const content = ref('');

    const testOnSelect = ({ v }: { v: string }) => content.value = v;
    const testOnChange = (v: string) => content.value = v;

    return {
      testOnSelect,
      testOnChange,
      items,
      content
    };
  }
});
</script>
