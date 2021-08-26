(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vue'), require('@vue/runtime-core'), require('@/utils/index')) :
  typeof define === 'function' && define.amd ? define(['vue', '@vue/runtime-core', '@/utils/index'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.imoocDatav = factory(global.vue, global.runtimeCore, global.index$1));
}(this, (function (vue, runtimeCore, index$1) { 'use strict';

  var script$1 = {
    name: "TestComponent",
    setup: function setup() {
      var message = "hello world!";
      var count = vue.ref(1);
      var doubleCount = vue.computed(function () {
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

  var _withId = /*#__PURE__*/vue.withScopeId("data-v-07bdddea");

  vue.pushScopeId("data-v-07bdddea");

  var _hoisted_1 = {
    "class": "test"
  };

  vue.popScopeId();

  var render$1 = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createBlock("div", _hoisted_1, [vue.createVNode("div", null, "message:" + vue.toDisplayString($setup.message), 1
    /* TEXT */
    ), vue.createVNode("div", null, "doubleCount:" + vue.toDisplayString($setup.doubleCount), 1
    /* TEXT */
    ), vue.createVNode("button", {
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
      var width = runtimeCore.ref(0); // 可视 - 宽

      var height = runtimeCore.ref(0); // 可视 - 高

      var originalWidth = runtimeCore.ref(0); //视口区域 - 宽

      var originalHeight = runtimeCore.ref(0); //视口区域 - 高

      var context, dom;

      var initSize = function initSize() {
        return new Promise(function (resolve) {
          runtimeCore.nextTick(function () {
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
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  console.log("onResize");
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

        return function onResize() {
          return _ref.apply(this, arguments);
        };
      }();

      runtimeCore.onMounted( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                context = runtimeCore.getCurrentInstance();
                _context2.next = 3;
                return initSize();

              case 3:
                updateSize();
                updateScale();
                window.addEventListener("resize", index$1.debounce(100, onResize));

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      })));
      runtimeCore.onUnmounted(function () {
        window.removeEventListener("resize", onResize);
      });
      console.log(require("vue"));
      return {
        refName: refName,
        width: width,
        height: height,
        originalWidth: originalWidth,
        originalHeight: originalHeight,
        initSize: initSize,
        updateSize: updateSize,
        updateScale: updateScale,
        onResize: onResize
      };
    }
  };

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createBlock("div", {
      id: "container_wrap",
      ref: $setup.refName
    }, [vue.renderSlot(_ctx.$slots, "default")], 512
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

  return index;

})));
