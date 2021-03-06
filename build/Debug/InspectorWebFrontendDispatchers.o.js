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
H_BASE = parentModule["_malloc"](3080 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 3080;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* memory initializer */ allocate([78,101,116,119,111,114,107,46,119,101,98,83,111,99,107,101,116,72,97,110,100,115,104,97,107,101,82,101,115,112,111,110,115,101,82,101,99,101,105,118,101,100,0,0,0,0,0,0,78,101,116,119,111,114,107,46,119,101,98,83,111,99,107,101,116,87,105,108,108,83,101,110,100,72,97,110,100,115,104,97,107,101,82,101,113,117,101,115,116,0,0,0,0,0,0,0,114,101,115,111,117,114,99,101,0,0,0,0,0,0,0,0,78,101,116,119,111,114,107,46,114,101,113,117,101,115,116,83,101,114,118,101,100,70,114,111,109,77,101,109,111,114,121,67,97,99,104,101,0,0,0,0,99,97,110,99,101,108,101,100,0,0,0,0,0,0,0,0,101,114,114,111,114,84,101,120,116,0,0,0,0,0,0,0,78,101,116,119,111,114,107,46,108,111,97,100,105,110,103,70,97,105,108,101,100,0,0,0,115,111,117,114,99,101,77,97,112,85,82,76,0,0,0,0,78,101,116,119,111,114,107,46,108,111,97,100,105,110,103,70,105,110,105,115,104,101,100,0,101,110,99,111,100,101,100,68,97,116,97,76,101,110,103,116,104,0,0,0,0,0,0,0,67,83,83,46,115,116,121,108,101,83,104,101,101,116,67,104,97,110,103,101,100,0,0,0,100,97,116,97,76,101,110,103,116,104,0,0,0,0,0,0,78,101,116,119,111,114,107,46,100,97,116,97,82,101,99,101,105,118,101,100,0,0,0,0,114,101,115,112,111,110,115,101,0,0,0,0,0,0,0,0,78,101,116,119,111,114,107,46,114,101,115,112,111,110,115,101,82,101,99,101,105,118,101,100,0,0,0,0,0,0,0,0,78,101,116,119,111,114,107,46,114,101,113,117,101,115,116,83,101,114,118,101,100,70,114,111,109,67,97,99,104,101,0,0,116,121,112,101,0,0,0,0,114,101,100,105,114,101,99,116,82,101,115,112,111,110,115,101,0,0,0,0,0,0,0,0,105,110,105,116,105,97,116,111,114,0,0,0,0,0,0,0,116,105,109,101,115,116,97,109,112,0,0,0,0,0,0,0,114,101,113,117,101,115,116,0,67,83,83,46,109,101,100,105,97,81,117,101,114,121,82,101,115,117,108,116,67,104,97,110,103,101,100,0,0,0,0,0,100,111,99,117,109,101,110,116,85,82,76,0,0,0,0,0,108,111,97,100,101,114,73,100,0,0,0,0,0,0,0,0,114,101,113,117,101,115,116,73,100,0,0,0,0,0,0,0,78,101,116,119,111,114,107,46,114,101,113,117,101,115,116,87,105,108,108,66,101,83,101,110,116,0,0,0,0,0,0,0,76,97,121,101,114,84,114,101,101,46,108,97,121,101,114,84,114,101,101,68,105,100,67,104,97,110,103,101,0,0,0,0,116,111,116,97,108,0,0,0,100,111,110,101,0,0,0,0,72,101,97,112,80,114,111,102,105,108,101,114,46,114,101,112,111,114,116,72,101,97,112,83,110,97,112,115,104,111,116,80,114,111,103,114,101,115,115,0,72,101,97,112,80,114,111,102,105,108,101,114,46,114,101,115,101,116,80,114,111,102,105,108,101,115,0,0,0,0,0,0,72,101,97,112,80,114,111,102,105,108,101,114,46,102,105,110,105,115,104,72,101,97,112,83,110,97,112,115,104,111,116,0,105,115,78,111,119,79,110,108,105,110,101,0,0,0,0,0,99,104,117,110,107,0,0,0,117,105,100,0,0,0,0,0,72,101,97,112,80,114,111,102,105,108,101,114,46,97,100,100,72,101,97,112,83,110,97,112,115,104,111,116,67,104,117,110,107,0,0,0,0,0,0,0,104,101,97,100,101,114,0,0,72,101,97,112,80,114,111,102,105,108,101,114,46,97,100,100,80,114,111,102,105,108,101,72,101,97,100,101,114,0,0,0,100,97,116,97,98,97,115,101,0,0,0,0,0,0,0,0,68,97,116,97,98,97,115,101,46,97,100,100,68,97,116,97,98,97,115,101,0,0,0,0,111,108,100,86,97,108,117,101,0,0,0,0,0,0,0,0,68,79,77,83,116,111,114,97,103,101,46,100,111,109,83,116,111,114,97,103,101,73,116,101,109,85,112,100,97,116,101,100,0,0,0,0,0,0,0,0,110,101,119,86,97,108,117,101,0,0,0,0,0,0,0,0,65,112,112,108,105,99,97,116,105,111,110,67,97,99,104,101,46,110,101,116,119,111,114,107,83,116,97,116,101,85,112,100,97,116,101,100,0,0,0,0,68,79,77,83,116,111,114,97,103,101,46,100,111,109,83,116,111,114,97,103,101,73,116,101,109,65,100,100,101,100,0,0,107,101,121,0,0,0,0,0,68,79,77,83,116,111,114,97,103,101,46,100,111,109,83,116,111,114,97,103,101,73,116,101,109,82,101,109,111,118,101,100,0,0,0,0,0,0,0,0,115,116,111,114,97,103,101,73,100,0,0,0,0,0,0,0,68,79,77,83,116,111,114,97,103,101,46,100,111,109,83,116,111,114,97,103,101,73,116,101,109,115,67,108,101,97,114,101,100,0,0,0,0,0,0,0,114,111,111,116,73,100,0,0,68,79,77,46,115,104,97,100,111,119,82,111,111,116,80,111,112,112,101,100,0,0,0,0,114,111,111,116,0,0,0,0,104,111,115,116,73,100,0,0,68,79,77,46,115,104,97,100,111,119,82,111,111,116,80,117,115,104,101,100,0,0,0,0,112,97,114,97,109,115,0,0,68,79,77,46,99,104,105,108,100,78,111,100,101,82,101,109,111,118,101,100,0,0,0,0,110,111,100,101,0,0,0,0,112,114,101,118,105,111,117,115,78,111,100,101,73,100,0,0,112,97,114,101,110,116,78,111,100,101,73,100,0,0,0,0,68,79,77,46,99,104,105,108,100,78,111,100,101,73,110,115,101,114,116,101,100,0,0,0,99,104,105,108,100,78,111,100,101,67,111,117,110,116,0,0,68,79,77,46,99,104,105,108,100,78,111,100,101,67,111,117,110,116,85,112,100,97,116,101,100,0,0,0,0,0,0,0,99,104,97,114,97,99,116,101,114,68,97,116,97,0,0,0,68,79,77,46,99,104,97,114,97,99,116,101,114,68,97,116,97,77,111,100,105,102,105,101,100,0,0,0,0,0,0,0,110,111,100,101,73,100,115,0,115,116,97,116,117,115,0,0,68,79,77,46,105,110,108,105,110,101,83,116,121,108,101,73,110,118,97,108,105,100,97,116,101,100,0,0,0,0,0,0,68,79,77,46,97,116,116,114,105,98,117,116,101,82,101,109,111,118,101,100,0,0,0,0,118,97,108,117,101,0,0,0,110,97,109,101,0,0,0,0,110,111,100,101,73,100,0,0,68,79,77,46,97,116,116,114,105,98,117,116,101,77,111,100,105,102,105,101,100,0,0,0,110,111,100,101,115,0,0,0,112,97,114,101,110,116,73,100,0,0,0,0,0,0,0,0,68,79,77,46,115,101,116,67,104,105,108,100,78,111,100,101,115,0,0,0,0,0,0,0,68,79,77,46,100,111,99,117,109,101,110,116,85,112,100,97,116,101,100,0,0,0,0,0,109,97,110,105,102,101,115,116,85,82,76,0,0,0,0,0,67,111,110,115,111,108,101,46,109,101,115,115,97,103,101,115,67,108,101,97,114,101,100,0,99,111,117,110,116,0,0,0,67,111,110,115,111,108,101,46,109,101,115,115,97,103,101,82,101,112,101,97,116,67,111,117,110,116,85,112,100,97,116,101,100,0,0,0,0,0,0,0,109,101,115,115,97,103,101,0,67,111,110,115,111,108,101,46,109,101,115,115,97,103,101,65,100,100,101,100,0,0,0,0,116,114,97,99,101,76,111,103,73,100,0,0,0,0,0,0,67,97,110,118,97,115,46,116,114,97,99,101,76,111,103,115,82,101,109,111,118,101,100,0,67,97,110,118,97,115,46,99,111,110,116,101,120,116,67,114,101,97,116,101,100,0,0,0,67,83,83,46,117,110,114,101,103,105,115,116,101,114,101,100,78,97,109,101,100,70,108,111,119,67,111,110,116,101,110,116,69,108,101,109,101,110,116,0,110,101,120,116,67,111,110,116,101,110,116,78,111,100,101,73,100,0,0,0,0,0,0,0,102,114,97,109,101,73,100,0,99,111,110,116,101,110,116,78,111,100,101,73,100,0,0,0,67,83,83,46,114,101,103,105,115,116,101,114,101,100,78,97,109,101,100,70,108,111,119,67,111,110,116,101,110,116,69,108,101,109,101,110,116,0,0,0,67,83,83,46,114,101,103,105,111,110,79,118,101,114,115,101,116,67,104,97,110,103,101,100,0,0,0,0,0,0,0,0,67,83,83,46,114,101,103,105,111,110,76,97,121,111,117,116,85,112,100,97,116,101,100,0,102,108,111,119,78,97,109,101,0,0,0,0,0,0,0,0,100,111,99,117,109,101,110,116,78,111,100,101,73,100,0,0,87,111,114,107,101,114,46,100,105,115,99,111,110,110,101,99,116,101,100,70,114,111,109,87,111,114,107,101,114,0,0,0,87,111,114,107,101,114,46,100,105,115,112,97,116,99,104,77,101,115,115,97,103,101,70,114,111,109,87,111,114,107,101,114,0,0,0,0,0,0,0,0,87,111,114,107,101,114,46,119,111,114,107,101,114,84,101,114,109,105,110,97,116,101,100,0,105,110,115,112,101,99,116,111,114,67,111,110,110,101,99,116,101,100,0,0,0,0,0,0,119,111,114,107,101,114,73,100,0,0,0,0,0,0,0,0,87,111,114,107,101,114,46,119,111,114,107,101,114,67,114,101,97,116,101,100,0,0,0,0,67,83,83,46,110,97,109,101,100,70,108,111,119,82,101,109,111,118,101,100,0,0,0,0,114,101,99,111,114,100,0,0,84,105,109,101,108,105,110,101,46,101,118,101,110,116,82,101,99,111,114,100,101,100,0,0,80,114,111,102,105,108,101,114,46,114,101,112,111,114,116,72,101,97,112,83,110,97,112,115,104,111,116,80,114,111,103,114,101,115,115,0,0,0,0,0,80,114,111,102,105,108,101,114,46,114,101,115,101,116,80,114,111,102,105,108,101,115,0,0,105,115,80,114,111,102,105,108,105,110,103,0,0,0,0,0,80,114,111,102,105,108,101,114,46,115,101,116,82,101,99,111,114,100,105,110,103,80,114,111,102,105,108,101,0,0,0,0,80,114,111,102,105,108,101,114,46,102,105,110,105,115,104,72,101,97,112,83,110,97,112,115,104,111,116,0,0,0,0,0,80,114,111,102,105,108,101,114,46,97,100,100,72,101,97,112,83,110,97,112,115,104,111,116,67,104,117,110,107,0,0,0,80,114,111,102,105,108,101,114,46,97,100,100,80,114,111,102,105,108,101,72,101,97,100,101,114,0,0,0,0,0,0,0,105,115,69,110,97,98,108,101,100,0,0,0,0,0,0,0,110,97,109,101,100,70,108,111,119,0,0,0,0,0,0,0,80,97,103,101,46,115,99,114,105,112,116,115,69,110,97,98,108,101,100,0,0,0,0,0,80,97,103,101,46,106,97,118,97,115,99,114,105,112,116,68,105,97,108,111,103,67,108,111,115,101,100,0,0,0,0,0,80,97,103,101,46,106,97,118,97,115,99,114,105,112,116,68,105,97,108,111,103,79,112,101,110,105,110,103,0,0,0,0,80,97,103,101,46,102,114,97,109,101,67,108,101,97,114,101,100,83,99,104,101,100,117,108,101,100,78,97,118,105,103,97,116,105,111,110,0,0,0,0,100,101,108,97,121,0,0,0,80,97,103,101,46,102,114,97,109,101,83,99,104,101,100,117,108,101,100,78,97,118,105,103,97,116,105,111,110,0,0,0,80,97,103,101,46,102,114,97,109,101,83,116,111,112,112,101,100,76,111,97,100,105,110,103,0,0,0,0,0,0,0,0,80,97,103,101,46,102,114,97,109,101,83,116,97,114,116,101,100,76,111,97,100,105,110,103,0,0,0,0,0,0,0,0,80,97,103,101,46,102,114,97,109,101,68,101,116,97,99,104,101,100,0,0,0,0,0,0,102,114,97,109,101,0,0,0,67,83,83,46,110,97,109,101,100,70,108,111,119,67,114,101,97,116,101,100,0,0,0,0,80,97,103,101,46,102,114,97,109,101,78,97,118,105,103,97,116,101,100,0,0,0,0,0,80,97,103,101,46,108,111,97,100,69,118,101,110,116,70,105,114,101,100,0,0,0,0,0,80,97,103,101,46,100,111,109,67,111,110,116,101,110,116,69,118,101,110,116,70,105,114,101,100,0,0,0,0,0,0,0,78,101,116,119,111,114,107,46,119,101,98,83,111,99,107,101,116,70,114,97,109,101,83,101,110,116,0,0,0,0,0,0,101,114,114,111,114,77,101,115,115,97,103,101,0,0,0,0,78,101,116,119,111,114,107,46,119,101,98,83,111,99,107,101,116,70,114,97,109,101,69,114,114,111,114,0,0,0,0,0,78,101,116,119,111,114,107,46,119,101,98,83,111,99,107,101,116,70,114,97,109,101,82,101,99,101,105,118,101,100,0,0,78,101,116,119,111,114,107,46,119,101,98,83,111,99,107,101,116,67,108,111,115,101,100,0,117,114,108,0,0,0,0,0,78,101,116,119,111,114,107,46,119,101,98,83,111,99,107,101,116,67,114,101,97,116,101,100,0,0,0,0,0,0,0,0,115,116,121,108,101,83,104,101,101,116,73,100,0,0,0,0,65,112,112,108,105,99,97,116,105,111,110,67,97,99,104,101,46,97,112,112,108,105,99,97,116,105,111,110,67,97,99,104,101,83,116,97,116,117,115,85,112,100,97,116,101,100,0,0,109,101,116,104,111,100,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
function invoke_ii(index,a1) {
  try {
    return Module["dynCall_ii"](index,a1);
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
function invoke_vi(index,a1) {
  try {
    Module["dynCall_vi"](index,a1);
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
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
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
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_vi=env.invoke_vi;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN9Inspector34InspectorNetworkFrontendDispatcher17requestWillBeSentERKN3WTF6StringES4_S4_S4_NS1_10PassRefPtrINS_11TypeBuilder7Network7RequestEEEdNS5_INS7_9InitiatorEEENS5_INS7_8ResponseEEEPNS6_4Page12ResourceType4EnumE(i1, i2, i3, i4, i5, i6, d7, i8, i9, i10) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 d7 = +d7;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 var i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 368 | 0;
 i12 = i11 | 0;
 i13 = i11 + 8 | 0;
 i14 = i11 + 16 | 0;
 i15 = i11 + 24 | 0;
 i16 = i11 + 32 | 0;
 i17 = i11 + 40 | 0;
 i18 = i11 + 48 | 0;
 i19 = i11 + 56 | 0;
 i20 = i11 + 64 | 0;
 i21 = i11 + 72 | 0;
 i22 = i11 + 80 | 0;
 i23 = i11 + 88 | 0;
 i24 = i11 + 96 | 0;
 i25 = i11 + 104 | 0;
 i26 = i11 + 112 | 0;
 i27 = i11 + 120 | 0;
 i28 = i11 + 128 | 0;
 i29 = i11 + 136 | 0;
 i30 = i11 + 144 | 0;
 i31 = i11 + 152 | 0;
 i32 = i11 + 160 | 0;
 i33 = i11 + 168 | 0;
 i34 = i11 + 176 | 0;
 i35 = i11 + 184 | 0;
 i36 = i11 + 192 | 0;
 i37 = i11 + 200 | 0;
 i38 = i11 + 208 | 0;
 i39 = i11 + 216 | 0;
 i40 = i11 + 224 | 0;
 i41 = i11 + 232 | 0;
 i42 = i11 + 240 | 0;
 i43 = i11 + 248 | 0;
 i44 = i11 + 256 | 0;
 i45 = i11 + 264 | 0;
 i46 = i11 + 272 | 0;
 i47 = i11 + 280 | 0;
 i48 = i11 + 288 | 0;
 i49 = i11 + 296 | 0;
 i50 = i11 + 304 | 0;
 i51 = i11 + 312 | 0;
 i52 = i11 + 320 | 0;
 i53 = i11 + 328 | 0;
 i54 = i11 + 336 | 0;
 i55 = i11 + 344 | 0;
 i56 = i11 + 352 | 0;
 i57 = i11 + 360 | 0;
 __ZN9Inspector15InspectorObject6createEv(i26);
 i58 = i26 | 0;
 i26 = HEAP32[i58 >> 2] | 0;
 HEAP32[i58 >> 2] = 0;
 i58 = i26 | 0;
 HEAP32[i28 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i27, i28);
 HEAP32[i30 >> 2] = H_BASE + 576;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i29, i30);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i25, i29);
 i30 = i24 | 0;
 i28 = i25 | 0;
 i25 = HEAP32[i28 >> 2] | 0;
 HEAP32[i28 >> 2] = 0;
 HEAP32[i30 >> 2] = i25;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i58, i27, i24);
 i24 = HEAP32[i30 >> 2] | 0;
 do {
  if ((i24 | 0) != 0) {
   i30 = i24 + 4 | 0;
   i25 = i30 | 0;
   i59 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
   if ((i59 | 0) != 0) {
    HEAP32[i25 >> 2] = i59;
    break;
   }
   i59 = i30 - 4 | 0;
   if ((i59 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i59 >> 2] | 0) + 4 >> 2] & 1](i59);
  }
 } while (0);
 i24 = HEAP32[i28 >> 2] | 0;
 do {
  if ((i24 | 0) != 0) {
   i28 = i24 + 4 | 0;
   i59 = i28 | 0;
   i30 = (HEAP32[i59 >> 2] | 0) - 1 | 0;
   if ((i30 | 0) != 0) {
    HEAP32[i59 >> 2] = i30;
    break;
   }
   i30 = i28 - 4 | 0;
   if ((i30 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i30 >> 2] | 0) + 4 >> 2] & 1](i30);
  }
 } while (0);
 i24 = HEAP32[i29 >> 2] | 0;
 do {
  if ((i24 | 0) != 0) {
   i29 = i24 | 0;
   i30 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
   if ((i30 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i24);
    break;
   } else {
    HEAP32[i29 >> 2] = i30;
    break;
   }
  }
 } while (0);
 i24 = HEAP32[i27 >> 2] | 0;
 do {
  if ((i24 | 0) != 0) {
   i27 = i24 | 0;
   i30 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
   if ((i30 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i24);
    break;
   } else {
    HEAP32[i27 >> 2] = i30;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i31);
 i24 = i31 | 0;
 i31 = HEAP32[i24 >> 2] | 0;
 HEAP32[i24 >> 2] = 0;
 i24 = i31 | 0;
 HEAP32[i33 >> 2] = H_BASE + 560;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i32, i33);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i23, i2);
 i2 = i22 | 0;
 i33 = i23 | 0;
 i23 = HEAP32[i33 >> 2] | 0;
 HEAP32[i33 >> 2] = 0;
 HEAP32[i2 >> 2] = i23;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i24, i32, i22);
 i22 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i22 | 0) != 0) {
   i2 = i22 + 4 | 0;
   i23 = i2 | 0;
   i30 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
   if ((i30 | 0) != 0) {
    HEAP32[i23 >> 2] = i30;
    break;
   }
   i30 = i2 - 4 | 0;
   if ((i30 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i30 >> 2] | 0) + 4 >> 2] & 1](i30);
  }
 } while (0);
 i22 = HEAP32[i33 >> 2] | 0;
 do {
  if ((i22 | 0) != 0) {
   i33 = i22 + 4 | 0;
   i30 = i33 | 0;
   i2 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i30 >> 2] = i2;
    break;
   }
   i2 = i33 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i22 = HEAP32[i32 >> 2] | 0;
 do {
  if ((i22 | 0) != 0) {
   i32 = i22 | 0;
   i2 = (HEAP32[i32 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i22);
    break;
   } else {
    HEAP32[i32 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP32[i35 >> 2] = H_BASE + 1864;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i34, i35);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i21, i3);
 i3 = i20 | 0;
 i35 = i21 | 0;
 i21 = HEAP32[i35 >> 2] | 0;
 HEAP32[i35 >> 2] = 0;
 HEAP32[i3 >> 2] = i21;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i24, i34, i20);
 i20 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i20 | 0) != 0) {
   i3 = i20 + 4 | 0;
   i21 = i3 | 0;
   i22 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
   if ((i22 | 0) != 0) {
    HEAP32[i21 >> 2] = i22;
    break;
   }
   i22 = i3 - 4 | 0;
   if ((i22 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i22 >> 2] | 0) + 4 >> 2] & 1](i22);
  }
 } while (0);
 i20 = HEAP32[i35 >> 2] | 0;
 do {
  if ((i20 | 0) != 0) {
   i35 = i20 + 4 | 0;
   i22 = i35 | 0;
   i3 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i22 >> 2] = i3;
    break;
   }
   i3 = i35 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 1](i3);
  }
 } while (0);
 i20 = HEAP32[i34 >> 2] | 0;
 do {
  if ((i20 | 0) != 0) {
   i34 = i20 | 0;
   i3 = (HEAP32[i34 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i20);
    break;
   } else {
    HEAP32[i34 >> 2] = i3;
    break;
   }
  }
 } while (0);
 HEAP32[i37 >> 2] = H_BASE + 544;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i36, i37);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i19, i4);
 i4 = i18 | 0;
 i37 = i19 | 0;
 i19 = HEAP32[i37 >> 2] | 0;
 HEAP32[i37 >> 2] = 0;
 HEAP32[i4 >> 2] = i19;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i24, i36, i18);
 i18 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i4 = i18 + 4 | 0;
   i19 = i4 | 0;
   i20 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
   if ((i20 | 0) != 0) {
    HEAP32[i19 >> 2] = i20;
    break;
   }
   i20 = i4 - 4 | 0;
   if ((i20 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 1](i20);
  }
 } while (0);
 i18 = HEAP32[i37 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i37 = i18 + 4 | 0;
   i20 = i37 | 0;
   i4 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i20 >> 2] = i4;
    break;
   }
   i4 = i37 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
  }
 } while (0);
 i18 = HEAP32[i36 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i36 = i18 | 0;
   i4 = (HEAP32[i36 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    break;
   } else {
    HEAP32[i36 >> 2] = i4;
    break;
   }
  }
 } while (0);
 HEAP32[i39 >> 2] = H_BASE + 528;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i38, i39);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i17, i5);
 i5 = i16 | 0;
 i39 = i17 | 0;
 i17 = HEAP32[i39 >> 2] | 0;
 HEAP32[i39 >> 2] = 0;
 HEAP32[i5 >> 2] = i17;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i24, i38, i16);
 i16 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i16 | 0) != 0) {
   i5 = i16 + 4 | 0;
   i17 = i5 | 0;
   i18 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
   if ((i18 | 0) != 0) {
    HEAP32[i17 >> 2] = i18;
    break;
   }
   i18 = i5 - 4 | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 1](i18);
  }
 } while (0);
 i16 = HEAP32[i39 >> 2] | 0;
 do {
  if ((i16 | 0) != 0) {
   i39 = i16 + 4 | 0;
   i18 = i39 | 0;
   i5 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i18 >> 2] = i5;
    break;
   }
   i5 = i39 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 1](i5);
  }
 } while (0);
 i16 = HEAP32[i38 >> 2] | 0;
 do {
  if ((i16 | 0) != 0) {
   i38 = i16 | 0;
   i5 = (HEAP32[i38 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i16);
    break;
   } else {
    HEAP32[i38 >> 2] = i5;
    break;
   }
  }
 } while (0);
 HEAP32[i41 >> 2] = H_BASE + 488;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i40, i41);
 i41 = i42 | 0;
 i16 = i6 | 0;
 i6 = HEAP32[i16 >> 2] | 0;
 HEAP32[i16 >> 2] = 0;
 HEAP32[i41 >> 2] = i6;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i24, i40, i42);
 i42 = HEAP32[i41 >> 2] | 0;
 do {
  if ((i42 | 0) != 0) {
   i41 = i42 + 4 | 0;
   i6 = i41 | 0;
   i16 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i16 | 0) != 0) {
    HEAP32[i6 >> 2] = i16;
    break;
   }
   i16 = i41 - 4 | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 1](i16);
  }
 } while (0);
 i42 = HEAP32[i40 >> 2] | 0;
 do {
  if ((i42 | 0) != 0) {
   i40 = i42 | 0;
   i16 = (HEAP32[i40 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i42);
    break;
   } else {
    HEAP32[i40 >> 2] = i16;
    break;
   }
  }
 } while (0);
 HEAP32[i44 >> 2] = H_BASE + 472;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i43, i44);
 __ZN9Inspector19InspectorBasicValue6createEd(i15, d7);
 i44 = i14 | 0;
 i42 = i15 | 0;
 i15 = HEAP32[i42 >> 2] | 0;
 HEAP32[i42 >> 2] = 0;
 HEAP32[i44 >> 2] = i15;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i24, i43, i14);
 i14 = HEAP32[i44 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i44 = i14 + 4 | 0;
   i15 = i44 | 0;
   i16 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   if ((i16 | 0) != 0) {
    HEAP32[i15 >> 2] = i16;
    break;
   }
   i16 = i44 - 4 | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 1](i16);
  }
 } while (0);
 i14 = HEAP32[i42 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i42 = i14 + 4 | 0;
   i16 = i42 | 0;
   i44 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   if ((i44 | 0) != 0) {
    HEAP32[i16 >> 2] = i44;
    break;
   }
   i44 = i42 - 4 | 0;
   if ((i44 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i44 >> 2] | 0) + 4 >> 2] & 1](i44);
  }
 } while (0);
 i14 = HEAP32[i43 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i43 = i14 | 0;
   i44 = (HEAP32[i43 >> 2] | 0) - 2 | 0;
   if ((i44 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i43 >> 2] = i44;
    break;
   }
  }
 } while (0);
 HEAP32[i46 >> 2] = H_BASE + 456;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i45, i46);
 i46 = i47 | 0;
 i14 = i8 | 0;
 i8 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = 0;
 HEAP32[i46 >> 2] = i8;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i24, i45, i47);
 i47 = HEAP32[i46 >> 2] | 0;
 do {
  if ((i47 | 0) != 0) {
   i46 = i47 + 4 | 0;
   i8 = i46 | 0;
   i14 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i14 | 0) != 0) {
    HEAP32[i8 >> 2] = i14;
    break;
   }
   i14 = i46 - 4 | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 1](i14);
  }
 } while (0);
 i47 = HEAP32[i45 >> 2] | 0;
 do {
  if ((i47 | 0) != 0) {
   i45 = i47 | 0;
   i14 = (HEAP32[i45 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i47);
    break;
   } else {
    HEAP32[i45 >> 2] = i14;
    break;
   }
  }
 } while (0);
 i47 = i9 | 0;
 do {
  if ((HEAP32[i47 >> 2] | 0) != 0) {
   HEAP32[i49 >> 2] = H_BASE + 432;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i48, i49);
   i9 = i50 | 0;
   i14 = HEAP32[i47 >> 2] | 0;
   HEAP32[i47 >> 2] = 0;
   HEAP32[i9 >> 2] = i14;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i24, i48, i50);
   i14 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i14 | 0) != 0) {
     i9 = i14 + 4 | 0;
     i45 = i9 | 0;
     i46 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
     if ((i46 | 0) != 0) {
      HEAP32[i45 >> 2] = i46;
      break;
     }
     i46 = i9 - 4 | 0;
     if ((i46 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i46 >> 2] | 0) + 4 >> 2] & 1](i46);
    }
   } while (0);
   i14 = HEAP32[i48 >> 2] | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   i46 = i14 | 0;
   i9 = (HEAP32[i46 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i46 >> 2] = i9;
    break;
   }
  }
 } while (0);
 do {
  if ((i10 | 0) != 0) {
   HEAP32[i52 >> 2] = H_BASE + 424;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i51, i52);
   __ZN9Inspector11TypeBuilder23getWebEnumConstantValueEi(i53, HEAP32[i10 >> 2] | 0);
   __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i13, i53);
   i48 = i12 | 0;
   i50 = i13 | 0;
   i47 = HEAP32[i50 >> 2] | 0;
   HEAP32[i50 >> 2] = 0;
   HEAP32[i48 >> 2] = i47;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i24, i51, i12);
   i47 = HEAP32[i48 >> 2] | 0;
   do {
    if ((i47 | 0) != 0) {
     i48 = i47 + 4 | 0;
     i49 = i48 | 0;
     i9 = (HEAP32[i49 >> 2] | 0) - 1 | 0;
     if ((i9 | 0) != 0) {
      HEAP32[i49 >> 2] = i9;
      break;
     }
     i9 = i48 - 4 | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 1](i9);
    }
   } while (0);
   i47 = HEAP32[i50 >> 2] | 0;
   do {
    if ((i47 | 0) != 0) {
     i9 = i47 + 4 | 0;
     i48 = i9 | 0;
     i49 = (HEAP32[i48 >> 2] | 0) - 1 | 0;
     if ((i49 | 0) != 0) {
      HEAP32[i48 >> 2] = i49;
      break;
     }
     i49 = i9 - 4 | 0;
     if ((i49 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i49 >> 2] | 0) + 4 >> 2] & 1](i49);
    }
   } while (0);
   i47 = HEAP32[i53 >> 2] | 0;
   do {
    if ((i47 | 0) != 0) {
     i50 = i47 | 0;
     i49 = (HEAP32[i50 >> 2] | 0) - 2 | 0;
     if ((i49 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i47);
      break;
     } else {
      HEAP32[i50 >> 2] = i49;
      break;
     }
    }
   } while (0);
   i47 = HEAP32[i51 >> 2] | 0;
   if ((i47 | 0) == 0) {
    break;
   }
   i49 = i47 | 0;
   i50 = (HEAP32[i49 >> 2] | 0) - 2 | 0;
   if ((i50 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i47);
    break;
   } else {
    HEAP32[i49 >> 2] = i50;
    break;
   }
  }
 } while (0);
 HEAP32[i55 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i54, i55);
 i55 = i56 | 0;
 HEAP32[i55 >> 2] = i31;
 i51 = (i31 | 0) == 0;
 if (!i51) {
  i53 = i31 + 4 | 0;
  HEAP32[i53 >> 2] = (HEAP32[i53 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i58, i54, i56);
 i56 = HEAP32[i55 >> 2] | 0;
 do {
  if ((i56 | 0) != 0) {
   i55 = i56 + 4 | 0;
   i58 = i55 | 0;
   i53 = (HEAP32[i58 >> 2] | 0) - 1 | 0;
   if ((i53 | 0) != 0) {
    HEAP32[i58 >> 2] = i53;
    break;
   }
   i53 = i55 - 4 | 0;
   if ((i53 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i53 >> 2] | 0) + 4 >> 2] & 1](i53);
  }
 } while (0);
 i56 = HEAP32[i54 >> 2] | 0;
 do {
  if ((i56 | 0) != 0) {
   i54 = i56 | 0;
   i53 = (HEAP32[i54 >> 2] | 0) - 2 | 0;
   if ((i53 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i56);
    break;
   } else {
    HEAP32[i54 >> 2] = i53;
    break;
   }
  }
 } while (0);
 i56 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i56 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i57, i26 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i56, i57) | 0;
 i56 = HEAP32[i57 >> 2] | 0;
 do {
  if ((i56 | 0) != 0) {
   i57 = i56 | 0;
   i1 = (HEAP32[i57 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i56);
    break;
   } else {
    HEAP32[i57 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i51) {
   i56 = i31 + 4 | 0;
   i1 = i56 | 0;
   i57 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i57 | 0) != 0) {
    HEAP32[i1 >> 2] = i57;
    break;
   }
   i57 = i56 - 4 | 0;
   if ((i57 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i57 >> 2] | 0) + 4 >> 2] & 1](i57);
  }
 } while (0);
 if ((i26 | 0) == 0) {
  STACKTOP = i11;
  return;
 }
 i31 = i26 + 4 | 0;
 i26 = i31 | 0;
 i51 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
 if ((i51 | 0) != 0) {
  HEAP32[i26 >> 2] = i51;
  STACKTOP = i11;
  return;
 }
 i51 = i31 - 4 | 0;
 if ((i51 | 0) == 0) {
  STACKTOP = i11;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i51 >> 2] | 0) + 4 >> 2] & 1](i51);
 STACKTOP = i11;
 return;
}
function __ZN9Inspector34InspectorNetworkFrontendDispatcher28requestServedFromMemoryCacheERKN3WTF6StringES4_S4_S4_dNS1_10PassRefPtrINS_11TypeBuilder7Network9InitiatorEEENS5_INS7_14CachedResourceEEE(i1, i2, i3, i4, i5, d6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 d6 = +d6;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 304 | 0;
 i10 = i9 | 0;
 i11 = i9 + 8 | 0;
 i12 = i9 + 16 | 0;
 i13 = i9 + 24 | 0;
 i14 = i9 + 32 | 0;
 i15 = i9 + 40 | 0;
 i16 = i9 + 48 | 0;
 i17 = i9 + 56 | 0;
 i18 = i9 + 64 | 0;
 i19 = i9 + 72 | 0;
 i20 = i9 + 80 | 0;
 i21 = i9 + 88 | 0;
 i22 = i9 + 96 | 0;
 i23 = i9 + 104 | 0;
 i24 = i9 + 112 | 0;
 i25 = i9 + 120 | 0;
 i26 = i9 + 128 | 0;
 i27 = i9 + 136 | 0;
 i28 = i9 + 144 | 0;
 i29 = i9 + 152 | 0;
 i30 = i9 + 160 | 0;
 i31 = i9 + 168 | 0;
 i32 = i9 + 176 | 0;
 i33 = i9 + 184 | 0;
 i34 = i9 + 192 | 0;
 i35 = i9 + 200 | 0;
 i36 = i9 + 208 | 0;
 i37 = i9 + 216 | 0;
 i38 = i9 + 224 | 0;
 i39 = i9 + 232 | 0;
 i40 = i9 + 240 | 0;
 i41 = i9 + 248 | 0;
 i42 = i9 + 256 | 0;
 i43 = i9 + 264 | 0;
 i44 = i9 + 272 | 0;
 i45 = i9 + 280 | 0;
 i46 = i9 + 288 | 0;
 i47 = i9 + 296 | 0;
 __ZN9Inspector15InspectorObject6createEv(i22);
 i48 = i22 | 0;
 i22 = HEAP32[i48 >> 2] | 0;
 HEAP32[i48 >> 2] = 0;
 i48 = i22 | 0;
 HEAP32[i24 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i23, i24);
 HEAP32[i26 >> 2] = H_BASE + 120;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i25, i26);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i21, i25);
 i26 = i20 | 0;
 i24 = i21 | 0;
 i21 = HEAP32[i24 >> 2] | 0;
 HEAP32[i24 >> 2] = 0;
 HEAP32[i26 >> 2] = i21;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i48, i23, i20);
 i20 = HEAP32[i26 >> 2] | 0;
 do {
  if ((i20 | 0) != 0) {
   i26 = i20 + 4 | 0;
   i21 = i26 | 0;
   i49 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
   if ((i49 | 0) != 0) {
    HEAP32[i21 >> 2] = i49;
    break;
   }
   i49 = i26 - 4 | 0;
   if ((i49 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i49 >> 2] | 0) + 4 >> 2] & 1](i49);
  }
 } while (0);
 i20 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i20 | 0) != 0) {
   i24 = i20 + 4 | 0;
   i49 = i24 | 0;
   i26 = (HEAP32[i49 >> 2] | 0) - 1 | 0;
   if ((i26 | 0) != 0) {
    HEAP32[i49 >> 2] = i26;
    break;
   }
   i26 = i24 - 4 | 0;
   if ((i26 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i26 >> 2] | 0) + 4 >> 2] & 1](i26);
  }
 } while (0);
 i20 = HEAP32[i25 >> 2] | 0;
 do {
  if ((i20 | 0) != 0) {
   i25 = i20 | 0;
   i26 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
   if ((i26 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i20);
    break;
   } else {
    HEAP32[i25 >> 2] = i26;
    break;
   }
  }
 } while (0);
 i20 = HEAP32[i23 >> 2] | 0;
 do {
  if ((i20 | 0) != 0) {
   i23 = i20 | 0;
   i26 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
   if ((i26 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i20);
    break;
   } else {
    HEAP32[i23 >> 2] = i26;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i27);
 i20 = i27 | 0;
 i27 = HEAP32[i20 >> 2] | 0;
 HEAP32[i20 >> 2] = 0;
 i20 = i27 | 0;
 HEAP32[i29 >> 2] = H_BASE + 560;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i28, i29);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i19, i2);
 i2 = i18 | 0;
 i29 = i19 | 0;
 i19 = HEAP32[i29 >> 2] | 0;
 HEAP32[i29 >> 2] = 0;
 HEAP32[i2 >> 2] = i19;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i20, i28, i18);
 i18 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i2 = i18 + 4 | 0;
   i19 = i2 | 0;
   i26 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
   if ((i26 | 0) != 0) {
    HEAP32[i19 >> 2] = i26;
    break;
   }
   i26 = i2 - 4 | 0;
   if ((i26 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i26 >> 2] | 0) + 4 >> 2] & 1](i26);
  }
 } while (0);
 i18 = HEAP32[i29 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i29 = i18 + 4 | 0;
   i26 = i29 | 0;
   i2 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i26 >> 2] = i2;
    break;
   }
   i2 = i29 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i18 = HEAP32[i28 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i28 = i18 | 0;
   i2 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    break;
   } else {
    HEAP32[i28 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP32[i31 >> 2] = H_BASE + 1864;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i30, i31);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i17, i3);
 i3 = i16 | 0;
 i31 = i17 | 0;
 i17 = HEAP32[i31 >> 2] | 0;
 HEAP32[i31 >> 2] = 0;
 HEAP32[i3 >> 2] = i17;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i20, i30, i16);
 i16 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i16 | 0) != 0) {
   i3 = i16 + 4 | 0;
   i17 = i3 | 0;
   i18 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
   if ((i18 | 0) != 0) {
    HEAP32[i17 >> 2] = i18;
    break;
   }
   i18 = i3 - 4 | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 1](i18);
  }
 } while (0);
 i16 = HEAP32[i31 >> 2] | 0;
 do {
  if ((i16 | 0) != 0) {
   i31 = i16 + 4 | 0;
   i18 = i31 | 0;
   i3 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i18 >> 2] = i3;
    break;
   }
   i3 = i31 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 1](i3);
  }
 } while (0);
 i16 = HEAP32[i30 >> 2] | 0;
 do {
  if ((i16 | 0) != 0) {
   i30 = i16 | 0;
   i3 = (HEAP32[i30 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i16);
    break;
   } else {
    HEAP32[i30 >> 2] = i3;
    break;
   }
  }
 } while (0);
 HEAP32[i33 >> 2] = H_BASE + 544;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i32, i33);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i15, i4);
 i4 = i14 | 0;
 i33 = i15 | 0;
 i15 = HEAP32[i33 >> 2] | 0;
 HEAP32[i33 >> 2] = 0;
 HEAP32[i4 >> 2] = i15;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i20, i32, i14);
 i14 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i4 = i14 + 4 | 0;
   i15 = i4 | 0;
   i16 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   if ((i16 | 0) != 0) {
    HEAP32[i15 >> 2] = i16;
    break;
   }
   i16 = i4 - 4 | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 1](i16);
  }
 } while (0);
 i14 = HEAP32[i33 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i33 = i14 + 4 | 0;
   i16 = i33 | 0;
   i4 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i16 >> 2] = i4;
    break;
   }
   i4 = i33 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
  }
 } while (0);
 i14 = HEAP32[i32 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i32 = i14 | 0;
   i4 = (HEAP32[i32 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i32 >> 2] = i4;
    break;
   }
  }
 } while (0);
 HEAP32[i35 >> 2] = H_BASE + 528;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i34, i35);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i13, i5);
 i5 = i12 | 0;
 i35 = i13 | 0;
 i13 = HEAP32[i35 >> 2] | 0;
 HEAP32[i35 >> 2] = 0;
 HEAP32[i5 >> 2] = i13;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i20, i34, i12);
 i12 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i5 = i12 + 4 | 0;
   i13 = i5 | 0;
   i14 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i14 | 0) != 0) {
    HEAP32[i13 >> 2] = i14;
    break;
   }
   i14 = i5 - 4 | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 1](i14);
  }
 } while (0);
 i12 = HEAP32[i35 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i35 = i12 + 4 | 0;
   i14 = i35 | 0;
   i5 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i14 >> 2] = i5;
    break;
   }
   i5 = i35 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 1](i5);
  }
 } while (0);
 i12 = HEAP32[i34 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i34 = i12 | 0;
   i5 = (HEAP32[i34 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i34 >> 2] = i5;
    break;
   }
  }
 } while (0);
 HEAP32[i37 >> 2] = H_BASE + 472;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i36, i37);
 __ZN9Inspector19InspectorBasicValue6createEd(i11, d6);
 i37 = i10 | 0;
 i12 = i11 | 0;
 i11 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = 0;
 HEAP32[i37 >> 2] = i11;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i20, i36, i10);
 i10 = HEAP32[i37 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i37 = i10 + 4 | 0;
   i11 = i37 | 0;
   i5 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i11 >> 2] = i5;
    break;
   }
   i5 = i37 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 1](i5);
  }
 } while (0);
 i10 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i12 = i10 + 4 | 0;
   i5 = i12 | 0;
   i37 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i37 | 0) != 0) {
    HEAP32[i5 >> 2] = i37;
    break;
   }
   i37 = i12 - 4 | 0;
   if ((i37 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i37 >> 2] | 0) + 4 >> 2] & 1](i37);
  }
 } while (0);
 i10 = HEAP32[i36 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i36 = i10 | 0;
   i37 = (HEAP32[i36 >> 2] | 0) - 2 | 0;
   if ((i37 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i36 >> 2] = i37;
    break;
   }
  }
 } while (0);
 HEAP32[i39 >> 2] = H_BASE + 456;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i38, i39);
 i39 = i40 | 0;
 i10 = i7 | 0;
 i7 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i39 >> 2] = i7;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i20, i38, i40);
 i40 = HEAP32[i39 >> 2] | 0;
 do {
  if ((i40 | 0) != 0) {
   i39 = i40 + 4 | 0;
   i7 = i39 | 0;
   i10 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i7 >> 2] = i10;
    break;
   }
   i10 = i39 - 4 | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 1](i10);
  }
 } while (0);
 i40 = HEAP32[i38 >> 2] | 0;
 do {
  if ((i40 | 0) != 0) {
   i38 = i40 | 0;
   i10 = (HEAP32[i38 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i40);
    break;
   } else {
    HEAP32[i38 >> 2] = i10;
    break;
   }
  }
 } while (0);
 HEAP32[i42 >> 2] = H_BASE + 104;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i41, i42);
 i42 = i43 | 0;
 i40 = i8 | 0;
 i8 = HEAP32[i40 >> 2] | 0;
 HEAP32[i40 >> 2] = 0;
 HEAP32[i42 >> 2] = i8;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i20, i41, i43);
 i43 = HEAP32[i42 >> 2] | 0;
 do {
  if ((i43 | 0) != 0) {
   i42 = i43 + 4 | 0;
   i20 = i42 | 0;
   i8 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i20 >> 2] = i8;
    break;
   }
   i8 = i42 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 1](i8);
  }
 } while (0);
 i43 = HEAP32[i41 >> 2] | 0;
 do {
  if ((i43 | 0) != 0) {
   i41 = i43 | 0;
   i8 = (HEAP32[i41 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i43);
    break;
   } else {
    HEAP32[i41 >> 2] = i8;
    break;
   }
  }
 } while (0);
 HEAP32[i45 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i44, i45);
 i45 = i46 | 0;
 HEAP32[i45 >> 2] = i27;
 i43 = (i27 | 0) == 0;
 if (!i43) {
  i8 = i27 + 4 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i48, i44, i46);
 i46 = HEAP32[i45 >> 2] | 0;
 do {
  if ((i46 | 0) != 0) {
   i45 = i46 + 4 | 0;
   i48 = i45 | 0;
   i8 = (HEAP32[i48 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i48 >> 2] = i8;
    break;
   }
   i8 = i45 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 1](i8);
  }
 } while (0);
 i46 = HEAP32[i44 >> 2] | 0;
 do {
  if ((i46 | 0) != 0) {
   i44 = i46 | 0;
   i8 = (HEAP32[i44 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i46);
    break;
   } else {
    HEAP32[i44 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i46 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i46 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i47, i22 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i46, i47) | 0;
 i46 = HEAP32[i47 >> 2] | 0;
 do {
  if ((i46 | 0) != 0) {
   i47 = i46 | 0;
   i1 = (HEAP32[i47 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i46);
    break;
   } else {
    HEAP32[i47 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i43) {
   i46 = i27 + 4 | 0;
   i1 = i46 | 0;
   i47 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i47 | 0) != 0) {
    HEAP32[i1 >> 2] = i47;
    break;
   }
   i47 = i46 - 4 | 0;
   if ((i47 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i47 >> 2] | 0) + 4 >> 2] & 1](i47);
  }
 } while (0);
 if ((i22 | 0) == 0) {
  STACKTOP = i9;
  return;
 }
 i27 = i22 + 4 | 0;
 i22 = i27 | 0;
 i43 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
 if ((i43 | 0) != 0) {
  HEAP32[i22 >> 2] = i43;
  STACKTOP = i9;
  return;
 }
 i43 = i27 - 4 | 0;
 if ((i43 | 0) == 0) {
  STACKTOP = i9;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i43 >> 2] | 0) + 4 >> 2] & 1](i43);
 STACKTOP = i9;
 return;
}
function __ZN9Inspector34InspectorNetworkFrontendDispatcher16responseReceivedERKN3WTF6StringES4_S4_dNS_11TypeBuilder4Page12ResourceType4EnumENS1_10PassRefPtrINS5_7Network8ResponseEEE(i1, i2, i3, i4, d5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 288 | 0;
 i9 = i8 | 0;
 i10 = i8 + 8 | 0;
 i11 = i8 + 16 | 0;
 i12 = i8 + 24 | 0;
 i13 = i8 + 32 | 0;
 i14 = i8 + 40 | 0;
 i15 = i8 + 48 | 0;
 i16 = i8 + 56 | 0;
 i17 = i8 + 64 | 0;
 i18 = i8 + 72 | 0;
 i19 = i8 + 80 | 0;
 i20 = i8 + 88 | 0;
 i21 = i8 + 96 | 0;
 i22 = i8 + 104 | 0;
 i23 = i8 + 112 | 0;
 i24 = i8 + 120 | 0;
 i25 = i8 + 128 | 0;
 i26 = i8 + 136 | 0;
 i27 = i8 + 144 | 0;
 i28 = i8 + 152 | 0;
 i29 = i8 + 160 | 0;
 i30 = i8 + 168 | 0;
 i31 = i8 + 176 | 0;
 i32 = i8 + 184 | 0;
 i33 = i8 + 192 | 0;
 i34 = i8 + 200 | 0;
 i35 = i8 + 208 | 0;
 i36 = i8 + 216 | 0;
 i37 = i8 + 224 | 0;
 i38 = i8 + 232 | 0;
 i39 = i8 + 240 | 0;
 i40 = i8 + 248 | 0;
 i41 = i8 + 256 | 0;
 i42 = i8 + 264 | 0;
 i43 = i8 + 272 | 0;
 i44 = i8 + 280 | 0;
 __ZN9Inspector15InspectorObject6createEv(i21);
 i45 = i21 | 0;
 i21 = HEAP32[i45 >> 2] | 0;
 HEAP32[i45 >> 2] = 0;
 i45 = i21 | 0;
 HEAP32[i23 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i22, i23);
 HEAP32[i25 >> 2] = H_BASE + 360;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i24, i25);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i20, i24);
 i25 = i19 | 0;
 i23 = i20 | 0;
 i20 = HEAP32[i23 >> 2] | 0;
 HEAP32[i23 >> 2] = 0;
 HEAP32[i25 >> 2] = i20;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i45, i22, i19);
 i19 = HEAP32[i25 >> 2] | 0;
 do {
  if ((i19 | 0) != 0) {
   i25 = i19 + 4 | 0;
   i20 = i25 | 0;
   i46 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   if ((i46 | 0) != 0) {
    HEAP32[i20 >> 2] = i46;
    break;
   }
   i46 = i25 - 4 | 0;
   if ((i46 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i46 >> 2] | 0) + 4 >> 2] & 1](i46);
  }
 } while (0);
 i19 = HEAP32[i23 >> 2] | 0;
 do {
  if ((i19 | 0) != 0) {
   i23 = i19 + 4 | 0;
   i46 = i23 | 0;
   i25 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
   if ((i25 | 0) != 0) {
    HEAP32[i46 >> 2] = i25;
    break;
   }
   i25 = i23 - 4 | 0;
   if ((i25 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i25 >> 2] | 0) + 4 >> 2] & 1](i25);
  }
 } while (0);
 i19 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i19 | 0) != 0) {
   i24 = i19 | 0;
   i25 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
   if ((i25 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i19);
    break;
   } else {
    HEAP32[i24 >> 2] = i25;
    break;
   }
  }
 } while (0);
 i19 = HEAP32[i22 >> 2] | 0;
 do {
  if ((i19 | 0) != 0) {
   i22 = i19 | 0;
   i25 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
   if ((i25 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i19);
    break;
   } else {
    HEAP32[i22 >> 2] = i25;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i26);
 i19 = i26 | 0;
 i26 = HEAP32[i19 >> 2] | 0;
 HEAP32[i19 >> 2] = 0;
 i19 = i26 | 0;
 HEAP32[i28 >> 2] = H_BASE + 560;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i27, i28);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i18, i2);
 i2 = i17 | 0;
 i28 = i18 | 0;
 i18 = HEAP32[i28 >> 2] | 0;
 HEAP32[i28 >> 2] = 0;
 HEAP32[i2 >> 2] = i18;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i19, i27, i17);
 i17 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i2 = i17 + 4 | 0;
   i18 = i2 | 0;
   i25 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   if ((i25 | 0) != 0) {
    HEAP32[i18 >> 2] = i25;
    break;
   }
   i25 = i2 - 4 | 0;
   if ((i25 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i25 >> 2] | 0) + 4 >> 2] & 1](i25);
  }
 } while (0);
 i17 = HEAP32[i28 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i28 = i17 + 4 | 0;
   i25 = i28 | 0;
   i2 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i25 >> 2] = i2;
    break;
   }
   i2 = i28 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i17 = HEAP32[i27 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i27 = i17 | 0;
   i2 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i27 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP32[i30 >> 2] = H_BASE + 1864;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i29, i30);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i16, i3);
 i3 = i15 | 0;
 i30 = i16 | 0;
 i16 = HEAP32[i30 >> 2] | 0;
 HEAP32[i30 >> 2] = 0;
 HEAP32[i3 >> 2] = i16;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i19, i29, i15);
 i15 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i3 = i15 + 4 | 0;
   i16 = i3 | 0;
   i17 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   if ((i17 | 0) != 0) {
    HEAP32[i16 >> 2] = i17;
    break;
   }
   i17 = i3 - 4 | 0;
   if ((i17 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] & 1](i17);
  }
 } while (0);
 i15 = HEAP32[i30 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i30 = i15 + 4 | 0;
   i17 = i30 | 0;
   i3 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i17 >> 2] = i3;
    break;
   }
   i3 = i30 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 1](i3);
  }
 } while (0);
 i15 = HEAP32[i29 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i29 = i15 | 0;
   i3 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i29 >> 2] = i3;
    break;
   }
  }
 } while (0);
 HEAP32[i32 >> 2] = H_BASE + 544;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i31, i32);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i14, i4);
 i4 = i13 | 0;
 i32 = i14 | 0;
 i14 = HEAP32[i32 >> 2] | 0;
 HEAP32[i32 >> 2] = 0;
 HEAP32[i4 >> 2] = i14;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i19, i31, i13);
 i13 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i4 = i13 + 4 | 0;
   i14 = i4 | 0;
   i15 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i14 >> 2] = i15;
    break;
   }
   i15 = i4 - 4 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 1](i15);
  }
 } while (0);
 i13 = HEAP32[i32 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i32 = i13 + 4 | 0;
   i15 = i32 | 0;
   i4 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i15 >> 2] = i4;
    break;
   }
   i4 = i32 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
  }
 } while (0);
 i13 = HEAP32[i31 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i31 = i13 | 0;
   i4 = (HEAP32[i31 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i31 >> 2] = i4;
    break;
   }
  }
 } while (0);
 HEAP32[i34 >> 2] = H_BASE + 472;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i33, i34);
 __ZN9Inspector19InspectorBasicValue6createEd(i12, d5);
 i34 = i11 | 0;
 i13 = i12 | 0;
 i12 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i34 >> 2] = i12;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i19, i33, i11);
 i11 = HEAP32[i34 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i34 = i11 + 4 | 0;
   i12 = i34 | 0;
   i4 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i12 >> 2] = i4;
    break;
   }
   i4 = i34 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
  }
 } while (0);
 i11 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i13 = i11 + 4 | 0;
   i4 = i13 | 0;
   i34 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i34 | 0) != 0) {
    HEAP32[i4 >> 2] = i34;
    break;
   }
   i34 = i13 - 4 | 0;
   if ((i34 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i34 >> 2] | 0) + 4 >> 2] & 1](i34);
  }
 } while (0);
 i11 = HEAP32[i33 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i33 = i11 | 0;
   i34 = (HEAP32[i33 >> 2] | 0) - 2 | 0;
   if ((i34 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i33 >> 2] = i34;
    break;
   }
  }
 } while (0);
 HEAP32[i36 >> 2] = H_BASE + 424;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i35, i36);
 __ZN9Inspector11TypeBuilder23getWebEnumConstantValueEi(i37, i6);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i10, i37);
 i6 = i9 | 0;
 i36 = i10 | 0;
 i10 = HEAP32[i36 >> 2] | 0;
 HEAP32[i36 >> 2] = 0;
 HEAP32[i6 >> 2] = i10;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i19, i35, i9);
 i9 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i6 = i9 + 4 | 0;
   i10 = i6 | 0;
   i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i10 >> 2] = i11;
    break;
   }
   i11 = i6 - 4 | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 1](i11);
  }
 } while (0);
 i9 = HEAP32[i36 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i36 = i9 + 4 | 0;
   i11 = i36 | 0;
   i6 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i11 >> 2] = i6;
    break;
   }
   i6 = i36 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 1](i6);
  }
 } while (0);
 i9 = HEAP32[i37 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i37 = i9 | 0;
   i6 = (HEAP32[i37 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i37 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i35 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i35 = i9 | 0;
   i6 = (HEAP32[i35 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i35 >> 2] = i6;
    break;
   }
  }
 } while (0);
 HEAP32[i39 >> 2] = H_BASE + 344;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i38, i39);
 i39 = i40 | 0;
 i9 = i7 | 0;
 i7 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i39 >> 2] = i7;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i19, i38, i40);
 i40 = HEAP32[i39 >> 2] | 0;
 do {
  if ((i40 | 0) != 0) {
   i39 = i40 + 4 | 0;
   i19 = i39 | 0;
   i7 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i19 >> 2] = i7;
    break;
   }
   i7 = i39 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 1](i7);
  }
 } while (0);
 i40 = HEAP32[i38 >> 2] | 0;
 do {
  if ((i40 | 0) != 0) {
   i38 = i40 | 0;
   i7 = (HEAP32[i38 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i40);
    break;
   } else {
    HEAP32[i38 >> 2] = i7;
    break;
   }
  }
 } while (0);
 HEAP32[i42 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i41, i42);
 i42 = i43 | 0;
 HEAP32[i42 >> 2] = i26;
 i40 = (i26 | 0) == 0;
 if (!i40) {
  i7 = i26 + 4 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i45, i41, i43);
 i43 = HEAP32[i42 >> 2] | 0;
 do {
  if ((i43 | 0) != 0) {
   i42 = i43 + 4 | 0;
   i45 = i42 | 0;
   i7 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i45 >> 2] = i7;
    break;
   }
   i7 = i42 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 1](i7);
  }
 } while (0);
 i43 = HEAP32[i41 >> 2] | 0;
 do {
  if ((i43 | 0) != 0) {
   i41 = i43 | 0;
   i7 = (HEAP32[i41 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i43);
    break;
   } else {
    HEAP32[i41 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i43 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i43 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i44, i21 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i43, i44) | 0;
 i43 = HEAP32[i44 >> 2] | 0;
 do {
  if ((i43 | 0) != 0) {
   i44 = i43 | 0;
   i1 = (HEAP32[i44 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i43);
    break;
   } else {
    HEAP32[i44 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i40) {
   i43 = i26 + 4 | 0;
   i1 = i43 | 0;
   i44 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i44 | 0) != 0) {
    HEAP32[i1 >> 2] = i44;
    break;
   }
   i44 = i43 - 4 | 0;
   if ((i44 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i44 >> 2] | 0) + 4 >> 2] & 1](i44);
  }
 } while (0);
 if ((i21 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 i26 = i21 + 4 | 0;
 i21 = i26 | 0;
 i40 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
 if ((i40 | 0) != 0) {
  HEAP32[i21 >> 2] = i40;
  STACKTOP = i8;
  return;
 }
 i40 = i26 - 4 | 0;
 if ((i40 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i40 >> 2] | 0) + 4 >> 2] & 1](i40);
 STACKTOP = i8;
 return;
}
function __ZN9Inspector34InspectorNetworkFrontendDispatcher13loadingFailedERKN3WTF6StringEdS4_PKb(i1, i2, d3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 224 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 32 | 0;
 i12 = i6 + 40 | 0;
 i13 = i6 + 48 | 0;
 i14 = i6 + 56 | 0;
 i15 = i6 + 64 | 0;
 i16 = i6 + 72 | 0;
 i17 = i6 + 80 | 0;
 i18 = i6 + 88 | 0;
 i19 = i6 + 96 | 0;
 i20 = i6 + 104 | 0;
 i21 = i6 + 112 | 0;
 i22 = i6 + 120 | 0;
 i23 = i6 + 128 | 0;
 i24 = i6 + 136 | 0;
 i25 = i6 + 144 | 0;
 i26 = i6 + 152 | 0;
 i27 = i6 + 160 | 0;
 i28 = i6 + 168 | 0;
 i29 = i6 + 176 | 0;
 i30 = i6 + 184 | 0;
 i31 = i6 + 192 | 0;
 i32 = i6 + 200 | 0;
 i33 = i6 + 208 | 0;
 i34 = i6 + 216 | 0;
 __ZN9Inspector15InspectorObject6createEv(i17);
 i35 = i17 | 0;
 i17 = HEAP32[i35 >> 2] | 0;
 HEAP32[i35 >> 2] = 0;
 i35 = i17 | 0;
 HEAP32[i19 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i18, i19);
 HEAP32[i21 >> 2] = H_BASE + 192;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i20, i21);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i16, i20);
 i21 = i15 | 0;
 i19 = i16 | 0;
 i16 = HEAP32[i19 >> 2] | 0;
 HEAP32[i19 >> 2] = 0;
 HEAP32[i21 >> 2] = i16;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i35, i18, i15);
 i15 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i21 = i15 + 4 | 0;
   i16 = i21 | 0;
   i36 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   if ((i36 | 0) != 0) {
    HEAP32[i16 >> 2] = i36;
    break;
   }
   i36 = i21 - 4 | 0;
   if ((i36 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i36 >> 2] | 0) + 4 >> 2] & 1](i36);
  }
 } while (0);
 i15 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i19 = i15 + 4 | 0;
   i36 = i19 | 0;
   i21 = (HEAP32[i36 >> 2] | 0) - 1 | 0;
   if ((i21 | 0) != 0) {
    HEAP32[i36 >> 2] = i21;
    break;
   }
   i21 = i19 - 4 | 0;
   if ((i21 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 1](i21);
  }
 } while (0);
 i15 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i20 = i15 | 0;
   i21 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
   if ((i21 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i20 >> 2] = i21;
    break;
   }
  }
 } while (0);
 i15 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i18 = i15 | 0;
   i21 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i21 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i18 >> 2] = i21;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i22);
 i15 = i22 | 0;
 i22 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = 0;
 i15 = i22 | 0;
 HEAP32[i24 >> 2] = H_BASE + 560;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i23, i24);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i14, i2);
 i2 = i13 | 0;
 i24 = i14 | 0;
 i14 = HEAP32[i24 >> 2] | 0;
 HEAP32[i24 >> 2] = 0;
 HEAP32[i2 >> 2] = i14;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i15, i23, i13);
 i13 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i2 = i13 + 4 | 0;
   i14 = i2 | 0;
   i21 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i21 | 0) != 0) {
    HEAP32[i14 >> 2] = i21;
    break;
   }
   i21 = i2 - 4 | 0;
   if ((i21 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 1](i21);
  }
 } while (0);
 i13 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i24 = i13 + 4 | 0;
   i21 = i24 | 0;
   i2 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i21 >> 2] = i2;
    break;
   }
   i2 = i24 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i13 = HEAP32[i23 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i23 = i13 | 0;
   i2 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i23 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP32[i26 >> 2] = H_BASE + 472;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i25, i26);
 __ZN9Inspector19InspectorBasicValue6createEd(i12, d3);
 i26 = i11 | 0;
 i13 = i12 | 0;
 i12 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i26 >> 2] = i12;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i15, i25, i11);
 i11 = HEAP32[i26 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i26 = i11 + 4 | 0;
   i12 = i26 | 0;
   i2 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i12 >> 2] = i2;
    break;
   }
   i2 = i26 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i11 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i13 = i11 + 4 | 0;
   i2 = i13 | 0;
   i26 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i26 | 0) != 0) {
    HEAP32[i2 >> 2] = i26;
    break;
   }
   i26 = i13 - 4 | 0;
   if ((i26 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i26 >> 2] | 0) + 4 >> 2] & 1](i26);
  }
 } while (0);
 i11 = HEAP32[i25 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i25 = i11 | 0;
   i26 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
   if ((i26 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i25 >> 2] = i26;
    break;
   }
  }
 } while (0);
 HEAP32[i28 >> 2] = H_BASE + 176;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i27, i28);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i10, i4);
 i4 = i9 | 0;
 i28 = i10 | 0;
 i10 = HEAP32[i28 >> 2] | 0;
 HEAP32[i28 >> 2] = 0;
 HEAP32[i4 >> 2] = i10;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i15, i27, i9);
 i9 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i4 = i9 + 4 | 0;
   i10 = i4 | 0;
   i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i10 >> 2] = i11;
    break;
   }
   i11 = i4 - 4 | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 1](i11);
  }
 } while (0);
 i9 = HEAP32[i28 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i28 = i9 + 4 | 0;
   i11 = i28 | 0;
   i4 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i11 >> 2] = i4;
    break;
   }
   i4 = i28 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
  }
 } while (0);
 i9 = HEAP32[i27 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i27 = i9 | 0;
   i4 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i27 >> 2] = i4;
    break;
   }
  }
 } while (0);
 do {
  if ((i5 | 0) != 0) {
   HEAP32[i30 >> 2] = H_BASE + 160;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i29, i30);
   __ZN9Inspector19InspectorBasicValue6createEb(i8, (HEAP8[i5] & 1) != 0);
   i9 = i7 | 0;
   i4 = i8 | 0;
   i27 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = 0;
   HEAP32[i9 >> 2] = i27;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i15, i29, i7);
   i27 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i27 | 0) != 0) {
     i9 = i27 + 4 | 0;
     i28 = i9 | 0;
     i11 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
     if ((i11 | 0) != 0) {
      HEAP32[i28 >> 2] = i11;
      break;
     }
     i11 = i9 - 4 | 0;
     if ((i11 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 1](i11);
    }
   } while (0);
   i27 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i27 | 0) != 0) {
     i11 = i27 + 4 | 0;
     i9 = i11 | 0;
     i28 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     if ((i28 | 0) != 0) {
      HEAP32[i9 >> 2] = i28;
      break;
     }
     i28 = i11 - 4 | 0;
     if ((i28 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i28 >> 2] | 0) + 4 >> 2] & 1](i28);
    }
   } while (0);
   i27 = HEAP32[i29 >> 2] | 0;
   if ((i27 | 0) == 0) {
    break;
   }
   i4 = i27 | 0;
   i28 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i28 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i27);
    break;
   } else {
    HEAP32[i4 >> 2] = i28;
    break;
   }
  }
 } while (0);
 HEAP32[i32 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i31, i32);
 i32 = i33 | 0;
 HEAP32[i32 >> 2] = i22;
 i29 = (i22 | 0) == 0;
 if (!i29) {
  i7 = i22 + 4 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i35, i31, i33);
 i33 = HEAP32[i32 >> 2] | 0;
 do {
  if ((i33 | 0) != 0) {
   i32 = i33 + 4 | 0;
   i35 = i32 | 0;
   i7 = (HEAP32[i35 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i35 >> 2] = i7;
    break;
   }
   i7 = i32 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 1](i7);
  }
 } while (0);
 i33 = HEAP32[i31 >> 2] | 0;
 do {
  if ((i33 | 0) != 0) {
   i31 = i33 | 0;
   i7 = (HEAP32[i31 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i33);
    break;
   } else {
    HEAP32[i31 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i33 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i33 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i34, i17 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i33, i34) | 0;
 i33 = HEAP32[i34 >> 2] | 0;
 do {
  if ((i33 | 0) != 0) {
   i34 = i33 | 0;
   i1 = (HEAP32[i34 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i33);
    break;
   } else {
    HEAP32[i34 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i29) {
   i33 = i22 + 4 | 0;
   i1 = i33 | 0;
   i34 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i34 | 0) != 0) {
    HEAP32[i1 >> 2] = i34;
    break;
   }
   i34 = i33 - 4 | 0;
   if ((i34 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i34 >> 2] | 0) + 4 >> 2] & 1](i34);
  }
 } while (0);
 if ((i17 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i22 = i17 + 4 | 0;
 i17 = i22 | 0;
 i29 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
 if ((i29 | 0) != 0) {
  HEAP32[i17 >> 2] = i29;
  STACKTOP = i6;
  return;
 }
 i29 = i22 - 4 | 0;
 if ((i29 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i29 >> 2] | 0) + 4 >> 2] & 1](i29);
 STACKTOP = i6;
 return;
}
function __ZN9Inspector30InspectorCSSFrontendDispatcher33registeredNamedFlowContentElementEiRKN3WTF6StringEii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 224 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 32 | 0;
 i12 = i6 + 40 | 0;
 i13 = i6 + 48 | 0;
 i14 = i6 + 56 | 0;
 i15 = i6 + 64 | 0;
 i16 = i6 + 72 | 0;
 i17 = i6 + 80 | 0;
 i18 = i6 + 88 | 0;
 i19 = i6 + 96 | 0;
 i20 = i6 + 104 | 0;
 i21 = i6 + 112 | 0;
 i22 = i6 + 120 | 0;
 i23 = i6 + 128 | 0;
 i24 = i6 + 136 | 0;
 i25 = i6 + 144 | 0;
 i26 = i6 + 152 | 0;
 i27 = i6 + 160 | 0;
 i28 = i6 + 168 | 0;
 i29 = i6 + 176 | 0;
 i30 = i6 + 184 | 0;
 i31 = i6 + 192 | 0;
 i32 = i6 + 200 | 0;
 i33 = i6 + 208 | 0;
 i34 = i6 + 216 | 0;
 __ZN9Inspector15InspectorObject6createEv(i17);
 i35 = i17 | 0;
 i17 = HEAP32[i35 >> 2] | 0;
 HEAP32[i35 >> 2] = 0;
 i35 = i17 | 0;
 HEAP32[i19 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i18, i19);
 HEAP32[i21 >> 2] = H_BASE + 1888;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i20, i21);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i16, i20);
 i21 = i15 | 0;
 i19 = i16 | 0;
 i16 = HEAP32[i19 >> 2] | 0;
 HEAP32[i19 >> 2] = 0;
 HEAP32[i21 >> 2] = i16;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i35, i18, i15);
 i15 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i21 = i15 + 4 | 0;
   i16 = i21 | 0;
   i36 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   if ((i36 | 0) != 0) {
    HEAP32[i16 >> 2] = i36;
    break;
   }
   i36 = i21 - 4 | 0;
   if ((i36 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i36 >> 2] | 0) + 4 >> 2] & 1](i36);
  }
 } while (0);
 i15 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i19 = i15 + 4 | 0;
   i36 = i19 | 0;
   i21 = (HEAP32[i36 >> 2] | 0) - 1 | 0;
   if ((i21 | 0) != 0) {
    HEAP32[i36 >> 2] = i21;
    break;
   }
   i21 = i19 - 4 | 0;
   if ((i21 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 1](i21);
  }
 } while (0);
 i15 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i20 = i15 | 0;
   i21 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
   if ((i21 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i20 >> 2] = i21;
    break;
   }
  }
 } while (0);
 i15 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i18 = i15 | 0;
   i21 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i21 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i18 >> 2] = i21;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i22);
 i15 = i22 | 0;
 i22 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = 0;
 i15 = i22 | 0;
 HEAP32[i24 >> 2] = H_BASE + 2e3;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i23, i24);
 __ZN9Inspector19InspectorBasicValue6createEd(i14, +(i2 | 0));
 i2 = i13 | 0;
 i24 = i14 | 0;
 i14 = HEAP32[i24 >> 2] | 0;
 HEAP32[i24 >> 2] = 0;
 HEAP32[i2 >> 2] = i14;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i15, i23, i13);
 i13 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i2 = i13 + 4 | 0;
   i14 = i2 | 0;
   i21 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i21 | 0) != 0) {
    HEAP32[i14 >> 2] = i21;
    break;
   }
   i21 = i2 - 4 | 0;
   if ((i21 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 1](i21);
  }
 } while (0);
 i13 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i24 = i13 + 4 | 0;
   i21 = i24 | 0;
   i2 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i21 >> 2] = i2;
    break;
   }
   i2 = i24 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i13 = HEAP32[i23 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i23 = i13 | 0;
   i2 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i23 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP32[i26 >> 2] = H_BASE + 1984;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i25, i26);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i12, i3);
 i3 = i11 | 0;
 i26 = i12 | 0;
 i12 = HEAP32[i26 >> 2] | 0;
 HEAP32[i26 >> 2] = 0;
 HEAP32[i3 >> 2] = i12;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i15, i25, i11);
 i11 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i3 = i11 + 4 | 0;
   i12 = i3 | 0;
   i13 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i13 | 0) != 0) {
    HEAP32[i12 >> 2] = i13;
    break;
   }
   i13 = i3 - 4 | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 1](i13);
  }
 } while (0);
 i11 = HEAP32[i26 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i26 = i11 + 4 | 0;
   i13 = i26 | 0;
   i3 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i13 >> 2] = i3;
    break;
   }
   i3 = i26 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 1](i3);
  }
 } while (0);
 i11 = HEAP32[i25 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i25 = i11 | 0;
   i3 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i25 >> 2] = i3;
    break;
   }
  }
 } while (0);
 HEAP32[i28 >> 2] = H_BASE + 1872;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i27, i28);
 __ZN9Inspector19InspectorBasicValue6createEd(i10, +(i4 | 0));
 i4 = i9 | 0;
 i28 = i10 | 0;
 i10 = HEAP32[i28 >> 2] | 0;
 HEAP32[i28 >> 2] = 0;
 HEAP32[i4 >> 2] = i10;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i15, i27, i9);
 i9 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i4 = i9 + 4 | 0;
   i10 = i4 | 0;
   i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i10 >> 2] = i11;
    break;
   }
   i11 = i4 - 4 | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 1](i11);
  }
 } while (0);
 i9 = HEAP32[i28 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i28 = i9 + 4 | 0;
   i11 = i28 | 0;
   i4 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i11 >> 2] = i4;
    break;
   }
   i4 = i28 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
  }
 } while (0);
 i9 = HEAP32[i27 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i27 = i9 | 0;
   i4 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i27 >> 2] = i4;
    break;
   }
  }
 } while (0);
 HEAP32[i30 >> 2] = H_BASE + 1840;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i29, i30);
 __ZN9Inspector19InspectorBasicValue6createEd(i8, +(i5 | 0));
 i5 = i7 | 0;
 i30 = i8 | 0;
 i8 = HEAP32[i30 >> 2] | 0;
 HEAP32[i30 >> 2] = 0;
 HEAP32[i5 >> 2] = i8;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i15, i29, i7);
 i7 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i5 = i7 + 4 | 0;
   i15 = i5 | 0;
   i8 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i15 >> 2] = i8;
    break;
   }
   i8 = i5 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 1](i8);
  }
 } while (0);
 i7 = HEAP32[i30 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i30 = i7 + 4 | 0;
   i8 = i30 | 0;
   i5 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i8 >> 2] = i5;
    break;
   }
   i5 = i30 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 1](i5);
  }
 } while (0);
 i7 = HEAP32[i29 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i29 = i7 | 0;
   i5 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i29 >> 2] = i5;
    break;
   }
  }
 } while (0);
 HEAP32[i32 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i31, i32);
 i32 = i33 | 0;
 HEAP32[i32 >> 2] = i22;
 i7 = (i22 | 0) == 0;
 if (!i7) {
  i5 = i22 + 4 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i35, i31, i33);
 i33 = HEAP32[i32 >> 2] | 0;
 do {
  if ((i33 | 0) != 0) {
   i32 = i33 + 4 | 0;
   i35 = i32 | 0;
   i5 = (HEAP32[i35 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i35 >> 2] = i5;
    break;
   }
   i5 = i32 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 1](i5);
  }
 } while (0);
 i33 = HEAP32[i31 >> 2] | 0;
 do {
  if ((i33 | 0) != 0) {
   i31 = i33 | 0;
   i5 = (HEAP32[i31 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i33);
    break;
   } else {
    HEAP32[i31 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i33 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i33 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i34, i17 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i33, i34) | 0;
 i33 = HEAP32[i34 >> 2] | 0;
 do {
  if ((i33 | 0) != 0) {
   i34 = i33 | 0;
   i1 = (HEAP32[i34 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i33);
    break;
   } else {
    HEAP32[i34 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i7) {
   i33 = i22 + 4 | 0;
   i1 = i33 | 0;
   i34 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i34 | 0) != 0) {
    HEAP32[i1 >> 2] = i34;
    break;
   }
   i34 = i33 - 4 | 0;
   if ((i34 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i34 >> 2] | 0) + 4 >> 2] & 1](i34);
  }
 } while (0);
 if ((i17 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i22 = i17 + 4 | 0;
 i17 = i22 | 0;
 i7 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
 if ((i7 | 0) != 0) {
  HEAP32[i17 >> 2] = i7;
  STACKTOP = i6;
  return;
 }
 i7 = i22 - 4 | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 1](i7);
 STACKTOP = i6;
 return;
}
function __ZN9Inspector34InspectorNetworkFrontendDispatcher12dataReceivedERKN3WTF6StringEdii(i1, i2, d3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 224 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 32 | 0;
 i12 = i6 + 40 | 0;
 i13 = i6 + 48 | 0;
 i14 = i6 + 56 | 0;
 i15 = i6 + 64 | 0;
 i16 = i6 + 72 | 0;
 i17 = i6 + 80 | 0;
 i18 = i6 + 88 | 0;
 i19 = i6 + 96 | 0;
 i20 = i6 + 104 | 0;
 i21 = i6 + 112 | 0;
 i22 = i6 + 120 | 0;
 i23 = i6 + 128 | 0;
 i24 = i6 + 136 | 0;
 i25 = i6 + 144 | 0;
 i26 = i6 + 152 | 0;
 i27 = i6 + 160 | 0;
 i28 = i6 + 168 | 0;
 i29 = i6 + 176 | 0;
 i30 = i6 + 184 | 0;
 i31 = i6 + 192 | 0;
 i32 = i6 + 200 | 0;
 i33 = i6 + 208 | 0;
 i34 = i6 + 216 | 0;
 __ZN9Inspector15InspectorObject6createEv(i17);
 i35 = i17 | 0;
 i17 = HEAP32[i35 >> 2] | 0;
 HEAP32[i35 >> 2] = 0;
 i35 = i17 | 0;
 HEAP32[i19 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i18, i19);
 HEAP32[i21 >> 2] = H_BASE + 320;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i20, i21);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i16, i20);
 i21 = i15 | 0;
 i19 = i16 | 0;
 i16 = HEAP32[i19 >> 2] | 0;
 HEAP32[i19 >> 2] = 0;
 HEAP32[i21 >> 2] = i16;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i35, i18, i15);
 i15 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i21 = i15 + 4 | 0;
   i16 = i21 | 0;
   i36 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   if ((i36 | 0) != 0) {
    HEAP32[i16 >> 2] = i36;
    break;
   }
   i36 = i21 - 4 | 0;
   if ((i36 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i36 >> 2] | 0) + 4 >> 2] & 1](i36);
  }
 } while (0);
 i15 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i19 = i15 + 4 | 0;
   i36 = i19 | 0;
   i21 = (HEAP32[i36 >> 2] | 0) - 1 | 0;
   if ((i21 | 0) != 0) {
    HEAP32[i36 >> 2] = i21;
    break;
   }
   i21 = i19 - 4 | 0;
   if ((i21 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 1](i21);
  }
 } while (0);
 i15 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i20 = i15 | 0;
   i21 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
   if ((i21 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i20 >> 2] = i21;
    break;
   }
  }
 } while (0);
 i15 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i18 = i15 | 0;
   i21 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i21 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i18 >> 2] = i21;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i22);
 i15 = i22 | 0;
 i22 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = 0;
 i15 = i22 | 0;
 HEAP32[i24 >> 2] = H_BASE + 560;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i23, i24);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i14, i2);
 i2 = i13 | 0;
 i24 = i14 | 0;
 i14 = HEAP32[i24 >> 2] | 0;
 HEAP32[i24 >> 2] = 0;
 HEAP32[i2 >> 2] = i14;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i15, i23, i13);
 i13 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i2 = i13 + 4 | 0;
   i14 = i2 | 0;
   i21 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i21 | 0) != 0) {
    HEAP32[i14 >> 2] = i21;
    break;
   }
   i21 = i2 - 4 | 0;
   if ((i21 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 1](i21);
  }
 } while (0);
 i13 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i24 = i13 + 4 | 0;
   i21 = i24 | 0;
   i2 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i21 >> 2] = i2;
    break;
   }
   i2 = i24 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i13 = HEAP32[i23 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i23 = i13 | 0;
   i2 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i23 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP32[i26 >> 2] = H_BASE + 472;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i25, i26);
 __ZN9Inspector19InspectorBasicValue6createEd(i12, d3);
 i26 = i11 | 0;
 i13 = i12 | 0;
 i12 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i26 >> 2] = i12;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i15, i25, i11);
 i11 = HEAP32[i26 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i26 = i11 + 4 | 0;
   i12 = i26 | 0;
   i2 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i12 >> 2] = i2;
    break;
   }
   i2 = i26 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i11 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i13 = i11 + 4 | 0;
   i2 = i13 | 0;
   i26 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i26 | 0) != 0) {
    HEAP32[i2 >> 2] = i26;
    break;
   }
   i26 = i13 - 4 | 0;
   if ((i26 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i26 >> 2] | 0) + 4 >> 2] & 1](i26);
  }
 } while (0);
 i11 = HEAP32[i25 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i25 = i11 | 0;
   i26 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
   if ((i26 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i25 >> 2] = i26;
    break;
   }
  }
 } while (0);
 HEAP32[i28 >> 2] = H_BASE + 304;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i27, i28);
 __ZN9Inspector19InspectorBasicValue6createEd(i10, +(i4 | 0));
 i4 = i9 | 0;
 i28 = i10 | 0;
 i10 = HEAP32[i28 >> 2] | 0;
 HEAP32[i28 >> 2] = 0;
 HEAP32[i4 >> 2] = i10;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i15, i27, i9);
 i9 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i4 = i9 + 4 | 0;
   i10 = i4 | 0;
   i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i10 >> 2] = i11;
    break;
   }
   i11 = i4 - 4 | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 1](i11);
  }
 } while (0);
 i9 = HEAP32[i28 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i28 = i9 + 4 | 0;
   i11 = i28 | 0;
   i4 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i11 >> 2] = i4;
    break;
   }
   i4 = i28 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
  }
 } while (0);
 i9 = HEAP32[i27 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i27 = i9 | 0;
   i4 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i27 >> 2] = i4;
    break;
   }
  }
 } while (0);
 HEAP32[i30 >> 2] = H_BASE + 256;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i29, i30);
 __ZN9Inspector19InspectorBasicValue6createEd(i8, +(i5 | 0));
 i5 = i7 | 0;
 i30 = i8 | 0;
 i8 = HEAP32[i30 >> 2] | 0;
 HEAP32[i30 >> 2] = 0;
 HEAP32[i5 >> 2] = i8;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i15, i29, i7);
 i7 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i5 = i7 + 4 | 0;
   i15 = i5 | 0;
   i8 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i15 >> 2] = i8;
    break;
   }
   i8 = i5 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 1](i8);
  }
 } while (0);
 i7 = HEAP32[i30 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i30 = i7 + 4 | 0;
   i8 = i30 | 0;
   i5 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i8 >> 2] = i5;
    break;
   }
   i5 = i30 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 1](i5);
  }
 } while (0);
 i7 = HEAP32[i29 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i29 = i7 | 0;
   i5 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i29 >> 2] = i5;
    break;
   }
  }
 } while (0);
 HEAP32[i32 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i31, i32);
 i32 = i33 | 0;
 HEAP32[i32 >> 2] = i22;
 i7 = (i22 | 0) == 0;
 if (!i7) {
  i5 = i22 + 4 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i35, i31, i33);
 i33 = HEAP32[i32 >> 2] | 0;
 do {
  if ((i33 | 0) != 0) {
   i32 = i33 + 4 | 0;
   i35 = i32 | 0;
   i5 = (HEAP32[i35 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i35 >> 2] = i5;
    break;
   }
   i5 = i32 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 1](i5);
  }
 } while (0);
 i33 = HEAP32[i31 >> 2] | 0;
 do {
  if ((i33 | 0) != 0) {
   i31 = i33 | 0;
   i5 = (HEAP32[i31 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i33);
    break;
   } else {
    HEAP32[i31 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i33 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i33 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i34, i17 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i33, i34) | 0;
 i33 = HEAP32[i34 >> 2] | 0;
 do {
  if ((i33 | 0) != 0) {
   i34 = i33 | 0;
   i1 = (HEAP32[i34 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i33);
    break;
   } else {
    HEAP32[i34 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i7) {
   i33 = i22 + 4 | 0;
   i1 = i33 | 0;
   i34 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i34 | 0) != 0) {
    HEAP32[i1 >> 2] = i34;
    break;
   }
   i34 = i33 - 4 | 0;
   if ((i34 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i34 >> 2] | 0) + 4 >> 2] & 1](i34);
  }
 } while (0);
 if ((i17 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i22 = i17 + 4 | 0;
 i17 = i22 | 0;
 i7 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
 if ((i7 | 0) != 0) {
  HEAP32[i17 >> 2] = i7;
  STACKTOP = i6;
  return;
 }
 i7 = i22 - 4 | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 1](i7);
 STACKTOP = i6;
 return;
}
function __ZN9Inspector37InspectorDOMStorageFrontendDispatcher21domStorageItemUpdatedEN3WTF10PassRefPtrINS_11TypeBuilder10DOMStorage9StorageIdEEERKNS1_6StringES9_S9_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 216 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 32 | 0;
 i12 = i6 + 40 | 0;
 i13 = i6 + 48 | 0;
 i14 = i6 + 56 | 0;
 i15 = i6 + 64 | 0;
 i16 = i6 + 72 | 0;
 i17 = i6 + 80 | 0;
 i18 = i6 + 88 | 0;
 i19 = i6 + 96 | 0;
 i20 = i6 + 104 | 0;
 i21 = i6 + 112 | 0;
 i22 = i6 + 120 | 0;
 i23 = i6 + 128 | 0;
 i24 = i6 + 136 | 0;
 i25 = i6 + 144 | 0;
 i26 = i6 + 152 | 0;
 i27 = i6 + 160 | 0;
 i28 = i6 + 168 | 0;
 i29 = i6 + 176 | 0;
 i30 = i6 + 184 | 0;
 i31 = i6 + 192 | 0;
 i32 = i6 + 200 | 0;
 i33 = i6 + 208 | 0;
 __ZN9Inspector15InspectorObject6createEv(i15);
 i34 = i15 | 0;
 i15 = HEAP32[i34 >> 2] | 0;
 HEAP32[i34 >> 2] = 0;
 i34 = i15 | 0;
 HEAP32[i17 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i16, i17);
 HEAP32[i19 >> 2] = H_BASE + 928;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i18, i19);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i14, i18);
 i19 = i13 | 0;
 i17 = i14 | 0;
 i14 = HEAP32[i17 >> 2] | 0;
 HEAP32[i17 >> 2] = 0;
 HEAP32[i19 >> 2] = i14;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i34, i16, i13);
 i13 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i19 = i13 + 4 | 0;
   i14 = i19 | 0;
   i35 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i35 | 0) != 0) {
    HEAP32[i14 >> 2] = i35;
    break;
   }
   i35 = i19 - 4 | 0;
   if ((i35 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i35 >> 2] | 0) + 4 >> 2] & 1](i35);
  }
 } while (0);
 i13 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i17 = i13 + 4 | 0;
   i35 = i17 | 0;
   i19 = (HEAP32[i35 >> 2] | 0) - 1 | 0;
   if ((i19 | 0) != 0) {
    HEAP32[i35 >> 2] = i19;
    break;
   }
   i19 = i17 - 4 | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 1](i19);
  }
 } while (0);
 i13 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i18 = i13 | 0;
   i19 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i19 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i18 >> 2] = i19;
    break;
   }
  }
 } while (0);
 i13 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i16 = i13 | 0;
   i19 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i19 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i16 >> 2] = i19;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i20);
 i13 = i20 | 0;
 i20 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 i13 = i20 | 0;
 HEAP32[i22 >> 2] = H_BASE + 1104;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i21, i22);
 i22 = i23 | 0;
 i19 = i2 | 0;
 i2 = HEAP32[i19 >> 2] | 0;
 HEAP32[i19 >> 2] = 0;
 HEAP32[i22 >> 2] = i2;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i13, i21, i23);
 i23 = HEAP32[i22 >> 2] | 0;
 do {
  if ((i23 | 0) != 0) {
   i22 = i23 + 4 | 0;
   i2 = i22 | 0;
   i19 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i19 | 0) != 0) {
    HEAP32[i2 >> 2] = i19;
    break;
   }
   i19 = i22 - 4 | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 1](i19);
  }
 } while (0);
 i23 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i23 | 0) != 0) {
   i21 = i23 | 0;
   i19 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
   if ((i19 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i23);
    break;
   } else {
    HEAP32[i21 >> 2] = i19;
    break;
   }
  }
 } while (0);
 HEAP32[i25 >> 2] = H_BASE + 1056;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i24, i25);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i12, i3);
 i3 = i11 | 0;
 i25 = i12 | 0;
 i12 = HEAP32[i25 >> 2] | 0;
 HEAP32[i25 >> 2] = 0;
 HEAP32[i3 >> 2] = i12;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i13, i24, i11);
 i11 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i3 = i11 + 4 | 0;
   i12 = i3 | 0;
   i23 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i23 | 0) != 0) {
    HEAP32[i12 >> 2] = i23;
    break;
   }
   i23 = i3 - 4 | 0;
   if ((i23 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i23 >> 2] | 0) + 4 >> 2] & 1](i23);
  }
 } while (0);
 i11 = HEAP32[i25 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i25 = i11 + 4 | 0;
   i23 = i25 | 0;
   i3 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i23 >> 2] = i3;
    break;
   }
   i3 = i25 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 1](i3);
  }
 } while (0);
 i11 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i24 = i11 | 0;
   i3 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i24 >> 2] = i3;
    break;
   }
  }
 } while (0);
 HEAP32[i27 >> 2] = H_BASE + 912;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i26, i27);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i10, i4);
 i4 = i9 | 0;
 i27 = i10 | 0;
 i10 = HEAP32[i27 >> 2] | 0;
 HEAP32[i27 >> 2] = 0;
 HEAP32[i4 >> 2] = i10;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i13, i26, i9);
 i9 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i4 = i9 + 4 | 0;
   i10 = i4 | 0;
   i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i10 >> 2] = i11;
    break;
   }
   i11 = i4 - 4 | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 1](i11);
  }
 } while (0);
 i9 = HEAP32[i27 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i27 = i9 + 4 | 0;
   i11 = i27 | 0;
   i4 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i11 >> 2] = i4;
    break;
   }
   i4 = i27 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
  }
 } while (0);
 i9 = HEAP32[i26 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i26 = i9 | 0;
   i4 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i26 >> 2] = i4;
    break;
   }
  }
 } while (0);
 HEAP32[i29 >> 2] = H_BASE + 968;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i28, i29);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i8, i5);
 i5 = i7 | 0;
 i29 = i8 | 0;
 i8 = HEAP32[i29 >> 2] | 0;
 HEAP32[i29 >> 2] = 0;
 HEAP32[i5 >> 2] = i8;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i13, i28, i7);
 i7 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i5 = i7 + 4 | 0;
   i13 = i5 | 0;
   i8 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i13 >> 2] = i8;
    break;
   }
   i8 = i5 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 1](i8);
  }
 } while (0);
 i7 = HEAP32[i29 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i29 = i7 + 4 | 0;
   i8 = i29 | 0;
   i5 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i8 >> 2] = i5;
    break;
   }
   i5 = i29 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 1](i5);
  }
 } while (0);
 i7 = HEAP32[i28 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i28 = i7 | 0;
   i5 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i28 >> 2] = i5;
    break;
   }
  }
 } while (0);
 HEAP32[i31 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i30, i31);
 i31 = i32 | 0;
 HEAP32[i31 >> 2] = i20;
 i7 = (i20 | 0) == 0;
 if (!i7) {
  i5 = i20 + 4 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i34, i30, i32);
 i32 = HEAP32[i31 >> 2] | 0;
 do {
  if ((i32 | 0) != 0) {
   i31 = i32 + 4 | 0;
   i34 = i31 | 0;
   i5 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i34 >> 2] = i5;
    break;
   }
   i5 = i31 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 1](i5);
  }
 } while (0);
 i32 = HEAP32[i30 >> 2] | 0;
 do {
  if ((i32 | 0) != 0) {
   i30 = i32 | 0;
   i5 = (HEAP32[i30 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i32);
    break;
   } else {
    HEAP32[i30 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i32 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i32 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i33, i15 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i32, i33) | 0;
 i32 = HEAP32[i33 >> 2] | 0;
 do {
  if ((i32 | 0) != 0) {
   i33 = i32 | 0;
   i1 = (HEAP32[i33 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i32);
    break;
   } else {
    HEAP32[i33 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i7) {
   i32 = i20 + 4 | 0;
   i1 = i32 | 0;
   i33 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i33 | 0) != 0) {
    HEAP32[i1 >> 2] = i33;
    break;
   }
   i33 = i32 - 4 | 0;
   if ((i33 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i33 >> 2] | 0) + 4 >> 2] & 1](i33);
  }
 } while (0);
 if ((i15 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i20 = i15 + 4 | 0;
 i15 = i20 | 0;
 i7 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
 if ((i7 | 0) != 0) {
  HEAP32[i15 >> 2] = i7;
  STACKTOP = i6;
  return;
 }
 i7 = i20 - 4 | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 1](i7);
 STACKTOP = i6;
 return;
}
function __ZN9Inspector34InspectorNetworkFrontendDispatcher15loadingFinishedERKN3WTF6StringEdPS3_(i1, i2, d3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 192 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i5 + 56 | 0;
 i14 = i5 + 64 | 0;
 i15 = i5 + 72 | 0;
 i16 = i5 + 80 | 0;
 i17 = i5 + 88 | 0;
 i18 = i5 + 96 | 0;
 i19 = i5 + 104 | 0;
 i20 = i5 + 112 | 0;
 i21 = i5 + 120 | 0;
 i22 = i5 + 128 | 0;
 i23 = i5 + 136 | 0;
 i24 = i5 + 144 | 0;
 i25 = i5 + 152 | 0;
 i26 = i5 + 160 | 0;
 i27 = i5 + 168 | 0;
 i28 = i5 + 176 | 0;
 i29 = i5 + 184 | 0;
 __ZN9Inspector15InspectorObject6createEv(i14);
 i30 = i14 | 0;
 i14 = HEAP32[i30 >> 2] | 0;
 HEAP32[i30 >> 2] = 0;
 i30 = i14 | 0;
 HEAP32[i16 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i15, i16);
 HEAP32[i18 >> 2] = H_BASE + 232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i17, i18);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i13, i17);
 i18 = i12 | 0;
 i16 = i13 | 0;
 i13 = HEAP32[i16 >> 2] | 0;
 HEAP32[i16 >> 2] = 0;
 HEAP32[i18 >> 2] = i13;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i30, i15, i12);
 i12 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i18 = i12 + 4 | 0;
   i13 = i18 | 0;
   i31 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i31 | 0) != 0) {
    HEAP32[i13 >> 2] = i31;
    break;
   }
   i31 = i18 - 4 | 0;
   if ((i31 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i31 >> 2] | 0) + 4 >> 2] & 1](i31);
  }
 } while (0);
 i12 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i16 = i12 + 4 | 0;
   i31 = i16 | 0;
   i18 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
   if ((i18 | 0) != 0) {
    HEAP32[i31 >> 2] = i18;
    break;
   }
   i18 = i16 - 4 | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 1](i18);
  }
 } while (0);
 i12 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i17 = i12 | 0;
   i18 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i18 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i17 >> 2] = i18;
    break;
   }
  }
 } while (0);
 i12 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i15 = i12 | 0;
   i18 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i18 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i15 >> 2] = i18;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i19);
 i12 = i19 | 0;
 i19 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = 0;
 i12 = i19 | 0;
 HEAP32[i21 >> 2] = H_BASE + 560;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i20, i21);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i11, i2);
 i2 = i10 | 0;
 i21 = i11 | 0;
 i11 = HEAP32[i21 >> 2] | 0;
 HEAP32[i21 >> 2] = 0;
 HEAP32[i2 >> 2] = i11;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i12, i20, i10);
 i10 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i2 = i10 + 4 | 0;
   i11 = i2 | 0;
   i18 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i18 | 0) != 0) {
    HEAP32[i11 >> 2] = i18;
    break;
   }
   i18 = i2 - 4 | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 1](i18);
  }
 } while (0);
 i10 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i21 = i10 + 4 | 0;
   i18 = i21 | 0;
   i2 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i18 >> 2] = i2;
    break;
   }
   i2 = i21 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i10 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i20 = i10 | 0;
   i2 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i20 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP32[i23 >> 2] = H_BASE + 472;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i22, i23);
 __ZN9Inspector19InspectorBasicValue6createEd(i9, d3);
 i23 = i8 | 0;
 i10 = i9 | 0;
 i9 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i23 >> 2] = i9;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i12, i22, i8);
 i8 = HEAP32[i23 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i23 = i8 + 4 | 0;
   i9 = i23 | 0;
   i2 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i9 >> 2] = i2;
    break;
   }
   i2 = i23 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i8 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i10 = i8 + 4 | 0;
   i2 = i10 | 0;
   i23 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i23 | 0) != 0) {
    HEAP32[i2 >> 2] = i23;
    break;
   }
   i23 = i10 - 4 | 0;
   if ((i23 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i23 >> 2] | 0) + 4 >> 2] & 1](i23);
  }
 } while (0);
 i8 = HEAP32[i22 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i22 = i8 | 0;
   i23 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
   if ((i23 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i22 >> 2] = i23;
    break;
   }
  }
 } while (0);
 do {
  if ((i4 | 0) != 0) {
   HEAP32[i25 >> 2] = H_BASE + 216;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i24, i25);
   __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i7, i4);
   i8 = i6 | 0;
   i23 = i7 | 0;
   i22 = HEAP32[i23 >> 2] | 0;
   HEAP32[i23 >> 2] = 0;
   HEAP32[i8 >> 2] = i22;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i12, i24, i6);
   i22 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i22 | 0) != 0) {
     i8 = i22 + 4 | 0;
     i10 = i8 | 0;
     i2 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
     if ((i2 | 0) != 0) {
      HEAP32[i10 >> 2] = i2;
      break;
     }
     i2 = i8 - 4 | 0;
     if ((i2 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
    }
   } while (0);
   i22 = HEAP32[i23 >> 2] | 0;
   do {
    if ((i22 | 0) != 0) {
     i2 = i22 + 4 | 0;
     i8 = i2 | 0;
     i10 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i10 | 0) != 0) {
      HEAP32[i8 >> 2] = i10;
      break;
     }
     i10 = i2 - 4 | 0;
     if ((i10 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 1](i10);
    }
   } while (0);
   i22 = HEAP32[i24 >> 2] | 0;
   if ((i22 | 0) == 0) {
    break;
   }
   i23 = i22 | 0;
   i10 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i22);
    break;
   } else {
    HEAP32[i23 >> 2] = i10;
    break;
   }
  }
 } while (0);
 HEAP32[i27 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i26, i27);
 i27 = i28 | 0;
 HEAP32[i27 >> 2] = i19;
 i24 = (i19 | 0) == 0;
 if (!i24) {
  i6 = i19 + 4 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i30, i26, i28);
 i28 = HEAP32[i27 >> 2] | 0;
 do {
  if ((i28 | 0) != 0) {
   i27 = i28 + 4 | 0;
   i30 = i27 | 0;
   i6 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i30 >> 2] = i6;
    break;
   }
   i6 = i27 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 1](i6);
  }
 } while (0);
 i28 = HEAP32[i26 >> 2] | 0;
 do {
  if ((i28 | 0) != 0) {
   i26 = i28 | 0;
   i6 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i28);
    break;
   } else {
    HEAP32[i26 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i28 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i28 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i29, i14 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i28, i29) | 0;
 i28 = HEAP32[i29 >> 2] | 0;
 do {
  if ((i28 | 0) != 0) {
   i29 = i28 | 0;
   i1 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i28);
    break;
   } else {
    HEAP32[i29 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i24) {
   i28 = i19 + 4 | 0;
   i1 = i28 | 0;
   i29 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i29 | 0) != 0) {
    HEAP32[i1 >> 2] = i29;
    break;
   }
   i29 = i28 - 4 | 0;
   if ((i29 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i29 >> 2] | 0) + 4 >> 2] & 1](i29);
  }
 } while (0);
 if ((i14 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i19 = i14 + 4 | 0;
 i14 = i19 | 0;
 i24 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
 if ((i24 | 0) != 0) {
  HEAP32[i14 >> 2] = i24;
  STACKTOP = i5;
  return;
 }
 i24 = i19 - 4 | 0;
 if ((i24 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i24 >> 2] | 0) + 4 >> 2] & 1](i24);
 STACKTOP = i5;
 return;
}
function __ZN9Inspector43InspectorApplicationCacheFrontendDispatcher29applicationCacheStatusUpdatedERKN3WTF6StringES4_i(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 192 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i5 + 56 | 0;
 i14 = i5 + 64 | 0;
 i15 = i5 + 72 | 0;
 i16 = i5 + 80 | 0;
 i17 = i5 + 88 | 0;
 i18 = i5 + 96 | 0;
 i19 = i5 + 104 | 0;
 i20 = i5 + 112 | 0;
 i21 = i5 + 120 | 0;
 i22 = i5 + 128 | 0;
 i23 = i5 + 136 | 0;
 i24 = i5 + 144 | 0;
 i25 = i5 + 152 | 0;
 i26 = i5 + 160 | 0;
 i27 = i5 + 168 | 0;
 i28 = i5 + 176 | 0;
 i29 = i5 + 184 | 0;
 __ZN9Inspector15InspectorObject6createEv(i14);
 i30 = i14 | 0;
 i14 = HEAP32[i30 >> 2] | 0;
 HEAP32[i30 >> 2] = 0;
 i30 = i14 | 0;
 HEAP32[i16 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i15, i16);
 HEAP32[i18 >> 2] = H_BASE + 3032;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i17, i18);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i13, i17);
 i18 = i12 | 0;
 i16 = i13 | 0;
 i13 = HEAP32[i16 >> 2] | 0;
 HEAP32[i16 >> 2] = 0;
 HEAP32[i18 >> 2] = i13;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i30, i15, i12);
 i12 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i18 = i12 + 4 | 0;
   i13 = i18 | 0;
   i31 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i31 | 0) != 0) {
    HEAP32[i13 >> 2] = i31;
    break;
   }
   i31 = i18 - 4 | 0;
   if ((i31 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i31 >> 2] | 0) + 4 >> 2] & 1](i31);
  }
 } while (0);
 i12 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i16 = i12 + 4 | 0;
   i31 = i16 | 0;
   i18 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
   if ((i18 | 0) != 0) {
    HEAP32[i31 >> 2] = i18;
    break;
   }
   i18 = i16 - 4 | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 1](i18);
  }
 } while (0);
 i12 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i17 = i12 | 0;
   i18 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i18 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i17 >> 2] = i18;
    break;
   }
  }
 } while (0);
 i12 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i15 = i12 | 0;
   i18 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i18 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i15 >> 2] = i18;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i19);
 i12 = i19 | 0;
 i19 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = 0;
 i12 = i19 | 0;
 HEAP32[i21 >> 2] = H_BASE + 1864;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i20, i21);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i11, i2);
 i2 = i10 | 0;
 i21 = i11 | 0;
 i11 = HEAP32[i21 >> 2] | 0;
 HEAP32[i21 >> 2] = 0;
 HEAP32[i2 >> 2] = i11;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i12, i20, i10);
 i10 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i2 = i10 + 4 | 0;
   i11 = i2 | 0;
   i18 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i18 | 0) != 0) {
    HEAP32[i11 >> 2] = i18;
    break;
   }
   i18 = i2 - 4 | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 1](i18);
  }
 } while (0);
 i10 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i21 = i10 + 4 | 0;
   i18 = i21 | 0;
   i2 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i18 >> 2] = i2;
    break;
   }
   i2 = i21 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i10 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i20 = i10 | 0;
   i2 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i20 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP32[i23 >> 2] = H_BASE + 1616;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i22, i23);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i9, i3);
 i3 = i8 | 0;
 i23 = i9 | 0;
 i9 = HEAP32[i23 >> 2] | 0;
 HEAP32[i23 >> 2] = 0;
 HEAP32[i3 >> 2] = i9;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i12, i22, i8);
 i8 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i3 = i8 + 4 | 0;
   i9 = i3 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i9 >> 2] = i10;
    break;
   }
   i10 = i3 - 4 | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 1](i10);
  }
 } while (0);
 i8 = HEAP32[i23 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i23 = i8 + 4 | 0;
   i10 = i23 | 0;
   i3 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i10 >> 2] = i3;
    break;
   }
   i3 = i23 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 1](i3);
  }
 } while (0);
 i8 = HEAP32[i22 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i22 = i8 | 0;
   i3 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i22 >> 2] = i3;
    break;
   }
  }
 } while (0);
 HEAP32[i25 >> 2] = H_BASE + 1432;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i24, i25);
 __ZN9Inspector19InspectorBasicValue6createEd(i7, +(i4 | 0));
 i4 = i6 | 0;
 i25 = i7 | 0;
 i7 = HEAP32[i25 >> 2] | 0;
 HEAP32[i25 >> 2] = 0;
 HEAP32[i4 >> 2] = i7;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i12, i24, i6);
 i6 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i4 = i6 + 4 | 0;
   i12 = i4 | 0;
   i7 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i12 >> 2] = i7;
    break;
   }
   i7 = i4 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 1](i7);
  }
 } while (0);
 i6 = HEAP32[i25 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i25 = i6 + 4 | 0;
   i7 = i25 | 0;
   i4 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i7 >> 2] = i4;
    break;
   }
   i4 = i25 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
  }
 } while (0);
 i6 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i24 = i6 | 0;
   i4 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i24 >> 2] = i4;
    break;
   }
  }
 } while (0);
 HEAP32[i27 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i26, i27);
 i27 = i28 | 0;
 HEAP32[i27 >> 2] = i19;
 i6 = (i19 | 0) == 0;
 if (!i6) {
  i4 = i19 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i30, i26, i28);
 i28 = HEAP32[i27 >> 2] | 0;
 do {
  if ((i28 | 0) != 0) {
   i27 = i28 + 4 | 0;
   i30 = i27 | 0;
   i4 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i30 >> 2] = i4;
    break;
   }
   i4 = i27 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
  }
 } while (0);
 i28 = HEAP32[i26 >> 2] | 0;
 do {
  if ((i28 | 0) != 0) {
   i26 = i28 | 0;
   i4 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i28);
    break;
   } else {
    HEAP32[i26 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i28 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i28 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i29, i14 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i28, i29) | 0;
 i28 = HEAP32[i29 >> 2] | 0;
 do {
  if ((i28 | 0) != 0) {
   i29 = i28 | 0;
   i1 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i28);
    break;
   } else {
    HEAP32[i29 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i6) {
   i28 = i19 + 4 | 0;
   i1 = i28 | 0;
   i29 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i29 | 0) != 0) {
    HEAP32[i1 >> 2] = i29;
    break;
   }
   i29 = i28 - 4 | 0;
   if ((i29 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i29 >> 2] | 0) + 4 >> 2] & 1](i29);
  }
 } while (0);
 if ((i14 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i19 = i14 + 4 | 0;
 i14 = i19 | 0;
 i6 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i14 >> 2] = i6;
  STACKTOP = i5;
  return;
 }
 i6 = i19 - 4 | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 1](i6);
 STACKTOP = i5;
 return;
}
function __ZN9Inspector30InspectorCSSFrontendDispatcher35unregisteredNamedFlowContentElementEiRKN3WTF6StringEi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 192 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i5 + 56 | 0;
 i14 = i5 + 64 | 0;
 i15 = i5 + 72 | 0;
 i16 = i5 + 80 | 0;
 i17 = i5 + 88 | 0;
 i18 = i5 + 96 | 0;
 i19 = i5 + 104 | 0;
 i20 = i5 + 112 | 0;
 i21 = i5 + 120 | 0;
 i22 = i5 + 128 | 0;
 i23 = i5 + 136 | 0;
 i24 = i5 + 144 | 0;
 i25 = i5 + 152 | 0;
 i26 = i5 + 160 | 0;
 i27 = i5 + 168 | 0;
 i28 = i5 + 176 | 0;
 i29 = i5 + 184 | 0;
 __ZN9Inspector15InspectorObject6createEv(i14);
 i30 = i14 | 0;
 i14 = HEAP32[i30 >> 2] | 0;
 HEAP32[i30 >> 2] = 0;
 i30 = i14 | 0;
 HEAP32[i16 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i15, i16);
 HEAP32[i18 >> 2] = H_BASE + 1800;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i17, i18);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i13, i17);
 i18 = i12 | 0;
 i16 = i13 | 0;
 i13 = HEAP32[i16 >> 2] | 0;
 HEAP32[i16 >> 2] = 0;
 HEAP32[i18 >> 2] = i13;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i30, i15, i12);
 i12 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i18 = i12 + 4 | 0;
   i13 = i18 | 0;
   i31 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i31 | 0) != 0) {
    HEAP32[i13 >> 2] = i31;
    break;
   }
   i31 = i18 - 4 | 0;
   if ((i31 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i31 >> 2] | 0) + 4 >> 2] & 1](i31);
  }
 } while (0);
 i12 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i16 = i12 + 4 | 0;
   i31 = i16 | 0;
   i18 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
   if ((i18 | 0) != 0) {
    HEAP32[i31 >> 2] = i18;
    break;
   }
   i18 = i16 - 4 | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 1](i18);
  }
 } while (0);
 i12 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i17 = i12 | 0;
   i18 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i18 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i17 >> 2] = i18;
    break;
   }
  }
 } while (0);
 i12 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i15 = i12 | 0;
   i18 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i18 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i15 >> 2] = i18;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i19);
 i12 = i19 | 0;
 i19 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = 0;
 i12 = i19 | 0;
 HEAP32[i21 >> 2] = H_BASE + 2e3;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i20, i21);
 __ZN9Inspector19InspectorBasicValue6createEd(i11, +(i2 | 0));
 i2 = i10 | 0;
 i21 = i11 | 0;
 i11 = HEAP32[i21 >> 2] | 0;
 HEAP32[i21 >> 2] = 0;
 HEAP32[i2 >> 2] = i11;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i12, i20, i10);
 i10 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i2 = i10 + 4 | 0;
   i11 = i2 | 0;
   i18 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i18 | 0) != 0) {
    HEAP32[i11 >> 2] = i18;
    break;
   }
   i18 = i2 - 4 | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 1](i18);
  }
 } while (0);
 i10 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i21 = i10 + 4 | 0;
   i18 = i21 | 0;
   i2 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i18 >> 2] = i2;
    break;
   }
   i2 = i21 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i10 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i20 = i10 | 0;
   i2 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i20 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP32[i23 >> 2] = H_BASE + 1984;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i22, i23);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i9, i3);
 i3 = i8 | 0;
 i23 = i9 | 0;
 i9 = HEAP32[i23 >> 2] | 0;
 HEAP32[i23 >> 2] = 0;
 HEAP32[i3 >> 2] = i9;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i12, i22, i8);
 i8 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i3 = i8 + 4 | 0;
   i9 = i3 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i9 >> 2] = i10;
    break;
   }
   i10 = i3 - 4 | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 1](i10);
  }
 } while (0);
 i8 = HEAP32[i23 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i23 = i8 + 4 | 0;
   i10 = i23 | 0;
   i3 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i10 >> 2] = i3;
    break;
   }
   i3 = i23 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 1](i3);
  }
 } while (0);
 i8 = HEAP32[i22 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i22 = i8 | 0;
   i3 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i22 >> 2] = i3;
    break;
   }
  }
 } while (0);
 HEAP32[i25 >> 2] = H_BASE + 1872;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i24, i25);
 __ZN9Inspector19InspectorBasicValue6createEd(i7, +(i4 | 0));
 i4 = i6 | 0;
 i25 = i7 | 0;
 i7 = HEAP32[i25 >> 2] | 0;
 HEAP32[i25 >> 2] = 0;
 HEAP32[i4 >> 2] = i7;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i12, i24, i6);
 i6 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i4 = i6 + 4 | 0;
   i12 = i4 | 0;
   i7 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i12 >> 2] = i7;
    break;
   }
   i7 = i4 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 1](i7);
  }
 } while (0);
 i6 = HEAP32[i25 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i25 = i6 + 4 | 0;
   i7 = i25 | 0;
   i4 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i7 >> 2] = i4;
    break;
   }
   i4 = i25 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
  }
 } while (0);
 i6 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i24 = i6 | 0;
   i4 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i24 >> 2] = i4;
    break;
   }
  }
 } while (0);
 HEAP32[i27 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i26, i27);
 i27 = i28 | 0;
 HEAP32[i27 >> 2] = i19;
 i6 = (i19 | 0) == 0;
 if (!i6) {
  i4 = i19 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i30, i26, i28);
 i28 = HEAP32[i27 >> 2] | 0;
 do {
  if ((i28 | 0) != 0) {
   i27 = i28 + 4 | 0;
   i30 = i27 | 0;
   i4 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i30 >> 2] = i4;
    break;
   }
   i4 = i27 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
  }
 } while (0);
 i28 = HEAP32[i26 >> 2] | 0;
 do {
  if ((i28 | 0) != 0) {
   i26 = i28 | 0;
   i4 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i28);
    break;
   } else {
    HEAP32[i26 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i28 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i28 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i29, i14 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i28, i29) | 0;
 i28 = HEAP32[i29 >> 2] | 0;
 do {
  if ((i28 | 0) != 0) {
   i29 = i28 | 0;
   i1 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i28);
    break;
   } else {
    HEAP32[i29 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i6) {
   i28 = i19 + 4 | 0;
   i1 = i28 | 0;
   i29 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i29 | 0) != 0) {
    HEAP32[i1 >> 2] = i29;
    break;
   }
   i29 = i28 - 4 | 0;
   if ((i29 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i29 >> 2] | 0) + 4 >> 2] & 1](i29);
  }
 } while (0);
 if ((i14 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i19 = i14 + 4 | 0;
 i14 = i19 | 0;
 i6 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i14 >> 2] = i6;
  STACKTOP = i5;
  return;
 }
 i6 = i19 - 4 | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 1](i6);
 STACKTOP = i5;
 return;
}
function __ZN9Inspector34InspectorNetworkFrontendDispatcher19webSocketFrameErrorERKN3WTF6StringEdS4_(i1, i2, d3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 192 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i5 + 56 | 0;
 i14 = i5 + 64 | 0;
 i15 = i5 + 72 | 0;
 i16 = i5 + 80 | 0;
 i17 = i5 + 88 | 0;
 i18 = i5 + 96 | 0;
 i19 = i5 + 104 | 0;
 i20 = i5 + 112 | 0;
 i21 = i5 + 120 | 0;
 i22 = i5 + 128 | 0;
 i23 = i5 + 136 | 0;
 i24 = i5 + 144 | 0;
 i25 = i5 + 152 | 0;
 i26 = i5 + 160 | 0;
 i27 = i5 + 168 | 0;
 i28 = i5 + 176 | 0;
 i29 = i5 + 184 | 0;
 __ZN9Inspector15InspectorObject6createEv(i14);
 i30 = i14 | 0;
 i14 = HEAP32[i30 >> 2] | 0;
 HEAP32[i30 >> 2] = 0;
 i30 = i14 | 0;
 HEAP32[i16 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i15, i16);
 HEAP32[i18 >> 2] = H_BASE + 2888;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i17, i18);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i13, i17);
 i18 = i12 | 0;
 i16 = i13 | 0;
 i13 = HEAP32[i16 >> 2] | 0;
 HEAP32[i16 >> 2] = 0;
 HEAP32[i18 >> 2] = i13;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i30, i15, i12);
 i12 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i18 = i12 + 4 | 0;
   i13 = i18 | 0;
   i31 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i31 | 0) != 0) {
    HEAP32[i13 >> 2] = i31;
    break;
   }
   i31 = i18 - 4 | 0;
   if ((i31 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i31 >> 2] | 0) + 4 >> 2] & 1](i31);
  }
 } while (0);
 i12 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i16 = i12 + 4 | 0;
   i31 = i16 | 0;
   i18 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
   if ((i18 | 0) != 0) {
    HEAP32[i31 >> 2] = i18;
    break;
   }
   i18 = i16 - 4 | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 1](i18);
  }
 } while (0);
 i12 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i17 = i12 | 0;
   i18 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i18 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i17 >> 2] = i18;
    break;
   }
  }
 } while (0);
 i12 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i15 = i12 | 0;
   i18 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i18 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i15 >> 2] = i18;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i19);
 i12 = i19 | 0;
 i19 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = 0;
 i12 = i19 | 0;
 HEAP32[i21 >> 2] = H_BASE + 560;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i20, i21);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i11, i2);
 i2 = i10 | 0;
 i21 = i11 | 0;
 i11 = HEAP32[i21 >> 2] | 0;
 HEAP32[i21 >> 2] = 0;
 HEAP32[i2 >> 2] = i11;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i12, i20, i10);
 i10 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i2 = i10 + 4 | 0;
   i11 = i2 | 0;
   i18 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i18 | 0) != 0) {
    HEAP32[i11 >> 2] = i18;
    break;
   }
   i18 = i2 - 4 | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 1](i18);
  }
 } while (0);
 i10 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i21 = i10 + 4 | 0;
   i18 = i21 | 0;
   i2 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i18 >> 2] = i2;
    break;
   }
   i2 = i21 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i10 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i20 = i10 | 0;
   i2 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i20 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP32[i23 >> 2] = H_BASE + 472;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i22, i23);
 __ZN9Inspector19InspectorBasicValue6createEd(i9, d3);
 i23 = i8 | 0;
 i10 = i9 | 0;
 i9 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i23 >> 2] = i9;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i12, i22, i8);
 i8 = HEAP32[i23 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i23 = i8 + 4 | 0;
   i9 = i23 | 0;
   i2 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i9 >> 2] = i2;
    break;
   }
   i2 = i23 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i8 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i10 = i8 + 4 | 0;
   i2 = i10 | 0;
   i23 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i23 | 0) != 0) {
    HEAP32[i2 >> 2] = i23;
    break;
   }
   i23 = i10 - 4 | 0;
   if ((i23 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i23 >> 2] | 0) + 4 >> 2] & 1](i23);
  }
 } while (0);
 i8 = HEAP32[i22 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i22 = i8 | 0;
   i23 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
   if ((i23 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i22 >> 2] = i23;
    break;
   }
  }
 } while (0);
 HEAP32[i25 >> 2] = H_BASE + 2872;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i24, i25);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i7, i4);
 i4 = i6 | 0;
 i25 = i7 | 0;
 i7 = HEAP32[i25 >> 2] | 0;
 HEAP32[i25 >> 2] = 0;
 HEAP32[i4 >> 2] = i7;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i12, i24, i6);
 i6 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i4 = i6 + 4 | 0;
   i12 = i4 | 0;
   i7 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i12 >> 2] = i7;
    break;
   }
   i7 = i4 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 1](i7);
  }
 } while (0);
 i6 = HEAP32[i25 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i25 = i6 + 4 | 0;
   i7 = i25 | 0;
   i4 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i7 >> 2] = i4;
    break;
   }
   i4 = i25 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
  }
 } while (0);
 i6 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i24 = i6 | 0;
   i4 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i24 >> 2] = i4;
    break;
   }
  }
 } while (0);
 HEAP32[i27 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i26, i27);
 i27 = i28 | 0;
 HEAP32[i27 >> 2] = i19;
 i6 = (i19 | 0) == 0;
 if (!i6) {
  i4 = i19 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i30, i26, i28);
 i28 = HEAP32[i27 >> 2] | 0;
 do {
  if ((i28 | 0) != 0) {
   i27 = i28 + 4 | 0;
   i30 = i27 | 0;
   i4 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i30 >> 2] = i4;
    break;
   }
   i4 = i27 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
  }
 } while (0);
 i28 = HEAP32[i26 >> 2] | 0;
 do {
  if ((i28 | 0) != 0) {
   i26 = i28 | 0;
   i4 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i28);
    break;
   } else {
    HEAP32[i26 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i28 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i28 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i29, i14 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i28, i29) | 0;
 i28 = HEAP32[i29 >> 2] | 0;
 do {
  if ((i28 | 0) != 0) {
   i29 = i28 | 0;
   i1 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i28);
    break;
   } else {
    HEAP32[i29 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i6) {
   i28 = i19 + 4 | 0;
   i1 = i28 | 0;
   i29 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i29 | 0) != 0) {
    HEAP32[i1 >> 2] = i29;
    break;
   }
   i29 = i28 - 4 | 0;
   if ((i29 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i29 >> 2] | 0) + 4 >> 2] & 1](i29);
  }
 } while (0);
 if ((i14 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i19 = i14 + 4 | 0;
 i14 = i19 | 0;
 i6 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i14 >> 2] = i6;
  STACKTOP = i5;
  return;
 }
 i6 = i19 - 4 | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 1](i6);
 STACKTOP = i5;
 return;
}
function __ZN9Inspector30InspectorDOMFrontendDispatcher17attributeModifiedEiRKN3WTF6StringES4_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 192 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i5 + 56 | 0;
 i14 = i5 + 64 | 0;
 i15 = i5 + 72 | 0;
 i16 = i5 + 80 | 0;
 i17 = i5 + 88 | 0;
 i18 = i5 + 96 | 0;
 i19 = i5 + 104 | 0;
 i20 = i5 + 112 | 0;
 i21 = i5 + 120 | 0;
 i22 = i5 + 128 | 0;
 i23 = i5 + 136 | 0;
 i24 = i5 + 144 | 0;
 i25 = i5 + 152 | 0;
 i26 = i5 + 160 | 0;
 i27 = i5 + 168 | 0;
 i28 = i5 + 176 | 0;
 i29 = i5 + 184 | 0;
 __ZN9Inspector15InspectorObject6createEv(i14);
 i30 = i14 | 0;
 i14 = HEAP32[i30 >> 2] | 0;
 HEAP32[i30 >> 2] = 0;
 i30 = i14 | 0;
 HEAP32[i16 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i15, i16);
 HEAP32[i18 >> 2] = H_BASE + 1520;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i17, i18);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i13, i17);
 i18 = i12 | 0;
 i16 = i13 | 0;
 i13 = HEAP32[i16 >> 2] | 0;
 HEAP32[i16 >> 2] = 0;
 HEAP32[i18 >> 2] = i13;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i30, i15, i12);
 i12 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i18 = i12 + 4 | 0;
   i13 = i18 | 0;
   i31 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i31 | 0) != 0) {
    HEAP32[i13 >> 2] = i31;
    break;
   }
   i31 = i18 - 4 | 0;
   if ((i31 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i31 >> 2] | 0) + 4 >> 2] & 1](i31);
  }
 } while (0);
 i12 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i16 = i12 + 4 | 0;
   i31 = i16 | 0;
   i18 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
   if ((i18 | 0) != 0) {
    HEAP32[i31 >> 2] = i18;
    break;
   }
   i18 = i16 - 4 | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 1](i18);
  }
 } while (0);
 i12 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i17 = i12 | 0;
   i18 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i18 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i17 >> 2] = i18;
    break;
   }
  }
 } while (0);
 i12 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i15 = i12 | 0;
   i18 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i18 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i15 >> 2] = i18;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i19);
 i12 = i19 | 0;
 i19 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = 0;
 i12 = i19 | 0;
 HEAP32[i21 >> 2] = H_BASE + 1512;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i20, i21);
 __ZN9Inspector19InspectorBasicValue6createEd(i11, +(i2 | 0));
 i2 = i10 | 0;
 i21 = i11 | 0;
 i11 = HEAP32[i21 >> 2] | 0;
 HEAP32[i21 >> 2] = 0;
 HEAP32[i2 >> 2] = i11;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i12, i20, i10);
 i10 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i2 = i10 + 4 | 0;
   i11 = i2 | 0;
   i18 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i18 | 0) != 0) {
    HEAP32[i11 >> 2] = i18;
    break;
   }
   i18 = i2 - 4 | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 1](i18);
  }
 } while (0);
 i10 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i21 = i10 + 4 | 0;
   i18 = i21 | 0;
   i2 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i18 >> 2] = i2;
    break;
   }
   i2 = i21 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i10 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i20 = i10 | 0;
   i2 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i20 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP32[i23 >> 2] = H_BASE + 1504;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i22, i23);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i9, i3);
 i3 = i8 | 0;
 i23 = i9 | 0;
 i9 = HEAP32[i23 >> 2] | 0;
 HEAP32[i23 >> 2] = 0;
 HEAP32[i3 >> 2] = i9;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i12, i22, i8);
 i8 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i3 = i8 + 4 | 0;
   i9 = i3 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i9 >> 2] = i10;
    break;
   }
   i10 = i3 - 4 | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 1](i10);
  }
 } while (0);
 i8 = HEAP32[i23 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i23 = i8 + 4 | 0;
   i10 = i23 | 0;
   i3 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i10 >> 2] = i3;
    break;
   }
   i3 = i23 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 1](i3);
  }
 } while (0);
 i8 = HEAP32[i22 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i22 = i8 | 0;
   i3 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i22 >> 2] = i3;
    break;
   }
  }
 } while (0);
 HEAP32[i25 >> 2] = H_BASE + 1496;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i24, i25);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i7, i4);
 i4 = i6 | 0;
 i25 = i7 | 0;
 i7 = HEAP32[i25 >> 2] | 0;
 HEAP32[i25 >> 2] = 0;
 HEAP32[i4 >> 2] = i7;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i12, i24, i6);
 i6 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i4 = i6 + 4 | 0;
   i12 = i4 | 0;
   i7 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i12 >> 2] = i7;
    break;
   }
   i7 = i4 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 1](i7);
  }
 } while (0);
 i6 = HEAP32[i25 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i25 = i6 + 4 | 0;
   i7 = i25 | 0;
   i4 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i7 >> 2] = i4;
    break;
   }
   i4 = i25 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
  }
 } while (0);
 i6 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i24 = i6 | 0;
   i4 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i24 >> 2] = i4;
    break;
   }
  }
 } while (0);
 HEAP32[i27 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i26, i27);
 i27 = i28 | 0;
 HEAP32[i27 >> 2] = i19;
 i6 = (i19 | 0) == 0;
 if (!i6) {
  i4 = i19 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i30, i26, i28);
 i28 = HEAP32[i27 >> 2] | 0;
 do {
  if ((i28 | 0) != 0) {
   i27 = i28 + 4 | 0;
   i30 = i27 | 0;
   i4 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i30 >> 2] = i4;
    break;
   }
   i4 = i27 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
  }
 } while (0);
 i28 = HEAP32[i26 >> 2] | 0;
 do {
  if ((i28 | 0) != 0) {
   i26 = i28 | 0;
   i4 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i28);
    break;
   } else {
    HEAP32[i26 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i28 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i28 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i29, i14 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i28, i29) | 0;
 i28 = HEAP32[i29 >> 2] | 0;
 do {
  if ((i28 | 0) != 0) {
   i29 = i28 | 0;
   i1 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i28);
    break;
   } else {
    HEAP32[i29 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i6) {
   i28 = i19 + 4 | 0;
   i1 = i28 | 0;
   i29 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i29 | 0) != 0) {
    HEAP32[i1 >> 2] = i29;
    break;
   }
   i29 = i28 - 4 | 0;
   if ((i29 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i29 >> 2] | 0) + 4 >> 2] & 1](i29);
  }
 } while (0);
 if ((i14 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i19 = i14 + 4 | 0;
 i14 = i19 | 0;
 i6 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i14 >> 2] = i6;
  STACKTOP = i5;
  return;
 }
 i6 = i19 - 4 | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 1](i6);
 STACKTOP = i5;
 return;
}
function __ZN9Inspector33InspectorWorkerFrontendDispatcher13workerCreatedEiRKN3WTF6StringEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 192 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i5 + 56 | 0;
 i14 = i5 + 64 | 0;
 i15 = i5 + 72 | 0;
 i16 = i5 + 80 | 0;
 i17 = i5 + 88 | 0;
 i18 = i5 + 96 | 0;
 i19 = i5 + 104 | 0;
 i20 = i5 + 112 | 0;
 i21 = i5 + 120 | 0;
 i22 = i5 + 128 | 0;
 i23 = i5 + 136 | 0;
 i24 = i5 + 144 | 0;
 i25 = i5 + 152 | 0;
 i26 = i5 + 160 | 0;
 i27 = i5 + 168 | 0;
 i28 = i5 + 176 | 0;
 i29 = i5 + 184 | 0;
 __ZN9Inspector15InspectorObject6createEv(i14);
 i30 = i14 | 0;
 i14 = HEAP32[i30 >> 2] | 0;
 HEAP32[i30 >> 2] = 0;
 i30 = i14 | 0;
 HEAP32[i16 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i15, i16);
 HEAP32[i18 >> 2] = H_BASE + 2152;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i17, i18);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i13, i17);
 i18 = i12 | 0;
 i16 = i13 | 0;
 i13 = HEAP32[i16 >> 2] | 0;
 HEAP32[i16 >> 2] = 0;
 HEAP32[i18 >> 2] = i13;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i30, i15, i12);
 i12 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i18 = i12 + 4 | 0;
   i13 = i18 | 0;
   i31 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i31 | 0) != 0) {
    HEAP32[i13 >> 2] = i31;
    break;
   }
   i31 = i18 - 4 | 0;
   if ((i31 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i31 >> 2] | 0) + 4 >> 2] & 1](i31);
  }
 } while (0);
 i12 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i16 = i12 + 4 | 0;
   i31 = i16 | 0;
   i18 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
   if ((i18 | 0) != 0) {
    HEAP32[i31 >> 2] = i18;
    break;
   }
   i18 = i16 - 4 | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 1](i18);
  }
 } while (0);
 i12 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i17 = i12 | 0;
   i18 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i18 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i17 >> 2] = i18;
    break;
   }
  }
 } while (0);
 i12 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i15 = i12 | 0;
   i18 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i18 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i15 >> 2] = i18;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i19);
 i12 = i19 | 0;
 i19 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = 0;
 i12 = i19 | 0;
 HEAP32[i21 >> 2] = H_BASE + 2136;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i20, i21);
 __ZN9Inspector19InspectorBasicValue6createEd(i11, +(i2 | 0));
 i2 = i10 | 0;
 i21 = i11 | 0;
 i11 = HEAP32[i21 >> 2] | 0;
 HEAP32[i21 >> 2] = 0;
 HEAP32[i2 >> 2] = i11;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i12, i20, i10);
 i10 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i2 = i10 + 4 | 0;
   i11 = i2 | 0;
   i18 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i18 | 0) != 0) {
    HEAP32[i11 >> 2] = i18;
    break;
   }
   i18 = i2 - 4 | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 1](i18);
  }
 } while (0);
 i10 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i21 = i10 + 4 | 0;
   i18 = i21 | 0;
   i2 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i18 >> 2] = i2;
    break;
   }
   i2 = i21 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i10 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i20 = i10 | 0;
   i2 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i20 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP32[i23 >> 2] = H_BASE + 2976;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i22, i23);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i9, i3);
 i3 = i8 | 0;
 i23 = i9 | 0;
 i9 = HEAP32[i23 >> 2] | 0;
 HEAP32[i23 >> 2] = 0;
 HEAP32[i3 >> 2] = i9;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i12, i22, i8);
 i8 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i3 = i8 + 4 | 0;
   i9 = i3 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i9 >> 2] = i10;
    break;
   }
   i10 = i3 - 4 | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 1](i10);
  }
 } while (0);
 i8 = HEAP32[i23 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i23 = i8 + 4 | 0;
   i10 = i23 | 0;
   i3 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i10 >> 2] = i3;
    break;
   }
   i3 = i23 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 1](i3);
  }
 } while (0);
 i8 = HEAP32[i22 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i22 = i8 | 0;
   i3 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i22 >> 2] = i3;
    break;
   }
  }
 } while (0);
 HEAP32[i25 >> 2] = H_BASE + 2112;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i24, i25);
 __ZN9Inspector19InspectorBasicValue6createEb(i7, i4);
 i4 = i6 | 0;
 i25 = i7 | 0;
 i7 = HEAP32[i25 >> 2] | 0;
 HEAP32[i25 >> 2] = 0;
 HEAP32[i4 >> 2] = i7;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i12, i24, i6);
 i6 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i4 = i6 + 4 | 0;
   i12 = i4 | 0;
   i7 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i12 >> 2] = i7;
    break;
   }
   i7 = i4 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 1](i7);
  }
 } while (0);
 i6 = HEAP32[i25 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i25 = i6 + 4 | 0;
   i7 = i25 | 0;
   i4 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i7 >> 2] = i4;
    break;
   }
   i4 = i25 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
  }
 } while (0);
 i6 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i24 = i6 | 0;
   i4 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i24 >> 2] = i4;
    break;
   }
  }
 } while (0);
 HEAP32[i27 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i26, i27);
 i27 = i28 | 0;
 HEAP32[i27 >> 2] = i19;
 i6 = (i19 | 0) == 0;
 if (!i6) {
  i4 = i19 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i30, i26, i28);
 i28 = HEAP32[i27 >> 2] | 0;
 do {
  if ((i28 | 0) != 0) {
   i27 = i28 + 4 | 0;
   i30 = i27 | 0;
   i4 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i30 >> 2] = i4;
    break;
   }
   i4 = i27 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
  }
 } while (0);
 i28 = HEAP32[i26 >> 2] | 0;
 do {
  if ((i28 | 0) != 0) {
   i26 = i28 | 0;
   i4 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i28);
    break;
   } else {
    HEAP32[i26 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i28 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i28 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i29, i14 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i28, i29) | 0;
 i28 = HEAP32[i29 >> 2] | 0;
 do {
  if ((i28 | 0) != 0) {
   i29 = i28 | 0;
   i1 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i28);
    break;
   } else {
    HEAP32[i29 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i6) {
   i28 = i19 + 4 | 0;
   i1 = i28 | 0;
   i29 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i29 | 0) != 0) {
    HEAP32[i1 >> 2] = i29;
    break;
   }
   i29 = i28 - 4 | 0;
   if ((i29 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i29 >> 2] | 0) + 4 >> 2] & 1](i29);
  }
 } while (0);
 if ((i14 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i19 = i14 + 4 | 0;
 i14 = i19 | 0;
 i6 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i14 >> 2] = i6;
  STACKTOP = i5;
  return;
 }
 i6 = i19 - 4 | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 1](i6);
 STACKTOP = i5;
 return;
}
function __ZN9Inspector34InspectorNetworkFrontendDispatcher34webSocketHandshakeResponseReceivedERKN3WTF6StringEdNS1_10PassRefPtrINS_11TypeBuilder7Network17WebSocketResponseEEE(i1, i2, d3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 184 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i5 + 56 | 0;
 i14 = i5 + 64 | 0;
 i15 = i5 + 72 | 0;
 i16 = i5 + 80 | 0;
 i17 = i5 + 88 | 0;
 i18 = i5 + 96 | 0;
 i19 = i5 + 104 | 0;
 i20 = i5 + 112 | 0;
 i21 = i5 + 120 | 0;
 i22 = i5 + 128 | 0;
 i23 = i5 + 136 | 0;
 i24 = i5 + 144 | 0;
 i25 = i5 + 152 | 0;
 i26 = i5 + 160 | 0;
 i27 = i5 + 168 | 0;
 i28 = i5 + 176 | 0;
 __ZN9Inspector15InspectorObject6createEv(i12);
 i29 = i12 | 0;
 i12 = HEAP32[i29 >> 2] | 0;
 HEAP32[i29 >> 2] = 0;
 i29 = i12 | 0;
 HEAP32[i14 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i13, i14);
 HEAP32[i16 >> 2] = H_BASE + 8;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i15, i16);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i11, i15);
 i16 = i10 | 0;
 i14 = i11 | 0;
 i11 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = 0;
 HEAP32[i16 >> 2] = i11;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i29, i13, i10);
 i10 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i16 = i10 + 4 | 0;
   i11 = i16 | 0;
   i30 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i30 | 0) != 0) {
    HEAP32[i11 >> 2] = i30;
    break;
   }
   i30 = i16 - 4 | 0;
   if ((i30 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i30 >> 2] | 0) + 4 >> 2] & 1](i30);
  }
 } while (0);
 i10 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i14 = i10 + 4 | 0;
   i30 = i14 | 0;
   i16 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
   if ((i16 | 0) != 0) {
    HEAP32[i30 >> 2] = i16;
    break;
   }
   i16 = i14 - 4 | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 1](i16);
  }
 } while (0);
 i10 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i15 = i10 | 0;
   i16 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i15 >> 2] = i16;
    break;
   }
  }
 } while (0);
 i10 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i13 = i10 | 0;
   i16 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i13 >> 2] = i16;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i17);
 i10 = i17 | 0;
 i17 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 i10 = i17 | 0;
 HEAP32[i19 >> 2] = H_BASE + 560;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i18, i19);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i9, i2);
 i2 = i8 | 0;
 i19 = i9 | 0;
 i9 = HEAP32[i19 >> 2] | 0;
 HEAP32[i19 >> 2] = 0;
 HEAP32[i2 >> 2] = i9;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i10, i18, i8);
 i8 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i2 = i8 + 4 | 0;
   i9 = i2 | 0;
   i16 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i16 | 0) != 0) {
    HEAP32[i9 >> 2] = i16;
    break;
   }
   i16 = i2 - 4 | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 1](i16);
  }
 } while (0);
 i8 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i19 = i8 + 4 | 0;
   i16 = i19 | 0;
   i2 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i16 >> 2] = i2;
    break;
   }
   i2 = i19 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i8 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i18 = i8 | 0;
   i2 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i18 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP32[i21 >> 2] = H_BASE + 472;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i20, i21);
 __ZN9Inspector19InspectorBasicValue6createEd(i7, d3);
 i21 = i6 | 0;
 i8 = i7 | 0;
 i7 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i21 >> 2] = i7;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i10, i20, i6);
 i6 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i21 = i6 + 4 | 0;
   i7 = i21 | 0;
   i2 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i7 >> 2] = i2;
    break;
   }
   i2 = i21 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i6 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i8 = i6 + 4 | 0;
   i2 = i8 | 0;
   i21 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i21 | 0) != 0) {
    HEAP32[i2 >> 2] = i21;
    break;
   }
   i21 = i8 - 4 | 0;
   if ((i21 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 1](i21);
  }
 } while (0);
 i6 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i20 = i6 | 0;
   i21 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
   if ((i21 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i20 >> 2] = i21;
    break;
   }
  }
 } while (0);
 HEAP32[i23 >> 2] = H_BASE + 344;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i22, i23);
 i23 = i24 | 0;
 i6 = i4 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i23 >> 2] = i4;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i10, i22, i24);
 i24 = HEAP32[i23 >> 2] | 0;
 do {
  if ((i24 | 0) != 0) {
   i23 = i24 + 4 | 0;
   i10 = i23 | 0;
   i4 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i10 >> 2] = i4;
    break;
   }
   i4 = i23 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
  }
 } while (0);
 i24 = HEAP32[i22 >> 2] | 0;
 do {
  if ((i24 | 0) != 0) {
   i22 = i24 | 0;
   i4 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i24);
    break;
   } else {
    HEAP32[i22 >> 2] = i4;
    break;
   }
  }
 } while (0);
 HEAP32[i26 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i25, i26);
 i26 = i27 | 0;
 HEAP32[i26 >> 2] = i17;
 i24 = (i17 | 0) == 0;
 if (!i24) {
  i4 = i17 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i29, i25, i27);
 i27 = HEAP32[i26 >> 2] | 0;
 do {
  if ((i27 | 0) != 0) {
   i26 = i27 + 4 | 0;
   i29 = i26 | 0;
   i4 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i29 >> 2] = i4;
    break;
   }
   i4 = i26 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
  }
 } while (0);
 i27 = HEAP32[i25 >> 2] | 0;
 do {
  if ((i27 | 0) != 0) {
   i25 = i27 | 0;
   i4 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i27);
    break;
   } else {
    HEAP32[i25 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i27 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i27 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i28, i12 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i27, i28) | 0;
 i27 = HEAP32[i28 >> 2] | 0;
 do {
  if ((i27 | 0) != 0) {
   i28 = i27 | 0;
   i1 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i27);
    break;
   } else {
    HEAP32[i28 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i24) {
   i27 = i17 + 4 | 0;
   i1 = i27 | 0;
   i28 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i28 | 0) != 0) {
    HEAP32[i1 >> 2] = i28;
    break;
   }
   i28 = i27 - 4 | 0;
   if ((i28 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i28 >> 2] | 0) + 4 >> 2] & 1](i28);
  }
 } while (0);
 if ((i12 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i17 = i12 + 4 | 0;
 i12 = i17 | 0;
 i24 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
 if ((i24 | 0) != 0) {
  HEAP32[i12 >> 2] = i24;
  STACKTOP = i5;
  return;
 }
 i24 = i17 - 4 | 0;
 if ((i24 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i24 >> 2] | 0) + 4 >> 2] & 1](i24);
 STACKTOP = i5;
 return;
}
function __ZN9Inspector34InspectorNetworkFrontendDispatcher33webSocketWillSendHandshakeRequestERKN3WTF6StringEdNS1_10PassRefPtrINS_11TypeBuilder7Network16WebSocketRequestEEE(i1, i2, d3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 184 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i5 + 56 | 0;
 i14 = i5 + 64 | 0;
 i15 = i5 + 72 | 0;
 i16 = i5 + 80 | 0;
 i17 = i5 + 88 | 0;
 i18 = i5 + 96 | 0;
 i19 = i5 + 104 | 0;
 i20 = i5 + 112 | 0;
 i21 = i5 + 120 | 0;
 i22 = i5 + 128 | 0;
 i23 = i5 + 136 | 0;
 i24 = i5 + 144 | 0;
 i25 = i5 + 152 | 0;
 i26 = i5 + 160 | 0;
 i27 = i5 + 168 | 0;
 i28 = i5 + 176 | 0;
 __ZN9Inspector15InspectorObject6createEv(i12);
 i29 = i12 | 0;
 i12 = HEAP32[i29 >> 2] | 0;
 HEAP32[i29 >> 2] = 0;
 i29 = i12 | 0;
 HEAP32[i14 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i13, i14);
 HEAP32[i16 >> 2] = H_BASE + 56;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i15, i16);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i11, i15);
 i16 = i10 | 0;
 i14 = i11 | 0;
 i11 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = 0;
 HEAP32[i16 >> 2] = i11;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i29, i13, i10);
 i10 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i16 = i10 + 4 | 0;
   i11 = i16 | 0;
   i30 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i30 | 0) != 0) {
    HEAP32[i11 >> 2] = i30;
    break;
   }
   i30 = i16 - 4 | 0;
   if ((i30 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i30 >> 2] | 0) + 4 >> 2] & 1](i30);
  }
 } while (0);
 i10 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i14 = i10 + 4 | 0;
   i30 = i14 | 0;
   i16 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
   if ((i16 | 0) != 0) {
    HEAP32[i30 >> 2] = i16;
    break;
   }
   i16 = i14 - 4 | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 1](i16);
  }
 } while (0);
 i10 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i15 = i10 | 0;
   i16 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i15 >> 2] = i16;
    break;
   }
  }
 } while (0);
 i10 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i13 = i10 | 0;
   i16 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i13 >> 2] = i16;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i17);
 i10 = i17 | 0;
 i17 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 i10 = i17 | 0;
 HEAP32[i19 >> 2] = H_BASE + 560;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i18, i19);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i9, i2);
 i2 = i8 | 0;
 i19 = i9 | 0;
 i9 = HEAP32[i19 >> 2] | 0;
 HEAP32[i19 >> 2] = 0;
 HEAP32[i2 >> 2] = i9;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i10, i18, i8);
 i8 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i2 = i8 + 4 | 0;
   i9 = i2 | 0;
   i16 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i16 | 0) != 0) {
    HEAP32[i9 >> 2] = i16;
    break;
   }
   i16 = i2 - 4 | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 1](i16);
  }
 } while (0);
 i8 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i19 = i8 + 4 | 0;
   i16 = i19 | 0;
   i2 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i16 >> 2] = i2;
    break;
   }
   i2 = i19 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i8 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i18 = i8 | 0;
   i2 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i18 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP32[i21 >> 2] = H_BASE + 472;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i20, i21);
 __ZN9Inspector19InspectorBasicValue6createEd(i7, d3);
 i21 = i6 | 0;
 i8 = i7 | 0;
 i7 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i21 >> 2] = i7;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i10, i20, i6);
 i6 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i21 = i6 + 4 | 0;
   i7 = i21 | 0;
   i2 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i7 >> 2] = i2;
    break;
   }
   i2 = i21 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i6 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i8 = i6 + 4 | 0;
   i2 = i8 | 0;
   i21 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i21 | 0) != 0) {
    HEAP32[i2 >> 2] = i21;
    break;
   }
   i21 = i8 - 4 | 0;
   if ((i21 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 1](i21);
  }
 } while (0);
 i6 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i20 = i6 | 0;
   i21 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
   if ((i21 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i20 >> 2] = i21;
    break;
   }
  }
 } while (0);
 HEAP32[i23 >> 2] = H_BASE + 488;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i22, i23);
 i23 = i24 | 0;
 i6 = i4 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i23 >> 2] = i4;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i10, i22, i24);
 i24 = HEAP32[i23 >> 2] | 0;
 do {
  if ((i24 | 0) != 0) {
   i23 = i24 + 4 | 0;
   i10 = i23 | 0;
   i4 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i10 >> 2] = i4;
    break;
   }
   i4 = i23 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
  }
 } while (0);
 i24 = HEAP32[i22 >> 2] | 0;
 do {
  if ((i24 | 0) != 0) {
   i22 = i24 | 0;
   i4 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i24);
    break;
   } else {
    HEAP32[i22 >> 2] = i4;
    break;
   }
  }
 } while (0);
 HEAP32[i26 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i25, i26);
 i26 = i27 | 0;
 HEAP32[i26 >> 2] = i17;
 i24 = (i17 | 0) == 0;
 if (!i24) {
  i4 = i17 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i29, i25, i27);
 i27 = HEAP32[i26 >> 2] | 0;
 do {
  if ((i27 | 0) != 0) {
   i26 = i27 + 4 | 0;
   i29 = i26 | 0;
   i4 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i29 >> 2] = i4;
    break;
   }
   i4 = i26 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
  }
 } while (0);
 i27 = HEAP32[i25 >> 2] | 0;
 do {
  if ((i27 | 0) != 0) {
   i25 = i27 | 0;
   i4 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i27);
    break;
   } else {
    HEAP32[i25 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i27 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i27 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i28, i12 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i27, i28) | 0;
 i27 = HEAP32[i28 >> 2] | 0;
 do {
  if ((i27 | 0) != 0) {
   i28 = i27 | 0;
   i1 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i27);
    break;
   } else {
    HEAP32[i28 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i24) {
   i27 = i17 + 4 | 0;
   i1 = i27 | 0;
   i28 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i28 | 0) != 0) {
    HEAP32[i1 >> 2] = i28;
    break;
   }
   i28 = i27 - 4 | 0;
   if ((i28 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i28 >> 2] | 0) + 4 >> 2] & 1](i28);
  }
 } while (0);
 if ((i12 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i17 = i12 + 4 | 0;
 i12 = i17 | 0;
 i24 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
 if ((i24 | 0) != 0) {
  HEAP32[i12 >> 2] = i24;
  STACKTOP = i5;
  return;
 }
 i24 = i17 - 4 | 0;
 if ((i24 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i24 >> 2] | 0) + 4 >> 2] & 1](i24);
 STACKTOP = i5;
 return;
}
function __ZN9Inspector37InspectorDOMStorageFrontendDispatcher19domStorageItemAddedEN3WTF10PassRefPtrINS_11TypeBuilder10DOMStorage9StorageIdEEERKNS1_6StringES9_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 184 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i5 + 56 | 0;
 i14 = i5 + 64 | 0;
 i15 = i5 + 72 | 0;
 i16 = i5 + 80 | 0;
 i17 = i5 + 88 | 0;
 i18 = i5 + 96 | 0;
 i19 = i5 + 104 | 0;
 i20 = i5 + 112 | 0;
 i21 = i5 + 120 | 0;
 i22 = i5 + 128 | 0;
 i23 = i5 + 136 | 0;
 i24 = i5 + 144 | 0;
 i25 = i5 + 152 | 0;
 i26 = i5 + 160 | 0;
 i27 = i5 + 168 | 0;
 i28 = i5 + 176 | 0;
 __ZN9Inspector15InspectorObject6createEv(i12);
 i29 = i12 | 0;
 i12 = HEAP32[i29 >> 2] | 0;
 HEAP32[i29 >> 2] = 0;
 i29 = i12 | 0;
 HEAP32[i14 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i13, i14);
 HEAP32[i16 >> 2] = H_BASE + 1024;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i15, i16);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i11, i15);
 i16 = i10 | 0;
 i14 = i11 | 0;
 i11 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = 0;
 HEAP32[i16 >> 2] = i11;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i29, i13, i10);
 i10 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i16 = i10 + 4 | 0;
   i11 = i16 | 0;
   i30 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i30 | 0) != 0) {
    HEAP32[i11 >> 2] = i30;
    break;
   }
   i30 = i16 - 4 | 0;
   if ((i30 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i30 >> 2] | 0) + 4 >> 2] & 1](i30);
  }
 } while (0);
 i10 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i14 = i10 + 4 | 0;
   i30 = i14 | 0;
   i16 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
   if ((i16 | 0) != 0) {
    HEAP32[i30 >> 2] = i16;
    break;
   }
   i16 = i14 - 4 | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 1](i16);
  }
 } while (0);
 i10 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i15 = i10 | 0;
   i16 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i15 >> 2] = i16;
    break;
   }
  }
 } while (0);
 i10 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i13 = i10 | 0;
   i16 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i13 >> 2] = i16;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i17);
 i10 = i17 | 0;
 i17 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 i10 = i17 | 0;
 HEAP32[i19 >> 2] = H_BASE + 1104;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i18, i19);
 i19 = i20 | 0;
 i16 = i2 | 0;
 i2 = HEAP32[i16 >> 2] | 0;
 HEAP32[i16 >> 2] = 0;
 HEAP32[i19 >> 2] = i2;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i10, i18, i20);
 i20 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i20 | 0) != 0) {
   i19 = i20 + 4 | 0;
   i2 = i19 | 0;
   i16 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i16 | 0) != 0) {
    HEAP32[i2 >> 2] = i16;
    break;
   }
   i16 = i19 - 4 | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 1](i16);
  }
 } while (0);
 i20 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i20 | 0) != 0) {
   i18 = i20 | 0;
   i16 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i20);
    break;
   } else {
    HEAP32[i18 >> 2] = i16;
    break;
   }
  }
 } while (0);
 HEAP32[i22 >> 2] = H_BASE + 1056;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i21, i22);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i9, i3);
 i3 = i8 | 0;
 i22 = i9 | 0;
 i9 = HEAP32[i22 >> 2] | 0;
 HEAP32[i22 >> 2] = 0;
 HEAP32[i3 >> 2] = i9;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i10, i21, i8);
 i8 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i3 = i8 + 4 | 0;
   i9 = i3 | 0;
   i20 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i20 | 0) != 0) {
    HEAP32[i9 >> 2] = i20;
    break;
   }
   i20 = i3 - 4 | 0;
   if ((i20 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 1](i20);
  }
 } while (0);
 i8 = HEAP32[i22 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i22 = i8 + 4 | 0;
   i20 = i22 | 0;
   i3 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i20 >> 2] = i3;
    break;
   }
   i3 = i22 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 1](i3);
  }
 } while (0);
 i8 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i21 = i8 | 0;
   i3 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i21 >> 2] = i3;
    break;
   }
  }
 } while (0);
 HEAP32[i24 >> 2] = H_BASE + 968;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i23, i24);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i7, i4);
 i4 = i6 | 0;
 i24 = i7 | 0;
 i7 = HEAP32[i24 >> 2] | 0;
 HEAP32[i24 >> 2] = 0;
 HEAP32[i4 >> 2] = i7;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i10, i23, i6);
 i6 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i4 = i6 + 4 | 0;
   i10 = i4 | 0;
   i7 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i10 >> 2] = i7;
    break;
   }
   i7 = i4 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 1](i7);
  }
 } while (0);
 i6 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i24 = i6 + 4 | 0;
   i7 = i24 | 0;
   i4 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i7 >> 2] = i4;
    break;
   }
   i4 = i24 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
  }
 } while (0);
 i6 = HEAP32[i23 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i23 = i6 | 0;
   i4 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i23 >> 2] = i4;
    break;
   }
  }
 } while (0);
 HEAP32[i26 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i25, i26);
 i26 = i27 | 0;
 HEAP32[i26 >> 2] = i17;
 i6 = (i17 | 0) == 0;
 if (!i6) {
  i4 = i17 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i29, i25, i27);
 i27 = HEAP32[i26 >> 2] | 0;
 do {
  if ((i27 | 0) != 0) {
   i26 = i27 + 4 | 0;
   i29 = i26 | 0;
   i4 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i29 >> 2] = i4;
    break;
   }
   i4 = i26 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
  }
 } while (0);
 i27 = HEAP32[i25 >> 2] | 0;
 do {
  if ((i27 | 0) != 0) {
   i25 = i27 | 0;
   i4 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i27);
    break;
   } else {
    HEAP32[i25 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i27 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i27 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i28, i12 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i27, i28) | 0;
 i27 = HEAP32[i28 >> 2] | 0;
 do {
  if ((i27 | 0) != 0) {
   i28 = i27 | 0;
   i1 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i27);
    break;
   } else {
    HEAP32[i28 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i6) {
   i27 = i17 + 4 | 0;
   i1 = i27 | 0;
   i28 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i28 | 0) != 0) {
    HEAP32[i1 >> 2] = i28;
    break;
   }
   i28 = i27 - 4 | 0;
   if ((i28 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i28 >> 2] | 0) + 4 >> 2] & 1](i28);
  }
 } while (0);
 if ((i12 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i17 = i12 + 4 | 0;
 i12 = i17 | 0;
 i6 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i12 >> 2] = i6;
  STACKTOP = i5;
  return;
 }
 i6 = i17 - 4 | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 1](i6);
 STACKTOP = i5;
 return;
}
function __ZN9Inspector34InspectorNetworkFrontendDispatcher22webSocketFrameReceivedERKN3WTF6StringEdNS1_10PassRefPtrINS_11TypeBuilder7Network14WebSocketFrameEEE(i1, i2, d3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 184 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i5 + 56 | 0;
 i14 = i5 + 64 | 0;
 i15 = i5 + 72 | 0;
 i16 = i5 + 80 | 0;
 i17 = i5 + 88 | 0;
 i18 = i5 + 96 | 0;
 i19 = i5 + 104 | 0;
 i20 = i5 + 112 | 0;
 i21 = i5 + 120 | 0;
 i22 = i5 + 128 | 0;
 i23 = i5 + 136 | 0;
 i24 = i5 + 144 | 0;
 i25 = i5 + 152 | 0;
 i26 = i5 + 160 | 0;
 i27 = i5 + 168 | 0;
 i28 = i5 + 176 | 0;
 __ZN9Inspector15InspectorObject6createEv(i12);
 i29 = i12 | 0;
 i12 = HEAP32[i29 >> 2] | 0;
 HEAP32[i29 >> 2] = 0;
 i29 = i12 | 0;
 HEAP32[i14 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i13, i14);
 HEAP32[i16 >> 2] = H_BASE + 2920;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i15, i16);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i11, i15);
 i16 = i10 | 0;
 i14 = i11 | 0;
 i11 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = 0;
 HEAP32[i16 >> 2] = i11;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i29, i13, i10);
 i10 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i16 = i10 + 4 | 0;
   i11 = i16 | 0;
   i30 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i30 | 0) != 0) {
    HEAP32[i11 >> 2] = i30;
    break;
   }
   i30 = i16 - 4 | 0;
   if ((i30 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i30 >> 2] | 0) + 4 >> 2] & 1](i30);
  }
 } while (0);
 i10 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i14 = i10 + 4 | 0;
   i30 = i14 | 0;
   i16 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
   if ((i16 | 0) != 0) {
    HEAP32[i30 >> 2] = i16;
    break;
   }
   i16 = i14 - 4 | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 1](i16);
  }
 } while (0);
 i10 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i15 = i10 | 0;
   i16 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i15 >> 2] = i16;
    break;
   }
  }
 } while (0);
 i10 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i13 = i10 | 0;
   i16 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i13 >> 2] = i16;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i17);
 i10 = i17 | 0;
 i17 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 i10 = i17 | 0;
 HEAP32[i19 >> 2] = H_BASE + 560;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i18, i19);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i9, i2);
 i2 = i8 | 0;
 i19 = i9 | 0;
 i9 = HEAP32[i19 >> 2] | 0;
 HEAP32[i19 >> 2] = 0;
 HEAP32[i2 >> 2] = i9;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i10, i18, i8);
 i8 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i2 = i8 + 4 | 0;
   i9 = i2 | 0;
   i16 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i16 | 0) != 0) {
    HEAP32[i9 >> 2] = i16;
    break;
   }
   i16 = i2 - 4 | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 1](i16);
  }
 } while (0);
 i8 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i19 = i8 + 4 | 0;
   i16 = i19 | 0;
   i2 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i16 >> 2] = i2;
    break;
   }
   i2 = i19 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i8 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i18 = i8 | 0;
   i2 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i18 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP32[i21 >> 2] = H_BASE + 472;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i20, i21);
 __ZN9Inspector19InspectorBasicValue6createEd(i7, d3);
 i21 = i6 | 0;
 i8 = i7 | 0;
 i7 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i21 >> 2] = i7;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i10, i20, i6);
 i6 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i21 = i6 + 4 | 0;
   i7 = i21 | 0;
   i2 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i7 >> 2] = i2;
    break;
   }
   i2 = i21 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i6 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i8 = i6 + 4 | 0;
   i2 = i8 | 0;
   i21 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i21 | 0) != 0) {
    HEAP32[i2 >> 2] = i21;
    break;
   }
   i21 = i8 - 4 | 0;
   if ((i21 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 1](i21);
  }
 } while (0);
 i6 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i20 = i6 | 0;
   i21 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
   if ((i21 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i20 >> 2] = i21;
    break;
   }
  }
 } while (0);
 HEAP32[i23 >> 2] = H_BASE + 344;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i22, i23);
 i23 = i24 | 0;
 i6 = i4 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i23 >> 2] = i4;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i10, i22, i24);
 i24 = HEAP32[i23 >> 2] | 0;
 do {
  if ((i24 | 0) != 0) {
   i23 = i24 + 4 | 0;
   i10 = i23 | 0;
   i4 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i10 >> 2] = i4;
    break;
   }
   i4 = i23 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
  }
 } while (0);
 i24 = HEAP32[i22 >> 2] | 0;
 do {
  if ((i24 | 0) != 0) {
   i22 = i24 | 0;
   i4 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i24);
    break;
   } else {
    HEAP32[i22 >> 2] = i4;
    break;
   }
  }
 } while (0);
 HEAP32[i26 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i25, i26);
 i26 = i27 | 0;
 HEAP32[i26 >> 2] = i17;
 i24 = (i17 | 0) == 0;
 if (!i24) {
  i4 = i17 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i29, i25, i27);
 i27 = HEAP32[i26 >> 2] | 0;
 do {
  if ((i27 | 0) != 0) {
   i26 = i27 + 4 | 0;
   i29 = i26 | 0;
   i4 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i29 >> 2] = i4;
    break;
   }
   i4 = i26 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
  }
 } while (0);
 i27 = HEAP32[i25 >> 2] | 0;
 do {
  if ((i27 | 0) != 0) {
   i25 = i27 | 0;
   i4 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i27);
    break;
   } else {
    HEAP32[i25 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i27 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i27 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i28, i12 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i27, i28) | 0;
 i27 = HEAP32[i28 >> 2] | 0;
 do {
  if ((i27 | 0) != 0) {
   i28 = i27 | 0;
   i1 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i27);
    break;
   } else {
    HEAP32[i28 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i24) {
   i27 = i17 + 4 | 0;
   i1 = i27 | 0;
   i28 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i28 | 0) != 0) {
    HEAP32[i1 >> 2] = i28;
    break;
   }
   i28 = i27 - 4 | 0;
   if ((i28 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i28 >> 2] | 0) + 4 >> 2] & 1](i28);
  }
 } while (0);
 if ((i12 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i17 = i12 + 4 | 0;
 i12 = i17 | 0;
 i24 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
 if ((i24 | 0) != 0) {
  HEAP32[i12 >> 2] = i24;
  STACKTOP = i5;
  return;
 }
 i24 = i17 - 4 | 0;
 if ((i24 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i24 >> 2] | 0) + 4 >> 2] & 1](i24);
 STACKTOP = i5;
 return;
}
function __ZN9Inspector34InspectorNetworkFrontendDispatcher18webSocketFrameSentERKN3WTF6StringEdNS1_10PassRefPtrINS_11TypeBuilder7Network14WebSocketFrameEEE(i1, i2, d3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 184 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i5 + 56 | 0;
 i14 = i5 + 64 | 0;
 i15 = i5 + 72 | 0;
 i16 = i5 + 80 | 0;
 i17 = i5 + 88 | 0;
 i18 = i5 + 96 | 0;
 i19 = i5 + 104 | 0;
 i20 = i5 + 112 | 0;
 i21 = i5 + 120 | 0;
 i22 = i5 + 128 | 0;
 i23 = i5 + 136 | 0;
 i24 = i5 + 144 | 0;
 i25 = i5 + 152 | 0;
 i26 = i5 + 160 | 0;
 i27 = i5 + 168 | 0;
 i28 = i5 + 176 | 0;
 __ZN9Inspector15InspectorObject6createEv(i12);
 i29 = i12 | 0;
 i12 = HEAP32[i29 >> 2] | 0;
 HEAP32[i29 >> 2] = 0;
 i29 = i12 | 0;
 HEAP32[i14 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i13, i14);
 HEAP32[i16 >> 2] = H_BASE + 2840;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i15, i16);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i11, i15);
 i16 = i10 | 0;
 i14 = i11 | 0;
 i11 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = 0;
 HEAP32[i16 >> 2] = i11;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i29, i13, i10);
 i10 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i16 = i10 + 4 | 0;
   i11 = i16 | 0;
   i30 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i30 | 0) != 0) {
    HEAP32[i11 >> 2] = i30;
    break;
   }
   i30 = i16 - 4 | 0;
   if ((i30 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i30 >> 2] | 0) + 4 >> 2] & 1](i30);
  }
 } while (0);
 i10 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i14 = i10 + 4 | 0;
   i30 = i14 | 0;
   i16 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
   if ((i16 | 0) != 0) {
    HEAP32[i30 >> 2] = i16;
    break;
   }
   i16 = i14 - 4 | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 1](i16);
  }
 } while (0);
 i10 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i15 = i10 | 0;
   i16 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i15 >> 2] = i16;
    break;
   }
  }
 } while (0);
 i10 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i13 = i10 | 0;
   i16 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i13 >> 2] = i16;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i17);
 i10 = i17 | 0;
 i17 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 i10 = i17 | 0;
 HEAP32[i19 >> 2] = H_BASE + 560;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i18, i19);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i9, i2);
 i2 = i8 | 0;
 i19 = i9 | 0;
 i9 = HEAP32[i19 >> 2] | 0;
 HEAP32[i19 >> 2] = 0;
 HEAP32[i2 >> 2] = i9;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i10, i18, i8);
 i8 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i2 = i8 + 4 | 0;
   i9 = i2 | 0;
   i16 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i16 | 0) != 0) {
    HEAP32[i9 >> 2] = i16;
    break;
   }
   i16 = i2 - 4 | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 1](i16);
  }
 } while (0);
 i8 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i19 = i8 + 4 | 0;
   i16 = i19 | 0;
   i2 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i16 >> 2] = i2;
    break;
   }
   i2 = i19 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i8 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i18 = i8 | 0;
   i2 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i18 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP32[i21 >> 2] = H_BASE + 472;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i20, i21);
 __ZN9Inspector19InspectorBasicValue6createEd(i7, d3);
 i21 = i6 | 0;
 i8 = i7 | 0;
 i7 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i21 >> 2] = i7;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i10, i20, i6);
 i6 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i21 = i6 + 4 | 0;
   i7 = i21 | 0;
   i2 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i7 >> 2] = i2;
    break;
   }
   i2 = i21 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i6 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i8 = i6 + 4 | 0;
   i2 = i8 | 0;
   i21 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i21 | 0) != 0) {
    HEAP32[i2 >> 2] = i21;
    break;
   }
   i21 = i8 - 4 | 0;
   if ((i21 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 1](i21);
  }
 } while (0);
 i6 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i20 = i6 | 0;
   i21 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
   if ((i21 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i20 >> 2] = i21;
    break;
   }
  }
 } while (0);
 HEAP32[i23 >> 2] = H_BASE + 344;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i22, i23);
 i23 = i24 | 0;
 i6 = i4 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i23 >> 2] = i4;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i10, i22, i24);
 i24 = HEAP32[i23 >> 2] | 0;
 do {
  if ((i24 | 0) != 0) {
   i23 = i24 + 4 | 0;
   i10 = i23 | 0;
   i4 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i10 >> 2] = i4;
    break;
   }
   i4 = i23 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
  }
 } while (0);
 i24 = HEAP32[i22 >> 2] | 0;
 do {
  if ((i24 | 0) != 0) {
   i22 = i24 | 0;
   i4 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i24);
    break;
   } else {
    HEAP32[i22 >> 2] = i4;
    break;
   }
  }
 } while (0);
 HEAP32[i26 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i25, i26);
 i26 = i27 | 0;
 HEAP32[i26 >> 2] = i17;
 i24 = (i17 | 0) == 0;
 if (!i24) {
  i4 = i17 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i29, i25, i27);
 i27 = HEAP32[i26 >> 2] | 0;
 do {
  if ((i27 | 0) != 0) {
   i26 = i27 + 4 | 0;
   i29 = i26 | 0;
   i4 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i29 >> 2] = i4;
    break;
   }
   i4 = i26 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
  }
 } while (0);
 i27 = HEAP32[i25 >> 2] | 0;
 do {
  if ((i27 | 0) != 0) {
   i25 = i27 | 0;
   i4 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i27);
    break;
   } else {
    HEAP32[i25 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i27 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i27 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i28, i12 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i27, i28) | 0;
 i27 = HEAP32[i28 >> 2] | 0;
 do {
  if ((i27 | 0) != 0) {
   i28 = i27 | 0;
   i1 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i27);
    break;
   } else {
    HEAP32[i28 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i24) {
   i27 = i17 + 4 | 0;
   i1 = i27 | 0;
   i28 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i28 | 0) != 0) {
    HEAP32[i1 >> 2] = i28;
    break;
   }
   i28 = i27 - 4 | 0;
   if ((i28 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i28 >> 2] | 0) + 4 >> 2] & 1](i28);
  }
 } while (0);
 if ((i12 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i17 = i12 + 4 | 0;
 i12 = i17 | 0;
 i24 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
 if ((i24 | 0) != 0) {
  HEAP32[i12 >> 2] = i24;
  STACKTOP = i5;
  return;
 }
 i24 = i17 - 4 | 0;
 if ((i24 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i24 >> 2] | 0) + 4 >> 2] & 1](i24);
 STACKTOP = i5;
 return;
}
function __ZN9Inspector30InspectorDOMFrontendDispatcher17childNodeInsertedEiiN3WTF10PassRefPtrINS_11TypeBuilder3DOM4NodeEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 184 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i5 + 56 | 0;
 i14 = i5 + 64 | 0;
 i15 = i5 + 72 | 0;
 i16 = i5 + 80 | 0;
 i17 = i5 + 88 | 0;
 i18 = i5 + 96 | 0;
 i19 = i5 + 104 | 0;
 i20 = i5 + 112 | 0;
 i21 = i5 + 120 | 0;
 i22 = i5 + 128 | 0;
 i23 = i5 + 136 | 0;
 i24 = i5 + 144 | 0;
 i25 = i5 + 152 | 0;
 i26 = i5 + 160 | 0;
 i27 = i5 + 168 | 0;
 i28 = i5 + 176 | 0;
 __ZN9Inspector15InspectorObject6createEv(i12);
 i29 = i12 | 0;
 i12 = HEAP32[i29 >> 2] | 0;
 HEAP32[i29 >> 2] = 0;
 i29 = i12 | 0;
 HEAP32[i14 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i13, i14);
 HEAP32[i16 >> 2] = H_BASE + 1304;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i15, i16);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i11, i15);
 i16 = i10 | 0;
 i14 = i11 | 0;
 i11 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = 0;
 HEAP32[i16 >> 2] = i11;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i29, i13, i10);
 i10 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i16 = i10 + 4 | 0;
   i11 = i16 | 0;
   i30 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i30 | 0) != 0) {
    HEAP32[i11 >> 2] = i30;
    break;
   }
   i30 = i16 - 4 | 0;
   if ((i30 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i30 >> 2] | 0) + 4 >> 2] & 1](i30);
  }
 } while (0);
 i10 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i14 = i10 + 4 | 0;
   i30 = i14 | 0;
   i16 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
   if ((i16 | 0) != 0) {
    HEAP32[i30 >> 2] = i16;
    break;
   }
   i16 = i14 - 4 | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 1](i16);
  }
 } while (0);
 i10 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i15 = i10 | 0;
   i16 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i15 >> 2] = i16;
    break;
   }
  }
 } while (0);
 i10 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i13 = i10 | 0;
   i16 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i13 >> 2] = i16;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i17);
 i10 = i17 | 0;
 i17 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 i10 = i17 | 0;
 HEAP32[i19 >> 2] = H_BASE + 1288;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i18, i19);
 __ZN9Inspector19InspectorBasicValue6createEd(i9, +(i2 | 0));
 i2 = i8 | 0;
 i19 = i9 | 0;
 i9 = HEAP32[i19 >> 2] | 0;
 HEAP32[i19 >> 2] = 0;
 HEAP32[i2 >> 2] = i9;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i10, i18, i8);
 i8 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i2 = i8 + 4 | 0;
   i9 = i2 | 0;
   i16 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i16 | 0) != 0) {
    HEAP32[i9 >> 2] = i16;
    break;
   }
   i16 = i2 - 4 | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 1](i16);
  }
 } while (0);
 i8 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i19 = i8 + 4 | 0;
   i16 = i19 | 0;
   i2 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i16 >> 2] = i2;
    break;
   }
   i2 = i19 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i8 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i18 = i8 | 0;
   i2 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i18 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP32[i21 >> 2] = H_BASE + 1272;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i20, i21);
 __ZN9Inspector19InspectorBasicValue6createEd(i7, +(i3 | 0));
 i3 = i6 | 0;
 i21 = i7 | 0;
 i7 = HEAP32[i21 >> 2] | 0;
 HEAP32[i21 >> 2] = 0;
 HEAP32[i3 >> 2] = i7;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i10, i20, i6);
 i6 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i3 = i6 + 4 | 0;
   i7 = i3 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i7 >> 2] = i8;
    break;
   }
   i8 = i3 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 1](i8);
  }
 } while (0);
 i6 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i21 = i6 + 4 | 0;
   i8 = i21 | 0;
   i3 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i8 >> 2] = i3;
    break;
   }
   i3 = i21 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 1](i3);
  }
 } while (0);
 i6 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i20 = i6 | 0;
   i3 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i20 >> 2] = i3;
    break;
   }
  }
 } while (0);
 HEAP32[i23 >> 2] = H_BASE + 1264;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i22, i23);
 i23 = i24 | 0;
 i6 = i4 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i23 >> 2] = i4;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i10, i22, i24);
 i24 = HEAP32[i23 >> 2] | 0;
 do {
  if ((i24 | 0) != 0) {
   i23 = i24 + 4 | 0;
   i10 = i23 | 0;
   i4 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i10 >> 2] = i4;
    break;
   }
   i4 = i23 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
  }
 } while (0);
 i24 = HEAP32[i22 >> 2] | 0;
 do {
  if ((i24 | 0) != 0) {
   i22 = i24 | 0;
   i4 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i24);
    break;
   } else {
    HEAP32[i22 >> 2] = i4;
    break;
   }
  }
 } while (0);
 HEAP32[i26 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i25, i26);
 i26 = i27 | 0;
 HEAP32[i26 >> 2] = i17;
 i24 = (i17 | 0) == 0;
 if (!i24) {
  i4 = i17 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i29, i25, i27);
 i27 = HEAP32[i26 >> 2] | 0;
 do {
  if ((i27 | 0) != 0) {
   i26 = i27 + 4 | 0;
   i29 = i26 | 0;
   i4 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i29 >> 2] = i4;
    break;
   }
   i4 = i26 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
  }
 } while (0);
 i27 = HEAP32[i25 >> 2] | 0;
 do {
  if ((i27 | 0) != 0) {
   i25 = i27 | 0;
   i4 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i27);
    break;
   } else {
    HEAP32[i25 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i27 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i27 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i28, i12 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i27, i28) | 0;
 i27 = HEAP32[i28 >> 2] | 0;
 do {
  if ((i27 | 0) != 0) {
   i28 = i27 | 0;
   i1 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i27);
    break;
   } else {
    HEAP32[i28 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i24) {
   i27 = i17 + 4 | 0;
   i1 = i27 | 0;
   i28 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i28 | 0) != 0) {
    HEAP32[i1 >> 2] = i28;
    break;
   }
   i28 = i27 - 4 | 0;
   if ((i28 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i28 >> 2] | 0) + 4 >> 2] & 1](i28);
  }
 } while (0);
 if ((i12 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i17 = i12 + 4 | 0;
 i12 = i17 | 0;
 i24 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
 if ((i24 | 0) != 0) {
  HEAP32[i12 >> 2] = i24;
  STACKTOP = i5;
  return;
 }
 i24 = i17 - 4 | 0;
 if ((i24 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i24 >> 2] | 0) + 4 >> 2] & 1](i24);
 STACKTOP = i5;
 return;
}
function __ZN9Inspector33InspectorCanvasFrontendDispatcher16traceLogsRemovedEPKN3WTF6StringES4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 160 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = i4 + 64 | 0;
 i14 = i4 + 72 | 0;
 i15 = i4 + 80 | 0;
 i16 = i4 + 88 | 0;
 i17 = i4 + 96 | 0;
 i18 = i4 + 104 | 0;
 i19 = i4 + 112 | 0;
 i20 = i4 + 120 | 0;
 i21 = i4 + 128 | 0;
 i22 = i4 + 136 | 0;
 i23 = i4 + 144 | 0;
 i24 = i4 + 152 | 0;
 __ZN9Inspector15InspectorObject6createEv(i11);
 i25 = i11 | 0;
 i11 = HEAP32[i25 >> 2] | 0;
 HEAP32[i25 >> 2] = 0;
 i25 = i11 | 0;
 HEAP32[i13 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i12, i13);
 HEAP32[i15 >> 2] = H_BASE + 1752;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i14, i15);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i10, i14);
 i15 = i9 | 0;
 i13 = i10 | 0;
 i10 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i15 >> 2] = i10;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i25, i12, i9);
 i9 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i15 = i9 + 4 | 0;
   i10 = i15 | 0;
   i26 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i26 | 0) != 0) {
    HEAP32[i10 >> 2] = i26;
    break;
   }
   i26 = i15 - 4 | 0;
   if ((i26 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i26 >> 2] | 0) + 4 >> 2] & 1](i26);
  }
 } while (0);
 i9 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i13 = i9 + 4 | 0;
   i26 = i13 | 0;
   i15 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i26 >> 2] = i15;
    break;
   }
   i15 = i13 - 4 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 1](i15);
  }
 } while (0);
 i9 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i14 = i9 | 0;
   i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i14 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i12 = i9 | 0;
   i15 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i12 >> 2] = i15;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i16);
 i9 = i16 | 0;
 i16 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 do {
  if ((i2 | 0) != 0) {
   HEAP32[i18 >> 2] = H_BASE + 1864;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i17, i18);
   __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i8, i2);
   i9 = i7 | 0;
   i15 = i8 | 0;
   i12 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = 0;
   HEAP32[i9 >> 2] = i12;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i16 | 0, i17, i7);
   i12 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i9 = i12 + 4 | 0;
     i14 = i9 | 0;
     i13 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
     if ((i13 | 0) != 0) {
      HEAP32[i14 >> 2] = i13;
      break;
     }
     i13 = i9 - 4 | 0;
     if ((i13 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 1](i13);
    }
   } while (0);
   i12 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i13 = i12 + 4 | 0;
     i9 = i13 | 0;
     i14 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     if ((i14 | 0) != 0) {
      HEAP32[i9 >> 2] = i14;
      break;
     }
     i14 = i13 - 4 | 0;
     if ((i14 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 1](i14);
    }
   } while (0);
   i12 = HEAP32[i17 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   i15 = i12 | 0;
   i14 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i15 >> 2] = i14;
    break;
   }
  }
 } while (0);
 do {
  if ((i3 | 0) != 0) {
   HEAP32[i20 >> 2] = H_BASE + 1736;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i19, i20);
   __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i6, i3);
   i17 = i5 | 0;
   i7 = i6 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = 0;
   HEAP32[i17 >> 2] = i8;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i16 | 0, i19, i5);
   i8 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i17 = i8 + 4 | 0;
     i2 = i17 | 0;
     i18 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
     if ((i18 | 0) != 0) {
      HEAP32[i2 >> 2] = i18;
      break;
     }
     i18 = i17 - 4 | 0;
     if ((i18 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 1](i18);
    }
   } while (0);
   i8 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i18 = i8 + 4 | 0;
     i17 = i18 | 0;
     i2 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
     if ((i2 | 0) != 0) {
      HEAP32[i17 >> 2] = i2;
      break;
     }
     i2 = i18 - 4 | 0;
     if ((i2 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
    }
   } while (0);
   i8 = HEAP32[i19 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i7 = i8 | 0;
   i2 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i7 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP32[i22 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i21, i22);
 i22 = i23 | 0;
 HEAP32[i22 >> 2] = i16;
 i19 = (i16 | 0) == 0;
 if (!i19) {
  i5 = i16 + 4 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i25, i21, i23);
 i23 = HEAP32[i22 >> 2] | 0;
 do {
  if ((i23 | 0) != 0) {
   i22 = i23 + 4 | 0;
   i25 = i22 | 0;
   i5 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i25 >> 2] = i5;
    break;
   }
   i5 = i22 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 1](i5);
  }
 } while (0);
 i23 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i23 | 0) != 0) {
   i21 = i23 | 0;
   i5 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i23);
    break;
   } else {
    HEAP32[i21 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i23 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i23 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i24, i11 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i23, i24) | 0;
 i23 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i23 | 0) != 0) {
   i24 = i23 | 0;
   i1 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i23);
    break;
   } else {
    HEAP32[i24 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i19) {
   i23 = i16 + 4 | 0;
   i1 = i23 | 0;
   i24 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i24 | 0) != 0) {
    HEAP32[i1 >> 2] = i24;
    break;
   }
   i24 = i23 - 4 | 0;
   if ((i24 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i24 >> 2] | 0) + 4 >> 2] & 1](i24);
  }
 } while (0);
 if ((i11 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i16 = i11 + 4 | 0;
 i11 = i16 | 0;
 i19 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
 if ((i19 | 0) != 0) {
  HEAP32[i11 >> 2] = i19;
  STACKTOP = i4;
  return;
 }
 i19 = i16 - 4 | 0;
 if ((i19 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 1](i19);
 STACKTOP = i4;
 return;
}
function __ZN9Inspector31InspectorPageFrontendDispatcher24frameScheduledNavigationERKN3WTF6StringEd(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 160 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = i4 + 64 | 0;
 i14 = i4 + 72 | 0;
 i15 = i4 + 80 | 0;
 i16 = i4 + 88 | 0;
 i17 = i4 + 96 | 0;
 i18 = i4 + 104 | 0;
 i19 = i4 + 112 | 0;
 i20 = i4 + 120 | 0;
 i21 = i4 + 128 | 0;
 i22 = i4 + 136 | 0;
 i23 = i4 + 144 | 0;
 i24 = i4 + 152 | 0;
 __ZN9Inspector15InspectorObject6createEv(i11);
 i25 = i11 | 0;
 i11 = HEAP32[i25 >> 2] | 0;
 HEAP32[i25 >> 2] = 0;
 i25 = i11 | 0;
 HEAP32[i13 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i12, i13);
 HEAP32[i15 >> 2] = H_BASE + 2608;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i14, i15);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i10, i14);
 i15 = i9 | 0;
 i13 = i10 | 0;
 i10 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i15 >> 2] = i10;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i25, i12, i9);
 i9 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i15 = i9 + 4 | 0;
   i10 = i15 | 0;
   i26 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i26 | 0) != 0) {
    HEAP32[i10 >> 2] = i26;
    break;
   }
   i26 = i15 - 4 | 0;
   if ((i26 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i26 >> 2] | 0) + 4 >> 2] & 1](i26);
  }
 } while (0);
 i9 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i13 = i9 + 4 | 0;
   i26 = i13 | 0;
   i15 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i26 >> 2] = i15;
    break;
   }
   i15 = i13 - 4 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 1](i15);
  }
 } while (0);
 i9 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i14 = i9 | 0;
   i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i14 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i12 = i9 | 0;
   i15 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i12 >> 2] = i15;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i16);
 i9 = i16 | 0;
 i16 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 i9 = i16 | 0;
 HEAP32[i18 >> 2] = H_BASE + 1864;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i17, i18);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i8, i2);
 i2 = i7 | 0;
 i18 = i8 | 0;
 i8 = HEAP32[i18 >> 2] | 0;
 HEAP32[i18 >> 2] = 0;
 HEAP32[i2 >> 2] = i8;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i9, i17, i7);
 i7 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i2 = i7 + 4 | 0;
   i8 = i2 | 0;
   i15 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i8 >> 2] = i15;
    break;
   }
   i15 = i2 - 4 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 1](i15);
  }
 } while (0);
 i7 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i18 = i7 + 4 | 0;
   i15 = i18 | 0;
   i2 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i15 >> 2] = i2;
    break;
   }
   i2 = i18 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i7 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i17 = i7 | 0;
   i2 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i17 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP32[i20 >> 2] = H_BASE + 2600;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i19, i20);
 __ZN9Inspector19InspectorBasicValue6createEd(i6, d3);
 i20 = i5 | 0;
 i7 = i6 | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i20 >> 2] = i6;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i9, i19, i5);
 i5 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i20 = i5 + 4 | 0;
   i9 = i20 | 0;
   i6 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i9 >> 2] = i6;
    break;
   }
   i6 = i20 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 1](i6);
  }
 } while (0);
 i5 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i7 = i5 + 4 | 0;
   i6 = i7 | 0;
   i20 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i20 | 0) != 0) {
    HEAP32[i6 >> 2] = i20;
    break;
   }
   i20 = i7 - 4 | 0;
   if ((i20 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 1](i20);
  }
 } while (0);
 i5 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i19 = i5 | 0;
   i20 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i20 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i19 >> 2] = i20;
    break;
   }
  }
 } while (0);
 HEAP32[i22 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i21, i22);
 i22 = i23 | 0;
 HEAP32[i22 >> 2] = i16;
 i5 = (i16 | 0) == 0;
 if (!i5) {
  i20 = i16 + 4 | 0;
  HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i25, i21, i23);
 i23 = HEAP32[i22 >> 2] | 0;
 do {
  if ((i23 | 0) != 0) {
   i22 = i23 + 4 | 0;
   i25 = i22 | 0;
   i20 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
   if ((i20 | 0) != 0) {
    HEAP32[i25 >> 2] = i20;
    break;
   }
   i20 = i22 - 4 | 0;
   if ((i20 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 1](i20);
  }
 } while (0);
 i23 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i23 | 0) != 0) {
   i21 = i23 | 0;
   i20 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
   if ((i20 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i23);
    break;
   } else {
    HEAP32[i21 >> 2] = i20;
    break;
   }
  }
 } while (0);
 i23 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i23 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i24, i11 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i23, i24) | 0;
 i23 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i23 | 0) != 0) {
   i24 = i23 | 0;
   i1 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i23);
    break;
   } else {
    HEAP32[i24 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i5) {
   i23 = i16 + 4 | 0;
   i1 = i23 | 0;
   i24 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i24 | 0) != 0) {
    HEAP32[i1 >> 2] = i24;
    break;
   }
   i24 = i23 - 4 | 0;
   if ((i24 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i24 >> 2] | 0) + 4 >> 2] & 1](i24);
  }
 } while (0);
 if ((i11 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i16 = i11 + 4 | 0;
 i11 = i16 | 0;
 i5 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i11 >> 2] = i5;
  STACKTOP = i4;
  return;
 }
 i5 = i16 - 4 | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 1](i5);
 STACKTOP = i4;
 return;
}
function __ZN9Inspector34InspectorNetworkFrontendDispatcher15webSocketClosedERKN3WTF6StringEd(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 160 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = i4 + 64 | 0;
 i14 = i4 + 72 | 0;
 i15 = i4 + 80 | 0;
 i16 = i4 + 88 | 0;
 i17 = i4 + 96 | 0;
 i18 = i4 + 104 | 0;
 i19 = i4 + 112 | 0;
 i20 = i4 + 120 | 0;
 i21 = i4 + 128 | 0;
 i22 = i4 + 136 | 0;
 i23 = i4 + 144 | 0;
 i24 = i4 + 152 | 0;
 __ZN9Inspector15InspectorObject6createEv(i11);
 i25 = i11 | 0;
 i11 = HEAP32[i25 >> 2] | 0;
 HEAP32[i25 >> 2] = 0;
 i25 = i11 | 0;
 HEAP32[i13 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i12, i13);
 HEAP32[i15 >> 2] = H_BASE + 2952;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i14, i15);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i10, i14);
 i15 = i9 | 0;
 i13 = i10 | 0;
 i10 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i15 >> 2] = i10;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i25, i12, i9);
 i9 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i15 = i9 + 4 | 0;
   i10 = i15 | 0;
   i26 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i26 | 0) != 0) {
    HEAP32[i10 >> 2] = i26;
    break;
   }
   i26 = i15 - 4 | 0;
   if ((i26 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i26 >> 2] | 0) + 4 >> 2] & 1](i26);
  }
 } while (0);
 i9 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i13 = i9 + 4 | 0;
   i26 = i13 | 0;
   i15 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i26 >> 2] = i15;
    break;
   }
   i15 = i13 - 4 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 1](i15);
  }
 } while (0);
 i9 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i14 = i9 | 0;
   i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i14 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i12 = i9 | 0;
   i15 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i12 >> 2] = i15;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i16);
 i9 = i16 | 0;
 i16 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 i9 = i16 | 0;
 HEAP32[i18 >> 2] = H_BASE + 560;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i17, i18);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i8, i2);
 i2 = i7 | 0;
 i18 = i8 | 0;
 i8 = HEAP32[i18 >> 2] | 0;
 HEAP32[i18 >> 2] = 0;
 HEAP32[i2 >> 2] = i8;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i9, i17, i7);
 i7 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i2 = i7 + 4 | 0;
   i8 = i2 | 0;
   i15 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i8 >> 2] = i15;
    break;
   }
   i15 = i2 - 4 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 1](i15);
  }
 } while (0);
 i7 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i18 = i7 + 4 | 0;
   i15 = i18 | 0;
   i2 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i15 >> 2] = i2;
    break;
   }
   i2 = i18 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i7 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i17 = i7 | 0;
   i2 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i17 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP32[i20 >> 2] = H_BASE + 472;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i19, i20);
 __ZN9Inspector19InspectorBasicValue6createEd(i6, d3);
 i20 = i5 | 0;
 i7 = i6 | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i20 >> 2] = i6;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i9, i19, i5);
 i5 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i20 = i5 + 4 | 0;
   i9 = i20 | 0;
   i6 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i9 >> 2] = i6;
    break;
   }
   i6 = i20 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 1](i6);
  }
 } while (0);
 i5 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i7 = i5 + 4 | 0;
   i6 = i7 | 0;
   i20 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i20 | 0) != 0) {
    HEAP32[i6 >> 2] = i20;
    break;
   }
   i20 = i7 - 4 | 0;
   if ((i20 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 1](i20);
  }
 } while (0);
 i5 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i19 = i5 | 0;
   i20 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i20 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i19 >> 2] = i20;
    break;
   }
  }
 } while (0);
 HEAP32[i22 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i21, i22);
 i22 = i23 | 0;
 HEAP32[i22 >> 2] = i16;
 i5 = (i16 | 0) == 0;
 if (!i5) {
  i20 = i16 + 4 | 0;
  HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i25, i21, i23);
 i23 = HEAP32[i22 >> 2] | 0;
 do {
  if ((i23 | 0) != 0) {
   i22 = i23 + 4 | 0;
   i25 = i22 | 0;
   i20 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
   if ((i20 | 0) != 0) {
    HEAP32[i25 >> 2] = i20;
    break;
   }
   i20 = i22 - 4 | 0;
   if ((i20 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 1](i20);
  }
 } while (0);
 i23 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i23 | 0) != 0) {
   i21 = i23 | 0;
   i20 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
   if ((i20 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i23);
    break;
   } else {
    HEAP32[i21 >> 2] = i20;
    break;
   }
  }
 } while (0);
 i23 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i23 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i24, i11 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i23, i24) | 0;
 i23 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i23 | 0) != 0) {
   i24 = i23 | 0;
   i1 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i23);
    break;
   } else {
    HEAP32[i24 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i5) {
   i23 = i16 + 4 | 0;
   i1 = i23 | 0;
   i24 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i24 | 0) != 0) {
    HEAP32[i1 >> 2] = i24;
    break;
   }
   i24 = i23 - 4 | 0;
   if ((i24 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i24 >> 2] | 0) + 4 >> 2] & 1](i24);
  }
 } while (0);
 if ((i11 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i16 = i11 + 4 | 0;
 i11 = i16 | 0;
 i5 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i11 >> 2] = i5;
  STACKTOP = i4;
  return;
 }
 i5 = i16 - 4 | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 1](i5);
 STACKTOP = i4;
 return;
}
function __ZN9Inspector39InspectorHeapProfilerFrontendDispatcher20addHeapSnapshotChunkEiRKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 160 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = i4 + 64 | 0;
 i14 = i4 + 72 | 0;
 i15 = i4 + 80 | 0;
 i16 = i4 + 88 | 0;
 i17 = i4 + 96 | 0;
 i18 = i4 + 104 | 0;
 i19 = i4 + 112 | 0;
 i20 = i4 + 120 | 0;
 i21 = i4 + 128 | 0;
 i22 = i4 + 136 | 0;
 i23 = i4 + 144 | 0;
 i24 = i4 + 152 | 0;
 __ZN9Inspector15InspectorObject6createEv(i11);
 i25 = i11 | 0;
 i11 = HEAP32[i25 >> 2] | 0;
 HEAP32[i25 >> 2] = 0;
 i25 = i11 | 0;
 HEAP32[i13 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i12, i13);
 HEAP32[i15 >> 2] = H_BASE + 792;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i14, i15);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i10, i14);
 i15 = i9 | 0;
 i13 = i10 | 0;
 i10 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i15 >> 2] = i10;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i25, i12, i9);
 i9 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i15 = i9 + 4 | 0;
   i10 = i15 | 0;
   i26 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i26 | 0) != 0) {
    HEAP32[i10 >> 2] = i26;
    break;
   }
   i26 = i15 - 4 | 0;
   if ((i26 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i26 >> 2] | 0) + 4 >> 2] & 1](i26);
  }
 } while (0);
 i9 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i13 = i9 + 4 | 0;
   i26 = i13 | 0;
   i15 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i26 >> 2] = i15;
    break;
   }
   i15 = i13 - 4 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 1](i15);
  }
 } while (0);
 i9 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i14 = i9 | 0;
   i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i14 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i12 = i9 | 0;
   i15 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i12 >> 2] = i15;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i16);
 i9 = i16 | 0;
 i16 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 i9 = i16 | 0;
 HEAP32[i18 >> 2] = H_BASE + 784;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i17, i18);
 __ZN9Inspector19InspectorBasicValue6createEd(i8, +(i2 | 0));
 i2 = i7 | 0;
 i18 = i8 | 0;
 i8 = HEAP32[i18 >> 2] | 0;
 HEAP32[i18 >> 2] = 0;
 HEAP32[i2 >> 2] = i8;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i9, i17, i7);
 i7 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i2 = i7 + 4 | 0;
   i8 = i2 | 0;
   i15 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i8 >> 2] = i15;
    break;
   }
   i15 = i2 - 4 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 1](i15);
  }
 } while (0);
 i7 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i18 = i7 + 4 | 0;
   i15 = i18 | 0;
   i2 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i15 >> 2] = i2;
    break;
   }
   i2 = i18 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i7 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i17 = i7 | 0;
   i2 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i17 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP32[i20 >> 2] = H_BASE + 776;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i19, i20);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i6, i3);
 i3 = i5 | 0;
 i20 = i6 | 0;
 i6 = HEAP32[i20 >> 2] | 0;
 HEAP32[i20 >> 2] = 0;
 HEAP32[i3 >> 2] = i6;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i9, i19, i5);
 i5 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 + 4 | 0;
   i9 = i3 | 0;
   i6 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i9 >> 2] = i6;
    break;
   }
   i6 = i3 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 1](i6);
  }
 } while (0);
 i5 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i20 = i5 + 4 | 0;
   i6 = i20 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i6 >> 2] = i3;
    break;
   }
   i3 = i20 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 1](i3);
  }
 } while (0);
 i5 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i19 = i5 | 0;
   i3 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i19 >> 2] = i3;
    break;
   }
  }
 } while (0);
 HEAP32[i22 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i21, i22);
 i22 = i23 | 0;
 HEAP32[i22 >> 2] = i16;
 i5 = (i16 | 0) == 0;
 if (!i5) {
  i3 = i16 + 4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i25, i21, i23);
 i23 = HEAP32[i22 >> 2] | 0;
 do {
  if ((i23 | 0) != 0) {
   i22 = i23 + 4 | 0;
   i25 = i22 | 0;
   i3 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i25 >> 2] = i3;
    break;
   }
   i3 = i22 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 1](i3);
  }
 } while (0);
 i23 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i23 | 0) != 0) {
   i21 = i23 | 0;
   i3 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i23);
    break;
   } else {
    HEAP32[i21 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i23 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i23 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i24, i11 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i23, i24) | 0;
 i23 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i23 | 0) != 0) {
   i24 = i23 | 0;
   i1 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i23);
    break;
   } else {
    HEAP32[i24 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i5) {
   i23 = i16 + 4 | 0;
   i1 = i23 | 0;
   i24 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i24 | 0) != 0) {
    HEAP32[i1 >> 2] = i24;
    break;
   }
   i24 = i23 - 4 | 0;
   if ((i24 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i24 >> 2] | 0) + 4 >> 2] & 1](i24);
  }
 } while (0);
 if ((i11 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i16 = i11 + 4 | 0;
 i11 = i16 | 0;
 i5 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i11 >> 2] = i5;
  STACKTOP = i4;
  return;
 }
 i5 = i16 - 4 | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 1](i5);
 STACKTOP = i4;
 return;
}
function __ZN9Inspector34InspectorNetworkFrontendDispatcher16webSocketCreatedERKN3WTF6StringES4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 160 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = i4 + 64 | 0;
 i14 = i4 + 72 | 0;
 i15 = i4 + 80 | 0;
 i16 = i4 + 88 | 0;
 i17 = i4 + 96 | 0;
 i18 = i4 + 104 | 0;
 i19 = i4 + 112 | 0;
 i20 = i4 + 120 | 0;
 i21 = i4 + 128 | 0;
 i22 = i4 + 136 | 0;
 i23 = i4 + 144 | 0;
 i24 = i4 + 152 | 0;
 __ZN9Inspector15InspectorObject6createEv(i11);
 i25 = i11 | 0;
 i11 = HEAP32[i25 >> 2] | 0;
 HEAP32[i25 >> 2] = 0;
 i25 = i11 | 0;
 HEAP32[i13 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i12, i13);
 HEAP32[i15 >> 2] = H_BASE + 2984;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i14, i15);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i10, i14);
 i15 = i9 | 0;
 i13 = i10 | 0;
 i10 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i15 >> 2] = i10;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i25, i12, i9);
 i9 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i15 = i9 + 4 | 0;
   i10 = i15 | 0;
   i26 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i26 | 0) != 0) {
    HEAP32[i10 >> 2] = i26;
    break;
   }
   i26 = i15 - 4 | 0;
   if ((i26 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i26 >> 2] | 0) + 4 >> 2] & 1](i26);
  }
 } while (0);
 i9 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i13 = i9 + 4 | 0;
   i26 = i13 | 0;
   i15 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i26 >> 2] = i15;
    break;
   }
   i15 = i13 - 4 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 1](i15);
  }
 } while (0);
 i9 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i14 = i9 | 0;
   i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i14 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i12 = i9 | 0;
   i15 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i12 >> 2] = i15;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i16);
 i9 = i16 | 0;
 i16 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 i9 = i16 | 0;
 HEAP32[i18 >> 2] = H_BASE + 560;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i17, i18);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i8, i2);
 i2 = i7 | 0;
 i18 = i8 | 0;
 i8 = HEAP32[i18 >> 2] | 0;
 HEAP32[i18 >> 2] = 0;
 HEAP32[i2 >> 2] = i8;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i9, i17, i7);
 i7 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i2 = i7 + 4 | 0;
   i8 = i2 | 0;
   i15 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i8 >> 2] = i15;
    break;
   }
   i15 = i2 - 4 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 1](i15);
  }
 } while (0);
 i7 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i18 = i7 + 4 | 0;
   i15 = i18 | 0;
   i2 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i15 >> 2] = i2;
    break;
   }
   i2 = i18 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i7 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i17 = i7 | 0;
   i2 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i17 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP32[i20 >> 2] = H_BASE + 2976;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i19, i20);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i6, i3);
 i3 = i5 | 0;
 i20 = i6 | 0;
 i6 = HEAP32[i20 >> 2] | 0;
 HEAP32[i20 >> 2] = 0;
 HEAP32[i3 >> 2] = i6;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i9, i19, i5);
 i5 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 + 4 | 0;
   i9 = i3 | 0;
   i6 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i9 >> 2] = i6;
    break;
   }
   i6 = i3 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 1](i6);
  }
 } while (0);
 i5 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i20 = i5 + 4 | 0;
   i6 = i20 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i6 >> 2] = i3;
    break;
   }
   i3 = i20 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 1](i3);
  }
 } while (0);
 i5 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i19 = i5 | 0;
   i3 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i19 >> 2] = i3;
    break;
   }
  }
 } while (0);
 HEAP32[i22 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i21, i22);
 i22 = i23 | 0;
 HEAP32[i22 >> 2] = i16;
 i5 = (i16 | 0) == 0;
 if (!i5) {
  i3 = i16 + 4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i25, i21, i23);
 i23 = HEAP32[i22 >> 2] | 0;
 do {
  if ((i23 | 0) != 0) {
   i22 = i23 + 4 | 0;
   i25 = i22 | 0;
   i3 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i25 >> 2] = i3;
    break;
   }
   i3 = i22 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 1](i3);
  }
 } while (0);
 i23 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i23 | 0) != 0) {
   i21 = i23 | 0;
   i3 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i23);
    break;
   } else {
    HEAP32[i21 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i23 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i23 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i24, i11 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i23, i24) | 0;
 i23 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i23 | 0) != 0) {
   i24 = i23 | 0;
   i1 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i23);
    break;
   } else {
    HEAP32[i24 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i5) {
   i23 = i16 + 4 | 0;
   i1 = i23 | 0;
   i24 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i24 | 0) != 0) {
    HEAP32[i1 >> 2] = i24;
    break;
   }
   i24 = i23 - 4 | 0;
   if ((i24 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i24 >> 2] | 0) + 4 >> 2] & 1](i24);
  }
 } while (0);
 if ((i11 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i16 = i11 + 4 | 0;
 i11 = i16 | 0;
 i5 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i11 >> 2] = i5;
  STACKTOP = i4;
  return;
 }
 i5 = i16 - 4 | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 1](i5);
 STACKTOP = i4;
 return;
}
function __ZN9Inspector35InspectorProfilerFrontendDispatcher20addHeapSnapshotChunkEiRKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 160 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = i4 + 64 | 0;
 i14 = i4 + 72 | 0;
 i15 = i4 + 80 | 0;
 i16 = i4 + 88 | 0;
 i17 = i4 + 96 | 0;
 i18 = i4 + 104 | 0;
 i19 = i4 + 112 | 0;
 i20 = i4 + 120 | 0;
 i21 = i4 + 128 | 0;
 i22 = i4 + 136 | 0;
 i23 = i4 + 144 | 0;
 i24 = i4 + 152 | 0;
 __ZN9Inspector15InspectorObject6createEv(i11);
 i25 = i11 | 0;
 i11 = HEAP32[i25 >> 2] | 0;
 HEAP32[i25 >> 2] = 0;
 i25 = i11 | 0;
 HEAP32[i13 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i12, i13);
 HEAP32[i15 >> 2] = H_BASE + 2376;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i14, i15);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i10, i14);
 i15 = i9 | 0;
 i13 = i10 | 0;
 i10 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i15 >> 2] = i10;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i25, i12, i9);
 i9 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i15 = i9 + 4 | 0;
   i10 = i15 | 0;
   i26 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i26 | 0) != 0) {
    HEAP32[i10 >> 2] = i26;
    break;
   }
   i26 = i15 - 4 | 0;
   if ((i26 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i26 >> 2] | 0) + 4 >> 2] & 1](i26);
  }
 } while (0);
 i9 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i13 = i9 + 4 | 0;
   i26 = i13 | 0;
   i15 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i26 >> 2] = i15;
    break;
   }
   i15 = i13 - 4 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 1](i15);
  }
 } while (0);
 i9 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i14 = i9 | 0;
   i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i14 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i12 = i9 | 0;
   i15 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i12 >> 2] = i15;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i16);
 i9 = i16 | 0;
 i16 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 i9 = i16 | 0;
 HEAP32[i18 >> 2] = H_BASE + 784;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i17, i18);
 __ZN9Inspector19InspectorBasicValue6createEd(i8, +(i2 | 0));
 i2 = i7 | 0;
 i18 = i8 | 0;
 i8 = HEAP32[i18 >> 2] | 0;
 HEAP32[i18 >> 2] = 0;
 HEAP32[i2 >> 2] = i8;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i9, i17, i7);
 i7 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i2 = i7 + 4 | 0;
   i8 = i2 | 0;
   i15 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i8 >> 2] = i15;
    break;
   }
   i15 = i2 - 4 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 1](i15);
  }
 } while (0);
 i7 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i18 = i7 + 4 | 0;
   i15 = i18 | 0;
   i2 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i15 >> 2] = i2;
    break;
   }
   i2 = i18 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i7 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i17 = i7 | 0;
   i2 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i17 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP32[i20 >> 2] = H_BASE + 776;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i19, i20);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i6, i3);
 i3 = i5 | 0;
 i20 = i6 | 0;
 i6 = HEAP32[i20 >> 2] | 0;
 HEAP32[i20 >> 2] = 0;
 HEAP32[i3 >> 2] = i6;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i9, i19, i5);
 i5 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 + 4 | 0;
   i9 = i3 | 0;
   i6 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i9 >> 2] = i6;
    break;
   }
   i6 = i3 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 1](i6);
  }
 } while (0);
 i5 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i20 = i5 + 4 | 0;
   i6 = i20 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i6 >> 2] = i3;
    break;
   }
   i3 = i20 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 1](i3);
  }
 } while (0);
 i5 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i19 = i5 | 0;
   i3 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i19 >> 2] = i3;
    break;
   }
  }
 } while (0);
 HEAP32[i22 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i21, i22);
 i22 = i23 | 0;
 HEAP32[i22 >> 2] = i16;
 i5 = (i16 | 0) == 0;
 if (!i5) {
  i3 = i16 + 4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i25, i21, i23);
 i23 = HEAP32[i22 >> 2] | 0;
 do {
  if ((i23 | 0) != 0) {
   i22 = i23 + 4 | 0;
   i25 = i22 | 0;
   i3 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i25 >> 2] = i3;
    break;
   }
   i3 = i22 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 1](i3);
  }
 } while (0);
 i23 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i23 | 0) != 0) {
   i21 = i23 | 0;
   i3 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i23);
    break;
   } else {
    HEAP32[i21 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i23 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i23 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i24, i11 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i23, i24) | 0;
 i23 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i23 | 0) != 0) {
   i24 = i23 | 0;
   i1 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i23);
    break;
   } else {
    HEAP32[i24 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i5) {
   i23 = i16 + 4 | 0;
   i1 = i23 | 0;
   i24 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i24 | 0) != 0) {
    HEAP32[i1 >> 2] = i24;
    break;
   }
   i24 = i23 - 4 | 0;
   if ((i24 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i24 >> 2] | 0) + 4 >> 2] & 1](i24);
  }
 } while (0);
 if ((i11 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i16 = i11 + 4 | 0;
 i11 = i16 | 0;
 i5 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i11 >> 2] = i5;
  STACKTOP = i4;
  return;
 }
 i5 = i16 - 4 | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 1](i5);
 STACKTOP = i4;
 return;
}
function __ZN9Inspector30InspectorDOMFrontendDispatcher21characterDataModifiedEiRKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 160 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = i4 + 64 | 0;
 i14 = i4 + 72 | 0;
 i15 = i4 + 80 | 0;
 i16 = i4 + 88 | 0;
 i17 = i4 + 96 | 0;
 i18 = i4 + 104 | 0;
 i19 = i4 + 112 | 0;
 i20 = i4 + 120 | 0;
 i21 = i4 + 128 | 0;
 i22 = i4 + 136 | 0;
 i23 = i4 + 144 | 0;
 i24 = i4 + 152 | 0;
 __ZN9Inspector15InspectorObject6createEv(i11);
 i25 = i11 | 0;
 i11 = HEAP32[i25 >> 2] | 0;
 HEAP32[i25 >> 2] = 0;
 i25 = i11 | 0;
 HEAP32[i13 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i12, i13);
 HEAP32[i15 >> 2] = H_BASE + 1392;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i14, i15);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i10, i14);
 i15 = i9 | 0;
 i13 = i10 | 0;
 i10 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i15 >> 2] = i10;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i25, i12, i9);
 i9 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i15 = i9 + 4 | 0;
   i10 = i15 | 0;
   i26 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i26 | 0) != 0) {
    HEAP32[i10 >> 2] = i26;
    break;
   }
   i26 = i15 - 4 | 0;
   if ((i26 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i26 >> 2] | 0) + 4 >> 2] & 1](i26);
  }
 } while (0);
 i9 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i13 = i9 + 4 | 0;
   i26 = i13 | 0;
   i15 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i26 >> 2] = i15;
    break;
   }
   i15 = i13 - 4 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 1](i15);
  }
 } while (0);
 i9 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i14 = i9 | 0;
   i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i14 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i12 = i9 | 0;
   i15 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i12 >> 2] = i15;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i16);
 i9 = i16 | 0;
 i16 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 i9 = i16 | 0;
 HEAP32[i18 >> 2] = H_BASE + 1512;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i17, i18);
 __ZN9Inspector19InspectorBasicValue6createEd(i8, +(i2 | 0));
 i2 = i7 | 0;
 i18 = i8 | 0;
 i8 = HEAP32[i18 >> 2] | 0;
 HEAP32[i18 >> 2] = 0;
 HEAP32[i2 >> 2] = i8;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i9, i17, i7);
 i7 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i2 = i7 + 4 | 0;
   i8 = i2 | 0;
   i15 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i8 >> 2] = i15;
    break;
   }
   i15 = i2 - 4 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 1](i15);
  }
 } while (0);
 i7 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i18 = i7 + 4 | 0;
   i15 = i18 | 0;
   i2 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i15 >> 2] = i2;
    break;
   }
   i2 = i18 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i7 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i17 = i7 | 0;
   i2 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i17 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP32[i20 >> 2] = H_BASE + 1376;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i19, i20);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i6, i3);
 i3 = i5 | 0;
 i20 = i6 | 0;
 i6 = HEAP32[i20 >> 2] | 0;
 HEAP32[i20 >> 2] = 0;
 HEAP32[i3 >> 2] = i6;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i9, i19, i5);
 i5 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 + 4 | 0;
   i9 = i3 | 0;
   i6 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i9 >> 2] = i6;
    break;
   }
   i6 = i3 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 1](i6);
  }
 } while (0);
 i5 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i20 = i5 + 4 | 0;
   i6 = i20 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i6 >> 2] = i3;
    break;
   }
   i3 = i20 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 1](i3);
  }
 } while (0);
 i5 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i19 = i5 | 0;
   i3 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i19 >> 2] = i3;
    break;
   }
  }
 } while (0);
 HEAP32[i22 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i21, i22);
 i22 = i23 | 0;
 HEAP32[i22 >> 2] = i16;
 i5 = (i16 | 0) == 0;
 if (!i5) {
  i3 = i16 + 4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i25, i21, i23);
 i23 = HEAP32[i22 >> 2] | 0;
 do {
  if ((i23 | 0) != 0) {
   i22 = i23 + 4 | 0;
   i25 = i22 | 0;
   i3 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i25 >> 2] = i3;
    break;
   }
   i3 = i22 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 1](i3);
  }
 } while (0);
 i23 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i23 | 0) != 0) {
   i21 = i23 | 0;
   i3 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i23);
    break;
   } else {
    HEAP32[i21 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i23 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i23 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i24, i11 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i23, i24) | 0;
 i23 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i23 | 0) != 0) {
   i24 = i23 | 0;
   i1 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i23);
    break;
   } else {
    HEAP32[i24 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i5) {
   i23 = i16 + 4 | 0;
   i1 = i23 | 0;
   i24 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i24 | 0) != 0) {
    HEAP32[i1 >> 2] = i24;
    break;
   }
   i24 = i23 - 4 | 0;
   if ((i24 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i24 >> 2] | 0) + 4 >> 2] & 1](i24);
  }
 } while (0);
 if ((i11 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i16 = i11 + 4 | 0;
 i11 = i16 | 0;
 i5 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i11 >> 2] = i5;
  STACKTOP = i4;
  return;
 }
 i5 = i16 - 4 | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 1](i5);
 STACKTOP = i4;
 return;
}
function __ZN9Inspector30InspectorDOMFrontendDispatcher16attributeRemovedEiRKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 160 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = i4 + 64 | 0;
 i14 = i4 + 72 | 0;
 i15 = i4 + 80 | 0;
 i16 = i4 + 88 | 0;
 i17 = i4 + 96 | 0;
 i18 = i4 + 104 | 0;
 i19 = i4 + 112 | 0;
 i20 = i4 + 120 | 0;
 i21 = i4 + 128 | 0;
 i22 = i4 + 136 | 0;
 i23 = i4 + 144 | 0;
 i24 = i4 + 152 | 0;
 __ZN9Inspector15InspectorObject6createEv(i11);
 i25 = i11 | 0;
 i11 = HEAP32[i25 >> 2] | 0;
 HEAP32[i25 >> 2] = 0;
 i25 = i11 | 0;
 HEAP32[i13 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i12, i13);
 HEAP32[i15 >> 2] = H_BASE + 1472;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i14, i15);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i10, i14);
 i15 = i9 | 0;
 i13 = i10 | 0;
 i10 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i15 >> 2] = i10;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i25, i12, i9);
 i9 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i15 = i9 + 4 | 0;
   i10 = i15 | 0;
   i26 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i26 | 0) != 0) {
    HEAP32[i10 >> 2] = i26;
    break;
   }
   i26 = i15 - 4 | 0;
   if ((i26 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i26 >> 2] | 0) + 4 >> 2] & 1](i26);
  }
 } while (0);
 i9 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i13 = i9 + 4 | 0;
   i26 = i13 | 0;
   i15 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i26 >> 2] = i15;
    break;
   }
   i15 = i13 - 4 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 1](i15);
  }
 } while (0);
 i9 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i14 = i9 | 0;
   i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i14 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i12 = i9 | 0;
   i15 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i12 >> 2] = i15;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i16);
 i9 = i16 | 0;
 i16 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 i9 = i16 | 0;
 HEAP32[i18 >> 2] = H_BASE + 1512;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i17, i18);
 __ZN9Inspector19InspectorBasicValue6createEd(i8, +(i2 | 0));
 i2 = i7 | 0;
 i18 = i8 | 0;
 i8 = HEAP32[i18 >> 2] | 0;
 HEAP32[i18 >> 2] = 0;
 HEAP32[i2 >> 2] = i8;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i9, i17, i7);
 i7 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i2 = i7 + 4 | 0;
   i8 = i2 | 0;
   i15 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i8 >> 2] = i15;
    break;
   }
   i15 = i2 - 4 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 1](i15);
  }
 } while (0);
 i7 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i18 = i7 + 4 | 0;
   i15 = i18 | 0;
   i2 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i15 >> 2] = i2;
    break;
   }
   i2 = i18 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i7 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i17 = i7 | 0;
   i2 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i17 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP32[i20 >> 2] = H_BASE + 1504;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i19, i20);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i6, i3);
 i3 = i5 | 0;
 i20 = i6 | 0;
 i6 = HEAP32[i20 >> 2] | 0;
 HEAP32[i20 >> 2] = 0;
 HEAP32[i3 >> 2] = i6;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i9, i19, i5);
 i5 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 + 4 | 0;
   i9 = i3 | 0;
   i6 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i9 >> 2] = i6;
    break;
   }
   i6 = i3 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 1](i6);
  }
 } while (0);
 i5 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i20 = i5 + 4 | 0;
   i6 = i20 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i6 >> 2] = i3;
    break;
   }
   i3 = i20 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 1](i3);
  }
 } while (0);
 i5 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i19 = i5 | 0;
   i3 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i19 >> 2] = i3;
    break;
   }
  }
 } while (0);
 HEAP32[i22 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i21, i22);
 i22 = i23 | 0;
 HEAP32[i22 >> 2] = i16;
 i5 = (i16 | 0) == 0;
 if (!i5) {
  i3 = i16 + 4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i25, i21, i23);
 i23 = HEAP32[i22 >> 2] | 0;
 do {
  if ((i23 | 0) != 0) {
   i22 = i23 + 4 | 0;
   i25 = i22 | 0;
   i3 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i25 >> 2] = i3;
    break;
   }
   i3 = i22 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 1](i3);
  }
 } while (0);
 i23 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i23 | 0) != 0) {
   i21 = i23 | 0;
   i3 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i23);
    break;
   } else {
    HEAP32[i21 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i23 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i23 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i24, i11 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i23, i24) | 0;
 i23 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i23 | 0) != 0) {
   i24 = i23 | 0;
   i1 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i23);
    break;
   } else {
    HEAP32[i24 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i5) {
   i23 = i16 + 4 | 0;
   i1 = i23 | 0;
   i24 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i24 | 0) != 0) {
    HEAP32[i1 >> 2] = i24;
    break;
   }
   i24 = i23 - 4 | 0;
   if ((i24 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i24 >> 2] | 0) + 4 >> 2] & 1](i24);
  }
 } while (0);
 if ((i11 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i16 = i11 + 4 | 0;
 i11 = i16 | 0;
 i5 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i11 >> 2] = i5;
  STACKTOP = i4;
  return;
 }
 i5 = i16 - 4 | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 1](i5);
 STACKTOP = i4;
 return;
}
function __ZN9Inspector39InspectorHeapProfilerFrontendDispatcher26reportHeapSnapshotProgressEii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 160 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = i4 + 64 | 0;
 i14 = i4 + 72 | 0;
 i15 = i4 + 80 | 0;
 i16 = i4 + 88 | 0;
 i17 = i4 + 96 | 0;
 i18 = i4 + 104 | 0;
 i19 = i4 + 112 | 0;
 i20 = i4 + 120 | 0;
 i21 = i4 + 128 | 0;
 i22 = i4 + 136 | 0;
 i23 = i4 + 144 | 0;
 i24 = i4 + 152 | 0;
 __ZN9Inspector15InspectorObject6createEv(i11);
 i25 = i11 | 0;
 i11 = HEAP32[i25 >> 2] | 0;
 HEAP32[i25 >> 2] = 0;
 i25 = i11 | 0;
 HEAP32[i13 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i12, i13);
 HEAP32[i15 >> 2] = H_BASE + 656;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i14, i15);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i10, i14);
 i15 = i9 | 0;
 i13 = i10 | 0;
 i10 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i15 >> 2] = i10;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i25, i12, i9);
 i9 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i15 = i9 + 4 | 0;
   i10 = i15 | 0;
   i26 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i26 | 0) != 0) {
    HEAP32[i10 >> 2] = i26;
    break;
   }
   i26 = i15 - 4 | 0;
   if ((i26 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i26 >> 2] | 0) + 4 >> 2] & 1](i26);
  }
 } while (0);
 i9 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i13 = i9 + 4 | 0;
   i26 = i13 | 0;
   i15 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i26 >> 2] = i15;
    break;
   }
   i15 = i13 - 4 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 1](i15);
  }
 } while (0);
 i9 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i14 = i9 | 0;
   i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i14 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i12 = i9 | 0;
   i15 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i12 >> 2] = i15;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i16);
 i9 = i16 | 0;
 i16 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 i9 = i16 | 0;
 HEAP32[i18 >> 2] = H_BASE + 648;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i17, i18);
 __ZN9Inspector19InspectorBasicValue6createEd(i8, +(i2 | 0));
 i2 = i7 | 0;
 i18 = i8 | 0;
 i8 = HEAP32[i18 >> 2] | 0;
 HEAP32[i18 >> 2] = 0;
 HEAP32[i2 >> 2] = i8;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i9, i17, i7);
 i7 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i2 = i7 + 4 | 0;
   i8 = i2 | 0;
   i15 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i8 >> 2] = i15;
    break;
   }
   i15 = i2 - 4 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 1](i15);
  }
 } while (0);
 i7 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i18 = i7 + 4 | 0;
   i15 = i18 | 0;
   i2 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i15 >> 2] = i2;
    break;
   }
   i2 = i18 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i7 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i17 = i7 | 0;
   i2 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i17 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP32[i20 >> 2] = H_BASE + 640;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i19, i20);
 __ZN9Inspector19InspectorBasicValue6createEd(i6, +(i3 | 0));
 i3 = i5 | 0;
 i20 = i6 | 0;
 i6 = HEAP32[i20 >> 2] | 0;
 HEAP32[i20 >> 2] = 0;
 HEAP32[i3 >> 2] = i6;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i9, i19, i5);
 i5 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 + 4 | 0;
   i9 = i3 | 0;
   i6 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i9 >> 2] = i6;
    break;
   }
   i6 = i3 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 1](i6);
  }
 } while (0);
 i5 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i20 = i5 + 4 | 0;
   i6 = i20 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i6 >> 2] = i3;
    break;
   }
   i3 = i20 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 1](i3);
  }
 } while (0);
 i5 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i19 = i5 | 0;
   i3 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i19 >> 2] = i3;
    break;
   }
  }
 } while (0);
 HEAP32[i22 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i21, i22);
 i22 = i23 | 0;
 HEAP32[i22 >> 2] = i16;
 i5 = (i16 | 0) == 0;
 if (!i5) {
  i3 = i16 + 4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i25, i21, i23);
 i23 = HEAP32[i22 >> 2] | 0;
 do {
  if ((i23 | 0) != 0) {
   i22 = i23 + 4 | 0;
   i25 = i22 | 0;
   i3 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i25 >> 2] = i3;
    break;
   }
   i3 = i22 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 1](i3);
  }
 } while (0);
 i23 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i23 | 0) != 0) {
   i21 = i23 | 0;
   i3 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i23);
    break;
   } else {
    HEAP32[i21 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i23 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i23 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i24, i11 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i23, i24) | 0;
 i23 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i23 | 0) != 0) {
   i24 = i23 | 0;
   i1 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i23);
    break;
   } else {
    HEAP32[i24 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i5) {
   i23 = i16 + 4 | 0;
   i1 = i23 | 0;
   i24 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i24 | 0) != 0) {
    HEAP32[i1 >> 2] = i24;
    break;
   }
   i24 = i23 - 4 | 0;
   if ((i24 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i24 >> 2] | 0) + 4 >> 2] & 1](i24);
  }
 } while (0);
 if ((i11 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i16 = i11 + 4 | 0;
 i11 = i16 | 0;
 i5 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i11 >> 2] = i5;
  STACKTOP = i4;
  return;
 }
 i5 = i16 - 4 | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 1](i5);
 STACKTOP = i4;
 return;
}
function __ZN9Inspector30InspectorCSSFrontendDispatcher16namedFlowRemovedEiRKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 160 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = i4 + 64 | 0;
 i14 = i4 + 72 | 0;
 i15 = i4 + 80 | 0;
 i16 = i4 + 88 | 0;
 i17 = i4 + 96 | 0;
 i18 = i4 + 104 | 0;
 i19 = i4 + 112 | 0;
 i20 = i4 + 120 | 0;
 i21 = i4 + 128 | 0;
 i22 = i4 + 136 | 0;
 i23 = i4 + 144 | 0;
 i24 = i4 + 152 | 0;
 __ZN9Inspector15InspectorObject6createEv(i11);
 i25 = i11 | 0;
 i11 = HEAP32[i25 >> 2] | 0;
 HEAP32[i25 >> 2] = 0;
 i25 = i11 | 0;
 HEAP32[i13 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i12, i13);
 HEAP32[i15 >> 2] = H_BASE + 2176;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i14, i15);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i10, i14);
 i15 = i9 | 0;
 i13 = i10 | 0;
 i10 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i15 >> 2] = i10;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i25, i12, i9);
 i9 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i15 = i9 + 4 | 0;
   i10 = i15 | 0;
   i26 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i26 | 0) != 0) {
    HEAP32[i10 >> 2] = i26;
    break;
   }
   i26 = i15 - 4 | 0;
   if ((i26 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i26 >> 2] | 0) + 4 >> 2] & 1](i26);
  }
 } while (0);
 i9 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i13 = i9 + 4 | 0;
   i26 = i13 | 0;
   i15 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i26 >> 2] = i15;
    break;
   }
   i15 = i13 - 4 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 1](i15);
  }
 } while (0);
 i9 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i14 = i9 | 0;
   i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i14 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i12 = i9 | 0;
   i15 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i12 >> 2] = i15;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i16);
 i9 = i16 | 0;
 i16 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 i9 = i16 | 0;
 HEAP32[i18 >> 2] = H_BASE + 2e3;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i17, i18);
 __ZN9Inspector19InspectorBasicValue6createEd(i8, +(i2 | 0));
 i2 = i7 | 0;
 i18 = i8 | 0;
 i8 = HEAP32[i18 >> 2] | 0;
 HEAP32[i18 >> 2] = 0;
 HEAP32[i2 >> 2] = i8;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i9, i17, i7);
 i7 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i2 = i7 + 4 | 0;
   i8 = i2 | 0;
   i15 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i8 >> 2] = i15;
    break;
   }
   i15 = i2 - 4 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 1](i15);
  }
 } while (0);
 i7 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i18 = i7 + 4 | 0;
   i15 = i18 | 0;
   i2 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i15 >> 2] = i2;
    break;
   }
   i2 = i18 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i7 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i17 = i7 | 0;
   i2 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i17 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP32[i20 >> 2] = H_BASE + 1984;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i19, i20);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i6, i3);
 i3 = i5 | 0;
 i20 = i6 | 0;
 i6 = HEAP32[i20 >> 2] | 0;
 HEAP32[i20 >> 2] = 0;
 HEAP32[i3 >> 2] = i6;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i9, i19, i5);
 i5 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 + 4 | 0;
   i9 = i3 | 0;
   i6 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i9 >> 2] = i6;
    break;
   }
   i6 = i3 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 1](i6);
  }
 } while (0);
 i5 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i20 = i5 + 4 | 0;
   i6 = i20 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i6 >> 2] = i3;
    break;
   }
   i3 = i20 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 1](i3);
  }
 } while (0);
 i5 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i19 = i5 | 0;
   i3 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i19 >> 2] = i3;
    break;
   }
  }
 } while (0);
 HEAP32[i22 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i21, i22);
 i22 = i23 | 0;
 HEAP32[i22 >> 2] = i16;
 i5 = (i16 | 0) == 0;
 if (!i5) {
  i3 = i16 + 4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i25, i21, i23);
 i23 = HEAP32[i22 >> 2] | 0;
 do {
  if ((i23 | 0) != 0) {
   i22 = i23 + 4 | 0;
   i25 = i22 | 0;
   i3 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i25 >> 2] = i3;
    break;
   }
   i3 = i22 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 1](i3);
  }
 } while (0);
 i23 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i23 | 0) != 0) {
   i21 = i23 | 0;
   i3 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i23);
    break;
   } else {
    HEAP32[i21 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i23 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i23 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i24, i11 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i23, i24) | 0;
 i23 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i23 | 0) != 0) {
   i24 = i23 | 0;
   i1 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i23);
    break;
   } else {
    HEAP32[i24 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i5) {
   i23 = i16 + 4 | 0;
   i1 = i23 | 0;
   i24 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i24 | 0) != 0) {
    HEAP32[i1 >> 2] = i24;
    break;
   }
   i24 = i23 - 4 | 0;
   if ((i24 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i24 >> 2] | 0) + 4 >> 2] & 1](i24);
  }
 } while (0);
 if ((i11 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i16 = i11 + 4 | 0;
 i11 = i16 | 0;
 i5 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i11 >> 2] = i5;
  STACKTOP = i4;
  return;
 }
 i5 = i16 - 4 | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 1](i5);
 STACKTOP = i4;
 return;
}
function __ZN9Inspector35InspectorProfilerFrontendDispatcher26reportHeapSnapshotProgressEii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 160 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = i4 + 64 | 0;
 i14 = i4 + 72 | 0;
 i15 = i4 + 80 | 0;
 i16 = i4 + 88 | 0;
 i17 = i4 + 96 | 0;
 i18 = i4 + 104 | 0;
 i19 = i4 + 112 | 0;
 i20 = i4 + 120 | 0;
 i21 = i4 + 128 | 0;
 i22 = i4 + 136 | 0;
 i23 = i4 + 144 | 0;
 i24 = i4 + 152 | 0;
 __ZN9Inspector15InspectorObject6createEv(i11);
 i25 = i11 | 0;
 i11 = HEAP32[i25 >> 2] | 0;
 HEAP32[i25 >> 2] = 0;
 i25 = i11 | 0;
 HEAP32[i13 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i12, i13);
 HEAP32[i15 >> 2] = H_BASE + 2232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i14, i15);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i10, i14);
 i15 = i9 | 0;
 i13 = i10 | 0;
 i10 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i15 >> 2] = i10;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i25, i12, i9);
 i9 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i15 = i9 + 4 | 0;
   i10 = i15 | 0;
   i26 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i26 | 0) != 0) {
    HEAP32[i10 >> 2] = i26;
    break;
   }
   i26 = i15 - 4 | 0;
   if ((i26 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i26 >> 2] | 0) + 4 >> 2] & 1](i26);
  }
 } while (0);
 i9 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i13 = i9 + 4 | 0;
   i26 = i13 | 0;
   i15 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i26 >> 2] = i15;
    break;
   }
   i15 = i13 - 4 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 1](i15);
  }
 } while (0);
 i9 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i14 = i9 | 0;
   i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i14 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i12 = i9 | 0;
   i15 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i12 >> 2] = i15;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i16);
 i9 = i16 | 0;
 i16 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 i9 = i16 | 0;
 HEAP32[i18 >> 2] = H_BASE + 648;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i17, i18);
 __ZN9Inspector19InspectorBasicValue6createEd(i8, +(i2 | 0));
 i2 = i7 | 0;
 i18 = i8 | 0;
 i8 = HEAP32[i18 >> 2] | 0;
 HEAP32[i18 >> 2] = 0;
 HEAP32[i2 >> 2] = i8;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i9, i17, i7);
 i7 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i2 = i7 + 4 | 0;
   i8 = i2 | 0;
   i15 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i8 >> 2] = i15;
    break;
   }
   i15 = i2 - 4 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 1](i15);
  }
 } while (0);
 i7 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i18 = i7 + 4 | 0;
   i15 = i18 | 0;
   i2 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i15 >> 2] = i2;
    break;
   }
   i2 = i18 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i7 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i17 = i7 | 0;
   i2 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i17 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP32[i20 >> 2] = H_BASE + 640;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i19, i20);
 __ZN9Inspector19InspectorBasicValue6createEd(i6, +(i3 | 0));
 i3 = i5 | 0;
 i20 = i6 | 0;
 i6 = HEAP32[i20 >> 2] | 0;
 HEAP32[i20 >> 2] = 0;
 HEAP32[i3 >> 2] = i6;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i9, i19, i5);
 i5 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 + 4 | 0;
   i9 = i3 | 0;
   i6 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i9 >> 2] = i6;
    break;
   }
   i6 = i3 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 1](i6);
  }
 } while (0);
 i5 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i20 = i5 + 4 | 0;
   i6 = i20 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i6 >> 2] = i3;
    break;
   }
   i3 = i20 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 1](i3);
  }
 } while (0);
 i5 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i19 = i5 | 0;
   i3 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i19 >> 2] = i3;
    break;
   }
  }
 } while (0);
 HEAP32[i22 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i21, i22);
 i22 = i23 | 0;
 HEAP32[i22 >> 2] = i16;
 i5 = (i16 | 0) == 0;
 if (!i5) {
  i3 = i16 + 4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i25, i21, i23);
 i23 = HEAP32[i22 >> 2] | 0;
 do {
  if ((i23 | 0) != 0) {
   i22 = i23 + 4 | 0;
   i25 = i22 | 0;
   i3 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i25 >> 2] = i3;
    break;
   }
   i3 = i22 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 1](i3);
  }
 } while (0);
 i23 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i23 | 0) != 0) {
   i21 = i23 | 0;
   i3 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i23);
    break;
   } else {
    HEAP32[i21 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i23 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i23 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i24, i11 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i23, i24) | 0;
 i23 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i23 | 0) != 0) {
   i24 = i23 | 0;
   i1 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i23);
    break;
   } else {
    HEAP32[i24 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i5) {
   i23 = i16 + 4 | 0;
   i1 = i23 | 0;
   i24 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i24 | 0) != 0) {
    HEAP32[i1 >> 2] = i24;
    break;
   }
   i24 = i23 - 4 | 0;
   if ((i24 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i24 >> 2] | 0) + 4 >> 2] & 1](i24);
  }
 } while (0);
 if ((i11 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i16 = i11 + 4 | 0;
 i11 = i16 | 0;
 i5 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i11 >> 2] = i5;
  STACKTOP = i4;
  return;
 }
 i5 = i16 - 4 | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 1](i5);
 STACKTOP = i4;
 return;
}
function __ZN9Inspector30InspectorDOMFrontendDispatcher21childNodeCountUpdatedEii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 160 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = i4 + 64 | 0;
 i14 = i4 + 72 | 0;
 i15 = i4 + 80 | 0;
 i16 = i4 + 88 | 0;
 i17 = i4 + 96 | 0;
 i18 = i4 + 104 | 0;
 i19 = i4 + 112 | 0;
 i20 = i4 + 120 | 0;
 i21 = i4 + 128 | 0;
 i22 = i4 + 136 | 0;
 i23 = i4 + 144 | 0;
 i24 = i4 + 152 | 0;
 __ZN9Inspector15InspectorObject6createEv(i11);
 i25 = i11 | 0;
 i11 = HEAP32[i25 >> 2] | 0;
 HEAP32[i25 >> 2] = 0;
 i25 = i11 | 0;
 HEAP32[i13 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i12, i13);
 HEAP32[i15 >> 2] = H_BASE + 1344;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i14, i15);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i10, i14);
 i15 = i9 | 0;
 i13 = i10 | 0;
 i10 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i15 >> 2] = i10;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i25, i12, i9);
 i9 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i15 = i9 + 4 | 0;
   i10 = i15 | 0;
   i26 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i26 | 0) != 0) {
    HEAP32[i10 >> 2] = i26;
    break;
   }
   i26 = i15 - 4 | 0;
   if ((i26 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i26 >> 2] | 0) + 4 >> 2] & 1](i26);
  }
 } while (0);
 i9 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i13 = i9 + 4 | 0;
   i26 = i13 | 0;
   i15 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i26 >> 2] = i15;
    break;
   }
   i15 = i13 - 4 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 1](i15);
  }
 } while (0);
 i9 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i14 = i9 | 0;
   i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i14 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i12 = i9 | 0;
   i15 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i12 >> 2] = i15;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i16);
 i9 = i16 | 0;
 i16 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 i9 = i16 | 0;
 HEAP32[i18 >> 2] = H_BASE + 1512;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i17, i18);
 __ZN9Inspector19InspectorBasicValue6createEd(i8, +(i2 | 0));
 i2 = i7 | 0;
 i18 = i8 | 0;
 i8 = HEAP32[i18 >> 2] | 0;
 HEAP32[i18 >> 2] = 0;
 HEAP32[i2 >> 2] = i8;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i9, i17, i7);
 i7 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i2 = i7 + 4 | 0;
   i8 = i2 | 0;
   i15 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i8 >> 2] = i15;
    break;
   }
   i15 = i2 - 4 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 1](i15);
  }
 } while (0);
 i7 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i18 = i7 + 4 | 0;
   i15 = i18 | 0;
   i2 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i15 >> 2] = i2;
    break;
   }
   i2 = i18 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i7 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i17 = i7 | 0;
   i2 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i17 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP32[i20 >> 2] = H_BASE + 1328;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i19, i20);
 __ZN9Inspector19InspectorBasicValue6createEd(i6, +(i3 | 0));
 i3 = i5 | 0;
 i20 = i6 | 0;
 i6 = HEAP32[i20 >> 2] | 0;
 HEAP32[i20 >> 2] = 0;
 HEAP32[i3 >> 2] = i6;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i9, i19, i5);
 i5 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 + 4 | 0;
   i9 = i3 | 0;
   i6 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i9 >> 2] = i6;
    break;
   }
   i6 = i3 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 1](i6);
  }
 } while (0);
 i5 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i20 = i5 + 4 | 0;
   i6 = i20 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i6 >> 2] = i3;
    break;
   }
   i3 = i20 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 1](i3);
  }
 } while (0);
 i5 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i19 = i5 | 0;
   i3 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i19 >> 2] = i3;
    break;
   }
  }
 } while (0);
 HEAP32[i22 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i21, i22);
 i22 = i23 | 0;
 HEAP32[i22 >> 2] = i16;
 i5 = (i16 | 0) == 0;
 if (!i5) {
  i3 = i16 + 4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i25, i21, i23);
 i23 = HEAP32[i22 >> 2] | 0;
 do {
  if ((i23 | 0) != 0) {
   i22 = i23 + 4 | 0;
   i25 = i22 | 0;
   i3 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i25 >> 2] = i3;
    break;
   }
   i3 = i22 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 1](i3);
  }
 } while (0);
 i23 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i23 | 0) != 0) {
   i21 = i23 | 0;
   i3 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i23);
    break;
   } else {
    HEAP32[i21 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i23 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i23 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i24, i11 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i23, i24) | 0;
 i23 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i23 | 0) != 0) {
   i24 = i23 | 0;
   i1 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i23);
    break;
   } else {
    HEAP32[i24 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i5) {
   i23 = i16 + 4 | 0;
   i1 = i23 | 0;
   i24 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i24 | 0) != 0) {
    HEAP32[i1 >> 2] = i24;
    break;
   }
   i24 = i23 - 4 | 0;
   if ((i24 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i24 >> 2] | 0) + 4 >> 2] & 1](i24);
  }
 } while (0);
 if ((i11 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i16 = i11 + 4 | 0;
 i11 = i16 | 0;
 i5 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i11 >> 2] = i5;
  STACKTOP = i4;
  return;
 }
 i5 = i16 - 4 | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 1](i5);
 STACKTOP = i4;
 return;
}
function __ZN9Inspector30InspectorDOMFrontendDispatcher16shadowRootPoppedEii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 160 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = i4 + 64 | 0;
 i14 = i4 + 72 | 0;
 i15 = i4 + 80 | 0;
 i16 = i4 + 88 | 0;
 i17 = i4 + 96 | 0;
 i18 = i4 + 104 | 0;
 i19 = i4 + 112 | 0;
 i20 = i4 + 120 | 0;
 i21 = i4 + 128 | 0;
 i22 = i4 + 136 | 0;
 i23 = i4 + 144 | 0;
 i24 = i4 + 152 | 0;
 __ZN9Inspector15InspectorObject6createEv(i11);
 i25 = i11 | 0;
 i11 = HEAP32[i25 >> 2] | 0;
 HEAP32[i25 >> 2] = 0;
 i25 = i11 | 0;
 HEAP32[i13 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i12, i13);
 HEAP32[i15 >> 2] = H_BASE + 1168;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i14, i15);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i10, i14);
 i15 = i9 | 0;
 i13 = i10 | 0;
 i10 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i15 >> 2] = i10;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i25, i12, i9);
 i9 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i15 = i9 + 4 | 0;
   i10 = i15 | 0;
   i26 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i26 | 0) != 0) {
    HEAP32[i10 >> 2] = i26;
    break;
   }
   i26 = i15 - 4 | 0;
   if ((i26 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i26 >> 2] | 0) + 4 >> 2] & 1](i26);
  }
 } while (0);
 i9 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i13 = i9 + 4 | 0;
   i26 = i13 | 0;
   i15 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i26 >> 2] = i15;
    break;
   }
   i15 = i13 - 4 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 1](i15);
  }
 } while (0);
 i9 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i14 = i9 | 0;
   i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i14 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i12 = i9 | 0;
   i15 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i12 >> 2] = i15;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i16);
 i9 = i16 | 0;
 i16 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 i9 = i16 | 0;
 HEAP32[i18 >> 2] = H_BASE + 1200;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i17, i18);
 __ZN9Inspector19InspectorBasicValue6createEd(i8, +(i2 | 0));
 i2 = i7 | 0;
 i18 = i8 | 0;
 i8 = HEAP32[i18 >> 2] | 0;
 HEAP32[i18 >> 2] = 0;
 HEAP32[i2 >> 2] = i8;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i9, i17, i7);
 i7 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i2 = i7 + 4 | 0;
   i8 = i2 | 0;
   i15 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i8 >> 2] = i15;
    break;
   }
   i15 = i2 - 4 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 1](i15);
  }
 } while (0);
 i7 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i18 = i7 + 4 | 0;
   i15 = i18 | 0;
   i2 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i15 >> 2] = i2;
    break;
   }
   i2 = i18 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i7 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i17 = i7 | 0;
   i2 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i17 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP32[i20 >> 2] = H_BASE + 1160;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i19, i20);
 __ZN9Inspector19InspectorBasicValue6createEd(i6, +(i3 | 0));
 i3 = i5 | 0;
 i20 = i6 | 0;
 i6 = HEAP32[i20 >> 2] | 0;
 HEAP32[i20 >> 2] = 0;
 HEAP32[i3 >> 2] = i6;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i9, i19, i5);
 i5 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 + 4 | 0;
   i9 = i3 | 0;
   i6 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i9 >> 2] = i6;
    break;
   }
   i6 = i3 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 1](i6);
  }
 } while (0);
 i5 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i20 = i5 + 4 | 0;
   i6 = i20 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i6 >> 2] = i3;
    break;
   }
   i3 = i20 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 1](i3);
  }
 } while (0);
 i5 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i19 = i5 | 0;
   i3 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i19 >> 2] = i3;
    break;
   }
  }
 } while (0);
 HEAP32[i22 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i21, i22);
 i22 = i23 | 0;
 HEAP32[i22 >> 2] = i16;
 i5 = (i16 | 0) == 0;
 if (!i5) {
  i3 = i16 + 4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i25, i21, i23);
 i23 = HEAP32[i22 >> 2] | 0;
 do {
  if ((i23 | 0) != 0) {
   i22 = i23 + 4 | 0;
   i25 = i22 | 0;
   i3 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i25 >> 2] = i3;
    break;
   }
   i3 = i22 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 1](i3);
  }
 } while (0);
 i23 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i23 | 0) != 0) {
   i21 = i23 | 0;
   i3 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i23);
    break;
   } else {
    HEAP32[i21 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i23 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i23 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i24, i11 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i23, i24) | 0;
 i23 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i23 | 0) != 0) {
   i24 = i23 | 0;
   i1 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i23);
    break;
   } else {
    HEAP32[i24 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i5) {
   i23 = i16 + 4 | 0;
   i1 = i23 | 0;
   i24 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i24 | 0) != 0) {
    HEAP32[i1 >> 2] = i24;
    break;
   }
   i24 = i23 - 4 | 0;
   if ((i24 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i24 >> 2] | 0) + 4 >> 2] & 1](i24);
  }
 } while (0);
 if ((i11 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i16 = i11 + 4 | 0;
 i11 = i16 | 0;
 i5 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i11 >> 2] = i5;
  STACKTOP = i4;
  return;
 }
 i5 = i16 - 4 | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 1](i5);
 STACKTOP = i4;
 return;
}
function __ZN9Inspector30InspectorDOMFrontendDispatcher16childNodeRemovedEii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 160 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = i4 + 64 | 0;
 i14 = i4 + 72 | 0;
 i15 = i4 + 80 | 0;
 i16 = i4 + 88 | 0;
 i17 = i4 + 96 | 0;
 i18 = i4 + 104 | 0;
 i19 = i4 + 112 | 0;
 i20 = i4 + 120 | 0;
 i21 = i4 + 128 | 0;
 i22 = i4 + 136 | 0;
 i23 = i4 + 144 | 0;
 i24 = i4 + 152 | 0;
 __ZN9Inspector15InspectorObject6createEv(i11);
 i25 = i11 | 0;
 i11 = HEAP32[i25 >> 2] | 0;
 HEAP32[i25 >> 2] = 0;
 i25 = i11 | 0;
 HEAP32[i13 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i12, i13);
 HEAP32[i15 >> 2] = H_BASE + 1240;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i14, i15);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i10, i14);
 i15 = i9 | 0;
 i13 = i10 | 0;
 i10 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i15 >> 2] = i10;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i25, i12, i9);
 i9 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i15 = i9 + 4 | 0;
   i10 = i15 | 0;
   i26 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i26 | 0) != 0) {
    HEAP32[i10 >> 2] = i26;
    break;
   }
   i26 = i15 - 4 | 0;
   if ((i26 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i26 >> 2] | 0) + 4 >> 2] & 1](i26);
  }
 } while (0);
 i9 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i13 = i9 + 4 | 0;
   i26 = i13 | 0;
   i15 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i26 >> 2] = i15;
    break;
   }
   i15 = i13 - 4 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 1](i15);
  }
 } while (0);
 i9 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i14 = i9 | 0;
   i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i14 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i12 = i9 | 0;
   i15 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i12 >> 2] = i15;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i16);
 i9 = i16 | 0;
 i16 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 i9 = i16 | 0;
 HEAP32[i18 >> 2] = H_BASE + 1288;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i17, i18);
 __ZN9Inspector19InspectorBasicValue6createEd(i8, +(i2 | 0));
 i2 = i7 | 0;
 i18 = i8 | 0;
 i8 = HEAP32[i18 >> 2] | 0;
 HEAP32[i18 >> 2] = 0;
 HEAP32[i2 >> 2] = i8;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i9, i17, i7);
 i7 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i2 = i7 + 4 | 0;
   i8 = i2 | 0;
   i15 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i8 >> 2] = i15;
    break;
   }
   i15 = i2 - 4 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 1](i15);
  }
 } while (0);
 i7 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i18 = i7 + 4 | 0;
   i15 = i18 | 0;
   i2 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i15 >> 2] = i2;
    break;
   }
   i2 = i18 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i7 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i17 = i7 | 0;
   i2 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i17 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP32[i20 >> 2] = H_BASE + 1512;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i19, i20);
 __ZN9Inspector19InspectorBasicValue6createEd(i6, +(i3 | 0));
 i3 = i5 | 0;
 i20 = i6 | 0;
 i6 = HEAP32[i20 >> 2] | 0;
 HEAP32[i20 >> 2] = 0;
 HEAP32[i3 >> 2] = i6;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i9, i19, i5);
 i5 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 + 4 | 0;
   i9 = i3 | 0;
   i6 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i9 >> 2] = i6;
    break;
   }
   i6 = i3 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 1](i6);
  }
 } while (0);
 i5 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i20 = i5 + 4 | 0;
   i6 = i20 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i6 >> 2] = i3;
    break;
   }
   i3 = i20 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 1](i3);
  }
 } while (0);
 i5 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i19 = i5 | 0;
   i3 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i19 >> 2] = i3;
    break;
   }
  }
 } while (0);
 HEAP32[i22 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i21, i22);
 i22 = i23 | 0;
 HEAP32[i22 >> 2] = i16;
 i5 = (i16 | 0) == 0;
 if (!i5) {
  i3 = i16 + 4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i25, i21, i23);
 i23 = HEAP32[i22 >> 2] | 0;
 do {
  if ((i23 | 0) != 0) {
   i22 = i23 + 4 | 0;
   i25 = i22 | 0;
   i3 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i25 >> 2] = i3;
    break;
   }
   i3 = i22 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 1](i3);
  }
 } while (0);
 i23 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i23 | 0) != 0) {
   i21 = i23 | 0;
   i3 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i23);
    break;
   } else {
    HEAP32[i21 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i23 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i23 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i24, i11 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i23, i24) | 0;
 i23 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i23 | 0) != 0) {
   i24 = i23 | 0;
   i1 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i23);
    break;
   } else {
    HEAP32[i24 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i5) {
   i23 = i16 + 4 | 0;
   i1 = i23 | 0;
   i24 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i24 | 0) != 0) {
    HEAP32[i1 >> 2] = i24;
    break;
   }
   i24 = i23 - 4 | 0;
   if ((i24 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i24 >> 2] | 0) + 4 >> 2] & 1](i24);
  }
 } while (0);
 if ((i11 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i16 = i11 + 4 | 0;
 i11 = i16 | 0;
 i5 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i11 >> 2] = i5;
  STACKTOP = i4;
  return;
 }
 i5 = i16 - 4 | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 1](i5);
 STACKTOP = i4;
 return;
}
function __ZN9Inspector37InspectorDOMStorageFrontendDispatcher21domStorageItemRemovedEN3WTF10PassRefPtrINS_11TypeBuilder10DOMStorage9StorageIdEEERKNS1_6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 152 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = i4 + 64 | 0;
 i14 = i4 + 72 | 0;
 i15 = i4 + 80 | 0;
 i16 = i4 + 88 | 0;
 i17 = i4 + 96 | 0;
 i18 = i4 + 104 | 0;
 i19 = i4 + 112 | 0;
 i20 = i4 + 120 | 0;
 i21 = i4 + 128 | 0;
 i22 = i4 + 136 | 0;
 i23 = i4 + 144 | 0;
 __ZN9Inspector15InspectorObject6createEv(i9);
 i24 = i9 | 0;
 i9 = HEAP32[i24 >> 2] | 0;
 HEAP32[i24 >> 2] = 0;
 i24 = i9 | 0;
 HEAP32[i11 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i10, i11);
 HEAP32[i13 >> 2] = H_BASE + 1064;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i12, i13);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i8, i12);
 i13 = i7 | 0;
 i11 = i8 | 0;
 i8 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i13 >> 2] = i8;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i24, i10, i7);
 i7 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i13 = i7 + 4 | 0;
   i8 = i13 | 0;
   i25 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i25 | 0) != 0) {
    HEAP32[i8 >> 2] = i25;
    break;
   }
   i25 = i13 - 4 | 0;
   if ((i25 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i25 >> 2] | 0) + 4 >> 2] & 1](i25);
  }
 } while (0);
 i7 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i11 = i7 + 4 | 0;
   i25 = i11 | 0;
   i13 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
   if ((i13 | 0) != 0) {
    HEAP32[i25 >> 2] = i13;
    break;
   }
   i13 = i11 - 4 | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 1](i13);
  }
 } while (0);
 i7 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i12 = i7 | 0;
   i13 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i12 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i10 = i7 | 0;
   i13 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i10 >> 2] = i13;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i14);
 i7 = i14 | 0;
 i14 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = i14 | 0;
 HEAP32[i16 >> 2] = H_BASE + 1104;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i15, i16);
 i16 = i17 | 0;
 i13 = i2 | 0;
 i2 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i16 >> 2] = i2;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i7, i15, i17);
 i17 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i16 = i17 + 4 | 0;
   i2 = i16 | 0;
   i13 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i13 | 0) != 0) {
    HEAP32[i2 >> 2] = i13;
    break;
   }
   i13 = i16 - 4 | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 1](i13);
  }
 } while (0);
 i17 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i15 = i17 | 0;
   i13 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i15 >> 2] = i13;
    break;
   }
  }
 } while (0);
 HEAP32[i19 >> 2] = H_BASE + 1056;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i18, i19);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i6, i3);
 i3 = i5 | 0;
 i19 = i6 | 0;
 i6 = HEAP32[i19 >> 2] | 0;
 HEAP32[i19 >> 2] = 0;
 HEAP32[i3 >> 2] = i6;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i7, i18, i5);
 i5 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 + 4 | 0;
   i7 = i3 | 0;
   i6 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i7 >> 2] = i6;
    break;
   }
   i6 = i3 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 1](i6);
  }
 } while (0);
 i5 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i19 = i5 + 4 | 0;
   i6 = i19 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i6 >> 2] = i3;
    break;
   }
   i3 = i19 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 1](i3);
  }
 } while (0);
 i5 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i18 = i5 | 0;
   i3 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i18 >> 2] = i3;
    break;
   }
  }
 } while (0);
 HEAP32[i21 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i20, i21);
 i21 = i22 | 0;
 HEAP32[i21 >> 2] = i14;
 i5 = (i14 | 0) == 0;
 if (!i5) {
  i3 = i14 + 4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i24, i20, i22);
 i22 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i22 | 0) != 0) {
   i21 = i22 + 4 | 0;
   i24 = i21 | 0;
   i3 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i24 >> 2] = i3;
    break;
   }
   i3 = i21 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 1](i3);
  }
 } while (0);
 i22 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i22 | 0) != 0) {
   i20 = i22 | 0;
   i3 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i22);
    break;
   } else {
    HEAP32[i20 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i22 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i22 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i23, i9 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i22, i23) | 0;
 i22 = HEAP32[i23 >> 2] | 0;
 do {
  if ((i22 | 0) != 0) {
   i23 = i22 | 0;
   i1 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i22);
    break;
   } else {
    HEAP32[i23 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i5) {
   i22 = i14 + 4 | 0;
   i1 = i22 | 0;
   i23 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i23 | 0) != 0) {
    HEAP32[i1 >> 2] = i23;
    break;
   }
   i23 = i22 - 4 | 0;
   if ((i23 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i23 >> 2] | 0) + 4 >> 2] & 1](i23);
  }
 } while (0);
 if ((i9 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i14 = i9 + 4 | 0;
 i9 = i14 | 0;
 i5 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i9 >> 2] = i5;
  STACKTOP = i4;
  return;
 }
 i5 = i14 - 4 | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 1](i5);
 STACKTOP = i4;
 return;
}
function __ZN9Inspector30InspectorDOMFrontendDispatcher13setChildNodesEiN3WTF10PassRefPtrINS_11TypeBuilder5ArrayINS3_3DOM4NodeEEEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 152 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = i4 + 64 | 0;
 i14 = i4 + 72 | 0;
 i15 = i4 + 80 | 0;
 i16 = i4 + 88 | 0;
 i17 = i4 + 96 | 0;
 i18 = i4 + 104 | 0;
 i19 = i4 + 112 | 0;
 i20 = i4 + 120 | 0;
 i21 = i4 + 128 | 0;
 i22 = i4 + 136 | 0;
 i23 = i4 + 144 | 0;
 __ZN9Inspector15InspectorObject6createEv(i9);
 i24 = i9 | 0;
 i9 = HEAP32[i24 >> 2] | 0;
 HEAP32[i24 >> 2] = 0;
 i24 = i9 | 0;
 HEAP32[i11 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i10, i11);
 HEAP32[i13 >> 2] = H_BASE + 1568;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i12, i13);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i8, i12);
 i13 = i7 | 0;
 i11 = i8 | 0;
 i8 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i13 >> 2] = i8;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i24, i10, i7);
 i7 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i13 = i7 + 4 | 0;
   i8 = i13 | 0;
   i25 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i25 | 0) != 0) {
    HEAP32[i8 >> 2] = i25;
    break;
   }
   i25 = i13 - 4 | 0;
   if ((i25 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i25 >> 2] | 0) + 4 >> 2] & 1](i25);
  }
 } while (0);
 i7 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i11 = i7 + 4 | 0;
   i25 = i11 | 0;
   i13 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
   if ((i13 | 0) != 0) {
    HEAP32[i25 >> 2] = i13;
    break;
   }
   i13 = i11 - 4 | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 1](i13);
  }
 } while (0);
 i7 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i12 = i7 | 0;
   i13 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i12 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i10 = i7 | 0;
   i13 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i10 >> 2] = i13;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i14);
 i7 = i14 | 0;
 i14 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = i14 | 0;
 HEAP32[i16 >> 2] = H_BASE + 1552;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i15, i16);
 __ZN9Inspector19InspectorBasicValue6createEd(i6, +(i2 | 0));
 i2 = i5 | 0;
 i16 = i6 | 0;
 i6 = HEAP32[i16 >> 2] | 0;
 HEAP32[i16 >> 2] = 0;
 HEAP32[i2 >> 2] = i6;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i7, i15, i5);
 i5 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i2 = i5 + 4 | 0;
   i6 = i2 | 0;
   i13 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i13 | 0) != 0) {
    HEAP32[i6 >> 2] = i13;
    break;
   }
   i13 = i2 - 4 | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 1](i13);
  }
 } while (0);
 i5 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i16 = i5 + 4 | 0;
   i13 = i16 | 0;
   i2 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i13 >> 2] = i2;
    break;
   }
   i2 = i16 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i5 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i15 = i5 | 0;
   i2 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i15 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP32[i18 >> 2] = H_BASE + 1544;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i17, i18);
 i18 = i19 | 0;
 i5 = i3 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i18 >> 2] = i3;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i7, i17, i19);
 i19 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i19 | 0) != 0) {
   i18 = i19 + 4 | 0;
   i7 = i18 | 0;
   i3 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i7 >> 2] = i3;
    break;
   }
   i3 = i18 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 1](i3);
  }
 } while (0);
 i19 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i19 | 0) != 0) {
   i17 = i19 | 0;
   i3 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i19);
    break;
   } else {
    HEAP32[i17 >> 2] = i3;
    break;
   }
  }
 } while (0);
 HEAP32[i21 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i20, i21);
 i21 = i22 | 0;
 HEAP32[i21 >> 2] = i14;
 i19 = (i14 | 0) == 0;
 if (!i19) {
  i3 = i14 + 4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i24, i20, i22);
 i22 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i22 | 0) != 0) {
   i21 = i22 + 4 | 0;
   i24 = i21 | 0;
   i3 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i24 >> 2] = i3;
    break;
   }
   i3 = i21 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 1](i3);
  }
 } while (0);
 i22 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i22 | 0) != 0) {
   i20 = i22 | 0;
   i3 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i22);
    break;
   } else {
    HEAP32[i20 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i22 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i22 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i23, i9 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i22, i23) | 0;
 i22 = HEAP32[i23 >> 2] | 0;
 do {
  if ((i22 | 0) != 0) {
   i23 = i22 | 0;
   i1 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i22);
    break;
   } else {
    HEAP32[i23 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i19) {
   i22 = i14 + 4 | 0;
   i1 = i22 | 0;
   i23 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i23 | 0) != 0) {
    HEAP32[i1 >> 2] = i23;
    break;
   }
   i23 = i22 - 4 | 0;
   if ((i23 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i23 >> 2] | 0) + 4 >> 2] & 1](i23);
  }
 } while (0);
 if ((i9 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i14 = i9 + 4 | 0;
 i9 = i14 | 0;
 i19 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
 if ((i19 | 0) != 0) {
  HEAP32[i9 >> 2] = i19;
  STACKTOP = i4;
  return;
 }
 i19 = i14 - 4 | 0;
 if ((i19 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 1](i19);
 STACKTOP = i4;
 return;
}
function __ZN9Inspector33InspectorWorkerFrontendDispatcher25dispatchMessageFromWorkerEiN3WTF10PassRefPtrINS_15InspectorObjectEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 152 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = i4 + 64 | 0;
 i14 = i4 + 72 | 0;
 i15 = i4 + 80 | 0;
 i16 = i4 + 88 | 0;
 i17 = i4 + 96 | 0;
 i18 = i4 + 104 | 0;
 i19 = i4 + 112 | 0;
 i20 = i4 + 120 | 0;
 i21 = i4 + 128 | 0;
 i22 = i4 + 136 | 0;
 i23 = i4 + 144 | 0;
 __ZN9Inspector15InspectorObject6createEv(i9);
 i24 = i9 | 0;
 i9 = HEAP32[i24 >> 2] | 0;
 HEAP32[i24 >> 2] = 0;
 i24 = i9 | 0;
 HEAP32[i11 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i10, i11);
 HEAP32[i13 >> 2] = H_BASE + 2048;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i12, i13);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i8, i12);
 i13 = i7 | 0;
 i11 = i8 | 0;
 i8 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i13 >> 2] = i8;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i24, i10, i7);
 i7 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i13 = i7 + 4 | 0;
   i8 = i13 | 0;
   i25 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i25 | 0) != 0) {
    HEAP32[i8 >> 2] = i25;
    break;
   }
   i25 = i13 - 4 | 0;
   if ((i25 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i25 >> 2] | 0) + 4 >> 2] & 1](i25);
  }
 } while (0);
 i7 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i11 = i7 + 4 | 0;
   i25 = i11 | 0;
   i13 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
   if ((i13 | 0) != 0) {
    HEAP32[i25 >> 2] = i13;
    break;
   }
   i13 = i11 - 4 | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 1](i13);
  }
 } while (0);
 i7 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i12 = i7 | 0;
   i13 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i12 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i10 = i7 | 0;
   i13 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i10 >> 2] = i13;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i14);
 i7 = i14 | 0;
 i14 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = i14 | 0;
 HEAP32[i16 >> 2] = H_BASE + 2136;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i15, i16);
 __ZN9Inspector19InspectorBasicValue6createEd(i6, +(i2 | 0));
 i2 = i5 | 0;
 i16 = i6 | 0;
 i6 = HEAP32[i16 >> 2] | 0;
 HEAP32[i16 >> 2] = 0;
 HEAP32[i2 >> 2] = i6;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i7, i15, i5);
 i5 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i2 = i5 + 4 | 0;
   i6 = i2 | 0;
   i13 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i13 | 0) != 0) {
    HEAP32[i6 >> 2] = i13;
    break;
   }
   i13 = i2 - 4 | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 1](i13);
  }
 } while (0);
 i5 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i16 = i5 + 4 | 0;
   i13 = i16 | 0;
   i2 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i13 >> 2] = i2;
    break;
   }
   i2 = i16 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i5 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i15 = i5 | 0;
   i2 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i15 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP32[i18 >> 2] = H_BASE + 1704;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i17, i18);
 i18 = i19 | 0;
 i5 = i3 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i18 >> 2] = i3;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i7, i17, i19);
 i19 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i19 | 0) != 0) {
   i18 = i19 + 4 | 0;
   i7 = i18 | 0;
   i3 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i7 >> 2] = i3;
    break;
   }
   i3 = i18 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 1](i3);
  }
 } while (0);
 i19 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i19 | 0) != 0) {
   i17 = i19 | 0;
   i3 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i19);
    break;
   } else {
    HEAP32[i17 >> 2] = i3;
    break;
   }
  }
 } while (0);
 HEAP32[i21 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i20, i21);
 i21 = i22 | 0;
 HEAP32[i21 >> 2] = i14;
 i19 = (i14 | 0) == 0;
 if (!i19) {
  i3 = i14 + 4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i24, i20, i22);
 i22 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i22 | 0) != 0) {
   i21 = i22 + 4 | 0;
   i24 = i21 | 0;
   i3 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i24 >> 2] = i3;
    break;
   }
   i3 = i21 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 1](i3);
  }
 } while (0);
 i22 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i22 | 0) != 0) {
   i20 = i22 | 0;
   i3 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i22);
    break;
   } else {
    HEAP32[i20 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i22 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i22 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i23, i9 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i22, i23) | 0;
 i22 = HEAP32[i23 >> 2] | 0;
 do {
  if ((i22 | 0) != 0) {
   i23 = i22 | 0;
   i1 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i22);
    break;
   } else {
    HEAP32[i23 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i19) {
   i22 = i14 + 4 | 0;
   i1 = i22 | 0;
   i23 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i23 | 0) != 0) {
    HEAP32[i1 >> 2] = i23;
    break;
   }
   i23 = i22 - 4 | 0;
   if ((i23 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i23 >> 2] | 0) + 4 >> 2] & 1](i23);
  }
 } while (0);
 if ((i9 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i14 = i9 + 4 | 0;
 i9 = i14 | 0;
 i19 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
 if ((i19 | 0) != 0) {
  HEAP32[i9 >> 2] = i19;
  STACKTOP = i4;
  return;
 }
 i19 = i14 - 4 | 0;
 if ((i19 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 1](i19);
 STACKTOP = i4;
 return;
}
function __ZN9Inspector30InspectorDOMFrontendDispatcher16shadowRootPushedEiN3WTF10PassRefPtrINS_11TypeBuilder3DOM4NodeEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 152 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = i4 + 64 | 0;
 i14 = i4 + 72 | 0;
 i15 = i4 + 80 | 0;
 i16 = i4 + 88 | 0;
 i17 = i4 + 96 | 0;
 i18 = i4 + 104 | 0;
 i19 = i4 + 112 | 0;
 i20 = i4 + 120 | 0;
 i21 = i4 + 128 | 0;
 i22 = i4 + 136 | 0;
 i23 = i4 + 144 | 0;
 __ZN9Inspector15InspectorObject6createEv(i9);
 i24 = i9 | 0;
 i9 = HEAP32[i24 >> 2] | 0;
 HEAP32[i24 >> 2] = 0;
 i24 = i9 | 0;
 HEAP32[i11 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i10, i11);
 HEAP32[i13 >> 2] = H_BASE + 1208;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i12, i13);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i8, i12);
 i13 = i7 | 0;
 i11 = i8 | 0;
 i8 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i13 >> 2] = i8;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i24, i10, i7);
 i7 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i13 = i7 + 4 | 0;
   i8 = i13 | 0;
   i25 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i25 | 0) != 0) {
    HEAP32[i8 >> 2] = i25;
    break;
   }
   i25 = i13 - 4 | 0;
   if ((i25 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i25 >> 2] | 0) + 4 >> 2] & 1](i25);
  }
 } while (0);
 i7 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i11 = i7 + 4 | 0;
   i25 = i11 | 0;
   i13 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
   if ((i13 | 0) != 0) {
    HEAP32[i25 >> 2] = i13;
    break;
   }
   i13 = i11 - 4 | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 1](i13);
  }
 } while (0);
 i7 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i12 = i7 | 0;
   i13 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i12 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i10 = i7 | 0;
   i13 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i10 >> 2] = i13;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i14);
 i7 = i14 | 0;
 i14 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = i14 | 0;
 HEAP32[i16 >> 2] = H_BASE + 1200;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i15, i16);
 __ZN9Inspector19InspectorBasicValue6createEd(i6, +(i2 | 0));
 i2 = i5 | 0;
 i16 = i6 | 0;
 i6 = HEAP32[i16 >> 2] | 0;
 HEAP32[i16 >> 2] = 0;
 HEAP32[i2 >> 2] = i6;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i7, i15, i5);
 i5 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i2 = i5 + 4 | 0;
   i6 = i2 | 0;
   i13 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i13 | 0) != 0) {
    HEAP32[i6 >> 2] = i13;
    break;
   }
   i13 = i2 - 4 | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 1](i13);
  }
 } while (0);
 i5 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i16 = i5 + 4 | 0;
   i13 = i16 | 0;
   i2 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i13 >> 2] = i2;
    break;
   }
   i2 = i16 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i5 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i15 = i5 | 0;
   i2 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i15 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP32[i18 >> 2] = H_BASE + 1192;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i17, i18);
 i18 = i19 | 0;
 i5 = i3 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i18 >> 2] = i3;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i7, i17, i19);
 i19 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i19 | 0) != 0) {
   i18 = i19 + 4 | 0;
   i7 = i18 | 0;
   i3 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i7 >> 2] = i3;
    break;
   }
   i3 = i18 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 1](i3);
  }
 } while (0);
 i19 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i19 | 0) != 0) {
   i17 = i19 | 0;
   i3 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i19);
    break;
   } else {
    HEAP32[i17 >> 2] = i3;
    break;
   }
  }
 } while (0);
 HEAP32[i21 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i20, i21);
 i21 = i22 | 0;
 HEAP32[i21 >> 2] = i14;
 i19 = (i14 | 0) == 0;
 if (!i19) {
  i3 = i14 + 4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i24, i20, i22);
 i22 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i22 | 0) != 0) {
   i21 = i22 + 4 | 0;
   i24 = i21 | 0;
   i3 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i24 >> 2] = i3;
    break;
   }
   i3 = i21 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 1](i3);
  }
 } while (0);
 i22 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i22 | 0) != 0) {
   i20 = i22 | 0;
   i3 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i22);
    break;
   } else {
    HEAP32[i20 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i22 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i22 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i23, i9 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i22, i23) | 0;
 i22 = HEAP32[i23 >> 2] | 0;
 do {
  if ((i22 | 0) != 0) {
   i23 = i22 | 0;
   i1 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i22);
    break;
   } else {
    HEAP32[i23 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i19) {
   i22 = i14 + 4 | 0;
   i1 = i22 | 0;
   i23 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i23 | 0) != 0) {
    HEAP32[i1 >> 2] = i23;
    break;
   }
   i23 = i22 - 4 | 0;
   if ((i23 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i23 >> 2] | 0) + 4 >> 2] & 1](i23);
  }
 } while (0);
 if ((i9 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i14 = i9 + 4 | 0;
 i9 = i14 | 0;
 i19 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
 if ((i19 | 0) != 0) {
  HEAP32[i9 >> 2] = i19;
  STACKTOP = i4;
  return;
 }
 i19 = i14 - 4 | 0;
 if ((i19 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 1](i19);
 STACKTOP = i4;
 return;
}
function __ZN9Inspector31InspectorPageFrontendDispatcher31frameClearedScheduledNavigationERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
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
 i14 = i3 + 80 | 0;
 i15 = i3 + 88 | 0;
 i16 = i3 + 96 | 0;
 i17 = i3 + 104 | 0;
 i18 = i3 + 112 | 0;
 i19 = i3 + 120 | 0;
 __ZN9Inspector15InspectorObject6createEv(i8);
 i20 = i8 | 0;
 i8 = HEAP32[i20 >> 2] | 0;
 HEAP32[i20 >> 2] = 0;
 i20 = i8 | 0;
 HEAP32[i10 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i9, i10);
 HEAP32[i12 >> 2] = H_BASE + 2560;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i11, i12);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i7, i11);
 i12 = i6 | 0;
 i10 = i7 | 0;
 i7 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i12 >> 2] = i7;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i20, i9, i6);
 i6 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i12 = i6 + 4 | 0;
   i7 = i12 | 0;
   i21 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i21 | 0) != 0) {
    HEAP32[i7 >> 2] = i21;
    break;
   }
   i21 = i12 - 4 | 0;
   if ((i21 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 1](i21);
  }
 } while (0);
 i6 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i10 = i6 + 4 | 0;
   i21 = i10 | 0;
   i12 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) != 0) {
    HEAP32[i21 >> 2] = i12;
    break;
   }
   i12 = i10 - 4 | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 1](i12);
  }
 } while (0);
 i6 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i11 = i6 | 0;
   i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i11 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i9 = i6 | 0;
   i12 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i9 >> 2] = i12;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i13);
 i6 = i13 | 0;
 i13 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i15 >> 2] = H_BASE + 1864;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i14, i15);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i5, i2);
 i2 = i4 | 0;
 i15 = i5 | 0;
 i5 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = 0;
 HEAP32[i2 >> 2] = i5;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i13 | 0, i14, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 4 | 0;
   i5 = i2 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i2 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 1](i6);
  }
 } while (0);
 i4 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i15 = i4 + 4 | 0;
   i6 = i15 | 0;
   i2 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i6 >> 2] = i2;
    break;
   }
   i2 = i15 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i4 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i14 = i4 | 0;
   i2 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i14 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP32[i17 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i16, i17);
 i17 = i18 | 0;
 HEAP32[i17 >> 2] = i13;
 i4 = (i13 | 0) == 0;
 if (!i4) {
  i2 = i13 + 4 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i20, i16, i18);
 i18 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i17 = i18 + 4 | 0;
   i20 = i17 | 0;
   i2 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i20 >> 2] = i2;
    break;
   }
   i2 = i17 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i18 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i16 = i18 | 0;
   i2 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    break;
   } else {
    HEAP32[i16 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i18 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i18 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i19, i8 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i18, i19) | 0;
 i18 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i19 = i18 | 0;
   i1 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    break;
   } else {
    HEAP32[i19 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i4) {
   i18 = i13 + 4 | 0;
   i1 = i18 | 0;
   i19 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i19 | 0) != 0) {
    HEAP32[i1 >> 2] = i19;
    break;
   }
   i19 = i18 - 4 | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 1](i19);
  }
 } while (0);
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i13 = i8 + 4 | 0;
 i8 = i13 | 0;
 i4 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i8 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
 i4 = i13 - 4 | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
 STACKTOP = i3;
 return;
}
function __ZN9Inspector31InspectorPageFrontendDispatcher20domContentEventFiredEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
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
 i14 = i3 + 80 | 0;
 i15 = i3 + 88 | 0;
 i16 = i3 + 96 | 0;
 i17 = i3 + 104 | 0;
 i18 = i3 + 112 | 0;
 i19 = i3 + 120 | 0;
 __ZN9Inspector15InspectorObject6createEv(i8);
 i20 = i8 | 0;
 i8 = HEAP32[i20 >> 2] | 0;
 HEAP32[i20 >> 2] = 0;
 i20 = i8 | 0;
 HEAP32[i10 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i9, i10);
 HEAP32[i12 >> 2] = H_BASE + 2808;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i11, i12);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i7, i11);
 i12 = i6 | 0;
 i10 = i7 | 0;
 i7 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i12 >> 2] = i7;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i20, i9, i6);
 i6 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i12 = i6 + 4 | 0;
   i7 = i12 | 0;
   i21 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i21 | 0) != 0) {
    HEAP32[i7 >> 2] = i21;
    break;
   }
   i21 = i12 - 4 | 0;
   if ((i21 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 1](i21);
  }
 } while (0);
 i6 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i10 = i6 + 4 | 0;
   i21 = i10 | 0;
   i12 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) != 0) {
    HEAP32[i21 >> 2] = i12;
    break;
   }
   i12 = i10 - 4 | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 1](i12);
  }
 } while (0);
 i6 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i11 = i6 | 0;
   i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i11 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i9 = i6 | 0;
   i12 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i9 >> 2] = i12;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i13);
 i6 = i13 | 0;
 i13 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i15 >> 2] = H_BASE + 472;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i14, i15);
 __ZN9Inspector19InspectorBasicValue6createEd(i5, d2);
 i15 = i4 | 0;
 i6 = i5 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i15 >> 2] = i5;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i13 | 0, i14, i4);
 i4 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i15 = i4 + 4 | 0;
   i5 = i15 | 0;
   i12 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) != 0) {
    HEAP32[i5 >> 2] = i12;
    break;
   }
   i12 = i15 - 4 | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 1](i12);
  }
 } while (0);
 i4 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i6 = i4 + 4 | 0;
   i12 = i6 | 0;
   i15 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i12 >> 2] = i15;
    break;
   }
   i15 = i6 - 4 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 1](i15);
  }
 } while (0);
 i4 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i14 = i4 | 0;
   i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i14 >> 2] = i15;
    break;
   }
  }
 } while (0);
 HEAP32[i17 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i16, i17);
 i17 = i18 | 0;
 HEAP32[i17 >> 2] = i13;
 i4 = (i13 | 0) == 0;
 if (!i4) {
  i15 = i13 + 4 | 0;
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i20, i16, i18);
 i18 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i17 = i18 + 4 | 0;
   i20 = i17 | 0;
   i15 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i20 >> 2] = i15;
    break;
   }
   i15 = i17 - 4 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 1](i15);
  }
 } while (0);
 i18 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i16 = i18 | 0;
   i15 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    break;
   } else {
    HEAP32[i16 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i18 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i18 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i19, i8 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i18, i19) | 0;
 i18 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i19 = i18 | 0;
   i1 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    break;
   } else {
    HEAP32[i19 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i4) {
   i18 = i13 + 4 | 0;
   i1 = i18 | 0;
   i19 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i19 | 0) != 0) {
    HEAP32[i1 >> 2] = i19;
    break;
   }
   i19 = i18 - 4 | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 1](i19);
  }
 } while (0);
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i13 = i8 + 4 | 0;
 i8 = i13 | 0;
 i4 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i8 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
 i4 = i13 - 4 | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
 STACKTOP = i3;
 return;
}
function __ZN9Inspector34InspectorNetworkFrontendDispatcher22requestServedFromCacheERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
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
 i14 = i3 + 80 | 0;
 i15 = i3 + 88 | 0;
 i16 = i3 + 96 | 0;
 i17 = i3 + 104 | 0;
 i18 = i3 + 112 | 0;
 i19 = i3 + 120 | 0;
 __ZN9Inspector15InspectorObject6createEv(i8);
 i20 = i8 | 0;
 i8 = HEAP32[i20 >> 2] | 0;
 HEAP32[i20 >> 2] = 0;
 i20 = i8 | 0;
 HEAP32[i10 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i9, i10);
 HEAP32[i12 >> 2] = H_BASE + 392;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i11, i12);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i7, i11);
 i12 = i6 | 0;
 i10 = i7 | 0;
 i7 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i12 >> 2] = i7;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i20, i9, i6);
 i6 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i12 = i6 + 4 | 0;
   i7 = i12 | 0;
   i21 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i21 | 0) != 0) {
    HEAP32[i7 >> 2] = i21;
    break;
   }
   i21 = i12 - 4 | 0;
   if ((i21 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 1](i21);
  }
 } while (0);
 i6 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i10 = i6 + 4 | 0;
   i21 = i10 | 0;
   i12 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) != 0) {
    HEAP32[i21 >> 2] = i12;
    break;
   }
   i12 = i10 - 4 | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 1](i12);
  }
 } while (0);
 i6 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i11 = i6 | 0;
   i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i11 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i9 = i6 | 0;
   i12 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i9 >> 2] = i12;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i13);
 i6 = i13 | 0;
 i13 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i15 >> 2] = H_BASE + 560;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i14, i15);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i5, i2);
 i2 = i4 | 0;
 i15 = i5 | 0;
 i5 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = 0;
 HEAP32[i2 >> 2] = i5;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i13 | 0, i14, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 4 | 0;
   i5 = i2 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i2 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 1](i6);
  }
 } while (0);
 i4 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i15 = i4 + 4 | 0;
   i6 = i15 | 0;
   i2 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i6 >> 2] = i2;
    break;
   }
   i2 = i15 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i4 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i14 = i4 | 0;
   i2 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i14 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP32[i17 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i16, i17);
 i17 = i18 | 0;
 HEAP32[i17 >> 2] = i13;
 i4 = (i13 | 0) == 0;
 if (!i4) {
  i2 = i13 + 4 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i20, i16, i18);
 i18 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i17 = i18 + 4 | 0;
   i20 = i17 | 0;
   i2 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i20 >> 2] = i2;
    break;
   }
   i2 = i17 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i18 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i16 = i18 | 0;
   i2 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    break;
   } else {
    HEAP32[i16 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i18 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i18 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i19, i8 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i18, i19) | 0;
 i18 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i19 = i18 | 0;
   i1 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    break;
   } else {
    HEAP32[i19 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i4) {
   i18 = i13 + 4 | 0;
   i1 = i18 | 0;
   i19 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i19 | 0) != 0) {
    HEAP32[i1 >> 2] = i19;
    break;
   }
   i19 = i18 - 4 | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 1](i19);
  }
 } while (0);
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i13 = i8 + 4 | 0;
 i8 = i13 | 0;
 i4 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i8 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
 i4 = i13 - 4 | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
 STACKTOP = i3;
 return;
}
function __ZN9Inspector31InspectorPageFrontendDispatcher23javascriptDialogOpeningERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
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
 i14 = i3 + 80 | 0;
 i15 = i3 + 88 | 0;
 i16 = i3 + 96 | 0;
 i17 = i3 + 104 | 0;
 i18 = i3 + 112 | 0;
 i19 = i3 + 120 | 0;
 __ZN9Inspector15InspectorObject6createEv(i8);
 i20 = i8 | 0;
 i8 = HEAP32[i20 >> 2] | 0;
 HEAP32[i20 >> 2] = 0;
 i20 = i8 | 0;
 HEAP32[i10 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i9, i10);
 HEAP32[i12 >> 2] = H_BASE + 2528;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i11, i12);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i7, i11);
 i12 = i6 | 0;
 i10 = i7 | 0;
 i7 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i12 >> 2] = i7;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i20, i9, i6);
 i6 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i12 = i6 + 4 | 0;
   i7 = i12 | 0;
   i21 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i21 | 0) != 0) {
    HEAP32[i7 >> 2] = i21;
    break;
   }
   i21 = i12 - 4 | 0;
   if ((i21 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 1](i21);
  }
 } while (0);
 i6 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i10 = i6 + 4 | 0;
   i21 = i10 | 0;
   i12 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) != 0) {
    HEAP32[i21 >> 2] = i12;
    break;
   }
   i12 = i10 - 4 | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 1](i12);
  }
 } while (0);
 i6 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i11 = i6 | 0;
   i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i11 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i9 = i6 | 0;
   i12 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i9 >> 2] = i12;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i13);
 i6 = i13 | 0;
 i13 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i15 >> 2] = H_BASE + 1704;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i14, i15);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i5, i2);
 i2 = i4 | 0;
 i15 = i5 | 0;
 i5 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = 0;
 HEAP32[i2 >> 2] = i5;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i13 | 0, i14, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 4 | 0;
   i5 = i2 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i2 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 1](i6);
  }
 } while (0);
 i4 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i15 = i4 + 4 | 0;
   i6 = i15 | 0;
   i2 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i6 >> 2] = i2;
    break;
   }
   i2 = i15 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i4 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i14 = i4 | 0;
   i2 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i14 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP32[i17 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i16, i17);
 i17 = i18 | 0;
 HEAP32[i17 >> 2] = i13;
 i4 = (i13 | 0) == 0;
 if (!i4) {
  i2 = i13 + 4 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i20, i16, i18);
 i18 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i17 = i18 + 4 | 0;
   i20 = i17 | 0;
   i2 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i20 >> 2] = i2;
    break;
   }
   i2 = i17 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i18 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i16 = i18 | 0;
   i2 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    break;
   } else {
    HEAP32[i16 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i18 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i18 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i19, i8 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i18, i19) | 0;
 i18 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i19 = i18 | 0;
   i1 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    break;
   } else {
    HEAP32[i19 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i4) {
   i18 = i13 + 4 | 0;
   i1 = i18 | 0;
   i19 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i19 | 0) != 0) {
    HEAP32[i1 >> 2] = i19;
    break;
   }
   i19 = i18 - 4 | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 1](i19);
  }
 } while (0);
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i13 = i8 + 4 | 0;
 i8 = i13 | 0;
 i4 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i8 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
 i4 = i13 - 4 | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
 STACKTOP = i3;
 return;
}
function __ZN9Inspector31InspectorPageFrontendDispatcher19frameStoppedLoadingERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
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
 i14 = i3 + 80 | 0;
 i15 = i3 + 88 | 0;
 i16 = i3 + 96 | 0;
 i17 = i3 + 104 | 0;
 i18 = i3 + 112 | 0;
 i19 = i3 + 120 | 0;
 __ZN9Inspector15InspectorObject6createEv(i8);
 i20 = i8 | 0;
 i8 = HEAP32[i20 >> 2] | 0;
 HEAP32[i20 >> 2] = 0;
 i20 = i8 | 0;
 HEAP32[i10 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i9, i10);
 HEAP32[i12 >> 2] = H_BASE + 2640;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i11, i12);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i7, i11);
 i12 = i6 | 0;
 i10 = i7 | 0;
 i7 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i12 >> 2] = i7;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i20, i9, i6);
 i6 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i12 = i6 + 4 | 0;
   i7 = i12 | 0;
   i21 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i21 | 0) != 0) {
    HEAP32[i7 >> 2] = i21;
    break;
   }
   i21 = i12 - 4 | 0;
   if ((i21 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 1](i21);
  }
 } while (0);
 i6 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i10 = i6 + 4 | 0;
   i21 = i10 | 0;
   i12 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) != 0) {
    HEAP32[i21 >> 2] = i12;
    break;
   }
   i12 = i10 - 4 | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 1](i12);
  }
 } while (0);
 i6 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i11 = i6 | 0;
   i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i11 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i9 = i6 | 0;
   i12 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i9 >> 2] = i12;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i13);
 i6 = i13 | 0;
 i13 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i15 >> 2] = H_BASE + 1864;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i14, i15);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i5, i2);
 i2 = i4 | 0;
 i15 = i5 | 0;
 i5 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = 0;
 HEAP32[i2 >> 2] = i5;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i13 | 0, i14, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 4 | 0;
   i5 = i2 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i2 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 1](i6);
  }
 } while (0);
 i4 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i15 = i4 + 4 | 0;
   i6 = i15 | 0;
   i2 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i6 >> 2] = i2;
    break;
   }
   i2 = i15 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i4 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i14 = i4 | 0;
   i2 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i14 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP32[i17 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i16, i17);
 i17 = i18 | 0;
 HEAP32[i17 >> 2] = i13;
 i4 = (i13 | 0) == 0;
 if (!i4) {
  i2 = i13 + 4 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i20, i16, i18);
 i18 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i17 = i18 + 4 | 0;
   i20 = i17 | 0;
   i2 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i20 >> 2] = i2;
    break;
   }
   i2 = i17 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i18 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i16 = i18 | 0;
   i2 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    break;
   } else {
    HEAP32[i16 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i18 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i18 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i19, i8 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i18, i19) | 0;
 i18 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i19 = i18 | 0;
   i1 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    break;
   } else {
    HEAP32[i19 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i4) {
   i18 = i13 + 4 | 0;
   i1 = i18 | 0;
   i19 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i19 | 0) != 0) {
    HEAP32[i1 >> 2] = i19;
    break;
   }
   i19 = i18 - 4 | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 1](i19);
  }
 } while (0);
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i13 = i8 + 4 | 0;
 i8 = i13 | 0;
 i4 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i8 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
 i4 = i13 - 4 | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
 STACKTOP = i3;
 return;
}
function __ZN9Inspector31InspectorPageFrontendDispatcher19frameStartedLoadingERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
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
 i14 = i3 + 80 | 0;
 i15 = i3 + 88 | 0;
 i16 = i3 + 96 | 0;
 i17 = i3 + 104 | 0;
 i18 = i3 + 112 | 0;
 i19 = i3 + 120 | 0;
 __ZN9Inspector15InspectorObject6createEv(i8);
 i20 = i8 | 0;
 i8 = HEAP32[i20 >> 2] | 0;
 HEAP32[i20 >> 2] = 0;
 i20 = i8 | 0;
 HEAP32[i10 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i9, i10);
 HEAP32[i12 >> 2] = H_BASE + 2672;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i11, i12);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i7, i11);
 i12 = i6 | 0;
 i10 = i7 | 0;
 i7 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i12 >> 2] = i7;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i20, i9, i6);
 i6 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i12 = i6 + 4 | 0;
   i7 = i12 | 0;
   i21 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i21 | 0) != 0) {
    HEAP32[i7 >> 2] = i21;
    break;
   }
   i21 = i12 - 4 | 0;
   if ((i21 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 1](i21);
  }
 } while (0);
 i6 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i10 = i6 + 4 | 0;
   i21 = i10 | 0;
   i12 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) != 0) {
    HEAP32[i21 >> 2] = i12;
    break;
   }
   i12 = i10 - 4 | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 1](i12);
  }
 } while (0);
 i6 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i11 = i6 | 0;
   i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i11 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i9 = i6 | 0;
   i12 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i9 >> 2] = i12;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i13);
 i6 = i13 | 0;
 i13 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i15 >> 2] = H_BASE + 1864;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i14, i15);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i5, i2);
 i2 = i4 | 0;
 i15 = i5 | 0;
 i5 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = 0;
 HEAP32[i2 >> 2] = i5;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i13 | 0, i14, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 4 | 0;
   i5 = i2 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i2 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 1](i6);
  }
 } while (0);
 i4 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i15 = i4 + 4 | 0;
   i6 = i15 | 0;
   i2 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i6 >> 2] = i2;
    break;
   }
   i2 = i15 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i4 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i14 = i4 | 0;
   i2 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i14 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP32[i17 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i16, i17);
 i17 = i18 | 0;
 HEAP32[i17 >> 2] = i13;
 i4 = (i13 | 0) == 0;
 if (!i4) {
  i2 = i13 + 4 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i20, i16, i18);
 i18 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i17 = i18 + 4 | 0;
   i20 = i17 | 0;
   i2 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i20 >> 2] = i2;
    break;
   }
   i2 = i17 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i18 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i16 = i18 | 0;
   i2 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    break;
   } else {
    HEAP32[i16 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i18 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i18 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i19, i8 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i18, i19) | 0;
 i18 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i19 = i18 | 0;
   i1 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    break;
   } else {
    HEAP32[i19 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i4) {
   i18 = i13 + 4 | 0;
   i1 = i18 | 0;
   i19 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i19 | 0) != 0) {
    HEAP32[i1 >> 2] = i19;
    break;
   }
   i19 = i18 - 4 | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 1](i19);
  }
 } while (0);
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i13 = i8 + 4 | 0;
 i8 = i13 | 0;
 i4 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i8 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
 i4 = i13 - 4 | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
 STACKTOP = i3;
 return;
}
function __ZN9Inspector31InspectorPageFrontendDispatcher14loadEventFiredEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
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
 i14 = i3 + 80 | 0;
 i15 = i3 + 88 | 0;
 i16 = i3 + 96 | 0;
 i17 = i3 + 104 | 0;
 i18 = i3 + 112 | 0;
 i19 = i3 + 120 | 0;
 __ZN9Inspector15InspectorObject6createEv(i8);
 i20 = i8 | 0;
 i8 = HEAP32[i20 >> 2] | 0;
 HEAP32[i20 >> 2] = 0;
 i20 = i8 | 0;
 HEAP32[i10 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i9, i10);
 HEAP32[i12 >> 2] = H_BASE + 2784;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i11, i12);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i7, i11);
 i12 = i6 | 0;
 i10 = i7 | 0;
 i7 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i12 >> 2] = i7;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i20, i9, i6);
 i6 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i12 = i6 + 4 | 0;
   i7 = i12 | 0;
   i21 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i21 | 0) != 0) {
    HEAP32[i7 >> 2] = i21;
    break;
   }
   i21 = i12 - 4 | 0;
   if ((i21 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 1](i21);
  }
 } while (0);
 i6 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i10 = i6 + 4 | 0;
   i21 = i10 | 0;
   i12 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) != 0) {
    HEAP32[i21 >> 2] = i12;
    break;
   }
   i12 = i10 - 4 | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 1](i12);
  }
 } while (0);
 i6 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i11 = i6 | 0;
   i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i11 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i9 = i6 | 0;
   i12 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i9 >> 2] = i12;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i13);
 i6 = i13 | 0;
 i13 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i15 >> 2] = H_BASE + 472;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i14, i15);
 __ZN9Inspector19InspectorBasicValue6createEd(i5, d2);
 i15 = i4 | 0;
 i6 = i5 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i15 >> 2] = i5;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i13 | 0, i14, i4);
 i4 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i15 = i4 + 4 | 0;
   i5 = i15 | 0;
   i12 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) != 0) {
    HEAP32[i5 >> 2] = i12;
    break;
   }
   i12 = i15 - 4 | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 1](i12);
  }
 } while (0);
 i4 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i6 = i4 + 4 | 0;
   i12 = i6 | 0;
   i15 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i12 >> 2] = i15;
    break;
   }
   i15 = i6 - 4 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 1](i15);
  }
 } while (0);
 i4 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i14 = i4 | 0;
   i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i14 >> 2] = i15;
    break;
   }
  }
 } while (0);
 HEAP32[i17 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i16, i17);
 i17 = i18 | 0;
 HEAP32[i17 >> 2] = i13;
 i4 = (i13 | 0) == 0;
 if (!i4) {
  i15 = i13 + 4 | 0;
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i20, i16, i18);
 i18 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i17 = i18 + 4 | 0;
   i20 = i17 | 0;
   i15 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i20 >> 2] = i15;
    break;
   }
   i15 = i17 - 4 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 1](i15);
  }
 } while (0);
 i18 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i16 = i18 | 0;
   i15 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    break;
   } else {
    HEAP32[i16 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i18 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i18 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i19, i8 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i18, i19) | 0;
 i18 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i19 = i18 | 0;
   i1 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    break;
   } else {
    HEAP32[i19 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i4) {
   i18 = i13 + 4 | 0;
   i1 = i18 | 0;
   i19 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i19 | 0) != 0) {
    HEAP32[i1 >> 2] = i19;
    break;
   }
   i19 = i18 - 4 | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 1](i19);
  }
 } while (0);
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i13 = i8 + 4 | 0;
 i8 = i13 | 0;
 i4 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i8 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
 i4 = i13 - 4 | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
 STACKTOP = i3;
 return;
}
function __ZN9Inspector33InspectorCanvasFrontendDispatcher14contextCreatedERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
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
 i14 = i3 + 80 | 0;
 i15 = i3 + 88 | 0;
 i16 = i3 + 96 | 0;
 i17 = i3 + 104 | 0;
 i18 = i3 + 112 | 0;
 i19 = i3 + 120 | 0;
 __ZN9Inspector15InspectorObject6createEv(i8);
 i20 = i8 | 0;
 i8 = HEAP32[i20 >> 2] | 0;
 HEAP32[i20 >> 2] = 0;
 i20 = i8 | 0;
 HEAP32[i10 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i9, i10);
 HEAP32[i12 >> 2] = H_BASE + 1776;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i11, i12);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i7, i11);
 i12 = i6 | 0;
 i10 = i7 | 0;
 i7 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i12 >> 2] = i7;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i20, i9, i6);
 i6 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i12 = i6 + 4 | 0;
   i7 = i12 | 0;
   i21 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i21 | 0) != 0) {
    HEAP32[i7 >> 2] = i21;
    break;
   }
   i21 = i12 - 4 | 0;
   if ((i21 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 1](i21);
  }
 } while (0);
 i6 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i10 = i6 + 4 | 0;
   i21 = i10 | 0;
   i12 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) != 0) {
    HEAP32[i21 >> 2] = i12;
    break;
   }
   i12 = i10 - 4 | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 1](i12);
  }
 } while (0);
 i6 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i11 = i6 | 0;
   i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i11 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i9 = i6 | 0;
   i12 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i9 >> 2] = i12;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i13);
 i6 = i13 | 0;
 i13 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i15 >> 2] = H_BASE + 1864;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i14, i15);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i5, i2);
 i2 = i4 | 0;
 i15 = i5 | 0;
 i5 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = 0;
 HEAP32[i2 >> 2] = i5;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i13 | 0, i14, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 4 | 0;
   i5 = i2 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i2 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 1](i6);
  }
 } while (0);
 i4 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i15 = i4 + 4 | 0;
   i6 = i15 | 0;
   i2 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i6 >> 2] = i2;
    break;
   }
   i2 = i15 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i4 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i14 = i4 | 0;
   i2 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i14 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP32[i17 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i16, i17);
 i17 = i18 | 0;
 HEAP32[i17 >> 2] = i13;
 i4 = (i13 | 0) == 0;
 if (!i4) {
  i2 = i13 + 4 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i20, i16, i18);
 i18 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i17 = i18 + 4 | 0;
   i20 = i17 | 0;
   i2 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i20 >> 2] = i2;
    break;
   }
   i2 = i17 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i18 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i16 = i18 | 0;
   i2 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    break;
   } else {
    HEAP32[i16 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i18 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i18 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i19, i8 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i18, i19) | 0;
 i18 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i19 = i18 | 0;
   i1 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    break;
   } else {
    HEAP32[i19 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i4) {
   i18 = i13 + 4 | 0;
   i1 = i18 | 0;
   i19 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i19 | 0) != 0) {
    HEAP32[i1 >> 2] = i19;
    break;
   }
   i19 = i18 - 4 | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 1](i19);
  }
 } while (0);
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i13 = i8 + 4 | 0;
 i8 = i13 | 0;
 i4 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i8 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
 i4 = i13 - 4 | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
 STACKTOP = i3;
 return;
}
function __ZN9Inspector30InspectorCSSFrontendDispatcher17styleSheetChangedERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
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
 i14 = i3 + 80 | 0;
 i15 = i3 + 88 | 0;
 i16 = i3 + 96 | 0;
 i17 = i3 + 104 | 0;
 i18 = i3 + 112 | 0;
 i19 = i3 + 120 | 0;
 __ZN9Inspector15InspectorObject6createEv(i8);
 i20 = i8 | 0;
 i8 = HEAP32[i20 >> 2] | 0;
 HEAP32[i20 >> 2] = 0;
 i20 = i8 | 0;
 HEAP32[i10 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i9, i10);
 HEAP32[i12 >> 2] = H_BASE + 280;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i11, i12);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i7, i11);
 i12 = i6 | 0;
 i10 = i7 | 0;
 i7 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i12 >> 2] = i7;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i20, i9, i6);
 i6 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i12 = i6 + 4 | 0;
   i7 = i12 | 0;
   i21 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i21 | 0) != 0) {
    HEAP32[i7 >> 2] = i21;
    break;
   }
   i21 = i12 - 4 | 0;
   if ((i21 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 1](i21);
  }
 } while (0);
 i6 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i10 = i6 + 4 | 0;
   i21 = i10 | 0;
   i12 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) != 0) {
    HEAP32[i21 >> 2] = i12;
    break;
   }
   i12 = i10 - 4 | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 1](i12);
  }
 } while (0);
 i6 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i11 = i6 | 0;
   i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i11 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i9 = i6 | 0;
   i12 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i9 >> 2] = i12;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i13);
 i6 = i13 | 0;
 i13 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i15 >> 2] = H_BASE + 3016;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i14, i15);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i5, i2);
 i2 = i4 | 0;
 i15 = i5 | 0;
 i5 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = 0;
 HEAP32[i2 >> 2] = i5;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i13 | 0, i14, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 4 | 0;
   i5 = i2 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i2 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 1](i6);
  }
 } while (0);
 i4 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i15 = i4 + 4 | 0;
   i6 = i15 | 0;
   i2 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i6 >> 2] = i2;
    break;
   }
   i2 = i15 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i4 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i14 = i4 | 0;
   i2 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i14 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP32[i17 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i16, i17);
 i17 = i18 | 0;
 HEAP32[i17 >> 2] = i13;
 i4 = (i13 | 0) == 0;
 if (!i4) {
  i2 = i13 + 4 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i20, i16, i18);
 i18 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i17 = i18 + 4 | 0;
   i20 = i17 | 0;
   i2 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i20 >> 2] = i2;
    break;
   }
   i2 = i17 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i18 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i16 = i18 | 0;
   i2 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    break;
   } else {
    HEAP32[i16 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i18 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i18 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i19, i8 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i18, i19) | 0;
 i18 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i19 = i18 | 0;
   i1 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    break;
   } else {
    HEAP32[i19 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i4) {
   i18 = i13 + 4 | 0;
   i1 = i18 | 0;
   i19 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i19 | 0) != 0) {
    HEAP32[i1 >> 2] = i19;
    break;
   }
   i19 = i18 - 4 | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 1](i19);
  }
 } while (0);
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i13 = i8 + 4 | 0;
 i8 = i13 | 0;
 i4 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i8 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
 i4 = i13 - 4 | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
 STACKTOP = i3;
 return;
}
function __ZN9Inspector31InspectorPageFrontendDispatcher13frameDetachedERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
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
 i14 = i3 + 80 | 0;
 i15 = i3 + 88 | 0;
 i16 = i3 + 96 | 0;
 i17 = i3 + 104 | 0;
 i18 = i3 + 112 | 0;
 i19 = i3 + 120 | 0;
 __ZN9Inspector15InspectorObject6createEv(i8);
 i20 = i8 | 0;
 i8 = HEAP32[i20 >> 2] | 0;
 HEAP32[i20 >> 2] = 0;
 i20 = i8 | 0;
 HEAP32[i10 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i9, i10);
 HEAP32[i12 >> 2] = H_BASE + 2704;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i11, i12);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i7, i11);
 i12 = i6 | 0;
 i10 = i7 | 0;
 i7 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i12 >> 2] = i7;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i20, i9, i6);
 i6 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i12 = i6 + 4 | 0;
   i7 = i12 | 0;
   i21 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i21 | 0) != 0) {
    HEAP32[i7 >> 2] = i21;
    break;
   }
   i21 = i12 - 4 | 0;
   if ((i21 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 1](i21);
  }
 } while (0);
 i6 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i10 = i6 + 4 | 0;
   i21 = i10 | 0;
   i12 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) != 0) {
    HEAP32[i21 >> 2] = i12;
    break;
   }
   i12 = i10 - 4 | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 1](i12);
  }
 } while (0);
 i6 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i11 = i6 | 0;
   i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i11 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i9 = i6 | 0;
   i12 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i9 >> 2] = i12;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i13);
 i6 = i13 | 0;
 i13 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i15 >> 2] = H_BASE + 1864;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i14, i15);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i5, i2);
 i2 = i4 | 0;
 i15 = i5 | 0;
 i5 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = 0;
 HEAP32[i2 >> 2] = i5;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i13 | 0, i14, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 4 | 0;
   i5 = i2 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i2 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 1](i6);
  }
 } while (0);
 i4 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i15 = i4 + 4 | 0;
   i6 = i15 | 0;
   i2 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i6 >> 2] = i2;
    break;
   }
   i2 = i15 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i4 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i14 = i4 | 0;
   i2 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i14 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP32[i17 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i16, i17);
 i17 = i18 | 0;
 HEAP32[i17 >> 2] = i13;
 i4 = (i13 | 0) == 0;
 if (!i4) {
  i2 = i13 + 4 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i20, i16, i18);
 i18 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i17 = i18 + 4 | 0;
   i20 = i17 | 0;
   i2 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i20 >> 2] = i2;
    break;
   }
   i2 = i17 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i18 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i16 = i18 | 0;
   i2 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    break;
   } else {
    HEAP32[i16 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i18 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i18 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i19, i8 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i18, i19) | 0;
 i18 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i19 = i18 | 0;
   i1 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    break;
   } else {
    HEAP32[i19 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i4) {
   i18 = i13 + 4 | 0;
   i1 = i18 | 0;
   i19 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i19 | 0) != 0) {
    HEAP32[i1 >> 2] = i19;
    break;
   }
   i19 = i18 - 4 | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 1](i19);
  }
 } while (0);
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i13 = i8 + 4 | 0;
 i8 = i13 | 0;
 i4 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i8 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
 i4 = i13 - 4 | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
 STACKTOP = i3;
 return;
}
function __ZN9Inspector34InspectorConsoleFrontendDispatcher25messageRepeatCountUpdatedEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
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
 i14 = i3 + 80 | 0;
 i15 = i3 + 88 | 0;
 i16 = i3 + 96 | 0;
 i17 = i3 + 104 | 0;
 i18 = i3 + 112 | 0;
 i19 = i3 + 120 | 0;
 __ZN9Inspector15InspectorObject6createEv(i8);
 i20 = i8 | 0;
 i8 = HEAP32[i20 >> 2] | 0;
 HEAP32[i20 >> 2] = 0;
 i20 = i8 | 0;
 HEAP32[i10 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i9, i10);
 HEAP32[i12 >> 2] = H_BASE + 1664;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i11, i12);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i7, i11);
 i12 = i6 | 0;
 i10 = i7 | 0;
 i7 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i12 >> 2] = i7;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i20, i9, i6);
 i6 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i12 = i6 + 4 | 0;
   i7 = i12 | 0;
   i21 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i21 | 0) != 0) {
    HEAP32[i7 >> 2] = i21;
    break;
   }
   i21 = i12 - 4 | 0;
   if ((i21 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 1](i21);
  }
 } while (0);
 i6 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i10 = i6 + 4 | 0;
   i21 = i10 | 0;
   i12 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) != 0) {
    HEAP32[i21 >> 2] = i12;
    break;
   }
   i12 = i10 - 4 | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 1](i12);
  }
 } while (0);
 i6 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i11 = i6 | 0;
   i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i11 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i9 = i6 | 0;
   i12 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i9 >> 2] = i12;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i13);
 i6 = i13 | 0;
 i13 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i15 >> 2] = H_BASE + 1656;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i14, i15);
 __ZN9Inspector19InspectorBasicValue6createEd(i5, +(i2 | 0));
 i2 = i4 | 0;
 i15 = i5 | 0;
 i5 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = 0;
 HEAP32[i2 >> 2] = i5;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i13 | 0, i14, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 4 | 0;
   i5 = i2 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i2 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 1](i6);
  }
 } while (0);
 i4 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i15 = i4 + 4 | 0;
   i6 = i15 | 0;
   i2 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i6 >> 2] = i2;
    break;
   }
   i2 = i15 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i4 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i14 = i4 | 0;
   i2 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i14 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP32[i17 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i16, i17);
 i17 = i18 | 0;
 HEAP32[i17 >> 2] = i13;
 i4 = (i13 | 0) == 0;
 if (!i4) {
  i2 = i13 + 4 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i20, i16, i18);
 i18 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i17 = i18 + 4 | 0;
   i20 = i17 | 0;
   i2 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i20 >> 2] = i2;
    break;
   }
   i2 = i17 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i18 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i16 = i18 | 0;
   i2 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    break;
   } else {
    HEAP32[i16 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i18 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i18 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i19, i8 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i18, i19) | 0;
 i18 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i19 = i18 | 0;
   i1 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    break;
   } else {
    HEAP32[i19 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i4) {
   i18 = i13 + 4 | 0;
   i1 = i18 | 0;
   i19 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i19 | 0) != 0) {
    HEAP32[i1 >> 2] = i19;
    break;
   }
   i19 = i18 - 4 | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 1](i19);
  }
 } while (0);
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i13 = i8 + 4 | 0;
 i8 = i13 | 0;
 i4 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i8 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
 i4 = i13 - 4 | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
 STACKTOP = i3;
 return;
}
function __ZN9Inspector39InspectorHeapProfilerFrontendDispatcher18finishHeapSnapshotEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
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
 i14 = i3 + 80 | 0;
 i15 = i3 + 88 | 0;
 i16 = i3 + 96 | 0;
 i17 = i3 + 104 | 0;
 i18 = i3 + 112 | 0;
 i19 = i3 + 120 | 0;
 __ZN9Inspector15InspectorObject6createEv(i8);
 i20 = i8 | 0;
 i8 = HEAP32[i20 >> 2] | 0;
 HEAP32[i20 >> 2] = 0;
 i20 = i8 | 0;
 HEAP32[i10 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i9, i10);
 HEAP32[i12 >> 2] = H_BASE + 728;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i11, i12);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i7, i11);
 i12 = i6 | 0;
 i10 = i7 | 0;
 i7 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i12 >> 2] = i7;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i20, i9, i6);
 i6 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i12 = i6 + 4 | 0;
   i7 = i12 | 0;
   i21 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i21 | 0) != 0) {
    HEAP32[i7 >> 2] = i21;
    break;
   }
   i21 = i12 - 4 | 0;
   if ((i21 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 1](i21);
  }
 } while (0);
 i6 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i10 = i6 + 4 | 0;
   i21 = i10 | 0;
   i12 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) != 0) {
    HEAP32[i21 >> 2] = i12;
    break;
   }
   i12 = i10 - 4 | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 1](i12);
  }
 } while (0);
 i6 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i11 = i6 | 0;
   i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i11 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i9 = i6 | 0;
   i12 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i9 >> 2] = i12;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i13);
 i6 = i13 | 0;
 i13 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i15 >> 2] = H_BASE + 784;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i14, i15);
 __ZN9Inspector19InspectorBasicValue6createEd(i5, +(i2 | 0));
 i2 = i4 | 0;
 i15 = i5 | 0;
 i5 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = 0;
 HEAP32[i2 >> 2] = i5;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i13 | 0, i14, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 4 | 0;
   i5 = i2 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i2 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 1](i6);
  }
 } while (0);
 i4 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i15 = i4 + 4 | 0;
   i6 = i15 | 0;
   i2 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i6 >> 2] = i2;
    break;
   }
   i2 = i15 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i4 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i14 = i4 | 0;
   i2 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i14 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP32[i17 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i16, i17);
 i17 = i18 | 0;
 HEAP32[i17 >> 2] = i13;
 i4 = (i13 | 0) == 0;
 if (!i4) {
  i2 = i13 + 4 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i20, i16, i18);
 i18 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i17 = i18 + 4 | 0;
   i20 = i17 | 0;
   i2 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i20 >> 2] = i2;
    break;
   }
   i2 = i17 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i18 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i16 = i18 | 0;
   i2 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    break;
   } else {
    HEAP32[i16 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i18 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i18 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i19, i8 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i18, i19) | 0;
 i18 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i19 = i18 | 0;
   i1 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    break;
   } else {
    HEAP32[i19 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i4) {
   i18 = i13 + 4 | 0;
   i1 = i18 | 0;
   i19 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i19 | 0) != 0) {
    HEAP32[i1 >> 2] = i19;
    break;
   }
   i19 = i18 - 4 | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 1](i19);
  }
 } while (0);
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i13 = i8 + 4 | 0;
 i8 = i13 | 0;
 i4 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i8 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
 i4 = i13 - 4 | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
 STACKTOP = i3;
 return;
}
function __ZN9Inspector43InspectorApplicationCacheFrontendDispatcher19networkStateUpdatedEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
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
 i14 = i3 + 80 | 0;
 i15 = i3 + 88 | 0;
 i16 = i3 + 96 | 0;
 i17 = i3 + 104 | 0;
 i18 = i3 + 112 | 0;
 i19 = i3 + 120 | 0;
 __ZN9Inspector15InspectorObject6createEv(i8);
 i20 = i8 | 0;
 i8 = HEAP32[i20 >> 2] | 0;
 HEAP32[i20 >> 2] = 0;
 i20 = i8 | 0;
 HEAP32[i10 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i9, i10);
 HEAP32[i12 >> 2] = H_BASE + 984;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i11, i12);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i7, i11);
 i12 = i6 | 0;
 i10 = i7 | 0;
 i7 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i12 >> 2] = i7;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i20, i9, i6);
 i6 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i12 = i6 + 4 | 0;
   i7 = i12 | 0;
   i21 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i21 | 0) != 0) {
    HEAP32[i7 >> 2] = i21;
    break;
   }
   i21 = i12 - 4 | 0;
   if ((i21 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 1](i21);
  }
 } while (0);
 i6 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i10 = i6 + 4 | 0;
   i21 = i10 | 0;
   i12 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) != 0) {
    HEAP32[i21 >> 2] = i12;
    break;
   }
   i12 = i10 - 4 | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 1](i12);
  }
 } while (0);
 i6 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i11 = i6 | 0;
   i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i11 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i9 = i6 | 0;
   i12 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i9 >> 2] = i12;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i13);
 i6 = i13 | 0;
 i13 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i15 >> 2] = H_BASE + 760;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i14, i15);
 __ZN9Inspector19InspectorBasicValue6createEb(i5, i2);
 i2 = i4 | 0;
 i15 = i5 | 0;
 i5 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = 0;
 HEAP32[i2 >> 2] = i5;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i13 | 0, i14, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 4 | 0;
   i5 = i2 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i2 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 1](i6);
  }
 } while (0);
 i4 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i15 = i4 + 4 | 0;
   i6 = i15 | 0;
   i2 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i6 >> 2] = i2;
    break;
   }
   i2 = i15 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i4 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i14 = i4 | 0;
   i2 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i14 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP32[i17 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i16, i17);
 i17 = i18 | 0;
 HEAP32[i17 >> 2] = i13;
 i4 = (i13 | 0) == 0;
 if (!i4) {
  i2 = i13 + 4 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i20, i16, i18);
 i18 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i17 = i18 + 4 | 0;
   i20 = i17 | 0;
   i2 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i20 >> 2] = i2;
    break;
   }
   i2 = i17 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i18 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i16 = i18 | 0;
   i2 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    break;
   } else {
    HEAP32[i16 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i18 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i18 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i19, i8 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i18, i19) | 0;
 i18 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i19 = i18 | 0;
   i1 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    break;
   } else {
    HEAP32[i19 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i4) {
   i18 = i13 + 4 | 0;
   i1 = i18 | 0;
   i19 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i19 | 0) != 0) {
    HEAP32[i1 >> 2] = i19;
    break;
   }
   i19 = i18 - 4 | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 1](i19);
  }
 } while (0);
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i13 = i8 + 4 | 0;
 i8 = i13 | 0;
 i4 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i8 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
 i4 = i13 - 4 | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
 STACKTOP = i3;
 return;
}
function __ZN9Inspector35InspectorProfilerFrontendDispatcher18finishHeapSnapshotEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
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
 i14 = i3 + 80 | 0;
 i15 = i3 + 88 | 0;
 i16 = i3 + 96 | 0;
 i17 = i3 + 104 | 0;
 i18 = i3 + 112 | 0;
 i19 = i3 + 120 | 0;
 __ZN9Inspector15InspectorObject6createEv(i8);
 i20 = i8 | 0;
 i8 = HEAP32[i20 >> 2] | 0;
 HEAP32[i20 >> 2] = 0;
 i20 = i8 | 0;
 HEAP32[i10 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i9, i10);
 HEAP32[i12 >> 2] = H_BASE + 2344;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i11, i12);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i7, i11);
 i12 = i6 | 0;
 i10 = i7 | 0;
 i7 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i12 >> 2] = i7;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i20, i9, i6);
 i6 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i12 = i6 + 4 | 0;
   i7 = i12 | 0;
   i21 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i21 | 0) != 0) {
    HEAP32[i7 >> 2] = i21;
    break;
   }
   i21 = i12 - 4 | 0;
   if ((i21 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 1](i21);
  }
 } while (0);
 i6 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i10 = i6 + 4 | 0;
   i21 = i10 | 0;
   i12 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) != 0) {
    HEAP32[i21 >> 2] = i12;
    break;
   }
   i12 = i10 - 4 | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 1](i12);
  }
 } while (0);
 i6 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i11 = i6 | 0;
   i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i11 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i9 = i6 | 0;
   i12 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i9 >> 2] = i12;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i13);
 i6 = i13 | 0;
 i13 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i15 >> 2] = H_BASE + 784;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i14, i15);
 __ZN9Inspector19InspectorBasicValue6createEd(i5, +(i2 | 0));
 i2 = i4 | 0;
 i15 = i5 | 0;
 i5 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = 0;
 HEAP32[i2 >> 2] = i5;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i13 | 0, i14, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 4 | 0;
   i5 = i2 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i2 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 1](i6);
  }
 } while (0);
 i4 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i15 = i4 + 4 | 0;
   i6 = i15 | 0;
   i2 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i6 >> 2] = i2;
    break;
   }
   i2 = i15 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i4 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i14 = i4 | 0;
   i2 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i14 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP32[i17 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i16, i17);
 i17 = i18 | 0;
 HEAP32[i17 >> 2] = i13;
 i4 = (i13 | 0) == 0;
 if (!i4) {
  i2 = i13 + 4 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i20, i16, i18);
 i18 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i17 = i18 + 4 | 0;
   i20 = i17 | 0;
   i2 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i20 >> 2] = i2;
    break;
   }
   i2 = i17 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i18 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i16 = i18 | 0;
   i2 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    break;
   } else {
    HEAP32[i16 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i18 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i18 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i19, i8 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i18, i19) | 0;
 i18 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i19 = i18 | 0;
   i1 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    break;
   } else {
    HEAP32[i19 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i4) {
   i18 = i13 + 4 | 0;
   i1 = i18 | 0;
   i19 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i19 | 0) != 0) {
    HEAP32[i1 >> 2] = i19;
    break;
   }
   i19 = i18 - 4 | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 1](i19);
  }
 } while (0);
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i13 = i8 + 4 | 0;
 i8 = i13 | 0;
 i4 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i8 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
 i4 = i13 - 4 | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
 STACKTOP = i3;
 return;
}
function __ZN9Inspector33InspectorWorkerFrontendDispatcher16workerTerminatedEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
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
 i14 = i3 + 80 | 0;
 i15 = i3 + 88 | 0;
 i16 = i3 + 96 | 0;
 i17 = i3 + 104 | 0;
 i18 = i3 + 112 | 0;
 i19 = i3 + 120 | 0;
 __ZN9Inspector15InspectorObject6createEv(i8);
 i20 = i8 | 0;
 i8 = HEAP32[i20 >> 2] | 0;
 HEAP32[i20 >> 2] = 0;
 i20 = i8 | 0;
 HEAP32[i10 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i9, i10);
 HEAP32[i12 >> 2] = H_BASE + 2088;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i11, i12);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i7, i11);
 i12 = i6 | 0;
 i10 = i7 | 0;
 i7 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i12 >> 2] = i7;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i20, i9, i6);
 i6 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i12 = i6 + 4 | 0;
   i7 = i12 | 0;
   i21 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i21 | 0) != 0) {
    HEAP32[i7 >> 2] = i21;
    break;
   }
   i21 = i12 - 4 | 0;
   if ((i21 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 1](i21);
  }
 } while (0);
 i6 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i10 = i6 + 4 | 0;
   i21 = i10 | 0;
   i12 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) != 0) {
    HEAP32[i21 >> 2] = i12;
    break;
   }
   i12 = i10 - 4 | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 1](i12);
  }
 } while (0);
 i6 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i11 = i6 | 0;
   i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i11 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i9 = i6 | 0;
   i12 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i9 >> 2] = i12;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i13);
 i6 = i13 | 0;
 i13 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i15 >> 2] = H_BASE + 2136;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i14, i15);
 __ZN9Inspector19InspectorBasicValue6createEd(i5, +(i2 | 0));
 i2 = i4 | 0;
 i15 = i5 | 0;
 i5 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = 0;
 HEAP32[i2 >> 2] = i5;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i13 | 0, i14, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 4 | 0;
   i5 = i2 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i2 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 1](i6);
  }
 } while (0);
 i4 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i15 = i4 + 4 | 0;
   i6 = i15 | 0;
   i2 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i6 >> 2] = i2;
    break;
   }
   i2 = i15 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i4 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i14 = i4 | 0;
   i2 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i14 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP32[i17 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i16, i17);
 i17 = i18 | 0;
 HEAP32[i17 >> 2] = i13;
 i4 = (i13 | 0) == 0;
 if (!i4) {
  i2 = i13 + 4 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i20, i16, i18);
 i18 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i17 = i18 + 4 | 0;
   i20 = i17 | 0;
   i2 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i20 >> 2] = i2;
    break;
   }
   i2 = i17 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i18 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i16 = i18 | 0;
   i2 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    break;
   } else {
    HEAP32[i16 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i18 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i18 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i19, i8 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i18, i19) | 0;
 i18 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i19 = i18 | 0;
   i1 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    break;
   } else {
    HEAP32[i19 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i4) {
   i18 = i13 + 4 | 0;
   i1 = i18 | 0;
   i19 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i19 | 0) != 0) {
    HEAP32[i1 >> 2] = i19;
    break;
   }
   i19 = i18 - 4 | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 1](i19);
  }
 } while (0);
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i13 = i8 + 4 | 0;
 i8 = i13 | 0;
 i4 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i8 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
 i4 = i13 - 4 | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
 STACKTOP = i3;
 return;
}
function __ZN9Inspector35InspectorProfilerFrontendDispatcher19setRecordingProfileEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
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
 i14 = i3 + 80 | 0;
 i15 = i3 + 88 | 0;
 i16 = i3 + 96 | 0;
 i17 = i3 + 104 | 0;
 i18 = i3 + 112 | 0;
 i19 = i3 + 120 | 0;
 __ZN9Inspector15InspectorObject6createEv(i8);
 i20 = i8 | 0;
 i8 = HEAP32[i20 >> 2] | 0;
 HEAP32[i20 >> 2] = 0;
 i20 = i8 | 0;
 HEAP32[i10 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i9, i10);
 HEAP32[i12 >> 2] = H_BASE + 2312;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i11, i12);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i7, i11);
 i12 = i6 | 0;
 i10 = i7 | 0;
 i7 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i12 >> 2] = i7;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i20, i9, i6);
 i6 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i12 = i6 + 4 | 0;
   i7 = i12 | 0;
   i21 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i21 | 0) != 0) {
    HEAP32[i7 >> 2] = i21;
    break;
   }
   i21 = i12 - 4 | 0;
   if ((i21 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 1](i21);
  }
 } while (0);
 i6 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i10 = i6 + 4 | 0;
   i21 = i10 | 0;
   i12 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) != 0) {
    HEAP32[i21 >> 2] = i12;
    break;
   }
   i12 = i10 - 4 | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 1](i12);
  }
 } while (0);
 i6 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i11 = i6 | 0;
   i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i11 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i9 = i6 | 0;
   i12 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i9 >> 2] = i12;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i13);
 i6 = i13 | 0;
 i13 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i15 >> 2] = H_BASE + 2296;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i14, i15);
 __ZN9Inspector19InspectorBasicValue6createEb(i5, i2);
 i2 = i4 | 0;
 i15 = i5 | 0;
 i5 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = 0;
 HEAP32[i2 >> 2] = i5;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i13 | 0, i14, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 4 | 0;
   i5 = i2 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i2 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 1](i6);
  }
 } while (0);
 i4 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i15 = i4 + 4 | 0;
   i6 = i15 | 0;
   i2 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i6 >> 2] = i2;
    break;
   }
   i2 = i15 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i4 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i14 = i4 | 0;
   i2 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i14 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP32[i17 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i16, i17);
 i17 = i18 | 0;
 HEAP32[i17 >> 2] = i13;
 i4 = (i13 | 0) == 0;
 if (!i4) {
  i2 = i13 + 4 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i20, i16, i18);
 i18 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i17 = i18 + 4 | 0;
   i20 = i17 | 0;
   i2 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i20 >> 2] = i2;
    break;
   }
   i2 = i17 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i18 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i16 = i18 | 0;
   i2 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    break;
   } else {
    HEAP32[i16 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i18 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i18 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i19, i8 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i18, i19) | 0;
 i18 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i19 = i18 | 0;
   i1 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    break;
   } else {
    HEAP32[i19 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i4) {
   i18 = i13 + 4 | 0;
   i1 = i18 | 0;
   i19 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i19 | 0) != 0) {
    HEAP32[i1 >> 2] = i19;
    break;
   }
   i19 = i18 - 4 | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 1](i19);
  }
 } while (0);
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i13 = i8 + 4 | 0;
 i8 = i13 | 0;
 i4 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i8 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
 i4 = i13 - 4 | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
 STACKTOP = i3;
 return;
}
function __ZN9Inspector31InspectorPageFrontendDispatcher14scriptsEnabledEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
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
 i14 = i3 + 80 | 0;
 i15 = i3 + 88 | 0;
 i16 = i3 + 96 | 0;
 i17 = i3 + 104 | 0;
 i18 = i3 + 112 | 0;
 i19 = i3 + 120 | 0;
 __ZN9Inspector15InspectorObject6createEv(i8);
 i20 = i8 | 0;
 i8 = HEAP32[i20 >> 2] | 0;
 HEAP32[i20 >> 2] = 0;
 i20 = i8 | 0;
 HEAP32[i10 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i9, i10);
 HEAP32[i12 >> 2] = H_BASE + 2472;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i11, i12);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i7, i11);
 i12 = i6 | 0;
 i10 = i7 | 0;
 i7 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i12 >> 2] = i7;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i20, i9, i6);
 i6 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i12 = i6 + 4 | 0;
   i7 = i12 | 0;
   i21 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i21 | 0) != 0) {
    HEAP32[i7 >> 2] = i21;
    break;
   }
   i21 = i12 - 4 | 0;
   if ((i21 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 1](i21);
  }
 } while (0);
 i6 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i10 = i6 + 4 | 0;
   i21 = i10 | 0;
   i12 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) != 0) {
    HEAP32[i21 >> 2] = i12;
    break;
   }
   i12 = i10 - 4 | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 1](i12);
  }
 } while (0);
 i6 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i11 = i6 | 0;
   i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i11 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i9 = i6 | 0;
   i12 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i9 >> 2] = i12;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i13);
 i6 = i13 | 0;
 i13 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i15 >> 2] = H_BASE + 2440;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i14, i15);
 __ZN9Inspector19InspectorBasicValue6createEb(i5, i2);
 i2 = i4 | 0;
 i15 = i5 | 0;
 i5 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = 0;
 HEAP32[i2 >> 2] = i5;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i13 | 0, i14, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 4 | 0;
   i5 = i2 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i2 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 1](i6);
  }
 } while (0);
 i4 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i15 = i4 + 4 | 0;
   i6 = i15 | 0;
   i2 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i6 >> 2] = i2;
    break;
   }
   i2 = i15 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i4 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i14 = i4 | 0;
   i2 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i14 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP32[i17 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i16, i17);
 i17 = i18 | 0;
 HEAP32[i17 >> 2] = i13;
 i4 = (i13 | 0) == 0;
 if (!i4) {
  i2 = i13 + 4 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i20, i16, i18);
 i18 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i17 = i18 + 4 | 0;
   i20 = i17 | 0;
   i2 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i20 >> 2] = i2;
    break;
   }
   i2 = i17 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i18 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i16 = i18 | 0;
   i2 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    break;
   } else {
    HEAP32[i16 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i18 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i18 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i19, i8 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i18, i19) | 0;
 i18 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i19 = i18 | 0;
   i1 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    break;
   } else {
    HEAP32[i19 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i4) {
   i18 = i13 + 4 | 0;
   i1 = i18 | 0;
   i19 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i19 | 0) != 0) {
    HEAP32[i1 >> 2] = i19;
    break;
   }
   i19 = i18 - 4 | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 1](i19);
  }
 } while (0);
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i13 = i8 + 4 | 0;
 i8 = i13 | 0;
 i4 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i8 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
 i4 = i13 - 4 | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
 STACKTOP = i3;
 return;
}
function __ZN9Inspector39InspectorHeapProfilerFrontendDispatcher16addProfileHeaderEN3WTF10PassRefPtrINS_11TypeBuilder12HeapProfiler13ProfileHeaderEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 120 | 0;
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
 i14 = i3 + 80 | 0;
 i15 = i3 + 88 | 0;
 i16 = i3 + 96 | 0;
 i17 = i3 + 104 | 0;
 i18 = i3 + 112 | 0;
 __ZN9Inspector15InspectorObject6createEv(i6);
 i19 = i6 | 0;
 i6 = HEAP32[i19 >> 2] | 0;
 HEAP32[i19 >> 2] = 0;
 i19 = i6 | 0;
 HEAP32[i8 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i7, i8);
 HEAP32[i10 >> 2] = H_BASE + 840;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i9, i10);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i5, i9);
 i10 = i4 | 0;
 i8 = i5 | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i5;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i19, i7, i4);
 i4 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i10 = i4 + 4 | 0;
   i5 = i10 | 0;
   i20 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i20 | 0) != 0) {
    HEAP32[i5 >> 2] = i20;
    break;
   }
   i20 = i10 - 4 | 0;
   if ((i20 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 1](i20);
  }
 } while (0);
 i4 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i8 = i4 + 4 | 0;
   i20 = i8 | 0;
   i10 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i20 >> 2] = i10;
    break;
   }
   i10 = i8 - 4 | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 1](i10);
  }
 } while (0);
 i4 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i9 = i4 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i9 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 | 0;
   i10 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i7 >> 2] = i10;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i11);
 i4 = i11 | 0;
 i11 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i13 >> 2] = H_BASE + 832;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i12, i13);
 i13 = i14 | 0;
 i4 = i2 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i13 >> 2] = i2;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i11 | 0, i12, i14);
 i14 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i13 = i14 + 4 | 0;
   i2 = i13 | 0;
   i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i2 >> 2] = i4;
    break;
   }
   i4 = i13 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
  }
 } while (0);
 i14 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i12 = i14 | 0;
   i4 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i12 >> 2] = i4;
    break;
   }
  }
 } while (0);
 HEAP32[i16 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i15, i16);
 i16 = i17 | 0;
 HEAP32[i16 >> 2] = i11;
 i14 = (i11 | 0) == 0;
 if (!i14) {
  i4 = i11 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i19, i15, i17);
 i17 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i16 = i17 + 4 | 0;
   i19 = i16 | 0;
   i4 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i19 >> 2] = i4;
    break;
   }
   i4 = i16 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
  }
 } while (0);
 i17 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i15 = i17 | 0;
   i4 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i15 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i17 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i17 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i18, i6 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i17, i18) | 0;
 i17 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i18 = i17 | 0;
   i1 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i18 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i14) {
   i17 = i11 + 4 | 0;
   i1 = i17 | 0;
   i18 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i18 | 0) != 0) {
    HEAP32[i1 >> 2] = i18;
    break;
   }
   i18 = i17 - 4 | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 1](i18);
  }
 } while (0);
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i11 = i6 + 4 | 0;
 i6 = i11 | 0;
 i14 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i14 | 0) != 0) {
  HEAP32[i6 >> 2] = i14;
  STACKTOP = i3;
  return;
 }
 i14 = i11 - 4 | 0;
 if ((i14 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 1](i14);
 STACKTOP = i3;
 return;
}
function __ZN9Inspector37InspectorDOMStorageFrontendDispatcher22domStorageItemsClearedEN3WTF10PassRefPtrINS_11TypeBuilder10DOMStorage9StorageIdEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 120 | 0;
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
 i14 = i3 + 80 | 0;
 i15 = i3 + 88 | 0;
 i16 = i3 + 96 | 0;
 i17 = i3 + 104 | 0;
 i18 = i3 + 112 | 0;
 __ZN9Inspector15InspectorObject6createEv(i6);
 i19 = i6 | 0;
 i6 = HEAP32[i19 >> 2] | 0;
 HEAP32[i19 >> 2] = 0;
 i19 = i6 | 0;
 HEAP32[i8 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i7, i8);
 HEAP32[i10 >> 2] = H_BASE + 1120;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i9, i10);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i5, i9);
 i10 = i4 | 0;
 i8 = i5 | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i5;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i19, i7, i4);
 i4 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i10 = i4 + 4 | 0;
   i5 = i10 | 0;
   i20 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i20 | 0) != 0) {
    HEAP32[i5 >> 2] = i20;
    break;
   }
   i20 = i10 - 4 | 0;
   if ((i20 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 1](i20);
  }
 } while (0);
 i4 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i8 = i4 + 4 | 0;
   i20 = i8 | 0;
   i10 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i20 >> 2] = i10;
    break;
   }
   i10 = i8 - 4 | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 1](i10);
  }
 } while (0);
 i4 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i9 = i4 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i9 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 | 0;
   i10 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i7 >> 2] = i10;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i11);
 i4 = i11 | 0;
 i11 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i13 >> 2] = H_BASE + 1104;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i12, i13);
 i13 = i14 | 0;
 i4 = i2 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i13 >> 2] = i2;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i11 | 0, i12, i14);
 i14 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i13 = i14 + 4 | 0;
   i2 = i13 | 0;
   i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i2 >> 2] = i4;
    break;
   }
   i4 = i13 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
  }
 } while (0);
 i14 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i12 = i14 | 0;
   i4 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i12 >> 2] = i4;
    break;
   }
  }
 } while (0);
 HEAP32[i16 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i15, i16);
 i16 = i17 | 0;
 HEAP32[i16 >> 2] = i11;
 i14 = (i11 | 0) == 0;
 if (!i14) {
  i4 = i11 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i19, i15, i17);
 i17 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i16 = i17 + 4 | 0;
   i19 = i16 | 0;
   i4 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i19 >> 2] = i4;
    break;
   }
   i4 = i16 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
  }
 } while (0);
 i17 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i15 = i17 | 0;
   i4 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i15 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i17 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i17 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i18, i6 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i17, i18) | 0;
 i17 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i18 = i17 | 0;
   i1 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i18 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i14) {
   i17 = i11 + 4 | 0;
   i1 = i17 | 0;
   i18 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i18 | 0) != 0) {
    HEAP32[i1 >> 2] = i18;
    break;
   }
   i18 = i17 - 4 | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 1](i18);
  }
 } while (0);
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i11 = i6 + 4 | 0;
 i6 = i11 | 0;
 i14 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i14 | 0) != 0) {
  HEAP32[i6 >> 2] = i14;
  STACKTOP = i3;
  return;
 }
 i14 = i11 - 4 | 0;
 if ((i14 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 1](i14);
 STACKTOP = i3;
 return;
}
function __ZN9Inspector35InspectorProfilerFrontendDispatcher16addProfileHeaderEN3WTF10PassRefPtrINS_11TypeBuilder8Profiler13ProfileHeaderEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 120 | 0;
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
 i14 = i3 + 80 | 0;
 i15 = i3 + 88 | 0;
 i16 = i3 + 96 | 0;
 i17 = i3 + 104 | 0;
 i18 = i3 + 112 | 0;
 __ZN9Inspector15InspectorObject6createEv(i6);
 i19 = i6 | 0;
 i6 = HEAP32[i19 >> 2] | 0;
 HEAP32[i19 >> 2] = 0;
 i19 = i6 | 0;
 HEAP32[i8 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i7, i8);
 HEAP32[i10 >> 2] = H_BASE + 2408;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i9, i10);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i5, i9);
 i10 = i4 | 0;
 i8 = i5 | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i5;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i19, i7, i4);
 i4 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i10 = i4 + 4 | 0;
   i5 = i10 | 0;
   i20 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i20 | 0) != 0) {
    HEAP32[i5 >> 2] = i20;
    break;
   }
   i20 = i10 - 4 | 0;
   if ((i20 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 1](i20);
  }
 } while (0);
 i4 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i8 = i4 + 4 | 0;
   i20 = i8 | 0;
   i10 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i20 >> 2] = i10;
    break;
   }
   i10 = i8 - 4 | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 1](i10);
  }
 } while (0);
 i4 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i9 = i4 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i9 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 | 0;
   i10 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i7 >> 2] = i10;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i11);
 i4 = i11 | 0;
 i11 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i13 >> 2] = H_BASE + 832;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i12, i13);
 i13 = i14 | 0;
 i4 = i2 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i13 >> 2] = i2;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i11 | 0, i12, i14);
 i14 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i13 = i14 + 4 | 0;
   i2 = i13 | 0;
   i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i2 >> 2] = i4;
    break;
   }
   i4 = i13 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
  }
 } while (0);
 i14 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i12 = i14 | 0;
   i4 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i12 >> 2] = i4;
    break;
   }
  }
 } while (0);
 HEAP32[i16 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i15, i16);
 i16 = i17 | 0;
 HEAP32[i16 >> 2] = i11;
 i14 = (i11 | 0) == 0;
 if (!i14) {
  i4 = i11 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i19, i15, i17);
 i17 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i16 = i17 + 4 | 0;
   i19 = i16 | 0;
   i4 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i19 >> 2] = i4;
    break;
   }
   i4 = i16 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
  }
 } while (0);
 i17 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i15 = i17 | 0;
   i4 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i15 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i17 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i17 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i18, i6 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i17, i18) | 0;
 i17 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i18 = i17 | 0;
   i1 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i18 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i14) {
   i17 = i11 + 4 | 0;
   i1 = i17 | 0;
   i18 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i18 | 0) != 0) {
    HEAP32[i1 >> 2] = i18;
    break;
   }
   i18 = i17 - 4 | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 1](i18);
  }
 } while (0);
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i11 = i6 + 4 | 0;
 i6 = i11 | 0;
 i14 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i14 | 0) != 0) {
  HEAP32[i6 >> 2] = i14;
  STACKTOP = i3;
  return;
 }
 i14 = i11 - 4 | 0;
 if ((i14 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 1](i14);
 STACKTOP = i3;
 return;
}
function __ZN9Inspector35InspectorTimelineFrontendDispatcher13eventRecordedEN3WTF10PassRefPtrINS_11TypeBuilder8Timeline13TimelineEventEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 120 | 0;
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
 i14 = i3 + 80 | 0;
 i15 = i3 + 88 | 0;
 i16 = i3 + 96 | 0;
 i17 = i3 + 104 | 0;
 i18 = i3 + 112 | 0;
 __ZN9Inspector15InspectorObject6createEv(i6);
 i19 = i6 | 0;
 i6 = HEAP32[i19 >> 2] | 0;
 HEAP32[i19 >> 2] = 0;
 i19 = i6 | 0;
 HEAP32[i8 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i7, i8);
 HEAP32[i10 >> 2] = H_BASE + 2208;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i9, i10);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i5, i9);
 i10 = i4 | 0;
 i8 = i5 | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i5;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i19, i7, i4);
 i4 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i10 = i4 + 4 | 0;
   i5 = i10 | 0;
   i20 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i20 | 0) != 0) {
    HEAP32[i5 >> 2] = i20;
    break;
   }
   i20 = i10 - 4 | 0;
   if ((i20 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 1](i20);
  }
 } while (0);
 i4 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i8 = i4 + 4 | 0;
   i20 = i8 | 0;
   i10 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i20 >> 2] = i10;
    break;
   }
   i10 = i8 - 4 | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 1](i10);
  }
 } while (0);
 i4 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i9 = i4 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i9 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 | 0;
   i10 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i7 >> 2] = i10;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i11);
 i4 = i11 | 0;
 i11 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i13 >> 2] = H_BASE + 2200;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i12, i13);
 i13 = i14 | 0;
 i4 = i2 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i13 >> 2] = i2;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i11 | 0, i12, i14);
 i14 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i13 = i14 + 4 | 0;
   i2 = i13 | 0;
   i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i2 >> 2] = i4;
    break;
   }
   i4 = i13 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
  }
 } while (0);
 i14 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i12 = i14 | 0;
   i4 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i12 >> 2] = i4;
    break;
   }
  }
 } while (0);
 HEAP32[i16 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i15, i16);
 i16 = i17 | 0;
 HEAP32[i16 >> 2] = i11;
 i14 = (i11 | 0) == 0;
 if (!i14) {
  i4 = i11 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i19, i15, i17);
 i17 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i16 = i17 + 4 | 0;
   i19 = i16 | 0;
   i4 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i19 >> 2] = i4;
    break;
   }
   i4 = i16 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
  }
 } while (0);
 i17 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i15 = i17 | 0;
   i4 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i15 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i17 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i17 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i18, i6 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i17, i18) | 0;
 i17 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i18 = i17 | 0;
   i1 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i18 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i14) {
   i17 = i11 + 4 | 0;
   i1 = i17 | 0;
   i18 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i18 | 0) != 0) {
    HEAP32[i1 >> 2] = i18;
    break;
   }
   i18 = i17 - 4 | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 1](i18);
  }
 } while (0);
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i11 = i6 + 4 | 0;
 i6 = i11 | 0;
 i14 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i14 | 0) != 0) {
  HEAP32[i6 >> 2] = i14;
  STACKTOP = i3;
  return;
 }
 i14 = i11 - 4 | 0;
 if ((i14 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 1](i14);
 STACKTOP = i3;
 return;
}
function __ZN9Inspector34InspectorConsoleFrontendDispatcher12messageAddedEN3WTF10PassRefPtrINS_11TypeBuilder7Console14ConsoleMessageEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 120 | 0;
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
 i14 = i3 + 80 | 0;
 i15 = i3 + 88 | 0;
 i16 = i3 + 96 | 0;
 i17 = i3 + 104 | 0;
 i18 = i3 + 112 | 0;
 __ZN9Inspector15InspectorObject6createEv(i6);
 i19 = i6 | 0;
 i6 = HEAP32[i19 >> 2] | 0;
 HEAP32[i19 >> 2] = 0;
 i19 = i6 | 0;
 HEAP32[i8 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i7, i8);
 HEAP32[i10 >> 2] = H_BASE + 1712;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i9, i10);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i5, i9);
 i10 = i4 | 0;
 i8 = i5 | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i5;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i19, i7, i4);
 i4 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i10 = i4 + 4 | 0;
   i5 = i10 | 0;
   i20 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i20 | 0) != 0) {
    HEAP32[i5 >> 2] = i20;
    break;
   }
   i20 = i10 - 4 | 0;
   if ((i20 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 1](i20);
  }
 } while (0);
 i4 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i8 = i4 + 4 | 0;
   i20 = i8 | 0;
   i10 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i20 >> 2] = i10;
    break;
   }
   i10 = i8 - 4 | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 1](i10);
  }
 } while (0);
 i4 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i9 = i4 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i9 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 | 0;
   i10 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i7 >> 2] = i10;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i11);
 i4 = i11 | 0;
 i11 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i13 >> 2] = H_BASE + 1704;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i12, i13);
 i13 = i14 | 0;
 i4 = i2 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i13 >> 2] = i2;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i11 | 0, i12, i14);
 i14 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i13 = i14 + 4 | 0;
   i2 = i13 | 0;
   i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i2 >> 2] = i4;
    break;
   }
   i4 = i13 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
  }
 } while (0);
 i14 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i12 = i14 | 0;
   i4 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i12 >> 2] = i4;
    break;
   }
  }
 } while (0);
 HEAP32[i16 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i15, i16);
 i16 = i17 | 0;
 HEAP32[i16 >> 2] = i11;
 i14 = (i11 | 0) == 0;
 if (!i14) {
  i4 = i11 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i19, i15, i17);
 i17 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i16 = i17 + 4 | 0;
   i19 = i16 | 0;
   i4 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i19 >> 2] = i4;
    break;
   }
   i4 = i16 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
  }
 } while (0);
 i17 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i15 = i17 | 0;
   i4 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i15 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i17 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i17 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i18, i6 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i17, i18) | 0;
 i17 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i18 = i17 | 0;
   i1 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i18 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i14) {
   i17 = i11 + 4 | 0;
   i1 = i17 | 0;
   i18 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i18 | 0) != 0) {
    HEAP32[i1 >> 2] = i18;
    break;
   }
   i18 = i17 - 4 | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 1](i18);
  }
 } while (0);
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i11 = i6 + 4 | 0;
 i6 = i11 | 0;
 i14 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i14 | 0) != 0) {
  HEAP32[i6 >> 2] = i14;
  STACKTOP = i3;
  return;
 }
 i14 = i11 - 4 | 0;
 if ((i14 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 1](i14);
 STACKTOP = i3;
 return;
}
function __ZN9Inspector30InspectorCSSFrontendDispatcher20regionOversetChangedEN3WTF10PassRefPtrINS_11TypeBuilder3CSS9NamedFlowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 120 | 0;
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
 i14 = i3 + 80 | 0;
 i15 = i3 + 88 | 0;
 i16 = i3 + 96 | 0;
 i17 = i3 + 104 | 0;
 i18 = i3 + 112 | 0;
 __ZN9Inspector15InspectorObject6createEv(i6);
 i19 = i6 | 0;
 i6 = HEAP32[i19 >> 2] | 0;
 HEAP32[i19 >> 2] = 0;
 i19 = i6 | 0;
 HEAP32[i8 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i7, i8);
 HEAP32[i10 >> 2] = H_BASE + 1928;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i9, i10);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i5, i9);
 i10 = i4 | 0;
 i8 = i5 | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i5;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i19, i7, i4);
 i4 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i10 = i4 + 4 | 0;
   i5 = i10 | 0;
   i20 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i20 | 0) != 0) {
    HEAP32[i5 >> 2] = i20;
    break;
   }
   i20 = i10 - 4 | 0;
   if ((i20 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 1](i20);
  }
 } while (0);
 i4 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i8 = i4 + 4 | 0;
   i20 = i8 | 0;
   i10 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i20 >> 2] = i10;
    break;
   }
   i10 = i8 - 4 | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 1](i10);
  }
 } while (0);
 i4 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i9 = i4 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i9 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 | 0;
   i10 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i7 >> 2] = i10;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i11);
 i4 = i11 | 0;
 i11 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i13 >> 2] = H_BASE + 2456;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i12, i13);
 i13 = i14 | 0;
 i4 = i2 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i13 >> 2] = i2;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i11 | 0, i12, i14);
 i14 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i13 = i14 + 4 | 0;
   i2 = i13 | 0;
   i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i2 >> 2] = i4;
    break;
   }
   i4 = i13 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
  }
 } while (0);
 i14 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i12 = i14 | 0;
   i4 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i12 >> 2] = i4;
    break;
   }
  }
 } while (0);
 HEAP32[i16 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i15, i16);
 i16 = i17 | 0;
 HEAP32[i16 >> 2] = i11;
 i14 = (i11 | 0) == 0;
 if (!i14) {
  i4 = i11 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i19, i15, i17);
 i17 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i16 = i17 + 4 | 0;
   i19 = i16 | 0;
   i4 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i19 >> 2] = i4;
    break;
   }
   i4 = i16 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
  }
 } while (0);
 i17 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i15 = i17 | 0;
   i4 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i15 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i17 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i17 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i18, i6 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i17, i18) | 0;
 i17 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i18 = i17 | 0;
   i1 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i18 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i14) {
   i17 = i11 + 4 | 0;
   i1 = i17 | 0;
   i18 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i18 | 0) != 0) {
    HEAP32[i1 >> 2] = i18;
    break;
   }
   i18 = i17 - 4 | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 1](i18);
  }
 } while (0);
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i11 = i6 + 4 | 0;
 i6 = i11 | 0;
 i14 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i14 | 0) != 0) {
  HEAP32[i6 >> 2] = i14;
  STACKTOP = i3;
  return;
 }
 i14 = i11 - 4 | 0;
 if ((i14 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 1](i14);
 STACKTOP = i3;
 return;
}
function __ZN9Inspector30InspectorCSSFrontendDispatcher19regionLayoutUpdatedEN3WTF10PassRefPtrINS_11TypeBuilder3CSS9NamedFlowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 120 | 0;
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
 i14 = i3 + 80 | 0;
 i15 = i3 + 88 | 0;
 i16 = i3 + 96 | 0;
 i17 = i3 + 104 | 0;
 i18 = i3 + 112 | 0;
 __ZN9Inspector15InspectorObject6createEv(i6);
 i19 = i6 | 0;
 i6 = HEAP32[i19 >> 2] | 0;
 HEAP32[i19 >> 2] = 0;
 i19 = i6 | 0;
 HEAP32[i8 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i7, i8);
 HEAP32[i10 >> 2] = H_BASE + 1960;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i9, i10);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i5, i9);
 i10 = i4 | 0;
 i8 = i5 | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i5;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i19, i7, i4);
 i4 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i10 = i4 + 4 | 0;
   i5 = i10 | 0;
   i20 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i20 | 0) != 0) {
    HEAP32[i5 >> 2] = i20;
    break;
   }
   i20 = i10 - 4 | 0;
   if ((i20 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 1](i20);
  }
 } while (0);
 i4 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i8 = i4 + 4 | 0;
   i20 = i8 | 0;
   i10 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i20 >> 2] = i10;
    break;
   }
   i10 = i8 - 4 | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 1](i10);
  }
 } while (0);
 i4 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i9 = i4 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i9 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 | 0;
   i10 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i7 >> 2] = i10;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i11);
 i4 = i11 | 0;
 i11 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i13 >> 2] = H_BASE + 2456;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i12, i13);
 i13 = i14 | 0;
 i4 = i2 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i13 >> 2] = i2;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i11 | 0, i12, i14);
 i14 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i13 = i14 + 4 | 0;
   i2 = i13 | 0;
   i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i2 >> 2] = i4;
    break;
   }
   i4 = i13 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
  }
 } while (0);
 i14 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i12 = i14 | 0;
   i4 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i12 >> 2] = i4;
    break;
   }
  }
 } while (0);
 HEAP32[i16 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i15, i16);
 i16 = i17 | 0;
 HEAP32[i16 >> 2] = i11;
 i14 = (i11 | 0) == 0;
 if (!i14) {
  i4 = i11 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i19, i15, i17);
 i17 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i16 = i17 + 4 | 0;
   i19 = i16 | 0;
   i4 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i19 >> 2] = i4;
    break;
   }
   i4 = i16 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
  }
 } while (0);
 i17 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i15 = i17 | 0;
   i4 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i15 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i17 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i17 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i18, i6 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i17, i18) | 0;
 i17 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i18 = i17 | 0;
   i1 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i18 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i14) {
   i17 = i11 + 4 | 0;
   i1 = i17 | 0;
   i18 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i18 | 0) != 0) {
    HEAP32[i1 >> 2] = i18;
    break;
   }
   i18 = i17 - 4 | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 1](i18);
  }
 } while (0);
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i11 = i6 + 4 | 0;
 i6 = i11 | 0;
 i14 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i14 | 0) != 0) {
  HEAP32[i6 >> 2] = i14;
  STACKTOP = i3;
  return;
 }
 i14 = i11 - 4 | 0;
 if ((i14 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 1](i14);
 STACKTOP = i3;
 return;
}
function __ZN9Inspector35InspectorDatabaseFrontendDispatcher11addDatabaseEN3WTF10PassRefPtrINS_11TypeBuilder8Database8DatabaseEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 120 | 0;
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
 i14 = i3 + 80 | 0;
 i15 = i3 + 88 | 0;
 i16 = i3 + 96 | 0;
 i17 = i3 + 104 | 0;
 i18 = i3 + 112 | 0;
 __ZN9Inspector15InspectorObject6createEv(i6);
 i19 = i6 | 0;
 i6 = HEAP32[i19 >> 2] | 0;
 HEAP32[i19 >> 2] = 0;
 i19 = i6 | 0;
 HEAP32[i8 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i7, i8);
 HEAP32[i10 >> 2] = H_BASE + 888;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i9, i10);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i5, i9);
 i10 = i4 | 0;
 i8 = i5 | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i5;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i19, i7, i4);
 i4 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i10 = i4 + 4 | 0;
   i5 = i10 | 0;
   i20 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i20 | 0) != 0) {
    HEAP32[i5 >> 2] = i20;
    break;
   }
   i20 = i10 - 4 | 0;
   if ((i20 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 1](i20);
  }
 } while (0);
 i4 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i8 = i4 + 4 | 0;
   i20 = i8 | 0;
   i10 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i20 >> 2] = i10;
    break;
   }
   i10 = i8 - 4 | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 1](i10);
  }
 } while (0);
 i4 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i9 = i4 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i9 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 | 0;
   i10 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i7 >> 2] = i10;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i11);
 i4 = i11 | 0;
 i11 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i13 >> 2] = H_BASE + 872;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i12, i13);
 i13 = i14 | 0;
 i4 = i2 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i13 >> 2] = i2;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i11 | 0, i12, i14);
 i14 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i13 = i14 + 4 | 0;
   i2 = i13 | 0;
   i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i2 >> 2] = i4;
    break;
   }
   i4 = i13 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
  }
 } while (0);
 i14 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i12 = i14 | 0;
   i4 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i12 >> 2] = i4;
    break;
   }
  }
 } while (0);
 HEAP32[i16 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i15, i16);
 i16 = i17 | 0;
 HEAP32[i16 >> 2] = i11;
 i14 = (i11 | 0) == 0;
 if (!i14) {
  i4 = i11 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i19, i15, i17);
 i17 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i16 = i17 + 4 | 0;
   i19 = i16 | 0;
   i4 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i19 >> 2] = i4;
    break;
   }
   i4 = i16 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
  }
 } while (0);
 i17 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i15 = i17 | 0;
   i4 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i15 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i17 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i17 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i18, i6 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i17, i18) | 0;
 i17 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i18 = i17 | 0;
   i1 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i18 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i14) {
   i17 = i11 + 4 | 0;
   i1 = i17 | 0;
   i18 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i18 | 0) != 0) {
    HEAP32[i1 >> 2] = i18;
    break;
   }
   i18 = i17 - 4 | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 1](i18);
  }
 } while (0);
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i11 = i6 + 4 | 0;
 i6 = i11 | 0;
 i14 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i14 | 0) != 0) {
  HEAP32[i6 >> 2] = i14;
  STACKTOP = i3;
  return;
 }
 i14 = i11 - 4 | 0;
 if ((i14 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 1](i14);
 STACKTOP = i3;
 return;
}
function __ZN9Inspector30InspectorDOMFrontendDispatcher22inlineStyleInvalidatedEN3WTF10PassRefPtrINS_11TypeBuilder5ArrayIiEEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 120 | 0;
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
 i14 = i3 + 80 | 0;
 i15 = i3 + 88 | 0;
 i16 = i3 + 96 | 0;
 i17 = i3 + 104 | 0;
 i18 = i3 + 112 | 0;
 __ZN9Inspector15InspectorObject6createEv(i6);
 i19 = i6 | 0;
 i6 = HEAP32[i19 >> 2] | 0;
 HEAP32[i19 >> 2] = 0;
 i19 = i6 | 0;
 HEAP32[i8 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i7, i8);
 HEAP32[i10 >> 2] = H_BASE + 1440;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i9, i10);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i5, i9);
 i10 = i4 | 0;
 i8 = i5 | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i5;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i19, i7, i4);
 i4 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i10 = i4 + 4 | 0;
   i5 = i10 | 0;
   i20 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i20 | 0) != 0) {
    HEAP32[i5 >> 2] = i20;
    break;
   }
   i20 = i10 - 4 | 0;
   if ((i20 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 1](i20);
  }
 } while (0);
 i4 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i8 = i4 + 4 | 0;
   i20 = i8 | 0;
   i10 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i20 >> 2] = i10;
    break;
   }
   i10 = i8 - 4 | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 1](i10);
  }
 } while (0);
 i4 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i9 = i4 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i9 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 | 0;
   i10 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i7 >> 2] = i10;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i11);
 i4 = i11 | 0;
 i11 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i13 >> 2] = H_BASE + 1424;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i12, i13);
 i13 = i14 | 0;
 i4 = i2 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i13 >> 2] = i2;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i11 | 0, i12, i14);
 i14 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i13 = i14 + 4 | 0;
   i2 = i13 | 0;
   i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i2 >> 2] = i4;
    break;
   }
   i4 = i13 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
  }
 } while (0);
 i14 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i12 = i14 | 0;
   i4 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i12 >> 2] = i4;
    break;
   }
  }
 } while (0);
 HEAP32[i16 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i15, i16);
 i16 = i17 | 0;
 HEAP32[i16 >> 2] = i11;
 i14 = (i11 | 0) == 0;
 if (!i14) {
  i4 = i11 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i19, i15, i17);
 i17 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i16 = i17 + 4 | 0;
   i19 = i16 | 0;
   i4 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i19 >> 2] = i4;
    break;
   }
   i4 = i16 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
  }
 } while (0);
 i17 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i15 = i17 | 0;
   i4 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i15 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i17 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i17 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i18, i6 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i17, i18) | 0;
 i17 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i18 = i17 | 0;
   i1 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i18 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i14) {
   i17 = i11 + 4 | 0;
   i1 = i17 | 0;
   i18 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i18 | 0) != 0) {
    HEAP32[i1 >> 2] = i18;
    break;
   }
   i18 = i17 - 4 | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 1](i18);
  }
 } while (0);
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i11 = i6 + 4 | 0;
 i6 = i11 | 0;
 i14 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i14 | 0) != 0) {
  HEAP32[i6 >> 2] = i14;
  STACKTOP = i3;
  return;
 }
 i14 = i11 - 4 | 0;
 if ((i14 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 1](i14);
 STACKTOP = i3;
 return;
}
function __ZN9Inspector30InspectorCSSFrontendDispatcher16namedFlowCreatedEN3WTF10PassRefPtrINS_11TypeBuilder3CSS9NamedFlowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 120 | 0;
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
 i14 = i3 + 80 | 0;
 i15 = i3 + 88 | 0;
 i16 = i3 + 96 | 0;
 i17 = i3 + 104 | 0;
 i18 = i3 + 112 | 0;
 __ZN9Inspector15InspectorObject6createEv(i6);
 i19 = i6 | 0;
 i6 = HEAP32[i19 >> 2] | 0;
 HEAP32[i19 >> 2] = 0;
 i19 = i6 | 0;
 HEAP32[i8 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i7, i8);
 HEAP32[i10 >> 2] = H_BASE + 2736;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i9, i10);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i5, i9);
 i10 = i4 | 0;
 i8 = i5 | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i5;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i19, i7, i4);
 i4 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i10 = i4 + 4 | 0;
   i5 = i10 | 0;
   i20 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i20 | 0) != 0) {
    HEAP32[i5 >> 2] = i20;
    break;
   }
   i20 = i10 - 4 | 0;
   if ((i20 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 1](i20);
  }
 } while (0);
 i4 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i8 = i4 + 4 | 0;
   i20 = i8 | 0;
   i10 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i20 >> 2] = i10;
    break;
   }
   i10 = i8 - 4 | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 1](i10);
  }
 } while (0);
 i4 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i9 = i4 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i9 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 | 0;
   i10 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i7 >> 2] = i10;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i11);
 i4 = i11 | 0;
 i11 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i13 >> 2] = H_BASE + 2456;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i12, i13);
 i13 = i14 | 0;
 i4 = i2 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i13 >> 2] = i2;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i11 | 0, i12, i14);
 i14 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i13 = i14 + 4 | 0;
   i2 = i13 | 0;
   i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i2 >> 2] = i4;
    break;
   }
   i4 = i13 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
  }
 } while (0);
 i14 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i12 = i14 | 0;
   i4 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i12 >> 2] = i4;
    break;
   }
  }
 } while (0);
 HEAP32[i16 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i15, i16);
 i16 = i17 | 0;
 HEAP32[i16 >> 2] = i11;
 i14 = (i11 | 0) == 0;
 if (!i14) {
  i4 = i11 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i19, i15, i17);
 i17 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i16 = i17 + 4 | 0;
   i19 = i16 | 0;
   i4 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i19 >> 2] = i4;
    break;
   }
   i4 = i16 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
  }
 } while (0);
 i17 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i15 = i17 | 0;
   i4 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i15 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i17 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i17 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i18, i6 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i17, i18) | 0;
 i17 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i18 = i17 | 0;
   i1 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i18 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i14) {
   i17 = i11 + 4 | 0;
   i1 = i17 | 0;
   i18 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i18 | 0) != 0) {
    HEAP32[i1 >> 2] = i18;
    break;
   }
   i18 = i17 - 4 | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 1](i18);
  }
 } while (0);
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i11 = i6 + 4 | 0;
 i6 = i11 | 0;
 i14 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i14 | 0) != 0) {
  HEAP32[i6 >> 2] = i14;
  STACKTOP = i3;
  return;
 }
 i14 = i11 - 4 | 0;
 if ((i14 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 1](i14);
 STACKTOP = i3;
 return;
}
function __ZN9Inspector31InspectorPageFrontendDispatcher14frameNavigatedEN3WTF10PassRefPtrINS_11TypeBuilder4Page5FrameEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 120 | 0;
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
 i14 = i3 + 80 | 0;
 i15 = i3 + 88 | 0;
 i16 = i3 + 96 | 0;
 i17 = i3 + 104 | 0;
 i18 = i3 + 112 | 0;
 __ZN9Inspector15InspectorObject6createEv(i6);
 i19 = i6 | 0;
 i6 = HEAP32[i19 >> 2] | 0;
 HEAP32[i19 >> 2] = 0;
 i19 = i6 | 0;
 HEAP32[i8 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i7, i8);
 HEAP32[i10 >> 2] = H_BASE + 2760;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i9, i10);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i5, i9);
 i10 = i4 | 0;
 i8 = i5 | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i5;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i19, i7, i4);
 i4 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i10 = i4 + 4 | 0;
   i5 = i10 | 0;
   i20 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i20 | 0) != 0) {
    HEAP32[i5 >> 2] = i20;
    break;
   }
   i20 = i10 - 4 | 0;
   if ((i20 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 1](i20);
  }
 } while (0);
 i4 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i8 = i4 + 4 | 0;
   i20 = i8 | 0;
   i10 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i20 >> 2] = i10;
    break;
   }
   i10 = i8 - 4 | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 1](i10);
  }
 } while (0);
 i4 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i9 = i4 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i9 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 | 0;
   i10 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i7 >> 2] = i10;
    break;
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i11);
 i4 = i11 | 0;
 i11 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i13 >> 2] = H_BASE + 2728;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i12, i13);
 i13 = i14 | 0;
 i4 = i2 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i13 >> 2] = i2;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i11 | 0, i12, i14);
 i14 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i13 = i14 + 4 | 0;
   i2 = i13 | 0;
   i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i2 >> 2] = i4;
    break;
   }
   i4 = i13 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
  }
 } while (0);
 i14 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i12 = i14 | 0;
   i4 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i12 >> 2] = i4;
    break;
   }
  }
 } while (0);
 HEAP32[i16 >> 2] = H_BASE + 1232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i15, i16);
 i16 = i17 | 0;
 HEAP32[i16 >> 2] = i11;
 i14 = (i11 | 0) == 0;
 if (!i14) {
  i4 = i11 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i19, i15, i17);
 i17 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i16 = i17 + 4 | 0;
   i19 = i16 | 0;
   i4 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i19 >> 2] = i4;
    break;
   }
   i4 = i16 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
  }
 } while (0);
 i17 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i15 = i17 | 0;
   i4 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i15 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i17 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i17 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i18, i6 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i17, i18) | 0;
 i17 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i18 = i17 | 0;
   i1 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i18 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i14) {
   i17 = i11 + 4 | 0;
   i1 = i17 | 0;
   i18 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i18 | 0) != 0) {
    HEAP32[i1 >> 2] = i18;
    break;
   }
   i18 = i17 - 4 | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 1](i18);
  }
 } while (0);
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i11 = i6 + 4 | 0;
 i6 = i11 | 0;
 i14 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i14 | 0) != 0) {
  HEAP32[i6 >> 2] = i14;
  STACKTOP = i3;
  return;
 }
 i14 = i11 - 4 | 0;
 if ((i14 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 1](i14);
 STACKTOP = i3;
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i3 = i1 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = 8;
  i6 = 0;
 } else {
  i7 = i4 << 1;
  i5 = ((HEAP32[i1 + 12 >> 2] | 0) * 6 & -1 | 0) < (i7 | 0) ? i4 : i7;
  i6 = i4;
 }
 i4 = i1 | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 HEAP32[i3 >> 2] = i5;
 i3 = i1 + 8 | 0;
 HEAP32[i3 >> 2] = i5 - 1;
 HEAP32[i4 >> 2] = __ZN3WTF16fastZeroedMallocEj(i5 << 3) | 0;
 if ((i6 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i8 = 0;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 } else {
  i10 = 0;
  i11 = 0;
 }
 while (1) {
  i5 = i7 + (i10 << 3) | 0;
  i12 = i5 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i11;
  } else {
   i14 = HEAP32[i4 >> 2] | 0;
   i16 = HEAP32[i3 >> 2] | 0;
   i17 = HEAP32[i13 + 16 >> 2] | 0;
   if (i17 >>> 0 > 127 >>> 0) {
    i18 = i17 >>> 7;
   } else {
    i18 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i13) | 0;
   }
   i13 = (i18 >>> 23) + ~i18 | 0;
   i17 = i13 << 12 ^ i13;
   i13 = i17 >>> 7 ^ i17;
   i17 = i13 << 2 ^ i13;
   i13 = i17 >>> 20 ^ i17 | 1;
   i17 = i18;
   i19 = 0;
   i20 = 0;
   while (1) {
    i21 = i17 & i16;
    i22 = i14 + (i21 << 3) | 0;
    i23 = HEAP32[i22 >> 2] | 0;
    i24 = i23;
    if ((i24 | 0) == 0) {
     i25 = 11;
     break;
    } else if ((i24 | 0) == (-1 | 0)) {
     i26 = i22;
    } else {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i23, HEAP32[i12 >> 2] | 0) | 0) {
      i27 = i22;
      break;
     } else {
      i26 = i20;
     }
    }
    i23 = (i19 | 0) == 0 ? i13 : i19;
    i17 = i23 + i21 | 0;
    i19 = i23;
    i20 = i26;
   }
   if ((i25 | 0) == 11) {
    i25 = 0;
    i27 = (i20 | 0) != 0 ? i20 : i22;
   }
   i19 = i27 + 4 | 0;
   i17 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i13 = i17 + 4 | 0;
     i14 = i13 | 0;
     i16 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
     if ((i16 | 0) != 0) {
      HEAP32[i14 >> 2] = i16;
      break;
     }
     i16 = i13 - 4 | 0;
     if ((i16 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 1](i16);
    }
   } while (0);
   i17 = i27 | 0;
   i20 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i20 | 0) != 0) {
     i16 = i20 | 0;
     i13 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i13 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i20);
      break;
     } else {
      HEAP32[i16 >> 2] = i13;
      break;
     }
    }
   } while (0);
   i20 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i17 >> 2] = i20;
   i20 = i7 + (i10 << 3) + 4 | 0;
   i13 = HEAP32[i20 >> 2] | 0;
   HEAP32[i20 >> 2] = 0;
   HEAP32[i19 >> 2] = i13;
   i15 = (i5 | 0) == (i2 | 0) ? i27 : i11;
  }
  i13 = i10 + 1 | 0;
  if ((i13 | 0) == (i6 | 0)) {
   break;
  } else {
   i10 = i13;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i6 | 0) > 0) {
  i28 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = i7 + (i28 << 3) | 0;
  do {
   if ((HEAP32[i1 >> 2] | 0) != -1) {
    i11 = HEAP32[i7 + (i28 << 3) + 4 >> 2] | 0;
    do {
     if ((i11 | 0) != 0) {
      i10 = i11 + 4 | 0;
      i27 = i10 | 0;
      i2 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
      if ((i2 | 0) != 0) {
       HEAP32[i27 >> 2] = i2;
       break;
      }
      i2 = i10 - 4 | 0;
      if ((i2 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
     }
    } while (0);
    i11 = HEAP32[i1 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break;
    }
    i2 = i11 | 0;
    i10 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
    if ((i10 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i11);
     break;
    } else {
     HEAP32[i2 >> 2] = i10;
     break;
    }
   }
  } while (0);
  i1 = i28 + 1 | 0;
  if ((i1 | 0) < (i6 | 0)) {
   i28 = i1;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RNS_10PassRefPtrINS4_15InspectorObjectEEEEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[i3 + 16 >> 2] | 0;
 if (i9 >>> 0 > 127 >>> 0) {
  i10 = i9 >>> 7;
 } else {
  i10 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i3) | 0;
 }
 i3 = (i10 >>> 23) + ~i10 | 0;
 i9 = i3 << 12 ^ i3;
 i3 = i9 >>> 7 ^ i9;
 i9 = i3 << 2 ^ i3;
 i3 = i9 >>> 20 ^ i9 | 1;
 i9 = 0;
 i11 = i10;
 i10 = 0;
 while (1) {
  i12 = i11 & i6;
  i13 = i7 + (i12 << 3) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14;
  if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else if ((i15 | 0) == 0) {
   break;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i14, HEAP32[i8 >> 2] | 0) | 0) {
    i17 = 9;
    break;
   } else {
    i16 = i9;
   }
  }
  i14 = (i10 | 0) == 0 ? i3 : i10;
  i9 = i16;
  i11 = i14 + i12 | 0;
  i10 = i14;
 }
 if ((i17 | 0) == 9) {
  i17 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i10 = i1;
  HEAP32[i10 >> 2] = i13;
  HEAP32[i10 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i9 | 0) == 0) {
  i18 = i13;
 } else {
  i13 = i9;
  HEAP32[i13 >> 2] = 0;
  HEAP32[i13 + 4 >> 2] = 0;
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i18 = i9;
 }
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i8 = i9 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = i18 | 0;
 i13 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i9;
 do {
  if ((i13 | 0) != 0) {
   i9 = i13 | 0;
   i8 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i9 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i13 = i4 | 0;
 i4 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 i13 = i18 + 4 | 0;
 i8 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = i4;
 do {
  if ((i8 | 0) != 0) {
   i4 = i8 + 4 | 0;
   i13 = i4 | 0;
   i9 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i13 >> 2] = i9;
    break;
   }
   i9 = i4 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 1](i9);
  }
 } while (0);
 i8 = i2 + 12 | 0;
 i9 = (HEAP32[i8 >> 2] | 0) + 1 | 0;
 HEAP32[i8 >> 2] = i9;
 i8 = i2 + 4 | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i9 << 1 | 0) < (i4 | 0)) {
  i19 = i18;
  i20 = i4;
 } else {
  i4 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_(i2, i18) | 0;
  i19 = i4;
  i20 = HEAP32[i8 >> 2] | 0;
 }
 i8 = (HEAP32[i5 >> 2] | 0) + (i20 << 3) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i8;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RNS_10PassRefPtrIS5_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[i3 + 16 >> 2] | 0;
 if (i9 >>> 0 > 127 >>> 0) {
  i10 = i9 >>> 7;
 } else {
  i10 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i3) | 0;
 }
 i3 = (i10 >>> 23) + ~i10 | 0;
 i9 = i3 << 12 ^ i3;
 i3 = i9 >>> 7 ^ i9;
 i9 = i3 << 2 ^ i3;
 i3 = i9 >>> 20 ^ i9 | 1;
 i9 = 0;
 i11 = i10;
 i10 = 0;
 while (1) {
  i12 = i11 & i6;
  i13 = i7 + (i12 << 3) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14;
  if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else if ((i15 | 0) == 0) {
   break;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i14, HEAP32[i8 >> 2] | 0) | 0) {
    i17 = 9;
    break;
   } else {
    i16 = i9;
   }
  }
  i14 = (i10 | 0) == 0 ? i3 : i10;
  i9 = i16;
  i11 = i14 + i12 | 0;
  i10 = i14;
 }
 if ((i17 | 0) == 9) {
  i17 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i10 = i1;
  HEAP32[i10 >> 2] = i13;
  HEAP32[i10 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i9 | 0) == 0) {
  i18 = i13;
 } else {
  i13 = i9;
  HEAP32[i13 >> 2] = 0;
  HEAP32[i13 + 4 >> 2] = 0;
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i18 = i9;
 }
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i8 = i9 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = i18 | 0;
 i13 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i9;
 do {
  if ((i13 | 0) != 0) {
   i9 = i13 | 0;
   i8 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i9 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i13 = i4 | 0;
 i4 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 i13 = i18 + 4 | 0;
 i8 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = i4;
 do {
  if ((i8 | 0) != 0) {
   i4 = i8 + 4 | 0;
   i13 = i4 | 0;
   i9 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i13 >> 2] = i9;
    break;
   }
   i9 = i4 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 1](i9);
  }
 } while (0);
 i8 = i2 + 12 | 0;
 i9 = (HEAP32[i8 >> 2] | 0) + 1 | 0;
 HEAP32[i8 >> 2] = i9;
 i8 = i2 + 4 | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i9 << 1 | 0) < (i4 | 0)) {
  i19 = i18;
  i20 = i4;
 } else {
  i4 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_(i2, i18) | 0;
  i19 = i4;
  i20 = HEAP32[i8 >> 2] | 0;
 }
 i8 = (HEAP32[i5 >> 2] | 0) + (i20 << 3) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i8;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN9Inspector33InspectorWorkerFrontendDispatcher22disconnectedFromWorkerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i2 + 48 | 0;
 i10 = i2 + 56 | 0;
 __ZN9Inspector15InspectorObject6createEv(i5);
 i11 = i5 | 0;
 i5 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i7 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i6, i7);
 HEAP32[i9 >> 2] = H_BASE + 2016;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i8, i9);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i4, i8);
 i9 = i3 | 0;
 i7 = i4 | 0;
 i4 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i9 >> 2] = i4;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i5 | 0, i6, i3);
 i3 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i9 = i3 + 4 | 0;
   i4 = i9 | 0;
   i11 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i4 >> 2] = i11;
    break;
   }
   i11 = i9 - 4 | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 1](i11);
  }
 } while (0);
 i3 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i7 = i3 + 4 | 0;
   i11 = i7 | 0;
   i9 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i11 >> 2] = i9;
    break;
   }
   i9 = i7 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 1](i9);
  }
 } while (0);
 i3 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i8 = i3 | 0;
   i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i8 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i6 = i3 | 0;
   i9 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i6 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i10, i5 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i3, i10) | 0;
 i3 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i10 = i3 | 0;
   i1 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i10 >> 2] = i1;
    break;
   }
  }
 } while (0);
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i3 = i5 + 4 | 0;
 i5 = i3 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i5 >> 2] = i1;
  STACKTOP = i2;
  return;
 }
 i1 = i3 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 1](i1);
 STACKTOP = i2;
 return;
}
function __ZN9Inspector36InspectorLayerTreeFrontendDispatcher18layerTreeDidChangeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i2 + 48 | 0;
 i10 = i2 + 56 | 0;
 __ZN9Inspector15InspectorObject6createEv(i5);
 i11 = i5 | 0;
 i5 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i7 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i6, i7);
 HEAP32[i9 >> 2] = H_BASE + 608;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i8, i9);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i4, i8);
 i9 = i3 | 0;
 i7 = i4 | 0;
 i4 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i9 >> 2] = i4;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i5 | 0, i6, i3);
 i3 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i9 = i3 + 4 | 0;
   i4 = i9 | 0;
   i11 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i4 >> 2] = i11;
    break;
   }
   i11 = i9 - 4 | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 1](i11);
  }
 } while (0);
 i3 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i7 = i3 + 4 | 0;
   i11 = i7 | 0;
   i9 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i11 >> 2] = i9;
    break;
   }
   i9 = i7 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 1](i9);
  }
 } while (0);
 i3 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i8 = i3 | 0;
   i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i8 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i6 = i3 | 0;
   i9 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i6 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i10, i5 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i3, i10) | 0;
 i3 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i10 = i3 | 0;
   i1 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i10 >> 2] = i1;
    break;
   }
  }
 } while (0);
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i3 = i5 + 4 | 0;
 i5 = i3 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i5 >> 2] = i1;
  STACKTOP = i2;
  return;
 }
 i1 = i3 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 1](i1);
 STACKTOP = i2;
 return;
}
function __ZN9Inspector31InspectorPageFrontendDispatcher22javascriptDialogClosedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i2 + 48 | 0;
 i10 = i2 + 56 | 0;
 __ZN9Inspector15InspectorObject6createEv(i5);
 i11 = i5 | 0;
 i5 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i7 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i6, i7);
 HEAP32[i9 >> 2] = H_BASE + 2496;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i8, i9);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i4, i8);
 i9 = i3 | 0;
 i7 = i4 | 0;
 i4 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i9 >> 2] = i4;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i5 | 0, i6, i3);
 i3 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i9 = i3 + 4 | 0;
   i4 = i9 | 0;
   i11 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i4 >> 2] = i11;
    break;
   }
   i11 = i9 - 4 | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 1](i11);
  }
 } while (0);
 i3 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i7 = i3 + 4 | 0;
   i11 = i7 | 0;
   i9 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i11 >> 2] = i9;
    break;
   }
   i9 = i7 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 1](i9);
  }
 } while (0);
 i3 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i8 = i3 | 0;
   i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i8 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i6 = i3 | 0;
   i9 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i6 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i10, i5 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i3, i10) | 0;
 i3 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i10 = i3 | 0;
   i1 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i10 >> 2] = i1;
    break;
   }
  }
 } while (0);
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i3 = i5 + 4 | 0;
 i5 = i3 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i5 >> 2] = i1;
  STACKTOP = i2;
  return;
 }
 i1 = i3 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 1](i1);
 STACKTOP = i2;
 return;
}
function __ZN9Inspector30InspectorCSSFrontendDispatcher23mediaQueryResultChangedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i2 + 48 | 0;
 i10 = i2 + 56 | 0;
 __ZN9Inspector15InspectorObject6createEv(i5);
 i11 = i5 | 0;
 i5 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i7 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i6, i7);
 HEAP32[i9 >> 2] = H_BASE + 496;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i8, i9);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i4, i8);
 i9 = i3 | 0;
 i7 = i4 | 0;
 i4 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i9 >> 2] = i4;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i5 | 0, i6, i3);
 i3 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i9 = i3 + 4 | 0;
   i4 = i9 | 0;
   i11 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i4 >> 2] = i11;
    break;
   }
   i11 = i9 - 4 | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 1](i11);
  }
 } while (0);
 i3 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i7 = i3 + 4 | 0;
   i11 = i7 | 0;
   i9 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i11 >> 2] = i9;
    break;
   }
   i9 = i7 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 1](i9);
  }
 } while (0);
 i3 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i8 = i3 | 0;
   i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i8 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i6 = i3 | 0;
   i9 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i6 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i10, i5 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i3, i10) | 0;
 i3 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i10 = i3 | 0;
   i1 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i10 >> 2] = i1;
    break;
   }
  }
 } while (0);
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i3 = i5 + 4 | 0;
 i5 = i3 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i5 >> 2] = i1;
  STACKTOP = i2;
  return;
 }
 i1 = i3 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 1](i1);
 STACKTOP = i2;
 return;
}
function __ZN9Inspector39InspectorHeapProfilerFrontendDispatcher13resetProfilesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i2 + 48 | 0;
 i10 = i2 + 56 | 0;
 __ZN9Inspector15InspectorObject6createEv(i5);
 i11 = i5 | 0;
 i5 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i7 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i6, i7);
 HEAP32[i9 >> 2] = H_BASE + 696;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i8, i9);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i4, i8);
 i9 = i3 | 0;
 i7 = i4 | 0;
 i4 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i9 >> 2] = i4;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i5 | 0, i6, i3);
 i3 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i9 = i3 + 4 | 0;
   i4 = i9 | 0;
   i11 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i4 >> 2] = i11;
    break;
   }
   i11 = i9 - 4 | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 1](i11);
  }
 } while (0);
 i3 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i7 = i3 + 4 | 0;
   i11 = i7 | 0;
   i9 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i11 >> 2] = i9;
    break;
   }
   i9 = i7 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 1](i9);
  }
 } while (0);
 i3 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i8 = i3 | 0;
   i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i8 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i6 = i3 | 0;
   i9 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i6 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i10, i5 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i3, i10) | 0;
 i3 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i10 = i3 | 0;
   i1 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i10 >> 2] = i1;
    break;
   }
  }
 } while (0);
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i3 = i5 + 4 | 0;
 i5 = i3 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i5 >> 2] = i1;
  STACKTOP = i2;
  return;
 }
 i1 = i3 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 1](i1);
 STACKTOP = i2;
 return;
}
function __ZN9Inspector34InspectorConsoleFrontendDispatcher15messagesClearedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i2 + 48 | 0;
 i10 = i2 + 56 | 0;
 __ZN9Inspector15InspectorObject6createEv(i5);
 i11 = i5 | 0;
 i5 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i7 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i6, i7);
 HEAP32[i9 >> 2] = H_BASE + 1632;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i8, i9);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i4, i8);
 i9 = i3 | 0;
 i7 = i4 | 0;
 i4 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i9 >> 2] = i4;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i5 | 0, i6, i3);
 i3 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i9 = i3 + 4 | 0;
   i4 = i9 | 0;
   i11 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i4 >> 2] = i11;
    break;
   }
   i11 = i9 - 4 | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 1](i11);
  }
 } while (0);
 i3 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i7 = i3 + 4 | 0;
   i11 = i7 | 0;
   i9 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i11 >> 2] = i9;
    break;
   }
   i9 = i7 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 1](i9);
  }
 } while (0);
 i3 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i8 = i3 | 0;
   i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i8 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i6 = i3 | 0;
   i9 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i6 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i10, i5 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i3, i10) | 0;
 i3 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i10 = i3 | 0;
   i1 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i10 >> 2] = i1;
    break;
   }
  }
 } while (0);
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i3 = i5 + 4 | 0;
 i5 = i3 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i5 >> 2] = i1;
  STACKTOP = i2;
  return;
 }
 i1 = i3 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 1](i1);
 STACKTOP = i2;
 return;
}
function __ZN9Inspector35InspectorProfilerFrontendDispatcher13resetProfilesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i2 + 48 | 0;
 i10 = i2 + 56 | 0;
 __ZN9Inspector15InspectorObject6createEv(i5);
 i11 = i5 | 0;
 i5 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i7 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i6, i7);
 HEAP32[i9 >> 2] = H_BASE + 2272;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i8, i9);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i4, i8);
 i9 = i3 | 0;
 i7 = i4 | 0;
 i4 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i9 >> 2] = i4;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i5 | 0, i6, i3);
 i3 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i9 = i3 + 4 | 0;
   i4 = i9 | 0;
   i11 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i4 >> 2] = i11;
    break;
   }
   i11 = i9 - 4 | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 1](i11);
  }
 } while (0);
 i3 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i7 = i3 + 4 | 0;
   i11 = i7 | 0;
   i9 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i11 >> 2] = i9;
    break;
   }
   i9 = i7 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 1](i9);
  }
 } while (0);
 i3 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i8 = i3 | 0;
   i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i8 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i6 = i3 | 0;
   i9 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i6 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i10, i5 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i3, i10) | 0;
 i3 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i10 = i3 | 0;
   i1 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i10 >> 2] = i1;
    break;
   }
  }
 } while (0);
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i3 = i5 + 4 | 0;
 i5 = i3 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i5 >> 2] = i1;
  STACKTOP = i2;
  return;
 }
 i1 = i3 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 1](i1);
 STACKTOP = i2;
 return;
}
function __ZN9Inspector30InspectorDOMFrontendDispatcher15documentUpdatedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i2 + 48 | 0;
 i10 = i2 + 56 | 0;
 __ZN9Inspector15InspectorObject6createEv(i5);
 i11 = i5 | 0;
 i5 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i7 >> 2] = H_BASE + 3080;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i6, i7);
 HEAP32[i9 >> 2] = H_BASE + 1592;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i8, i9);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i4, i8);
 i9 = i3 | 0;
 i7 = i4 | 0;
 i4 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i9 >> 2] = i4;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i5 | 0, i6, i3);
 i3 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i9 = i3 + 4 | 0;
   i4 = i9 | 0;
   i11 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i4 >> 2] = i11;
    break;
   }
   i11 = i9 - 4 | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 1](i11);
  }
 } while (0);
 i3 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i7 = i3 + 4 | 0;
   i11 = i7 | 0;
   i9 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i11 >> 2] = i9;
    break;
   }
   i9 = i7 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 1](i9);
  }
 } while (0);
 i3 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i8 = i3 | 0;
   i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i8 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i6 = i3 | 0;
   i9 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i6 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] | 0;
 __ZNK9Inspector14InspectorValue12toJSONStringEv(i10, i5 | 0);
 FUNCTION_TABLE_iii[i1 & 1](i3, i10) | 0;
 i3 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i10 = i3 | 0;
   i1 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i10 >> 2] = i1;
    break;
   }
  }
 } while (0);
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i3 = i5 + 4 | 0;
 i5 = i3 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i5 >> 2] = i1;
  STACKTOP = i2;
  return;
 }
 i1 = i3 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 1](i1);
 STACKTOP = i2;
 return;
}
function __ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RNS_10PassRefPtrINS4_15InspectorObjectEEEEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i5, i1 + 12 | 0, i2, i3);
 if ((HEAP8[i5 + 8 | 0] & 1) == 0) {
  i6 = HEAP32[i5 >> 2] | 0;
  i5 = i3 | 0;
  i3 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = 0;
  i5 = i6 + 4 | 0;
  i6 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = i3;
  if ((i6 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i3 = i6 + 4 | 0;
  i6 = i3 | 0;
  i5 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
  if ((i5 | 0) != 0) {
   HEAP32[i6 >> 2] = i5;
   STACKTOP = i4;
   return;
  }
  i5 = i3 - 4 | 0;
  if ((i5 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 1](i5);
  STACKTOP = i4;
  return;
 }
 i5 = i1 + 32 | 0;
 i3 = i1 + 40 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 if ((i6 | 0) != (HEAP32[i1 + 36 >> 2] | 0)) {
  i1 = HEAP32[i2 >> 2] | 0;
  HEAP32[(HEAP32[i5 >> 2] | 0) + (i6 << 2) >> 2] = i1;
  if ((i1 | 0) != 0) {
   i7 = i1 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
  }
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
  STACKTOP = i4;
  return;
 }
 i7 = i6 + 1 | 0;
 i1 = i5 | 0;
 i8 = HEAP32[i1 >> 2] | 0;
 do {
  if (i8 >>> 0 > i2 >>> 0) {
   i9 = 13;
  } else {
   if ((i8 + (i6 << 2) | 0) >>> 0 <= i2 >>> 0) {
    i9 = 13;
    break;
   }
   __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i7);
   i10 = HEAP32[i1 >> 2] | 0;
   i11 = i10 + (i2 - i8 >> 2 << 2) | 0;
   i12 = i10;
  }
 } while (0);
 if ((i9 | 0) == 13) {
  __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i7);
  i11 = i2;
  i12 = HEAP32[i1 >> 2] | 0;
 }
 i1 = HEAP32[i11 >> 2] | 0;
 HEAP32[i12 + (HEAP32[i3 >> 2] << 2) >> 2] = i1;
 if ((i1 | 0) != 0) {
  i12 = i1 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 STACKTOP = i4;
 return;
}
function __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RNS_10PassRefPtrIS5_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i5, i1 + 12 | 0, i2, i3);
 if ((HEAP8[i5 + 8 | 0] & 1) == 0) {
  i6 = HEAP32[i5 >> 2] | 0;
  i5 = i3 | 0;
  i3 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = 0;
  i5 = i6 + 4 | 0;
  i6 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = i3;
  if ((i6 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i3 = i6 + 4 | 0;
  i6 = i3 | 0;
  i5 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
  if ((i5 | 0) != 0) {
   HEAP32[i6 >> 2] = i5;
   STACKTOP = i4;
   return;
  }
  i5 = i3 - 4 | 0;
  if ((i5 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 1](i5);
  STACKTOP = i4;
  return;
 }
 i5 = i1 + 32 | 0;
 i3 = i1 + 40 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 if ((i6 | 0) != (HEAP32[i1 + 36 >> 2] | 0)) {
  i1 = HEAP32[i2 >> 2] | 0;
  HEAP32[(HEAP32[i5 >> 2] | 0) + (i6 << 2) >> 2] = i1;
  if ((i1 | 0) != 0) {
   i7 = i1 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
  }
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
  STACKTOP = i4;
  return;
 }
 i7 = i6 + 1 | 0;
 i1 = i5 | 0;
 i8 = HEAP32[i1 >> 2] | 0;
 do {
  if (i8 >>> 0 > i2 >>> 0) {
   i9 = 13;
  } else {
   if ((i8 + (i6 << 2) | 0) >>> 0 <= i2 >>> 0) {
    i9 = 13;
    break;
   }
   __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i7);
   i10 = HEAP32[i1 >> 2] | 0;
   i11 = i10 + (i2 - i8 >> 2 << 2) | 0;
   i12 = i10;
  }
 } while (0);
 if ((i9 | 0) == 13) {
  __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i7);
  i11 = i2;
  i12 = HEAP32[i1 >> 2] | 0;
 }
 i1 = HEAP32[i11 >> 2] | 0;
 HEAP32[i12 + (HEAP32[i3 >> 2] << 2) >> 2] = i1;
 if ((i1 | 0) != 0) {
  i12 = i1 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 STACKTOP = i4;
 return;
}
function __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 + (i4 >>> 2) | 0;
 i6 = i5 >>> 0 > 16 >>> 0 ? i5 : 16;
 i5 = i6 >>> 0 > i2 >>> 0 ? i6 : i2;
 if (i4 >>> 0 >= i5 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 if (i5 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 2) | 0;
 HEAP32[i3 >> 2] = i1 >>> 2;
 i5 = __ZN3WTF10fastMallocEj(i1) | 0;
 HEAP32[i4 >> 2] = i5;
 i1 = i2;
 _memcpy(i5 | 0, i1 | 0, i6 << 2) | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i2 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
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
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
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
function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = i1;
  threwValue = i2;
 }
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 1](i2 | 0);
}
function b2(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(2);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
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
function b0(i1) {
 i1 = i1 | 0;
 abort(0);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b3(i1) {
 i1 = i1 | 0;
 abort(3);
}
function b1() {
 abort(1);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_ii = [b0,b0];
  var FUNCTION_TABLE_v = [b1,b1];
  var FUNCTION_TABLE_iii = [b2,b2];
  var FUNCTION_TABLE_vi = [b3,b3];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_vi: dynCall_vi };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_vi": invoke_vi, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN9Inspector30InspectorDOMFrontendDispatcher16childNodeRemovedEii","__ZN9Inspector34InspectorNetworkFrontendDispatcher28requestServedFromMemoryCacheERKN3WTF6StringES4_S4_S4_dNS1_10PassRefPtrINS_11TypeBuilder7Network9InitiatorEEENS5_INS7_14CachedResourceEEE","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_","__ZN9Inspector34InspectorNetworkFrontendDispatcher12dataReceivedERKN3WTF6StringEdii","__ZN9Inspector37InspectorDOMStorageFrontendDispatcher21domStorageItemUpdatedEN3WTF10PassRefPtrINS_11TypeBuilder10DOMStorage9StorageIdEEERKNS1_6StringES9_S9_","__ZN9Inspector34InspectorNetworkFrontendDispatcher22webSocketFrameReceivedERKN3WTF6StringEdNS1_10PassRefPtrINS_11TypeBuilder7Network14WebSocketFrameEEE","__ZN9Inspector33InspectorWorkerFrontendDispatcher22disconnectedFromWorkerEv","__ZN9Inspector30InspectorDOMFrontendDispatcher16shadowRootPushedEiN3WTF10PassRefPtrINS_11TypeBuilder3DOM4NodeEEE","__ZN9Inspector35InspectorDatabaseFrontendDispatcher11addDatabaseEN3WTF10PassRefPtrINS_11TypeBuilder8Database8DatabaseEEE","__ZN9Inspector34InspectorNetworkFrontendDispatcher22requestServedFromCacheERKN3WTF6StringE","__ZN9Inspector35InspectorProfilerFrontendDispatcher20addHeapSnapshotChunkEiRKN3WTF6StringE","__ZN9Inspector39InspectorHeapProfilerFrontendDispatcher26reportHeapSnapshotProgressEii","__ZN9Inspector37InspectorDOMStorageFrontendDispatcher19domStorageItemAddedEN3WTF10PassRefPtrINS_11TypeBuilder10DOMStorage9StorageIdEEERKNS1_6StringES9_","__ZN9Inspector35InspectorProfilerFrontendDispatcher13resetProfilesEv","__ZN9Inspector35InspectorTimelineFrontendDispatcher13eventRecordedEN3WTF10PassRefPtrINS_11TypeBuilder8Timeline13TimelineEventEEE","__ZN9Inspector30InspectorDOMFrontendDispatcher16attributeRemovedEiRKN3WTF6StringE","__ZN9Inspector39InspectorHeapProfilerFrontendDispatcher20addHeapSnapshotChunkEiRKN3WTF6StringE","__ZN9Inspector30InspectorCSSFrontendDispatcher17styleSheetChangedERKN3WTF6StringE","__ZN9Inspector33InspectorCanvasFrontendDispatcher16traceLogsRemovedEPKN3WTF6StringES4_","__ZN9Inspector34InspectorNetworkFrontendDispatcher16responseReceivedERKN3WTF6StringES4_S4_dNS_11TypeBuilder4Page12ResourceType4EnumENS1_10PassRefPtrINS5_7Network8ResponseEEE","__ZN9Inspector34InspectorNetworkFrontendDispatcher13loadingFailedERKN3WTF6StringEdS4_PKb","__ZN9Inspector30InspectorDOMFrontendDispatcher17attributeModifiedEiRKN3WTF6StringES4_","__ZN9Inspector30InspectorCSSFrontendDispatcher23mediaQueryResultChangedEv","__ZN9Inspector35InspectorProfilerFrontendDispatcher18finishHeapSnapshotEi","__ZN9Inspector34InspectorNetworkFrontendDispatcher15loadingFinishedERKN3WTF6StringEdPS3_","__ZN9Inspector39InspectorHeapProfilerFrontendDispatcher16addProfileHeaderEN3WTF10PassRefPtrINS_11TypeBuilder12HeapProfiler13ProfileHeaderEEE","__ZN9Inspector30InspectorCSSFrontendDispatcher19regionLayoutUpdatedEN3WTF10PassRefPtrINS_11TypeBuilder3CSS9NamedFlowEEE","__ZN9Inspector31InspectorPageFrontendDispatcher14loadEventFiredEd","_memcpy","__ZN9Inspector30InspectorDOMFrontendDispatcher21characterDataModifiedEiRKN3WTF6StringE","__ZN9Inspector31InspectorPageFrontendDispatcher23javascriptDialogOpeningERKN3WTF6StringE","__ZN9Inspector43InspectorApplicationCacheFrontendDispatcher29applicationCacheStatusUpdatedERKN3WTF6StringES4_i","__ZN9Inspector30InspectorCSSFrontendDispatcher16namedFlowCreatedEN3WTF10PassRefPtrINS_11TypeBuilder3CSS9NamedFlowEEE","__ZN9Inspector34InspectorNetworkFrontendDispatcher19webSocketFrameErrorERKN3WTF6StringEdS4_","__ZN9Inspector30InspectorCSSFrontendDispatcher20regionOversetChangedEN3WTF10PassRefPtrINS_11TypeBuilder3CSS9NamedFlowEEE","__ZN9Inspector35InspectorProfilerFrontendDispatcher16addProfileHeaderEN3WTF10PassRefPtrINS_11TypeBuilder8Profiler13ProfileHeaderEEE","__ZN9Inspector30InspectorDOMFrontendDispatcher21childNodeCountUpdatedEii","__ZN9Inspector19InspectorObjectBase9setObjectERKN3WTF6StringENS1_10PassRefPtrINS_15InspectorObjectEEE","_memset","__ZN9Inspector31InspectorPageFrontendDispatcher22javascriptDialogClosedEv","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RNS_10PassRefPtrINS4_15InspectorObjectEEEEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RNS_10PassRefPtrIS5_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_","__ZN9Inspector31InspectorPageFrontendDispatcher20domContentEventFiredEd","__ZN9Inspector31InspectorPageFrontendDispatcher24frameScheduledNavigationERKN3WTF6StringEd","__ZN9Inspector34InspectorConsoleFrontendDispatcher25messageRepeatCountUpdatedEi","__ZN9Inspector30InspectorDOMFrontendDispatcher22inlineStyleInvalidatedEN3WTF10PassRefPtrINS_11TypeBuilder5ArrayIiEEEE","__ZN9Inspector33InspectorWorkerFrontendDispatcher25dispatchMessageFromWorkerEiN3WTF10PassRefPtrINS_15InspectorObjectEEE","__ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE","__ZN9Inspector30InspectorDOMFrontendDispatcher15documentUpdatedEv","__ZN9Inspector30InspectorCSSFrontendDispatcher33registeredNamedFlowContentElementEiRKN3WTF6StringEii","__ZN9Inspector39InspectorHeapProfilerFrontendDispatcher18finishHeapSnapshotEi","__ZN9Inspector31InspectorPageFrontendDispatcher13frameDetachedERKN3WTF6StringE","__ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN9Inspector30InspectorDOMFrontendDispatcher17childNodeInsertedEiiN3WTF10PassRefPtrINS_11TypeBuilder3DOM4NodeEEE","__ZN9Inspector34InspectorNetworkFrontendDispatcher34webSocketHandshakeResponseReceivedERKN3WTF6StringEdNS1_10PassRefPtrINS_11TypeBuilder7Network17WebSocketResponseEEE","__ZN9Inspector30InspectorCSSFrontendDispatcher35unregisteredNamedFlowContentElementEiRKN3WTF6StringEi","__ZN9Inspector37InspectorDOMStorageFrontendDispatcher22domStorageItemsClearedEN3WTF10PassRefPtrINS_11TypeBuilder10DOMStorage9StorageIdEEE","__ZN9Inspector30InspectorCSSFrontendDispatcher16namedFlowRemovedEiRKN3WTF6StringE","__ZN9Inspector34InspectorConsoleFrontendDispatcher12messageAddedEN3WTF10PassRefPtrINS_11TypeBuilder7Console14ConsoleMessageEEE","_strlen","__ZN9Inspector35InspectorProfilerFrontendDispatcher26reportHeapSnapshotProgressEii","__ZN9Inspector31InspectorPageFrontendDispatcher14frameNavigatedEN3WTF10PassRefPtrINS_11TypeBuilder4Page5FrameEEE","__ZN9Inspector43InspectorApplicationCacheFrontendDispatcher19networkStateUpdatedEb","__ZN9Inspector33InspectorWorkerFrontendDispatcher16workerTerminatedEi","__ZN9Inspector30InspectorDOMFrontendDispatcher16shadowRootPoppedEii","__ZN9Inspector31InspectorPageFrontendDispatcher19frameStartedLoadingERKN3WTF6StringE","__ZN9Inspector34InspectorNetworkFrontendDispatcher15webSocketClosedERKN3WTF6StringEd","__ZN9Inspector31InspectorPageFrontendDispatcher14scriptsEnabledEb","__ZN9Inspector34InspectorNetworkFrontendDispatcher17requestWillBeSentERKN3WTF6StringES4_S4_S4_NS1_10PassRefPtrINS_11TypeBuilder7Network7RequestEEEdNS5_INS7_9InitiatorEEENS5_INS7_8ResponseEEEPNS6_4Page12ResourceType4EnumE","__ZN9Inspector33InspectorCanvasFrontendDispatcher14contextCreatedERKN3WTF6StringE","__ZN9Inspector33InspectorWorkerFrontendDispatcher13workerCreatedEiRKN3WTF6StringEb","__ZN9Inspector30InspectorDOMFrontendDispatcher13setChildNodesEiN3WTF10PassRefPtrINS_11TypeBuilder5ArrayINS3_3DOM4NodeEEEEE","__ZN9Inspector39InspectorHeapProfilerFrontendDispatcher13resetProfilesEv","__ZN9Inspector34InspectorConsoleFrontendDispatcher15messagesClearedEv","__ZN9Inspector36InspectorLayerTreeFrontendDispatcher18layerTreeDidChangeEv","__ZN9Inspector31InspectorPageFrontendDispatcher31frameClearedScheduledNavigationERKN3WTF6StringE","__ZN9Inspector34InspectorNetworkFrontendDispatcher16webSocketCreatedERKN3WTF6StringES4_","__ZN9Inspector34InspectorNetworkFrontendDispatcher33webSocketWillSendHandshakeRequestERKN3WTF6StringEdNS1_10PassRefPtrINS_11TypeBuilder7Network16WebSocketRequestEEE","__ZN9Inspector37InspectorDOMStorageFrontendDispatcher21domStorageItemRemovedEN3WTF10PassRefPtrINS_11TypeBuilder10DOMStorage9StorageIdEEERKNS1_6StringE","__ZN9Inspector34InspectorNetworkFrontendDispatcher18webSocketFrameSentERKN3WTF6StringEdNS1_10PassRefPtrINS_11TypeBuilder7Network14WebSocketFrameEEE","__ZN9Inspector35InspectorProfilerFrontendDispatcher19setRecordingProfileEb","__ZN9Inspector31InspectorPageFrontendDispatcher19frameStoppedLoadingERKN3WTF6StringE"]
