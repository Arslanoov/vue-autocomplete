'use strict';var vue=require('vue');function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}var script = /*#__PURE__*/vue.defineComponent({
  name: 'AutocompleteInput',
  emits: ['change', 'submit', 'select'],
  props: {
    caseSensitive: {
      type: Boolean,
      default: true
    },
    styles: {
      type: Object,
      default: function _default() {
        return {
          width: '300px'
        };
      }
    },
    input: {
      type: Object,
      default: function _default() {
        return {
          styles: {
            padding: '8px 15px',
            border: '1px solid grey',
            borderRadius: '2px'
          },
          defaultValue: ''
        };
      }
    },
    list: {
      type: Object,
      default: function _default() {
        return {
          styles: {
            height: '105px'
          }
        };
      }
    },
    items: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    listItem: {
      type: Object,
      default: function _default() {
        return {
          styles: {
            padding: '8px 15px',
            border: '1px solid grey',
            borderTop: '0'
          }
        };
      }
    }
  },
  setup: function setup(_ref, _ref2) {
    var caseSensitive = _ref.caseSensitive,
        input = _ref.input,
        list = _ref.list,
        items = _ref.items,
        listItem = _ref.listItem;
    var emit = _ref2.emit;
    var inputElement = vue.ref();
    var content = vue.ref(input.defaultValue || '');

    var onContentChange = function onContentChange(v) {
      content.value = v;
      emit('change', v);
    };

    var onSubmit = function onSubmit() {
      return emit('submit');
    };

    var isOpenedList = vue.ref(false);

    var showList = function showList() {
      return isOpenedList.value = true;
    };

    var hideList = function hideList() {
      return isOpenedList.value = false;
    };

    var filteredList = vue.computed(function () {
      return items.filter(function (item) {
        var itemValue = caseSensitive ? item.value : item.value.toLowerCase();
        var contentValue = caseSensitive ? content.value : content.value.toLowerCase();
        return itemValue.includes(contentValue);
      });
    });

    var onItemClick = function onItemClick(e, item) {
      e.preventDefault();
      content.value = item.value;
      hideList();
      emit('select', item);
    };

    var onMouseLeave = function onMouseLeave() {
      hideList();
      inputElement.value.blur();
    };

    return {
      inputElement: inputElement,
      content: content,
      onContentChange: onContentChange,
      onSubmit: onSubmit,
      onMouseLeave: onMouseLeave,
      isOpenedList: isOpenedList,
      showList: showList,
      hideList: hideList,
      filteredList: filteredList,
      onItemClick: onItemClick,
      inputStyles: input === null || input === void 0 ? void 0 : input.styles,
      listStyles: list === null || list === void 0 ? void 0 : list.styles,
      listItemStyles: listItem === null || listItem === void 0 ? void 0 : listItem.styles
    };
  }
});var _withId = /*#__PURE__*/vue.withScopeId("data-v-3c8b2290");

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", {
    onMouseleave: _cache[4] || (_cache[4] = function () {
      return _ctx.onMouseLeave && _ctx.onMouseLeave.apply(_ctx, arguments);
    }),
    style: _ctx.styles,
    class: "a-autocomplete"
  }, [vue.createVNode("input", {
    onInput: _cache[1] || (_cache[1] = function (e) {
      return _ctx.onContentChange(e.target.value);
    }),
    onKeyup: _cache[2] || (_cache[2] = vue.withKeys(function () {
      return _ctx.onSubmit && _ctx.onSubmit.apply(_ctx, arguments);
    }, ["enter"])),
    onFocus: _cache[3] || (_cache[3] = function () {
      return _ctx.showList && _ctx.showList.apply(_ctx, arguments);
    }),
    style: _ctx.inputStyles,
    value: _ctx.content,
    class: "a-autocomplete__input",
    ref: "inputElement",
    type: "text"
  }, null, 44, ["value"]), vue.createVNode("ul", {
    style: _ctx.listStyles,
    class: [{
      'a-autocomplete__list_hidden': !_ctx.isOpenedList
    }, "a-autocomplete__list"]
  }, [(vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(_ctx.filteredList, function (item) {
    return vue.openBlock(), vue.createBlock("li", {
      onClick: function onClick(e) {
        return _ctx.onItemClick(e, item);
      },
      key: item.id || item.value,
      style: _ctx.listItemStyles,
      class: "a-autocomplete__list-item"
    }, vue.toDisplayString(item.value), 13, ["onClick"]);
  }), 128))], 6)], 36);
});function styleInject(css, ref) {
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
}var css_248z = ".a-autocomplete[data-v-3c8b2290] {\n  position: relative;\n  font-size: inherit;\n  font-family: inherit;\n}\n.a-autocomplete > *[data-v-3c8b2290] {\n  box-sizing: border-box;\n}\n.a-autocomplete__input[data-v-3c8b2290], .a-autocomplete__list[data-v-3c8b2290] {\n  width: 100%;\n}\n.a-autocomplete__input[data-v-3c8b2290] {\n  border: 1px solid grey;\n  outline: none;\n}\n.a-autocomplete__list[data-v-3c8b2290] {\n  overflow-y: scroll;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  opacity: 1;\n  transition: opacity 0.5s;\n  scrollbar-width: none;\n}\n.a-autocomplete__list[data-v-3c8b2290]::-webkit-scrollbar {\n  display: none;\n}\n.a-autocomplete__list_hidden[data-v-3c8b2290] {\n  opacity: 0;\n  visibility: hidden;\n}\n.a-autocomplete__list-item[data-v-3c8b2290]:hover {\n  cursor: pointer;\n}";
styleInject(css_248z);script.render = render;
script.__scopeId = "data-v-3c8b2290";/* eslint-disable import/prefer-default-export */var components$1=/*#__PURE__*/Object.freeze({__proto__:null,AutocompleteInput: script});var install = function installVueAutocompleteInput(app) {
  Object.entries(components$1).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        componentName = _ref2[0],
        component = _ref2[1];

    app.component(componentName, component);
  });
};var components=/*#__PURE__*/Object.freeze({__proto__:null,'default': install,AutocompleteInput: script});Object.entries(components).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      componentName = _ref2[0],
      component = _ref2[1];

  if (componentName !== 'default') {
    var key = componentName;
    var val = component;
    install[key] = val;
  }
});module.exports=install;