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
H_BASE = parentModule["_malloc"](1592 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 1592;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore23InspectorIndexedDBAgentC1EPNS_19InstrumentingAgentsEPN9Inspector21InjectedScriptManagerEPNS_18InspectorPageAgentE;
var __ZN7WebCore23InspectorIndexedDBAgentD1Ev;
/* memory initializer */ allocate([85,110,101,120,112,101,99,116,101,100,32,114,101,115,117,108,116,32,116,121,112,101,46,0,67,111,117,108,100,32,110,111,116,32,103,101,116,32,114,101,115,117,108,116,32,105,110,32,99,97,108,108,98,97,99,107,46,0,0,0,0,0,0,0,67,111,117,108,100,32,110,111,116,32,103,101,116,32,105,110,100,101,120,0,0,0,0,0,85,110,101,120,112,101,99,116,101,100,32,101,118,101,110,116,32,116,121,112,101,46,0,0,67,111,117,108,100,32,110,111,116,32,99,108,101,97,114,32,111,98,106,101,99,116,32,115,116,111,114,101,32,39,37,115,39,58,32,37,100,0,0,0,67,111,117,108,100,32,110,111,116,32,103,101,116,32,111,98,106,101,99,116,32,115,116,111,114,101,0,0,0,0,0,0,78,111,32,100,111,99,117,109,101,110,116,32,102,111,114,32,103,105,118,101,110,32,102,114,97,109,101,32,102,111,117,110,100,0,0,0,0,0,0,0,78,111,32,73,110,100,101,120,101,100,68,66,32,102,97,99,116,111,114,121,32,102,111,114,32,103,105,118,101,110,32,102,114,97,109,101,32,102,111,117,110,100,0,0,0,0,0,0,117,110,105,113,117,101,0,0,109,117,108,116,105,69,110,116,114,121,0,0,0,0,0,0,107,101,121,80,97,116,104,0,97,117,116,111,73,110,99,114,101,109,101,110,116,0,0,0,67,111,117,108,100,32,110,111,116,32,103,101,116,32,116,114,97,110,115,97,99,116,105,111,110,0,0,0,0,0,0,0,105,110,100,101,120,101,115,0,110,97,109,101,0,0,0,0,105,110,116,86,101,114,115,105,111,110,0,0,0,0,0,0,118,101,114,115,105,111,110,0,111,98,106,101,99,116,83,116,111,114,101,115,0,0,0,0,67,111,117,108,100,32,110,111,116,32,111,112,101,110,32,100,97,116,97,98,97,115,101,46,0,0,0,0,0,0,0,0,97,114,114,97,121,0,0,0,100,97,116,101,0,0,0,0,115,116,114,105,110,103,0,0,110,117,109,98,101,114,0,0,67,97,110,32,110,111,116,32,112,97,114,115,101,32,107,101,121,32,114,97,110,103,101,46,0,0,0,0,0,0,0,0,116,121,112,101,0,0,0,0,117,112,112,101,114,79,112,101,110,0,0,0,0,0,0,0,108,111,119,101,114,79,112,101,110,0,0,0,0,0,0,0,117,112,112,101,114,0,0,0,108,111,119,101,114,0,0,0,107,101,121,0,0,0,0,0,112,114,105,109,97,114,121,75,101,121,0,0,0,0,0,0,118,97,108,117,101,0,0,0,67,111,117,108,100,32,110,111,116,32,99,111,110,116,105,110,117,101,32,99,117,114,115,111,114,46,0,0,0,0,0,0,67,111,117,108,100,32,110,111,116,32,97,100,118,97,110,99,101,32,99,117,114,115,111,114,46,0,0,0,0,0,0,0,67,111,117,108,100,32,110,111,116,32,111,98,116,97,105,110,32,100,97,116,97,98,97,115,101,32,110,97,109,101,115,46,0,0,0,0,0,0,0,0,73,110,100,101,120,101,100,68,66,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,244,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
 var ctlz_i8 = allocate([8,7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_DYNAMIC);
 var cttz_i8 = allocate([8,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,6,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,7,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,6,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0], "i8", ALLOC_DYNAMIC);
var Math_min = Math.min;
function invoke_ii(index,a1) {
  try {
    return Module["dynCall_ii"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10) {
  try {
    Module["dynCall_viiiiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiiii(index,a1,a2,a3,a4,a5) {
  try {
    Module["dynCall_viiiii"](index,a1,a2,a3,a4,a5);
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
function invoke_iiiii(index,a1,a2,a3,a4) {
  try {
    return Module["dynCall_iiiii"](index,a1,a2,a3,a4);
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
function invoke_viiiiii(index,a1,a2,a3,a4,a5,a6) {
  try {
    Module["dynCall_viiiiii"](index,a1,a2,a3,a4,a5,a6);
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
  var cttz_i8=env.cttz_i8|0;
  var ctlz_i8=env.ctlz_i8|0;
  var __ZTVN10Deprecated11ScriptValueE=env.__ZTVN10Deprecated11ScriptValueE|0;
  var __ZTVN9Inspector18InjectedScriptBaseE=env.__ZTVN9Inspector18InjectedScriptBaseE|0;
  var __ZTVN9Inspector14InjectedScriptE=env.__ZTVN9Inspector14InjectedScriptE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore16ClearObjectStoreE=(H_BASE+1272)|0;
  var __ZTVN9Inspector11TypeBuilder5ArrayINS0_9IndexedDB16ObjectStoreIndexEEE=(H_BASE+840)|0;
  var __ZTVN9Inspector18InspectorAgentBaseE=(H_BASE+720)|0;
  var __ZTVN7WebCore24ClearObjectStoreListenerE=(H_BASE+1080)|0;
  var __ZTVN9Inspector11TypeBuilder5ArrayINS0_9IndexedDB9DataEntryEEE=(H_BASE+760)|0;
  var __ZTVN9Inspector11TypeBuilder5ArrayIN3WTF6StringEEE=(H_BASE+1000)|0;
  var __ZTVN10Deprecated12ScriptObjectE=(H_BASE+1512)|0;
  var __ZTVN7WebCore18InspectorAgentBaseE=(H_BASE+1232)|0;
  var __ZTVN9Inspector11TypeBuilder5ArrayINS0_9IndexedDB11ObjectStoreEEE=(H_BASE+920)|0;
  var __ZTVN7WebCore23InspectorIndexedDBAgentE=(H_BASE+1128)|0;
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
  var invoke_viiiiiiiiii=env.invoke_viiiiiiiiii;
  var invoke_viiiii=env.invoke_viiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___cxa_pure_virtual=env.___cxa_pure_virtual;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore12_GLOBAL__N_114DatabaseLoader7executeEN3WTF10PassRefPtrINS_11IDBDatabaseEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0, i93 = 0, i94 = 0, i95 = 0, i96 = 0, i97 = 0, i98 = 0, i99 = 0, i100 = 0, i101 = 0, i102 = 0, i103 = 0, i104 = 0, i105 = 0, i106 = 0, i107 = 0, i108 = 0, i109 = 0, i110 = 0, i111 = 0, i112 = 0, i113 = 0, i114 = 0, i115 = 0, i116 = 0, i117 = 0, i118 = 0, i119 = 0, i120 = 0, i121 = 0, i122 = 0, i123 = 0, i124 = 0, i125 = 0, i126 = 0, i127 = 0, i128 = 0, i129 = 0, i130 = 0, i131 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 480 | 0;
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
 i20 = i3 + 128 | 0;
 i21 = i3 + 136 | 0;
 i22 = i3 + 144 | 0;
 i23 = i3 + 152 | 0;
 i24 = i3 + 160 | 0;
 i25 = i3 + 168 | 0;
 i26 = i3 + 176 | 0;
 i27 = i3 + 184 | 0;
 i28 = i3 + 192 | 0;
 i29 = i3 + 200 | 0;
 i30 = i3 + 208 | 0;
 i31 = i3 + 216 | 0;
 i32 = i3 + 224 | 0;
 i33 = i3 + 232 | 0;
 i34 = i3 + 240 | 0;
 i35 = i3 + 248 | 0;
 i36 = i3 + 256 | 0;
 i37 = i3 + 264 | 0;
 i38 = i3 + 272 | 0;
 i39 = i3 + 280 | 0;
 i40 = i3 + 288 | 0;
 i41 = i3 + 296 | 0;
 i42 = i3 + 304 | 0;
 i43 = i3 + 312 | 0;
 i44 = i3 + 320 | 0;
 i45 = i3 + 328 | 0;
 i46 = i3 + 336 | 0;
 i47 = i3 + 344 | 0;
 i48 = i3 + 352 | 0;
 i49 = i3 + 360 | 0;
 i50 = i3 + 368 | 0;
 i51 = i3 + 376 | 0;
 i52 = i3 + 392 | 0;
 i53 = i3 + 448 | 0;
 i54 = i3 + 456 | 0;
 i55 = i3 + 464 | 0;
 i56 = i3 + 472 | 0;
 i57 = i2 | 0;
 i2 = HEAP32[i57 >> 2] | 0;
 HEAP32[i57 >> 2] = 0;
 do {
  if (__ZNK9Inspector26InspectorBackendDispatcher12CallbackBase8isActiveEv(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 15](i1) | 0) | 0) {
   i57 = i52 | 0;
   i58 = HEAP32[i2 + 56 >> 2] | 0;
   HEAP32[i57 >> 2] = i58;
   if ((i58 | 0) != 0) {
    i59 = i58 | 0;
    HEAP32[i59 >> 2] = (HEAP32[i59 >> 2] | 0) + 2;
   }
   i59 = i52 + 8 | 0;
   i58 = i2 + 64 | 0;
   i60 = HEAP32[i58 + 4 >> 2] | 0;
   HEAP32[i59 >> 2] = HEAP32[i58 >> 2];
   HEAP32[i59 + 4 >> 2] = i60;
   i60 = i52 + 16 | 0;
   i59 = i2 + 72 | 0;
   i58 = HEAP32[i59 + 4 >> 2] | 0;
   HEAP32[i60 >> 2] = HEAP32[i59 >> 2];
   HEAP32[i60 + 4 >> 2] = i58;
   i58 = i52 + 24 | 0;
   i59 = i2 + 80 | 0;
   i61 = HEAP32[i59 + 4 >> 2] | 0;
   HEAP32[i58 >> 2] = HEAP32[i59 >> 2];
   HEAP32[i58 + 4 >> 2] = i61;
   i61 = i52 + 32 | 0;
   i58 = i61 | 0;
   _memset(i61 | 0, 0, 20) | 0;
   i59 = HEAP32[i2 + 88 >> 2] | 0;
   i62 = HEAP32[i2 + 92 >> 2] | 0;
   i63 = i59 + (i62 * 80 & -1) | 0;
   L6 : do {
    if ((HEAP32[i2 + 100 >> 2] | 0) != 0) {
     L8 : do {
      if ((i62 | 0) == 0) {
       i64 = i59;
      } else {
       i65 = i59;
       while (1) {
        i66 = i65 | 0;
        i67 = HEAP32[i66 >> 2] | 0;
        i68 = HEAP32[i66 + 4 >> 2] | 0;
        if (!((i67 | 0) == (-1 | 0) & (i68 | 0) == (-1 | 0) | (i67 | 0) == 0 & (i68 | 0) == 0)) {
         i64 = i65;
         break L8;
        }
        i65 = i65 + 80 | 0;
        if ((i65 | 0) == (i63 | 0)) {
         break L6;
        }
       }
      }
     } while (0);
     if ((i64 | 0) == (i63 | 0)) {
      break;
     } else {
      i69 = i64;
     }
     while (1) {
      __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore22IDBObjectStoreMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E3addINS_22IdentityHashTranslatorIS8_EERKxRKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIxS4_S6_S8_SE_SB_EEEEOT0_OT1_(i51, i58, i69 | 0, i69);
      i65 = i69 + 80 | 0;
      if ((i65 | 0) == (i63 | 0)) {
       break L6;
      } else {
       i70 = i65;
      }
      while (1) {
       i65 = i70 | 0;
       i68 = HEAP32[i65 >> 2] | 0;
       i67 = HEAP32[i65 + 4 >> 2] | 0;
       if (!((i68 | 0) == (-1 | 0) & (i67 | 0) == (-1 | 0) | (i68 | 0) == 0 & (i67 | 0) == 0)) {
        break;
       }
       i67 = i70 + 80 | 0;
       if ((i67 | 0) == (i63 | 0)) {
        break L6;
       } else {
        i70 = i67;
       }
      }
      if ((i70 | 0) == (i63 | 0)) {
       break;
      } else {
       i69 = i70;
      }
     }
    }
   } while (0);
   i63 = __ZN3WTF10fastMallocEj(24) | 0;
   __ZN9Inspector18InspectorArrayBaseC2Ev(i63);
   HEAP32[i63 >> 2] = H_BASE + 928;
   i58 = i61 | 0;
   i59 = HEAP32[i58 >> 2] | 0;
   i62 = i52 + 36 | 0;
   i67 = HEAP32[i62 >> 2] | 0;
   i68 = i59 + (i67 * 80 & -1) | 0;
   L20 : do {
    if ((HEAP32[i52 + 44 >> 2] | 0) != 0) {
     L22 : do {
      if ((i67 | 0) == 0) {
       i71 = i59;
      } else {
       i65 = i59;
       while (1) {
        i66 = i65 | 0;
        i72 = HEAP32[i66 >> 2] | 0;
        i73 = HEAP32[i66 + 4 >> 2] | 0;
        if (!((i72 | 0) == (-1 | 0) & (i73 | 0) == (-1 | 0) | (i72 | 0) == 0 & (i73 | 0) == 0)) {
         i71 = i65;
         break L22;
        }
        i65 = i65 + 80 | 0;
        if ((i65 | 0) == (i68 | 0)) {
         break L20;
        }
       }
      }
     } while (0);
     if ((i71 | 0) == (i68 | 0)) {
      break;
     }
     i65 = i34 | 0;
     i73 = i33 | 0;
     i72 = i30 | 0;
     i66 = i31 | 0;
     i74 = i32 | 0;
     i75 = i28 | 0;
     i76 = i29 | 0;
     i77 = i54 | 0;
     i78 = i27 | 0;
     i79 = i26 | 0;
     i80 = i23 | 0;
     i81 = i24 | 0;
     i82 = i25 | 0;
     i83 = i21 | 0;
     i84 = i22 | 0;
     i85 = i20 | 0;
     i86 = i63 + 12 | 0;
     i87 = i63 + 20 | 0;
     i88 = i63 + 16 | 0;
     i89 = i86;
     i90 = i86;
     i86 = i50 | 0;
     i91 = i49 | 0;
     i92 = i46 | 0;
     i93 = i47 | 0;
     i94 = i48 | 0;
     i95 = i44 | 0;
     i96 = i45 | 0;
     i97 = i53 | 0;
     i98 = i43 | 0;
     i99 = i42 | 0;
     i100 = i39 | 0;
     i101 = i40 | 0;
     i102 = i41 | 0;
     i103 = i38 | 0;
     i104 = i35 | 0;
     i105 = i36 | 0;
     i106 = i37 | 0;
     i107 = i71;
     while (1) {
      i108 = __ZN3WTF10fastMallocEj(24) | 0;
      __ZN9Inspector18InspectorArrayBaseC2Ev(i108);
      HEAP32[i108 >> 2] = H_BASE + 848;
      i109 = i107 + 56 | 0;
      i110 = HEAP32[i109 >> 2] | 0;
      i111 = i107 + 60 | 0;
      i112 = HEAP32[i111 >> 2] | 0;
      i113 = i110 + (i112 * 48 & -1) | 0;
      L30 : do {
       if ((HEAP32[i107 + 68 >> 2] | 0) != 0) {
        L32 : do {
         if ((i112 | 0) == 0) {
          i114 = i110;
         } else {
          i115 = i110;
          while (1) {
           i116 = i115 | 0;
           i117 = HEAP32[i116 >> 2] | 0;
           i118 = HEAP32[i116 + 4 >> 2] | 0;
           if (!((i117 | 0) == (-1 | 0) & (i118 | 0) == (-1 | 0) | (i117 | 0) == 0 & (i118 | 0) == 0)) {
            i114 = i115;
            break L32;
           }
           i115 = i115 + 48 | 0;
           if ((i115 | 0) == (i113 | 0)) {
            break L30;
           }
          }
         }
        } while (0);
        if ((i114 | 0) == (i113 | 0)) {
         break;
        }
        i115 = i108 + 12 | 0;
        i118 = i108 + 20 | 0;
        i117 = i108 + 16 | 0;
        i116 = i115;
        i119 = i115;
        i115 = i114;
        while (1) {
         __ZN9Inspector15InspectorObject6createEv(i50);
         i120 = HEAP32[i86 >> 2] | 0;
         i121 = i120 | 0;
         HEAP32[i91 >> 2] = H_BASE + 368;
         __ZN3WTF6StringC1ENS_12ASCIILiteralE(i48, i49);
         __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i47, i115 + 8 | 0);
         i122 = HEAP32[i93 >> 2] | 0;
         HEAP32[i93 >> 2] = 0;
         HEAP32[i92 >> 2] = i122;
         __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i121, i48, i46);
         i122 = HEAP32[i92 >> 2] | 0;
         do {
          if ((i122 | 0) != 0) {
           i123 = i122 + 4 | 0;
           i124 = i123 | 0;
           i125 = (HEAP32[i124 >> 2] | 0) - 1 | 0;
           if ((i125 | 0) != 0) {
            HEAP32[i124 >> 2] = i125;
            break;
           }
           i125 = i123 - 4 | 0;
           if ((i125 | 0) == 0) {
            break;
           }
           FUNCTION_TABLE_vi[HEAP32[(HEAP32[i125 >> 2] | 0) + 4 >> 2] & 127](i125);
          }
         } while (0);
         i122 = HEAP32[i93 >> 2] | 0;
         do {
          if ((i122 | 0) != 0) {
           i125 = i122 + 4 | 0;
           i123 = i125 | 0;
           i124 = (HEAP32[i123 >> 2] | 0) - 1 | 0;
           if ((i124 | 0) != 0) {
            HEAP32[i123 >> 2] = i124;
            break;
           }
           i124 = i125 - 4 | 0;
           if ((i124 | 0) == 0) {
            break;
           }
           FUNCTION_TABLE_vi[HEAP32[(HEAP32[i124 >> 2] | 0) + 4 >> 2] & 127](i124);
          }
         } while (0);
         i122 = HEAP32[i94 >> 2] | 0;
         do {
          if ((i122 | 0) != 0) {
           i124 = i122 | 0;
           i125 = (HEAP32[i124 >> 2] | 0) - 2 | 0;
           if ((i125 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i122);
            break;
           } else {
            HEAP32[i124 >> 2] = i125;
            break;
           }
          }
         } while (0);
         __ZN7WebCore12_GLOBAL__N_1L21keyPathFromIDBKeyPathERKNS_10IDBKeyPathE(i53, i115 + 24 | 0);
         HEAP32[i95 >> 2] = H_BASE + 304;
         __ZN3WTF6StringC1ENS_12ASCIILiteralE(i43, i44);
         i122 = HEAP32[i97 >> 2] | 0;
         HEAP32[i97 >> 2] = 0;
         HEAP32[i96 >> 2] = i122;
         __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i121, i43, i45);
         i122 = HEAP32[i96 >> 2] | 0;
         do {
          if ((i122 | 0) != 0) {
           i125 = i122 + 4 | 0;
           i124 = i125 | 0;
           i123 = (HEAP32[i124 >> 2] | 0) - 1 | 0;
           if ((i123 | 0) != 0) {
            HEAP32[i124 >> 2] = i123;
            break;
           }
           i123 = i125 - 4 | 0;
           if ((i123 | 0) == 0) {
            break;
           }
           FUNCTION_TABLE_vi[HEAP32[(HEAP32[i123 >> 2] | 0) + 4 >> 2] & 127](i123);
          }
         } while (0);
         i122 = HEAP32[i98 >> 2] | 0;
         do {
          if ((i122 | 0) != 0) {
           i123 = i122 | 0;
           i125 = (HEAP32[i123 >> 2] | 0) - 2 | 0;
           if ((i125 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i122);
            break;
           } else {
            HEAP32[i123 >> 2] = i125;
            break;
           }
          }
         } while (0);
         i122 = (HEAP8[i115 + 44 | 0] & 1) != 0;
         HEAP32[i99 >> 2] = H_BASE + 280;
         __ZN3WTF6StringC1ENS_12ASCIILiteralE(i41, i42);
         __ZN9Inspector19InspectorBasicValue6createEb(i40, i122);
         i122 = HEAP32[i101 >> 2] | 0;
         HEAP32[i101 >> 2] = 0;
         HEAP32[i100 >> 2] = i122;
         __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i121, i41, i39);
         i122 = HEAP32[i100 >> 2] | 0;
         do {
          if ((i122 | 0) != 0) {
           i125 = i122 + 4 | 0;
           i123 = i125 | 0;
           i124 = (HEAP32[i123 >> 2] | 0) - 1 | 0;
           if ((i124 | 0) != 0) {
            HEAP32[i123 >> 2] = i124;
            break;
           }
           i124 = i125 - 4 | 0;
           if ((i124 | 0) == 0) {
            break;
           }
           FUNCTION_TABLE_vi[HEAP32[(HEAP32[i124 >> 2] | 0) + 4 >> 2] & 127](i124);
          }
         } while (0);
         i122 = HEAP32[i101 >> 2] | 0;
         do {
          if ((i122 | 0) != 0) {
           i124 = i122 + 4 | 0;
           i125 = i124 | 0;
           i123 = (HEAP32[i125 >> 2] | 0) - 1 | 0;
           if ((i123 | 0) != 0) {
            HEAP32[i125 >> 2] = i123;
            break;
           }
           i123 = i124 - 4 | 0;
           if ((i123 | 0) == 0) {
            break;
           }
           FUNCTION_TABLE_vi[HEAP32[(HEAP32[i123 >> 2] | 0) + 4 >> 2] & 127](i123);
          }
         } while (0);
         i122 = HEAP32[i102 >> 2] | 0;
         do {
          if ((i122 | 0) != 0) {
           i123 = i122 | 0;
           i124 = (HEAP32[i123 >> 2] | 0) - 2 | 0;
           if ((i124 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i122);
            break;
           } else {
            HEAP32[i123 >> 2] = i124;
            break;
           }
          }
         } while (0);
         i122 = (HEAP8[i115 + 45 | 0] & 1) != 0;
         HEAP32[i103 >> 2] = H_BASE + 288;
         __ZN3WTF6StringC1ENS_12ASCIILiteralE(i37, i38);
         __ZN9Inspector19InspectorBasicValue6createEb(i36, i122);
         i122 = HEAP32[i105 >> 2] | 0;
         HEAP32[i105 >> 2] = 0;
         HEAP32[i104 >> 2] = i122;
         __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i121, i37, i35);
         i122 = HEAP32[i104 >> 2] | 0;
         do {
          if ((i122 | 0) != 0) {
           i124 = i122 + 4 | 0;
           i123 = i124 | 0;
           i125 = (HEAP32[i123 >> 2] | 0) - 1 | 0;
           if ((i125 | 0) != 0) {
            HEAP32[i123 >> 2] = i125;
            break;
           }
           i125 = i124 - 4 | 0;
           if ((i125 | 0) == 0) {
            break;
           }
           FUNCTION_TABLE_vi[HEAP32[(HEAP32[i125 >> 2] | 0) + 4 >> 2] & 127](i125);
          }
         } while (0);
         i122 = HEAP32[i105 >> 2] | 0;
         do {
          if ((i122 | 0) != 0) {
           i121 = i122 + 4 | 0;
           i125 = i121 | 0;
           i124 = (HEAP32[i125 >> 2] | 0) - 1 | 0;
           if ((i124 | 0) != 0) {
            HEAP32[i125 >> 2] = i124;
            break;
           }
           i124 = i121 - 4 | 0;
           if ((i124 | 0) == 0) {
            break;
           }
           FUNCTION_TABLE_vi[HEAP32[(HEAP32[i124 >> 2] | 0) + 4 >> 2] & 127](i124);
          }
         } while (0);
         i122 = HEAP32[i106 >> 2] | 0;
         do {
          if ((i122 | 0) != 0) {
           i124 = i122 | 0;
           i121 = (HEAP32[i124 >> 2] | 0) - 2 | 0;
           if ((i121 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i122);
            break;
           } else {
            HEAP32[i124 >> 2] = i121;
            break;
           }
          }
         } while (0);
         i122 = (i120 | 0) == 0;
         if (!i122) {
          i121 = i120 + 4 | 0;
          HEAP32[i121 >> 2] = (HEAP32[i121 >> 2] | 0) + 1;
          i121 = i120 + 4 | 0;
          i124 = i121 | 0;
          i125 = (HEAP32[i124 >> 2] | 0) - 1 | 0;
          do {
           if ((i125 | 0) == 0) {
            i123 = i121 - 4 | 0;
            if ((i123 | 0) == 0) {
             break;
            }
            FUNCTION_TABLE_vi[HEAP32[(HEAP32[i123 >> 2] | 0) + 4 >> 2] & 127](i123);
           } else {
            HEAP32[i124 >> 2] = i125;
           }
          } while (0);
          i125 = i120 + 4 | 0;
          HEAP32[i125 >> 2] = (HEAP32[i125 >> 2] | 0) + 1;
         }
         i125 = i120 | 0;
         i124 = HEAP32[i118 >> 2] | 0;
         if ((i124 | 0) == (HEAP32[i117 >> 2] | 0)) {
          __ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i116, i124 + 1 | 0);
          HEAP32[(HEAP32[i119 >> 2] | 0) + (HEAP32[i118 >> 2] << 2) >> 2] = i125;
         } else {
          HEAP32[(HEAP32[i119 >> 2] | 0) + (i124 << 2) >> 2] = i125;
         }
         HEAP32[i118 >> 2] = (HEAP32[i118 >> 2] | 0) + 1;
         do {
          if (!i122) {
           i125 = i120 + 4 | 0;
           i124 = i125 | 0;
           i121 = (HEAP32[i124 >> 2] | 0) - 1 | 0;
           if ((i121 | 0) != 0) {
            HEAP32[i124 >> 2] = i121;
            break;
           }
           i121 = i125 - 4 | 0;
           if ((i121 | 0) == 0) {
            break;
           }
           FUNCTION_TABLE_vi[HEAP32[(HEAP32[i121 >> 2] | 0) + 4 >> 2] & 127](i121);
          }
         } while (0);
         i120 = i115 + 48 | 0;
         L132 : do {
          if ((i120 | 0) == (i113 | 0)) {
           i126 = i113;
          } else {
           i122 = i120;
           while (1) {
            i121 = i122 | 0;
            i125 = HEAP32[i121 >> 2] | 0;
            i124 = HEAP32[i121 + 4 >> 2] | 0;
            if (!((i125 | 0) == (-1 | 0) & (i124 | 0) == (-1 | 0) | (i125 | 0) == 0 & (i124 | 0) == 0)) {
             i126 = i122;
             break L132;
            }
            i124 = i122 + 48 | 0;
            if ((i124 | 0) == (i113 | 0)) {
             i126 = i113;
             break;
            } else {
             i122 = i124;
            }
           }
          }
         } while (0);
         if ((i126 | 0) == ((HEAP32[i109 >> 2] | 0) + ((HEAP32[i111 >> 2] | 0) * 48 & -1) | 0)) {
          break;
         } else {
          i115 = i126;
         }
        }
       }
      } while (0);
      __ZN9Inspector15InspectorObject6createEv(i34);
      i111 = HEAP32[i65 >> 2] | 0;
      i109 = i111 | 0;
      HEAP32[i73 >> 2] = H_BASE + 368;
      __ZN3WTF6StringC1ENS_12ASCIILiteralE(i32, i33);
      __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i31, i107 + 8 | 0);
      i113 = HEAP32[i66 >> 2] | 0;
      HEAP32[i66 >> 2] = 0;
      HEAP32[i72 >> 2] = i113;
      __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i109, i32, i30);
      i113 = HEAP32[i72 >> 2] | 0;
      do {
       if ((i113 | 0) != 0) {
        i110 = i113 + 4 | 0;
        i112 = i110 | 0;
        i115 = (HEAP32[i112 >> 2] | 0) - 1 | 0;
        if ((i115 | 0) != 0) {
         HEAP32[i112 >> 2] = i115;
         break;
        }
        i115 = i110 - 4 | 0;
        if ((i115 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i115 >> 2] | 0) + 4 >> 2] & 127](i115);
       }
      } while (0);
      i113 = HEAP32[i66 >> 2] | 0;
      do {
       if ((i113 | 0) != 0) {
        i115 = i113 + 4 | 0;
        i110 = i115 | 0;
        i112 = (HEAP32[i110 >> 2] | 0) - 1 | 0;
        if ((i112 | 0) != 0) {
         HEAP32[i110 >> 2] = i112;
         break;
        }
        i112 = i115 - 4 | 0;
        if ((i112 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i112 >> 2] | 0) + 4 >> 2] & 127](i112);
       }
      } while (0);
      i113 = HEAP32[i74 >> 2] | 0;
      do {
       if ((i113 | 0) != 0) {
        i112 = i113 | 0;
        i115 = (HEAP32[i112 >> 2] | 0) - 2 | 0;
        if ((i115 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i113);
         break;
        } else {
         HEAP32[i112 >> 2] = i115;
         break;
        }
       }
      } while (0);
      __ZN7WebCore12_GLOBAL__N_1L21keyPathFromIDBKeyPathERKNS_10IDBKeyPathE(i54, i107 + 24 | 0);
      HEAP32[i75 >> 2] = H_BASE + 304;
      __ZN3WTF6StringC1ENS_12ASCIILiteralE(i27, i28);
      i113 = HEAP32[i77 >> 2] | 0;
      HEAP32[i77 >> 2] = 0;
      HEAP32[i76 >> 2] = i113;
      __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i109, i27, i29);
      i113 = HEAP32[i76 >> 2] | 0;
      do {
       if ((i113 | 0) != 0) {
        i115 = i113 + 4 | 0;
        i112 = i115 | 0;
        i110 = (HEAP32[i112 >> 2] | 0) - 1 | 0;
        if ((i110 | 0) != 0) {
         HEAP32[i112 >> 2] = i110;
         break;
        }
        i110 = i115 - 4 | 0;
        if ((i110 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i110 >> 2] | 0) + 4 >> 2] & 127](i110);
       }
      } while (0);
      i113 = HEAP32[i78 >> 2] | 0;
      do {
       if ((i113 | 0) != 0) {
        i110 = i113 | 0;
        i115 = (HEAP32[i110 >> 2] | 0) - 2 | 0;
        if ((i115 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i113);
         break;
        } else {
         HEAP32[i110 >> 2] = i115;
         break;
        }
       }
      } while (0);
      i113 = (HEAP8[i107 + 44 | 0] & 1) != 0;
      HEAP32[i79 >> 2] = H_BASE + 312;
      __ZN3WTF6StringC1ENS_12ASCIILiteralE(i25, i26);
      __ZN9Inspector19InspectorBasicValue6createEb(i24, i113);
      i113 = HEAP32[i81 >> 2] | 0;
      HEAP32[i81 >> 2] = 0;
      HEAP32[i80 >> 2] = i113;
      __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i109, i25, i23);
      i113 = HEAP32[i80 >> 2] | 0;
      do {
       if ((i113 | 0) != 0) {
        i115 = i113 + 4 | 0;
        i110 = i115 | 0;
        i112 = (HEAP32[i110 >> 2] | 0) - 1 | 0;
        if ((i112 | 0) != 0) {
         HEAP32[i110 >> 2] = i112;
         break;
        }
        i112 = i115 - 4 | 0;
        if ((i112 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i112 >> 2] | 0) + 4 >> 2] & 127](i112);
       }
      } while (0);
      i113 = HEAP32[i81 >> 2] | 0;
      do {
       if ((i113 | 0) != 0) {
        i112 = i113 + 4 | 0;
        i115 = i112 | 0;
        i110 = (HEAP32[i115 >> 2] | 0) - 1 | 0;
        if ((i110 | 0) != 0) {
         HEAP32[i115 >> 2] = i110;
         break;
        }
        i110 = i112 - 4 | 0;
        if ((i110 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i110 >> 2] | 0) + 4 >> 2] & 127](i110);
       }
      } while (0);
      i113 = HEAP32[i82 >> 2] | 0;
      do {
       if ((i113 | 0) != 0) {
        i110 = i113 | 0;
        i112 = (HEAP32[i110 >> 2] | 0) - 2 | 0;
        if ((i112 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i113);
         break;
        } else {
         HEAP32[i110 >> 2] = i112;
         break;
        }
       }
      } while (0);
      i113 = (i108 | 0) == 0;
      if (!i113) {
       i112 = i108 + 4 | 0;
       HEAP32[i112 >> 2] = (HEAP32[i112 >> 2] | 0) + 1;
      }
      HEAP32[i83 >> 2] = H_BASE + 360;
      __ZN3WTF6StringC1ENS_12ASCIILiteralE(i20, i21);
      i112 = i108;
      HEAP32[i84 >> 2] = i112;
      __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i109, i20, i22);
      i110 = HEAP32[i84 >> 2] | 0;
      do {
       if ((i110 | 0) != 0) {
        i115 = i110 + 4 | 0;
        i118 = i115 | 0;
        i119 = (HEAP32[i118 >> 2] | 0) - 1 | 0;
        if ((i119 | 0) != 0) {
         HEAP32[i118 >> 2] = i119;
         break;
        }
        i119 = i115 - 4 | 0;
        if ((i119 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i119 >> 2] | 0) + 4 >> 2] & 127](i119);
       }
      } while (0);
      i110 = HEAP32[i85 >> 2] | 0;
      do {
       if ((i110 | 0) != 0) {
        i109 = i110 | 0;
        i119 = (HEAP32[i109 >> 2] | 0) - 2 | 0;
        if ((i119 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i110);
         break;
        } else {
         HEAP32[i109 >> 2] = i119;
         break;
        }
       }
      } while (0);
      i110 = (i111 | 0) == 0;
      if (!i110) {
       i119 = i111 + 4 | 0;
       HEAP32[i119 >> 2] = (HEAP32[i119 >> 2] | 0) + 1;
       i119 = i111 + 4 | 0;
       i109 = i119 | 0;
       i115 = (HEAP32[i109 >> 2] | 0) - 1 | 0;
       do {
        if ((i115 | 0) == 0) {
         i118 = i119 - 4 | 0;
         if ((i118 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i118 >> 2] | 0) + 4 >> 2] & 127](i118);
        } else {
         HEAP32[i109 >> 2] = i115;
        }
       } while (0);
       i115 = i111 + 4 | 0;
       HEAP32[i115 >> 2] = (HEAP32[i115 >> 2] | 0) + 1;
      }
      i115 = i111 | 0;
      i109 = HEAP32[i87 >> 2] | 0;
      if ((i109 | 0) == (HEAP32[i88 >> 2] | 0)) {
       __ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i89, i109 + 1 | 0);
       HEAP32[(HEAP32[i90 >> 2] | 0) + (HEAP32[i87 >> 2] << 2) >> 2] = i115;
      } else {
       HEAP32[(HEAP32[i90 >> 2] | 0) + (i109 << 2) >> 2] = i115;
      }
      HEAP32[i87 >> 2] = (HEAP32[i87 >> 2] | 0) + 1;
      do {
       if (!i110) {
        i115 = i111 + 4 | 0;
        i109 = i115 | 0;
        i119 = (HEAP32[i109 >> 2] | 0) - 1 | 0;
        if ((i119 | 0) != 0) {
         HEAP32[i109 >> 2] = i119;
         break;
        }
        i119 = i115 - 4 | 0;
        if ((i119 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i119 >> 2] | 0) + 4 >> 2] & 127](i119);
       }
      } while (0);
      do {
       if (!i113) {
        i111 = i108 + 4 | 0;
        i110 = (HEAP32[i111 >> 2] | 0) - 1 | 0;
        if ((i110 | 0) == 0) {
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i108 >> 2] | 0) + 4 >> 2] & 127](i112);
         break;
        } else {
         HEAP32[i111 >> 2] = i110;
         break;
        }
       }
      } while (0);
      i112 = i107 + 80 | 0;
      L232 : do {
       if ((i112 | 0) == (i68 | 0)) {
        i127 = i68;
       } else {
        i108 = i112;
        while (1) {
         i113 = i108 | 0;
         i110 = HEAP32[i113 >> 2] | 0;
         i111 = HEAP32[i113 + 4 >> 2] | 0;
         if (!((i110 | 0) == (-1 | 0) & (i111 | 0) == (-1 | 0) | (i110 | 0) == 0 & (i111 | 0) == 0)) {
          i127 = i108;
          break L232;
         }
         i111 = i108 + 80 | 0;
         if ((i111 | 0) == (i68 | 0)) {
          i127 = i68;
          break;
         } else {
          i108 = i111;
         }
        }
       }
      } while (0);
      if ((i127 | 0) == ((HEAP32[i58 >> 2] | 0) + ((HEAP32[i62 >> 2] | 0) * 80 & -1) | 0)) {
       break;
      } else {
       i107 = i127;
      }
     }
    }
   } while (0);
   __ZN9Inspector15InspectorObject6createEv(i19);
   i58 = HEAP32[i19 >> 2] | 0;
   i68 = i58 | 0;
   HEAP32[i18 >> 2] = H_BASE + 368;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i17, i18);
   __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i16, i52 | 0);
   i59 = i15 | 0;
   i67 = i16 | 0;
   i61 = HEAP32[i67 >> 2] | 0;
   HEAP32[i67 >> 2] = 0;
   HEAP32[i59 >> 2] = i61;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i68, i17, i15);
   i61 = HEAP32[i59 >> 2] | 0;
   do {
    if ((i61 | 0) != 0) {
     i59 = i61 + 4 | 0;
     i107 = i59 | 0;
     i87 = (HEAP32[i107 >> 2] | 0) - 1 | 0;
     if ((i87 | 0) != 0) {
      HEAP32[i107 >> 2] = i87;
      break;
     }
     i87 = i59 - 4 | 0;
     if ((i87 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i87 >> 2] | 0) + 4 >> 2] & 127](i87);
    }
   } while (0);
   i61 = HEAP32[i67 >> 2] | 0;
   do {
    if ((i61 | 0) != 0) {
     i87 = i61 + 4 | 0;
     i59 = i87 | 0;
     i107 = (HEAP32[i59 >> 2] | 0) - 1 | 0;
     if ((i107 | 0) != 0) {
      HEAP32[i59 >> 2] = i107;
      break;
     }
     i107 = i87 - 4 | 0;
     if ((i107 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i107 >> 2] | 0) + 4 >> 2] & 127](i107);
    }
   } while (0);
   i61 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i61 | 0) != 0) {
     i67 = i61 | 0;
     i107 = (HEAP32[i67 >> 2] | 0) - 2 | 0;
     if ((i107 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i61);
      break;
     } else {
      HEAP32[i67 >> 2] = i107;
      break;
     }
    }
   } while (0);
   i61 = HEAP32[i60 >> 2] | 0;
   HEAP32[i14 >> 2] = H_BASE + 376;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i13, i14);
   __ZN9Inspector19InspectorBasicValue6createEd(i12, +(i61 | 0));
   i61 = i11 | 0;
   i107 = i12 | 0;
   i67 = HEAP32[i107 >> 2] | 0;
   HEAP32[i107 >> 2] = 0;
   HEAP32[i61 >> 2] = i67;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i68, i13, i11);
   i67 = HEAP32[i61 >> 2] | 0;
   do {
    if ((i67 | 0) != 0) {
     i61 = i67 + 4 | 0;
     i87 = i61 | 0;
     i59 = (HEAP32[i87 >> 2] | 0) - 1 | 0;
     if ((i59 | 0) != 0) {
      HEAP32[i87 >> 2] = i59;
      break;
     }
     i59 = i61 - 4 | 0;
     if ((i59 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i59 >> 2] | 0) + 4 >> 2] & 127](i59);
    }
   } while (0);
   i67 = HEAP32[i107 >> 2] | 0;
   do {
    if ((i67 | 0) != 0) {
     i59 = i67 + 4 | 0;
     i61 = i59 | 0;
     i87 = (HEAP32[i61 >> 2] | 0) - 1 | 0;
     if ((i87 | 0) != 0) {
      HEAP32[i61 >> 2] = i87;
      break;
     }
     i87 = i59 - 4 | 0;
     if ((i87 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i87 >> 2] | 0) + 4 >> 2] & 127](i87);
    }
   } while (0);
   i67 = HEAP32[i13 >> 2] | 0;
   do {
    if ((i67 | 0) != 0) {
     i107 = i67 | 0;
     i87 = (HEAP32[i107 >> 2] | 0) - 2 | 0;
     if ((i87 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i67);
      break;
     } else {
      HEAP32[i107 >> 2] = i87;
      break;
     }
    }
   } while (0);
   __ZN3WTF6String6numberEy(i55, HEAP32[i60 >> 2] | 0, HEAP32[i60 + 4 >> 2] | 0);
   HEAP32[i10 >> 2] = H_BASE + 392;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i9, i10);
   __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i8, i55);
   i67 = i7 | 0;
   i87 = i8 | 0;
   i107 = HEAP32[i87 >> 2] | 0;
   HEAP32[i87 >> 2] = 0;
   HEAP32[i67 >> 2] = i107;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i68, i9, i7);
   i107 = HEAP32[i67 >> 2] | 0;
   do {
    if ((i107 | 0) != 0) {
     i67 = i107 + 4 | 0;
     i59 = i67 | 0;
     i61 = (HEAP32[i59 >> 2] | 0) - 1 | 0;
     if ((i61 | 0) != 0) {
      HEAP32[i59 >> 2] = i61;
      break;
     }
     i61 = i67 - 4 | 0;
     if ((i61 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i61 >> 2] | 0) + 4 >> 2] & 127](i61);
    }
   } while (0);
   i107 = HEAP32[i87 >> 2] | 0;
   do {
    if ((i107 | 0) != 0) {
     i60 = i107 + 4 | 0;
     i61 = i60 | 0;
     i67 = (HEAP32[i61 >> 2] | 0) - 1 | 0;
     if ((i67 | 0) != 0) {
      HEAP32[i61 >> 2] = i67;
      break;
     }
     i67 = i60 - 4 | 0;
     if ((i67 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i67 >> 2] | 0) + 4 >> 2] & 127](i67);
    }
   } while (0);
   i107 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i107 | 0) != 0) {
     i87 = i107 | 0;
     i67 = (HEAP32[i87 >> 2] | 0) - 2 | 0;
     if ((i67 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i107);
      break;
     } else {
      HEAP32[i87 >> 2] = i67;
      break;
     }
    }
   } while (0);
   i107 = (i63 | 0) == 0;
   if (!i107) {
    i67 = i63 + 4 | 0;
    HEAP32[i67 >> 2] = (HEAP32[i67 >> 2] | 0) + 1;
   }
   HEAP32[i5 >> 2] = H_BASE + 400;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i4, i5);
   i67 = i6 | 0;
   i87 = i63;
   HEAP32[i67 >> 2] = i87;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i68, i4, i6);
   i60 = HEAP32[i67 >> 2] | 0;
   do {
    if ((i60 | 0) != 0) {
     i67 = i60 + 4 | 0;
     i61 = i67 | 0;
     i59 = (HEAP32[i61 >> 2] | 0) - 1 | 0;
     if ((i59 | 0) != 0) {
      HEAP32[i61 >> 2] = i59;
      break;
     }
     i59 = i67 - 4 | 0;
     if ((i59 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i59 >> 2] | 0) + 4 >> 2] & 127](i59);
    }
   } while (0);
   i60 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i60 | 0) != 0) {
     i68 = i60 | 0;
     i59 = (HEAP32[i68 >> 2] | 0) - 2 | 0;
     if ((i59 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i60);
      break;
     } else {
      HEAP32[i68 >> 2] = i59;
      break;
     }
    }
   } while (0);
   i60 = i58;
   i59 = (i58 | 0) == 0;
   if (!i59) {
    i68 = i58 + 4 | 0;
    HEAP32[i68 >> 2] = (HEAP32[i68 >> 2] | 0) + 1;
   }
   i68 = HEAP32[i55 >> 2] | 0;
   do {
    if ((i68 | 0) != 0) {
     i67 = i68 | 0;
     i61 = (HEAP32[i67 >> 2] | 0) - 2 | 0;
     if ((i61 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i68);
      break;
     } else {
      HEAP32[i67 >> 2] = i61;
      break;
     }
    }
   } while (0);
   if (i59) {
    i68 = HEAP32[i1 + 12 >> 2] | 0;
    i61 = i56 | 0;
    HEAP32[i61 >> 2] = i60;
    i128 = i68;
    i129 = i61;
   } else {
    i61 = i58 + 4 | 0;
    i68 = i61 | 0;
    i67 = (HEAP32[i68 >> 2] | 0) - 1 | 0;
    if ((i67 | 0) == 0) {
     i90 = i61 - 4 | 0;
     if ((i90 | 0) != 0) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i90 >> 2] | 0) + 4 >> 2] & 127](i90);
     }
     i90 = HEAP32[i1 + 12 >> 2] | 0;
     i61 = i56 | 0;
     HEAP32[i61 >> 2] = i60;
     i130 = i90;
     i131 = i61;
    } else {
     HEAP32[i68 >> 2] = i67;
     i67 = HEAP32[i1 + 12 >> 2] | 0;
     i68 = i56 | 0;
     HEAP32[i68 >> 2] = i60;
     i130 = i67;
     i131 = i68;
    }
    i68 = i58 + 4 | 0;
    HEAP32[i68 >> 2] = (HEAP32[i68 >> 2] | 0) + 1;
    i128 = i130;
    i129 = i131;
   }
   __ZN9Inspector42InspectorIndexedDBBackendDispatcherHandler23RequestDatabaseCallback11sendSuccessEN3WTF10PassRefPtrINS_11TypeBuilder9IndexedDB24DatabaseWithObjectStoresEEE(i128, i56);
   i68 = HEAP32[i129 >> 2] | 0;
   do {
    if ((i68 | 0) != 0) {
     i67 = i68 + 4 | 0;
     i61 = i67 | 0;
     i90 = (HEAP32[i61 >> 2] | 0) - 1 | 0;
     if ((i90 | 0) != 0) {
      HEAP32[i61 >> 2] = i90;
      break;
     }
     i90 = i67 - 4 | 0;
     if ((i90 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i90 >> 2] | 0) + 4 >> 2] & 127](i90);
    }
   } while (0);
   do {
    if (!i59) {
     i68 = i58 + 4 | 0;
     i60 = i68 | 0;
     i90 = (HEAP32[i60 >> 2] | 0) - 1 | 0;
     if ((i90 | 0) != 0) {
      HEAP32[i60 >> 2] = i90;
      break;
     }
     i90 = i68 - 4 | 0;
     if ((i90 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i90 >> 2] | 0) + 4 >> 2] & 127](i90);
    }
   } while (0);
   do {
    if (!i107) {
     i58 = i63 + 4 | 0;
     i59 = (HEAP32[i58 >> 2] | 0) - 1 | 0;
     if ((i59 | 0) == 0) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i63 >> 2] | 0) + 4 >> 2] & 127](i87);
      break;
     } else {
      HEAP32[i58 >> 2] = i59;
      break;
     }
    }
   } while (0);
   i87 = HEAP32[i52 + 32 >> 2] | 0;
   if ((i87 | 0) != 0) {
    i63 = HEAP32[i62 >> 2] | 0;
    if ((i63 | 0) > 0) {
     i107 = 0;
     while (1) {
      i59 = i87 + (i107 * 80 & -1) | 0;
      if (!((HEAP32[i59 >> 2] | 0) == (-1 | 0) & (HEAP32[i59 + 4 >> 2] | 0) == (-1 | 0))) {
       __ZN7WebCore22IDBObjectStoreMetadataD1Ev(i87 + (i107 * 80 & -1) + 8 | 0);
      }
      i107 = i107 + 1 | 0;
      if ((i107 | 0) >= (i63 | 0)) {
       break;
      }
     }
    }
    __ZN3WTF8fastFreeEPv(i87);
   }
   i63 = HEAP32[i57 >> 2] | 0;
   if ((i63 | 0) == 0) {
    break;
   }
   i107 = i63 | 0;
   i62 = (HEAP32[i107 >> 2] | 0) - 2 | 0;
   if ((i62 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i63);
    break;
   } else {
    HEAP32[i107 >> 2] = i62;
    break;
   }
  }
 } while (0);
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i52 = i2 + 36 | 0;
 i2 = i52 | 0;
 i129 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i129 | 0) != 0) {
  HEAP32[i2 >> 2] = i129;
  STACKTOP = i3;
  return;
 }
 i129 = i52 - 36 | 0;
 if ((i129 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i129 >> 2] | 0) + 44 >> 2] & 127](i129);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore12_GLOBAL__N_118OpenCursorCallback11handleEventEPNS_22ScriptExecutionContextEPNS_5EventE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 224 | 0;
 i4 = i2 | 0;
 i5 = i2 + 8 | 0;
 i6 = i2 + 16 | 0;
 i7 = i2 + 24 | 0;
 i8 = i2 + 32 | 0;
 i9 = i2 + 40 | 0;
 i10 = i2 + 48 | 0;
 i11 = i2 + 56 | 0;
 i12 = i2 + 64 | 0;
 i13 = i2 + 72 | 0;
 i14 = i2 + 80 | 0;
 i15 = i2 + 88 | 0;
 i16 = i2 + 96 | 0;
 i17 = i2 + 104 | 0;
 i18 = i2 + 112 | 0;
 i19 = i2 + 120 | 0;
 i20 = i2 + 128 | 0;
 i21 = i2 + 136 | 0;
 i22 = i2 + 144 | 0;
 i23 = i2 + 152 | 0;
 i24 = i2 + 160 | 0;
 i25 = i2 + 168 | 0;
 i26 = i2 + 176 | 0;
 i27 = i2 + 184 | 0;
 i28 = i2 + 192 | 0;
 i29 = i2 + 200 | 0;
 i30 = i2 + 208 | 0;
 i31 = i2 + 216 | 0;
 i32 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
 if ((HEAP32[i3 + 12 >> 2] | 0) != (HEAP32[i32 + 648 >> 2] | 0)) {
  i32 = HEAP32[i1 + 36 >> 2] | 0;
  __ZN3WTF6StringC1EPKc(i17, H_BASE + 96 | 0);
  __ZN9Inspector26InspectorBackendDispatcher12CallbackBase11sendFailureERKN3WTF6StringE(i32, i17);
  i32 = HEAP32[i17 >> 2] | 0;
  if ((i32 | 0) == 0) {
   STACKTOP = i2;
   return;
  }
  i17 = i32 | 0;
  i33 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
  if ((i33 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i32);
   STACKTOP = i2;
   return;
  } else {
   HEAP32[i17 >> 2] = i33;
   STACKTOP = i2;
   return;
  }
 }
 i33 = HEAP32[i3 + 32 >> 2] | 0;
 if ((i33 | 0) == 0) {
  i34 = 0;
 } else {
  i34 = i33 - 12 | 0;
 }
 HEAP32[i18 >> 2] = 0;
 __ZNK7WebCore10IDBRequest6resultERi(i19, i34, i18);
 i34 = i19 | 0;
 i19 = HEAP32[i34 >> 2] | 0;
 HEAP32[i34 >> 2] = 0;
 do {
  if ((HEAP32[i18 >> 2] | 0) == 0) {
   i34 = HEAP32[i19 + 8 >> 2] | 0;
   if ((i34 | 0) == 4) {
    __ZN7WebCore6IDBAny18idbCursorWithValueEv(i22, i19);
    i33 = i22 | 0;
    i3 = HEAP32[i33 >> 2] | 0;
    HEAP32[i33 >> 2] = 0;
    i33 = i1 + 40 | 0;
    i17 = HEAP32[i33 >> 2] | 0;
    do {
     if ((i17 | 0) == 0) {
      i32 = i1 + 48 | 0;
      if ((HEAP32[(HEAP32[i32 >> 2] | 0) + 20 >> 2] | 0) == (HEAP32[i1 + 44 >> 2] | 0)) {
       i35 = i1 + 36 | 0;
       if (!(__ZNK9Inspector26InspectorBackendDispatcher12CallbackBase8isActiveEv(HEAP32[i35 >> 2] | 0) | 0)) {
        break;
       }
       i36 = HEAP32[i35 >> 2] | 0;
       i35 = i15 | 0;
       HEAP32[i35 >> 2] = HEAP32[i32 >> 2];
       HEAP32[i32 >> 2] = 0;
       __ZN9Inspector42InspectorIndexedDBBackendDispatcherHandler19RequestDataCallback11sendSuccessEN3WTF10PassRefPtrINS_11TypeBuilder5ArrayINS4_9IndexedDB9DataEntryEEEEEb(i36, i15, 1);
       i36 = HEAP32[i35 >> 2] | 0;
       if ((i36 | 0) == 0) {
        break;
       }
       i35 = i36 + 4 | 0;
       i36 = i35 | 0;
       i37 = (HEAP32[i36 >> 2] | 0) - 1 | 0;
       if ((i37 | 0) != 0) {
        HEAP32[i36 >> 2] = i37;
        break;
       }
       i37 = i35 - 4 | 0;
       if ((i37 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i37 >> 2] | 0) + 4 >> 2] & 127](i37);
       break;
      }
      i37 = i3 | 0;
      i35 = i14 | 0;
      HEAP32[i35 >> 2] = 0;
      __ZN7WebCore9IDBCursor16continueFunctionEN3WTF10PassRefPtrINS_6IDBKeyEEERi(i37, i14, i18);
      i36 = HEAP32[i35 >> 2] | 0;
      do {
       if ((i36 | 0) != 0) {
        i35 = i36 | 0;
        i38 = (HEAP32[i35 >> 2] | 0) - 1 | 0;
        if ((i38 | 0) == 0) {
         __ZN7WebCore6IDBKeyD1Ev(i36);
         __ZN3WTF8fastFreeEPv(i36);
         break;
        } else {
         HEAP32[i35 >> 2] = i38;
         break;
        }
       }
      } while (0);
      if ((HEAP32[i18 >> 2] | 0) != 0) {
       i36 = HEAP32[i1 + 36 >> 2] | 0;
       __ZN3WTF6StringC1EPKc(i25, H_BASE + 600 | 0);
       __ZN9Inspector26InspectorBackendDispatcher12CallbackBase11sendFailureERKN3WTF6StringE(i36, i25);
       i36 = HEAP32[i25 >> 2] | 0;
       if ((i36 | 0) == 0) {
        break;
       }
       i38 = i36 | 0;
       i35 = (HEAP32[i38 >> 2] | 0) - 2 | 0;
       if ((i35 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i36);
        break;
       } else {
        HEAP32[i38 >> 2] = i35;
        break;
       }
      }
      __ZN9Inspector15InspectorObject6createEv(i13);
      i35 = HEAP32[i13 >> 2] | 0;
      i38 = i1 + 12 | 0;
      i36 = __ZNK7WebCore9IDBCursor3keyEv(i37) | 0;
      i39 = i27 | 0;
      HEAP32[i39 >> 2] = 0;
      __ZNK9Inspector14InjectedScript10wrapObjectERKN10Deprecated11ScriptValueERKN3WTF6StringEb(i26, i38, i36, i27, 0);
      i36 = i35 | 0;
      HEAP32[i11 >> 2] = H_BASE + 568;
      __ZN3WTF6StringC1ENS_12ASCIILiteralE(i10, i11);
      i40 = i12 | 0;
      i41 = i26 | 0;
      i42 = HEAP32[i41 >> 2] | 0;
      HEAP32[i41 >> 2] = 0;
      HEAP32[i40 >> 2] = i42;
      __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i36, i10, i12);
      i42 = HEAP32[i40 >> 2] | 0;
      do {
       if ((i42 | 0) != 0) {
        i40 = i42 + 4 | 0;
        i43 = i40 | 0;
        i44 = (HEAP32[i43 >> 2] | 0) - 1 | 0;
        if ((i44 | 0) != 0) {
         HEAP32[i43 >> 2] = i44;
         break;
        }
        i44 = i40 - 4 | 0;
        if ((i44 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i44 >> 2] | 0) + 4 >> 2] & 127](i44);
       }
      } while (0);
      i42 = HEAP32[i10 >> 2] | 0;
      do {
       if ((i42 | 0) != 0) {
        i44 = i42 | 0;
        i40 = (HEAP32[i44 >> 2] | 0) - 2 | 0;
        if ((i40 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i42);
         break;
        } else {
         HEAP32[i44 >> 2] = i40;
         break;
        }
       }
      } while (0);
      i42 = __ZNK7WebCore9IDBCursor10primaryKeyEv(i37) | 0;
      i40 = i29 | 0;
      HEAP32[i40 >> 2] = 0;
      __ZNK9Inspector14InjectedScript10wrapObjectERKN10Deprecated11ScriptValueERKN3WTF6StringEb(i28, i38, i42, i29, 0);
      HEAP32[i8 >> 2] = H_BASE + 576;
      __ZN3WTF6StringC1ENS_12ASCIILiteralE(i7, i8);
      i42 = i9 | 0;
      i44 = i28 | 0;
      i43 = HEAP32[i44 >> 2] | 0;
      HEAP32[i44 >> 2] = 0;
      HEAP32[i42 >> 2] = i43;
      __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i36, i7, i9);
      i43 = HEAP32[i42 >> 2] | 0;
      do {
       if ((i43 | 0) != 0) {
        i42 = i43 + 4 | 0;
        i45 = i42 | 0;
        i46 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
        if ((i46 | 0) != 0) {
         HEAP32[i45 >> 2] = i46;
         break;
        }
        i46 = i42 - 4 | 0;
        if ((i46 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i46 >> 2] | 0) + 4 >> 2] & 127](i46);
       }
      } while (0);
      i43 = HEAP32[i7 >> 2] | 0;
      do {
       if ((i43 | 0) != 0) {
        i46 = i43 | 0;
        i42 = (HEAP32[i46 >> 2] | 0) - 2 | 0;
        if ((i42 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i43);
         break;
        } else {
         HEAP32[i46 >> 2] = i42;
         break;
        }
       }
      } while (0);
      i43 = __ZNK7WebCore9IDBCursor5valueEv(i37) | 0;
      i42 = i31 | 0;
      HEAP32[i42 >> 2] = 0;
      __ZNK9Inspector14InjectedScript10wrapObjectERKN10Deprecated11ScriptValueERKN3WTF6StringEb(i30, i38, i43, i31, 0);
      HEAP32[i5 >> 2] = H_BASE + 592;
      __ZN3WTF6StringC1ENS_12ASCIILiteralE(i4, i5);
      i43 = i6 | 0;
      i46 = i30 | 0;
      i45 = HEAP32[i46 >> 2] | 0;
      HEAP32[i46 >> 2] = 0;
      HEAP32[i43 >> 2] = i45;
      __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i36, i4, i6);
      i45 = HEAP32[i43 >> 2] | 0;
      do {
       if ((i45 | 0) != 0) {
        i43 = i45 + 4 | 0;
        i47 = i43 | 0;
        i48 = (HEAP32[i47 >> 2] | 0) - 1 | 0;
        if ((i48 | 0) != 0) {
         HEAP32[i47 >> 2] = i48;
         break;
        }
        i48 = i43 - 4 | 0;
        if ((i48 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i48 >> 2] | 0) + 4 >> 2] & 127](i48);
       }
      } while (0);
      i45 = HEAP32[i4 >> 2] | 0;
      do {
       if ((i45 | 0) != 0) {
        i36 = i45 | 0;
        i38 = (HEAP32[i36 >> 2] | 0) - 2 | 0;
        if ((i38 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i45);
         break;
        } else {
         HEAP32[i36 >> 2] = i38;
         break;
        }
       }
      } while (0);
      i45 = (i35 | 0) == 0;
      if (!i45) {
       i38 = i35 + 4 | 0;
       HEAP32[i38 >> 2] = (HEAP32[i38 >> 2] | 0) + 1;
      }
      i38 = HEAP32[i46 >> 2] | 0;
      do {
       if ((i38 | 0) != 0) {
        i36 = i38 + 4 | 0;
        i37 = i36 | 0;
        i48 = (HEAP32[i37 >> 2] | 0) - 1 | 0;
        if ((i48 | 0) != 0) {
         HEAP32[i37 >> 2] = i48;
         break;
        }
        i48 = i36 - 4 | 0;
        if ((i48 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i48 >> 2] | 0) + 4 >> 2] & 127](i48);
       }
      } while (0);
      i38 = HEAP32[i42 >> 2] | 0;
      do {
       if ((i38 | 0) != 0) {
        i46 = i38 | 0;
        i48 = (HEAP32[i46 >> 2] | 0) - 2 | 0;
        if ((i48 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i38);
         break;
        } else {
         HEAP32[i46 >> 2] = i48;
         break;
        }
       }
      } while (0);
      i38 = HEAP32[i44 >> 2] | 0;
      do {
       if ((i38 | 0) != 0) {
        i42 = i38 + 4 | 0;
        i48 = i42 | 0;
        i46 = (HEAP32[i48 >> 2] | 0) - 1 | 0;
        if ((i46 | 0) != 0) {
         HEAP32[i48 >> 2] = i46;
         break;
        }
        i46 = i42 - 4 | 0;
        if ((i46 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i46 >> 2] | 0) + 4 >> 2] & 127](i46);
       }
      } while (0);
      i38 = HEAP32[i40 >> 2] | 0;
      do {
       if ((i38 | 0) != 0) {
        i44 = i38 | 0;
        i46 = (HEAP32[i44 >> 2] | 0) - 2 | 0;
        if ((i46 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i38);
         break;
        } else {
         HEAP32[i44 >> 2] = i46;
         break;
        }
       }
      } while (0);
      i38 = HEAP32[i41 >> 2] | 0;
      do {
       if ((i38 | 0) != 0) {
        i40 = i38 + 4 | 0;
        i46 = i40 | 0;
        i44 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
        if ((i44 | 0) != 0) {
         HEAP32[i46 >> 2] = i44;
         break;
        }
        i44 = i40 - 4 | 0;
        if ((i44 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i44 >> 2] | 0) + 4 >> 2] & 127](i44);
       }
      } while (0);
      i38 = HEAP32[i39 >> 2] | 0;
      do {
       if ((i38 | 0) != 0) {
        i41 = i38 | 0;
        i44 = (HEAP32[i41 >> 2] | 0) - 2 | 0;
        if ((i44 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i38);
         break;
        } else {
         HEAP32[i41 >> 2] = i44;
         break;
        }
       }
      } while (0);
      if (i45) {
       i49 = HEAP32[i32 >> 2] | 0;
      } else {
       i38 = i35 + 4 | 0;
       i39 = i38 | 0;
       i44 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
       if ((i44 | 0) == 0) {
        i41 = i38 - 4 | 0;
        if ((i41 | 0) != 0) {
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i41 >> 2] | 0) + 4 >> 2] & 127](i41);
        }
       } else {
        HEAP32[i39 >> 2] = i44;
       }
       i44 = HEAP32[i32 >> 2] | 0;
       i39 = i35 + 4 | 0;
       HEAP32[i39 >> 2] = (HEAP32[i39 >> 2] | 0) + 1;
       i49 = i44;
      }
      i44 = i35 | 0;
      i39 = i49 + 12 | 0;
      i41 = i49 + 20 | 0;
      i38 = HEAP32[i41 >> 2] | 0;
      if ((i38 | 0) == (HEAP32[i49 + 16 >> 2] | 0)) {
       __ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i39, i38 + 1 | 0);
       HEAP32[(HEAP32[i39 >> 2] | 0) + (HEAP32[i41 >> 2] << 2) >> 2] = i44;
      } else {
       HEAP32[(HEAP32[i39 >> 2] | 0) + (i38 << 2) >> 2] = i44;
      }
      HEAP32[i41 >> 2] = (HEAP32[i41 >> 2] | 0) + 1;
      if (i45) {
       break;
      }
      i41 = i35 + 4 | 0;
      i44 = i41 | 0;
      i38 = (HEAP32[i44 >> 2] | 0) - 1 | 0;
      if ((i38 | 0) != 0) {
       HEAP32[i44 >> 2] = i38;
       break;
      }
      i38 = i41 - 4 | 0;
      if ((i38 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i38 >> 2] | 0) + 4 >> 2] & 127](i38);
     } else {
      HEAP32[i23 >> 2] = 0;
      __ZN7WebCore9IDBCursor7advanceEmRi(i3 | 0, i17, i23);
      do {
       if ((HEAP32[i23 >> 2] | 0) != 0) {
        i38 = HEAP32[i1 + 36 >> 2] | 0;
        __ZN3WTF6StringC1EPKc(i24, H_BASE + 632 | 0);
        __ZN9Inspector26InspectorBackendDispatcher12CallbackBase11sendFailureERKN3WTF6StringE(i38, i24);
        i38 = HEAP32[i24 >> 2] | 0;
        if ((i38 | 0) == 0) {
         break;
        }
        i41 = i38 | 0;
        i44 = (HEAP32[i41 >> 2] | 0) - 2 | 0;
        if ((i44 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i38);
         break;
        } else {
         HEAP32[i41 >> 2] = i44;
         break;
        }
       }
      } while (0);
      HEAP32[i33 >> 2] = 0;
     }
    } while (0);
    if ((i3 | 0) == 0) {
     break;
    }
    i33 = i3 + 8 | 0;
    i17 = i33 | 0;
    i35 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
    if ((i35 | 0) != 0) {
     HEAP32[i17 >> 2] = i35;
     break;
    }
    i35 = i33 - 8 | 0;
    if ((i35 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i35 >> 2] | 0) + 4 >> 2] & 127](i35);
    break;
   } else if ((i34 | 0) == 10) {
    i35 = i1 + 36 | 0;
    if (!(__ZNK9Inspector26InspectorBackendDispatcher12CallbackBase8isActiveEv(HEAP32[i35 >> 2] | 0) | 0)) {
     break;
    }
    i33 = HEAP32[i35 >> 2] | 0;
    i35 = i1 + 48 | 0;
    i17 = i16 | 0;
    HEAP32[i17 >> 2] = HEAP32[i35 >> 2];
    HEAP32[i35 >> 2] = 0;
    __ZN9Inspector42InspectorIndexedDBBackendDispatcherHandler19RequestDataCallback11sendSuccessEN3WTF10PassRefPtrINS_11TypeBuilder5ArrayINS4_9IndexedDB9DataEntryEEEEEb(i33, i16, 0);
    i33 = HEAP32[i17 >> 2] | 0;
    if ((i33 | 0) == 0) {
     break;
    }
    i17 = i33 + 4 | 0;
    i33 = i17 | 0;
    i35 = (HEAP32[i33 >> 2] | 0) - 1 | 0;
    if ((i35 | 0) != 0) {
     HEAP32[i33 >> 2] = i35;
     break;
    }
    i35 = i17 - 4 | 0;
    if ((i35 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i35 >> 2] | 0) + 4 >> 2] & 127](i35);
    break;
   } else {
    i35 = HEAP32[i1 + 36 >> 2] | 0;
    __ZN3WTF6StringC1EPKc(i21, H_BASE + 8 | 0);
    __ZN9Inspector26InspectorBackendDispatcher12CallbackBase11sendFailureERKN3WTF6StringE(i35, i21);
    i35 = HEAP32[i21 >> 2] | 0;
    if ((i35 | 0) == 0) {
     break;
    }
    i17 = i35 | 0;
    i33 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
    if ((i33 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i35);
     break;
    } else {
     HEAP32[i17 >> 2] = i33;
     break;
    }
   }
  } else {
   i33 = HEAP32[i1 + 36 >> 2] | 0;
   __ZN3WTF6StringC1EPKc(i20, H_BASE + 32 | 0);
   __ZN9Inspector26InspectorBackendDispatcher12CallbackBase11sendFailureERKN3WTF6StringE(i33, i20);
   i33 = HEAP32[i20 >> 2] | 0;
   if ((i33 | 0) == 0) {
    break;
   }
   i17 = i33 | 0;
   i35 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i35 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i33);
    break;
   } else {
    HEAP32[i17 >> 2] = i35;
    break;
   }
  }
 } while (0);
 if ((i19 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i20 = i19 + 4 | 0;
 i19 = i20 | 0;
 i1 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i19 >> 2] = i1;
  STACKTOP = i2;
  return;
 }
 i1 = i20 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore6IDBAnyD1Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore12_GLOBAL__N_1L25idbKeyFromInspectorObjectEPN9Inspector15InspectorObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, d29 = +0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 152 | 0;
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
 i20 = i3 + 128 | 0;
 i21 = i3 + 136 | 0;
 i22 = i3 + 144 | 0;
 i23 = i6 | 0;
 HEAP32[i23 >> 2] = 0;
 i24 = i2 | 0;
 __ZN3WTF6StringC1EPKc(i7, H_BASE + 512 | 0);
 i2 = __ZNK9Inspector19InspectorObjectBase9getStringERKN3WTF6StringEPS2_(i24, i7, i6) | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = i6 | 0;
   i25 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i25 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i7 >> 2] = i25;
    break;
   }
  }
 } while (0);
 L7 : do {
  if (i2) {
   if (!(HEAP8[H_BASE + 1544 | 0] | 0)) {
    i6 = __Znwj(4) | 0;
    HEAP32[i8 >> 2] = H_BASE + 472;
    __ZN3WTF6StringC1ENS_12ASCIILiteralE(i6, i8);
    HEAP32[H_BASE + 1576 >> 2] = i6;
    HEAP8[H_BASE + 1544 | 0] = 1;
   }
   if (!(HEAP8[H_BASE + 1536 | 0] | 0)) {
    i6 = __Znwj(4) | 0;
    HEAP32[i9 >> 2] = H_BASE + 464;
    __ZN3WTF6StringC1ENS_12ASCIILiteralE(i6, i9);
    HEAP32[H_BASE + 1568 >> 2] = i6;
    HEAP8[H_BASE + 1536 | 0] = 1;
   }
   if (!(HEAP8[H_BASE + 1560 | 0] | 0)) {
    i6 = __Znwj(4) | 0;
    HEAP32[i10 >> 2] = H_BASE + 456;
    __ZN3WTF6StringC1ENS_12ASCIILiteralE(i6, i10);
    HEAP32[H_BASE + 1592 >> 2] = i6;
    HEAP8[H_BASE + 1560 | 0] = 1;
   }
   if (!(HEAP8[H_BASE + 1552 | 0] | 0)) {
    i6 = __Znwj(4) | 0;
    HEAP32[i11 >> 2] = H_BASE + 448;
    __ZN3WTF6StringC1ENS_12ASCIILiteralE(i6, i11);
    HEAP32[H_BASE + 1584 >> 2] = i6;
    HEAP8[H_BASE + 1552 | 0] = 1;
   }
   do {
    if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i23 >> 2] | 0, HEAP32[HEAP32[H_BASE + 1576 >> 2] >> 2] | 0) | 0) {
     __ZN3WTF6StringC1EPKc(i13, H_BASE + 472 | 0);
     __ZNK9Inspector19InspectorObjectBase3getERKN3WTF6StringE(i5, i24, i13);
     i6 = i5 | 0;
     i25 = HEAP32[i6 >> 2] | 0;
     HEAP32[i6 >> 2] = 0;
     do {
      if ((i25 | 0) == 0) {
       i26 = 0;
      } else {
       i6 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i25 >> 2] | 0) + 12 >> 2] & 31](i25, i12) | 0;
       i7 = i25 + 4 | 0;
       i27 = i7 | 0;
       i28 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
       if ((i28 | 0) != 0) {
        HEAP32[i27 >> 2] = i28;
        i26 = i6;
        break;
       }
       i28 = i7 - 4 | 0;
       if ((i28 | 0) == 0) {
        i26 = i6;
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i28 >> 2] | 0) + 4 >> 2] & 127](i28);
       i26 = i6;
      }
     } while (0);
     i25 = HEAP32[i13 >> 2] | 0;
     do {
      if ((i25 | 0) != 0) {
       i6 = i25 | 0;
       i28 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
       if ((i28 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i25);
        break;
       } else {
        HEAP32[i6 >> 2] = i28;
        break;
       }
      }
     } while (0);
     if (i26) {
      d29 = +HEAPF64[i12 >> 3];
      i25 = __ZN3WTF10fastMallocEj(40) | 0;
      HEAP32[i25 >> 2] = 1;
      HEAP32[i25 + 4 >> 2] = 4;
      _memset(i25 + 8 | 0, 0, 16) | 0;
      HEAPF64[i25 + 24 >> 3] = d29;
      HEAP32[i25 + 32 >> 2] = 24;
      i30 = i25;
      break;
     } else {
      HEAP32[i1 >> 2] = 0;
      i31 = 0;
      break L7;
     }
    } else {
     if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i23 >> 2] | 0, HEAP32[HEAP32[H_BASE + 1568 >> 2] >> 2] | 0) | 0) {
      i25 = i14 | 0;
      HEAP32[i25 >> 2] = 0;
      __ZN3WTF6StringC1EPKc(i15, H_BASE + 464 | 0);
      i28 = __ZNK9Inspector19InspectorObjectBase9getStringERKN3WTF6StringEPS2_(i24, i15, i14) | 0;
      i6 = HEAP32[i15 >> 2] | 0;
      do {
       if ((i6 | 0) != 0) {
        i7 = i6 | 0;
        i27 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
        if ((i27 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i6);
         break;
        } else {
         HEAP32[i7 >> 2] = i27;
         break;
        }
       }
      } while (0);
      if (i28) {
       i6 = __ZN3WTF10fastMallocEj(40) | 0;
       HEAP32[i6 >> 2] = 1;
       HEAP32[i6 + 4 >> 2] = 2;
       HEAP32[i6 + 8 >> 2] = 0;
       HEAP32[i6 + 12 >> 2] = 0;
       HEAP32[i6 + 16 >> 2] = 0;
       i27 = HEAP32[i25 >> 2] | 0;
       HEAP32[i6 + 20 >> 2] = i27;
       if ((i27 | 0) != 0) {
        i7 = i27 | 0;
        HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
       }
       HEAPF64[i6 + 24 >> 3] = +0;
       i7 = HEAP32[i25 >> 2] | 0;
       if ((i7 | 0) == 0) {
        i32 = 16;
       } else {
        i32 = (HEAP32[i7 + 4 >> 2] << 1) + 16 | 0;
       }
       HEAP32[i6 + 32 >> 2] = i32;
       i33 = 0;
       i34 = i6;
      } else {
       HEAP32[i1 >> 2] = 0;
       i33 = 1;
       i34 = 0;
      }
      i6 = HEAP32[i25 >> 2] | 0;
      do {
       if ((i6 | 0) != 0) {
        i7 = i6 | 0;
        i27 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
        if ((i27 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i6);
         break;
        } else {
         HEAP32[i7 >> 2] = i27;
         break;
        }
       }
      } while (0);
      if ((i33 | 0) == 0) {
       i30 = i34;
       break;
      } else {
       i31 = i34;
       break L7;
      }
     }
     if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i23 >> 2] | 0, HEAP32[HEAP32[H_BASE + 1592 >> 2] >> 2] | 0) | 0) {
      __ZN3WTF6StringC1EPKc(i17, H_BASE + 456 | 0);
      __ZNK9Inspector19InspectorObjectBase3getERKN3WTF6StringE(i4, i24, i17);
      i6 = i4 | 0;
      i25 = HEAP32[i6 >> 2] | 0;
      HEAP32[i6 >> 2] = 0;
      do {
       if ((i25 | 0) == 0) {
        i35 = 0;
       } else {
        i6 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i25 >> 2] | 0) + 12 >> 2] & 31](i25, i16) | 0;
        i28 = i25 + 4 | 0;
        i27 = i28 | 0;
        i7 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
        if ((i7 | 0) != 0) {
         HEAP32[i27 >> 2] = i7;
         i35 = i6;
         break;
        }
        i7 = i28 - 4 | 0;
        if ((i7 | 0) == 0) {
         i35 = i6;
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 127](i7);
        i35 = i6;
       }
      } while (0);
      i25 = HEAP32[i17 >> 2] | 0;
      do {
       if ((i25 | 0) != 0) {
        i6 = i25 | 0;
        i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
        if ((i7 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i25);
         break;
        } else {
         HEAP32[i6 >> 2] = i7;
         break;
        }
       }
      } while (0);
      if (i35) {
       d29 = +HEAPF64[i16 >> 3];
       i25 = __ZN3WTF10fastMallocEj(40) | 0;
       HEAP32[i25 >> 2] = 1;
       HEAP32[i25 + 4 >> 2] = 3;
       _memset(i25 + 8 | 0, 0, 16) | 0;
       HEAPF64[i25 + 24 >> 3] = d29;
       HEAP32[i25 + 32 >> 2] = 24;
       i30 = i25;
       break;
      } else {
       HEAP32[i1 >> 2] = 0;
       i31 = 0;
       break L7;
      }
     }
     if (!(__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i23 >> 2] | 0, HEAP32[HEAP32[H_BASE + 1584 >> 2] >> 2] | 0) | 0)) {
      HEAP32[i1 >> 2] = 0;
      i31 = 0;
      break L7;
     }
     __ZN3WTF6StringC1EPKc(i19, H_BASE + 448 | 0);
     __ZNK9Inspector19InspectorObjectBase8getArrayERKN3WTF6StringE(i18, i24, i19);
     i25 = i18 | 0;
     i7 = HEAP32[i25 >> 2] | 0;
     HEAP32[i25 >> 2] = 0;
     i25 = HEAP32[i19 >> 2] | 0;
     do {
      if ((i25 | 0) != 0) {
       i6 = i25 | 0;
       i28 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
       if ((i28 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i25);
        break;
       } else {
        HEAP32[i6 >> 2] = i28;
        break;
       }
      }
     } while (0);
     i25 = i7 + 20 | 0;
     i28 = i7 | 0;
     i6 = i20 | 0;
     i27 = i21 | 0;
     i36 = i22 | 0;
     i37 = i1 | 0;
     i38 = 0;
     i39 = 0;
     i40 = 0;
     i41 = 0;
     L94 : while (1) {
      if (i38 >>> 0 >= (HEAP32[i25 >> 2] | 0) >>> 0) {
       i42 = 90;
       break;
      }
      __ZN9Inspector18InspectorArrayBase3getEj(i20, i28, i38);
      i43 = HEAP32[i6 >> 2] | 0;
      HEAP32[i6 >> 2] = 0;
      HEAP32[i27 >> 2] = 0;
      do {
       if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i43 >> 2] | 0) + 40 >> 2] & 31](i43, i21) | 0) {
        __ZN7WebCore12_GLOBAL__N_1L25idbKeyFromInspectorObjectEPN9Inspector15InspectorObjectE(i22, HEAP32[i27 >> 2] | 0);
        if ((i41 | 0) == (i40 | 0)) {
         i44 = i41 + 1 | 0;
         i45 = i44 + (i41 >>> 2) | 0;
         i46 = i45 >>> 0 > 16 >>> 0 ? i45 : 16;
         i45 = i46 >>> 0 > i44 >>> 0 ? i46 : i44;
         do {
          if (i41 >>> 0 < i45 >>> 0) {
           if (i45 >>> 0 > 1073741823 >>> 0) {
            i42 = 71;
            break L94;
           }
           i46 = __ZN3WTF18fastMallocGoodSizeEj(i45 << 2) | 0;
           i47 = i46 >>> 2;
           i48 = __ZN3WTF10fastMallocEj(i46) | 0;
           i46 = i48;
           i49 = i39;
           _memcpy(i48 | 0, i49 | 0, i41 << 2) | 0;
           if ((i39 | 0) == 0) {
            i50 = i46;
            i51 = i47;
            break;
           }
           i48 = (i46 | 0) == (i39 | 0);
           __ZN3WTF8fastFreeEPv(i49);
           i50 = i48 ? 0 : i46;
           i51 = i48 ? 0 : i47;
          } else {
           i50 = i39;
           i51 = i41;
          }
         } while (0);
         i45 = HEAP32[i36 >> 2] | 0;
         HEAP32[i36 >> 2] = 0;
         HEAP32[i50 + (i41 << 2) >> 2] = i45;
         i52 = i50;
         i53 = i51;
         i54 = i44;
        } else {
         i45 = HEAP32[i36 >> 2] | 0;
         HEAP32[i36 >> 2] = 0;
         HEAP32[i39 + (i41 << 2) >> 2] = i45;
         i52 = i39;
         i53 = i40;
         i54 = i41 + 1 | 0;
        }
        i45 = HEAP32[i36 >> 2] | 0;
        if ((i45 | 0) == 0) {
         i55 = 0;
         i56 = i52;
         i57 = i53;
         i58 = i54;
         break;
        }
        i47 = i45 | 0;
        i48 = (HEAP32[i47 >> 2] | 0) - 1 | 0;
        if ((i48 | 0) == 0) {
         __ZN7WebCore6IDBKeyD1Ev(i45);
         __ZN3WTF8fastFreeEPv(i45);
         i55 = 0;
         i56 = i52;
         i57 = i53;
         i58 = i54;
         break;
        } else {
         HEAP32[i47 >> 2] = i48;
         i55 = 0;
         i56 = i52;
         i57 = i53;
         i58 = i54;
         break;
        }
       } else {
        HEAP32[i37 >> 2] = 0;
        i55 = 1;
        i56 = i39;
        i57 = i40;
        i58 = i41;
       }
      } while (0);
      i48 = HEAP32[i27 >> 2] | 0;
      do {
       if ((i48 | 0) != 0) {
        i47 = i48 + 4 | 0;
        i45 = i47 | 0;
        i46 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
        if ((i46 | 0) != 0) {
         HEAP32[i45 >> 2] = i46;
         break;
        }
        i46 = i47 - 4 | 0;
        if ((i46 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i46 >> 2] | 0) + 4 >> 2] & 127](i46);
       }
      } while (0);
      do {
       if ((i43 | 0) != 0) {
        i48 = i43 + 4 | 0;
        i46 = i48 | 0;
        i47 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
        if ((i47 | 0) != 0) {
         HEAP32[i46 >> 2] = i47;
         break;
        }
        i47 = i48 - 4 | 0;
        if ((i47 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i47 >> 2] | 0) + 4 >> 2] & 127](i47);
       }
      } while (0);
      if ((i55 | 0) == 0) {
       i38 = i38 + 1 | 0;
       i39 = i56;
       i40 = i57;
       i41 = i58;
      } else {
       i59 = i55;
       i60 = i56;
       i61 = i58;
       i62 = 0;
       break;
      }
     }
     if ((i42 | 0) == 71) {
      _WTFCrash();
     }
     if ((i42 | 0) == 90) {
      i38 = (i41 | 0) == 0;
      if (i38) {
       i63 = 16;
      } else {
       i27 = 0;
       i37 = 0;
       while (1) {
        i27 = (HEAP32[(HEAP32[i39 + (i37 << 2) >> 2] | 0) + 32 >> 2] | 0) + i27 | 0;
        i37 = i37 + 1 | 0;
        if (i37 >>> 0 >= i41 >>> 0) {
         break;
        }
       }
       i63 = i27 + 16 | 0;
      }
      i37 = __ZN3WTF10fastMallocEj(40) | 0;
      i36 = i37;
      HEAP32[i37 >> 2] = 1;
      HEAP32[i37 + 4 >> 2] = 1;
      i6 = i37 + 8 | 0;
      HEAP32[i6 >> 2] = 0;
      i28 = i37 + 12 | 0;
      HEAP32[i28 >> 2] = 0;
      HEAP32[i37 + 16 >> 2] = i41;
      do {
       if ((i40 | 0) != 0) {
        if (i40 >>> 0 > 1073741823 >>> 0) {
         _WTFCrash();
        }
        i25 = __ZN3WTF18fastMallocGoodSizeEj(i40 << 2) | 0;
        HEAP32[i28 >> 2] = i25 >>> 2;
        i43 = __ZN3WTF10fastMallocEj(i25) | 0;
        i25 = i43;
        HEAP32[i6 >> 2] = i25;
        if ((i43 | 0) == 0) {
         break;
        }
        i43 = i39 + (i41 << 2) | 0;
        if (i38) {
         break;
        } else {
         i64 = i39;
         i65 = i25;
        }
        while (1) {
         i25 = HEAP32[i64 >> 2] | 0;
         HEAP32[i65 >> 2] = i25;
         if ((i25 | 0) != 0) {
          i47 = i25 | 0;
          HEAP32[i47 >> 2] = (HEAP32[i47 >> 2] | 0) + 1;
         }
         i47 = i64 + 4 | 0;
         if ((i47 | 0) == (i43 | 0)) {
          break;
         } else {
          i64 = i47;
          i65 = i65 + 4 | 0;
         }
        }
       }
      } while (0);
      HEAP32[i37 + 20 >> 2] = 0;
      HEAPF64[i37 + 24 >> 3] = +0;
      HEAP32[i37 + 32 >> 2] = i63;
      i59 = 0;
      i60 = i39;
      i61 = i41;
      i62 = i36;
     }
     do {
      if ((i7 | 0) != 0) {
       i38 = i7 + 4 | 0;
       i6 = i38 | 0;
       i28 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
       if ((i28 | 0) != 0) {
        HEAP32[i6 >> 2] = i28;
        break;
       }
       i28 = i38 - 4 | 0;
       if ((i28 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i28 >> 2] | 0) + 4 >> 2] & 127](i28);
      }
     } while (0);
     if ((i61 | 0) != 0) {
      i7 = i60 + (i61 << 2) | 0;
      i36 = i60;
      while (1) {
       i41 = HEAP32[i36 >> 2] | 0;
       do {
        if ((i41 | 0) != 0) {
         i39 = i41 | 0;
         i37 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
         if ((i37 | 0) == 0) {
          __ZN7WebCore6IDBKeyD1Ev(i41);
          __ZN3WTF8fastFreeEPv(i41);
          break;
         } else {
          HEAP32[i39 >> 2] = i37;
          break;
         }
        }
       } while (0);
       i36 = i36 + 4 | 0;
       if ((i36 | 0) == (i7 | 0)) {
        break;
       }
      }
     }
     if ((i60 | 0) != 0) {
      __ZN3WTF8fastFreeEPv(i60);
     }
     if ((i59 | 0) == 0) {
      i30 = i62;
     } else {
      i31 = i62;
      break L7;
     }
    }
   } while (0);
   HEAP32[i1 >> 2] = i30;
   i31 = 0;
  } else {
   HEAP32[i1 >> 2] = 0;
   i31 = 0;
  }
 } while (0);
 i1 = HEAP32[i23 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i23 = i1 | 0;
   i30 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
   if ((i30 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i23 >> 2] = i30;
    break;
   }
  }
 } while (0);
 if ((i31 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i1 = i31 | 0;
 i30 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i30 | 0) == 0) {
  __ZN7WebCore6IDBKeyD1Ev(i31);
  __ZN3WTF8fastFreeEPv(i31);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i1 >> 2] = i30;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore12_GLOBAL__N_110DataLoader7executeEN3WTF10PassRefPtrINS_11IDBDatabaseEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 168 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 48 | 0;
 i9 = i3 + 56 | 0;
 i10 = i3 + 64 | 0;
 i11 = i3 + 72 | 0;
 i12 = i3 + 80 | 0;
 i13 = i3 + 88 | 0;
 i14 = i3 + 96 | 0;
 i15 = i3 + 120 | 0;
 i16 = i3 + 128 | 0;
 i17 = i3 + 136 | 0;
 i18 = i3 + 144 | 0;
 i19 = i3 + 152 | 0;
 i20 = i3 + 160 | 0;
 i21 = i2 | 0;
 i2 = HEAP32[i21 >> 2] | 0;
 HEAP32[i21 >> 2] = 0;
 L1 : do {
  if (__ZNK9Inspector26InspectorBackendDispatcher12CallbackBase8isActiveEv(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 15](i1) | 0) | 0) {
   i21 = i1 + 8 | 0;
   i22 = HEAP32[i21 >> 2] | 0;
   i23 = i1 + 40 | 0;
   i24 = __ZN7WebCore14IDBTransaction12modeReadOnlyEv() | 0;
   HEAP32[i10 >> 2] = 0;
   __ZN7WebCore11IDBDatabase11transactionEPNS_22ScriptExecutionContextERKN3WTF6StringES6_Ri(i11, i2, i22, i23, i24, i10);
   i24 = i11 | 0;
   i22 = HEAP32[i24 >> 2] | 0;
   HEAP32[i24 >> 2] = 0;
   i24 = (i22 | 0) == 0;
   do {
    if ((HEAP32[i10 >> 2] | 0) == 0) {
     if (i24) {
      break;
     }
     i25 = i22 + 40 | 0;
     i26 = (HEAP32[i25 >> 2] | 0) + 1 | 0;
     HEAP32[i25 >> 2] = i26;
     i25 = i22 + 40 | 0;
     i27 = i26;
     i28 = i25;
     i29 = i25 | 0;
     i30 = i22;
     i31 = 7;
    } else {
     if (i24) {
      break;
     }
     i25 = i22 + 40 | 0;
     i26 = i25 | 0;
     i27 = HEAP32[i26 >> 2] | 0;
     i28 = i25;
     i29 = i26;
     i30 = 0;
     i31 = 7;
    }
   } while (0);
   do {
    if ((i31 | 0) == 7) {
     i22 = i27 - 1 | 0;
     do {
      if ((i22 | 0) == 0) {
       i24 = i28 - 40 | 0;
       if ((i24 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i24 >> 2] | 0) + 44 >> 2] & 127](i24);
      } else {
       HEAP32[i29 >> 2] = i22;
      }
     } while (0);
     if ((i30 | 0) == 0) {
      break;
     }
     HEAP32[i8 >> 2] = 0;
     __ZN7WebCore14IDBTransaction11objectStoreERKN3WTF6StringERi(i9, i30, i23, i8);
     i22 = i9 | 0;
     i24 = HEAP32[i22 >> 2] | 0;
     HEAP32[i22 >> 2] = 0;
     i22 = (i24 | 0) == 0;
     do {
      if ((HEAP32[i8 >> 2] | 0) == 0) {
       if (i22) {
        i31 = 21;
        break;
       }
       i26 = i24 + 4 | 0;
       HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
       i32 = i24;
       i31 = 20;
      } else {
       if (i22) {
        i31 = 21;
       } else {
        i32 = 0;
        i31 = 20;
       }
      }
     } while (0);
     do {
      if ((i31 | 0) == 20) {
       __ZN3WTF10RefCountedIN7WebCore14IDBObjectStoreEE5derefEv(i24 + 4 | 0);
       if ((i32 | 0) == 0) {
        i31 = 21;
        break;
       }
       i22 = i14 | 0;
       HEAP32[i22 >> 2] = __ZTVN9Inspector18InjectedScriptBaseE + 8;
       i26 = i14 + 4 | 0;
       i25 = HEAP32[i1 + 20 >> 2] | 0;
       HEAP32[i26 >> 2] = i25;
       if ((i25 | 0) != 0) {
        i33 = i25 | 0;
        HEAP32[i33 >> 2] = (HEAP32[i33 >> 2] | 0) + 2;
       }
       i33 = i14 + 8 | 0;
       HEAP32[i33 >> 2] = __ZTVN10Deprecated11ScriptValueE + 8;
       i25 = i14 + 12 | 0;
       __ZN3JSC6StrongINS_7UnknownEEC2ERKS2_(i25, i1 + 28 | 0);
       HEAP32[i33 >> 2] = H_BASE + 1520;
       i33 = i14 + 16 | 0;
       HEAP32[i33 >> 2] = HEAP32[i1 + 32 >> 2];
       i34 = i14 + 20 | 0;
       HEAP32[i34 >> 2] = HEAP32[i1 + 36 >> 2];
       HEAP32[i22 >> 2] = __ZTVN9Inspector14InjectedScriptE + 8;
       i22 = i1 + 12 | 0;
       i35 = HEAP32[i22 >> 2] | 0;
       if ((i35 | 0) != 0) {
        i36 = i35 | 0;
        HEAP32[i36 >> 2] = (HEAP32[i36 >> 2] | 0) + 1;
       }
       i36 = HEAP32[i1 + 52 >> 2] | 0;
       i37 = HEAP32[i1 + 56 >> 2] | 0;
       i38 = __ZN3WTF10fastMallocEj(52) | 0;
       i39 = i7 | 0;
       HEAP32[i39 >> 2] = __ZTVN9Inspector18InjectedScriptBaseE + 8;
       i40 = i7 + 4 | 0;
       i41 = HEAP32[i26 >> 2] | 0;
       HEAP32[i40 >> 2] = i41;
       if ((i41 | 0) != 0) {
        i26 = i41 | 0;
        HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 2;
       }
       i26 = i7 + 8 | 0;
       HEAP32[i26 >> 2] = __ZTVN10Deprecated11ScriptValueE + 8;
       i41 = i7 + 12 | 0;
       __ZN3JSC6StrongINS_7UnknownEEC2ERKS2_(i41, i25);
       HEAP32[i26 >> 2] = H_BASE + 1520;
       i26 = i7 + 16 | 0;
       HEAP32[i26 >> 2] = HEAP32[i33 >> 2];
       i33 = i7 + 20 | 0;
       HEAP32[i33 >> 2] = HEAP32[i34 >> 2];
       HEAP32[i39 >> 2] = __ZTVN9Inspector14InjectedScriptE + 8;
       i39 = i38 + 4 | 0;
       HEAP32[i39 >> 2] = 1;
       HEAP32[i38 + 8 >> 2] = 3;
       HEAP32[i38 >> 2] = H_BASE + 1408;
       i34 = i38 + 12 | 0;
       HEAP32[i34 >> 2] = __ZTVN9Inspector18InjectedScriptBaseE + 8;
       i25 = HEAP32[i40 >> 2] | 0;
       HEAP32[i38 + 16 >> 2] = i25;
       if ((i25 | 0) != 0) {
        i40 = i25 | 0;
        HEAP32[i40 >> 2] = (HEAP32[i40 >> 2] | 0) + 2;
       }
       i40 = i38 + 20 | 0;
       HEAP32[i40 >> 2] = __ZTVN10Deprecated11ScriptValueE + 8;
       __ZN3JSC6StrongINS_7UnknownEEC2ERKS2_(i38 + 24 | 0, i41);
       HEAP32[i40 >> 2] = H_BASE + 1520;
       HEAP32[i38 + 28 >> 2] = HEAP32[i26 >> 2];
       HEAP32[i38 + 32 >> 2] = HEAP32[i33 >> 2];
       HEAP32[i34 >> 2] = __ZTVN9Inspector14InjectedScriptE + 8;
       HEAP32[i38 + 36 >> 2] = i35;
       HEAP32[i38 + 40 >> 2] = i36;
       HEAP32[i38 + 44 >> 2] = i37;
       i37 = i38 + 48 | 0;
       HEAP32[i37 >> 2] = 0;
       i36 = __ZN3WTF10fastMallocEj(24) | 0;
       __ZN9Inspector18InspectorArrayBaseC2Ev(i36);
       HEAP32[i36 >> 2] = H_BASE + 768;
       i35 = HEAP32[i37 >> 2] | 0;
       HEAP32[i37 >> 2] = i36;
       do {
        if ((i35 | 0) != 0) {
         i36 = i35 + 4 | 0;
         i37 = i36 | 0;
         i34 = (HEAP32[i37 >> 2] | 0) - 1 | 0;
         if ((i34 | 0) != 0) {
          HEAP32[i37 >> 2] = i34;
          break;
         }
         i34 = i36 - 4 | 0;
         if ((i34 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i34 >> 2] | 0) + 4 >> 2] & 127](i34);
        }
       } while (0);
       __ZN9Inspector14InjectedScriptD1Ev(i7);
       __ZN9Inspector14InjectedScriptD1Ev(i14);
       HEAP32[i15 >> 2] = 0;
       i35 = i1 + 44 | 0;
       i34 = HEAP32[i35 >> 2] | 0;
       L42 : do {
        if ((i34 | 0) == 0) {
         i31 = 65;
        } else {
         if ((HEAP32[i34 + 4 >> 2] | 0) == 0) {
          i31 = 65;
          break;
         }
         HEAP32[i5 >> 2] = 0;
         __ZN7WebCore14IDBObjectStore5indexERKN3WTF6StringERi(i6, i32, i35, i5);
         i36 = i6 | 0;
         i37 = HEAP32[i36 >> 2] | 0;
         HEAP32[i36 >> 2] = 0;
         i36 = (i37 | 0) == 0;
         do {
          if ((HEAP32[i5 >> 2] | 0) == 0) {
           if (i36) {
            break;
           }
           i33 = i37 + 4 | 0;
           i26 = (HEAP32[i33 >> 2] | 0) + 1 | 0;
           HEAP32[i33 >> 2] = i26;
           i33 = i37 + 4 | 0;
           i42 = i26;
           i43 = i33;
           i44 = i33 | 0;
           i45 = i37;
           i31 = 45;
          } else {
           if (i36) {
            break;
           }
           i33 = i37 + 4 | 0;
           i26 = i33 | 0;
           i42 = HEAP32[i26 >> 2] | 0;
           i43 = i33;
           i44 = i26;
           i45 = 0;
           i31 = 45;
          }
         } while (0);
         do {
          if ((i31 | 0) == 45) {
           i37 = i42 - 1 | 0;
           do {
            if ((i37 | 0) == 0) {
             i36 = i43 - 4 | 0;
             if ((i36 | 0) == 0) {
              break;
             }
             __ZN7WebCore8IDBIndexD1Ev(i36);
             __ZN3WTF8fastFreeEPv(i36);
            } else {
             HEAP32[i44 >> 2] = i37;
            }
           } while (0);
           if ((i45 | 0) == 0) {
            break;
           }
           i37 = HEAP32[i21 >> 2] | 0;
           i36 = HEAP32[i1 + 48 >> 2] | 0;
           if ((i36 | 0) != 0) {
            i26 = i36 + 4 | 0;
            HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
           }
           i26 = i4 | 0;
           HEAP32[i26 >> 2] = i36;
           __ZN7WebCore8IDBIndex10openCursorEPNS_22ScriptExecutionContextEN3WTF10PassRefPtrINS_11IDBKeyRangeEEERKNS3_6StringERi(i17, i45, i37, i4, __ZN7WebCore9IDBCursor13directionNextEv() | 0, i15);
           i37 = HEAP32[i26 >> 2] | 0;
           do {
            if ((i37 | 0) != 0) {
             i26 = i37 + 4 | 0;
             i36 = i26 | 0;
             i33 = (HEAP32[i36 >> 2] | 0) - 1 | 0;
             if ((i33 | 0) != 0) {
              HEAP32[i36 >> 2] = i33;
              break;
             }
             i33 = i26 - 4 | 0;
             if ((i33 | 0) == 0) {
              break;
             }
             __ZN7WebCore11IDBKeyRangeD2Ev(i33);
             __ZN3WTF8fastFreeEPv(i33);
            }
           } while (0);
           i37 = i17 | 0;
           i33 = HEAP32[i37 >> 2] | 0;
           HEAP32[i37 >> 2] = 0;
           i37 = i45 + 4 | 0;
           i26 = i37 | 0;
           i36 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
           if ((i36 | 0) != 0) {
            HEAP32[i26 >> 2] = i36;
            i46 = i33;
            i31 = 72;
            break L42;
           }
           i36 = i37 - 4 | 0;
           if ((i36 | 0) == 0) {
            i46 = i33;
            i31 = 72;
            break L42;
           }
           __ZN7WebCore8IDBIndexD1Ev(i36);
           __ZN3WTF8fastFreeEPv(i36);
           i46 = i33;
           i31 = 72;
           break L42;
          }
         } while (0);
         i33 = HEAP32[i22 >> 2] | 0;
         __ZN3WTF6StringC1EPKc(i16, H_BASE + 72 | 0);
         __ZN9Inspector26InspectorBackendDispatcher12CallbackBase11sendFailureERKN3WTF6StringE(i33, i16);
         i33 = HEAP32[i16 >> 2] | 0;
         if ((i33 | 0) == 0) {
          break;
         }
         i36 = i33 | 0;
         i37 = (HEAP32[i36 >> 2] | 0) - 2 | 0;
         if ((i37 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i33);
          break;
         } else {
          HEAP32[i36 >> 2] = i37;
          break;
         }
        }
       } while (0);
       do {
        if ((i31 | 0) == 65) {
         i22 = HEAP32[i21 >> 2] | 0;
         i35 = i19 | 0;
         i34 = HEAP32[i1 + 48 >> 2] | 0;
         HEAP32[i35 >> 2] = i34;
         if ((i34 | 0) != 0) {
          i37 = i34 + 4 | 0;
          HEAP32[i37 >> 2] = (HEAP32[i37 >> 2] | 0) + 1;
         }
         __ZN7WebCore14IDBObjectStore10openCursorEPNS_22ScriptExecutionContextEN3WTF10PassRefPtrINS_11IDBKeyRangeEEERi(i18, i32, i22, i19, i15);
         i22 = i18 | 0;
         i37 = HEAP32[i22 >> 2] | 0;
         HEAP32[i22 >> 2] = 0;
         i22 = HEAP32[i35 >> 2] | 0;
         if ((i22 | 0) == 0) {
          i46 = i37;
          i31 = 72;
          break;
         }
         i35 = i22 + 4 | 0;
         i22 = i35 | 0;
         i34 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
         if ((i34 | 0) != 0) {
          HEAP32[i22 >> 2] = i34;
          i46 = i37;
          i31 = 72;
          break;
         }
         i34 = i35 - 4 | 0;
         if ((i34 | 0) == 0) {
          i46 = i37;
          i31 = 72;
          break;
         }
         __ZN7WebCore11IDBKeyRangeD2Ev(i34);
         __ZN3WTF8fastFreeEPv(i34);
         i46 = i37;
         i31 = 72;
        }
       } while (0);
       do {
        if ((i31 | 0) == 72) {
         i37 = i46 + 12 | 0;
         i34 = HEAP32[(HEAP32[i37 >> 2] | 0) + 20 >> 2] | 0;
         i35 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 648 | 0;
         i22 = i20 | 0;
         HEAP32[i22 >> 2] = i38;
         if ((i38 | 0) != 0) {
          HEAP32[i39 >> 2] = (HEAP32[i39 >> 2] | 0) + 1;
         }
         FUNCTION_TABLE_iiiii[i34 & 1](i37, i35, i20, 0) | 0;
         i35 = HEAP32[i22 >> 2] | 0;
         do {
          if ((i35 | 0) != 0) {
           i22 = i35 + 4 | 0;
           i37 = i22 | 0;
           i34 = (HEAP32[i37 >> 2] | 0) - 1 | 0;
           if ((i34 | 0) != 0) {
            HEAP32[i37 >> 2] = i34;
            break;
           }
           i34 = i22 - 4 | 0;
           if ((i34 | 0) == 0) {
            break;
           }
           FUNCTION_TABLE_vi[HEAP32[(HEAP32[i34 >> 2] | 0) + 4 >> 2] & 127](i34);
          }
         } while (0);
         if ((i46 | 0) == 0) {
          break;
         }
         i35 = i46 + 4 | 0;
         i34 = i35 | 0;
         i22 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
         if ((i22 | 0) != 0) {
          HEAP32[i34 >> 2] = i22;
          break;
         }
         i22 = i35 - 4 | 0;
         if ((i22 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i22 >> 2] | 0) + 4 >> 2] & 127](i22);
        }
       } while (0);
       do {
        if ((i38 | 0) != 0) {
         i22 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
         if ((i22 | 0) == 0) {
          FUNCTION_TABLE_vi[HEAP32[(HEAP32[i38 >> 2] | 0) + 4 >> 2] & 127](i38);
          break;
         } else {
          HEAP32[i39 >> 2] = i22;
          break;
         }
        }
       } while (0);
       __ZN3WTF10RefCountedIN7WebCore14IDBObjectStoreEE5derefEv(i32 + 4 | 0);
      }
     } while (0);
     do {
      if ((i31 | 0) == 21) {
       i24 = HEAP32[i1 + 12 >> 2] | 0;
       __ZN3WTF6StringC1EPKc(i13, H_BASE + 160 | 0);
       __ZN9Inspector26InspectorBackendDispatcher12CallbackBase11sendFailureERKN3WTF6StringE(i24, i13);
       i24 = HEAP32[i13 >> 2] | 0;
       if ((i24 | 0) == 0) {
        break;
       }
       i39 = i24 | 0;
       i38 = (HEAP32[i39 >> 2] | 0) - 2 | 0;
       if ((i38 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i24);
        break;
       } else {
        HEAP32[i39 >> 2] = i38;
        break;
       }
      }
     } while (0);
     i38 = i30 + 40 | 0;
     i39 = i38 | 0;
     i24 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
     if ((i24 | 0) != 0) {
      HEAP32[i39 >> 2] = i24;
      break L1;
     }
     i24 = i38 - 40 | 0;
     if ((i24 | 0) == 0) {
      break L1;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i24 >> 2] | 0) + 44 >> 2] & 127](i24);
     break L1;
    }
   } while (0);
   i21 = HEAP32[i1 + 12 >> 2] | 0;
   __ZN3WTF6StringC1EPKc(i12, H_BASE + 328 | 0);
   __ZN9Inspector26InspectorBackendDispatcher12CallbackBase11sendFailureERKN3WTF6StringE(i21, i12);
   i21 = HEAP32[i12 >> 2] | 0;
   if ((i21 | 0) == 0) {
    break;
   }
   i23 = i21 | 0;
   i24 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
   if ((i24 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i21);
    break;
   } else {
    HEAP32[i23 >> 2] = i24;
    break;
   }
  }
 } while (0);
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i12 = i2 + 36 | 0;
 i2 = i12 | 0;
 i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i2 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
 i1 = i12 - 36 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 44 >> 2] & 127](i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore23InspectorIndexedDBAgent11requestDataEPN3WTF6StringERKS2_S5_S5_S5_iiPKNS1_6RefPtrIN9Inspector15InspectorObjectEEENS1_10PassRefPtrINS7_42InspectorIndexedDBBackendDispatcherHandler19RequestDataCallbackEEE(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 var i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 144 | 0;
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
 i27 = i11 + 136 | 0;
 i28 = __ZN7WebCore18InspectorPageAgent27findFrameWithSecurityOriginERKN3WTF6StringE(HEAP32[i1 + 20 >> 2] | 0, i3) | 0;
 do {
  if ((i28 | 0) != 0) {
   i3 = HEAP32[i28 + 456 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   i29 = __ZN7WebCoreL16assertIDBFactoryEPN3WTF6StringEPNS_8DocumentE(i2, HEAP32[i3 + 336 >> 2] | 0) | 0;
   if ((i29 | 0) == 0) {
    STACKTOP = i11;
    return;
   }
   i30 = HEAP32[i1 + 16 >> 2] | 0;
   __ZN9Inspector21InjectedScriptManager17injectedScriptForEPN3JSC9ExecStateE(i26, i30, __ZN7WebCore18mainWorldExecStateEPNS_5FrameE(i28) | 0);
   do {
    if ((i9 | 0) == 0) {
     i30 = i10 | 0;
     i31 = HEAP32[i30 >> 2] | 0;
     HEAP32[i30 >> 2] = 0;
     i32 = 0;
     i33 = i31;
     i34 = 78;
    } else {
     i31 = HEAP32[i9 >> 2] | 0;
     __ZN3WTF6StringC1EPKc(i13, H_BASE + 560 | 0);
     __ZNK9Inspector19InspectorObjectBase9getObjectERKN3WTF6StringE(i12, i31, i13);
     i30 = i12 | 0;
     i35 = HEAP32[i30 >> 2] | 0;
     HEAP32[i30 >> 2] = 0;
     i30 = HEAP32[i13 >> 2] | 0;
     do {
      if ((i30 | 0) != 0) {
       i36 = i30 | 0;
       i37 = (HEAP32[i36 >> 2] | 0) - 2 | 0;
       if ((i37 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i30);
        break;
       } else {
        HEAP32[i36 >> 2] = i37;
        break;
       }
      }
     } while (0);
     i30 = (i35 | 0) == 0;
     if (i30) {
      HEAP32[i14 >> 2] = 0;
      i38 = 0;
      i34 = 21;
     } else {
      __ZN7WebCore12_GLOBAL__N_1L25idbKeyFromInspectorObjectEPN9Inspector15InspectorObjectE(i14, i35);
      i37 = i14 | 0;
      i36 = HEAP32[i37 >> 2] | 0;
      HEAP32[i37 >> 2] = 0;
      if ((i36 | 0) == 0) {
       i39 = 0;
       i34 = 64;
      } else {
       i38 = i36;
       i34 = 21;
      }
     }
     if ((i34 | 0) == 21) {
      __ZN3WTF6StringC1EPKc(i16, H_BASE + 552 | 0);
      __ZNK9Inspector19InspectorObjectBase9getObjectERKN3WTF6StringE(i15, i31, i16);
      i36 = i15 | 0;
      i37 = HEAP32[i36 >> 2] | 0;
      HEAP32[i36 >> 2] = 0;
      i36 = HEAP32[i16 >> 2] | 0;
      do {
       if ((i36 | 0) != 0) {
        i40 = i36 | 0;
        i41 = (HEAP32[i40 >> 2] | 0) - 2 | 0;
        if ((i41 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i36);
         break;
        } else {
         HEAP32[i40 >> 2] = i41;
         break;
        }
       }
      } while (0);
      i36 = (i37 | 0) == 0;
      if (i36) {
       HEAP32[i17 >> 2] = 0;
       i42 = 0;
       i34 = 28;
      } else {
       __ZN7WebCore12_GLOBAL__N_1L25idbKeyFromInspectorObjectEPN9Inspector15InspectorObjectE(i17, i37);
       i41 = i17 | 0;
       i40 = HEAP32[i41 >> 2] | 0;
       HEAP32[i41 >> 2] = 0;
       if ((i40 | 0) == 0) {
        i43 = 0;
        i34 = 55;
       } else {
        i42 = i40;
        i34 = 28;
       }
      }
      if ((i34 | 0) == 28) {
       __ZN3WTF6StringC1EPKc(i19, H_BASE + 536 | 0);
       i40 = __ZNK9Inspector19InspectorObjectBase10getBooleanERKN3WTF6StringEPb(i31, i19, i18) | 0;
       i41 = HEAP32[i19 >> 2] | 0;
       do {
        if ((i41 | 0) != 0) {
         i44 = i41 | 0;
         i45 = (HEAP32[i44 >> 2] | 0) - 2 | 0;
         if ((i45 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i41);
          break;
         } else {
          HEAP32[i44 >> 2] = i45;
          break;
         }
        }
       } while (0);
       do {
        if (i40) {
         i41 = (HEAP8[i18] & 1 ^ 1) & 255;
         __ZN3WTF6StringC1EPKc(i21, H_BASE + 520 | 0);
         i45 = __ZNK9Inspector19InspectorObjectBase10getBooleanERKN3WTF6StringEPb(i31, i21, i20) | 0;
         i44 = HEAP32[i21 >> 2] | 0;
         do {
          if ((i44 | 0) != 0) {
           i46 = i44 | 0;
           i47 = (HEAP32[i46 >> 2] | 0) - 2 | 0;
           if ((i47 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i44);
            break;
           } else {
            HEAP32[i46 >> 2] = i47;
            break;
           }
          }
         } while (0);
         if (!i45) {
          i48 = 0;
          break;
         }
         i44 = (HEAP8[i20] & 1 ^ 1) & 255;
         i47 = i23 | 0;
         HEAP32[i47 >> 2] = i38;
         if ((i38 | 0) != 0) {
          i46 = i38 | 0;
          HEAP32[i46 >> 2] = (HEAP32[i46 >> 2] | 0) + 1;
         }
         i46 = i24 | 0;
         HEAP32[i46 >> 2] = i42;
         if ((i42 | 0) != 0) {
          i49 = i42 | 0;
          HEAP32[i49 >> 2] = (HEAP32[i49 >> 2] | 0) + 1;
         }
         __ZN7WebCore11IDBKeyRange6createEN3WTF10PassRefPtrINS_6IDBKeyEEES4_NS0_14LowerBoundTypeENS0_14UpperBoundTypeE(i22, i23, i24, i41, i44);
         i44 = i22 | 0;
         i49 = HEAP32[i44 >> 2] | 0;
         HEAP32[i44 >> 2] = 0;
         i44 = HEAP32[i46 >> 2] | 0;
         do {
          if ((i44 | 0) != 0) {
           i46 = i44 | 0;
           i50 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
           if ((i50 | 0) == 0) {
            __ZN7WebCore6IDBKeyD1Ev(i44);
            __ZN3WTF8fastFreeEPv(i44);
            break;
           } else {
            HEAP32[i46 >> 2] = i50;
            break;
           }
          }
         } while (0);
         i44 = HEAP32[i47 >> 2] | 0;
         if ((i44 | 0) == 0) {
          i48 = i49;
          break;
         }
         i41 = i44 | 0;
         i45 = (HEAP32[i41 >> 2] | 0) - 1 | 0;
         if ((i45 | 0) == 0) {
          __ZN7WebCore6IDBKeyD1Ev(i44);
          __ZN3WTF8fastFreeEPv(i44);
          i48 = i49;
          break;
         } else {
          HEAP32[i41 >> 2] = i45;
          i48 = i49;
          break;
         }
        } else {
         i48 = 0;
        }
       } while (0);
       do {
        if ((i42 | 0) != 0) {
         i31 = i42 | 0;
         i40 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
         if ((i40 | 0) == 0) {
          __ZN7WebCore6IDBKeyD1Ev(i42);
          __ZN3WTF8fastFreeEPv(i42);
          break;
         } else {
          HEAP32[i31 >> 2] = i40;
          break;
         }
        }
       } while (0);
       if (i36) {
        i51 = i48;
       } else {
        i43 = i48;
        i34 = 55;
       }
      }
      do {
       if ((i34 | 0) == 55) {
        i40 = i37 + 4 | 0;
        i31 = i40 | 0;
        i45 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
        if ((i45 | 0) != 0) {
         HEAP32[i31 >> 2] = i45;
         i51 = i43;
         break;
        }
        i45 = i40 - 4 | 0;
        if ((i45 | 0) == 0) {
         i51 = i43;
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i45 >> 2] | 0) + 4 >> 2] & 127](i45);
        i51 = i43;
       }
      } while (0);
      do {
       if ((i38 | 0) != 0) {
        i37 = i38 | 0;
        i36 = (HEAP32[i37 >> 2] | 0) - 1 | 0;
        if ((i36 | 0) == 0) {
         __ZN7WebCore6IDBKeyD1Ev(i38);
         __ZN3WTF8fastFreeEPv(i38);
         break;
        } else {
         HEAP32[i37 >> 2] = i36;
         break;
        }
       }
      } while (0);
      if (i30) {
       i52 = i51;
      } else {
       i39 = i51;
       i34 = 64;
      }
     }
     do {
      if ((i34 | 0) == 64) {
       i36 = i35 + 4 | 0;
       i37 = i36 | 0;
       i45 = (HEAP32[i37 >> 2] | 0) - 1 | 0;
       if ((i45 | 0) != 0) {
        HEAP32[i37 >> 2] = i45;
        i52 = i39;
        break;
       }
       i45 = i36 - 4 | 0;
       if ((i45 | 0) == 0) {
        i52 = i39;
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i45 >> 2] | 0) + 4 >> 2] & 127](i45);
       i52 = i39;
      }
     } while (0);
     if ((i52 | 0) != 0) {
      i35 = i10 | 0;
      i30 = HEAP32[i35 >> 2] | 0;
      HEAP32[i35 >> 2] = 0;
      i35 = i52 + 4 | 0;
      HEAP32[i35 >> 2] = (HEAP32[i35 >> 2] | 0) + 1;
      i32 = i52;
      i33 = i30;
      i34 = 78;
      break;
     }
     __ZN3WTF6StringC1EPKc(i27, H_BASE + 480 | 0);
     i30 = i27 | 0;
     i35 = HEAP32[i30 >> 2] | 0;
     HEAP32[i30 >> 2] = 0;
     i45 = i2 | 0;
     i36 = HEAP32[i45 >> 2] | 0;
     HEAP32[i45 >> 2] = i35;
     do {
      if ((i36 | 0) != 0) {
       i35 = i36 | 0;
       i45 = (HEAP32[i35 >> 2] | 0) - 2 | 0;
       if ((i45 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i36);
        break;
       } else {
        HEAP32[i35 >> 2] = i45;
        break;
       }
      }
     } while (0);
     i36 = HEAP32[i30 >> 2] | 0;
     if ((i36 | 0) == 0) {
      break;
     }
     i45 = i36 | 0;
     i35 = (HEAP32[i45 >> 2] | 0) - 2 | 0;
     if ((i35 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i36);
      break;
     } else {
      HEAP32[i45 >> 2] = i35;
      break;
     }
    }
   } while (0);
   do {
    if ((i34 | 0) == 78) {
     i35 = __ZN3WTF10fastMallocEj(60) | 0;
     i45 = i35 + 4 | 0;
     HEAP32[i45 >> 2] = 1;
     HEAP32[i35 + 8 >> 2] = i3 + 88;
     HEAP32[i35 >> 2] = H_BASE + 1488;
     HEAP32[i35 + 12 >> 2] = i33;
     i36 = i35 + 16 | 0;
     HEAP32[i36 >> 2] = __ZTVN9Inspector18InjectedScriptBaseE + 8;
     i37 = HEAP32[i26 + 4 >> 2] | 0;
     HEAP32[i35 + 20 >> 2] = i37;
     if ((i37 | 0) != 0) {
      i40 = i37 | 0;
      HEAP32[i40 >> 2] = (HEAP32[i40 >> 2] | 0) + 2;
     }
     i40 = i35 + 24 | 0;
     HEAP32[i40 >> 2] = __ZTVN10Deprecated11ScriptValueE + 8;
     __ZN3JSC6StrongINS_7UnknownEEC2ERKS2_(i35 + 28 | 0, i26 + 12 | 0);
     HEAP32[i40 >> 2] = H_BASE + 1520;
     HEAP32[i35 + 32 >> 2] = HEAP32[i26 + 16 >> 2];
     HEAP32[i35 + 36 >> 2] = HEAP32[i26 + 20 >> 2];
     HEAP32[i36 >> 2] = __ZTVN9Inspector14InjectedScriptE + 8;
     i36 = HEAP32[i5 >> 2] | 0;
     HEAP32[i35 + 40 >> 2] = i36;
     if ((i36 | 0) != 0) {
      i40 = i36 | 0;
      HEAP32[i40 >> 2] = (HEAP32[i40 >> 2] | 0) + 2;
     }
     i40 = HEAP32[i6 >> 2] | 0;
     HEAP32[i35 + 44 >> 2] = i40;
     if ((i40 | 0) != 0) {
      i36 = i40 | 0;
      HEAP32[i36 >> 2] = (HEAP32[i36 >> 2] | 0) + 2;
     }
     HEAP32[i35 + 48 >> 2] = i32;
     HEAP32[i35 + 52 >> 2] = i7;
     HEAP32[i35 + 56 >> 2] = i8;
     i36 = i35;
     __ZN7WebCore12_GLOBAL__N_122ExecutableWithDatabase5startEPNS_10IDBFactoryEPNS_14SecurityOriginERKN3WTF6StringE(i36, i29, i4);
     do {
      if ((i35 | 0) != 0) {
       i40 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
       if ((i40 | 0) == 0) {
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i35 >> 2] | 0) + 4 >> 2] & 127](i36);
        break;
       } else {
        HEAP32[i45 >> 2] = i40;
        break;
       }
      }
     } while (0);
     if ((i32 | 0) == 0) {
      break;
     }
     i45 = i32 + 4 | 0;
     i36 = i45 | 0;
     i35 = (HEAP32[i36 >> 2] | 0) - 1 | 0;
     if ((i35 | 0) != 0) {
      HEAP32[i36 >> 2] = i35;
      break;
     }
     i35 = i45 - 4 | 0;
     if ((i35 | 0) == 0) {
      break;
     }
     __ZN7WebCore11IDBKeyRangeD2Ev(i35);
     __ZN3WTF8fastFreeEPv(i35);
    }
   } while (0);
   __ZN9Inspector14InjectedScriptD1Ev(i26);
   STACKTOP = i11;
   return;
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i25, H_BASE + 192 | 0);
 i26 = i25 | 0;
 i25 = HEAP32[i26 >> 2] | 0;
 HEAP32[i26 >> 2] = 0;
 i32 = i2 | 0;
 i2 = HEAP32[i32 >> 2] | 0;
 HEAP32[i32 >> 2] = i25;
 do {
  if ((i2 | 0) != 0) {
   i25 = i2 | 0;
   i32 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
   if ((i32 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i25 >> 2] = i32;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i26 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i11;
  return;
 }
 i26 = i2 | 0;
 i32 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
 if ((i32 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  STACKTOP = i11;
  return;
 } else {
  HEAP32[i26 >> 2] = i32;
  STACKTOP = i11;
  return;
 }
}
function __ZN7WebCore12_GLOBAL__N_1L21keyPathFromIDBKeyPathERKNS_10IDBKeyPathE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0;
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
 i19 = HEAP32[i2 >> 2] | 0;
 if ((i19 | 0) == 2) {
  __ZN9Inspector15InspectorObject6createEv(i5);
  i20 = i17 | 0;
  HEAP32[i20 >> 2] = HEAP32[i5 >> 2];
  i5 = HEAP32[(__ZN9Inspector11TypeBuilder9IndexedDB7KeyPath7BuilderILi0EE7setTypeENS2_4Type4EnumE(i17, 57) | 0) >> 2] | 0;
  if ((i5 | 0) != 0) {
   i17 = i5 + 4 | 0;
   HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
  }
  i17 = HEAP32[i20 >> 2] | 0;
  do {
   if ((i17 | 0) != 0) {
    i20 = i17 + 4 | 0;
    i21 = i20 | 0;
    i22 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
    if ((i22 | 0) != 0) {
     HEAP32[i21 >> 2] = i22;
     break;
    }
    i22 = i20 - 4 | 0;
    if ((i22 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i22 >> 2] | 0) + 4 >> 2] & 127](i22);
   }
  } while (0);
  i17 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN9Inspector18InspectorArrayBaseC2Ev(i17);
  HEAP32[i17 >> 2] = H_BASE + 1008;
  i22 = i2 + 16 | 0;
  if ((HEAP32[i22 >> 2] | 0) != 0) {
   i20 = i2 + 8 | 0;
   i21 = i18 | 0;
   i23 = i17 + 12 | 0;
   i24 = i17 + 20 | 0;
   i25 = i17 + 16 | 0;
   i26 = i23;
   i27 = i23;
   i23 = i4 | 0;
   i28 = 0;
   while (1) {
    i29 = HEAP32[(HEAP32[i20 >> 2] | 0) + (i28 << 2) >> 2] | 0;
    HEAP32[i21 >> 2] = i29;
    if ((i29 | 0) != 0) {
     i30 = i29 | 0;
     HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 2;
    }
    __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i4, i18);
    i30 = HEAP32[i24 >> 2] | 0;
    if ((i30 | 0) == (HEAP32[i25 >> 2] | 0)) {
     __ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i26, i30 + 1 | 0);
     i29 = (HEAP32[i27 >> 2] | 0) + (HEAP32[i24 >> 2] << 2) | 0;
     i31 = HEAP32[i23 >> 2] | 0;
     HEAP32[i23 >> 2] = 0;
     HEAP32[i29 >> 2] = i31;
    } else {
     i31 = (HEAP32[i27 >> 2] | 0) + (i30 << 2) | 0;
     i30 = HEAP32[i23 >> 2] | 0;
     HEAP32[i23 >> 2] = 0;
     HEAP32[i31 >> 2] = i30;
    }
    HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
    i30 = HEAP32[i23 >> 2] | 0;
    do {
     if ((i30 | 0) != 0) {
      i31 = i30 + 4 | 0;
      i29 = i31 | 0;
      i32 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
      if ((i32 | 0) != 0) {
       HEAP32[i29 >> 2] = i32;
       break;
      }
      i32 = i31 - 4 | 0;
      if ((i32 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i32 >> 2] | 0) + 4 >> 2] & 127](i32);
     }
    } while (0);
    i30 = HEAP32[i21 >> 2] | 0;
    do {
     if ((i30 | 0) != 0) {
      i32 = i30 | 0;
      i31 = (HEAP32[i32 >> 2] | 0) - 2 | 0;
      if ((i31 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i30);
       break;
      } else {
       HEAP32[i32 >> 2] = i31;
       break;
      }
     }
    } while (0);
    i28 = i28 + 1 | 0;
    if (i28 >>> 0 >= (HEAP32[i22 >> 2] | 0) >>> 0) {
     break;
    }
   }
  }
  i22 = (i17 | 0) == 0;
  if (!i22) {
   i28 = i17 + 4 | 0;
   HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 1;
  }
  HEAP32[i11 >> 2] = H_BASE + 448;
  __ZN3WTF6StringC1ENS_12ASCIILiteralE(i10, i11);
  i11 = i12 | 0;
  i28 = i17;
  HEAP32[i11 >> 2] = i28;
  __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i5 | 0, i10, i12);
  i12 = HEAP32[i11 >> 2] | 0;
  do {
   if ((i12 | 0) != 0) {
    i11 = i12 + 4 | 0;
    i21 = i11 | 0;
    i23 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
    if ((i23 | 0) != 0) {
     HEAP32[i21 >> 2] = i23;
     break;
    }
    i23 = i11 - 4 | 0;
    if ((i23 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i23 >> 2] | 0) + 4 >> 2] & 127](i23);
   }
  } while (0);
  i12 = HEAP32[i10 >> 2] | 0;
  do {
   if ((i12 | 0) != 0) {
    i10 = i12 | 0;
    i23 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
    if ((i23 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i12);
     break;
    } else {
     HEAP32[i10 >> 2] = i23;
     break;
    }
   }
  } while (0);
  if (i22) {
   i33 = i5;
   i34 = i1 | 0;
   HEAP32[i34 >> 2] = i33;
   STACKTOP = i3;
   return;
  }
  i22 = i17 + 4 | 0;
  i12 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
  if ((i12 | 0) == 0) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] & 127](i28);
   i33 = i5;
   i34 = i1 | 0;
   HEAP32[i34 >> 2] = i33;
   STACKTOP = i3;
   return;
  } else {
   HEAP32[i22 >> 2] = i12;
   i33 = i5;
   i34 = i1 | 0;
   HEAP32[i34 >> 2] = i33;
   STACKTOP = i3;
   return;
  }
 } else if ((i19 | 0) == 1) {
  __ZN9Inspector15InspectorObject6createEv(i13);
  i5 = i16 | 0;
  HEAP32[i5 >> 2] = HEAP32[i13 >> 2];
  i13 = HEAP32[(__ZN9Inspector11TypeBuilder9IndexedDB7KeyPath7BuilderILi0EE7setTypeENS2_4Type4EnumE(i16, 55) | 0) >> 2] | 0;
  if ((i13 | 0) != 0) {
   i16 = i13 + 4 | 0;
   HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
  }
  i16 = HEAP32[i5 >> 2] | 0;
  do {
   if ((i16 | 0) != 0) {
    i5 = i16 + 4 | 0;
    i12 = i5 | 0;
    i22 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
    if ((i22 | 0) != 0) {
     HEAP32[i12 >> 2] = i22;
     break;
    }
    i22 = i5 - 4 | 0;
    if ((i22 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i22 >> 2] | 0) + 4 >> 2] & 127](i22);
   }
  } while (0);
  HEAP32[i9 >> 2] = H_BASE + 464;
  __ZN3WTF6StringC1ENS_12ASCIILiteralE(i8, i9);
  __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i7, i2 + 4 | 0);
  i2 = i6 | 0;
  i9 = i7 | 0;
  i7 = HEAP32[i9 >> 2] | 0;
  HEAP32[i9 >> 2] = 0;
  HEAP32[i2 >> 2] = i7;
  __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i13 | 0, i8, i6);
  i6 = HEAP32[i2 >> 2] | 0;
  do {
   if ((i6 | 0) != 0) {
    i2 = i6 + 4 | 0;
    i7 = i2 | 0;
    i16 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
    if ((i16 | 0) != 0) {
     HEAP32[i7 >> 2] = i16;
     break;
    }
    i16 = i2 - 4 | 0;
    if ((i16 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 127](i16);
   }
  } while (0);
  i6 = HEAP32[i9 >> 2] | 0;
  do {
   if ((i6 | 0) != 0) {
    i9 = i6 + 4 | 0;
    i16 = i9 | 0;
    i2 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
    if ((i2 | 0) != 0) {
     HEAP32[i16 >> 2] = i2;
     break;
    }
    i2 = i9 - 4 | 0;
    if ((i2 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 127](i2);
   }
  } while (0);
  i6 = HEAP32[i8 >> 2] | 0;
  if ((i6 | 0) == 0) {
   i33 = i13;
   i34 = i1 | 0;
   HEAP32[i34 >> 2] = i33;
   STACKTOP = i3;
   return;
  }
  i8 = i6 | 0;
  i2 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
  if ((i2 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i6);
   i33 = i13;
   i34 = i1 | 0;
   HEAP32[i34 >> 2] = i33;
   STACKTOP = i3;
   return;
  } else {
   HEAP32[i8 >> 2] = i2;
   i33 = i13;
   i34 = i1 | 0;
   HEAP32[i34 >> 2] = i33;
   STACKTOP = i3;
   return;
  }
 } else if ((i19 | 0) == 0) {
  __ZN9Inspector15InspectorObject6createEv(i14);
  i19 = i15 | 0;
  HEAP32[i19 >> 2] = HEAP32[i14 >> 2];
  i14 = HEAP32[(__ZN9Inspector11TypeBuilder9IndexedDB7KeyPath7BuilderILi0EE7setTypeENS2_4Type4EnumE(i15, 58) | 0) >> 2] | 0;
  if ((i14 | 0) != 0) {
   i15 = i14 + 4 | 0;
   HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
  }
  i15 = HEAP32[i19 >> 2] | 0;
  if ((i15 | 0) == 0) {
   i33 = i14;
   i34 = i1 | 0;
   HEAP32[i34 >> 2] = i33;
   STACKTOP = i3;
   return;
  }
  i19 = i15 + 4 | 0;
  i15 = i19 | 0;
  i13 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
  if ((i13 | 0) != 0) {
   HEAP32[i15 >> 2] = i13;
   i33 = i14;
   i34 = i1 | 0;
   HEAP32[i34 >> 2] = i33;
   STACKTOP = i3;
   return;
  }
  i13 = i19 - 4 | 0;
  if ((i13 | 0) == 0) {
   i33 = i14;
   i34 = i1 | 0;
   HEAP32[i34 >> 2] = i33;
   STACKTOP = i3;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 127](i13);
  i33 = i14;
  i34 = i1 | 0;
  HEAP32[i34 >> 2] = i33;
  STACKTOP = i3;
  return;
 } else {
  i33 = 0;
  i34 = i1 | 0;
  HEAP32[i34 >> 2] = i33;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore16ClearObjectStore7executeEN3WTF10PassRefPtrINS_11IDBDatabaseEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
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
 i15 = i2 | 0;
 i2 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = 0;
 L1 : do {
  if (__ZNK9Inspector26InspectorBackendDispatcher12CallbackBase8isActiveEv(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 15](i1) | 0) | 0) {
   i15 = i1 + 8 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   i17 = i1 + 12 | 0;
   i18 = __ZN7WebCore14IDBTransaction13modeReadWriteEv() | 0;
   HEAP32[i6 >> 2] = 0;
   __ZN7WebCore11IDBDatabase11transactionEPNS_22ScriptExecutionContextERKN3WTF6StringES6_Ri(i7, i2, i16, i17, i18, i6);
   i18 = i7 | 0;
   i16 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = 0;
   i18 = (i16 | 0) == 0;
   do {
    if ((HEAP32[i6 >> 2] | 0) == 0) {
     if (i18) {
      break;
     }
     i19 = i16 + 40 | 0;
     i20 = (HEAP32[i19 >> 2] | 0) + 1 | 0;
     HEAP32[i19 >> 2] = i20;
     i19 = i16 + 40 | 0;
     i21 = i20;
     i22 = i19;
     i23 = i19 | 0;
     i24 = i16;
     i25 = 7;
    } else {
     if (i18) {
      break;
     }
     i19 = i16 + 40 | 0;
     i20 = i19 | 0;
     i21 = HEAP32[i20 >> 2] | 0;
     i22 = i19;
     i23 = i20;
     i24 = 0;
     i25 = 7;
    }
   } while (0);
   do {
    if ((i25 | 0) == 7) {
     i16 = i21 - 1 | 0;
     do {
      if ((i16 | 0) == 0) {
       i18 = i22 - 40 | 0;
       if ((i18 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 44 >> 2] & 127](i18);
      } else {
       HEAP32[i23 >> 2] = i16;
      }
     } while (0);
     if ((i24 | 0) == 0) {
      break;
     }
     HEAP32[i4 >> 2] = 0;
     __ZN7WebCore14IDBTransaction11objectStoreERKN3WTF6StringERi(i5, i24, i17, i4);
     i16 = i5 | 0;
     i18 = HEAP32[i16 >> 2] | 0;
     HEAP32[i16 >> 2] = 0;
     i16 = (i18 | 0) == 0;
     do {
      if ((HEAP32[i4 >> 2] | 0) == 0) {
       if (i16) {
        i25 = 21;
        break;
       }
       i20 = i18 + 4 | 0;
       HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
       i26 = i18;
       i25 = 20;
      } else {
       if (i16) {
        i25 = 21;
       } else {
        i26 = 0;
        i25 = 20;
       }
      }
     } while (0);
     do {
      if ((i25 | 0) == 20) {
       __ZN3WTF10RefCountedIN7WebCore14IDBObjectStoreEE5derefEv(i18 + 4 | 0);
       if ((i26 | 0) == 0) {
        i25 = 21;
        break;
       }
       HEAP32[i10 >> 2] = 0;
       __ZN7WebCore14IDBObjectStore5clearEPNS_22ScriptExecutionContextERi(i11, i26, HEAP32[i15 >> 2] | 0, i10);
       i16 = i11 | 0;
       i20 = HEAP32[i16 >> 2] | 0;
       HEAP32[i16 >> 2] = 0;
       do {
        if ((HEAP32[i10 >> 2] | 0) == 0) {
         i16 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 64 | 0;
         i19 = HEAP32[i1 + 16 >> 2] | 0;
         if ((i19 | 0) != 0) {
          i27 = i19 | 0;
          HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + 1;
         }
         i27 = __ZN3WTF10fastMallocEj(16) | 0;
         HEAP32[i27 + 4 >> 2] = 1;
         HEAP32[i27 + 8 >> 2] = 3;
         HEAP32[i27 >> 2] = H_BASE + 1088;
         HEAP32[i27 + 12 >> 2] = i19;
         i19 = i14 | 0;
         HEAP32[i19 >> 2] = i27;
         __ZN7WebCore11EventTarget16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb(i24 | 0, i16, i14, 0) | 0;
         i16 = HEAP32[i19 >> 2] | 0;
         if ((i16 | 0) == 0) {
          break;
         }
         i19 = i16 + 4 | 0;
         i16 = i19 | 0;
         i27 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
         if ((i27 | 0) != 0) {
          HEAP32[i16 >> 2] = i27;
          break;
         }
         i27 = i19 - 4 | 0;
         if ((i27 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i27 >> 2] | 0) + 4 >> 2] & 127](i27);
        } else {
         i27 = HEAP32[i1 + 16 >> 2] | 0;
         __ZNK3WTF6String4utf8ENS_14ConversionModeE(i13, i17, 0);
         i19 = i13 | 0;
         i16 = HEAP32[i19 >> 2] | 0;
         if ((i16 | 0) == 0) {
          i28 = 0;
         } else {
          i28 = i16 + 8 | 0;
         }
         i16 = HEAP32[i10 >> 2] | 0;
         __ZN3WTF6String6formatEPKcz(i12, H_BASE + 120 | 0, (i29 = STACKTOP, STACKTOP = STACKTOP + 16 | 0, HEAP32[i29 >> 2] = i28, HEAP32[i29 + 8 >> 2] = i16, i29) | 0);
         STACKTOP = i29;
         __ZN9Inspector26InspectorBackendDispatcher12CallbackBase11sendFailureERKN3WTF6StringE(i27, i12);
         i27 = HEAP32[i12 >> 2] | 0;
         do {
          if ((i27 | 0) != 0) {
           i29 = i27 | 0;
           i16 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
           if ((i16 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i27);
            break;
           } else {
            HEAP32[i29 >> 2] = i16;
            break;
           }
          }
         } while (0);
         i27 = HEAP32[i19 >> 2] | 0;
         if ((i27 | 0) == 0) {
          break;
         }
         i16 = i27 | 0;
         i29 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
         if ((i29 | 0) == 0) {
          __ZN3WTF8fastFreeEPv(i27);
          break;
         } else {
          HEAP32[i16 >> 2] = i29;
          break;
         }
        }
       } while (0);
       do {
        if ((i20 | 0) != 0) {
         i29 = i20 + 4 | 0;
         i16 = i29 | 0;
         i27 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
         if ((i27 | 0) != 0) {
          HEAP32[i16 >> 2] = i27;
          break;
         }
         i27 = i29 - 4 | 0;
         if ((i27 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i27 >> 2] | 0) + 4 >> 2] & 127](i27);
        }
       } while (0);
       __ZN3WTF10RefCountedIN7WebCore14IDBObjectStoreEE5derefEv(i26 + 4 | 0);
      }
     } while (0);
     do {
      if ((i25 | 0) == 21) {
       i18 = HEAP32[i1 + 16 >> 2] | 0;
       __ZN3WTF6StringC1EPKc(i9, H_BASE + 160 | 0);
       __ZN9Inspector26InspectorBackendDispatcher12CallbackBase11sendFailureERKN3WTF6StringE(i18, i9);
       i18 = HEAP32[i9 >> 2] | 0;
       if ((i18 | 0) == 0) {
        break;
       }
       i20 = i18 | 0;
       i27 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
       if ((i27 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i18);
        break;
       } else {
        HEAP32[i20 >> 2] = i27;
        break;
       }
      }
     } while (0);
     if ((i24 | 0) == 0) {
      break L1;
     }
     i27 = i24 + 40 | 0;
     i20 = i27 | 0;
     i18 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
     if ((i18 | 0) != 0) {
      HEAP32[i20 >> 2] = i18;
      break L1;
     }
     i18 = i27 - 40 | 0;
     if ((i18 | 0) == 0) {
      break L1;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 44 >> 2] & 127](i18);
     break L1;
    }
   } while (0);
   i17 = HEAP32[i1 + 16 >> 2] | 0;
   __ZN3WTF6StringC1EPKc(i8, H_BASE + 328 | 0);
   __ZN9Inspector26InspectorBackendDispatcher12CallbackBase11sendFailureERKN3WTF6StringE(i17, i8);
   i17 = HEAP32[i8 >> 2] | 0;
   if ((i17 | 0) == 0) {
    break;
   }
   i15 = i17 | 0;
   i18 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i18 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i15 >> 2] = i18;
    break;
   }
  }
 } while (0);
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i8 = i2 + 36 | 0;
 i2 = i8 | 0;
 i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i2 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
 i1 = i8 - 36 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 44 >> 2] & 127](i1);
 STACKTOP = i3;
 return;
}
function __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E3addINS_22IdentityHashTranslatorIS8_EERKxRKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIxS4_S6_S8_SE_SB_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = i2 + 4 | 0;
  i8 = HEAP32[i7 >> 2] | 0;
  if ((i8 | 0) == 0) {
   i9 = 8;
   i10 = 0;
  } else {
   i11 = i8 << 1;
   i9 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i11 | 0) ? i8 : i11;
   i10 = i8;
  }
  HEAP32[i7 >> 2] = i9;
  i7 = i2 + 8 | 0;
  HEAP32[i7 >> 2] = i9 - 1;
  i8 = __ZN3WTF10fastMallocEj(i9 * 48 & -1) | 0;
  if ((i9 | 0) > 0) {
   i11 = 0;
   while (1) {
    i12 = i8 + (i11 * 48 & -1) | 0;
    HEAP32[i12 >> 2] = 0;
    HEAP32[i12 + 4 >> 2] = 0;
    HEAP32[i8 + (i11 * 48 & -1) + 8 >> 2] = 0;
    _memset(i8 + (i11 * 48 & -1) + 24 | 0, 0, 22) | 0;
    i11 = i11 + 1 | 0;
    if ((i11 | 0) >= (i9 | 0)) {
     break;
    }
   }
  }
  HEAP32[i5 >> 2] = i8;
  if ((i10 | 0) != 0) {
   i8 = 0;
   while (1) {
    i9 = i8 * 48 & -1 | 0;
    i11 = i9 | 0;
    i12 = HEAP32[i11 >> 2] | 0;
    i13 = HEAP32[i11 + 4 >> 2] | 0;
    if (!((i12 | 0) == (-1 | 0) & (i13 | 0) == (-1 | 0) | (i12 | 0) == 0 & (i13 | 0) == 0)) {
     __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E8reinsertEOS4_(i2, i9) | 0;
    }
    i8 = i8 + 1 | 0;
    if ((i8 | 0) == (i10 | 0)) {
     break;
    }
   }
  }
  HEAP32[i2 + 16 >> 2] = 0;
  __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E15deallocateTableEPS4_i(0, i10);
  i14 = HEAP32[i5 >> 2] | 0;
  i15 = i7;
 } else {
  i14 = i6;
  i15 = i2 + 8 | 0;
 }
 i6 = HEAP32[i15 >> 2] | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 i10 = HEAP32[i3 + 4 >> 2] | 0;
 i3 = _i64Add(i7, i10, ~0, ~i7) | 0;
 i8 = tempRet0;
 i9 = (i3 >>> 22 | i8 << 10) ^ i3;
 i3 = (i8 >>> 22 | 0 << 10) ^ i8;
 i8 = _i64Add(i9, i3, ~(i9 << 13 | 0 >>> 19), ~(i3 << 13 | i9 >>> 19)) | 0;
 i9 = tempRet0;
 i3 = ___muldi3((i8 >>> 8 | i9 << 24) ^ i8, (i9 >>> 8 | 0 << 24) ^ i9, 9, 0) | 0;
 i9 = tempRet0;
 i8 = (i3 >>> 15 | i9 << 17) ^ i3;
 i3 = (i9 >>> 15 | 0 << 17) ^ i9;
 i9 = _i64Add(i8, i3, ~(i8 << 27 | 0 >>> 5), ~(i3 << 27 | i8 >>> 5)) | 0;
 i8 = (i9 >>> 31 | tempRet0 << 1) ^ i9;
 i9 = i8 & i6;
 i3 = i14 + (i9 * 48 & -1) | 0;
 i13 = i3 | 0;
 i12 = HEAP32[i13 >> 2] | 0;
 i11 = HEAP32[i13 + 4 >> 2] | 0;
 do {
  if ((i12 | 0) == 0 & (i11 | 0) == 0) {
   i16 = i3;
   i17 = 18;
  } else {
   i13 = (i8 >>> 23) + ~i8 | 0;
   i18 = i13 << 12 ^ i13;
   i13 = i18 >>> 7 ^ i18;
   i18 = i13 << 2 ^ i13;
   i13 = i18 >>> 20 ^ i18 | 1;
   i18 = 0;
   i19 = 0;
   i20 = i9;
   i21 = i3;
   i22 = i11;
   i23 = i12;
   while (1) {
    if ((i23 | 0) == (i7 | 0) & (i22 | 0) == (i10 | 0)) {
     i17 = 15;
     break;
    }
    i24 = (i23 | 0) == (-1 | 0) & (i22 | 0) == (-1 | 0) ? i21 : i19;
    i25 = (i18 | 0) == 0 ? i13 : i18;
    i26 = i25 + i20 & i6;
    i27 = i14 + (i26 * 48 & -1) | 0;
    i28 = i27 | 0;
    i29 = HEAP32[i28 >> 2] | 0;
    i30 = HEAP32[i28 + 4 >> 2] | 0;
    if ((i29 | 0) == 0 & (i30 | 0) == 0) {
     i17 = 17;
     break;
    } else {
     i18 = i25;
     i19 = i24;
     i20 = i26;
     i21 = i27;
     i22 = i30;
     i23 = i29;
    }
   }
   if ((i17 | 0) == 15) {
    i23 = i14 + ((HEAP32[i2 + 4 >> 2] | 0) * 48 & -1) | 0;
    i22 = i1;
    HEAP32[i22 >> 2] = i21;
    HEAP32[i22 + 4 >> 2] = i23;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i17 | 0) == 17) {
    if ((i24 | 0) == 0) {
     i16 = i27;
     i17 = 18;
     break;
    }
    i23 = i24 | 0;
    HEAP32[i23 >> 2] = 0;
    HEAP32[i23 + 4 >> 2] = 0;
    HEAP32[i24 + 8 >> 2] = 0;
    _memset(i24 + 24 | 0, 0, 22) | 0;
    i23 = i2 + 16 | 0;
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) - 1;
    i31 = i24;
    i32 = i23;
    break;
   }
  }
 } while (0);
 if ((i17 | 0) == 18) {
  i31 = i16;
  i32 = i2 + 16 | 0;
 }
 i16 = i4 | 0;
 i17 = HEAP32[i16 + 4 >> 2] | 0;
 i24 = i31 | 0;
 HEAP32[i24 >> 2] = HEAP32[i16 >> 2];
 HEAP32[i24 + 4 >> 2] = i17;
 __ZN7WebCore16IDBIndexMetadataaSERKS0_(i31 + 8 | 0, i4 + 8 | 0) | 0;
 i4 = i2 + 12 | 0;
 i17 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i17;
 i4 = i2 + 4 | 0;
 i24 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i32 >> 2] | 0) + i17 << 1 | 0) < (i24 | 0)) {
  i33 = i31;
  i34 = i24;
 } else {
  i16 = (i24 | 0) == 0;
  if (i16) {
   i35 = 8;
  } else {
   i27 = i24 << 1;
   i35 = (i17 * 6 & -1 | 0) < (i27 | 0) ? i24 : i27;
  }
  i27 = HEAP32[i5 >> 2] | 0;
  HEAP32[i4 >> 2] = i35;
  HEAP32[i15 >> 2] = i35 - 1;
  i15 = __ZN3WTF10fastMallocEj(i35 * 48 & -1) | 0;
  if ((i35 | 0) > 0) {
   i17 = 0;
   while (1) {
    i14 = i15 + (i17 * 48 & -1) | 0;
    HEAP32[i14 >> 2] = 0;
    HEAP32[i14 + 4 >> 2] = 0;
    HEAP32[i15 + (i17 * 48 & -1) + 8 >> 2] = 0;
    _memset(i15 + (i17 * 48 & -1) + 24 | 0, 0, 22) | 0;
    i17 = i17 + 1 | 0;
    if ((i17 | 0) >= (i35 | 0)) {
     break;
    }
   }
  }
  HEAP32[i5 >> 2] = i15;
  if (i16) {
   i36 = 0;
  } else {
   i16 = 0;
   i15 = 0;
   while (1) {
    i35 = i27 + (i16 * 48 & -1) | 0;
    i17 = i35 | 0;
    i14 = HEAP32[i17 >> 2] | 0;
    i6 = HEAP32[i17 + 4 >> 2] | 0;
    if ((i14 | 0) == (-1 | 0) & (i6 | 0) == (-1 | 0) | (i14 | 0) == 0 & (i6 | 0) == 0) {
     i37 = i15;
    } else {
     i6 = __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E8reinsertEOS4_(i2, i35) | 0;
     i37 = (i35 | 0) == (i31 | 0) ? i6 : i15;
    }
    i6 = i16 + 1 | 0;
    if ((i6 | 0) == (i24 | 0)) {
     i36 = i37;
     break;
    } else {
     i16 = i6;
     i15 = i37;
    }
   }
  }
  HEAP32[i32 >> 2] = 0;
  __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E15deallocateTableEPS4_i(i27, i24);
  i33 = i36;
  i34 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i34 * 48 & -1) | 0;
 i34 = i1;
 HEAP32[i34 >> 2] = i33;
 HEAP32[i34 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore12_GLOBAL__N_124GetDatabaseNamesCallback11handleEventEPNS_22ScriptExecutionContextEPNS_5EventE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i4 = i2 | 0;
 i5 = i2 + 8 | 0;
 i6 = i2 + 16 | 0;
 i7 = i2 + 24 | 0;
 i8 = i2 + 32 | 0;
 i9 = i2 + 40 | 0;
 i10 = i2 + 48 | 0;
 i11 = i2 + 56 | 0;
 i12 = i2 + 64 | 0;
 i13 = i1 + 12 | 0;
 if (!(__ZNK9Inspector26InspectorBackendDispatcher12CallbackBase8isActiveEv(HEAP32[i13 >> 2] | 0) | 0)) {
  STACKTOP = i2;
  return;
 }
 i1 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
 if ((HEAP32[i3 + 12 >> 2] | 0) != (HEAP32[i1 + 648 >> 2] | 0)) {
  i1 = HEAP32[i13 >> 2] | 0;
  __ZN3WTF6StringC1EPKc(i5, H_BASE + 96 | 0);
  __ZN9Inspector26InspectorBackendDispatcher12CallbackBase11sendFailureERKN3WTF6StringE(i1, i5);
  i1 = HEAP32[i5 >> 2] | 0;
  if ((i1 | 0) == 0) {
   STACKTOP = i2;
   return;
  }
  i5 = i1 | 0;
  i14 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
  if ((i14 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i1);
   STACKTOP = i2;
   return;
  } else {
   HEAP32[i5 >> 2] = i14;
   STACKTOP = i2;
   return;
  }
 }
 i14 = HEAP32[i3 + 32 >> 2] | 0;
 if ((i14 | 0) == 0) {
  i15 = 0;
 } else {
  i15 = i14 - 12 | 0;
 }
 HEAP32[i6 >> 2] = 0;
 __ZNK7WebCore10IDBRequest6resultERi(i7, i15, i6);
 i15 = i7 | 0;
 i7 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = 0;
 do {
  if ((HEAP32[i6 >> 2] | 0) == 0) {
   if ((HEAP32[i7 + 8 >> 2] | 0) != 2) {
    i15 = HEAP32[i13 >> 2] | 0;
    __ZN3WTF6StringC1EPKc(i9, H_BASE + 8 | 0);
    __ZN9Inspector26InspectorBackendDispatcher12CallbackBase11sendFailureERKN3WTF6StringE(i15, i9);
    i15 = HEAP32[i9 >> 2] | 0;
    if ((i15 | 0) == 0) {
     break;
    }
    i14 = i15 | 0;
    i3 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
    if ((i3 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i15);
     break;
    } else {
     HEAP32[i14 >> 2] = i3;
     break;
    }
   }
   __ZN7WebCore6IDBAny13domStringListEv(i10, i7);
   i3 = i10 | 0;
   i14 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = 0;
   i3 = __ZN3WTF10fastMallocEj(24) | 0;
   i15 = i3;
   __ZN9Inspector18InspectorArrayBaseC2Ev(i3);
   HEAP32[i3 >> 2] = H_BASE + 1008;
   i5 = i14 + 12 | 0;
   if ((HEAP32[i5 >> 2] | 0) != 0) {
    i1 = i3 + 12 | 0;
    i16 = i3 + 20 | 0;
    i17 = i3 + 16 | 0;
    i3 = i1;
    i18 = i1;
    i1 = i4 | 0;
    i19 = i11 | 0;
    i20 = 0;
    while (1) {
     __ZNK7WebCore13DOMStringList4itemEj(i11, i14, i20);
     __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i4, i11);
     i21 = HEAP32[i16 >> 2] | 0;
     if ((i21 | 0) == (HEAP32[i17 >> 2] | 0)) {
      __ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i21 + 1 | 0);
      i22 = (HEAP32[i18 >> 2] | 0) + (HEAP32[i16 >> 2] << 2) | 0;
      i23 = HEAP32[i1 >> 2] | 0;
      HEAP32[i1 >> 2] = 0;
      HEAP32[i22 >> 2] = i23;
     } else {
      i23 = (HEAP32[i18 >> 2] | 0) + (i21 << 2) | 0;
      i21 = HEAP32[i1 >> 2] | 0;
      HEAP32[i1 >> 2] = 0;
      HEAP32[i23 >> 2] = i21;
     }
     HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
     i21 = HEAP32[i1 >> 2] | 0;
     do {
      if ((i21 | 0) != 0) {
       i23 = i21 + 4 | 0;
       i22 = i23 | 0;
       i24 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
       if ((i24 | 0) != 0) {
        HEAP32[i22 >> 2] = i24;
        break;
       }
       i24 = i23 - 4 | 0;
       if ((i24 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i24 >> 2] | 0) + 4 >> 2] & 127](i24);
      }
     } while (0);
     i21 = HEAP32[i19 >> 2] | 0;
     do {
      if ((i21 | 0) != 0) {
       i24 = i21 | 0;
       i23 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
       if ((i23 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i21);
        break;
       } else {
        HEAP32[i24 >> 2] = i23;
        break;
       }
      }
     } while (0);
     i20 = i20 + 1 | 0;
     if (i20 >>> 0 >= (HEAP32[i5 >> 2] | 0) >>> 0) {
      break;
     }
    }
   }
   i5 = HEAP32[i13 >> 2] | 0;
   i20 = i12 | 0;
   HEAP32[i20 >> 2] = i15;
   __ZN9Inspector42InspectorIndexedDBBackendDispatcherHandler28RequestDatabaseNamesCallback11sendSuccessEN3WTF10PassRefPtrINS_11TypeBuilder5ArrayINS2_6StringEEEEE(i5, i12);
   i5 = HEAP32[i20 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i20 = i5 + 4 | 0;
     i19 = i20 | 0;
     i1 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
     if ((i1 | 0) != 0) {
      HEAP32[i19 >> 2] = i1;
      break;
     }
     i1 = i20 - 4 | 0;
     if ((i1 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 127](i1);
    }
   } while (0);
   if ((i14 | 0) == 0) {
    break;
   }
   i5 = i14 | 0;
   i15 = i14 | 0;
   i1 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) != 0) {
    HEAP32[i15 >> 2] = i1;
    break;
   }
   i1 = i5 + 12 | 0;
   i15 = HEAP32[i1 >> 2] | 0;
   i20 = i5 + 4 | 0;
   i19 = i20;
   if ((i15 | 0) != 0) {
    i16 = HEAP32[i19 >> 2] | 0;
    i18 = i16 + (i15 << 2) | 0;
    i15 = i16;
    while (1) {
     i16 = HEAP32[i15 >> 2] | 0;
     do {
      if ((i16 | 0) != 0) {
       i3 = i16 | 0;
       i17 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
       if ((i17 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i16);
        break;
       } else {
        HEAP32[i3 >> 2] = i17;
        break;
       }
      }
     } while (0);
     i15 = i15 + 4 | 0;
     if ((i15 | 0) == (i18 | 0)) {
      break;
     }
    }
    HEAP32[i1 >> 2] = 0;
   }
   i18 = HEAP32[i19 >> 2] | 0;
   if ((i18 | 0) != 0) {
    HEAP32[i20 >> 2] = 0;
    HEAP32[i5 + 8 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i18);
   }
   __ZN3WTF8fastFreeEPv(i14);
  } else {
   i18 = HEAP32[i13 >> 2] | 0;
   __ZN3WTF6StringC1EPKc(i8, H_BASE + 32 | 0);
   __ZN9Inspector26InspectorBackendDispatcher12CallbackBase11sendFailureERKN3WTF6StringE(i18, i8);
   i18 = HEAP32[i8 >> 2] | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   i15 = i18 | 0;
   i16 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    break;
   } else {
    HEAP32[i15 >> 2] = i16;
    break;
   }
  }
 } while (0);
 if ((i7 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i8 = i7 + 4 | 0;
 i7 = i8 | 0;
 i13 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 if ((i13 | 0) != 0) {
  HEAP32[i7 >> 2] = i13;
  STACKTOP = i2;
  return;
 }
 i13 = i8 - 4 | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore6IDBAnyD1Ev(i13);
 __ZN3WTF8fastFreeEPv(i13);
 STACKTOP = i2;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 728 >> 2] = F_BASE_vi + 36;
 HEAP32[H_BASE + 732 >> 2] = F_BASE_vi + 40;
 HEAP32[H_BASE + 736 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 740 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 744 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 768 >> 2] = F_BASE_vi + 46;
 HEAP32[H_BASE + 772 >> 2] = F_BASE_vi + 60;
 HEAP32[H_BASE + 776 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 780 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 784 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 788 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 792 >> 2] = F_BASE_iii + 16;
 HEAP32[H_BASE + 796 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 800 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 804 >> 2] = F_BASE_iii + 18;
 HEAP32[H_BASE + 808 >> 2] = F_BASE_iii + 24;
 HEAP32[H_BASE + 812 >> 2] = F_BASE_iii + 28;
 HEAP32[H_BASE + 816 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 820 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 824 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 848 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 852 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 856 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 860 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 864 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 868 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 872 >> 2] = F_BASE_iii + 16;
 HEAP32[H_BASE + 876 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 880 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 884 >> 2] = F_BASE_iii + 18;
 HEAP32[H_BASE + 888 >> 2] = F_BASE_iii + 24;
 HEAP32[H_BASE + 892 >> 2] = F_BASE_iii + 28;
 HEAP32[H_BASE + 896 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 900 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 904 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 928 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 932 >> 2] = F_BASE_vi + 44;
 HEAP32[H_BASE + 936 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 940 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 944 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 948 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 952 >> 2] = F_BASE_iii + 16;
 HEAP32[H_BASE + 956 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 960 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 964 >> 2] = F_BASE_iii + 18;
 HEAP32[H_BASE + 968 >> 2] = F_BASE_iii + 24;
 HEAP32[H_BASE + 972 >> 2] = F_BASE_iii + 28;
 HEAP32[H_BASE + 976 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 980 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 984 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 1008 >> 2] = F_BASE_vi + 62;
 HEAP32[H_BASE + 1012 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 1016 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 1020 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 1024 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 1028 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 1032 >> 2] = F_BASE_iii + 16;
 HEAP32[H_BASE + 1036 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 1040 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 1044 >> 2] = F_BASE_iii + 18;
 HEAP32[H_BASE + 1048 >> 2] = F_BASE_iii + 24;
 HEAP32[H_BASE + 1052 >> 2] = F_BASE_iii + 28;
 HEAP32[H_BASE + 1056 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 1060 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 1064 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 1088 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 1092 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 1096 >> 2] = F_BASE_iii + 26;
 HEAP32[H_BASE + 1100 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 1104 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 1108 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 1112 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 1136 >> 2] = F_BASE_vi + 56;
 HEAP32[H_BASE + 1140 >> 2] = F_BASE_vi + 34;
 HEAP32[H_BASE + 1144 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 1148 >> 2] = F_BASE_vi + 54;
 HEAP32[H_BASE + 1152 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 1156 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 1160 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 1164 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 1168 >> 2] = F_BASE_viiiii + 4;
 HEAP32[H_BASE + 1172 >> 2] = F_BASE_viiiiiiiiii + 2;
 HEAP32[H_BASE + 1176 >> 2] = F_BASE_viiiiii + 2;
 HEAP32[H_BASE + 1188 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 1192 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 1196 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 1200 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 1204 >> 2] = F_BASE_viiiiiiiiii + 4;
 HEAP32[H_BASE + 1208 >> 2] = F_BASE_viiiiii + 4;
 HEAP32[H_BASE + 1212 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 1216 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 1240 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 1244 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 1248 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1252 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1256 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 1280 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 1284 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 1288 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 1292 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 1312 >> 2] = F_BASE_vi + 52;
 HEAP32[H_BASE + 1316 >> 2] = F_BASE_vi + 42;
 HEAP32[H_BASE + 1320 >> 2] = F_BASE_iii + 20;
 HEAP32[H_BASE + 1324 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 1328 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 1332 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 1336 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 1360 >> 2] = F_BASE_vi + 48;
 HEAP32[H_BASE + 1364 >> 2] = F_BASE_vi + 50;
 HEAP32[H_BASE + 1368 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 1372 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 1376 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 1380 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 1384 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 1408 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 1412 >> 2] = F_BASE_vi + 58;
 HEAP32[H_BASE + 1416 >> 2] = F_BASE_iii + 22;
 HEAP32[H_BASE + 1420 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 1424 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 1428 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 1432 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 1456 >> 2] = F_BASE_vi + 66;
 HEAP32[H_BASE + 1460 >> 2] = F_BASE_vi + 68;
 HEAP32[H_BASE + 1464 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 1468 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 1488 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 1492 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 1496 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 1500 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 1520 >> 2] = F_BASE_vi + 64;
 HEAP32[H_BASE + 1524 >> 2] = F_BASE_vi + 38;
}
function __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore22IDBObjectStoreMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E3addINS_22IdentityHashTranslatorIS8_EERKxRKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIxS4_S6_S8_SE_SB_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 232 | 0;
 i6 = i5 | 0;
 i7 = i5 + 80 | 0;
 i8 = i5 + 152 | 0;
 i9 = i2 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i11 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i11 | 0) == 0) {
   i12 = 8;
  } else {
   i13 = i11 << 1;
   i12 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i13 | 0) ? i11 : i13;
  }
  __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore22IDBObjectStoreMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E6rehashEiPS4_(i2, i12, 0) | 0;
  i14 = HEAP32[i9 >> 2] | 0;
 } else {
  i14 = i10;
 }
 i10 = HEAP32[i2 + 8 >> 2] | 0;
 i12 = HEAP32[i3 >> 2] | 0;
 i13 = HEAP32[i3 + 4 >> 2] | 0;
 i3 = _i64Add(i12, i13, ~0, ~i12) | 0;
 i11 = tempRet0;
 i15 = (i3 >>> 22 | i11 << 10) ^ i3;
 i3 = (i11 >>> 22 | 0 << 10) ^ i11;
 i11 = _i64Add(i15, i3, ~(i15 << 13 | 0 >>> 19), ~(i3 << 13 | i15 >>> 19)) | 0;
 i15 = tempRet0;
 i3 = ___muldi3((i11 >>> 8 | i15 << 24) ^ i11, (i15 >>> 8 | 0 << 24) ^ i15, 9, 0) | 0;
 i15 = tempRet0;
 i11 = (i3 >>> 15 | i15 << 17) ^ i3;
 i3 = (i15 >>> 15 | 0 << 17) ^ i15;
 i15 = _i64Add(i11, i3, ~(i11 << 27 | 0 >>> 5), ~(i3 << 27 | i11 >>> 5)) | 0;
 i11 = (i15 >>> 31 | tempRet0 << 1) ^ i15;
 i15 = i11 & i10;
 i3 = i14 + (i15 * 80 & -1) | 0;
 i16 = i3 | 0;
 i17 = HEAP32[i16 >> 2] | 0;
 i18 = HEAP32[i16 + 4 >> 2] | 0;
 do {
  if ((i17 | 0) == 0 & (i18 | 0) == 0) {
   i19 = i3;
   i20 = 11;
  } else {
   i16 = (i11 >>> 23) + ~i11 | 0;
   i21 = i16 << 12 ^ i16;
   i16 = i21 >>> 7 ^ i21;
   i21 = i16 << 2 ^ i16;
   i16 = i21 >>> 20 ^ i21 | 1;
   i21 = 0;
   i22 = 0;
   i23 = i15;
   i24 = i3;
   i25 = i18;
   i26 = i17;
   while (1) {
    if ((i26 | 0) == (i12 | 0) & (i25 | 0) == (i13 | 0)) {
     i20 = 8;
     break;
    }
    i27 = (i26 | 0) == (-1 | 0) & (i25 | 0) == (-1 | 0) ? i24 : i22;
    i28 = (i21 | 0) == 0 ? i16 : i21;
    i29 = i28 + i23 & i10;
    i30 = i14 + (i29 * 80 & -1) | 0;
    i31 = i30 | 0;
    i32 = HEAP32[i31 >> 2] | 0;
    i33 = HEAP32[i31 + 4 >> 2] | 0;
    if ((i32 | 0) == 0 & (i33 | 0) == 0) {
     i20 = 10;
     break;
    } else {
     i21 = i28;
     i22 = i27;
     i23 = i29;
     i24 = i30;
     i25 = i33;
     i26 = i32;
    }
   }
   if ((i20 | 0) == 8) {
    i26 = i14 + ((HEAP32[i2 + 4 >> 2] | 0) * 80 & -1) | 0;
    i25 = i1;
    HEAP32[i25 >> 2] = i24;
    HEAP32[i25 + 4 >> 2] = i26;
    HEAP8[i1 + 8 | 0] = 0;
    STACKTOP = i5;
    return;
   } else if ((i20 | 0) == 10) {
    if ((i27 | 0) == 0) {
     i19 = i30;
     i20 = 11;
     break;
    }
    HEAP32[i7 >> 2] = 0;
    _memset(i7 + 16 | 0, 0, 20) | 0;
    _memset(i7 + 48 | 0, 0, 20) | 0;
    i26 = i6 | 0;
    HEAP32[i26 >> 2] = 0;
    HEAP32[i26 + 4 >> 2] = 0;
    i25 = i6 + 8 | 0;
    __ZN7WebCore22IDBObjectStoreMetadataC1ERKS0_(i25, i7);
    i23 = i8 | 0;
    i22 = HEAP32[i26 + 4 >> 2] | 0;
    HEAP32[i23 >> 2] = HEAP32[i26 >> 2];
    HEAP32[i23 + 4 >> 2] = i22;
    i22 = i8 + 8 | 0;
    __ZN7WebCore22IDBObjectStoreMetadataC1ERKS0_(i22, i25);
    __ZN7WebCore22IDBObjectStoreMetadataD1Ev(i25);
    __ZN7WebCore22IDBObjectStoreMetadataD1Ev(i7);
    i25 = i27 | 0;
    i26 = HEAP32[i23 + 4 >> 2] | 0;
    HEAP32[i25 >> 2] = HEAP32[i23 >> 2];
    HEAP32[i25 + 4 >> 2] = i26;
    __ZN7WebCore22IDBObjectStoreMetadataC1ERKS0_(i27 + 8 | 0, i22);
    __ZN7WebCore22IDBObjectStoreMetadataD1Ev(i22);
    i22 = i2 + 16 | 0;
    HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) - 1;
    i34 = i27;
    i35 = i22;
    break;
   }
  }
 } while (0);
 if ((i20 | 0) == 11) {
  i34 = i19;
  i35 = i2 + 16 | 0;
 }
 i19 = i4 | 0;
 i20 = HEAP32[i19 + 4 >> 2] | 0;
 i27 = i34 | 0;
 HEAP32[i27 >> 2] = HEAP32[i19 >> 2];
 HEAP32[i27 + 4 >> 2] = i20;
 __ZN7WebCore22IDBObjectStoreMetadataaSERKS0_(i34 + 8 | 0, i4 + 8 | 0) | 0;
 i4 = i2 + 12 | 0;
 i20 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i20;
 i4 = i2 + 4 | 0;
 i27 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i35 >> 2] | 0) + i20 << 1 | 0) < (i27 | 0)) {
  i36 = i34;
  i37 = i27;
 } else {
  if ((i27 | 0) == 0) {
   i38 = 8;
  } else {
   i35 = i27 << 1;
   i38 = (i20 * 6 & -1 | 0) < (i35 | 0) ? i27 : i35;
  }
  i35 = __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore22IDBObjectStoreMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E6rehashEiPS4_(i2, i38, i34) | 0;
  i36 = i35;
  i37 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i9 >> 2] | 0) + (i37 * 80 & -1) | 0;
 i37 = i1;
 HEAP32[i37 >> 2] = i36;
 HEAP32[i37 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 STACKTOP = i5;
 return;
}
function ___udivmoddi4(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
 i6 = i1;
 i7 = i2;
 i8 = i7;
 i9 = i3;
 i10 = i4;
 i11 = i10;
 if ((i8 | 0) == 0) {
  i12 = (i5 | 0) != 0;
  if ((i11 | 0) == 0) {
   if (i12) {
    HEAP32[i5 >> 2] = (i6 >>> 0) % (i9 >>> 0);
    HEAP32[i5 + 4 >> 2] = 0;
   }
   i13 = 0;
   i14 = (i6 >>> 0) / (i9 >>> 0) >>> 0;
   return (tempRet0 = i13, i14) | 0;
  } else {
   if (!i12) {
    i13 = 0;
    i14 = 0;
    return (tempRet0 = i13, i14) | 0;
   }
   HEAP32[i5 >> 2] = i1 & -1;
   HEAP32[i5 + 4 >> 2] = i2 & 0;
   i13 = 0;
   i14 = 0;
   return (tempRet0 = i13, i14) | 0;
  }
 }
 i12 = (i11 | 0) == 0;
 do {
  if ((i9 | 0) == 0) {
   if (i12) {
    if ((i5 | 0) != 0) {
     HEAP32[i5 >> 2] = (i8 >>> 0) % (i9 >>> 0);
     HEAP32[i5 + 4 >> 2] = 0;
    }
    i13 = 0;
    i14 = (i8 >>> 0) / (i9 >>> 0) >>> 0;
    return (tempRet0 = i13, i14) | 0;
   }
   if ((i6 | 0) == 0) {
    if ((i5 | 0) != 0) {
     HEAP32[i5 >> 2] = 0;
     HEAP32[i5 + 4 >> 2] = (i8 >>> 0) % (i11 >>> 0);
    }
    i13 = 0;
    i14 = (i8 >>> 0) / (i11 >>> 0) >>> 0;
    return (tempRet0 = i13, i14) | 0;
   }
   i15 = i11 - 1 | 0;
   if ((i15 & i11 | 0) == 0) {
    if ((i5 | 0) != 0) {
     HEAP32[i5 >> 2] = i1 & -1;
     HEAP32[i5 + 4 >> 2] = i15 & i8 | i2 & 0;
    }
    i13 = 0;
    i14 = i8 >>> ((_llvm_cttz_i32(i11 | 0) | 0) >>> 0);
    return (tempRet0 = i13, i14) | 0;
   }
   i15 = (_llvm_ctlz_i32(i11 | 0) | 0) - (_llvm_ctlz_i32(i8 | 0) | 0) | 0;
   if (i15 >>> 0 <= 30) {
    i16 = i15 + 1 | 0;
    i17 = 31 - i15 | 0;
    i18 = i16;
    i19 = i8 << i17 | i6 >>> (i16 >>> 0);
    i20 = i8 >>> (i16 >>> 0);
    i21 = 0;
    i22 = i6 << i17;
    break;
   }
   if ((i5 | 0) == 0) {
    i13 = 0;
    i14 = 0;
    return (tempRet0 = i13, i14) | 0;
   }
   HEAP32[i5 >> 2] = i1 & -1;
   HEAP32[i5 + 4 >> 2] = i7 | i2 & 0;
   i13 = 0;
   i14 = 0;
   return (tempRet0 = i13, i14) | 0;
  } else {
   if (!i12) {
    i17 = (_llvm_ctlz_i32(i11 | 0) | 0) - (_llvm_ctlz_i32(i8 | 0) | 0) | 0;
    if (i17 >>> 0 <= 31) {
     i16 = i17 + 1 | 0;
     i15 = 31 - i17 | 0;
     i23 = i17 - 31 >> 31;
     i18 = i16;
     i19 = i6 >>> (i16 >>> 0) & i23 | i8 << i15;
     i20 = i8 >>> (i16 >>> 0) & i23;
     i21 = 0;
     i22 = i6 << i15;
     break;
    }
    if ((i5 | 0) == 0) {
     i13 = 0;
     i14 = 0;
     return (tempRet0 = i13, i14) | 0;
    }
    HEAP32[i5 >> 2] = i1 & -1;
    HEAP32[i5 + 4 >> 2] = i7 | i2 & 0;
    i13 = 0;
    i14 = 0;
    return (tempRet0 = i13, i14) | 0;
   }
   i15 = i9 - 1 | 0;
   if ((i15 & i9 | 0) != 0) {
    i23 = (_llvm_ctlz_i32(i9 | 0) | 0) + 33 - (_llvm_ctlz_i32(i8 | 0) | 0) | 0;
    i16 = 64 - i23 | 0;
    i17 = 32 - i23 | 0;
    i24 = i17 >> 31;
    i25 = i23 - 32 | 0;
    i26 = i25 >> 31;
    i18 = i23;
    i19 = i17 - 1 >> 31 & i8 >>> (i25 >>> 0) | (i8 << i17 | i6 >>> (i23 >>> 0)) & i26;
    i20 = i26 & i8 >>> (i23 >>> 0);
    i21 = i6 << i16 & i24;
    i22 = (i8 << i16 | i6 >>> (i25 >>> 0)) & i24 | i6 << i17 & i23 - 33 >> 31;
    break;
   }
   if ((i5 | 0) != 0) {
    HEAP32[i5 >> 2] = i15 & i6;
    HEAP32[i5 + 4 >> 2] = 0;
   }
   if ((i9 | 0) == 1) {
    i13 = i7 | i2 & 0;
    i14 = i1 & -1 | 0;
    return (tempRet0 = i13, i14) | 0;
   } else {
    i15 = _llvm_cttz_i32(i9 | 0) | 0;
    i13 = i8 >>> (i15 >>> 0) | 0;
    i14 = i8 << 32 - i15 | i6 >>> (i15 >>> 0) | 0;
    return (tempRet0 = i13, i14) | 0;
   }
  }
 } while (0);
 if ((i18 | 0) == 0) {
  i27 = i22;
  i28 = i21;
  i29 = i20;
  i30 = i19;
  i31 = 0;
  i32 = 0;
 } else {
  i6 = i3 & -1 | 0;
  i3 = i10 | i4 & 0;
  i4 = _i64Add(i6, i3, -1, -1) | 0;
  i10 = tempRet0;
  i8 = i22;
  i22 = i21;
  i21 = i20;
  i20 = i19;
  i19 = i18;
  i18 = 0;
  while (1) {
   i33 = i22 >>> 31 | i8 << 1;
   i34 = i18 | i22 << 1;
   i9 = i20 << 1 | i8 >>> 31 | 0;
   i1 = i20 >>> 31 | i21 << 1 | 0;
   _i64Subtract(i4, i10, i9, i1) | 0;
   i2 = tempRet0;
   i7 = i2 >> 31 | ((i2 | 0) < 0 ? -1 : 0) << 1;
   i35 = i7 & 1;
   i36 = _i64Subtract(i9, i1, i7 & i6, (((i2 | 0) < 0 ? -1 : 0) >> 31 | ((i2 | 0) < 0 ? -1 : 0) << 1) & i3) | 0;
   i37 = tempRet0;
   i2 = i19 - 1 | 0;
   if ((i2 | 0) == 0) {
    break;
   } else {
    i8 = i33;
    i22 = i34;
    i21 = i37;
    i20 = i36;
    i19 = i2;
    i18 = i35;
   }
  }
  i27 = i33;
  i28 = i34;
  i29 = i37;
  i30 = i36;
  i31 = 0;
  i32 = i35;
 }
 i35 = i28;
 i28 = 0;
 if ((i5 | 0) != 0) {
  HEAP32[i5 >> 2] = i30;
  HEAP32[i5 + 4 >> 2] = i29;
 }
 i13 = (i35 | 0) >>> 31 | (i27 | i28) << 1 | (i28 << 1 | i35 >>> 31) & 0 | i31;
 i14 = (i35 << 1 | 0 >>> 31) & -2 | i32;
 return (tempRet0 = i13, i14) | 0;
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
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 127](i16);
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
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 127](i2);
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
function __ZN7WebCore23InspectorIndexedDBAgent20requestDatabaseNamesEPN3WTF6StringERKS2_NS1_10PassRefPtrIN9Inspector42InspectorIndexedDBBackendDispatcherHandler28RequestDatabaseNamesCallbackEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = __ZN7WebCore18InspectorPageAgent27findFrameWithSecurityOriginERKN3WTF6StringE(HEAP32[i1 + 20 >> 2] | 0, i3) | 0;
 do {
  if ((i12 | 0) != 0) {
   i3 = HEAP32[i12 + 456 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   i1 = __ZN7WebCoreL16assertIDBFactoryEPN3WTF6StringEPNS_8DocumentE(i2, HEAP32[i3 + 336 >> 2] | 0) | 0;
   if ((i1 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   HEAP32[i7 >> 2] = 0;
   __ZN7WebCore10IDBFactory16getDatabaseNamesEPNS_22ScriptExecutionContextERi(i8, i1, i3 + 88 | 0, i7);
   i1 = i8 | 0;
   i13 = HEAP32[i1 >> 2] | 0;
   HEAP32[i1 >> 2] = 0;
   do {
    if ((HEAP32[i7 >> 2] | 0) == 0) {
     i1 = i13 + 12 | 0;
     i14 = HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] | 0;
     i15 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 648 | 0;
     i16 = i4 | 0;
     i17 = HEAP32[i16 >> 2] | 0;
     HEAP32[i16 >> 2] = 0;
     __ZNK7WebCore14SecurityOrigin11toRawStringEv(i11, HEAP32[i3 + 100 >> 2] | 0);
     i16 = __ZN3WTF10fastMallocEj(20) | 0;
     HEAP32[i16 + 4 >> 2] = 1;
     HEAP32[i16 + 8 >> 2] = 3;
     HEAP32[i16 >> 2] = H_BASE + 1312;
     HEAP32[i16 + 12 >> 2] = i17;
     i17 = i11 | 0;
     i18 = HEAP32[i17 >> 2] | 0;
     HEAP32[i16 + 16 >> 2] = i18;
     if ((i18 | 0) != 0) {
      i19 = i18 | 0;
      HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 2;
     }
     i19 = i10 | 0;
     HEAP32[i19 >> 2] = i16;
     FUNCTION_TABLE_iiiii[i14 & 1](i1, i15, i10, 0) | 0;
     i15 = HEAP32[i19 >> 2] | 0;
     do {
      if ((i15 | 0) != 0) {
       i19 = i15 + 4 | 0;
       i1 = i19 | 0;
       i14 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
       if ((i14 | 0) != 0) {
        HEAP32[i1 >> 2] = i14;
        break;
       }
       i14 = i19 - 4 | 0;
       if ((i14 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 127](i14);
      }
     } while (0);
     i15 = HEAP32[i17 >> 2] | 0;
     if ((i15 | 0) == 0) {
      break;
     }
     i14 = i15 | 0;
     i19 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
     if ((i19 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i15);
      break;
     } else {
      HEAP32[i14 >> 2] = i19;
      break;
     }
    } else {
     i19 = HEAP32[i4 >> 2] | 0;
     __ZN3WTF6StringC1EPKc(i9, H_BASE + 664 | 0);
     __ZN9Inspector26InspectorBackendDispatcher12CallbackBase11sendFailureERKN3WTF6StringE(i19, i9);
     i19 = HEAP32[i9 >> 2] | 0;
     if ((i19 | 0) == 0) {
      break;
     }
     i14 = i19 | 0;
     i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i19);
      break;
     } else {
      HEAP32[i14 >> 2] = i15;
      break;
     }
    }
   } while (0);
   if ((i13 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   i3 = i13 + 4 | 0;
   i15 = i3 | 0;
   i14 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   if ((i14 | 0) != 0) {
    HEAP32[i15 >> 2] = i14;
    STACKTOP = i5;
    return;
   }
   i14 = i3 - 4 | 0;
   if ((i14 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 127](i14);
   STACKTOP = i5;
   return;
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i6, H_BASE + 192 | 0);
 i9 = i6 | 0;
 i6 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 i4 = i2 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i6;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 | 0;
   i4 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i6 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i9 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i9 = i2 | 0;
 i4 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i9 >> 2] = i4;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore12_GLOBAL__N_120OpenDatabaseCallback11handleEventEPNS_22ScriptExecutionContextEPNS_5EventE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i4 = i2 | 0;
 i5 = i2 + 8 | 0;
 i6 = i2 + 16 | 0;
 i7 = i2 + 24 | 0;
 i8 = i2 + 32 | 0;
 i9 = i2 + 40 | 0;
 i10 = i2 + 48 | 0;
 i11 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
 if ((HEAP32[i3 + 12 >> 2] | 0) != (HEAP32[i11 + 648 >> 2] | 0)) {
  i11 = HEAP32[i1 + 12 >> 2] | 0;
  i12 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 12 >> 2] & 15](i11) | 0;
  __ZN3WTF6StringC1EPKc(i4, H_BASE + 96 | 0);
  __ZN9Inspector26InspectorBackendDispatcher12CallbackBase11sendFailureERKN3WTF6StringE(i12, i4);
  i12 = HEAP32[i4 >> 2] | 0;
  if ((i12 | 0) == 0) {
   STACKTOP = i2;
   return;
  }
  i4 = i12 | 0;
  i11 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
  if ((i11 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i12);
   STACKTOP = i2;
   return;
  } else {
   HEAP32[i4 >> 2] = i11;
   STACKTOP = i2;
   return;
  }
 }
 i11 = HEAP32[i3 + 32 >> 2] | 0;
 if ((i11 | 0) == 0) {
  i13 = 0;
 } else {
  i13 = i11 - 12 | 0;
 }
 HEAP32[i5 >> 2] = 0;
 __ZNK7WebCore10IDBRequest6resultERi(i6, i13 | 0, i5);
 i13 = i6 | 0;
 i6 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 do {
  if ((HEAP32[i5 >> 2] | 0) == 0) {
   if ((HEAP32[i6 + 8 >> 2] | 0) != 5) {
    i13 = HEAP32[i1 + 12 >> 2] | 0;
    i11 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 12 >> 2] & 15](i13) | 0;
    __ZN3WTF6StringC1EPKc(i8, H_BASE + 8 | 0);
    __ZN9Inspector26InspectorBackendDispatcher12CallbackBase11sendFailureERKN3WTF6StringE(i11, i8);
    i11 = HEAP32[i8 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break;
    }
    i13 = i11 | 0;
    i3 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
    if ((i3 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i11);
     break;
    } else {
     HEAP32[i13 >> 2] = i3;
     break;
    }
   }
   __ZN7WebCore6IDBAny11idbDatabaseEv(i9, i6);
   i3 = i9 | 0;
   i13 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = 0;
   i3 = HEAP32[i1 + 12 >> 2] | 0;
   i11 = HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] | 0;
   i4 = i10 | 0;
   HEAP32[i4 >> 2] = i13;
   i12 = (i13 | 0) == 0;
   if (!i12) {
    i14 = i13 + 36 | 0;
    HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
   }
   FUNCTION_TABLE_vii[i11 & 31](i3, i10);
   i3 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i3 | 0) != 0) {
     i4 = i3 + 36 | 0;
     i11 = i4 | 0;
     i14 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
     if ((i14 | 0) != 0) {
      HEAP32[i11 >> 2] = i14;
      break;
     }
     i14 = i4 - 36 | 0;
     if ((i14 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 44 >> 2] & 127](i14);
    }
   } while (0);
   __ZN7WebCore28IDBPendingTransactionMonitor25deactivateNewTransactionsEv();
   __ZN7WebCore11IDBDatabase5closeEv(i13);
   if (i12) {
    break;
   }
   i3 = i13 + 36 | 0;
   i14 = i3 | 0;
   i4 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i14 >> 2] = i4;
    break;
   }
   i4 = i3 - 36 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 44 >> 2] & 127](i4);
  } else {
   i4 = HEAP32[i1 + 12 >> 2] | 0;
   i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 15](i4) | 0;
   __ZN3WTF6StringC1EPKc(i7, H_BASE + 32 | 0);
   __ZN9Inspector26InspectorBackendDispatcher12CallbackBase11sendFailureERKN3WTF6StringE(i3, i7);
   i3 = HEAP32[i7 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   i4 = i3 | 0;
   i14 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i4 >> 2] = i14;
    break;
   }
  }
 } while (0);
 if ((i6 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i7 = i6 + 4 | 0;
 i6 = i7 | 0;
 i1 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i6 >> 2] = i1;
  STACKTOP = i2;
  return;
 }
 i1 = i7 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore6IDBAnyD1Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 STACKTOP = i2;
 return;
}
function __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEEaSERKS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 if ((i2 | 0) == (i1 | 0)) {
  return i1 | 0;
 }
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i2 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if (i4 >>> 0 > i6 >>> 0) {
  i7 = HEAP32[i1 >> 2] | 0;
  i8 = i7 + (i4 << 2) | 0;
  if ((i4 | 0) != (i6 | 0)) {
   i9 = i7 + (i6 << 2) | 0;
   while (1) {
    i7 = HEAP32[i9 >> 2] | 0;
    do {
     if ((i7 | 0) != 0) {
      i10 = i7 | 0;
      i11 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
      if ((i11 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i7);
       break;
      } else {
       HEAP32[i10 >> 2] = i11;
       break;
      }
     }
    } while (0);
    i9 = i9 + 4 | 0;
    if ((i9 | 0) == (i8 | 0)) {
     break;
    }
   }
  }
  HEAP32[i3 >> 2] = i6;
  i12 = i6;
 } else {
  i8 = i1 + 4 | 0;
  i9 = HEAP32[i8 >> 2] | 0;
  do {
   if (i6 >>> 0 > i9 >>> 0) {
    do {
     if ((i9 | 0) != 0) {
      i7 = i1 | 0;
      if ((i4 | 0) != 0) {
       i11 = HEAP32[i7 >> 2] | 0;
       i10 = i11 + (i4 << 2) | 0;
       i13 = i11;
       while (1) {
        i11 = HEAP32[i13 >> 2] | 0;
        do {
         if ((i11 | 0) != 0) {
          i14 = i11 | 0;
          i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
          if ((i15 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i11);
           break;
          } else {
           HEAP32[i14 >> 2] = i15;
           break;
          }
         }
        } while (0);
        i13 = i13 + 4 | 0;
        if ((i13 | 0) == (i10 | 0)) {
         break;
        }
       }
       HEAP32[i3 >> 2] = 0;
      }
      i10 = HEAP32[i7 >> 2] | 0;
      if ((i10 | 0) == 0) {
       break;
      }
      HEAP32[i7 >> 2] = 0;
      HEAP32[i8 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i10);
     }
    } while (0);
    i10 = HEAP32[i5 >> 2] | 0;
    if ((HEAP32[i8 >> 2] | 0) >>> 0 >= i10 >>> 0) {
     break;
    }
    i13 = i1 | 0;
    i11 = HEAP32[i13 >> 2] | 0;
    if (i10 >>> 0 > 1073741823 >>> 0) {
     _WTFCrash();
     return 0;
    }
    i15 = HEAP32[i3 >> 2] | 0;
    i14 = __ZN3WTF18fastMallocGoodSizeEj(i10 << 2) | 0;
    HEAP32[i8 >> 2] = i14 >>> 2;
    i10 = __ZN3WTF10fastMallocEj(i14) | 0;
    HEAP32[i13 >> 2] = i10;
    i14 = i11;
    _memcpy(i10 | 0, i14 | 0, i15 << 2) | 0;
    if ((i11 | 0) == 0) {
     break;
    }
    if ((HEAP32[i13 >> 2] | 0) == (i11 | 0)) {
     HEAP32[i13 >> 2] = 0;
     HEAP32[i8 >> 2] = 0;
    }
    __ZN3WTF8fastFreeEPv(i14);
   }
  } while (0);
  i12 = HEAP32[i3 >> 2] | 0;
 }
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 i4 = i2 + (i12 << 2) | 0;
 i9 = i1 | 0;
 if ((i12 | 0) == 0) {
  i16 = i2;
  i17 = 0;
 } else {
  i12 = HEAP32[i9 >> 2] | 0;
  i6 = i2;
  while (1) {
   i2 = HEAP32[i6 >> 2] | 0;
   if ((i2 | 0) != 0) {
    i14 = i2 | 0;
    HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
   }
   i14 = i12 | 0;
   i13 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = i2;
   do {
    if ((i13 | 0) != 0) {
     i2 = i13 | 0;
     i14 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i13);
      break;
     } else {
      HEAP32[i2 >> 2] = i14;
      break;
     }
    }
   } while (0);
   i13 = i6 + 4 | 0;
   if ((i13 | 0) == (i4 | 0)) {
    break;
   } else {
    i12 = i12 + 4 | 0;
    i6 = i13;
   }
  }
  i16 = HEAP32[i8 >> 2] | 0;
  i17 = HEAP32[i3 >> 2] | 0;
 }
 i8 = HEAP32[i5 >> 2] | 0;
 i6 = i16 + (i8 << 2) | 0;
 if ((i17 | 0) == (i8 | 0)) {
  i18 = i17;
 } else {
  i8 = i16 + (i17 << 2) | 0;
  i16 = (HEAP32[i9 >> 2] | 0) + (i17 << 2) | 0;
  while (1) {
   i17 = HEAP32[i8 >> 2] | 0;
   HEAP32[i16 >> 2] = i17;
   if ((i17 | 0) != 0) {
    i9 = i17 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
   }
   i9 = i8 + 4 | 0;
   if ((i9 | 0) == (i6 | 0)) {
    break;
   } else {
    i8 = i9;
    i16 = i16 + 4 | 0;
   }
  }
  i18 = HEAP32[i5 >> 2] | 0;
 }
 HEAP32[i3 >> 2] = i18;
 return i1 | 0;
}
function __ZN7WebCore22IDBObjectStoreMetadataC1ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i6 = i5 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 i6 = i1 + 8 | 0;
 i5 = i2 + 8 | 0;
 i7 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i6 + 4 >> 2] = i7;
 HEAP32[i1 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
 i7 = HEAP32[i2 + 20 >> 2] | 0;
 HEAP32[i1 + 20 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i6 = i7 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 i6 = HEAP32[i2 + 28 >> 2] | 0;
 i7 = i2 + 32 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 i8 = i1 + 24 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i1 + 28 | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i1 + 32 >> 2] = i5;
 do {
  if ((i6 | 0) != 0) {
   if (i6 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   }
   i5 = __ZN3WTF18fastMallocGoodSizeEj(i6 << 2) | 0;
   HEAP32[i9 >> 2] = i5 >>> 2;
   i10 = __ZN3WTF10fastMallocEj(i5) | 0;
   i5 = i10;
   HEAP32[i8 >> 2] = i5;
   if ((i10 | 0) == 0) {
    break;
   }
   i10 = HEAP32[i2 + 24 >> 2] | 0;
   i11 = HEAP32[i7 >> 2] | 0;
   i12 = i10 + (i11 << 2) | 0;
   if ((i11 | 0) == 0) {
    break;
   } else {
    i13 = i10;
    i14 = i5;
   }
   while (1) {
    i5 = HEAP32[i13 >> 2] | 0;
    HEAP32[i14 >> 2] = i5;
    if ((i5 | 0) != 0) {
     i10 = i5 | 0;
     HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
    }
    i10 = i13 + 4 | 0;
    if ((i10 | 0) == (i12 | 0)) {
     break;
    } else {
     i13 = i10;
     i14 = i14 + 4 | 0;
    }
   }
  }
 } while (0);
 HEAP8[i1 + 36 | 0] = HEAP8[i2 + 36 | 0] & 1;
 i14 = i1 + 40 | 0;
 i13 = i2 + 40 | 0;
 i7 = HEAP32[i13 + 4 >> 2] | 0;
 HEAP32[i14 >> 2] = HEAP32[i13 >> 2];
 HEAP32[i14 + 4 >> 2] = i7;
 i7 = i1 + 48 | 0;
 i1 = i7 | 0;
 _memset(i7 | 0, 0, 20) | 0;
 i7 = HEAP32[i2 + 48 >> 2] | 0;
 i14 = HEAP32[i2 + 52 >> 2] | 0;
 i13 = i7 + (i14 * 48 & -1) | 0;
 if ((HEAP32[i2 + 60 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 L22 : do {
  if ((i14 | 0) == 0) {
   i15 = i7;
  } else {
   i2 = i7;
   while (1) {
    i8 = i2 | 0;
    i9 = HEAP32[i8 >> 2] | 0;
    i6 = HEAP32[i8 + 4 >> 2] | 0;
    if (!((i9 | 0) == (-1 | 0) & (i6 | 0) == (-1 | 0) | (i9 | 0) == 0 & (i6 | 0) == 0)) {
     i15 = i2;
     break L22;
    }
    i2 = i2 + 48 | 0;
    if ((i2 | 0) == (i13 | 0)) {
     break;
    }
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((i15 | 0) == (i13 | 0)) {
  STACKTOP = i3;
  return;
 } else {
  i16 = i15;
 }
 L30 : while (1) {
  __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E3addINS_22IdentityHashTranslatorIS8_EERKxRKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIxS4_S6_S8_SE_SB_EEEEOT0_OT1_(i4, i1, i16 | 0, i16);
  i15 = i16 + 48 | 0;
  if ((i15 | 0) == (i13 | 0)) {
   i17 = 26;
   break;
  } else {
   i18 = i15;
  }
  while (1) {
   i15 = i18 | 0;
   i7 = HEAP32[i15 >> 2] | 0;
   i14 = HEAP32[i15 + 4 >> 2] | 0;
   if (!((i7 | 0) == (-1 | 0) & (i14 | 0) == (-1 | 0) | (i7 | 0) == 0 & (i14 | 0) == 0)) {
    break;
   }
   i14 = i18 + 48 | 0;
   if ((i14 | 0) == (i13 | 0)) {
    i17 = 28;
    break L30;
   } else {
    i18 = i14;
   }
  }
  if ((i18 | 0) == (i13 | 0)) {
   i17 = 27;
   break;
  } else {
   i16 = i18;
  }
 }
 if ((i17 | 0) == 26) {
  STACKTOP = i3;
  return;
 } else if ((i17 | 0) == 27) {
  STACKTOP = i3;
  return;
 } else if ((i17 | 0) == 28) {
  STACKTOP = i3;
  return;
 }
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 127](i9);
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
function __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore22IDBObjectStoreMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E6rehashEiPS4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 240 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 88 | 0;
 i8 = i4 + 160 | 0;
 i9 = i1 + 4 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = i1 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 HEAP32[i9 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i2 - 1;
 i9 = __ZN3WTF10fastMallocEj(i2 * 80 & -1) | 0;
 if ((i2 | 0) > 0) {
  i13 = i7 | 0;
  i14 = i7 + 16 | 0;
  i15 = i7 + 48 | 0;
  i16 = i6 | 0;
  i17 = i6 + 8 | 0;
  i6 = i8 | 0;
  i18 = i8 + 8 | 0;
  i8 = 0;
  while (1) {
   HEAP32[i13 >> 2] = 0;
   _memset(i14 | 0, 0, 20) | 0;
   _memset(i15 | 0, 0, 20) | 0;
   HEAP32[i16 >> 2] = 0;
   HEAP32[i16 + 4 >> 2] = 0;
   __ZN7WebCore22IDBObjectStoreMetadataC1ERKS0_(i17, i7);
   i19 = HEAP32[i16 + 4 >> 2] | 0;
   HEAP32[i6 >> 2] = HEAP32[i16 >> 2];
   HEAP32[i6 + 4 >> 2] = i19;
   __ZN7WebCore22IDBObjectStoreMetadataC1ERKS0_(i18, i17);
   __ZN7WebCore22IDBObjectStoreMetadataD1Ev(i17);
   __ZN7WebCore22IDBObjectStoreMetadataD1Ev(i7);
   i19 = i9 + (i8 * 80 & -1) | 0;
   i20 = HEAP32[i6 + 4 >> 2] | 0;
   HEAP32[i19 >> 2] = HEAP32[i6 >> 2];
   HEAP32[i19 + 4 >> 2] = i20;
   __ZN7WebCore22IDBObjectStoreMetadataC1ERKS0_(i9 + (i8 * 80 & -1) + 8 | 0, i18);
   __ZN7WebCore22IDBObjectStoreMetadataD1Ev(i18);
   i8 = i8 + 1 | 0;
   if ((i8 | 0) >= (i2 | 0)) {
    break;
   }
  }
 }
 HEAP32[i11 >> 2] = i9;
 if ((i10 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i21 = 0;
  i22 = i12;
  __ZN3WTF8fastFreeEPv(i22);
  STACKTOP = i4;
  return i21 | 0;
 }
 i9 = i5 | 0;
 i11 = 0;
 i2 = 0;
 while (1) {
  i8 = i12 + (i11 * 80 & -1) | 0;
  i18 = i8 | 0;
  i6 = HEAP32[i18 >> 2] | 0;
  i7 = HEAP32[i18 + 4 >> 2] | 0;
  if ((i6 | 0) == (-1 | 0) & (i7 | 0) == (-1 | 0) | (i6 | 0) == 0 & (i7 | 0) == 0) {
   i23 = i2;
  } else {
   __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore22IDBObjectStoreMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E16lookupForWritingINS_22IdentityHashTranslatorIS8_EExEENSt3__14pairIPS4_bEERKT0_(i5, i1, i18);
   i7 = HEAP32[i9 >> 2] | 0;
   i6 = i7 + 8 | 0;
   __ZN7WebCore22IDBObjectStoreMetadataD1Ev(i6);
   i17 = i7 | 0;
   i16 = HEAP32[i18 + 4 >> 2] | 0;
   HEAP32[i17 >> 2] = HEAP32[i18 >> 2];
   HEAP32[i17 + 4 >> 2] = i16;
   __ZN7WebCore22IDBObjectStoreMetadataC1ERKS0_(i6, i12 + (i11 * 80 & -1) + 8 | 0);
   i23 = (i8 | 0) == (i3 | 0) ? i7 : i2;
  }
  i7 = i11 + 1 | 0;
  if ((i7 | 0) == (i10 | 0)) {
   break;
  } else {
   i11 = i7;
   i2 = i23;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i10 | 0) > 0) {
  i24 = 0;
 } else {
  i21 = i23;
  i22 = i12;
  __ZN3WTF8fastFreeEPv(i22);
  STACKTOP = i4;
  return i21 | 0;
 }
 while (1) {
  i1 = i12 + (i24 * 80 & -1) | 0;
  if (!((HEAP32[i1 >> 2] | 0) == (-1 | 0) & (HEAP32[i1 + 4 >> 2] | 0) == (-1 | 0))) {
   __ZN7WebCore22IDBObjectStoreMetadataD1Ev(i12 + (i24 * 80 & -1) + 8 | 0);
  }
  i1 = i24 + 1 | 0;
  if ((i1 | 0) < (i10 | 0)) {
   i24 = i1;
  } else {
   i21 = i23;
   break;
  }
 }
 i22 = i12;
 __ZN3WTF8fastFreeEPv(i22);
 STACKTOP = i4;
 return i21 | 0;
}
function __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_EaSERKSF_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 _memset(i5 | 0, 0, 20) | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 i7 = HEAP32[i2 + 4 >> 2] | 0;
 i8 = i6 + (i7 * 48 & -1) | 0;
 L1 : do {
  if ((HEAP32[i2 + 12 >> 2] | 0) != 0) {
   L3 : do {
    if ((i7 | 0) == 0) {
     i9 = i6;
    } else {
     i10 = i6;
     while (1) {
      i11 = i10 | 0;
      i12 = HEAP32[i11 >> 2] | 0;
      i13 = HEAP32[i11 + 4 >> 2] | 0;
      if (!((i12 | 0) == (-1 | 0) & (i13 | 0) == (-1 | 0) | (i12 | 0) == 0 & (i13 | 0) == 0)) {
       i9 = i10;
       break L3;
      }
      i10 = i10 + 48 | 0;
      if ((i10 | 0) == (i8 | 0)) {
       break L1;
      }
     }
    }
   } while (0);
   if ((i9 | 0) == (i8 | 0)) {
    break;
   } else {
    i14 = i9;
   }
   while (1) {
    __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E3addINS_22IdentityHashTranslatorIS8_EERKxRKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIxS4_S6_S8_SE_SB_EEEEOT0_OT1_(i4, i5, i14 | 0, i14);
    i10 = i14 + 48 | 0;
    if ((i10 | 0) == (i8 | 0)) {
     break L1;
    } else {
     i15 = i10;
    }
    while (1) {
     i10 = i15 | 0;
     i13 = HEAP32[i10 >> 2] | 0;
     i12 = HEAP32[i10 + 4 >> 2] | 0;
     if (!((i13 | 0) == (-1 | 0) & (i12 | 0) == (-1 | 0) | (i13 | 0) == 0 & (i12 | 0) == 0)) {
      break;
     }
     i12 = i15 + 48 | 0;
     if ((i12 | 0) == (i8 | 0)) {
      break L1;
     } else {
      i15 = i12;
     }
    }
    if ((i15 | 0) == (i8 | 0)) {
     break;
    } else {
     i14 = i15;
    }
   }
  }
 } while (0);
 i15 = i1 | 0;
 i14 = HEAP32[i15 >> 2] | 0;
 i8 = i5 | 0;
 HEAP32[i15 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i8 >> 2] = i14;
 i8 = i1 + 4 | 0;
 i15 = HEAP32[i8 >> 2] | 0;
 i4 = i5 + 4 | 0;
 HEAP32[i8 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i4 >> 2] = i15;
 i4 = i1 + 8 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 i9 = i5 + 8 | 0;
 HEAP32[i4 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i9 >> 2] = i8;
 i8 = i1 + 12 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i4 = i5 + 12 | 0;
 HEAP32[i8 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i4 >> 2] = i9;
 i9 = i1 + 16 | 0;
 i4 = HEAP32[i9 >> 2] | 0;
 i8 = i5 + 16 | 0;
 HEAP32[i9 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i8 >> 2] = i4;
 if ((i14 | 0) == 0) {
  STACKTOP = i3;
  return i1 | 0;
 }
 __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E15deallocateTableEPS4_i(i14, i15);
 STACKTOP = i3;
 return i1 | 0;
}
function __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E8reinsertEOS4_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 | 0;
 __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E16lookupForWritingINS_22IdentityHashTranslatorIS8_EExEENSt3__14pairIPS4_bEERKT0_(i4, i1, i5);
 i1 = HEAP32[i4 >> 2] | 0;
 i4 = i1 + 40 | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 i7 = i1 + 32 | 0;
 if ((i6 | 0) != 0) {
  i8 = HEAP32[i7 >> 2] | 0;
  i9 = i8 + (i6 << 2) | 0;
  i6 = i8;
  while (1) {
   i8 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i10 = i8 | 0;
     i11 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
     if ((i11 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i8);
      break;
     } else {
      HEAP32[i10 >> 2] = i11;
      break;
     }
    }
   } while (0);
   i6 = i6 + 4 | 0;
   if ((i6 | 0) == (i9 | 0)) {
    break;
   }
  }
  HEAP32[i4 >> 2] = 0;
 }
 i9 = HEAP32[i7 >> 2] | 0;
 if ((i9 | 0) != 0) {
  HEAP32[i7 >> 2] = 0;
  HEAP32[i1 + 36 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i9);
 }
 i9 = i1 + 28 | 0;
 i6 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i8 = i6 | 0;
   i11 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i8 >> 2] = i11;
    break;
   }
  }
 } while (0);
 i6 = i1 + 8 | 0;
 i11 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i8 = i11 | 0;
   i10 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i8 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i11 = i1 | 0;
 i10 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i11 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i11 + 4 >> 2] = i10;
 i10 = i2 + 8 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i6 >> 2] = i11;
 i11 = i1 + 16 | 0;
 i6 = i2 + 16 | 0;
 i10 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i11 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i11 + 4 >> 2] = i10;
 HEAP32[i1 + 24 >> 2] = HEAP32[i2 + 24 >> 2];
 i10 = i2 + 28 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i9 >> 2] = i11;
 HEAP32[i7 >> 2] = 0;
 i11 = i1 + 36 | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i4 >> 2] = 0;
 i9 = i2 + 40 | 0;
 HEAP32[i4 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i9 >> 2] = 0;
 i9 = i2 + 32 | 0;
 i4 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i9 >> 2] = i4;
 i4 = i2 + 36 | 0;
 i9 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i4 >> 2] = i9;
 HEAP8[i1 + 44 | 0] = HEAP8[i2 + 44 | 0] & 1;
 HEAP8[i1 + 45 | 0] = HEAP8[i2 + 45 | 0] & 1;
 STACKTOP = i3;
 return i1 | 0;
}
function __ZN7WebCore12_GLOBAL__N_122ExecutableWithDatabase5startEPNS_10IDBFactoryEPNS_14SecurityOriginERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = __ZN3WTF10fastMallocEj(16) | 0;
 i10 = i9 + 4 | 0;
 HEAP32[i10 >> 2] = 1;
 HEAP32[i9 + 8 >> 2] = 3;
 HEAP32[i9 >> 2] = H_BASE + 1360;
 HEAP32[i9 + 12 >> 2] = i1;
 if ((i1 | 0) != 0) {
  i11 = i1 + 4 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
 }
 HEAP32[i5 >> 2] = 0;
 __ZN7WebCore10IDBFactory4openEPNS_22ScriptExecutionContextERKN3WTF6StringERi(i6, i2, HEAP32[i1 + 8 >> 2] | 0, i3, i5);
 i3 = i6 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 do {
  if ((HEAP32[i5 >> 2] | 0) == 0) {
   i3 = i6 + 12 | 0;
   i2 = HEAP32[(HEAP32[i3 >> 2] | 0) + 20 >> 2] | 0;
   i11 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 648 | 0;
   i12 = i8 | 0;
   HEAP32[i12 >> 2] = i9;
   if ((i9 | 0) != 0) {
    HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   }
   FUNCTION_TABLE_iiiii[i2 & 1](i3, i11, i8, 0) | 0;
   i11 = HEAP32[i12 >> 2] | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   i12 = i11 + 4 | 0;
   i11 = i12 | 0;
   i3 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i11 >> 2] = i3;
    break;
   }
   i3 = i12 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 127](i3);
  } else {
   i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 15](i1) | 0;
   __ZN3WTF6StringC1EPKc(i7, H_BASE + 416 | 0);
   __ZN9Inspector26InspectorBackendDispatcher12CallbackBase11sendFailureERKN3WTF6StringE(i3, i7);
   i3 = HEAP32[i7 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   i12 = i3 | 0;
   i11 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i12 >> 2] = i11;
    break;
   }
  }
 } while (0);
 do {
  if ((i6 | 0) != 0) {
   i7 = i6 + 4 | 0;
   i1 = i7 | 0;
   i8 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i1 >> 2] = i8;
    break;
   }
   i8 = i7 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 127](i8);
  }
 } while (0);
 if ((i9 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i6 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) == 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 127](i9);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i10 >> 2] = i6;
  STACKTOP = i4;
  return;
 }
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
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 127](i5);
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
function __ZN7WebCore23InspectorIndexedDBAgent16clearObjectStoreEPN3WTF6StringERKS2_S5_S5_NS1_10PassRefPtrIN9Inspector42InspectorIndexedDBBackendDispatcherHandler24ClearObjectStoreCallbackEEE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = i7 | 0;
 i9 = __ZN7WebCore18InspectorPageAgent27findFrameWithSecurityOriginERKN3WTF6StringE(HEAP32[i1 + 20 >> 2] | 0, i3) | 0;
 do {
  if ((i9 | 0) != 0) {
   i3 = HEAP32[i9 + 456 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   i1 = __ZN7WebCoreL16assertIDBFactoryEPN3WTF6StringEPNS_8DocumentE(i2, HEAP32[i3 + 336 >> 2] | 0) | 0;
   if ((i1 | 0) == 0) {
    STACKTOP = i7;
    return;
   }
   i10 = i6 | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = 0;
   i10 = __ZN3WTF10fastMallocEj(20) | 0;
   i12 = i10 + 4 | 0;
   HEAP32[i12 >> 2] = 1;
   HEAP32[i10 + 8 >> 2] = i3 + 88;
   HEAP32[i10 >> 2] = H_BASE + 1280;
   i3 = HEAP32[i5 >> 2] | 0;
   HEAP32[i10 + 12 >> 2] = i3;
   if ((i3 | 0) != 0) {
    i13 = i3 | 0;
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
   }
   HEAP32[i10 + 16 >> 2] = i11;
   i11 = i10;
   __ZN7WebCore12_GLOBAL__N_122ExecutableWithDatabase5startEPNS_10IDBFactoryEPNS_14SecurityOriginERKN3WTF6StringE(i11, i1, i4);
   if ((i10 | 0) == 0) {
    STACKTOP = i7;
    return;
   }
   i1 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 127](i11);
    STACKTOP = i7;
    return;
   } else {
    HEAP32[i12 >> 2] = i1;
    STACKTOP = i7;
    return;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i8, H_BASE + 192 | 0);
 i4 = i8 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i8;
 do {
  if ((i2 | 0) != 0) {
   i8 = i2 | 0;
   i5 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i8 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i4 = i2 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  STACKTOP = i7;
  return;
 } else {
  HEAP32[i4 >> 2] = i5;
  STACKTOP = i7;
  return;
 }
}
function __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore22IDBObjectStoreMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E16lookupForWritingINS_22IdentityHashTranslatorIS8_EExEENSt3__14pairIPS4_bEERKT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i6 = HEAP32[i3 + 4 >> 2] | 0;
 i3 = _i64Add(i2, i6, ~0, ~i2) | 0;
 i7 = tempRet0;
 i8 = (i3 >>> 22 | i7 << 10) ^ i3;
 i3 = (i7 >>> 22 | 0 << 10) ^ i7;
 i7 = _i64Add(i8, i3, ~(i8 << 13 | 0 >>> 19), ~(i3 << 13 | i8 >>> 19)) | 0;
 i8 = tempRet0;
 i3 = ___muldi3((i7 >>> 8 | i8 << 24) ^ i7, (i8 >>> 8 | 0 << 24) ^ i8, 9, 0) | 0;
 i8 = tempRet0;
 i7 = (i3 >>> 15 | i8 << 17) ^ i3;
 i3 = (i8 >>> 15 | 0 << 17) ^ i8;
 i8 = _i64Add(i7, i3, ~(i7 << 27 | 0 >>> 5), ~(i3 << 27 | i7 >>> 5)) | 0;
 i7 = (i8 >>> 31 | tempRet0 << 1) ^ i8;
 i8 = i7 & i5;
 i3 = i4 + (i8 * 80 & -1) | 0;
 i9 = i3 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = HEAP32[i9 + 4 >> 2] | 0;
 L1 : do {
  if ((i10 | 0) == 0 & (i11 | 0) == 0) {
   i12 = 0;
   i13 = i3;
  } else {
   i9 = (i7 >>> 23) + ~i7 | 0;
   i14 = i9 << 12 ^ i9;
   i9 = i14 >>> 7 ^ i14;
   i14 = i9 << 2 ^ i9;
   i9 = i14 >>> 20 ^ i14 | 1;
   i14 = 0;
   i15 = 0;
   i16 = i8;
   i17 = i3;
   i18 = i11;
   i19 = i10;
   while (1) {
    if ((i19 | 0) == (i2 | 0) & (i18 | 0) == (i6 | 0)) {
     break;
    }
    i20 = (i19 | 0) == (-1 | 0) & (i18 | 0) == (-1 | 0) ? i17 : i14;
    i21 = (i15 | 0) == 0 ? i9 : i15;
    i22 = i21 + i16 & i5;
    i23 = i4 + (i22 * 80 & -1) | 0;
    i24 = i23 | 0;
    i25 = HEAP32[i24 >> 2] | 0;
    i26 = HEAP32[i24 + 4 >> 2] | 0;
    if ((i25 | 0) == 0 & (i26 | 0) == 0) {
     i12 = i20;
     i13 = i23;
     break L1;
    } else {
     i14 = i20;
     i15 = i21;
     i16 = i22;
     i17 = i23;
     i18 = i26;
     i19 = i25;
    }
   }
   HEAP32[i1 >> 2] = i17;
   HEAP8[i1 + 4 | 0] = 1;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = (i12 | 0) != 0 ? i12 : i13;
 HEAP8[i1 + 4 | 0] = 0;
 return;
}
function __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E16lookupForWritingINS_22IdentityHashTranslatorIS8_EExEENSt3__14pairIPS4_bEERKT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i6 = HEAP32[i3 + 4 >> 2] | 0;
 i3 = _i64Add(i2, i6, ~0, ~i2) | 0;
 i7 = tempRet0;
 i8 = (i3 >>> 22 | i7 << 10) ^ i3;
 i3 = (i7 >>> 22 | 0 << 10) ^ i7;
 i7 = _i64Add(i8, i3, ~(i8 << 13 | 0 >>> 19), ~(i3 << 13 | i8 >>> 19)) | 0;
 i8 = tempRet0;
 i3 = ___muldi3((i7 >>> 8 | i8 << 24) ^ i7, (i8 >>> 8 | 0 << 24) ^ i8, 9, 0) | 0;
 i8 = tempRet0;
 i7 = (i3 >>> 15 | i8 << 17) ^ i3;
 i3 = (i8 >>> 15 | 0 << 17) ^ i8;
 i8 = _i64Add(i7, i3, ~(i7 << 27 | 0 >>> 5), ~(i3 << 27 | i7 >>> 5)) | 0;
 i7 = (i8 >>> 31 | tempRet0 << 1) ^ i8;
 i8 = i7 & i5;
 i3 = i4 + (i8 * 48 & -1) | 0;
 i9 = i3 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = HEAP32[i9 + 4 >> 2] | 0;
 L1 : do {
  if ((i10 | 0) == 0 & (i11 | 0) == 0) {
   i12 = 0;
   i13 = i3;
  } else {
   i9 = (i7 >>> 23) + ~i7 | 0;
   i14 = i9 << 12 ^ i9;
   i9 = i14 >>> 7 ^ i14;
   i14 = i9 << 2 ^ i9;
   i9 = i14 >>> 20 ^ i14 | 1;
   i14 = 0;
   i15 = 0;
   i16 = i8;
   i17 = i3;
   i18 = i11;
   i19 = i10;
   while (1) {
    if ((i19 | 0) == (i2 | 0) & (i18 | 0) == (i6 | 0)) {
     break;
    }
    i20 = (i19 | 0) == (-1 | 0) & (i18 | 0) == (-1 | 0) ? i17 : i14;
    i21 = (i15 | 0) == 0 ? i9 : i15;
    i22 = i21 + i16 & i5;
    i23 = i4 + (i22 * 48 & -1) | 0;
    i24 = i23 | 0;
    i25 = HEAP32[i24 >> 2] | 0;
    i26 = HEAP32[i24 + 4 >> 2] | 0;
    if ((i25 | 0) == 0 & (i26 | 0) == 0) {
     i12 = i20;
     i13 = i23;
     break L1;
    } else {
     i14 = i20;
     i15 = i21;
     i16 = i22;
     i17 = i23;
     i18 = i26;
     i19 = i25;
    }
   }
   HEAP32[i1 >> 2] = i17;
   HEAP8[i1 + 4 | 0] = 1;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = (i12 | 0) != 0 ? i12 : i13;
 HEAP8[i1 + 4 | 0] = 0;
 return;
}
function __ZN7WebCore23InspectorIndexedDBAgent15requestDatabaseEPN3WTF6StringERKS2_S5_NS1_10PassRefPtrIN9Inspector42InspectorIndexedDBBackendDispatcherHandler23RequestDatabaseCallbackEEE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 i8 = __ZN7WebCore18InspectorPageAgent27findFrameWithSecurityOriginERKN3WTF6StringE(HEAP32[i1 + 20 >> 2] | 0, i3) | 0;
 do {
  if ((i8 | 0) != 0) {
   i3 = HEAP32[i8 + 456 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   i1 = __ZN7WebCoreL16assertIDBFactoryEPN3WTF6StringEPNS_8DocumentE(i2, HEAP32[i3 + 336 >> 2] | 0) | 0;
   if ((i1 | 0) == 0) {
    STACKTOP = i6;
    return;
   }
   i9 = i5 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = 0;
   i9 = __ZN3WTF10fastMallocEj(16) | 0;
   i11 = i9 + 4 | 0;
   HEAP32[i11 >> 2] = 1;
   HEAP32[i9 + 8 >> 2] = i3 + 88;
   HEAP32[i9 >> 2] = H_BASE + 1456;
   HEAP32[i9 + 12 >> 2] = i10;
   i10 = i9;
   __ZN7WebCore12_GLOBAL__N_122ExecutableWithDatabase5startEPNS_10IDBFactoryEPNS_14SecurityOriginERKN3WTF6StringE(i10, i1, i4);
   if ((i9 | 0) == 0) {
    STACKTOP = i6;
    return;
   }
   i1 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 127](i10);
    STACKTOP = i6;
    return;
   } else {
    HEAP32[i11 >> 2] = i1;
    STACKTOP = i6;
    return;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i7, H_BASE + 192 | 0);
 i4 = i7 | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i7;
 do {
  if ((i2 | 0) != 0) {
   i7 = i2 | 0;
   i5 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i7 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i4 = i2 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  STACKTOP = i6;
  return;
 } else {
  HEAP32[i4 >> 2] = i5;
  STACKTOP = i6;
  return;
 }
}
function __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E15deallocateTableEPS4_i(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 if ((i2 | 0) > 0) {
  i3 = 0;
 } else {
  i4 = i1;
  __ZN3WTF8fastFreeEPv(i4);
  return;
 }
 while (1) {
  i5 = i1 + (i3 * 48 & -1) | 0;
  do {
   if (!((HEAP32[i5 >> 2] | 0) == (-1 | 0) & (HEAP32[i5 + 4 >> 2] | 0) == (-1 | 0))) {
    i6 = i1 + (i3 * 48 & -1) + 40 | 0;
    i7 = HEAP32[i6 >> 2] | 0;
    i8 = i1 + (i3 * 48 & -1) + 32 | 0;
    if ((i7 | 0) != 0) {
     i9 = HEAP32[i8 >> 2] | 0;
     i10 = i9 + (i7 << 2) | 0;
     i7 = i9;
     while (1) {
      i9 = HEAP32[i7 >> 2] | 0;
      do {
       if ((i9 | 0) != 0) {
        i11 = i9 | 0;
        i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
        if ((i12 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i9);
         break;
        } else {
         HEAP32[i11 >> 2] = i12;
         break;
        }
       }
      } while (0);
      i7 = i7 + 4 | 0;
      if ((i7 | 0) == (i10 | 0)) {
       break;
      }
     }
     HEAP32[i6 >> 2] = 0;
    }
    i10 = HEAP32[i8 >> 2] | 0;
    if ((i10 | 0) != 0) {
     HEAP32[i8 >> 2] = 0;
     HEAP32[i1 + (i3 * 48 & -1) + 36 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i10);
    }
    i10 = HEAP32[i1 + (i3 * 48 & -1) + 28 >> 2] | 0;
    do {
     if ((i10 | 0) != 0) {
      i7 = i10 | 0;
      i9 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
      if ((i9 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i10);
       break;
      } else {
       HEAP32[i7 >> 2] = i9;
       break;
      }
     }
    } while (0);
    i10 = HEAP32[i1 + (i3 * 48 & -1) + 8 >> 2] | 0;
    if ((i10 | 0) == 0) {
     break;
    }
    i8 = i10 | 0;
    i6 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
    if ((i6 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i10);
     break;
    } else {
     HEAP32[i8 >> 2] = i6;
     break;
    }
   }
  } while (0);
  i3 = i3 + 1 | 0;
  if ((i3 | 0) >= (i2 | 0)) {
   break;
  }
 }
 i4 = i1;
 __ZN3WTF8fastFreeEPv(i4);
 return;
}
function __ZN9Inspector11TypeBuilder9IndexedDB7KeyPath7BuilderILi0EE7setTypeENS2_4Type4EnumE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = HEAP32[i1 >> 2] | 0;
 HEAP32[i7 >> 2] = H_BASE + 512;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i6, i7);
 __ZN9Inspector11TypeBuilder23getWebEnumConstantValueEi(i8, i2);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i5, i8);
 i2 = i4 | 0;
 i7 = i5 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i2 >> 2] = i5;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i9, i6, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 4 | 0;
   i9 = i2 | 0;
   i5 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i9 >> 2] = i5;
    break;
   }
   i5 = i2 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 127](i5);
  }
 } while (0);
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 + 4 | 0;
   i5 = i7 | 0;
   i2 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i5 >> 2] = i2;
    break;
   }
   i2 = i7 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 127](i2);
  }
 } while (0);
 i4 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i8 = i4 | 0;
   i2 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i8 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i10 = i1;
  STACKTOP = i3;
  return i10 | 0;
 }
 i6 = i4 | 0;
 i2 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  i10 = i1;
  STACKTOP = i3;
  return i10 | 0;
 } else {
  HEAP32[i6 >> 2] = i2;
  i10 = i1;
  STACKTOP = i3;
  return i10 | 0;
 }
 return 0;
}
function __ZN3WTF10RefCountedIN7WebCore14IDBObjectStoreEE5derefEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i3 = i1 - 4 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i2 = HEAP32[i1 + 84 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i4 = HEAP32[i1 + 88 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i5 = 0;
   while (1) {
    i6 = i2 + (i5 << 3) | 0;
    do {
     if ((HEAP32[i6 >> 2] | 0) != -1) {
      i7 = HEAP32[i2 + (i5 << 3) + 4 >> 2] | 0;
      do {
       if ((i7 | 0) != 0) {
        i8 = i7 + 4 | 0;
        i9 = i8 | 0;
        i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
        if ((i10 | 0) != 0) {
         HEAP32[i9 >> 2] = i10;
         break;
        }
        i10 = i8 - 4 | 0;
        if ((i10 | 0) == 0) {
         break;
        }
        __ZN7WebCore8IDBIndexD1Ev(i10);
        __ZN3WTF8fastFreeEPv(i10);
       }
      } while (0);
      i7 = HEAP32[i6 >> 2] | 0;
      if ((i7 | 0) == 0) {
       break;
      }
      i10 = i7 | 0;
      i8 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
      if ((i8 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i7);
       break;
      } else {
       HEAP32[i10 >> 2] = i8;
       break;
      }
     }
    } while (0);
    i5 = i5 + 1 | 0;
    if ((i5 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 76 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 + 40 | 0;
   i5 = i4 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i4 - 40 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 44 >> 2] & 127](i6);
  }
 } while (0);
 __ZN7WebCore22IDBObjectStoreMetadataD1Ev(i1 + 4 | 0);
 i1 = i3;
 if ((HEAP32[i1 >> 2] | 0) != 0) {
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i1);
 }
 __ZN3WTF8fastFreeEPv(i3);
 return;
}
function __ZN7WebCoreL16assertIDBFactoryEPN3WTF6StringEPNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF6StringC1EPKc(i4, H_BASE + 232 | 0);
  i6 = i4 | 0;
  i4 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = 0;
  i7 = i1 | 0;
  i8 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i4;
  do {
   if ((i8 | 0) != 0) {
    i4 = i8 | 0;
    i7 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
    if ((i7 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i8);
     break;
    } else {
     HEAP32[i4 >> 2] = i7;
     break;
    }
   }
  } while (0);
  i8 = HEAP32[i6 >> 2] | 0;
  if ((i8 | 0) == 0) {
   i9 = 0;
   STACKTOP = i3;
   return i9 | 0;
  }
  i6 = i8 | 0;
  i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
  if ((i7 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i8);
   i9 = 0;
   STACKTOP = i3;
   return i9 | 0;
  } else {
   HEAP32[i6 >> 2] = i7;
   i9 = 0;
   STACKTOP = i3;
   return i9 | 0;
  }
 }
 i7 = __ZN7WebCore24DOMWindowIndexedDatabase9indexedDBEPNS_9DOMWindowE(i2) | 0;
 if ((i7 | 0) != 0) {
  i9 = i7;
  STACKTOP = i3;
  return i9 | 0;
 }
 __ZN3WTF6StringC1EPKc(i5, H_BASE + 232 | 0);
 i7 = i5 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i2 = i1 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i5;
 do {
  if ((i1 | 0) != 0) {
   i5 = i1 | 0;
   i2 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i5 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i7 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i9 = 0;
  STACKTOP = i3;
  return i9 | 0;
 }
 i7 = i1 | 0;
 i2 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  i9 = 0;
  STACKTOP = i3;
  return i9 | 0;
 } else {
  HEAP32[i7 >> 2] = i2;
  i9 = 0;
  STACKTOP = i3;
  return i9 | 0;
 }
 return 0;
}
function __ZN7WebCore22IDBObjectStoreMetadataaSERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i3;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i5 = i2 + 8 | 0;
 i4 = HEAP32[i5 + 4 >> 2] | 0;
 i3 = i1 + 8 | 0;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i3 + 4 >> 2] = i4;
 HEAP32[i1 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
 i4 = HEAP32[i2 + 20 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i3 = i4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = i1 + 20 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i4;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEEaSERKS3_(i1 + 24 | 0, i2 + 24 | 0) | 0;
 HEAP8[i1 + 36 | 0] = HEAP8[i2 + 36 | 0] & 1;
 i5 = i2 + 40 | 0;
 i3 = HEAP32[i5 + 4 >> 2] | 0;
 i4 = i1 + 40 | 0;
 HEAP32[i4 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i4 + 4 >> 2] = i3;
 __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_EaSERKSF_(i1 + 48 | 0, i2 + 48 | 0) | 0;
 return i1 | 0;
}
function __ZN7WebCore22IDBObjectStoreMetadataD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = HEAP32[i1 + 48 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E15deallocateTableEPS4_i(i2, HEAP32[i1 + 52 >> 2] | 0);
 }
 i2 = i1 + 32 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 24 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 | 0;
     i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i7 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 28 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i6 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i6;
  return;
 }
}
function __ZN3JSC6StrongINS_7UnknownEEC2ERKS2_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 | 0;
 HEAP32[i5 >> 2] = 0;
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = HEAP32[(i2 & -4096) + 12 >> 2] | 0;
 if ((HEAP32[i6 + 84 >> 2] | 0) != 0) {
  _WTFCrash();
 }
 i2 = i6 + 80 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 if ((i7 | 0) == 0) {
  __ZN3JSC9HandleSet4growEv(i6);
  i8 = HEAP32[i2 >> 2] | 0;
 } else {
  i8 = i7;
 }
 i7 = i8 + 12 | 0;
 HEAP32[i2 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i8 + 4 >> 2] = -6;
 HEAP32[i8 >> 2] = 0;
 i2 = i8 + 8 | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i7 >> 2] = 0;
 i9 = i6 + 60 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 HEAP32[i2 >> 2] = i6 + 48;
 HEAP32[i7 >> 2] = i10;
 HEAP32[i9 >> 2] = i8;
 HEAP32[i10 + 8 >> 2] = i8;
 i10 = i8 | 0;
 HEAP32[i5 >> 2] = i10;
 i9 = HEAP32[i1 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i11 = 0;
  i12 = 0;
  i13 = -6;
  i14 = 0;
 } else {
  i1 = i9 | 0;
  i9 = HEAP32[i1 >> 2] | 0;
  i7 = HEAP32[i1 + 4 >> 2] | 0;
  i11 = i7 & 0;
  i12 = i9 & -1;
  i13 = i7 & -1;
  i14 = i9 & 0;
 }
 i9 = i4 | 0;
 HEAP32[i9 >> 2] = i12 | i14;
 HEAP32[i9 + 4 >> 2] = i11 | i13;
 __ZN3JSC9HandleSet12writeBarrierEPNS_7JSValueERKS1_(HEAP32[(i8 & -4096) + 12 >> 2] | 0, i10, i4);
 i4 = HEAP32[i9 + 4 >> 2] | 0;
 i10 = HEAP32[i5 >> 2] | 0;
 HEAP32[i10 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i10 + 4 >> 2] = i4;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11IDBKeyRange6createEN3WTF10PassRefPtrINS_6IDBKeyEEES4_NS0_14LowerBoundTypeENS0_14UpperBoundTypeE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = __ZN3WTF10fastMallocEj(24) | 0;
 i10 = i7 | 0;
 i11 = i2 | 0;
 i2 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i10 >> 2] = i2;
 i2 = i8 | 0;
 i11 = i3 | 0;
 i3 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i2 >> 2] = i3;
 __ZN7WebCore11IDBKeyRangeC1EN3WTF10PassRefPtrINS_6IDBKeyEEES4_NS0_14LowerBoundTypeENS0_14UpperBoundTypeE(i9, i7, i8, i4, i5);
 HEAP32[i1 >> 2] = i9;
 i9 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i2 = i9 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) == 0) {
    __ZN7WebCore6IDBKeyD1Ev(i9);
    __ZN3WTF8fastFreeEPv(i9);
    break;
   } else {
    HEAP32[i2 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i10 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i10 = i9 | 0;
 i1 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) == 0) {
  __ZN7WebCore6IDBKeyD1Ev(i9);
  __ZN3WTF8fastFreeEPv(i9);
  STACKTOP = i6;
  return;
 } else {
  HEAP32[i10 >> 2] = i1;
  STACKTOP = i6;
  return;
 }
}
function __ZN7WebCore16IDBIndexMetadataaSERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i3;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i5 = i2 + 8 | 0;
 i4 = HEAP32[i5 + 4 >> 2] | 0;
 i3 = i1 + 8 | 0;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i3 + 4 >> 2] = i4;
 HEAP32[i1 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
 i4 = HEAP32[i2 + 20 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i3 = i4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = i1 + 20 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i4;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEEaSERKS3_(i1 + 24 | 0, i2 + 24 | 0) | 0;
 HEAP8[i1 + 36 | 0] = HEAP8[i2 + 36 | 0] & 1;
 HEAP8[i1 + 37 | 0] = HEAP8[i2 + 37 | 0] & 1;
 return i1 | 0;
}
function __ZN7WebCore23InspectorIndexedDBAgent27didCreateFrontendAndBackendEPN9Inspector24InspectorFrontendChannelEPNS1_26InspectorBackendDispatcherE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i2 | 0;
 __ZN9Inspector35InspectorIndexedDBBackendDispatcher6createEPNS_26InspectorBackendDispatcherEPNS_42InspectorIndexedDBBackendDispatcherHandlerE(i4, i3, i1 + 12 | 0);
 i3 = i4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i5 = i1 + 24 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i4;
 do {
  if ((i1 | 0) != 0) {
   i4 = i1 + 4 | 0;
   i5 = i4 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i4 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 127](i6);
  }
 } while (0);
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i3 = i1 + 4 | 0;
 i1 = i3 | 0;
 i6 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i1 >> 2] = i6;
  STACKTOP = i2;
  return;
 }
 i6 = i3 - 4 | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 127](i6);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore23InspectorIndexedDBAgentC2EPNS_19InstrumentingAgentsEPN9Inspector21InjectedScriptManagerEPNS_18InspectorPageAgentE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 HEAP32[i7 >> 2] = H_BASE + 704;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i6, i7);
 i7 = i1 | 0;
 HEAP32[i7 >> 2] = H_BASE + 728;
 i8 = i6 | 0;
 i6 = HEAP32[i8 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i6;
 do {
  if ((i6 | 0) == 0) {
   HEAP32[i7 >> 2] = H_BASE + 1240;
   HEAP32[i1 + 8 >> 2] = i2;
  } else {
   i9 = i6 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
   i9 = HEAP32[i8 >> 2] | 0;
   HEAP32[i7 >> 2] = H_BASE + 1240;
   HEAP32[i1 + 8 >> 2] = i2;
   if ((i9 | 0) == 0) {
    break;
   }
   i10 = i9 | 0;
   i11 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i10 >> 2] = i11;
    break;
   }
  }
 } while (0);
 HEAP32[i7 >> 2] = H_BASE + 1136;
 HEAP32[i1 + 12 >> 2] = H_BASE + 1188;
 HEAP32[i1 + 16 >> 2] = i3;
 HEAP32[i1 + 20 >> 2] = i4;
 HEAP32[i1 + 24 >> 2] = 0;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore23InspectorIndexedDBAgentC1EPNS_19InstrumentingAgentsEPN9Inspector21InjectedScriptManagerEPNS_18InspectorPageAgentE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 HEAP32[i7 >> 2] = H_BASE + 704;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i6, i7);
 i7 = i1 | 0;
 HEAP32[i7 >> 2] = H_BASE + 728;
 i8 = i6 | 0;
 i6 = HEAP32[i8 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i6;
 do {
  if ((i6 | 0) == 0) {
   HEAP32[i7 >> 2] = H_BASE + 1240;
   HEAP32[i1 + 8 >> 2] = i2;
  } else {
   i9 = i6 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
   i9 = HEAP32[i8 >> 2] | 0;
   HEAP32[i7 >> 2] = H_BASE + 1240;
   HEAP32[i1 + 8 >> 2] = i2;
   if ((i9 | 0) == 0) {
    break;
   }
   i10 = i9 | 0;
   i11 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i10 >> 2] = i11;
    break;
   }
  }
 } while (0);
 HEAP32[i7 >> 2] = H_BASE + 1136;
 HEAP32[i1 + 12 >> 2] = H_BASE + 1188;
 HEAP32[i1 + 16 >> 2] = i3;
 HEAP32[i1 + 20 >> 2] = i4;
 HEAP32[i1 + 24 >> 2] = 0;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore12_GLOBAL__N_110DataLoaderD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1488;
 i2 = HEAP32[i1 + 48 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 4 | 0;
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
   __ZN7WebCore11IDBKeyRangeD2Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  }
 } while (0);
 i2 = HEAP32[i1 + 44 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 | 0;
   i3 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i5 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 40 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i5;
    break;
   }
  }
 } while (0);
 __ZN9Inspector14InjectedScriptD1Ev(i1 + 16 | 0);
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN3WTF10RefCountedIN9Inspector26InspectorBackendDispatcher12CallbackBaseEE5derefEv(i2 | 0);
 return;
}
function __ZN3WTF10RefCountedIN9Inspector26InspectorBackendDispatcher12CallbackBaseEE5derefEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = HEAP32[i2 + 8 >> 2] | 0;
   if ((i5 | 0) != 0) {
    i4 = HEAP32[i2 + 12 >> 2] | 0;
    if ((i4 | 0) > 0) {
     i2 = 0;
     while (1) {
      i6 = HEAP32[i5 + (i2 << 3) >> 2] | 0;
      i7 = i6;
      do {
       if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
        i8 = i6 | 0;
        i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
        if ((i9 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i6);
         break;
        } else {
         HEAP32[i8 >> 2] = i9;
         break;
        }
       }
      } while (0);
      i2 = i2 + 1 | 0;
      if ((i2 | 0) >= (i4 | 0)) {
       break;
      }
     }
    }
    __ZN3WTF8fastFreeEPv(i5);
   }
   __ZN3WTF8fastFreeEPv(i3);
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore24ClearObjectStoreListener11handleEventEPNS_22ScriptExecutionContextEPNS_5EventE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i2 | 0;
 i5 = i1 + 12 | 0;
 if (!(__ZNK9Inspector26InspectorBackendDispatcher12CallbackBase8isActiveEv(HEAP32[i5 >> 2] | 0) | 0)) {
  STACKTOP = i2;
  return;
 }
 i1 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i3 + 12 >> 2] | 0) == (HEAP32[i1 + 64 >> 2] | 0)) {
  __ZN9Inspector42InspectorIndexedDBBackendDispatcherHandler24ClearObjectStoreCallback11sendSuccessEv(i6);
  STACKTOP = i2;
  return;
 }
 __ZN3WTF6StringC1EPKc(i4, H_BASE + 96 | 0);
 __ZN9Inspector26InspectorBackendDispatcher12CallbackBase11sendFailureERKN3WTF6StringE(i6 | 0, i4);
 i6 = HEAP32[i4 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i6 | 0;
 i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i6);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i4 >> 2] = i1;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore23InspectorIndexedDBAgentD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 1136;
 HEAP32[i1 + 12 >> 2] = H_BASE + 1188;
 i3 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 4 | 0;
   i5 = i4 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i4 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 127](i6);
  }
 } while (0);
 __ZN9Inspector42InspectorIndexedDBBackendDispatcherHandlerD2Ev(i1 + 12 | 0);
 HEAP32[i2 >> 2] = H_BASE + 728;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i7 = i1;
  __ZdlPv(i7);
  return;
 }
 i3 = i2 | 0;
 i6 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  i7 = i1;
  __ZdlPv(i7);
  return;
 } else {
  HEAP32[i3 >> 2] = i6;
  i7 = i1;
  __ZdlPv(i7);
  return;
 }
}
function __ZThn12_N7WebCore23InspectorIndexedDBAgentD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 - 28 + 16 | 0;
 HEAP32[i2 >> 2] = H_BASE + 1136;
 i1 = i2 + 12 | 0;
 HEAP32[i1 >> 2] = H_BASE + 1188;
 i3 = HEAP32[i2 + 24 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 4 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i4 - 20 + 16 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 127](i5);
  }
 } while (0);
 __ZN9Inspector42InspectorIndexedDBBackendDispatcherHandlerD2Ev(i1);
 HEAP32[i2 >> 2] = H_BASE + 728;
 i1 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i6 = i2;
  __ZdlPv(i6);
  return;
 }
 i3 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  i6 = i2;
  __ZdlPv(i6);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  i6 = i2;
  __ZdlPv(i6);
  return;
 }
}
function __ZN7WebCore23InspectorIndexedDBAgentD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 1136;
 HEAP32[i1 + 12 >> 2] = H_BASE + 1188;
 i3 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 4 | 0;
   i5 = i4 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i4 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 127](i6);
  }
 } while (0);
 __ZN9Inspector42InspectorIndexedDBBackendDispatcherHandlerD2Ev(i1 + 12 | 0);
 HEAP32[i2 >> 2] = H_BASE + 728;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore23InspectorIndexedDBAgentD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 1136;
 HEAP32[i1 + 12 >> 2] = H_BASE + 1188;
 i3 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 4 | 0;
   i5 = i4 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i4 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 127](i6);
  }
 } while (0);
 __ZN9Inspector42InspectorIndexedDBBackendDispatcherHandlerD2Ev(i1 + 12 | 0);
 HEAP32[i2 >> 2] = H_BASE + 728;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZThn12_N7WebCore23InspectorIndexedDBAgentD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 - 28 + 16 | 0;
 HEAP32[i2 >> 2] = H_BASE + 1136;
 i1 = i2 + 12 | 0;
 HEAP32[i1 >> 2] = H_BASE + 1188;
 i3 = HEAP32[i2 + 24 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 4 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i4 - 20 + 16 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 127](i5);
  }
 } while (0);
 __ZN9Inspector42InspectorIndexedDBBackendDispatcherHandlerD2Ev(i1);
 HEAP32[i2 >> 2] = H_BASE + 728;
 i1 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  return;
 } else {
  HEAP32[i1 >> 2] = i2;
  return;
 }
}
function __ZN7WebCore12_GLOBAL__N_118OpenCursorCallbackD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1408;
 i2 = HEAP32[i1 + 48 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 4 | 0;
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
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i6 = i1 + 12 | 0;
  __ZN9Inspector14InjectedScriptD1Ev(i6);
  i7 = i1;
  __ZN3WTF8fastFreeEPv(i7);
  return;
 }
 __ZN3WTF10RefCountedIN9Inspector26InspectorBackendDispatcher12CallbackBaseEE5derefEv(i2 | 0);
 i6 = i1 + 12 | 0;
 __ZN9Inspector14InjectedScriptD1Ev(i6);
 i7 = i1;
 __ZN3WTF8fastFreeEPv(i7);
 return;
}
function __ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN7WebCore12_GLOBAL__N_118OpenCursorCallbackD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1408;
 i2 = HEAP32[i1 + 48 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 4 | 0;
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
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i6 = i1 + 12 | 0;
  __ZN9Inspector14InjectedScriptD1Ev(i6);
  return;
 }
 __ZN3WTF10RefCountedIN9Inspector26InspectorBackendDispatcher12CallbackBaseEE5derefEv(i2 | 0);
 i6 = i1 + 12 | 0;
 __ZN9Inspector14InjectedScriptD1Ev(i6);
 return;
}
function __ZN7WebCore11IDBKeyRangeD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore6IDBKeyD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    __ZN7WebCore6IDBKeyD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = i1 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 return;
}
function ___remdi3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i2 >> 31 | ((i2 | 0) < 0 ? -1 : 0) << 1;
 i8 = ((i2 | 0) < 0 ? -1 : 0) >> 31 | ((i2 | 0) < 0 ? -1 : 0) << 1;
 i9 = i4 >> 31 | ((i4 | 0) < 0 ? -1 : 0) << 1;
 i10 = ((i4 | 0) < 0 ? -1 : 0) >> 31 | ((i4 | 0) < 0 ? -1 : 0) << 1;
 i11 = _i64Subtract(i7 ^ i1, i8 ^ i2, i7, i8) | 0;
 i2 = tempRet0;
 ___udivmoddi4(i11, i2, _i64Subtract(i9 ^ i3, i10 ^ i4, i9, i10) | 0, tempRet0, i6) | 0;
 i10 = _i64Subtract(HEAP32[i6 >> 2] ^ i7, HEAP32[i6 + 4 >> 2] ^ i8, i7, i8) | 0;
 i8 = tempRet0;
 STACKTOP = i5;
 return (tempRet0 = i8, i10) | 0;
}
function __ZThn12_N7WebCore23InspectorIndexedDBAgent11requestDataEPN3WTF6StringERKS2_S5_S5_S5_iiPKNS1_6RefPtrIN9Inspector15InspectorObjectEEENS1_10PassRefPtrINS7_42InspectorIndexedDBBackendDispatcherHandler19RequestDataCallbackEEE(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 __ZN7WebCore23InspectorIndexedDBAgent11requestDataEPN3WTF6StringERKS2_S5_S5_S5_iiPKNS1_6RefPtrIN9Inspector15InspectorObjectEEENS1_10PassRefPtrINS7_42InspectorIndexedDBBackendDispatcherHandler19RequestDataCallbackEEE(i1 - 28 + 16 | 0, i2, i3, i4, i5, i6, i7, i8, i9, i10);
 return;
}
function __ZN7WebCore12_GLOBAL__N_124GetDatabaseNamesCallbackD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1312;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i5 = i1;
  __ZN3WTF8fastFreeEPv(i5);
  return;
 }
 __ZN3WTF10RefCountedIN9Inspector26InspectorBackendDispatcher12CallbackBaseEE5derefEv(i2 | 0);
 i5 = i1;
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZN7WebCore16ClearObjectStoreD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1280;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF10RefCountedIN9Inspector26InspectorBackendDispatcher12CallbackBaseEE5derefEv(i2 | 0);
 }
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZN3WTF8fastFreeEPv(i3);
  return;
 }
 i4 = i2 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  i3 = i1;
  __ZN3WTF8fastFreeEPv(i3);
  return;
 } else {
  HEAP32[i4 >> 2] = i5;
  i3 = i1;
  __ZN3WTF8fastFreeEPv(i3);
  return;
 }
}
function ___divdi3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i5 = i2 >> 31 | ((i2 | 0) < 0 ? -1 : 0) << 1;
 i6 = ((i2 | 0) < 0 ? -1 : 0) >> 31 | ((i2 | 0) < 0 ? -1 : 0) << 1;
 i7 = i4 >> 31 | ((i4 | 0) < 0 ? -1 : 0) << 1;
 i8 = ((i4 | 0) < 0 ? -1 : 0) >> 31 | ((i4 | 0) < 0 ? -1 : 0) << 1;
 i9 = _i64Subtract(i5 ^ i1, i6 ^ i2, i5, i6) | 0;
 i2 = tempRet0;
 i1 = i7 ^ i5;
 i5 = i8 ^ i6;
 i6 = _i64Subtract((___udivmoddi4(i9, i2, _i64Subtract(i7 ^ i3, i8 ^ i4, i7, i8) | 0, tempRet0, 0) | 0) ^ i1, tempRet0 ^ i5, i1, i5) | 0;
 return (tempRet0 = tempRet0, i6) | 0;
}
function __ZN7WebCore23InspectorIndexedDBAgent29willDestroyFrontendAndBackendEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 24 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 4 | 0;
   i4 = i2 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i2 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 127](i5);
  }
 } while (0);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 24 >> 2] & 31](i1, 0);
 return;
}
function __ZN7WebCore12_GLOBAL__N_124GetDatabaseNamesCallbackD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1312;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN3WTF10RefCountedIN9Inspector26InspectorBackendDispatcher12CallbackBaseEE5derefEv(i2 | 0);
 return;
}
function __ZN7WebCore12_GLOBAL__N_120OpenDatabaseCallbackD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1360;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 4 | 0;
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
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZThn12_N7WebCore23InspectorIndexedDBAgent16clearObjectStoreEPN3WTF6StringERKS2_S5_S5_NS1_10PassRefPtrIN9Inspector42InspectorIndexedDBBackendDispatcherHandler24ClearObjectStoreCallbackEEE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 __ZN7WebCore23InspectorIndexedDBAgent16clearObjectStoreEPN3WTF6StringERKS2_S5_S5_NS1_10PassRefPtrIN9Inspector42InspectorIndexedDBBackendDispatcherHandler24ClearObjectStoreCallbackEEE(i1 - 28 + 16 | 0, i2, i3, i4, i5, i6);
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
function __ZN7WebCore16ClearObjectStoreD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1280;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF10RefCountedIN9Inspector26InspectorBackendDispatcher12CallbackBaseEE5derefEv(i2 | 0);
 }
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZThn12_N7WebCore23InspectorIndexedDBAgent15requestDatabaseEPN3WTF6StringERKS2_S5_NS1_10PassRefPtrIN9Inspector42InspectorIndexedDBBackendDispatcherHandler23RequestDatabaseCallbackEEE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCore23InspectorIndexedDBAgent15requestDatabaseEPN3WTF6StringERKS2_S5_NS1_10PassRefPtrIN9Inspector42InspectorIndexedDBBackendDispatcherHandler23RequestDatabaseCallbackEEE(i1 - 28 + 16 | 0, i2, i3, i4, i5);
 return;
}
function __ZThn12_N7WebCore23InspectorIndexedDBAgent20requestDatabaseNamesEPN3WTF6StringERKS2_NS1_10PassRefPtrIN9Inspector42InspectorIndexedDBBackendDispatcherHandler28RequestDatabaseNamesCallbackEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore23InspectorIndexedDBAgent20requestDatabaseNamesEPN3WTF6StringERKS2_NS1_10PassRefPtrIN9Inspector42InspectorIndexedDBBackendDispatcherHandler28RequestDatabaseNamesCallbackEEE(i1 - 28 + 16 | 0, i2, i3, i4);
 return;
}
function __ZN7WebCore12_GLOBAL__N_120OpenDatabaseCallbackD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1360;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 4 | 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i3 = i1 - 4 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 127](i3);
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
function __ZN9Inspector18InspectorAgentBaseD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 728;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZdlPv(i1);
 return;
}
function __ZN7WebCore18InspectorAgentBaseD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 728;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZdlPv(i1);
 return;
}
function ___muldsi3(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 & 65535;
 i4 = i2 & 65535;
 i5 = Math_imul(i4, i3) | 0;
 i6 = i1 >>> 16;
 i1 = (i5 >>> 16) + (Math_imul(i4, i6) | 0) | 0;
 i4 = i2 >>> 16;
 i2 = Math_imul(i4, i3) | 0;
 return (tempRet0 = (i1 >>> 16) + (Math_imul(i4, i6) | 0) + (((i1 & 65535) + i2 | 0) >>> 16) | 0, i1 + i2 << 16 | i5 & 65535 | 0) | 0;
}
function __ZN7WebCore12_GLOBAL__N_114DatabaseLoaderD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1456;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZN3WTF8fastFreeEPv(i3);
  return;
 }
 __ZN3WTF10RefCountedIN9Inspector26InspectorBackendDispatcher12CallbackBaseEE5derefEv(i2 | 0);
 i3 = i1;
 __ZN3WTF8fastFreeEPv(i3);
 return;
}
function __ZN7WebCore24ClearObjectStoreListenerD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1088;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZN3WTF8fastFreeEPv(i3);
  return;
 }
 __ZN3WTF10RefCountedIN9Inspector26InspectorBackendDispatcher12CallbackBaseEE5derefEv(i2 | 0);
 i3 = i1;
 __ZN3WTF8fastFreeEPv(i3);
 return;
}
function _llvm_cttz_i32(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP8[cttz_i8 + (i1 & 255) | 0] | 0;
 if ((i2 | 0) < 8) return i2 | 0;
 i2 = HEAP8[cttz_i8 + (i1 >> 8 & 255) | 0] | 0;
 if ((i2 | 0) < 8) return i2 + 8 | 0;
 i2 = HEAP8[cttz_i8 + (i1 >> 16 & 255) | 0] | 0;
 if ((i2 | 0) < 8) return i2 + 16 | 0;
 return (HEAP8[cttz_i8 + (i1 >>> 24) | 0] | 0) + 24 | 0;
}
function _llvm_ctlz_i32(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP8[ctlz_i8 + (i1 >>> 24) | 0] | 0;
 if ((i2 | 0) < 8) return i2 | 0;
 i2 = HEAP8[ctlz_i8 + (i1 >> 16 & 255) | 0] | 0;
 if ((i2 | 0) < 8) return i2 + 8 | 0;
 i2 = HEAP8[ctlz_i8 + (i1 >> 8 & 255) | 0] | 0;
 if ((i2 | 0) < 8) return i2 + 16 | 0;
 return (HEAP8[ctlz_i8 + (i1 & 255) | 0] | 0) + 24 | 0;
}
function __ZN9Inspector18InspectorAgentBaseD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 728;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore18InspectorAgentBaseD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 728;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function dynCall_viiiiiiiiii(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 FUNCTION_TABLE_viiiiiiiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0, i10 | 0, i11 | 0);
}
function ___uremdi3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 ___udivmoddi4(i1, i2, i3, i4, i6) | 0;
 STACKTOP = i5;
 return (tempRet0 = HEAP32[i6 + 4 >> 2] | 0, HEAP32[i6 >> 2] | 0) | 0;
}
function __ZN7WebCore12_GLOBAL__N_114DatabaseLoaderD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1456;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN3WTF10RefCountedIN9Inspector26InspectorBackendDispatcher12CallbackBaseEE5derefEv(i2 | 0);
 return;
}
function __ZN7WebCore24ClearObjectStoreListenerD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1088;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN3WTF10RefCountedIN9Inspector26InspectorBackendDispatcher12CallbackBaseEE5derefEv(i2 | 0);
 return;
}
function ___muldi3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = i1;
 i1 = i3;
 i3 = ___muldsi3(i5, i1) | 0;
 i6 = tempRet0;
 return (tempRet0 = (Math_imul(i2, i1) | 0) + (Math_imul(i4, i5) | 0) + i6 | i6 & 0, i3 & -1 | 0) | 0;
}
function iii___ZN9Inspector18InspectorArrayBase7asArrayEPN3WTF6RefPtrINS_14InspectorArrayEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN9Inspector18InspectorArrayBase7asArrayEPN3WTF6RefPtrINS_14InspectorArrayEEE(i1 | 0, i2 | 0) | 0;
}
function iii___ZN9Inspector14InspectorValue8asObjectEPN3WTF6RefPtrINS_15InspectorObjectEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN9Inspector14InspectorValue8asObjectEPN3WTF6RefPtrINS_15InspectorObjectEEE(i1 | 0, i2 | 0) | 0;
}
function _bitshift64Ashr(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((i3 | 0) < 32) {
  tempRet0 = i2 >> i3;
  return i1 >>> i3 | (i2 & (1 << i3) - 1) << 32 - i3;
 }
 tempRet0 = (i2 | 0) < 0 ? -1 : 0;
 return i2 >> i3 - 32 | 0;
}
function dynCall_viiiiii(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 FUNCTION_TABLE_viiiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function _bitshift64Shl(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((i3 | 0) < 32) {
  tempRet0 = i2 << i3 | (i1 & (1 << i3) - 1 << 32 - i3) >>> 32 - i3;
  return i1 << i3;
 }
 tempRet0 = i1 << i3 - 32;
 return 0;
}
function _i64Subtract(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i5 = i2 - i4 >>> 0;
 i5 = i2 - i4 - (i3 >>> 0 > i1 >>> 0 | 0) >>> 0;
 return (tempRet0 = i5, i1 - i3 >>> 0 | 0) | 0;
}
function _bitshift64Lshr(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((i3 | 0) < 32) {
  tempRet0 = i2 >>> i3;
  return i1 >>> i3 | (i2 & (1 << i3) - 1) << 32 - i3;
 }
 tempRet0 = 0;
 return i2 >>> i3 - 32 | 0;
}
function vii___ZNK9Inspector18InspectorArrayBase9writeJSONEPN3WTF13StringBuilderE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK9Inspector18InspectorArrayBase9writeJSONEPN3WTF13StringBuilderE(i1 | 0, i2 | 0);
}
function b1(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 abort(1);
}
function iii___ZN9Inspector14InspectorValue7asValueEPN3WTF6RefPtrIS0_EE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN9Inspector14InspectorValue7asValueEPN3WTF6RefPtrIS0_EE(i1 | 0, i2 | 0) | 0;
}
function dynCall_viiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function iii___ZNK9Inspector14InspectorValue8asStringEPN3WTF6StringE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue8asStringEPN3WTF6StringE(i1 | 0, i2 | 0) | 0;
}
function _i64Add(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i5 = i1 + i3 >>> 0;
 return (tempRet0 = i2 + i4 + (i5 >>> 0 < i1 >>> 0 | 0) >>> 0, i5 | 0) | 0;
}
function ___udivdi3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i5 = ___udivmoddi4(i1, i2, i3, i4, 0) | 0;
 return (tempRet0 = tempRet0, i5) | 0;
}
function dynCall_iiiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return FUNCTION_TABLE_iiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function __ZN9Inspector11TypeBuilder5ArrayINS0_9IndexedDB16ObjectStoreIndexEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN9Inspector18InspectorArrayBaseD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN9Inspector11TypeBuilder5ArrayINS0_9IndexedDB11ObjectStoreEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN9Inspector18InspectorArrayBaseD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function iii___ZNK9Inspector14InspectorValue9asBooleanEPb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue9asBooleanEPb(i1 | 0, i2 | 0) | 0;
}
function __ZN9Inspector11TypeBuilder5ArrayINS0_9IndexedDB9DataEntryEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN9Inspector18InspectorArrayBaseD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function iii___ZNK9Inspector14InspectorValue8asNumberEPm__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue8asNumberEPm(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK9Inspector14InspectorValue8asNumberEPl__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue8asNumberEPl(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK9Inspector14InspectorValue8asNumberEPj__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue8asNumberEPj(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK9Inspector14InspectorValue8asNumberEPi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue8asNumberEPi(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK9Inspector14InspectorValue8asNumberEPd__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue8asNumberEPd(i1 | 0, i2 | 0) | 0;
}
function vii___ZN9Inspector18InspectorArrayBase7asArrayEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN9Inspector18InspectorArrayBase7asArrayEv(i1 | 0, i2 | 0);
}
function __ZN9Inspector11TypeBuilder5ArrayIN3WTF6StringEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN9Inspector18InspectorArrayBaseD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function vii___ZN9Inspector14InspectorValue8asObjectEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN9Inspector14InspectorValue8asObjectEv(i1 | 0, i2 | 0);
}
function __ZN9Inspector11TypeBuilder5ArrayINS0_9IndexedDB16ObjectStoreIndexEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN9Inspector18InspectorArrayBaseD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore12_GLOBAL__N_124GetDatabaseNamesCallbackeqERKNS_13EventListenerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return (i1 | 0) == (i2 | 0) | 0;
}
function __ZN7WebCore12_GLOBAL__N_110DataLoaderD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore12_GLOBAL__N_110DataLoaderD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN9Inspector11TypeBuilder5ArrayINS0_9IndexedDB11ObjectStoreEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN9Inspector18InspectorArrayBaseD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore12_GLOBAL__N_120OpenDatabaseCallbackeqERKNS_13EventListenerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return (i1 | 0) == (i2 | 0) | 0;
}
function __ZN9Inspector11TypeBuilder5ArrayINS0_9IndexedDB9DataEntryEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN9Inspector18InspectorArrayBaseD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore12_GLOBAL__N_118OpenCursorCallbackeqERKNS_13EventListenerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return (i1 | 0) == (i2 | 0) | 0;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 15](i2 | 0, i3 | 0, i4 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZN7WebCore24ClearObjectStoreListenereqERKNS_13EventListenerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return (i1 | 0) == (i2 | 0) | 0;
}
function __ZN9Inspector11TypeBuilder5ArrayIN3WTF6StringEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN9Inspector18InspectorArrayBaseD2Ev(i1 | 0);
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 31](i2 | 0, i3 | 0) | 0;
}
function b8(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(8);
}
function __ZN10Deprecated12ScriptObjectD0Ev(i1) {
 i1 = i1 | 0;
 __ZN10Deprecated11ScriptValueD2Ev(i1 | 0);
 __ZdlPv(i1);
 return;
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
function __ZN7WebCore12_GLOBAL__N_114DatabaseLoader15requestCallbackEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 12 >> 2] | 0;
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 31](i2 | 0, i3 | 0);
}
function __ZThn12_N7WebCore23InspectorIndexedDBAgent7disableEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZThn12_N7WebCore23InspectorIndexedDBAgent6enableEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore13EventListener15visitJSFunctionERN3JSC11SlotVisitorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore12_GLOBAL__N_110DataLoader15requestCallbackEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 12 >> 2] | 0;
}
function __ZN7WebCore23InspectorIndexedDBAgent7disableEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN10Deprecated12ScriptObjectD1Ev(i1) {
 i1 = i1 | 0;
 __ZN10Deprecated11ScriptValueD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore23InspectorIndexedDBAgent6enableEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function b2(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(2);
}
function __ZN7WebCore16ClearObjectStore15requestCallbackEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 16 >> 2] | 0;
}
function b5(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(5);
 return 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 15](i2 | 0) | 0;
}
function b10(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(10);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 127](i2 | 0);
}
function __ZNK7WebCore13EventListener20wasCreatedFromMarkupEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore13EventListener18virtualisAttributeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN9Inspector18InspectorAgentBase12discardAgentEv(i1) {
 i1 = i1 | 0;
 return;
}
function b6(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(6);
}
function b9(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(9);
 return 0;
}
function v____cxa_pure_virtual__wrapper() {
 ___cxa_pure_virtual();
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 3]();
}
function b4(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(4);
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
function b7() {
 abort(7);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_ii = [b0,b0,__ZN7WebCore12_GLOBAL__N_110DataLoader15requestCallbackEv,b0,__ZN7WebCore16ClearObjectStore15requestCallbackEv,b0,__ZN7WebCore12_GLOBAL__N_114DatabaseLoader15requestCallbackEv,b0,__ZNK7WebCore13EventListener20wasCreatedFromMarkupEv,b0,__ZNK7WebCore13EventListener18virtualisAttributeEv,b0,b0,b0,b0,b0];
  var FUNCTION_TABLE_viiiiiiiiii = [b1,b1,__ZN7WebCore23InspectorIndexedDBAgent11requestDataEPN3WTF6StringERKS2_S5_S5_S5_iiPKNS1_6RefPtrIN9Inspector15InspectorObjectEEENS1_10PassRefPtrINS7_42InspectorIndexedDBBackendDispatcherHandler19RequestDataCallbackEEE,b1,__ZThn12_N7WebCore23InspectorIndexedDBAgent11requestDataEPN3WTF6StringERKS2_S5_S5_S5_iiPKNS1_6RefPtrIN9Inspector15InspectorObjectEEENS1_10PassRefPtrINS7_42InspectorIndexedDBBackendDispatcherHandler19RequestDataCallbackEEE,b1,b1,b1];
  var FUNCTION_TABLE_viiiii = [b2,b2,__ZThn12_N7WebCore23InspectorIndexedDBAgent15requestDatabaseEPN3WTF6StringERKS2_S5_NS1_10PassRefPtrIN9Inspector42InspectorIndexedDBBackendDispatcherHandler23RequestDatabaseCallbackEEE,b2,__ZN7WebCore23InspectorIndexedDBAgent15requestDatabaseEPN3WTF6StringERKS2_S5_NS1_10PassRefPtrIN9Inspector42InspectorIndexedDBBackendDispatcherHandler23RequestDatabaseCallbackEEE,b2,b2,b2];
  var FUNCTION_TABLE_vi = [b3,b3,__ZN7WebCore12_GLOBAL__N_110DataLoaderD2Ev,b3,__ZN7WebCore24ClearObjectStoreListenerD1Ev,b3,__ZN7WebCore12_GLOBAL__N_110DataLoaderD0Ev,b3,__ZN9Inspector11TypeBuilder5ArrayIN3WTF6StringEED0Ev,b3,__ZN7WebCore18InspectorAgentBaseD0Ev,b3,__ZN7WebCore24ClearObjectStoreListenerD0Ev,b3,__ZN7WebCore16ClearObjectStoreD1Ev,b3,__ZN7WebCore16ClearObjectStoreD0Ev,b3,__ZThn12_N7WebCore23InspectorIndexedDBAgentD1Ev,b3,__ZN9Inspector11TypeBuilder5ArrayINS0_9IndexedDB11ObjectStoreEED1Ev,b3,__ZN7WebCore12_GLOBAL__N_118OpenCursorCallbackD2Ev,b3,__ZN9Inspector18InspectorAgentBase12discardAgentEv,b3,__ZThn12_N7WebCore23InspectorIndexedDBAgentD0Ev,b3,__ZN9Inspector11TypeBuilder5ArrayINS0_9IndexedDB16ObjectStoreIndexEED0Ev
  ,b3,__ZN7WebCore18InspectorAgentBaseD1Ev,b3,__ZN9Inspector11TypeBuilder5ArrayINS0_9IndexedDB16ObjectStoreIndexEED1Ev,b3,__ZN7WebCore23InspectorIndexedDBAgentD0Ev,b3,__ZN9Inspector18InspectorAgentBaseD1Ev,b3,__ZN10Deprecated12ScriptObjectD0Ev,b3,__ZN9Inspector18InspectorAgentBaseD0Ev,b3,__ZN7WebCore12_GLOBAL__N_124GetDatabaseNamesCallbackD0Ev,b3,__ZN9Inspector11TypeBuilder5ArrayINS0_9IndexedDB11ObjectStoreEED0Ev,b3,__ZN9Inspector11TypeBuilder5ArrayINS0_9IndexedDB9DataEntryEED1Ev,b3,__ZN7WebCore12_GLOBAL__N_120OpenDatabaseCallbackD2Ev,b3,__ZN7WebCore12_GLOBAL__N_120OpenDatabaseCallbackD0Ev,b3,__ZN7WebCore12_GLOBAL__N_124GetDatabaseNamesCallbackD2Ev,b3,__ZN7WebCore23InspectorIndexedDBAgent29willDestroyFrontendAndBackendEv,b3,__ZN7WebCore23InspectorIndexedDBAgentD2Ev,b3,__ZN7WebCore12_GLOBAL__N_118OpenCursorCallbackD0Ev
  ,b3,__ZN9Inspector11TypeBuilder5ArrayINS0_9IndexedDB9DataEntryEED0Ev,b3,__ZN9Inspector11TypeBuilder5ArrayIN3WTF6StringEED1Ev,b3,__ZN10Deprecated12ScriptObjectD1Ev,b3,__ZN7WebCore12_GLOBAL__N_114DatabaseLoaderD2Ev,b3,__ZN7WebCore12_GLOBAL__N_114DatabaseLoaderD0Ev,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_vii = [b4,b4,vii___ZN9Inspector14InspectorValue8asObjectEv__wrapper,b4,__ZN7WebCore23InspectorIndexedDBAgent7disableEPN3WTF6StringE,b4,vii___ZN9Inspector18InspectorArrayBase7asArrayEv__wrapper,b4,__ZN7WebCore23InspectorIndexedDBAgent6enableEPN3WTF6StringE,b4,__ZThn12_N7WebCore23InspectorIndexedDBAgent6enableEPN3WTF6StringE,b4,__ZN7WebCore12_GLOBAL__N_114DatabaseLoader7executeEN3WTF10PassRefPtrINS_11IDBDatabaseEEE,b4,__ZN7WebCore16ClearObjectStore7executeEN3WTF10PassRefPtrINS_11IDBDatabaseEEE,b4,vii___ZNK9Inspector18InspectorArrayBase9writeJSONEPN3WTF13StringBuilderE__wrapper,b4,__ZN7WebCore13EventListener15visitJSFunctionERN3JSC11SlotVisitorE,b4,__ZThn12_N7WebCore23InspectorIndexedDBAgent7disableEPN3WTF6StringE,b4,__ZN7WebCore12_GLOBAL__N_110DataLoader7executeEN3WTF10PassRefPtrINS_11IDBDatabaseEEE,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4];
  var FUNCTION_TABLE_iiiii = [b5,b5];
  var FUNCTION_TABLE_viii = [b6,b6,__ZN7WebCore12_GLOBAL__N_120OpenDatabaseCallback11handleEventEPNS_22ScriptExecutionContextEPNS_5EventE,b6,__ZN7WebCore23InspectorIndexedDBAgent27didCreateFrontendAndBackendEPN9Inspector24InspectorFrontendChannelEPNS1_26InspectorBackendDispatcherE,b6,__ZN7WebCore12_GLOBAL__N_124GetDatabaseNamesCallback11handleEventEPNS_22ScriptExecutionContextEPNS_5EventE,b6,__ZN7WebCore24ClearObjectStoreListener11handleEventEPNS_22ScriptExecutionContextEPNS_5EventE,b6,__ZN7WebCore12_GLOBAL__N_118OpenCursorCallback11handleEventEPNS_22ScriptExecutionContextEPNS_5EventE,b6,b6,b6,b6,b6];
  var FUNCTION_TABLE_v = [b7,b7,v____cxa_pure_virtual__wrapper,b7];
  var FUNCTION_TABLE_viiiiii = [b8,b8,__ZN7WebCore23InspectorIndexedDBAgent16clearObjectStoreEPN3WTF6StringERKS2_S5_S5_NS1_10PassRefPtrIN9Inspector42InspectorIndexedDBBackendDispatcherHandler24ClearObjectStoreCallbackEEE,b8,__ZThn12_N7WebCore23InspectorIndexedDBAgent16clearObjectStoreEPN3WTF6StringERKS2_S5_S5_NS1_10PassRefPtrIN9Inspector42InspectorIndexedDBBackendDispatcherHandler24ClearObjectStoreCallbackEEE,b8,b8,b8];
  var FUNCTION_TABLE_iii = [b9,b9,__ZN7WebCore12_GLOBAL__N_120OpenDatabaseCallbackeqERKNS_13EventListenerE,b9,iii___ZNK9Inspector14InspectorValue8asStringEPN3WTF6StringE__wrapper,b9,iii___ZNK9Inspector14InspectorValue8asNumberEPj__wrapper,b9,iii___ZNK9Inspector14InspectorValue8asNumberEPi__wrapper,b9,iii___ZNK9Inspector14InspectorValue8asNumberEPl__wrapper,b9,iii___ZNK9Inspector14InspectorValue9asBooleanEPb__wrapper,b9,iii___ZNK9Inspector14InspectorValue8asNumberEPd__wrapper,b9,iii___ZNK9Inspector14InspectorValue8asNumberEPm__wrapper,b9,iii___ZN9Inspector14InspectorValue7asValueEPN3WTF6RefPtrIS0_EE__wrapper,b9,__ZN7WebCore12_GLOBAL__N_124GetDatabaseNamesCallbackeqERKNS_13EventListenerE,b9,__ZN7WebCore12_GLOBAL__N_118OpenCursorCallbackeqERKNS_13EventListenerE,b9,iii___ZN9Inspector14InspectorValue8asObjectEPN3WTF6RefPtrINS_15InspectorObjectEEE__wrapper,b9,__ZN7WebCore24ClearObjectStoreListenereqERKNS_13EventListenerE,b9,iii___ZN9Inspector18InspectorArrayBase7asArrayEPN3WTF6RefPtrINS_14InspectorArrayEEE__wrapper
  ,b9,b9,b9];
  var FUNCTION_TABLE_viiii = [b10,b10,__ZN7WebCore23InspectorIndexedDBAgent20requestDatabaseNamesEPN3WTF6StringERKS2_NS1_10PassRefPtrIN9Inspector42InspectorIndexedDBBackendDispatcherHandler28RequestDatabaseNamesCallbackEEE,b10,__ZThn12_N7WebCore23InspectorIndexedDBAgent20requestDatabaseNamesEPN3WTF6StringERKS2_NS1_10PassRefPtrIN9Inspector42InspectorIndexedDBBackendDispatcherHandler28RequestDatabaseNamesCallbackEEE,b10,__ZN7WebCore23InspectorIndexedDBAgentC2EPNS_19InstrumentingAgentsEPN9Inspector21InjectedScriptManagerEPNS_18InspectorPageAgentE,b10];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_viiiiiiiiii: dynCall_viiiiiiiiii, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_iiiii: dynCall_iiiii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_viiiiii: dynCall_viiiiii, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_viiiiiiiiii": invoke_viiiiiiiiii, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_iiiii": invoke_iiiii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_viiiiii": invoke_viiiiii, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "cttz_i8": cttz_i8, "ctlz_i8": ctlz_i8, "NaN": NaN, "Infinity": Infinity, "__ZTVN10Deprecated11ScriptValueE": __ZTVN10Deprecated11ScriptValueE, "__ZTVN9Inspector18InjectedScriptBaseE": __ZTVN9Inspector18InjectedScriptBaseE, "__ZTVN9Inspector14InjectedScriptE": __ZTVN9Inspector14InjectedScriptE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viiiiiiiiii = Module["dynCall_viiiiiiiiii"] = asm["dynCall_viiiiiiiiii"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_viiiiii = Module["dynCall_viiiiii"] = asm["dynCall_viiiiii"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_viiii = Module["dynCall_viiii"] = asm["dynCall_viiii"];
// TODO: strip out parts of this we do not need
//======= begin closure i64 code =======
// Copyright 2009 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
/**
 * @fileoverview Defines a Long class for representing a 64-bit two's-complement
 * integer value, which faithfully simulates the behavior of a Java "long". This
 * implementation is derived from LongLib in GWT.
 *
 */
var i64Math = (function() { // Emscripten wrapper
  var goog = { math: {} };
  /**
   * Constructs a 64-bit two's-complement integer, given its low and high 32-bit
   * values as *signed* integers.  See the from* functions below for more
   * convenient ways of constructing Longs.
   *
   * The internal representation of a long is the two given signed, 32-bit values.
   * We use 32-bit pieces because these are the size of integers on which
   * Javascript performs bit-operations.  For operations like addition and
   * multiplication, we split each number into 16-bit pieces, which can easily be
   * multiplied within Javascript's floating-point representation without overflow
   * or change in sign.
   *
   * In the algorithms below, we frequently reduce the negative case to the
   * positive case by negating the input(s) and then post-processing the result.
   * Note that we must ALWAYS check specially whether those values are MIN_VALUE
   * (-2^63) because -MIN_VALUE == MIN_VALUE (since 2^63 cannot be represented as
   * a positive number, it overflows back into a negative).  Not handling this
   * case would often result in infinite recursion.
   *
   * @param {number} low  The low (signed) 32 bits of the long.
   * @param {number} high  The high (signed) 32 bits of the long.
   * @constructor
   */
  goog.math.Long = function(low, high) {
    /**
     * @type {number}
     * @private
     */
    this.low_ = low | 0;  // force into 32 signed bits.
    /**
     * @type {number}
     * @private
     */
    this.high_ = high | 0;  // force into 32 signed bits.
  };
  // NOTE: Common constant values ZERO, ONE, NEG_ONE, etc. are defined below the
  // from* methods on which they depend.
  /**
   * A cache of the Long representations of small integer values.
   * @type {!Object}
   * @private
   */
  goog.math.Long.IntCache_ = {};
  /**
   * Returns a Long representing the given (32-bit) integer value.
   * @param {number} value The 32-bit integer in question.
   * @return {!goog.math.Long} The corresponding Long value.
   */
  goog.math.Long.fromInt = function(value) {
    if (-128 <= value && value < 128) {
      var cachedObj = goog.math.Long.IntCache_[value];
      if (cachedObj) {
        return cachedObj;
      }
    }
    var obj = new goog.math.Long(value | 0, value < 0 ? -1 : 0);
    if (-128 <= value && value < 128) {
      goog.math.Long.IntCache_[value] = obj;
    }
    return obj;
  };
  /**
   * Returns a Long representing the given value, provided that it is a finite
   * number.  Otherwise, zero is returned.
   * @param {number} value The number in question.
   * @return {!goog.math.Long} The corresponding Long value.
   */
  goog.math.Long.fromNumber = function(value) {
    if (isNaN(value) || !isFinite(value)) {
      return goog.math.Long.ZERO;
    } else if (value <= -goog.math.Long.TWO_PWR_63_DBL_) {
      return goog.math.Long.MIN_VALUE;
    } else if (value + 1 >= goog.math.Long.TWO_PWR_63_DBL_) {
      return goog.math.Long.MAX_VALUE;
    } else if (value < 0) {
      return goog.math.Long.fromNumber(-value).negate();
    } else {
      return new goog.math.Long(
          (value % goog.math.Long.TWO_PWR_32_DBL_) | 0,
          (value / goog.math.Long.TWO_PWR_32_DBL_) | 0);
    }
  };
  /**
   * Returns a Long representing the 64-bit integer that comes by concatenating
   * the given high and low bits.  Each is assumed to use 32 bits.
   * @param {number} lowBits The low 32-bits.
   * @param {number} highBits The high 32-bits.
   * @return {!goog.math.Long} The corresponding Long value.
   */
  goog.math.Long.fromBits = function(lowBits, highBits) {
    return new goog.math.Long(lowBits, highBits);
  };
  /**
   * Returns a Long representation of the given string, written using the given
   * radix.
   * @param {string} str The textual representation of the Long.
   * @param {number=} opt_radix The radix in which the text is written.
   * @return {!goog.math.Long} The corresponding Long value.
   */
  goog.math.Long.fromString = function(str, opt_radix) {
    if (str.length == 0) {
      throw Error('number format error: empty string');
    }
    var radix = opt_radix || 10;
    if (radix < 2 || 36 < radix) {
      throw Error('radix out of range: ' + radix);
    }
    if (str.charAt(0) == '-') {
      return goog.math.Long.fromString(str.substring(1), radix).negate();
    } else if (str.indexOf('-') >= 0) {
      throw Error('number format error: interior "-" character: ' + str);
    }
    // Do several (8) digits each time through the loop, so as to
    // minimize the calls to the very expensive emulated div.
    var radixToPower = goog.math.Long.fromNumber(Math.pow(radix, 8));
    var result = goog.math.Long.ZERO;
    for (var i = 0; i < str.length; i += 8) {
      var size = Math.min(8, str.length - i);
      var value = parseInt(str.substring(i, i + size), radix);
      if (size < 8) {
        var power = goog.math.Long.fromNumber(Math.pow(radix, size));
        result = result.multiply(power).add(goog.math.Long.fromNumber(value));
      } else {
        result = result.multiply(radixToPower);
        result = result.add(goog.math.Long.fromNumber(value));
      }
    }
    return result;
  };
  // NOTE: the compiler should inline these constant values below and then remove
  // these variables, so there should be no runtime penalty for these.
  /**
   * Number used repeated below in calculations.  This must appear before the
   * first call to any from* function below.
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_16_DBL_ = 1 << 16;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_24_DBL_ = 1 << 24;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_32_DBL_ =
      goog.math.Long.TWO_PWR_16_DBL_ * goog.math.Long.TWO_PWR_16_DBL_;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_31_DBL_ =
      goog.math.Long.TWO_PWR_32_DBL_ / 2;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_48_DBL_ =
      goog.math.Long.TWO_PWR_32_DBL_ * goog.math.Long.TWO_PWR_16_DBL_;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_64_DBL_ =
      goog.math.Long.TWO_PWR_32_DBL_ * goog.math.Long.TWO_PWR_32_DBL_;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_63_DBL_ =
      goog.math.Long.TWO_PWR_64_DBL_ / 2;
  /** @type {!goog.math.Long} */
  goog.math.Long.ZERO = goog.math.Long.fromInt(0);
  /** @type {!goog.math.Long} */
  goog.math.Long.ONE = goog.math.Long.fromInt(1);
  /** @type {!goog.math.Long} */
  goog.math.Long.NEG_ONE = goog.math.Long.fromInt(-1);
  /** @type {!goog.math.Long} */
  goog.math.Long.MAX_VALUE =
      goog.math.Long.fromBits(0xFFFFFFFF | 0, 0x7FFFFFFF | 0);
  /** @type {!goog.math.Long} */
  goog.math.Long.MIN_VALUE = goog.math.Long.fromBits(0, 0x80000000 | 0);
  /**
   * @type {!goog.math.Long}
   * @private
   */
  goog.math.Long.TWO_PWR_24_ = goog.math.Long.fromInt(1 << 24);
  /** @return {number} The value, assuming it is a 32-bit integer. */
  goog.math.Long.prototype.toInt = function() {
    return this.low_;
  };
  /** @return {number} The closest floating-point representation to this value. */
  goog.math.Long.prototype.toNumber = function() {
    return this.high_ * goog.math.Long.TWO_PWR_32_DBL_ +
           this.getLowBitsUnsigned();
  };
  /**
   * @param {number=} opt_radix The radix in which the text should be written.
   * @return {string} The textual representation of this value.
   */
  goog.math.Long.prototype.toString = function(opt_radix) {
    var radix = opt_radix || 10;
    if (radix < 2 || 36 < radix) {
      throw Error('radix out of range: ' + radix);
    }
    if (this.isZero()) {
      return '0';
    }
    if (this.isNegative()) {
      if (this.equals(goog.math.Long.MIN_VALUE)) {
        // We need to change the Long value before it can be negated, so we remove
        // the bottom-most digit in this base and then recurse to do the rest.
        var radixLong = goog.math.Long.fromNumber(radix);
        var div = this.div(radixLong);
        var rem = div.multiply(radixLong).subtract(this);
        return div.toString(radix) + rem.toInt().toString(radix);
      } else {
        return '-' + this.negate().toString(radix);
      }
    }
    // Do several (6) digits each time through the loop, so as to
    // minimize the calls to the very expensive emulated div.
    var radixToPower = goog.math.Long.fromNumber(Math.pow(radix, 6));
    var rem = this;
    var result = '';
    while (true) {
      var remDiv = rem.div(radixToPower);
      var intval = rem.subtract(remDiv.multiply(radixToPower)).toInt();
      var digits = intval.toString(radix);
      rem = remDiv;
      if (rem.isZero()) {
        return digits + result;
      } else {
        while (digits.length < 6) {
          digits = '0' + digits;
        }
        result = '' + digits + result;
      }
    }
  };
  /** @return {number} The high 32-bits as a signed value. */
  goog.math.Long.prototype.getHighBits = function() {
    return this.high_;
  };
  /** @return {number} The low 32-bits as a signed value. */
  goog.math.Long.prototype.getLowBits = function() {
    return this.low_;
  };
  /** @return {number} The low 32-bits as an unsigned value. */
  goog.math.Long.prototype.getLowBitsUnsigned = function() {
    return (this.low_ >= 0) ?
        this.low_ : goog.math.Long.TWO_PWR_32_DBL_ + this.low_;
  };
  /**
   * @return {number} Returns the number of bits needed to represent the absolute
   *     value of this Long.
   */
  goog.math.Long.prototype.getNumBitsAbs = function() {
    if (this.isNegative()) {
      if (this.equals(goog.math.Long.MIN_VALUE)) {
        return 64;
      } else {
        return this.negate().getNumBitsAbs();
      }
    } else {
      var val = this.high_ != 0 ? this.high_ : this.low_;
      for (var bit = 31; bit > 0; bit--) {
        if ((val & (1 << bit)) != 0) {
          break;
        }
      }
      return this.high_ != 0 ? bit + 33 : bit + 1;
    }
  };
  /** @return {boolean} Whether this value is zero. */
  goog.math.Long.prototype.isZero = function() {
    return this.high_ == 0 && this.low_ == 0;
  };
  /** @return {boolean} Whether this value is negative. */
  goog.math.Long.prototype.isNegative = function() {
    return this.high_ < 0;
  };
  /** @return {boolean} Whether this value is odd. */
  goog.math.Long.prototype.isOdd = function() {
    return (this.low_ & 1) == 1;
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long equals the other.
   */
  goog.math.Long.prototype.equals = function(other) {
    return (this.high_ == other.high_) && (this.low_ == other.low_);
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long does not equal the other.
   */
  goog.math.Long.prototype.notEquals = function(other) {
    return (this.high_ != other.high_) || (this.low_ != other.low_);
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long is less than the other.
   */
  goog.math.Long.prototype.lessThan = function(other) {
    return this.compare(other) < 0;
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long is less than or equal to the other.
   */
  goog.math.Long.prototype.lessThanOrEqual = function(other) {
    return this.compare(other) <= 0;
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long is greater than the other.
   */
  goog.math.Long.prototype.greaterThan = function(other) {
    return this.compare(other) > 0;
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long is greater than or equal to the other.
   */
  goog.math.Long.prototype.greaterThanOrEqual = function(other) {
    return this.compare(other) >= 0;
  };
  /**
   * Compares this Long with the given one.
   * @param {goog.math.Long} other Long to compare against.
   * @return {number} 0 if they are the same, 1 if the this is greater, and -1
   *     if the given one is greater.
   */
  goog.math.Long.prototype.compare = function(other) {
    if (this.equals(other)) {
      return 0;
    }
    var thisNeg = this.isNegative();
    var otherNeg = other.isNegative();
    if (thisNeg && !otherNeg) {
      return -1;
    }
    if (!thisNeg && otherNeg) {
      return 1;
    }
    // at this point, the signs are the same, so subtraction will not overflow
    if (this.subtract(other).isNegative()) {
      return -1;
    } else {
      return 1;
    }
  };
  /** @return {!goog.math.Long} The negation of this value. */
  goog.math.Long.prototype.negate = function() {
    if (this.equals(goog.math.Long.MIN_VALUE)) {
      return goog.math.Long.MIN_VALUE;
    } else {
      return this.not().add(goog.math.Long.ONE);
    }
  };
  /**
   * Returns the sum of this and the given Long.
   * @param {goog.math.Long} other Long to add to this one.
   * @return {!goog.math.Long} The sum of this and the given Long.
   */
  goog.math.Long.prototype.add = function(other) {
    // Divide each number into 4 chunks of 16 bits, and then sum the chunks.
    var a48 = this.high_ >>> 16;
    var a32 = this.high_ & 0xFFFF;
    var a16 = this.low_ >>> 16;
    var a00 = this.low_ & 0xFFFF;
    var b48 = other.high_ >>> 16;
    var b32 = other.high_ & 0xFFFF;
    var b16 = other.low_ >>> 16;
    var b00 = other.low_ & 0xFFFF;
    var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
    c00 += a00 + b00;
    c16 += c00 >>> 16;
    c00 &= 0xFFFF;
    c16 += a16 + b16;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c32 += a32 + b32;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c48 += a48 + b48;
    c48 &= 0xFFFF;
    return goog.math.Long.fromBits((c16 << 16) | c00, (c48 << 16) | c32);
  };
  /**
   * Returns the difference of this and the given Long.
   * @param {goog.math.Long} other Long to subtract from this.
   * @return {!goog.math.Long} The difference of this and the given Long.
   */
  goog.math.Long.prototype.subtract = function(other) {
    return this.add(other.negate());
  };
  /**
   * Returns the product of this and the given long.
   * @param {goog.math.Long} other Long to multiply with this.
   * @return {!goog.math.Long} The product of this and the other.
   */
  goog.math.Long.prototype.multiply = function(other) {
    if (this.isZero()) {
      return goog.math.Long.ZERO;
    } else if (other.isZero()) {
      return goog.math.Long.ZERO;
    }
    if (this.equals(goog.math.Long.MIN_VALUE)) {
      return other.isOdd() ? goog.math.Long.MIN_VALUE : goog.math.Long.ZERO;
    } else if (other.equals(goog.math.Long.MIN_VALUE)) {
      return this.isOdd() ? goog.math.Long.MIN_VALUE : goog.math.Long.ZERO;
    }
    if (this.isNegative()) {
      if (other.isNegative()) {
        return this.negate().multiply(other.negate());
      } else {
        return this.negate().multiply(other).negate();
      }
    } else if (other.isNegative()) {
      return this.multiply(other.negate()).negate();
    }
    // If both longs are small, use float multiplication
    if (this.lessThan(goog.math.Long.TWO_PWR_24_) &&
        other.lessThan(goog.math.Long.TWO_PWR_24_)) {
      return goog.math.Long.fromNumber(this.toNumber() * other.toNumber());
    }
    // Divide each long into 4 chunks of 16 bits, and then add up 4x4 products.
    // We can skip products that would overflow.
    var a48 = this.high_ >>> 16;
    var a32 = this.high_ & 0xFFFF;
    var a16 = this.low_ >>> 16;
    var a00 = this.low_ & 0xFFFF;
    var b48 = other.high_ >>> 16;
    var b32 = other.high_ & 0xFFFF;
    var b16 = other.low_ >>> 16;
    var b00 = other.low_ & 0xFFFF;
    var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
    c00 += a00 * b00;
    c16 += c00 >>> 16;
    c00 &= 0xFFFF;
    c16 += a16 * b00;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c16 += a00 * b16;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c32 += a32 * b00;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c32 += a16 * b16;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c32 += a00 * b32;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
    c48 &= 0xFFFF;
    return goog.math.Long.fromBits((c16 << 16) | c00, (c48 << 16) | c32);
  };
  /**
   * Returns this Long divided by the given one.
   * @param {goog.math.Long} other Long by which to divide.
   * @return {!goog.math.Long} This Long divided by the given one.
   */
  goog.math.Long.prototype.div = function(other) {
    if (other.isZero()) {
      throw Error('division by zero');
    } else if (this.isZero()) {
      return goog.math.Long.ZERO;
    }
    if (this.equals(goog.math.Long.MIN_VALUE)) {
      if (other.equals(goog.math.Long.ONE) ||
          other.equals(goog.math.Long.NEG_ONE)) {
        return goog.math.Long.MIN_VALUE;  // recall that -MIN_VALUE == MIN_VALUE
      } else if (other.equals(goog.math.Long.MIN_VALUE)) {
        return goog.math.Long.ONE;
      } else {
        // At this point, we have |other| >= 2, so |this/other| < |MIN_VALUE|.
        var halfThis = this.shiftRight(1);
        var approx = halfThis.div(other).shiftLeft(1);
        if (approx.equals(goog.math.Long.ZERO)) {
          return other.isNegative() ? goog.math.Long.ONE : goog.math.Long.NEG_ONE;
        } else {
          var rem = this.subtract(other.multiply(approx));
          var result = approx.add(rem.div(other));
          return result;
        }
      }
    } else if (other.equals(goog.math.Long.MIN_VALUE)) {
      return goog.math.Long.ZERO;
    }
    if (this.isNegative()) {
      if (other.isNegative()) {
        return this.negate().div(other.negate());
      } else {
        return this.negate().div(other).negate();
      }
    } else if (other.isNegative()) {
      return this.div(other.negate()).negate();
    }
    // Repeat the following until the remainder is less than other:  find a
    // floating-point that approximates remainder / other *from below*, add this
    // into the result, and subtract it from the remainder.  It is critical that
    // the approximate value is less than or equal to the real value so that the
    // remainder never becomes negative.
    var res = goog.math.Long.ZERO;
    var rem = this;
    while (rem.greaterThanOrEqual(other)) {
      // Approximate the result of division. This may be a little greater or
      // smaller than the actual value.
      var approx = Math.max(1, Math.floor(rem.toNumber() / other.toNumber()));
      // We will tweak the approximate result by changing it in the 48-th digit or
      // the smallest non-fractional digit, whichever is larger.
      var log2 = Math.ceil(Math.log(approx) / Math.LN2);
      var delta = (log2 <= 48) ? 1 : Math.pow(2, log2 - 48);
      // Decrease the approximation until it is smaller than the remainder.  Note
      // that if it is too large, the product overflows and is negative.
      var approxRes = goog.math.Long.fromNumber(approx);
      var approxRem = approxRes.multiply(other);
      while (approxRem.isNegative() || approxRem.greaterThan(rem)) {
        approx -= delta;
        approxRes = goog.math.Long.fromNumber(approx);
        approxRem = approxRes.multiply(other);
      }
      // We know the answer can't be zero... and actually, zero would cause
      // infinite recursion since we would make no progress.
      if (approxRes.isZero()) {
        approxRes = goog.math.Long.ONE;
      }
      res = res.add(approxRes);
      rem = rem.subtract(approxRem);
    }
    return res;
  };
  /**
   * Returns this Long modulo the given one.
   * @param {goog.math.Long} other Long by which to mod.
   * @return {!goog.math.Long} This Long modulo the given one.
   */
  goog.math.Long.prototype.modulo = function(other) {
    return this.subtract(this.div(other).multiply(other));
  };
  /** @return {!goog.math.Long} The bitwise-NOT of this value. */
  goog.math.Long.prototype.not = function() {
    return goog.math.Long.fromBits(~this.low_, ~this.high_);
  };
  /**
   * Returns the bitwise-AND of this Long and the given one.
   * @param {goog.math.Long} other The Long with which to AND.
   * @return {!goog.math.Long} The bitwise-AND of this and the other.
   */
  goog.math.Long.prototype.and = function(other) {
    return goog.math.Long.fromBits(this.low_ & other.low_,
                                   this.high_ & other.high_);
  };
  /**
   * Returns the bitwise-OR of this Long and the given one.
   * @param {goog.math.Long} other The Long with which to OR.
   * @return {!goog.math.Long} The bitwise-OR of this and the other.
   */
  goog.math.Long.prototype.or = function(other) {
    return goog.math.Long.fromBits(this.low_ | other.low_,
                                   this.high_ | other.high_);
  };
  /**
   * Returns the bitwise-XOR of this Long and the given one.
   * @param {goog.math.Long} other The Long with which to XOR.
   * @return {!goog.math.Long} The bitwise-XOR of this and the other.
   */
  goog.math.Long.prototype.xor = function(other) {
    return goog.math.Long.fromBits(this.low_ ^ other.low_,
                                   this.high_ ^ other.high_);
  };
  /**
   * Returns this Long with bits shifted to the left by the given amount.
   * @param {number} numBits The number of bits by which to shift.
   * @return {!goog.math.Long} This shifted to the left by the given amount.
   */
  goog.math.Long.prototype.shiftLeft = function(numBits) {
    numBits &= 63;
    if (numBits == 0) {
      return this;
    } else {
      var low = this.low_;
      if (numBits < 32) {
        var high = this.high_;
        return goog.math.Long.fromBits(
            low << numBits,
            (high << numBits) | (low >>> (32 - numBits)));
      } else {
        return goog.math.Long.fromBits(0, low << (numBits - 32));
      }
    }
  };
  /**
   * Returns this Long with bits shifted to the right by the given amount.
   * @param {number} numBits The number of bits by which to shift.
   * @return {!goog.math.Long} This shifted to the right by the given amount.
   */
  goog.math.Long.prototype.shiftRight = function(numBits) {
    numBits &= 63;
    if (numBits == 0) {
      return this;
    } else {
      var high = this.high_;
      if (numBits < 32) {
        var low = this.low_;
        return goog.math.Long.fromBits(
            (low >>> numBits) | (high << (32 - numBits)),
            high >> numBits);
      } else {
        return goog.math.Long.fromBits(
            high >> (numBits - 32),
            high >= 0 ? 0 : -1);
      }
    }
  };
  /**
   * Returns this Long with bits shifted to the right by the given amount, with
   * the new top bits matching the current sign bit.
   * @param {number} numBits The number of bits by which to shift.
   * @return {!goog.math.Long} This shifted to the right by the given amount, with
   *     zeros placed into the new leading bits.
   */
  goog.math.Long.prototype.shiftRightUnsigned = function(numBits) {
    numBits &= 63;
    if (numBits == 0) {
      return this;
    } else {
      var high = this.high_;
      if (numBits < 32) {
        var low = this.low_;
        return goog.math.Long.fromBits(
            (low >>> numBits) | (high << (32 - numBits)),
            high >>> numBits);
      } else if (numBits == 32) {
        return goog.math.Long.fromBits(high, 0);
      } else {
        return goog.math.Long.fromBits(high >>> (numBits - 32), 0);
      }
    }
  };
  //======= begin jsbn =======
  var navigator = { appName: 'Modern Browser' }; // polyfill a little
  // Copyright (c) 2005  Tom Wu
  // All Rights Reserved.
  // http://www-cs-students.stanford.edu/~tjw/jsbn/
  /*
   * Copyright (c) 2003-2005  Tom Wu
   * All Rights Reserved.
   *
   * Permission is hereby granted, free of charge, to any person obtaining
   * a copy of this software and associated documentation files (the
   * "Software"), to deal in the Software without restriction, including
   * without limitation the rights to use, copy, modify, merge, publish,
   * distribute, sublicense, and/or sell copies of the Software, and to
   * permit persons to whom the Software is furnished to do so, subject to
   * the following conditions:
   *
   * The above copyright notice and this permission notice shall be
   * included in all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS-IS" AND WITHOUT WARRANTY OF ANY KIND, 
   * EXPRESS, IMPLIED OR OTHERWISE, INCLUDING WITHOUT LIMITATION, ANY 
   * WARRANTY OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.  
   *
   * IN NO EVENT SHALL TOM WU BE LIABLE FOR ANY SPECIAL, INCIDENTAL,
   * INDIRECT OR CONSEQUENTIAL DAMAGES OF ANY KIND, OR ANY DAMAGES WHATSOEVER
   * RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER OR NOT ADVISED OF
   * THE POSSIBILITY OF DAMAGE, AND ON ANY THEORY OF LIABILITY, ARISING OUT
   * OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   * In addition, the following condition applies:
   *
   * All redistributions must retain an intact copy of this copyright notice
   * and disclaimer.
   */
  // Basic JavaScript BN library - subset useful for RSA encryption.
  // Bits per digit
  var dbits;
  // JavaScript engine analysis
  var canary = 0xdeadbeefcafe;
  var j_lm = ((canary&0xffffff)==0xefcafe);
  // (public) Constructor
  function BigInteger(a,b,c) {
    if(a != null)
      if("number" == typeof a) this.fromNumber(a,b,c);
      else if(b == null && "string" != typeof a) this.fromString(a,256);
      else this.fromString(a,b);
  }
  // return new, unset BigInteger
  function nbi() { return new BigInteger(null); }
  // am: Compute w_j += (x*this_i), propagate carries,
  // c is initial carry, returns final carry.
  // c < 3*dvalue, x < 2*dvalue, this_i < dvalue
  // We need to select the fastest one that works in this environment.
  // am1: use a single mult and divide to get the high bits,
  // max digit bits should be 26 because
  // max internal value = 2*dvalue^2-2*dvalue (< 2^53)
  function am1(i,x,w,j,c,n) {
    while(--n >= 0) {
      var v = x*this[i++]+w[j]+c;
      c = Math.floor(v/0x4000000);
      w[j++] = v&0x3ffffff;
    }
    return c;
  }
  // am2 avoids a big mult-and-extract completely.
  // Max digit bits should be <= 30 because we do bitwise ops
  // on values up to 2*hdvalue^2-hdvalue-1 (< 2^31)
  function am2(i,x,w,j,c,n) {
    var xl = x&0x7fff, xh = x>>15;
    while(--n >= 0) {
      var l = this[i]&0x7fff;
      var h = this[i++]>>15;
      var m = xh*l+h*xl;
      l = xl*l+((m&0x7fff)<<15)+w[j]+(c&0x3fffffff);
      c = (l>>>30)+(m>>>15)+xh*h+(c>>>30);
      w[j++] = l&0x3fffffff;
    }
    return c;
  }
  // Alternately, set max digit bits to 28 since some
  // browsers slow down when dealing with 32-bit numbers.
  function am3(i,x,w,j,c,n) {
    var xl = x&0x3fff, xh = x>>14;
    while(--n >= 0) {
      var l = this[i]&0x3fff;
      var h = this[i++]>>14;
      var m = xh*l+h*xl;
      l = xl*l+((m&0x3fff)<<14)+w[j]+c;
      c = (l>>28)+(m>>14)+xh*h;
      w[j++] = l&0xfffffff;
    }
    return c;
  }
  if(j_lm && (navigator.appName == "Microsoft Internet Explorer")) {
    BigInteger.prototype.am = am2;
    dbits = 30;
  }
  else if(j_lm && (navigator.appName != "Netscape")) {
    BigInteger.prototype.am = am1;
    dbits = 26;
  }
  else { // Mozilla/Netscape seems to prefer am3
    BigInteger.prototype.am = am3;
    dbits = 28;
  }
  BigInteger.prototype.DB = dbits;
  BigInteger.prototype.DM = ((1<<dbits)-1);
  BigInteger.prototype.DV = (1<<dbits);
  var BI_FP = 52;
  BigInteger.prototype.FV = Math.pow(2,BI_FP);
  BigInteger.prototype.F1 = BI_FP-dbits;
  BigInteger.prototype.F2 = 2*dbits-BI_FP;
  // Digit conversions
  var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
  var BI_RC = new Array();
  var rr,vv;
  rr = "0".charCodeAt(0);
  for(vv = 0; vv <= 9; ++vv) BI_RC[rr++] = vv;
  rr = "a".charCodeAt(0);
  for(vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
  rr = "A".charCodeAt(0);
  for(vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
  function int2char(n) { return BI_RM.charAt(n); }
  function intAt(s,i) {
    var c = BI_RC[s.charCodeAt(i)];
    return (c==null)?-1:c;
  }
  // (protected) copy this to r
  function bnpCopyTo(r) {
    for(var i = this.t-1; i >= 0; --i) r[i] = this[i];
    r.t = this.t;
    r.s = this.s;
  }
  // (protected) set from integer value x, -DV <= x < DV
  function bnpFromInt(x) {
    this.t = 1;
    this.s = (x<0)?-1:0;
    if(x > 0) this[0] = x;
    else if(x < -1) this[0] = x+DV;
    else this.t = 0;
  }
  // return bigint initialized to value
  function nbv(i) { var r = nbi(); r.fromInt(i); return r; }
  // (protected) set from string and radix
  function bnpFromString(s,b) {
    var k;
    if(b == 16) k = 4;
    else if(b == 8) k = 3;
    else if(b == 256) k = 8; // byte array
    else if(b == 2) k = 1;
    else if(b == 32) k = 5;
    else if(b == 4) k = 2;
    else { this.fromRadix(s,b); return; }
    this.t = 0;
    this.s = 0;
    var i = s.length, mi = false, sh = 0;
    while(--i >= 0) {
      var x = (k==8)?s[i]&0xff:intAt(s,i);
      if(x < 0) {
        if(s.charAt(i) == "-") mi = true;
        continue;
      }
      mi = false;
      if(sh == 0)
        this[this.t++] = x;
      else if(sh+k > this.DB) {
        this[this.t-1] |= (x&((1<<(this.DB-sh))-1))<<sh;
        this[this.t++] = (x>>(this.DB-sh));
      }
      else
        this[this.t-1] |= x<<sh;
      sh += k;
      if(sh >= this.DB) sh -= this.DB;
    }
    if(k == 8 && (s[0]&0x80) != 0) {
      this.s = -1;
      if(sh > 0) this[this.t-1] |= ((1<<(this.DB-sh))-1)<<sh;
    }
    this.clamp();
    if(mi) BigInteger.ZERO.subTo(this,this);
  }
  // (protected) clamp off excess high words
  function bnpClamp() {
    var c = this.s&this.DM;
    while(this.t > 0 && this[this.t-1] == c) --this.t;
  }
  // (public) return string representation in given radix
  function bnToString(b) {
    if(this.s < 0) return "-"+this.negate().toString(b);
    var k;
    if(b == 16) k = 4;
    else if(b == 8) k = 3;
    else if(b == 2) k = 1;
    else if(b == 32) k = 5;
    else if(b == 4) k = 2;
    else return this.toRadix(b);
    var km = (1<<k)-1, d, m = false, r = "", i = this.t;
    var p = this.DB-(i*this.DB)%k;
    if(i-- > 0) {
      if(p < this.DB && (d = this[i]>>p) > 0) { m = true; r = int2char(d); }
      while(i >= 0) {
        if(p < k) {
          d = (this[i]&((1<<p)-1))<<(k-p);
          d |= this[--i]>>(p+=this.DB-k);
        }
        else {
          d = (this[i]>>(p-=k))&km;
          if(p <= 0) { p += this.DB; --i; }
        }
        if(d > 0) m = true;
        if(m) r += int2char(d);
      }
    }
    return m?r:"0";
  }
  // (public) -this
  function bnNegate() { var r = nbi(); BigInteger.ZERO.subTo(this,r); return r; }
  // (public) |this|
  function bnAbs() { return (this.s<0)?this.negate():this; }
  // (public) return + if this > a, - if this < a, 0 if equal
  function bnCompareTo(a) {
    var r = this.s-a.s;
    if(r != 0) return r;
    var i = this.t;
    r = i-a.t;
    if(r != 0) return (this.s<0)?-r:r;
    while(--i >= 0) if((r=this[i]-a[i]) != 0) return r;
    return 0;
  }
  // returns bit length of the integer x
  function nbits(x) {
    var r = 1, t;
    if((t=x>>>16) != 0) { x = t; r += 16; }
    if((t=x>>8) != 0) { x = t; r += 8; }
    if((t=x>>4) != 0) { x = t; r += 4; }
    if((t=x>>2) != 0) { x = t; r += 2; }
    if((t=x>>1) != 0) { x = t; r += 1; }
    return r;
  }
  // (public) return the number of bits in "this"
  function bnBitLength() {
    if(this.t <= 0) return 0;
    return this.DB*(this.t-1)+nbits(this[this.t-1]^(this.s&this.DM));
  }
  // (protected) r = this << n*DB
  function bnpDLShiftTo(n,r) {
    var i;
    for(i = this.t-1; i >= 0; --i) r[i+n] = this[i];
    for(i = n-1; i >= 0; --i) r[i] = 0;
    r.t = this.t+n;
    r.s = this.s;
  }
  // (protected) r = this >> n*DB
  function bnpDRShiftTo(n,r) {
    for(var i = n; i < this.t; ++i) r[i-n] = this[i];
    r.t = Math.max(this.t-n,0);
    r.s = this.s;
  }
  // (protected) r = this << n
  function bnpLShiftTo(n,r) {
    var bs = n%this.DB;
    var cbs = this.DB-bs;
    var bm = (1<<cbs)-1;
    var ds = Math.floor(n/this.DB), c = (this.s<<bs)&this.DM, i;
    for(i = this.t-1; i >= 0; --i) {
      r[i+ds+1] = (this[i]>>cbs)|c;
      c = (this[i]&bm)<<bs;
    }
    for(i = ds-1; i >= 0; --i) r[i] = 0;
    r[ds] = c;
    r.t = this.t+ds+1;
    r.s = this.s;
    r.clamp();
  }
  // (protected) r = this >> n
  function bnpRShiftTo(n,r) {
    r.s = this.s;
    var ds = Math.floor(n/this.DB);
    if(ds >= this.t) { r.t = 0; return; }
    var bs = n%this.DB;
    var cbs = this.DB-bs;
    var bm = (1<<bs)-1;
    r[0] = this[ds]>>bs;
    for(var i = ds+1; i < this.t; ++i) {
      r[i-ds-1] |= (this[i]&bm)<<cbs;
      r[i-ds] = this[i]>>bs;
    }
    if(bs > 0) r[this.t-ds-1] |= (this.s&bm)<<cbs;
    r.t = this.t-ds;
    r.clamp();
  }
  // (protected) r = this - a
  function bnpSubTo(a,r) {
    var i = 0, c = 0, m = Math.min(a.t,this.t);
    while(i < m) {
      c += this[i]-a[i];
      r[i++] = c&this.DM;
      c >>= this.DB;
    }
    if(a.t < this.t) {
      c -= a.s;
      while(i < this.t) {
        c += this[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      c += this.s;
    }
    else {
      c += this.s;
      while(i < a.t) {
        c -= a[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      c -= a.s;
    }
    r.s = (c<0)?-1:0;
    if(c < -1) r[i++] = this.DV+c;
    else if(c > 0) r[i++] = c;
    r.t = i;
    r.clamp();
  }
  // (protected) r = this * a, r != this,a (HAC 14.12)
  // "this" should be the larger one if appropriate.
  function bnpMultiplyTo(a,r) {
    var x = this.abs(), y = a.abs();
    var i = x.t;
    r.t = i+y.t;
    while(--i >= 0) r[i] = 0;
    for(i = 0; i < y.t; ++i) r[i+x.t] = x.am(0,y[i],r,i,0,x.t);
    r.s = 0;
    r.clamp();
    if(this.s != a.s) BigInteger.ZERO.subTo(r,r);
  }
  // (protected) r = this^2, r != this (HAC 14.16)
  function bnpSquareTo(r) {
    var x = this.abs();
    var i = r.t = 2*x.t;
    while(--i >= 0) r[i] = 0;
    for(i = 0; i < x.t-1; ++i) {
      var c = x.am(i,x[i],r,2*i,0,1);
      if((r[i+x.t]+=x.am(i+1,2*x[i],r,2*i+1,c,x.t-i-1)) >= x.DV) {
        r[i+x.t] -= x.DV;
        r[i+x.t+1] = 1;
      }
    }
    if(r.t > 0) r[r.t-1] += x.am(i,x[i],r,2*i,0,1);
    r.s = 0;
    r.clamp();
  }
  // (protected) divide this by m, quotient and remainder to q, r (HAC 14.20)
  // r != q, this != m.  q or r may be null.
  function bnpDivRemTo(m,q,r) {
    var pm = m.abs();
    if(pm.t <= 0) return;
    var pt = this.abs();
    if(pt.t < pm.t) {
      if(q != null) q.fromInt(0);
      if(r != null) this.copyTo(r);
      return;
    }
    if(r == null) r = nbi();
    var y = nbi(), ts = this.s, ms = m.s;
    var nsh = this.DB-nbits(pm[pm.t-1]);	// normalize modulus
    if(nsh > 0) { pm.lShiftTo(nsh,y); pt.lShiftTo(nsh,r); }
    else { pm.copyTo(y); pt.copyTo(r); }
    var ys = y.t;
    var y0 = y[ys-1];
    if(y0 == 0) return;
    var yt = y0*(1<<this.F1)+((ys>1)?y[ys-2]>>this.F2:0);
    var d1 = this.FV/yt, d2 = (1<<this.F1)/yt, e = 1<<this.F2;
    var i = r.t, j = i-ys, t = (q==null)?nbi():q;
    y.dlShiftTo(j,t);
    if(r.compareTo(t) >= 0) {
      r[r.t++] = 1;
      r.subTo(t,r);
    }
    BigInteger.ONE.dlShiftTo(ys,t);
    t.subTo(y,y);	// "negative" y so we can replace sub with am later
    while(y.t < ys) y[y.t++] = 0;
    while(--j >= 0) {
      // Estimate quotient digit
      var qd = (r[--i]==y0)?this.DM:Math.floor(r[i]*d1+(r[i-1]+e)*d2);
      if((r[i]+=y.am(0,qd,r,j,0,ys)) < qd) {	// Try it out
        y.dlShiftTo(j,t);
        r.subTo(t,r);
        while(r[i] < --qd) r.subTo(t,r);
      }
    }
    if(q != null) {
      r.drShiftTo(ys,q);
      if(ts != ms) BigInteger.ZERO.subTo(q,q);
    }
    r.t = ys;
    r.clamp();
    if(nsh > 0) r.rShiftTo(nsh,r);	// Denormalize remainder
    if(ts < 0) BigInteger.ZERO.subTo(r,r);
  }
  // (public) this mod a
  function bnMod(a) {
    var r = nbi();
    this.abs().divRemTo(a,null,r);
    if(this.s < 0 && r.compareTo(BigInteger.ZERO) > 0) a.subTo(r,r);
    return r;
  }
  // Modular reduction using "classic" algorithm
  function Classic(m) { this.m = m; }
  function cConvert(x) {
    if(x.s < 0 || x.compareTo(this.m) >= 0) return x.mod(this.m);
    else return x;
  }
  function cRevert(x) { return x; }
  function cReduce(x) { x.divRemTo(this.m,null,x); }
  function cMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }
  function cSqrTo(x,r) { x.squareTo(r); this.reduce(r); }
  Classic.prototype.convert = cConvert;
  Classic.prototype.revert = cRevert;
  Classic.prototype.reduce = cReduce;
  Classic.prototype.mulTo = cMulTo;
  Classic.prototype.sqrTo = cSqrTo;
  // (protected) return "-1/this % 2^DB"; useful for Mont. reduction
  // justification:
  //         xy == 1 (mod m)
  //         xy =  1+km
  //   xy(2-xy) = (1+km)(1-km)
  // x[y(2-xy)] = 1-k^2m^2
  // x[y(2-xy)] == 1 (mod m^2)
  // if y is 1/x mod m, then y(2-xy) is 1/x mod m^2
  // should reduce x and y(2-xy) by m^2 at each step to keep size bounded.
  // JS multiply "overflows" differently from C/C++, so care is needed here.
  function bnpInvDigit() {
    if(this.t < 1) return 0;
    var x = this[0];
    if((x&1) == 0) return 0;
    var y = x&3;		// y == 1/x mod 2^2
    y = (y*(2-(x&0xf)*y))&0xf;	// y == 1/x mod 2^4
    y = (y*(2-(x&0xff)*y))&0xff;	// y == 1/x mod 2^8
    y = (y*(2-(((x&0xffff)*y)&0xffff)))&0xffff;	// y == 1/x mod 2^16
    // last step - calculate inverse mod DV directly;
    // assumes 16 < DB <= 32 and assumes ability to handle 48-bit ints
    y = (y*(2-x*y%this.DV))%this.DV;		// y == 1/x mod 2^dbits
    // we really want the negative inverse, and -DV < y < DV
    return (y>0)?this.DV-y:-y;
  }
  // Montgomery reduction
  function Montgomery(m) {
    this.m = m;
    this.mp = m.invDigit();
    this.mpl = this.mp&0x7fff;
    this.mph = this.mp>>15;
    this.um = (1<<(m.DB-15))-1;
    this.mt2 = 2*m.t;
  }
  // xR mod m
  function montConvert(x) {
    var r = nbi();
    x.abs().dlShiftTo(this.m.t,r);
    r.divRemTo(this.m,null,r);
    if(x.s < 0 && r.compareTo(BigInteger.ZERO) > 0) this.m.subTo(r,r);
    return r;
  }
  // x/R mod m
  function montRevert(x) {
    var r = nbi();
    x.copyTo(r);
    this.reduce(r);
    return r;
  }
  // x = x/R mod m (HAC 14.32)
  function montReduce(x) {
    while(x.t <= this.mt2)	// pad x so am has enough room later
      x[x.t++] = 0;
    for(var i = 0; i < this.m.t; ++i) {
      // faster way of calculating u0 = x[i]*mp mod DV
      var j = x[i]&0x7fff;
      var u0 = (j*this.mpl+(((j*this.mph+(x[i]>>15)*this.mpl)&this.um)<<15))&x.DM;
      // use am to combine the multiply-shift-add into one call
      j = i+this.m.t;
      x[j] += this.m.am(0,u0,x,i,0,this.m.t);
      // propagate carry
      while(x[j] >= x.DV) { x[j] -= x.DV; x[++j]++; }
    }
    x.clamp();
    x.drShiftTo(this.m.t,x);
    if(x.compareTo(this.m) >= 0) x.subTo(this.m,x);
  }
  // r = "x^2/R mod m"; x != r
  function montSqrTo(x,r) { x.squareTo(r); this.reduce(r); }
  // r = "xy/R mod m"; x,y != r
  function montMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }
  Montgomery.prototype.convert = montConvert;
  Montgomery.prototype.revert = montRevert;
  Montgomery.prototype.reduce = montReduce;
  Montgomery.prototype.mulTo = montMulTo;
  Montgomery.prototype.sqrTo = montSqrTo;
  // (protected) true iff this is even
  function bnpIsEven() { return ((this.t>0)?(this[0]&1):this.s) == 0; }
  // (protected) this^e, e < 2^32, doing sqr and mul with "r" (HAC 14.79)
  function bnpExp(e,z) {
    if(e > 0xffffffff || e < 1) return BigInteger.ONE;
    var r = nbi(), r2 = nbi(), g = z.convert(this), i = nbits(e)-1;
    g.copyTo(r);
    while(--i >= 0) {
      z.sqrTo(r,r2);
      if((e&(1<<i)) > 0) z.mulTo(r2,g,r);
      else { var t = r; r = r2; r2 = t; }
    }
    return z.revert(r);
  }
  // (public) this^e % m, 0 <= e < 2^32
  function bnModPowInt(e,m) {
    var z;
    if(e < 256 || m.isEven()) z = new Classic(m); else z = new Montgomery(m);
    return this.exp(e,z);
  }
  // protected
  BigInteger.prototype.copyTo = bnpCopyTo;
  BigInteger.prototype.fromInt = bnpFromInt;
  BigInteger.prototype.fromString = bnpFromString;
  BigInteger.prototype.clamp = bnpClamp;
  BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
  BigInteger.prototype.drShiftTo = bnpDRShiftTo;
  BigInteger.prototype.lShiftTo = bnpLShiftTo;
  BigInteger.prototype.rShiftTo = bnpRShiftTo;
  BigInteger.prototype.subTo = bnpSubTo;
  BigInteger.prototype.multiplyTo = bnpMultiplyTo;
  BigInteger.prototype.squareTo = bnpSquareTo;
  BigInteger.prototype.divRemTo = bnpDivRemTo;
  BigInteger.prototype.invDigit = bnpInvDigit;
  BigInteger.prototype.isEven = bnpIsEven;
  BigInteger.prototype.exp = bnpExp;
  // public
  BigInteger.prototype.toString = bnToString;
  BigInteger.prototype.negate = bnNegate;
  BigInteger.prototype.abs = bnAbs;
  BigInteger.prototype.compareTo = bnCompareTo;
  BigInteger.prototype.bitLength = bnBitLength;
  BigInteger.prototype.mod = bnMod;
  BigInteger.prototype.modPowInt = bnModPowInt;
  // "constants"
  BigInteger.ZERO = nbv(0);
  BigInteger.ONE = nbv(1);
  // jsbn2 stuff
  // (protected) convert from radix string
  function bnpFromRadix(s,b) {
    this.fromInt(0);
    if(b == null) b = 10;
    var cs = this.chunkSize(b);
    var d = Math.pow(b,cs), mi = false, j = 0, w = 0;
    for(var i = 0; i < s.length; ++i) {
      var x = intAt(s,i);
      if(x < 0) {
        if(s.charAt(i) == "-" && this.signum() == 0) mi = true;
        continue;
      }
      w = b*w+x;
      if(++j >= cs) {
        this.dMultiply(d);
        this.dAddOffset(w,0);
        j = 0;
        w = 0;
      }
    }
    if(j > 0) {
      this.dMultiply(Math.pow(b,j));
      this.dAddOffset(w,0);
    }
    if(mi) BigInteger.ZERO.subTo(this,this);
  }
  // (protected) return x s.t. r^x < DV
  function bnpChunkSize(r) { return Math.floor(Math.LN2*this.DB/Math.log(r)); }
  // (public) 0 if this == 0, 1 if this > 0
  function bnSigNum() {
    if(this.s < 0) return -1;
    else if(this.t <= 0 || (this.t == 1 && this[0] <= 0)) return 0;
    else return 1;
  }
  // (protected) this *= n, this >= 0, 1 < n < DV
  function bnpDMultiply(n) {
    this[this.t] = this.am(0,n-1,this,0,0,this.t);
    ++this.t;
    this.clamp();
  }
  // (protected) this += n << w words, this >= 0
  function bnpDAddOffset(n,w) {
    if(n == 0) return;
    while(this.t <= w) this[this.t++] = 0;
    this[w] += n;
    while(this[w] >= this.DV) {
      this[w] -= this.DV;
      if(++w >= this.t) this[this.t++] = 0;
      ++this[w];
    }
  }
  // (protected) convert to radix string
  function bnpToRadix(b) {
    if(b == null) b = 10;
    if(this.signum() == 0 || b < 2 || b > 36) return "0";
    var cs = this.chunkSize(b);
    var a = Math.pow(b,cs);
    var d = nbv(a), y = nbi(), z = nbi(), r = "";
    this.divRemTo(d,y,z);
    while(y.signum() > 0) {
      r = (a+z.intValue()).toString(b).substr(1) + r;
      y.divRemTo(d,y,z);
    }
    return z.intValue().toString(b) + r;
  }
  // (public) return value as integer
  function bnIntValue() {
    if(this.s < 0) {
      if(this.t == 1) return this[0]-this.DV;
      else if(this.t == 0) return -1;
    }
    else if(this.t == 1) return this[0];
    else if(this.t == 0) return 0;
    // assumes 16 < DB < 32
    return ((this[1]&((1<<(32-this.DB))-1))<<this.DB)|this[0];
  }
  // (protected) r = this + a
  function bnpAddTo(a,r) {
    var i = 0, c = 0, m = Math.min(a.t,this.t);
    while(i < m) {
      c += this[i]+a[i];
      r[i++] = c&this.DM;
      c >>= this.DB;
    }
    if(a.t < this.t) {
      c += a.s;
      while(i < this.t) {
        c += this[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      c += this.s;
    }
    else {
      c += this.s;
      while(i < a.t) {
        c += a[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      c += a.s;
    }
    r.s = (c<0)?-1:0;
    if(c > 0) r[i++] = c;
    else if(c < -1) r[i++] = this.DV+c;
    r.t = i;
    r.clamp();
  }
  BigInteger.prototype.fromRadix = bnpFromRadix;
  BigInteger.prototype.chunkSize = bnpChunkSize;
  BigInteger.prototype.signum = bnSigNum;
  BigInteger.prototype.dMultiply = bnpDMultiply;
  BigInteger.prototype.dAddOffset = bnpDAddOffset;
  BigInteger.prototype.toRadix = bnpToRadix;
  BigInteger.prototype.intValue = bnIntValue;
  BigInteger.prototype.addTo = bnpAddTo;
  //======= end jsbn =======
  // Emscripten wrapper
  var Wrapper = {
    abs: function(l, h) {
      var x = new goog.math.Long(l, h);
      var ret;
      if (x.isNegative()) {
        ret = x.negate();
      } else {
        ret = x;
      }
      HEAP32[tempDoublePtr>>2] = ret.low_;
      HEAP32[tempDoublePtr+4>>2] = ret.high_;
    },
    ensureTemps: function() {
      if (Wrapper.ensuredTemps) return;
      Wrapper.ensuredTemps = true;
      Wrapper.two32 = new BigInteger();
      Wrapper.two32.fromString('4294967296', 10);
      Wrapper.two64 = new BigInteger();
      Wrapper.two64.fromString('18446744073709551616', 10);
      Wrapper.temp1 = new BigInteger();
      Wrapper.temp2 = new BigInteger();
    },
    lh2bignum: function(l, h) {
      var a = new BigInteger();
      a.fromString(h.toString(), 10);
      var b = new BigInteger();
      a.multiplyTo(Wrapper.two32, b);
      var c = new BigInteger();
      c.fromString(l.toString(), 10);
      var d = new BigInteger();
      c.addTo(b, d);
      return d;
    },
    stringify: function(l, h, unsigned) {
      var ret = new goog.math.Long(l, h).toString();
      if (unsigned && ret[0] == '-') {
        // unsign slowly using jsbn bignums
        Wrapper.ensureTemps();
        var bignum = new BigInteger();
        bignum.fromString(ret, 10);
        ret = new BigInteger();
        Wrapper.two64.addTo(bignum, ret);
        ret = ret.toString(10);
      }
      return ret;
    },
    fromString: function(str, base, min, max, unsigned) {
      Wrapper.ensureTemps();
      var bignum = new BigInteger();
      bignum.fromString(str, base);
      var bigmin = new BigInteger();
      bigmin.fromString(min, 10);
      var bigmax = new BigInteger();
      bigmax.fromString(max, 10);
      if (unsigned && bignum.compareTo(BigInteger.ZERO) < 0) {
        var temp = new BigInteger();
        bignum.addTo(Wrapper.two64, temp);
        bignum = temp;
      }
      var error = false;
      if (bignum.compareTo(bigmin) < 0) {
        bignum = bigmin;
        error = true;
      } else if (bignum.compareTo(bigmax) > 0) {
        bignum = bigmax;
        error = true;
      }
      var ret = goog.math.Long.fromString(bignum.toString()); // min-max checks should have clamped this to a range goog.math.Long can handle well
      HEAP32[tempDoublePtr>>2] = ret.low_;
      HEAP32[tempDoublePtr+4>>2] = ret.high_;
      if (error) throw 'range error';
    }
  };
  return Wrapper;
})();
//======= end closure i64 code =======
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore12_GLOBAL__N_124GetDatabaseNamesCallbackD2Ev","__ZN7WebCore22IDBObjectStoreMetadataC1ERKS0_","__ZN7WebCore12_GLOBAL__N_110DataLoaderD0Ev","__ZN9Inspector18InspectorAgentBase12discardAgentEv","__ZN7WebCore24ClearObjectStoreListenerD0Ev","__ZN9Inspector11TypeBuilder5ArrayINS0_9IndexedDB11ObjectStoreEED1Ev","__ZN7WebCore12_GLOBAL__N_1L25idbKeyFromInspectorObjectEPN9Inspector15InspectorObjectE","__ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore22IDBObjectStoreMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E16lookupForWritingINS_22IdentityHashTranslatorIS8_EExEENSt3__14pairIPS4_bEERKT0_","_memcpy","__ZN9Inspector11TypeBuilder5ArrayINS0_9IndexedDB16ObjectStoreIndexEED1Ev","__ZN9Inspector18InspectorAgentBaseD0Ev","__ZN7WebCore12_GLOBAL__N_124GetDatabaseNamesCallbackD0Ev","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RNS_10PassRefPtrIS5_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_","__ZN7WebCore12_GLOBAL__N_110DataLoader15requestCallbackEv","__ZN7WebCore24ClearObjectStoreListenereqERKNS_13EventListenerE","__ZN7WebCore23InspectorIndexedDBAgent29willDestroyFrontendAndBackendEv","__ZN3JSC6StrongINS_7UnknownEEC2ERKS2_","__ZN9Inspector11TypeBuilder5ArrayINS0_9IndexedDB9DataEntryEED0Ev","__ZN7WebCore12_GLOBAL__N_124GetDatabaseNamesCallback11handleEventEPNS_22ScriptExecutionContextEPNS_5EventE","__ZThn12_N7WebCore23InspectorIndexedDBAgentD0Ev","__ZN7WebCore12_GLOBAL__N_122ExecutableWithDatabase5startEPNS_10IDBFactoryEPNS_14SecurityOriginERKN3WTF6StringE","__ZN7WebCore12_GLOBAL__N_114DatabaseLoaderD2Ev","__ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore22IDBObjectStoreMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E3addINS_22IdentityHashTranslatorIS8_EERKxRKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIxS4_S6_S8_SE_SB_EEEEOT0_OT1_","__ZN7WebCore12_GLOBAL__N_120OpenDatabaseCallbackeqERKNS_13EventListenerE","__ZN7WebCore23InspectorIndexedDBAgent7disableEPN3WTF6StringE","__ZN7WebCore23InspectorIndexedDBAgentC2EPNS_19InstrumentingAgentsEPN9Inspector21InjectedScriptManagerEPNS_18InspectorPageAgentE","__ZN9Inspector11TypeBuilder9IndexedDB7KeyPath7BuilderILi0EE7setTypeENS2_4Type4EnumE","__ZN9Inspector11TypeBuilder5ArrayIN3WTF6StringEED0Ev","__ZN7WebCore16ClearObjectStoreD1Ev","__ZN7WebCore12_GLOBAL__N_118OpenCursorCallbackD2Ev","__ZN7WebCore18InspectorAgentBaseD0Ev","__ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E15deallocateTableEPS4_i","__ZN7WebCore12_GLOBAL__N_114DatabaseLoader15requestCallbackEv","__ZN7WebCore12_GLOBAL__N_118OpenCursorCallback11handleEventEPNS_22ScriptExecutionContextEPNS_5EventE","__ZN9Inspector18InspectorAgentBaseD1Ev","__ZN7WebCore12_GLOBAL__N_120OpenDatabaseCallbackD2Ev","__ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE","__ZN7WebCore12_GLOBAL__N_118OpenCursorCallbackeqERKNS_13EventListenerE","__ZN7WebCore23InspectorIndexedDBAgent27didCreateFrontendAndBackendEPN9Inspector24InspectorFrontendChannelEPNS1_26InspectorBackendDispatcherE","__ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore13EventListener15visitJSFunctionERN3JSC11SlotVisitorE","__ZNK7WebCore13EventListener18virtualisAttributeEv","__ZThn12_N7WebCore23InspectorIndexedDBAgent16clearObjectStoreEPN3WTF6StringERKS2_S5_S5_NS1_10PassRefPtrIN9Inspector42InspectorIndexedDBBackendDispatcherHandler24ClearObjectStoreCallbackEEE","__ZN7WebCore23InspectorIndexedDBAgentD2Ev","__ZThn12_N7WebCore23InspectorIndexedDBAgent11requestDataEPN3WTF6StringERKS2_S5_S5_S5_iiPKNS1_6RefPtrIN9Inspector15InspectorObjectEEENS1_10PassRefPtrINS7_42InspectorIndexedDBBackendDispatcherHandler19RequestDataCallbackEEE","__ZThn12_N7WebCore23InspectorIndexedDBAgentD1Ev","__ZThn12_N7WebCore23InspectorIndexedDBAgent7disableEPN3WTF6StringE","__ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEEaSERKS3_","__ZN7WebCore12_GLOBAL__N_110DataLoaderD2Ev","__ZN7WebCore23InspectorIndexedDBAgent16clearObjectStoreEPN3WTF6StringERKS2_S5_S5_NS1_10PassRefPtrIN9Inspector42InspectorIndexedDBBackendDispatcherHandler24ClearObjectStoreCallbackEEE","__ZN7WebCore23InspectorIndexedDBAgent11requestDataEPN3WTF6StringERKS2_S5_S5_S5_iiPKNS1_6RefPtrIN9Inspector15InspectorObjectEEENS1_10PassRefPtrINS7_42InspectorIndexedDBBackendDispatcherHandler19RequestDataCallbackEEE","__ZN7WebCore11IDBKeyRangeD2Ev","__ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore22IDBObjectStoreMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E6rehashEiPS4_","__ZN9Inspector11TypeBuilder5ArrayIN3WTF6StringEED1Ev","__ZN7WebCore22IDBObjectStoreMetadataaSERKS0_","_memset","__ZN7WebCore23InspectorIndexedDBAgent15requestDatabaseEPN3WTF6StringERKS2_S5_NS1_10PassRefPtrIN9Inspector42InspectorIndexedDBBackendDispatcherHandler23RequestDatabaseCallbackEEE","__ZN3WTF10RefCountedIN7WebCore14IDBObjectStoreEE5derefEv","__ZN7WebCore23InspectorIndexedDBAgentD0Ev","__ZN7WebCore16ClearObjectStore7executeEN3WTF10PassRefPtrINS_11IDBDatabaseEEE","__ZN10Deprecated12ScriptObjectD0Ev","__ZN7WebCore16ClearObjectStore15requestCallbackEv","__ZN7WebCore12_GLOBAL__N_110DataLoader7executeEN3WTF10PassRefPtrINS_11IDBDatabaseEEE","__ZN7WebCore22IDBObjectStoreMetadataD1Ev","__ZN9Inspector11TypeBuilder5ArrayINS0_9IndexedDB11ObjectStoreEED0Ev","__ZThn12_N7WebCore23InspectorIndexedDBAgent20requestDatabaseNamesEPN3WTF6StringERKS2_NS1_10PassRefPtrIN9Inspector42InspectorIndexedDBBackendDispatcherHandler28RequestDatabaseNamesCallbackEEE","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_","__ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZNK7WebCore13EventListener20wasCreatedFromMarkupEv","__ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E16lookupForWritingINS_22IdentityHashTranslatorIS8_EExEENSt3__14pairIPS4_bEERKT0_","__ZN7WebCore24ClearObjectStoreListener11handleEventEPNS_22ScriptExecutionContextEPNS_5EventE","__ZN7WebCore12_GLOBAL__N_114DatabaseLoaderD0Ev","__ZN7WebCore23InspectorIndexedDBAgent20requestDatabaseNamesEPN3WTF6StringERKS2_NS1_10PassRefPtrIN9Inspector42InspectorIndexedDBBackendDispatcherHandler28RequestDatabaseNamesCallbackEEE","__ZN7WebCore24ClearObjectStoreListenerD1Ev","__ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E3addINS_22IdentityHashTranslatorIS8_EERKxRKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIxS4_S6_S8_SE_SB_EEEEOT0_OT1_","__ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E8reinsertEOS4_","__ZN7WebCore16ClearObjectStoreD0Ev","__ZN7WebCore16IDBIndexMetadataaSERKS0_","__ZThn12_N7WebCore23InspectorIndexedDBAgent6enableEPN3WTF6StringE","__ZN7WebCore12_GLOBAL__N_114DatabaseLoader7executeEN3WTF10PassRefPtrINS_11IDBDatabaseEEE","__ZN7WebCore12_GLOBAL__N_1L21keyPathFromIDBKeyPathERKNS_10IDBKeyPathE","__ZN9Inspector11TypeBuilder5ArrayINS0_9IndexedDB16ObjectStoreIndexEED0Ev","__ZN7WebCore12_GLOBAL__N_120OpenDatabaseCallback11handleEventEPNS_22ScriptExecutionContextEPNS_5EventE","__ZN7WebCore18InspectorAgentBaseD1Ev","__ZN7WebCore11IDBKeyRange6createEN3WTF10PassRefPtrINS_6IDBKeyEEES4_NS0_14LowerBoundTypeENS0_14UpperBoundTypeE","__ZN7WebCore12_GLOBAL__N_118OpenCursorCallbackD0Ev","__ZN7WebCore12_GLOBAL__N_124GetDatabaseNamesCallbackeqERKNS_13EventListenerE","__ZN3WTF10RefCountedIN9Inspector26InspectorBackendDispatcher12CallbackBaseEE5derefEv","__ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_EaSERKSF_","__ZN7WebCoreL16assertIDBFactoryEPN3WTF6StringEPNS_8DocumentE","__ZN7WebCore12_GLOBAL__N_120OpenDatabaseCallbackD0Ev","__ZThn12_N7WebCore23InspectorIndexedDBAgent15requestDatabaseEPN3WTF6StringERKS2_S5_NS1_10PassRefPtrIN9Inspector42InspectorIndexedDBBackendDispatcherHandler23RequestDatabaseCallbackEEE","__ZN10Deprecated12ScriptObjectD1Ev","__ZN9Inspector11TypeBuilder5ArrayINS0_9IndexedDB9DataEntryEED1Ev","__ZN7WebCore23InspectorIndexedDBAgent6enableEPN3WTF6StringE","_i64Add","_i64Subtract","_bitshift64Shl","_bitshift64Lshr","_bitshift64Ashr","_llvm_ctlz_i32","_llvm_cttz_i32"]
