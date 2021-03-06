// Note: For maximum-speed code, see "Optimizing Code" on the Emscripten wiki, https://github.com/kripken/emscripten/wiki/Optimizing-Code
// Note: Some Emscripten settings may limit the speed of the generated code.
// Capture the output of this into a variable, if you want
(function(FUNCTION_TABLE_OFFSET, parentModule) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  Module.print = parentModule.print;
  Module.printErr = parentModule.printErr;
  Module.cleanups = [];
  var H_BASE = 0;
  // Each module has its own stack
  var STACKTOP = parentModule['_malloc'](TOTAL_STACK);
  assert(STACKTOP % 8 == 0);
  var STACK_MAX = STACKTOP + TOTAL_STACK;
  Module.cleanups.push(function() {
    parentModule['_free'](STACKTOP); // XXX ensure exported
    parentModule['_free'](H_BASE);
  });
// === Auto-generated preamble library stuff ===
//========================================
// Runtime essentials
//========================================
function callRuntimeCallbacks(callbacks) {
  while(callbacks.length > 0) {
    var callback = callbacks.pop();
    var func = callback.func;
    if (typeof func === 'number') {
      func = FUNCTION_TABLE[func];
    }
    func(callback.arg === undefined ? null : callback.arg);
  }
}
var __ATINIT__ = []; // functions called during startup
function initRuntime() {
  callRuntimeCallbacks(__ATINIT__);
}
// === Body ===
H_BASE = parentModule["_malloc"](2136 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 2136;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* memory initializer */ allocate([102,97,108,115,101,0,0,0,116,114,117,101,0,0,0,0,49,48,48,37,0,0,0,0,115,118,103,86,105,101,119,40,0,0,0,0,0,0,0,0,120,112,111,105,110,116,101,114,40,0,0,0,0,0,0,0,116,101,120,116,47,99,115,115,0,0,0,0,0,0,0,0,116,101,120,116,47,101,99,109,97,115,99,114,105,112,116,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,92,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,164,255,255,255,164,255,255,255,164,255,255,255,164,255,255,255,164,255,255,255,164,255,255,255,164,255,255,255,164,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,80,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,92,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,164,255,255,255,164,255,255,255,164,255,255,255,164,255,255,255,164,255,255,255,164,255,255,255,164,255,255,255,164,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var Math_min = Math.min;
function invoke_iiiii(index,a1,a2,a3,a4) {
  try {
    return Module["dynCall_iiiii"](index,a1,a2,a3,a4);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_vi(index,a1) {
  try {
    Module["dynCall_vi"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_vii(index,a1,a2) {
  try {
    Module["dynCall_vii"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_ii(index,a1) {
  try {
    return Module["dynCall_ii"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_iiii(index,a1,a2,a3) {
  try {
    return Module["dynCall_iiii"](index,a1,a2,a3);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viii(index,a1,a2,a3) {
  try {
    Module["dynCall_viii"](index,a1,a2,a3);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_v(index) {
  try {
    Module["dynCall_v"](index);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_iii(index,a1,a2) {
  try {
    return Module["dynCall_iii"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiii(index,a1,a2,a3,a4) {
  try {
    Module["dynCall_viiii"](index,a1,a2,a3,a4);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function asmPrintInt(x, y) {
  Module.print('int ' + x + ',' + y);// + ' ' + new Error().stack);
}
function asmPrintFloat(x, y) {
  Module.print('float ' + x + ',' + y);// + ' ' + new Error().stack);
}
// EMSCRIPTEN_START_ASM
var asm = (function(global, env, buffer) {
  'almost asm';
  var HEAP8 = new global.Int8Array(buffer);
  var HEAP16 = new global.Int16Array(buffer);
  var HEAP32 = new global.Int32Array(buffer);
  var HEAPU8 = new global.Uint8Array(buffer);
  var HEAPU16 = new global.Uint16Array(buffer);
  var HEAPU32 = new global.Uint32Array(buffer);
  var HEAPF32 = new global.Float32Array(buffer);
  var HEAPF64 = new global.Float64Array(buffer);
  var STACKTOP=env.STACKTOP|0;
  var STACK_MAX=env.STACK_MAX|0;
  var tempDoublePtr=env.tempDoublePtr|0;
  var ABORT=env.ABORT|0;
  var __ZN7WebCore8SVGNames14zoomAndPanAttrE=env.__ZN7WebCore8SVGNames14zoomAndPanAttrE|0;
  var __ZN7WebCore8SVGNames7viewTagE=env.__ZN7WebCore8SVGNames7viewTagE|0;
  var __ZN7WebCore8SVGNames20contentStyleTypeAttrE=env.__ZN7WebCore8SVGNames20contentStyleTypeAttrE|0;
  var __ZN7WebCore8SVGNames10heightAttrE=env.__ZN7WebCore8SVGNames10heightAttrE|0;
  var __ZN7WebCore9HTMLNames12onresizeAttrE=env.__ZN7WebCore9HTMLNames12onresizeAttrE|0;
  var __ZN7WebCore8SVGNames5yAttrE=env.__ZN7WebCore8SVGNames5yAttrE|0;
  var __ZN7WebCore8SVGNames23preserveAspectRatioAttrE=env.__ZN7WebCore8SVGNames23preserveAspectRatioAttrE|0;
  var __ZN7WebCore8SVGNames10onzoomAttrE=env.__ZN7WebCore8SVGNames10onzoomAttrE|0;
  var __ZN7WebCore9HTMLNames11onabortAttrE=env.__ZN7WebCore9HTMLNames11onabortAttrE|0;
  var __ZN3WTF8nullAtomE=env.__ZN3WTF8nullAtomE|0;
  var __ZN7WebCore9HTMLNames12onscrollAttrE=env.__ZN7WebCore9HTMLNames12onscrollAttrE|0;
  var __ZN7WebCore8SVGNames11viewBoxAttrE=env.__ZN7WebCore8SVGNames11viewBoxAttrE|0;
  var __ZN7WebCore8SVGNames21contentScriptTypeAttrE=env.__ZN7WebCore8SVGNames21contentScriptTypeAttrE|0;
  var __ZTVN7WebCore17StaticElementListE=env.__ZTVN7WebCore17StaticElementListE|0;
  var __ZN7WebCore9HTMLNames11onerrorAttrE=env.__ZN7WebCore9HTMLNames11onerrorAttrE|0;
  var __ZN7WebCore9HTMLNames12onunloadAttrE=env.__ZN7WebCore9HTMLNames12onunloadAttrE|0;
  var __ZN7WebCore8SVGNames29externalResourcesRequiredAttrE=env.__ZN7WebCore8SVGNames29externalResourcesRequiredAttrE|0;
  var __ZN7WebCore8SVGNames9widthAttrE=env.__ZN7WebCore8SVGNames9widthAttrE|0;
  var __ZN7WebCore8SVGNames6svgTagE=env.__ZN7WebCore8SVGNames6svgTagE|0;
  var __ZN7WebCore8SVGNames5xAttrE=env.__ZN7WebCore8SVGNames5xAttrE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTCN7WebCore13SVGSVGElementE0_NS_18SVGGraphicsElementE=(H_BASE+1208)|0;
  var __ZTVN7WebCore32SVGAnimatedStaticPropertyTearOffIbEE=(H_BASE+96)|0;
  var __ZTVN7WebCore26SVGAnimatedPropertyTearOffINS_22SVGPreserveAspectRatioEEE=(H_BASE+192)|0;
  var __ZTTN7WebCore13SVGSVGElementE=(H_BASE+1096)|0;
  var __ZTVN7WebCore13SVGSVGElementE=(H_BASE+224)|0;
  var __ZTVN7WebCore12SVGLocatableE=(H_BASE+1048)|0;
  var __ZTVN7WebCore26SVGAnimatedPropertyTearOffINS_9SVGLengthEEE=(H_BASE+128)|0;
  var __ZTVN7WebCore26SVGAnimatedPropertyTearOffINS_9FloatRectEEE=(H_BASE+160)|0;
  var __ZTCN7WebCore13SVGSVGElementE92_NS_16SVGTransformableE=(H_BASE+1128)|0;
  var __THREW__ = 0;
  var threwValue = 0;
  var setjmpId = 0;
  var undef = 0;
  var tempInt = 0, tempBigInt = 0, tempBigIntP = 0, tempBigIntS = 0, tempBigIntR = 0.0, tempBigIntI = 0, tempBigIntD = 0, tempValue = 0, tempDouble = 0.0;
  var tempRet0 = 0;
  var tempRet1 = 0;
  var tempRet2 = 0;
  var tempRet3 = 0;
  var tempRet4 = 0;
  var tempRet5 = 0;
  var tempRet6 = 0;
  var tempRet7 = 0;
  var tempRet8 = 0;
  var tempRet9 = 0;
  var Math_floor=global.Math.floor;
  var Math_abs=global.Math.abs;
  var Math_sqrt=global.Math.sqrt;
  var Math_pow=global.Math.pow;
  var Math_cos=global.Math.cos;
  var Math_sin=global.Math.sin;
  var Math_tan=global.Math.tan;
  var Math_acos=global.Math.acos;
  var Math_asin=global.Math.asin;
  var Math_atan=global.Math.atan;
  var Math_atan2=global.Math.atan2;
  var Math_exp=global.Math.exp;
  var Math_log=global.Math.log;
  var Math_ceil=global.Math.ceil;
  var Math_imul=global.Math.imul;
  var abort=env.abort;
  var assert=env.assert;
  var asmPrintInt=env.asmPrintInt;
  var asmPrintFloat=env.asmPrintFloat;
  var Math_min=env.min;
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___cxa_pure_virtual=env.___cxa_pure_virtual;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _llvm_trap=env._llvm_trap;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function runPostSets() {
 HEAP32[H_BASE + 104 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_vi + 96;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_vi + 58;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_vi + 34;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_vi + 62;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_ii + 62;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_ii + 172;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_ii + 182;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_ii + 72;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_iiiii + 4;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_vi + 64;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_vi + 80;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_vi + 104;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_vi + 36;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_ii + 140;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_vi + 76;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_vii + 78;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_viii + 20;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_ii + 68;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_vii + 36;
 HEAP32[H_BASE + 320 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_ii + 168;
 HEAP32[H_BASE + 328 >> 2] = F_BASE_ii + 58;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_ii + 78;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_viii + 16;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_ii + 180;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_ii + 184;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_ii + 166;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 360 >> 2] = F_BASE_ii + 70;
 HEAP32[H_BASE + 364 >> 2] = F_BASE_ii + 52;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_ii + 76;
 HEAP32[H_BASE + 372 >> 2] = F_BASE_vi + 50;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_vi + 70;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_ii + 74;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_vii + 42;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_vi + 56;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 396 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 400 >> 2] = F_BASE_ii + 60;
 HEAP32[H_BASE + 404 >> 2] = F_BASE_ii + 56;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_ii + 98;
 HEAP32[H_BASE + 412 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_vii + 38;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 428 >> 2] = F_BASE_ii + 104;
 HEAP32[H_BASE + 432 >> 2] = F_BASE_ii + 128;
 HEAP32[H_BASE + 436 >> 2] = F_BASE_ii + 150;
 HEAP32[H_BASE + 440 >> 2] = F_BASE_ii + 90;
 HEAP32[H_BASE + 444 >> 2] = F_BASE_ii + 134;
 HEAP32[H_BASE + 448 >> 2] = F_BASE_vii + 34;
 HEAP32[H_BASE + 452 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 456 >> 2] = F_BASE_vii + 70;
 HEAP32[H_BASE + 460 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 464 >> 2] = F_BASE_vii + 68;
 HEAP32[H_BASE + 468 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 472 >> 2] = F_BASE_ii + 114;
 HEAP32[H_BASE + 476 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 480 >> 2] = F_BASE_iii + 22;
 HEAP32[H_BASE + 484 >> 2] = F_BASE_ii + 176;
 HEAP32[H_BASE + 488 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 492 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 496 >> 2] = F_BASE_vii + 30;
 HEAP32[H_BASE + 500 >> 2] = F_BASE_ii + 130;
 HEAP32[H_BASE + 504 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 508 >> 2] = F_BASE_ii + 80;
 HEAP32[H_BASE + 512 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 516 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 520 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 524 >> 2] = F_BASE_vii + 52;
 HEAP32[H_BASE + 528 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 532 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 536 >> 2] = F_BASE_ii + 110;
 HEAP32[H_BASE + 540 >> 2] = F_BASE_ii + 118;
 HEAP32[H_BASE + 544 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 548 >> 2] = F_BASE_viii + 48;
 HEAP32[H_BASE + 552 >> 2] = F_BASE_vii + 62;
 HEAP32[H_BASE + 556 >> 2] = F_BASE_viii + 44;
 HEAP32[H_BASE + 560 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 564 >> 2] = F_BASE_ii + 164;
 HEAP32[H_BASE + 568 >> 2] = F_BASE_viii + 46;
 HEAP32[H_BASE + 572 >> 2] = F_BASE_vii + 64;
 HEAP32[H_BASE + 576 >> 2] = F_BASE_vii + 58;
 HEAP32[H_BASE + 580 >> 2] = F_BASE_ii + 126;
 HEAP32[H_BASE + 584 >> 2] = F_BASE_ii + 174;
 HEAP32[H_BASE + 588 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 592 >> 2] = F_BASE_ii + 162;
 HEAP32[H_BASE + 596 >> 2] = F_BASE_ii + 48;
 HEAP32[H_BASE + 600 >> 2] = F_BASE_ii + 148;
 HEAP32[H_BASE + 604 >> 2] = F_BASE_ii + 86;
 HEAP32[H_BASE + 608 >> 2] = F_BASE_vii + 56;
 HEAP32[H_BASE + 612 >> 2] = F_BASE_iii + 28;
 HEAP32[H_BASE + 616 >> 2] = F_BASE_iii + 24;
 HEAP32[H_BASE + 620 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 624 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 628 >> 2] = F_BASE_viii + 24;
 HEAP32[H_BASE + 632 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 636 >> 2] = F_BASE_vi + 90;
 HEAP32[H_BASE + 640 >> 2] = F_BASE_vii + 48;
 HEAP32[H_BASE + 644 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 648 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 652 >> 2] = F_BASE_vi + 68;
 HEAP32[H_BASE + 656 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 660 >> 2] = F_BASE_vi + 108;
 HEAP32[H_BASE + 664 >> 2] = F_BASE_vi + 60;
 HEAP32[H_BASE + 668 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 672 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 676 >> 2] = F_BASE_ii + 40;
 HEAP32[H_BASE + 680 >> 2] = F_BASE_ii + 96;
 HEAP32[H_BASE + 684 >> 2] = F_BASE_ii + 84;
 HEAP32[H_BASE + 688 >> 2] = F_BASE_ii + 156;
 HEAP32[H_BASE + 692 >> 2] = F_BASE_ii + 42;
 HEAP32[H_BASE + 696 >> 2] = F_BASE_ii + 94;
 HEAP32[H_BASE + 700 >> 2] = F_BASE_ii + 120;
 HEAP32[H_BASE + 704 >> 2] = F_BASE_ii + 122;
 HEAP32[H_BASE + 708 >> 2] = F_BASE_ii + 142;
 HEAP32[H_BASE + 712 >> 2] = F_BASE_ii + 146;
 HEAP32[H_BASE + 716 >> 2] = F_BASE_ii + 82;
 HEAP32[H_BASE + 720 >> 2] = F_BASE_ii + 64;
 HEAP32[H_BASE + 724 >> 2] = F_BASE_ii + 88;
 HEAP32[H_BASE + 728 >> 2] = F_BASE_ii + 100;
 HEAP32[H_BASE + 732 >> 2] = F_BASE_ii + 54;
 HEAP32[H_BASE + 736 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 740 >> 2] = F_BASE_ii + 124;
 HEAP32[H_BASE + 744 >> 2] = F_BASE_iii + 16;
 HEAP32[H_BASE + 748 >> 2] = F_BASE_v + 8;
 HEAP32[H_BASE + 752 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 756 >> 2] = F_BASE_iii + 20;
 HEAP32[H_BASE + 760 >> 2] = F_BASE_vii + 46;
 HEAP32[H_BASE + 764 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 768 >> 2] = F_BASE_vi + 84;
 HEAP32[H_BASE + 772 >> 2] = F_BASE_vi + 66;
 HEAP32[H_BASE + 776 >> 2] = F_BASE_vi + 94;
 HEAP32[H_BASE + 780 >> 2] = F_BASE_v + 6;
 HEAP32[H_BASE + 784 >> 2] = F_BASE_ii + 102;
 HEAP32[H_BASE + 788 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 792 >> 2] = F_BASE_ii + 144;
 HEAP32[H_BASE + 796 >> 2] = F_BASE_v + 4;
 HEAP32[H_BASE + 800 >> 2] = F_BASE_ii + 136;
 HEAP32[H_BASE + 804 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 808 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 812 >> 2] = F_BASE_ii + 116;
 HEAP32[H_BASE + 816 >> 2] = F_BASE_ii + 132;
 HEAP32[H_BASE + 820 >> 2] = F_BASE_viii + 42;
 HEAP32[H_BASE + 824 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 828 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 832 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 836 >> 2] = F_BASE_ii + 138;
 HEAP32[H_BASE + 840 >> 2] = F_BASE_ii + 154;
 HEAP32[H_BASE + 844 >> 2] = F_BASE_ii + 108;
 HEAP32[H_BASE + 848 >> 2] = F_BASE_vii + 32;
 HEAP32[H_BASE + 852 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 856 >> 2] = F_BASE_ii + 92;
 HEAP32[H_BASE + 860 >> 2] = F_BASE_ii + 46;
 HEAP32[H_BASE + 864 >> 2] = F_BASE_vi + 110;
 HEAP32[H_BASE + 868 >> 2] = F_BASE_vi + 98;
 HEAP32[H_BASE + 872 >> 2] = F_BASE_vi + 82;
 HEAP32[H_BASE + 876 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 880 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 884 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 888 >> 2] = F_BASE_ii + 170;
 HEAP32[H_BASE + 892 >> 2] = F_BASE_viii + 36;
 HEAP32[H_BASE + 896 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 900 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 904 >> 2] = F_BASE_ii + 66;
 HEAP32[H_BASE + 908 >> 2] = F_BASE_vii + 80;
 HEAP32[H_BASE + 912 >> 2] = F_BASE_viii + 38;
 HEAP32[H_BASE + 916 >> 2] = F_BASE_vii + 72;
 HEAP32[H_BASE + 920 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 924 >> 2] = F_BASE_viii + 50;
 HEAP32[H_BASE + 968 >> 2] = F_BASE_vi + 38;
 HEAP32[H_BASE + 972 >> 2] = F_BASE_vi + 42;
 HEAP32[H_BASE + 976 >> 2] = F_BASE_ii + 158;
 HEAP32[H_BASE + 980 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 984 >> 2] = F_BASE_viii + 26;
 HEAP32[H_BASE + 988 >> 2] = F_BASE_viii + 40;
 HEAP32[H_BASE + 992 >> 2] = F_BASE_viii + 32;
 HEAP32[H_BASE + 996 >> 2] = F_BASE_viii + 18;
 HEAP32[H_BASE + 1e3 >> 2] = F_BASE_vii + 76;
 HEAP32[H_BASE + 1012 >> 2] = F_BASE_vi + 86;
 HEAP32[H_BASE + 1016 >> 2] = F_BASE_vi + 100;
 HEAP32[H_BASE + 1020 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 1024 >> 2] = F_BASE_ii + 186;
 HEAP32[H_BASE + 1028 >> 2] = F_BASE_vii + 66;
 HEAP32[H_BASE + 1032 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 1036 >> 2] = F_BASE_ii + 44;
 HEAP32[H_BASE + 1056 >> 2] = F_BASE_vi + 48;
 HEAP32[H_BASE + 1060 >> 2] = F_BASE_vi + 78;
 HEAP32[H_BASE + 1064 >> 2] = F_BASE_v + 10;
 HEAP32[H_BASE + 1068 >> 2] = F_BASE_v + 10;
 HEAP32[H_BASE + 1072 >> 2] = F_BASE_v + 10;
 HEAP32[H_BASE + 1076 >> 2] = F_BASE_v + 10;
 HEAP32[H_BASE + 1080 >> 2] = F_BASE_v + 10;
 HEAP32[H_BASE + 1084 >> 2] = F_BASE_viii + 30;
 HEAP32[H_BASE + 1096 >> 2] = H_BASE + 236;
 HEAP32[H_BASE + 1100 >> 2] = H_BASE + 1220;
 HEAP32[H_BASE + 1104 >> 2] = H_BASE + 1168;
 HEAP32[H_BASE + 1108 >> 2] = H_BASE + 1168;
 HEAP32[H_BASE + 1112 >> 2] = H_BASE + 1944;
 HEAP32[H_BASE + 1116 >> 2] = H_BASE + 1944;
 HEAP32[H_BASE + 1120 >> 2] = H_BASE + 968;
 HEAP32[H_BASE + 1124 >> 2] = H_BASE + 968;
 HEAP32[H_BASE + 1168 >> 2] = F_BASE_vi + 54;
 HEAP32[H_BASE + 1172 >> 2] = F_BASE_vi + 74;
 HEAP32[H_BASE + 1176 >> 2] = F_BASE_v + 10;
 HEAP32[H_BASE + 1180 >> 2] = F_BASE_v + 10;
 HEAP32[H_BASE + 1184 >> 2] = F_BASE_v + 10;
 HEAP32[H_BASE + 1188 >> 2] = F_BASE_v + 10;
 HEAP32[H_BASE + 1192 >> 2] = F_BASE_v + 10;
 HEAP32[H_BASE + 1196 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 1200 >> 2] = F_BASE_v + 10;
 HEAP32[H_BASE + 1220 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 1224 >> 2] = F_BASE_ii + 62;
 HEAP32[H_BASE + 1228 >> 2] = F_BASE_ii + 172;
 HEAP32[H_BASE + 1232 >> 2] = F_BASE_ii + 182;
 HEAP32[H_BASE + 1236 >> 2] = F_BASE_ii + 72;
 HEAP32[H_BASE + 1240 >> 2] = F_BASE_iiiii + 4;
 HEAP32[H_BASE + 1244 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 1248 >> 2] = F_BASE_vi + 64;
 HEAP32[H_BASE + 1252 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 1256 >> 2] = F_BASE_vi + 80;
 HEAP32[H_BASE + 1260 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 1264 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 1268 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 1272 >> 2] = F_BASE_ii + 140;
 HEAP32[H_BASE + 1276 >> 2] = F_BASE_vi + 76;
 HEAP32[H_BASE + 1280 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 1284 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 1288 >> 2] = F_BASE_vii + 78;
 HEAP32[H_BASE + 1292 >> 2] = F_BASE_viii + 20;
 HEAP32[H_BASE + 1296 >> 2] = F_BASE_ii + 68;
 HEAP32[H_BASE + 1300 >> 2] = F_BASE_vii + 36;
 HEAP32[H_BASE + 1304 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 1308 >> 2] = F_BASE_ii + 168;
 HEAP32[H_BASE + 1312 >> 2] = F_BASE_ii + 58;
 HEAP32[H_BASE + 1316 >> 2] = F_BASE_ii + 78;
 HEAP32[H_BASE + 1320 >> 2] = F_BASE_viii + 16;
 HEAP32[H_BASE + 1324 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 1328 >> 2] = F_BASE_ii + 180;
 HEAP32[H_BASE + 1332 >> 2] = F_BASE_ii + 184;
 HEAP32[H_BASE + 1336 >> 2] = F_BASE_ii + 166;
 HEAP32[H_BASE + 1340 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 1344 >> 2] = F_BASE_ii + 70;
 HEAP32[H_BASE + 1348 >> 2] = F_BASE_ii + 52;
 HEAP32[H_BASE + 1352 >> 2] = F_BASE_ii + 76;
 HEAP32[H_BASE + 1356 >> 2] = F_BASE_vi + 50;
 HEAP32[H_BASE + 1360 >> 2] = F_BASE_vi + 70;
 HEAP32[H_BASE + 1364 >> 2] = F_BASE_ii + 74;
 HEAP32[H_BASE + 1368 >> 2] = F_BASE_vii + 42;
 HEAP32[H_BASE + 1372 >> 2] = F_BASE_vi + 56;
 HEAP32[H_BASE + 1376 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 1380 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 1384 >> 2] = F_BASE_ii + 60;
 HEAP32[H_BASE + 1388 >> 2] = F_BASE_ii + 56;
 HEAP32[H_BASE + 1392 >> 2] = F_BASE_ii + 98;
 HEAP32[H_BASE + 1396 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 1400 >> 2] = F_BASE_iii + 26;
 HEAP32[H_BASE + 1404 >> 2] = F_BASE_vii + 38;
 HEAP32[H_BASE + 1408 >> 2] = F_BASE_vii + 40;
 HEAP32[H_BASE + 1412 >> 2] = F_BASE_ii + 104;
 HEAP32[H_BASE + 1416 >> 2] = F_BASE_ii + 128;
 HEAP32[H_BASE + 1420 >> 2] = F_BASE_ii + 150;
 HEAP32[H_BASE + 1424 >> 2] = F_BASE_ii + 90;
 HEAP32[H_BASE + 1428 >> 2] = F_BASE_ii + 134;
 HEAP32[H_BASE + 1432 >> 2] = F_BASE_vii + 34;
 HEAP32[H_BASE + 1436 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 1440 >> 2] = F_BASE_vii + 70;
 HEAP32[H_BASE + 1444 >> 2] = F_BASE_vii + 50;
 HEAP32[H_BASE + 1448 >> 2] = F_BASE_vii + 68;
 HEAP32[H_BASE + 1452 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 1456 >> 2] = F_BASE_ii + 114;
 HEAP32[H_BASE + 1460 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 1464 >> 2] = F_BASE_iii + 22;
 HEAP32[H_BASE + 1468 >> 2] = F_BASE_ii + 176;
 HEAP32[H_BASE + 1472 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 1476 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 1480 >> 2] = F_BASE_vii + 30;
 HEAP32[H_BASE + 1484 >> 2] = F_BASE_ii + 130;
 HEAP32[H_BASE + 1488 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 1492 >> 2] = F_BASE_ii + 80;
 HEAP32[H_BASE + 1496 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 1500 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 1504 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 1508 >> 2] = F_BASE_vii + 52;
 HEAP32[H_BASE + 1512 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 1516 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 1520 >> 2] = F_BASE_ii + 110;
 HEAP32[H_BASE + 1524 >> 2] = F_BASE_ii + 118;
 HEAP32[H_BASE + 1528 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 1532 >> 2] = F_BASE_viii + 22;
 HEAP32[H_BASE + 1536 >> 2] = F_BASE_vii + 62;
 HEAP32[H_BASE + 1540 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 1544 >> 2] = F_BASE_iii + 18;
 HEAP32[H_BASE + 1548 >> 2] = F_BASE_ii + 164;
 HEAP32[H_BASE + 1552 >> 2] = F_BASE_viii + 46;
 HEAP32[H_BASE + 1556 >> 2] = F_BASE_vii + 64;
 HEAP32[H_BASE + 1560 >> 2] = F_BASE_vii + 58;
 HEAP32[H_BASE + 1564 >> 2] = F_BASE_ii + 112;
 HEAP32[H_BASE + 1568 >> 2] = F_BASE_ii + 174;
 HEAP32[H_BASE + 1572 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 1576 >> 2] = F_BASE_ii + 162;
 HEAP32[H_BASE + 1580 >> 2] = F_BASE_ii + 48;
 HEAP32[H_BASE + 1584 >> 2] = F_BASE_ii + 148;
 HEAP32[H_BASE + 1588 >> 2] = F_BASE_ii + 86;
 HEAP32[H_BASE + 1592 >> 2] = F_BASE_vii + 56;
 HEAP32[H_BASE + 1596 >> 2] = F_BASE_iii + 28;
 HEAP32[H_BASE + 1600 >> 2] = F_BASE_iii + 24;
 HEAP32[H_BASE + 1604 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 1608 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 1612 >> 2] = F_BASE_viii + 24;
 HEAP32[H_BASE + 1616 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 1620 >> 2] = F_BASE_vi + 90;
 HEAP32[H_BASE + 1624 >> 2] = F_BASE_vii + 48;
 HEAP32[H_BASE + 1628 >> 2] = F_BASE_vi + 72;
 HEAP32[H_BASE + 1632 >> 2] = F_BASE_vi + 106;
 HEAP32[H_BASE + 1636 >> 2] = F_BASE_vi + 68;
 HEAP32[H_BASE + 1640 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 1644 >> 2] = F_BASE_vi + 108;
 HEAP32[H_BASE + 1648 >> 2] = F_BASE_vi + 60;
 HEAP32[H_BASE + 1652 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 1656 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 1660 >> 2] = F_BASE_ii + 40;
 HEAP32[H_BASE + 1664 >> 2] = F_BASE_ii + 96;
 HEAP32[H_BASE + 1668 >> 2] = F_BASE_ii + 84;
 HEAP32[H_BASE + 1672 >> 2] = F_BASE_ii + 156;
 HEAP32[H_BASE + 1676 >> 2] = F_BASE_ii + 42;
 HEAP32[H_BASE + 1680 >> 2] = F_BASE_ii + 94;
 HEAP32[H_BASE + 1684 >> 2] = F_BASE_ii + 120;
 HEAP32[H_BASE + 1688 >> 2] = F_BASE_ii + 122;
 HEAP32[H_BASE + 1692 >> 2] = F_BASE_ii + 142;
 HEAP32[H_BASE + 1696 >> 2] = F_BASE_ii + 146;
 HEAP32[H_BASE + 1700 >> 2] = F_BASE_ii + 82;
 HEAP32[H_BASE + 1704 >> 2] = F_BASE_ii + 64;
 HEAP32[H_BASE + 1708 >> 2] = F_BASE_ii + 88;
 HEAP32[H_BASE + 1712 >> 2] = F_BASE_ii + 100;
 HEAP32[H_BASE + 1716 >> 2] = F_BASE_ii + 54;
 HEAP32[H_BASE + 1720 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 1724 >> 2] = F_BASE_ii + 124;
 HEAP32[H_BASE + 1728 >> 2] = F_BASE_iii + 16;
 HEAP32[H_BASE + 1732 >> 2] = F_BASE_v + 8;
 HEAP32[H_BASE + 1736 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1740 >> 2] = F_BASE_iii + 20;
 HEAP32[H_BASE + 1744 >> 2] = F_BASE_vii + 46;
 HEAP32[H_BASE + 1748 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 1752 >> 2] = F_BASE_vi + 84;
 HEAP32[H_BASE + 1756 >> 2] = F_BASE_vi + 66;
 HEAP32[H_BASE + 1760 >> 2] = F_BASE_vi + 94;
 HEAP32[H_BASE + 1764 >> 2] = F_BASE_v + 6;
 HEAP32[H_BASE + 1768 >> 2] = F_BASE_ii + 102;
 HEAP32[H_BASE + 1772 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 1776 >> 2] = F_BASE_ii + 144;
 HEAP32[H_BASE + 1780 >> 2] = F_BASE_v + 4;
 HEAP32[H_BASE + 1784 >> 2] = F_BASE_ii + 136;
 HEAP32[H_BASE + 1788 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 1792 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 1796 >> 2] = F_BASE_ii + 116;
 HEAP32[H_BASE + 1800 >> 2] = F_BASE_ii + 132;
 HEAP32[H_BASE + 1804 >> 2] = F_BASE_viii + 28;
 HEAP32[H_BASE + 1808 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 1812 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 1816 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 1820 >> 2] = F_BASE_ii + 138;
 HEAP32[H_BASE + 1824 >> 2] = F_BASE_ii + 154;
 HEAP32[H_BASE + 1828 >> 2] = F_BASE_ii + 178;
 HEAP32[H_BASE + 1832 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 1836 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 1840 >> 2] = F_BASE_ii + 92;
 HEAP32[H_BASE + 1844 >> 2] = F_BASE_ii + 46;
 HEAP32[H_BASE + 1848 >> 2] = F_BASE_vi + 110;
 HEAP32[H_BASE + 1852 >> 2] = F_BASE_vi + 98;
 HEAP32[H_BASE + 1856 >> 2] = F_BASE_vi + 82;
 HEAP32[H_BASE + 1860 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 1864 >> 2] = F_BASE_ii + 160;
 HEAP32[H_BASE + 1868 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 1872 >> 2] = F_BASE_ii + 152;
 HEAP32[H_BASE + 1876 >> 2] = F_BASE_viii + 36;
 HEAP32[H_BASE + 1880 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 1884 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 1888 >> 2] = F_BASE_ii + 66;
 HEAP32[H_BASE + 1892 >> 2] = F_BASE_vii + 80;
 HEAP32[H_BASE + 1896 >> 2] = F_BASE_viii + 38;
 HEAP32[H_BASE + 1900 >> 2] = F_BASE_vii + 72;
 HEAP32[H_BASE + 1944 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 1948 >> 2] = F_BASE_vi + 46;
 HEAP32[H_BASE + 1952 >> 2] = F_BASE_ii + 158;
 HEAP32[H_BASE + 1956 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 1960 >> 2] = F_BASE_viii + 26;
 HEAP32[H_BASE + 1964 >> 2] = F_BASE_viii + 40;
 HEAP32[H_BASE + 1968 >> 2] = F_BASE_viii + 32;
 HEAP32[H_BASE + 1972 >> 2] = F_BASE_viii + 34;
 HEAP32[H_BASE + 1976 >> 2] = F_BASE_vii + 76;
}
function __ZNK7WebCore13SVGSVGElement34collectIntersectionOrEnclosureListERKNS_9FloatRectEPNS_10SVGElementENS0_30CollectIntersectionOrEnclosureE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0;
 i6 = (i4 | 0) == 0 ? i2 | 0 : i4;
 i4 = i6 + 36 | 0;
 while (1) {
  i7 = HEAP32[i4 >> 2] | 0;
  if ((i7 | 0) == 0) {
   i8 = 0;
   i9 = 0;
   i10 = 0;
   break;
  }
  i11 = HEAP32[i7 + 12 >> 2] | 0;
  if ((i11 & 4 | 0) == 0) {
   i4 = i7 + 28 | 0;
  } else {
   i12 = 4;
   break;
  }
 }
 L4 : do {
  if ((i12 | 0) == 4) {
   i4 = i6 | 0;
   i2 = i7;
   i13 = i11;
   while (1) {
    if ((i13 & 32 | 0) != 0) {
     break;
    }
    i14 = HEAP32[i2 + 36 >> 2] | 0;
    do {
     if ((i14 | 0) == 0) {
      if ((i2 | 0) == (i4 | 0)) {
       i8 = 0;
       i9 = 0;
       i10 = 0;
       break L4;
      }
      i15 = HEAP32[i2 + 28 >> 2] | 0;
      if ((i15 | 0) != 0) {
       i16 = i15;
       break;
      }
      i15 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i2, i4) | 0;
      if ((i15 | 0) == 0) {
       i8 = 0;
       i9 = 0;
       i10 = 0;
       break L4;
      } else {
       i16 = i15;
      }
     } else {
      i16 = i14;
     }
    } while (0);
    if ((HEAP32[i16 + 12 >> 2] & 4 | 0) == 0) {
     i14 = i16;
     while (1) {
      if ((i14 | 0) == (i4 | 0)) {
       i8 = 0;
       i9 = 0;
       i10 = 0;
       break L4;
      }
      i15 = HEAP32[i14 + 28 >> 2] | 0;
      if ((i15 | 0) == 0) {
       i17 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i14, i4) | 0;
       if ((i17 | 0) == 0) {
        i8 = 0;
        i9 = 0;
        i10 = 0;
        break L4;
       } else {
        i18 = i17;
       }
      } else {
       i18 = i15;
      }
      if ((HEAP32[i18 + 12 >> 2] & 4 | 0) == 0) {
       i14 = i18;
      } else {
       i19 = i18;
       break;
      }
     }
    } else {
     i19 = i16;
    }
    i2 = i19;
    i13 = HEAP32[i19 + 12 >> 2] | 0;
   }
   if ((i2 | 0) == 0) {
    i8 = 0;
    i9 = 0;
    i10 = 0;
    break;
   }
   i13 = (i5 | 0) == 0;
   i4 = i6 | 0;
   i14 = i2;
   i15 = 0;
   i17 = 0;
   i20 = 0;
   L24 : while (1) {
    i21 = i14;
    i22 = i14 + 32 | 0;
    if ((HEAP32[i14 + 12 >> 2] & 2048 | 0) == 0) {
     i23 = i22 | 0;
    } else {
     i23 = HEAP32[i22 >> 2] | 0;
    }
    i22 = HEAP32[i23 >> 2] | 0;
    do {
     if (i13) {
      if (!(__ZN7WebCore20RenderSVGModelObject17checkIntersectionEPNS_13RenderElementERKNS_9FloatRectE(i22, i3) | 0)) {
       i24 = i20;
       i25 = i17;
       i26 = i15;
       break;
      }
      if ((i15 | 0) != (i17 | 0)) {
       HEAP32[i20 + (i15 << 2) >> 2] = i21;
       i27 = i14 + 8 | 0;
       HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + 1;
       i24 = i20;
       i25 = i17;
       i26 = i15 + 1 | 0;
       break;
      }
      i27 = i17 + 1 | 0;
      i28 = i27 + (i17 >>> 2) | 0;
      i29 = i28 >>> 0 > 16 >>> 0 ? i28 : 16;
      i28 = i29 >>> 0 > i27 >>> 0 ? i29 : i27;
      do {
       if (i17 >>> 0 < i28 >>> 0) {
        if (i28 >>> 0 > 1073741823 >>> 0) {
         i12 = 27;
         break L24;
        }
        i29 = __ZN3WTF18fastMallocGoodSizeEj(i28 << 2) | 0;
        i30 = i29 >>> 2;
        i31 = __ZN3WTF10fastMallocEj(i29) | 0;
        i29 = i31;
        i32 = i20;
        _memcpy(i31 | 0, i32 | 0, i17 << 2) | 0;
        if ((i20 | 0) == 0) {
         i33 = i29;
         i34 = i30;
         break;
        }
        i31 = (i29 | 0) == (i20 | 0);
        __ZN3WTF8fastFreeEPv(i32);
        i33 = i31 ? 0 : i29;
        i34 = i31 ? 0 : i30;
       } else {
        i33 = i20;
        i34 = i17;
       }
      } while (0);
      HEAP32[i33 + (i17 << 2) >> 2] = i21;
      i28 = i14 + 8 | 0;
      HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 1;
      i24 = i33;
      i25 = i34;
      i26 = i27;
     } else {
      if (!(__ZN7WebCore20RenderSVGModelObject14checkEnclosureEPNS_13RenderElementERKNS_9FloatRectE(i22, i3) | 0)) {
       i24 = i20;
       i25 = i17;
       i26 = i15;
       break;
      }
      if ((i15 | 0) != (i17 | 0)) {
       HEAP32[i20 + (i15 << 2) >> 2] = i21;
       i28 = i14 + 8 | 0;
       HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 1;
       i24 = i20;
       i25 = i17;
       i26 = i15 + 1 | 0;
       break;
      }
      i28 = i17 + 1 | 0;
      i30 = i28 + (i17 >>> 2) | 0;
      i31 = i30 >>> 0 > 16 >>> 0 ? i30 : 16;
      i30 = i31 >>> 0 > i28 >>> 0 ? i31 : i28;
      do {
       if (i17 >>> 0 < i30 >>> 0) {
        if (i30 >>> 0 > 1073741823 >>> 0) {
         i12 = 36;
         break L24;
        }
        i31 = __ZN3WTF18fastMallocGoodSizeEj(i30 << 2) | 0;
        i29 = i31 >>> 2;
        i32 = __ZN3WTF10fastMallocEj(i31) | 0;
        i31 = i32;
        i35 = i20;
        _memcpy(i32 | 0, i35 | 0, i17 << 2) | 0;
        if ((i20 | 0) == 0) {
         i36 = i31;
         i37 = i29;
         break;
        }
        i32 = (i31 | 0) == (i20 | 0);
        __ZN3WTF8fastFreeEPv(i35);
        i36 = i32 ? 0 : i31;
        i37 = i32 ? 0 : i29;
       } else {
        i36 = i20;
        i37 = i17;
       }
      } while (0);
      HEAP32[i36 + (i17 << 2) >> 2] = i21;
      i30 = i14 + 8 | 0;
      HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 1;
      i24 = i36;
      i25 = i37;
      i26 = i28;
     }
    } while (0);
    i21 = HEAP32[i14 + 36 >> 2] | 0;
    do {
     if ((i21 | 0) == 0) {
      if ((i14 | 0) == (i4 | 0)) {
       i8 = i26;
       i9 = i25;
       i10 = i24;
       break L4;
      }
      i22 = HEAP32[i14 + 28 >> 2] | 0;
      if ((i22 | 0) != 0) {
       i38 = i22;
       break;
      }
      i22 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i14, i4) | 0;
      if ((i22 | 0) == 0) {
       i8 = i26;
       i9 = i25;
       i10 = i24;
       break L4;
      } else {
       i38 = i22;
      }
     } else {
      i38 = i21;
     }
    } while (0);
    if ((HEAP32[i38 + 12 >> 2] & 4 | 0) == 0) {
     i21 = i38;
     while (1) {
      if ((i21 | 0) == (i4 | 0)) {
       i8 = i26;
       i9 = i25;
       i10 = i24;
       break L4;
      }
      i22 = HEAP32[i21 + 28 >> 2] | 0;
      if ((i22 | 0) == 0) {
       i30 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i21, i4) | 0;
       if ((i30 | 0) == 0) {
        i8 = i26;
        i9 = i25;
        i10 = i24;
        break L4;
       } else {
        i39 = i30;
       }
      } else {
       i39 = i22;
      }
      if ((HEAP32[i39 + 12 >> 2] & 4 | 0) == 0) {
       i21 = i39;
      } else {
       i40 = i39;
       break;
      }
     }
    } else {
     i40 = i38;
    }
    L64 : while (1) {
     if ((HEAP32[i40 + 12 >> 2] & 32 | 0) != 0) {
      break;
     }
     i21 = HEAP32[i40 + 36 >> 2] | 0;
     do {
      if ((i21 | 0) == 0) {
       if ((i40 | 0) == (i4 | 0)) {
        i8 = i26;
        i9 = i25;
        i10 = i24;
        break L4;
       }
       i22 = HEAP32[i40 + 28 >> 2] | 0;
       if ((i22 | 0) != 0) {
        i41 = i22;
        break;
       }
       i22 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i40, i4) | 0;
       if ((i22 | 0) == 0) {
        i8 = i26;
        i9 = i25;
        i10 = i24;
        break L4;
       } else {
        i41 = i22;
       }
      } else {
       i41 = i21;
      }
     } while (0);
     if ((HEAP32[i41 + 12 >> 2] & 4 | 0) == 0) {
      i42 = i41;
     } else {
      i40 = i41;
      continue;
     }
     while (1) {
      if ((i42 | 0) == (i4 | 0)) {
       i8 = i26;
       i9 = i25;
       i10 = i24;
       break L4;
      }
      i21 = HEAP32[i42 + 28 >> 2] | 0;
      if ((i21 | 0) == 0) {
       i28 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i42, i4) | 0;
       if ((i28 | 0) == 0) {
        i8 = i26;
        i9 = i25;
        i10 = i24;
        break L4;
       } else {
        i43 = i28;
       }
      } else {
       i43 = i21;
      }
      if ((HEAP32[i43 + 12 >> 2] & 4 | 0) == 0) {
       i42 = i43;
      } else {
       i40 = i43;
       continue L64;
      }
     }
    }
    if ((i40 | 0) == 0) {
     i8 = i26;
     i9 = i25;
     i10 = i24;
     break L4;
    } else {
     i14 = i40;
     i15 = i26;
     i17 = i25;
     i20 = i24;
    }
   }
   if ((i12 | 0) == 27) {
    _WTFCrash();
   } else if ((i12 | 0) == 36) {
    _WTFCrash();
   }
  }
 } while (0);
 i12 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i12 + 4 >> 2] = 0;
 HEAP32[i12 + 8 >> 2] = 1;
 HEAP32[i12 >> 2] = __ZTVN7WebCore17StaticElementListE + 8;
 HEAP32[i12 + 20 >> 2] = i8;
 HEAP32[i12 + 12 >> 2] = i10;
 HEAP32[i12 + 16 >> 2] = i9;
 HEAP32[i1 >> 2] = i12;
 return;
}
function __ZN7WebCore13SVGSVGElementC1ERKNS_13QualifiedNameERNS_8DocumentE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i1 + 92 | 0;
 HEAP32[i9 >> 2] = H_BASE + 1056;
 __ZN7WebCore18SVGGraphicsElementC2ERKNS_13QualifiedNameERNS_8DocumentE(i1 | 0, H_BASE + 1100 | 0, i2, i3);
 HEAP32[i1 >> 2] = H_BASE + 236;
 HEAP32[i9 >> 2] = H_BASE + 968;
 HEAP32[i1 + 176 >> 2] = H_BASE + 1012;
 i9 = i8 | 0;
 HEAP32[i9 >> 2] = 0;
 __ZN7WebCore9SVGLengthC1ENS_13SVGLengthModeERKN3WTF6StringE(i1 + 180 | 0, 0, i8);
 i8 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i9 = i8 | 0;
   i2 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i9 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i8 = i1 + 188 | 0;
 HEAP8[i8] = HEAP8[i8] & -4;
 i8 = i7 | 0;
 HEAP32[i8 >> 2] = 0;
 __ZN7WebCore9SVGLengthC1ENS_13SVGLengthModeERKN3WTF6StringE(i1 + 192 | 0, 1, i7);
 i7 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i8 = i7 | 0;
   i2 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i8 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i7 = i1 + 200 | 0;
 HEAP8[i7] = HEAP8[i7] & -4;
 __ZN3WTF6StringC1EPKc(i6, H_BASE + 24 | 0);
 __ZN7WebCore9SVGLengthC1ENS_13SVGLengthModeERKN3WTF6StringE(i1 + 204 | 0, 0, i6);
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i6 = i7 | 0;
   i2 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i6 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i7 = i1 + 212 | 0;
 HEAP8[i7] = HEAP8[i7] & -4;
 __ZN3WTF6StringC1EPKc(i5, H_BASE + 24 | 0);
 __ZN7WebCore9SVGLengthC1ENS_13SVGLengthModeERKN3WTF6StringE(i1 + 216 | 0, 1, i5);
 i7 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i5 = i7 | 0;
   i2 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i5 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i7 = i1 + 224 | 0;
 HEAP8[i7] = HEAP8[i7] & -4;
 i7 = i1 + 228 | 0;
 HEAP8[i7] = 0;
 i2 = i7 + 1 | 0;
 HEAP8[i2] = HEAP8[i2] & -4;
 _memset(i1 + 232 | 0, 0, 16) | 0;
 i2 = i1 + 248 | 0;
 HEAP8[i2] = HEAP8[i2] & -4;
 __ZN7WebCore22SVGPreserveAspectRatioC1Ev(i1 + 252 | 0);
 i2 = i1 + 260 | 0;
 HEAP8[i2] = HEAP8[i2] & -4;
 HEAP8[i1 + 264 | 0] = 0;
 HEAP32[i1 + 268 >> 2] = 2;
 i2 = __ZN3WTF10fastMallocEj(136) | 0;
 __ZN7WebCore17SMILTimeContainerC1EPNS_13SVGSVGElementE(i2, i1);
 HEAP32[i1 + 272 >> 2] = i2;
 HEAPF32[i1 + 276 >> 2] = +0;
 HEAPF32[i1 + 280 >> 2] = +0;
 HEAP32[i1 + 284 >> 2] = 0;
 if (HEAP8[H_BASE + 2016 | 0] | 0) {
  i10 = HEAP32[H_BASE + 2096 >> 2] | 0;
 } else {
  i2 = __Znwj(20) | 0;
  i7 = i2;
  _memset(i2 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 2096 >> 2] = i7;
  HEAP8[H_BASE + 2016 | 0] = 1;
  i10 = i7;
 }
 if ((HEAP32[i10 + 12 >> 2] | 0) != 0) {
  i11 = i1 | 0;
  __ZN7WebCore8Document39registerForPageCacheSuspensionCallbacksEPNS_7ElementE(i3, i11);
  STACKTOP = i4;
  return;
 }
 if (HEAP8[H_BASE + 2056 | 0] | 0) {
  i12 = HEAP32[H_BASE + 2136 >> 2] | 0;
 } else {
  i7 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i7, 6, 0, __ZN7WebCore8SVGNames5xAttrE, (HEAP32[__ZN7WebCore8SVGNames5xAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 44 | 0, F_BASE_vii + 82 | 0);
  HEAP32[H_BASE + 2136 >> 2] = i7;
  HEAP8[H_BASE + 2056 | 0] = 1;
  i12 = i7;
 }
 __ZN7WebCore25SVGAttributeToPropertyMap11addPropertyEPKNS_15SVGPropertyInfoE(i10, i12);
 if (HEAP8[H_BASE + 2048 | 0] | 0) {
  i13 = HEAP32[H_BASE + 2128 >> 2] | 0;
 } else {
  i12 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i12, 6, 0, __ZN7WebCore8SVGNames5yAttrE, (HEAP32[__ZN7WebCore8SVGNames5yAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 88 | 0, F_BASE_vii + 44 | 0);
  HEAP32[H_BASE + 2128 >> 2] = i12;
  HEAP8[H_BASE + 2048 | 0] = 1;
  i13 = i12;
 }
 __ZN7WebCore25SVGAttributeToPropertyMap11addPropertyEPKNS_15SVGPropertyInfoE(i10, i13);
 if (HEAP8[H_BASE + 2040 | 0] | 0) {
  i14 = HEAP32[H_BASE + 2120 >> 2] | 0;
 } else {
  i13 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i13, 6, 0, __ZN7WebCore8SVGNames9widthAttrE, (HEAP32[__ZN7WebCore8SVGNames9widthAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 92 | 0, F_BASE_vii + 84 | 0);
  HEAP32[H_BASE + 2120 >> 2] = i13;
  HEAP8[H_BASE + 2040 | 0] = 1;
  i14 = i13;
 }
 __ZN7WebCore25SVGAttributeToPropertyMap11addPropertyEPKNS_15SVGPropertyInfoE(i10, i14);
 if (HEAP8[H_BASE + 2032 | 0] | 0) {
  i15 = HEAP32[H_BASE + 2112 >> 2] | 0;
 } else {
  i14 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i14, 6, 0, __ZN7WebCore8SVGNames10heightAttrE, (HEAP32[__ZN7WebCore8SVGNames10heightAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 40 | 0, F_BASE_vii + 74 | 0);
  HEAP32[H_BASE + 2112 >> 2] = i14;
  HEAP8[H_BASE + 2032 | 0] = 1;
  i15 = i14;
 }
 __ZN7WebCore25SVGAttributeToPropertyMap11addPropertyEPKNS_15SVGPropertyInfoE(i10, i15);
 if (HEAP8[H_BASE + 2e3 | 0] | 0) {
  i16 = HEAP32[H_BASE + 2080 >> 2] | 0;
 } else {
  i15 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i15, 1, 0, __ZN7WebCore8SVGNames29externalResourcesRequiredAttrE, (HEAP32[__ZN7WebCore8SVGNames29externalResourcesRequiredAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 52 | 0, F_BASE_vii + 54 | 0);
  HEAP32[H_BASE + 2080 >> 2] = i15;
  HEAP8[H_BASE + 2e3 | 0] = 1;
  i16 = i15;
 }
 __ZN7WebCore25SVGAttributeToPropertyMap11addPropertyEPKNS_15SVGPropertyInfoE(i10, i16);
 if (HEAP8[H_BASE + 2024 | 0] | 0) {
  i17 = HEAP32[H_BASE + 2104 >> 2] | 0;
 } else {
  i16 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i16, 14, 0, __ZN7WebCore8SVGNames11viewBoxAttrE, (HEAP32[__ZN7WebCore8SVGNames11viewBoxAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 20 | 0, F_BASE_vii + 60 | 0);
  HEAP32[H_BASE + 2104 >> 2] = i16;
  HEAP8[H_BASE + 2024 | 0] = 1;
  i17 = i16;
 }
 __ZN7WebCore25SVGAttributeToPropertyMap11addPropertyEPKNS_15SVGPropertyInfoE(i10, i17);
 if (HEAP8[H_BASE + 2008 | 0] | 0) {
  i18 = HEAP32[H_BASE + 2088 >> 2] | 0;
 } else {
  i17 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i17, 13, 0, __ZN7WebCore8SVGNames23preserveAspectRatioAttrE, (HEAP32[__ZN7WebCore8SVGNames23preserveAspectRatioAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 102 | 0, F_BASE_vii + 10 | 0);
  HEAP32[H_BASE + 2088 >> 2] = i17;
  HEAP8[H_BASE + 2008 | 0] = 1;
  i18 = i17;
 }
 __ZN7WebCore25SVGAttributeToPropertyMap11addPropertyEPKNS_15SVGPropertyInfoE(i10, i18);
 __ZN7WebCore25SVGAttributeToPropertyMap13addPropertiesERKS0_(i10, __ZN7WebCore18SVGGraphicsElement22attributeToPropertyMapEv() | 0);
 i11 = i1 | 0;
 __ZN7WebCore8Document39registerForPageCacheSuspensionCallbacksEPNS_7ElementE(i3, i11);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore13SVGSVGElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 i10 = i4 + 48 | 0;
 i11 = i10;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i13 = i12;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i15 = i14;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i17 = i16;
 HEAP32[i9 >> 2] = 0;
 i18 = i1 | 0;
 i19 = (__ZNK7WebCore18SVGGraphicsElement22nearestViewportElementEv(i18) | 0) == 0;
 i20 = HEAP32[i2 >> 2] | 0;
 do {
  if (i19) {
   if ((i20 | 0) == (HEAP32[__ZN7WebCore9HTMLNames12onunloadAttrE >> 2] | 0)) {
    i21 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
    __ZN7WebCore8Document31setWindowAttributeEventListenerERKN3WTF12AtomicStringERKNS_13QualifiedNameES4_(i21, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 348 | 0, i2, i3);
    STACKTOP = i4;
    return;
   }
   if ((i20 | 0) == (HEAP32[__ZN7WebCore9HTMLNames12onresizeAttrE >> 2] | 0)) {
    i21 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
    __ZN7WebCore8Document31setWindowAttributeEventListenerERKN3WTF12AtomicStringERKNS_13QualifiedNameES4_(i21, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 312 | 0, i2, i3);
    STACKTOP = i4;
    return;
   }
   if ((i20 | 0) == (HEAP32[__ZN7WebCore9HTMLNames12onscrollAttrE >> 2] | 0)) {
    i21 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
    __ZN7WebCore8Document31setWindowAttributeEventListenerERKN3WTF12AtomicStringERKNS_13QualifiedNameES4_(i21, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 316 | 0, i2, i3);
    STACKTOP = i4;
    return;
   }
   if ((i20 | 0) != (HEAP32[__ZN7WebCore8SVGNames10onzoomAttrE >> 2] | 0)) {
    break;
   }
   i21 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
   __ZN7WebCore8Document31setWindowAttributeEventListenerERKN3WTF12AtomicStringERKNS_13QualifiedNameES4_(i21, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 384 | 0, i2, i3);
   STACKTOP = i4;
   return;
  }
 } while (0);
 i19 = i2 | 0;
 do {
  if ((i20 | 0) == (HEAP32[__ZN7WebCore9HTMLNames11onabortAttrE >> 2] | 0)) {
   i21 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
   __ZN7WebCore8Document31setWindowAttributeEventListenerERKN3WTF12AtomicStringERKNS_13QualifiedNameES4_(i21, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 4 | 0, i2, i3);
  } else {
   if ((i20 | 0) == (HEAP32[__ZN7WebCore9HTMLNames11onerrorAttrE >> 2] | 0)) {
    i21 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
    __ZN7WebCore8Document31setWindowAttributeEventListenerERKN3WTF12AtomicStringERKNS_13QualifiedNameES4_(i21, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 148 | 0, i2, i3);
    break;
   }
   if ((i20 | 0) == (HEAP32[__ZN7WebCore8SVGNames5xAttrE >> 2] | 0)) {
    __ZN7WebCore9SVGLength9constructENS_13SVGLengthModeERKN3WTF6StringERNS_15SVGParsingErrorENS_27SVGLengthNegativeValuesModeE(i11, 0, i3 | 0, i9, 0);
    i21 = i1 + 180 | 0;
    i22 = HEAP32[i10 + 4 >> 2] | 0;
    HEAP32[i21 >> 2] = HEAP32[i10 >> 2];
    HEAP32[i21 + 4 >> 2] = i22;
    i22 = i1 + 188 | 0;
    HEAP8[i22] = HEAP8[i22] | 2;
    break;
   }
   if ((i20 | 0) == (HEAP32[__ZN7WebCore8SVGNames5yAttrE >> 2] | 0)) {
    __ZN7WebCore9SVGLength9constructENS_13SVGLengthModeERKN3WTF6StringERNS_15SVGParsingErrorENS_27SVGLengthNegativeValuesModeE(i13, 1, i3 | 0, i9, 0);
    i22 = i1 + 192 | 0;
    i21 = HEAP32[i12 + 4 >> 2] | 0;
    HEAP32[i22 >> 2] = HEAP32[i12 >> 2];
    HEAP32[i22 + 4 >> 2] = i21;
    i21 = i1 + 200 | 0;
    HEAP8[i21] = HEAP8[i21] | 2;
    break;
   }
   if ((i20 | 0) == (HEAP32[__ZN7WebCore8SVGNames9widthAttrE >> 2] | 0)) {
    __ZN7WebCore9SVGLength9constructENS_13SVGLengthModeERKN3WTF6StringERNS_15SVGParsingErrorENS_27SVGLengthNegativeValuesModeE(i15, 0, i3 | 0, i9, 1);
    i21 = i1 + 204 | 0;
    i22 = HEAP32[i14 + 4 >> 2] | 0;
    HEAP32[i21 >> 2] = HEAP32[i14 >> 2];
    HEAP32[i21 + 4 >> 2] = i22;
    i22 = i1 + 212 | 0;
    HEAP8[i22] = HEAP8[i22] | 2;
    break;
   }
   if ((i20 | 0) == (HEAP32[__ZN7WebCore8SVGNames10heightAttrE >> 2] | 0)) {
    __ZN7WebCore9SVGLength9constructENS_13SVGLengthModeERKN3WTF6StringERNS_15SVGParsingErrorENS_27SVGLengthNegativeValuesModeE(i17, 1, i3 | 0, i9, 1);
    i22 = i1 + 216 | 0;
    i21 = HEAP32[i16 + 4 >> 2] | 0;
    HEAP32[i22 >> 2] = HEAP32[i16 >> 2];
    HEAP32[i22 + 4 >> 2] = i21;
    i21 = i1 + 224 | 0;
    HEAP8[i21] = HEAP8[i21] | 2;
    break;
   }
   if (__ZN7WebCore12SVGLangSpace14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1 + 52 | 0, i2, i3) | 0) {
    break;
   }
   if (__ZN7WebCore28SVGExternalResourcesRequired14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1 + 176 | 0, i2, i3) | 0) {
    break;
   }
   i21 = i5;
   i22 = i6;
   i23 = HEAP32[i19 >> 2] | 0;
   if ((i23 | 0) == (HEAP32[__ZN7WebCore8SVGNames11viewBoxAttrE >> 2] | 0)) {
    _memset(i21 | 0, 0, 16) | 0;
    if ((HEAP32[i3 >> 2] | 0) == 0) {
     i24 = 0;
    } else {
     i24 = ((__ZN7WebCore15SVGFitToViewBox12parseViewBoxEPNS_8DocumentERKN3WTF6StringERNS_9FloatRectE(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0, i3 | 0, i5) | 0) & 1) << 1;
    }
    i25 = i1 + 232 | 0;
    HEAP32[i25 >> 2] = HEAP32[i21 >> 2];
    HEAP32[i25 + 4 >> 2] = HEAP32[i21 + 4 >> 2];
    HEAP32[i25 + 8 >> 2] = HEAP32[i21 + 8 >> 2];
    HEAP32[i25 + 12 >> 2] = HEAP32[i21 + 12 >> 2];
    i21 = i1 + 248 | 0;
    HEAP8[i21] = HEAP8[i21] & -3 | i24;
    break;
   }
   if ((i23 | 0) == (HEAP32[__ZN7WebCore8SVGNames23preserveAspectRatioAttrE >> 2] | 0)) {
    __ZN7WebCore22SVGPreserveAspectRatioC1Ev(i22);
    __ZN7WebCore22SVGPreserveAspectRatio5parseERKN3WTF6StringE(i22, i3 | 0);
    i22 = i1 + 252 | 0;
    i21 = HEAP32[i6 + 4 >> 2] | 0;
    HEAP32[i22 >> 2] = HEAP32[i6 >> 2];
    HEAP32[i22 + 4 >> 2] = i21;
    i21 = i1 + 260 | 0;
    HEAP8[i21] = HEAP8[i21] | 2;
    break;
   }
   if ((i23 | 0) != (HEAP32[__ZN7WebCore8SVGNames14zoomAndPanAttrE >> 2] | 0)) {
    __ZN7WebCore18SVGGraphicsElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i18, i2, i3);
    break;
   }
   i23 = i3 | 0;
   i21 = HEAP32[i23 >> 2] | 0;
   do {
    if ((i21 | 0) == 0) {
     HEAP32[i7 >> 2] = 0;
     i26 = 0;
     i27 = 0;
    } else {
     if ((HEAP32[i21 + 16 >> 2] & 32 | 0) == 0) {
      i28 = HEAP32[i21 + 8 >> 2] | 0;
      i29 = i21;
     } else {
      i22 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i21) | 0;
      i28 = i22;
      i29 = HEAP32[i23 >> 2] | 0;
     }
     HEAP32[i7 >> 2] = i28;
     if ((i29 | 0) == 0) {
      i26 = 0;
      i27 = i28;
      break;
     }
     i26 = HEAP32[i29 + 4 >> 2] | 0;
     i27 = i28;
    }
   } while (0);
   HEAP32[i8 >> 2] = 0;
   __ZN7WebCore13SVGZoomAndPan15parseZoomAndPanERPKtS2_RNS_17SVGZoomAndPanTypeE(i7, i27 + (i26 << 1) | 0, i8) | 0;
   i23 = HEAP32[i8 >> 2] | 0;
   i21 = i23 & 65535;
   HEAP32[i1 + 268 >> 2] = i21 << 16 >> 16 == 0 | (i21 & 65535) >>> 0 > 2 >>> 0 ? 0 : i23 & 65535;
  }
 } while (0);
 __ZN7WebCore10SVGElement27reportAttributeParsingErrorENS_15SVGParsingErrorERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1 | 0, HEAP32[i9 >> 2] | 0, i2, i3);
 STACKTOP = i4;
 return;
}
function __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISF_S9_EERKS2_S5_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S6_S8_S9_SF_SB_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i2 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = i2 + 4 | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  if ((i11 | 0) == 0) {
   i12 = 8;
   i13 = 0;
  } else {
   i14 = i11 << 1;
   i12 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i14 | 0) ? i11 : i14;
   i13 = i11;
  }
  HEAP32[i10 >> 2] = i12;
  i10 = i2 + 8 | 0;
  HEAP32[i10 >> 2] = i12 - 1;
  HEAP32[i8 >> 2] = __ZN3WTF16fastZeroedMallocEj(i12 * 12 & -1) | 0;
  L6 : do {
   if ((i13 | 0) != 0) {
    i12 = i6 | 0;
    i11 = 0;
    while (1) {
     i14 = i11 * 12 & -1 | 0;
     i15 = HEAP32[i14 >> 2] | 0;
     if ((i15 | 0) == 0) {
      break;
     } else if ((i15 | 0) != (-1 | 0)) {
      __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E16lookupForWritingINS_22IdentityHashTranslatorIS9_EES2_EENSt3__14pairIPS6_bEERKT0_(i6, i2, i14 | 0);
      i15 = HEAP32[i12 >> 2] | 0;
      i16 = i14;
      HEAP32[i15 >> 2] = HEAP32[i16 >> 2];
      HEAP32[i15 + 4 >> 2] = HEAP32[i16 + 4 >> 2];
      HEAP32[i15 + 8 >> 2] = HEAP32[i16 + 8 >> 2];
     }
     i11 = i11 + 1 | 0;
     if ((i11 | 0) == (i13 | 0)) {
      break L6;
     }
    }
    _llvm_trap();
   }
  } while (0);
  HEAP32[i2 + 16 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(0);
  i17 = HEAP32[i8 >> 2] | 0;
  i18 = i10;
 } else {
  i17 = i9;
  i18 = i2 + 8 | 0;
 }
 i9 = HEAP32[i18 >> 2] | 0;
 i10 = i3;
 i13 = (HEAPU16[i3 >> 1] | 0) - 1640531527 | 0;
 i6 = (HEAPU16[i10 + 2 >> 1] | 0) << 11 ^ i13 ^ i13 << 16;
 i13 = i3 + 4 | 0;
 i11 = i6 + (HEAPU16[i13 >> 1] | 0) + (i6 >>> 11) | 0;
 i6 = i11 ^ (HEAPU16[i10 + 6 >> 1] | 0) << 11 ^ i11 << 16;
 i11 = (i6 >>> 11) + i6 | 0;
 i6 = i11 << 3 ^ i11;
 i11 = (i6 >>> 5) + i6 | 0;
 i6 = i11 << 2 ^ i11;
 i11 = (i6 >>> 15) + i6 | 0;
 i6 = (i11 << 10 ^ i11) & 16777215;
 i11 = (i6 | 0) == 0 ? 8388608 : i6;
 i6 = i3 | 0;
 i10 = (i11 >>> 23) + ~i11 | 0;
 i12 = i10 << 12 ^ i10;
 i10 = i12 >>> 7 ^ i12;
 i12 = i10 << 2 ^ i10;
 i10 = i12 >>> 20 ^ i12 | 1;
 i12 = 0;
 i16 = i11;
 i11 = 0;
 while (1) {
  i15 = i16 & i9;
  i19 = i17 + (i15 * 12 & -1) | 0;
  i14 = HEAP32[i19 >> 2] | 0;
  if ((i14 | 0) == 0) {
   if ((HEAP32[i17 + (i15 * 12 & -1) + 4 >> 2] | 0) == 0) {
    break;
   }
  }
  if ((i14 | 0) == (HEAP32[i6 >> 2] | 0)) {
   if ((HEAP32[i17 + (i15 * 12 & -1) + 4 >> 2] | 0) == (HEAP32[i13 >> 2] | 0)) {
    i20 = 17;
    break;
   }
  }
  i21 = (i11 | 0) == 0 ? i10 : i11;
  i12 = (i14 | 0) == -1 ? i19 : i12;
  i16 = i21 + i15 | 0;
  i11 = i21;
 }
 if ((i20 | 0) == 17) {
  i11 = i17 + ((HEAP32[i2 + 4 >> 2] | 0) * 12 & -1) | 0;
  i17 = i1;
  HEAP32[i17 >> 2] = i19;
  HEAP32[i17 + 4 >> 2] = i11;
  HEAP8[i1 + 8 | 0] = 0;
  STACKTOP = i5;
  return;
 }
 if ((i12 | 0) == 0) {
  i22 = i19;
  i23 = i2 + 16 | 0;
 } else {
  _memset(i12 | 0, 0, 12) | 0;
  i19 = i2 + 16 | 0;
  HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) - 1;
  i22 = i12;
  i23 = i19;
 }
 i19 = i3;
 i3 = i22;
 i12 = HEAP32[i19 + 4 >> 2] | 0;
 HEAP32[i3 >> 2] = HEAP32[i19 >> 2];
 HEAP32[i3 + 4 >> 2] = i12;
 HEAP32[i22 + 8 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i12 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i12;
 i4 = i2 + 4 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i23 >> 2] | 0) + i12 << 1 | 0) < (i3 | 0)) {
  i24 = i22;
  i25 = i3;
 } else {
  i19 = (i3 | 0) == 0;
  if (i19) {
   i26 = 8;
  } else {
   i11 = i3 << 1;
   i26 = (i12 * 6 & -1 | 0) < (i11 | 0) ? i3 : i11;
  }
  i11 = HEAP32[i8 >> 2] | 0;
  HEAP32[i4 >> 2] = i26;
  HEAP32[i18 >> 2] = i26 - 1;
  HEAP32[i8 >> 2] = __ZN3WTF16fastZeroedMallocEj(i26 * 12 & -1) | 0;
  if (i19) {
   i27 = 0;
  } else {
   i19 = i7 | 0;
   i26 = 0;
   i18 = 0;
   while (1) {
    i12 = i11 + (i26 * 12 & -1) | 0;
    i17 = HEAP32[i12 >> 2] | 0;
    i16 = i17;
    if ((i16 | 0) == 0) {
     if ((HEAP32[i11 + (i26 * 12 & -1) + 4 >> 2] | 0) == 0 | (i17 | 0) == -1) {
      i28 = i18;
     } else {
      i20 = 29;
     }
    } else if ((i16 | 0) == (-1 | 0)) {
     i28 = i18;
    } else {
     i20 = 29;
    }
    if ((i20 | 0) == 29) {
     i20 = 0;
     __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E16lookupForWritingINS_22IdentityHashTranslatorIS9_EES2_EENSt3__14pairIPS6_bEERKT0_(i7, i2, i12 | 0);
     i16 = HEAP32[i19 >> 2] | 0;
     i17 = i16;
     i10 = i12;
     HEAP32[i17 >> 2] = HEAP32[i10 >> 2];
     HEAP32[i17 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
     HEAP32[i17 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
     i28 = (i12 | 0) == (i22 | 0) ? i16 : i18;
    }
    i16 = i26 + 1 | 0;
    if ((i16 | 0) == (i3 | 0)) {
     i27 = i28;
     break;
    } else {
     i26 = i16;
     i18 = i28;
    }
   }
  }
  HEAP32[i23 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i11);
  i24 = i27;
  i25 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i8 >> 2] | 0) + (i25 * 12 & -1) | 0;
 i25 = i1;
 HEAP32[i25 >> 2] = i24;
 HEAP32[i25 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore13SVGSVGElement29localCoordinateSpaceTransformENS_12SVGLocatable8CTMScopeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, d22 = +0, d23 = +0, d24 = +0, i25 = 0, i26 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 200 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 64 | 0;
 i8 = i4 + 72 | 0;
 i9 = i4 + 120 | 0;
 i10 = i4 + 168 | 0;
 i11 = i4 + 192 | 0;
 i12 = i11;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i14 = i13;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i16 = i15;
 __ZN7WebCore15AffineTransformC1Ev(i6);
 do {
  if ((HEAP8[i2 + 248 | 0] & 2) == 0) {
   i17 = 4;
  } else {
   i18 = __ZNK7WebCore13SVGSVGElement7viewBoxEv(i2) | 0;
   if (+HEAPF32[i18 + 8 >> 2] <= +0) {
    break;
   }
   if (+HEAPF32[i18 + 12 >> 2] > +0) {
    i17 = 4;
   }
  }
 } while (0);
 if ((i17 | 0) == 4) {
  __ZNK7WebCore13SVGSVGElement19currentViewportSizeEv(i7, i2);
  __ZNK7WebCore13SVGSVGElement22viewBoxToViewTransformEff(i8, i2, +HEAPF32[i7 >> 2], +HEAPF32[i7 + 4 >> 2]);
  i7 = i6;
  i17 = i8;
  HEAP32[i7 >> 2] = HEAP32[i17 >> 2];
  HEAP32[i7 + 4 >> 2] = HEAP32[i17 + 4 >> 2];
  HEAP32[i7 + 8 >> 2] = HEAP32[i17 + 8 >> 2];
  HEAP32[i7 + 12 >> 2] = HEAP32[i17 + 12 >> 2];
  HEAP32[i7 + 16 >> 2] = HEAP32[i17 + 16 >> 2];
  HEAP32[i7 + 20 >> 2] = HEAP32[i17 + 20 >> 2];
  HEAP32[i7 + 24 >> 2] = HEAP32[i17 + 24 >> 2];
  HEAP32[i7 + 28 >> 2] = HEAP32[i17 + 28 >> 2];
  HEAP32[i7 + 32 >> 2] = HEAP32[i17 + 32 >> 2];
  HEAP32[i7 + 36 >> 2] = HEAP32[i17 + 36 >> 2];
  HEAP32[i7 + 40 >> 2] = HEAP32[i17 + 40 >> 2];
  HEAP32[i7 + 44 >> 2] = HEAP32[i17 + 44 >> 2];
 }
 __ZN7WebCore15AffineTransformC1Ev(i9);
 i17 = i2 | 0;
 do {
  if (__ZNK7WebCore10SVGElement24isOutermostSVGSVGElementEv(i17) | 0) {
   if ((i3 | 0) != 1) {
    break;
   }
   i7 = i2 + 32 | 0;
   if ((HEAP32[i2 + 12 >> 2] & 2048 | 0) == 0) {
    i19 = i7 | 0;
   } else {
    i19 = HEAP32[i7 >> 2] | 0;
   }
   i7 = HEAP32[i19 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   i8 = i11;
   HEAPF32[i8 >> 2] = +0;
   i18 = i12 + 4 | 0;
   HEAPF32[i18 >> 2] = +0;
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 324 >> 2] & 255](i7) | 0) {
    __ZNK7WebCore15AffineTransform8mapPointERKNS_10FloatPointE(i14, i7 + 224 | 0, i12);
    i20 = HEAP32[i13 + 4 >> 2] | 0;
    HEAP32[i11 >> 2] = HEAP32[i13 >> 2];
    HEAP32[i11 + 4 >> 2] = i20;
    if ((HEAP32[i7 + 20 >> 2] & 768 | 0) == 256) {
     i21 = HEAP32[(HEAP32[i7 + 8 >> 2] | 0) + 36 >> 2] | 0;
    } else {
     i21 = HEAP32[i7 + 36 >> 2] | 0;
    }
    d22 = +1 / +HEAPF32[(HEAP32[i21 + 24 >> 2] | 0) + 80 >> 2];
   } else {
    d22 = +1;
   }
   __ZNK7WebCore12RenderObject15localToAbsoluteERKNS_10FloatPointEj(i16, i7, i12, 2);
   i7 = HEAP32[i15 >> 2] | 0;
   i20 = HEAP32[i15 + 4 >> 2] | 0;
   HEAP32[i11 >> 2] = i7;
   HEAP32[i11 + 4 >> 2] = i20;
   d23 = d22 * (HEAP32[tempDoublePtr >> 2] = i7, +HEAPF32[tempDoublePtr >> 2]);
   HEAPF32[i8 >> 2] = d23;
   d24 = d22 * (HEAP32[tempDoublePtr >> 2] = i20, +HEAPF32[tempDoublePtr >> 2]);
   HEAPF32[i18 >> 2] = d24;
   __ZN7WebCore15AffineTransform9translateEdd(i9, d23 - +HEAPF64[i6 + 32 >> 3], d24 - +HEAPF64[i6 + 40 >> 3]) | 0;
   i18 = __ZNK7WebCore8Document4viewEv(HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   i20 = i5 | 0;
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i18 >> 2] | 0) + 164 >> 2] & 63](i5, i18 | 0, 0);
   i18 = HEAP32[i20 + 4 >> 2] | 0;
   d24 = d22 * +(HEAP32[i20 >> 2] | 0);
   do {
    if (d24 < +2147483647) {
     if (d24 <= +-2147483648) {
      i25 = -2147483648;
      break;
     }
     i25 = ~~d24;
    } else {
     i25 = 2147483647;
    }
   } while (0);
   d24 = d22 * +(i18 | 0);
   do {
    if (d24 < +2147483647) {
     if (d24 <= +-2147483648) {
      i26 = -2147483648;
      break;
     }
     i26 = ~~d24;
    } else {
     i26 = 2147483647;
    }
   } while (0);
   __ZN7WebCore15AffineTransform9translateEdd(i9, +(-i25 | 0), +(-i26 | 0)) | 0;
  } else {
   __ZN7WebCore16SVGLengthContextC1EPKNS_10SVGElementE(i10, i17);
   d24 = +__ZNK7WebCore9SVGLength5valueERKNS_16SVGLengthContextE(__ZNK7WebCore13SVGSVGElement1xEv(i2) | 0, i10);
   __ZN7WebCore15AffineTransform9translateEdd(i9, d24, +__ZNK7WebCore9SVGLength5valueERKNS_16SVGLengthContextE(__ZNK7WebCore13SVGSVGElement1yEv(i2) | 0, i10)) | 0;
  }
 } while (0);
 i10 = i1;
 i1 = __ZN7WebCore15AffineTransform8multiplyERKS0_(i9, i6) | 0;
 HEAP32[i10 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i10 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 HEAP32[i10 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
 HEAP32[i10 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
 HEAP32[i10 + 16 >> 2] = HEAP32[i1 + 16 >> 2];
 HEAP32[i10 + 20 >> 2] = HEAP32[i1 + 20 >> 2];
 HEAP32[i10 + 24 >> 2] = HEAP32[i1 + 24 >> 2];
 HEAP32[i10 + 28 >> 2] = HEAP32[i1 + 28 >> 2];
 HEAP32[i10 + 32 >> 2] = HEAP32[i1 + 32 >> 2];
 HEAP32[i10 + 36 >> 2] = HEAP32[i1 + 36 >> 2];
 HEAP32[i10 + 40 >> 2] = HEAP32[i1 + 40 >> 2];
 HEAP32[i10 + 44 >> 2] = HEAP32[i1 + 44 >> 2];
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore13SVGSVGElement22viewBoxToViewTransformEff(i1, i2, d3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 144 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i5 + 64 | 0;
 i9 = i5 + 80 | 0;
 i10 = i5 + 96 | 0;
 do {
  if ((HEAP8[i2 + 264 | 0] & 1) != 0) {
   i11 = i2 + 284 | 0;
   if ((HEAP32[i11 >> 2] | 0) == 0) {
    break;
   }
   __ZNK7WebCore13SVGSVGElement18currentViewBoxRectEv(i8, i2);
   __ZN7WebCore15SVGFitToViewBox22viewBoxToViewTransformERKNS_9FloatRectERKNS_22SVGPreserveAspectRatioEff(i7, i8, (HEAP32[i11 >> 2] | 0) + 44 | 0, d3, d4);
   i12 = HEAP32[i11 >> 2] | 0;
   i11 = HEAP32[i12 + 20 >> 2] | 0;
   i13 = i12 + 24 | 0;
   i14 = HEAP32[i13 >> 2] | 0;
   i15 = i9 | 0;
   HEAP32[i15 >> 2] = 0;
   i16 = i9 + 4 | 0;
   HEAP32[i16 >> 2] = 0;
   i17 = i9 + 8 | 0;
   HEAP32[i17 >> 2] = i14;
   if ((i11 | 0) == 0) {
    i18 = i14;
   } else {
    if (i11 >>> 0 > 67108863 >>> 0) {
     _WTFCrash();
    }
    i14 = __ZN3WTF18fastMallocGoodSizeEj(i11 << 6) | 0;
    HEAP32[i16 >> 2] = i14 >>> 6;
    i11 = __ZN3WTF10fastMallocEj(i14) | 0;
    i14 = i11;
    HEAP32[i15 >> 2] = i14;
    do {
     if ((i11 | 0) != 0) {
      i19 = HEAP32[i12 + 16 >> 2] | 0;
      i20 = HEAP32[i13 >> 2] | 0;
      i21 = i19 + (i20 << 6) | 0;
      if ((i20 | 0) == 0) {
       break;
      } else {
       i22 = i19;
       i23 = i14;
      }
      while (1) {
       _memcpy(i23 | 0, i22 | 0, 64) | 0;
       i19 = i22 + 64 | 0;
       if ((i19 | 0) == (i21 | 0)) {
        break;
       } else {
        i22 = i19;
        i23 = i23 + 64 | 0;
       }
      }
     }
    } while (0);
    i18 = HEAP32[i17 >> 2] | 0;
   }
   do {
    if ((i18 | 0) == 0) {
     i14 = i1;
     i13 = i7;
     HEAP32[i14 >> 2] = HEAP32[i13 >> 2];
     HEAP32[i14 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
     HEAP32[i14 + 8 >> 2] = HEAP32[i13 + 8 >> 2];
     HEAP32[i14 + 12 >> 2] = HEAP32[i13 + 12 >> 2];
     HEAP32[i14 + 16 >> 2] = HEAP32[i13 + 16 >> 2];
     HEAP32[i14 + 20 >> 2] = HEAP32[i13 + 20 >> 2];
     HEAP32[i14 + 24 >> 2] = HEAP32[i13 + 24 >> 2];
     HEAP32[i14 + 28 >> 2] = HEAP32[i13 + 28 >> 2];
     HEAP32[i14 + 32 >> 2] = HEAP32[i13 + 32 >> 2];
     HEAP32[i14 + 36 >> 2] = HEAP32[i13 + 36 >> 2];
     HEAP32[i14 + 40 >> 2] = HEAP32[i13 + 40 >> 2];
     HEAP32[i14 + 44 >> 2] = HEAP32[i13 + 44 >> 2];
    } else {
     __ZN7WebCore15AffineTransformC1Ev(i10);
     if (__ZNK7WebCore16SVGTransformList11concatenateERNS_15AffineTransformE(i9, i10) | 0) {
      __ZN7WebCore15AffineTransform8multiplyERKS0_(i7, i10) | 0;
     }
     i13 = i1;
     i14 = i7;
     HEAP32[i13 >> 2] = HEAP32[i14 >> 2];
     HEAP32[i13 + 4 >> 2] = HEAP32[i14 + 4 >> 2];
     HEAP32[i13 + 8 >> 2] = HEAP32[i14 + 8 >> 2];
     HEAP32[i13 + 12 >> 2] = HEAP32[i14 + 12 >> 2];
     HEAP32[i13 + 16 >> 2] = HEAP32[i14 + 16 >> 2];
     HEAP32[i13 + 20 >> 2] = HEAP32[i14 + 20 >> 2];
     HEAP32[i13 + 24 >> 2] = HEAP32[i14 + 24 >> 2];
     HEAP32[i13 + 28 >> 2] = HEAP32[i14 + 28 >> 2];
     HEAP32[i13 + 32 >> 2] = HEAP32[i14 + 32 >> 2];
     HEAP32[i13 + 36 >> 2] = HEAP32[i14 + 36 >> 2];
     HEAP32[i13 + 40 >> 2] = HEAP32[i14 + 40 >> 2];
     HEAP32[i13 + 44 >> 2] = HEAP32[i14 + 44 >> 2];
     if ((HEAP32[i17 >> 2] | 0) == 0) {
      break;
     }
     HEAP32[i17 >> 2] = 0;
    }
   } while (0);
   i17 = HEAP32[i15 >> 2] | 0;
   if ((i17 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   HEAP32[i15 >> 2] = 0;
   HEAP32[i16 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i17);
   STACKTOP = i5;
   return;
  }
 } while (0);
 __ZNK7WebCore13SVGSVGElement18currentViewBoxRectEv(i6, i2);
 __ZN7WebCore15SVGFitToViewBox22viewBoxToViewTransformERKNS_9FloatRectERKNS_22SVGPreserveAspectRatioEff(i1, i6, __ZNK7WebCore13SVGSVGElement19preserveAspectRatioEv(i2) | 0, d3, d4);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore17SVGPropertyTraitsINS_9FloatRectEE8toStringERKS1_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i7 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i7 + 4 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7 + 8 | 0;
 HEAP32[i10 >> 2] = 0;
 i11 = i7 + 12 | 0;
 HEAP8[i11] = 1;
 HEAP32[i7 + 16 >> 2] = 0;
 i12 = i7 + 20 | 0;
 HEAP32[i12 >> 2] = 0;
 __ZN3WTF13StringBuilder12appendNumberEdjNS_29TrailingZerosTruncatingPolicyE(i7, +HEAPF32[i2 >> 2], 6, 1);
 HEAP8[i6] = 32;
 i13 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i13 | 0) == 0) {
   i14 = 7;
  } else {
   i15 = HEAP32[i8 >> 2] | 0;
   if (i15 >>> 0 >= (HEAP32[i13 + 4 >> 2] | 0) >>> 0) {
    i14 = 7;
    break;
   }
   if ((HEAP32[i9 >> 2] | 0) != 0) {
    i14 = 7;
    break;
   }
   i16 = (HEAP8[i11] & 1) == 0;
   HEAP32[i8 >> 2] = i15 + 1;
   if (i16) {
    HEAP16[(HEAP32[i7 + 20 >> 2] | 0) + (i15 << 1) >> 1] = 32;
    break;
   } else {
    HEAP8[(HEAP32[i12 >> 2] | 0) + i15 | 0] = 32;
    break;
   }
  }
 } while (0);
 if ((i14 | 0) == 7) {
  __ZN3WTF13StringBuilder6appendEPKhj(i7, i6, 1);
 }
 __ZN3WTF13StringBuilder12appendNumberEdjNS_29TrailingZerosTruncatingPolicyE(i7, +HEAPF32[i2 + 4 >> 2], 6, 1);
 HEAP8[i5] = 32;
 i6 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   i14 = 14;
  } else {
   i13 = HEAP32[i8 >> 2] | 0;
   if (i13 >>> 0 >= (HEAP32[i6 + 4 >> 2] | 0) >>> 0) {
    i14 = 14;
    break;
   }
   if ((HEAP32[i9 >> 2] | 0) != 0) {
    i14 = 14;
    break;
   }
   i15 = (HEAP8[i11] & 1) == 0;
   HEAP32[i8 >> 2] = i13 + 1;
   if (i15) {
    HEAP16[(HEAP32[i7 + 20 >> 2] | 0) + (i13 << 1) >> 1] = 32;
    break;
   } else {
    HEAP8[(HEAP32[i12 >> 2] | 0) + i13 | 0] = 32;
    break;
   }
  }
 } while (0);
 if ((i14 | 0) == 14) {
  __ZN3WTF13StringBuilder6appendEPKhj(i7, i5, 1);
 }
 __ZN3WTF13StringBuilder12appendNumberEdjNS_29TrailingZerosTruncatingPolicyE(i7, +HEAPF32[i2 + 8 >> 2], 6, 1);
 HEAP8[i4] = 32;
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i14 = 21;
  } else {
   i6 = HEAP32[i8 >> 2] | 0;
   if (i6 >>> 0 >= (HEAP32[i5 + 4 >> 2] | 0) >>> 0) {
    i14 = 21;
    break;
   }
   if ((HEAP32[i9 >> 2] | 0) != 0) {
    i14 = 21;
    break;
   }
   i13 = (HEAP8[i11] & 1) == 0;
   HEAP32[i8 >> 2] = i6 + 1;
   if (i13) {
    HEAP16[(HEAP32[i7 + 20 >> 2] | 0) + (i6 << 1) >> 1] = 32;
    break;
   } else {
    HEAP8[(HEAP32[i12 >> 2] | 0) + i6 | 0] = 32;
    break;
   }
  }
 } while (0);
 if ((i14 | 0) == 21) {
  __ZN3WTF13StringBuilder6appendEPKhj(i7, i4, 1);
 }
 __ZN3WTF13StringBuilder12appendNumberEdjNS_29TrailingZerosTruncatingPolicyE(i7, +HEAPF32[i2 + 12 >> 2], 6, 1);
 __ZN3WTF13StringBuilder11shrinkToFitEv(i7);
 i2 = HEAP32[i9 >> 2] | 0;
 if ((i2 | 0) == 0) {
  __ZNK3WTF13StringBuilder11reifyStringEv(i7);
  i7 = HEAP32[i9 >> 2] | 0;
  HEAP32[i1 >> 2] = i7;
  if ((i7 | 0) != 0) {
   i17 = i7;
   i14 = 25;
  }
 } else {
  HEAP32[i1 >> 2] = i2;
  i17 = i2;
  i14 = 25;
 }
 if ((i14 | 0) == 25) {
  i14 = i17 | 0;
  HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
 }
 i14 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i10 = i14 | 0;
   i17 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i17 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i10 >> 2] = i17;
    break;
   }
  }
 } while (0);
 i14 = HEAP32[i9 >> 2] | 0;
 if ((i14 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i9 = i14 | 0;
 i17 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
 if ((i17 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i14);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i9 >> 2] = i17;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore13SVGSVGElement19currentViewportSizeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, d16 = +0, d17 = +0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i3 + 48 | 0;
 i11 = i3 + 56 | 0;
 i12 = i3 + 64 | 0;
 i13 = i3 + 72 | 0;
 __ZNK7WebCore13SVGSVGElement14intrinsicWidthENS0_15ConsiderCSSModeE(i12, i2, 0);
 __ZNK7WebCore13SVGSVGElement15intrinsicHeightENS0_15ConsiderCSSModeE(i13, i2, 0);
 i14 = i12 + 5 | 0;
 do {
  if ((HEAP8[i14] | 0) == 3) {
   if ((HEAP8[i13 + 5 | 0] | 0) != 3) {
    i15 = 4;
    break;
   }
   d16 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i12, +0, 0);
   d17 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i13, +0, 0);
   HEAPF32[i1 >> 2] = d16;
   HEAPF32[i1 + 4 >> 2] = d17;
  } else {
   i15 = 4;
  }
 } while (0);
 do {
  if ((i15 | 0) == 4) {
   i18 = i2 + 12 | 0;
   i19 = (HEAP32[i18 >> 2] & 2048 | 0) == 0;
   i20 = i2 + 32 | 0;
   if (i19) {
    i21 = i20 | 0;
   } else {
    i21 = HEAP32[i20 >> 2] | 0;
   }
   if ((HEAP32[i21 >> 2] | 0) == 0) {
    HEAPF32[i1 >> 2] = +0;
    HEAPF32[i1 + 4 >> 2] = +0;
    break;
   }
   if (i19) {
    i22 = i20 | 0;
   } else {
    i22 = HEAP32[i20 >> 2] | 0;
   }
   i19 = HEAP32[i22 >> 2] | 0;
   i23 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 324 >> 2] & 255](i19) | 0;
   if ((HEAP32[i18 >> 2] & 2048 | 0) == 0) {
    i24 = i20 | 0;
   } else {
    i24 = HEAP32[i20 >> 2] | 0;
   }
   i19 = HEAP32[i24 >> 2] | 0;
   if (!i23) {
    d17 = +HEAPF32[i19 + 112 >> 2];
    HEAPF32[i1 >> 2] = +HEAPF32[i19 + 108 >> 2];
    HEAPF32[i1 + 4 >> 2] = d17;
    break;
   }
   i23 = i19;
   i25 = i19;
   i26 = i19;
   FUNCTION_TABLE_ii[HEAP32[(HEAP32[i26 >> 2] | 0) + 744 >> 2] & 255](i25) | 0;
   i27 = i19;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i27 >> 2] | 0) + 712 >> 2] & 127](i10, i25);
   FUNCTION_TABLE_ii[HEAP32[(HEAP32[i26 >> 2] | 0) + 736 >> 2] & 255](i25) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i27 >> 2] | 0) + 704 >> 2] & 127](i11, i25);
   __ZNK7WebCore9RenderBox11clientWidthEv(i4, i23);
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i27 >> 2] | 0) + 712 >> 2] & 127](i5, i25);
   i26 = (HEAP32[i4 >> 2] | 0) - (HEAP32[i5 >> 2] | 0) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i27 >> 2] | 0) + 716 >> 2] & 127](i6, i25);
   i19 = i26 - (HEAP32[i6 >> 2] | 0) | 0;
   __ZNK7WebCore9RenderBox12clientHeightEv(i7, i23);
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i27 >> 2] | 0) + 704 >> 2] & 127](i8, i25);
   i23 = (HEAP32[i7 >> 2] | 0) - (HEAP32[i8 >> 2] | 0) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i27 >> 2] | 0) + 708 >> 2] & 127](i9, i25);
   i25 = (HEAP32[i18 >> 2] & 2048 | 0) == 0;
   if (i25) {
    i28 = i20 | 0;
   } else {
    i28 = HEAP32[i20 >> 2] | 0;
   }
   if (i25) {
    i29 = i20 | 0;
   } else {
    i29 = HEAP32[i20 >> 2] | 0;
   }
   d17 = +(i23 - (HEAP32[i9 >> 2] | 0) | 0) / +HEAPF32[(HEAP32[(HEAP32[(HEAP32[i29 >> 2] | 0) + 36 >> 2] | 0) + 24 >> 2] | 0) + 80 >> 2];
   HEAPF32[i1 >> 2] = +(i19 | 0) / +HEAPF32[(HEAP32[(HEAP32[(HEAP32[i28 >> 2] | 0) + 36 >> 2] | 0) + 24 >> 2] | 0) + 80 >> 2];
   HEAPF32[i1 + 4 >> 2] = d17;
  }
 } while (0);
 if ((HEAP8[i13 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i13);
 }
 if ((HEAP8[i14] | 0) != 10) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i12);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore19SVGAnimatedProperty21lookupOrCreateWrapperINS_13SVGSVGElementENS_26SVGAnimatedPropertyTearOffINS_22SVGPreserveAspectRatioEEES4_EEN3WTF10PassRefPtrIT0_EEPT_PKNS_15SVGPropertyInfoERT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i2 | 0;
 i2 = HEAP32[i3 + 12 >> 2] | 0;
 HEAP32[i6 >> 2] = i9;
 HEAP32[i6 + 4 >> 2] = HEAP32[i2 >> 2];
 i2 = __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS9_EES2_EEPS6_RKT0_(__ZN7WebCore19SVGAnimatedProperty21animatedPropertyCacheEv() | 0, i6) | 0;
 do {
  if ((i2 | 0) == 0) {
   i10 = 4;
  } else {
   i11 = HEAP32[i2 + 8 >> 2] | 0;
   if ((i11 | 0) == 0) {
    i10 = 4;
    break;
   }
   i12 = i11 + 4 | 0;
   i13 = (HEAP32[i12 >> 2] | 0) + 1 | 0;
   HEAP32[i12 >> 2] = i13;
   i14 = i11;
   i15 = i11;
   i16 = i13;
   i10 = 10;
  }
 } while (0);
 do {
  if ((i10 | 0) == 4) {
   i2 = HEAP32[i3 + 8 >> 2] | 0;
   i13 = HEAP32[i3 >> 2] | 0;
   i11 = __ZN3WTF10fastMallocEj(36) | 0;
   i12 = i11;
   __ZN7WebCore19SVGAnimatedPropertyC2EPNS_10SVGElementERKNS_13QualifiedNameENS_20AnimatedPropertyTypeE(i12, i9, i2, i13);
   HEAP32[i11 >> 2] = H_BASE + 200;
   HEAP32[i11 + 24 >> 2] = i4;
   HEAP32[i11 + 28 >> 2] = 0;
   HEAP32[i11 + 32 >> 2] = 0;
   if ((HEAP32[i3 + 4 >> 2] | 0) == 1) {
    HEAP8[i11 + 21 | 0] = 1;
   }
   i13 = __ZN7WebCore19SVGAnimatedProperty21animatedPropertyCacheEv() | 0;
   HEAP32[i7 >> 2] = i12;
   __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISF_S9_EERKS2_S5_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S6_S8_S9_SF_SB_EEEEOT0_OT1_(i8, i13 | 0, i6, i7);
   if ((HEAP8[i8 + 8 | 0] & 1) == 0) {
    HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] = HEAP32[i7 >> 2];
   }
   i13 = i11;
   if ((i11 | 0) == 0) {
    i17 = 0;
    i18 = i13;
    i19 = 1;
    break;
   }
   i14 = i12;
   i15 = i13;
   i16 = HEAP32[i11 + 4 >> 2] | 0;
   i10 = 10;
  }
 } while (0);
 if ((i10 | 0) == 10) {
  HEAP32[i14 + 4 >> 2] = i16 + 1;
  i17 = i14;
  i18 = i15;
  i19 = 0;
 }
 HEAP32[i1 >> 2] = i18;
 do {
  if ((i18 | 0) != 0) {
   i1 = i18 + 4 | 0;
   i15 = HEAP32[i1 >> 2] | 0;
   HEAP32[i1 >> 2] = i15 + 1;
   i1 = i18 + 4 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i1 >> 2] = i15;
    break;
   }
   i15 = i1 - 4 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 8 >> 2] & 127](i15);
  }
 } while (0);
 if (i19) {
  STACKTOP = i5;
  return;
 }
 i19 = i17 + 4 | 0;
 i17 = i19 | 0;
 i18 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
 if ((i18 | 0) != 0) {
  HEAP32[i17 >> 2] = i18;
  STACKTOP = i5;
  return;
 }
 i18 = i19 - 4 | 0;
 if ((i18 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 8 >> 2] & 127](i18);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore19SVGAnimatedProperty21lookupOrCreateWrapperINS_13SVGSVGElementENS_26SVGAnimatedPropertyTearOffINS_9SVGLengthEEES4_EEN3WTF10PassRefPtrIT0_EEPT_PKNS_15SVGPropertyInfoERT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i2 | 0;
 i2 = HEAP32[i3 + 12 >> 2] | 0;
 HEAP32[i6 >> 2] = i9;
 HEAP32[i6 + 4 >> 2] = HEAP32[i2 >> 2];
 i2 = __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS9_EES2_EEPS6_RKT0_(__ZN7WebCore19SVGAnimatedProperty21animatedPropertyCacheEv() | 0, i6) | 0;
 do {
  if ((i2 | 0) == 0) {
   i10 = 4;
  } else {
   i11 = HEAP32[i2 + 8 >> 2] | 0;
   if ((i11 | 0) == 0) {
    i10 = 4;
    break;
   }
   i12 = i11 + 4 | 0;
   i13 = (HEAP32[i12 >> 2] | 0) + 1 | 0;
   HEAP32[i12 >> 2] = i13;
   i14 = i11;
   i15 = i11;
   i16 = i13;
   i10 = 10;
  }
 } while (0);
 do {
  if ((i10 | 0) == 4) {
   i2 = HEAP32[i3 + 8 >> 2] | 0;
   i13 = HEAP32[i3 >> 2] | 0;
   i11 = __ZN3WTF10fastMallocEj(36) | 0;
   i12 = i11;
   __ZN7WebCore19SVGAnimatedPropertyC2EPNS_10SVGElementERKNS_13QualifiedNameENS_20AnimatedPropertyTypeE(i12, i9, i2, i13);
   HEAP32[i11 >> 2] = H_BASE + 136;
   HEAP32[i11 + 24 >> 2] = i4;
   HEAP32[i11 + 28 >> 2] = 0;
   HEAP32[i11 + 32 >> 2] = 0;
   if ((HEAP32[i3 + 4 >> 2] | 0) == 1) {
    HEAP8[i11 + 21 | 0] = 1;
   }
   i13 = __ZN7WebCore19SVGAnimatedProperty21animatedPropertyCacheEv() | 0;
   HEAP32[i7 >> 2] = i12;
   __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISF_S9_EERKS2_S5_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S6_S8_S9_SF_SB_EEEEOT0_OT1_(i8, i13 | 0, i6, i7);
   if ((HEAP8[i8 + 8 | 0] & 1) == 0) {
    HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] = HEAP32[i7 >> 2];
   }
   i13 = i11;
   if ((i11 | 0) == 0) {
    i17 = 0;
    i18 = i13;
    i19 = 1;
    break;
   }
   i14 = i12;
   i15 = i13;
   i16 = HEAP32[i11 + 4 >> 2] | 0;
   i10 = 10;
  }
 } while (0);
 if ((i10 | 0) == 10) {
  HEAP32[i14 + 4 >> 2] = i16 + 1;
  i17 = i14;
  i18 = i15;
  i19 = 0;
 }
 HEAP32[i1 >> 2] = i18;
 do {
  if ((i18 | 0) != 0) {
   i1 = i18 + 4 | 0;
   i15 = HEAP32[i1 >> 2] | 0;
   HEAP32[i1 >> 2] = i15 + 1;
   i1 = i18 + 4 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i1 >> 2] = i15;
    break;
   }
   i15 = i1 - 4 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 8 >> 2] & 127](i15);
  }
 } while (0);
 if (i19) {
  STACKTOP = i5;
  return;
 }
 i19 = i17 + 4 | 0;
 i17 = i19 | 0;
 i18 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
 if ((i18 | 0) != 0) {
  HEAP32[i17 >> 2] = i18;
  STACKTOP = i5;
  return;
 }
 i18 = i19 - 4 | 0;
 if ((i18 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 8 >> 2] & 127](i18);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore19SVGAnimatedProperty21lookupOrCreateWrapperINS_13SVGSVGElementENS_26SVGAnimatedPropertyTearOffINS_9FloatRectEEES4_EEN3WTF10PassRefPtrIT0_EEPT_PKNS_15SVGPropertyInfoERT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i2 | 0;
 i2 = HEAP32[i3 + 12 >> 2] | 0;
 HEAP32[i6 >> 2] = i9;
 HEAP32[i6 + 4 >> 2] = HEAP32[i2 >> 2];
 i2 = __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS9_EES2_EEPS6_RKT0_(__ZN7WebCore19SVGAnimatedProperty21animatedPropertyCacheEv() | 0, i6) | 0;
 do {
  if ((i2 | 0) == 0) {
   i10 = 4;
  } else {
   i11 = HEAP32[i2 + 8 >> 2] | 0;
   if ((i11 | 0) == 0) {
    i10 = 4;
    break;
   }
   i12 = i11 + 4 | 0;
   i13 = (HEAP32[i12 >> 2] | 0) + 1 | 0;
   HEAP32[i12 >> 2] = i13;
   i14 = i11;
   i15 = i11;
   i16 = i13;
   i10 = 10;
  }
 } while (0);
 do {
  if ((i10 | 0) == 4) {
   i2 = HEAP32[i3 + 8 >> 2] | 0;
   i13 = HEAP32[i3 >> 2] | 0;
   i11 = __ZN3WTF10fastMallocEj(36) | 0;
   i12 = i11;
   __ZN7WebCore19SVGAnimatedPropertyC2EPNS_10SVGElementERKNS_13QualifiedNameENS_20AnimatedPropertyTypeE(i12, i9, i2, i13);
   HEAP32[i11 >> 2] = H_BASE + 168;
   HEAP32[i11 + 24 >> 2] = i4;
   HEAP32[i11 + 28 >> 2] = 0;
   HEAP32[i11 + 32 >> 2] = 0;
   if ((HEAP32[i3 + 4 >> 2] | 0) == 1) {
    HEAP8[i11 + 21 | 0] = 1;
   }
   i13 = __ZN7WebCore19SVGAnimatedProperty21animatedPropertyCacheEv() | 0;
   HEAP32[i7 >> 2] = i12;
   __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISF_S9_EERKS2_S5_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S6_S8_S9_SF_SB_EEEEOT0_OT1_(i8, i13 | 0, i6, i7);
   if ((HEAP8[i8 + 8 | 0] & 1) == 0) {
    HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] = HEAP32[i7 >> 2];
   }
   i13 = i11;
   if ((i11 | 0) == 0) {
    i17 = 0;
    i18 = i13;
    i19 = 1;
    break;
   }
   i14 = i12;
   i15 = i13;
   i16 = HEAP32[i11 + 4 >> 2] | 0;
   i10 = 10;
  }
 } while (0);
 if ((i10 | 0) == 10) {
  HEAP32[i14 + 4 >> 2] = i16 + 1;
  i17 = i14;
  i18 = i15;
  i19 = 0;
 }
 HEAP32[i1 >> 2] = i18;
 do {
  if ((i18 | 0) != 0) {
   i1 = i18 + 4 | 0;
   i15 = HEAP32[i1 >> 2] | 0;
   HEAP32[i1 >> 2] = i15 + 1;
   i1 = i18 + 4 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i1 >> 2] = i15;
    break;
   }
   i15 = i1 - 4 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 8 >> 2] & 127](i15);
  }
 } while (0);
 if (i19) {
  STACKTOP = i5;
  return;
 }
 i19 = i17 + 4 | 0;
 i17 = i19 | 0;
 i18 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
 if ((i18 | 0) != 0) {
  HEAP32[i17 >> 2] = i18;
  STACKTOP = i5;
  return;
 }
 i18 = i19 - 4 | 0;
 if ((i18 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 8 >> 2] & 127](i18);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore19SVGAnimatedProperty21lookupOrCreateWrapperINS_13SVGSVGElementENS_32SVGAnimatedStaticPropertyTearOffIbEEbEEN3WTF10PassRefPtrIT0_EEPT_PKNS_15SVGPropertyInfoERT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i2 | 0;
 i2 = HEAP32[i3 + 12 >> 2] | 0;
 HEAP32[i6 >> 2] = i9;
 HEAP32[i6 + 4 >> 2] = HEAP32[i2 >> 2];
 i2 = __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS9_EES2_EEPS6_RKT0_(__ZN7WebCore19SVGAnimatedProperty21animatedPropertyCacheEv() | 0, i6) | 0;
 do {
  if ((i2 | 0) == 0) {
   i10 = 4;
  } else {
   i11 = HEAP32[i2 + 8 >> 2] | 0;
   if ((i11 | 0) == 0) {
    i10 = 4;
    break;
   }
   i12 = i11 + 4 | 0;
   i13 = (HEAP32[i12 >> 2] | 0) + 1 | 0;
   HEAP32[i12 >> 2] = i13;
   i14 = i11;
   i15 = i11;
   i16 = i13;
   i10 = 10;
  }
 } while (0);
 do {
  if ((i10 | 0) == 4) {
   i2 = HEAP32[i3 + 8 >> 2] | 0;
   i13 = HEAP32[i3 >> 2] | 0;
   i11 = __ZN3WTF10fastMallocEj(32) | 0;
   i12 = i11;
   __ZN7WebCore19SVGAnimatedPropertyC2EPNS_10SVGElementERKNS_13QualifiedNameENS_20AnimatedPropertyTypeE(i12, i9, i2, i13);
   HEAP32[i11 >> 2] = H_BASE + 104;
   HEAP32[i11 + 24 >> 2] = i4;
   HEAP32[i11 + 28 >> 2] = 0;
   if ((HEAP32[i3 + 4 >> 2] | 0) == 1) {
    HEAP8[i11 + 21 | 0] = 1;
   }
   i13 = __ZN7WebCore19SVGAnimatedProperty21animatedPropertyCacheEv() | 0;
   HEAP32[i7 >> 2] = i12;
   __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISF_S9_EERKS2_S5_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S6_S8_S9_SF_SB_EEEEOT0_OT1_(i8, i13 | 0, i6, i7);
   if ((HEAP8[i8 + 8 | 0] & 1) == 0) {
    HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] = HEAP32[i7 >> 2];
   }
   i13 = i11;
   if ((i11 | 0) == 0) {
    i17 = 0;
    i18 = i13;
    i19 = 1;
    break;
   }
   i14 = i12;
   i15 = i13;
   i16 = HEAP32[i11 + 4 >> 2] | 0;
   i10 = 10;
  }
 } while (0);
 if ((i10 | 0) == 10) {
  HEAP32[i14 + 4 >> 2] = i16 + 1;
  i17 = i14;
  i18 = i15;
  i19 = 0;
 }
 HEAP32[i1 >> 2] = i18;
 do {
  if ((i18 | 0) != 0) {
   i1 = i18 + 4 | 0;
   i15 = HEAP32[i1 >> 2] | 0;
   HEAP32[i1 >> 2] = i15 + 1;
   i1 = i18 + 4 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i1 >> 2] = i15;
    break;
   }
   i15 = i1 - 4 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 8 >> 2] & 127](i15);
  }
 } while (0);
 if (i19) {
  STACKTOP = i5;
  return;
 }
 i19 = i17 + 4 | 0;
 i17 = i19 | 0;
 i18 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
 if ((i18 | 0) != 0) {
  HEAP32[i17 >> 2] = i18;
  STACKTOP = i5;
  return;
 }
 i18 = i19 - 4 | 0;
 if ((i18 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 8 >> 2] & 127](i18);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore13SVGSVGElement14getElementByIdERKN3WTF12AtomicStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i3 = __ZNK7WebCore9TreeScope14getElementByIdERKN3WTF12AtomicStringE(HEAP32[i1 + 20 >> 2] | 0, i2) | 0;
 do {
  if ((i3 | 0) != 0) {
   if (__ZNK7WebCore4Node14isDescendantOfEPKS0_(i3 | 0, i1 | 0) | 0) {
    i4 = i3;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 i3 = i1 + 36 | 0;
 while (1) {
  i5 = HEAP32[i3 >> 2] | 0;
  if ((i5 | 0) == 0) {
   i4 = 0;
   i6 = 35;
   break;
  }
  if ((HEAP32[i5 + 12 >> 2] & 4 | 0) == 0) {
   i3 = i5 + 28 | 0;
  } else {
   break;
  }
 }
 if ((i6 | 0) == 35) {
  return i4 | 0;
 }
 i3 = i2 | 0;
 i2 = i1 | 0;
 i1 = i5;
 L11 : while (1) {
  i5 = i1;
  i7 = HEAP32[i1 + 48 >> 2] | 0;
  L13 : do {
   if ((i7 | 0) == 0) {
    i8 = __ZN3WTF8nullAtomE;
   } else {
    if ((HEAP32[i7 + 16 >> 2] | 0) == 0) {
     i8 = __ZN3WTF8nullAtomE;
     break;
    }
    i9 = HEAP32[i7 + 4 >> 2] | 0;
    if ((i9 & 1 | 0) == 0) {
     i10 = i9 >>> 1 & 134217727;
     i11 = i7 + 20 | 0;
    } else {
     i9 = i7 + 24 | 0;
     i10 = HEAP32[i9 + 8 >> 2] | 0;
     i11 = HEAP32[i9 >> 2] | 0;
    }
    if ((i10 | 0) == 0) {
     i8 = __ZN3WTF8nullAtomE;
     break;
    }
    i9 = HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 1680 >> 2] | 0;
    i12 = i9 + 12 | 0;
    i13 = i9 + 16 | 0;
    i14 = 0;
    while (1) {
     i15 = i11 + (i14 << 3) | 0;
     i16 = HEAP32[i15 >> 2] | 0;
     if ((i16 | 0) == (i9 | 0)) {
      break;
     }
     if ((HEAP32[i16 + 12 >> 2] | 0) == (HEAP32[i12 >> 2] | 0)) {
      if ((HEAP32[i16 + 16 >> 2] | 0) == (HEAP32[i13 >> 2] | 0)) {
       break;
      }
     }
     i16 = i14 + 1 | 0;
     if (i16 >>> 0 < i10 >>> 0) {
      i14 = i16;
     } else {
      i8 = __ZN3WTF8nullAtomE;
      break L13;
     }
    }
    i8 = (i15 | 0) == 0 ? __ZN3WTF8nullAtomE : i11 + (i14 << 3) + 4 | 0;
   }
  } while (0);
  if ((HEAP32[i8 >> 2] | 0) == (HEAP32[i3 >> 2] | 0)) {
   i4 = i5;
   i6 = 36;
   break;
  }
  i7 = HEAP32[i1 + 36 >> 2] | 0;
  do {
   if ((i7 | 0) == 0) {
    if ((i1 | 0) == (i2 | 0)) {
     i4 = 0;
     i6 = 30;
     break L11;
    }
    i13 = HEAP32[i1 + 28 >> 2] | 0;
    if ((i13 | 0) != 0) {
     i17 = i13;
     break;
    }
    i13 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i1, i2) | 0;
    if ((i13 | 0) == 0) {
     i4 = 0;
     i6 = 34;
     break L11;
    } else {
     i17 = i13;
    }
   } else {
    i17 = i7;
   }
  } while (0);
  if ((HEAP32[i17 + 12 >> 2] & 4 | 0) == 0) {
   i18 = i17;
  } else {
   i1 = i17;
   continue;
  }
  while (1) {
   if ((i18 | 0) == (i2 | 0)) {
    i4 = 0;
    i6 = 32;
    break L11;
   }
   i7 = HEAP32[i18 + 28 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i5 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i18, i2) | 0;
    if ((i5 | 0) == 0) {
     i4 = 0;
     i6 = 33;
     break L11;
    } else {
     i19 = i5;
    }
   } else {
    i19 = i7;
   }
   if ((HEAP32[i19 + 12 >> 2] & 4 | 0) == 0) {
    i18 = i19;
   } else {
    i1 = i19;
    continue L11;
   }
  }
 }
 if ((i6 | 0) == 30) {
  return i4 | 0;
 } else if ((i6 | 0) == 32) {
  return i4 | 0;
 } else if ((i6 | 0) == 33) {
  return i4 | 0;
 } else if ((i6 | 0) == 34) {
  return i4 | 0;
 } else if ((i6 | 0) == 36) {
  return i4 | 0;
 }
 return 0;
}
function __ZN7WebCore13SVGSVGElement16setupInitialViewERKN3WTF6StringEPNS_7ElementE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i4 = i1 + 32 | 0;
 if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
  i5 = i4 | 0;
 } else {
  i5 = HEAP32[i4 >> 2] | 0;
 }
 i4 = HEAP32[i5 >> 2] | 0;
 i5 = i1 + 284 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = (i6 | 0) != 0;
 if (i7) {
  __ZN7WebCore11SVGViewSpec5resetEv(i6);
 }
 i8 = i1 + 264 | 0;
 i9 = HEAP8[i8] | 0;
 HEAP8[i8] = 0;
 i10 = i2 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i11, H_BASE + 48 | 0, 9, 1) | 0) {
    if ((i4 | 0) == 0) {
     return;
    }
    if ((i9 & 1) == 0) {
     return;
    }
    __ZN7WebCore17RenderSVGResource42markForLayoutAndParentResourceInvalidationERNS_12RenderObjectEb(i4, 1);
    return;
   }
   i12 = HEAP32[i10 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   if (!(__ZNK3WTF10StringImpl10startsWithEPKcjb(i12, H_BASE + 32 | 0, 8, 1) | 0)) {
    break;
   }
   if (i7) {
    i13 = i6;
   } else {
    do {
     if ((HEAP32[i5 >> 2] | 0) == 0) {
      i12 = __ZN3WTF10fastMallocEj(56) | 0;
      __ZN7WebCore11SVGViewSpecC1EPNS_10SVGElementE(i12, i1 | 0);
      i14 = HEAP32[i5 >> 2] | 0;
      HEAP32[i5 >> 2] = i12;
      if ((i14 | 0) == 0) {
       break;
      }
      i12 = i14 + 4 | 0;
      i14 = i12 | 0;
      i15 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
      if ((i15 | 0) != 0) {
       HEAP32[i14 >> 2] = i15;
       break;
      }
      i15 = i12 - 4 | 0;
      if ((i15 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 127](i15);
     }
    } while (0);
    i13 = HEAP32[i5 >> 2] | 0;
   }
   if (__ZN7WebCore11SVGViewSpec13parseViewSpecERKN3WTF6StringE(i13, i2) | 0) {
    HEAP8[i8] = 1;
   } else {
    __ZN7WebCore11SVGViewSpec5resetEv(i13);
   }
   if ((i4 | 0) == 0) {
    return;
   }
   do {
    if ((i9 & 1) == 0) {
     if ((HEAP8[i8] & 1) != 0) {
      break;
     }
     return;
    }
   } while (0);
   __ZN7WebCore17RenderSVGResource42markForLayoutAndParentResourceInvalidationERNS_12RenderObjectEb(i4, 1);
   return;
  }
 } while (0);
 if ((i3 | 0) == 0) {
  return;
 }
 i4 = HEAP32[i3 + 44 >> 2] | 0;
 i8 = HEAP32[__ZN7WebCore8SVGNames7viewTagE >> 2] | 0;
 do {
  if ((i4 | 0) != (i8 | 0)) {
   if ((HEAP32[i4 + 12 >> 2] | 0) != (HEAP32[i8 + 12 >> 2] | 0)) {
    return;
   }
   if ((HEAP32[i4 + 16 >> 2] | 0) == (HEAP32[i8 + 16 >> 2] | 0)) {
    break;
   }
   return;
  }
 } while (0);
 i8 = i3;
 i4 = __ZN7WebCore12SVGLocatable22nearestViewportElementEPKNS_10SVGElementE(i3) | 0;
 i3 = HEAP32[i4 + 44 >> 2] | 0;
 i9 = HEAP32[__ZN7WebCore8SVGNames6svgTagE >> 2] | 0;
 do {
  if ((i3 | 0) != (i9 | 0)) {
   if ((HEAP32[i3 + 12 >> 2] | 0) != (HEAP32[i9 + 12 >> 2] | 0)) {
    return;
   }
   if ((HEAP32[i3 + 16 >> 2] | 0) == (HEAP32[i9 + 16 >> 2] | 0)) {
    break;
   }
   return;
  }
 } while (0);
 __ZN7WebCore13SVGSVGElement21inheritViewAttributesEPNS_14SVGViewElementE(i4, i8);
 i8 = i4 + 32 | 0;
 if ((HEAP32[i4 + 12 >> 2] & 2048 | 0) == 0) {
  i16 = i8 | 0;
 } else {
  i16 = HEAP32[i8 >> 2] | 0;
 }
 i8 = HEAP32[i16 >> 2] | 0;
 if ((i8 | 0) == 0) {
  return;
 }
 __ZN7WebCore17RenderSVGResource42markForLayoutAndParentResourceInvalidationERNS_12RenderObjectEb(i8, 1);
 return;
}
function __ZN7WebCore13SVGSVGElement19svgAttributeChangedERKNS_13QualifiedNameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) == (HEAP32[__ZN7WebCore8SVGNames9widthAttrE >> 2] | 0)) {
   i4 = i1 | 0;
   __ZN7WebCore10SVGElement32updateRelativeLengthsInformationEbPS0_(i4, FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 644 >> 2] & 255](i4) | 0, i4);
   i4 = i1 + 32 | 0;
   if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
    i5 = i4 | 0;
   } else {
    i5 = HEAP32[i4 >> 2] | 0;
   }
   i4 = HEAP32[i5 >> 2] | 0;
   if ((i4 | 0) == 0) {
    i6 = 1;
    break;
   }
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 324 >> 2] & 255](i4) | 0)) {
    i6 = 1;
    break;
   }
   i7 = i4 + 20 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i8 & 1 | 0) == 0) {
     HEAP32[i7 >> 2] = i8 | 1;
     __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i4, 1, 0);
     if ((HEAP32[i7 >> 2] & 32768 | 0) == 0) {
      break;
     }
     __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i4);
    }
   } while (0);
   __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i4, 1, 1);
   i6 = 1;
  } else {
   if (!((i3 | 0) == (HEAP32[__ZN7WebCore8SVGNames10heightAttrE >> 2] | 0) | (i3 | 0) == (HEAP32[__ZN7WebCore8SVGNames5xAttrE >> 2] | 0) | (i3 | 0) == (HEAP32[__ZN7WebCore8SVGNames5yAttrE >> 2] | 0))) {
    i6 = 0;
    break;
   }
   i7 = i1 | 0;
   __ZN7WebCore10SVGElement32updateRelativeLengthsInformationEbPS0_(i7, FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 644 >> 2] & 255](i7) | 0, i7);
   i6 = 1;
  }
 } while (0);
 do {
  if (__ZN7WebCore15SVGFitToViewBox16isKnownAttributeERKNS_13QualifiedNameE(i2) | 0) {
   i3 = i1 + 32 | 0;
   if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
    i9 = i3 | 0;
   } else {
    i9 = HEAP32[i3 >> 2] | 0;
   }
   i3 = HEAP32[i9 >> 2] | 0;
   if ((i3 | 0) == 0) {
    i10 = i1 | 0;
    break;
   } else {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 396 >> 2] & 127](i3);
    i10 = i1 | 0;
    break;
   }
  } else {
   i3 = i1 | 0;
   if (i6) {
    i10 = i3;
    break;
   }
   if (__ZN7WebCore12SVGLangSpace16isKnownAttributeERKNS_13QualifiedNameE(i1 + 52 | 0, i2) | 0) {
    i10 = i3;
    break;
   }
   if (__ZN7WebCore28SVGExternalResourcesRequired16isKnownAttributeERKNS_13QualifiedNameE(i1 + 176 | 0, i2) | 0) {
    i10 = i3;
    break;
   }
   if (__ZN7WebCore13SVGZoomAndPan16isKnownAttributeERKNS_13QualifiedNameE(i2) | 0) {
    i10 = i3;
    break;
   }
   __ZN7WebCore18SVGGraphicsElement19svgAttributeChangedERKNS_13QualifiedNameE(i1 | 0, i2);
   i11 = i3;
   __ZN7WebCore18SVGElementInstance31invalidateAllInstancesOfElementEPNS_10SVGElementE(i11);
   return;
  }
 } while (0);
 i2 = i1 + 32 | 0;
 if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
  i12 = i2 | 0;
 } else {
  i12 = HEAP32[i2 >> 2] | 0;
 }
 i2 = HEAP32[i12 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i11 = i10;
  __ZN7WebCore18SVGElementInstance31invalidateAllInstancesOfElementEPNS_10SVGElementE(i11);
  return;
 }
 __ZN7WebCore17RenderSVGResource42markForLayoutAndParentResourceInvalidationERNS_12RenderObjectEb(i2, 1);
 i11 = i10;
 __ZN7WebCore18SVGElementInstance31invalidateAllInstancesOfElementEPNS_10SVGElementE(i11);
 return;
}
function __ZN7WebCore13SVGSVGElement21inheritViewAttributesEPNS_14SVGViewElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 284 | 0;
 do {
  if ((HEAP32[i5 >> 2] | 0) == 0) {
   i6 = __ZN3WTF10fastMallocEj(56) | 0;
   __ZN7WebCore11SVGViewSpecC1EPNS_10SVGElementE(i6, i1 | 0);
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = i6;
   if ((i7 | 0) == 0) {
    break;
   }
   i6 = i7 + 4 | 0;
   i7 = i6 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i7 >> 2] = i8;
    break;
   }
   i8 = i6 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 127](i8);
  }
 } while (0);
 i8 = HEAP32[i5 >> 2] | 0;
 HEAP8[i1 + 264 | 0] = 1;
 i5 = i2 | 0;
 if (__ZNK7WebCore7Element12hasAttributeERKNS_13QualifiedNameE(i5, __ZN7WebCore8SVGNames11viewBoxAttrE) | 0) {
  i6 = __ZN7WebCore14SVGViewElement19viewBoxPropertyInfoEv() | 0;
  i7 = HEAP32[i6 + 12 >> 2] | 0;
  HEAP32[i4 >> 2] = i2;
  HEAP32[i4 + 4 >> 2] = HEAP32[i7 >> 2];
  i7 = __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS9_EES2_EEPS6_RKT0_(__ZN7WebCore19SVGAnimatedProperty21animatedPropertyCacheEv() | 0, i4) | 0;
  do {
   if ((i7 | 0) == 0) {
    i9 = 12;
   } else {
    i4 = HEAP32[i7 + 8 >> 2] | 0;
    if ((i4 | 0) == 0) {
     i9 = 12;
     break;
    }
    if ((HEAP8[i4 + 20 | 0] & 1) == 0) {
     i9 = 12;
     break;
    }
    i10 = HEAP32[(HEAP32[i4 + 32 >> 2] | 0) + 20 >> 2] | 0;
   }
  } while (0);
  if ((i9 | 0) == 12) {
   i10 = i2 + 100 | 0;
  }
  i9 = i8 + 28 | 0;
  i7 = i10;
  HEAP32[i9 >> 2] = HEAP32[i7 >> 2];
  HEAP32[i9 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
  HEAP32[i9 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
  HEAP32[i9 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
 } else {
  i7 = i8 + 28 | 0;
  i9 = __ZNK7WebCore13SVGSVGElement7viewBoxEv(i1) | 0;
  HEAP32[i7 >> 2] = HEAP32[i9 >> 2];
  HEAP32[i7 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
  HEAP32[i7 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
  HEAP32[i7 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
 }
 if (__ZNK7WebCore7Element12hasAttributeERKNS_13QualifiedNameE(i5, __ZN7WebCore8SVGNames23preserveAspectRatioAttrE) | 0) {
  i9 = i2 + 120 | 0;
  i7 = i8 + 44 | 0;
  i10 = HEAP32[i9 + 4 >> 2] | 0;
  HEAP32[i7 >> 2] = HEAP32[i9 >> 2];
  HEAP32[i7 + 4 >> 2] = i10;
 } else {
  i10 = i1 + 252 | 0;
  i7 = i8 + 44 | 0;
  i9 = HEAP32[i10 + 4 >> 2] | 0;
  HEAP32[i7 >> 2] = HEAP32[i10 >> 2];
  HEAP32[i7 + 4 >> 2] = i9;
 }
 if (__ZNK7WebCore7Element12hasAttributeERKNS_13QualifiedNameE(i5, __ZN7WebCore8SVGNames14zoomAndPanAttrE) | 0) {
  i5 = HEAP32[i2 + 132 >> 2] | 0;
  i2 = i5 & 65535;
  HEAP32[i8 + 12 >> 2] = i2 << 16 >> 16 == 0 | (i2 & 65535) >>> 0 > 2 >>> 0 ? 0 : i5 & 65535;
  STACKTOP = i3;
  return;
 } else {
  i5 = HEAP32[i1 + 268 >> 2] | 0;
  i1 = i5 & 65535;
  HEAP32[i8 + 12 >> 2] = i1 << 16 >> 16 == 0 | (i1 & 65535) >>> 0 > 2 >>> 0 ? 0 : i5 & 65535;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore13SVGSVGElement18currentViewBoxRectEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, d9 = +0, d10 = +0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, d18 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 if ((HEAP8[i2 + 264 | 0] & 1) != 0) {
  i6 = HEAP32[i2 + 284 >> 2] | 0;
  if ((i6 | 0) == 0) {
   _memset(i1 | 0, 0, 16) | 0;
   STACKTOP = i3;
   return;
  } else {
   i7 = i1;
   i8 = i6 + 28 | 0;
   HEAP32[i7 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i7 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
   HEAP32[i7 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
   HEAP32[i7 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
   STACKTOP = i3;
   return;
  }
 }
 i8 = __ZNK7WebCore13SVGSVGElement7viewBoxEv(i2) | 0;
 d9 = +HEAPF32[i8 + 8 >> 2];
 d10 = +HEAPF32[i8 + 12 >> 2];
 if (!(d9 <= +0 | d10 <= +0)) {
  i7 = i8;
  i8 = HEAP32[i7 + 4 >> 2] | 0;
  i6 = i1;
  HEAP32[i6 >> 2] = HEAP32[i7 >> 2];
  HEAP32[i6 + 4 >> 2] = i8;
  HEAPF32[i1 + 8 >> 2] = d9;
  HEAPF32[i1 + 12 >> 2] = d10;
  STACKTOP = i3;
  return;
 }
 i8 = i2 + 12 | 0;
 i6 = (HEAP32[i8 >> 2] & 2048 | 0) == 0;
 i7 = i2 + 32 | 0;
 if (i6) {
  i11 = i7 | 0;
 } else {
  i11 = HEAP32[i7 >> 2] | 0;
 }
 do {
  if ((HEAP32[i11 >> 2] | 0) != 0) {
   if (i6) {
    i12 = i7 | 0;
   } else {
    i12 = HEAP32[i7 >> 2] | 0;
   }
   i13 = HEAP32[i12 >> 2] | 0;
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 324 >> 2] & 255](i13) | 0)) {
    break;
   }
   if ((HEAP32[i8 >> 2] & 2048 | 0) == 0) {
    i14 = i7 | 0;
   } else {
    i14 = HEAP32[i7 >> 2] | 0;
   }
   if (!(__ZNK7WebCore13RenderSVGRoot25isEmbeddedThroughSVGImageEv(HEAP32[i14 >> 2] | 0) | 0)) {
    _memset(i1 | 0, 0, 16) | 0;
    STACKTOP = i3;
    return;
   }
   __ZNK7WebCore13SVGSVGElement14intrinsicWidthENS0_15ConsiderCSSModeE(i4, i2, 0);
   __ZNK7WebCore13SVGSVGElement15intrinsicHeightENS0_15ConsiderCSSModeE(i5, i2, 0);
   i13 = i4 + 5 | 0;
   i15 = i5 + 5 | 0;
   do {
    if ((HEAP8[i13] | 0) == 3) {
     if ((HEAP8[i15] | 0) != 3) {
      i16 = 23;
      break;
     }
     d10 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i4, +0, 0);
     d9 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i5, +0, 0);
     i17 = i1;
     HEAP32[i17 >> 2] = 0;
     HEAP32[i17 + 4 >> 2] = 0;
     i17 = i1 + 8 | 0;
     d18 = +d10;
     d10 = +d9;
     HEAPF32[i17 >> 2] = d18;
     HEAPF32[i17 + 4 >> 2] = d10;
    } else {
     i16 = 23;
    }
   } while (0);
   if ((i16 | 0) == 23) {
    _memset(i1 | 0, 0, 16) | 0;
   }
   if ((HEAP8[i15] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
   }
   if ((HEAP8[i13] | 0) != 10) {
    STACKTOP = i3;
    return;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i4);
   STACKTOP = i3;
   return;
  }
 } while (0);
 _memset(i1 | 0, 0, 16) | 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore13SVGSVGElement36synchronizeExternalResourcesRequiredEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i1 + 228 | 0;
 if ((HEAP8[i6 + 1 | 0] & 1) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN3WTF6StringC1EPKc(i5, (HEAP8[i6] & 1) != 0 ? H_BASE + 16 | 0 : H_BASE + 8 | 0);
 i6 = i5 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i7 = i3 | 0;
   HEAP32[i7 >> 2] = 0;
   i8 = i7;
  } else {
   if ((HEAP32[i5 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i3, i5);
    i8 = i3 | 0;
    break;
   } else {
    i7 = i3 | 0;
    HEAP32[i7 >> 2] = i5;
    i9 = i5 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
    i8 = i7;
    break;
   }
  }
 } while (0);
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = HEAP32[i8 >> 2];
 i8 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i6 = i8 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i6 >> 2] = i3;
    break;
   }
  }
 } while (0);
 if (HEAP8[H_BASE + 2e3 | 0] | 0) {
  i10 = HEAP32[H_BASE + 2080 >> 2] | 0;
 } else {
  i8 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i8, 1, 0, __ZN7WebCore8SVGNames29externalResourcesRequiredAttrE, (HEAP32[__ZN7WebCore8SVGNames29externalResourcesRequiredAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 52 | 0, F_BASE_vii + 54 | 0);
  HEAP32[H_BASE + 2080 >> 2] = i8;
  HEAP8[H_BASE + 2e3 | 0] = 1;
  i10 = i8;
 }
 __ZN7WebCore7Element28setSynchronizedLazyAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1 | 0, HEAP32[i10 + 8 >> 2] | 0, i4);
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = i4 | 0;
 i10 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i10 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i5 >> 2] = i10;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore13SVGSVGElement30synchronizePreserveAspectRatioEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 if ((HEAP8[i1 + 260 | 0] & 1) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZNK7WebCore22SVGPreserveAspectRatio13valueAsStringEv(i5, i1 + 252 | 0);
 i6 = i5 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i7 = i3 | 0;
   HEAP32[i7 >> 2] = 0;
   i8 = i7;
  } else {
   if ((HEAP32[i5 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i3, i5);
    i8 = i3 | 0;
    break;
   } else {
    i7 = i3 | 0;
    HEAP32[i7 >> 2] = i5;
    i9 = i5 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
    i8 = i7;
    break;
   }
  }
 } while (0);
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = HEAP32[i8 >> 2];
 i8 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i6 = i8 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i6 >> 2] = i3;
    break;
   }
  }
 } while (0);
 if (HEAP8[H_BASE + 2008 | 0] | 0) {
  i10 = HEAP32[H_BASE + 2088 >> 2] | 0;
 } else {
  i8 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i8, 13, 0, __ZN7WebCore8SVGNames23preserveAspectRatioAttrE, (HEAP32[__ZN7WebCore8SVGNames23preserveAspectRatioAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 102 | 0, F_BASE_vii + 10 | 0);
  HEAP32[H_BASE + 2088 >> 2] = i8;
  HEAP8[H_BASE + 2008 | 0] = 1;
  i10 = i8;
 }
 __ZN7WebCore7Element28setSynchronizedLazyAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1 | 0, HEAP32[i10 + 8 >> 2] | 0, i4);
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = i4 | 0;
 i10 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i10 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i5 >> 2] = i10;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore13SVGSVGElement18synchronizeViewBoxEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 if ((HEAP8[i1 + 248 | 0] & 1) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore17SVGPropertyTraitsINS_9FloatRectEE8toStringERKS1_(i5, i1 + 232 | 0);
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   HEAP32[i3 >> 2] = 0;
   i5 = i4 | 0;
   HEAP32[i5 >> 2] = 0;
   i7 = i5;
  } else {
   if ((HEAP32[i6 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i3, i6);
    i5 = i4 | 0;
    HEAP32[i5 >> 2] = HEAP32[i3 >> 2];
    i8 = i5;
   } else {
    i5 = i3 | 0;
    HEAP32[i5 >> 2] = i6;
    i9 = i6 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
    i9 = i4 | 0;
    HEAP32[i9 >> 2] = HEAP32[i5 >> 2];
    i8 = i9;
   }
   i9 = i6 | 0;
   i5 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    i7 = i8;
    break;
   } else {
    HEAP32[i9 >> 2] = i5;
    i7 = i8;
    break;
   }
  }
 } while (0);
 if (HEAP8[H_BASE + 2024 | 0] | 0) {
  i10 = HEAP32[H_BASE + 2104 >> 2] | 0;
 } else {
  i8 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i8, 14, 0, __ZN7WebCore8SVGNames11viewBoxAttrE, (HEAP32[__ZN7WebCore8SVGNames11viewBoxAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 20 | 0, F_BASE_vii + 60 | 0);
  HEAP32[H_BASE + 2104 >> 2] = i8;
  HEAP8[H_BASE + 2024 | 0] = 1;
  i10 = i8;
 }
 __ZN7WebCore7Element28setSynchronizedLazyAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1 | 0, HEAP32[i10 + 8 >> 2] | 0, i4);
 i4 = HEAP32[i7 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i7 = i4 | 0;
 i10 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i10 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i7 >> 2] = i10;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore13SVGSVGElement17synchronizeHeightEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 if ((HEAP8[i1 + 224 | 0] & 1) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZNK7WebCore9SVGLength13valueAsStringEv(i5, i1 + 216 | 0);
 i6 = i5 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i7 = i3 | 0;
   HEAP32[i7 >> 2] = 0;
   i8 = i7;
  } else {
   if ((HEAP32[i5 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i3, i5);
    i8 = i3 | 0;
    break;
   } else {
    i7 = i3 | 0;
    HEAP32[i7 >> 2] = i5;
    i9 = i5 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
    i8 = i7;
    break;
   }
  }
 } while (0);
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = HEAP32[i8 >> 2];
 i8 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i6 = i8 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i6 >> 2] = i3;
    break;
   }
  }
 } while (0);
 if (HEAP8[H_BASE + 2032 | 0] | 0) {
  i10 = HEAP32[H_BASE + 2112 >> 2] | 0;
 } else {
  i8 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i8, 6, 0, __ZN7WebCore8SVGNames10heightAttrE, (HEAP32[__ZN7WebCore8SVGNames10heightAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 40 | 0, F_BASE_vii + 74 | 0);
  HEAP32[H_BASE + 2112 >> 2] = i8;
  HEAP8[H_BASE + 2032 | 0] = 1;
  i10 = i8;
 }
 __ZN7WebCore7Element28setSynchronizedLazyAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1 | 0, HEAP32[i10 + 8 >> 2] | 0, i4);
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = i4 | 0;
 i10 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i10 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i5 >> 2] = i10;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore13SVGSVGElement16synchronizeWidthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 if ((HEAP8[i1 + 212 | 0] & 1) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZNK7WebCore9SVGLength13valueAsStringEv(i5, i1 + 204 | 0);
 i6 = i5 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i7 = i3 | 0;
   HEAP32[i7 >> 2] = 0;
   i8 = i7;
  } else {
   if ((HEAP32[i5 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i3, i5);
    i8 = i3 | 0;
    break;
   } else {
    i7 = i3 | 0;
    HEAP32[i7 >> 2] = i5;
    i9 = i5 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
    i8 = i7;
    break;
   }
  }
 } while (0);
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = HEAP32[i8 >> 2];
 i8 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i6 = i8 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i6 >> 2] = i3;
    break;
   }
  }
 } while (0);
 if (HEAP8[H_BASE + 2040 | 0] | 0) {
  i10 = HEAP32[H_BASE + 2120 >> 2] | 0;
 } else {
  i8 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i8, 6, 0, __ZN7WebCore8SVGNames9widthAttrE, (HEAP32[__ZN7WebCore8SVGNames9widthAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 92 | 0, F_BASE_vii + 84 | 0);
  HEAP32[H_BASE + 2120 >> 2] = i8;
  HEAP8[H_BASE + 2040 | 0] = 1;
  i10 = i8;
 }
 __ZN7WebCore7Element28setSynchronizedLazyAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1 | 0, HEAP32[i10 + 8 >> 2] | 0, i4);
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = i4 | 0;
 i10 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i10 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i5 >> 2] = i10;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore13SVGSVGElement12synchronizeYEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 if ((HEAP8[i1 + 200 | 0] & 1) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZNK7WebCore9SVGLength13valueAsStringEv(i5, i1 + 192 | 0);
 i6 = i5 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i7 = i3 | 0;
   HEAP32[i7 >> 2] = 0;
   i8 = i7;
  } else {
   if ((HEAP32[i5 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i3, i5);
    i8 = i3 | 0;
    break;
   } else {
    i7 = i3 | 0;
    HEAP32[i7 >> 2] = i5;
    i9 = i5 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
    i8 = i7;
    break;
   }
  }
 } while (0);
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = HEAP32[i8 >> 2];
 i8 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i6 = i8 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i6 >> 2] = i3;
    break;
   }
  }
 } while (0);
 if (HEAP8[H_BASE + 2048 | 0] | 0) {
  i10 = HEAP32[H_BASE + 2128 >> 2] | 0;
 } else {
  i8 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i8, 6, 0, __ZN7WebCore8SVGNames5yAttrE, (HEAP32[__ZN7WebCore8SVGNames5yAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 88 | 0, F_BASE_vii + 44 | 0);
  HEAP32[H_BASE + 2128 >> 2] = i8;
  HEAP8[H_BASE + 2048 | 0] = 1;
  i10 = i8;
 }
 __ZN7WebCore7Element28setSynchronizedLazyAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1 | 0, HEAP32[i10 + 8 >> 2] | 0, i4);
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = i4 | 0;
 i10 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i10 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i5 >> 2] = i10;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore13SVGSVGElement12synchronizeXEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 if ((HEAP8[i1 + 188 | 0] & 1) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZNK7WebCore9SVGLength13valueAsStringEv(i5, i1 + 180 | 0);
 i6 = i5 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i7 = i3 | 0;
   HEAP32[i7 >> 2] = 0;
   i8 = i7;
  } else {
   if ((HEAP32[i5 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i3, i5);
    i8 = i3 | 0;
    break;
   } else {
    i7 = i3 | 0;
    HEAP32[i7 >> 2] = i5;
    i9 = i5 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
    i8 = i7;
    break;
   }
  }
 } while (0);
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = HEAP32[i8 >> 2];
 i8 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i6 = i8 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i6 >> 2] = i3;
    break;
   }
  }
 } while (0);
 if (HEAP8[H_BASE + 2056 | 0] | 0) {
  i10 = HEAP32[H_BASE + 2136 >> 2] | 0;
 } else {
  i8 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i8, 6, 0, __ZN7WebCore8SVGNames5xAttrE, (HEAP32[__ZN7WebCore8SVGNames5xAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 44 | 0, F_BASE_vii + 82 | 0);
  HEAP32[H_BASE + 2136 >> 2] = i8;
  HEAP8[H_BASE + 2056 | 0] = 1;
  i10 = i8;
 }
 __ZN7WebCore7Element28setSynchronizedLazyAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1 | 0, HEAP32[i10 + 8 >> 2] | 0, i4);
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = i4 | 0;
 i10 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i10 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i5 >> 2] = i10;
  STACKTOP = i2;
  return;
 }
}
function __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E16lookupForWritingINS_22IdentityHashTranslatorIS9_EES2_EENSt3__14pairIPS6_bEERKT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i3;
 i6 = (HEAPU16[i3 >> 1] | 0) - 1640531527 | 0;
 i7 = (HEAPU16[i2 + 2 >> 1] | 0) << 11 ^ i6 ^ i6 << 16;
 i6 = i3 + 4 | 0;
 i8 = i7 + (HEAPU16[i6 >> 1] | 0) + (i7 >>> 11) | 0;
 i7 = i8 ^ (HEAPU16[i2 + 6 >> 1] | 0) << 11 ^ i8 << 16;
 i8 = (i7 >>> 11) + i7 | 0;
 i7 = i8 << 3 ^ i8;
 i8 = (i7 >>> 5) + i7 | 0;
 i7 = i8 << 2 ^ i8;
 i8 = (i7 >>> 15) + i7 | 0;
 i7 = (i8 << 10 ^ i8) & 16777215;
 i8 = (i7 | 0) == 0 ? 8388608 : i7;
 i7 = i3 | 0;
 i3 = (i8 >>> 23) + ~i8 | 0;
 i2 = i3 << 12 ^ i3;
 i3 = i2 >>> 7 ^ i2;
 i2 = i3 << 2 ^ i3;
 i3 = i2 >>> 20 ^ i2 | 1;
 i2 = i8;
 i8 = 0;
 i9 = 0;
 while (1) {
  i10 = i2 & i5;
  i11 = i4 + (i10 * 12 & -1) | 0;
  i12 = HEAP32[i11 >> 2] | 0;
  if ((i12 | 0) == 0) {
   if ((HEAP32[i4 + (i10 * 12 & -1) + 4 >> 2] | 0) == 0) {
    i13 = 4;
    break;
   }
  }
  if ((i12 | 0) == (HEAP32[i7 >> 2] | 0)) {
   if ((HEAP32[i4 + (i10 * 12 & -1) + 4 >> 2] | 0) == (HEAP32[i6 >> 2] | 0)) {
    i13 = 7;
    break;
   }
  }
  i14 = (i8 | 0) == 0 ? i3 : i8;
  i2 = i14 + i10 | 0;
  i8 = i14;
  i9 = (i12 | 0) == -1 ? i11 : i9;
 }
 if ((i13 | 0) == 7) {
  HEAP32[i1 >> 2] = i11;
  HEAP8[i1 + 4 | 0] = 1;
  return;
 } else if ((i13 | 0) == 4) {
  HEAP32[i1 >> 2] = (i9 | 0) != 0 ? i9 : i11;
  HEAP8[i1 + 4 | 0] = 0;
  return;
 }
}
function __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS9_EES2_EEPS6_RKT0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 i1 = i2;
 i5 = (HEAPU16[i2 >> 1] | 0) - 1640531527 | 0;
 i6 = (HEAPU16[i1 + 2 >> 1] | 0) << 11 ^ i5 ^ i5 << 16;
 i5 = i2 + 4 | 0;
 i7 = i6 + (HEAPU16[i5 >> 1] | 0) + (i6 >>> 11) | 0;
 i6 = i7 ^ (HEAPU16[i1 + 6 >> 1] | 0) << 11 ^ i7 << 16;
 i7 = (i6 >>> 11) + i6 | 0;
 i6 = i7 << 3 ^ i7;
 i7 = (i6 >>> 5) + i6 | 0;
 i6 = i7 << 2 ^ i7;
 i7 = (i6 >>> 15) + i6 | 0;
 i6 = (i7 << 10 ^ i7) & 16777215;
 i7 = (i6 | 0) == 0 ? 8388608 : i6;
 if ((i4 | 0) == 0) {
  i8 = 0;
  return i8 | 0;
 }
 i6 = HEAP32[i2 >> 2] | 0;
 i2 = (i7 >>> 23) + ~i7 | 0;
 i1 = i2 << 12 ^ i2;
 i2 = i1 >>> 7 ^ i1;
 i1 = i2 << 2 ^ i2;
 i2 = i1 >>> 20 ^ i1 | 1;
 i1 = i7;
 i7 = 0;
 while (1) {
  i9 = i1 & i3;
  i10 = i4 + (i9 * 12 & -1) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  if ((i11 | 0) == (i6 | 0)) {
   if ((HEAP32[i4 + (i9 * 12 & -1) + 4 >> 2] | 0) == (HEAP32[i5 >> 2] | 0)) {
    i8 = i10;
    i12 = 9;
    break;
   }
  }
  if ((i11 | 0) == 0) {
   if ((HEAP32[i4 + (i9 * 12 & -1) + 4 >> 2] | 0) == 0) {
    i8 = 0;
    i12 = 11;
    break;
   }
  }
  i11 = (i7 | 0) == 0 ? i2 : i7;
  i1 = i11 + i9 | 0;
  i7 = i11;
 }
 if ((i12 | 0) == 11) {
  return i8 | 0;
 } else if ((i12 | 0) == 9) {
  return i8 | 0;
 }
 return 0;
}
function __ZNK7WebCore13SVGSVGElement17contentScriptTypeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 if (!(HEAP8[H_BASE + 1984 | 0] | 0)) {
  i4 = __Znwj(4) | 0;
  __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i3, H_BASE + 80 | 0, 15);
  i5 = i3 | 0;
  i3 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = 0;
  HEAP32[i4 >> 2] = i3;
  HEAP32[H_BASE + 2064 >> 2] = i4;
  HEAP8[H_BASE + 1984 | 0] = 1;
 }
 i4 = HEAP32[i1 + 48 >> 2] | 0;
 L4 : do {
  if ((i4 | 0) == 0) {
   i6 = __ZN3WTF8nullAtomE;
  } else {
   i1 = HEAP32[i4 + 4 >> 2] | 0;
   if ((i1 & 1 | 0) == 0) {
    i7 = i1 >>> 1 & 134217727;
    i8 = i4 + 20 | 0;
   } else {
    i1 = i4 + 24 | 0;
    i7 = HEAP32[i1 + 8 >> 2] | 0;
    i8 = HEAP32[i1 >> 2] | 0;
   }
   if ((i7 | 0) == 0) {
    i6 = __ZN3WTF8nullAtomE;
    break;
   }
   i1 = HEAP32[__ZN7WebCore8SVGNames21contentScriptTypeAttrE >> 2] | 0;
   i3 = i1 + 12 | 0;
   i5 = i1 + 16 | 0;
   i9 = 0;
   while (1) {
    i10 = i8 + (i9 << 3) | 0;
    i11 = HEAP32[i10 >> 2] | 0;
    if ((i11 | 0) == (i1 | 0)) {
     break;
    }
    if ((HEAP32[i11 + 12 >> 2] | 0) == (HEAP32[i3 >> 2] | 0)) {
     if ((HEAP32[i11 + 16 >> 2] | 0) == (HEAP32[i5 >> 2] | 0)) {
      break;
     }
    }
    i11 = i9 + 1 | 0;
    if (i11 >>> 0 < i7 >>> 0) {
     i9 = i11;
    } else {
     i6 = __ZN3WTF8nullAtomE;
     break L4;
    }
   }
   i6 = (i10 | 0) == 0 ? __ZN3WTF8nullAtomE : i8 + (i9 << 3) + 4 | 0;
  }
 } while (0);
 i8 = (HEAP32[i6 >> 2] | 0) == 0 ? HEAP32[H_BASE + 2064 >> 2] | 0 : i6;
 STACKTOP = i2;
 return i8 | 0;
}
function __ZNK7WebCore13SVGSVGElement16contentStyleTypeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 if (!(HEAP8[H_BASE + 1992 | 0] | 0)) {
  i4 = __Znwj(4) | 0;
  __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i3, H_BASE + 64 | 0, 8);
  i5 = i3 | 0;
  i3 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = 0;
  HEAP32[i4 >> 2] = i3;
  HEAP32[H_BASE + 2072 >> 2] = i4;
  HEAP8[H_BASE + 1992 | 0] = 1;
 }
 i4 = HEAP32[i1 + 48 >> 2] | 0;
 L4 : do {
  if ((i4 | 0) == 0) {
   i6 = __ZN3WTF8nullAtomE;
  } else {
   i1 = HEAP32[i4 + 4 >> 2] | 0;
   if ((i1 & 1 | 0) == 0) {
    i7 = i1 >>> 1 & 134217727;
    i8 = i4 + 20 | 0;
   } else {
    i1 = i4 + 24 | 0;
    i7 = HEAP32[i1 + 8 >> 2] | 0;
    i8 = HEAP32[i1 >> 2] | 0;
   }
   if ((i7 | 0) == 0) {
    i6 = __ZN3WTF8nullAtomE;
    break;
   }
   i1 = HEAP32[__ZN7WebCore8SVGNames20contentStyleTypeAttrE >> 2] | 0;
   i3 = i1 + 12 | 0;
   i5 = i1 + 16 | 0;
   i9 = 0;
   while (1) {
    i10 = i8 + (i9 << 3) | 0;
    i11 = HEAP32[i10 >> 2] | 0;
    if ((i11 | 0) == (i1 | 0)) {
     break;
    }
    if ((HEAP32[i11 + 12 >> 2] | 0) == (HEAP32[i3 >> 2] | 0)) {
     if ((HEAP32[i11 + 16 >> 2] | 0) == (HEAP32[i5 >> 2] | 0)) {
      break;
     }
    }
    i11 = i9 + 1 | 0;
    if (i11 >>> 0 < i7 >>> 0) {
     i9 = i11;
    } else {
     i6 = __ZN3WTF8nullAtomE;
     break L4;
    }
   }
   i6 = (i10 | 0) == 0 ? __ZN3WTF8nullAtomE : i8 + (i9 << 3) + 4 | 0;
  }
 } while (0);
 i8 = (HEAP32[i6 >> 2] | 0) == 0 ? HEAP32[H_BASE + 2072 >> 2] | 0 : i6;
 STACKTOP = i2;
 return i8 | 0;
}
function __ZNK7WebCore13SVGSVGElement19preserveAspectRatioEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 if (HEAP8[H_BASE + 2008 | 0] | 0) {
  i4 = HEAP32[H_BASE + 2088 >> 2] | 0;
 } else {
  i5 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i5, 13, 0, __ZN7WebCore8SVGNames23preserveAspectRatioAttrE, (HEAP32[__ZN7WebCore8SVGNames23preserveAspectRatioAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 102 | 0, F_BASE_vii + 10 | 0);
  HEAP32[H_BASE + 2088 >> 2] = i5;
  HEAP8[H_BASE + 2008 | 0] = 1;
  i4 = i5;
 }
 i5 = HEAP32[i4 + 12 >> 2] | 0;
 HEAP32[i3 >> 2] = i1;
 HEAP32[i3 + 4 >> 2] = HEAP32[i5 >> 2];
 i5 = __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS9_EES2_EEPS6_RKT0_(__ZN7WebCore19SVGAnimatedProperty21animatedPropertyCacheEv() | 0, i3) | 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = HEAP32[i5 + 8 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   if ((HEAP8[i3 + 20 | 0] & 1) == 0) {
    break;
   }
   i6 = HEAP32[(HEAP32[i3 + 32 >> 2] | 0) + 20 >> 2] | 0;
   STACKTOP = i2;
   return i6 | 0;
  }
 } while (0);
 i6 = i1 + 252 | 0;
 STACKTOP = i2;
 return i6 | 0;
}
function __ZN7WebCore13SVGSVGElementD2Ev(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 >> 2] = i3;
 HEAP32[i1 + 92 >> 2] = HEAP32[i2 + 24 >> 2];
 HEAP32[i1 + (HEAP32[i3 - 12 >> 2] | 0) >> 2] = HEAP32[i2 + 28 >> 2];
 HEAP32[i1 + 176 >> 2] = H_BASE + 1012;
 i3 = i1 + 284 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i4 + 8 >> 2] = 0;
 }
 i4 = i1 + 20 | 0;
 __ZN7WebCore8Document41unregisterForPageCacheSuspensionCallbacksEPNS_7ElementE(HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] | 0, i1 | 0);
 __ZN7WebCore21SVGDocumentExtensions19removeTimeContainerEPNS_13SVGSVGElementE(__ZN7WebCore8Document19accessSVGExtensionsEv(HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] | 0) | 0, i1);
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i3 = i4 + 4 | 0;
   i5 = i3 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i3 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 127](i6);
  }
 } while (0);
 i4 = HEAP32[i1 + 272 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i7 = i1 | 0;
  i8 = i2 + 4 | 0;
  __ZN7WebCore18SVGGraphicsElementD2Ev(i7, i8);
  return;
 }
 i6 = i4 | 0;
 i3 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore17SMILTimeContainerD1Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
  i7 = i1 | 0;
  i8 = i2 + 4 | 0;
  __ZN7WebCore18SVGGraphicsElementD2Ev(i7, i8);
  return;
 } else {
  HEAP32[i6 >> 2] = i3;
  i7 = i1 | 0;
  i8 = i2 + 4 | 0;
  __ZN7WebCore18SVGGraphicsElementD2Ev(i7, i8);
  return;
 }
}
function __ZNK7WebCore13SVGSVGElement7viewBoxEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 if (HEAP8[H_BASE + 2024 | 0] | 0) {
  i4 = HEAP32[H_BASE + 2104 >> 2] | 0;
 } else {
  i5 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i5, 14, 0, __ZN7WebCore8SVGNames11viewBoxAttrE, (HEAP32[__ZN7WebCore8SVGNames11viewBoxAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 20 | 0, F_BASE_vii + 60 | 0);
  HEAP32[H_BASE + 2104 >> 2] = i5;
  HEAP8[H_BASE + 2024 | 0] = 1;
  i4 = i5;
 }
 i5 = HEAP32[i4 + 12 >> 2] | 0;
 HEAP32[i3 >> 2] = i1;
 HEAP32[i3 + 4 >> 2] = HEAP32[i5 >> 2];
 i5 = __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS9_EES2_EEPS6_RKT0_(__ZN7WebCore19SVGAnimatedProperty21animatedPropertyCacheEv() | 0, i3) | 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = HEAP32[i5 + 8 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   if ((HEAP8[i3 + 20 | 0] & 1) == 0) {
    break;
   }
   i6 = HEAP32[(HEAP32[i3 + 32 >> 2] | 0) + 20 >> 2] | 0;
   STACKTOP = i2;
   return i6 | 0;
  }
 } while (0);
 i6 = i1 + 232 | 0;
 STACKTOP = i2;
 return i6 | 0;
}
function __ZNK7WebCore13SVGSVGElement6heightEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 if (HEAP8[H_BASE + 2032 | 0] | 0) {
  i4 = HEAP32[H_BASE + 2112 >> 2] | 0;
 } else {
  i5 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i5, 6, 0, __ZN7WebCore8SVGNames10heightAttrE, (HEAP32[__ZN7WebCore8SVGNames10heightAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 40 | 0, F_BASE_vii + 74 | 0);
  HEAP32[H_BASE + 2112 >> 2] = i5;
  HEAP8[H_BASE + 2032 | 0] = 1;
  i4 = i5;
 }
 i5 = HEAP32[i4 + 12 >> 2] | 0;
 HEAP32[i3 >> 2] = i1;
 HEAP32[i3 + 4 >> 2] = HEAP32[i5 >> 2];
 i5 = __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS9_EES2_EEPS6_RKT0_(__ZN7WebCore19SVGAnimatedProperty21animatedPropertyCacheEv() | 0, i3) | 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = HEAP32[i5 + 8 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   if ((HEAP8[i3 + 20 | 0] & 1) == 0) {
    break;
   }
   i6 = HEAP32[(HEAP32[i3 + 32 >> 2] | 0) + 20 >> 2] | 0;
   STACKTOP = i2;
   return i6 | 0;
  }
 } while (0);
 i6 = i1 + 216 | 0;
 STACKTOP = i2;
 return i6 | 0;
}
function __ZNK7WebCore13SVGSVGElement5widthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 if (HEAP8[H_BASE + 2040 | 0] | 0) {
  i4 = HEAP32[H_BASE + 2120 >> 2] | 0;
 } else {
  i5 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i5, 6, 0, __ZN7WebCore8SVGNames9widthAttrE, (HEAP32[__ZN7WebCore8SVGNames9widthAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 92 | 0, F_BASE_vii + 84 | 0);
  HEAP32[H_BASE + 2120 >> 2] = i5;
  HEAP8[H_BASE + 2040 | 0] = 1;
  i4 = i5;
 }
 i5 = HEAP32[i4 + 12 >> 2] | 0;
 HEAP32[i3 >> 2] = i1;
 HEAP32[i3 + 4 >> 2] = HEAP32[i5 >> 2];
 i5 = __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS9_EES2_EEPS6_RKT0_(__ZN7WebCore19SVGAnimatedProperty21animatedPropertyCacheEv() | 0, i3) | 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = HEAP32[i5 + 8 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   if ((HEAP8[i3 + 20 | 0] & 1) == 0) {
    break;
   }
   i6 = HEAP32[(HEAP32[i3 + 32 >> 2] | 0) + 20 >> 2] | 0;
   STACKTOP = i2;
   return i6 | 0;
  }
 } while (0);
 i6 = i1 + 204 | 0;
 STACKTOP = i2;
 return i6 | 0;
}
function __ZNK7WebCore13SVGSVGElement1yEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 if (HEAP8[H_BASE + 2048 | 0] | 0) {
  i4 = HEAP32[H_BASE + 2128 >> 2] | 0;
 } else {
  i5 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i5, 6, 0, __ZN7WebCore8SVGNames5yAttrE, (HEAP32[__ZN7WebCore8SVGNames5yAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 88 | 0, F_BASE_vii + 44 | 0);
  HEAP32[H_BASE + 2128 >> 2] = i5;
  HEAP8[H_BASE + 2048 | 0] = 1;
  i4 = i5;
 }
 i5 = HEAP32[i4 + 12 >> 2] | 0;
 HEAP32[i3 >> 2] = i1;
 HEAP32[i3 + 4 >> 2] = HEAP32[i5 >> 2];
 i5 = __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS9_EES2_EEPS6_RKT0_(__ZN7WebCore19SVGAnimatedProperty21animatedPropertyCacheEv() | 0, i3) | 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = HEAP32[i5 + 8 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   if ((HEAP8[i3 + 20 | 0] & 1) == 0) {
    break;
   }
   i6 = HEAP32[(HEAP32[i3 + 32 >> 2] | 0) + 20 >> 2] | 0;
   STACKTOP = i2;
   return i6 | 0;
  }
 } while (0);
 i6 = i1 + 192 | 0;
 STACKTOP = i2;
 return i6 | 0;
}
function __ZNK7WebCore13SVGSVGElement1xEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 if (HEAP8[H_BASE + 2056 | 0] | 0) {
  i4 = HEAP32[H_BASE + 2136 >> 2] | 0;
 } else {
  i5 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i5, 6, 0, __ZN7WebCore8SVGNames5xAttrE, (HEAP32[__ZN7WebCore8SVGNames5xAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 44 | 0, F_BASE_vii + 82 | 0);
  HEAP32[H_BASE + 2136 >> 2] = i5;
  HEAP8[H_BASE + 2056 | 0] = 1;
  i4 = i5;
 }
 i5 = HEAP32[i4 + 12 >> 2] | 0;
 HEAP32[i3 >> 2] = i1;
 HEAP32[i3 + 4 >> 2] = HEAP32[i5 >> 2];
 i5 = __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS9_EES2_EEPS6_RKT0_(__ZN7WebCore19SVGAnimatedProperty21animatedPropertyCacheEv() | 0, i3) | 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = HEAP32[i5 + 8 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   if ((HEAP8[i3 + 20 | 0] & 1) == 0) {
    break;
   }
   i6 = HEAP32[(HEAP32[i3 + 32 >> 2] | 0) + 20 >> 2] | 0;
   STACKTOP = i2;
   return i6 | 0;
  }
 } while (0);
 i6 = i1 + 180 | 0;
 STACKTOP = i2;
 return i6 | 0;
}
function __ZNK7WebCore13SVGSVGElement34heightAttributeEstablishesViewportEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 12 | 0;
 i3 = (HEAP32[i2 >> 2] & 2048 | 0) == 0;
 i4 = i1 + 32 | 0;
 if (i3) {
  i5 = i4 | 0;
 } else {
  i5 = HEAP32[i4 >> 2] | 0;
 }
 if ((HEAP32[i5 >> 2] | 0) == 0) {
  i6 = 1;
  return i6 | 0;
 }
 if (i3) {
  i7 = i4 | 0;
 } else {
  i7 = HEAP32[i4 >> 2] | 0;
 }
 i3 = HEAP32[i7 >> 2] | 0;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 336 >> 2] & 255](i3) | 0) {
  i6 = 1;
  return i6 | 0;
 }
 if ((HEAP32[i2 >> 2] & 2048 | 0) == 0) {
  i8 = i4 | 0;
 } else {
  i8 = HEAP32[i4 >> 2] | 0;
 }
 i4 = HEAP32[i8 >> 2] | 0;
 i8 = i4;
 if (__ZNK7WebCore13RenderSVGRoot43isEmbeddedThroughFrameContainingSVGDocumentEv(i8) | 0) {
  if (__ZNK7WebCore14RenderReplaced24hasReplacedLogicalHeightEv(i4) | 0) {
   i6 = 0;
   return i6 | 0;
  }
  i6 = (__ZNK7WebCore14RenderReplaced24hasReplacedLogicalHeightEv(__ZNK7WebCore5Frame13ownerRendererEv(HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0) | 0) | 0) ^ 1;
  return i6 | 0;
 }
 do {
  if (!(__ZNK7WebCore13RenderSVGRoot25isEmbeddedThroughSVGImageEv(i8) | 0)) {
   if ((HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 692 >> 2] | 0) == (i1 | 0)) {
    i6 = 1;
   } else {
    break;
   }
   return i6 | 0;
  }
 } while (0);
 i6 = (__ZNK7WebCore14RenderReplaced24hasReplacedLogicalHeightEv(i4) | 0) ^ 1;
 return i6 | 0;
}
function __ZNK7WebCore13SVGSVGElement33widthAttributeEstablishesViewportEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 12 | 0;
 i3 = (HEAP32[i2 >> 2] & 2048 | 0) == 0;
 i4 = i1 + 32 | 0;
 if (i3) {
  i5 = i4 | 0;
 } else {
  i5 = HEAP32[i4 >> 2] | 0;
 }
 if ((HEAP32[i5 >> 2] | 0) == 0) {
  i6 = 1;
  return i6 | 0;
 }
 if (i3) {
  i7 = i4 | 0;
 } else {
  i7 = HEAP32[i4 >> 2] | 0;
 }
 i3 = HEAP32[i7 >> 2] | 0;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 336 >> 2] & 255](i3) | 0) {
  i6 = 1;
  return i6 | 0;
 }
 if ((HEAP32[i2 >> 2] & 2048 | 0) == 0) {
  i8 = i4 | 0;
 } else {
  i8 = HEAP32[i4 >> 2] | 0;
 }
 i4 = HEAP32[i8 >> 2] | 0;
 i8 = i4;
 if (__ZNK7WebCore13RenderSVGRoot43isEmbeddedThroughFrameContainingSVGDocumentEv(i8) | 0) {
  if (__ZNK7WebCore14RenderReplaced23hasReplacedLogicalWidthEv(i4) | 0) {
   i6 = 0;
   return i6 | 0;
  }
  i6 = (__ZNK7WebCore14RenderReplaced23hasReplacedLogicalWidthEv(__ZNK7WebCore5Frame13ownerRendererEv(HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0) | 0) | 0) ^ 1;
  return i6 | 0;
 }
 do {
  if (!(__ZNK7WebCore13RenderSVGRoot25isEmbeddedThroughSVGImageEv(i8) | 0)) {
   if ((HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 692 >> 2] | 0) == (i1 | 0)) {
    i6 = 1;
   } else {
    break;
   }
   return i6 | 0;
  }
 } while (0);
 i6 = (__ZNK7WebCore14RenderReplaced23hasReplacedLogicalWidthEv(i4) | 0) ^ 1;
 return i6 | 0;
}
function __ZNK7WebCore13SVGSVGElement15intrinsicHeightENS0_15ConsiderCSSModeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 if (__ZNK7WebCore13SVGSVGElement34heightAttributeEstablishesViewportEv(i2) | 0 | (i3 | 0) == 1) {
  if ((__ZNK7WebCore9SVGLength8unitTypeEv(__ZNK7WebCore13SVGSVGElement6heightEv(i2) | 0) | 0) == 2) {
   HEAPF32[i1 >> 2] = +__ZNK7WebCore9SVGLength17valueAsPercentageEv(__ZNK7WebCore13SVGSVGElement6heightEv(i2) | 0) * +100;
   HEAP8[i1 + 4 | 0] = 0;
   HEAP8[i1 + 5 | 0] = 2;
   HEAP8[i1 + 6 | 0] = 1;
   STACKTOP = i4;
   return;
  } else {
   __ZN7WebCore16SVGLengthContextC1EPKNS_10SVGElementE(i5, i2 | 0);
   HEAPF32[i1 >> 2] = +__ZNK7WebCore9SVGLength5valueERKNS_16SVGLengthContextE(__ZNK7WebCore13SVGSVGElement6heightEv(i2) | 0, i5);
   HEAP8[i1 + 4 | 0] = 0;
   HEAP8[i1 + 5 | 0] = 3;
   HEAP8[i1 + 6 | 0] = 1;
   STACKTOP = i4;
   return;
  }
 }
 i5 = i2 + 32 | 0;
 if ((HEAP32[i2 + 12 >> 2] & 2048 | 0) == 0) {
  i6 = i5 | 0;
 } else {
  i6 = HEAP32[i5 >> 2] | 0;
 }
 i5 = (HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 12 | 0;
 i6 = i1;
 i2 = HEAP32[i5 >> 2] | 0;
 i3 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = i2;
 HEAP32[i6 + 4 >> 2] = i3;
 if (!((i2 & 0 | 0) == 0 & (i3 & 65280 | 0) == 2560)) {
  STACKTOP = i4;
  return;
 }
 __ZNK7WebCore6Length22incrementCalculatedRefEv(i1);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore13SVGSVGElement14intrinsicWidthENS0_15ConsiderCSSModeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 if (__ZNK7WebCore13SVGSVGElement33widthAttributeEstablishesViewportEv(i2) | 0 | (i3 | 0) == 1) {
  if ((__ZNK7WebCore9SVGLength8unitTypeEv(__ZNK7WebCore13SVGSVGElement5widthEv(i2) | 0) | 0) == 2) {
   HEAPF32[i1 >> 2] = +__ZNK7WebCore9SVGLength17valueAsPercentageEv(__ZNK7WebCore13SVGSVGElement5widthEv(i2) | 0) * +100;
   HEAP8[i1 + 4 | 0] = 0;
   HEAP8[i1 + 5 | 0] = 2;
   HEAP8[i1 + 6 | 0] = 1;
   STACKTOP = i4;
   return;
  } else {
   __ZN7WebCore16SVGLengthContextC1EPKNS_10SVGElementE(i5, i2 | 0);
   HEAPF32[i1 >> 2] = +__ZNK7WebCore9SVGLength5valueERKNS_16SVGLengthContextE(__ZNK7WebCore13SVGSVGElement5widthEv(i2) | 0, i5);
   HEAP8[i1 + 4 | 0] = 0;
   HEAP8[i1 + 5 | 0] = 3;
   HEAP8[i1 + 6 | 0] = 1;
   STACKTOP = i4;
   return;
  }
 }
 i5 = i2 + 32 | 0;
 if ((HEAP32[i2 + 12 >> 2] & 2048 | 0) == 0) {
  i6 = i5 | 0;
 } else {
  i6 = HEAP32[i5 >> 2] | 0;
 }
 i5 = (HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 4 | 0;
 i6 = i1;
 i2 = HEAP32[i5 >> 2] | 0;
 i3 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = i2;
 HEAP32[i6 + 4 >> 2] = i3;
 if (!((i2 & 0 | 0) == 0 & (i3 & 65280 | 0) == 2560)) {
  STACKTOP = i4;
  return;
 }
 __ZNK7WebCore6Length22incrementCalculatedRefEv(i1);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore26SVGAnimatedPropertyTearOffINS_22SVGPreserveAspectRatioEED1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 200;
 i2 = i1 + 28 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i3 + 12 >> 2] = 0;
 }
 i3 = i1 + 32 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   HEAP32[i4 + 12 >> 2] = 0;
   i5 = HEAP32[i3 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   i6 = i5 + 4 | 0;
   i5 = i6 | 0;
   i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i5 >> 2] = i7;
    break;
   }
   i7 = i6 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 127](i7);
  }
 } while (0);
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i8 = i1 | 0;
  __ZN7WebCore19SVGAnimatedPropertyD2Ev(i8);
  return;
 }
 i2 = i3 + 4 | 0;
 i3 = i2 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i3 >> 2] = i4;
  i8 = i1 | 0;
  __ZN7WebCore19SVGAnimatedPropertyD2Ev(i8);
  return;
 }
 i4 = i2 - 4 | 0;
 if ((i4 | 0) == 0) {
  i8 = i1 | 0;
  __ZN7WebCore19SVGAnimatedPropertyD2Ev(i8);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 127](i4);
 i8 = i1 | 0;
 __ZN7WebCore19SVGAnimatedPropertyD2Ev(i8);
 return;
}
function __ZN7WebCore26SVGAnimatedPropertyTearOffINS_9SVGLengthEED1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 136;
 i2 = i1 + 28 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i3 + 12 >> 2] = 0;
 }
 i3 = i1 + 32 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   HEAP32[i4 + 12 >> 2] = 0;
   i5 = HEAP32[i3 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   i6 = i5 + 4 | 0;
   i5 = i6 | 0;
   i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i5 >> 2] = i7;
    break;
   }
   i7 = i6 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 127](i7);
  }
 } while (0);
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i8 = i1 | 0;
  __ZN7WebCore19SVGAnimatedPropertyD2Ev(i8);
  return;
 }
 i2 = i3 + 4 | 0;
 i3 = i2 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i3 >> 2] = i4;
  i8 = i1 | 0;
  __ZN7WebCore19SVGAnimatedPropertyD2Ev(i8);
  return;
 }
 i4 = i2 - 4 | 0;
 if ((i4 | 0) == 0) {
  i8 = i1 | 0;
  __ZN7WebCore19SVGAnimatedPropertyD2Ev(i8);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 127](i4);
 i8 = i1 | 0;
 __ZN7WebCore19SVGAnimatedPropertyD2Ev(i8);
 return;
}
function __ZN7WebCore26SVGAnimatedPropertyTearOffINS_9FloatRectEED1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 168;
 i2 = i1 + 28 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i3 + 12 >> 2] = 0;
 }
 i3 = i1 + 32 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   HEAP32[i4 + 12 >> 2] = 0;
   i5 = HEAP32[i3 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   i6 = i5 + 4 | 0;
   i5 = i6 | 0;
   i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i5 >> 2] = i7;
    break;
   }
   i7 = i6 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 127](i7);
  }
 } while (0);
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i8 = i1 | 0;
  __ZN7WebCore19SVGAnimatedPropertyD2Ev(i8);
  return;
 }
 i2 = i3 + 4 | 0;
 i3 = i2 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i3 >> 2] = i4;
  i8 = i1 | 0;
  __ZN7WebCore19SVGAnimatedPropertyD2Ev(i8);
  return;
 }
 i4 = i2 - 4 | 0;
 if ((i4 | 0) == 0) {
  i8 = i1 | 0;
  __ZN7WebCore19SVGAnimatedPropertyD2Ev(i8);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 127](i4);
 i8 = i1 | 0;
 __ZN7WebCore19SVGAnimatedPropertyD2Ev(i8);
 return;
}
function __ZN7WebCore26SVGAnimatedPropertyTearOffINS_22SVGPreserveAspectRatioEED0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 200;
 i2 = i1 + 28 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i3 + 12 >> 2] = 0;
 }
 i3 = i1 + 32 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   HEAP32[i4 + 12 >> 2] = 0;
   i5 = HEAP32[i3 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   i6 = i5 + 4 | 0;
   i5 = i6 | 0;
   i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i5 >> 2] = i7;
    break;
   }
   i7 = i6 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 127](i7);
  }
 } while (0);
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 4 | 0;
   i4 = i2 | 0;
   i7 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i4 >> 2] = i7;
    break;
   }
   i7 = i2 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 127](i7);
  }
 } while (0);
 __ZN7WebCore19SVGAnimatedPropertyD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore26SVGAnimatedPropertyTearOffINS_9SVGLengthEED0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 136;
 i2 = i1 + 28 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i3 + 12 >> 2] = 0;
 }
 i3 = i1 + 32 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   HEAP32[i4 + 12 >> 2] = 0;
   i5 = HEAP32[i3 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   i6 = i5 + 4 | 0;
   i5 = i6 | 0;
   i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i5 >> 2] = i7;
    break;
   }
   i7 = i6 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 127](i7);
  }
 } while (0);
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 4 | 0;
   i4 = i2 | 0;
   i7 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i4 >> 2] = i7;
    break;
   }
   i7 = i2 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 127](i7);
  }
 } while (0);
 __ZN7WebCore19SVGAnimatedPropertyD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore26SVGAnimatedPropertyTearOffINS_9FloatRectEED0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 168;
 i2 = i1 + 28 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i3 + 12 >> 2] = 0;
 }
 i3 = i1 + 32 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   HEAP32[i4 + 12 >> 2] = 0;
   i5 = HEAP32[i3 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   i6 = i5 + 4 | 0;
   i5 = i6 | 0;
   i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i5 >> 2] = i7;
    break;
   }
   i7 = i6 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 127](i7);
  }
 } while (0);
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 4 | 0;
   i4 = i2 | 0;
   i7 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i4 >> 2] = i7;
    break;
   }
   i7 = i2 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 127](i7);
  }
 } while (0);
 __ZN7WebCore19SVGAnimatedPropertyD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore13SVGSVGElement40lookupOrCreatePreserveAspectRatioWrapperEPNS_10SVGElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if (HEAP8[H_BASE + 2008 | 0] | 0) {
  i5 = HEAP32[H_BASE + 2088 >> 2] | 0;
 } else {
  i6 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i6, 13, 0, __ZN7WebCore8SVGNames23preserveAspectRatioAttrE, (HEAP32[__ZN7WebCore8SVGNames23preserveAspectRatioAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 102 | 0, F_BASE_vii + 10 | 0);
  HEAP32[H_BASE + 2088 >> 2] = i6;
  HEAP8[H_BASE + 2008 | 0] = 1;
  i5 = i6;
 }
 __ZN7WebCore19SVGAnimatedProperty21lookupOrCreateWrapperINS_13SVGSVGElementENS_26SVGAnimatedPropertyTearOffINS_22SVGPreserveAspectRatioEEES4_EEN3WTF10PassRefPtrIT0_EEPT_PKNS_15SVGPropertyInfoERT1_(i4, i2, i5, i2 + 252 | 0);
 HEAP32[i1 >> 2] = HEAP32[i4 >> 2];
 STACKTOP = i3;
 return;
}
function __ZN7WebCore13SVGSVGElement46lookupOrCreateExternalResourcesRequiredWrapperEPNS_10SVGElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if (HEAP8[H_BASE + 2e3 | 0] | 0) {
  i5 = HEAP32[H_BASE + 2080 >> 2] | 0;
 } else {
  i6 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i6, 1, 0, __ZN7WebCore8SVGNames29externalResourcesRequiredAttrE, (HEAP32[__ZN7WebCore8SVGNames29externalResourcesRequiredAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 52 | 0, F_BASE_vii + 54 | 0);
  HEAP32[H_BASE + 2080 >> 2] = i6;
  HEAP8[H_BASE + 2e3 | 0] = 1;
  i5 = i6;
 }
 __ZN7WebCore19SVGAnimatedProperty21lookupOrCreateWrapperINS_13SVGSVGElementENS_32SVGAnimatedStaticPropertyTearOffIbEEbEEN3WTF10PassRefPtrIT0_EEPT_PKNS_15SVGPropertyInfoERT1_(i4, i2, i5, i2 + 228 | 0);
 HEAP32[i1 >> 2] = HEAP32[i4 >> 2];
 STACKTOP = i3;
 return;
}
function __ZN7WebCore13SVGSVGElement28lookupOrCreateViewBoxWrapperEPNS_10SVGElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if (HEAP8[H_BASE + 2024 | 0] | 0) {
  i5 = HEAP32[H_BASE + 2104 >> 2] | 0;
 } else {
  i6 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i6, 14, 0, __ZN7WebCore8SVGNames11viewBoxAttrE, (HEAP32[__ZN7WebCore8SVGNames11viewBoxAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 20 | 0, F_BASE_vii + 60 | 0);
  HEAP32[H_BASE + 2104 >> 2] = i6;
  HEAP8[H_BASE + 2024 | 0] = 1;
  i5 = i6;
 }
 __ZN7WebCore19SVGAnimatedProperty21lookupOrCreateWrapperINS_13SVGSVGElementENS_26SVGAnimatedPropertyTearOffINS_9FloatRectEEES4_EEN3WTF10PassRefPtrIT0_EEPT_PKNS_15SVGPropertyInfoERT1_(i4, i2, i5, i2 + 232 | 0);
 HEAP32[i1 >> 2] = HEAP32[i4 >> 2];
 STACKTOP = i3;
 return;
}
function __ZN7WebCore13SVGSVGElement27lookupOrCreateHeightWrapperEPNS_10SVGElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if (HEAP8[H_BASE + 2032 | 0] | 0) {
  i5 = HEAP32[H_BASE + 2112 >> 2] | 0;
 } else {
  i6 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i6, 6, 0, __ZN7WebCore8SVGNames10heightAttrE, (HEAP32[__ZN7WebCore8SVGNames10heightAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 40 | 0, F_BASE_vii + 74 | 0);
  HEAP32[H_BASE + 2112 >> 2] = i6;
  HEAP8[H_BASE + 2032 | 0] = 1;
  i5 = i6;
 }
 __ZN7WebCore19SVGAnimatedProperty21lookupOrCreateWrapperINS_13SVGSVGElementENS_26SVGAnimatedPropertyTearOffINS_9SVGLengthEEES4_EEN3WTF10PassRefPtrIT0_EEPT_PKNS_15SVGPropertyInfoERT1_(i4, i2, i5, i2 + 216 | 0);
 HEAP32[i1 >> 2] = HEAP32[i4 >> 2];
 STACKTOP = i3;
 return;
}
function __ZN7WebCore13SVGSVGElement19setCurrentTranslateERKNS_10FloatPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i2;
 i2 = i1 + 276 | 0;
 i4 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i2 + 4 >> 2] = i4;
 i4 = i1 + 32 | 0;
 if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
  i5 = i4 | 0;
 } else {
  i5 = HEAP32[i4 >> 2] | 0;
 }
 i4 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i5 = i4 + 20 | 0;
   i2 = HEAP32[i5 >> 2] | 0;
   if ((i2 & 1 | 0) != 0) {
    break;
   }
   HEAP32[i5 >> 2] = i2 | 1;
   __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i4, 1, 0);
   if ((HEAP32[i5 >> 2] & 32768 | 0) == 0) {
    break;
   }
   __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i4);
  }
 } while (0);
 i4 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
 if ((HEAP32[i1 + 16 >> 2] | 0) != (i4 | 0)) {
  return;
 }
 i1 = HEAP32[i4 + 1584 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZNK7WebCore12RenderObject7repaintEb(i1 | 0, 0);
 return;
}
function __ZN7WebCore13SVGSVGElement26lookupOrCreateWidthWrapperEPNS_10SVGElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if (HEAP8[H_BASE + 2040 | 0] | 0) {
  i5 = HEAP32[H_BASE + 2120 >> 2] | 0;
 } else {
  i6 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i6, 6, 0, __ZN7WebCore8SVGNames9widthAttrE, (HEAP32[__ZN7WebCore8SVGNames9widthAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 92 | 0, F_BASE_vii + 84 | 0);
  HEAP32[H_BASE + 2120 >> 2] = i6;
  HEAP8[H_BASE + 2040 | 0] = 1;
  i5 = i6;
 }
 __ZN7WebCore19SVGAnimatedProperty21lookupOrCreateWrapperINS_13SVGSVGElementENS_26SVGAnimatedPropertyTearOffINS_9SVGLengthEEES4_EEN3WTF10PassRefPtrIT0_EEPT_PKNS_15SVGPropertyInfoERT1_(i4, i2, i5, i2 + 204 | 0);
 HEAP32[i1 >> 2] = HEAP32[i4 >> 2];
 STACKTOP = i3;
 return;
}
function __ZN7WebCore13SVGSVGElement22lookupOrCreateYWrapperEPNS_10SVGElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if (HEAP8[H_BASE + 2048 | 0] | 0) {
  i5 = HEAP32[H_BASE + 2128 >> 2] | 0;
 } else {
  i6 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i6, 6, 0, __ZN7WebCore8SVGNames5yAttrE, (HEAP32[__ZN7WebCore8SVGNames5yAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 88 | 0, F_BASE_vii + 44 | 0);
  HEAP32[H_BASE + 2128 >> 2] = i6;
  HEAP8[H_BASE + 2048 | 0] = 1;
  i5 = i6;
 }
 __ZN7WebCore19SVGAnimatedProperty21lookupOrCreateWrapperINS_13SVGSVGElementENS_26SVGAnimatedPropertyTearOffINS_9SVGLengthEEES4_EEN3WTF10PassRefPtrIT0_EEPT_PKNS_15SVGPropertyInfoERT1_(i4, i2, i5, i2 + 192 | 0);
 HEAP32[i1 >> 2] = HEAP32[i4 >> 2];
 STACKTOP = i3;
 return;
}
function __ZN7WebCore13SVGSVGElement22lookupOrCreateXWrapperEPNS_10SVGElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if (HEAP8[H_BASE + 2056 | 0] | 0) {
  i5 = HEAP32[H_BASE + 2136 >> 2] | 0;
 } else {
  i6 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i6, 6, 0, __ZN7WebCore8SVGNames5xAttrE, (HEAP32[__ZN7WebCore8SVGNames5xAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 44 | 0, F_BASE_vii + 82 | 0);
  HEAP32[H_BASE + 2136 >> 2] = i6;
  HEAP8[H_BASE + 2056 | 0] = 1;
  i5 = i6;
 }
 __ZN7WebCore19SVGAnimatedProperty21lookupOrCreateWrapperINS_13SVGSVGElementENS_26SVGAnimatedPropertyTearOffINS_9SVGLengthEEES4_EEN3WTF10PassRefPtrIT0_EEPT_PKNS_15SVGPropertyInfoERT1_(i4, i2, i5, i2 + 180 | 0);
 HEAP32[i1 >> 2] = HEAP32[i4 >> 2];
 STACKTOP = i3;
 return;
}
function __ZN7WebCore13SVGSVGElement21createElementRendererEN3WTF7PassRefINS_11RenderStyleEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 if (__ZNK7WebCore10SVGElement24isOutermostSVGSVGElementEv(i2 | 0) | 0) {
  i7 = __ZN3WTF10fastMallocEj(296) | 0;
  HEAP32[i6 >> 2] = HEAP32[i3 >> 2];
  __ZN7WebCore13RenderSVGRootC1ERNS_13SVGSVGElementEN3WTF7PassRefINS_11RenderStyleEEE(i7, i2, i6);
  HEAP32[i1 >> 2] = i7;
  STACKTOP = i4;
  return;
 } else {
  i7 = __ZN3WTF10fastMallocEj(176) | 0;
  HEAP32[i5 >> 2] = HEAP32[i3 >> 2];
  __ZN7WebCore26RenderSVGViewportContainerC1ERNS_13SVGSVGElementEN3WTF7PassRefINS_11RenderStyleEEE(i7, i2, i5);
  HEAP32[i1 >> 2] = i7;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore13SVGSVGElement22updateCurrentTranslateEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 32 | 0;
 if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
  i3 = i2 | 0;
 } else {
  i3 = HEAP32[i2 >> 2] | 0;
 }
 i2 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 20 | 0;
   i4 = HEAP32[i3 >> 2] | 0;
   if ((i4 & 1 | 0) != 0) {
    break;
   }
   HEAP32[i3 >> 2] = i4 | 1;
   __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i2, 1, 0);
   if ((HEAP32[i3 >> 2] & 32768 | 0) == 0) {
    break;
   }
   __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i2);
  }
 } while (0);
 i2 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
 if ((HEAP32[i1 + 16 >> 2] | 0) != (i2 | 0)) {
  return;
 }
 i1 = HEAP32[i2 + 1584 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZNK7WebCore12RenderObject7repaintEb(i1 | 0, 0);
 return;
}
function __ZN7WebCore13SVGSVGElement12insertedIntoERNS_13ContainerNodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 do {
  if ((HEAP32[i2 + 12 >> 2] & 256 | 0) != 0) {
   i3 = i1 + 20 | 0;
   __ZN7WebCore21SVGDocumentExtensions16addTimeContainerEPNS_13SVGSVGElementE(__ZN7WebCore8Document19accessSVGExtensionsEv(HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] | 0) | 0, i1);
   i4 = HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] | 0;
   if ((HEAP8[i4 + 964 | 0] & 1) != 0) {
    break;
   }
   if ((HEAP8[i4 + 1244 | 0] & 1) != 0) {
    break;
   }
   if ((HEAP8[i4 + 1245 | 0] & 1) == 0) {
    break;
   }
   i4 = i1 + 272 | 0;
   if (__ZNK7WebCore17SMILTimeContainer9isStartedEv(HEAP32[i4 >> 2] | 0) | 0) {
    break;
   }
   __ZN7WebCore17SMILTimeContainer5beginEv(HEAP32[i4 >> 2] | 0);
  }
 } while (0);
 return __ZN7WebCore10SVGElement12insertedIntoERNS_13ContainerNodeE(i1 | 0, i2) | 0;
}
function __ZNK7WebCore13SVGSVGElement22selfHasRelativeLengthsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if (((__ZNK7WebCore9SVGLength8unitTypeEv(__ZNK7WebCore13SVGSVGElement1xEv(i1) | 0) | 0) - 2 | 0) >>> 0 < 3 >>> 0) {
  i2 = 1;
  return i2 | 0;
 }
 if (((__ZNK7WebCore9SVGLength8unitTypeEv(__ZNK7WebCore13SVGSVGElement1yEv(i1) | 0) | 0) - 2 | 0) >>> 0 < 3 >>> 0) {
  i2 = 1;
  return i2 | 0;
 }
 if (((__ZNK7WebCore9SVGLength8unitTypeEv(__ZNK7WebCore13SVGSVGElement5widthEv(i1) | 0) | 0) - 2 | 0) >>> 0 < 3 >>> 0) {
  i2 = 1;
  return i2 | 0;
 }
 if (((__ZNK7WebCore9SVGLength8unitTypeEv(__ZNK7WebCore13SVGSVGElement6heightEv(i1) | 0) | 0) - 2 | 0) >>> 0 < 3 >>> 0) {
  i2 = 1;
  return i2 | 0;
 }
 i2 = __ZNK7WebCore7Element12hasAttributeERKNS_13QualifiedNameE(i1 | 0, __ZN7WebCore8SVGNames11viewBoxAttrE) | 0;
 return i2 | 0;
}
function __ZN7WebCore13SVGSVGElement37externalResourcesRequiredPropertyInfoEv() {
 var i1 = 0, i2 = 0;
 if (HEAP8[H_BASE + 2e3 | 0] | 0) {
  i1 = HEAP32[H_BASE + 2080 >> 2] | 0;
  return i1 | 0;
 } else {
  i2 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i2, 1, 0, __ZN7WebCore8SVGNames29externalResourcesRequiredAttrE, (HEAP32[__ZN7WebCore8SVGNames29externalResourcesRequiredAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 52 | 0, F_BASE_vii + 54 | 0);
  HEAP32[H_BASE + 2080 >> 2] = i2;
  HEAP8[H_BASE + 2e3 | 0] = 1;
  i1 = i2;
  return i1 | 0;
 }
 return 0;
}
function __ZN7WebCore13SVGSVGElement31preserveAspectRatioPropertyInfoEv() {
 var i1 = 0, i2 = 0;
 if (HEAP8[H_BASE + 2008 | 0] | 0) {
  i1 = HEAP32[H_BASE + 2088 >> 2] | 0;
  return i1 | 0;
 } else {
  i2 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i2, 13, 0, __ZN7WebCore8SVGNames23preserveAspectRatioAttrE, (HEAP32[__ZN7WebCore8SVGNames23preserveAspectRatioAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 102 | 0, F_BASE_vii + 10 | 0);
  HEAP32[H_BASE + 2088 >> 2] = i2;
  HEAP8[H_BASE + 2008 | 0] = 1;
  i1 = i2;
  return i1 | 0;
 }
 return 0;
}
function __ZN7WebCore13SVGSVGElement19viewBoxPropertyInfoEv() {
 var i1 = 0, i2 = 0;
 if (HEAP8[H_BASE + 2024 | 0] | 0) {
  i1 = HEAP32[H_BASE + 2104 >> 2] | 0;
  return i1 | 0;
 } else {
  i2 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i2, 14, 0, __ZN7WebCore8SVGNames11viewBoxAttrE, (HEAP32[__ZN7WebCore8SVGNames11viewBoxAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 20 | 0, F_BASE_vii + 60 | 0);
  HEAP32[H_BASE + 2104 >> 2] = i2;
  HEAP8[H_BASE + 2024 | 0] = 1;
  i1 = i2;
  return i1 | 0;
 }
 return 0;
}
function __ZN7WebCore13SVGSVGElement18heightPropertyInfoEv() {
 var i1 = 0, i2 = 0;
 if (HEAP8[H_BASE + 2032 | 0] | 0) {
  i1 = HEAP32[H_BASE + 2112 >> 2] | 0;
  return i1 | 0;
 } else {
  i2 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i2, 6, 0, __ZN7WebCore8SVGNames10heightAttrE, (HEAP32[__ZN7WebCore8SVGNames10heightAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 40 | 0, F_BASE_vii + 74 | 0);
  HEAP32[H_BASE + 2112 >> 2] = i2;
  HEAP8[H_BASE + 2032 | 0] = 1;
  i1 = i2;
  return i1 | 0;
 }
 return 0;
}
function __ZN7WebCore13SVGSVGElement11currentViewEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 284 | 0;
 do {
  if ((HEAP32[i2 >> 2] | 0) == 0) {
   i3 = __ZN3WTF10fastMallocEj(56) | 0;
   __ZN7WebCore11SVGViewSpecC1EPNS_10SVGElementE(i3, i1 | 0);
   i4 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = i3;
   if ((i4 | 0) == 0) {
    break;
   }
   i3 = i4 + 4 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i3 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 127](i5);
  }
 } while (0);
 return HEAP32[i2 >> 2] | 0;
}
function __ZN7WebCore13SVGSVGElement17widthPropertyInfoEv() {
 var i1 = 0, i2 = 0;
 if (HEAP8[H_BASE + 2040 | 0] | 0) {
  i1 = HEAP32[H_BASE + 2120 >> 2] | 0;
  return i1 | 0;
 } else {
  i2 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i2, 6, 0, __ZN7WebCore8SVGNames9widthAttrE, (HEAP32[__ZN7WebCore8SVGNames9widthAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 92 | 0, F_BASE_vii + 84 | 0);
  HEAP32[H_BASE + 2120 >> 2] = i2;
  HEAP8[H_BASE + 2040 | 0] = 1;
  i1 = i2;
  return i1 | 0;
 }
 return 0;
}
function __ZN7WebCore13SVGSVGElement13yPropertyInfoEv() {
 var i1 = 0, i2 = 0;
 if (HEAP8[H_BASE + 2048 | 0] | 0) {
  i1 = HEAP32[H_BASE + 2128 >> 2] | 0;
  return i1 | 0;
 } else {
  i2 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i2, 6, 0, __ZN7WebCore8SVGNames5yAttrE, (HEAP32[__ZN7WebCore8SVGNames5yAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 88 | 0, F_BASE_vii + 44 | 0);
  HEAP32[H_BASE + 2128 >> 2] = i2;
  HEAP8[H_BASE + 2048 | 0] = 1;
  i1 = i2;
  return i1 | 0;
 }
 return 0;
}
function __ZN7WebCore13SVGSVGElement13xPropertyInfoEv() {
 var i1 = 0, i2 = 0;
 if (HEAP8[H_BASE + 2056 | 0] | 0) {
  i1 = HEAP32[H_BASE + 2136 >> 2] | 0;
  return i1 | 0;
 } else {
  i2 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i2, 6, 0, __ZN7WebCore8SVGNames5xAttrE, (HEAP32[__ZN7WebCore8SVGNames5xAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 44 | 0, F_BASE_vii + 82 | 0);
  HEAP32[H_BASE + 2136 >> 2] = i2;
  HEAP8[H_BASE + 2056 | 0] = 1;
  i1 = i2;
  return i1 | 0;
 }
 return 0;
}
function __ZN7WebCore13SVGSVGElement15createSVGLengthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = 0;
 __ZN7WebCore9SVGLengthC1ENS_13SVGLengthModeERKN3WTF6StringE(i1, 2, i3);
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i3 | 0;
 i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i4 >> 2] = i1;
  STACKTOP = i2;
  return;
 }
}
function __ZNK7WebCore13SVGSVGElement12currentScaleEv(i1) {
 i1 = i1 | 0;
 var d2 = +0, i3 = 0;
 if ((HEAP32[i1 + 12 >> 2] & 256 | 0) == 0) {
  d2 = +1;
  return +d2;
 }
 if (!(__ZNK7WebCore10SVGElement24isOutermostSVGSVGElementEv(i1 | 0) | 0)) {
  d2 = +1;
  return +d2;
 }
 i3 = HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
 if ((i3 | 0) == 0) {
  d2 = +1;
  return +d2;
 }
 if ((__ZNK7WebCore9FrameTree6parentEv(i3 + 40 | 0) | 0) != 0) {
  d2 = +1;
  return +d2;
 }
 d2 = +HEAPF32[i3 + 480 >> 2];
 return +d2;
}
function _memset(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = i1 + i3 | 0;
 if ((i3 | 0) >= 20) {
  i2 = i2 & 255;
  i5 = i1 & 3;
  i6 = i2 | i2 << 8 | i2 << 16 | i2 << 24;
  i7 = i4 & ~3;
  if (i5) {
   i5 = i1 + 4 - i5 | 0;
   while ((i1 | 0) < (i5 | 0)) {
    HEAP8[i1] = i2;
    i1 = i1 + 1 | 0;
   }
  }
  while ((i1 | 0) < (i7 | 0)) {
   HEAP32[i1 >> 2] = i6;
   i1 = i1 + 4 | 0;
  }
 }
 while ((i1 | 0) < (i4 | 0)) {
  HEAP8[i1] = i2;
  i1 = i1 + 1 | 0;
 }
 return i1 - i3 | 0;
}
function _memcpy(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = i1 | 0;
 if ((i1 & 3) == (i2 & 3)) {
  while (i1 & 3) {
   if ((i3 | 0) == 0) return i4 | 0;
   HEAP8[i1] = HEAP8[i2] | 0;
   i1 = i1 + 1 | 0;
   i2 = i2 + 1 | 0;
   i3 = i3 - 1 | 0;
  }
  while ((i3 | 0) >= 4) {
   HEAP32[i1 >> 2] = HEAP32[i2 >> 2];
   i1 = i1 + 4 | 0;
   i2 = i2 + 4 | 0;
   i3 = i3 - 4 | 0;
  }
 }
 while ((i3 | 0) > 0) {
  HEAP8[i1] = HEAP8[i2] | 0;
  i1 = i1 + 1 | 0;
  i2 = i2 + 1 | 0;
  i3 = i3 - 1 | 0;
 }
 return i4 | 0;
}
function __ZN7WebCore13SVGSVGElement15setCurrentScaleEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0;
 if ((HEAP32[i1 + 12 >> 2] & 256 | 0) == 0) {
  return;
 }
 if (!(__ZNK7WebCore10SVGElement24isOutermostSVGSVGElementEv(i1 | 0) | 0)) {
  return;
 }
 i3 = HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 if ((__ZNK7WebCore9FrameTree6parentEv(i3 + 40 | 0) | 0) != 0) {
  return;
 }
 __ZN7WebCore5Frame17setPageZoomFactorEf(i3, d2);
 return;
}
function __ZN7WebCore13SVGSVGElement14setCurrentTimeEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if (((HEAPF32[tempDoublePtr >> 2] = d2, HEAP32[tempDoublePtr >> 2] | 0) & 2147483647) >>> 0 > 2139095040 >>> 0) {
  STACKTOP = i3;
  return;
 }
 i5 = HEAP32[i1 + 272 >> 2] | 0;
 HEAPF64[i4 >> 3] = d2 < +0 ? +0 : d2;
 __ZN7WebCore17SMILTimeContainer10setElapsedENS_8SMILTimeE(i5, i4);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore13SVGSVGElement17checkIntersectionEPKNS_10SVGElementERKNS_9FloatRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i1 = i2 + 32 | 0;
 if ((HEAP32[i2 + 12 >> 2] & 2048 | 0) == 0) {
  i5 = i1 | 0;
 } else {
  i5 = HEAP32[i1 >> 2] | 0;
 }
 i4 = __ZN7WebCore20RenderSVGModelObject17checkIntersectionEPNS_13RenderElementERKNS_9FloatRectE(HEAP32[i5 >> 2] | 0, i3) | 0;
 return i4 | 0;
}
function __ZNK7WebCore13SVGSVGElement14checkEnclosureEPKNS_10SVGElementERKNS_9FloatRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i1 = i2 + 32 | 0;
 if ((HEAP32[i2 + 12 >> 2] & 2048 | 0) == 0) {
  i5 = i1 | 0;
 } else {
  i5 = HEAP32[i1 >> 2] | 0;
 }
 i4 = __ZN7WebCore20RenderSVGModelObject14checkEnclosureEPNS_13RenderElementERKNS_9FloatRectE(HEAP32[i5 >> 2] | 0, i3) | 0;
 return i4 | 0;
}
function __ZN7WebCore13SVGSVGElement20didMoveToNewDocumentEPNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore8Document41unregisterForPageCacheSuspensionCallbacksEPNS_7ElementE(i2, i3);
 }
 __ZN7WebCore8Document39registerForPageCacheSuspensionCallbacksEPNS_7ElementE(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0, i3);
 __ZN7WebCore4Node20didMoveToNewDocumentEPNS_8DocumentE(i1 | 0, i2);
 return;
}
function copyTempDouble(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
 HEAP8[tempDoublePtr + 4 | 0] = HEAP8[i1 + 4 | 0];
 HEAP8[tempDoublePtr + 5 | 0] = HEAP8[i1 + 5 | 0];
 HEAP8[tempDoublePtr + 6 | 0] = HEAP8[i1 + 6 | 0];
 HEAP8[tempDoublePtr + 7 | 0] = HEAP8[i1 + 7 | 0];
}
function __ZN7WebCore13SVGSVGElement11removedFromERNS_13ContainerNodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((HEAP32[i2 + 12 >> 2] & 256 | 0) != 0) {
  __ZN7WebCore21SVGDocumentExtensions19removeTimeContainerEPNS_13SVGSVGElementE(__ZN7WebCore8Document19accessSVGExtensionsEv(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) | 0, i1);
 }
 __ZN7WebCore10SVGElement11removedFromERNS_13ContainerNodeE(i1 | 0, i2);
 return;
}
function viiii___ZN7WebCore10SVGElement36collectStyleForPresentationAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringERNS_22MutableStylePropertiesE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore10SVGElement36collectStyleForPresentationAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringERNS_22MutableStylePropertiesE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function viii___ZN7WebCore10SVGElement32animatedPropertyTypeForAttributeERKNS_13QualifiedNameERN3WTF6VectorINS_20AnimatedPropertyTypeELj0ENS4_15CrashOnOverflowEEE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore10SVGElement32animatedPropertyTypeForAttributeERKNS_13QualifiedNameERN3WTF6VectorINS_20AnimatedPropertyTypeELj0ENS4_15CrashOnOverflowEEE(i1 | 0, i2 | 0, i3 | 0);
}
function viiii___ZN7WebCore10SVGElement16attributeChangedERKNS_13QualifiedNameERKN3WTF12AtomicStringENS_7Element27AttributeModificationReasonE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore10SVGElement16attributeChangedERKNS_13QualifiedNameERKN3WTF12AtomicStringENS_7Element27AttributeModificationReasonE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function __ZN7WebCore13SVGSVGElement27localAttributeToPropertyMapEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if (HEAP8[H_BASE + 2016 | 0] | 0) {
  i2 = HEAP32[H_BASE + 2096 >> 2] | 0;
  return i2 | 0;
 } else {
  i1 = __Znwj(20) | 0;
  i3 = i1;
  _memset(i1 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 2096 >> 2] = i3;
  HEAP8[H_BASE + 2016 | 0] = 1;
  i2 = i3;
  return i2 | 0;
 }
 return 0;
}
function __ZN7WebCore13SVGSVGElement22attributeToPropertyMapEv() {
 var i1 = 0, i2 = 0, i3 = 0;
 if (HEAP8[H_BASE + 2016 | 0] | 0) {
  i1 = HEAP32[H_BASE + 2096 >> 2] | 0;
  return i1 | 0;
 } else {
  i2 = __Znwj(20) | 0;
  i3 = i2;
  _memset(i2 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 2096 >> 2] = i3;
  HEAP8[H_BASE + 2016 | 0] = 1;
  i1 = i3;
  return i1 | 0;
 }
 return 0;
}
function __ZN7WebCore13SVGSVGElement16rendererIsNeededERKNS_11RenderStyleE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 | 0;
 if ((HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 692 >> 2] | 0) == (i3 | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 i4 = __ZN7WebCore7Element16rendererIsNeededERKNS_11RenderStyleE(i3, i2) | 0;
 return i4 | 0;
}
function iiiii___ZN7WebCore10SVGElement16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore10SVGElement16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZNK7WebCore13SVGSVGElement19getIntersectionListERKNS_9FloatRectEPNS_10SVGElementE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZNK7WebCore13SVGSVGElement34collectIntersectionOrEnclosureListERKNS_9FloatRectEPNS_10SVGElementENS0_30CollectIntersectionOrEnclosureE(i1, i2, i3, i4, 0);
 return;
}
function __ZNK7WebCore13SVGSVGElement16getEnclosureListERKNS_9FloatRectEPNS_10SVGElementE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZNK7WebCore13SVGSVGElement34collectIntersectionOrEnclosureListERKNS_9FloatRectEPNS_10SVGElementENS0_30CollectIntersectionOrEnclosureE(i1, i2, i3, i4, 1);
 return;
}
function __ZTv0_n36_NK7WebCore13SVGSVGElement29localCoordinateSpaceTransformENS_12SVGLocatable8CTMScopeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore13SVGSVGElement29localCoordinateSpaceTransformENS_12SVGLocatable8CTMScopeE(i1, i2 + (HEAP32[(HEAP32[i2 >> 2] | 0) - 36 >> 2] | 0) | 0, i3);
 return;
}
function iiiii___ZN7WebCore10SVGElement19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore10SVGElement19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function viii___ZTv0_n32_N7WebCore18SVGGraphicsElement12getScreenCTMENS_12SVGLocatable19StyleUpdateStrategyE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZTv0_n32_N7WebCore18SVGGraphicsElement12getScreenCTMENS_12SVGLocatable19StyleUpdateStrategyE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZThn176_N7WebCore13SVGSVGElement37setExternalResourcesRequiredBaseValueERKbb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = i1 - 288 + 112 | 0;
 HEAP8[i4 + 228 | 0] = HEAP8[i2] & 1;
 i2 = i4 + 229 | 0;
 HEAP8[i2] = HEAP8[i2] & -3 | (i3 & 1) << 1;
 return;
}
function vii___ZNK7WebCore13StyledElement27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore13StyledElement27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE(i1 | 0, i2 | 0);
}
function viii___ZN7WebCore18SVGGraphicsElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore18SVGGraphicsElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZN7WebCore13SVGSVGElement30documentDidResumeFromPageCacheEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 272 | 0;
 if (!(__ZNK7WebCore17SMILTimeContainer8isPausedEv(HEAP32[i2 >> 2] | 0) | 0)) {
  return;
 }
 __ZN7WebCore17SMILTimeContainer6resumeEv(HEAP32[i2 >> 2] | 0);
 return;
}
function __ZN7WebCore13SVGSVGElement31documentWillSuspendForPageCacheEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 272 | 0;
 if (__ZNK7WebCore17SMILTimeContainer8isPausedEv(HEAP32[i2 >> 2] | 0) | 0) {
  return;
 }
 __ZN7WebCore17SMILTimeContainer5pauseEv(HEAP32[i2 >> 2] | 0);
 return;
}
function __ZThn92_NK7WebCore13SVGSVGElement29localCoordinateSpaceTransformENS_12SVGLocatable8CTMScopeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore13SVGSVGElement29localCoordinateSpaceTransformENS_12SVGLocatable8CTMScopeE(i1, i2 - 288 + 196 | 0, i3);
 return;
}
function viii___ZN7WebCore18SVGGraphicsElement21createElementRendererEN3WTF7PassRefINS_11RenderStyleEEE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore18SVGGraphicsElement21createElementRendererEN3WTF7PassRefINS_11RenderStyleEEE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZN7WebCore13SVGSVGElement6createERKNS_13QualifiedNameERNS_8DocumentE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = __Znwj(288) | 0;
 __ZN7WebCore13SVGSVGElementC1ERKNS_13QualifiedNameERNS_8DocumentE(i4, i2, i3);
 HEAP32[i1 >> 2] = i4;
 return;
}
function viii___ZTv0_n24_N7WebCore18SVGGraphicsElement7getBBoxENS_12SVGLocatable19StyleUpdateStrategyE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZTv0_n24_N7WebCore18SVGGraphicsElement7getBBoxENS_12SVGLocatable19StyleUpdateStrategyE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZTv0_n28_N7WebCore18SVGGraphicsElement6getCTMENS_12SVGLocatable19StyleUpdateStrategyE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZTv0_n28_N7WebCore18SVGGraphicsElement6getCTMENS_12SVGLocatable19StyleUpdateStrategyE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore18SVGGraphicsElement12getScreenCTMENS_12SVGLocatable19StyleUpdateStrategyE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore18SVGGraphicsElement12getScreenCTMENS_12SVGLocatable19StyleUpdateStrategyE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZNK7WebCore13SVGSVGElement14getCurrentTimeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 __ZNK7WebCore17SMILTimeContainer7elapsedEv(i3, HEAP32[i1 + 272 >> 2] | 0);
 STACKTOP = i2;
 return +(+HEAPF64[i3 >> 3]);
}
function __ZN7WebCore13SVGSVGElement17unpauseAnimationsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 272 | 0;
 if (!(__ZNK7WebCore17SMILTimeContainer8isPausedEv(HEAP32[i2 >> 2] | 0) | 0)) {
  return;
 }
 __ZN7WebCore17SMILTimeContainer6resumeEv(HEAP32[i2 >> 2] | 0);
 return;
}
function __ZThn92_NK7WebCore18SVGGraphicsElement29localCoordinateSpaceTransformENS_12SVGLocatable8CTMScopeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i3 = i2 - 176 + 176 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 32 >> 2] & 127](i1, i3);
 return;
}
function __ZN7WebCore13SVGSVGElement11deselectAllEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore14FrameSelection5clearEv(HEAP32[i2 + 468 >> 2] | 0);
 return;
}
function __ZN7WebCore13SVGSVGElement15pauseAnimationsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 272 | 0;
 if (__ZNK7WebCore17SMILTimeContainer8isPausedEv(HEAP32[i2 >> 2] | 0) | 0) {
  return;
 }
 __ZN7WebCore17SMILTimeContainer5pauseEv(HEAP32[i2 >> 2] | 0);
 return;
}
function __ZN7WebCore13SVGSVGElement37setExternalResourcesRequiredBaseValueERKbb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = i1 + 228 | 0;
 HEAP8[i4] = HEAP8[i2] & 1;
 i2 = i4 + 1 | 0;
 HEAP8[i2] = HEAP8[i2] & -3 | (i3 & 1) << 1;
 return;
}
function __ZN7WebCore13SVGSVGElement20setContentScriptTypeERKN3WTF12AtomicStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element12setAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1 | 0, __ZN7WebCore8SVGNames21contentScriptTypeAttrE, i2);
 return;
}
function viii___ZN7WebCore18SVGGraphicsElement7getBBoxENS_12SVGLocatable19StyleUpdateStrategyE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore18SVGGraphicsElement7getBBoxENS_12SVGLocatable19StyleUpdateStrategyE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZN7WebCore13SVGSVGElement19setContentStyleTypeERKN3WTF12AtomicStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element12setAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1 | 0, __ZN7WebCore8SVGNames20contentStyleTypeAttrE, i2);
 return;
}
function viii___ZN7WebCore18SVGGraphicsElement6getCTMENS_12SVGLocatable19StyleUpdateStrategyE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore18SVGGraphicsElement6getCTMENS_12SVGLocatable19StyleUpdateStrategyE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZNK7WebCore18SVGGraphicsElement29localCoordinateSpaceTransformENS_12SVGLocatable8CTMScopeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i3 = i2 + 92 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 32 >> 2] & 127](i1, i3);
 return;
}
function __ZN7WebCore32SVGAnimatedStaticPropertyTearOffIbE10setBaseValERKbRi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP8[HEAP32[i1 + 24 >> 2] | 0] = HEAP8[i2] & 1;
 __ZN7WebCore19SVGAnimatedProperty12commitChangeEv(i1 | 0);
 return;
}
function __ZNK7WebCore16SVGTransformable29localCoordinateSpaceTransformENS_12SVGLocatable8CTMScopeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 32 >> 2] & 127](i1, i2);
 return;
}
function iiii___ZNK7WebCore10SVGElement11isSupportedEPN3WTF10StringImplES3___wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZNK7WebCore10SVGElement11isSupportedEPN3WTF10StringImplES3_(i1 | 0, i2 | 0, i3 | 0) | 0;
}
function iii___ZNK7WebCore10SVGElement23isPresentationAttributeERKNS_13QualifiedNameE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore10SVGElement23isPresentationAttributeERKNS_13QualifiedNameE(i1 | 0, i2 | 0) | 0;
}
function vii___ZN7WebCore10SVGElement15childrenChangedERKNS_13ContainerNode11ChildChangeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore10SVGElement15childrenChangedERKNS_13ContainerNode11ChildChangeE(i1 | 0, i2 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function vii___ZN7WebCore18SVGGraphicsElement19svgAttributeChangedERKNS_13QualifiedNameE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore18SVGGraphicsElement19svgAttributeChangedERKNS_13QualifiedNameE(i1 | 0, i2 | 0);
}
function iii___ZNK7WebCore10SVGElement22shouldMoveToFlowThreadERKNS_11RenderStyleE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore10SVGElement22shouldMoveToFlowThreadERKNS_11RenderStyleE(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK7WebCore10SVGElement19isKeyboardFocusableEPNS_13KeyboardEventE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore10SVGElement19isKeyboardFocusableEPNS_13KeyboardEventE(i1 | 0, i2 | 0) | 0;
}
function vii___ZN7WebCore7Element10setOnfocusEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element10setOnfocusEN3WTF10PassRefPtrINS_13EventListenerEEE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore7Element10setOnerrorEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element10setOnerrorEN3WTF10PassRefPtrINS_13EventListenerEEE(i1 | 0, i2 | 0);
}
function __ZTv0_n12_N7WebCore13SVGSVGElementD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + (HEAP32[(HEAP32[i1 >> 2] | 0) - 12 >> 2] | 0) | 0;
 __ZN7WebCore13SVGSVGElementD2Ev(i2, H_BASE + 1096 | 0);
 __ZdlPv(i2);
 return;
}
function vii___ZN7WebCore7Element9setOnloadEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element9setOnloadEN3WTF10PassRefPtrINS_13EventListenerEEE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore7Element9setOnblurEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element9setOnblurEN3WTF10PassRefPtrINS_13EventListenerEEE(i1 | 0, i2 | 0);
}
function iii___ZNK7WebCore10SVGElement25childShouldCreateRendererERKNS_4NodeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore10SVGElement25childShouldCreateRendererERKNS_4NodeE(i1 | 0, i2 | 0) | 0;
}
function viii___ZN7WebCore7Element9setPrefixERKN3WTF12AtomicStringERi__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore7Element9setPrefixERKN3WTF12AtomicStringERi(i1 | 0, i2 | 0, i3 | 0);
}
function iii___ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE(i1 | 0, i2 | 0) | 0;
}
function iii___ZN7WebCore10SVGElement16rendererIsNeededERKNS_11RenderStyleE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore10SVGElement16rendererIsNeededERKNS_11RenderStyleE(i1 | 0, i2 | 0) | 0;
}
function vii___ZThn92_NK7WebCore18SVGGraphicsElement22animatedLocalTransformEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZThn92_NK7WebCore18SVGGraphicsElement22animatedLocalTransformEv(i1 | 0, i2 | 0);
}
function iii___ZN7WebCore10SVGElement15willRecalcStyleENS_5Style6ChangeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore10SVGElement15willRecalcStyleENS_5Style6ChangeE(i1 | 0, i2 | 0) | 0;
}
function iii___ZN7WebCore10SVGElement12insertedIntoERNS_13ContainerNodeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore10SVGElement12insertedIntoERNS_13ContainerNodeE(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK7WebCore7Element16childTypeAllowedENS_4Node8NodeTypeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore7Element16childTypeAllowedENS_4Node8NodeTypeE(i1 | 0, i2 | 0) | 0;
}
function viii___ZN7WebCore4Node12setNodeValueERKN3WTF6StringERi__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore4Node12setNodeValueERKN3WTF6StringERi(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore7Element5focusEbNS_14FocusDirectionE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore7Element5focusEbNS_14FocusDirectionE(i1 | 0, i2 | 0, i3 | 0);
}
function ii___ZTv0_n20_NK7WebCore18SVGGraphicsElement23farthestViewportElementEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZTv0_n20_NK7WebCore18SVGGraphicsElement23farthestViewportElementEv(i1 | 0) | 0;
}
function vii___ZNK7WebCore18SVGGraphicsElement22animatedLocalTransformEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore18SVGGraphicsElement22animatedLocalTransformEv(i1 | 0, i2 | 0);
}
function v___ZN7WebCore7Element18dispatchFocusEventEN3WTF10PassRefPtrIS0_EENS_14FocusDirectionE__wrapper() {
 __ZN7WebCore7Element18dispatchFocusEventEN3WTF10PassRefPtrIS0_EENS_14FocusDirectionE();
}
function ii___ZTv0_n16_NK7WebCore18SVGGraphicsElement22nearestViewportElementEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZTv0_n16_NK7WebCore18SVGGraphicsElement22nearestViewportElementEv(i1 | 0) | 0;
}
function __ZN7WebCore18SVGGraphicsElement29synchronizeRequiredExtensionsEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore8SVGTests29synchronizeRequiredExtensionsEPNS_10SVGElementE(i1 + 96 | 0, i1 | 0);
 return;
}
function __ZN7WebCore13SVGSVGElement28createSVGTransformFromMatrixERKNS_9SVGMatrixE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore12SVGTransformC1ERKNS_15AffineTransformE(i1, i2 | 0);
 return;
}
function iii___ZN7WebCore10SVGElement13computedStyleENS_8PseudoIdE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore10SVGElement13computedStyleENS_8PseudoIdE(i1 | 0, i2 | 0) | 0;
}
function vii___ZN7WebCore10SVGElement11removedFromERNS_13ContainerNodeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore10SVGElement11removedFromERNS_13ContainerNodeE(i1 | 0, i2 | 0);
}
function __ZN7WebCore13SVGSVGElement36synchronizeExternalResourcesRequiredEPNS_10SVGElementE(i1) {
 i1 = i1 | 0;
 __ZN7WebCore13SVGSVGElement36synchronizeExternalResourcesRequiredEv(i1);
 return;
}
function __ZN7WebCore18SVGGraphicsElement27synchronizeRequiredFeaturesEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore8SVGTests27synchronizeRequiredFeaturesEPNS_10SVGElementE(i1 + 96 | 0, i1 | 0);
 return;
}
function vii___ZN7WebCore18SVGGraphicsElement10toClipPathERNS_4PathE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore18SVGGraphicsElement10toClipPathERNS_4PathE(i1 | 0, i2 | 0);
}
function __ZN7WebCore18SVGGraphicsElement25synchronizeSystemLanguageEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore8SVGTests25synchronizeSystemLanguageEPNS_10SVGElementE(i1 + 96 | 0, i1 | 0);
 return;
}
function dynCall_iiiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return FUNCTION_TABLE_iiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function __ZNK7WebCore4Node22scriptExecutionContextEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
 return ((i2 | 0) == 0 ? 0 : i2 + 88 | 0) | 0;
}
function vii___ZN7WebCore7Element14didRecalcStyleENS_5Style6ChangeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element14didRecalcStyleENS_5Style6ChangeE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore4Node20didMoveToNewDocumentEPNS_8DocumentE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore4Node20didMoveToNewDocumentEPNS_8DocumentE(i1 | 0, i2 | 0);
}
function __ZNK7WebCore12SVGLocatable29localCoordinateSpaceTransformENS0_8CTMScopeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore15AffineTransformC1Ev(i1);
 return;
}
function __ZTv0_n12_N7WebCore13SVGSVGElementD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore13SVGSVGElementD2Ev(i1 + (HEAP32[(HEAP32[i1 >> 2] | 0) - 12 >> 2] | 0) | 0, H_BASE + 1096 | 0);
 return;
}
function __ZThn176_N7WebCore13SVGSVGElementD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 288 + 112 | 0;
 __ZN7WebCore13SVGSVGElementD2Ev(i2, H_BASE + 1096 | 0);
 __ZdlPv(i2);
 return;
}
function __ZThn92_N7WebCore13SVGSVGElementD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 288 + 196 | 0;
 __ZN7WebCore13SVGSVGElementD2Ev(i2, H_BASE + 1096 | 0);
 __ZdlPv(i2);
 return;
}
function ii___ZNK7WebCore18SVGGraphicsElement23farthestViewportElementEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore18SVGGraphicsElement23farthestViewportElementEv(i1 | 0) | 0;
}
function __ZN7WebCore13SVGSVGElement30synchronizePreserveAspectRatioEPNS_10SVGElementE(i1) {
 i1 = i1 | 0;
 __ZN7WebCore13SVGSVGElement30synchronizePreserveAspectRatioEv(i1);
 return;
}
function ii___ZNK7WebCore18SVGGraphicsElement22nearestViewportElementEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore18SVGGraphicsElement22nearestViewportElementEv(i1 | 0) | 0;
}
function vii___ZN7WebCore4Node19defaultEventHandlerEPNS_5EventE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore4Node19defaultEventHandlerEPNS_5EventE(i1 | 0, i2 | 0);
}
function ii___ZN7WebCore18SVGGraphicsElement21supplementalTransformEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore18SVGGraphicsElement21supplementalTransformEv(i1 | 0) | 0;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function vii___ZN7WebCore4Node17handleLocalEventsERNS_5EventE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore4Node17handleLocalEventsERNS_5EventE(i1 | 0, i2 | 0);
}
function __ZN7WebCore13SVGSVGElement18createSVGTransformEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore12SVGTransformC1ENS0_16SVGTransformTypeENS0_16ConstructionModeE(i1, 1, 0);
 return;
}
function ii___ZN7WebCore10SVGElement27haveLoadedRequiredResourcesEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore10SVGElement27haveLoadedRequiredResourcesEv(i1 | 0) | 0;
}
function viii___ZN7WebCore7Element9setActiveEbb__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore7Element9setActiveEbb(i1 | 0, i2 | 0, i3 | 0);
}
function vi___ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv(i1 | 0);
}
function viii___ZN7WebCore7Element9cloneNodeEb__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore7Element9cloneNodeEb(i1 | 0, i2 | 0, i3 | 0);
}
function vii___ZN7WebCore7Element21updateFocusAppearanceEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element21updateFocusAppearanceEb(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore7Element27matchesReadWritePseudoClassEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element27matchesReadWritePseudoClassEv(i1 | 0) | 0;
}
function __ZN7WebCore32SVGAnimatedStaticPropertyTearOffIbED0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore19SVGAnimatedPropertyD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore18SVGGraphicsElement27localAttributeToPropertyMapEv(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore18SVGGraphicsElement22attributeToPropertyMapEv() | 0;
}
function vii___ZNK7WebCore13ContainerNode11boundingBoxEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore13ContainerNode11boundingBoxEv(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore10SVGElement15accessKeyActionEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore10SVGElement15accessKeyActionEb(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore7Element26matchesReadOnlyPseudoClassEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element26matchesReadOnlyPseudoClassEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore7Element25shouldAppearIndeterminateEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element25shouldAppearIndeterminateEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node29willRespondToMouseWheelEventsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node29willRespondToMouseWheelEventsEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node29willRespondToMouseClickEventsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node29willRespondToMouseClickEventsEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node28willRespondToMouseMoveEventsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node28willRespondToMouseMoveEventsEv(i1 | 0) | 0;
}
function __ZNK7WebCore13SVGSVGElement16animationsPausedEv(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore17SMILTimeContainer8isPausedEv(HEAP32[i1 + 272 >> 2] | 0) | 0;
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZN7WebCore13SVGSVGElement18synchronizeViewBoxEPNS_10SVGElementE(i1) {
 i1 = i1 | 0;
 __ZN7WebCore13SVGSVGElement18synchronizeViewBoxEv(i1);
 return;
}
function v___ZN7WebCore7Element40cloneElementWithoutAttributesAndChildrenEv__wrapper() {
 __ZN7WebCore7Element40cloneElementWithoutAttributesAndChildrenEv();
}
function ii___ZNK7WebCore7Element22isSpellCheckingEnabledEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element22isSpellCheckingEnabledEv(i1 | 0) | 0;
}
function __ZN7WebCore13SVGSVGElement17synchronizeHeightEPNS_10SVGElementE(i1) {
 i1 = i1 | 0;
 __ZN7WebCore13SVGSVGElement17synchronizeHeightEv(i1);
 return;
}
function v___ZN7WebCore7Element17dispatchBlurEventEN3WTF10PassRefPtrIS0_EE__wrapper() {
 __ZN7WebCore7Element17dispatchBlurEventEN3WTF10PassRefPtrIS0_EE();
}
function __ZN7WebCore13SVGSVGElement16synchronizeWidthEPNS_10SVGElementE(i1) {
 i1 = i1 | 0;
 __ZN7WebCore13SVGSVGElement16synchronizeWidthEv(i1);
 return;
}
function vii___ZN7WebCore7Element13setScrollLeftEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element13setScrollLeftEi(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore10SVGElement16isMouseFocusableEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore10SVGElement16isMouseFocusableEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node24willRespondToTouchEventsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node24willRespondToTouchEventsEv(i1 | 0) | 0;
}
function ii___ZN7WebCore10SVGElement17svgLoadEventTimerEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore10SVGElement17svgLoadEventTimerEv(i1 | 0) | 0;
}
function vii___ZN7WebCore7Element12setScrollTopEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element12setScrollTopEi(i1 | 0, i2 | 0);
}
function ii___ZN7WebCore7Element20shouldUseInputMethodEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element20shouldUseInputMethodEv(i1 | 0) | 0;
}
function vi___ZN7WebCore10SVGElement21finishParsingChildrenEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore10SVGElement21finishParsingChildrenEv(i1 | 0);
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 63](i2 | 0, i3 | 0, i4 | 0);
}
function ii___ZNK7WebCore11EventTarget13isMessagePortEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11EventTarget13isMessagePortEv(i1 | 0) | 0;
}
function __ZThn176_N7WebCore13SVGSVGElementD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore13SVGSVGElementD2Ev(i1 - 288 + 112 | 0, H_BASE + 1096 | 0);
 return;
}
function __ZThn92_N7WebCore13SVGSVGElementD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore13SVGSVGElementD2Ev(i1 - 288 + 196 | 0, H_BASE + 1096 | 0);
 return;
}
function vii___ZN7WebCore7Element10setHoveredEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element10setHoveredEb(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore4Node20eventTargetInterfaceEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node20eventTargetInterfaceEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node21ensureEventTargetDataEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node21ensureEventTargetDataEv(i1 | 0) | 0;
}
function __ZN7WebCore13SVGSVGElement12synchronizeYEPNS_10SVGElementE(i1) {
 i1 = i1 | 0;
 __ZN7WebCore13SVGSVGElement12synchronizeYEv(i1);
 return;
}
function __ZN7WebCore13SVGSVGElement12synchronizeXEPNS_10SVGElementE(i1) {
 i1 = i1 | 0;
 __ZN7WebCore13SVGSVGElement12synchronizeXEv(i1);
 return;
}
function vi___ZN7WebCore7Element23removeAllEventListenersEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element23removeAllEventListenersEv(i1 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function vii___ZNK7WebCore10SVGElement5titleEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore10SVGElement5titleEv(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore7Element8nodeNameEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore7Element8nodeNameEv(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore4Node18offsetInCharactersEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node18offsetInCharactersEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore4Node18maxCharacterOffsetEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node18maxCharacterOffsetEv(i1 | 0) | 0;
}
function ii___ZN7WebCore11EventTarget11toDOMWindowEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore11EventTarget11toDOMWindowEv(i1 | 0) | 0;
}
function vii___ZNK7WebCore7Element7baseURIEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore7Element7baseURIEv(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore7Element8setFocusEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element8setFocusEb(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore7Element14shadowPseudoIdEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element14shadowPseudoIdEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore7Element14imageSourceURLEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element14imageSourceURLEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore4Node17canStartSelectionEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node17canStartSelectionEv(i1 | 0) | 0;
}
function vi___ZN7WebCore7Element20beginParsingChildrenEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element20beginParsingChildrenEv(i1 | 0);
}
function __ZN7WebCore13SVGSVGElementD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore13SVGSVGElementD2Ev(i1, H_BASE + 1096 | 0);
 __ZdlPv(i1);
 return;
}
function vii___ZNK7WebCore4Node9nodeValueEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore4Node9nodeValueEv(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore7Element13supportsFocusEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element13supportsFocusEv(i1 | 0) | 0;
}
function __ZN7WebCore32SVGAnimatedStaticPropertyTearOffIbED1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore19SVGAnimatedPropertyD2Ev(i1 | 0);
 return;
}
function vi___ZN7WebCore7Element19willDetachRenderersEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element19willDetachRenderersEv(i1 | 0);
}
function vi___ZN7WebCore7Element19willAttachRenderersEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element19willAttachRenderersEv(i1 | 0);
}
function ii___ZN7WebCore7Element13focusDelegateEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element13focusDelegateEv(i1 | 0) | 0;
}
function vi___ZThn92_N7WebCore18SVGGraphicsElementD1Ev__wrapper(i1) {
 i1 = i1 | 0;
 __ZThn92_N7WebCore18SVGGraphicsElementD1Ev(i1 | 0);
}
function vi___ZThn92_N7WebCore18SVGGraphicsElementD0Ev__wrapper(i1) {
 i1 = i1 | 0;
 __ZThn92_N7WebCore18SVGGraphicsElementD0Ev(i1 | 0);
}
function vi___ZN7WebCore7Element18didDetachRenderersEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element18didDetachRenderersEv(i1 | 0);
}
function vi___ZN7WebCore7Element18didAttachRenderersEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element18didAttachRenderersEv(i1 | 0);
}
function ii___ZNK7WebCore7Element11isFocusableEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element11isFocusableEv(i1 | 0) | 0;
}
function ii___ZN7WebCore7Element12scrollHeightEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element12scrollHeightEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node15eventTargetDataEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node15eventTargetDataEv(i1 | 0) | 0;
}
function __ZN7WebCore13SVGSVGElement14createSVGPointEv(i1) {
 i1 = i1 | 0;
 HEAPF32[i1 >> 2] = +0;
 HEAPF32[i1 + 4 >> 2] = +0;
 return;
}
function ii___ZN7WebCore7Element11scrollWidthEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element11scrollWidthEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node14toInputElementEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node14toInputElementEv(i1 | 0) | 0;
}
function ii___ZN7WebCore13StyledElement5styleEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore13StyledElement5styleEv(i1 | 0) | 0;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 31](i2 | 0, i3 | 0) | 0;
}
function ii___ZN7WebCore7Element10scrollLeftEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element10scrollLeftEv(i1 | 0) | 0;
}
function vi___ZN7WebCore4Node18dispatchInputEventEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore4Node18dispatchInputEventEv(i1 | 0);
}
function __ZThn176_NK7WebCore13SVGSVGElement34externalResourcesRequiredBaseValueEv(i1) {
 i1 = i1 | 0;
 return i1 - 288 + 340 | 0;
}
function v___ZN7WebCore10SVGElement22customStyleForRendererEv__wrapper() {
 __ZN7WebCore10SVGElement22customStyleForRendererEv();
}
function __ZN7WebCore13SVGSVGElement15createSVGMatrixEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15AffineTransformC2Ev(i1 | 0);
 return;
}
function ii___ZNK7WebCore7Element8tabIndexEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element8tabIndexEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore7Element8nodeTypeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element8nodeTypeEv(i1 | 0) | 0;
}
function ii___ZN7WebCore7Element9scrollTopEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element9scrollTopEv(i1 | 0) | 0;
}
function _strlen(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1;
 while (HEAP8[i2] | 0) {
  i2 = i2 + 1 | 0;
 }
 return i2 - i1 | 0;
}
function vi___ZN7WebCore4Node16derefEventTargetEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore4Node16derefEventTargetEv(i1 | 0);
}
function __ZNK7WebCore13SVGSVGElement7isValidEv(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore8SVGTests7isValidEv(i1 + 96 | 0) | 0;
}
function __ZN7WebCore13SVGSVGElementD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore13SVGSVGElementD2Ev(i1, H_BASE + 1096 | 0);
 return;
}
function vi___ZN7WebCore18SVGGraphicsElementD1Ev__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore18SVGGraphicsElementD1Ev(i1 | 0);
}
function vi___ZN7WebCore18SVGGraphicsElementD0Ev__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore18SVGGraphicsElementD0Ev(i1 | 0);
}
function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = i1;
  threwValue = i2;
 }
}
function __ZNK7WebCore13SVGSVGElement8viewportEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 _memset(i1 | 0, 0, 16) | 0;
 return;
}
function ii___ZN7WebCore7Element7onfocusEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element7onfocusEv(i1 | 0) | 0;
}
function ii___ZN7WebCore7Element7onerrorEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element7onerrorEv(i1 | 0) | 0;
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 127](i2 | 0, i3 | 0);
}
function __ZN7WebCore28SVGExternalResourcesRequired21setHaveFiredLoadEventEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function vi___ZN7WebCore4Node14refEventTargetEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore4Node14refEventTargetEv(i1 | 0);
}
function __ZN7WebCore4Node26didNotifySubtreeInsertionsEPNS_13ContainerNodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function ii___ZN7WebCore7Element6onloadEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element6onloadEv(i1 | 0) | 0;
}
function ii___ZN7WebCore7Element6onblurEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element6onblurEv(i1 | 0) | 0;
}
function __ZN7WebCore7Element37copyNonAttributePropertiesFromElementERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore7Element25didAddUserAgentShadowRootEPNS_10ShadowRootE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function vi___ZN7WebCore16SVGTransformableD1Ev__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore16SVGTransformableD1Ev(i1 | 0);
}
function vi___ZN7WebCore16SVGTransformableD0Ev__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore16SVGTransformableD0Ev(i1 | 0);
}
function __ZNK7WebCore7Element22isHTMLContentAttributeERKNS_9AttributeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}
function __ZN7WebCore4Node43notifyLoadedSheetAndAllCriticalSubresourcesEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZNK7WebCore13SVGSVGElement34externalResourcesRequiredBaseValueEv(i1) {
 i1 = i1 | 0;
 return i1 + 228 | 0;
}
function __ZNK7WebCore13SVGSVGElement24screenPixelToMillimeterYEv(i1) {
 i1 = i1 | 0;
 return +(+.2645833194255829);
}
function __ZNK7WebCore13SVGSVGElement24screenPixelToMillimeterXEv(i1) {
 i1 = i1 | 0;
 return +(+.2645833194255829);
}
function ii___ZN7WebCore4Node6toNodeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node6toNodeEv(i1 | 0) | 0;
}
function __ZN7WebCore13SVGSVGElement14createSVGAngleEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore8SVGAngleC1Ev(i1);
 return;
}
function __ZNK7WebCore13SVGSVGElement22pixelUnitToMillimeterYEv(i1) {
 i1 = i1 | 0;
 return +(+.2645833194255829);
}
function __ZNK7WebCore13SVGSVGElement22pixelUnitToMillimeterXEv(i1) {
 i1 = i1 | 0;
 return +(+.2645833194255829);
}
function __ZNK7WebCore7Element14isURLAttributeERKNS_9AttributeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}
function __ZNK7WebCore7Element12namespaceURIEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 44 >> 2] | 0) + 16 | 0;
}
function __ZN7WebCore13SVGSVGElement13createSVGRectEv(i1) {
 i1 = i1 | 0;
 _memset(i1 | 0, 0, 16) | 0;
 return;
}
function __ZNK7WebCore7Element6targetEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function b0(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(0);
 return 0;
}
function __ZNK7WebCore7Element9localNameEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 44 >> 2] | 0) + 12 | 0;
}
function __ZN7WebCore13StyledElement36additionalPresentationAttributeStyleEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function vi___ZN7WebCore7Element4blurEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element4blurEv(i1 | 0);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 255](i2 | 0) | 0;
}
function __ZNK7WebCore28SVGExternalResourcesRequired18haveFiredLoadEventEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element6prefixEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 44 >> 2] | 0) + 8 | 0;
}
function __ZNK7WebCore28SVGExternalResourcesRequired16isParserInsertedEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore13SVGSVGElement15unsuspendRedrawEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore13SVGSVGElement13suspendRedrawEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}
function __ZNK7WebCore19SVGAnimatedProperty21isAnimatedListTearOffEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element32isSearchFieldCancelButtonElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore18SVGGraphicsElement20isSVGGraphicsElementEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore10SVGElement28needsPendingResourceHandlingEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function b8(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(8);
}
function __ZNK7WebCore7Element31alwaysCreateUserAgentShadowRootEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 127](i2 | 0);
}
function __ZN7WebCore7Element31documentWillSuspendForPageCacheEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore10SVGElement23areAuthorShadowsAllowedEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore7Element30willStopBeingFullscreenElementEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore7Element30documentDidResumeFromPageCacheEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore10SVGElement22selfHasRelativeLengthsEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore7Element29privateBrowsingStateDidChangeEv(i1) {
 i1 = i1 | 0;
 return;
}
function b4(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(4);
 return 0;
}
function __ZN7WebCore7Element25isValidFormControlElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element23canContainRangeEndPointEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZN7WebCore7Element26didBecomeFullscreenElementEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore7Element22isDefaultButtonForFormEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore13SVGSVGElement18unsuspendRedrawAllEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore7Element21isRequiredFormControlEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element21isOptionalFormControlEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element21isDisabledFormControlEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element20isFormControlElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore13SVGSVGElement13supportsFocusEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore7Element19isSpinButtonElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore10SVGElement15supportsMarkersEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore7Element22visibilityStateChangedEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore7Element18isFrameElementBaseEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node21isMediaControlElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore10SVGElement14isGradientStopEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore10SVGElement14isFilterEffectEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore4Node24startLoadingDynamicSheetEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore7Element17isTextFormControlEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node20isInsertionPointNodeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore10SVGElement13isTextContentEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore10SVGElement13isSMILElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore7Element20mediaVolumeDidChangeEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore7Element20buildPendingResourceEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore12SVGLocatableD0Ev(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
}
function __ZNK7WebCore4Node19isFrameOwnerElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node19isCharacterDataNodeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore13SVGSVGElement11forceRedrawEv(i1) {
 i1 = i1 | 0;
 return;
}
function b5(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(5);
}
function __ZNK7WebCore4Node16nonRendererStyleEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element12willValidateEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element12isOutOfRangeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node15isPluginElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node15isMediaControlsEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node15isAttributeNodeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node14customPseudoIdEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore10SVGElement7isValidEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZN7WebCore13SVGSVGElement15createSVGNumberEv() {
 return +(+0);
}
function __ZNK7WebCore7Element9isInRangeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore4Node11sheetLoadedEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function b7(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(7);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 15]();
}
function __ZN7WebCore12SVGLocatableD1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function v____cxa_pure_virtual__wrapper() {
 ___cxa_pure_virtual();
}
function b2(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(2);
}
function stackRestore(i1) {
 i1 = i1 | 0;
 STACKTOP = i1;
}
function setTempRet9(i1) {
 i1 = i1 | 0;
 tempRet9 = i1;
}
function setTempRet8(i1) {
 i1 = i1 | 0;
 tempRet8 = i1;
}
function setTempRet7(i1) {
 i1 = i1 | 0;
 tempRet7 = i1;
}
function setTempRet6(i1) {
 i1 = i1 | 0;
 tempRet6 = i1;
}
function setTempRet5(i1) {
 i1 = i1 | 0;
 tempRet5 = i1;
}
function setTempRet4(i1) {
 i1 = i1 | 0;
 tempRet4 = i1;
}
function setTempRet3(i1) {
 i1 = i1 | 0;
 tempRet3 = i1;
}
function setTempRet2(i1) {
 i1 = i1 | 0;
 tempRet2 = i1;
}
function setTempRet1(i1) {
 i1 = i1 | 0;
 tempRet1 = i1;
}
function setTempRet0(i1) {
 i1 = i1 | 0;
 tempRet0 = i1;
}
function b3(i1) {
 i1 = i1 | 0;
 abort(3);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b1(i1) {
 i1 = i1 | 0;
 abort(1);
}
function b6() {
 abort(6);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_iiiii = [b0,b0,iiiii___ZN7WebCore10SVGElement19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb__wrapper,b0,iiiii___ZN7WebCore10SVGElement16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb__wrapper,b0,b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore7Element29privateBrowsingStateDidChangeEv,b1,__ZN7WebCore32SVGAnimatedStaticPropertyTearOffIbED1Ev,b1,__ZN7WebCore7Element20buildPendingResourceEv,b1,vi___ZN7WebCore4Node16derefEventTargetEv__wrapper,b1,__ZN7WebCore13SVGSVGElement30documentDidResumeFromPageCacheEv,b1,vi___ZThn92_N7WebCore18SVGGraphicsElementD1Ev__wrapper,b1,__ZN7WebCore7Element22visibilityStateChangedEv,b1,__ZN7WebCore26SVGAnimatedPropertyTearOffINS_9SVGLengthEED1Ev,b1,vi___ZN7WebCore18SVGGraphicsElementD1Ev__wrapper,b1,__ZN7WebCore13SVGSVGElement18synchronizeViewBoxEPNS_10SVGElementE,b1,__ZN7WebCore32SVGAnimatedStaticPropertyTearOffIbED0Ev,b1,__ZN7WebCore13SVGSVGElement31documentWillSuspendForPageCacheEv,b1,vi___ZN7WebCore4Node18dispatchInputEventEv__wrapper,b1,__ZN7WebCore26SVGAnimatedPropertyTearOffINS_9FloatRectEED1Ev
  ,b1,vi___ZN7WebCore7Element19willAttachRenderersEv__wrapper,b1,vi___ZN7WebCore18SVGGraphicsElementD0Ev__wrapper,b1,__ZN7WebCore26SVGAnimatedPropertyTearOffINS_22SVGPreserveAspectRatioEED1Ev,b1,__ZN7WebCore13SVGSVGElementD0Ev,b1,__ZThn92_N7WebCore13SVGSVGElementD1Ev,b1,__ZN7WebCore13SVGSVGElement17synchronizeHeightEPNS_10SVGElementE,b1,__ZThn92_N7WebCore13SVGSVGElementD0Ev,b1,__ZN7WebCore13SVGSVGElement12synchronizeXEPNS_10SVGElementE,b1,vi___ZThn92_N7WebCore18SVGGraphicsElementD0Ev__wrapper,b1,__ZN7WebCore12SVGLocatableD1Ev,b1,vi___ZN7WebCore10SVGElement21finishParsingChildrenEv__wrapper,b1,__ZN7WebCore13SVGSVGElement36synchronizeExternalResourcesRequiredEPNS_10SVGElementE,b1,vi___ZN7WebCore16SVGTransformableD1Ev__wrapper,b1,__ZN7WebCore4Node24startLoadingDynamicSheetEv,b1,__ZN7WebCore26SVGAnimatedPropertyTearOffINS_9FloatRectEED0Ev
  ,b1,__ZN7WebCore7Element30willStopBeingFullscreenElementEv,b1,__ZN7WebCore26SVGAnimatedPropertyTearOffINS_22SVGPreserveAspectRatioEED0Ev,b1,vi___ZN7WebCore7Element23removeAllEventListenersEv__wrapper,b1,vi___ZN7WebCore7Element19willDetachRenderersEv__wrapper,b1,__ZN7WebCore7Element20mediaVolumeDidChangeEv,b1,vi___ZN7WebCore7Element20beginParsingChildrenEv__wrapper,b1,__ZN7WebCore7Element31documentWillSuspendForPageCacheEv,b1,vi___ZN7WebCore16SVGTransformableD0Ev__wrapper,b1,vi___ZN7WebCore4Node14refEventTargetEv__wrapper,b1,__ZN7WebCore12SVGLocatableD0Ev,b1,vi___ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv__wrapper,b1,__ZN7WebCore18SVGGraphicsElement25synchronizeSystemLanguageEv,b1,vi___ZN7WebCore7Element18didAttachRenderersEv__wrapper,b1,__ZThn176_N7WebCore13SVGSVGElementD1Ev,b1,__ZN7WebCore13SVGSVGElement12synchronizeYEPNS_10SVGElementE
  ,b1,vi___ZN7WebCore7Element4blurEv__wrapper,b1,__ZN7WebCore13SVGSVGElement16synchronizeWidthEPNS_10SVGElementE,b1,vi___ZN7WebCore7Element18didDetachRenderersEv__wrapper,b1,__ZN7WebCore26SVGAnimatedPropertyTearOffINS_9SVGLengthEED0Ev,b1,__ZN7WebCore18SVGGraphicsElement29synchronizeRequiredExtensionsEv,b1,__ZThn176_N7WebCore13SVGSVGElementD0Ev,b1,__ZN7WebCore13SVGSVGElement30synchronizePreserveAspectRatioEPNS_10SVGElementE,b1,__ZN7WebCore13SVGSVGElementD1Ev,b1,__ZN7WebCore7Element30documentDidResumeFromPageCacheEv,b1,__ZN7WebCore7Element26didBecomeFullscreenElementEv,b1,__ZN7WebCore18SVGGraphicsElement27synchronizeRequiredFeaturesEv,b1,b1,b1,b1,b1,b1,b1,b1
  ,b1,b1,b1,b1,b1,b1,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,vii___ZN7WebCore7Element10setOnfocusEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper,b2,__ZNK7WebCore7Element6targetEv,b2,vii___ZN7WebCore18SVGGraphicsElement19svgAttributeChangedERKNS_13QualifiedNameE__wrapper,b2,vii___ZNK7WebCore7Element8nodeNameEv__wrapper,b2,__ZN7WebCore13SVGSVGElement40lookupOrCreatePreserveAspectRatioWrapperEPNS_10SVGElementE,b2,vii___ZN7WebCore7Element9setOnblurEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper,b2,__ZN7WebCore7Element25didAddUserAgentShadowRootEPNS_10ShadowRootE,b2,__ZN7WebCore13SVGSVGElement11removedFromERNS_13ContainerNodeE,b2,__ZN7WebCore13SVGSVGElement20didMoveToNewDocumentEPNS_8DocumentE,b2,vii___ZN7WebCore10SVGElement15childrenChangedERKNS_13ContainerNode11ChildChangeE__wrapper,b2,vii___ZN7WebCore7Element12setScrollTopEi__wrapper,b2,vii___ZNK7WebCore13ContainerNode11boundingBoxEv__wrapper,b2,vii___ZN7WebCore7Element9setOnloadEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper,b2,vii___ZN7WebCore7Element21updateFocusAppearanceEb__wrapper
  ,b2,vii___ZN7WebCore7Element10setOnerrorEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper,b2,__ZN7WebCore13SVGSVGElement19svgAttributeChangedERKNS_13QualifiedNameE,b2,vii___ZN7WebCore4Node17handleLocalEventsERNS_5EventE__wrapper,b2,vii___ZNK7WebCore7Element7baseURIEv__wrapper,b2,__ZN7WebCore4Node26didNotifySubtreeInsertionsEPNS_13ContainerNodeE,b2,vii___ZN7WebCore10SVGElement11removedFromERNS_13ContainerNodeE__wrapper,b2,__ZN7WebCore4Node43notifyLoadedSheetAndAllCriticalSubresourcesEb,b2,__ZN7WebCore13SVGSVGElement22lookupOrCreateYWrapperEPNS_10SVGElementE,b2,vii___ZN7WebCore7Element14didRecalcStyleENS_5Style6ChangeE__wrapper,b2,vii___ZNK7WebCore10SVGElement5titleEv__wrapper,b2,vii___ZN7WebCore4Node20didMoveToNewDocumentEPNS_8DocumentE__wrapper,b2,vii___ZN7WebCore7Element13setScrollLeftEi__wrapper,b2,__ZN7WebCore13SVGSVGElement46lookupOrCreateExternalResourcesRequiredWrapperEPNS_10SVGElementE,b2,vii___ZN7WebCore10SVGElement15accessKeyActionEb__wrapper,b2,vii___ZN7WebCore7Element8setFocusEb__wrapper
  ,b2,__ZN7WebCore13SVGSVGElement28lookupOrCreateViewBoxWrapperEPNS_10SVGElementE,b2,__ZN7WebCore7Element37copyNonAttributePropertiesFromElementERKS0_,b2,vii___ZN7WebCore7Element10setHoveredEb__wrapper,b2,__ZN7WebCore28SVGExternalResourcesRequired21setHaveFiredLoadEventEb,b2,vii___ZNK7WebCore13StyledElement27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE__wrapper,b2,vii___ZN7WebCore4Node19defaultEventHandlerEPNS_5EventE__wrapper,b2,vii___ZN7WebCore18SVGGraphicsElement10toClipPathERNS_4PathE__wrapper,b2,__ZN7WebCore13SVGSVGElement27lookupOrCreateHeightWrapperEPNS_10SVGElementE,b2,vii___ZThn92_NK7WebCore18SVGGraphicsElement22animatedLocalTransformEv__wrapper,b2,vii___ZNK7WebCore4Node9nodeValueEv__wrapper,b2,vii___ZNK7WebCore18SVGGraphicsElement22animatedLocalTransformEv__wrapper,b2,__ZN7WebCore13SVGSVGElement22lookupOrCreateXWrapperEPNS_10SVGElementE,b2,__ZN7WebCore13SVGSVGElement26lookupOrCreateWidthWrapperEPNS_10SVGElementE,b2,b2,b2,b2
  ,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
  ,b2,b2,b2,b2,b2,b2,b2,b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3,ii___ZN7WebCore10SVGElement27haveLoadedRequiredResourcesEv__wrapper,b3,ii___ZNK7WebCore7Element14imageSourceURLEv__wrapper,b3,ii___ZN7WebCore4Node15eventTargetDataEv__wrapper,b3,__ZNK7WebCore10SVGElement14isFilterEffectEv,b3,ii___ZNK7WebCore4Node20eventTargetInterfaceEv__wrapper,b3,ii___ZN7WebCore7Element7onerrorEv__wrapper,b3,__ZNK7WebCore13SVGSVGElement22selfHasRelativeLengthsEv,b3,__ZNK7WebCore13SVGSVGElement34externalResourcesRequiredBaseValueEv,b3,__ZNK7WebCore18SVGGraphicsElement20isSVGGraphicsElementEv,b3,ii___ZN7WebCore7Element11scrollWidthEv__wrapper,b3,__ZNK7WebCore4Node14customPseudoIdEv,b3,__ZNK7WebCore4Node21isMediaControlElementEv,b3,__ZNK7WebCore4Node19isFrameOwnerElementEv,b3,__ZNK7WebCore28SVGExternalResourcesRequired16isParserInsertedEv
  ,b3,ii___ZN7WebCore7Element10scrollLeftEv__wrapper,b3,ii___ZTv0_n20_NK7WebCore18SVGGraphicsElement23farthestViewportElementEv__wrapper,b3,__ZNK7WebCore19SVGAnimatedProperty21isAnimatedListTearOffEv,b3,ii___ZN7WebCore7Element9scrollTopEv__wrapper,b3,ii___ZNK7WebCore7Element26matchesReadOnlyPseudoClassEv__wrapper,b3,ii___ZNK7WebCore7Element27matchesReadWritePseudoClassEv__wrapper,b3,__ZNK7WebCore7Element17isTextFormControlEv,b3,__ZNK7WebCore28SVGExternalResourcesRequired18haveFiredLoadEventEv,b3,ii___ZN7WebCore18SVGGraphicsElement21supplementalTransformEv__wrapper,b3,ii___ZN7WebCore7Element20shouldUseInputMethodEv__wrapper,b3,ii___ZNK7WebCore18SVGGraphicsElement22nearestViewportElementEv__wrapper,b3,__ZNK7WebCore4Node20isInsertionPointNodeEv,b3,__ZNK7WebCore7Element21isDisabledFormControlEv,b3,ii___ZNK7WebCore4Node18maxCharacterOffsetEv__wrapper,b3,__ZNK7WebCore7Element12namespaceURIEv
  ,b3,ii___ZNK7WebCore4Node18offsetInCharactersEv__wrapper,b3,__ZNK7WebCore4Node22scriptExecutionContextEv,b3,__ZNK7WebCore7Element12isOutOfRangeEv,b3,ii___ZNK7WebCore18SVGGraphicsElement23farthestViewportElementEv__wrapper,b3,ii___ZNK7WebCore7Element8nodeTypeEv__wrapper,b3,__ZNK7WebCore4Node15isPluginElementEv,b3,ii___ZNK7WebCore11EventTarget13isMessagePortEv__wrapper,b3,__ZN7WebCore4Node11sheetLoadedEv,b3,__ZNK7WebCore7Element23canContainRangeEndPointEv,b3,__ZNK7WebCore7Element6prefixEv,b3,ii___ZN7WebCore7Element6onloadEv__wrapper,b3,__ZNK7WebCore7Element9isInRangeEv,b3,__ZNK7WebCore7Element20isFormControlElementEv,b3,ii___ZN7WebCore7Element13focusDelegateEv__wrapper,b3,__ZNK7WebCore7Element18isFrameElementBaseEv
  ,b3,ii___ZN7WebCore4Node24willRespondToTouchEventsEv__wrapper,b3,ii___ZN7WebCore10SVGElement17svgLoadEventTimerEv__wrapper,b3,__ZNK7WebCore7Element21isOptionalFormControlEv,b3,ii___ZNK7WebCore7Element25shouldAppearIndeterminateEv__wrapper,b3,ii___ZNK7WebCore4Node17canStartSelectionEv__wrapper,b3,__ZNK7WebCore7Element32isSearchFieldCancelButtonElementEv,b3,__ZNK7WebCore10SVGElement23areAuthorShadowsAllowedEv,b3,ii___ZN7WebCore4Node28willRespondToMouseMoveEventsEv__wrapper,b3,__ZNK7WebCore10SVGElement14isGradientStopEv,b3,__ZNK7WebCore13SVGSVGElement7isValidEv,b3,ii___ZN7WebCore7Element12scrollHeightEv__wrapper,b3,ii___ZNK7WebCore7Element13supportsFocusEv__wrapper,b3,__ZNK7WebCore4Node16nonRendererStyleEv,b3,__ZNK7WebCore10SVGElement15supportsMarkersEv,b3,ii___ZN7WebCore13StyledElement5styleEv__wrapper
  ,b3,__ZNK7WebCore7Element21isRequiredFormControlEv,b3,__ZNK7WebCore7Element22isDefaultButtonForFormEv,b3,ii___ZNK7WebCore7Element22isSpellCheckingEnabledEv__wrapper,b3,__ZNK7WebCore13SVGSVGElement13supportsFocusEv,b3,ii___ZN7WebCore4Node29willRespondToMouseClickEventsEv__wrapper,b3,ii___ZN7WebCore7Element7onfocusEv__wrapper,b3,__ZNK7WebCore10SVGElement28needsPendingResourceHandlingEv,b3,ii___ZN7WebCore4Node14toInputElementEv__wrapper,b3,__ZN7WebCore13StyledElement36additionalPresentationAttributeStyleEv,b3,__ZNK7WebCore10SVGElement13isTextContentEv,b3,ii___ZN7WebCore4Node21ensureEventTargetDataEv__wrapper,b3,__ZNK7WebCore7Element12willValidateEv,b3,__ZNK7WebCore7Element31alwaysCreateUserAgentShadowRootEv,b3,__ZN7WebCore7Element25isValidFormControlElementEv,b3,ii___ZNK7WebCore7Element8tabIndexEv__wrapper
  ,b3,ii___ZN7WebCore4Node29willRespondToMouseWheelEventsEv__wrapper,b3,__ZN7WebCore18SVGGraphicsElement27localAttributeToPropertyMapEv,b3,__ZNK7WebCore10SVGElement13isSMILElementEv,b3,__ZNK7WebCore7Element19isSpinButtonElementEv,b3,ii___ZTv0_n16_NK7WebCore18SVGGraphicsElement22nearestViewportElementEv__wrapper,b3,__ZNK7WebCore10SVGElement22selfHasRelativeLengthsEv,b3,ii___ZNK7WebCore10SVGElement16isMouseFocusableEv__wrapper,b3,ii___ZNK7WebCore7Element14shadowPseudoIdEv__wrapper,b3,__ZNK7WebCore4Node19isCharacterDataNodeEv,b3,__ZNK7WebCore7Element9localNameEv,b3,__ZN7WebCore13SVGSVGElement27localAttributeToPropertyMapEv,b3,ii___ZN7WebCore4Node6toNodeEv__wrapper,b3,ii___ZNK7WebCore7Element11isFocusableEv__wrapper,b3,ii___ZN7WebCore7Element6onblurEv__wrapper,b3,__ZNK7WebCore10SVGElement7isValidEv
  ,b3,__ZNK7WebCore4Node15isMediaControlsEv,b3,ii___ZN7WebCore11EventTarget11toDOMWindowEv__wrapper,b3,__ZNK7WebCore4Node15isAttributeNodeEv,b3,__ZThn176_NK7WebCore13SVGSVGElement34externalResourcesRequiredBaseValueEv,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_iiii = [b4,b4,iiii___ZNK7WebCore10SVGElement11isSupportedEPN3WTF10StringImplES3___wrapper,b4];
  var FUNCTION_TABLE_viii = [b5,b5,viii___ZN7WebCore18SVGGraphicsElement21createElementRendererEN3WTF7PassRefINS_11RenderStyleEEE__wrapper,b5,__ZThn176_N7WebCore13SVGSVGElement37setExternalResourcesRequiredBaseValueERKbb,b5,__ZN7WebCore32SVGAnimatedStaticPropertyTearOffIbE10setBaseValERKbRi,b5,viii___ZN7WebCore10SVGElement32animatedPropertyTypeForAttributeERKNS_13QualifiedNameERN3WTF6VectorINS_20AnimatedPropertyTypeELj0ENS4_15CrashOnOverflowEEE__wrapper,b5,viii___ZN7WebCore18SVGGraphicsElement12getScreenCTMENS_12SVGLocatable19StyleUpdateStrategyE__wrapper,b5,__ZNK7WebCore16SVGTransformable29localCoordinateSpaceTransformENS_12SVGLocatable8CTMScopeE,b5,viii___ZN7WebCore7Element9cloneNodeEb__wrapper,b5,viii___ZN7WebCore7Element9setPrefixERKN3WTF12AtomicStringERi__wrapper,b5,__ZThn92_NK7WebCore13SVGSVGElement29localCoordinateSpaceTransformENS_12SVGLocatable8CTMScopeE,b5,viii___ZN7WebCore4Node12setNodeValueERKN3WTF6StringERi__wrapper,b5,viii___ZN7WebCore18SVGGraphicsElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE__wrapper,b5,viii___ZN7WebCore7Element5focusEbNS_14FocusDirectionE__wrapper,b5,viii___ZTv0_n24_N7WebCore18SVGGraphicsElement7getBBoxENS_12SVGLocatable19StyleUpdateStrategyE__wrapper,b5,__ZNK7WebCore18SVGGraphicsElement29localCoordinateSpaceTransformENS_12SVGLocatable8CTMScopeE
  ,b5,__ZNK7WebCore12SVGLocatable29localCoordinateSpaceTransformENS0_8CTMScopeE,b5,viii___ZTv0_n32_N7WebCore18SVGGraphicsElement12getScreenCTMENS_12SVGLocatable19StyleUpdateStrategyE__wrapper,b5,__ZThn92_NK7WebCore18SVGGraphicsElement29localCoordinateSpaceTransformENS_12SVGLocatable8CTMScopeE,b5,viii___ZN7WebCore18SVGGraphicsElement6getCTMENS_12SVGLocatable19StyleUpdateStrategyE__wrapper,b5,viii___ZN7WebCore18SVGGraphicsElement7getBBoxENS_12SVGLocatable19StyleUpdateStrategyE__wrapper,b5,viii___ZTv0_n28_N7WebCore18SVGGraphicsElement6getCTMENS_12SVGLocatable19StyleUpdateStrategyE__wrapper,b5,__ZNK7WebCore13SVGSVGElement29localCoordinateSpaceTransformENS_12SVGLocatable8CTMScopeE,b5,__ZN7WebCore13SVGSVGElement21createElementRendererEN3WTF7PassRefINS_11RenderStyleEEE,b5,viii___ZN7WebCore7Element9setActiveEbb__wrapper,b5,__ZN7WebCore13SVGSVGElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE,b5,__ZN7WebCore13SVGSVGElement37setExternalResourcesRequiredBaseValueERKbb,b5,b5,b5,b5,b5,b5,b5,b5
  ,b5,b5,b5,b5,b5];
  var FUNCTION_TABLE_v = [b6,b6,v___ZN7WebCore7Element17dispatchBlurEventEN3WTF10PassRefPtrIS0_EE__wrapper,b6,v___ZN7WebCore7Element40cloneElementWithoutAttributesAndChildrenEv__wrapper,b6,v___ZN7WebCore10SVGElement22customStyleForRendererEv__wrapper,b6,v___ZN7WebCore7Element18dispatchFocusEventEN3WTF10PassRefPtrIS0_EENS_14FocusDirectionE__wrapper,b6,v____cxa_pure_virtual__wrapper,b6,b6,b6,b6,b6];
  var FUNCTION_TABLE_iii = [b7,b7,iii___ZN7WebCore10SVGElement13computedStyleENS_8PseudoIdE__wrapper,b7,__ZN7WebCore13SVGSVGElement12insertedIntoERNS_13ContainerNodeE,b7,iii___ZNK7WebCore7Element16childTypeAllowedENS_4Node8NodeTypeE__wrapper,b7,iii___ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE__wrapper,b7,iii___ZNK7WebCore10SVGElement23isPresentationAttributeERKNS_13QualifiedNameE__wrapper,b7,iii___ZNK7WebCore10SVGElement19isKeyboardFocusableEPNS_13KeyboardEventE__wrapper,b7,__ZN7WebCore13SVGSVGElement16rendererIsNeededERKNS_11RenderStyleE,b7,iii___ZNK7WebCore10SVGElement22shouldMoveToFlowThreadERKNS_11RenderStyleE__wrapper,b7,iii___ZN7WebCore10SVGElement16rendererIsNeededERKNS_11RenderStyleE__wrapper,b7,iii___ZN7WebCore10SVGElement15willRecalcStyleENS_5Style6ChangeE__wrapper,b7,iii___ZNK7WebCore10SVGElement25childShouldCreateRendererERKNS_4NodeE__wrapper,b7,__ZNK7WebCore7Element22isHTMLContentAttributeERKNS_9AttributeE,b7,iii___ZN7WebCore10SVGElement12insertedIntoERNS_13ContainerNodeE__wrapper,b7,__ZNK7WebCore7Element14isURLAttributeERKNS_9AttributeE
  ,b7,b7,b7];
  var FUNCTION_TABLE_viiii = [b8,b8,viiii___ZN7WebCore10SVGElement36collectStyleForPresentationAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringERNS_22MutableStylePropertiesE__wrapper,b8,viiii___ZN7WebCore10SVGElement16attributeChangedERKNS_13QualifiedNameERKN3WTF12AtomicStringENS_7Element27AttributeModificationReasonE__wrapper,b8,b8,b8];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiiii: dynCall_iiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_iiii: dynCall_iiii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiiii": invoke_iiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_iiii": invoke_iiii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_llvm_trap": _llvm_trap, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore8SVGNames14zoomAndPanAttrE": __ZN7WebCore8SVGNames14zoomAndPanAttrE, "__ZN7WebCore8SVGNames7viewTagE": __ZN7WebCore8SVGNames7viewTagE, "__ZN7WebCore8SVGNames20contentStyleTypeAttrE": __ZN7WebCore8SVGNames20contentStyleTypeAttrE, "__ZN7WebCore8SVGNames10heightAttrE": __ZN7WebCore8SVGNames10heightAttrE, "__ZN7WebCore9HTMLNames12onresizeAttrE": __ZN7WebCore9HTMLNames12onresizeAttrE, "__ZN7WebCore8SVGNames5yAttrE": __ZN7WebCore8SVGNames5yAttrE, "__ZN7WebCore8SVGNames23preserveAspectRatioAttrE": __ZN7WebCore8SVGNames23preserveAspectRatioAttrE, "__ZN7WebCore8SVGNames10onzoomAttrE": __ZN7WebCore8SVGNames10onzoomAttrE, "__ZN7WebCore9HTMLNames11onabortAttrE": __ZN7WebCore9HTMLNames11onabortAttrE, "__ZN3WTF8nullAtomE": __ZN3WTF8nullAtomE, "__ZN7WebCore9HTMLNames12onscrollAttrE": __ZN7WebCore9HTMLNames12onscrollAttrE, "__ZN7WebCore8SVGNames11viewBoxAttrE": __ZN7WebCore8SVGNames11viewBoxAttrE, "__ZN7WebCore8SVGNames21contentScriptTypeAttrE": __ZN7WebCore8SVGNames21contentScriptTypeAttrE, "__ZTVN7WebCore17StaticElementListE": __ZTVN7WebCore17StaticElementListE, "__ZN7WebCore9HTMLNames11onerrorAttrE": __ZN7WebCore9HTMLNames11onerrorAttrE, "__ZN7WebCore9HTMLNames12onunloadAttrE": __ZN7WebCore9HTMLNames12onunloadAttrE, "__ZN7WebCore8SVGNames29externalResourcesRequiredAttrE": __ZN7WebCore8SVGNames29externalResourcesRequiredAttrE, "__ZN7WebCore8SVGNames9widthAttrE": __ZN7WebCore8SVGNames9widthAttrE, "__ZN7WebCore8SVGNames6svgTagE": __ZN7WebCore8SVGNames6svgTagE, "__ZN7WebCore8SVGNames5xAttrE": __ZN7WebCore8SVGNames5xAttrE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_viiii = Module["dynCall_viiii"] = asm["dynCall_viiii"];
// Warning: printing of i64 values may be slightly rounded! No deep i64 math used, so precise i64 code not included
var i64Math = null;
// === Auto-generated postamble setup entry stuff ===
function run(args) {
  initRuntime();
}
Module['run'] = run;
// {{PRE_RUN_ADDITIONS}}
run();
// {{POST_RUN_ADDITIONS}}
  // {{MODULE_ADDITIONS}}
  return Module;
});
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore19SVGAnimatedProperty21lookupOrCreateWrapperINS_13SVGSVGElementENS_26SVGAnimatedPropertyTearOffINS_9FloatRectEEES4_EEN3WTF10PassRefPtrIT0_EEPT_PKNS_15SVGPropertyInfoERT1_","_strlen","__ZN7WebCore13SVGSVGElement18synchronizeViewBoxEPNS_10SVGElementE","__ZN7WebCore13SVGSVGElement15createSVGNumberEv","__ZN7WebCore7Element29privateBrowsingStateDidChangeEv","__ZN7WebCore32SVGAnimatedStaticPropertyTearOffIbED1Ev","__ZN7WebCore13SVGSVGElement12insertedIntoERNS_13ContainerNodeE","__ZTv0_n36_NK7WebCore13SVGSVGElement29localCoordinateSpaceTransformENS_12SVGLocatable8CTMScopeE","__ZN7WebCore13SVGSVGElement19svgAttributeChangedERKNS_13QualifiedNameE","__ZThn176_N7WebCore13SVGSVGElement37setExternalResourcesRequiredBaseValueERKbb","__ZN7WebCore13SVGSVGElement22updateCurrentTranslateEv","__ZNK7WebCore7Element17isTextFormControlEv","__ZNK7WebCore10SVGElement23areAuthorShadowsAllowedEv","__ZNK7WebCore7Element9localNameEv","__ZN7WebCore26SVGAnimatedPropertyTearOffINS_9FloatRectEED0Ev","__ZNK7WebCore13SVGSVGElement22selfHasRelativeLengthsEv","__ZN7WebCore13SVGSVGElement13suspendRedrawEj","_memcpy","__ZNK7WebCore13SVGSVGElement34externalResourcesRequiredBaseValueEv","__ZNK7WebCore13SVGSVGElement12currentScaleEv","__ZNK7WebCore13SVGSVGElement19getIntersectionListERKNS_9FloatRectEPNS_10SVGElementE","__ZN7WebCore13SVGSVGElement30documentDidResumeFromPageCacheEv","__ZNK7WebCore4Node14customPseudoIdEv","__ZN7WebCore13SVGSVGElement20setContentScriptTypeERKN3WTF12AtomicStringE","__ZNK7WebCore4Node21isMediaControlElementEv","__ZNK7WebCore28SVGExternalResourcesRequired18haveFiredLoadEventEv","__ZThn176_N7WebCore13SVGSVGElementD1Ev","__ZNK7WebCore28SVGExternalResourcesRequired16isParserInsertedEv","__ZN7WebCore7Element22visibilityStateChangedEv","__ZNK7WebCore19SVGAnimatedProperty21isAnimatedListTearOffEv","__ZN7WebCore13SVGSVGElementD1Ev","__ZN7WebCore18SVGGraphicsElement27synchronizeRequiredFeaturesEv","__ZN7WebCore13SVGSVGElement19setContentStyleTypeERKN3WTF12AtomicStringE","__ZN7WebCore26SVGAnimatedPropertyTearOffINS_9SVGLengthEED1Ev","__ZN7WebCore13SVGSVGElement14getElementByIdERKN3WTF12AtomicStringE","__ZN7WebCore13SVGSVGElement11forceRedrawEv","__ZN7WebCore7Element25didAddUserAgentShadowRootEPNS_10ShadowRootE","__ZN7WebCore13SVGSVGElement16setupInitialViewERKN3WTF6StringEPNS_7ElementE","__ZN7WebCore4Node24startLoadingDynamicSheetEv","__ZN7WebCore13SVGSVGElement19setCurrentTranslateERKNS_10FloatPointE","__ZN7WebCore13SVGSVGElement20didMoveToNewDocumentEPNS_8DocumentE","__ZNK7WebCore13SVGSVGElement6heightEv","__ZNK7WebCore7Element6prefixEv","__ZNK7WebCore7Element21isDisabledFormControlEv","__ZThn92_N7WebCore13SVGSVGElementD1Ev","__ZN7WebCore13SVGSVGElement13createSVGRectEv","__ZNK7WebCore7Element21isRequiredFormControlEv","__ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISF_S9_EERKS2_S5_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S6_S8_S9_SF_SB_EEEEOT0_OT1_","__ZNK7WebCore13SVGSVGElement16contentStyleTypeEv","__ZNK7WebCore7Element12namespaceURIEv","__ZNK7WebCore13SVGSVGElement17checkIntersectionEPKNS_10SVGElementERKNS_9FloatRectE","__ZN7WebCore13SVGSVGElement17widthPropertyInfoEv","__ZN7WebCore32SVGAnimatedStaticPropertyTearOffIbED0Ev","__ZN7WebCore7Element20buildPendingResourceEv","__ZN7WebCore13SVGSVGElement17unpauseAnimationsEv","__ZNK7WebCore16SVGTransformable29localCoordinateSpaceTransformENS_12SVGLocatable8CTMScopeE","__ZNK7WebCore10SVGElement14isFilterEffectEv","__ZNK7WebCore13SVGSVGElement34heightAttributeEstablishesViewportEv","__ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E16lookupForWritingINS_22IdentityHashTranslatorIS9_EES2_EENSt3__14pairIPS6_bEERKT0_","__ZNK7WebCore18SVGGraphicsElement29localCoordinateSpaceTransformENS_12SVGLocatable8CTMScopeE","__ZN7WebCore13SVGSVGElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE","__ZN7WebCore13SVGSVGElement31documentWillSuspendForPageCacheEv","__ZNK7WebCore13SVGSVGElement16animationsPausedEv","__ZN7WebCore13SVGSVGElement16rendererIsNeededERKNS_11RenderStyleE","__ZNK7WebCore13SVGSVGElement14getCurrentTimeEv","__ZNK7WebCore4Node22scriptExecutionContextEv","__ZNK7WebCore7Element12isOutOfRangeEv","__ZNK7WebCore4Node15isPluginElementEv","__ZNK7WebCore13SVGSVGElement1yEv","__ZNK7WebCore13SVGSVGElement17contentScriptTypeEv","__ZThn92_NK7WebCore13SVGSVGElement29localCoordinateSpaceTransformENS_12SVGLocatable8CTMScopeE","__ZN7WebCore13SVGSVGElement15createSVGLengthEv","__ZN7WebCore4Node11sheetLoadedEv","__ZN7WebCore13SVGSVGElement18createSVGTransformEv","__ZN7WebCore13SVGSVGElement11currentViewEv","__ZN7WebCore26SVGAnimatedPropertyTearOffINS_9FloatRectEED1Ev","__ZN7WebCore13SVGSVGElement28createSVGTransformFromMatrixERKNS_9SVGMatrixE","__ZTv0_n12_N7WebCore13SVGSVGElementD0Ev","__ZNK7WebCore4Node20isInsertionPointNodeEv","__ZNK7WebCore13SVGSVGElement24screenPixelToMillimeterYEv","__ZN7WebCore13SVGSVGElement15setCurrentScaleEf","__ZNK7WebCore7Element9isInRangeEv","__ZNK7WebCore7Element20isFormControlElementEv","__ZN7WebCore7Element37copyNonAttributePropertiesFromElementERKS0_","__ZN7WebCore13SVGSVGElement36synchronizeExternalResourcesRequiredEv","__ZNK7WebCore7Element18isFrameElementBaseEv","__ZN7WebCore13SVGSVGElement18heightPropertyInfoEv","__ZN7WebCore13SVGSVGElementD0Ev","_memset","__ZN7WebCore4Node26didNotifySubtreeInsertionsEPNS_13ContainerNodeE","__ZNK7WebCore13SVGSVGElement15intrinsicHeightENS0_15ConsiderCSSModeE","__ZN7WebCore13SVGSVGElement17synchronizeHeightEv","__ZNK7WebCore13SVGSVGElement7viewBoxEv","__ZThn92_N7WebCore13SVGSVGElementD0Ev","__ZN7WebCore4Node43notifyLoadedSheetAndAllCriticalSubresourcesEb","__ZN7WebCore13SVGSVGElement16synchronizeWidthEv","__ZNK7WebCore7Element21isOptionalFormControlEv","__ZNK7WebCore13SVGSVGElement7isValidEv","__ZN7WebCore13SVGSVGElement14createSVGAngleEv","__ZN7WebCore13SVGSVGElement12synchronizeXEPNS_10SVGElementE","__ZN7WebCore13SVGSVGElementC1ERKNS_13QualifiedNameERNS_8DocumentE","__ZN7WebCore12SVGLocatableD1Ev","__ZN7WebCore13SVGSVGElement22lookupOrCreateYWrapperEPNS_10SVGElementE","__ZNK7WebCore7Element32isSearchFieldCancelButtonElementEv","__ZNK7WebCore13SVGSVGElement19preserveAspectRatioEv","__ZNK7WebCore13SVGSVGElement22pixelUnitToMillimeterXEv","__ZNK7WebCore10SVGElement14isGradientStopEv","__ZN7WebCore13SVGSVGElement31preserveAspectRatioPropertyInfoEv","__ZN7WebCore13SVGSVGElement36synchronizeExternalResourcesRequiredEPNS_10SVGElementE","__ZNK7WebCore4Node16nonRendererStyleEv","__ZNK7WebCore10SVGElement15supportsMarkersEv","__ZN7WebCore13SVGSVGElement15unsuspendRedrawEj","__ZN7WebCore13SVGSVGElement15pauseAnimationsEv","__ZN7WebCore13SVGSVGElement14createSVGPointEv","__ZNK7WebCore12SVGLocatable29localCoordinateSpaceTransformENS0_8CTMScopeE","__ZNK7WebCore13SVGSVGElement1xEv","__ZN7WebCore13SVGSVGElement19viewBoxPropertyInfoEv","__ZN7WebCore13SVGSVGElement17synchronizeHeightEPNS_10SVGElementE","__ZNK7WebCore7Element6targetEv","__ZNK7WebCore13SVGSVGElement16getEnclosureListERKNS_9FloatRectEPNS_10SVGElementE","__ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS9_EES2_EEPS6_RKT0_","__ZN7WebCore26SVGAnimatedPropertyTearOffINS_22SVGPreserveAspectRatioEED1Ev","__ZN7WebCore7Element30willStopBeingFullscreenElementEv","__ZNK7WebCore7Element22isDefaultButtonForFormEv","__ZN7WebCore19SVGAnimatedProperty21lookupOrCreateWrapperINS_13SVGSVGElementENS_32SVGAnimatedStaticPropertyTearOffIbEEbEEN3WTF10PassRefPtrIT0_EEPT_PKNS_15SVGPropertyInfoERT1_","__ZNK7WebCore13SVGSVGElement14intrinsicWidthENS0_15ConsiderCSSModeE","__ZN7WebCore13SVGSVGElement13yPropertyInfoEv","__ZNK7WebCore7Element22isHTMLContentAttributeERKNS_9AttributeE","__ZN7WebCore13SVGSVGElement18unsuspendRedrawAllEv","__ZN7WebCore19SVGAnimatedProperty21lookupOrCreateWrapperINS_13SVGSVGElementENS_26SVGAnimatedPropertyTearOffINS_9SVGLengthEEES4_EEN3WTF10PassRefPtrIT0_EEPT_PKNS_15SVGPropertyInfoERT1_","__ZNK7WebCore7Element31alwaysCreateUserAgentShadowRootEv","__ZNK7WebCore10SVGElement28needsPendingResourceHandlingEv","__ZN7WebCore13SVGSVGElement18synchronizeViewBoxEv","__ZThn92_NK7WebCore18SVGGraphicsElement29localCoordinateSpaceTransformENS_12SVGLocatable8CTMScopeE","__ZN7WebCore13SVGSVGElement13xPropertyInfoEv","__ZN7WebCore13SVGSVGElement46lookupOrCreateExternalResourcesRequiredWrapperEPNS_10SVGElementE","__ZN7WebCore17SVGPropertyTraitsINS_9FloatRectEE8toStringERKS1_","__ZN7WebCore13SVGSVGElement15createSVGMatrixEv","__ZNK7WebCore18SVGGraphicsElement20isSVGGraphicsElementEv","__ZN7WebCore13StyledElement36additionalPresentationAttributeStyleEv","__ZNK7WebCore13SVGSVGElement13supportsFocusEv","__ZN7WebCore13SVGSVGElement11removedFromERNS_13ContainerNodeE","__ZN7WebCore12SVGLocatableD0Ev","__ZNK7WebCore10SVGElement13isTextContentEv","__ZN7WebCore13SVGSVGElement28lookupOrCreateViewBoxWrapperEPNS_10SVGElementE","__ZN7WebCore7Element20mediaVolumeDidChangeEv","__ZN7WebCore13SVGSVGElement21createElementRendererEN3WTF7PassRefINS_11RenderStyleEEE","__ZN7WebCore13SVGSVGElement40lookupOrCreatePreserveAspectRatioWrapperEPNS_10SVGElementE","__ZNK7WebCore7Element23canContainRangeEndPointEv","__ZNK7WebCore13SVGSVGElement22viewBoxToViewTransformEff","__ZN7WebCore13SVGSVGElement16synchronizeWidthEPNS_10SVGElementE","__ZN7WebCore7Element31documentWillSuspendForPageCacheEv","__ZN7WebCore7Element25isValidFormControlElementEv","__ZTv0_n12_N7WebCore13SVGSVGElementD1Ev","__ZN7WebCore26SVGAnimatedPropertyTearOffINS_22SVGPreserveAspectRatioEED0Ev","__ZN7WebCore18SVGGraphicsElement27localAttributeToPropertyMapEv","__ZNK7WebCore13SVGSVGElement19currentViewportSizeEv","__ZN7WebCore13SVGSVGElement30synchronizePreserveAspectRatioEv","__ZN7WebCore13SVGSVGElement11deselectAllEv","__ZNK7WebCore13SVGSVGElement5widthEv","__ZNK7WebCore10SVGElement13isSMILElementEv","__ZNK7WebCore13SVGSVGElement33widthAttributeEstablishesViewportEv","__ZNK7WebCore13SVGSVGElement14checkEnclosureEPKNS_10SVGElementERKNS_9FloatRectE","__ZN7WebCore13SVGSVGElementD2Ev","__ZNK7WebCore13SVGSVGElement22pixelUnitToMillimeterYEv","__ZN7WebCore7Element26didBecomeFullscreenElementEv","__ZN7WebCore13SVGSVGElement37externalResourcesRequiredPropertyInfoEv","__ZN7WebCore28SVGExternalResourcesRequired21setHaveFiredLoadEventEb","__ZNK7WebCore7Element19isSpinButtonElementEv","__ZN7WebCore19SVGAnimatedProperty21lookupOrCreateWrapperINS_13SVGSVGElementENS_26SVGAnimatedPropertyTearOffINS_22SVGPreserveAspectRatioEEES4_EEN3WTF10PassRefPtrIT0_EEPT_PKNS_15SVGPropertyInfoERT1_","__ZN7WebCore13SVGSVGElement6createERKNS_13QualifiedNameERNS_8DocumentE","__ZN7WebCore13SVGSVGElement12synchronizeXEv","__ZNK7WebCore10SVGElement22selfHasRelativeLengthsEv","__ZN7WebCore18SVGGraphicsElement25synchronizeSystemLanguageEv","__ZNK7WebCore4Node19isCharacterDataNodeEv","__ZNK7WebCore13SVGSVGElement24screenPixelToMillimeterXEv","__ZNK7WebCore13SVGSVGElement29localCoordinateSpaceTransformENS_12SVGLocatable8CTMScopeE","__ZNK7WebCore4Node19isFrameOwnerElementEv","__ZN7WebCore13SVGSVGElement27lookupOrCreateHeightWrapperEPNS_10SVGElementE","__ZN7WebCore13SVGSVGElement12synchronizeYEPNS_10SVGElementE","__ZN7WebCore13SVGSVGElement14setCurrentTimeEf","__ZN7WebCore13SVGSVGElement27localAttributeToPropertyMapEv","__ZThn176_NK7WebCore13SVGSVGElement34externalResourcesRequiredBaseValueEv","__ZNK7WebCore7Element12willValidateEv","__ZNK7WebCore13SVGSVGElement34collectIntersectionOrEnclosureListERKNS_9FloatRectEPNS_10SVGElementENS0_30CollectIntersectionOrEnclosureE","__ZNK7WebCore7Element14isURLAttributeERKNS_9AttributeE","__ZN7WebCore13SVGSVGElement22lookupOrCreateXWrapperEPNS_10SVGElementE","__ZN7WebCore26SVGAnimatedPropertyTearOffINS_9SVGLengthEED0Ev","__ZNK7WebCore13SVGSVGElement18currentViewBoxRectEv","__ZN7WebCore18SVGGraphicsElement29synchronizeRequiredExtensionsEv","__ZThn176_N7WebCore13SVGSVGElementD0Ev","__ZN7WebCore13SVGSVGElement21inheritViewAttributesEPNS_14SVGViewElementE","__ZNK7WebCore10SVGElement7isValidEv","__ZN7WebCore32SVGAnimatedStaticPropertyTearOffIbE10setBaseValERKbRi","__ZN7WebCore13SVGSVGElement30synchronizePreserveAspectRatioEPNS_10SVGElementE","__ZNK7WebCore4Node15isMediaControlsEv","__ZN7WebCore13SVGSVGElement12synchronizeYEv","__ZN7WebCore13SVGSVGElement26lookupOrCreateWidthWrapperEPNS_10SVGElementE","__ZNK7WebCore4Node15isAttributeNodeEv","__ZN7WebCore13SVGSVGElement22attributeToPropertyMapEv","__ZN7WebCore7Element30documentDidResumeFromPageCacheEv","__ZN7WebCore13SVGSVGElement37setExternalResourcesRequiredBaseValueERKbb","__ZNK7WebCore13SVGSVGElement8viewportEv"]
