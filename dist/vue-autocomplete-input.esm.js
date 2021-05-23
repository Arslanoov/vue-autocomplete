import { defineComponent, ref, computed, openBlock, createBlock, createVNode, withKeys, Fragment, renderList, toDisplayString, withScopeId } from 'vue';

var script = /*#__PURE__*/defineComponent({
  name: 'AutocompleteInput',
  emits: ['change', 'submit', 'select'],
  props: {
    caseSensitive: {
      type: Boolean,
      default: true
    },
    styles: {
      type: Object,
      default: () => ({
        width: '300px'
      })
    },
    input: {
      type: Object,
      default: () => ({
        styles: {
          padding: '8px 15px',
          border: '1px solid grey',
          borderRadius: '2px'
        },
        defaultValue: ''
      })
    },
    list: {
      type: Object,
      default: () => ({
        styles: {
          height: '105px'
        }
      })
    },
    items: {
      type: Array,
      default: () => []
    },
    listItem: {
      type: Object,
      default: () => ({
        styles: {
          padding: '8px 15px',
          border: '1px solid grey',
          borderTop: '0'
        }
      })
    }
  },

  setup({
    caseSensitive,
    input,
    list,
    items,
    listItem
  }, {
    emit
  }) {
    const inputElement = ref();
    const content = ref(input.defaultValue || '');

    const onContentChange = v => {
      content.value = v;
      emit('change', v);
    };

    const onSubmit = () => emit('submit');

    const isOpenedList = ref(false);

    const showList = () => isOpenedList.value = true;

    const hideList = () => isOpenedList.value = false;

    const filteredList = computed(() => items.filter(item => {
      const itemValue = caseSensitive ? item.value : item.value.toLowerCase();
      const contentValue = caseSensitive ? content.value : content.value.toLowerCase();
      return itemValue.includes(contentValue);
    }));

    const onItemClick = (e, item) => {
      e.preventDefault();
      content.value = item.value;
      hideList();
      emit('select', item);
    };

    const onMouseLeave = () => {
      hideList();
      inputElement.value.blur();
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
      inputStyles: input === null || input === void 0 ? void 0 : input.styles,
      listStyles: list === null || list === void 0 ? void 0 : list.styles,
      listItemStyles: listItem === null || listItem === void 0 ? void 0 : listItem.styles
    };
  }

});

const _withId = /*#__PURE__*/withScopeId("data-v-3c8b2290");

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", {
    onMouseleave: _cache[4] || (_cache[4] = (...args) => _ctx.onMouseLeave && _ctx.onMouseLeave(...args)),
    style: _ctx.styles,
    class: "a-autocomplete"
  }, [createVNode("input", {
    onInput: _cache[1] || (_cache[1] = e => _ctx.onContentChange(e.target.value)),
    onKeyup: _cache[2] || (_cache[2] = withKeys((...args) => _ctx.onSubmit && _ctx.onSubmit(...args), ["enter"])),
    onFocus: _cache[3] || (_cache[3] = (...args) => _ctx.showList && _ctx.showList(...args)),
    style: _ctx.inputStyles,
    value: _ctx.content,
    class: "a-autocomplete__input",
    ref: "inputElement",
    type: "text"
  }, null, 44, ["value"]), createVNode("ul", {
    style: _ctx.listStyles,
    class: [{
      'a-autocomplete__list_hidden': !_ctx.isOpenedList
    }, "a-autocomplete__list"]
  }, [(openBlock(true), createBlock(Fragment, null, renderList(_ctx.filteredList, item => {
    return openBlock(), createBlock("li", {
      onClick: e => _ctx.onItemClick(e, item),
      key: item.id || item.value,
      style: _ctx.listItemStyles,
      class: "a-autocomplete__list-item"
    }, toDisplayString(item.value), 13, ["onClick"]);
  }), 128))], 6)], 36);
});

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-3c8b2290";

/* eslint-disable import/prefer-default-export */

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  AutocompleteInput: script
});

const install = function installVueAutocompleteInput(app) {
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component);
  });
};

export default install;
export { script as AutocompleteInput };
