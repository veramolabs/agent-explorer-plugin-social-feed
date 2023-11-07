var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// external-global-plugin:react
var require_react = __commonJS({
  "external-global-plugin:react"(exports, module) {
    module.exports = window.React;
  }
});

// node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js
var require_classnames = __commonJS({
  "node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"(exports, module) {
    (function() {
      "use strict";
      var hasOwn = {}.hasOwnProperty;
      var nativeCodeString = "[native code]";
      function classNames2() {
        var classes = [];
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (!arg)
            continue;
          var argType = typeof arg;
          if (argType === "string" || argType === "number") {
            classes.push(arg);
          } else if (Array.isArray(arg)) {
            if (arg.length) {
              var inner = classNames2.apply(null, arg);
              if (inner) {
                classes.push(inner);
              }
            }
          } else if (argType === "object") {
            if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
              classes.push(arg.toString());
              continue;
            }
            for (var key in arg) {
              if (hasOwn.call(arg, key) && arg[key]) {
                classes.push(key);
              }
            }
          }
        }
        return classes.join(" ");
      }
      if (typeof module !== "undefined" && module.exports) {
        classNames2.default = classNames2;
        module.exports = classNames2;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames2;
        });
      } else {
        window.classNames = classNames2;
      }
    })();
  }
});

// node_modules/.pnpm/lodash.camelcase@4.3.0/node_modules/lodash.camelcase/index.js
var require_lodash = __commonJS({
  "node_modules/.pnpm/lodash.camelcase@4.3.0/node_modules/lodash.camelcase/index.js"(exports, module) {
    var INFINITY = 1 / 0;
    var symbolTag = "[object Symbol]";
    var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
    var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
    var rsAstralRange = "\\ud800-\\udfff";
    var rsComboMarksRange = "\\u0300-\\u036f\\ufe20-\\ufe23";
    var rsComboSymbolsRange = "\\u20d0-\\u20f0";
    var rsDingbatRange = "\\u2700-\\u27bf";
    var rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff";
    var rsMathOpRange = "\\xac\\xb1\\xd7\\xf7";
    var rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf";
    var rsPunctuationRange = "\\u2000-\\u206f";
    var rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000";
    var rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde";
    var rsVarRange = "\\ufe0e\\ufe0f";
    var rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
    var rsApos = "['\u2019]";
    var rsAstral = "[" + rsAstralRange + "]";
    var rsBreak = "[" + rsBreakRange + "]";
    var rsCombo = "[" + rsComboMarksRange + rsComboSymbolsRange + "]";
    var rsDigits = "\\d+";
    var rsDingbat = "[" + rsDingbatRange + "]";
    var rsLower = "[" + rsLowerRange + "]";
    var rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]";
    var rsFitz = "\\ud83c[\\udffb-\\udfff]";
    var rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")";
    var rsNonAstral = "[^" + rsAstralRange + "]";
    var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
    var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
    var rsUpper = "[" + rsUpperRange + "]";
    var rsZWJ = "\\u200d";
    var rsLowerMisc = "(?:" + rsLower + "|" + rsMisc + ")";
    var rsUpperMisc = "(?:" + rsUpper + "|" + rsMisc + ")";
    var rsOptLowerContr = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?";
    var rsOptUpperContr = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?";
    var reOptMod = rsModifier + "?";
    var rsOptVar = "[" + rsVarRange + "]?";
    var rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*";
    var rsSeq = rsOptVar + reOptMod + rsOptJoin;
    var rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq;
    var rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
    var reApos = RegExp(rsApos, "g");
    var reComboMark = RegExp(rsCombo, "g");
    var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
    var reUnicodeWord = RegExp([
      rsUpper + "?" + rsLower + "+" + rsOptLowerContr + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
      rsUpperMisc + "+" + rsOptUpperContr + "(?=" + [rsBreak, rsUpper + rsLowerMisc, "$"].join("|") + ")",
      rsUpper + "?" + rsLowerMisc + "+" + rsOptLowerContr,
      rsUpper + "+" + rsOptUpperContr,
      rsDigits,
      rsEmoji
    ].join("|"), "g");
    var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + "]");
    var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
    var deburredLetters = {
      // Latin-1 Supplement block.
      "\xC0": "A",
      "\xC1": "A",
      "\xC2": "A",
      "\xC3": "A",
      "\xC4": "A",
      "\xC5": "A",
      "\xE0": "a",
      "\xE1": "a",
      "\xE2": "a",
      "\xE3": "a",
      "\xE4": "a",
      "\xE5": "a",
      "\xC7": "C",
      "\xE7": "c",
      "\xD0": "D",
      "\xF0": "d",
      "\xC8": "E",
      "\xC9": "E",
      "\xCA": "E",
      "\xCB": "E",
      "\xE8": "e",
      "\xE9": "e",
      "\xEA": "e",
      "\xEB": "e",
      "\xCC": "I",
      "\xCD": "I",
      "\xCE": "I",
      "\xCF": "I",
      "\xEC": "i",
      "\xED": "i",
      "\xEE": "i",
      "\xEF": "i",
      "\xD1": "N",
      "\xF1": "n",
      "\xD2": "O",
      "\xD3": "O",
      "\xD4": "O",
      "\xD5": "O",
      "\xD6": "O",
      "\xD8": "O",
      "\xF2": "o",
      "\xF3": "o",
      "\xF4": "o",
      "\xF5": "o",
      "\xF6": "o",
      "\xF8": "o",
      "\xD9": "U",
      "\xDA": "U",
      "\xDB": "U",
      "\xDC": "U",
      "\xF9": "u",
      "\xFA": "u",
      "\xFB": "u",
      "\xFC": "u",
      "\xDD": "Y",
      "\xFD": "y",
      "\xFF": "y",
      "\xC6": "Ae",
      "\xE6": "ae",
      "\xDE": "Th",
      "\xFE": "th",
      "\xDF": "ss",
      // Latin Extended-A block.
      "\u0100": "A",
      "\u0102": "A",
      "\u0104": "A",
      "\u0101": "a",
      "\u0103": "a",
      "\u0105": "a",
      "\u0106": "C",
      "\u0108": "C",
      "\u010A": "C",
      "\u010C": "C",
      "\u0107": "c",
      "\u0109": "c",
      "\u010B": "c",
      "\u010D": "c",
      "\u010E": "D",
      "\u0110": "D",
      "\u010F": "d",
      "\u0111": "d",
      "\u0112": "E",
      "\u0114": "E",
      "\u0116": "E",
      "\u0118": "E",
      "\u011A": "E",
      "\u0113": "e",
      "\u0115": "e",
      "\u0117": "e",
      "\u0119": "e",
      "\u011B": "e",
      "\u011C": "G",
      "\u011E": "G",
      "\u0120": "G",
      "\u0122": "G",
      "\u011D": "g",
      "\u011F": "g",
      "\u0121": "g",
      "\u0123": "g",
      "\u0124": "H",
      "\u0126": "H",
      "\u0125": "h",
      "\u0127": "h",
      "\u0128": "I",
      "\u012A": "I",
      "\u012C": "I",
      "\u012E": "I",
      "\u0130": "I",
      "\u0129": "i",
      "\u012B": "i",
      "\u012D": "i",
      "\u012F": "i",
      "\u0131": "i",
      "\u0134": "J",
      "\u0135": "j",
      "\u0136": "K",
      "\u0137": "k",
      "\u0138": "k",
      "\u0139": "L",
      "\u013B": "L",
      "\u013D": "L",
      "\u013F": "L",
      "\u0141": "L",
      "\u013A": "l",
      "\u013C": "l",
      "\u013E": "l",
      "\u0140": "l",
      "\u0142": "l",
      "\u0143": "N",
      "\u0145": "N",
      "\u0147": "N",
      "\u014A": "N",
      "\u0144": "n",
      "\u0146": "n",
      "\u0148": "n",
      "\u014B": "n",
      "\u014C": "O",
      "\u014E": "O",
      "\u0150": "O",
      "\u014D": "o",
      "\u014F": "o",
      "\u0151": "o",
      "\u0154": "R",
      "\u0156": "R",
      "\u0158": "R",
      "\u0155": "r",
      "\u0157": "r",
      "\u0159": "r",
      "\u015A": "S",
      "\u015C": "S",
      "\u015E": "S",
      "\u0160": "S",
      "\u015B": "s",
      "\u015D": "s",
      "\u015F": "s",
      "\u0161": "s",
      "\u0162": "T",
      "\u0164": "T",
      "\u0166": "T",
      "\u0163": "t",
      "\u0165": "t",
      "\u0167": "t",
      "\u0168": "U",
      "\u016A": "U",
      "\u016C": "U",
      "\u016E": "U",
      "\u0170": "U",
      "\u0172": "U",
      "\u0169": "u",
      "\u016B": "u",
      "\u016D": "u",
      "\u016F": "u",
      "\u0171": "u",
      "\u0173": "u",
      "\u0174": "W",
      "\u0175": "w",
      "\u0176": "Y",
      "\u0177": "y",
      "\u0178": "Y",
      "\u0179": "Z",
      "\u017B": "Z",
      "\u017D": "Z",
      "\u017A": "z",
      "\u017C": "z",
      "\u017E": "z",
      "\u0132": "IJ",
      "\u0133": "ij",
      "\u0152": "Oe",
      "\u0153": "oe",
      "\u0149": "'n",
      "\u017F": "ss"
    };
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    function arrayReduce(array, iteratee, accumulator, initAccum) {
      var index2 = -1, length = array ? array.length : 0;
      if (initAccum && length) {
        accumulator = array[++index2];
      }
      while (++index2 < length) {
        accumulator = iteratee(accumulator, array[index2], index2, array);
      }
      return accumulator;
    }
    function asciiToArray(string) {
      return string.split("");
    }
    function asciiWords(string) {
      return string.match(reAsciiWord) || [];
    }
    function basePropertyOf(object) {
      return function(key) {
        return object == null ? void 0 : object[key];
      };
    }
    var deburrLetter = basePropertyOf(deburredLetters);
    function hasUnicode(string) {
      return reHasUnicode.test(string);
    }
    function hasUnicodeWord(string) {
      return reHasUnicodeWord.test(string);
    }
    function stringToArray(string) {
      return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
    }
    function unicodeToArray(string) {
      return string.match(reUnicode) || [];
    }
    function unicodeWords(string) {
      return string.match(reUnicodeWord) || [];
    }
    var objectProto = Object.prototype;
    var objectToString = objectProto.toString;
    var Symbol2 = root.Symbol;
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolToString = symbolProto ? symbolProto.toString : void 0;
    function baseSlice(array, start, end) {
      var index2 = -1, length = array.length;
      if (start < 0) {
        start = -start > length ? 0 : length + start;
      }
      end = end > length ? length : end;
      if (end < 0) {
        end += length;
      }
      length = start > end ? 0 : end - start >>> 0;
      start >>>= 0;
      var result = Array(length);
      while (++index2 < length) {
        result[index2] = array[index2 + start];
      }
      return result;
    }
    function baseToString(value) {
      if (typeof value == "string") {
        return value;
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : "";
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    function castSlice(array, start, end) {
      var length = array.length;
      end = end === void 0 ? length : end;
      return !start && end >= length ? array : baseSlice(array, start, end);
    }
    function createCaseFirst(methodName) {
      return function(string) {
        string = toString(string);
        var strSymbols = hasUnicode(string) ? stringToArray(string) : void 0;
        var chr = strSymbols ? strSymbols[0] : string.charAt(0);
        var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
        return chr[methodName]() + trailing;
      };
    }
    function createCompounder(callback) {
      return function(string) {
        return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
      };
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
    function toString(value) {
      return value == null ? "" : baseToString(value);
    }
    var camelCase2 = createCompounder(function(result, word, index2) {
      word = word.toLowerCase();
      return result + (index2 ? capitalize(word) : word);
    });
    function capitalize(string) {
      return upperFirst(toString(string).toLowerCase());
    }
    function deburr(string) {
      string = toString(string);
      return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
    }
    var upperFirst = createCaseFirst("toUpperCase");
    function words(string, pattern, guard) {
      string = toString(string);
      pattern = guard ? void 0 : pattern;
      if (pattern === void 0) {
        return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
      }
      return string.match(pattern) || [];
    }
    module.exports = camelCase2;
  }
});

// external-global-plugin:react-router-dom
var require_react_router_dom = __commonJS({
  "external-global-plugin:react-router-dom"(exports, module) {
    module.exports = window.reactrouterdom;
  }
});

// external-global-plugin:react-query
var require_react_query = __commonJS({
  "external-global-plugin:react-query"(exports, module) {
    module.exports = window.reactquery;
  }
});

// external-global-plugin:@veramo-community/veramo-react
var require_veramo_react = __commonJS({
  "external-global-plugin:@veramo-community/veramo-react"(exports, module) {
    module.exports = window.veramoreact;
  }
});

// external-global-plugin:@ant-design/pro-components
var require_pro_components = __commonJS({
  "external-global-plugin:@ant-design/pro-components"(exports, module) {
    module.exports = window.antdPro;
  }
});

// external-global-plugin:antd
var require_antd = __commonJS({
  "external-global-plugin:antd"(exports, module) {
    module.exports = window.antd;
  }
});

// external-global-plugin:@veramo-community/agent-explorer-plugin
var require_agent_explorer_plugin = __commonJS({
  "external-global-plugin:@veramo-community/agent-explorer-plugin"(exports, module) {
    module.exports = window.agentexplorerplugin;
  }
});

// external-global-plugin:uuid
var require_uuid = __commonJS({
  "external-global-plugin:uuid"(exports, module) {
    module.exports = window.uuid;
  }
});

// external-global-plugin:react/jsx-runtime
var require_jsx_runtime = __commonJS({
  "external-global-plugin:react/jsx-runtime"(exports, module) {
    module.exports = window.reactjsxruntime;
  }
});

// node_modules/.pnpm/@ant-design+icons@5.2.5_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/components/Context.js
var import_react = __toESM(require_react());
var IconContext = /* @__PURE__ */ (0, import_react.createContext)({});
var Context_default = IconContext;

// node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

// node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}

// node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(r, l2) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l2) {
        if (Object(t) !== t)
          return;
        f = false;
      } else
        for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l2); f = true)
          ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n;
      }
    }
    return a;
  }
}

// node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}

// node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

// node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/slicedToArray.js
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

// node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}

// node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

// node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}

// node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

// node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}

// node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}

// node_modules/.pnpm/@ant-design+icons@5.2.5_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/components/AntdIcon.js
var React3 = __toESM(require_react());
var import_classnames = __toESM(require_classnames());

// node_modules/.pnpm/@ctrl+tinycolor@3.6.1/node_modules/@ctrl/tinycolor/dist/module/util.js
function bound01(n, max) {
  if (isOnePointZero(n)) {
    n = "100%";
  }
  var isPercent = isPercentage(n);
  n = max === 360 ? n : Math.min(max, Math.max(0, parseFloat(n)));
  if (isPercent) {
    n = parseInt(String(n * max), 10) / 100;
  }
  if (Math.abs(n - max) < 1e-6) {
    return 1;
  }
  if (max === 360) {
    n = (n < 0 ? n % max + max : n % max) / parseFloat(String(max));
  } else {
    n = n % max / parseFloat(String(max));
  }
  return n;
}
function isOnePointZero(n) {
  return typeof n === "string" && n.indexOf(".") !== -1 && parseFloat(n) === 1;
}
function isPercentage(n) {
  return typeof n === "string" && n.indexOf("%") !== -1;
}
function boundAlpha(a) {
  a = parseFloat(a);
  if (isNaN(a) || a < 0 || a > 1) {
    a = 1;
  }
  return a;
}
function convertToPercentage(n) {
  if (n <= 1) {
    return "".concat(Number(n) * 100, "%");
  }
  return n;
}
function pad2(c) {
  return c.length === 1 ? "0" + c : String(c);
}

// node_modules/.pnpm/@ctrl+tinycolor@3.6.1/node_modules/@ctrl/tinycolor/dist/module/conversion.js
function rgbToRgb(r, g, b2) {
  return {
    r: bound01(r, 255) * 255,
    g: bound01(g, 255) * 255,
    b: bound01(b2, 255) * 255
  };
}
function hue2rgb(p, q, t) {
  if (t < 0) {
    t += 1;
  }
  if (t > 1) {
    t -= 1;
  }
  if (t < 1 / 6) {
    return p + (q - p) * (6 * t);
  }
  if (t < 1 / 2) {
    return q;
  }
  if (t < 2 / 3) {
    return p + (q - p) * (2 / 3 - t) * 6;
  }
  return p;
}
function hslToRgb(h2, s, l2) {
  var r;
  var g;
  var b2;
  h2 = bound01(h2, 360);
  s = bound01(s, 100);
  l2 = bound01(l2, 100);
  if (s === 0) {
    g = l2;
    b2 = l2;
    r = l2;
  } else {
    var q = l2 < 0.5 ? l2 * (1 + s) : l2 + s - l2 * s;
    var p = 2 * l2 - q;
    r = hue2rgb(p, q, h2 + 1 / 3);
    g = hue2rgb(p, q, h2);
    b2 = hue2rgb(p, q, h2 - 1 / 3);
  }
  return { r: r * 255, g: g * 255, b: b2 * 255 };
}
function rgbToHsv(r, g, b2) {
  r = bound01(r, 255);
  g = bound01(g, 255);
  b2 = bound01(b2, 255);
  var max = Math.max(r, g, b2);
  var min = Math.min(r, g, b2);
  var h2 = 0;
  var v2 = max;
  var d = max - min;
  var s = max === 0 ? 0 : d / max;
  if (max === min) {
    h2 = 0;
  } else {
    switch (max) {
      case r:
        h2 = (g - b2) / d + (g < b2 ? 6 : 0);
        break;
      case g:
        h2 = (b2 - r) / d + 2;
        break;
      case b2:
        h2 = (r - g) / d + 4;
        break;
      default:
        break;
    }
    h2 /= 6;
  }
  return { h: h2, s, v: v2 };
}
function hsvToRgb(h2, s, v2) {
  h2 = bound01(h2, 360) * 6;
  s = bound01(s, 100);
  v2 = bound01(v2, 100);
  var i = Math.floor(h2);
  var f = h2 - i;
  var p = v2 * (1 - s);
  var q = v2 * (1 - f * s);
  var t = v2 * (1 - (1 - f) * s);
  var mod = i % 6;
  var r = [v2, q, p, p, t, v2][mod];
  var g = [t, v2, v2, q, p, p][mod];
  var b2 = [p, p, t, v2, v2, q][mod];
  return { r: r * 255, g: g * 255, b: b2 * 255 };
}
function rgbToHex(r, g, b2, allow3Char) {
  var hex = [
    pad2(Math.round(r).toString(16)),
    pad2(Math.round(g).toString(16)),
    pad2(Math.round(b2).toString(16))
  ];
  if (allow3Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1))) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
  }
  return hex.join("");
}
function convertHexToDecimal(h2) {
  return parseIntFromHex(h2) / 255;
}
function parseIntFromHex(val) {
  return parseInt(val, 16);
}

// node_modules/.pnpm/@ctrl+tinycolor@3.6.1/node_modules/@ctrl/tinycolor/dist/module/css-color-names.js
var names = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};

// node_modules/.pnpm/@ctrl+tinycolor@3.6.1/node_modules/@ctrl/tinycolor/dist/module/format-input.js
function inputToRGB(color) {
  var rgb = { r: 0, g: 0, b: 0 };
  var a = 1;
  var s = null;
  var v2 = null;
  var l2 = null;
  var ok = false;
  var format = false;
  if (typeof color === "string") {
    color = stringInputToObject(color);
  }
  if (typeof color === "object") {
    if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
      rgb = rgbToRgb(color.r, color.g, color.b);
      ok = true;
      format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
      s = convertToPercentage(color.s);
      v2 = convertToPercentage(color.v);
      rgb = hsvToRgb(color.h, s, v2);
      ok = true;
      format = "hsv";
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
      s = convertToPercentage(color.s);
      l2 = convertToPercentage(color.l);
      rgb = hslToRgb(color.h, s, l2);
      ok = true;
      format = "hsl";
    }
    if (Object.prototype.hasOwnProperty.call(color, "a")) {
      a = color.a;
    }
  }
  a = boundAlpha(a);
  return {
    ok,
    format: color.format || format,
    r: Math.min(255, Math.max(rgb.r, 0)),
    g: Math.min(255, Math.max(rgb.g, 0)),
    b: Math.min(255, Math.max(rgb.b, 0)),
    a
  };
}
var CSS_INTEGER = "[-\\+]?\\d+%?";
var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
var CSS_UNIT = "(?:".concat(CSS_NUMBER, ")|(?:").concat(CSS_INTEGER, ")");
var PERMISSIVE_MATCH3 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var PERMISSIVE_MATCH4 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var matchers = {
  CSS_UNIT: new RegExp(CSS_UNIT),
  rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
  rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
  hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
  hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
  hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
  hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function stringInputToObject(color) {
  color = color.trim().toLowerCase();
  if (color.length === 0) {
    return false;
  }
  var named = false;
  if (names[color]) {
    color = names[color];
    named = true;
  } else if (color === "transparent") {
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  }
  var match = matchers.rgb.exec(color);
  if (match) {
    return { r: match[1], g: match[2], b: match[3] };
  }
  match = matchers.rgba.exec(color);
  if (match) {
    return { r: match[1], g: match[2], b: match[3], a: match[4] };
  }
  match = matchers.hsl.exec(color);
  if (match) {
    return { h: match[1], s: match[2], l: match[3] };
  }
  match = matchers.hsla.exec(color);
  if (match) {
    return { h: match[1], s: match[2], l: match[3], a: match[4] };
  }
  match = matchers.hsv.exec(color);
  if (match) {
    return { h: match[1], s: match[2], v: match[3] };
  }
  match = matchers.hsva.exec(color);
  if (match) {
    return { h: match[1], s: match[2], v: match[3], a: match[4] };
  }
  match = matchers.hex8.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      a: convertHexToDecimal(match[4]),
      format: named ? "name" : "hex8"
    };
  }
  match = matchers.hex6.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      format: named ? "name" : "hex"
    };
  }
  match = matchers.hex4.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
      a: convertHexToDecimal(match[4] + match[4]),
      format: named ? "name" : "hex8"
    };
  }
  match = matchers.hex3.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
      format: named ? "name" : "hex"
    };
  }
  return false;
}
function isValidCSSUnit(color) {
  return Boolean(matchers.CSS_UNIT.exec(String(color)));
}

// node_modules/.pnpm/@ant-design+colors@7.0.0/node_modules/@ant-design/colors/es/generate.js
var hueStep = 2;
var saturationStep = 0.16;
var saturationStep2 = 0.05;
var brightnessStep1 = 0.05;
var brightnessStep2 = 0.15;
var lightColorCount = 5;
var darkColorCount = 4;
var darkColorMap = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];
function toHsv(_ref) {
  var r = _ref.r, g = _ref.g, b2 = _ref.b;
  var hsv = rgbToHsv(r, g, b2);
  return {
    h: hsv.h * 360,
    s: hsv.s,
    v: hsv.v
  };
}
function toHex(_ref2) {
  var r = _ref2.r, g = _ref2.g, b2 = _ref2.b;
  return "#".concat(rgbToHex(r, g, b2, false));
}
function mix(rgb1, rgb2, amount) {
  var p = amount / 100;
  var rgb = {
    r: (rgb2.r - rgb1.r) * p + rgb1.r,
    g: (rgb2.g - rgb1.g) * p + rgb1.g,
    b: (rgb2.b - rgb1.b) * p + rgb1.b
  };
  return rgb;
}
function getHue(hsv, i, light) {
  var hue;
  if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
    hue = light ? Math.round(hsv.h) - hueStep * i : Math.round(hsv.h) + hueStep * i;
  } else {
    hue = light ? Math.round(hsv.h) + hueStep * i : Math.round(hsv.h) - hueStep * i;
  }
  if (hue < 0) {
    hue += 360;
  } else if (hue >= 360) {
    hue -= 360;
  }
  return hue;
}
function getSaturation(hsv, i, light) {
  if (hsv.h === 0 && hsv.s === 0) {
    return hsv.s;
  }
  var saturation;
  if (light) {
    saturation = hsv.s - saturationStep * i;
  } else if (i === darkColorCount) {
    saturation = hsv.s + saturationStep;
  } else {
    saturation = hsv.s + saturationStep2 * i;
  }
  if (saturation > 1) {
    saturation = 1;
  }
  if (light && i === lightColorCount && saturation > 0.1) {
    saturation = 0.1;
  }
  if (saturation < 0.06) {
    saturation = 0.06;
  }
  return Number(saturation.toFixed(2));
}
function getValue(hsv, i, light) {
  var value;
  if (light) {
    value = hsv.v + brightnessStep1 * i;
  } else {
    value = hsv.v - brightnessStep2 * i;
  }
  if (value > 1) {
    value = 1;
  }
  return Number(value.toFixed(2));
}
function generate(color) {
  var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var patterns = [];
  var pColor = inputToRGB(color);
  for (var i = lightColorCount; i > 0; i -= 1) {
    var hsv = toHsv(pColor);
    var colorString = toHex(inputToRGB({
      h: getHue(hsv, i, true),
      s: getSaturation(hsv, i, true),
      v: getValue(hsv, i, true)
    }));
    patterns.push(colorString);
  }
  patterns.push(toHex(pColor));
  for (var _i = 1; _i <= darkColorCount; _i += 1) {
    var _hsv = toHsv(pColor);
    var _colorString = toHex(inputToRGB({
      h: getHue(_hsv, _i),
      s: getSaturation(_hsv, _i),
      v: getValue(_hsv, _i)
    }));
    patterns.push(_colorString);
  }
  if (opts.theme === "dark") {
    return darkColorMap.map(function(_ref3) {
      var index2 = _ref3.index, opacity = _ref3.opacity;
      var darkColorString = toHex(mix(inputToRGB(opts.backgroundColor || "#141414"), inputToRGB(patterns[index2]), opacity * 100));
      return darkColorString;
    });
  }
  return patterns;
}

// node_modules/.pnpm/@ant-design+colors@7.0.0/node_modules/@ant-design/colors/es/index.js
var presetPrimaryColors = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1677FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
};
var presetPalettes = {};
var presetDarkPalettes = {};
Object.keys(presetPrimaryColors).forEach(function(key) {
  presetPalettes[key] = generate(presetPrimaryColors[key]);
  presetPalettes[key].primary = presetPalettes[key][5];
  presetDarkPalettes[key] = generate(presetPrimaryColors[key], {
    theme: "dark",
    backgroundColor: "#141414"
  });
  presetDarkPalettes[key].primary = presetDarkPalettes[key][5];
});
var red = presetPalettes.red;
var volcano = presetPalettes.volcano;
var gold = presetPalettes.gold;
var orange = presetPalettes.orange;
var yellow = presetPalettes.yellow;
var lime = presetPalettes.lime;
var green = presetPalettes.green;
var cyan = presetPalettes.cyan;
var blue = presetPalettes.blue;
var geekblue = presetPalettes.geekblue;
var purple = presetPalettes.purple;
var magenta = presetPalettes.magenta;
var grey = presetPalettes.grey;
var gray = presetPalettes.grey;

// node_modules/.pnpm/@babel+runtime@7.22.15/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}

// node_modules/.pnpm/@ant-design+icons@5.2.5_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/components/IconBase.js
var React2 = __toESM(require_react());

// node_modules/.pnpm/@ant-design+icons@5.2.5_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/utils.js
var import_lodash = __toESM(require_lodash());

// node_modules/.pnpm/rc-util@5.37.0_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/Dom/canUseDom.js
function canUseDom() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}

// node_modules/.pnpm/rc-util@5.37.0_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/Dom/contains.js
function contains(root, n) {
  if (!root) {
    return false;
  }
  if (root.contains) {
    return root.contains(n);
  }
  var node = n;
  while (node) {
    if (node === root) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}

// node_modules/.pnpm/rc-util@5.37.0_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/Dom/dynamicCSS.js
var APPEND_ORDER = "data-rc-order";
var APPEND_PRIORITY = "data-rc-priority";
var MARK_KEY = "rc-util-key";
var containerCache = /* @__PURE__ */ new Map();
function getMark() {
  var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, mark = _ref.mark;
  if (mark) {
    return mark.startsWith("data-") ? mark : "data-".concat(mark);
  }
  return MARK_KEY;
}
function getContainer(option) {
  if (option.attachTo) {
    return option.attachTo;
  }
  var head = document.querySelector("head");
  return head || document.body;
}
function getOrder(prepend) {
  if (prepend === "queue") {
    return "prependQueue";
  }
  return prepend ? "prepend" : "append";
}
function findStyles(container) {
  return Array.from((containerCache.get(container) || container).children).filter(function(node) {
    return node.tagName === "STYLE";
  });
}
function injectCSS(css) {
  var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!canUseDom()) {
    return null;
  }
  var csp = option.csp, prepend = option.prepend, _option$priority = option.priority, priority = _option$priority === void 0 ? 0 : _option$priority;
  var mergedOrder = getOrder(prepend);
  var isPrependQueue = mergedOrder === "prependQueue";
  var styleNode = document.createElement("style");
  styleNode.setAttribute(APPEND_ORDER, mergedOrder);
  if (isPrependQueue && priority) {
    styleNode.setAttribute(APPEND_PRIORITY, "".concat(priority));
  }
  if (csp !== null && csp !== void 0 && csp.nonce) {
    styleNode.nonce = csp === null || csp === void 0 ? void 0 : csp.nonce;
  }
  styleNode.innerHTML = css;
  var container = getContainer(option);
  var firstChild = container.firstChild;
  if (prepend) {
    if (isPrependQueue) {
      var existStyle = findStyles(container).filter(function(node) {
        if (!["prepend", "prependQueue"].includes(node.getAttribute(APPEND_ORDER))) {
          return false;
        }
        var nodePriority = Number(node.getAttribute(APPEND_PRIORITY) || 0);
        return priority >= nodePriority;
      });
      if (existStyle.length) {
        container.insertBefore(styleNode, existStyle[existStyle.length - 1].nextSibling);
        return styleNode;
      }
    }
    container.insertBefore(styleNode, firstChild);
  } else {
    container.appendChild(styleNode);
  }
  return styleNode;
}
function findExistNode(key) {
  var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var container = getContainer(option);
  return findStyles(container).find(function(node) {
    return node.getAttribute(getMark(option)) === key;
  });
}
function syncRealContainer(container, option) {
  var cachedRealContainer = containerCache.get(container);
  if (!cachedRealContainer || !contains(document, cachedRealContainer)) {
    var placeholderStyle = injectCSS("", option);
    var parentNode = placeholderStyle.parentNode;
    containerCache.set(container, parentNode);
    container.removeChild(placeholderStyle);
  }
}
function updateCSS(css, key) {
  var option = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var container = getContainer(option);
  syncRealContainer(container, option);
  var existNode = findExistNode(key, option);
  if (existNode) {
    var _option$csp, _option$csp2;
    if ((_option$csp = option.csp) !== null && _option$csp !== void 0 && _option$csp.nonce && existNode.nonce !== ((_option$csp2 = option.csp) === null || _option$csp2 === void 0 ? void 0 : _option$csp2.nonce)) {
      var _option$csp3;
      existNode.nonce = (_option$csp3 = option.csp) === null || _option$csp3 === void 0 ? void 0 : _option$csp3.nonce;
    }
    if (existNode.innerHTML !== css) {
      existNode.innerHTML = css;
    }
    return existNode;
  }
  var newNode = injectCSS(css, option);
  newNode.setAttribute(getMark(option), key);
  return newNode;
}

// node_modules/.pnpm/rc-util@5.37.0_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/Dom/shadow.js
function getRoot(ele) {
  var _ele$getRootNode;
  return ele === null || ele === void 0 ? void 0 : (_ele$getRootNode = ele.getRootNode) === null || _ele$getRootNode === void 0 ? void 0 : _ele$getRootNode.call(ele);
}
function inShadow(ele) {
  return getRoot(ele) instanceof ShadowRoot;
}
function getShadowRoot(ele) {
  return inShadow(ele) ? getRoot(ele) : null;
}

// node_modules/.pnpm/rc-util@5.37.0_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/warning.js
var warned = {};
var preWarningFns = [];
var preMessage = function preMessage2(fn) {
  preWarningFns.push(fn);
};
function warning(valid, message) {
  if (!valid && console !== void 0) {
    var finalMessage = preWarningFns.reduce(function(msg, preMessageFn) {
      return preMessageFn(msg !== null && msg !== void 0 ? msg : "", "warning");
    }, message);
    if (finalMessage) {
      console.error("Warning: ".concat(finalMessage));
    }
  }
}
function note(valid, message) {
  if (!valid && console !== void 0) {
    var finalMessage = preWarningFns.reduce(function(msg, preMessageFn) {
      return preMessageFn(msg !== null && msg !== void 0 ? msg : "", "note");
    }, message);
    if (finalMessage) {
      console.warn("Note: ".concat(finalMessage));
    }
  }
}
function resetWarned() {
  warned = {};
}
function call(method, valid, message) {
  if (!valid && !warned[message]) {
    method(false, message);
    warned[message] = true;
  }
}
function warningOnce(valid, message) {
  call(warning, valid, message);
}
function noteOnce(valid, message) {
  call(note, valid, message);
}
warningOnce.preMessage = preMessage;
warningOnce.resetWarned = resetWarned;
warningOnce.noteOnce = noteOnce;
var warning_default = warningOnce;

// node_modules/.pnpm/@ant-design+icons@5.2.5_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/utils.js
var import_react2 = __toESM(require_react());
function warning2(valid, message) {
  warning_default(valid, "[@ant-design/icons] ".concat(message));
}
function isIconDefinition(target) {
  return _typeof(target) === "object" && typeof target.name === "string" && typeof target.theme === "string" && (_typeof(target.icon) === "object" || typeof target.icon === "function");
}
function normalizeAttrs() {
  var attrs = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(attrs).reduce(function(acc, key) {
    var val = attrs[key];
    switch (key) {
      case "class":
        acc.className = val;
        delete acc.class;
        break;
      default:
        delete acc[key];
        acc[(0, import_lodash.default)(key)] = val;
    }
    return acc;
  }, {});
}
function generate2(node, key, rootProps) {
  if (!rootProps) {
    return /* @__PURE__ */ import_react2.default.createElement(node.tag, _objectSpread2({
      key
    }, normalizeAttrs(node.attrs)), (node.children || []).map(function(child, index2) {
      return generate2(child, "".concat(key, "-").concat(node.tag, "-").concat(index2));
    }));
  }
  return /* @__PURE__ */ import_react2.default.createElement(node.tag, _objectSpread2(_objectSpread2({
    key
  }, normalizeAttrs(node.attrs)), rootProps), (node.children || []).map(function(child, index2) {
    return generate2(child, "".concat(key, "-").concat(node.tag, "-").concat(index2));
  }));
}
function getSecondaryColor(primaryColor) {
  return generate(primaryColor)[0];
}
function normalizeTwoToneColors(twoToneColor) {
  if (!twoToneColor) {
    return [];
  }
  return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
}
var iconStyles = "\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
var useInsertStyles = function useInsertStyles2(eleRef) {
  var _useContext = (0, import_react2.useContext)(Context_default), csp = _useContext.csp, prefixCls = _useContext.prefixCls;
  var mergedStyleStr = iconStyles;
  if (prefixCls) {
    mergedStyleStr = mergedStyleStr.replace(/anticon/g, prefixCls);
  }
  (0, import_react2.useEffect)(function() {
    var ele = eleRef.current;
    var shadowRoot = getShadowRoot(ele);
    updateCSS(mergedStyleStr, "@ant-design-icons", {
      prepend: true,
      csp,
      attachTo: shadowRoot
    });
  }, []);
};

// node_modules/.pnpm/@ant-design+icons@5.2.5_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/components/IconBase.js
var _excluded = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"];
var twoToneColorPalette = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: false
};
function setTwoToneColors(_ref) {
  var primaryColor = _ref.primaryColor, secondaryColor = _ref.secondaryColor;
  twoToneColorPalette.primaryColor = primaryColor;
  twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
  twoToneColorPalette.calculated = !!secondaryColor;
}
function getTwoToneColors() {
  return _objectSpread2({}, twoToneColorPalette);
}
var IconBase = function IconBase2(props) {
  var icon = props.icon, className = props.className, onClick = props.onClick, style = props.style, primaryColor = props.primaryColor, secondaryColor = props.secondaryColor, restProps = _objectWithoutProperties(props, _excluded);
  var svgRef = React2.useRef();
  var colors = twoToneColorPalette;
  if (primaryColor) {
    colors = {
      primaryColor,
      secondaryColor: secondaryColor || getSecondaryColor(primaryColor)
    };
  }
  useInsertStyles(svgRef);
  warning2(isIconDefinition(icon), "icon should be icon definiton, but got ".concat(icon));
  if (!isIconDefinition(icon)) {
    return null;
  }
  var target = icon;
  if (target && typeof target.icon === "function") {
    target = _objectSpread2(_objectSpread2({}, target), {}, {
      icon: target.icon(colors.primaryColor, colors.secondaryColor)
    });
  }
  return generate2(target.icon, "svg-".concat(target.name), _objectSpread2(_objectSpread2({
    className,
    onClick,
    style,
    "data-icon": target.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, restProps), {}, {
    ref: svgRef
  }));
};
IconBase.displayName = "IconReact";
IconBase.getTwoToneColors = getTwoToneColors;
IconBase.setTwoToneColors = setTwoToneColors;
var IconBase_default = IconBase;

// node_modules/.pnpm/@ant-design+icons@5.2.5_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/components/twoTonePrimaryColor.js
function setTwoToneColor(twoToneColor) {
  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor), _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2), primaryColor = _normalizeTwoToneColo2[0], secondaryColor = _normalizeTwoToneColo2[1];
  return IconBase_default.setTwoToneColors({
    primaryColor,
    secondaryColor
  });
}
function getTwoToneColor() {
  var colors = IconBase_default.getTwoToneColors();
  if (!colors.calculated) {
    return colors.primaryColor;
  }
  return [colors.primaryColor, colors.secondaryColor];
}

// node_modules/.pnpm/@ant-design+icons@5.2.5_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/components/AntdIcon.js
var _excluded2 = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
setTwoToneColor(blue.primary);
var Icon = /* @__PURE__ */ React3.forwardRef(function(props, ref) {
  var _classNames;
  var className = props.className, icon = props.icon, spin = props.spin, rotate = props.rotate, tabIndex = props.tabIndex, onClick = props.onClick, twoToneColor = props.twoToneColor, restProps = _objectWithoutProperties(props, _excluded2);
  var _React$useContext = React3.useContext(Context_default), _React$useContext$pre = _React$useContext.prefixCls, prefixCls = _React$useContext$pre === void 0 ? "anticon" : _React$useContext$pre, rootClassName = _React$useContext.rootClassName;
  var classString = (0, import_classnames.default)(rootClassName, prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-").concat(icon.name), !!icon.name), _defineProperty(_classNames, "".concat(prefixCls, "-spin"), !!spin || icon.name === "loading"), _classNames), className);
  var iconTabIndex = tabIndex;
  if (iconTabIndex === void 0 && onClick) {
    iconTabIndex = -1;
  }
  var svgStyle = rotate ? {
    msTransform: "rotate(".concat(rotate, "deg)"),
    transform: "rotate(".concat(rotate, "deg)")
  } : void 0;
  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor), _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2), primaryColor = _normalizeTwoToneColo2[0], secondaryColor = _normalizeTwoToneColo2[1];
  return /* @__PURE__ */ React3.createElement("span", _extends({
    role: "img",
    "aria-label": icon.name
  }, restProps, {
    ref,
    tabIndex: iconTabIndex,
    onClick,
    className: classString
  }), /* @__PURE__ */ React3.createElement(IconBase_default, {
    icon,
    primaryColor,
    secondaryColor,
    style: svgStyle
  }));
});
Icon.displayName = "AntdIcon";
Icon.getTwoToneColor = getTwoToneColor;
Icon.setTwoToneColor = setTwoToneColor;
var AntdIcon_default = Icon;

// node_modules/.pnpm/@ant-design+icons@5.2.5_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/UnorderedListOutlined.js
var React4 = __toESM(require_react());

// node_modules/.pnpm/@ant-design+icons-svg@4.3.1/node_modules/@ant-design/icons-svg/es/asn/UnorderedListOutlined.js
var UnorderedListOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, "name": "unordered-list", "theme": "outlined" };
var UnorderedListOutlined_default = UnorderedListOutlined;

// node_modules/.pnpm/@ant-design+icons@5.2.5_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/UnorderedListOutlined.js
var UnorderedListOutlined2 = function UnorderedListOutlined3(props, ref) {
  return /* @__PURE__ */ React4.createElement(AntdIcon_default, _extends({}, props, {
    ref,
    icon: UnorderedListOutlined_default
  }));
};
if (true) {
  UnorderedListOutlined2.displayName = "UnorderedListOutlined";
}
var UnorderedListOutlined_default2 = /* @__PURE__ */ React4.forwardRef(UnorderedListOutlined2);

// src/Feed.tsx
var import_react17 = __toESM(require_react(), 1);
var import_react_router_dom = __toESM(require_react_router_dom(), 1);
var import_react_query3 = __toESM(require_react_query(), 1);
var import_veramo_react3 = __toESM(require_veramo_react(), 1);
var import_pro_components = __toESM(require_pro_components(), 1);
var import_antd3 = __toESM(require_antd(), 1);

// src/PostForm.tsx
var import_antd = __toESM(require_antd(), 1);
var import_react14 = __toESM(require_react(), 1);
var import_veramo_react = __toESM(require_veramo_react(), 1);
var import_react_query = __toESM(require_react_query(), 1);
var import_agent_explorer_plugin = __toESM(require_agent_explorer_plugin(), 1);

// node_modules/.pnpm/@monaco-editor+loader@1.3.3_monaco-editor@0.43.0/node_modules/@monaco-editor/loader/lib/es/_virtual/_rollupPluginBabelHelpers.js
function _defineProperty2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread22(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys2(Object(source), true).forEach(function(key) {
        _defineProperty2(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys2(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose2(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties2(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose2(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _slicedToArray2(arr, i) {
  return _arrayWithHoles2(arr) || _iterableToArrayLimit2(arr, i) || _unsupportedIterableToArray2(arr, i) || _nonIterableRest2();
}
function _arrayWithHoles2(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArrayLimit2(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = void 0;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _unsupportedIterableToArray2(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray2(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray2(o, minLen);
}
function _arrayLikeToArray2(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _nonIterableRest2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// node_modules/.pnpm/state-local@1.0.7/node_modules/state-local/lib/es/state-local.js
function _defineProperty3(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys3(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread23(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys3(Object(source), true).forEach(function(key) {
        _defineProperty3(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys3(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function compose() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }
  return function(x) {
    return fns.reduceRight(function(y, f) {
      return f(y);
    }, x);
  };
}
function curry(fn) {
  return function curried() {
    var _this = this;
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return args.length >= fn.length ? fn.apply(this, args) : function() {
      for (var _len3 = arguments.length, nextArgs = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        nextArgs[_key3] = arguments[_key3];
      }
      return curried.apply(_this, [].concat(args, nextArgs));
    };
  };
}
function isObject(value) {
  return {}.toString.call(value).includes("Object");
}
function isEmpty(obj) {
  return !Object.keys(obj).length;
}
function isFunction(value) {
  return typeof value === "function";
}
function hasOwnProperty(object, property) {
  return Object.prototype.hasOwnProperty.call(object, property);
}
function validateChanges(initial, changes) {
  if (!isObject(changes))
    errorHandler("changeType");
  if (Object.keys(changes).some(function(field) {
    return !hasOwnProperty(initial, field);
  }))
    errorHandler("changeField");
  return changes;
}
function validateSelector(selector) {
  if (!isFunction(selector))
    errorHandler("selectorType");
}
function validateHandler(handler) {
  if (!(isFunction(handler) || isObject(handler)))
    errorHandler("handlerType");
  if (isObject(handler) && Object.values(handler).some(function(_handler) {
    return !isFunction(_handler);
  }))
    errorHandler("handlersType");
}
function validateInitial(initial) {
  if (!initial)
    errorHandler("initialIsRequired");
  if (!isObject(initial))
    errorHandler("initialType");
  if (isEmpty(initial))
    errorHandler("initialContent");
}
function throwError(errorMessages3, type) {
  throw new Error(errorMessages3[type] || errorMessages3["default"]);
}
var errorMessages = {
  initialIsRequired: "initial state is required",
  initialType: "initial state should be an object",
  initialContent: "initial state shouldn't be an empty object",
  handlerType: "handler should be an object or a function",
  handlersType: "all handlers should be a functions",
  selectorType: "selector should be a function",
  changeType: "provided value of changes should be an object",
  changeField: 'it seams you want to change a field in the state which is not specified in the "initial" state',
  "default": "an unknown error accured in `state-local` package"
};
var errorHandler = curry(throwError)(errorMessages);
var validators = {
  changes: validateChanges,
  selector: validateSelector,
  handler: validateHandler,
  initial: validateInitial
};
function create(initial) {
  var handler = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  validators.initial(initial);
  validators.handler(handler);
  var state = {
    current: initial
  };
  var didUpdate = curry(didStateUpdate)(state, handler);
  var update = curry(updateState)(state);
  var validate = curry(validators.changes)(initial);
  var getChanges = curry(extractChanges)(state);
  function getState2() {
    var selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function(state2) {
      return state2;
    };
    validators.selector(selector);
    return selector(state.current);
  }
  function setState2(causedChanges) {
    compose(didUpdate, update, validate, getChanges)(causedChanges);
  }
  return [getState2, setState2];
}
function extractChanges(state, causedChanges) {
  return isFunction(causedChanges) ? causedChanges(state.current) : causedChanges;
}
function updateState(state, changes) {
  state.current = _objectSpread23(_objectSpread23({}, state.current), changes);
  return changes;
}
function didStateUpdate(state, handler, changes) {
  isFunction(handler) ? handler(state.current) : Object.keys(changes).forEach(function(field) {
    var _handler$field;
    return (_handler$field = handler[field]) === null || _handler$field === void 0 ? void 0 : _handler$field.call(handler, state.current[field]);
  });
  return changes;
}
var index = {
  create
};
var state_local_default = index;

// node_modules/.pnpm/@monaco-editor+loader@1.3.3_monaco-editor@0.43.0/node_modules/@monaco-editor/loader/lib/es/config/index.js
var config = {
  paths: {
    vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.36.1/min/vs"
  }
};
var config_default = config;

// node_modules/.pnpm/@monaco-editor+loader@1.3.3_monaco-editor@0.43.0/node_modules/@monaco-editor/loader/lib/es/utils/curry.js
function curry2(fn) {
  return function curried() {
    var _this = this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return args.length >= fn.length ? fn.apply(this, args) : function() {
      for (var _len2 = arguments.length, nextArgs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        nextArgs[_key2] = arguments[_key2];
      }
      return curried.apply(_this, [].concat(args, nextArgs));
    };
  };
}
var curry_default = curry2;

// node_modules/.pnpm/@monaco-editor+loader@1.3.3_monaco-editor@0.43.0/node_modules/@monaco-editor/loader/lib/es/utils/isObject.js
function isObject2(value) {
  return {}.toString.call(value).includes("Object");
}
var isObject_default = isObject2;

// node_modules/.pnpm/@monaco-editor+loader@1.3.3_monaco-editor@0.43.0/node_modules/@monaco-editor/loader/lib/es/validators/index.js
function validateConfig(config3) {
  if (!config3)
    errorHandler2("configIsRequired");
  if (!isObject_default(config3))
    errorHandler2("configType");
  if (config3.urls) {
    informAboutDeprecation();
    return {
      paths: {
        vs: config3.urls.monacoBase
      }
    };
  }
  return config3;
}
function informAboutDeprecation() {
  console.warn(errorMessages2.deprecation);
}
function throwError2(errorMessages3, type) {
  throw new Error(errorMessages3[type] || errorMessages3["default"]);
}
var errorMessages2 = {
  configIsRequired: "the configuration object is required",
  configType: "the configuration object should be an object",
  "default": "an unknown error accured in `@monaco-editor/loader` package",
  deprecation: "Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "
};
var errorHandler2 = curry_default(throwError2)(errorMessages2);
var validators2 = {
  config: validateConfig
};
var validators_default = validators2;

// node_modules/.pnpm/@monaco-editor+loader@1.3.3_monaco-editor@0.43.0/node_modules/@monaco-editor/loader/lib/es/utils/compose.js
var compose2 = function compose3() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }
  return function(x) {
    return fns.reduceRight(function(y, f) {
      return f(y);
    }, x);
  };
};
var compose_default = compose2;

// node_modules/.pnpm/@monaco-editor+loader@1.3.3_monaco-editor@0.43.0/node_modules/@monaco-editor/loader/lib/es/utils/deepMerge.js
function merge(target, source) {
  Object.keys(source).forEach(function(key) {
    if (source[key] instanceof Object) {
      if (target[key]) {
        Object.assign(source[key], merge(target[key], source[key]));
      }
    }
  });
  return _objectSpread22(_objectSpread22({}, target), source);
}
var deepMerge_default = merge;

// node_modules/.pnpm/@monaco-editor+loader@1.3.3_monaco-editor@0.43.0/node_modules/@monaco-editor/loader/lib/es/utils/makeCancelable.js
var CANCELATION_MESSAGE = {
  type: "cancelation",
  msg: "operation is manually canceled"
};
function makeCancelable(promise) {
  var hasCanceled_ = false;
  var wrappedPromise = new Promise(function(resolve, reject) {
    promise.then(function(val) {
      return hasCanceled_ ? reject(CANCELATION_MESSAGE) : resolve(val);
    });
    promise["catch"](reject);
  });
  return wrappedPromise.cancel = function() {
    return hasCanceled_ = true;
  }, wrappedPromise;
}
var makeCancelable_default = makeCancelable;

// node_modules/.pnpm/@monaco-editor+loader@1.3.3_monaco-editor@0.43.0/node_modules/@monaco-editor/loader/lib/es/loader/index.js
var _state$create = state_local_default.create({
  config: config_default,
  isInitialized: false,
  resolve: null,
  reject: null,
  monaco: null
});
var _state$create2 = _slicedToArray2(_state$create, 2);
var getState = _state$create2[0];
var setState = _state$create2[1];
function config2(globalConfig) {
  var _validators$config = validators_default.config(globalConfig), monaco = _validators$config.monaco, config3 = _objectWithoutProperties2(_validators$config, ["monaco"]);
  setState(function(state) {
    return {
      config: deepMerge_default(state.config, config3),
      monaco
    };
  });
}
function init() {
  var state = getState(function(_ref) {
    var monaco = _ref.monaco, isInitialized = _ref.isInitialized, resolve = _ref.resolve;
    return {
      monaco,
      isInitialized,
      resolve
    };
  });
  if (!state.isInitialized) {
    setState({
      isInitialized: true
    });
    if (state.monaco) {
      state.resolve(state.monaco);
      return makeCancelable_default(wrapperPromise);
    }
    if (window.monaco && window.monaco.editor) {
      storeMonacoInstance(window.monaco);
      state.resolve(window.monaco);
      return makeCancelable_default(wrapperPromise);
    }
    compose_default(injectScripts, getMonacoLoaderScript)(configureLoader);
  }
  return makeCancelable_default(wrapperPromise);
}
function injectScripts(script) {
  return document.body.appendChild(script);
}
function createScript(src) {
  var script = document.createElement("script");
  return src && (script.src = src), script;
}
function getMonacoLoaderScript(configureLoader2) {
  var state = getState(function(_ref2) {
    var config3 = _ref2.config, reject = _ref2.reject;
    return {
      config: config3,
      reject
    };
  });
  var loaderScript = createScript("".concat(state.config.paths.vs, "/loader.js"));
  loaderScript.onload = function() {
    return configureLoader2();
  };
  loaderScript.onerror = state.reject;
  return loaderScript;
}
function configureLoader() {
  var state = getState(function(_ref3) {
    var config3 = _ref3.config, resolve = _ref3.resolve, reject = _ref3.reject;
    return {
      config: config3,
      resolve,
      reject
    };
  });
  var require2 = window.require;
  require2.config(state.config);
  require2(["vs/editor/editor.main"], function(monaco) {
    storeMonacoInstance(monaco);
    state.resolve(monaco);
  }, function(error) {
    state.reject(error);
  });
}
function storeMonacoInstance(monaco) {
  if (!getState().monaco) {
    setState({
      monaco
    });
  }
}
function __getMonacoInstance() {
  return getState(function(_ref4) {
    var monaco = _ref4.monaco;
    return monaco;
  });
}
var wrapperPromise = new Promise(function(resolve, reject) {
  return setState({
    resolve,
    reject
  });
});
var loader = {
  config: config2,
  init,
  __getMonacoInstance
};
var loader_default = loader;

// node_modules/.pnpm/@monaco-editor+react@4.5.2_monaco-editor@0.43.0_react-dom@18.2.0_react@18.2.0/node_modules/@monaco-editor/react/dist/index.mjs
var import_react3 = __toESM(require_react(), 1);
var import_react4 = __toESM(require_react(), 1);
var import_react5 = __toESM(require_react(), 1);
var import_react6 = __toESM(require_react(), 1);
var import_react7 = __toESM(require_react(), 1);
var import_react8 = __toESM(require_react(), 1);
var import_react9 = __toESM(require_react(), 1);
var import_react10 = __toESM(require_react(), 1);
var import_react11 = __toESM(require_react(), 1);
var import_react12 = __toESM(require_react(), 1);
var import_react13 = __toESM(require_react(), 1);
var lt = { wrapper: { display: "flex", position: "relative", textAlign: "initial" }, fullWidth: { width: "100%" }, hide: { display: "none" } };
var v = lt;
var at = { container: { display: "flex", height: "100%", width: "100%", justifyContent: "center", alignItems: "center" } };
var Y = at;
function Mt({ children: t }) {
  return import_react7.default.createElement("div", { style: Y.container }, t);
}
var Z = Mt;
var $ = Z;
function Et({ width: t, height: r, isEditorReady: n, loading: e, _ref: a, className: m, wrapperProps: E }) {
  return import_react6.default.createElement("section", { style: { ...v.wrapper, width: t, height: r }, ...E }, !n && import_react6.default.createElement($, null, e), import_react6.default.createElement("div", { ref: a, style: { ...v.fullWidth, ...!n && v.hide }, className: m }));
}
var tt = Et;
var H = (0, import_react5.memo)(tt);
function Ct(t) {
  (0, import_react8.useEffect)(t, []);
}
var b = Ct;
function ht(t, r, n = true) {
  let e = (0, import_react9.useRef)(true);
  (0, import_react9.useEffect)(e.current || !n ? () => {
    e.current = false;
  } : t, r);
}
var l = ht;
function h() {
}
function R(t, r, n, e) {
  return Dt(t, e) || bt(t, r, n, e);
}
function Dt(t, r) {
  return t.editor.getModel(et(t, r));
}
function bt(t, r, n, e) {
  return t.editor.createModel(r, n, e ? et(t, e) : void 0);
}
function et(t, r) {
  return t.Uri.parse(r);
}
function Ot({ original: t, modified: r, language: n, originalLanguage: e, modifiedLanguage: a, originalModelPath: m, modifiedModelPath: E, keepCurrentOriginalModel: S = false, keepCurrentModifiedModel: N = false, theme: x = "light", loading: P = "Loading...", options: y = {}, height: V = "100%", width: z = "100%", className: F, wrapperProps: j = {}, beforeMount: A = h, onMount: q = h }) {
  let [M, O] = (0, import_react4.useState)(false), [T, s] = (0, import_react4.useState)(true), u = (0, import_react4.useRef)(null), c = (0, import_react4.useRef)(null), w = (0, import_react4.useRef)(null), d = (0, import_react4.useRef)(q), o = (0, import_react4.useRef)(A), D = (0, import_react4.useRef)(false);
  b(() => {
    let i = loader_default.init();
    return i.then((f) => (c.current = f) && s(false)).catch((f) => f?.type !== "cancelation" && console.error("Monaco initialization: error:", f)), () => u.current ? I() : i.cancel();
  }), l(() => {
    if (u.current && c.current) {
      let i = u.current.getOriginalEditor(), f = R(c.current, t || "", e || n || "text", m || "");
      f !== i.getModel() && i.setModel(f);
    }
  }, [m], M), l(() => {
    if (u.current && c.current) {
      let i = u.current.getModifiedEditor(), f = R(c.current, r || "", a || n || "text", E || "");
      f !== i.getModel() && i.setModel(f);
    }
  }, [E], M), l(() => {
    let i = u.current.getModifiedEditor();
    i.getOption(c.current.editor.EditorOption.readOnly) ? i.setValue(r || "") : r !== i.getValue() && (i.executeEdits("", [{ range: i.getModel().getFullModelRange(), text: r || "", forceMoveMarkers: true }]), i.pushUndoStop());
  }, [r], M), l(() => {
    u.current?.getModel()?.original.setValue(t || "");
  }, [t], M), l(() => {
    let { original: i, modified: f } = u.current.getModel();
    c.current.editor.setModelLanguage(i, e || n || "text"), c.current.editor.setModelLanguage(f, a || n || "text");
  }, [n, e, a], M), l(() => {
    c.current?.editor.setTheme(x);
  }, [x], M), l(() => {
    u.current?.updateOptions(y);
  }, [y], M);
  let U = (0, import_react4.useCallback)(() => {
    if (!c.current)
      return;
    o.current(c.current);
    let i = R(c.current, t || "", e || n || "text", m || ""), f = R(c.current, r || "", a || n || "text", E || "");
    u.current?.setModel({ original: i, modified: f });
  }, [n, r, a, t, e, m, E]), L = (0, import_react4.useCallback)(() => {
    !D.current && w.current && (u.current = c.current.editor.createDiffEditor(w.current, { automaticLayout: true, ...y }), U(), c.current?.editor.setTheme(x), O(true), D.current = true);
  }, [y, x, U]);
  (0, import_react4.useEffect)(() => {
    M && d.current(u.current, c.current);
  }, [M]), (0, import_react4.useEffect)(() => {
    !T && !M && L();
  }, [T, M, L]);
  function I() {
    let i = u.current?.getModel();
    S || i?.original?.dispose(), N || i?.modified?.dispose(), u.current?.dispose();
  }
  return import_react4.default.createElement(H, { width: z, height: V, isEditorReady: M, loading: P, _ref: w, className: F, wrapperProps: j });
}
var it = Ot;
var wt = (0, import_react3.memo)(it);
function Ht(t) {
  let r = (0, import_react13.useRef)();
  return (0, import_react13.useEffect)(() => {
    r.current = t;
  }, [t]), r.current;
}
var st = Ht;
var _ = /* @__PURE__ */ new Map();
function Vt({ defaultValue: t, defaultLanguage: r, defaultPath: n, value: e, language: a, path: m, theme: E = "light", line: S, loading: N = "Loading...", options: x = {}, overrideServices: P = {}, saveViewState: y = true, keepCurrentModel: V = false, width: z = "100%", height: F = "100%", className: j, wrapperProps: A = {}, beforeMount: q = h, onMount: M = h, onChange: O, onValidate: T = h }) {
  let [s, u] = (0, import_react12.useState)(false), [c, w] = (0, import_react12.useState)(true), d = (0, import_react12.useRef)(null), o = (0, import_react12.useRef)(null), D = (0, import_react12.useRef)(null), U = (0, import_react12.useRef)(M), L = (0, import_react12.useRef)(q), I = (0, import_react12.useRef)(), i = (0, import_react12.useRef)(e), f = st(m), Q = (0, import_react12.useRef)(false), B = (0, import_react12.useRef)(false);
  b(() => {
    let p = loader_default.init();
    return p.then((g) => (d.current = g) && w(false)).catch((g) => g?.type !== "cancelation" && console.error("Monaco initialization: error:", g)), () => o.current ? pt() : p.cancel();
  }), l(() => {
    let p = R(d.current, t || e || "", r || a || "", m || n || "");
    p !== o.current?.getModel() && (y && _.set(f, o.current?.saveViewState()), o.current?.setModel(p), y && o.current?.restoreViewState(_.get(m)));
  }, [m], s), l(() => {
    o.current?.updateOptions(x);
  }, [x], s), l(() => {
    !o.current || e === void 0 || (o.current.getOption(d.current.editor.EditorOption.readOnly) ? o.current.setValue(e) : e !== o.current.getValue() && (B.current = true, o.current.executeEdits("", [{ range: o.current.getModel().getFullModelRange(), text: e, forceMoveMarkers: true }]), o.current.pushUndoStop(), B.current = false));
  }, [e], s), l(() => {
    let p = o.current?.getModel();
    p && a && d.current?.editor.setModelLanguage(p, a);
  }, [a], s), l(() => {
    S !== void 0 && o.current?.revealLine(S);
  }, [S], s), l(() => {
    d.current?.editor.setTheme(E);
  }, [E], s);
  let X = (0, import_react12.useCallback)(() => {
    if (!(!D.current || !d.current) && !Q.current) {
      L.current(d.current);
      let p = m || n, g = R(d.current, e || t || "", r || a || "", p || "");
      o.current = d.current?.editor.create(D.current, { model: g, automaticLayout: true, ...x }, P), y && o.current.restoreViewState(_.get(p)), d.current.editor.setTheme(E), u(true), Q.current = true;
    }
  }, [t, r, n, e, a, m, x, P, y, E]);
  (0, import_react12.useEffect)(() => {
    s && U.current(o.current, d.current);
  }, [s]), (0, import_react12.useEffect)(() => {
    !c && !s && X();
  }, [c, s, X]), i.current = e, (0, import_react12.useEffect)(() => {
    s && O && (I.current?.dispose(), I.current = o.current?.onDidChangeModelContent((p) => {
      B.current || O(o.current.getValue(), p);
    }));
  }, [s, O]), (0, import_react12.useEffect)(() => {
    if (s) {
      let p = d.current.editor.onDidChangeMarkers((g) => {
        let G = o.current.getModel()?.uri;
        if (G && g.find((J) => J.path === G.path)) {
          let J = d.current.editor.getModelMarkers({ resource: G });
          T?.(J);
        }
      });
      return () => {
        p?.dispose();
      };
    }
    return () => {
    };
  }, [s, T]);
  function pt() {
    I.current?.dispose(), V ? y && _.set(m, o.current.saveViewState()) : o.current.getModel()?.dispose(), o.current.dispose();
  }
  return import_react12.default.createElement(H, { width: z, height: F, isEditorReady: s, loading: N, _ref: D, className: j, wrapperProps: A });
}
var ft = Vt;
var dt = (0, import_react11.memo)(ft);
var Fe = dt;

// src/PostForm.tsx
var import_uuid = __toESM(require_uuid(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var { TextArea } = import_antd.Input;
var PostForm = ({ onOk }) => {
  const token = import_antd.theme.useToken();
  const [articleBody, setArticleBody] = (0, import_react14.useState)("");
  const { agent } = (0, import_veramo_react.useVeramo)();
  const [selectedDid, setSelectedDid] = (0, import_react14.useState)("");
  const [issuerProfile, setIssuerProfile] = (0, import_react14.useState)();
  const [managedIdentifiers, setManagedIdentifiers] = (0, import_react14.useState)([]);
  const [
    managedIdentifiersWithProfiles,
    setManagedIdentifiersWithProfiles
  ] = (0, import_react14.useState)([]);
  (0, import_react_query.useQuery)(
    ["identifiers", { id: agent?.context.id }],
    () => agent?.didManagerFind(),
    {
      onSuccess: (data) => {
        if (data) {
          setManagedIdentifiers(data);
          setSelectedDid(data[0].did);
        }
      }
    }
  );
  (0, import_react14.useEffect)(() => {
    if (agent) {
      Promise.all(
        managedIdentifiers.map((identifier) => {
          return agent.getIdentifierProfile({ did: identifier.did });
        })
      ).then((profiles) => {
        setIssuerProfile(profiles[0]);
        setManagedIdentifiersWithProfiles(profiles);
      }).catch(console.log);
    }
  }, [managedIdentifiers, agent]);
  const handleCreatePost = async () => {
    try {
      const credentialId = import_uuid.default.v4();
      const credential = await agent?.createVerifiableCredential({
        save: true,
        proofFormat: "jwt",
        credential: {
          "@context": ["https://www.w3.org/2018/credentials/v1"],
          type: ["VerifiableCredential", "VerifiableSocialPosting"],
          issuer: { id: selectedDid },
          issuanceDate: (/* @__PURE__ */ new Date()).toISOString(),
          credentialSubject: {
            id: credentialId,
            type: "SocialMediaPosting",
            author: {
              id: selectedDid,
              image: issuerProfile?.picture,
              name: issuerProfile?.name
            },
            headline: "",
            articleBody
          }
        }
      });
      if (credential) {
        const hash = await agent?.dataStoreSaveVerifiableCredential({ verifiableCredential: credential });
        if (hash) {
          onOk(hash);
        }
      }
    } catch (e) {
      console.error(e);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_antd.Space, { direction: "vertical", style: { width: "100%" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_antd.Tabs,
      {
        items: [
          {
            key: "1",
            label: "Write",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              Fe,
              {
                theme: token.theme.id === 4 ? "vs-dark" : "light",
                height: "50vh",
                options: {
                  lineNumbers: "off",
                  fontSize: 14,
                  minimap: { enabled: false }
                },
                defaultLanguage: "markdown",
                defaultValue: articleBody,
                value: articleBody,
                onChange: (e) => {
                  setArticleBody(e || "");
                }
              }
            )
          },
          {
            key: "2",
            label: "Preview",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_agent_explorer_plugin.MarkDown, { content: articleBody })
          }
        ]
      }
    ),
    managedIdentifiersWithProfiles.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_antd.Dropdown.Button,
      {
        type: "primary",
        onClick: handleCreatePost,
        disabled: articleBody === "",
        icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_antd.Avatar, { size: "small", src: issuerProfile?.picture }),
        menu: {
          items: [
            ...managedIdentifiersWithProfiles.map((profile) => {
              return {
                key: profile.did,
                onClick: () => {
                  setIssuerProfile(profile);
                  setSelectedDid(profile.did);
                },
                label: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_agent_explorer_plugin.IdentifierProfile, { did: profile.did })
              };
            })
          ],
          selectable: true,
          defaultSelectedKeys: [selectedDid]
        },
        children: "Create Post as"
      }
    )
  ] });
};

// src/ComposeSocialPostingForm.tsx
var import_react16 = __toESM(require_react(), 1);
var import_antd2 = __toESM(require_antd(), 1);
var import_veramo_react2 = __toESM(require_veramo_react(), 1);
var import_react_query2 = __toESM(require_react_query(), 1);
var import_agent_explorer_plugin2 = __toESM(require_agent_explorer_plugin(), 1);
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var { Option } = import_antd2.Select;
var ComposeSocialPostingForm = ({
  onNewSocialPosting
}) => {
  const { agent } = (0, import_veramo_react2.useVeramo)();
  const { token } = import_antd2.theme.useToken();
  const [form] = import_antd2.Form.useForm();
  const issuer = import_antd2.Form.useWatch("issuer", { form, preserve: true });
  const subject = import_antd2.Form.useWatch("subject", { form, preserve: true });
  const [issuerProfile, setIssuerProfile] = (0, import_react16.useState)();
  const [managedIdentifiers, setManagedIdentifiers] = (0, import_react16.useState)([]);
  const [
    managedIdentifiersWithProfiles,
    setManagedIdentifiersWithProfiles
  ] = (0, import_react16.useState)([]);
  (0, import_react_query2.useQuery)(
    ["identifiers", { id: agent?.context.id }],
    () => agent?.didManagerFind(),
    {
      onSuccess: (data) => {
        if (data.length > 0) {
          setManagedIdentifiers(data);
          form.setFieldValue("issuer", data[0].did);
        }
      }
    }
  );
  (0, import_react16.useEffect)(() => {
    if (agent) {
      Promise.all(
        managedIdentifiers.map((identifier) => {
          return agent.getIdentifierProfile({ did: identifier.did });
        })
      ).then((profiles) => {
        setIssuerProfile(profiles[0]);
        setManagedIdentifiersWithProfiles(profiles);
      }).catch(console.log);
    }
  }, [managedIdentifiers, agent]);
  const handleOk = () => {
    form.validateFields().then((values) => {
      form.resetFields();
      onNewSocialPosting(values);
    }).catch((info) => {
      console.log("Validate Failed:", info);
    });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    import_antd2.Form,
    {
      form,
      layout: "inline",
      name: "form_in_form",
      initialValues: {},
      style: {
        width: "100%",
        paddingBottom: token.paddingContentVertical,
        marginLeft: 0,
        marginRight: token.paddingSM
      },
      children: [
        managedIdentifiersWithProfiles.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          import_antd2.Dropdown,
          {
            menu: {
              items: [
                ...managedIdentifiersWithProfiles.map((profile) => {
                  return {
                    key: profile.did,
                    onClick: () => {
                      setIssuerProfile(profile);
                      form.setFieldValue("issuer", profile.did);
                    },
                    label: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_agent_explorer_plugin2.IdentifierProfile, { did: profile.did })
                  };
                })
              ],
              selectable: true,
              defaultSelectedKeys: [issuer]
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_antd2.Button, { style: { height: "auto", border: 0 }, type: "text", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_antd2.Avatar, { size: "large", src: issuerProfile?.picture }) })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_antd2.Form.Item, { name: "issuer", hidden: true, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_antd2.Input, {}) }),
        managedIdentifiersWithProfiles.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_antd2.Form.Item, { name: "articleBody", style: { display: "flex", flexGrow: 1 }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          import_antd2.Input.TextArea,
          {
            rows: 1,
            placeholder: "What is happening?!",
            bordered: false,
            style: { minWidth: "300px" },
            autoSize: { minRows: 1, maxRows: 6 }
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_antd2.Form.Item, { children: managedIdentifiersWithProfiles.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          import_antd2.Button,
          {
            type: "primary",
            onClick: handleOk,
            children: "Post"
          }
        ) })
      ]
    }
  );
};

// src/Feed.tsx
var import_agent_explorer_plugin3 = __toESM(require_agent_explorer_plugin(), 1);
var import_uuid2 = __toESM(require_uuid(), 1);
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var Feed = () => {
  const { notification } = import_antd3.App.useApp();
  const [drawerOpen, setDrawerOpen] = (0, import_react17.useState)(false);
  const navigate = (0, import_react_router_dom.useNavigate)();
  const { agent } = (0, import_veramo_react3.useVeramo)();
  const { data: credentials, isLoading, refetch } = (0, import_react_query3.useQuery)(
    ["social-feed", { agentId: agent?.context.name }],
    () => agent?.dataStoreORMGetVerifiableCredentials({
      where: [{ column: "type", value: ["VerifiableCredential,VerifiableSocialPosting"] }],
      order: [{ column: "issuanceDate", direction: "DESC" }]
    })
  );
  const handleNewSocialPosting = async (values) => {
    const issuerProfile = await agent?.getIdentifierProfile({ did: values.issuer });
    const credentialId = import_uuid2.default.v4();
    const credential = await agent?.createVerifiableCredential({
      save: true,
      proofFormat: "jwt",
      credential: {
        "@context": ["https://www.w3.org/2018/credentials/v1"],
        type: ["VerifiableCredential", "VerifiableSocialPosting"],
        issuer: { id: values.issuer },
        issuanceDate: (/* @__PURE__ */ new Date()).toISOString(),
        credentialSubject: {
          id: credentialId,
          type: "SocialMediaPosting",
          author: {
            id: values.issuer,
            image: issuerProfile?.picture,
            name: issuerProfile?.name
          },
          headline: "",
          articleBody: values.articleBody
        }
      }
    });
    if (credential) {
      await agent?.dataStoreSaveVerifiableCredential({ verifiableCredential: credential });
      notification.success({
        message: "Successfully created post"
      });
      refetch();
    }
  };
  const handleNewPost = async (hash) => {
    notification.success({
      message: "Post created"
    });
    await refetch();
    navigate("/social-feed/" + hash);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_pro_components.PageContainer, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      ComposeSocialPostingForm,
      {
        onNewSocialPosting: handleNewSocialPosting
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      import_antd3.List,
      {
        itemLayout: "vertical",
        size: "large",
        pagination: {
          pageSize: 30
        },
        dataSource: credentials,
        renderItem: (item, index2) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { style: { marginTop: "20px" }, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_agent_explorer_plugin3.VerifiableCredentialComponent, { credential: item }) }, index2)
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      import_antd3.Drawer,
      {
        title: "Compose new post",
        placement: "right",
        onClose: () => setDrawerOpen(false),
        open: drawerOpen,
        width: 800,
        destroyOnClose: true,
        children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(PostForm, { onOk: handleNewPost })
      }
    )
  ] });
};

// src/Post.tsx
var import_react_router_dom2 = __toESM(require_react_router_dom(), 1);
var import_react_query4 = __toESM(require_react_query(), 1);
var import_veramo_react4 = __toESM(require_veramo_react(), 1);
var import_pro_components2 = __toESM(require_pro_components(), 1);
var import_agent_explorer_plugin4 = __toESM(require_agent_explorer_plugin(), 1);
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
var Post = () => {
  const { id } = (0, import_react_router_dom2.useParams)();
  const { agent } = (0, import_veramo_react4.useVeramo)();
  if (!id)
    return null;
  const { data: credential, isLoading: credentialLoading } = (0, import_react_query4.useQuery)(
    ["credential", { id }],
    () => agent?.dataStoreGetVerifiableCredential({ hash: id })
  );
  if (!credential)
    return null;
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    import_pro_components2.PageContainer,
    {
      loading: credentialLoading,
      children: credential && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_agent_explorer_plugin4.VerifiableCredentialComponent, { credential: { hash: id, verifiableCredential: credential } })
    }
  );
};

// src/SocialPosting.tsx
var import_agent_explorer_plugin5 = __toESM(require_agent_explorer_plugin(), 1);
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
var SocialPosting = ({ credential: { verifiableCredential } }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_jsx_runtime5.Fragment, { children: verifiableCredential?.credentialSubject?.articleBody && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_agent_explorer_plugin5.MarkDown, { content: verifiableCredential.credentialSubject.articleBody }) });
};

// src/index.tsx
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
var Plugin = {
  //@ts-ignore
  init: () => {
    return {
      name: "Social Feed",
      description: "Decentralized reputation and social feed",
      icon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(UnorderedListOutlined_default2, {}),
      requiredMethods: [],
      routes: [
        {
          path: "/social-feed",
          element: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Feed, {})
        },
        {
          path: "/social-feed/:id",
          element: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Post, {})
        }
      ],
      menuItems: [
        {
          name: "Social Feed",
          path: "/social-feed",
          icon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(UnorderedListOutlined_default2, {})
        }
      ],
      hasCss: false,
      getCredentialComponent: (credential) => {
        if (credential.verifiableCredential.type?.includes("VerifiableSocialPosting")) {
          return SocialPosting;
        }
        return void 0;
      }
    };
  }
};
var src_default = Plugin;
export {
  src_default as default
};
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)
*/
