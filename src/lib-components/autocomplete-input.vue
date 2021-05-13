<template>
  <div
    :style="styles"
    class="a-autocomplete"
  >
    <input
      @input="e => onContentChange(e.target.value)"
      :style="inputStyles"
      :value="content"
      class="a-autocomplete__input"
      type="text"
      ref="input"
    />

    <ul
      :style="listStyles"
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
  styles?: CSS.Properties,
  defaultValue: string
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
    styles: {
      type: Object as PropType<CSS.Properties>,
      default: {
        width: '500px'
      }
    },
    input: {
      type: Object as PropType<InputInterface>,
      default: {
        styles: {},
        defaultValue: ''
      }
    },
    list: {
      type: Object as PropType<ListInterface>,
      default: {
        styles: {},
        items: []
      }
    },
    items: {
      type: Array as PropType<ItemInterface[]>,
      default: []
    },
    listItem: {
      type: Object as PropType<ListItemInterface>,
      default: {
        styles: {
          padding: '2px'
        }
      }
    },
  },
  setup({ input, list, items, listItem }, { emit }) {
    const content = ref(input.defaultValue || '')
    const onContentChange = (v: string) => {
      content.value = v;
      emit('change')
    }

    const filteredList = computed(() => items.filter(item => item.value.includes(content.value)))

    return {
      content,
      onContentChange,

      filteredList,

      inputStyles: input?.styles,
      listStyles: list?.styles,
      listItemStyles: listItem?.styles,
    }
  }
});
</script>

<style lang="scss" scoped>
.a {
  &-autocomplete {
    position: relative;

    font-size: inherit;
    font-family: inherit;

    & > * {
      box-sizing: border-box;
    }

    &__input,
    &__list {
      width: 100%;
    }

    &__input {
      border: 1px solid green;
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
