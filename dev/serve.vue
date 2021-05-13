<template>
  <autocomplete-input
    :input="inputOptions"
    @change="testOnChange"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const inputOptions = {
  styles: {
    border: '1px solid green'
  }
}

// import { AutocompleteInputSample } from '@/entry.esm';

export default defineComponent({
  name: 'ServeDev',
  setup() {
    const testOnChange = () => alert("change")

    return {
      testOnChange,

      inputOptions
    }
  }
});
</script>
