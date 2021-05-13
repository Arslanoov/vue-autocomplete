<template>
  <div class="a-autocomplete">
    <input
      @input="e => onContentChange(e.target.value)"
      :style="inputStyles"
      :value="content"
      type="text"
      ref="input"
      class="a-autocomplete__input"
    />

    <ul>

    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';

import * as CSS from 'csstype';

interface InputInterface {
  styles?: CSS.Properties
}

export default /*#__PURE__*/defineComponent({
  name: 'AutocompleteInput',
  emits: ['change'],
  props: {
    input: {
      type: Object as PropType<InputInterface>
    },
  },
  setup({ input }, { emit }) {
    const content = ref("")
    const onContentChange = (v: string) => {
      content.value = v;
      emit('change')
    }

    return {
      content,
      onContentChange,

      inputStyles: input?.styles
    }
  }
});
</script>

<style lang="scss" scoped>
.a {
  &-autocomplete {
    &__input {
      border: none;
      outline: none;
    }
  }
}
</style>
