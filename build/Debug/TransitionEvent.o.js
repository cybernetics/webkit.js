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
H_BASE = parentModule["_malloc"](80 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 80;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore19TransitionEventInitC1Ev;
var __ZN7WebCore15TransitionEventC1Ev;
var __ZN7WebCore15TransitionEventC1ERKN3WTF12AtomicStringERKNS1_6StringEdS7_;
var __ZN7WebCore15TransitionEventC1ERKN3WTF12AtomicStringERKNS_19TransitionEventInitE;
var __ZN7WebCore15TransitionEventD1Ev;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_vi(index,a1) {
  try {
    Module["dynCall_vi"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiidi(index,a1,a2,a3,a4,a5) {
  try {
    Module["dynCall_viiidi"](index,a1,a2,a3,a4,a5);
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
  var __ZTVN7WebCore15TransitionEventE=(H_BASE+8)|0;
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
  var invoke_vi=env.invoke_vi;
  var invoke_viiidi=env.invoke_viiidi;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore15TransitionEventD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i1 + 64 >> 2] | 0;
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
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i5 = i1;
  __ZN7WebCore5EventD2Ev(i5);
  return;
 }
 i4 = i2 | 0;
 i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  i5 = i1;
  __ZN7WebCore5EventD2Ev(i5);
  return;
 } else {
  HEAP32[i4 >> 2] = i3;
  i5 = i1;
  __ZN7WebCore5EventD2Ev(i5);
  return;
 }
}
function __ZN7WebCore15TransitionEventD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i1 + 64 >> 2] | 0;
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
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i5 = i1;
  __ZN7WebCore5EventD2Ev(i5);
  return;
 }
 i4 = i2 | 0;
 i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  i5 = i1;
  __ZN7WebCore5EventD2Ev(i5);
  return;
 } else {
  HEAP32[i4 >> 2] = i3;
  i5 = i1;
  __ZN7WebCore5EventD2Ev(i5);
  return;
 }
}
function __ZN7WebCore15TransitionEventD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i1 + 64 >> 2] | 0;
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
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 __ZN7WebCore5EventD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1 | 0);
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_vi + 4;
}
function __ZN7WebCore15TransitionEventC2ERKN3WTF12AtomicStringERKNS_19TransitionEventInitE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 __ZN7WebCore5EventC2ERKN3WTF12AtomicStringERKNS_9EventInitE(i1, i2, i3 | 0);
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i1 + 52 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i4 = i2 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 HEAPF64[i1 + 56 >> 3] = +HEAPF64[i3 + 8 >> 3];
 i4 = HEAP32[i3 + 16 >> 2] | 0;
 HEAP32[i1 + 64 >> 2] = i4;
 if ((i4 | 0) == 0) {
  return;
 }
 i1 = i4 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 return;
}
function __ZN7WebCore15TransitionEventC1ERKN3WTF12AtomicStringERKNS_19TransitionEventInitE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 __ZN7WebCore5EventC2ERKN3WTF12AtomicStringERKNS_9EventInitE(i1, i2, i3 | 0);
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i1 + 52 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i4 = i2 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 HEAPF64[i1 + 56 >> 3] = +HEAPF64[i3 + 8 >> 3];
 i4 = HEAP32[i3 + 16 >> 2] | 0;
 HEAP32[i1 + 64 >> 2] = i4;
 if ((i4 | 0) == 0) {
  return;
 }
 i1 = i4 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 return;
}
function __ZN7WebCore15TransitionEventC2ERKN3WTF12AtomicStringERKNS1_6StringEdS7_(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 __ZN7WebCore5EventC2ERKN3WTF12AtomicStringEbb(i1, i2, 1, 1);
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 + 52 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i3 = i2 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 HEAPF64[i1 + 56 >> 3] = d4;
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i1 + 64 >> 2] = i3;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 return;
}
function __ZN7WebCore15TransitionEventC1ERKN3WTF12AtomicStringERKNS1_6StringEdS7_(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 __ZN7WebCore5EventC2ERKN3WTF12AtomicStringEbb(i1, i2, 1, 1);
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 + 52 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i3 = i2 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 HEAPF64[i1 + 56 >> 3] = d4;
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i1 + 64 >> 2] = i3;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
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
function viii___ZNK7WebCore5Event8cloneForEPNS_17HTMLIFrameElementE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore5Event8cloneForEPNS_17HTMLIFrameElementE(i1 | 0, i2 | 0, i3 | 0);
}
function dynCall_viiidi(i1, i2, i3, i4, d5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiidi[i1 & 3](i2 | 0, i3 | 0, i4 | 0, +d5, i6 | 0);
}
function __ZN7WebCore15TransitionEventC2Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore5EventC2Ev(i1);
 HEAP32[i1 >> 2] = H_BASE + 16;
 _memset(i1 + 52 | 0, 0, 16) | 0;
 return;
}
function __ZN7WebCore15TransitionEventC1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore5EventC2Ev(i1);
 HEAP32[i1 >> 2] = H_BASE + 16;
 _memset(i1 + 52 | 0, 0, 16) | 0;
 return;
}
function ii___ZNK7WebCore5Event25isBeforeTextInsertedEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event25isBeforeTextInsertedEventEv(i1 | 0) | 0;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 7](i2 | 0, i3 | 0, i4 | 0);
}
function ii___ZNK7WebCore5Event19isBeforeUnloadEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event19isBeforeUnloadEventEv(i1 | 0) | 0;
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZN7WebCore19TransitionEventInitC2Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9EventInitC2Ev(i1 | 0);
 _memset(i1 + 4 | 0, 0, 16) | 0;
 return;
}
function __ZN7WebCore19TransitionEventInitC1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9EventInitC2Ev(i1 | 0);
 _memset(i1 + 4 | 0, 0, 16) | 0;
 return;
}
function ii___ZNK7WebCore5Event16isClipboardEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event16isClipboardEventEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore5Event15isKeyboardEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event15isKeyboardEventEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore5Event12isTouchEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event12isTouchEventEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore5Event12isMouseEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event12isMouseEventEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore5Event12isFocusEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event12isFocusEventEv(i1 | 0) | 0;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function ii___ZNK7WebCore5Event11isDragEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event11isDragEventEv(i1 | 0) | 0;
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
function ii___ZNK7WebCore5Event9isUIEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event9isUIEventEv(i1 | 0) | 0;
}
function vi___ZN7WebCore5Event14receivedTargetEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore5Event14receivedTargetEv(i1 | 0);
}
function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = i1;
  threwValue = i2;
 }
}
function b1(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 abort(1);
}
function __ZNK7WebCore15TransitionEvent11elapsedTimeEv(i1) {
 i1 = i1 | 0;
 return +(+HEAPF64[i1 + 56 >> 3]);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 31](i2 | 0) | 0;
}
function __ZNK7WebCore15TransitionEvent13pseudoElementEv(i1) {
 i1 = i1 | 0;
 return i1 + 64 | 0;
}
function __ZNK7WebCore15TransitionEvent12propertyNameEv(i1) {
 i1 = i1 | 0;
 return i1 + 52 | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
}
function __ZNK7WebCore15TransitionEvent14eventInterfaceEv(i1) {
 i1 = i1 | 0;
 return 19;
}
function b3(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(3);
}
function __ZNK7WebCore5Event13relatedTargetEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b5(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(5);
 return 0;
}
function __ZNK7WebCore5Event9clipboardEv(i1) {
 i1 = i1 | 0;
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
function b2(i1) {
 i1 = i1 | 0;
 abort(2);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b0(i1) {
 i1 = i1 | 0;
 abort(0);
}
function b4() {
 abort(4);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore19TransitionEventInitC2Ev,b0,vi___ZN7WebCore5Event14receivedTargetEv__wrapper,b0,__ZN7WebCore15TransitionEventC2Ev,b0,__ZN7WebCore15TransitionEventD0Ev,b0,__ZN7WebCore15TransitionEventD2Ev,b0,b0,b0,b0,b0];
  var FUNCTION_TABLE_viiidi = [b1,b1,__ZN7WebCore15TransitionEventC2ERKN3WTF12AtomicStringERKNS1_6StringEdS7_,b1];
  var FUNCTION_TABLE_ii = [b2,b2,ii___ZNK7WebCore5Event15isKeyboardEventEv__wrapper,b2,ii___ZNK7WebCore5Event16isClipboardEventEv__wrapper,b2,ii___ZNK7WebCore5Event12isFocusEventEv__wrapper,b2,ii___ZNK7WebCore5Event19isBeforeUnloadEventEv__wrapper,b2,__ZNK7WebCore5Event9clipboardEv,b2,ii___ZNK7WebCore5Event12isTouchEventEv__wrapper,b2,__ZNK7WebCore5Event13relatedTargetEv,b2,ii___ZNK7WebCore5Event25isBeforeTextInsertedEventEv__wrapper,b2,ii___ZNK7WebCore5Event12isMouseEventEv__wrapper,b2,ii___ZNK7WebCore5Event11isDragEventEv__wrapper,b2,ii___ZNK7WebCore5Event9isUIEventEv__wrapper,b2,__ZNK7WebCore15TransitionEvent14eventInterfaceEv,b2,b2,b2,b2
  ,b2,b2,b2];
  var FUNCTION_TABLE_viii = [b3,b3,viii___ZNK7WebCore5Event8cloneForEPNS_17HTMLIFrameElementE__wrapper,b3,__ZN7WebCore15TransitionEventC2ERKN3WTF12AtomicStringERKNS_19TransitionEventInitE,b3,b3,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_viiidi: dynCall_viiidi, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_viiidi": invoke_viiidi, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_viiidi = Module["dynCall_viiidi"] = asm["dynCall_viiidi"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore15TransitionEventC2ERKN3WTF12AtomicStringERKNS1_6StringEdS7_","__ZNK7WebCore5Event13relatedTargetEv","__ZN7WebCore19TransitionEventInitC2Ev","__ZNK7WebCore5Event9clipboardEv","__ZN7WebCore15TransitionEventC2ERKN3WTF12AtomicStringERKNS_19TransitionEventInitE","__ZNK7WebCore15TransitionEvent11elapsedTimeEv","_memset","__ZNK7WebCore15TransitionEvent13pseudoElementEv","_memcpy","_strlen","__ZN7WebCore15TransitionEventD2Ev","__ZN7WebCore15TransitionEventD0Ev","__ZNK7WebCore15TransitionEvent12propertyNameEv","__ZN7WebCore15TransitionEventC2Ev","__ZNK7WebCore15TransitionEvent14eventInterfaceEv"]
