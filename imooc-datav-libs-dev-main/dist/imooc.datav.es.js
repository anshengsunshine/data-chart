import { openBlock, createBlock, Fragment, createCommentVNode, createVNode, pushScopeId, popScopeId, withScopeId, renderSlot, watch, onMounted as onMounted$1 } from 'vue';
import { onMounted, computed, ref, onUnmounted, getCurrentInstance, nextTick } from '@vue/runtime-core';
import { debounce } from '@/utils/index';
import * as Echarts from 'echarts';

var script$6 = {
  name: "Test"
};

var _hoisted_1$4 = /*#__PURE__*/createVNode("svg", {
  viewBox: "0 0 100 100"
}, [/*#__PURE__*/createVNode("line", {
  x1: "0",
  y1: "50",
  x2: "100",
  y2: "50",
  "stroke-width": "8",
  stroke: "currentColor"
}), /*#__PURE__*/createVNode("line", {
  x1: "50",
  y1: "0",
  x2: "50",
  y2: "100",
  "stroke-width": "8",
  stroke: "currentColor"
})], -1
/* HOISTED */
);

var _hoisted_2$3 = /*#__PURE__*/createVNode("svg", {
  width: "500",
  height: "200",
  viewBox: "0 0 200 200",
  style: {
    "border": "1px solid #000000"
  },
  preserveAspectRatio: "xMidYMid meet"
}, [/*#__PURE__*/createVNode("rect", {
  x: "100",
  y: "100",
  width: "100",
  height: "50",
  "stroke-width": "10",
  style: {
    "stroke": "#000000",
    "fill": "none"
  }
})], -1
/* HOISTED */
);

var _hoisted_3$1 = /*#__PURE__*/createVNode("svg", {
  width: "500",
  height: "200",
  viewBox: "0 0 200 200",
  style: {
    "border": "1px solid #000000"
  },
  preserveAspectRatio: "xMaxYMin meet"
}, [/*#__PURE__*/createVNode("rect", {
  x: "100",
  y: "100",
  width: "100",
  height: "50",
  "stroke-width": "10",
  style: {
    "stroke": "#000000",
    "fill": "none"
  }
})], -1
/* HOISTED */
);

var _hoisted_4$1 = /*#__PURE__*/createVNode("svg", {
  width: "500",
  height: "200",
  viewBox: "0 0 200 200",
  style: {
    "border": "1px solid #000000"
  },
  preserveAspectRatio: "xMinYMin meet"
}, [/*#__PURE__*/createVNode("rect", {
  x: "100",
  y: "100",
  width: "100",
  height: "50",
  "stroke-width": "10",
  style: {
    "stroke": "#000000",
    "fill": "none"
  }
})], -1
/* HOISTED */
);

var _hoisted_5$1 = /*#__PURE__*/createVNode("svg", {
  width: "500",
  height: "200",
  viewBox: "0 0 200 200",
  style: {
    "border": "1px solid #000000"
  },
  preserveAspectRatio: "xMidYMax slice"
}, [/*#__PURE__*/createVNode("rect", {
  x: "100",
  y: "100",
  width: "100",
  height: "50",
  "stroke-width": "10",
  style: {
    "stroke": "#000000",
    "fill": "none"
  }
})], -1
/* HOISTED */
);

var _hoisted_6$1 = /*#__PURE__*/createVNode("svg", {
  width: "500",
  height: "200",
  viewBox: "0 0 200 200",
  style: {
    "border": "1px solid #000000"
  },
  preserveAspectRatio: "xMaxYMin slice"
}, [/*#__PURE__*/createVNode("rect", {
  x: "100",
  y: "100",
  width: "100",
  height: "50",
  "stroke-width": "10",
  style: {
    "stroke": "#000000",
    "fill": "none"
  }
})], -1
/* HOISTED */
);

var _hoisted_7$1 = /*#__PURE__*/createVNode("svg", {
  width: "500",
  height: "200",
  viewBox: "0 0 200 200",
  style: {
    "border": "1px solid #000000"
  },
  preserveAspectRatio: "none"
}, [/*#__PURE__*/createVNode("rect", {
  x: "100",
  y: "100",
  width: "100",
  height: "50",
  "stroke-width": "10",
  style: {
    "stroke": "#000000",
    "fill": "none"
  }
})], -1
/* HOISTED */
);

function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Fragment, null, [createCommentVNode(" 十字 "), _hoisted_1$4, createCommentVNode(" 框内 矩形  viewBox "), createCommentVNode(" <svg width=\"500\" height=\"200\" viewBox=\"0 0 50 20\" style=\"border: 1px solid #000000\">\r\n    <rect x=\"20\" y=\"10\" width=\"10\" height=\"5\" style=\"stroke: #000000; fill: none\" />\r\n  </svg>\r\n  <svg width=\"500\" height=\"200\" style=\"border: 1px solid #000000\">\r\n    <rect\r\n      x=\"200\"\r\n      y=\"100\"\r\n      width=\"100\"\r\n      height=\"50\"\r\n      stroke-width=\"10\"\r\n      style=\"stroke: #000000; fill: none\"\r\n    />\r\n  </svg> "), createCommentVNode(" preserveAspectRatio  "), createCommentVNode(" preserveAspectRatio=\"xMidYMid meet\" "), _hoisted_2$3, createCommentVNode(" preserveAspectRatio=\"xMaxYMin meet\" "), _hoisted_3$1, createCommentVNode(" preserveAspectRatio=\"xMinYMin meet\" "), _hoisted_4$1, createCommentVNode(" preserveAspectRatio=\"xMidYMax slice\" "), _hoisted_5$1, createCommentVNode(" preserveAspectRatio=\"xMaxYMin slice\" "), _hoisted_6$1, createCommentVNode(" preserveAspectRatio=\"none\" "), _hoisted_7$1], 64
  /* STABLE_FRAGMENT */
  );
}

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

var css_248z$5 = "\n.svg_item {\r\n  width: 100px;\r\n  height: 100px;\r\n  color: #f00;\n}\r\n";
styleInject(css_248z$5);

script$6.render = render$6;
script$6.__file = "src/components/Test/index.vue";

function Test (Vue) {
  Vue.component(script$6.name, script$6);
}

var script$5 = {
  name: "TestComp"
};

var _hoisted_1$3 = {
  width: "0",
  height: "0"
};

var _hoisted_2$2 = /*#__PURE__*/createVNode("defs", null, [/*#__PURE__*/createVNode("symbol", {
  id: "more",
  viewBox: "0 0 100 100"
}, [/*#__PURE__*/createVNode("circle", {
  r: "5",
  cx: "20",
  cy: "25",
  fill: "currentColor"
}), /*#__PURE__*/createVNode("circle", {
  r: "5",
  cx: "20",
  cy: "50",
  fill: "currentColor"
}), /*#__PURE__*/createVNode("circle", {
  r: "5",
  cx: "20",
  cy: "75",
  fill: "currentColor"
}), /*#__PURE__*/createVNode("line", {
  x1: "40",
  y1: "25",
  x2: "90",
  y2: "25",
  "stroke-width": "8",
  stroke: "currentColor"
}), /*#__PURE__*/createVNode("line", {
  x1: "40",
  y1: "50",
  x2: "90",
  y2: "50",
  "stroke-width": "8",
  stroke: "currentColor"
}), /*#__PURE__*/createVNode("line", {
  x1: "40",
  y1: "75",
  x2: "90",
  y2: "75",
  "stroke-width": "8",
  stroke: "currentColor"
})]), /*#__PURE__*/createVNode("symbol", {
  id: "filledArrowRight",
  viewBox: "0 0 100 100"
}, [/*#__PURE__*/createVNode("polyline", {
  points: "20 10, 80 50, 20 90",
  fill: "currentColor"
})]), /*#__PURE__*/createVNode("symbol", {
  id: "arrowRight",
  viewBox: "0 0 100 100"
}, [/*#__PURE__*/createVNode("polyline", {
  points: "20 10, 80 50, 20 90",
  fill: "transparent",
  stroke: "currentColor",
  "stroke-width": "3"
})]), /*#__PURE__*/createVNode("symbol", {
  id: "comments",
  viewBox: "0 0 1024 1024"
}, [/*#__PURE__*/createVNode("path", {
  fill: "currentColor",
  d: "M896.2 175.8H128.7c-8.8 0-16 7.2-16 16V923c0 6.7 4.1 12.6 10.4 15 1.8 0.7 3.7 1 5.6 1 4.5 0 9-1.9 12.1-5.5l186.5-213.6H564c8.8 0 16-7.2 16-16s-7.2-16-16-16H320c-4.6 0-9 2-12.1 5.5l-163.3 187V207.8h735.5v480.1H771.5c-8.8 0-16 7.2-16 16s7.2 16 16 16h124.7c8.8 0 16-7.2 16-16V191.8c0-8.9-7.2-16-16-16z",
  "p-id": "1286"
}), /*#__PURE__*/createVNode("path", {
  fill: "currentColor",
  d: "M665.5 687.9h-50c-8.8 0-16 7.2-16 16s7.2 16 16 16h50c8.8 0 16-7.2 16-16s-7.2-16-16-16zM256 432.2c-8.8 0-16 7.2-16 16s7.2 16 16 16h125.1c8.8 0 16-7.2 16-16s-7.2-16-16-16H256zM574.3 432.2H449.2c-8.8 0-16 7.2-16 16s7.2 16 16 16h125.1c8.8 0 16-7.2 16-16s-7.2-16-16-16zM767.9 464.2c8.8 0 16-7.2 16-16s-7.2-16-16-16H642.8c-8.8 0-16 7.2-16 16s7.2 16 16 16h125.1z",
  "p-id": "1287"
})])], -1
/* HOISTED */
);

function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1$3, [_hoisted_2$2]);
}

script$5.render = render$5;
script$5.__file = "src/components/TestComp/index.vue";

function TestComp (Vue) {
  Vue.component(script$5.name, script$5);
}

var script$4 = {
  name: "Icon",
  props: {
    name: String,
    prefix: String,
    style: Object
  },
  setup: function setup(props) {
    var iconName = "#".concat(props.prefix).concat(props.name);
    return {
      iconName: iconName
    };
  }
};

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

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

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", {
    "class": "icon",
    style: _objectSpread2({}, $props.style)
  }, [createVNode("use", {
    href: $setup.iconName
  }, null, 8
  /* PROPS */
  , ["href"])], 4
  /* STYLE */
  );
}

var css_248z$4 = "\n.icon {\r\n  width: 100%;\r\n  height: 100%;\r\n  vertical-align: -0.15em;\r\n  fill: currentColor;\r\n  overflow: hidden;\n}\r\n";
styleInject(css_248z$4);

script$4.render = render$4;
script$4.__file = "src/components/Icon/index.vue";

function Icon (Vue) {
  Vue.component(script$4.name, script$4);
}

var script$3 = {
  name: "SvgAnimation",
  setup: function setup() {
    onMounted(function () {
      var logo = document.getElementsByClassName("logo")[0];
      console.log("获取logo周长", logo.getTotalLength());
    });
  }
};

var _withId$2 = /*#__PURE__*/withScopeId("data-v-8a32779a");

pushScopeId("data-v-8a32779a");

var _hoisted_1$2 = /*#__PURE__*/createVNode("div", {
  "class": "container"
}, [/*#__PURE__*/createCommentVNode(" svg transform "), /*#__PURE__*/createCommentVNode(" <svg width=\"200\" height=\"200\" viewBox=\"0 0 500 200\">\r\n      <rect\r\n        x=\"0\"\r\n        y=\"0\"\r\n        width=\"100\"\r\n        height=\"50\"\r\n        fill=\"red\"\r\n        transform=\"translate(10,10) rotate(30) skewX(30) skewY(30) scale(0.5)\"\r\n      ></rect>\r\n    </svg> "), /*#__PURE__*/createCommentVNode(" <svg width=\"500\" height=\"200\" viewBox=\"0 0 500 200\">\r\n      !-- matrix:  _x/_y:旧的x/y   \r\n       [2,-1,50] ==> 2*_x+(-1)*_y+50 = x\r\n       [1,2,0] ==> 1*_x+2*_y+0 = y\r\n\r\n       顶点坐标：\r\n       [0,0]  => [50,0]\r\n       [100,0] =>[250,100]\r\n       [100,50] =>[200,200]\r\n       [0,50] =>[0,100]\r\n       --\r\n      <rect\r\n        x=\"0\"\r\n        y=\"0\"\r\n        width=\"100\"\r\n        height=\"50\"\r\n        fill=\"red\"\r\n        transform=\"matrix(2 1 -1 2 50 0)\"\r\n      ></rect>\r\n    </svg> "), /*#__PURE__*/createCommentVNode(" 边框矩形-无填充 "), /*#__PURE__*/createVNode("svg", {
  width: "500",
  height: "200",
  viewBox: "0 0 500 200"
}, [/*#__PURE__*/createVNode("rect", {
  "class": "rect",
  x: "5",
  y: "5",
  width: "100",
  height: "50",
  fill: "none",
  "stroke-width": "5",
  stroke: "blue"
})])], -1
/* HOISTED */
);

var _hoisted_2$1 = /*#__PURE__*/createVNode("div", {
  "class": "container"
}, [/*#__PURE__*/createVNode("svg", {
  width: "440",
  height: "440",
  viewBox: "0 0 440 440"
}, [/*#__PURE__*/createVNode("circle", {
  cx: "220",
  cy: "220",
  r: "180",
  "stroke-width": "20",
  stroke: "#d1d3d7",
  fill: "none"
}), /*#__PURE__*/createCommentVNode(" 2πr：2*3.1415926*200 = 1257 "), /*#__PURE__*/createVNode("circle", {
  "class": "circle",
  cx: "220",
  cy: "220",
  r: "180",
  "stroke-width": "20",
  stroke: "#00a5e0",
  fill: "none",
  transform: "matrix(0 -1 1 0 0 440)"
})])], -1
/* HOISTED */
);

var _hoisted_3 = /*#__PURE__*/createVNode("div", {
  "class": "container"
}, [/*#__PURE__*/createVNode("svg", {
  width: "200",
  height: "200",
  viewBox: "0 0 200 200"
}, [/*#__PURE__*/createVNode("rect", {
  x: "0",
  y: "0",
  width: "200",
  height: "200",
  fill: "none",
  stroke: "grey",
  "stroke-width": "8"
}), /*#__PURE__*/createVNode("rect", {
  x: "0",
  y: "0",
  width: "200",
  height: "200",
  fill: "none",
  stroke: "blue",
  "stroke-width": "8",
  "class": "rect-process",
  transform: ""
})])], -1
/* HOISTED */
);

var _hoisted_4 = /*#__PURE__*/createVNode("div", {
  "class": "container"
}, [/*#__PURE__*/createVNode("svg", {
  viewBox: "0 0 1024 1024",
  width: "200",
  height: "200"
}, [/*#__PURE__*/createVNode("path", {
  "class": "logo",
  d: "M752.4 621.7c18.1 0 32.8-39.3 32.8-87.7 0-48.5-14.7-87.7-32.8-87.7s-32.8 39.3-32.8 87.7c0 48.4 14.7 87.7 32.8 87.7z m-284.1 43.8c18.1 0 32.8-34.4 32.8-76.8s-14.7-76.8-32.8-76.8c-18.1 0-32.8 34.4-32.8 76.8 0 42.5 14.7 76.8 32.8 76.8zM64 555.9c0 218.8 201.2 394.8 448 394.8s448-176 448-394.8-201.2-394.8-448-394.8c3.2 0 4.3 0.5 4.3 0.5-1.9-1.4-4-3.2-9.7-8.4-15.9-14.5-25.8-22.6-41.1-32.4-47.1-30.1-109-47.3-193.9-47.3-12.1 0-21.9 9.8-21.9 21.9s9.8 21.9 21.9 21.9c76.8 0 130.4 14.9 170.4 40.4 10.6 6.8 54.9 47.3 70 47.3 223.9 0 404.3 157.8 404.3 350.9S735.9 906.8 512 906.8 107.7 749 107.7 555.9c0-127.5 79.3-243.5 205.4-305.6 10.8-5.3 15.3-18.5 10-29.3-5.3-10.9-18.4-15.4-29.2-10C153.4 280 64 410.8 64 555.9z",
  "p-id": "5518"
})])], -1
/* HOISTED */
);

var _hoisted_5 = /*#__PURE__*/createVNode("div", {
  "class": "container"
}, [/*#__PURE__*/createVNode("svg", {
  "class": "line-container",
  viewBox: "0 0 400 400",
  width: "400",
  height: "400"
}, [/*#__PURE__*/createVNode("line", {
  "class": "line",
  x1: "0",
  y1: "50",
  x2: "400",
  y2: "50",
  fill: "none",
  "stroke-width": "20",
  stroke: "red"
})])], -1
/* HOISTED */
);

var _hoisted_6 = /*#__PURE__*/createVNode("div", {
  "class": "container"
}, [/*#__PURE__*/createVNode("svg", {
  width: "200",
  height: "200"
}, [/*#__PURE__*/createVNode("rect", {
  x: "0",
  y: "0",
  fill: "red",
  width: "100",
  height: "50"
}, [/*#__PURE__*/createVNode("set", {
  attributeName: "x",
  attributeType: "XML",
  to: "10",
  begin: "1s"
}), /*#__PURE__*/createVNode("set", {
  attributeName: "x",
  attributeType: "XML",
  to: "20",
  begin: "2s"
}), /*#__PURE__*/createVNode("set", {
  attributeName: "fill",
  attributeType: "XML",
  to: "blue",
  begin: "3s"
})])])], -1
/* HOISTED */
);

var _hoisted_7 = /*#__PURE__*/createVNode("div", {
  "class": "container"
}, [/*#__PURE__*/createVNode("svg", {
  width: "200",
  height: "200"
}, [/*#__PURE__*/createVNode("circle", {
  cx: "0",
  cy: "0",
  r: "30",
  fill: "blue",
  stroke: "black",
  "stroke-width": "1"
}, [/*#__PURE__*/createVNode("animate", {
  attributeName: "cx",
  attributeType: "XML",
  from: "0",
  to: "100",
  dur: "2s",
  repeatCount: "2",
  fill: "freeze"
}), /*#__PURE__*/createVNode("animate", {
  attributeName: "cy",
  attributeType: "XML",
  from: "0",
  to: "50 ",
  dur: "2s",
  repeatCount: "2",
  fill: "freeze"
}), /*#__PURE__*/createVNode("animate", {
  attributeName: "fill",
  attributeType: "XML",
  from: "blue",
  to: "red",
  dur: "2s",
  repeatCount: "2",
  fill: "freeze"
}), /*#__PURE__*/createVNode("animateTransform", {
  attributeName: "transform",
  attributeType: "XML",
  begin: "0",
  dur: "2s",
  type: "scale",
  from: "1",
  to: "2",
  repeatCount: "2",
  fill: "freeze"
})])])], -1
/* HOISTED */
);

var _hoisted_8 = /*#__PURE__*/createVNode("div", {
  "class": "container"
}, [/*#__PURE__*/createVNode("svg", {
  width: "400",
  height: "400"
}, [/*#__PURE__*/createVNode("polygon", {
  points: "30 30 70 30 90 70 10 70",
  fill: "#fcc",
  stroke: "black"
}, [/*#__PURE__*/createVNode("animate", {
  attributeName: "points",
  attributeType: "XML",
  to: "50 30 70 50 50 90 30 50",
  dur: "5s",
  fill: "freeze",
  repeatCount: "1"
})])])], -1
/* HOISTED */
);

var _hoisted_9 = /*#__PURE__*/createVNode("div", {
  "class": "container"
}, [/*#__PURE__*/createVNode("svg", {
  width: "200",
  height: "200"
}, [/*#__PURE__*/createVNode("rect", {
  x: "0",
  y: "0",
  fill: "red",
  width: "10",
  height: "10"
}, [/*#__PURE__*/createVNode("animateMotion", {
  path: "M10 10 L110 10 L110 110 L10 110 Z",
  dur: "5s",
  rotate: "0",
  repeatCount: "2",
  fill: "freeze"
})]), /*#__PURE__*/createVNode("path", {
  d: "M10 10 L110 10 L110 110 L10 110 Z",
  fill: "none",
  stroke: "green"
})])], -1
/* HOISTED */
);

var _hoisted_10 = /*#__PURE__*/createVNode("div", {
  "class": "container"
}, [/*#__PURE__*/createVNode("svg", {
  width: "200",
  height: "200"
}, [/*#__PURE__*/createVNode("rect", {
  x: "0",
  y: "0",
  fill: "red",
  width: "10",
  height: "10"
}, [/*#__PURE__*/createVNode("animateMotion", {
  id: "forward-rect",
  path: "M10 10 L110 10 L110 110 L10 110 ",
  dur: "3s",
  rotate: "0",
  fill: "freeze",
  begin: "0; backward-rect.end + 0.5s"
}), /*#__PURE__*/createVNode("animateMotion", {
  id: "backward-rect",
  path: "M10 110 L110 110 L110 10 L10 10 ",
  dur: "3s",
  rotate: "0",
  fill: "freeze",
  begin: "forward-rect.end + 0.5s"
}), /*#__PURE__*/createVNode("animate", {
  id: "red-to-blue",
  attributeName: "fill",
  attributeType: "XML",
  from: "red",
  to: "blue",
  dur: "3s",
  fill: "freeze",
  begin: "0; blue-to-red.end + 0.5s"
}), /*#__PURE__*/createVNode("animate", {
  id: "blue-to-red",
  attributeName: "fill",
  attributeType: "XML",
  from: "blue",
  to: "red",
  dur: "3s",
  fill: "freeze",
  begin: "red-to-blue.end + 0.5s"
})]), /*#__PURE__*/createVNode("path", {
  d: "M10 10 L110 10 L110 110 L10 110 ",
  fill: "none",
  stroke: "green"
})])], -1
/* HOISTED */
);

var _hoisted_11 = /*#__PURE__*/createVNode("div", {
  "class": "container"
}, [/*#__PURE__*/createVNode("svg", {
  viewBox: "0 0 200 200",
  width: "200",
  height: "200"
}, [/*#__PURE__*/createVNode("g", {
  id: "rect1"
}, [/*#__PURE__*/createVNode("rect", {
  x: "0",
  y: "0",
  rx: "0",
  ry: "0",
  width: "100",
  height: "100",
  fill: "red"
}, [/*#__PURE__*/createVNode("animate", {
  attributeType: "XML",
  attributeName: "fill",
  from: "red",
  to: "green",
  begin: "rect1.click",
  dur: "2s",
  fill: "freeze"
})])]), /*#__PURE__*/createVNode("animateTransform", {
  attributeType: "XML",
  attributeName: "transform",
  type: "translate",
  from: "0, 0",
  to: "50, 50",
  begin: "rect1.click",
  dur: "2s",
  fill: "freeze"
}), /*#__PURE__*/createVNode("rect", {
  x: "0",
  y: "100",
  width: "100",
  height: "100",
  fill: "blue"
}, [/*#__PURE__*/createVNode("animate", {
  attributeType: "XML",
  attributeName: "fill",
  from: "blue",
  to: "green",
  begin: "rect1.click",
  dur: "2s",
  fill: "freeze"
})])])], -1
/* HOISTED */
);

var _hoisted_12 = /*#__PURE__*/createVNode("div", {
  "class": "container bg_333"
}, [/*#__PURE__*/createVNode("svg", {
  width: "400",
  height: "400"
}, [/*#__PURE__*/createVNode("defs", null, [/*#__PURE__*/createVNode("mask", {
  id: "test-mask"
}, [/*#__PURE__*/createVNode("rect", {
  x: "5",
  y: "5",
  width: "390",
  height: "390",
  fill: "red"
}), /*#__PURE__*/createVNode("circle", {
  r: "50",
  cx: "50",
  cy: "50"
})]), /*#__PURE__*/createVNode("linearGradient", {
  id: "test-linear-gradient"
}, [/*#__PURE__*/createVNode("stop", {
  offset: "0%",
  "stop-color": "red",
  "stop-opacity": "1"
}), /*#__PURE__*/createVNode("stop", {
  offset: "50%",
  "stop-color": "green"
}), /*#__PURE__*/createVNode("stop", {
  offset: "100%",
  "stop-color": "blue",
  "stop-opacity": "0.5"
})]), /*#__PURE__*/createVNode("radialGradient", {
  id: "test-radial-gradient",
  cx: "50%",
  cy: "50%",
  fx: "50%",
  fy: "50%",
  r: "50%"
}, [/*#__PURE__*/createVNode("stop", {
  offset: "0%",
  "stop-color": "#fff",
  "stop-opacity": "1"
}), /*#__PURE__*/createVNode("stop", {
  offset: "100%",
  "stop-color": "#fff",
  "stop-opacity": "0"
})])]), /*#__PURE__*/createCommentVNode(" <rect x=\"5\" y=\"5\" width=\"390\" height=\"390\" fill=\"url(#test-linear-gradient)\"></rect> "), /*#__PURE__*/createVNode("circle", {
  cx: "200",
  cy: "200",
  r: "200",
  fill: "url(#test-radial-gradient)"
}), /*#__PURE__*/createCommentVNode(" <rect x=\"5\" y=\"5\" width=\"390\" height=\"390\" fill=\"blue\" mask=\"url(#test-mask)\"></rect> ")])], -1
/* HOISTED */
);

popScopeId();

var render$3 = /*#__PURE__*/_withId$2(function (_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Fragment, null, [_hoisted_1$2, _hoisted_2$1, _hoisted_3, _hoisted_4, _hoisted_5, _hoisted_6, _hoisted_7, _hoisted_8, _hoisted_9, _hoisted_10, _hoisted_11, _hoisted_12], 64
  /* STABLE_FRAGMENT */
  );
});

var css_248z$3 = "\n.container[data-v-8a32779a] {\nsvg[data-v-8a32779a] {\r\n    border: 1px solid #333;\n}\n}\n.rect[data-v-8a32779a] {\r\n  stroke-dasharray: 10 20 30;\n}\n.circle[data-v-8a32779a] {\r\n  animation: circle-8a32779a 5s linear infinite;\n}\n@keyframes circle-8a32779a {\nfrom {\r\n    stroke-dasharray: 0 1257;\n}\nto {\r\n    stroke-dasharray: 1257 1257;\n}\n}\n.rect-process[data-v-8a32779a] {\r\n  animation: rect-process-8a32779a 5s linear infinite;\n}\n@keyframes rect-process-8a32779a {\nfrom {\r\n    stroke-dasharray: 0 800;\n}\nto {\r\n    stroke-dasharray: 800 800;\n}\n}\n.logo[data-v-8a32779a] {\r\n  fill: none;\r\n  stroke: #333;\r\n  stroke-width: 5;\r\n  animation: logo-8a32779a 10s linear forwards;\n}\n@keyframes logo-8a32779a {\n0% {\r\n    fill: white;\r\n    stroke: #333;\r\n    stroke-dasharray: 6024;\r\n    stroke-dashoffset: 6024;\n}\n50% {\r\n    fill: white;\r\n    stroke: #333;\r\n    stroke-dasharray: 6024;\r\n    stroke-dashoffset: 0;\n}\n75% {\r\n    fill: red;\n}\n100% {\r\n    fill: blue;\n}\n}\n.line[data-v-8a32779a] {\r\n  stroke-dasharray: 400;\r\n  stroke-dashoffset: 400;\r\n  transition: stroke-dashoffset 0.5s ease;\n}\n.line-container[data-v-8a32779a] {\n&[data-v-8a32779a]:hover {\n.line[data-v-8a32779a] {\r\n      stroke-dashoffset: 0;\n}\n}\n}\n.bg_333[data-v-8a32779a]{\r\n  background-color: #333;\n}\r\n";
styleInject(css_248z$3);

script$3.render = render$3;
script$3.__scopeId = "data-v-8a32779a";
script$3.__file = "src/components/SvgAnimation/index.vue";

function SvgAnimation (Vue) {
  Vue.component(script$3.name, script$3);
}

var script$2 = {
  name: "LoadingComp",
  props: {
    width: {
      type: [Number, String],
      "default": 50
    },
    height: {
      type: [Number, String],
      "default": 50
    },
    outsideColor: {
      type: String,
      "default": "#3be6cb"
    },
    insideColor: {
      type: String,
      "default": "#02bcfe"
    },
    duration: {
      type: [Number, String],
      "default": 2
    }
  },
  setup: function setup(props) {
    var outsideColorAnimation = computed(function () {
      return "".concat(props.outsideColor, ";").concat(props.insideColor, ";").concat(props.outsideColor);
    });
    var insideColorAnimation = computed(function () {
      return "".concat(props.insideColor, ";").concat(props.outsideColor, ";").concat(props.insideColor, ";");
    });
    return {
      outsideColorAnimation: outsideColorAnimation,
      insideColorAnimation: insideColorAnimation
    };
  }
};

var _withId$1 = /*#__PURE__*/withScopeId("data-v-7069bebf");

pushScopeId("data-v-7069bebf");

var _hoisted_1$1 = {
  "class": "loading_wrap"
};
var _hoisted_2 = {
  "class": "loading_content"
};

popScopeId();

var render$2 = /*#__PURE__*/_withId$1(function (_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", _hoisted_1$1, [(openBlock(), createBlock("svg", {
    width: $props.width,
    height: $props.height,
    viewBox: "0 0 50 50",
    preserveAspectRatio: "xMidYMid meet"
  }, [createCommentVNode(" stroke-dasharry= 2πr / 4 "), createVNode("circle", {
    cx: "25",
    cy: "25",
    r: "22",
    fill: "none",
    "stroke-width": "3",
    stroke: $props.outsideColor,
    "stroke-dasharray": "34",
    "stroke-linecap": "round"
  }, [createVNode("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    values: "0 25 25;360 25 25",
    dur: "".concat($props.duration, "s"),
    repeatCount: "indefinite"
  }, null, 8
  /* PROPS */
  , ["dur"]), createVNode("animate", {
    attributeName: "stroke",
    values: $setup.outsideColorAnimation,
    dur: "".concat(+$props.duration * 2, "s"),
    repeatCount: "indefinite"
  }, null, 8
  /* PROPS */
  , ["values", "dur"])], 8
  /* PROPS */
  , ["stroke"]), createVNode("circle", {
    cx: "25",
    cy: "25",
    r: "12",
    fill: "none",
    "stroke-width": "3",
    stroke: $props.insideColor,
    "stroke-dasharray": "19",
    "stroke-linecap": "round"
  }, [createVNode("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "360 25 25",
    to: "0 25 25",
    dur: "".concat($props.duration, "s"),
    repeatCount: "indefinite"
  }, null, 8
  /* PROPS */
  , ["dur"]), createVNode("animate", {
    attributeName: "stroke",
    values: $setup.insideColorAnimation,
    dur: "".concat(+$props.duration * 2, "s"),
    repeatCount: "indefinite"
  }, null, 8
  /* PROPS */
  , ["values", "dur"])], 8
  /* PROPS */
  , ["stroke"])], 8
  /* PROPS */
  , ["width", "height"])), createVNode("div", _hoisted_2, [renderSlot(_ctx.$slots, "default")])]);
});

var css_248z$2 = "\n.loading_wrap[data-v-7069bebf] {\nsvg[data-v-7069bebf] {\r\n    border: 1px solid #333;\n}\n}\r\n";
styleInject(css_248z$2);

script$2.render = render$2;
script$2.__scopeId = "data-v-7069bebf";
script$2.__file = "src/components/Loading/index.vue";

function LoadingComp (Vue) {
  Vue.component(script$2.name, script$2);
}

function FlyBoxComp (Vue) {
  Vue.component(FlyBoxComp.name, FlyBoxComp);
}

var script$1 = {
  name: "ContainerComp",
  props: {
    options: Object
  },
  setup: function setup(props) {
    var refName = "ContainerWrap";
    var width = ref(0); // 可视 - 宽

    var height = ref(0); // 可视 - 高

    var originalWidth = ref(0); //视口区域 - 宽

    var originalHeight = ref(0); //视口区域 - 高

    var ready = ref(false);
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

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", {
    id: "container_wrap",
    ref: $setup.refName
  }, [$setup.ready ? renderSlot(_ctx.$slots, "default", {
    key: 0
  }) : createCommentVNode("v-if", true)], 512
  /* NEED_PATCH */
  );
}

var css_248z$1 = "\n#container_wrap {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  overflow: hidden;\r\n  transform-origin: left top;\r\n  z-index: 999;\n}\r\n";
styleInject(css_248z$1);

script$1.render = render$1;
script$1.__file = "src/components/ContainerComp/index.vue";

function ContainerComp (Vue) {
  Vue.component(script$1.name, script$1);
}

var script = {
  name: "VueEcharts",
  props: {
    options: Object,
    theme: [String, Object]
  },
  setup: function setup(props) {
    var dom, chart;
    watch(function () {
      props.options;
    }, function (val) {
      initChart();
    }, {
      deep: true
    });

    var initChart = function initChart() {
      if (!chart) {
        dom = document.getElementsByClassName("echarts")[0];
        chart = Echarts.init(dom, props.theme);
      }

      chart.setOption(props.options);
    };

    onMounted$1(function () {
      initChart();
    });
    return {};
  }
};

var _withId = /*#__PURE__*/withScopeId("data-v-fbf17772");

pushScopeId("data-v-fbf17772");

var _hoisted_1 = {
  "class": "echarts"
};

popScopeId();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", _hoisted_1);
});

var css_248z = "\n.echarts[data-v-fbf17772] {\r\n  width: 100%;\r\n  height: 100%;\n}\r\n";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-fbf17772";
script.__file = "src/components/VueEcharts/index.vue";

function VueEcharts (Vue) {
  Vue.component(script.name, script);
}

/* ----------------------------------------------------------------------*/
function index (Vue) {
  Vue.use(Test);
  Vue.use(TestComp);
  Vue.use(Icon);
  Vue.use(SvgAnimation);
  Vue.use(LoadingComp);
  Vue.use(FlyBoxComp);
  Vue.use(ContainerComp);
  Vue.use(VueEcharts);
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
