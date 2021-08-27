import { ref, computed, pushScopeId, popScopeId, openBlock, createBlock, createVNode, toDisplayString, withScopeId, renderSlot, createCommentVNode } from 'vue';
import { ref as ref$1, onMounted, onUnmounted, getCurrentInstance, nextTick } from '@vue/runtime-core';
import { debounce } from '@/utils/index';

var script$1 = {
  name: "TestComponent",
  setup: function setup() {
    var message = "hello world!";
    var count = ref(1);
    var doubleCount = computed(function () {
      return count.value * 2;
    });

    var add = function add() {
      count.value++;
    };

    return {
      message: message,
      doubleCount: doubleCount,
      add: add
    };
  }
};

var _withId = /*#__PURE__*/withScopeId("data-v-07bdddea");

pushScopeId("data-v-07bdddea");

var _hoisted_1 = {
  "class": "test"
};

popScopeId();

var render$1 = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", _hoisted_1, [createVNode("div", null, "message:" + toDisplayString($setup.message), 1
  /* TEXT */
  ), createVNode("div", null, "doubleCount:" + toDisplayString($setup.doubleCount), 1
  /* TEXT */
  ), createVNode("button", {
    onClick: _cache[1] || (_cache[1] = function () {
      return $setup.add && $setup.add.apply($setup, arguments);
    })
  }, "add count")]);
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

var css_248z$1 = ".test[data-v-07bdddea] {\n  color: red;\n}";
styleInject(css_248z$1);

script$1.render = render$1;
script$1.__scopeId = "data-v-07bdddea";
script$1.__file = "src/Test.vue";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

var script = {
  name: "ContainerComp",
  props: {
    options: Object
  },
  setup: function setup(props) {
    var refName = "ContainerWrap";
    var width = ref$1(0); // 可视 - 宽

    var height = ref$1(0); // 可视 - 高

    var originalWidth = ref$1(0); //视口区域 - 宽

    var originalHeight = ref$1(0); //视口区域 - 高

    var ready = ref$1(false);
    var context, dom, observer;

    var initSize = function initSize() {
      return new Promise(function (resolve) {
        nextTick(function () {
          dom = context.refs[refName]; // 获取大屏的真实尺寸

          if (props.options && props.options.width && props.options.height) {
            width.value = props.options.width;
            height.value = props.options.height;
          } else {
            width.value = dom.clientWidth;
            height.value = dom.clientHeight;
          } // 获取画布尺寸


          if (!originalWidth.value || !originalHeight.value) {
            originalWidth.value = window.screen.width;
            originalHeight.value = window.screen.height;
          }

          console.log(width.value, height.value, originalWidth.value, originalHeight.value);
          resolve();
        });
      });
    }; // 分辨率 计算


    var updateSize = function updateSize() {
      if (width.value && height.value) {
        dom.style.width = "".concat(width.value, "px");
        dom.style.height = "".concat(height.value, "px");
      } else {
        dom.style.width = "".concat(originalWidth, "px");
        dom.style.height = "".concat(originalHeight, "px");
      }
    }; // 压缩比 计算


    var updateScale = function updateScale() {
      // 获取真实的视口尺寸
      var currentWidth = document.body.clientWidth;
      var currentHeight = document.body.clientHeight; // 获取大屏最终的宽高

      var realWidth = width.value || originalWidth.value;
      var realHeight = height.value || originalHeight.value;
      console.log(currentWidth, currentHeight);
      var widthScale = currentWidth / realWidth;
      var heightScale = currentHeight / realHeight;
      dom.style.transform = "scale(".concat(widthScale, ",").concat(heightScale, ")");
    }; // 视口改变时，更改压缩比


    var onResize = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log("onResize", e);
                _context.next = 3;
                return initSize();

              case 3:
                updateScale();

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function onResize(_x) {
        return _ref.apply(this, arguments);
      };
    }(); // 属性变更时，调用 mutationObserver 进行监听改变


    var initMutationObserver = function initMutationObserver() {
      var MutationObserver = window.MutationObserver;
      observer = new MutationObserver(onResize);
      observer.observe(dom, {
        attributes: true,
        attributeFilter: ["style"],
        attributeOldValue: true
      });
    };

    var removeMutationObserver = function removeMutationObserver() {
      if (observer) {
        observer.disconnect();
        observer.takeRecords();
        observer = null;
      }
    };

    onMounted( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              ready.value = false;
              context = getCurrentInstance();
              _context2.next = 4;
              return initSize();

            case 4:
              updateSize();
              updateScale();
              window.addEventListener("resize", debounce(100, onResize));
              initMutationObserver();
              ready.value = true;

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));
    onUnmounted(function () {
      window.removeEventListener("resize", onResize);
      removeMutationObserver();
    });
    console.log(require("vue"));
    return {
      refName: refName,
      ready: ready
    };
  }
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", {
    id: "container_wrap",
    ref: $setup.refName
  }, [$setup.ready ? renderSlot(_ctx.$slots, "default", {
    key: 0
  }) : createCommentVNode("v-if", true)], 512
  /* NEED_PATCH */
  );
}

var css_248z = "\n#container_wrap {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  overflow: hidden;\r\n  transform-origin: left top;\r\n  z-index: 999;\n}\r\n";
styleInject(css_248z);

script.render = render;
script.__file = "src/components/ContainerComp/ContainerComp.vue";

/* ----------------------------------------------------------------------*/
function index (Vue) {
  Vue.component(script$1.name, script$1);
  Vue.component(script.name, script);
}
/*------------------------------------------*/
//commonjs文件

/*该方法不论有没有用到全部，bulid时均会被打包*/
// const a = 1
// const b = 2
// module.exports = { a, b }
// 局部打包的方法
// exports.a=1;
// exports.b=2;

/*------------------------------------------*/

export default index;
