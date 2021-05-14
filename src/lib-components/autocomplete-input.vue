<template>
  <div @mouseleave="onMouseLeave" :style="styles" class="a-autocomplete">
    <input
      @input="e => onContentChange(e.target.value)"
      @keyup.enter="onSubmit"
      @focus="showList"
      :style="inputStyles"
      :value="content"
      class="a-autocomplete__input"
      ref="inputElement"
      type="text"
    />

    <ul
      :style="listStyles"
      :class="{ 'a-autocomplete__list_hidden': !isOpenedList }"
      class="a-autocomplete__list"
    >
      <li
        v-for="item in filteredList"
        @click="e => onItemClick(e, item)"
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
import { defineComponent, PropType, ref, computed } from "vue";

import * as CSS from "csstype";

interface InputInterface {
  styles?: CSS.Properties;
  defaultValue: string;
}

interface ListInterface {
  styles?: CSS.Properties;
  items: ItemInterface[];
}

interface ListItemInterface {
  styles?: CSS.Properties;
}

///////

interface ItemInterface {
  id?: string | number;
  value: string;
}

export default /*#__PURE__*/ defineComponent({
  name: "AutocompleteInput",
  emits: ["change", "submit", "select"],
  props: {
    caseSensitive: {
      type: Boolean,
      default: true
    },
    styles: {
      type: Object as PropType<CSS.Properties>,
      default: () => ({
        width: "300px"
      })
    },
    input: {
      type: Object as PropType<InputInterface>,
      default: () => ({
        styles: {
          padding: "8px 15px",
          border: "1px solid grey",
          borderRadius: "2px"
        },
        defaultValue: ""
      })
    },
    list: {
      type: Object as PropType<ListInterface>,
      default: () => ({
        styles: {
          height: "105px"
        },
        items: []
      })
    },
    items: {
      type: Array as PropType<ItemInterface[]>,
      default: () => []
    },
    listItem: {
      type: Object as PropType<ListItemInterface>,
      default: () => ({
        styles: {
          padding: "8px 15px",
          border: "1px solid grey",
          borderTop: "0"
        }
      })
    }
  },
  setup({ caseSensitive, input, list, items, listItem }, { emit }) {
    const inputElement = ref<HTMLInputElement>();

    const content = ref(input.defaultValue || "");
    const onContentChange = (v: string) => {
      content.value = v;
      emit("change");
    };

    const onSubmit = () => emit("submit");

    const isOpenedList = ref(false);
    const showList = () => (isOpenedList.value = true);
    const hideList = () => (isOpenedList.value = false);
    const filteredList = computed(() =>
      items.filter(item => {
        const itemValue = caseSensitive ? item.value : item.value.toLowerCase();
        const contentValue = caseSensitive
          ? content.value
          : content.value.toLowerCase();
        return itemValue.includes(contentValue);
      })
    );

    const onItemClick = (e: Event, item: ItemInterface) => {
      e.preventDefault();
      content.value = item.value;
      hideList();
      emit("select", item);
    };

    const onMouseLeave = () => {
      hideList();
      (inputElement.value as HTMLInputElement).blur();
    };

    return {
      inputElement,

      content,
      onContentChange,
      onSubmit,

      onMouseLeave,

      isOpenedList,
      showList,
      hideList,
      filteredList,

      onItemClick,

      inputStyles: input?.styles,
      listStyles: list?.styles,
      listItemStyles: listItem?.styles
    };
  }
});
</script>

<style lang="scss" scoped>
@import "/src/assets/styles/vars";
@import "/src/assets/styles/mixins";

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
      border: $a-autocomplete-input-border;
      outline: none;
    }

    &__list {
      overflow-y: scroll;

      margin: 0;
      padding: 0;

      list-style: none;

      opacity: 1;

      transition: $a-autocomplete-transition;

      @include without-scrollbar();

      &_hidden {
        opacity: 0;

        visibility: hidden;
      }

      &-item {
        @include pointer-on-hover();
      }
    }
  }
}
</style>
