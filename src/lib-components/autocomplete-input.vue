<template>
  <div class="a-autocomplete">
    <input
      @input="e => onContentChange(e.target.value)"
      :style="inputStyles"
      :value="content"
      class="a-autocomplete__input"
      type="text"
      ref="input"
    />

    <ul
      :style="list.styles"
      class="a-autocomplete__list"
    >
      <li
        v-for="item in filteredList"
        :key="item.id || item.value"
        :style="listItemStyles"
        class="a-autocomplete__list-item"
      >
        {{ item.value }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, computed } from 'vue';

import * as CSS from 'csstype';

interface InputInterface {
  styles?: CSS.Properties
}

interface ListInterface {
  styles?: CSS.Properties,
  items: ItemInterface[]
}

interface ListItemInterface {
  styles?: CSS.Properties
}

///////

interface ItemInterface {
  id?: string | number,
  value: string
}

export default /*#__PURE__*/defineComponent({
  name: 'AutocompleteInput',
  emits: ['change'],
  props: {
    input: {
      type: Object as PropType<InputInterface>,
      required: false,
      default: {
        styles: {}
      }
    },
    list: {
      type: Object as PropType<ListInterface>,
      required: false,
      default: {
        styles: {},
        items: []
      }
    },
    listItem: {
      type: Object as PropType<ListItemInterface>,
      required: false,
      default: {
        styles: {
          padding: '2px'
        }
      }
    },
  },
  setup({ input, list, listItem }, { emit }) {
    /* TODO: 2 way - :value */
    const content = ref("")
    const onContentChange = (v: string) => {
      content.value = v;
      emit('change')
    }

    const filteredList = computed(() => list.items.filter(item => item.value.includes(content.value)))

    return {
      content,
      onContentChange,

      filteredList,

      inputStyles: input?.styles,
      listItemStyles: listItem?.styles,
    }
  }
});
</script>

<style lang="scss" scoped>
.a {
  &-autocomplete {
    position: relative;

    &__input {
      border: none;
      outline: none;
    }

    &__list {
      margin: 0;
      padding: 0;

      list-style: none;
    }
  }
}
</style>
