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
H_BASE = parentModule["_malloc"](480 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 480;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore18IDBDatabaseBackendC1ERKN3WTF6StringES4_PNS_26IDBFactoryBackendInterfaceERNS_19IDBServerConnectionE;
var __ZN7WebCore18IDBDatabaseBackendD1Ev;
/* memory initializer */ allocate([73,110,116,101,114,110,97,108,32,101,114,114,111,114,32,100,101,108,101,116,105,110,103,32,100,97,116,97,98,97,115,101,46,0,0,0,0,0,0,0,67,111,110,110,101,99,116,105,111,110,32,105,115,32,99,108,111,115,105,110,103,46,0,0,84,104,101,32,99,111,110,110,101,99,116,105,111,110,32,119,97,115,32,99,108,111,115,101,100,46,0,0,0,0,0,0,84,104,101,32,114,101,113,117,101,115,116,101,100,32,118,101,114,115,105,111,110,32,40,37,108,108,117,41,32,105,115,32,108,101,115,115,32,116,104,97,110,32,116,104,101,32,101,120,105,115,116,105,110,103,32,118,101,114,115,105,111,110,32,40,37,108,108,117,41,46,0,0,73,110,116,101,114,110,97,108,32,101,114,114,111,114,32,111,112,101,110,105,110,103,32,100,97,116,97,98,97,115,101,32,119,105,116,104,32,118,101,114,115,105,111,110,32,37,108,108,117,0,0,0,0,0,0,0,73,110,116,101,114,110,97,108,32,101,114,114,111,114,32,111,112,101,110,105,110,103,32,100,97,116,97,98,97,115,101,32,119,105,116,104,32,110,111,32,118,101,114,115,105,111,110,32,115,112,101,99,105,102,105,101,100,46,0,0,0,0,0,0,86,101,114,115,105,111,110,32,99,104,97,110,103,101,32,116,114,97,110,115,97,99,116,105,111,110,32,119,97,115,32,97,98,111,114,116,101,100,32,105,110,32,117,112,103,114,97,100,101,110,101,101,100,101,100,32,101,118,101,110,116,32,104,97,110,100,108,101,114,46,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_viiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12) {
  try {
    Module["dynCall_viiiiiiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12);
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
  var invoke_viiiii=env.invoke_viiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_viiiiiiiiiiii=env.invoke_viiiiiiiiiiii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore18IDBDatabaseBackend5closeEN3WTF10PassRefPtrINS_20IDBDatabaseCallbacksEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 24 | 0;
 i7 = i3 + 32 | 0;
 i8 = i3 + 40 | 0;
 i9 = i3 + 48 | 0;
 i10 = i3 + 56 | 0;
 i11 = i3 + 80 | 0;
 i12 = i3 + 88 | 0;
 i13 = i7 | 0;
 i14 = i2 | 0;
 i2 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = 0;
 HEAP32[i13 >> 2] = i2;
 i2 = i1 + 168 | 0;
 __ZN3WTF11ListHashSetINS_6RefPtrIN7WebCore20IDBDatabaseCallbacksEEELj256ENS_7PtrHashIS4_EEE4findERKS4_(i6, i2, i7);
 i7 = HEAP32[i6 + 4 >> 2] | 0;
 L1 : do {
  if ((i7 | 0) != 0) {
   HEAP32[i5 >> 2] = i7;
   __ZN3WTF9HashTableIPNS_15ListHashSetNodeINS_6RefPtrIN7WebCore20IDBDatabaseCallbacksEEELj256EEES7_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS5_EEEENS_10HashTraitsIS7_EESE_E6removeERKS7_(i2 | 0, i5);
   i6 = i7 + 4 | 0;
   i14 = HEAP32[i6 >> 2] | 0;
   i15 = i7 + 8 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i14 | 0) == 0) {
    HEAP32[i1 + 188 >> 2] = i16;
   } else {
    HEAP32[i14 + 8 >> 2] = i16;
   }
   i16 = HEAP32[i15 >> 2] | 0;
   i14 = HEAP32[i6 >> 2] | 0;
   if ((i16 | 0) == 0) {
    HEAP32[i1 + 192 >> 2] = i14;
   } else {
    HEAP32[i16 + 4 >> 2] = i14;
   }
   i14 = HEAP32[i1 + 196 >> 2] | 0;
   i16 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i16 | 0) != 0) {
     i6 = i16 + 4 | 0;
     i17 = i6 | 0;
     i18 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
     if ((i18 | 0) != 0) {
      HEAP32[i17 >> 2] = i18;
      break;
     }
     i18 = i6 - 4 | 0;
     if ((i18 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 31](i18);
    }
   } while (0);
   i16 = i14 + 8 | 0;
   do {
    if (i16 >>> 0 <= i7 >>> 0) {
     if ((i16 + 3072 | 0) >>> 0 <= i7 >>> 0) {
      break;
     }
     i18 = i14 | 0;
     HEAP32[i15 >> 2] = HEAP32[i18 >> 2];
     HEAP32[i18 >> 2] = i7;
     break L1;
    }
   } while (0);
   __ZN3WTF8fastFreeEPv(i7);
  }
 } while (0);
 i7 = i1 + 124 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   if ((HEAP32[i13 >> 2] | 0) != (HEAP32[i5 + 4 >> 2] | 0)) {
    break;
   }
   i2 = HEAP32[i5 >> 2] | 0;
   i15 = HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] | 0;
   __ZN3WTF6StringC1EPKc(i9, H_BASE + 72 | 0);
   i14 = __ZN3WTF10fastMallocEj(12) | 0;
   HEAP32[i14 >> 2] = 1;
   HEAP16[i14 + 4 >> 1] = 1210;
   i16 = i9 | 0;
   i18 = HEAP32[i16 >> 2] | 0;
   HEAP32[i14 + 8 >> 2] = i18;
   if ((i18 | 0) != 0) {
    i6 = i18 | 0;
    HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
   }
   i6 = i8 | 0;
   HEAP32[i6 >> 2] = i14;
   FUNCTION_TABLE_vii[i15 & 15](i2, i8);
   i2 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i2 | 0) != 0) {
     i6 = i2 | 0;
     i15 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
     if ((i15 | 0) != 0) {
      HEAP32[i6 >> 2] = i15;
      break;
     }
     i15 = HEAP32[i2 + 8 >> 2] | 0;
     do {
      if ((i15 | 0) != 0) {
       i6 = i15 | 0;
       i14 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
       if ((i14 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i15);
        break;
       } else {
        HEAP32[i6 >> 2] = i14;
        break;
       }
      }
     } while (0);
     __ZN3WTF8fastFreeEPv(i2);
    }
   } while (0);
   i2 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i2 | 0) != 0) {
     i15 = i2 | 0;
     i14 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i2);
      break;
     } else {
      HEAP32[i15 >> 2] = i14;
      break;
     }
    }
   } while (0);
   i2 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = 0;
   if ((i2 | 0) == 0) {
    break;
   }
   i16 = HEAP32[i2 + 4 >> 2] | 0;
   do {
    if ((i16 | 0) != 0) {
     i14 = i16 + 4 | 0;
     i15 = i14 | 0;
     i6 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
     if ((i6 | 0) != 0) {
      HEAP32[i15 >> 2] = i6;
      break;
     }
     i6 = i14 - 4 | 0;
     if ((i6 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
    }
   } while (0);
   i16 = HEAP32[i2 >> 2] | 0;
   do {
    if ((i16 | 0) != 0) {
     i6 = i16 + 4 | 0;
     i14 = i6 | 0;
     i15 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
     if ((i15 | 0) != 0) {
      HEAP32[i14 >> 2] = i15;
      break;
     }
     i15 = i6 - 4 | 0;
     if ((i15 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 31](i15);
    }
   } while (0);
   __ZdlPv(i2);
  }
 } while (0);
 i7 = i1 + 180 | 0;
 do {
  if ((HEAP32[i7 >> 2] | 0) >>> 0 <= 1 >>> 0) {
   i8 = i1 + 200 | 0;
   if ((HEAP8[i8] & 1) != 0) {
    break;
   }
   HEAP8[i8] = 1;
   __ZN7WebCore18IDBDatabaseBackend19processPendingCallsEv(i1);
   do {
    if ((HEAP32[i7 >> 2] | 0) == 0) {
     i9 = HEAP32[i1 + 104 >> 2] | 0;
     i5 = HEAP32[i1 + 108 >> 2] | 0;
     if (i9 >>> 0 > i5 >>> 0) {
      i19 = (HEAP32[i1 + 116 >> 2] | 0) + i5 | 0;
     } else {
      i19 = i5;
     }
     if ((i19 | 0) != (i9 | 0)) {
      break;
     }
     i9 = HEAP32[i1 + 128 >> 2] | 0;
     i5 = HEAP32[i1 + 132 >> 2] | 0;
     if (i9 >>> 0 > i5 >>> 0) {
      i20 = (HEAP32[i1 + 140 >> 2] | 0) + i5 | 0;
     } else {
      i20 = i5;
     }
     if ((i20 | 0) != (i9 | 0)) {
      break;
     }
     i9 = i10 | 0;
     _memset(i10 | 0, 0, 20) | 0;
     i5 = HEAP32[i1 + 84 >> 2] | 0;
     i16 = HEAP32[i1 + 88 >> 2] | 0;
     i15 = i5 + (i16 << 4) | 0;
     L76 : do {
      if ((HEAP32[i1 + 96 >> 2] | 0) != 0) {
       L78 : do {
        if ((i16 | 0) == 0) {
         i21 = i5;
        } else {
         i6 = i5;
         while (1) {
          i14 = i6 | 0;
          i18 = HEAP32[i14 >> 2] | 0;
          i17 = HEAP32[i14 + 4 >> 2] | 0;
          if (!((i18 | 0) == (-1 | 0) & (i17 | 0) == (-1 | 0) | (i18 | 0) == 0 & (i17 | 0) == 0)) {
           i21 = i6;
           break L78;
          }
          i6 = i6 + 16 | 0;
          if ((i6 | 0) == (i15 | 0)) {
           break L76;
          }
         }
        }
       } while (0);
       if ((i21 | 0) == (i15 | 0)) {
        break;
       } else {
        i22 = i21;
       }
       while (1) {
        __ZN3WTF9HashTableIxNS_12KeyValuePairIxPN7WebCore21IDBTransactionBackendEEENS_24KeyValuePairKeyExtractorIS5_EENS_7IntHashIyEENS_7HashMapIxS4_S9_NS_10HashTraitsIxEENSB_IS4_EEE18KeyValuePairTraitsESC_E3addINS_22IdentityHashTranslatorIS9_EERKxRKS5_EENS_18HashTableAddResultINS_17HashTableIteratorIxS5_S7_S9_SF_SC_EEEEOT0_OT1_(i4, i9, i22 | 0, i22);
        i6 = i22 + 16 | 0;
        if ((i6 | 0) == (i15 | 0)) {
         break L76;
        } else {
         i23 = i6;
        }
        while (1) {
         i6 = i23 | 0;
         i17 = HEAP32[i6 >> 2] | 0;
         i18 = HEAP32[i6 + 4 >> 2] | 0;
         if (!((i17 | 0) == (-1 | 0) & (i18 | 0) == (-1 | 0) | (i17 | 0) == 0 & (i18 | 0) == 0)) {
          break;
         }
         i18 = i23 + 16 | 0;
         if ((i18 | 0) == (i15 | 0)) {
          break L76;
         } else {
          i23 = i18;
         }
        }
        if ((i23 | 0) == (i15 | 0)) {
         break;
        } else {
         i22 = i23;
        }
       }
      }
     } while (0);
     __ZN3WTF6StringC1EPKc(i11, H_BASE + 48 | 0);
     i15 = __ZN3WTF10fastMallocEj(12) | 0;
     i9 = i15;
     i5 = i15;
     HEAP32[i5 >> 2] = 1;
     HEAP16[i15 + 4 >> 1] = 1201;
     i16 = i15 + 8 | 0;
     i18 = i11 | 0;
     i17 = HEAP32[i18 >> 2] | 0;
     HEAP32[i16 >> 2] = i17;
     if ((i17 | 0) != 0) {
      i6 = i17 | 0;
      HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
     }
     i6 = HEAP32[i18 >> 2] | 0;
     do {
      if ((i6 | 0) != 0) {
       i18 = i6 | 0;
       i17 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
       if ((i17 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i6);
        break;
       } else {
        HEAP32[i18 >> 2] = i17;
        break;
       }
      }
     } while (0);
     i6 = i10 | 0;
     i17 = HEAP32[i6 >> 2] | 0;
     i18 = HEAP32[i10 + 4 >> 2] | 0;
     i14 = i17 + (i18 << 4) | 0;
     L99 : do {
      if ((HEAP32[i10 + 12 >> 2] | 0) != 0) {
       L101 : do {
        if ((i18 | 0) == 0) {
         i24 = i17;
        } else {
         i25 = i17;
         while (1) {
          i26 = i25 | 0;
          i27 = HEAP32[i26 >> 2] | 0;
          i28 = HEAP32[i26 + 4 >> 2] | 0;
          if (!((i27 | 0) == (-1 | 0) & (i28 | 0) == (-1 | 0) | (i27 | 0) == 0 & (i28 | 0) == 0)) {
           i24 = i25;
           break L101;
          }
          i28 = i25 + 16 | 0;
          if ((i28 | 0) == (i14 | 0)) {
           i24 = i14;
           break;
          } else {
           i25 = i28;
          }
         }
        }
       } while (0);
       if ((i24 | 0) == (i14 | 0)) {
        break;
       }
       i25 = i12 | 0;
       if ((i15 | 0) == 0) {
        i28 = i24;
        while (1) {
         i27 = HEAP32[i28 + 8 >> 2] | 0;
         HEAP32[i25 >> 2] = i9;
         __ZN7WebCore21IDBTransactionBackend5abortEN3WTF10PassRefPtrINS_16IDBDatabaseErrorEEE(i27, i12);
         i27 = HEAP32[i25 >> 2] | 0;
         do {
          if ((i27 | 0) != 0) {
           i26 = i27 | 0;
           i29 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
           if ((i29 | 0) != 0) {
            HEAP32[i26 >> 2] = i29;
            break;
           }
           i29 = HEAP32[i27 + 8 >> 2] | 0;
           do {
            if ((i29 | 0) != 0) {
             i26 = i29 | 0;
             i30 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
             if ((i30 | 0) == 0) {
              __ZN3WTF10StringImpl7destroyEPS0_(i29);
              break;
             } else {
              HEAP32[i26 >> 2] = i30;
              break;
             }
            }
           } while (0);
           __ZN3WTF8fastFreeEPv(i27);
          }
         } while (0);
         i27 = i28 + 16 | 0;
         if ((i27 | 0) == (i14 | 0)) {
          break L99;
         } else {
          i31 = i27;
         }
         while (1) {
          i27 = i31 | 0;
          i29 = HEAP32[i27 >> 2] | 0;
          i30 = HEAP32[i27 + 4 >> 2] | 0;
          if (!((i29 | 0) == (-1 | 0) & (i30 | 0) == (-1 | 0) | (i29 | 0) == 0 & (i30 | 0) == 0)) {
           break;
          }
          i30 = i31 + 16 | 0;
          if ((i30 | 0) == (i14 | 0)) {
           break L99;
          } else {
           i31 = i30;
          }
         }
         if ((i31 | 0) == (i14 | 0)) {
          break;
         } else {
          i28 = i31;
         }
        }
       } else {
        i28 = i24;
        while (1) {
         i30 = HEAP32[i28 + 8 >> 2] | 0;
         HEAP32[i25 >> 2] = i9;
         HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
         __ZN7WebCore21IDBTransactionBackend5abortEN3WTF10PassRefPtrINS_16IDBDatabaseErrorEEE(i30, i12);
         i30 = HEAP32[i25 >> 2] | 0;
         do {
          if ((i30 | 0) != 0) {
           i29 = i30 | 0;
           i27 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
           if ((i27 | 0) != 0) {
            HEAP32[i29 >> 2] = i27;
            break;
           }
           i27 = HEAP32[i30 + 8 >> 2] | 0;
           do {
            if ((i27 | 0) != 0) {
             i29 = i27 | 0;
             i26 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
             if ((i26 | 0) == 0) {
              __ZN3WTF10StringImpl7destroyEPS0_(i27);
              break;
             } else {
              HEAP32[i29 >> 2] = i26;
              break;
             }
            }
           } while (0);
           __ZN3WTF8fastFreeEPv(i30);
          }
         } while (0);
         i30 = i28 + 16 | 0;
         if ((i30 | 0) == (i14 | 0)) {
          break L99;
         } else {
          i32 = i30;
         }
         while (1) {
          i30 = i32 | 0;
          i27 = HEAP32[i30 >> 2] | 0;
          i26 = HEAP32[i30 + 4 >> 2] | 0;
          if (!((i27 | 0) == (-1 | 0) & (i26 | 0) == (-1 | 0) | (i27 | 0) == 0 & (i26 | 0) == 0)) {
           break;
          }
          i26 = i32 + 16 | 0;
          if ((i26 | 0) == (i14 | 0)) {
           break L99;
          } else {
           i32 = i26;
          }
         }
         if ((i32 | 0) == (i14 | 0)) {
          break;
         } else {
          i28 = i32;
         }
        }
       }
      }
     } while (0);
     i14 = HEAP32[i1 + 72 >> 2] | 0;
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 20 >> 2] & 31](i14);
     i14 = HEAP32[i1 + 68 >> 2] | 0;
     if ((i14 | 0) != 0) {
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i14 >> 2] | 0) + 20 >> 2] & 15](i14, i1 + 64 | 0);
     }
     do {
      if ((i15 | 0) != 0) {
       i14 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
       if ((i14 | 0) != 0) {
        HEAP32[i5 >> 2] = i14;
        break;
       }
       i14 = HEAP32[i16 >> 2] | 0;
       do {
        if ((i14 | 0) != 0) {
         i9 = i14 | 0;
         i17 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
         if ((i17 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i14);
          break;
         } else {
          HEAP32[i9 >> 2] = i17;
          break;
         }
        }
       } while (0);
       __ZN3WTF8fastFreeEPv(i15);
      }
     } while (0);
     i15 = HEAP32[i6 >> 2] | 0;
     if ((i15 | 0) == 0) {
      break;
     }
     __ZN3WTF8fastFreeEPv(i15);
    }
   } while (0);
   HEAP8[i8] = 0;
  }
 } while (0);
 i1 = HEAP32[i13 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i13 = i1 + 4 | 0;
 i1 = i13 | 0;
 i32 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i32 | 0) != 0) {
  HEAP32[i1 >> 2] = i32;
  STACKTOP = i3;
  return;
 }
 i32 = i13 - 4 | 0;
 if ((i32 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i32 >> 2] | 0) + 4 >> 2] & 31](i32);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore18IDBDatabaseBackend22openConnectionInternalEN3WTF10PassRefPtrINS_12IDBCallbacksEEENS2_INS_20IDBDatabaseCallbacksEEExy(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 144 | 0;
 i9 = i8 | 0;
 i10 = i8 + 16 | 0;
 i11 = i8 + 24 | 0;
 i12 = i8 + 40 | 0;
 i13 = i8 + 48 | 0;
 i14 = i8 + 64 | 0;
 i15 = i8 + 72 | 0;
 i16 = i8 + 80 | 0;
 i17 = i8 + 88 | 0;
 i18 = i8 + 96 | 0;
 i19 = i8 + 104 | 0;
 i20 = i8 + 112 | 0;
 i21 = i8 + 120 | 0;
 i22 = i8 + 128 | 0;
 i23 = i8 + 136 | 0;
 i24 = i2 | 0;
 i2 = HEAP32[i24 >> 2] | 0;
 HEAP32[i24 >> 2] = 0;
 i24 = i15 | 0;
 i25 = i3 | 0;
 i3 = HEAP32[i25 >> 2] | 0;
 HEAP32[i25 >> 2] = 0;
 HEAP32[i24 >> 2] = i3;
 i25 = i1 + 24 | 0;
 i26 = -1;
 i27 = 2147483647;
 do {
  if ((i6 | 0) == 0 & (i7 | 0) == 0) {
   HEAP32[i14 >> 2] = HEAP32[i1 + 196 >> 2];
   __ZN3WTF9HashTableIPNS_15ListHashSetNodeINS_6RefPtrIN7WebCore20IDBDatabaseCallbacksEEELj256EEES7_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS5_EEEENS_10HashTraitsIS7_EESE_E3addINS_21ListHashSetTranslatorISB_EERKS5_PNS_24ListHashSetNodeAllocatorIS5_Lj256EEEEENS_18HashTableAddResultINS_17HashTableIteratorIS7_S7_S8_SC_SE_SE_EEEEOT0_OT1_(i13, i1 + 168 | 0, i15, i14);
   if ((HEAP8[i13 + 8 | 0] & 1) != 0) {
    i28 = HEAP32[HEAP32[i13 >> 2] >> 2] | 0;
    i29 = i1 + 192 | 0;
    HEAP32[i28 + 4 >> 2] = HEAP32[i29 >> 2];
    HEAP32[i28 + 8 >> 2] = 0;
    i30 = HEAP32[i29 >> 2] | 0;
    if ((i30 | 0) == 0) {
     HEAP32[i1 + 188 >> 2] = i28;
    } else {
     HEAP32[i30 + 8 >> 2] = i28;
    }
    HEAP32[i29 >> 2] = i28;
   }
   i28 = HEAP32[(HEAP32[i2 >> 2] | 0) + 56 >> 2] | 0;
   i29 = i16 | 0;
   HEAP32[i29 >> 2] = i1;
   if ((i1 | 0) != 0) {
    i30 = i1 | 0;
    HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 1;
   }
   FUNCTION_TABLE_viii[i28 & 3](i2, i16, i1 + 8 | 0);
   i28 = HEAP32[i29 >> 2] | 0;
   if ((i28 | 0) == 0) {
    break;
   }
   i29 = i28 | 0;
   i30 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
   if ((i30 | 0) == 0) {
    __ZN7WebCore18IDBDatabaseBackendD2Ev(i28);
    __ZN3WTF8fastFreeEPv(i28);
    break;
   } else {
    HEAP32[i29 >> 2] = i30;
    break;
   }
  } else if ((i6 | 0) == (i26 | 0) & (i7 | 0) == (i27 | 0)) {
   if ((HEAP32[i25 >> 2] | 0) == (-1 | 0) & (HEAP32[i25 + 4 >> 2] | 0) == 2147483647) {
    i31 = 0;
    i32 = 1;
    i33 = 2147483647;
    i34 = -1;
    i35 = 48;
    break;
   }
   i30 = i17 | 0;
   HEAP32[i30 >> 2] = i3;
   if ((i3 | 0) != 0) {
    i29 = i3 + 4 | 0;
    HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
   }
   HEAP32[i12 >> 2] = HEAP32[i1 + 196 >> 2];
   __ZN3WTF9HashTableIPNS_15ListHashSetNodeINS_6RefPtrIN7WebCore20IDBDatabaseCallbacksEEELj256EEES7_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS5_EEEENS_10HashTraitsIS7_EESE_E3addINS_21ListHashSetTranslatorISB_EES5_PNS_24ListHashSetNodeAllocatorIS5_Lj256EEEEENS_18HashTableAddResultINS_17HashTableIteratorIS7_S7_S8_SC_SE_SE_EEEEOT0_OT1_(i11, i1 + 168 | 0, i17, i12);
   if ((HEAP8[i11 + 8 | 0] & 1) != 0) {
    i29 = HEAP32[HEAP32[i11 >> 2] >> 2] | 0;
    i28 = i1 + 192 | 0;
    HEAP32[i29 + 4 >> 2] = HEAP32[i28 >> 2];
    HEAP32[i29 + 8 >> 2] = 0;
    i36 = HEAP32[i28 >> 2] | 0;
    if ((i36 | 0) == 0) {
     HEAP32[i1 + 188 >> 2] = i29;
    } else {
     HEAP32[i36 + 8 >> 2] = i29;
    }
    HEAP32[i28 >> 2] = i29;
   }
   i29 = HEAP32[i30 >> 2] | 0;
   do {
    if ((i29 | 0) != 0) {
     i30 = i29 + 4 | 0;
     i28 = i30 | 0;
     i36 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
     if ((i36 | 0) != 0) {
      HEAP32[i28 >> 2] = i36;
      break;
     }
     i36 = i30 - 4 | 0;
     if ((i36 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i36 >> 2] | 0) + 4 >> 2] & 31](i36);
    }
   } while (0);
   i29 = HEAP32[(HEAP32[i2 >> 2] | 0) + 56 >> 2] | 0;
   i36 = i18 | 0;
   HEAP32[i36 >> 2] = i1;
   if ((i1 | 0) != 0) {
    i30 = i1 | 0;
    HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 1;
   }
   FUNCTION_TABLE_viii[i29 & 3](i2, i18, i1 + 8 | 0);
   i29 = HEAP32[i36 >> 2] | 0;
   if ((i29 | 0) == 0) {
    break;
   }
   i36 = i29 | 0;
   i30 = (HEAP32[i36 >> 2] | 0) - 1 | 0;
   if ((i30 | 0) == 0) {
    __ZN7WebCore18IDBDatabaseBackendD2Ev(i29);
    __ZN3WTF8fastFreeEPv(i29);
    break;
   } else {
    HEAP32[i36 >> 2] = i30;
    break;
   }
  } else {
   i30 = HEAP32[i25 >> 2] | 0;
   i36 = HEAP32[i25 + 4 >> 2] | 0;
   if (!(i36 >>> 0 < i7 >>> 0 | i36 >>> 0 == i7 >>> 0 & i30 >>> 0 < i6 >>> 0)) {
    if (i36 >>> 0 > i7 >>> 0 | i36 >>> 0 == i7 >>> 0 & i30 >>> 0 > i6 >>> 0) {
     i31 = i7;
     i32 = i6;
     i33 = i36;
     i34 = i30;
     i35 = 48;
     break;
    }
    HEAP32[i10 >> 2] = HEAP32[i1 + 196 >> 2];
    __ZN3WTF9HashTableIPNS_15ListHashSetNodeINS_6RefPtrIN7WebCore20IDBDatabaseCallbacksEEELj256EEES7_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS5_EEEENS_10HashTraitsIS7_EESE_E3addINS_21ListHashSetTranslatorISB_EERKS5_PNS_24ListHashSetNodeAllocatorIS5_Lj256EEEEENS_18HashTableAddResultINS_17HashTableIteratorIS7_S7_S8_SC_SE_SE_EEEEOT0_OT1_(i9, i1 + 168 | 0, i15, i10);
    if ((HEAP8[i9 + 8 | 0] & 1) != 0) {
     i30 = HEAP32[HEAP32[i9 >> 2] >> 2] | 0;
     i36 = i1 + 192 | 0;
     HEAP32[i30 + 4 >> 2] = HEAP32[i36 >> 2];
     HEAP32[i30 + 8 >> 2] = 0;
     i29 = HEAP32[i36 >> 2] | 0;
     if ((i29 | 0) == 0) {
      HEAP32[i1 + 188 >> 2] = i30;
     } else {
      HEAP32[i29 + 8 >> 2] = i30;
     }
     HEAP32[i36 >> 2] = i30;
    }
    i30 = HEAP32[(HEAP32[i2 >> 2] | 0) + 56 >> 2] | 0;
    i36 = i23 | 0;
    HEAP32[i36 >> 2] = i1;
    if ((i1 | 0) != 0) {
     i29 = i1 | 0;
     HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
    }
    FUNCTION_TABLE_viii[i30 & 3](i2, i23, i1 + 8 | 0);
    i30 = HEAP32[i36 >> 2] | 0;
    if ((i30 | 0) == 0) {
     break;
    }
    i36 = i30 | 0;
    i29 = (HEAP32[i36 >> 2] | 0) - 1 | 0;
    if ((i29 | 0) == 0) {
     __ZN7WebCore18IDBDatabaseBackendD2Ev(i30);
     __ZN3WTF8fastFreeEPv(i30);
     break;
    } else {
     HEAP32[i36 >> 2] = i29;
     break;
    }
   }
   i29 = i19 | 0;
   HEAP32[i29 >> 2] = i2;
   if ((i2 | 0) != 0) {
    i36 = i2 + 4 | 0;
    HEAP32[i36 >> 2] = (HEAP32[i36 >> 2] | 0) + 1;
   }
   i36 = i20 | 0;
   HEAP32[i36 >> 2] = i3;
   if ((i3 | 0) != 0) {
    i30 = i3 + 4 | 0;
    HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 1;
   }
   __ZN7WebCore18IDBDatabaseBackend30runIntVersionChangeTransactionEN3WTF10PassRefPtrINS_12IDBCallbacksEEENS2_INS_20IDBDatabaseCallbacksEEExx(i1, i19, i20, i4, i5, i6, i7);
   i30 = HEAP32[i36 >> 2] | 0;
   do {
    if ((i30 | 0) != 0) {
     i36 = i30 + 4 | 0;
     i28 = i36 | 0;
     i37 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
     if ((i37 | 0) != 0) {
      HEAP32[i28 >> 2] = i37;
      break;
     }
     i37 = i36 - 4 | 0;
     if ((i37 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i37 >> 2] | 0) + 4 >> 2] & 31](i37);
    }
   } while (0);
   i30 = HEAP32[i29 >> 2] | 0;
   if ((i30 | 0) == 0) {
    break;
   }
   i37 = i30 + 4 | 0;
   i30 = i37 | 0;
   i36 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
   if ((i36 | 0) != 0) {
    HEAP32[i30 >> 2] = i36;
    break;
   }
   i36 = i37 - 4 | 0;
   if ((i36 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i36 >> 2] | 0) + 4 >> 2] & 31](i36);
  }
 } while (0);
 do {
  if ((i35 | 0) == 48) {
   i7 = HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] | 0;
   __ZN3WTF6String6formatEPKcz(i22, H_BASE + 104 | 0, (i6 = STACKTOP, STACKTOP = STACKTOP + 32 | 0, HEAP32[i6 >> 2] = i32, HEAP32[i6 + 8 >> 2] = i31, HEAP32[i6 + 16 >> 2] = i34, HEAP32[i6 + 24 >> 2] = i33, i6) | 0);
   STACKTOP = i6;
   i6 = __ZN3WTF10fastMallocEj(12) | 0;
   HEAP32[i6 >> 2] = 1;
   HEAP16[i6 + 4 >> 1] = 1206;
   i5 = i22 | 0;
   i4 = HEAP32[i5 >> 2] | 0;
   HEAP32[i6 + 8 >> 2] = i4;
   if ((i4 | 0) != 0) {
    i20 = i4 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 2;
   }
   i20 = i21 | 0;
   HEAP32[i20 >> 2] = i6;
   FUNCTION_TABLE_vii[i7 & 15](i2, i21);
   i7 = HEAP32[i20 >> 2] | 0;
   do {
    if ((i7 | 0) != 0) {
     i20 = i7 | 0;
     i6 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
     if ((i6 | 0) != 0) {
      HEAP32[i20 >> 2] = i6;
      break;
     }
     i6 = HEAP32[i7 + 8 >> 2] | 0;
     do {
      if ((i6 | 0) != 0) {
       i20 = i6 | 0;
       i4 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
       if ((i4 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i6);
        break;
       } else {
        HEAP32[i20 >> 2] = i4;
        break;
       }
      }
     } while (0);
     __ZN3WTF8fastFreeEPv(i7);
    }
   } while (0);
   i7 = HEAP32[i5 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   i29 = i7 | 0;
   i6 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i29 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i21 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i21 | 0) != 0) {
   i24 = i21 + 4 | 0;
   i22 = i24 | 0;
   i33 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
   if ((i33 | 0) != 0) {
    HEAP32[i22 >> 2] = i33;
    break;
   }
   i33 = i24 - 4 | 0;
   if ((i33 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i33 >> 2] | 0) + 4 >> 2] & 31](i33);
  }
 } while (0);
 if ((i2 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 i21 = i2 + 4 | 0;
 i2 = i21 | 0;
 i33 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i33 | 0) != 0) {
  HEAP32[i2 >> 2] = i33;
  STACKTOP = i8;
  return;
 }
 i33 = i21 - 4 | 0;
 if ((i33 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i33 >> 2] | 0) + 4 >> 2] & 31](i33);
 STACKTOP = i8;
 return;
}
function __ZN7WebCore18IDBDatabaseBackend30runIntVersionChangeTransactionEN3WTF10PassRefPtrINS_12IDBCallbacksEEENS2_INS_20IDBDatabaseCallbacksEEExx(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i9 = i8 | 0;
 i10 = i8 + 16 | 0;
 i11 = i8 + 24 | 0;
 i12 = i8 + 32 | 0;
 i13 = i8 + 48 | 0;
 i14 = i8 + 56 | 0;
 i15 = i8 + 64 | 0;
 i16 = i2 | 0;
 i2 = HEAP32[i16 >> 2] | 0;
 HEAP32[i16 >> 2] = 0;
 i16 = i11 | 0;
 i17 = i3 | 0;
 i3 = HEAP32[i17 >> 2] | 0;
 HEAP32[i17 >> 2] = 0;
 HEAP32[i16 >> 2] = i3;
 i17 = i1 + 188 | 0;
 i18 = HEAP32[i17 >> 2] | 0;
 if ((i18 | 0) != 0) {
  i19 = i1 + 24 | 0;
  i20 = i18;
  while (1) {
   i18 = HEAP32[i20 >> 2] | 0;
   if ((i18 | 0) != (i3 | 0)) {
    FUNCTION_TABLE_viiiiii[HEAP32[(HEAP32[i18 >> 2] | 0) + 12 >> 2] & 1](i18, HEAP32[i19 >> 2] | 0, HEAP32[i19 + 4 >> 2] | 0, i6, i7, 0);
   }
   i20 = HEAP32[i20 + 8 >> 2] | 0;
   if ((i20 | 0) == 0) {
    break;
   }
  }
 }
 i20 = i1 + 180 | 0;
 if ((HEAP32[i20 >> 2] | 0) != 0) {
  i19 = i1 + 24 | 0;
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i2 >> 2] | 0) + 48 >> 2] & 3](i2, HEAP32[i19 >> 2] | 0, HEAP32[i19 + 4 >> 2] | 0);
 }
 do {
  if ((HEAP32[i1 + 80 >> 2] | 0) == 0) {
   if ((HEAP32[i20 >> 2] | 0) != 0) {
    i21 = 10;
    break;
   }
   i19 = i12 | 0;
   HEAP32[i19 >> 2] = 0;
   i18 = i12 + 4 | 0;
   HEAP32[i18 >> 2] = 0;
   i22 = i12 + 8 | 0;
   HEAP32[i22 >> 2] = 0;
   i23 = i13 | 0;
   HEAP32[i23 >> 2] = i3;
   i24 = (i3 | 0) == 0;
   if (!i24) {
    i25 = i3 + 4 | 0;
    HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 1;
   }
   __ZN7WebCore18IDBDatabaseBackend17createTransactionExN3WTF10PassRefPtrINS_20IDBDatabaseCallbacksEEERKNS1_6VectorIxLj0ENS1_15CrashOnOverflowEEENS_9IndexedDB15TransactionModeE(i1, i4, i5, i13, i12, 2);
   i25 = HEAP32[i23 >> 2] | 0;
   do {
    if ((i25 | 0) != 0) {
     i23 = i25 + 4 | 0;
     i26 = i23 | 0;
     i27 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
     if ((i27 | 0) != 0) {
      HEAP32[i26 >> 2] = i27;
      break;
     }
     i27 = i23 - 4 | 0;
     if ((i27 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i27 >> 2] | 0) + 4 >> 2] & 31](i27);
    }
   } while (0);
   i25 = HEAP32[i1 + 92 >> 2] | 0;
   i27 = HEAP32[i1 + 84 >> 2] | 0;
   i23 = _i64Add(~0, ~i4, i4, i5) | 0;
   i26 = tempRet0;
   i28 = (i23 >>> 22 | i26 << 10) ^ i23;
   i23 = (i26 >>> 22 | 0 << 10) ^ i26;
   i26 = _i64Add(i28, i23, ~(i28 << 13 | 0 >>> 19), ~(i23 << 13 | i28 >>> 19)) | 0;
   i28 = tempRet0;
   i23 = ___muldi3((i26 >>> 8 | i28 << 24) ^ i26, (i28 >>> 8 | 0 << 24) ^ i28, 9, 0) | 0;
   i28 = tempRet0;
   i26 = (i23 >>> 15 | i28 << 17) ^ i23;
   i23 = (i28 >>> 15 | 0 << 17) ^ i28;
   i28 = _i64Add(i26, i23, ~(i26 << 27 | 0 >>> 5), ~(i23 << 27 | i26 >>> 5)) | 0;
   i26 = (i28 >>> 31 | tempRet0 << 1) ^ i28;
   L25 : do {
    if ((i27 | 0) == 0) {
     i29 = 0;
     i30 = 0;
    } else {
     i28 = i25 & i26;
     i23 = i27 + (i28 << 4) | 0;
     i31 = i23 | 0;
     i32 = HEAP32[i31 >> 2] | 0;
     i33 = HEAP32[i31 + 4 >> 2] | 0;
     if ((i32 | 0) == (i4 | 0) & (i33 | 0) == (i5 | 0)) {
      i34 = i23;
     } else {
      i23 = (i26 >>> 23) + ~i26 | 0;
      i31 = i23 << 12 ^ i23;
      i23 = i31 >>> 7 ^ i31;
      i31 = i23 << 2 ^ i23;
      i23 = i31 >>> 20 ^ i31 | 1;
      i31 = 0;
      i35 = i28;
      i28 = i33;
      i33 = i32;
      while (1) {
       if ((i33 | 0) == 0 & (i28 | 0) == 0) {
        i29 = 0;
        i30 = 0;
        break L25;
       }
       i32 = (i31 | 0) == 0 ? i23 : i31;
       i36 = i32 + i35 & i25;
       i37 = i27 + (i36 << 4) | 0;
       i38 = i37 | 0;
       i39 = HEAP32[i38 >> 2] | 0;
       i40 = HEAP32[i38 + 4 >> 2] | 0;
       if ((i39 | 0) == (i4 | 0) & (i40 | 0) == (i5 | 0)) {
        i34 = i37;
        break;
       } else {
        i31 = i32;
        i35 = i36;
        i28 = i40;
        i33 = i39;
       }
      }
     }
     if ((i34 | 0) == 0) {
      i29 = 0;
      i30 = 0;
      break;
     }
     i33 = HEAP32[i34 + 8 >> 2] | 0;
     if ((i33 | 0) == 0) {
      i29 = 0;
      i30 = 0;
      break;
     }
     i28 = i33 | 0;
     HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 1;
     i29 = i33;
     i30 = 1;
    }
   } while (0);
   i27 = i14 | 0;
   HEAP32[i27 >> 2] = i2;
   if ((i2 | 0) != 0) {
    i25 = i2 + 4 | 0;
    HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 1;
   }
   i25 = i15 | 0;
   HEAP32[i25 >> 2] = i3;
   if (!i24) {
    i26 = i3 + 4 | 0;
    HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
   }
   __ZN7WebCore21IDBTransactionBackend30scheduleVersionChangeOperationExN3WTF10PassRefPtrINS_12IDBCallbacksEEENS2_INS_20IDBDatabaseCallbacksEEERKNS_19IDBDatabaseMetadataE(i29, i6, i7, i14, i15, i1 + 8 | 0);
   i26 = HEAP32[i25 >> 2] | 0;
   do {
    if ((i26 | 0) != 0) {
     i25 = i26 + 4 | 0;
     i33 = i25 | 0;
     i28 = (HEAP32[i33 >> 2] | 0) - 1 | 0;
     if ((i28 | 0) != 0) {
      HEAP32[i33 >> 2] = i28;
      break;
     }
     i28 = i25 - 4 | 0;
     if ((i28 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i28 >> 2] | 0) + 4 >> 2] & 31](i28);
    }
   } while (0);
   i26 = HEAP32[i27 >> 2] | 0;
   do {
    if ((i26 | 0) != 0) {
     i24 = i26 + 4 | 0;
     i28 = i24 | 0;
     i25 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
     if ((i25 | 0) != 0) {
      HEAP32[i28 >> 2] = i25;
      break;
     }
     i25 = i24 - 4 | 0;
     if ((i25 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i25 >> 2] | 0) + 4 >> 2] & 31](i25);
    }
   } while (0);
   HEAP32[i10 >> 2] = HEAP32[i1 + 196 >> 2];
   __ZN3WTF9HashTableIPNS_15ListHashSetNodeINS_6RefPtrIN7WebCore20IDBDatabaseCallbacksEEELj256EEES7_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS5_EEEENS_10HashTraitsIS7_EESE_E3addINS_21ListHashSetTranslatorISB_EERKS5_PNS_24ListHashSetNodeAllocatorIS5_Lj256EEEEENS_18HashTableAddResultINS_17HashTableIteratorIS7_S7_S8_SC_SE_SE_EEEEOT0_OT1_(i9, i1 + 168 | 0, i11, i10);
   if ((HEAP8[i9 + 8 | 0] & 1) != 0) {
    i26 = HEAP32[HEAP32[i9 >> 2] >> 2] | 0;
    i27 = i1 + 192 | 0;
    HEAP32[i26 + 4 >> 2] = HEAP32[i27 >> 2];
    HEAP32[i26 + 8 >> 2] = 0;
    i25 = HEAP32[i27 >> 2] | 0;
    if ((i25 | 0) == 0) {
     HEAP32[i17 >> 2] = i26;
    } else {
     HEAP32[i25 + 8 >> 2] = i26;
    }
    HEAP32[i27 >> 2] = i26;
   }
   do {
    if (i30) {
     i26 = i29 | 0;
     i27 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
     if ((i27 | 0) == 0) {
      __ZN7WebCore21IDBTransactionBackendD1Ev(i29);
      __ZN3WTF8fastFreeEPv(i29);
      break;
     } else {
      HEAP32[i26 >> 2] = i27;
      break;
     }
    }
   } while (0);
   if ((HEAP32[i22 >> 2] | 0) != 0) {
    HEAP32[i22 >> 2] = 0;
   }
   i27 = HEAP32[i19 >> 2] | 0;
   if ((i27 | 0) == 0) {
    break;
   }
   HEAP32[i19 >> 2] = 0;
   HEAP32[i18 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i27);
  } else {
   i21 = 10;
  }
 } while (0);
 if ((i21 | 0) == 10) {
  i29 = i1 + 104 | 0;
  i30 = __Znwj(24) | 0;
  i17 = i30;
  HEAP32[i30 >> 2] = i2;
  if ((i2 | 0) != 0) {
   i9 = i2 + 4 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  }
  HEAP32[i30 + 4 >> 2] = i3;
  if ((i3 | 0) != 0) {
   i9 = i3 + 4 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  }
  i9 = i30 + 8 | 0;
  HEAP32[i9 >> 2] = i6;
  HEAP32[i9 + 4 >> 2] = i7;
  i7 = i30 + 16 | 0;
  HEAP32[i7 >> 2] = i4;
  HEAP32[i7 + 4 >> 2] = i5;
  i5 = HEAP32[i29 >> 2] | 0;
  i7 = i1 + 108 | 0;
  i4 = HEAP32[i7 >> 2] | 0;
  do {
   if ((i5 | 0) == 0) {
    i30 = HEAP32[i1 + 116 >> 2] | 0;
    if ((i4 | 0) == 0) {
     if ((i30 | 0) == 0) {
      i21 = 19;
      break;
     } else {
      i41 = 0;
      break;
     }
    } else {
     if ((i4 | 0) == (i30 - 1 | 0)) {
      i21 = 19;
      break;
     } else {
      i41 = i4;
      break;
     }
    }
   } else {
    if ((i4 + 1 | 0) == (i5 | 0)) {
     i21 = 19;
    } else {
     i41 = i4;
    }
   }
  } while (0);
  if ((i21 | 0) == 19) {
   __ZN3WTF5DequeINS_6OwnPtrIN7WebCore18IDBPendingOpenCallEEELj0EE14expandCapacityEv(i29);
   i41 = HEAP32[i7 >> 2] | 0;
  }
  HEAP32[(HEAP32[i1 + 112 >> 2] | 0) + (i41 << 2) >> 2] = i17;
  i17 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = (i17 | 0) == ((HEAP32[i1 + 116 >> 2] | 0) - 1 | 0) ? 0 : i17 + 1 | 0;
 }
 i17 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i16 = i17 + 4 | 0;
   i1 = i16 | 0;
   i7 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i1 >> 2] = i7;
    break;
   }
   i7 = i16 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 31](i7);
  }
 } while (0);
 if ((i2 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 i17 = i2 + 4 | 0;
 i2 = i17 | 0;
 i7 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i7 | 0) != 0) {
  HEAP32[i2 >> 2] = i7;
  STACKTOP = i8;
  return;
 }
 i7 = i17 - 4 | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 31](i7);
 STACKTOP = i8;
 return;
}
function __ZN7WebCore18IDBDatabaseBackend23processPendingOpenCallsEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i4 = i3 | 0;
 i5 = i3 + 24 | 0;
 i6 = i3 + 32 | 0;
 i7 = i3 + 40 | 0;
 i8 = i3 + 48 | 0;
 i9 = i3 + 56 | 0;
 _memset(i4 | 0, 0, 20) | 0;
 i10 = i1 + 104 | 0;
 i11 = i4 | 0;
 i12 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i11 >> 2] = i12;
 i13 = i1 + 108 | 0;
 i14 = i4 + 4 | 0;
 i15 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i14 >> 2] = i15;
 i16 = i1 + 112 | 0;
 i17 = i4 + 8 | 0;
 i18 = HEAP32[i16 >> 2] | 0;
 HEAP32[i16 >> 2] = 0;
 HEAP32[i17 >> 2] = i18;
 i19 = i1 + 116 | 0;
 i20 = i4 + 12 | 0;
 i21 = HEAP32[i19 >> 2] | 0;
 HEAP32[i19 >> 2] = 0;
 HEAP32[i20 >> 2] = i21;
 do {
  if ((i12 | 0) != (i15 | 0)) {
   i22 = i21 - 1 | 0;
   i23 = i1 + 16 | 0;
   i24 = i5 | 0;
   i25 = i6 | 0;
   i26 = i7 | 0;
   i27 = i9 | 0;
   i28 = i8 | 0;
   i29 = i12;
   L3 : while (1) {
    i30 = i18 + (i29 << 2) | 0;
    i31 = HEAP32[i30 >> 2] | 0;
    HEAP32[i30 >> 2] = 0;
    if (!1) {
     do {
      if (!0) {
       if (!0) {
        break;
       }
       if (0) {
        break;
       }
      }
     } while (0);
     do {
      if (!0) {
       if (!0) {
        break;
       }
       if (0) {
        break;
       }
      }
     } while (0);
    }
    i32 = (i29 | 0) == (i22 | 0) ? 0 : i29 + 1 | 0;
    do {
     if (i2) {
      if ((HEAP32[i23 >> 2] | 0) == 0 & (HEAP32[i23 + 4 >> 2] | 0) == 0) {
       break L3;
      }
      i30 = HEAP32[i31 >> 2] | 0;
      HEAP32[i24 >> 2] = i30;
      if ((i30 | 0) != 0) {
       i33 = i30 + 4 | 0;
       HEAP32[i33 >> 2] = (HEAP32[i33 >> 2] | 0) + 1;
      }
      i33 = HEAP32[i31 + 4 >> 2] | 0;
      HEAP32[i25 >> 2] = i33;
      if ((i33 | 0) != 0) {
       i30 = i33 + 4 | 0;
       HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 1;
      }
      i30 = i31 + 16 | 0;
      i33 = i31 + 8 | 0;
      __ZN7WebCore18IDBDatabaseBackend22openConnectionInternalEN3WTF10PassRefPtrINS_12IDBCallbacksEEENS2_INS_20IDBDatabaseCallbacksEEExy(i1, i5, i6, HEAP32[i30 >> 2] | 0, HEAP32[i30 + 4 >> 2] | 0, HEAP32[i33 >> 2] | 0, HEAP32[i33 + 4 >> 2] | 0);
      i33 = HEAP32[i25 >> 2] | 0;
      do {
       if ((i33 | 0) != 0) {
        i30 = i33 + 4 | 0;
        i34 = i30 | 0;
        i35 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
        if ((i35 | 0) != 0) {
         HEAP32[i34 >> 2] = i35;
         break;
        }
        i35 = i30 - 4 | 0;
        if ((i35 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i35 >> 2] | 0) + 4 >> 2] & 31](i35);
       }
      } while (0);
      i33 = HEAP32[i24 >> 2] | 0;
      if ((i33 | 0) == 0) {
       break;
      }
      i35 = i33 + 4 | 0;
      i33 = i35 | 0;
      i30 = (HEAP32[i33 >> 2] | 0) - 1 | 0;
      if ((i30 | 0) != 0) {
       HEAP32[i33 >> 2] = i30;
       break;
      }
      i30 = i35 - 4 | 0;
      if ((i30 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i30 >> 2] | 0) + 4 >> 2] & 31](i30);
     } else {
      i30 = i31 + 8 | 0;
      i35 = HEAP32[i30 >> 2] | 0;
      i33 = HEAP32[i30 + 4 >> 2] | 0;
      if ((i35 | 0) == (-1 | 0) & (i33 | 0) == 2147483647) {
       __ZN3WTF6StringC1EPKc(i7, H_BASE + 232 | 0);
       i30 = HEAP32[i26 >> 2] | 0;
       HEAP32[i26 >> 2] = 0;
       i36 = i30;
      } else {
       __ZN3WTF6String6formatEPKcz(i8, H_BASE + 176 | 0, (i30 = STACKTOP, STACKTOP = STACKTOP + 16 | 0, HEAP32[i30 >> 2] = i35, HEAP32[i30 + 8 >> 2] = i33, i30) | 0);
       STACKTOP = i30;
       i30 = HEAP32[i28 >> 2] | 0;
       HEAP32[i28 >> 2] = 0;
       i36 = i30;
      }
      i30 = HEAP32[i31 >> 2] | 0;
      i33 = HEAP32[(HEAP32[i30 >> 2] | 0) + 8 >> 2] | 0;
      i35 = __ZN3WTF10fastMallocEj(12) | 0;
      HEAP32[i35 >> 2] = 1;
      HEAP16[i35 + 4 >> 1] = 1201;
      HEAP32[i35 + 8 >> 2] = i36;
      i34 = (i36 | 0) == 0;
      if (!i34) {
       i37 = i36 | 0;
       HEAP32[i37 >> 2] = (HEAP32[i37 >> 2] | 0) + 2;
      }
      HEAP32[i27 >> 2] = i35;
      FUNCTION_TABLE_vii[i33 & 15](i30, i9);
      i30 = HEAP32[i27 >> 2] | 0;
      do {
       if ((i30 | 0) != 0) {
        i33 = i30 | 0;
        i35 = (HEAP32[i33 >> 2] | 0) - 1 | 0;
        if ((i35 | 0) != 0) {
         HEAP32[i33 >> 2] = i35;
         break;
        }
        i35 = HEAP32[i30 + 8 >> 2] | 0;
        do {
         if ((i35 | 0) != 0) {
          i33 = i35 | 0;
          i37 = (HEAP32[i33 >> 2] | 0) - 2 | 0;
          if ((i37 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i35);
           break;
          } else {
           HEAP32[i33 >> 2] = i37;
           break;
          }
         }
        } while (0);
        __ZN3WTF8fastFreeEPv(i30);
       }
      } while (0);
      if (i34) {
       break;
      }
      i30 = i36 | 0;
      i35 = (HEAP32[i30 >> 2] | 0) - 2 | 0;
      if ((i35 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i36);
       break;
      } else {
       HEAP32[i30 >> 2] = i35;
       break;
      }
     }
    } while (0);
    if ((i31 | 0) != 0) {
     i35 = HEAP32[i31 + 4 >> 2] | 0;
     do {
      if ((i35 | 0) != 0) {
       i30 = i35 + 4 | 0;
       i37 = i30 | 0;
       i33 = (HEAP32[i37 >> 2] | 0) - 1 | 0;
       if ((i33 | 0) != 0) {
        HEAP32[i37 >> 2] = i33;
        break;
       }
       i33 = i30 - 4 | 0;
       if ((i33 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i33 >> 2] | 0) + 4 >> 2] & 31](i33);
      }
     } while (0);
     i35 = HEAP32[i31 >> 2] | 0;
     do {
      if ((i35 | 0) != 0) {
       i33 = i35 + 4 | 0;
       i30 = i33 | 0;
       i37 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
       if ((i37 | 0) != 0) {
        HEAP32[i30 >> 2] = i37;
        break;
       }
       i37 = i33 - 4 | 0;
       if ((i37 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i37 >> 2] | 0) + 4 >> 2] & 31](i37);
      }
     } while (0);
     __ZdlPv(i31);
    }
    if ((i32 | 0) == (i15 | 0)) {
     i38 = 68;
     break;
    } else {
     i29 = i32;
    }
   }
   if ((i38 | 0) == 68) {
    HEAP32[i11 >> 2] = i15;
    break;
   }
   HEAP32[i11 >> 2] = i32;
   do {
    if ((i32 | 0) == 0) {
     if ((i15 | 0) == 0) {
      if ((i21 | 0) == 0) {
       i38 = 22;
       break;
      } else {
       i39 = i21;
       i40 = i21;
       break;
      }
     } else {
      if ((i15 | 0) == (i22 | 0)) {
       i38 = 22;
       break;
      } else {
       i39 = i21;
       i40 = i21;
       break;
      }
     }
    } else {
     if ((i15 + 1 | 0) == (i32 | 0)) {
      i38 = 22;
     } else {
      i39 = i32;
      i40 = i21;
     }
    }
   } while (0);
   if ((i38 | 0) == 22) {
    __ZN3WTF5DequeINS_6OwnPtrIN7WebCore18IDBPendingOpenCallEEELj0EE14expandCapacityEv(i4);
    i22 = HEAP32[i11 >> 2] | 0;
    i29 = HEAP32[i20 >> 2] | 0;
    i39 = (i22 | 0) == 0 ? i29 : i22;
    i40 = i29;
   }
   i29 = i39 - 1 | 0;
   i22 = HEAP32[i17 >> 2] | 0;
   HEAP32[i22 + (i29 << 2) >> 2] = i31;
   HEAP32[i11 >> 2] = HEAP32[i10 >> 2];
   HEAP32[i10 >> 2] = i29;
   i29 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = HEAP32[i13 >> 2];
   HEAP32[i13 >> 2] = i29;
   HEAP32[i17 >> 2] = HEAP32[i16 >> 2];
   HEAP32[i16 >> 2] = i22;
   HEAP32[i20 >> 2] = HEAP32[i19 >> 2];
   HEAP32[i19 >> 2] = i40;
   __ZN7WebCore18IDBDatabaseBackend17openInternalAsyncEv(i1);
  }
 } while (0);
 __ZN3WTF5DequeINS_6OwnPtrIN7WebCore18IDBPendingOpenCallEEELj0EE10destroyAllEv(i4);
 i4 = HEAP32[i17 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i17 >> 2] = 0;
 HEAP32[i20 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i4);
 STACKTOP = i3;
 return;
}
function __ZN3WTF9HashTableIxNS_12KeyValuePairIxPN7WebCore21IDBTransactionBackendEEENS_24KeyValuePairKeyExtractorIS5_EENS_7IntHashIyEENS_7HashMapIxS4_S9_NS_10HashTraitsIxEENSB_IS4_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKxS4_EENS_18HashTableAddResultINS_17HashTableIteratorIxS5_S7_S9_SF_SC_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0;
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
  HEAP32[i8 >> 2] = __ZN3WTF16fastZeroedMallocEj(i12 << 4) | 0;
  if ((i13 | 0) != 0) {
   i12 = i6 | 0;
   i11 = 0;
   while (1) {
    i14 = i11 << 4 | 0;
    i15 = i14 | 0;
    i16 = HEAP32[i15 >> 2] | 0;
    i17 = HEAP32[i15 + 4 >> 2] | 0;
    if (!((i16 | 0) == (-1 | 0) & (i17 | 0) == (-1 | 0) | (i16 | 0) == 0 & (i17 | 0) == 0)) {
     __ZN3WTF9HashTableIxNS_12KeyValuePairIxPN7WebCore21IDBTransactionBackendEEENS_24KeyValuePairKeyExtractorIS5_EENS_7IntHashIyEENS_7HashMapIxS4_S9_NS_10HashTraitsIxEENSB_IS4_EEE18KeyValuePairTraitsESC_E16lookupForWritingINS_22IdentityHashTranslatorIS9_EExEENSt3__14pairIPS5_bEERKT0_(i6, i2, i15);
     i15 = HEAP32[i12 >> 2] | 0;
     i17 = i14;
     HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
     HEAP32[i15 + 4 >> 2] = HEAP32[i17 + 4 >> 2];
     HEAP32[i15 + 8 >> 2] = HEAP32[i17 + 8 >> 2];
     HEAP32[i15 + 12 >> 2] = HEAP32[i17 + 12 >> 2];
    }
    i11 = i11 + 1 | 0;
    if ((i11 | 0) == (i13 | 0)) {
     break;
    }
   }
  }
  HEAP32[i2 + 16 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(0);
  i18 = HEAP32[i8 >> 2] | 0;
  i19 = i10;
 } else {
  i18 = i9;
  i19 = i2 + 8 | 0;
 }
 i9 = HEAP32[i19 >> 2] | 0;
 i10 = HEAP32[i3 >> 2] | 0;
 i13 = HEAP32[i3 + 4 >> 2] | 0;
 i11 = _i64Add(i10, i13, ~0, ~i10) | 0;
 i12 = tempRet0;
 i6 = (i11 >>> 22 | i12 << 10) ^ i11;
 i11 = (i12 >>> 22 | 0 << 10) ^ i12;
 i12 = _i64Add(i6, i11, ~(i6 << 13 | 0 >>> 19), ~(i11 << 13 | i6 >>> 19)) | 0;
 i6 = tempRet0;
 i11 = ___muldi3((i12 >>> 8 | i6 << 24) ^ i12, (i6 >>> 8 | 0 << 24) ^ i6, 9, 0) | 0;
 i6 = tempRet0;
 i12 = (i11 >>> 15 | i6 << 17) ^ i11;
 i11 = (i6 >>> 15 | 0 << 17) ^ i6;
 i6 = _i64Add(i12, i11, ~(i12 << 27 | 0 >>> 5), ~(i11 << 27 | i12 >>> 5)) | 0;
 i12 = (i6 >>> 31 | tempRet0 << 1) ^ i6;
 i6 = i12 & i9;
 i11 = i18 + (i6 << 4) | 0;
 i17 = i11 | 0;
 i15 = HEAP32[i17 >> 2] | 0;
 i14 = HEAP32[i17 + 4 >> 2] | 0;
 do {
  if ((i15 | 0) == 0 & (i14 | 0) == 0) {
   i20 = i11;
   i21 = 17;
  } else {
   i17 = (i12 >>> 23) + ~i12 | 0;
   i16 = i17 << 12 ^ i17;
   i17 = i16 >>> 7 ^ i16;
   i16 = i17 << 2 ^ i17;
   i17 = i16 >>> 20 ^ i16 | 1;
   i16 = 0;
   i22 = 0;
   i23 = i6;
   i24 = i11;
   i25 = i14;
   i26 = i15;
   while (1) {
    if ((i26 | 0) == (i10 | 0) & (i25 | 0) == (i13 | 0)) {
     i21 = 14;
     break;
    }
    i27 = (i26 | 0) == (-1 | 0) & (i25 | 0) == (-1 | 0) ? i24 : i22;
    i28 = (i16 | 0) == 0 ? i17 : i16;
    i29 = i28 + i23 & i9;
    i30 = i18 + (i29 << 4) | 0;
    i31 = i30 | 0;
    i32 = HEAP32[i31 >> 2] | 0;
    i33 = HEAP32[i31 + 4 >> 2] | 0;
    if ((i32 | 0) == 0 & (i33 | 0) == 0) {
     i21 = 16;
     break;
    } else {
     i16 = i28;
     i22 = i27;
     i23 = i29;
     i24 = i30;
     i25 = i33;
     i26 = i32;
    }
   }
   if ((i21 | 0) == 16) {
    if ((i27 | 0) == 0) {
     i20 = i30;
     i21 = 17;
     break;
    }
    _memset(i27 | 0, 0, 16) | 0;
    i26 = i2 + 16 | 0;
    HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) - 1;
    i34 = i27;
    i35 = HEAP32[i3 + 4 >> 2] | 0;
    i36 = HEAP32[i3 >> 2] | 0;
    i37 = i26;
    break;
   } else if ((i21 | 0) == 14) {
    i26 = i18 + (HEAP32[i2 + 4 >> 2] << 4) | 0;
    i25 = i1;
    HEAP32[i25 >> 2] = i24;
    HEAP32[i25 + 4 >> 2] = i26;
    HEAP8[i1 + 8 | 0] = 0;
    STACKTOP = i5;
    return;
   }
  }
 } while (0);
 if ((i21 | 0) == 17) {
  i34 = i20;
  i35 = i13;
  i36 = i10;
  i37 = i2 + 16 | 0;
 }
 i10 = i34 | 0;
 HEAP32[i10 >> 2] = i36;
 HEAP32[i10 + 4 >> 2] = i35;
 HEAP32[i34 + 8 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i35 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i35;
 i4 = i2 + 4 | 0;
 i10 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i37 >> 2] | 0) + i35 << 1 | 0) < (i10 | 0)) {
  i38 = i34;
  i39 = i10;
 } else {
  if ((i10 | 0) == 0) {
   i40 = 8;
   i41 = 0;
  } else {
   i36 = i10 << 1;
   i40 = (i35 * 6 & -1 | 0) < (i36 | 0) ? i10 : i36;
   i41 = i10;
  }
  i10 = HEAP32[i8 >> 2] | 0;
  HEAP32[i4 >> 2] = i40;
  HEAP32[i19 >> 2] = i40 - 1;
  HEAP32[i8 >> 2] = __ZN3WTF16fastZeroedMallocEj(i40 << 4) | 0;
  if ((i41 | 0) == 0) {
   i42 = 0;
  } else {
   i40 = i7 | 0;
   i19 = 0;
   i36 = 0;
   while (1) {
    i35 = i10 + (i19 << 4) | 0;
    i13 = i35 | 0;
    i20 = HEAP32[i13 >> 2] | 0;
    i21 = HEAP32[i13 + 4 >> 2] | 0;
    if ((i20 | 0) == (-1 | 0) & (i21 | 0) == (-1 | 0) | (i20 | 0) == 0 & (i21 | 0) == 0) {
     i43 = i36;
    } else {
     __ZN3WTF9HashTableIxNS_12KeyValuePairIxPN7WebCore21IDBTransactionBackendEEENS_24KeyValuePairKeyExtractorIS5_EENS_7IntHashIyEENS_7HashMapIxS4_S9_NS_10HashTraitsIxEENSB_IS4_EEE18KeyValuePairTraitsESC_E16lookupForWritingINS_22IdentityHashTranslatorIS9_EExEENSt3__14pairIPS5_bEERKT0_(i7, i2, i13);
     i13 = HEAP32[i40 >> 2] | 0;
     i21 = i13;
     i20 = i35;
     HEAP32[i21 >> 2] = HEAP32[i20 >> 2];
     HEAP32[i21 + 4 >> 2] = HEAP32[i20 + 4 >> 2];
     HEAP32[i21 + 8 >> 2] = HEAP32[i20 + 8 >> 2];
     HEAP32[i21 + 12 >> 2] = HEAP32[i20 + 12 >> 2];
     i43 = (i35 | 0) == (i34 | 0) ? i13 : i36;
    }
    i13 = i19 + 1 | 0;
    if ((i13 | 0) == (i41 | 0)) {
     i42 = i43;
     break;
    } else {
     i19 = i13;
     i36 = i43;
    }
   }
  }
  HEAP32[i37 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i10);
  i38 = i42;
  i39 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i8 >> 2] | 0) + (i39 << 4) | 0;
 i39 = i1;
 HEAP32[i39 >> 2] = i38;
 HEAP32[i39 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 STACKTOP = i5;
 return;
}
function __ZN3WTF9HashTableIxNS_12KeyValuePairIxPN7WebCore21IDBTransactionBackendEEENS_24KeyValuePairKeyExtractorIS5_EENS_7IntHashIyEENS_7HashMapIxS4_S9_NS_10HashTraitsIxEENSB_IS4_EEE18KeyValuePairTraitsESC_E3addINS_22IdentityHashTranslatorIS9_EERKxRKS5_EENS_18HashTableAddResultINS_17HashTableIteratorIxS5_S7_S9_SF_SC_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0;
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
  HEAP32[i8 >> 2] = __ZN3WTF16fastZeroedMallocEj(i12 << 4) | 0;
  if ((i13 | 0) != 0) {
   i12 = i6 | 0;
   i11 = 0;
   while (1) {
    i14 = i11 << 4 | 0;
    i15 = i14 | 0;
    i16 = HEAP32[i15 >> 2] | 0;
    i17 = HEAP32[i15 + 4 >> 2] | 0;
    if (!((i16 | 0) == (-1 | 0) & (i17 | 0) == (-1 | 0) | (i16 | 0) == 0 & (i17 | 0) == 0)) {
     __ZN3WTF9HashTableIxNS_12KeyValuePairIxPN7WebCore21IDBTransactionBackendEEENS_24KeyValuePairKeyExtractorIS5_EENS_7IntHashIyEENS_7HashMapIxS4_S9_NS_10HashTraitsIxEENSB_IS4_EEE18KeyValuePairTraitsESC_E16lookupForWritingINS_22IdentityHashTranslatorIS9_EExEENSt3__14pairIPS5_bEERKT0_(i6, i2, i15);
     i15 = HEAP32[i12 >> 2] | 0;
     i17 = i14;
     HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
     HEAP32[i15 + 4 >> 2] = HEAP32[i17 + 4 >> 2];
     HEAP32[i15 + 8 >> 2] = HEAP32[i17 + 8 >> 2];
     HEAP32[i15 + 12 >> 2] = HEAP32[i17 + 12 >> 2];
    }
    i11 = i11 + 1 | 0;
    if ((i11 | 0) == (i13 | 0)) {
     break;
    }
   }
  }
  HEAP32[i2 + 16 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(0);
  i18 = HEAP32[i8 >> 2] | 0;
  i19 = i10;
 } else {
  i18 = i9;
  i19 = i2 + 8 | 0;
 }
 i9 = HEAP32[i19 >> 2] | 0;
 i10 = HEAP32[i3 >> 2] | 0;
 i13 = HEAP32[i3 + 4 >> 2] | 0;
 i3 = _i64Add(i10, i13, ~0, ~i10) | 0;
 i11 = tempRet0;
 i12 = (i3 >>> 22 | i11 << 10) ^ i3;
 i3 = (i11 >>> 22 | 0 << 10) ^ i11;
 i11 = _i64Add(i12, i3, ~(i12 << 13 | 0 >>> 19), ~(i3 << 13 | i12 >>> 19)) | 0;
 i12 = tempRet0;
 i3 = ___muldi3((i11 >>> 8 | i12 << 24) ^ i11, (i12 >>> 8 | 0 << 24) ^ i12, 9, 0) | 0;
 i12 = tempRet0;
 i11 = (i3 >>> 15 | i12 << 17) ^ i3;
 i3 = (i12 >>> 15 | 0 << 17) ^ i12;
 i12 = _i64Add(i11, i3, ~(i11 << 27 | 0 >>> 5), ~(i3 << 27 | i11 >>> 5)) | 0;
 i11 = (i12 >>> 31 | tempRet0 << 1) ^ i12;
 i12 = i11 & i9;
 i3 = i18 + (i12 << 4) | 0;
 i6 = i3 | 0;
 i17 = HEAP32[i6 >> 2] | 0;
 i15 = HEAP32[i6 + 4 >> 2] | 0;
 do {
  if ((i17 | 0) == 0 & (i15 | 0) == 0) {
   i20 = i3;
   i21 = 17;
  } else {
   i6 = (i11 >>> 23) + ~i11 | 0;
   i14 = i6 << 12 ^ i6;
   i6 = i14 >>> 7 ^ i14;
   i14 = i6 << 2 ^ i6;
   i6 = i14 >>> 20 ^ i14 | 1;
   i14 = 0;
   i16 = 0;
   i22 = i12;
   i23 = i3;
   i24 = i15;
   i25 = i17;
   while (1) {
    if ((i25 | 0) == (i10 | 0) & (i24 | 0) == (i13 | 0)) {
     i21 = 14;
     break;
    }
    i26 = (i25 | 0) == (-1 | 0) & (i24 | 0) == (-1 | 0) ? i23 : i16;
    i27 = (i14 | 0) == 0 ? i6 : i14;
    i28 = i27 + i22 & i9;
    i29 = i18 + (i28 << 4) | 0;
    i30 = i29 | 0;
    i31 = HEAP32[i30 >> 2] | 0;
    i32 = HEAP32[i30 + 4 >> 2] | 0;
    if ((i31 | 0) == 0 & (i32 | 0) == 0) {
     i21 = 16;
     break;
    } else {
     i14 = i27;
     i16 = i26;
     i22 = i28;
     i23 = i29;
     i24 = i32;
     i25 = i31;
    }
   }
   if ((i21 | 0) == 16) {
    if ((i26 | 0) == 0) {
     i20 = i29;
     i21 = 17;
     break;
    }
    _memset(i26 | 0, 0, 16) | 0;
    i25 = i2 + 16 | 0;
    HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) - 1;
    i33 = i26;
    i34 = i25;
    break;
   } else if ((i21 | 0) == 14) {
    i25 = i18 + (HEAP32[i2 + 4 >> 2] << 4) | 0;
    i24 = i1;
    HEAP32[i24 >> 2] = i23;
    HEAP32[i24 + 4 >> 2] = i25;
    HEAP8[i1 + 8 | 0] = 0;
    STACKTOP = i5;
    return;
   }
  }
 } while (0);
 if ((i21 | 0) == 17) {
  i33 = i20;
  i34 = i2 + 16 | 0;
 }
 i20 = i33;
 i21 = i4;
 HEAP32[i20 >> 2] = HEAP32[i21 >> 2];
 HEAP32[i20 + 4 >> 2] = HEAP32[i21 + 4 >> 2];
 HEAP32[i20 + 8 >> 2] = HEAP32[i21 + 8 >> 2];
 i21 = i2 + 12 | 0;
 i20 = (HEAP32[i21 >> 2] | 0) + 1 | 0;
 HEAP32[i21 >> 2] = i20;
 i21 = i2 + 4 | 0;
 i4 = HEAP32[i21 >> 2] | 0;
 if (((HEAP32[i34 >> 2] | 0) + i20 << 1 | 0) < (i4 | 0)) {
  i35 = i33;
  i36 = i4;
 } else {
  if ((i4 | 0) == 0) {
   i37 = 8;
   i38 = 0;
  } else {
   i18 = i4 << 1;
   i37 = (i20 * 6 & -1 | 0) < (i18 | 0) ? i4 : i18;
   i38 = i4;
  }
  i4 = HEAP32[i8 >> 2] | 0;
  HEAP32[i21 >> 2] = i37;
  HEAP32[i19 >> 2] = i37 - 1;
  HEAP32[i8 >> 2] = __ZN3WTF16fastZeroedMallocEj(i37 << 4) | 0;
  if ((i38 | 0) == 0) {
   i39 = 0;
  } else {
   i37 = i7 | 0;
   i19 = 0;
   i18 = 0;
   while (1) {
    i20 = i4 + (i19 << 4) | 0;
    i26 = i20 | 0;
    i29 = HEAP32[i26 >> 2] | 0;
    i9 = HEAP32[i26 + 4 >> 2] | 0;
    if ((i29 | 0) == (-1 | 0) & (i9 | 0) == (-1 | 0) | (i29 | 0) == 0 & (i9 | 0) == 0) {
     i40 = i18;
    } else {
     __ZN3WTF9HashTableIxNS_12KeyValuePairIxPN7WebCore21IDBTransactionBackendEEENS_24KeyValuePairKeyExtractorIS5_EENS_7IntHashIyEENS_7HashMapIxS4_S9_NS_10HashTraitsIxEENSB_IS4_EEE18KeyValuePairTraitsESC_E16lookupForWritingINS_22IdentityHashTranslatorIS9_EExEENSt3__14pairIPS5_bEERKT0_(i7, i2, i26);
     i26 = HEAP32[i37 >> 2] | 0;
     i9 = i26;
     i29 = i20;
     HEAP32[i9 >> 2] = HEAP32[i29 >> 2];
     HEAP32[i9 + 4 >> 2] = HEAP32[i29 + 4 >> 2];
     HEAP32[i9 + 8 >> 2] = HEAP32[i29 + 8 >> 2];
     HEAP32[i9 + 12 >> 2] = HEAP32[i29 + 12 >> 2];
     i40 = (i20 | 0) == (i33 | 0) ? i26 : i18;
    }
    i26 = i19 + 1 | 0;
    if ((i26 | 0) == (i38 | 0)) {
     i39 = i40;
     break;
    } else {
     i19 = i26;
     i18 = i40;
    }
   }
  }
  HEAP32[i34 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
  i35 = i39;
  i36 = HEAP32[i21 >> 2] | 0;
 }
 i21 = (HEAP32[i8 >> 2] | 0) + (i36 << 4) | 0;
 i36 = i1;
 HEAP32[i36 >> 2] = i35;
 HEAP32[i36 + 4 >> 2] = i21;
 HEAP8[i1 + 8 | 0] = 1;
 STACKTOP = i5;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend19deleteDatabaseAsyncEN3WTF10PassRefPtrINS2_12IDBCallbacksEEEE3$_2NS_9allocatorIS8_EEFvbEEclEOb_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = (HEAP8[i2] & 1) == 0;
 i2 = i1 + 4 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 i8 = i7 + 148 | 0;
 i9 = i1 + 8 | 0;
 i1 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = HEAP32[i8 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i11 = HEAP32[i7 + 152 >> 2] | 0;
  i12 = i11 << 2 | 0;
  i13 = 0;
  i14 = i11;
 } else {
  i11 = HEAP32[i7 + 156 >> 2] | 0;
  i15 = i1;
  i16 = i15 + ~(i15 << 15) | 0;
  i15 = (i16 >>> 10 ^ i16) * 9 & -1;
  i16 = i15 >>> 6 ^ i15;
  i15 = i16 + ~(i16 << 11) | 0;
  i16 = i15 >>> 16 ^ i15;
  i15 = i11 & i16;
  i17 = i10 + (i15 << 2) | 0;
  i18 = HEAP32[i17 >> 2] | 0;
  L4 : do {
   if ((i18 | 0) == (i1 | 0)) {
    i19 = i17;
   } else {
    i20 = (i16 >>> 23) + ~i16 | 0;
    i21 = i20 << 12 ^ i20;
    i20 = i21 >>> 7 ^ i21;
    i21 = i20 << 2 ^ i20;
    i20 = i21 >>> 20 ^ i21 | 1;
    i21 = 0;
    i22 = i15;
    i23 = i18;
    while (1) {
     if ((i23 | 0) == 0) {
      i19 = 0;
      break L4;
     }
     i24 = (i21 | 0) == 0 ? i20 : i21;
     i25 = i24 + i22 & i11;
     i26 = i10 + (i25 << 2) | 0;
     i27 = HEAP32[i26 >> 2] | 0;
     if ((i27 | 0) == (i1 | 0)) {
      i19 = i26;
      break;
     } else {
      i21 = i24;
      i22 = i25;
      i23 = i27;
     }
    }
   }
  } while (0);
  i11 = HEAP32[i7 + 152 >> 2] | 0;
  i12 = (i19 | 0) == 0 ? i10 + (i11 << 2) | 0 : i19;
  i13 = i10;
  i14 = i11;
 }
 i11 = i8 | 0;
 i8 = i7 + 152 | 0;
 do {
  if ((i12 | 0) != (i13 + (i14 << 2) | 0)) {
   i10 = i12 | 0;
   i19 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i19 | 0) != 0) {
     i18 = i19 + 4 | 0;
     i15 = i18 | 0;
     i16 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
     if ((i16 | 0) != 0) {
      HEAP32[i15 >> 2] = i16;
      break;
     }
     i16 = i18 - 4 | 0;
     if ((i16 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 31](i16);
    }
   } while (0);
   HEAP32[i10 >> 2] = -1;
   i19 = i7 + 164 | 0;
   HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
   i19 = i7 + 160 | 0;
   i16 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
   HEAP32[i19 >> 2] = i16;
   i19 = HEAP32[i8 >> 2] | 0;
   if (!((i16 * 6 & -1 | 0) < (i19 | 0) & (i19 | 0) > 8)) {
    break;
   }
   __ZN3WTF9HashTableINS_6RefPtrIN7WebCore12IDBCallbacksEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_(i11, (i19 | 0) / 2 & -1, 0) | 0;
  }
 } while (0);
 do {
  if ((i1 | 0) != 0) {
   i11 = i1 + 4 | 0;
   i8 = i11 | 0;
   i7 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i8 >> 2] = i7;
    break;
   }
   i7 = i11 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 31](i7);
  }
 } while (0);
 i1 = HEAP32[(HEAP32[i2 >> 2] | 0) + 72 >> 2] | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 7](i1) | 0)) {
  STACKTOP = i3;
  return;
 }
 do {
  if (i6) {
   i1 = HEAP32[i9 >> 2] | 0;
   i7 = HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] | 0;
   __ZN3WTF6StringC1EPKc(i5, H_BASE + 8 | 0);
   i11 = __ZN3WTF10fastMallocEj(12) | 0;
   HEAP32[i11 >> 2] = 1;
   HEAP16[i11 + 4 >> 1] = 1201;
   i8 = i5 | 0;
   i12 = HEAP32[i8 >> 2] | 0;
   HEAP32[i11 + 8 >> 2] = i12;
   if ((i12 | 0) != 0) {
    i14 = i12 | 0;
    HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
   }
   i14 = i4 | 0;
   HEAP32[i14 >> 2] = i11;
   FUNCTION_TABLE_vii[i7 & 15](i1, i4);
   i1 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i1 | 0) != 0) {
     i14 = i1 | 0;
     i7 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
     if ((i7 | 0) != 0) {
      HEAP32[i14 >> 2] = i7;
      break;
     }
     i7 = HEAP32[i1 + 8 >> 2] | 0;
     do {
      if ((i7 | 0) != 0) {
       i14 = i7 | 0;
       i11 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
       if ((i11 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i7);
        break;
       } else {
        HEAP32[i14 >> 2] = i11;
        break;
       }
      }
     } while (0);
     __ZN3WTF8fastFreeEPv(i1);
    }
   } while (0);
   i1 = HEAP32[i8 >> 2] | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   i10 = i1 | 0;
   i7 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i10 >> 2] = i7;
    break;
   }
  } else {
   i7 = (HEAP32[i2 >> 2] | 0) + 16 | 0;
   HEAP32[i7 >> 2] = 0;
   HEAP32[i7 + 4 >> 2] = 0;
   i7 = (HEAP32[i2 >> 2] | 0) + 24 | 0;
   HEAP32[i7 >> 2] = -1;
   HEAP32[i7 + 4 >> 2] = 2147483647;
   i7 = HEAP32[i2 >> 2] | 0;
   i10 = i7 + 40 | 0;
   i1 = HEAP32[i10 >> 2] | 0;
   if ((i1 | 0) != 0) {
    i11 = HEAP32[i7 + 44 >> 2] | 0;
    if ((i11 | 0) > 0) {
     i7 = 0;
     while (1) {
      i14 = i1 + (i7 * 80 & -1) | 0;
      if (!((HEAP32[i14 >> 2] | 0) == (-1 | 0) & (HEAP32[i14 + 4 >> 2] | 0) == (-1 | 0))) {
       __ZN7WebCore22IDBObjectStoreMetadataD1Ev(i1 + (i7 * 80 & -1) + 8 | 0);
      }
      i7 = i7 + 1 | 0;
      if ((i7 | 0) >= (i11 | 0)) {
       break;
      }
     }
    }
    __ZN3WTF8fastFreeEPv(i1);
    _memset(i10 | 0, 0, 16) | 0;
   }
   i11 = HEAP32[i9 >> 2] | 0;
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 36 >> 2] & 31](i11);
  }
 } while (0);
 __ZN7WebCore18IDBDatabaseBackend19processPendingCallsEv(HEAP32[i2 >> 2] | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore18IDBDatabaseBackendD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = i1 + 68 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 64 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 20 >> 2] & 15](i3, i4);
 i3 = HEAP32[i1 + 188 >> 2] | 0;
 i5 = i1 + 196 | 0;
 if ((i3 | 0) != 0) {
  i6 = i3;
  while (1) {
   i3 = i6 + 8 | 0;
   i7 = HEAP32[i3 >> 2] | 0;
   i8 = HEAP32[i5 >> 2] | 0;
   i9 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i10 = i9 + 4 | 0;
     i11 = i10 | 0;
     i12 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
     if ((i12 | 0) != 0) {
      HEAP32[i11 >> 2] = i12;
      break;
     }
     i12 = i10 - 4 | 0;
     if ((i12 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 31](i12);
    }
   } while (0);
   i9 = i8 + 8 | 0;
   do {
    if (i9 >>> 0 > i6 >>> 0) {
     i13 = 10;
    } else {
     if ((i9 + 3072 | 0) >>> 0 <= i6 >>> 0) {
      i13 = 10;
      break;
     }
     i12 = i8 | 0;
     HEAP32[i3 >> 2] = HEAP32[i12 >> 2];
     HEAP32[i12 >> 2] = i6;
    }
   } while (0);
   if ((i13 | 0) == 10) {
    i13 = 0;
    __ZN3WTF8fastFreeEPv(i6);
   }
   if ((i7 | 0) == 0) {
    break;
   } else {
    i6 = i7;
   }
  }
 }
 i6 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 if ((i6 | 0) != 0) {
  __ZdlPv(i6);
 }
 i6 = HEAP32[i1 + 168 >> 2] | 0;
 if ((i6 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i6);
 }
 i6 = HEAP32[i1 + 148 >> 2] | 0;
 if ((i6 | 0) != 0) {
  i5 = HEAP32[i1 + 152 >> 2] | 0;
  if ((i5 | 0) > 0) {
   i13 = 0;
   while (1) {
    i3 = HEAP32[i6 + (i13 << 2) >> 2] | 0;
    i8 = i3;
    do {
     if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
      i9 = i3 + 4 | 0;
      i12 = i9 | 0;
      i10 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
      if ((i10 | 0) != 0) {
       HEAP32[i12 >> 2] = i10;
       break;
      }
      i10 = i9 - 4 | 0;
      if ((i10 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 31](i10);
     }
    } while (0);
    i13 = i13 + 1 | 0;
    if ((i13 | 0) >= (i5 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i6);
 }
 __ZN3WTF5DequeINS_6OwnPtrIN7WebCore20IDBPendingDeleteCallEEELj0EE10destroyAllEv(i1 + 128 | 0);
 i6 = i1 + 136 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i6 >> 2] = 0;
  HEAP32[i1 + 140 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i5);
 }
 i5 = HEAP32[i1 + 124 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i6 = HEAP32[i5 + 4 >> 2] | 0;
  do {
   if ((i6 | 0) != 0) {
    i13 = i6 + 4 | 0;
    i3 = i13 | 0;
    i8 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
    if ((i8 | 0) != 0) {
     HEAP32[i3 >> 2] = i8;
     break;
    }
    i8 = i13 - 4 | 0;
    if ((i8 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 31](i8);
   }
  } while (0);
  i6 = HEAP32[i5 >> 2] | 0;
  do {
   if ((i6 | 0) != 0) {
    i8 = i6 + 4 | 0;
    i13 = i8 | 0;
    i3 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
    if ((i3 | 0) != 0) {
     HEAP32[i13 >> 2] = i3;
     break;
    }
    i3 = i8 - 4 | 0;
    if ((i3 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
   }
  } while (0);
  __ZdlPv(i5);
 }
 __ZN3WTF5DequeINS_6OwnPtrIN7WebCore18IDBPendingOpenCallEEELj0EE10destroyAllEv(i1 + 104 | 0);
 i5 = i1 + 112 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
  HEAP32[i1 + 116 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i6);
 }
 i6 = HEAP32[i1 + 84 >> 2] | 0;
 if ((i6 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i6);
 }
 i6 = HEAP32[i1 + 80 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i5 = i6 | 0;
   i3 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    __ZN7WebCore21IDBTransactionBackendD1Ev(i6);
    __ZN3WTF8fastFreeEPv(i6);
    break;
   } else {
    HEAP32[i5 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i1 + 76 >> 2] | 0;
 if ((i6 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
 }
 i6 = (HEAP32[i1 + 72 >> 2] | 0) + 4 | 0;
 i3 = i6 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 do {
  if ((i5 | 0) == 0) {
   i8 = i6 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 31](i8);
  } else {
   HEAP32[i3 >> 2] = i5;
  }
 } while (0);
 i5 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i2 = i5 + 4 | 0;
   i3 = i2 | 0;
   i6 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i3 >> 2] = i6;
    break;
   }
   i6 = i2 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
  }
 } while (0);
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i1 + 40 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i6 = HEAP32[i1 + 44 >> 2] | 0;
  if ((i6 | 0) > 0) {
   i4 = 0;
   while (1) {
    i2 = i5 + (i4 * 80 & -1) | 0;
    if (!((HEAP32[i2 >> 2] | 0) == (-1 | 0) & (HEAP32[i2 + 4 >> 2] | 0) == (-1 | 0))) {
     __ZN7WebCore22IDBObjectStoreMetadataD1Ev(i5 + (i4 * 80 & -1) + 8 | 0);
    }
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i6 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i5);
 }
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i5 | 0) == 0) {
  return;
 }
 i1 = i5 | 0;
 i6 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  return;
 } else {
  HEAP32[i1 >> 2] = i6;
  return;
 }
}
function __ZN7WebCore18IDBDatabaseBackendD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = i1 + 68 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 64 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 20 >> 2] & 15](i3, i4);
 i3 = HEAP32[i1 + 188 >> 2] | 0;
 i5 = i1 + 196 | 0;
 if ((i3 | 0) != 0) {
  i6 = i3;
  while (1) {
   i3 = i6 + 8 | 0;
   i7 = HEAP32[i3 >> 2] | 0;
   i8 = HEAP32[i5 >> 2] | 0;
   i9 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i10 = i9 + 4 | 0;
     i11 = i10 | 0;
     i12 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
     if ((i12 | 0) != 0) {
      HEAP32[i11 >> 2] = i12;
      break;
     }
     i12 = i10 - 4 | 0;
     if ((i12 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 31](i12);
    }
   } while (0);
   i9 = i8 + 8 | 0;
   do {
    if (i9 >>> 0 > i6 >>> 0) {
     i13 = 10;
    } else {
     if ((i9 + 3072 | 0) >>> 0 <= i6 >>> 0) {
      i13 = 10;
      break;
     }
     i12 = i8 | 0;
     HEAP32[i3 >> 2] = HEAP32[i12 >> 2];
     HEAP32[i12 >> 2] = i6;
    }
   } while (0);
   if ((i13 | 0) == 10) {
    i13 = 0;
    __ZN3WTF8fastFreeEPv(i6);
   }
   if ((i7 | 0) == 0) {
    break;
   } else {
    i6 = i7;
   }
  }
 }
 i6 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 if ((i6 | 0) != 0) {
  __ZdlPv(i6);
 }
 i6 = HEAP32[i1 + 168 >> 2] | 0;
 if ((i6 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i6);
 }
 i6 = HEAP32[i1 + 148 >> 2] | 0;
 if ((i6 | 0) != 0) {
  i5 = HEAP32[i1 + 152 >> 2] | 0;
  if ((i5 | 0) > 0) {
   i13 = 0;
   while (1) {
    i3 = HEAP32[i6 + (i13 << 2) >> 2] | 0;
    i8 = i3;
    do {
     if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
      i9 = i3 + 4 | 0;
      i12 = i9 | 0;
      i10 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
      if ((i10 | 0) != 0) {
       HEAP32[i12 >> 2] = i10;
       break;
      }
      i10 = i9 - 4 | 0;
      if ((i10 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 31](i10);
     }
    } while (0);
    i13 = i13 + 1 | 0;
    if ((i13 | 0) >= (i5 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i6);
 }
 __ZN3WTF5DequeINS_6OwnPtrIN7WebCore20IDBPendingDeleteCallEEELj0EE10destroyAllEv(i1 + 128 | 0);
 i6 = i1 + 136 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i6 >> 2] = 0;
  HEAP32[i1 + 140 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i5);
 }
 i5 = HEAP32[i1 + 124 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i6 = HEAP32[i5 + 4 >> 2] | 0;
  do {
   if ((i6 | 0) != 0) {
    i13 = i6 + 4 | 0;
    i3 = i13 | 0;
    i8 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
    if ((i8 | 0) != 0) {
     HEAP32[i3 >> 2] = i8;
     break;
    }
    i8 = i13 - 4 | 0;
    if ((i8 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 31](i8);
   }
  } while (0);
  i6 = HEAP32[i5 >> 2] | 0;
  do {
   if ((i6 | 0) != 0) {
    i8 = i6 + 4 | 0;
    i13 = i8 | 0;
    i3 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
    if ((i3 | 0) != 0) {
     HEAP32[i13 >> 2] = i3;
     break;
    }
    i3 = i8 - 4 | 0;
    if ((i3 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
   }
  } while (0);
  __ZdlPv(i5);
 }
 __ZN3WTF5DequeINS_6OwnPtrIN7WebCore18IDBPendingOpenCallEEELj0EE10destroyAllEv(i1 + 104 | 0);
 i5 = i1 + 112 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
  HEAP32[i1 + 116 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i6);
 }
 i6 = HEAP32[i1 + 84 >> 2] | 0;
 if ((i6 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i6);
 }
 i6 = HEAP32[i1 + 80 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i5 = i6 | 0;
   i3 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    __ZN7WebCore21IDBTransactionBackendD1Ev(i6);
    __ZN3WTF8fastFreeEPv(i6);
    break;
   } else {
    HEAP32[i5 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i1 + 76 >> 2] | 0;
 if ((i6 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
 }
 i6 = (HEAP32[i1 + 72 >> 2] | 0) + 4 | 0;
 i3 = i6 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 do {
  if ((i5 | 0) == 0) {
   i8 = i6 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 31](i8);
  } else {
   HEAP32[i3 >> 2] = i5;
  }
 } while (0);
 i5 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i2 = i5 + 4 | 0;
   i3 = i2 | 0;
   i6 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i3 >> 2] = i6;
    break;
   }
   i6 = i2 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
  }
 } while (0);
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i1 + 40 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i6 = HEAP32[i1 + 44 >> 2] | 0;
  if ((i6 | 0) > 0) {
   i4 = 0;
   while (1) {
    i2 = i5 + (i4 * 80 & -1) | 0;
    if (!((HEAP32[i2 >> 2] | 0) == (-1 | 0) & (HEAP32[i2 + 4 >> 2] | 0) == (-1 | 0))) {
     __ZN7WebCore22IDBObjectStoreMetadataD1Ev(i5 + (i4 * 80 & -1) + 8 | 0);
    }
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i6 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i5);
 }
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i5 | 0) == 0) {
  return;
 }
 i1 = i5 | 0;
 i6 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  return;
 } else {
  HEAP32[i1 >> 2] = i6;
  return;
 }
}
function __ZN7WebCore18IDBDatabaseBackend19processPendingCallsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 32 | 0;
 i7 = i1 + 124 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i9 = HEAP32[i8 >> 2] | 0;
   i10 = HEAP32[(HEAP32[i9 >> 2] | 0) + 56 >> 2] | 0;
   i11 = i3 | 0;
   HEAP32[i11 >> 2] = i1;
   i12 = i1 | 0;
   HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
   FUNCTION_TABLE_viii[i10 & 3](i9, i3, i1 + 8 | 0);
   i9 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i11 = i9 | 0;
     i10 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
     if ((i10 | 0) == 0) {
      __ZN7WebCore18IDBDatabaseBackendD2Ev(i9);
      __ZN3WTF8fastFreeEPv(i9);
      break;
     } else {
      HEAP32[i11 >> 2] = i10;
      break;
     }
    }
   } while (0);
   i9 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = 0;
   if ((i9 | 0) == 0) {
    break;
   }
   i10 = HEAP32[i9 + 4 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i11 = i10 + 4 | 0;
     i12 = i11 | 0;
     i13 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
     if ((i13 | 0) != 0) {
      HEAP32[i12 >> 2] = i13;
      break;
     }
     i13 = i11 - 4 | 0;
     if ((i13 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 31](i13);
    }
   } while (0);
   i10 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i13 = i10 + 4 | 0;
     i11 = i13 | 0;
     i12 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
     if ((i12 | 0) != 0) {
      HEAP32[i11 >> 2] = i12;
      break;
     }
     i12 = i13 - 4 | 0;
     if ((i12 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 31](i12);
    }
   } while (0);
   __ZdlPv(i9);
  }
 } while (0);
 i7 = i1 + 80 | 0;
 if ((HEAP32[i7 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 i3 = i1 + 128 | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i10 = i1 + 132 | 0;
 if ((i8 | 0) != (HEAP32[i10 >> 2] | 0)) {
  if ((HEAP32[i1 + 180 >> 2] | 0) != 0) {
   STACKTOP = i2;
   return;
  }
  i12 = i1 + 136 | 0;
  i13 = i1 + 140 | 0;
  i11 = i4 | 0;
  i14 = i1 + 148 | 0;
  i15 = i6 | 0;
  i16 = i8;
  while (1) {
   i8 = (HEAP32[i12 >> 2] | 0) + (i16 << 2) | 0;
   i17 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   i8 = HEAP32[i3 >> 2] | 0;
   i18 = HEAP32[(HEAP32[i12 >> 2] | 0) + (i8 << 2) >> 2] | 0;
   if ((i18 | 0) == 0) {
    i19 = i8;
   } else {
    i8 = HEAP32[i18 >> 2] | 0;
    do {
     if ((i8 | 0) != 0) {
      i20 = i8 + 4 | 0;
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
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i22 >> 2] | 0) + 4 >> 2] & 31](i22);
     }
    } while (0);
    __ZdlPv(i18);
    i19 = HEAP32[i3 >> 2] | 0;
   }
   HEAP32[i3 >> 2] = (i19 | 0) == ((HEAP32[i13 >> 2] | 0) - 1 | 0) ? 0 : i19 + 1 | 0;
   i8 = i17 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   HEAP32[i11 >> 2] = i9;
   if ((i9 | 0) != 0) {
    i22 = i9 + 4 | 0;
    HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
   }
   __ZN3WTF9HashTableINS_6RefPtrIN7WebCore12IDBCallbacksEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i5, i14, i4, i4);
   i22 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i22 | 0) != 0) {
     i9 = i22 + 4 | 0;
     i20 = i9 | 0;
     i21 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
     if ((i21 | 0) != 0) {
      HEAP32[i20 >> 2] = i21;
      break;
     }
     i21 = i9 - 4 | 0;
     if ((i21 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 31](i21);
    }
   } while (0);
   i22 = HEAP32[i8 >> 2] | 0;
   HEAP32[i15 >> 2] = i22;
   if ((i22 | 0) != 0) {
    i18 = i22 + 4 | 0;
    HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
   }
   __ZN7WebCore18IDBDatabaseBackend19deleteDatabaseAsyncEN3WTF10PassRefPtrINS_12IDBCallbacksEEE(i1, i6);
   i18 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i18 | 0) != 0) {
     i22 = i18 + 4 | 0;
     i21 = i22 | 0;
     i9 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
     if ((i9 | 0) != 0) {
      HEAP32[i21 >> 2] = i9;
      break;
     }
     i9 = i22 - 4 | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 31](i9);
    }
   } while (0);
   if ((i17 | 0) != 0) {
    i18 = HEAP32[i8 >> 2] | 0;
    do {
     if ((i18 | 0) != 0) {
      i9 = i18 + 4 | 0;
      i22 = i9 | 0;
      i21 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
      if ((i21 | 0) != 0) {
       HEAP32[i22 >> 2] = i21;
       break;
      }
      i21 = i9 - 4 | 0;
      if ((i21 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 31](i21);
     }
    } while (0);
    __ZdlPv(i17);
   }
   i16 = HEAP32[i3 >> 2] | 0;
   if ((i16 | 0) == (HEAP32[i10 >> 2] | 0)) {
    break;
   }
  }
 }
 if ((HEAP32[i1 + 160 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i7 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore18IDBDatabaseBackend23processPendingOpenCallsEb(i1, 1);
 STACKTOP = i2;
 return;
}
function __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore22IDBObjectStoreMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKxRKS3_EENS_18HashTableAddResultINS_17HashTableIteratorIxS4_S6_S8_SE_SB_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0;
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
 i11 = _i64Add(i12, i13, ~0, ~i12) | 0;
 i15 = tempRet0;
 i16 = (i11 >>> 22 | i15 << 10) ^ i11;
 i11 = (i15 >>> 22 | 0 << 10) ^ i15;
 i15 = _i64Add(i16, i11, ~(i16 << 13 | 0 >>> 19), ~(i11 << 13 | i16 >>> 19)) | 0;
 i16 = tempRet0;
 i11 = ___muldi3((i15 >>> 8 | i16 << 24) ^ i15, (i16 >>> 8 | 0 << 24) ^ i16, 9, 0) | 0;
 i16 = tempRet0;
 i15 = (i11 >>> 15 | i16 << 17) ^ i11;
 i11 = (i16 >>> 15 | 0 << 17) ^ i16;
 i16 = _i64Add(i15, i11, ~(i15 << 27 | 0 >>> 5), ~(i11 << 27 | i15 >>> 5)) | 0;
 i15 = (i16 >>> 31 | tempRet0 << 1) ^ i16;
 i16 = i15 & i10;
 i11 = i14 + (i16 * 80 & -1) | 0;
 i17 = i11 | 0;
 i18 = HEAP32[i17 >> 2] | 0;
 i19 = HEAP32[i17 + 4 >> 2] | 0;
 do {
  if ((i18 | 0) == 0 & (i19 | 0) == 0) {
   i20 = i11;
   i21 = 11;
  } else {
   i17 = (i15 >>> 23) + ~i15 | 0;
   i22 = i17 << 12 ^ i17;
   i17 = i22 >>> 7 ^ i22;
   i22 = i17 << 2 ^ i17;
   i17 = i22 >>> 20 ^ i22 | 1;
   i22 = 0;
   i23 = 0;
   i24 = i16;
   i25 = i11;
   i26 = i19;
   i27 = i18;
   while (1) {
    if ((i27 | 0) == (i12 | 0) & (i26 | 0) == (i13 | 0)) {
     i21 = 8;
     break;
    }
    i28 = (i27 | 0) == (-1 | 0) & (i26 | 0) == (-1 | 0) ? i25 : i23;
    i29 = (i22 | 0) == 0 ? i17 : i22;
    i30 = i29 + i24 & i10;
    i31 = i14 + (i30 * 80 & -1) | 0;
    i32 = i31 | 0;
    i33 = HEAP32[i32 >> 2] | 0;
    i34 = HEAP32[i32 + 4 >> 2] | 0;
    if ((i33 | 0) == 0 & (i34 | 0) == 0) {
     i21 = 10;
     break;
    } else {
     i22 = i29;
     i23 = i28;
     i24 = i30;
     i25 = i31;
     i26 = i34;
     i27 = i33;
    }
   }
   if ((i21 | 0) == 8) {
    i27 = i14 + ((HEAP32[i2 + 4 >> 2] | 0) * 80 & -1) | 0;
    i26 = i1;
    HEAP32[i26 >> 2] = i25;
    HEAP32[i26 + 4 >> 2] = i27;
    HEAP8[i1 + 8 | 0] = 0;
    STACKTOP = i5;
    return;
   } else if ((i21 | 0) == 10) {
    if ((i28 | 0) == 0) {
     i20 = i31;
     i21 = 11;
     break;
    }
    HEAP32[i7 >> 2] = 0;
    _memset(i7 + 16 | 0, 0, 20) | 0;
    _memset(i7 + 48 | 0, 0, 20) | 0;
    i27 = i6 | 0;
    HEAP32[i27 >> 2] = 0;
    HEAP32[i27 + 4 >> 2] = 0;
    i26 = i6 + 8 | 0;
    __ZN7WebCore22IDBObjectStoreMetadataC1ERKS0_(i26, i7);
    i24 = i8 | 0;
    i23 = HEAP32[i27 + 4 >> 2] | 0;
    HEAP32[i24 >> 2] = HEAP32[i27 >> 2];
    HEAP32[i24 + 4 >> 2] = i23;
    i23 = i8 + 8 | 0;
    __ZN7WebCore22IDBObjectStoreMetadataC1ERKS0_(i23, i26);
    __ZN7WebCore22IDBObjectStoreMetadataD1Ev(i26);
    __ZN7WebCore22IDBObjectStoreMetadataD1Ev(i7);
    i26 = i28 | 0;
    i27 = HEAP32[i24 + 4 >> 2] | 0;
    HEAP32[i26 >> 2] = HEAP32[i24 >> 2];
    HEAP32[i26 + 4 >> 2] = i27;
    __ZN7WebCore22IDBObjectStoreMetadataC1ERKS0_(i28 + 8 | 0, i23);
    __ZN7WebCore22IDBObjectStoreMetadataD1Ev(i23);
    i23 = i2 + 16 | 0;
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) - 1;
    i35 = i28;
    i36 = HEAP32[i3 + 4 >> 2] | 0;
    i37 = HEAP32[i3 >> 2] | 0;
    i38 = i23;
    break;
   }
  }
 } while (0);
 if ((i21 | 0) == 11) {
  i35 = i20;
  i36 = i13;
  i37 = i12;
  i38 = i2 + 16 | 0;
 }
 i12 = i35 | 0;
 HEAP32[i12 >> 2] = i37;
 HEAP32[i12 + 4 >> 2] = i36;
 __ZN7WebCore22IDBObjectStoreMetadataaSERKS0_(i35 + 8 | 0, i4) | 0;
 i4 = i2 + 12 | 0;
 i36 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i36;
 i4 = i2 + 4 | 0;
 i12 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i38 >> 2] | 0) + i36 << 1 | 0) < (i12 | 0)) {
  i39 = i35;
  i40 = i12;
 } else {
  if ((i12 | 0) == 0) {
   i41 = 8;
  } else {
   i38 = i12 << 1;
   i41 = (i36 * 6 & -1 | 0) < (i38 | 0) ? i12 : i38;
  }
  i38 = __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore22IDBObjectStoreMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E6rehashEiPS4_(i2, i41, i35) | 0;
  i39 = i38;
  i40 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i9 >> 2] | 0) + (i40 * 80 & -1) | 0;
 i40 = i1;
 HEAP32[i40 >> 2] = i39;
 HEAP32[i40 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 STACKTOP = i5;
 return;
}
function __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore22IDBObjectStoreMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKxRS3_EENS_18HashTableAddResultINS_17HashTableIteratorIxS4_S6_S8_SE_SB_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0;
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
 i11 = _i64Add(i12, i13, ~0, ~i12) | 0;
 i15 = tempRet0;
 i16 = (i11 >>> 22 | i15 << 10) ^ i11;
 i11 = (i15 >>> 22 | 0 << 10) ^ i15;
 i15 = _i64Add(i16, i11, ~(i16 << 13 | 0 >>> 19), ~(i11 << 13 | i16 >>> 19)) | 0;
 i16 = tempRet0;
 i11 = ___muldi3((i15 >>> 8 | i16 << 24) ^ i15, (i16 >>> 8 | 0 << 24) ^ i16, 9, 0) | 0;
 i16 = tempRet0;
 i15 = (i11 >>> 15 | i16 << 17) ^ i11;
 i11 = (i16 >>> 15 | 0 << 17) ^ i16;
 i16 = _i64Add(i15, i11, ~(i15 << 27 | 0 >>> 5), ~(i11 << 27 | i15 >>> 5)) | 0;
 i15 = (i16 >>> 31 | tempRet0 << 1) ^ i16;
 i16 = i15 & i10;
 i11 = i14 + (i16 * 80 & -1) | 0;
 i17 = i11 | 0;
 i18 = HEAP32[i17 >> 2] | 0;
 i19 = HEAP32[i17 + 4 >> 2] | 0;
 do {
  if ((i18 | 0) == 0 & (i19 | 0) == 0) {
   i20 = i11;
   i21 = 11;
  } else {
   i17 = (i15 >>> 23) + ~i15 | 0;
   i22 = i17 << 12 ^ i17;
   i17 = i22 >>> 7 ^ i22;
   i22 = i17 << 2 ^ i17;
   i17 = i22 >>> 20 ^ i22 | 1;
   i22 = 0;
   i23 = 0;
   i24 = i16;
   i25 = i11;
   i26 = i19;
   i27 = i18;
   while (1) {
    if ((i27 | 0) == (i12 | 0) & (i26 | 0) == (i13 | 0)) {
     i21 = 8;
     break;
    }
    i28 = (i27 | 0) == (-1 | 0) & (i26 | 0) == (-1 | 0) ? i25 : i23;
    i29 = (i22 | 0) == 0 ? i17 : i22;
    i30 = i29 + i24 & i10;
    i31 = i14 + (i30 * 80 & -1) | 0;
    i32 = i31 | 0;
    i33 = HEAP32[i32 >> 2] | 0;
    i34 = HEAP32[i32 + 4 >> 2] | 0;
    if ((i33 | 0) == 0 & (i34 | 0) == 0) {
     i21 = 10;
     break;
    } else {
     i22 = i29;
     i23 = i28;
     i24 = i30;
     i25 = i31;
     i26 = i34;
     i27 = i33;
    }
   }
   if ((i21 | 0) == 8) {
    i27 = i14 + ((HEAP32[i2 + 4 >> 2] | 0) * 80 & -1) | 0;
    i26 = i1;
    HEAP32[i26 >> 2] = i25;
    HEAP32[i26 + 4 >> 2] = i27;
    HEAP8[i1 + 8 | 0] = 0;
    STACKTOP = i5;
    return;
   } else if ((i21 | 0) == 10) {
    if ((i28 | 0) == 0) {
     i20 = i31;
     i21 = 11;
     break;
    }
    HEAP32[i7 >> 2] = 0;
    _memset(i7 + 16 | 0, 0, 20) | 0;
    _memset(i7 + 48 | 0, 0, 20) | 0;
    i27 = i6 | 0;
    HEAP32[i27 >> 2] = 0;
    HEAP32[i27 + 4 >> 2] = 0;
    i26 = i6 + 8 | 0;
    __ZN7WebCore22IDBObjectStoreMetadataC1ERKS0_(i26, i7);
    i24 = i8 | 0;
    i23 = HEAP32[i27 + 4 >> 2] | 0;
    HEAP32[i24 >> 2] = HEAP32[i27 >> 2];
    HEAP32[i24 + 4 >> 2] = i23;
    i23 = i8 + 8 | 0;
    __ZN7WebCore22IDBObjectStoreMetadataC1ERKS0_(i23, i26);
    __ZN7WebCore22IDBObjectStoreMetadataD1Ev(i26);
    __ZN7WebCore22IDBObjectStoreMetadataD1Ev(i7);
    i26 = i28 | 0;
    i27 = HEAP32[i24 + 4 >> 2] | 0;
    HEAP32[i26 >> 2] = HEAP32[i24 >> 2];
    HEAP32[i26 + 4 >> 2] = i27;
    __ZN7WebCore22IDBObjectStoreMetadataC1ERKS0_(i28 + 8 | 0, i23);
    __ZN7WebCore22IDBObjectStoreMetadataD1Ev(i23);
    i23 = i2 + 16 | 0;
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) - 1;
    i35 = i28;
    i36 = HEAP32[i3 + 4 >> 2] | 0;
    i37 = HEAP32[i3 >> 2] | 0;
    i38 = i23;
    break;
   }
  }
 } while (0);
 if ((i21 | 0) == 11) {
  i35 = i20;
  i36 = i13;
  i37 = i12;
  i38 = i2 + 16 | 0;
 }
 i12 = i35 | 0;
 HEAP32[i12 >> 2] = i37;
 HEAP32[i12 + 4 >> 2] = i36;
 __ZN7WebCore22IDBObjectStoreMetadataaSERKS0_(i35 + 8 | 0, i4) | 0;
 i4 = i2 + 12 | 0;
 i36 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i36;
 i4 = i2 + 4 | 0;
 i12 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i38 >> 2] | 0) + i36 << 1 | 0) < (i12 | 0)) {
  i39 = i35;
  i40 = i12;
 } else {
  if ((i12 | 0) == 0) {
   i41 = 8;
  } else {
   i38 = i12 << 1;
   i41 = (i36 * 6 & -1 | 0) < (i38 | 0) ? i12 : i38;
  }
  i38 = __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore22IDBObjectStoreMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E6rehashEiPS4_(i2, i41, i35) | 0;
  i39 = i38;
  i40 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i9 >> 2] | 0) + (i40 * 80 & -1) | 0;
 i40 = i1;
 HEAP32[i40 >> 2] = i39;
 HEAP32[i40 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 STACKTOP = i5;
 return;
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
function __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKxRKS3_EENS_18HashTableAddResultINS_17HashTableIteratorIxS4_S6_S8_SE_SB_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i6 = i5 | 0;
 i7 = i2 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i9 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i9 | 0) == 0) {
   i10 = 8;
  } else {
   i11 = i9 << 1;
   i10 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i11 | 0) ? i9 : i11;
  }
  __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E6rehashEiPS4_(i2, i10, 0) | 0;
  i12 = HEAP32[i7 >> 2] | 0;
 } else {
  i12 = i8;
 }
 i8 = HEAP32[i2 + 8 >> 2] | 0;
 i10 = HEAP32[i3 >> 2] | 0;
 i11 = HEAP32[i3 + 4 >> 2] | 0;
 i9 = _i64Add(i10, i11, ~0, ~i10) | 0;
 i13 = tempRet0;
 i14 = (i9 >>> 22 | i13 << 10) ^ i9;
 i9 = (i13 >>> 22 | 0 << 10) ^ i13;
 i13 = _i64Add(i14, i9, ~(i14 << 13 | 0 >>> 19), ~(i9 << 13 | i14 >>> 19)) | 0;
 i14 = tempRet0;
 i9 = ___muldi3((i13 >>> 8 | i14 << 24) ^ i13, (i14 >>> 8 | 0 << 24) ^ i14, 9, 0) | 0;
 i14 = tempRet0;
 i13 = (i9 >>> 15 | i14 << 17) ^ i9;
 i9 = (i14 >>> 15 | 0 << 17) ^ i14;
 i14 = _i64Add(i13, i9, ~(i13 << 27 | 0 >>> 5), ~(i9 << 27 | i13 >>> 5)) | 0;
 i13 = (i14 >>> 31 | tempRet0 << 1) ^ i14;
 i14 = i13 & i8;
 i9 = i12 + (i14 * 48 & -1) | 0;
 i15 = i9 | 0;
 i16 = HEAP32[i15 >> 2] | 0;
 i17 = HEAP32[i15 + 4 >> 2] | 0;
 do {
  if ((i16 | 0) == 0 & (i17 | 0) == 0) {
   i18 = i9;
   i19 = 11;
  } else {
   i15 = (i13 >>> 23) + ~i13 | 0;
   i20 = i15 << 12 ^ i15;
   i15 = i20 >>> 7 ^ i20;
   i20 = i15 << 2 ^ i15;
   i15 = i20 >>> 20 ^ i20 | 1;
   i20 = 0;
   i21 = 0;
   i22 = i14;
   i23 = i9;
   i24 = i17;
   i25 = i16;
   while (1) {
    if ((i25 | 0) == (i10 | 0) & (i24 | 0) == (i11 | 0)) {
     i19 = 8;
     break;
    }
    i26 = (i25 | 0) == (-1 | 0) & (i24 | 0) == (-1 | 0) ? i23 : i21;
    i27 = (i20 | 0) == 0 ? i15 : i20;
    i28 = i27 + i22 & i8;
    i29 = i12 + (i28 * 48 & -1) | 0;
    i30 = i29 | 0;
    i31 = HEAP32[i30 >> 2] | 0;
    i32 = HEAP32[i30 + 4 >> 2] | 0;
    if ((i31 | 0) == 0 & (i32 | 0) == 0) {
     i19 = 10;
     break;
    } else {
     i20 = i27;
     i21 = i26;
     i22 = i28;
     i23 = i29;
     i24 = i32;
     i25 = i31;
    }
   }
   if ((i19 | 0) == 10) {
    if ((i26 | 0) == 0) {
     i18 = i29;
     i19 = 11;
     break;
    }
    _memset(i6 + 16 | 0, 0, 16) | 0;
    i25 = i26 | 0;
    HEAP32[i25 >> 2] = 0;
    HEAP32[i25 + 4 >> 2] = 0;
    HEAP32[i6 >> 2] = 0;
    HEAP32[i26 + 8 >> 2] = 0;
    HEAP32[i26 + 24 >> 2] = 0;
    HEAP32[i6 + 20 >> 2] = 0;
    _memset(i26 + 28 | 0, 0, 16) | 0;
    HEAP32[i6 + 32 >> 2] = 0;
    HEAP32[i26 + 32 >> 2] = 0;
    HEAP32[i6 + 24 >> 2] = 0;
    HEAP32[i26 + 36 >> 2] = 0;
    HEAP32[i6 + 28 >> 2] = 0;
    HEAP8[i26 + 44 | 0] = 0;
    HEAP8[i26 + 45 | 0] = 0;
    __ZN7WebCore16IDBIndexMetadataD1Ev(i6);
    i25 = i2 + 16 | 0;
    HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) - 1;
    i33 = i26;
    i34 = HEAP32[i3 + 4 >> 2] | 0;
    i35 = HEAP32[i3 >> 2] | 0;
    i36 = i25;
    break;
   } else if ((i19 | 0) == 8) {
    i25 = i12 + ((HEAP32[i2 + 4 >> 2] | 0) * 48 & -1) | 0;
    i24 = i1;
    HEAP32[i24 >> 2] = i23;
    HEAP32[i24 + 4 >> 2] = i25;
    HEAP8[i1 + 8 | 0] = 0;
    STACKTOP = i5;
    return;
   }
  }
 } while (0);
 if ((i19 | 0) == 11) {
  i33 = i18;
  i34 = i11;
  i35 = i10;
  i36 = i2 + 16 | 0;
 }
 i10 = i33 | 0;
 HEAP32[i10 >> 2] = i35;
 HEAP32[i10 + 4 >> 2] = i34;
 __ZN7WebCore16IDBIndexMetadataaSERKS0_(i33 + 8 | 0, i4) | 0;
 i4 = i2 + 12 | 0;
 i34 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i34;
 i4 = i2 + 4 | 0;
 i10 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i36 >> 2] | 0) + i34 << 1 | 0) < (i10 | 0)) {
  i37 = i33;
  i38 = i10;
 } else {
  if ((i10 | 0) == 0) {
   i39 = 8;
  } else {
   i36 = i10 << 1;
   i39 = (i34 * 6 & -1 | 0) < (i36 | 0) ? i10 : i36;
  }
  i36 = __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E6rehashEiPS4_(i2, i39, i33) | 0;
  i37 = i36;
  i38 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i7 >> 2] | 0) + (i38 * 48 & -1) | 0;
 i38 = i1;
 HEAP32[i38 >> 2] = i37;
 HEAP32[i38 + 4 >> 2] = i4;
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
function __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E3addINS_22IdentityHashTranslatorIS8_EERKxRKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIxS4_S6_S8_SE_SB_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i6 = i5 | 0;
 i7 = i2 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i9 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i9 | 0) == 0) {
   i10 = 8;
  } else {
   i11 = i9 << 1;
   i10 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i11 | 0) ? i9 : i11;
  }
  __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E6rehashEiPS4_(i2, i10, 0) | 0;
  i12 = HEAP32[i7 >> 2] | 0;
 } else {
  i12 = i8;
 }
 i8 = HEAP32[i2 + 8 >> 2] | 0;
 i10 = HEAP32[i3 >> 2] | 0;
 i11 = HEAP32[i3 + 4 >> 2] | 0;
 i3 = _i64Add(i10, i11, ~0, ~i10) | 0;
 i9 = tempRet0;
 i13 = (i3 >>> 22 | i9 << 10) ^ i3;
 i3 = (i9 >>> 22 | 0 << 10) ^ i9;
 i9 = _i64Add(i13, i3, ~(i13 << 13 | 0 >>> 19), ~(i3 << 13 | i13 >>> 19)) | 0;
 i13 = tempRet0;
 i3 = ___muldi3((i9 >>> 8 | i13 << 24) ^ i9, (i13 >>> 8 | 0 << 24) ^ i13, 9, 0) | 0;
 i13 = tempRet0;
 i9 = (i3 >>> 15 | i13 << 17) ^ i3;
 i3 = (i13 >>> 15 | 0 << 17) ^ i13;
 i13 = _i64Add(i9, i3, ~(i9 << 27 | 0 >>> 5), ~(i3 << 27 | i9 >>> 5)) | 0;
 i9 = (i13 >>> 31 | tempRet0 << 1) ^ i13;
 i13 = i9 & i8;
 i3 = i12 + (i13 * 48 & -1) | 0;
 i14 = i3 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 i16 = HEAP32[i14 + 4 >> 2] | 0;
 do {
  if ((i15 | 0) == 0 & (i16 | 0) == 0) {
   i17 = i3;
   i18 = 11;
  } else {
   i14 = (i9 >>> 23) + ~i9 | 0;
   i19 = i14 << 12 ^ i14;
   i14 = i19 >>> 7 ^ i19;
   i19 = i14 << 2 ^ i14;
   i14 = i19 >>> 20 ^ i19 | 1;
   i19 = 0;
   i20 = 0;
   i21 = i13;
   i22 = i3;
   i23 = i16;
   i24 = i15;
   while (1) {
    if ((i24 | 0) == (i10 | 0) & (i23 | 0) == (i11 | 0)) {
     i18 = 8;
     break;
    }
    i25 = (i24 | 0) == (-1 | 0) & (i23 | 0) == (-1 | 0) ? i22 : i20;
    i26 = (i19 | 0) == 0 ? i14 : i19;
    i27 = i26 + i21 & i8;
    i28 = i12 + (i27 * 48 & -1) | 0;
    i29 = i28 | 0;
    i30 = HEAP32[i29 >> 2] | 0;
    i31 = HEAP32[i29 + 4 >> 2] | 0;
    if ((i30 | 0) == 0 & (i31 | 0) == 0) {
     i18 = 10;
     break;
    } else {
     i19 = i26;
     i20 = i25;
     i21 = i27;
     i22 = i28;
     i23 = i31;
     i24 = i30;
    }
   }
   if ((i18 | 0) == 8) {
    i24 = i12 + ((HEAP32[i2 + 4 >> 2] | 0) * 48 & -1) | 0;
    i23 = i1;
    HEAP32[i23 >> 2] = i22;
    HEAP32[i23 + 4 >> 2] = i24;
    HEAP8[i1 + 8 | 0] = 0;
    STACKTOP = i5;
    return;
   } else if ((i18 | 0) == 10) {
    if ((i25 | 0) == 0) {
     i17 = i28;
     i18 = 11;
     break;
    }
    _memset(i6 + 16 | 0, 0, 16) | 0;
    i24 = i25 | 0;
    HEAP32[i24 >> 2] = 0;
    HEAP32[i24 + 4 >> 2] = 0;
    HEAP32[i6 >> 2] = 0;
    HEAP32[i25 + 8 >> 2] = 0;
    HEAP32[i25 + 24 >> 2] = 0;
    HEAP32[i6 + 20 >> 2] = 0;
    _memset(i25 + 28 | 0, 0, 16) | 0;
    HEAP32[i6 + 32 >> 2] = 0;
    HEAP32[i25 + 32 >> 2] = 0;
    HEAP32[i6 + 24 >> 2] = 0;
    HEAP32[i25 + 36 >> 2] = 0;
    HEAP32[i6 + 28 >> 2] = 0;
    HEAP8[i25 + 44 | 0] = 0;
    HEAP8[i25 + 45 | 0] = 0;
    __ZN7WebCore16IDBIndexMetadataD1Ev(i6);
    i24 = i2 + 16 | 0;
    HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) - 1;
    i32 = i25;
    i33 = i24;
    break;
   }
  }
 } while (0);
 if ((i18 | 0) == 11) {
  i32 = i17;
  i33 = i2 + 16 | 0;
 }
 i17 = i4 | 0;
 i18 = HEAP32[i17 + 4 >> 2] | 0;
 i25 = i32 | 0;
 HEAP32[i25 >> 2] = HEAP32[i17 >> 2];
 HEAP32[i25 + 4 >> 2] = i18;
 __ZN7WebCore16IDBIndexMetadataaSERKS0_(i32 + 8 | 0, i4 + 8 | 0) | 0;
 i4 = i2 + 12 | 0;
 i18 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i18;
 i4 = i2 + 4 | 0;
 i25 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i33 >> 2] | 0) + i18 << 1 | 0) < (i25 | 0)) {
  i34 = i32;
  i35 = i25;
 } else {
  if ((i25 | 0) == 0) {
   i36 = 8;
  } else {
   i33 = i25 << 1;
   i36 = (i18 * 6 & -1 | 0) < (i33 | 0) ? i25 : i33;
  }
  i33 = __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E6rehashEiPS4_(i2, i36, i32) | 0;
  i34 = i33;
  i35 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i7 >> 2] | 0) + (i35 * 48 & -1) | 0;
 i35 = i1;
 HEAP32[i35 >> 2] = i34;
 HEAP32[i35 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore18IDBDatabaseBackend17createObjectStoreExxRKN3WTF6StringERKNS_10IDBKeyPathEb(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i10 = i9 | 0;
 i11 = i9 + 16 | 0;
 i12 = HEAP32[i1 + 92 >> 2] | 0;
 i13 = HEAP32[i1 + 84 >> 2] | 0;
 i14 = _i64Add(~0, ~i2, i2, i3) | 0;
 i15 = tempRet0;
 i16 = (i14 >>> 22 | i15 << 10) ^ i14;
 i14 = (i15 >>> 22 | 0 << 10) ^ i15;
 i15 = _i64Add(i16, i14, ~(i16 << 13 | 0 >>> 19), ~(i14 << 13 | i16 >>> 19)) | 0;
 i16 = tempRet0;
 i14 = ___muldi3((i15 >>> 8 | i16 << 24) ^ i15, (i16 >>> 8 | 0 << 24) ^ i16, 9, 0) | 0;
 i16 = tempRet0;
 i15 = (i14 >>> 15 | i16 << 17) ^ i14;
 i14 = (i16 >>> 15 | 0 << 17) ^ i16;
 i16 = _i64Add(i15, i14, ~(i15 << 27 | 0 >>> 5), ~(i14 << 27 | i15 >>> 5)) | 0;
 i15 = (i16 >>> 31 | tempRet0 << 1) ^ i16;
 if ((i13 | 0) == 0) {
  STACKTOP = i9;
  return;
 }
 i16 = i12 & i15;
 i14 = i13 + (i16 << 4) | 0;
 i17 = i14 | 0;
 i18 = HEAP32[i17 >> 2] | 0;
 i19 = HEAP32[i17 + 4 >> 2] | 0;
 L4 : do {
  if ((i18 | 0) == (i2 | 0) & (i19 | 0) == (i3 | 0)) {
   i20 = i14;
  } else {
   i17 = (i15 >>> 23) + ~i15 | 0;
   i21 = i17 << 12 ^ i17;
   i17 = i21 >>> 7 ^ i21;
   i21 = i17 << 2 ^ i17;
   i17 = i21 >>> 20 ^ i21 | 1;
   i21 = 0;
   i22 = i16;
   i23 = i19;
   i24 = i18;
   while (1) {
    if ((i24 | 0) == 0 & (i23 | 0) == 0) {
     break;
    }
    i25 = (i21 | 0) == 0 ? i17 : i21;
    i26 = i25 + i22 & i12;
    i27 = i13 + (i26 << 4) | 0;
    i28 = i27 | 0;
    i29 = HEAP32[i28 >> 2] | 0;
    i30 = HEAP32[i28 + 4 >> 2] | 0;
    if ((i29 | 0) == (i2 | 0) & (i30 | 0) == (i3 | 0)) {
     i20 = i27;
     break L4;
    } else {
     i21 = i25;
     i22 = i26;
     i23 = i30;
     i24 = i29;
    }
   }
   STACKTOP = i9;
   return;
  }
 } while (0);
 if ((i20 | 0) == 0) {
  STACKTOP = i9;
  return;
 }
 i3 = HEAP32[i20 + 8 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i9;
  return;
 }
 i20 = HEAP32[i6 >> 2] | 0;
 HEAP32[i11 >> 2] = i20;
 if ((i20 | 0) != 0) {
  i6 = i20 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 i6 = i11 + 8 | 0;
 HEAP32[i6 >> 2] = i4;
 HEAP32[i6 + 4 >> 2] = i5;
 HEAP32[i11 + 16 >> 2] = HEAP32[i7 >> 2];
 i20 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i11 + 20 >> 2] = i20;
 if ((i20 | 0) != 0) {
  i2 = i20 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = HEAP32[i7 + 12 >> 2] | 0;
 i20 = i7 + 16 | 0;
 i13 = HEAP32[i20 >> 2] | 0;
 i12 = i11 + 24 | 0;
 HEAP32[i12 >> 2] = 0;
 i18 = i11 + 28 | 0;
 HEAP32[i18 >> 2] = 0;
 HEAP32[i11 + 32 >> 2] = i13;
 do {
  if ((i2 | 0) != 0) {
   if (i2 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   }
   i13 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 2) | 0;
   HEAP32[i18 >> 2] = i13 >>> 2;
   i19 = __ZN3WTF10fastMallocEj(i13) | 0;
   i13 = i19;
   HEAP32[i12 >> 2] = i13;
   if ((i19 | 0) == 0) {
    break;
   }
   i19 = HEAP32[i7 + 8 >> 2] | 0;
   i16 = HEAP32[i20 >> 2] | 0;
   i15 = i19 + (i16 << 2) | 0;
   if ((i16 | 0) == 0) {
    break;
   } else {
    i31 = i19;
    i32 = i13;
   }
   while (1) {
    i13 = HEAP32[i31 >> 2] | 0;
    HEAP32[i32 >> 2] = i13;
    if ((i13 | 0) != 0) {
     i19 = i13 | 0;
     HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 2;
    }
    i19 = i31 + 4 | 0;
    if ((i19 | 0) == (i15 | 0)) {
     break;
    } else {
     i31 = i19;
     i32 = i32 + 4 | 0;
    }
   }
  }
 } while (0);
 HEAP8[i11 + 36 | 0] = i8 & 1;
 i8 = i11 + 40 | 0;
 HEAP32[i8 >> 2] = 30;
 HEAP32[i8 + 4 >> 2] = 0;
 _memset(i11 + 48 | 0, 0, 20) | 0;
 __ZN7WebCore21IDBTransactionBackend34scheduleCreateObjectStoreOperationERKNS_22IDBObjectStoreMetadataE(i3, i11);
 if (!((i4 | 0) == (-1 | 0) & (i5 | 0) == (-1 | 0))) {
  i3 = i1 + 32 | 0;
  HEAP32[i3 >> 2] = i4;
  HEAP32[i3 + 4 >> 2] = i5;
 }
 __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore22IDBObjectStoreMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKxRKS3_EENS_18HashTableAddResultINS_17HashTableIteratorIxS4_S6_S8_SE_SB_EEEEOT0_OT1_(i10, i1 + 40 | 0, i6, i11);
 if ((HEAP8[i10 + 8 | 0] & 1) == 0) {
  __ZN7WebCore22IDBObjectStoreMetadataaSERKS0_((HEAP32[i10 >> 2] | 0) + 8 | 0, i11) | 0;
 }
 __ZN7WebCore22IDBObjectStoreMetadataD1Ev(i11);
 STACKTOP = i9;
 return;
}
function __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E6rehashEiPS4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i1 + 4 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i1 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 HEAP32[i7 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i2 - 1;
 i7 = __ZN3WTF10fastMallocEj(i2 * 48 & -1) | 0;
 if ((i2 | 0) > 0) {
  i11 = i6 | 0;
  i12 = i6 + 16 | 0;
  i13 = i6 + 20 | 0;
  i14 = i6 + 32 | 0;
  i15 = i6 + 24 | 0;
  i16 = i6 + 28 | 0;
  i17 = 0;
  while (1) {
   _memset(i12 | 0, 0, 16) | 0;
   i18 = i7 + (i17 * 48 & -1) | 0;
   HEAP32[i18 >> 2] = 0;
   HEAP32[i18 + 4 >> 2] = 0;
   HEAP32[i11 >> 2] = 0;
   HEAP32[i7 + (i17 * 48 & -1) + 8 >> 2] = 0;
   HEAP32[i7 + (i17 * 48 & -1) + 24 >> 2] = 0;
   HEAP32[i13 >> 2] = 0;
   _memset(i7 + (i17 * 48 & -1) + 28 | 0, 0, 16) | 0;
   HEAP32[i14 >> 2] = 0;
   HEAP32[i7 + (i17 * 48 & -1) + 32 >> 2] = 0;
   HEAP32[i15 >> 2] = 0;
   HEAP32[i7 + (i17 * 48 & -1) + 36 >> 2] = 0;
   HEAP32[i16 >> 2] = 0;
   HEAP8[i7 + (i17 * 48 & -1) + 44 | 0] = 0;
   HEAP8[i7 + (i17 * 48 & -1) + 45 | 0] = 0;
   __ZN7WebCore16IDBIndexMetadataD1Ev(i6);
   i17 = i17 + 1 | 0;
   if ((i17 | 0) >= (i2 | 0)) {
    break;
   }
  }
 }
 HEAP32[i9 >> 2] = i7;
 if ((i8 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i19 = 0;
  i20 = i10;
  __ZN3WTF8fastFreeEPv(i20);
  STACKTOP = i4;
  return i19 | 0;
 }
 i7 = i5 | 0;
 i9 = 0;
 i2 = 0;
 while (1) {
  i17 = i10 + (i9 * 48 & -1) | 0;
  i6 = i17 | 0;
  i16 = HEAP32[i6 >> 2] | 0;
  i15 = HEAP32[i6 + 4 >> 2] | 0;
  if ((i16 | 0) == (-1 | 0) & (i15 | 0) == (-1 | 0) | (i16 | 0) == 0 & (i15 | 0) == 0) {
   i21 = i2;
  } else {
   __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E16lookupForWritingINS_22IdentityHashTranslatorIS8_EExEENSt3__14pairIPS4_bEERKT0_(i5, i1, i6);
   i15 = HEAP32[i7 >> 2] | 0;
   __ZN7WebCore16IDBIndexMetadataD1Ev(i15 + 8 | 0);
   i16 = i15 | 0;
   i14 = HEAP32[i6 + 4 >> 2] | 0;
   HEAP32[i16 >> 2] = HEAP32[i6 >> 2];
   HEAP32[i16 + 4 >> 2] = i14;
   i14 = i10 + (i9 * 48 & -1) + 8 | 0;
   i16 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = 0;
   HEAP32[i15 + 8 >> 2] = i16;
   i16 = i15 + 16 | 0;
   i14 = i10 + (i9 * 48 & -1) + 16 | 0;
   i6 = HEAP32[i14 + 4 >> 2] | 0;
   HEAP32[i16 >> 2] = HEAP32[i14 >> 2];
   HEAP32[i16 + 4 >> 2] = i6;
   HEAP32[i15 + 24 >> 2] = HEAP32[i10 + (i9 * 48 & -1) + 24 >> 2];
   i6 = i10 + (i9 * 48 & -1) + 28 | 0;
   i16 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = 0;
   HEAP32[i15 + 28 >> 2] = i16;
   i16 = i15 + 32 | 0;
   HEAP32[i16 >> 2] = 0;
   i6 = i15 + 36 | 0;
   HEAP32[i6 >> 2] = 0;
   i14 = i15 + 40 | 0;
   HEAP32[i14 >> 2] = 0;
   i13 = i10 + (i9 * 48 & -1) + 40 | 0;
   HEAP32[i14 >> 2] = HEAP32[i13 >> 2];
   HEAP32[i13 >> 2] = 0;
   i13 = i10 + (i9 * 48 & -1) + 32 | 0;
   i14 = HEAP32[i16 >> 2] | 0;
   HEAP32[i16 >> 2] = HEAP32[i13 >> 2];
   HEAP32[i13 >> 2] = i14;
   i14 = i10 + (i9 * 48 & -1) + 36 | 0;
   i13 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = HEAP32[i14 >> 2];
   HEAP32[i14 >> 2] = i13;
   HEAP8[i15 + 44 | 0] = HEAP8[i10 + (i9 * 48 & -1) + 44 | 0] & 1;
   HEAP8[i15 + 45 | 0] = HEAP8[i10 + (i9 * 48 & -1) + 45 | 0] & 1;
   i21 = (i17 | 0) == (i3 | 0) ? i15 : i2;
  }
  i15 = i9 + 1 | 0;
  if ((i15 | 0) == (i8 | 0)) {
   break;
  } else {
   i9 = i15;
   i2 = i21;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i8 | 0) > 0) {
  i22 = 0;
 } else {
  i19 = i21;
  i20 = i10;
  __ZN3WTF8fastFreeEPv(i20);
  STACKTOP = i4;
  return i19 | 0;
 }
 while (1) {
  i1 = i10 + (i22 * 48 & -1) | 0;
  if (!((HEAP32[i1 >> 2] | 0) == (-1 | 0) & (HEAP32[i1 + 4 >> 2] | 0) == (-1 | 0))) {
   __ZN7WebCore16IDBIndexMetadataD1Ev(i10 + (i22 * 48 & -1) + 8 | 0);
  }
  i1 = i22 + 1 | 0;
  if ((i1 | 0) < (i8 | 0)) {
   i22 = i1;
  } else {
   i19 = i21;
   break;
  }
 }
 i20 = i10;
 __ZN3WTF8fastFreeEPv(i20);
 STACKTOP = i4;
 return i19 | 0;
}
function __ZN7WebCore18IDBDatabaseBackend11createIndexExxxRKN3WTF6StringERKNS_10IDBKeyPathEbb(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11) {
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
 var i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 120 | 0;
 i13 = i12 | 0;
 i14 = i12 + 8 | 0;
 i15 = i12 + 80 | 0;
 HEAP32[i13 >> 2] = i4;
 HEAP32[i13 + 4 >> 2] = i5;
 i5 = HEAP32[i1 + 92 >> 2] | 0;
 i4 = HEAP32[i1 + 84 >> 2] | 0;
 i16 = _i64Add(~0, ~i2, i2, i3) | 0;
 i17 = tempRet0;
 i18 = (i16 >>> 22 | i17 << 10) ^ i16;
 i16 = (i17 >>> 22 | 0 << 10) ^ i17;
 i17 = _i64Add(i18, i16, ~(i18 << 13 | 0 >>> 19), ~(i16 << 13 | i18 >>> 19)) | 0;
 i18 = tempRet0;
 i16 = ___muldi3((i17 >>> 8 | i18 << 24) ^ i17, (i18 >>> 8 | 0 << 24) ^ i18, 9, 0) | 0;
 i18 = tempRet0;
 i17 = (i16 >>> 15 | i18 << 17) ^ i16;
 i16 = (i18 >>> 15 | 0 << 17) ^ i18;
 i18 = _i64Add(i17, i16, ~(i17 << 27 | 0 >>> 5), ~(i16 << 27 | i17 >>> 5)) | 0;
 i17 = (i18 >>> 31 | tempRet0 << 1) ^ i18;
 if ((i4 | 0) == 0) {
  STACKTOP = i12;
  return;
 }
 i18 = i5 & i17;
 i16 = i4 + (i18 << 4) | 0;
 i19 = i16 | 0;
 i20 = HEAP32[i19 >> 2] | 0;
 i21 = HEAP32[i19 + 4 >> 2] | 0;
 L4 : do {
  if ((i20 | 0) == (i2 | 0) & (i21 | 0) == (i3 | 0)) {
   i22 = i16;
  } else {
   i19 = (i17 >>> 23) + ~i17 | 0;
   i23 = i19 << 12 ^ i19;
   i19 = i23 >>> 7 ^ i23;
   i23 = i19 << 2 ^ i19;
   i19 = i23 >>> 20 ^ i23 | 1;
   i23 = 0;
   i24 = i18;
   i25 = i21;
   i26 = i20;
   while (1) {
    if ((i26 | 0) == 0 & (i25 | 0) == 0) {
     break;
    }
    i27 = (i23 | 0) == 0 ? i19 : i23;
    i28 = i27 + i24 & i5;
    i29 = i4 + (i28 << 4) | 0;
    i30 = i29 | 0;
    i31 = HEAP32[i30 >> 2] | 0;
    i32 = HEAP32[i30 + 4 >> 2] | 0;
    if ((i31 | 0) == (i2 | 0) & (i32 | 0) == (i3 | 0)) {
     i22 = i29;
     break L4;
    } else {
     i23 = i27;
     i24 = i28;
     i25 = i32;
     i26 = i31;
    }
   }
   STACKTOP = i12;
   return;
  }
 } while (0);
 if ((i22 | 0) == 0) {
  STACKTOP = i12;
  return;
 }
 i3 = HEAP32[i22 + 8 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i12;
  return;
 }
 __ZNK3WTF7HashMapIxN7WebCore22IDBObjectStoreMetadataENS_7IntHashIyEENS_10HashTraitsIxEENS5_IS2_EEE3getERKx(i14, i1 + 40 | 0, i13);
 i22 = HEAP32[i8 >> 2] | 0;
 HEAP32[i15 >> 2] = i22;
 if ((i22 | 0) != 0) {
  i8 = i22 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = i15 + 8 | 0;
 HEAP32[i8 >> 2] = i6;
 HEAP32[i8 + 4 >> 2] = i7;
 HEAP32[i15 + 16 >> 2] = HEAP32[i9 >> 2];
 i8 = HEAP32[i9 + 4 >> 2] | 0;
 HEAP32[i15 + 20 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i22 = i8 | 0;
  HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 2;
 }
 i22 = HEAP32[i9 + 12 >> 2] | 0;
 i8 = i9 + 16 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 i4 = i15 + 24 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = i15 + 28 | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i15 + 32 >> 2] = i2;
 do {
  if ((i22 | 0) != 0) {
   if (i22 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   }
   i2 = __ZN3WTF18fastMallocGoodSizeEj(i22 << 2) | 0;
   HEAP32[i5 >> 2] = i2 >>> 2;
   i20 = __ZN3WTF10fastMallocEj(i2) | 0;
   i2 = i20;
   HEAP32[i4 >> 2] = i2;
   if ((i20 | 0) == 0) {
    break;
   }
   i20 = HEAP32[i9 + 8 >> 2] | 0;
   i21 = HEAP32[i8 >> 2] | 0;
   i18 = i20 + (i21 << 2) | 0;
   if ((i21 | 0) == 0) {
    break;
   } else {
    i33 = i20;
    i34 = i2;
   }
   while (1) {
    i2 = HEAP32[i33 >> 2] | 0;
    HEAP32[i34 >> 2] = i2;
    if ((i2 | 0) != 0) {
     i20 = i2 | 0;
     HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 2;
    }
    i20 = i33 + 4 | 0;
    if ((i20 | 0) == (i18 | 0)) {
     break;
    } else {
     i33 = i20;
     i34 = i34 + 4 | 0;
    }
   }
  }
 } while (0);
 HEAP8[i15 + 36 | 0] = i10 & 1;
 HEAP8[i15 + 37 | 0] = i11 & 1;
 i11 = HEAP32[i13 >> 2] | 0;
 i10 = HEAP32[i13 + 4 >> 2] | 0;
 __ZN7WebCore21IDBTransactionBackend28scheduleCreateIndexOperationExRKNS_16IDBIndexMetadataE(i3, i11, i10, i15);
 __ZN7WebCore18IDBDatabaseBackend8addIndexExRKNS_16IDBIndexMetadataEx(i1, i11, i10, i15, i6, i7);
 __ZN7WebCore16IDBIndexMetadataD1Ev(i15);
 __ZN7WebCore22IDBObjectStoreMetadataD1Ev(i14);
 STACKTOP = i12;
 return;
}
function __ZN7WebCore18IDBDatabaseBackend3putExxN3WTF10PassRefPtrINS_12SharedBufferEEENS2_INS_6IDBKeyEEENS0_7PutModeENS2_INS_12IDBCallbacksEEERKNS1_6VectorIxLj0ENS1_15CrashOnOverflowEEERKNSA_INSA_INS1_6RefPtrIS5_EELj0ESB_EELj0ESB_EE(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11) {
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
 var i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
 i13 = i12 | 0;
 i14 = i12 + 8 | 0;
 i15 = i12 + 80 | 0;
 i16 = i12 + 88 | 0;
 i17 = i12 + 96 | 0;
 HEAP32[i13 >> 2] = i4;
 HEAP32[i13 + 4 >> 2] = i5;
 i5 = HEAP32[i1 + 92 >> 2] | 0;
 i4 = HEAP32[i1 + 84 >> 2] | 0;
 i18 = _i64Add(~0, ~i2, i2, i3) | 0;
 i19 = tempRet0;
 i20 = (i18 >>> 22 | i19 << 10) ^ i18;
 i18 = (i19 >>> 22 | 0 << 10) ^ i19;
 i19 = _i64Add(i20, i18, ~(i20 << 13 | 0 >>> 19), ~(i18 << 13 | i20 >>> 19)) | 0;
 i20 = tempRet0;
 i18 = ___muldi3((i19 >>> 8 | i20 << 24) ^ i19, (i20 >>> 8 | 0 << 24) ^ i20, 9, 0) | 0;
 i20 = tempRet0;
 i19 = (i18 >>> 15 | i20 << 17) ^ i18;
 i18 = (i20 >>> 15 | 0 << 17) ^ i20;
 i20 = _i64Add(i19, i18, ~(i19 << 27 | 0 >>> 5), ~(i18 << 27 | i19 >>> 5)) | 0;
 i19 = (i20 >>> 31 | tempRet0 << 1) ^ i20;
 if ((i4 | 0) == 0) {
  STACKTOP = i12;
  return;
 }
 i20 = i5 & i19;
 i18 = i4 + (i20 << 4) | 0;
 i21 = i18 | 0;
 i22 = HEAP32[i21 >> 2] | 0;
 i23 = HEAP32[i21 + 4 >> 2] | 0;
 L4 : do {
  if ((i22 | 0) == (i2 | 0) & (i23 | 0) == (i3 | 0)) {
   i24 = i18;
  } else {
   i21 = (i19 >>> 23) + ~i19 | 0;
   i25 = i21 << 12 ^ i21;
   i21 = i25 >>> 7 ^ i25;
   i25 = i21 << 2 ^ i21;
   i21 = i25 >>> 20 ^ i25 | 1;
   i25 = 0;
   i26 = i20;
   i27 = i23;
   i28 = i22;
   while (1) {
    if ((i28 | 0) == 0 & (i27 | 0) == 0) {
     break;
    }
    i29 = (i25 | 0) == 0 ? i21 : i25;
    i30 = i29 + i26 & i5;
    i31 = i4 + (i30 << 4) | 0;
    i32 = i31 | 0;
    i33 = HEAP32[i32 >> 2] | 0;
    i34 = HEAP32[i32 + 4 >> 2] | 0;
    if ((i33 | 0) == (i2 | 0) & (i34 | 0) == (i3 | 0)) {
     i24 = i31;
     break L4;
    } else {
     i25 = i29;
     i26 = i30;
     i27 = i34;
     i28 = i33;
    }
   }
   STACKTOP = i12;
   return;
  }
 } while (0);
 if ((i24 | 0) == 0) {
  STACKTOP = i12;
  return;
 }
 i3 = HEAP32[i24 + 8 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i12;
  return;
 }
 __ZNK3WTF7HashMapIxN7WebCore22IDBObjectStoreMetadataENS_7IntHashIyEENS_10HashTraitsIxEENS5_IS2_EEE3getERKx(i14, i1 + 40 | 0, i13);
 i13 = i15 | 0;
 i1 = i6 | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i13 >> 2] = i6;
 i6 = i16 | 0;
 i1 = i7 | 0;
 i7 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i6 >> 2] = i7;
 i7 = i17 | 0;
 i1 = i9 | 0;
 i9 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i7 >> 2] = i9;
 __ZN7WebCore21IDBTransactionBackend20schedulePutOperationERKNS_22IDBObjectStoreMetadataEN3WTF10PassRefPtrINS_12SharedBufferEEENS5_INS_6IDBKeyEEENS_18IDBDatabaseBackend7PutModeENS5_INS_12IDBCallbacksEEERKNS4_6VectorIxLj0ENS4_15CrashOnOverflowEEERKNSE_INSE_INS4_6RefPtrIS8_EELj0ESF_EELj0ESF_EE(i3, i14, i15, i16, i8, i17, i10, i11);
 i11 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i7 = i11 + 4 | 0;
   i10 = i7 | 0;
   i17 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i17 | 0) != 0) {
    HEAP32[i10 >> 2] = i17;
    break;
   }
   i17 = i7 - 4 | 0;
   if ((i17 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] & 31](i17);
  }
 } while (0);
 i11 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i6 = i11 | 0;
   i17 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i17 | 0) == 0) {
    __ZN7WebCore6IDBKeyD1Ev(i11);
    __ZN3WTF8fastFreeEPv(i11);
    break;
   } else {
    HEAP32[i6 >> 2] = i17;
    break;
   }
  }
 } while (0);
 i11 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i13 = i11 | 0;
   i17 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i17 | 0) == 0) {
    __ZN7WebCore12SharedBufferD1Ev(i11);
    __ZN3WTF8fastFreeEPv(i11);
    break;
   } else {
    HEAP32[i13 >> 2] = i17;
    break;
   }
  }
 } while (0);
 __ZN7WebCore22IDBObjectStoreMetadataD1Ev(i14);
 STACKTOP = i12;
 return;
}
function __ZN7WebCore18IDBDatabaseBackend12setIndexKeysExxN3WTF10PassRefPtrINS_6IDBKeyEEERKNS1_6VectorIxLj0ENS1_15CrashOnOverflowEEERKNS5_INS5_INS1_6RefPtrIS3_EELj0ES6_EELj0ES6_EE(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
 i10 = i9 | 0;
 i11 = i9 + 8 | 0;
 i12 = i9 + 80 | 0;
 HEAP32[i10 >> 2] = i4;
 HEAP32[i10 + 4 >> 2] = i5;
 i13 = HEAP32[i1 + 92 >> 2] | 0;
 i14 = HEAP32[i1 + 84 >> 2] | 0;
 i15 = _i64Add(~0, ~i2, i2, i3) | 0;
 i16 = tempRet0;
 i17 = (i15 >>> 22 | i16 << 10) ^ i15;
 i15 = (i16 >>> 22 | 0 << 10) ^ i16;
 i16 = _i64Add(i17, i15, ~(i17 << 13 | 0 >>> 19), ~(i15 << 13 | i17 >>> 19)) | 0;
 i17 = tempRet0;
 i15 = ___muldi3((i16 >>> 8 | i17 << 24) ^ i16, (i17 >>> 8 | 0 << 24) ^ i17, 9, 0) | 0;
 i17 = tempRet0;
 i16 = (i15 >>> 15 | i17 << 17) ^ i15;
 i15 = (i17 >>> 15 | 0 << 17) ^ i17;
 i17 = _i64Add(i16, i15, ~(i16 << 27 | 0 >>> 5), ~(i15 << 27 | i16 >>> 5)) | 0;
 i16 = (i17 >>> 31 | tempRet0 << 1) ^ i17;
 if ((i14 | 0) == 0) {
  STACKTOP = i9;
  return;
 }
 i17 = i13 & i16;
 i15 = i14 + (i17 << 4) | 0;
 i18 = i15 | 0;
 i19 = HEAP32[i18 >> 2] | 0;
 i20 = HEAP32[i18 + 4 >> 2] | 0;
 L4 : do {
  if ((i19 | 0) == (i2 | 0) & (i20 | 0) == (i3 | 0)) {
   i21 = i15;
  } else {
   i18 = (i16 >>> 23) + ~i16 | 0;
   i22 = i18 << 12 ^ i18;
   i18 = i22 >>> 7 ^ i22;
   i22 = i18 << 2 ^ i18;
   i18 = i22 >>> 20 ^ i22 | 1;
   i22 = 0;
   i23 = i17;
   i24 = i20;
   i25 = i19;
   while (1) {
    if ((i25 | 0) == 0 & (i24 | 0) == 0) {
     break;
    }
    i26 = (i22 | 0) == 0 ? i18 : i22;
    i27 = i26 + i23 & i13;
    i28 = i14 + (i27 << 4) | 0;
    i29 = i28 | 0;
    i30 = HEAP32[i29 >> 2] | 0;
    i31 = HEAP32[i29 + 4 >> 2] | 0;
    if ((i30 | 0) == (i2 | 0) & (i31 | 0) == (i3 | 0)) {
     i21 = i28;
     break L4;
    } else {
     i22 = i26;
     i23 = i27;
     i24 = i31;
     i25 = i30;
    }
   }
   STACKTOP = i9;
   return;
  }
 } while (0);
 if ((i21 | 0) == 0) {
  STACKTOP = i9;
  return;
 }
 i14 = HEAP32[i21 + 8 >> 2] | 0;
 if ((i14 | 0) == 0) {
  STACKTOP = i9;
  return;
 }
 i21 = i14 | 0;
 HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
 i13 = i6 | 0;
 i6 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 i13 = HEAP32[i1 + 72 >> 2] | 0;
 i19 = HEAP32[(HEAP32[i13 >> 2] | 0) + 44 >> 2] | 0;
 i20 = i1 + 16 | 0;
 i17 = HEAP32[i20 >> 2] | 0;
 i16 = HEAP32[i20 + 4 >> 2] | 0;
 __ZNK3WTF7HashMapIxN7WebCore22IDBObjectStoreMetadataENS_7IntHashIyEENS_10HashTraitsIxEENS5_IS2_EEE3getERKx(i11, i1 + 40 | 0, i10);
 HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
 i10 = i12 + 16 | 0;
 HEAP32[i10 >> 2] = 0;
 i1 = __Znwj(8) | 0;
 if ((i1 | 0) == 0) {
  i32 = i14;
 } else {
  HEAP32[i1 >> 2] = H_BASE + 456;
  HEAP32[i1 + 4 >> 2] = i14;
  i32 = 0;
 }
 HEAP32[i10 >> 2] = i1;
 FUNCTION_TABLE_viiiiiiiiiiii[i19 & 1](i13, i2, i3, i17, i16, i4, i5, i11, i6, i7, i8, i12);
 i8 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i8 | 0) == (i12 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 16 >> 2] & 31](i8);
  } else {
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 20 >> 2] & 31](i8);
  }
 } while (0);
 do {
  if ((i32 | 0) != 0) {
   i8 = i32 | 0;
   i12 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) == 0) {
    __ZN7WebCore21IDBTransactionBackendD1Ev(i32);
    __ZN3WTF8fastFreeEPv(i32);
    break;
   } else {
    HEAP32[i8 >> 2] = i12;
    break;
   }
  }
 } while (0);
 __ZN7WebCore22IDBObjectStoreMetadataD1Ev(i11);
 do {
  if ((i6 | 0) != 0) {
   i11 = i6 | 0;
   i32 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i32 | 0) == 0) {
    __ZN7WebCore6IDBKeyD1Ev(i6);
    __ZN3WTF8fastFreeEPv(i6);
    break;
   } else {
    HEAP32[i11 >> 2] = i32;
    break;
   }
  }
 } while (0);
 i6 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) == 0) {
  __ZN7WebCore21IDBTransactionBackendD1Ev(i14);
  __ZN3WTF8fastFreeEPv(i14);
  STACKTOP = i9;
  return;
 } else {
  HEAP32[i21 >> 2] = i6;
  STACKTOP = i9;
  return;
 }
}
function __ZNK3WTF7HashMapIxN7WebCore16IDBIndexMetadataENS_7IntHashIyEENS_10HashTraitsIxEENS5_IS2_EEE3getERKx(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i8 = HEAP32[i3 + 4 >> 2] | 0;
 i3 = _i64Add(i2, i8, ~0, ~i2) | 0;
 i9 = tempRet0;
 i10 = (i3 >>> 22 | i9 << 10) ^ i3;
 i3 = (i9 >>> 22 | 0 << 10) ^ i9;
 i9 = _i64Add(i10, i3, ~(i10 << 13 | 0 >>> 19), ~(i3 << 13 | i10 >>> 19)) | 0;
 i10 = tempRet0;
 i3 = ___muldi3((i9 >>> 8 | i10 << 24) ^ i9, (i10 >>> 8 | 0 << 24) ^ i10, 9, 0) | 0;
 i10 = tempRet0;
 i9 = (i3 >>> 15 | i10 << 17) ^ i3;
 i3 = (i10 >>> 15 | 0 << 17) ^ i10;
 i10 = _i64Add(i9, i3, ~(i9 << 27 | 0 >>> 5), ~(i3 << 27 | i9 >>> 5)) | 0;
 i9 = (i10 >>> 31 | tempRet0 << 1) ^ i10;
 L1 : do {
  if ((i7 | 0) != 0) {
   i10 = i9 & i6;
   i3 = i7 + (i10 * 48 & -1) | 0;
   i11 = i3 | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   i13 = HEAP32[i11 + 4 >> 2] | 0;
   if ((i12 | 0) == (i2 | 0) & (i13 | 0) == (i8 | 0)) {
    i14 = i3;
   } else {
    i3 = (i9 >>> 23) + ~i9 | 0;
    i11 = i3 << 12 ^ i3;
    i3 = i11 >>> 7 ^ i11;
    i11 = i3 << 2 ^ i3;
    i3 = i11 >>> 20 ^ i11 | 1;
    i11 = 0;
    i15 = i10;
    i10 = i13;
    i13 = i12;
    while (1) {
     if ((i13 | 0) == 0 & (i10 | 0) == 0) {
      break L1;
     }
     i12 = (i11 | 0) == 0 ? i3 : i11;
     i16 = i12 + i15 & i6;
     i17 = i7 + (i16 * 48 & -1) | 0;
     i18 = i17 | 0;
     i19 = HEAP32[i18 >> 2] | 0;
     i20 = HEAP32[i18 + 4 >> 2] | 0;
     if ((i19 | 0) == (i2 | 0) & (i20 | 0) == (i8 | 0)) {
      i14 = i17;
      break;
     } else {
      i11 = i12;
      i15 = i16;
      i10 = i20;
      i13 = i19;
     }
    }
   }
   if ((i14 | 0) == 0) {
    break;
   }
   i13 = HEAP32[i14 + 8 >> 2] | 0;
   HEAP32[i1 >> 2] = i13;
   if ((i13 | 0) != 0) {
    i10 = i13 | 0;
    HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
   }
   i10 = i1 + 8 | 0;
   i13 = i14 + 16 | 0;
   i15 = HEAP32[i13 + 4 >> 2] | 0;
   HEAP32[i10 >> 2] = HEAP32[i13 >> 2];
   HEAP32[i10 + 4 >> 2] = i15;
   HEAP32[i1 + 16 >> 2] = HEAP32[i14 + 24 >> 2];
   i15 = HEAP32[i14 + 28 >> 2] | 0;
   HEAP32[i1 + 20 >> 2] = i15;
   if ((i15 | 0) != 0) {
    i10 = i15 | 0;
    HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
   }
   i10 = HEAP32[i14 + 36 >> 2] | 0;
   i15 = i14 + 40 | 0;
   i13 = HEAP32[i15 >> 2] | 0;
   i11 = i1 + 24 | 0;
   HEAP32[i11 >> 2] = 0;
   i3 = i1 + 28 | 0;
   HEAP32[i3 >> 2] = 0;
   HEAP32[i1 + 32 >> 2] = i13;
   do {
    if ((i10 | 0) != 0) {
     if (i10 >>> 0 > 1073741823 >>> 0) {
      _WTFCrash();
     }
     i13 = __ZN3WTF18fastMallocGoodSizeEj(i10 << 2) | 0;
     HEAP32[i3 >> 2] = i13 >>> 2;
     i19 = __ZN3WTF10fastMallocEj(i13) | 0;
     i13 = i19;
     HEAP32[i11 >> 2] = i13;
     if ((i19 | 0) == 0) {
      break;
     }
     i19 = HEAP32[i14 + 32 >> 2] | 0;
     i20 = HEAP32[i15 >> 2] | 0;
     i16 = i19 + (i20 << 2) | 0;
     if ((i20 | 0) == 0) {
      break;
     } else {
      i21 = i19;
      i22 = i13;
     }
     while (1) {
      i13 = HEAP32[i21 >> 2] | 0;
      HEAP32[i22 >> 2] = i13;
      if ((i13 | 0) != 0) {
       i19 = i13 | 0;
       HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 2;
      }
      i19 = i21 + 4 | 0;
      if ((i19 | 0) == (i16 | 0)) {
       break;
      } else {
       i21 = i19;
       i22 = i22 + 4 | 0;
      }
     }
    }
   } while (0);
   HEAP8[i1 + 36 | 0] = HEAP8[i14 + 44 | 0] & 1;
   HEAP8[i1 + 37 | 0] = HEAP8[i14 + 45 | 0] & 1;
   STACKTOP = i4;
   return;
  }
 } while (0);
 HEAP32[i5 >> 2] = 0;
 _memset(i5 + 16 | 0, 0, 20) | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = 0;
 HEAP32[i1 + 20 >> 2] = 0;
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP32[i1 + 28 >> 2] = 0;
 HEAP32[i1 + 32 >> 2] = 0;
 HEAP8[i1 + 36 | 0] = 0;
 HEAP8[i1 + 37 | 0] = 0;
 __ZN7WebCore16IDBIndexMetadataD1Ev(i5);
 STACKTOP = i4;
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
function __ZN7WebCore18IDBDatabaseBackend11removeIndexExx(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 80 | 0;
 HEAP32[i7 >> 2] = i2;
 HEAP32[i7 + 4 >> 2] = i3;
 i3 = i1 + 40 | 0;
 __ZNK3WTF7HashMapIxN7WebCore22IDBObjectStoreMetadataENS_7IntHashIyEENS_10HashTraitsIxEENS5_IS2_EEE3getERKx(i8, i3, i7);
 i1 = i8 + 48 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i10 = HEAP32[i8 + 52 >> 2] | 0;
  i11 = i10 * 48 & -1 | 0;
  i12 = 0;
  i13 = i10;
 } else {
  i10 = HEAP32[i8 + 56 >> 2] | 0;
  i14 = _i64Add(~0, ~i4, i4, i5) | 0;
  i15 = tempRet0;
  i16 = (i14 >>> 22 | i15 << 10) ^ i14;
  i14 = (i15 >>> 22 | 0 << 10) ^ i15;
  i15 = _i64Add(i16, i14, ~(i16 << 13 | 0 >>> 19), ~(i14 << 13 | i16 >>> 19)) | 0;
  i16 = tempRet0;
  i14 = ___muldi3((i15 >>> 8 | i16 << 24) ^ i15, (i16 >>> 8 | 0 << 24) ^ i16, 9, 0) | 0;
  i16 = tempRet0;
  i15 = (i14 >>> 15 | i16 << 17) ^ i14;
  i14 = (i16 >>> 15 | 0 << 17) ^ i16;
  i16 = _i64Add(i15, i14, ~(i15 << 27 | 0 >>> 5), ~(i14 << 27 | i15 >>> 5)) | 0;
  i15 = (i16 >>> 31 | tempRet0 << 1) ^ i16;
  i16 = i10 & i15;
  i14 = i2 + (i16 * 48 & -1) | 0;
  i17 = i14 | 0;
  i18 = HEAP32[i17 >> 2] | 0;
  i19 = HEAP32[i17 + 4 >> 2] | 0;
  L3 : do {
   if ((i18 | 0) == (i4 | 0) & (i19 | 0) == (i5 | 0)) {
    i20 = i14;
   } else {
    i17 = (i15 >>> 23) + ~i15 | 0;
    i21 = i17 << 12 ^ i17;
    i17 = i21 >>> 7 ^ i21;
    i21 = i17 << 2 ^ i17;
    i17 = i21 >>> 20 ^ i21 | 1;
    i21 = 0;
    i22 = i16;
    i23 = i19;
    i24 = i18;
    while (1) {
     if ((i24 | 0) == 0 & (i23 | 0) == 0) {
      i20 = 0;
      break L3;
     }
     i25 = (i21 | 0) == 0 ? i17 : i21;
     i26 = i25 + i22 & i10;
     i27 = i2 + (i26 * 48 & -1) | 0;
     i28 = i27 | 0;
     i29 = HEAP32[i28 >> 2] | 0;
     i30 = HEAP32[i28 + 4 >> 2] | 0;
     if ((i29 | 0) == (i4 | 0) & (i30 | 0) == (i5 | 0)) {
      i20 = i27;
      break;
     } else {
      i21 = i25;
      i22 = i26;
      i23 = i30;
      i24 = i29;
     }
    }
   }
  } while (0);
  i5 = HEAP32[i8 + 52 >> 2] | 0;
  i11 = (i20 | 0) == 0 ? i2 + (i5 * 48 & -1) | 0 : i20;
  i12 = i2;
  i13 = i5;
 }
 i5 = i1 | 0;
 do {
  if ((i11 | 0) != (i12 + (i13 * 48 & -1) | 0)) {
   __ZN7WebCore16IDBIndexMetadataD1Ev(i11 + 8 | 0);
   i1 = i11 | 0;
   HEAP32[i1 >> 2] = -1;
   HEAP32[i1 + 4 >> 2] = -1;
   i1 = i8 + 64 | 0;
   HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
   i1 = i8 + 60 | 0;
   i2 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   HEAP32[i1 >> 2] = i2;
   i1 = HEAP32[i8 + 52 >> 2] | 0;
   if (!((i2 * 6 & -1 | 0) < (i1 | 0) & (i1 | 0) > 8)) {
    break;
   }
   __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E6rehashEiPS4_(i5, (i1 | 0) / 2 & -1, 0) | 0;
  }
 } while (0);
 __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore22IDBObjectStoreMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKxRS3_EENS_18HashTableAddResultINS_17HashTableIteratorIxS4_S6_S8_SE_SB_EEEEOT0_OT1_(i9, i3 | 0, i7, i8);
 if ((HEAP8[i9 + 8 | 0] & 1) != 0) {
  __ZN7WebCore22IDBObjectStoreMetadataD1Ev(i8);
  STACKTOP = i6;
  return;
 }
 __ZN7WebCore22IDBObjectStoreMetadataaSERKS0_((HEAP32[i9 >> 2] | 0) + 8 | 0, i8) | 0;
 __ZN7WebCore22IDBObjectStoreMetadataD1Ev(i8);
 STACKTOP = i6;
 return;
}
function __ZN3WTF9HashTableIPNS_15ListHashSetNodeINS_6RefPtrIN7WebCore20IDBDatabaseCallbacksEEELj256EEES7_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS5_EEEENS_10HashTraitsIS7_EESE_E3addINS_21ListHashSetTranslatorISB_EERKS5_PNS_24ListHashSetNodeAllocatorIS5_Lj256EEEEENS_18HashTableAddResultINS_17HashTableIteratorIS7_S7_S8_SC_SE_SE_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i7 | 0) == 0) {
   i8 = 8;
  } else {
   i9 = i7 << 1;
   i8 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i9 | 0) ? i7 : i9;
  }
  __ZN3WTF9HashTableIPNS_15ListHashSetNodeINS_6RefPtrIN7WebCore20IDBDatabaseCallbacksEEELj256EEES7_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS5_EEEENS_10HashTraitsIS7_EESE_E6rehashEiPS7_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = i3;
 i7 = i9 + ~(i9 << 15) | 0;
 i9 = (i7 >>> 10 ^ i7) * 9 & -1;
 i7 = i9 >>> 6 ^ i9;
 i9 = i7 + ~(i7 << 11) | 0;
 i7 = i9 >>> 16 ^ i9;
 i9 = (i7 >>> 23) + ~i7 | 0;
 i11 = i9 << 12 ^ i9;
 i9 = i11 >>> 7 ^ i11;
 i11 = i9 << 2 ^ i9;
 i9 = i11 >>> 20 ^ i11 | 1;
 i11 = 0;
 i12 = i7;
 i7 = 0;
 while (1) {
  i13 = i12 & i6;
  i14 = i10 + (i13 << 2) | 0;
  i15 = HEAP32[i14 >> 2] | 0;
  i16 = i15;
  if ((i16 | 0) == (-1 | 0)) {
   i17 = i14;
  } else if ((i16 | 0) == 0) {
   break;
  } else {
   if ((HEAP32[i15 >> 2] | 0) == (i3 | 0)) {
    i18 = 8;
    break;
   } else {
    i17 = i11;
   }
  }
  i15 = (i7 | 0) == 0 ? i9 : i7;
  i11 = i17;
  i12 = i15 + i13 | 0;
  i7 = i15;
 }
 if ((i18 | 0) == 8) {
  i18 = i10 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
  i10 = i1;
  HEAP32[i10 >> 2] = i14;
  HEAP32[i10 + 4 >> 2] = i18;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i11 | 0) == 0) {
  i19 = i14;
 } else {
  HEAP32[i11 >> 2] = 0;
  i14 = i2 + 16 | 0;
  HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) - 1;
  i19 = i11;
 }
 i11 = HEAP32[i4 >> 2] | 0;
 i4 = i11 | 0;
 i14 = HEAP32[i4 >> 2] | 0;
 if ((i14 | 0) == 0) {
  i20 = __ZN3WTF10fastMallocEj(12) | 0;
 } else {
  i18 = HEAP32[i14 + 8 >> 2] | 0;
  do {
   if ((i18 | 0) == 0) {
    i10 = i11 + 4 | 0;
    if ((HEAP8[i10] & 1) != 0) {
     i21 = 0;
     break;
    }
    i7 = i14 + 12 | 0;
    if ((i7 | 0) != (i11 + 3080 | 0)) {
     i21 = i7;
     break;
    }
    HEAP8[i10] = 1;
    i21 = 0;
   } else {
    i21 = i18;
   }
  } while (0);
  HEAP32[i4 >> 2] = i21;
  i20 = i14;
 }
 i14 = HEAP32[i8 >> 2] | 0;
 HEAP32[i20 >> 2] = i14;
 if ((i14 | 0) != 0) {
  i8 = i14 + 4 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 }
 HEAP32[i20 + 4 >> 2] = 0;
 HEAP32[i20 + 8 >> 2] = 0;
 HEAP32[i19 >> 2] = i20;
 i20 = i2 + 12 | 0;
 i8 = (HEAP32[i20 >> 2] | 0) + 1 | 0;
 HEAP32[i20 >> 2] = i8;
 i20 = i2 + 4 | 0;
 i14 = HEAP32[i20 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i8 << 1 | 0) < (i14 | 0)) {
  i22 = i19;
  i23 = i14;
 } else {
  if ((i14 | 0) == 0) {
   i24 = 8;
  } else {
   i21 = i14 << 1;
   i24 = (i8 * 6 & -1 | 0) < (i21 | 0) ? i14 : i21;
  }
  i21 = __ZN3WTF9HashTableIPNS_15ListHashSetNodeINS_6RefPtrIN7WebCore20IDBDatabaseCallbacksEEELj256EEES7_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS5_EEEENS_10HashTraitsIS7_EESE_E6rehashEiPS7_(i2, i24, i19) | 0;
  i22 = i21;
  i23 = HEAP32[i20 >> 2] | 0;
 }
 i20 = (HEAP32[i5 >> 2] | 0) + (i23 << 2) | 0;
 i23 = i1;
 HEAP32[i23 >> 2] = i22;
 HEAP32[i23 + 4 >> 2] = i20;
 HEAP8[i1 + 8 | 0] = 1;
 return;
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
 if ((i17 | 0) == 27) {
  STACKTOP = i3;
  return;
 } else if ((i17 | 0) == 26) {
  STACKTOP = i3;
  return;
 } else if ((i17 | 0) == 28) {
  STACKTOP = i3;
  return;
 }
}
function __ZN3WTF9HashTableIPNS_15ListHashSetNodeINS_6RefPtrIN7WebCore20IDBDatabaseCallbacksEEELj256EEES7_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS5_EEEENS_10HashTraitsIS7_EESE_E3addINS_21ListHashSetTranslatorISB_EES5_PNS_24ListHashSetNodeAllocatorIS5_Lj256EEEEENS_18HashTableAddResultINS_17HashTableIteratorIS7_S7_S8_SC_SE_SE_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i7 | 0) == 0) {
   i8 = 8;
  } else {
   i9 = i7 << 1;
   i8 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i9 | 0) ? i7 : i9;
  }
  __ZN3WTF9HashTableIPNS_15ListHashSetNodeINS_6RefPtrIN7WebCore20IDBDatabaseCallbacksEEELj256EEES7_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS5_EEEENS_10HashTraitsIS7_EESE_E6rehashEiPS7_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = i3;
 i7 = i9 + ~(i9 << 15) | 0;
 i9 = (i7 >>> 10 ^ i7) * 9 & -1;
 i7 = i9 >>> 6 ^ i9;
 i9 = i7 + ~(i7 << 11) | 0;
 i7 = i9 >>> 16 ^ i9;
 i9 = (i7 >>> 23) + ~i7 | 0;
 i11 = i9 << 12 ^ i9;
 i9 = i11 >>> 7 ^ i11;
 i11 = i9 << 2 ^ i9;
 i9 = i11 >>> 20 ^ i11 | 1;
 i11 = 0;
 i12 = i7;
 i7 = 0;
 while (1) {
  i13 = i12 & i6;
  i14 = i10 + (i13 << 2) | 0;
  i15 = HEAP32[i14 >> 2] | 0;
  i16 = i15;
  if ((i16 | 0) == 0) {
   break;
  } else if ((i16 | 0) == (-1 | 0)) {
   i17 = i14;
  } else {
   if ((HEAP32[i15 >> 2] | 0) == (i3 | 0)) {
    i18 = 8;
    break;
   } else {
    i17 = i11;
   }
  }
  i15 = (i7 | 0) == 0 ? i9 : i7;
  i11 = i17;
  i12 = i15 + i13 | 0;
  i7 = i15;
 }
 if ((i18 | 0) == 8) {
  i18 = i10 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
  i10 = i1;
  HEAP32[i10 >> 2] = i14;
  HEAP32[i10 + 4 >> 2] = i18;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i11 | 0) == 0) {
  i19 = i14;
 } else {
  HEAP32[i11 >> 2] = 0;
  i14 = i2 + 16 | 0;
  HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) - 1;
  i19 = i11;
 }
 i11 = HEAP32[i4 >> 2] | 0;
 i4 = i11 | 0;
 i14 = HEAP32[i4 >> 2] | 0;
 if ((i14 | 0) == 0) {
  i20 = __ZN3WTF10fastMallocEj(12) | 0;
 } else {
  i18 = HEAP32[i14 + 8 >> 2] | 0;
  do {
   if ((i18 | 0) == 0) {
    i10 = i11 + 4 | 0;
    if ((HEAP8[i10] & 1) != 0) {
     i21 = 0;
     break;
    }
    i7 = i14 + 12 | 0;
    if ((i7 | 0) != (i11 + 3080 | 0)) {
     i21 = i7;
     break;
    }
    HEAP8[i10] = 1;
    i21 = 0;
   } else {
    i21 = i18;
   }
  } while (0);
  HEAP32[i4 >> 2] = i21;
  i20 = i14;
 }
 i14 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i20 >> 2] = i14;
 HEAP32[i20 + 4 >> 2] = 0;
 HEAP32[i20 + 8 >> 2] = 0;
 HEAP32[i19 >> 2] = i20;
 i20 = i2 + 12 | 0;
 i14 = (HEAP32[i20 >> 2] | 0) + 1 | 0;
 HEAP32[i20 >> 2] = i14;
 i20 = i2 + 4 | 0;
 i8 = HEAP32[i20 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i14 << 1 | 0) < (i8 | 0)) {
  i22 = i19;
  i23 = i8;
 } else {
  if ((i8 | 0) == 0) {
   i24 = 8;
  } else {
   i21 = i8 << 1;
   i24 = (i14 * 6 & -1 | 0) < (i21 | 0) ? i8 : i21;
  }
  i21 = __ZN3WTF9HashTableIPNS_15ListHashSetNodeINS_6RefPtrIN7WebCore20IDBDatabaseCallbacksEEELj256EEES7_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS5_EEEENS_10HashTraitsIS7_EESE_E6rehashEiPS7_(i2, i24, i19) | 0;
  i22 = i21;
  i23 = HEAP32[i20 >> 2] | 0;
 }
 i20 = (HEAP32[i5 >> 2] | 0) + (i23 << 2) | 0;
 i23 = i1;
 HEAP32[i23 >> 2] = i22;
 HEAP32[i23 + 4 >> 2] = i20;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF5DequeINS_6OwnPtrIN7WebCore18IDBPendingOpenCallEEELj0EE10destroyAllEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i2 = i1 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 i5 = i1 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i6 + (i4 << 2) | 0;
 if (i3 >>> 0 <= i4 >>> 0) {
  if ((i3 | 0) == (i4 | 0)) {
   return;
  }
  i8 = i6 + (i3 << 2) | 0;
  while (1) {
   i9 = HEAP32[i8 >> 2] | 0;
   if ((i9 | 0) != 0) {
    i10 = HEAP32[i9 + 4 >> 2] | 0;
    do {
     if ((i10 | 0) != 0) {
      i11 = i10 + 4 | 0;
      i12 = i11 | 0;
      i13 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
      if ((i13 | 0) != 0) {
       HEAP32[i12 >> 2] = i13;
       break;
      }
      i13 = i11 - 4 | 0;
      if ((i13 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 31](i13);
     }
    } while (0);
    i10 = HEAP32[i9 >> 2] | 0;
    do {
     if ((i10 | 0) != 0) {
      i13 = i10 + 4 | 0;
      i11 = i13 | 0;
      i12 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
      if ((i12 | 0) != 0) {
       HEAP32[i11 >> 2] = i12;
       break;
      }
      i12 = i13 - 4 | 0;
      if ((i12 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 31](i12);
     }
    } while (0);
    __ZdlPv(i9);
   }
   i8 = i8 + 4 | 0;
   if ((i8 | 0) == (i7 | 0)) {
    break;
   }
  }
  return;
 }
 if ((i4 | 0) == 0) {
  i14 = i6;
  i15 = i3;
 } else {
  i3 = i6;
  while (1) {
   i6 = HEAP32[i3 >> 2] | 0;
   if ((i6 | 0) != 0) {
    i4 = HEAP32[i6 + 4 >> 2] | 0;
    do {
     if ((i4 | 0) != 0) {
      i8 = i4 + 4 | 0;
      i10 = i8 | 0;
      i12 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
      if ((i12 | 0) != 0) {
       HEAP32[i10 >> 2] = i12;
       break;
      }
      i12 = i8 - 4 | 0;
      if ((i12 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 31](i12);
     }
    } while (0);
    i4 = HEAP32[i6 >> 2] | 0;
    do {
     if ((i4 | 0) != 0) {
      i9 = i4 + 4 | 0;
      i12 = i9 | 0;
      i8 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
      if ((i8 | 0) != 0) {
       HEAP32[i12 >> 2] = i8;
       break;
      }
      i8 = i9 - 4 | 0;
      if ((i8 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 31](i8);
     }
    } while (0);
    __ZdlPv(i6);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i7 | 0)) {
    break;
   }
  }
  i14 = HEAP32[i5 >> 2] | 0;
  i15 = HEAP32[i2 >> 2] | 0;
 }
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 i1 = i14 + (i2 << 2) | 0;
 if ((i15 | 0) == (i2 | 0)) {
  return;
 }
 i2 = i14 + (i15 << 2) | 0;
 while (1) {
  i15 = HEAP32[i2 >> 2] | 0;
  if ((i15 | 0) != 0) {
   i14 = HEAP32[i15 + 4 >> 2] | 0;
   do {
    if ((i14 | 0) != 0) {
     i5 = i14 + 4 | 0;
     i7 = i5 | 0;
     i3 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
     if ((i3 | 0) != 0) {
      HEAP32[i7 >> 2] = i3;
      break;
     }
     i3 = i5 - 4 | 0;
     if ((i3 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
    }
   } while (0);
   i14 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i14 | 0) != 0) {
     i6 = i14 + 4 | 0;
     i3 = i6 | 0;
     i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
     if ((i5 | 0) != 0) {
      HEAP32[i3 >> 2] = i5;
      break;
     }
     i5 = i6 - 4 | 0;
     if ((i5 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
    }
   } while (0);
   __ZdlPv(i15);
  }
  i2 = i2 + 4 | 0;
  if ((i2 | 0) == (i1 | 0)) {
   break;
  }
 }
 return;
}
function __ZN7WebCore18IDBDatabaseBackend5abortExN3WTF10PassRefPtrINS_16IDBDatabaseErrorEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = HEAP32[i1 + 84 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i8 = HEAP32[i1 + 92 >> 2] | 0;
 i1 = _i64Add(~0, ~i2, i2, i3) | 0;
 i9 = tempRet0;
 i10 = (i1 >>> 22 | i9 << 10) ^ i1;
 i1 = (i9 >>> 22 | 0 << 10) ^ i9;
 i9 = _i64Add(i10, i1, ~(i10 << 13 | 0 >>> 19), ~(i1 << 13 | i10 >>> 19)) | 0;
 i10 = tempRet0;
 i1 = ___muldi3((i9 >>> 8 | i10 << 24) ^ i9, (i10 >>> 8 | 0 << 24) ^ i10, 9, 0) | 0;
 i10 = tempRet0;
 i9 = (i1 >>> 15 | i10 << 17) ^ i1;
 i1 = (i10 >>> 15 | 0 << 17) ^ i10;
 i10 = _i64Add(i9, i1, ~(i9 << 27 | 0 >>> 5), ~(i1 << 27 | i9 >>> 5)) | 0;
 i9 = (i10 >>> 31 | tempRet0 << 1) ^ i10;
 i10 = i8 & i9;
 i1 = i7 + (i10 << 4) | 0;
 i11 = i1 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 i13 = HEAP32[i11 + 4 >> 2] | 0;
 i11 = (i12 | 0) == (i2 | 0) & (i13 | 0) == (i3 | 0);
 L4 : do {
  if (i11) {
   i14 = i1;
  } else {
   i15 = (i9 >>> 23) + ~i9 | 0;
   i16 = i15 << 12 ^ i15;
   i15 = i16 >>> 7 ^ i16;
   i16 = i15 << 2 ^ i15;
   i15 = i16 >>> 20 ^ i16 | 1;
   i16 = 0;
   i17 = i10;
   i18 = i13;
   i19 = i12;
   while (1) {
    if ((i19 | 0) == 0 & (i18 | 0) == 0) {
     break;
    }
    i20 = (i16 | 0) == 0 ? i15 : i16;
    i21 = i20 + i17 & i8;
    i22 = i7 + (i21 << 4) | 0;
    i23 = i22 | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    i25 = HEAP32[i23 + 4 >> 2] | 0;
    if ((i24 | 0) == (i2 | 0) & (i25 | 0) == (i3 | 0)) {
     i14 = i22;
     break L4;
    } else {
     i16 = i20;
     i17 = i21;
     i18 = i25;
     i19 = i24;
    }
   }
   STACKTOP = i5;
   return;
  }
 } while (0);
 if ((i14 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 L14 : do {
  if (i11) {
   i26 = i1;
   i27 = 11;
  } else {
   i14 = (i9 >>> 23) + ~i9 | 0;
   i19 = i14 << 12 ^ i14;
   i14 = i19 >>> 7 ^ i19;
   i19 = i14 << 2 ^ i14;
   i14 = i19 >>> 20 ^ i19 | 1;
   i19 = 0;
   i18 = i10;
   i17 = i13;
   i16 = i12;
   while (1) {
    if ((i16 | 0) == 0 & (i17 | 0) == 0) {
     i28 = 0;
     break L14;
    }
    i15 = (i19 | 0) == 0 ? i14 : i19;
    i24 = i15 + i18 & i8;
    i25 = i7 + (i24 << 4) | 0;
    i21 = i25 | 0;
    i20 = HEAP32[i21 >> 2] | 0;
    i22 = HEAP32[i21 + 4 >> 2] | 0;
    if ((i20 | 0) == (i2 | 0) & (i22 | 0) == (i3 | 0)) {
     i26 = i25;
     i27 = 11;
     break;
    } else {
     i19 = i15;
     i18 = i24;
     i17 = i22;
     i16 = i20;
    }
   }
  }
 } while (0);
 do {
  if ((i27 | 0) == 11) {
   if ((i26 | 0) == 0) {
    i28 = 0;
    break;
   }
   i28 = HEAP32[i26 + 8 >> 2] | 0;
  }
 } while (0);
 i26 = i6 | 0;
 i27 = i4 | 0;
 i4 = HEAP32[i27 >> 2] | 0;
 HEAP32[i27 >> 2] = 0;
 HEAP32[i26 >> 2] = i4;
 __ZN7WebCore21IDBTransactionBackend5abortEN3WTF10PassRefPtrINS_16IDBDatabaseErrorEEE(i28, i6);
 i6 = HEAP32[i26 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i26 = i6 | 0;
 i28 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
 if ((i28 | 0) != 0) {
  HEAP32[i26 >> 2] = i28;
  STACKTOP = i5;
  return;
 }
 i28 = HEAP32[i6 + 8 >> 2] | 0;
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
 __ZN3WTF8fastFreeEPv(i6);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore18IDBDatabaseBackend10openCursorExxxN3WTF10PassRefPtrINS_11IDBKeyRangeEEENS_9IndexedDB15CursorDirectionEbNS0_8TaskTypeENS2_INS_12IDBCallbacksEEE(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12) {
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
 i12 = i12 | 0;
 var i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i14 = i13 | 0;
 i15 = i13 + 8 | 0;
 i16 = HEAP32[i1 + 92 >> 2] | 0;
 i17 = HEAP32[i1 + 84 >> 2] | 0;
 i1 = _i64Add(~0, ~i2, i2, i3) | 0;
 i18 = tempRet0;
 i19 = (i1 >>> 22 | i18 << 10) ^ i1;
 i1 = (i18 >>> 22 | 0 << 10) ^ i18;
 i18 = _i64Add(i19, i1, ~(i19 << 13 | 0 >>> 19), ~(i1 << 13 | i19 >>> 19)) | 0;
 i19 = tempRet0;
 i1 = ___muldi3((i18 >>> 8 | i19 << 24) ^ i18, (i19 >>> 8 | 0 << 24) ^ i19, 9, 0) | 0;
 i19 = tempRet0;
 i18 = (i1 >>> 15 | i19 << 17) ^ i1;
 i1 = (i19 >>> 15 | 0 << 17) ^ i19;
 i19 = _i64Add(i18, i1, ~(i18 << 27 | 0 >>> 5), ~(i1 << 27 | i18 >>> 5)) | 0;
 i18 = (i19 >>> 31 | tempRet0 << 1) ^ i19;
 if ((i17 | 0) == 0) {
  STACKTOP = i13;
  return;
 }
 i19 = i16 & i18;
 i1 = i17 + (i19 << 4) | 0;
 i20 = i1 | 0;
 i21 = HEAP32[i20 >> 2] | 0;
 i22 = HEAP32[i20 + 4 >> 2] | 0;
 L4 : do {
  if ((i21 | 0) == (i2 | 0) & (i22 | 0) == (i3 | 0)) {
   i23 = i1;
  } else {
   i20 = (i18 >>> 23) + ~i18 | 0;
   i24 = i20 << 12 ^ i20;
   i20 = i24 >>> 7 ^ i24;
   i24 = i20 << 2 ^ i20;
   i20 = i24 >>> 20 ^ i24 | 1;
   i24 = 0;
   i25 = i19;
   i26 = i22;
   i27 = i21;
   while (1) {
    if ((i27 | 0) == 0 & (i26 | 0) == 0) {
     break;
    }
    i28 = (i24 | 0) == 0 ? i20 : i24;
    i29 = i28 + i25 & i16;
    i30 = i17 + (i29 << 4) | 0;
    i31 = i30 | 0;
    i32 = HEAP32[i31 >> 2] | 0;
    i33 = HEAP32[i31 + 4 >> 2] | 0;
    if ((i32 | 0) == (i2 | 0) & (i33 | 0) == (i3 | 0)) {
     i23 = i30;
     break L4;
    } else {
     i24 = i28;
     i25 = i29;
     i26 = i33;
     i27 = i32;
    }
   }
   STACKTOP = i13;
   return;
  }
 } while (0);
 if ((i23 | 0) == 0) {
  STACKTOP = i13;
  return;
 }
 i3 = HEAP32[i23 + 8 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i13;
  return;
 }
 i23 = i14 | 0;
 i2 = i8 | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i23 >> 2] = i8;
 i8 = i15 | 0;
 i2 = i12 | 0;
 i12 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i8 >> 2] = i12;
 __ZN7WebCore21IDBTransactionBackend27scheduleOpenCursorOperationExxN3WTF10PassRefPtrINS_11IDBKeyRangeEEENS_9IndexedDB15CursorDirectionENS5_10CursorTypeENS_18IDBDatabaseBackend8TaskTypeENS2_INS_12IDBCallbacksEEE(i3, i4, i5, i6, i7, i14, i9, i10 & 1, i11, i15);
 i15 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i8 = i15 + 4 | 0;
   i11 = i8 | 0;
   i10 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i11 >> 2] = i10;
    break;
   }
   i10 = i8 - 4 | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 31](i10);
  }
 } while (0);
 i15 = HEAP32[i23 >> 2] | 0;
 if ((i15 | 0) == 0) {
  STACKTOP = i13;
  return;
 }
 i23 = i15 + 4 | 0;
 i15 = i23 | 0;
 i10 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
 if ((i10 | 0) != 0) {
  HEAP32[i15 >> 2] = i10;
  STACKTOP = i13;
  return;
 }
 i10 = i23 - 4 | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i13;
  return;
 }
 __ZN7WebCore11IDBKeyRangeD2Ev(i10);
 __ZN3WTF8fastFreeEPv(i10);
 STACKTOP = i13;
 return;
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore12IDBCallbacksEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i7 | 0) == 0) {
   i8 = 8;
  } else {
   i9 = i7 << 1;
   i8 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i9 | 0) ? i7 : i9;
  }
  __ZN3WTF9HashTableINS_6RefPtrIN7WebCore12IDBCallbacksEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i3 = i8;
 i9 = i3 + ~(i3 << 15) | 0;
 i3 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i3 >>> 6 ^ i3;
 i3 = i9 + ~(i9 << 11) | 0;
 i9 = i3 >>> 16 ^ i3;
 i3 = i9 & i6;
 i7 = i10 + (i3 << 2) | 0;
 i11 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i7;
  } else {
   i13 = (i9 >>> 23) + ~i9 | 0;
   i14 = i13 << 12 ^ i13;
   i13 = i14 >>> 7 ^ i14;
   i14 = i13 << 2 ^ i13;
   i13 = i14 >>> 20 ^ i14 | 1;
   i14 = 0;
   i15 = 0;
   i16 = i3;
   i17 = i7;
   i18 = i11;
   while (1) {
    if ((i18 | 0) == (i8 | 0)) {
     i19 = 8;
     break;
    }
    i20 = (i18 | 0) == -1 ? i17 : i15;
    i21 = (i14 | 0) == 0 ? i13 : i14;
    i22 = i21 + i16 & i6;
    i23 = i10 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i19 = 10;
     break;
    } else {
     i14 = i21;
     i15 = i20;
     i16 = i22;
     i17 = i23;
     i18 = i24;
    }
   }
   if ((i19 | 0) == 10) {
    if ((i20 | 0) == 0) {
     i12 = i23;
     break;
    }
    HEAP32[i20 >> 2] = 0;
    i18 = i2 + 16 | 0;
    HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) - 1;
    i12 = i20;
    break;
   } else if ((i19 | 0) == 8) {
    i18 = i10 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i16 = i1;
    HEAP32[i16 >> 2] = i17;
    HEAP32[i16 + 4 >> 2] = i18;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   }
  }
 } while (0);
 i10 = i4 | 0;
 i4 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 i10 = i12 | 0;
 i19 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = i4;
 do {
  if ((i19 | 0) != 0) {
   i4 = i19 + 4 | 0;
   i10 = i4 | 0;
   i20 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i20 | 0) != 0) {
    HEAP32[i10 >> 2] = i20;
    break;
   }
   i20 = i4 - 4 | 0;
   if ((i20 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 31](i20);
  }
 } while (0);
 i19 = i2 + 12 | 0;
 i20 = (HEAP32[i19 >> 2] | 0) + 1 | 0;
 HEAP32[i19 >> 2] = i20;
 i19 = i2 + 4 | 0;
 i4 = HEAP32[i19 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i20 << 1 | 0) < (i4 | 0)) {
  i25 = i12;
  i26 = i4;
 } else {
  if ((i4 | 0) == 0) {
   i27 = 8;
  } else {
   i10 = i4 << 1;
   i27 = (i20 * 6 & -1 | 0) < (i10 | 0) ? i4 : i10;
  }
  i10 = __ZN3WTF9HashTableINS_6RefPtrIN7WebCore12IDBCallbacksEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_(i2, i27, i12) | 0;
  i25 = i10;
  i26 = HEAP32[i19 >> 2] | 0;
 }
 i19 = (HEAP32[i5 >> 2] | 0) + (i26 << 2) | 0;
 i26 = i1;
 HEAP32[i26 >> 2] = i25;
 HEAP32[i26 + 4 >> 2] = i19;
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
function __ZN7WebCore18IDBDatabaseBackend3getExxxN3WTF10PassRefPtrINS_11IDBKeyRangeEEEbNS2_INS_12IDBCallbacksEEE(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10) {
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
 var i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i12 = i11 | 0;
 i13 = i11 + 8 | 0;
 i14 = HEAP32[i1 + 92 >> 2] | 0;
 i15 = HEAP32[i1 + 84 >> 2] | 0;
 i16 = _i64Add(~0, ~i2, i2, i3) | 0;
 i17 = tempRet0;
 i18 = (i16 >>> 22 | i17 << 10) ^ i16;
 i16 = (i17 >>> 22 | 0 << 10) ^ i17;
 i17 = _i64Add(i18, i16, ~(i18 << 13 | 0 >>> 19), ~(i16 << 13 | i18 >>> 19)) | 0;
 i18 = tempRet0;
 i16 = ___muldi3((i17 >>> 8 | i18 << 24) ^ i17, (i18 >>> 8 | 0 << 24) ^ i18, 9, 0) | 0;
 i18 = tempRet0;
 i17 = (i16 >>> 15 | i18 << 17) ^ i16;
 i16 = (i18 >>> 15 | 0 << 17) ^ i18;
 i18 = _i64Add(i17, i16, ~(i17 << 27 | 0 >>> 5), ~(i16 << 27 | i17 >>> 5)) | 0;
 i17 = (i18 >>> 31 | tempRet0 << 1) ^ i18;
 if ((i15 | 0) == 0) {
  STACKTOP = i11;
  return;
 }
 i18 = i14 & i17;
 i16 = i15 + (i18 << 4) | 0;
 i19 = i16 | 0;
 i20 = HEAP32[i19 >> 2] | 0;
 i21 = HEAP32[i19 + 4 >> 2] | 0;
 L4 : do {
  if ((i20 | 0) == (i2 | 0) & (i21 | 0) == (i3 | 0)) {
   i22 = i16;
  } else {
   i19 = (i17 >>> 23) + ~i17 | 0;
   i23 = i19 << 12 ^ i19;
   i19 = i23 >>> 7 ^ i23;
   i23 = i19 << 2 ^ i19;
   i19 = i23 >>> 20 ^ i23 | 1;
   i23 = 0;
   i24 = i18;
   i25 = i21;
   i26 = i20;
   while (1) {
    if ((i26 | 0) == 0 & (i25 | 0) == 0) {
     break;
    }
    i27 = (i23 | 0) == 0 ? i19 : i23;
    i28 = i27 + i24 & i14;
    i29 = i15 + (i28 << 4) | 0;
    i30 = i29 | 0;
    i31 = HEAP32[i30 >> 2] | 0;
    i32 = HEAP32[i30 + 4 >> 2] | 0;
    if ((i31 | 0) == (i2 | 0) & (i32 | 0) == (i3 | 0)) {
     i22 = i29;
     break L4;
    } else {
     i23 = i27;
     i24 = i28;
     i25 = i32;
     i26 = i31;
    }
   }
   STACKTOP = i11;
   return;
  }
 } while (0);
 if ((i22 | 0) == 0) {
  STACKTOP = i11;
  return;
 }
 i3 = HEAP32[i22 + 8 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i11;
  return;
 }
 i22 = i12 | 0;
 i2 = i8 | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i22 >> 2] = i8;
 i8 = i13 | 0;
 i2 = i10 | 0;
 i10 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i8 >> 2] = i10;
 __ZN7WebCore21IDBTransactionBackend20scheduleGetOperationERKNS_19IDBDatabaseMetadataExxN3WTF10PassRefPtrINS_11IDBKeyRangeEEENS_9IndexedDB10CursorTypeENS5_INS_12IDBCallbacksEEE(i3, i1 + 8 | 0, i4, i5, i6, i7, i12, i9 & 1, i13);
 i13 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i8 = i13 + 4 | 0;
   i9 = i8 | 0;
   i12 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) != 0) {
    HEAP32[i9 >> 2] = i12;
    break;
   }
   i12 = i8 - 4 | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 31](i12);
  }
 } while (0);
 i13 = HEAP32[i22 >> 2] | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i11;
  return;
 }
 i22 = i13 + 4 | 0;
 i13 = i22 | 0;
 i12 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
 if ((i12 | 0) != 0) {
  HEAP32[i13 >> 2] = i12;
  STACKTOP = i11;
  return;
 }
 i12 = i22 - 4 | 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i11;
  return;
 }
 __ZN7WebCore11IDBKeyRangeD2Ev(i12);
 __ZN3WTF8fastFreeEPv(i12);
 STACKTOP = i11;
 return;
}
function __ZN7WebCore18IDBDatabaseBackend19transactionFinishedEPNS_21IDBTransactionBackendE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = (i2 | 0) != 0;
 if (i5) {
  i6 = i2 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 i6 = i1 + 84 | 0;
 i7 = i2 + 184 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = HEAP32[i7 + 4 >> 2] | 0;
 i7 = i4;
 i10 = HEAP32[i6 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i11 = HEAP32[i1 + 88 >> 2] << 4 | 0;
  i12 = i11;
  i13 = i11;
 } else {
  i11 = HEAP32[i1 + 92 >> 2] | 0;
  i14 = _i64Add(i8, i9, ~0, ~i8) | 0;
  i15 = tempRet0;
  i16 = (i14 >>> 22 | i15 << 10) ^ i14;
  i14 = (i15 >>> 22 | 0 << 10) ^ i15;
  i15 = _i64Add(i16, i14, ~(i16 << 13 | 0 >>> 19), ~(i14 << 13 | i16 >>> 19)) | 0;
  i16 = tempRet0;
  i14 = ___muldi3((i15 >>> 8 | i16 << 24) ^ i15, (i16 >>> 8 | 0 << 24) ^ i16, 9, 0) | 0;
  i16 = tempRet0;
  i15 = (i14 >>> 15 | i16 << 17) ^ i14;
  i14 = (i16 >>> 15 | 0 << 17) ^ i16;
  i16 = _i64Add(i15, i14, ~(i15 << 27 | 0 >>> 5), ~(i14 << 27 | i15 >>> 5)) | 0;
  i15 = (i16 >>> 31 | tempRet0 << 1) ^ i16;
  i16 = i11 & i15;
  i14 = i10 + (i16 << 4) | 0;
  i17 = i14 | 0;
  i18 = HEAP32[i17 >> 2] | 0;
  i19 = HEAP32[i17 + 4 >> 2] | 0;
  L7 : do {
   if ((i18 | 0) == (i8 | 0) & (i19 | 0) == (i9 | 0)) {
    i20 = i14;
   } else {
    i17 = (i15 >>> 23) + ~i15 | 0;
    i21 = i17 << 12 ^ i17;
    i17 = i21 >>> 7 ^ i21;
    i21 = i17 << 2 ^ i17;
    i17 = i21 >>> 20 ^ i21 | 1;
    i21 = 0;
    i22 = i16;
    i23 = i19;
    i24 = i18;
    while (1) {
     if ((i24 | 0) == 0 & (i23 | 0) == 0) {
      i20 = 0;
      break L7;
     }
     i25 = (i21 | 0) == 0 ? i17 : i21;
     i26 = i25 + i22 & i11;
     i27 = i10 + (i26 << 4) | 0;
     i28 = i27 | 0;
     i29 = HEAP32[i28 >> 2] | 0;
     i30 = HEAP32[i28 + 4 >> 2] | 0;
     if ((i29 | 0) == (i8 | 0) & (i30 | 0) == (i9 | 0)) {
      i20 = i27;
      break;
     } else {
      i21 = i25;
      i22 = i26;
      i23 = i30;
      i24 = i29;
     }
    }
   }
  } while (0);
  i9 = i10 + (HEAP32[i1 + 88 >> 2] << 4) | 0;
  i12 = (i20 | 0) == 0 ? i9 : i20;
  i13 = i9;
 }
 HEAP32[i4 >> 2] = i12;
 HEAP32[i4 + 4 >> 2] = i13;
 __ZN3WTF7HashMapIxPN7WebCore21IDBTransactionBackendENS_7IntHashIyEENS_10HashTraitsIxEENS6_IS3_EEE6removeENS_24HashTableIteratorAdapterINS_9HashTableIxNS_12KeyValuePairIxS3_EENS_24KeyValuePairKeyExtractorISD_EES5_NS9_18KeyValuePairTraitsES7_EESD_EE(i6, i7) | 0;
 do {
  if ((HEAP32[i2 + 24 >> 2] | 0) == 2) {
   i7 = i1 + 80 | 0;
   i6 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = 0;
   if ((i6 | 0) == 0) {
    break;
   }
   i7 = i6 | 0;
   i13 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i13 | 0) == 0) {
    __ZN7WebCore21IDBTransactionBackendD1Ev(i6);
    __ZN3WTF8fastFreeEPv(i6);
    break;
   } else {
    HEAP32[i7 >> 2] = i13;
    break;
   }
  }
 } while (0);
 if (!i5) {
  STACKTOP = i3;
  return;
 }
 i5 = i2 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) == 0) {
  __ZN7WebCore21IDBTransactionBackendD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i5 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore18IDBDatabaseBackend5countExxxN3WTF10PassRefPtrINS_11IDBKeyRangeEEENS2_INS_12IDBCallbacksEEE(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 var i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i11 = i10 | 0;
 i12 = i10 + 8 | 0;
 i13 = HEAP32[i1 + 92 >> 2] | 0;
 i14 = HEAP32[i1 + 84 >> 2] | 0;
 i1 = _i64Add(~0, ~i2, i2, i3) | 0;
 i15 = tempRet0;
 i16 = (i1 >>> 22 | i15 << 10) ^ i1;
 i1 = (i15 >>> 22 | 0 << 10) ^ i15;
 i15 = _i64Add(i16, i1, ~(i16 << 13 | 0 >>> 19), ~(i1 << 13 | i16 >>> 19)) | 0;
 i16 = tempRet0;
 i1 = ___muldi3((i15 >>> 8 | i16 << 24) ^ i15, (i16 >>> 8 | 0 << 24) ^ i16, 9, 0) | 0;
 i16 = tempRet0;
 i15 = (i1 >>> 15 | i16 << 17) ^ i1;
 i1 = (i16 >>> 15 | 0 << 17) ^ i16;
 i16 = _i64Add(i15, i1, ~(i15 << 27 | 0 >>> 5), ~(i1 << 27 | i15 >>> 5)) | 0;
 i15 = (i16 >>> 31 | tempRet0 << 1) ^ i16;
 if ((i14 | 0) == 0) {
  STACKTOP = i10;
  return;
 }
 i16 = i13 & i15;
 i1 = i14 + (i16 << 4) | 0;
 i17 = i1 | 0;
 i18 = HEAP32[i17 >> 2] | 0;
 i19 = HEAP32[i17 + 4 >> 2] | 0;
 L4 : do {
  if ((i18 | 0) == (i2 | 0) & (i19 | 0) == (i3 | 0)) {
   i20 = i1;
  } else {
   i17 = (i15 >>> 23) + ~i15 | 0;
   i21 = i17 << 12 ^ i17;
   i17 = i21 >>> 7 ^ i21;
   i21 = i17 << 2 ^ i17;
   i17 = i21 >>> 20 ^ i21 | 1;
   i21 = 0;
   i22 = i16;
   i23 = i19;
   i24 = i18;
   while (1) {
    if ((i24 | 0) == 0 & (i23 | 0) == 0) {
     break;
    }
    i25 = (i21 | 0) == 0 ? i17 : i21;
    i26 = i25 + i22 & i13;
    i27 = i14 + (i26 << 4) | 0;
    i28 = i27 | 0;
    i29 = HEAP32[i28 >> 2] | 0;
    i30 = HEAP32[i28 + 4 >> 2] | 0;
    if ((i29 | 0) == (i2 | 0) & (i30 | 0) == (i3 | 0)) {
     i20 = i27;
     break L4;
    } else {
     i21 = i25;
     i22 = i26;
     i23 = i30;
     i24 = i29;
    }
   }
   STACKTOP = i10;
   return;
  }
 } while (0);
 if ((i20 | 0) == 0) {
  STACKTOP = i10;
  return;
 }
 i3 = HEAP32[i20 + 8 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i10;
  return;
 }
 i20 = i11 | 0;
 i2 = i8 | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i20 >> 2] = i8;
 i8 = i12 | 0;
 i2 = i9 | 0;
 i9 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i8 >> 2] = i9;
 __ZN7WebCore21IDBTransactionBackend22scheduleCountOperationExxN3WTF10PassRefPtrINS_11IDBKeyRangeEEENS2_INS_12IDBCallbacksEEE(i3, i4, i5, i6, i7, i11, i12);
 i12 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i8 = i12 + 4 | 0;
   i11 = i8 | 0;
   i7 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i11 >> 2] = i7;
    break;
   }
   i7 = i8 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 31](i7);
  }
 } while (0);
 i12 = HEAP32[i20 >> 2] | 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i10;
  return;
 }
 i20 = i12 + 4 | 0;
 i12 = i20 | 0;
 i7 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
 if ((i7 | 0) != 0) {
  HEAP32[i12 >> 2] = i7;
  STACKTOP = i10;
  return;
 }
 i7 = i20 - 4 | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i10;
  return;
 }
 __ZN7WebCore11IDBKeyRangeD2Ev(i7);
 __ZN3WTF8fastFreeEPv(i7);
 STACKTOP = i10;
 return;
}
function __ZN7WebCore18IDBDatabaseBackend32transactionFinishedAndAbortFiredEPNS_21IDBTransactionBackendE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = (i2 | 0) != 0;
 if (i6) {
  i7 = i2 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 if ((HEAP32[i2 + 24 >> 2] | 0) == 2) {
  i7 = i1 + 124 | 0;
  i8 = HEAP32[i7 >> 2] | 0;
  do {
   if ((i8 | 0) != 0) {
    i9 = HEAP32[i8 >> 2] | 0;
    i10 = HEAP32[(HEAP32[i9 >> 2] | 0) + 8 >> 2] | 0;
    __ZN3WTF6StringC1EPKc(i5, H_BASE + 296 | 0);
    i11 = __ZN3WTF10fastMallocEj(12) | 0;
    HEAP32[i11 >> 2] = 1;
    HEAP16[i11 + 4 >> 1] = 1210;
    i12 = i5 | 0;
    i13 = HEAP32[i12 >> 2] | 0;
    HEAP32[i11 + 8 >> 2] = i13;
    if ((i13 | 0) != 0) {
     i14 = i13 | 0;
     HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
    }
    i14 = i4 | 0;
    HEAP32[i14 >> 2] = i11;
    FUNCTION_TABLE_vii[i10 & 15](i9, i4);
    i9 = HEAP32[i14 >> 2] | 0;
    do {
     if ((i9 | 0) != 0) {
      i14 = i9 | 0;
      i10 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
      if ((i10 | 0) != 0) {
       HEAP32[i14 >> 2] = i10;
       break;
      }
      i10 = HEAP32[i9 + 8 >> 2] | 0;
      do {
       if ((i10 | 0) != 0) {
        i14 = i10 | 0;
        i11 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
        if ((i11 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i10);
         break;
        } else {
         HEAP32[i14 >> 2] = i11;
         break;
        }
       }
      } while (0);
      __ZN3WTF8fastFreeEPv(i9);
     }
    } while (0);
    i9 = HEAP32[i12 >> 2] | 0;
    do {
     if ((i9 | 0) != 0) {
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
    i9 = HEAP32[i7 >> 2] | 0;
    HEAP32[i7 >> 2] = 0;
    if ((i9 | 0) == 0) {
     break;
    }
    i12 = HEAP32[i9 + 4 >> 2] | 0;
    do {
     if ((i12 | 0) != 0) {
      i11 = i12 + 4 | 0;
      i10 = i11 | 0;
      i14 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
      if ((i14 | 0) != 0) {
       HEAP32[i10 >> 2] = i14;
       break;
      }
      i14 = i11 - 4 | 0;
      if ((i14 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 31](i14);
     }
    } while (0);
    i12 = HEAP32[i9 >> 2] | 0;
    do {
     if ((i12 | 0) != 0) {
      i14 = i12 + 4 | 0;
      i11 = i14 | 0;
      i10 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
      if ((i10 | 0) != 0) {
       HEAP32[i11 >> 2] = i10;
       break;
      }
      i10 = i14 - 4 | 0;
      if ((i10 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 31](i10);
     }
    } while (0);
    __ZdlPv(i9);
   }
  } while (0);
  __ZN7WebCore18IDBDatabaseBackend19processPendingCallsEv(i1);
 }
 if (!i6) {
  STACKTOP = i3;
  return;
 }
 i6 = i2 | 0;
 i1 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) == 0) {
  __ZN7WebCore21IDBTransactionBackendD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i6 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore18IDBDatabaseBackend11deleteRangeExxN3WTF10PassRefPtrINS_11IDBKeyRangeEEENS2_INS_12IDBCallbacksEEE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i9 = i8 | 0;
 i10 = i8 + 8 | 0;
 i11 = HEAP32[i1 + 92 >> 2] | 0;
 i12 = HEAP32[i1 + 84 >> 2] | 0;
 i1 = _i64Add(~0, ~i2, i2, i3) | 0;
 i13 = tempRet0;
 i14 = (i1 >>> 22 | i13 << 10) ^ i1;
 i1 = (i13 >>> 22 | 0 << 10) ^ i13;
 i13 = _i64Add(i14, i1, ~(i14 << 13 | 0 >>> 19), ~(i1 << 13 | i14 >>> 19)) | 0;
 i14 = tempRet0;
 i1 = ___muldi3((i13 >>> 8 | i14 << 24) ^ i13, (i14 >>> 8 | 0 << 24) ^ i14, 9, 0) | 0;
 i14 = tempRet0;
 i13 = (i1 >>> 15 | i14 << 17) ^ i1;
 i1 = (i14 >>> 15 | 0 << 17) ^ i14;
 i14 = _i64Add(i13, i1, ~(i13 << 27 | 0 >>> 5), ~(i1 << 27 | i13 >>> 5)) | 0;
 i13 = (i14 >>> 31 | tempRet0 << 1) ^ i14;
 if ((i12 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 i14 = i11 & i13;
 i1 = i12 + (i14 << 4) | 0;
 i15 = i1 | 0;
 i16 = HEAP32[i15 >> 2] | 0;
 i17 = HEAP32[i15 + 4 >> 2] | 0;
 L4 : do {
  if ((i16 | 0) == (i2 | 0) & (i17 | 0) == (i3 | 0)) {
   i18 = i1;
  } else {
   i15 = (i13 >>> 23) + ~i13 | 0;
   i19 = i15 << 12 ^ i15;
   i15 = i19 >>> 7 ^ i19;
   i19 = i15 << 2 ^ i15;
   i15 = i19 >>> 20 ^ i19 | 1;
   i19 = 0;
   i20 = i14;
   i21 = i17;
   i22 = i16;
   while (1) {
    if ((i22 | 0) == 0 & (i21 | 0) == 0) {
     break;
    }
    i23 = (i19 | 0) == 0 ? i15 : i19;
    i24 = i23 + i20 & i11;
    i25 = i12 + (i24 << 4) | 0;
    i26 = i25 | 0;
    i27 = HEAP32[i26 >> 2] | 0;
    i28 = HEAP32[i26 + 4 >> 2] | 0;
    if ((i27 | 0) == (i2 | 0) & (i28 | 0) == (i3 | 0)) {
     i18 = i25;
     break L4;
    } else {
     i19 = i23;
     i20 = i24;
     i21 = i28;
     i22 = i27;
    }
   }
   STACKTOP = i8;
   return;
  }
 } while (0);
 if ((i18 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 i3 = HEAP32[i18 + 8 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 i18 = i9 | 0;
 i2 = i6 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i18 >> 2] = i6;
 i6 = i10 | 0;
 i2 = i7 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i6 >> 2] = i7;
 __ZN7WebCore21IDBTransactionBackend28scheduleDeleteRangeOperationExN3WTF10PassRefPtrINS_11IDBKeyRangeEEENS2_INS_12IDBCallbacksEEE(i3, i4, i5, i9, i10);
 i10 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i6 = i10 + 4 | 0;
   i9 = i6 | 0;
   i5 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i9 >> 2] = i5;
    break;
   }
   i5 = i6 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  }
 } while (0);
 i10 = HEAP32[i18 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 i18 = i10 + 4 | 0;
 i10 = i18 | 0;
 i5 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i10 >> 2] = i5;
  STACKTOP = i8;
  return;
 }
 i5 = i18 - 4 | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 __ZN7WebCore11IDBKeyRangeD2Ev(i5);
 __ZN3WTF8fastFreeEPv(i5);
 STACKTOP = i8;
 return;
}
function __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore22IDBObjectStoreMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_EaSERKSF_(i1, i2) {
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
 i8 = i6 + (i7 * 80 & -1) | 0;
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
      i10 = i10 + 80 | 0;
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
    __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore22IDBObjectStoreMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E3addINS_22IdentityHashTranslatorIS8_EERKxRKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIxS4_S6_S8_SE_SB_EEEEOT0_OT1_(i4, i5, i14 | 0, i14);
    i10 = i14 + 80 | 0;
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
     i12 = i15 + 80 | 0;
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
 if ((i15 | 0) > 0) {
  i4 = 0;
  while (1) {
   i8 = i14 + (i4 * 80 & -1) | 0;
   if (!((HEAP32[i8 >> 2] | 0) == (-1 | 0) & (HEAP32[i8 + 4 >> 2] | 0) == (-1 | 0))) {
    __ZN7WebCore22IDBObjectStoreMetadataD1Ev(i14 + (i4 * 80 & -1) + 8 | 0);
   }
   i4 = i4 + 1 | 0;
   if ((i4 | 0) >= (i15 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i14);
 STACKTOP = i3;
 return i1 | 0;
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
 if ((i15 | 0) > 0) {
  i4 = 0;
  while (1) {
   i8 = i14 + (i4 * 48 & -1) | 0;
   if (!((HEAP32[i8 >> 2] | 0) == (-1 | 0) & (HEAP32[i8 + 4 >> 2] | 0) == (-1 | 0))) {
    __ZN7WebCore16IDBIndexMetadataD1Ev(i14 + (i4 * 48 & -1) + 8 | 0);
   }
   i4 = i4 + 1 | 0;
   if ((i4 | 0) >= (i15 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i14);
 STACKTOP = i3;
 return i1 | 0;
}
function __ZN7WebCore18IDBDatabaseBackend19deleteDatabaseAsyncEN3WTF10PassRefPtrINS_12IDBCallbacksEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 if ((i1 | 0) == 0) {
  i5 = HEAP32[i1 + 72 >> 2] | 0;
  i6 = HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] | 0;
  i7 = i2 | 0;
  i8 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = 0;
  i7 = i4 + 16 | 0;
  HEAP32[i7 >> 2] = 0;
  i9 = __Znwj(12) | 0;
  if ((i9 | 0) == 0) {
   i10 = i8;
  } else {
   HEAP32[i9 >> 2] = H_BASE + 376;
   HEAP32[i9 + 4 >> 2] = 0;
   HEAP32[i9 + 8 >> 2] = i8;
   i10 = 0;
  }
  HEAP32[i7 >> 2] = i9;
  FUNCTION_TABLE_viii[i6 & 3](i5, i1 + 8 | 0, i4);
  i5 = HEAP32[i7 >> 2] | 0;
  i7 = i4;
  do {
   if ((i5 | 0) == (i7 | 0)) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 16 >> 2] & 31](i7);
   } else {
    if ((i5 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 20 >> 2] & 31](i5);
   }
  } while (0);
  if ((i10 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i5 = i10 + 4 | 0;
  i10 = i5 | 0;
  i7 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
  if ((i7 | 0) != 0) {
   HEAP32[i10 >> 2] = i7;
   STACKTOP = i3;
   return;
  }
  i7 = i5 - 4 | 0;
  if ((i7 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 31](i7);
  STACKTOP = i3;
  return;
 }
 i7 = i1 | 0;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 i7 = HEAP32[i1 + 72 >> 2] | 0;
 i5 = HEAP32[(HEAP32[i7 >> 2] | 0) + 12 >> 2] | 0;
 i10 = i1 | 0;
 HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
 i6 = i2 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i6 = i4 + 16 | 0;
 HEAP32[i6 >> 2] = 0;
 i9 = __Znwj(12) | 0;
 if ((i9 | 0) == 0) {
  i11 = i2;
 } else {
  HEAP32[i9 >> 2] = H_BASE + 376;
  HEAP32[i9 + 4 >> 2] = i1;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
  HEAP32[i9 + 8 >> 2] = i2;
  i11 = 0;
 }
 HEAP32[i6 >> 2] = i9;
 FUNCTION_TABLE_viii[i5 & 3](i7, i1 + 8 | 0, i4);
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 | 0) == (i4 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 16 >> 2] & 31](i7);
  } else {
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 20 >> 2] & 31](i7);
  }
 } while (0);
 do {
  if ((i11 | 0) != 0) {
   i7 = i11 + 4 | 0;
   i4 = i7 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i4 >> 2] = i6;
    break;
   }
   i6 = i7 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
  }
 } while (0);
 i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
 if ((i11 | 0) == 0) {
  __ZN7WebCore18IDBDatabaseBackendD2Ev(i1);
  __ZN3WTF8fastFreeEPv(i1);
 } else {
  HEAP32[i10 >> 2] = i11;
 }
 i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
 if ((i11 | 0) == 0) {
  __ZN7WebCore18IDBDatabaseBackendD2Ev(i1);
  __ZN3WTF8fastFreeEPv(i1);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i10 >> 2] = i11;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore18IDBDatabaseBackend11deleteIndexExxx(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i9 = i8 | 0;
 i10 = i8 + 8 | 0;
 i11 = i8 + 16 | 0;
 i12 = i8 + 88 | 0;
 HEAP32[i9 >> 2] = i4;
 HEAP32[i9 + 4 >> 2] = i5;
 HEAP32[i10 >> 2] = i6;
 HEAP32[i10 + 4 >> 2] = i7;
 i7 = HEAP32[i1 + 92 >> 2] | 0;
 i6 = HEAP32[i1 + 84 >> 2] | 0;
 i5 = _i64Add(~0, ~i2, i2, i3) | 0;
 i4 = tempRet0;
 i13 = (i5 >>> 22 | i4 << 10) ^ i5;
 i5 = (i4 >>> 22 | 0 << 10) ^ i4;
 i4 = _i64Add(i13, i5, ~(i13 << 13 | 0 >>> 19), ~(i5 << 13 | i13 >>> 19)) | 0;
 i13 = tempRet0;
 i5 = ___muldi3((i4 >>> 8 | i13 << 24) ^ i4, (i13 >>> 8 | 0 << 24) ^ i13, 9, 0) | 0;
 i13 = tempRet0;
 i4 = (i5 >>> 15 | i13 << 17) ^ i5;
 i5 = (i13 >>> 15 | 0 << 17) ^ i13;
 i13 = _i64Add(i4, i5, ~(i4 << 27 | 0 >>> 5), ~(i5 << 27 | i4 >>> 5)) | 0;
 i4 = (i13 >>> 31 | tempRet0 << 1) ^ i13;
 if ((i6 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 i13 = i7 & i4;
 i5 = i6 + (i13 << 4) | 0;
 i14 = i5 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 i16 = HEAP32[i14 + 4 >> 2] | 0;
 L4 : do {
  if ((i15 | 0) == (i2 | 0) & (i16 | 0) == (i3 | 0)) {
   i17 = i5;
  } else {
   i14 = (i4 >>> 23) + ~i4 | 0;
   i18 = i14 << 12 ^ i14;
   i14 = i18 >>> 7 ^ i18;
   i18 = i14 << 2 ^ i14;
   i14 = i18 >>> 20 ^ i18 | 1;
   i18 = 0;
   i19 = i13;
   i20 = i16;
   i21 = i15;
   while (1) {
    if ((i21 | 0) == 0 & (i20 | 0) == 0) {
     break;
    }
    i22 = (i18 | 0) == 0 ? i14 : i18;
    i23 = i22 + i19 & i7;
    i24 = i6 + (i23 << 4) | 0;
    i25 = i24 | 0;
    i26 = HEAP32[i25 >> 2] | 0;
    i27 = HEAP32[i25 + 4 >> 2] | 0;
    if ((i26 | 0) == (i2 | 0) & (i27 | 0) == (i3 | 0)) {
     i17 = i24;
     break L4;
    } else {
     i18 = i22;
     i19 = i23;
     i20 = i27;
     i21 = i26;
    }
   }
   STACKTOP = i8;
   return;
  }
 } while (0);
 if ((i17 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 i3 = HEAP32[i17 + 8 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 __ZNK3WTF7HashMapIxN7WebCore22IDBObjectStoreMetadataENS_7IntHashIyEENS_10HashTraitsIxEENS5_IS2_EEE3getERKx(i11, i1 + 40 | 0, i9);
 __ZNK3WTF7HashMapIxN7WebCore16IDBIndexMetadataENS_7IntHashIyEENS_10HashTraitsIxEENS5_IS2_EEE3getERKx(i12, i11 + 48 | 0, i10);
 i17 = HEAP32[i9 >> 2] | 0;
 i2 = HEAP32[i9 + 4 >> 2] | 0;
 __ZN7WebCore21IDBTransactionBackend28scheduleDeleteIndexOperationExRKNS_16IDBIndexMetadataE(i3, i17, i2, i12);
 __ZN7WebCore18IDBDatabaseBackend11removeIndexExx(i1, i17, i2, HEAP32[i10 >> 2] | 0, HEAP32[i10 + 4 >> 2] | 0);
 __ZN7WebCore16IDBIndexMetadataD1Ev(i12);
 __ZN7WebCore22IDBObjectStoreMetadataD1Ev(i11);
 STACKTOP = i8;
 return;
}
function __ZN7WebCore18IDBDatabaseBackend17removeObjectStoreEx(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i4 = i1 + 40 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = HEAP32[i1 + 44 >> 2] | 0;
  i7 = i6 * 80 & -1 | 0;
  i8 = 0;
  i9 = i6;
 } else {
  i6 = HEAP32[i1 + 48 >> 2] | 0;
  i10 = _i64Add(~0, ~i2, i2, i3) | 0;
  i11 = tempRet0;
  i12 = (i10 >>> 22 | i11 << 10) ^ i10;
  i10 = (i11 >>> 22 | 0 << 10) ^ i11;
  i11 = _i64Add(i12, i10, ~(i12 << 13 | 0 >>> 19), ~(i10 << 13 | i12 >>> 19)) | 0;
  i12 = tempRet0;
  i10 = ___muldi3((i11 >>> 8 | i12 << 24) ^ i11, (i12 >>> 8 | 0 << 24) ^ i12, 9, 0) | 0;
  i12 = tempRet0;
  i11 = (i10 >>> 15 | i12 << 17) ^ i10;
  i10 = (i12 >>> 15 | 0 << 17) ^ i12;
  i12 = _i64Add(i11, i10, ~(i11 << 27 | 0 >>> 5), ~(i10 << 27 | i11 >>> 5)) | 0;
  i11 = (i12 >>> 31 | tempRet0 << 1) ^ i12;
  i12 = i6 & i11;
  i10 = i5 + (i12 * 80 & -1) | 0;
  i13 = i10 | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = HEAP32[i13 + 4 >> 2] | 0;
  L4 : do {
   if ((i14 | 0) == (i2 | 0) & (i15 | 0) == (i3 | 0)) {
    i16 = i10;
   } else {
    i13 = (i11 >>> 23) + ~i11 | 0;
    i17 = i13 << 12 ^ i13;
    i13 = i17 >>> 7 ^ i17;
    i17 = i13 << 2 ^ i13;
    i13 = i17 >>> 20 ^ i17 | 1;
    i17 = 0;
    i18 = i12;
    i19 = i15;
    i20 = i14;
    while (1) {
     if ((i20 | 0) == 0 & (i19 | 0) == 0) {
      i16 = 0;
      break L4;
     }
     i21 = (i17 | 0) == 0 ? i13 : i17;
     i22 = i21 + i18 & i6;
     i23 = i5 + (i22 * 80 & -1) | 0;
     i24 = i23 | 0;
     i25 = HEAP32[i24 >> 2] | 0;
     i26 = HEAP32[i24 + 4 >> 2] | 0;
     if ((i25 | 0) == (i2 | 0) & (i26 | 0) == (i3 | 0)) {
      i16 = i23;
      break;
     } else {
      i17 = i21;
      i18 = i22;
      i19 = i26;
      i20 = i25;
     }
    }
   }
  } while (0);
  i3 = HEAP32[i1 + 44 >> 2] | 0;
  i7 = (i16 | 0) == 0 ? i5 + (i3 * 80 & -1) | 0 : i16;
  i8 = i5;
  i9 = i3;
 }
 if ((i7 | 0) == (i8 + (i9 * 80 & -1) | 0)) {
  return;
 }
 __ZN7WebCore22IDBObjectStoreMetadataD1Ev(i7 + 8 | 0);
 i9 = i7 | 0;
 HEAP32[i9 >> 2] = -1;
 HEAP32[i9 + 4 >> 2] = -1;
 i9 = i1 + 56 | 0;
 HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 i9 = i1 + 52 | 0;
 i7 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
 HEAP32[i9 >> 2] = i7;
 i9 = HEAP32[i1 + 44 >> 2] | 0;
 if (!((i7 * 6 & -1 | 0) < (i9 | 0) & (i9 | 0) > 8)) {
  return;
 }
 __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore22IDBObjectStoreMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E6rehashEiPS4_(i4 | 0, (i9 | 0) / 2 & -1, 0) | 0;
 return;
}
function __ZN7WebCore18IDBDatabaseBackend16clearObjectStoreExxN3WTF10PassRefPtrINS_12IDBCallbacksEEE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i1 + 92 >> 2] | 0;
 i10 = HEAP32[i1 + 84 >> 2] | 0;
 i1 = _i64Add(~0, ~i2, i2, i3) | 0;
 i11 = tempRet0;
 i12 = (i1 >>> 22 | i11 << 10) ^ i1;
 i1 = (i11 >>> 22 | 0 << 10) ^ i11;
 i11 = _i64Add(i12, i1, ~(i12 << 13 | 0 >>> 19), ~(i1 << 13 | i12 >>> 19)) | 0;
 i12 = tempRet0;
 i1 = ___muldi3((i11 >>> 8 | i12 << 24) ^ i11, (i12 >>> 8 | 0 << 24) ^ i12, 9, 0) | 0;
 i12 = tempRet0;
 i11 = (i1 >>> 15 | i12 << 17) ^ i1;
 i1 = (i12 >>> 15 | 0 << 17) ^ i12;
 i12 = _i64Add(i11, i1, ~(i11 << 27 | 0 >>> 5), ~(i1 << 27 | i11 >>> 5)) | 0;
 i11 = (i12 >>> 31 | tempRet0 << 1) ^ i12;
 if ((i10 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i12 = i9 & i11;
 i1 = i10 + (i12 << 4) | 0;
 i13 = i1 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 i15 = HEAP32[i13 + 4 >> 2] | 0;
 L4 : do {
  if ((i14 | 0) == (i2 | 0) & (i15 | 0) == (i3 | 0)) {
   i16 = i1;
  } else {
   i13 = (i11 >>> 23) + ~i11 | 0;
   i17 = i13 << 12 ^ i13;
   i13 = i17 >>> 7 ^ i17;
   i17 = i13 << 2 ^ i13;
   i13 = i17 >>> 20 ^ i17 | 1;
   i17 = 0;
   i18 = i12;
   i19 = i15;
   i20 = i14;
   while (1) {
    if ((i20 | 0) == 0 & (i19 | 0) == 0) {
     break;
    }
    i21 = (i17 | 0) == 0 ? i13 : i17;
    i22 = i21 + i18 & i9;
    i23 = i10 + (i22 << 4) | 0;
    i24 = i23 | 0;
    i25 = HEAP32[i24 >> 2] | 0;
    i26 = HEAP32[i24 + 4 >> 2] | 0;
    if ((i25 | 0) == (i2 | 0) & (i26 | 0) == (i3 | 0)) {
     i16 = i23;
     break L4;
    } else {
     i17 = i21;
     i18 = i22;
     i19 = i26;
     i20 = i25;
    }
   }
   STACKTOP = i7;
   return;
  }
 } while (0);
 if ((i16 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i3 = HEAP32[i16 + 8 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i16 = i8 | 0;
 i2 = i6 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i16 >> 2] = i6;
 __ZN7WebCore21IDBTransactionBackend33scheduleClearObjectStoreOperationExN3WTF10PassRefPtrINS_12IDBCallbacksEEE(i3, i4, i5, i8);
 i8 = HEAP32[i16 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i16 = i8 + 4 | 0;
 i8 = i16 | 0;
 i5 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i8 >> 2] = i5;
  STACKTOP = i7;
  return;
 }
 i5 = i16 - 4 | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
 STACKTOP = i7;
 return;
}
function __ZN7WebCore18IDBDatabaseBackend6commitEx(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i4 = HEAP32[i1 + 84 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i5 = HEAP32[i1 + 92 >> 2] | 0;
 i1 = _i64Add(~0, ~i2, i2, i3) | 0;
 i6 = tempRet0;
 i7 = (i1 >>> 22 | i6 << 10) ^ i1;
 i1 = (i6 >>> 22 | 0 << 10) ^ i6;
 i6 = _i64Add(i7, i1, ~(i7 << 13 | 0 >>> 19), ~(i1 << 13 | i7 >>> 19)) | 0;
 i7 = tempRet0;
 i1 = ___muldi3((i6 >>> 8 | i7 << 24) ^ i6, (i7 >>> 8 | 0 << 24) ^ i7, 9, 0) | 0;
 i7 = tempRet0;
 i6 = (i1 >>> 15 | i7 << 17) ^ i1;
 i1 = (i7 >>> 15 | 0 << 17) ^ i7;
 i7 = _i64Add(i6, i1, ~(i6 << 27 | 0 >>> 5), ~(i1 << 27 | i6 >>> 5)) | 0;
 i6 = (i7 >>> 31 | tempRet0 << 1) ^ i7;
 i7 = i5 & i6;
 i1 = i4 + (i7 << 4) | 0;
 i8 = i1 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = HEAP32[i8 + 4 >> 2] | 0;
 i8 = (i9 | 0) == (i2 | 0) & (i10 | 0) == (i3 | 0);
 L4 : do {
  if (i8) {
   i11 = i1;
  } else {
   i12 = (i6 >>> 23) + ~i6 | 0;
   i13 = i12 << 12 ^ i12;
   i12 = i13 >>> 7 ^ i13;
   i13 = i12 << 2 ^ i12;
   i12 = i13 >>> 20 ^ i13 | 1;
   i13 = 0;
   i14 = i7;
   i15 = i10;
   i16 = i9;
   while (1) {
    if ((i16 | 0) == 0 & (i15 | 0) == 0) {
     break;
    }
    i17 = (i13 | 0) == 0 ? i12 : i13;
    i18 = i17 + i14 & i5;
    i19 = i4 + (i18 << 4) | 0;
    i20 = i19 | 0;
    i21 = HEAP32[i20 >> 2] | 0;
    i22 = HEAP32[i20 + 4 >> 2] | 0;
    if ((i21 | 0) == (i2 | 0) & (i22 | 0) == (i3 | 0)) {
     i11 = i19;
     break L4;
    } else {
     i13 = i17;
     i14 = i18;
     i15 = i22;
     i16 = i21;
    }
   }
   return;
  }
 } while (0);
 if ((i11 | 0) == 0) {
  return;
 }
 L14 : do {
  if (i8) {
   i23 = i1;
   i24 = 11;
  } else {
   i11 = (i6 >>> 23) + ~i6 | 0;
   i16 = i11 << 12 ^ i11;
   i11 = i16 >>> 7 ^ i16;
   i16 = i11 << 2 ^ i11;
   i11 = i16 >>> 20 ^ i16 | 1;
   i16 = 0;
   i15 = i7;
   i14 = i10;
   i13 = i9;
   while (1) {
    if ((i13 | 0) == 0 & (i14 | 0) == 0) {
     i25 = 0;
     break L14;
    }
    i12 = (i16 | 0) == 0 ? i11 : i16;
    i21 = i12 + i15 & i5;
    i22 = i4 + (i21 << 4) | 0;
    i18 = i22 | 0;
    i17 = HEAP32[i18 >> 2] | 0;
    i19 = HEAP32[i18 + 4 >> 2] | 0;
    if ((i17 | 0) == (i2 | 0) & (i19 | 0) == (i3 | 0)) {
     i23 = i22;
     i24 = 11;
     break;
    } else {
     i16 = i12;
     i15 = i21;
     i14 = i19;
     i13 = i17;
    }
   }
  }
 } while (0);
 do {
  if ((i24 | 0) == 11) {
   if ((i23 | 0) == 0) {
    i25 = 0;
    break;
   }
   i25 = HEAP32[i23 + 8 >> 2] | 0;
  }
 } while (0);
 __ZN7WebCore21IDBTransactionBackend6commitEv(i25);
 return;
}
function __ZN7WebCore18IDBDatabaseBackend5abortEx(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i4 = HEAP32[i1 + 84 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i5 = HEAP32[i1 + 92 >> 2] | 0;
 i1 = _i64Add(~0, ~i2, i2, i3) | 0;
 i6 = tempRet0;
 i7 = (i1 >>> 22 | i6 << 10) ^ i1;
 i1 = (i6 >>> 22 | 0 << 10) ^ i6;
 i6 = _i64Add(i7, i1, ~(i7 << 13 | 0 >>> 19), ~(i1 << 13 | i7 >>> 19)) | 0;
 i7 = tempRet0;
 i1 = ___muldi3((i6 >>> 8 | i7 << 24) ^ i6, (i7 >>> 8 | 0 << 24) ^ i7, 9, 0) | 0;
 i7 = tempRet0;
 i6 = (i1 >>> 15 | i7 << 17) ^ i1;
 i1 = (i7 >>> 15 | 0 << 17) ^ i7;
 i7 = _i64Add(i6, i1, ~(i6 << 27 | 0 >>> 5), ~(i1 << 27 | i6 >>> 5)) | 0;
 i6 = (i7 >>> 31 | tempRet0 << 1) ^ i7;
 i7 = i5 & i6;
 i1 = i4 + (i7 << 4) | 0;
 i8 = i1 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = HEAP32[i8 + 4 >> 2] | 0;
 i8 = (i9 | 0) == (i2 | 0) & (i10 | 0) == (i3 | 0);
 L4 : do {
  if (i8) {
   i11 = i1;
  } else {
   i12 = (i6 >>> 23) + ~i6 | 0;
   i13 = i12 << 12 ^ i12;
   i12 = i13 >>> 7 ^ i13;
   i13 = i12 << 2 ^ i12;
   i12 = i13 >>> 20 ^ i13 | 1;
   i13 = 0;
   i14 = i7;
   i15 = i10;
   i16 = i9;
   while (1) {
    if ((i16 | 0) == 0 & (i15 | 0) == 0) {
     break;
    }
    i17 = (i13 | 0) == 0 ? i12 : i13;
    i18 = i17 + i14 & i5;
    i19 = i4 + (i18 << 4) | 0;
    i20 = i19 | 0;
    i21 = HEAP32[i20 >> 2] | 0;
    i22 = HEAP32[i20 + 4 >> 2] | 0;
    if ((i21 | 0) == (i2 | 0) & (i22 | 0) == (i3 | 0)) {
     i11 = i19;
     break L4;
    } else {
     i13 = i17;
     i14 = i18;
     i15 = i22;
     i16 = i21;
    }
   }
   return;
  }
 } while (0);
 if ((i11 | 0) == 0) {
  return;
 }
 L14 : do {
  if (i8) {
   i23 = i1;
   i24 = 11;
  } else {
   i11 = (i6 >>> 23) + ~i6 | 0;
   i16 = i11 << 12 ^ i11;
   i11 = i16 >>> 7 ^ i16;
   i16 = i11 << 2 ^ i11;
   i11 = i16 >>> 20 ^ i16 | 1;
   i16 = 0;
   i15 = i7;
   i14 = i10;
   i13 = i9;
   while (1) {
    if ((i13 | 0) == 0 & (i14 | 0) == 0) {
     i25 = 0;
     break L14;
    }
    i12 = (i16 | 0) == 0 ? i11 : i16;
    i21 = i12 + i15 & i5;
    i22 = i4 + (i21 << 4) | 0;
    i18 = i22 | 0;
    i17 = HEAP32[i18 >> 2] | 0;
    i19 = HEAP32[i18 + 4 >> 2] | 0;
    if ((i17 | 0) == (i2 | 0) & (i19 | 0) == (i3 | 0)) {
     i23 = i22;
     i24 = 11;
     break;
    } else {
     i16 = i12;
     i15 = i21;
     i14 = i19;
     i13 = i17;
    }
   }
  }
 } while (0);
 do {
  if ((i24 | 0) == 11) {
   if ((i23 | 0) == 0) {
    i25 = 0;
    break;
   }
   i25 = HEAP32[i23 + 8 >> 2] | 0;
  }
 } while (0);
 __ZN7WebCore21IDBTransactionBackend5abortEv(i25);
 return;
}
function __ZN7WebCore18IDBDatabaseBackend17deleteObjectStoreExx(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 HEAP32[i7 >> 2] = i4;
 HEAP32[i7 + 4 >> 2] = i5;
 i5 = HEAP32[i1 + 92 >> 2] | 0;
 i4 = HEAP32[i1 + 84 >> 2] | 0;
 i9 = _i64Add(~0, ~i2, i2, i3) | 0;
 i10 = tempRet0;
 i11 = (i9 >>> 22 | i10 << 10) ^ i9;
 i9 = (i10 >>> 22 | 0 << 10) ^ i10;
 i10 = _i64Add(i11, i9, ~(i11 << 13 | 0 >>> 19), ~(i9 << 13 | i11 >>> 19)) | 0;
 i11 = tempRet0;
 i9 = ___muldi3((i10 >>> 8 | i11 << 24) ^ i10, (i11 >>> 8 | 0 << 24) ^ i11, 9, 0) | 0;
 i11 = tempRet0;
 i10 = (i9 >>> 15 | i11 << 17) ^ i9;
 i9 = (i11 >>> 15 | 0 << 17) ^ i11;
 i11 = _i64Add(i10, i9, ~(i10 << 27 | 0 >>> 5), ~(i9 << 27 | i10 >>> 5)) | 0;
 i10 = (i11 >>> 31 | tempRet0 << 1) ^ i11;
 if ((i4 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i11 = i5 & i10;
 i9 = i4 + (i11 << 4) | 0;
 i12 = i9 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 i14 = HEAP32[i12 + 4 >> 2] | 0;
 L4 : do {
  if ((i13 | 0) == (i2 | 0) & (i14 | 0) == (i3 | 0)) {
   i15 = i9;
  } else {
   i12 = (i10 >>> 23) + ~i10 | 0;
   i16 = i12 << 12 ^ i12;
   i12 = i16 >>> 7 ^ i16;
   i16 = i12 << 2 ^ i12;
   i12 = i16 >>> 20 ^ i16 | 1;
   i16 = 0;
   i17 = i11;
   i18 = i14;
   i19 = i13;
   while (1) {
    if ((i19 | 0) == 0 & (i18 | 0) == 0) {
     break;
    }
    i20 = (i16 | 0) == 0 ? i12 : i16;
    i21 = i20 + i17 & i5;
    i22 = i4 + (i21 << 4) | 0;
    i23 = i22 | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    i25 = HEAP32[i23 + 4 >> 2] | 0;
    if ((i24 | 0) == (i2 | 0) & (i25 | 0) == (i3 | 0)) {
     i15 = i22;
     break L4;
    } else {
     i16 = i20;
     i17 = i21;
     i18 = i25;
     i19 = i24;
    }
   }
   STACKTOP = i6;
   return;
  }
 } while (0);
 if ((i15 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i3 = HEAP32[i15 + 8 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 __ZNK3WTF7HashMapIxN7WebCore22IDBObjectStoreMetadataENS_7IntHashIyEENS_10HashTraitsIxEENS5_IS2_EEE3getERKx(i8, i1 + 40 | 0, i7);
 __ZN7WebCore21IDBTransactionBackend34scheduleDeleteObjectStoreOperationERKNS_22IDBObjectStoreMetadataE(i3, i8);
 __ZN7WebCore18IDBDatabaseBackend17removeObjectStoreEx(i1, HEAP32[i7 >> 2] | 0, HEAP32[i7 + 4 >> 2] | 0);
 __ZN7WebCore22IDBObjectStoreMetadataD1Ev(i8);
 STACKTOP = i6;
 return;
}
function __ZN3WTF5DequeINS_6OwnPtrIN7WebCore20IDBPendingDeleteCallEEELj0EE10destroyAllEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i2 = i1 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 i5 = i1 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i6 + (i4 << 2) | 0;
 if (i3 >>> 0 <= i4 >>> 0) {
  if ((i3 | 0) == (i4 | 0)) {
   return;
  }
  i8 = i6 + (i3 << 2) | 0;
  while (1) {
   i9 = HEAP32[i8 >> 2] | 0;
   if ((i9 | 0) != 0) {
    i10 = HEAP32[i9 >> 2] | 0;
    do {
     if ((i10 | 0) != 0) {
      i11 = i10 + 4 | 0;
      i12 = i11 | 0;
      i13 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
      if ((i13 | 0) != 0) {
       HEAP32[i12 >> 2] = i13;
       break;
      }
      i13 = i11 - 4 | 0;
      if ((i13 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 31](i13);
     }
    } while (0);
    __ZdlPv(i9);
   }
   i8 = i8 + 4 | 0;
   if ((i8 | 0) == (i7 | 0)) {
    break;
   }
  }
  return;
 }
 if ((i4 | 0) == 0) {
  i14 = i6;
  i15 = i3;
 } else {
  i3 = i6;
  while (1) {
   i6 = HEAP32[i3 >> 2] | 0;
   if ((i6 | 0) != 0) {
    i4 = HEAP32[i6 >> 2] | 0;
    do {
     if ((i4 | 0) != 0) {
      i8 = i4 + 4 | 0;
      i10 = i8 | 0;
      i13 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
      if ((i13 | 0) != 0) {
       HEAP32[i10 >> 2] = i13;
       break;
      }
      i13 = i8 - 4 | 0;
      if ((i13 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 31](i13);
     }
    } while (0);
    __ZdlPv(i6);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i7 | 0)) {
    break;
   }
  }
  i14 = HEAP32[i5 >> 2] | 0;
  i15 = HEAP32[i2 >> 2] | 0;
 }
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 i1 = i14 + (i2 << 2) | 0;
 if ((i15 | 0) == (i2 | 0)) {
  return;
 }
 i2 = i14 + (i15 << 2) | 0;
 while (1) {
  i15 = HEAP32[i2 >> 2] | 0;
  if ((i15 | 0) != 0) {
   i14 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i14 | 0) != 0) {
     i5 = i14 + 4 | 0;
     i7 = i5 | 0;
     i3 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
     if ((i3 | 0) != 0) {
      HEAP32[i7 >> 2] = i3;
      break;
     }
     i3 = i5 - 4 | 0;
     if ((i3 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
    }
   } while (0);
   __ZdlPv(i15);
  }
  i2 = i2 + 4 | 0;
  if ((i2 | 0) == (i1 | 0)) {
   break;
  }
 }
 return;
}
function __ZN7WebCore18IDBDatabaseBackend14openConnectionEN3WTF10PassRefPtrINS_12IDBCallbacksEEENS2_INS_20IDBDatabaseCallbacksEEExy(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 i8 = i1 + 104 | 0;
 i9 = __Znwj(24) | 0;
 i10 = i9;
 HEAP32[i9 >> 2] = i2;
 i11 = (i2 | 0) == 0;
 if (!i11) {
  i12 = i2 + 4 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 }
 HEAP32[i9 + 4 >> 2] = i3;
 i12 = (i3 | 0) == 0;
 if (!i12) {
  i13 = i3 + 4 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
 }
 i13 = i9 + 8 | 0;
 HEAP32[i13 >> 2] = i6;
 HEAP32[i13 + 4 >> 2] = i7;
 i7 = i9 + 16 | 0;
 HEAP32[i7 >> 2] = i4;
 HEAP32[i7 + 4 >> 2] = i5;
 i5 = HEAP32[i8 >> 2] | 0;
 i7 = i1 + 108 | 0;
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i9 = HEAP32[i1 + 116 >> 2] | 0;
   if ((i4 | 0) == 0) {
    if ((i9 | 0) == 0) {
     i14 = 10;
     break;
    } else {
     i15 = 0;
     break;
    }
   } else {
    if ((i4 | 0) == (i9 - 1 | 0)) {
     i14 = 10;
     break;
    } else {
     i15 = i4;
     break;
    }
   }
  } else {
   if ((i4 + 1 | 0) == (i5 | 0)) {
    i14 = 10;
   } else {
    i15 = i4;
   }
  }
 } while (0);
 if ((i14 | 0) == 10) {
  __ZN3WTF5DequeINS_6OwnPtrIN7WebCore18IDBPendingOpenCallEEELj0EE14expandCapacityEv(i8);
  i15 = HEAP32[i7 >> 2] | 0;
 }
 HEAP32[(HEAP32[i1 + 112 >> 2] | 0) + (i15 << 2) >> 2] = i10;
 i10 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = (i10 | 0) == ((HEAP32[i1 + 116 >> 2] | 0) - 1 | 0) ? 0 : i10 + 1 | 0;
 __ZN7WebCore18IDBDatabaseBackend19processPendingCallsEv(i1);
 do {
  if (!i12) {
   i1 = i3 + 4 | 0;
   i10 = i1 | 0;
   i7 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i10 >> 2] = i7;
    break;
   }
   i7 = i1 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 31](i7);
  }
 } while (0);
 if (i11) {
  return;
 }
 i11 = i2 + 4 | 0;
 i2 = i11 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i3 = i11 - 4 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
 return;
}
function __ZN3WTF7HashMapIxPN7WebCore21IDBTransactionBackendENS_7IntHashIyEENS_10HashTraitsIxEENS6_IS3_EEE6removeENS_24HashTableIteratorAdapterINS_9HashTableIxNS_12KeyValuePairIxS3_EENS_24KeyValuePairKeyExtractorISD_EES5_NS9_18KeyValuePairTraitsES7_EESD_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
 i4 = i3 | 0;
 i5 = i1 | 0;
 i6 = i1 | 0;
 i7 = i1 + 4 | 0;
 i8 = (HEAP32[i6 >> 2] | 0) + (HEAP32[i7 >> 2] << 4) | 0;
 if ((HEAP32[i2 >> 2] | 0) == (i8 | 0)) {
  i9 = 0;
  STACKTOP = i3;
  return i9 | 0;
 }
 i10 = HEAP32[i2 >> 2] | 0;
 if ((i10 | 0) == (i8 | 0)) {
  i9 = 1;
  STACKTOP = i3;
  return i9 | 0;
 }
 i8 = i10 | 0;
 HEAP32[i8 >> 2] = -1;
 HEAP32[i8 + 4 >> 2] = -1;
 i8 = i1 + 16 | 0;
 HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 i10 = i1 + 12 | 0;
 i2 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
 HEAP32[i10 >> 2] = i2;
 i10 = HEAP32[i7 >> 2] | 0;
 if (!((i2 * 6 & -1 | 0) < (i10 | 0) & (i10 | 0) > 8)) {
  i9 = 1;
  STACKTOP = i3;
  return i9 | 0;
 }
 i2 = (i10 | 0) / 2 & -1;
 i11 = HEAP32[i6 >> 2] | 0;
 HEAP32[i7 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 4) | 0;
 if ((i10 | 0) != 0) {
  i2 = i4 | 0;
  i6 = 0;
  while (1) {
   i1 = i11 + (i6 << 4) | 0;
   i7 = i1 | 0;
   i12 = HEAP32[i7 >> 2] | 0;
   i13 = HEAP32[i7 + 4 >> 2] | 0;
   if (!((i12 | 0) == (-1 | 0) & (i13 | 0) == (-1 | 0) | (i12 | 0) == 0 & (i13 | 0) == 0)) {
    __ZN3WTF9HashTableIxNS_12KeyValuePairIxPN7WebCore21IDBTransactionBackendEEENS_24KeyValuePairKeyExtractorIS5_EENS_7IntHashIyEENS_7HashMapIxS4_S9_NS_10HashTraitsIxEENSB_IS4_EEE18KeyValuePairTraitsESC_E16lookupForWritingINS_22IdentityHashTranslatorIS9_EExEENSt3__14pairIPS5_bEERKT0_(i4, i5, i7);
    i7 = HEAP32[i2 >> 2] | 0;
    i13 = i1;
    HEAP32[i7 >> 2] = HEAP32[i13 >> 2];
    HEAP32[i7 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
    HEAP32[i7 + 8 >> 2] = HEAP32[i13 + 8 >> 2];
    HEAP32[i7 + 12 >> 2] = HEAP32[i13 + 12 >> 2];
   }
   i6 = i6 + 1 | 0;
   if ((i6 | 0) == (i10 | 0)) {
    break;
   }
  }
 }
 HEAP32[i8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i11);
 i9 = 1;
 STACKTOP = i3;
 return i9 | 0;
}
function __ZN3WTF9HashTableIPNS_15ListHashSetNodeINS_6RefPtrIN7WebCore20IDBDatabaseCallbacksEEELj256EEES7_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS5_EEEENS_10HashTraitsIS7_EESE_E6rehashEiPS7_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 2) | 0;
 if ((i5 | 0) == 0) {
  i8 = 0;
  i9 = i1 + 16 | 0;
  HEAP32[i9 >> 2] = 0;
  i10 = i7;
  __ZN3WTF8fastFreeEPv(i10);
  return i8 | 0;
 } else {
  i11 = 0;
  i12 = 0;
 }
 while (1) {
  i2 = i7 + (i11 << 2) | 0;
  i13 = HEAP32[i2 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i12;
  } else {
   i14 = HEAP32[i6 >> 2] | 0;
   i16 = HEAP32[i4 >> 2] | 0;
   i17 = HEAP32[i13 >> 2] | 0;
   i18 = i17;
   i19 = i18 + ~(i18 << 15) | 0;
   i18 = (i19 >>> 10 ^ i19) * 9 & -1;
   i19 = i18 >>> 6 ^ i18;
   i18 = i19 + ~(i19 << 11) | 0;
   i19 = i18 >>> 16 ^ i18;
   i18 = (i19 >>> 23) + ~i19 | 0;
   i20 = i18 << 12 ^ i18;
   i18 = i20 >>> 7 ^ i20;
   i20 = i18 << 2 ^ i18;
   i18 = i20 >>> 20 ^ i20 | 1;
   i20 = i19;
   i19 = 0;
   i21 = 0;
   while (1) {
    i22 = i20 & i16;
    i23 = i14 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    i25 = i24;
    if ((i25 | 0) == 0) {
     i26 = 5;
     break;
    } else if ((i25 | 0) == (-1 | 0)) {
     i27 = i23;
    } else {
     if ((HEAP32[i24 >> 2] | 0) == (i17 | 0)) {
      i28 = i23;
      break;
     } else {
      i27 = i21;
     }
    }
    i24 = (i19 | 0) == 0 ? i18 : i19;
    i20 = i24 + i22 | 0;
    i19 = i24;
    i21 = i27;
   }
   if ((i26 | 0) == 5) {
    i26 = 0;
    i28 = (i21 | 0) != 0 ? i21 : i23;
   }
   HEAP32[i28 >> 2] = i13;
   i15 = (i2 | 0) == (i3 | 0) ? i28 : i12;
  }
  i19 = i11 + 1 | 0;
  if ((i19 | 0) == (i5 | 0)) {
   i8 = i15;
   break;
  } else {
   i11 = i19;
   i12 = i15;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
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
function __ZNK3WTF7HashMapIxN7WebCore22IDBObjectStoreMetadataENS_7IntHashIyEENS_10HashTraitsIxEENS5_IS2_EEE3getERKx(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i8 = HEAP32[i3 + 4 >> 2] | 0;
 i3 = _i64Add(i2, i8, ~0, ~i2) | 0;
 i9 = tempRet0;
 i10 = (i3 >>> 22 | i9 << 10) ^ i3;
 i3 = (i9 >>> 22 | 0 << 10) ^ i9;
 i9 = _i64Add(i10, i3, ~(i10 << 13 | 0 >>> 19), ~(i3 << 13 | i10 >>> 19)) | 0;
 i10 = tempRet0;
 i3 = ___muldi3((i9 >>> 8 | i10 << 24) ^ i9, (i10 >>> 8 | 0 << 24) ^ i10, 9, 0) | 0;
 i10 = tempRet0;
 i9 = (i3 >>> 15 | i10 << 17) ^ i3;
 i3 = (i10 >>> 15 | 0 << 17) ^ i10;
 i10 = _i64Add(i9, i3, ~(i9 << 27 | 0 >>> 5), ~(i3 << 27 | i9 >>> 5)) | 0;
 i9 = (i10 >>> 31 | tempRet0 << 1) ^ i10;
 L1 : do {
  if ((i7 | 0) != 0) {
   i10 = i9 & i6;
   i3 = i7 + (i10 * 80 & -1) | 0;
   i11 = i3 | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   i13 = HEAP32[i11 + 4 >> 2] | 0;
   if ((i12 | 0) == (i2 | 0) & (i13 | 0) == (i8 | 0)) {
    i14 = i3;
   } else {
    i3 = (i9 >>> 23) + ~i9 | 0;
    i11 = i3 << 12 ^ i3;
    i3 = i11 >>> 7 ^ i11;
    i11 = i3 << 2 ^ i3;
    i3 = i11 >>> 20 ^ i11 | 1;
    i11 = 0;
    i15 = i10;
    i10 = i13;
    i13 = i12;
    while (1) {
     if ((i13 | 0) == 0 & (i10 | 0) == 0) {
      break L1;
     }
     i12 = (i11 | 0) == 0 ? i3 : i11;
     i16 = i12 + i15 & i6;
     i17 = i7 + (i16 * 80 & -1) | 0;
     i18 = i17 | 0;
     i19 = HEAP32[i18 >> 2] | 0;
     i20 = HEAP32[i18 + 4 >> 2] | 0;
     if ((i19 | 0) == (i2 | 0) & (i20 | 0) == (i8 | 0)) {
      i14 = i17;
      break;
     } else {
      i11 = i12;
      i15 = i16;
      i10 = i20;
      i13 = i19;
     }
    }
   }
   if ((i14 | 0) == 0) {
    break;
   }
   __ZN7WebCore22IDBObjectStoreMetadataC1ERKS0_(i1, i14 + 8 | 0);
   STACKTOP = i4;
   return;
  }
 } while (0);
 HEAP32[i5 >> 2] = 0;
 _memset(i5 + 16 | 0, 0, 20) | 0;
 _memset(i5 + 48 | 0, 0, 20) | 0;
 __ZN7WebCore22IDBObjectStoreMetadataC1ERKS0_(i1, i5);
 __ZN7WebCore22IDBObjectStoreMetadataD1Ev(i5);
 STACKTOP = i4;
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
function __ZN7WebCore18IDBDatabaseBackend14deleteDatabaseEN3WTF10PassRefPtrINS_12IDBCallbacksEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 if ((HEAP32[i1 + 180 >> 2] | 0) == 0) {
  i5 = i4 | 0;
  HEAP32[i5 >> 2] = i2;
  __ZN7WebCore18IDBDatabaseBackend19deleteDatabaseAsyncEN3WTF10PassRefPtrINS_12IDBCallbacksEEE(i1, i4);
  i4 = HEAP32[i5 >> 2] | 0;
  if ((i4 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i5 = i4 + 4 | 0;
  i4 = i5 | 0;
  i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
  if ((i6 | 0) != 0) {
   HEAP32[i4 >> 2] = i6;
   STACKTOP = i3;
   return;
  }
  i6 = i5 - 4 | 0;
  if ((i6 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
  STACKTOP = i3;
  return;
 }
 i6 = HEAP32[i1 + 188 >> 2] | 0;
 i5 = i1 + 24 | 0;
 if ((i6 | 0) != 0) {
  i4 = i6;
  while (1) {
   i6 = HEAP32[i4 >> 2] | 0;
   FUNCTION_TABLE_viiiiii[HEAP32[(HEAP32[i6 >> 2] | 0) + 12 >> 2] & 1](i6, HEAP32[i5 >> 2] | 0, HEAP32[i5 + 4 >> 2] | 0, 0, 0, 0);
   i4 = HEAP32[i4 + 8 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
  }
 }
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i2 >> 2] | 0) + 48 >> 2] & 3](i2, HEAP32[i5 >> 2] | 0, HEAP32[i5 + 4 >> 2] | 0);
 i5 = i1 + 128 | 0;
 i4 = __Znwj(4) | 0;
 i6 = i4;
 HEAP32[i4 >> 2] = i2;
 i2 = HEAP32[i5 >> 2] | 0;
 i4 = i1 + 132 | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i8 = HEAP32[i1 + 140 >> 2] | 0;
   if ((i7 | 0) == 0) {
    if ((i8 | 0) == 0) {
     i9 = 9;
     break;
    } else {
     i10 = 0;
     break;
    }
   } else {
    if ((i7 | 0) == (i8 - 1 | 0)) {
     i9 = 9;
     break;
    } else {
     i10 = i7;
     break;
    }
   }
  } else {
   if ((i7 + 1 | 0) == (i2 | 0)) {
    i9 = 9;
   } else {
    i10 = i7;
   }
  }
 } while (0);
 if ((i9 | 0) == 9) {
  __ZN3WTF5DequeINS_6OwnPtrIN7WebCore20IDBPendingDeleteCallEEELj0EE14expandCapacityEv(i5);
  i10 = HEAP32[i4 >> 2] | 0;
 }
 HEAP32[(HEAP32[i1 + 136 >> 2] | 0) + (i10 << 2) >> 2] = i6;
 i6 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = (i6 | 0) == ((HEAP32[i1 + 140 >> 2] | 0) - 1 | 0) ? 0 : i6 + 1 | 0;
 STACKTOP = i3;
 return;
}
function __ZN3WTF9HashTableIxNS_12KeyValuePairIxPN7WebCore21IDBTransactionBackendEEENS_24KeyValuePairKeyExtractorIS5_EENS_7IntHashIyEENS_7HashMapIxS4_S9_NS_10HashTraitsIxEENSB_IS4_EEE18KeyValuePairTraitsESC_E16lookupForWritingINS_22IdentityHashTranslatorIS9_EExEENSt3__14pairIPS5_bEERKT0_(i1, i2, i3) {
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
 i3 = i4 + (i8 << 4) | 0;
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
    i23 = i4 + (i22 << 4) | 0;
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
function __ZN3WTF9HashTableIPNS_15ListHashSetNodeINS_6RefPtrIN7WebCore20IDBDatabaseCallbacksEEELj256EEES7_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS5_EEEENS_10HashTraitsIS7_EESE_E6removeERKS7_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i4 = HEAP32[i1 + 4 >> 2] | 0;
   i5 = i4 << 2 | 0;
   i6 = i4;
  } else {
   i4 = HEAP32[i1 + 8 >> 2] | 0;
   i7 = HEAP32[HEAP32[i2 >> 2] >> 2] | 0;
   i8 = i7;
   i9 = i8 + ~(i8 << 15) | 0;
   i8 = (i9 >>> 10 ^ i9) * 9 & -1;
   i9 = i8 >>> 6 ^ i8;
   i8 = i9 + ~(i9 << 11) | 0;
   i9 = i8 >>> 16 ^ i8;
   i8 = (i9 >>> 23) + ~i9 | 0;
   i10 = i8 << 12 ^ i8;
   i8 = i10 >>> 7 ^ i10;
   i10 = i8 << 2 ^ i8;
   i8 = i10 >>> 20 ^ i10 | 1;
   i10 = i9;
   i9 = 0;
   while (1) {
    i11 = i10 & i4;
    i12 = i3 + (i11 << 2) | 0;
    i13 = HEAP32[i12 >> 2] | 0;
    i14 = i13;
    if ((i14 | 0) == 0) {
     i15 = 5;
     break;
    } else if ((i14 | 0) != (-1 | 0)) {
     if ((HEAP32[i13 >> 2] | 0) == (i7 | 0)) {
      i15 = 8;
      break;
     }
    }
    i13 = (i9 | 0) == 0 ? i8 : i9;
    i10 = i13 + i11 | 0;
    i9 = i13;
   }
   if ((i15 | 0) == 8) {
    i9 = HEAP32[i1 + 4 >> 2] | 0;
    i5 = (i12 | 0) == 0 ? i3 + (i9 << 2) | 0 : i12;
    i6 = i9;
    break;
   } else if ((i15 | 0) == 5) {
    i9 = HEAP32[i1 + 4 >> 2] | 0;
    i5 = i3 + (i9 << 2) | 0;
    i6 = i9;
    break;
   }
  }
 } while (0);
 if ((i5 | 0) == (i3 + (i6 << 2) | 0)) {
  return;
 }
 HEAP32[i5 >> 2] = -1;
 i5 = i1 + 16 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = i1 + 12 | 0;
 i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i6;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if (!((i6 * 6 & -1 | 0) < (i5 | 0) & (i5 | 0) > 8)) {
  return;
 }
 __ZN3WTF9HashTableIPNS_15ListHashSetNodeINS_6RefPtrIN7WebCore20IDBDatabaseCallbacksEEELj256EEES7_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS5_EEEENS_10HashTraitsIS7_EESE_E6rehashEiPS7_(i1, (i5 | 0) / 2 & -1, 0) | 0;
 return;
}
function __ZN7WebCore18IDBDatabaseBackend17openInternalAsyncEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 if ((i1 | 0) == 0) {
  i4 = abort(72) | 0;
  i5 = HEAP32[(HEAP32[i4 >> 2] | 0) + 16 >> 2] | 0;
  i6 = i3 + 16 | 0;
  HEAP32[i6 >> 2] = 0;
  i7 = __Znwj(8) | 0;
  if ((i7 | 0) != 0) {
   HEAP32[i7 >> 2] = H_BASE + 416;
   HEAP32[i7 + 4 >> 2] = 0;
  }
  HEAP32[i6 >> 2] = i7;
  FUNCTION_TABLE_vii[i5 & 15](i4, i3);
  i4 = HEAP32[i6 >> 2] | 0;
  if ((i4 | 0) == (i3 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 16 >> 2] & 31](i4);
   STACKTOP = i2;
   return;
  }
  if ((i4 | 0) == 0) {
   STACKTOP = i2;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 20 >> 2] & 31](i4);
  STACKTOP = i2;
  return;
 }
 i4 = i1 | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i6 + 1;
 i5 = HEAP32[i1 + 72 >> 2] | 0;
 i7 = HEAP32[(HEAP32[i5 >> 2] | 0) + 16 >> 2] | 0;
 HEAP32[i4 >> 2] = i6 + 2;
 i6 = i3 + 16 | 0;
 HEAP32[i6 >> 2] = 0;
 i8 = __Znwj(8) | 0;
 if ((i8 | 0) == 0) {
  i9 = i1;
 } else {
  HEAP32[i8 >> 2] = H_BASE + 416;
  HEAP32[i8 + 4 >> 2] = i1;
  i9 = 0;
 }
 HEAP32[i6 >> 2] = i8;
 FUNCTION_TABLE_vii[i7 & 15](i5, i3);
 i5 = HEAP32[i6 >> 2] | 0;
 i6 = i3;
 do {
  if ((i5 | 0) == (i6 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 16 >> 2] & 31](i6);
  } else {
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 20 >> 2] & 31](i5);
  }
 } while (0);
 do {
  if ((i9 | 0) != 0) {
   i5 = i9 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) == 0) {
    __ZN7WebCore18IDBDatabaseBackendD2Ev(i9);
    __ZN3WTF8fastFreeEPv(i9);
    break;
   } else {
    HEAP32[i5 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i9 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i9 | 0) == 0) {
  __ZN7WebCore18IDBDatabaseBackendD2Ev(i1);
  __ZN3WTF8fastFreeEPv(i1);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i4 >> 2] = i9;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore18IDBDatabaseBackend15setIndexesReadyExxRKN3WTF6VectorIxLj0ENS1_15CrashOnOverflowEEE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i5 = HEAP32[i1 + 92 >> 2] | 0;
 i4 = HEAP32[i1 + 84 >> 2] | 0;
 i1 = _i64Add(~0, ~i2, i2, i3) | 0;
 i7 = tempRet0;
 i8 = (i1 >>> 22 | i7 << 10) ^ i1;
 i1 = (i7 >>> 22 | 0 << 10) ^ i7;
 i7 = _i64Add(i8, i1, ~(i8 << 13 | 0 >>> 19), ~(i1 << 13 | i8 >>> 19)) | 0;
 i8 = tempRet0;
 i1 = ___muldi3((i7 >>> 8 | i8 << 24) ^ i7, (i8 >>> 8 | 0 << 24) ^ i8, 9, 0) | 0;
 i8 = tempRet0;
 i7 = (i1 >>> 15 | i8 << 17) ^ i1;
 i1 = (i8 >>> 15 | 0 << 17) ^ i8;
 i8 = _i64Add(i7, i1, ~(i7 << 27 | 0 >>> 5), ~(i1 << 27 | i7 >>> 5)) | 0;
 i7 = (i8 >>> 31 | tempRet0 << 1) ^ i8;
 if ((i4 | 0) == 0) {
  return;
 }
 i8 = i5 & i7;
 i1 = i4 + (i8 << 4) | 0;
 i9 = i1 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = HEAP32[i9 + 4 >> 2] | 0;
 L4 : do {
  if ((i10 | 0) == (i2 | 0) & (i11 | 0) == (i3 | 0)) {
   i12 = i1;
  } else {
   i9 = (i7 >>> 23) + ~i7 | 0;
   i13 = i9 << 12 ^ i9;
   i9 = i13 >>> 7 ^ i13;
   i13 = i9 << 2 ^ i9;
   i9 = i13 >>> 20 ^ i13 | 1;
   i13 = 0;
   i14 = i8;
   i15 = i11;
   i16 = i10;
   while (1) {
    if ((i16 | 0) == 0 & (i15 | 0) == 0) {
     break;
    }
    i17 = (i13 | 0) == 0 ? i9 : i13;
    i18 = i17 + i14 & i5;
    i19 = i4 + (i18 << 4) | 0;
    i20 = i19 | 0;
    i21 = HEAP32[i20 >> 2] | 0;
    i22 = HEAP32[i20 + 4 >> 2] | 0;
    if ((i21 | 0) == (i2 | 0) & (i22 | 0) == (i3 | 0)) {
     i12 = i19;
     break L4;
    } else {
     i13 = i17;
     i14 = i18;
     i15 = i22;
     i16 = i21;
    }
   }
   return;
  }
 } while (0);
 if ((i12 | 0) == 0) {
  return;
 }
 i3 = HEAP32[i12 + 8 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 __ZN7WebCore21IDBTransactionBackend32scheduleSetIndexesReadyOperationEj(i3, HEAP32[i6 + 8 >> 2] | 0);
 return;
}
function __ZN7WebCore18IDBDatabaseBackend17createTransactionExN3WTF10PassRefPtrINS_20IDBDatabaseCallbacksEEERKNS1_6VectorIxLj0ENS1_15CrashOnOverflowEEENS_9IndexedDB15TransactionModeE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 16 | 0;
 i11 = i7 + 24 | 0;
 i12 = i7 + 32 | 0;
 HEAP32[i8 >> 2] = i2;
 HEAP32[i8 + 4 >> 2] = i3;
 i13 = i10 | 0;
 i14 = i4 | 0;
 i4 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = 0;
 HEAP32[i13 >> 2] = i4;
 __ZN7WebCore21IDBTransactionBackend6createEPNS_18IDBDatabaseBackendExN3WTF10PassRefPtrINS_20IDBDatabaseCallbacksEEERKNS3_6VectorIxLj0ENS3_15CrashOnOverflowEEENS_9IndexedDB15TransactionModeE(i9, i1, i2, i3, i10, i5, i6);
 i6 = i9 | 0;
 i9 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i6 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i13 = i6 + 4 | 0;
   i5 = i13 | 0;
   i10 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i5 >> 2] = i10;
    break;
   }
   i10 = i13 - 4 | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 31](i10);
  }
 } while (0);
 HEAP32[i11 >> 2] = i9;
 __ZN3WTF9HashTableIxNS_12KeyValuePairIxPN7WebCore21IDBTransactionBackendEEENS_24KeyValuePairKeyExtractorIS5_EENS_7IntHashIyEENS_7HashMapIxS4_S9_NS_10HashTraitsIxEENSB_IS4_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKxS4_EENS_18HashTableAddResultINS_17HashTableIteratorIxS5_S7_S9_SF_SC_EEEEOT0_OT1_(i12, i1 + 84 | 0, i8, i11);
 if ((i9 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i11 = i9 | 0;
 i8 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
 if ((i8 | 0) == 0) {
  __ZN7WebCore21IDBTransactionBackendD1Ev(i9);
  __ZN3WTF8fastFreeEPv(i9);
  STACKTOP = i7;
  return;
 } else {
  HEAP32[i11 >> 2] = i8;
  STACKTOP = i7;
  return;
 }
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore12IDBCallbacksEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E8reinsertEOS4_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 i5 = i2;
 i6 = i5 + ~(i5 << 15) | 0;
 i5 = (i6 >>> 10 ^ i6) * 9 & -1;
 i6 = i5 >>> 6 ^ i5;
 i5 = i6 + ~(i6 << 11) | 0;
 i6 = i5 >>> 16 ^ i5;
 i5 = i6 & i4;
 i7 = i3 + (i5 << 2) | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 L1 : do {
  if ((i8 | 0) == 0) {
   i9 = 0;
   i10 = i7;
   i11 = 3;
  } else {
   i12 = (i6 >>> 23) + ~i6 | 0;
   i13 = i12 << 12 ^ i12;
   i12 = i13 >>> 7 ^ i13;
   i13 = i12 << 2 ^ i12;
   i12 = i13 >>> 20 ^ i13 | 1;
   i13 = 0;
   i14 = 0;
   i15 = i5;
   i16 = i7;
   i17 = i8;
   while (1) {
    if ((i17 | 0) == (i2 | 0)) {
     i18 = i16;
     break L1;
    }
    i19 = (i17 | 0) == -1 ? i16 : i13;
    i20 = (i14 | 0) == 0 ? i12 : i14;
    i21 = i20 + i15 & i4;
    i22 = i3 + (i21 << 2) | 0;
    i23 = HEAP32[i22 >> 2] | 0;
    if ((i23 | 0) == 0) {
     i9 = i19;
     i10 = i22;
     i11 = 3;
     break;
    } else {
     i13 = i19;
     i14 = i20;
     i15 = i21;
     i16 = i22;
     i17 = i23;
    }
   }
  }
 } while (0);
 if ((i11 | 0) == 3) {
  i18 = (i9 | 0) != 0 ? i9 : i10;
 }
 i10 = i18 | 0;
 i9 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i11 = i9 + 4 | 0;
   i3 = i11 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i3 >> 2] = i4;
    break;
   }
   i4 = i11 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
  }
 } while (0);
 i9 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i10 >> 2] = i9;
 return i18 | 0;
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore12IDBCallbacksEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 2) | 0;
 if ((i5 | 0) == 0) {
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
  i2 = i7 + (i10 << 2) | 0;
  i6 = HEAP32[i2 >> 2] | 0;
  if ((i6 | 0) == (-1 | 0) | (i6 | 0) == 0) {
   i12 = i11;
  } else {
   i6 = __ZN3WTF9HashTableINS_6RefPtrIN7WebCore12IDBCallbacksEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E8reinsertEOS4_(i1, i2) | 0;
   i12 = (i2 | 0) == (i3 | 0) ? i6 : i11;
  }
  i6 = i10 + 1 | 0;
  if ((i6 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i6;
   i11 = i12;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i13 = 0;
 } else {
  i8 = i12;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = HEAP32[i7 + (i13 << 2) >> 2] | 0;
  i11 = i1;
  do {
   if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
    i10 = i1 + 4 | 0;
    i3 = i10 | 0;
    i6 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
    if ((i6 | 0) != 0) {
     HEAP32[i3 >> 2] = i6;
     break;
    }
    i6 = i10 - 4 | 0;
    if ((i6 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
   }
  } while (0);
  i1 = i13 + 1 | 0;
  if ((i1 | 0) < (i5 | 0)) {
   i13 = i1;
  } else {
   i8 = i12;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN7WebCore18IDBDatabaseBackend8addIndexExRKNS_16IDBIndexMetadataEx(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 80 | 0;
 i11 = i7 + 96 | 0;
 HEAP32[i8 >> 2] = i2;
 HEAP32[i8 + 4 >> 2] = i3;
 i3 = i1 + 40 | 0;
 __ZNK3WTF7HashMapIxN7WebCore22IDBObjectStoreMetadataENS_7IntHashIyEENS_10HashTraitsIxEENS5_IS2_EEE3getERKx(i9, i3, i8);
 __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKxRKS3_EENS_18HashTableAddResultINS_17HashTableIteratorIxS4_S6_S8_SE_SB_EEEEOT0_OT1_(i10, i9 + 48 | 0, i4 + 8 | 0, i4);
 if ((HEAP8[i10 + 8 | 0] & 1) == 0) {
  __ZN7WebCore16IDBIndexMetadataaSERKS0_((HEAP32[i10 >> 2] | 0) + 8 | 0, i4) | 0;
 }
 if (!((i5 | 0) == (-1 | 0) & (i6 | 0) == (-1 | 0))) {
  i4 = i9 + 40 | 0;
  HEAP32[i4 >> 2] = i5;
  HEAP32[i4 + 4 >> 2] = i6;
 }
 __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore22IDBObjectStoreMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKxRS3_EENS_18HashTableAddResultINS_17HashTableIteratorIxS4_S6_S8_SE_SB_EEEEOT0_OT1_(i11, i3 | 0, i8, i9);
 if ((HEAP8[i11 + 8 | 0] & 1) != 0) {
  __ZN7WebCore22IDBObjectStoreMetadataD1Ev(i9);
  STACKTOP = i7;
  return;
 }
 __ZN7WebCore22IDBObjectStoreMetadataaSERKS0_((HEAP32[i11 >> 2] | 0) + 8 | 0, i9) | 0;
 __ZN7WebCore22IDBObjectStoreMetadataD1Ev(i9);
 STACKTOP = i7;
 return;
}
function __ZN7WebCore22IDBObjectStoreMetadataD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = HEAP32[i1 + 48 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 52 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    i5 = i2 + (i4 * 48 & -1) | 0;
    if (!((HEAP32[i5 >> 2] | 0) == (-1 | 0) & (HEAP32[i5 + 4 >> 2] | 0) == (-1 | 0))) {
     __ZN7WebCore16IDBIndexMetadataD1Ev(i2 + (i4 * 48 & -1) + 8 | 0);
    }
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
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
function __ZN3WTF11ListHashSetINS_6RefPtrIN7WebCore20IDBDatabaseCallbacksEEELj256ENS_7PtrHashIS4_EEE4findERKS4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   i5 = HEAP32[i2 + 4 >> 2] | 0;
   i6 = i5 << 2 | 0;
   i7 = i5;
  } else {
   i5 = HEAP32[i2 + 8 >> 2] | 0;
   i8 = HEAP32[i3 >> 2] | 0;
   i9 = i8;
   i10 = i9 + ~(i9 << 15) | 0;
   i9 = (i10 >>> 10 ^ i10) * 9 & -1;
   i10 = i9 >>> 6 ^ i9;
   i9 = i10 + ~(i10 << 11) | 0;
   i10 = i9 >>> 16 ^ i9;
   i9 = (i10 >>> 23) + ~i10 | 0;
   i11 = i9 << 12 ^ i9;
   i9 = i11 >>> 7 ^ i11;
   i11 = i9 << 2 ^ i9;
   i9 = i11 >>> 20 ^ i11 | 1;
   i11 = i10;
   i10 = 0;
   while (1) {
    i12 = i11 & i5;
    i13 = i4 + (i12 << 2) | 0;
    i14 = HEAP32[i13 >> 2] | 0;
    i15 = i14;
    if ((i15 | 0) == 0) {
     i16 = 5;
     break;
    } else if ((i15 | 0) != (-1 | 0)) {
     if ((HEAP32[i14 >> 2] | 0) == (i8 | 0)) {
      i16 = 8;
      break;
     }
    }
    i14 = (i10 | 0) == 0 ? i9 : i10;
    i11 = i14 + i12 | 0;
    i10 = i14;
   }
   if ((i16 | 0) == 5) {
    i10 = HEAP32[i2 + 4 >> 2] | 0;
    i6 = i4 + (i10 << 2) | 0;
    i7 = i10;
    break;
   } else if ((i16 | 0) == 8) {
    i10 = HEAP32[i2 + 4 >> 2] | 0;
    i6 = (i13 | 0) == 0 ? i4 + (i10 << 2) | 0 : i13;
    i7 = i10;
    break;
   }
  }
 } while (0);
 if ((i6 | 0) == (i4 + (i7 << 2) | 0)) {
  HEAP32[i1 >> 2] = i2;
  HEAP32[i1 + 4 >> 2] = 0;
  return;
 } else {
  i7 = HEAP32[i6 >> 2] | 0;
  HEAP32[i1 >> 2] = i2;
  HEAP32[i1 + 4 >> 2] = i7;
  return;
 }
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
function ___ZNSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend17openInternalAsyncEvE3$_0NS_9allocatorIS4_EEFvRKNS2_19IDBDatabaseMetadataEbEEclES9_Ob_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 if ((HEAP8[i3] & 1) == 0) {
  __ZN7WebCore18IDBDatabaseBackend23processPendingOpenCallsEb(i4, 0);
  return;
 }
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i1 = i3 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 }
 i1 = i4 + 8 | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = i3;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 | 0;
   i1 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i3 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i5 = i2 + 8 | 0;
 i1 = HEAP32[i5 + 4 >> 2] | 0;
 i3 = i4 + 16 | 0;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i3 + 4 >> 2] = i1;
 i1 = i2 + 16 | 0;
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 i5 = i4 + 24 | 0;
 HEAP32[i5 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i5 + 4 >> 2] = i3;
 i3 = i2 + 24 | 0;
 i5 = HEAP32[i3 + 4 >> 2] | 0;
 i1 = i4 + 32 | 0;
 HEAP32[i1 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i1 + 4 >> 2] = i5;
 __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore22IDBObjectStoreMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_EaSERKSF_(i4 + 40 | 0, i2 + 32 | 0) | 0;
 __ZN7WebCore18IDBDatabaseBackend19processPendingCallsEv(i4);
 return;
}
function __ZN7WebCore18IDBDatabaseBackend6createERKN3WTF6StringES4_PNS_26IDBFactoryBackendInterfaceERNS_19IDBServerConnectionE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 i8 = __ZN3WTF10fastMallocEj(208) | 0;
 i9 = i8;
 HEAP32[i8 >> 2] = 1;
 i10 = HEAP32[i2 >> 2] | 0;
 HEAP32[i8 + 8 >> 2] = i10;
 if ((i10 | 0) != 0) {
  i2 = i10 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 _memset(i8 + 16 | 0, 0, 44) | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i8 + 64 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i3 = i2 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 HEAP32[i8 + 68 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i3 = i4 + 4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 HEAP32[i8 + 72 >> 2] = i5;
 i3 = i5 + 4 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 __ZN7WebCore25IDBTransactionCoordinator6createEv(i7);
 i3 = i7 | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i8 + 76 >> 2] = i7;
 _memset(i8 + 80 | 0, 0, 116) | 0;
 i7 = __Znwj(3080) | 0;
 i3 = i7 + 8 | 0;
 HEAP32[i7 >> 2] = i3;
 HEAP8[i7 + 4 | 0] = 0;
 _memset(i3 | 0, 0, 3072) | 0;
 HEAP32[i8 + 196 >> 2] = i7;
 HEAP8[i8 + 200 | 0] = 0;
 __ZN7WebCore18IDBDatabaseBackend17openInternalAsyncEv(i9);
 HEAP32[i1 >> 2] = i9;
 STACKTOP = i6;
 return;
}
function __ZN7WebCore18IDBDatabaseBackend20didOpenInternalAsyncERKNS_19IDBDatabaseMetadataEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 if (!i3) {
  __ZN7WebCore18IDBDatabaseBackend23processPendingOpenCallsEb(i1, 0);
  return;
 }
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i1 + 8 | 0;
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
 i3 = i1 + 16 | 0;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i3 + 4 >> 2] = i4;
 i4 = i2 + 16 | 0;
 i3 = HEAP32[i4 + 4 >> 2] | 0;
 i5 = i1 + 24 | 0;
 HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i5 + 4 >> 2] = i3;
 i3 = i2 + 24 | 0;
 i5 = HEAP32[i3 + 4 >> 2] | 0;
 i4 = i1 + 32 | 0;
 HEAP32[i4 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i4 + 4 >> 2] = i5;
 __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore22IDBObjectStoreMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_EaSERKSF_(i1 + 40 | 0, i2 + 32 | 0) | 0;
 __ZN7WebCore18IDBDatabaseBackend19processPendingCallsEv(i1);
 return;
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
function __ZN7WebCore16IDBIndexMetadataD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
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
function __ZN7WebCore18IDBDatabaseBackendC2ERKN3WTF6StringES4_PNS_26IDBFactoryBackendInterfaceERNS_19IDBServerConnectionE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 HEAP32[i1 >> 2] = 1;
 i8 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 + 8 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i2 = i8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 _memset(i1 + 16 | 0, 0, 44) | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 + 64 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i3 = i2 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 68 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i3 = i4 + 4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 72 >> 2] = i5;
 i3 = i5 + 4 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 __ZN7WebCore25IDBTransactionCoordinator6createEv(i7);
 i3 = i7 | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 76 >> 2] = i7;
 _memset(i1 + 80 | 0, 0, 116) | 0;
 i7 = __Znwj(3080) | 0;
 i3 = i7 + 8 | 0;
 HEAP32[i7 >> 2] = i3;
 HEAP8[i7 + 4 | 0] = 0;
 _memset(i3 | 0, 0, 3072) | 0;
 HEAP32[i1 + 196 >> 2] = i7;
 HEAP8[i1 + 200 | 0] = 0;
 STACKTOP = i6;
 return;
}
function __ZN7WebCore18IDBDatabaseBackendC1ERKN3WTF6StringES4_PNS_26IDBFactoryBackendInterfaceERNS_19IDBServerConnectionE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 HEAP32[i1 >> 2] = 1;
 i8 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 + 8 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i2 = i8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 _memset(i1 + 16 | 0, 0, 44) | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 + 64 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i3 = i2 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 68 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i3 = i4 + 4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 72 >> 2] = i5;
 i3 = i5 + 4 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 __ZN7WebCore25IDBTransactionCoordinator6createEv(i7);
 i3 = i7 | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 76 >> 2] = i7;
 _memset(i1 + 80 | 0, 0, 116) | 0;
 i7 = __Znwj(3080) | 0;
 i3 = i7 + 8 | 0;
 HEAP32[i7 >> 2] = i3;
 HEAP8[i7 + 4 | 0] = 0;
 _memset(i3 | 0, 0, 3072) | 0;
 HEAP32[i1 + 196 >> 2] = i7;
 HEAP8[i1 + 200 | 0] = 0;
 STACKTOP = i6;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend12setIndexKeysExxN3WTF10PassRefPtrINS2_6IDBKeyEEERKNS4_6VectorIxLj0ENS4_15CrashOnOverflowEEERKNS8_INS8_INS4_6RefPtrIS6_EELj0ES9_EELj0ES9_EEE3$_1NS_9allocatorISJ_EEFvNS5_INS2_16IDBDatabaseErrorEEEEEclEOSN__(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 i1 = i4 | 0;
 HEAP32[i1 >> 2] = i2;
 __ZN7WebCore21IDBTransactionBackend5abortEN3WTF10PassRefPtrINS_16IDBDatabaseErrorEEE(i5, i4);
 i4 = HEAP32[i1 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i1 = i4 | 0;
 i5 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i1 >> 2] = i5;
  STACKTOP = i3;
  return;
 }
 i5 = HEAP32[i4 + 8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i1 = i5 | 0;
   i2 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i1 >> 2] = i2;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i4);
 STACKTOP = i3;
 return;
}
function __ZN3WTF5DequeINS_6OwnPtrIN7WebCore20IDBPendingDeleteCallEEELj0EE14expandCapacityEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i3 + 1 + (i3 >>> 2) | 0;
 i7 = i6 >>> 0 > 16 >>> 0 ? i6 : 16;
 if (i7 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i6 = __ZN3WTF18fastMallocGoodSizeEj(i7 << 2) | 0;
 HEAP32[i2 >> 2] = i6 >>> 2;
 i7 = __ZN3WTF10fastMallocEj(i6) | 0;
 i6 = i7;
 HEAP32[i4 >> 2] = i6;
 i8 = i1 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = HEAP32[i1 + 4 >> 2] | 0;
 if (i9 >>> 0 > i10 >>> 0) {
  _memcpy(i7 | 0, i5 | 0, i10 << 2) | 0;
  i7 = HEAP32[i8 >> 2] | 0;
  i1 = i7 - i3 + (HEAP32[i2 >> 2] | 0) | 0;
  _memcpy((HEAP32[i4 >> 2] | 0) + (i1 << 2) | 0, i5 + (i7 << 2) | 0, i3 - i7 << 2) | 0;
  HEAP32[i8 >> 2] = i1;
 } else {
  _memcpy(i6 + (i9 << 2) | 0, i5 + (i9 << 2) | 0, i10 - i9 << 2) | 0;
 }
 if ((i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i2 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZN3WTF5DequeINS_6OwnPtrIN7WebCore18IDBPendingOpenCallEEELj0EE14expandCapacityEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i3 + 1 + (i3 >>> 2) | 0;
 i7 = i6 >>> 0 > 16 >>> 0 ? i6 : 16;
 if (i7 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i6 = __ZN3WTF18fastMallocGoodSizeEj(i7 << 2) | 0;
 HEAP32[i2 >> 2] = i6 >>> 2;
 i7 = __ZN3WTF10fastMallocEj(i6) | 0;
 i6 = i7;
 HEAP32[i4 >> 2] = i6;
 i8 = i1 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = HEAP32[i1 + 4 >> 2] | 0;
 if (i9 >>> 0 > i10 >>> 0) {
  _memcpy(i7 | 0, i5 | 0, i10 << 2) | 0;
  i7 = HEAP32[i8 >> 2] | 0;
  i1 = i7 - i3 + (HEAP32[i2 >> 2] | 0) | 0;
  _memcpy((HEAP32[i4 >> 2] | 0) + (i1 << 2) | 0, i5 + (i7 << 2) | 0, i3 - i7 << 2) | 0;
  HEAP32[i8 >> 2] = i1;
 } else {
  _memcpy(i6 + (i9 << 2) | 0, i5 + (i9 << 2) | 0, i10 - i9 << 2) | 0;
 }
 if ((i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i2 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 376 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 396 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 400 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 428 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 432 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 436 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 440 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 456 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 460 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 464 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 468 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 472 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 476 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 480 >> 2] = F_BASE_vii + 2;
}
function ___ZNSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend19deleteDatabaseAsyncEN3WTF10PassRefPtrINS2_12IDBCallbacksEEEE3$_2NS_9allocatorIS8_EEFvbEED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i1 >> 2] = H_BASE + 376;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  }
 } while (0);
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i6 = i1;
  __ZdlPv(i6);
  return;
 }
 i5 = i2 | 0;
 i3 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore18IDBDatabaseBackendD2Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  i6 = i1;
  __ZdlPv(i6);
  return;
 } else {
  HEAP32[i5 >> 2] = i3;
  i6 = i1;
  __ZdlPv(i6);
  return;
 }
}
function ___ZNSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend19deleteDatabaseAsyncEN3WTF10PassRefPtrINS2_12IDBCallbacksEEEE3$_2NS_9allocatorIS8_EEFvbEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  }
 } while (0);
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i6 = i1;
  __ZdlPv(i6);
  return;
 }
 i5 = i2 | 0;
 i3 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore18IDBDatabaseBackendD2Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  i6 = i1;
  __ZdlPv(i6);
  return;
 } else {
  HEAP32[i5 >> 2] = i3;
  i6 = i1;
  __ZdlPv(i6);
  return;
 }
}
function __ZN7WebCore18IDBDatabaseBackend14addObjectStoreERKNS_22IDBObjectStoreMetadataEx(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 if (!((i3 | 0) == (-1 | 0) & (i4 | 0) == (-1 | 0))) {
  i7 = i1 + 32 | 0;
  HEAP32[i7 >> 2] = i3;
  HEAP32[i7 + 4 >> 2] = i4;
 }
 __ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore22IDBObjectStoreMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKxRKS3_EENS_18HashTableAddResultINS_17HashTableIteratorIxS4_S6_S8_SE_SB_EEEEOT0_OT1_(i6, i1 + 40 | 0, i2 + 8 | 0, i2);
 if ((HEAP8[i6 + 8 | 0] & 1) != 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore22IDBObjectStoreMetadataaSERKS0_((HEAP32[i6 >> 2] | 0) + 8 | 0, i2) | 0;
 STACKTOP = i5;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend19deleteDatabaseAsyncEN3WTF10PassRefPtrINS2_12IDBCallbacksEEEE3$_2NS_9allocatorIS8_EEFvbEED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 376;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  }
 } while (0);
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i5 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore18IDBDatabaseBackendD2Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i5;
  return;
 }
}
function ___ZNSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend19deleteDatabaseAsyncEN3WTF10PassRefPtrINS2_12IDBCallbacksEEEE3$_2NS_9allocatorIS8_EEFvbEE7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  }
 } while (0);
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i5 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore18IDBDatabaseBackendD2Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i5;
  return;
 }
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
function ___ZNSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend12setIndexKeysExxN3WTF10PassRefPtrINS2_6IDBKeyEEERKNS4_6VectorIxLj0ENS4_15CrashOnOverflowEEERKNS8_INS8_INS4_6RefPtrIS6_EELj0ES9_EELj0ES9_EEE3$_1NS_9allocatorISJ_EEFvNS5_INS2_16IDBDatabaseErrorEEEEED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 456;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 i4 = i2 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore21IDBTransactionBackendD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 } else {
  HEAP32[i4 >> 2] = i5;
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
}
function ___ZNSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend12setIndexKeysExxN3WTF10PassRefPtrINS2_6IDBKeyEEERKNS4_6VectorIxLj0ENS4_15CrashOnOverflowEEERKNS8_INS8_INS4_6RefPtrIS6_EELj0ES9_EELj0ES9_EEE3$_1NS_9allocatorISJ_EEFvNS5_INS2_16IDBDatabaseErrorEEEEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 i4 = i2 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore21IDBTransactionBackendD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 } else {
  HEAP32[i4 >> 2] = i5;
  i3 = i1;
  __ZdlPv(i3);
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
function ___ZNKSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend12setIndexKeysExxN3WTF10PassRefPtrINS2_6IDBKeyEEERKNS4_6VectorIxLj0ENS4_15CrashOnOverflowEEERKNS8_INS8_INS4_6RefPtrIS6_EELj0ES9_EELj0ES9_EEE3$_1NS_9allocatorISJ_EEFvNS5_INS2_16IDBDatabaseErrorEEEEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = __Znwj(8) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 456;
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 HEAP32[i2 + 4 >> 2] = i4;
 if ((i4 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 i1 = i4 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 i3 = i2;
 return i3 | 0;
}
function ___ZNSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend12setIndexKeysExxN3WTF10PassRefPtrINS2_6IDBKeyEEERKNS4_6VectorIxLj0ENS4_15CrashOnOverflowEEERKNS8_INS8_INS4_6RefPtrIS6_EELj0ES9_EELj0ES9_EEE3$_1NS_9allocatorISJ_EEFvNS5_INS2_16IDBDatabaseErrorEEEEED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 456;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore21IDBTransactionBackendD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function ___ZNKSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend19deleteDatabaseAsyncEN3WTF10PassRefPtrINS2_12IDBCallbacksEEEE3$_2NS_9allocatorIS8_EEFvbEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = __Znwj(12) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 376;
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 HEAP32[i2 + 4 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i5 = i4 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 i5 = i1 + 8 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i2 + 8 >> 2] = i1;
 i3 = i2;
 return i3 | 0;
}
function __ZN7WebCore18IDBDatabaseBackend35transactionFinishedAndCompleteFiredEPNS_21IDBTransactionBackendE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = (i2 | 0) != 0;
 if (i3) {
  i4 = i2 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 if ((HEAP32[i2 + 24 >> 2] | 0) == 2) {
  __ZN7WebCore18IDBDatabaseBackend19processPendingCallsEv(i1);
 }
 if (!i3) {
  return;
 }
 i3 = i2 | 0;
 i1 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) == 0) {
  __ZN7WebCore21IDBTransactionBackendD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  HEAP32[i3 >> 2] = i1;
  return;
 }
}
function ___ZNSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend12setIndexKeysExxN3WTF10PassRefPtrINS2_6IDBKeyEEERKNS4_6VectorIxLj0ENS4_15CrashOnOverflowEEERKNS8_INS8_INS4_6RefPtrIS6_EELj0ES9_EELj0ES9_EEE3$_1NS_9allocatorISJ_EEFvNS5_INS2_16IDBDatabaseErrorEEEEE7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore21IDBTransactionBackendD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function ___ZNSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend17openInternalAsyncEvE3$_0NS_9allocatorIS4_EEFvRKNS2_19IDBDatabaseMetadataEbEED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 416;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 i4 = i2 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore18IDBDatabaseBackendD2Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 } else {
  HEAP32[i4 >> 2] = i5;
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
}
function ___ZNKSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend12setIndexKeysExxN3WTF10PassRefPtrINS2_6IDBKeyEEERKNS4_6VectorIxLj0ENS4_15CrashOnOverflowEEERKNS8_INS8_INS4_6RefPtrIS6_EELj0ES9_EELj0ES9_EEE3$_1NS_9allocatorISJ_EEFvNS5_INS2_16IDBDatabaseErrorEEEEE7__cloneEPNS0_6__baseISO_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 456;
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 HEAP32[i2 + 4 >> 2] = i3;
 if ((i3 | 0) == 0) {
  return;
 }
 i2 = i3 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend17openInternalAsyncEvE3$_0NS_9allocatorIS4_EEFvRKNS2_19IDBDatabaseMetadataEbEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 i4 = i2 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore18IDBDatabaseBackendD2Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  i3 = i1;
  __ZdlPv(i3);
  return;
 } else {
  HEAP32[i4 >> 2] = i5;
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
}
function ___ZNKSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend19deleteDatabaseAsyncEN3WTF10PassRefPtrINS2_12IDBCallbacksEEEE3$_2NS_9allocatorIS8_EEFvbEE7__cloneEPNS0_6__baseISB_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 376;
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 HEAP32[i2 + 4 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i1 + 8 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i2 + 8 >> 2] = i1;
 return;
}
function __ZN7WebCore18IDBDatabaseBackend18transactionStartedEPNS_21IDBTransactionBackendE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((HEAP32[i2 + 24 >> 2] | 0) != 2) {
  return;
 }
 i3 = i2 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 i3 = i1 + 80 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i2;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore21IDBTransactionBackendD1Ev(i1);
  __ZN3WTF8fastFreeEPv(i1);
  return;
 } else {
  HEAP32[i2 >> 2] = i3;
  return;
 }
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
function ___ZNKSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend17openInternalAsyncEvE3$_0NS_9allocatorIS4_EEFvRKNS2_19IDBDatabaseMetadataEbEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = __Znwj(8) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 416;
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 HEAP32[i2 + 4 >> 2] = i4;
 if ((i4 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 i1 = i4 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 i3 = i2;
 return i3 | 0;
}
function ___ZNSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend17openInternalAsyncEvE3$_0NS_9allocatorIS4_EEFvRKNS2_19IDBDatabaseMetadataEbEED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 416;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore18IDBDatabaseBackendD2Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function ___ZNSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend17openInternalAsyncEvE3$_0NS_9allocatorIS4_EEFvRKNS2_19IDBDatabaseMetadataEbEE7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore18IDBDatabaseBackendD2Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function ___ZNKSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend17openInternalAsyncEvE3$_0NS_9allocatorIS4_EEFvRKNS2_19IDBDatabaseMetadataEbEE7__cloneEPNS0_6__baseISA_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 416;
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 HEAP32[i2 + 4 >> 2] = i3;
 if ((i3 | 0) == 0) {
  return;
 }
 i2 = i3 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
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
function dynCall_viiiiiiiiiiii(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13) {
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
 i12 = i12 | 0;
 i13 = i13 | 0;
 FUNCTION_TABLE_viiiiiiiiiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0, i10 | 0, i11 | 0, i12 | 0, i13 | 0);
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
function b3(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12) {
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
 i12 = i12 | 0;
 abort(3);
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
 FUNCTION_TABLE_viiiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0);
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
function dynCall_viiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
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
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 3](i2 | 0, i3 | 0, i4 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZN7WebCore18IDBDatabaseBackend23isDeleteDatabaseBlockedEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 180 >> 2] | 0) != 0 | 0;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function b7(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(7);
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
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 15](i2 | 0, i3 | 0);
}
function __ZN7WebCore18IDBDatabaseBackend15connectionCountEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 180 >> 2] | 0;
}
function b0(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(0);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 7](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 31](i2 | 0);
}
function b5(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(5);
}
function b8(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(8);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
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
function b4(i1) {
 i1 = i1 | 0;
 abort(4);
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
  var FUNCTION_TABLE_viiiii = [b0,b0,__ZN7WebCore18IDBDatabaseBackendC2ERKN3WTF6StringES4_PNS_26IDBFactoryBackendInterfaceERNS_19IDBServerConnectionE,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore18IDBDatabaseBackendD2Ev,b1,___ZNSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend17openInternalAsyncEvE3$_0NS_9allocatorIS4_EEFvRKNS2_19IDBDatabaseMetadataEbEE18destroy_deallocateEv_,b1,___ZNSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend17openInternalAsyncEvE3$_0NS_9allocatorIS4_EEFvRKNS2_19IDBDatabaseMetadataEbEED2Ev_,b1,___ZNSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend17openInternalAsyncEvE3$_0NS_9allocatorIS4_EEFvRKNS2_19IDBDatabaseMetadataEbEED0Ev_,b1,___ZNSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend17openInternalAsyncEvE3$_0NS_9allocatorIS4_EEFvRKNS2_19IDBDatabaseMetadataEbEE7destroyEv_,b1,___ZNSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend19deleteDatabaseAsyncEN3WTF10PassRefPtrINS2_12IDBCallbacksEEEE3$_2NS_9allocatorIS8_EEFvbEE7destroyEv_,b1,___ZNSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend12setIndexKeysExxN3WTF10PassRefPtrINS2_6IDBKeyEEERKNS4_6VectorIxLj0ENS4_15CrashOnOverflowEEERKNS8_INS8_INS4_6RefPtrIS6_EELj0ES9_EELj0ES9_EEE3$_1NS_9allocatorISJ_EEFvNS5_INS2_16IDBDatabaseErrorEEEEE18destroy_deallocateEv_,b1,___ZNSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend12setIndexKeysExxN3WTF10PassRefPtrINS2_6IDBKeyEEERKNS4_6VectorIxLj0ENS4_15CrashOnOverflowEEERKNS8_INS8_INS4_6RefPtrIS6_EELj0ES9_EELj0ES9_EEE3$_1NS_9allocatorISJ_EEFvNS5_INS2_16IDBDatabaseErrorEEEEED0Ev_,b1,___ZNSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend19deleteDatabaseAsyncEN3WTF10PassRefPtrINS2_12IDBCallbacksEEEE3$_2NS_9allocatorIS8_EEFvbEED2Ev_,b1,___ZNSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend12setIndexKeysExxN3WTF10PassRefPtrINS2_6IDBKeyEEERKNS4_6VectorIxLj0ENS4_15CrashOnOverflowEEERKNS8_INS8_INS4_6RefPtrIS6_EELj0ES9_EELj0ES9_EEE3$_1NS_9allocatorISJ_EEFvNS5_INS2_16IDBDatabaseErrorEEEEE7destroyEv_,b1,___ZNSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend12setIndexKeysExxN3WTF10PassRefPtrINS2_6IDBKeyEEERKNS4_6VectorIxLj0ENS4_15CrashOnOverflowEEERKNS8_INS8_INS4_6RefPtrIS6_EELj0ES9_EELj0ES9_EEE3$_1NS_9allocatorISJ_EEFvNS5_INS2_16IDBDatabaseErrorEEEEED2Ev_,b1,___ZNSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend19deleteDatabaseAsyncEN3WTF10PassRefPtrINS2_12IDBCallbacksEEEE3$_2NS_9allocatorIS8_EEFvbEED0Ev_,b1,___ZNSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend19deleteDatabaseAsyncEN3WTF10PassRefPtrINS2_12IDBCallbacksEEEE3$_2NS_9allocatorIS8_EEFvbEE18destroy_deallocateEv_,b1,b1
  ,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,___ZNSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend12setIndexKeysExxN3WTF10PassRefPtrINS2_6IDBKeyEEERKNS4_6VectorIxLj0ENS4_15CrashOnOverflowEEERKNS8_INS8_INS4_6RefPtrIS6_EELj0ES9_EELj0ES9_EEE3$_1NS_9allocatorISJ_EEFvNS5_INS2_16IDBDatabaseErrorEEEEEclEOSN__,b2,___ZNKSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend12setIndexKeysExxN3WTF10PassRefPtrINS2_6IDBKeyEEERKNS4_6VectorIxLj0ENS4_15CrashOnOverflowEEERKNS8_INS8_INS4_6RefPtrIS6_EELj0ES9_EELj0ES9_EEE3$_1NS_9allocatorISJ_EEFvNS5_INS2_16IDBDatabaseErrorEEEEE7__cloneEPNS0_6__baseISO_EE_,b2,___ZNKSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend17openInternalAsyncEvE3$_0NS_9allocatorIS4_EEFvRKNS2_19IDBDatabaseMetadataEbEE7__cloneEPNS0_6__baseISA_EE_,b2,___ZNKSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend19deleteDatabaseAsyncEN3WTF10PassRefPtrINS2_12IDBCallbacksEEEE3$_2NS_9allocatorIS8_EEFvbEE7__cloneEPNS0_6__baseISB_EE_,b2,___ZNSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend19deleteDatabaseAsyncEN3WTF10PassRefPtrINS2_12IDBCallbacksEEEE3$_2NS_9allocatorIS8_EEFvbEEclEOb_,b2,b2,b2,b2,b2];
  var FUNCTION_TABLE_viiiiiiiiiiii = [b3,b3];
  var FUNCTION_TABLE_ii = [b4,b4,___ZNKSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend17openInternalAsyncEvE3$_0NS_9allocatorIS4_EEFvRKNS2_19IDBDatabaseMetadataEbEE7__cloneEv_,b4,___ZNKSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend19deleteDatabaseAsyncEN3WTF10PassRefPtrINS2_12IDBCallbacksEEEE3$_2NS_9allocatorIS8_EEFvbEE7__cloneEv_,b4,___ZNKSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend12setIndexKeysExxN3WTF10PassRefPtrINS2_6IDBKeyEEERKNS4_6VectorIxLj0ENS4_15CrashOnOverflowEEERKNS8_INS8_INS4_6RefPtrIS6_EELj0ES9_EELj0ES9_EEE3$_1NS_9allocatorISJ_EEFvNS5_INS2_16IDBDatabaseErrorEEEEE7__cloneEv_,b4];
  var FUNCTION_TABLE_viii = [b5,b5,___ZNSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend17openInternalAsyncEvE3$_0NS_9allocatorIS4_EEFvRKNS2_19IDBDatabaseMetadataEbEEclES9_Ob_,b5];
  var FUNCTION_TABLE_v = [b6,b6];
  var FUNCTION_TABLE_viiiiii = [b7,b7];
  var FUNCTION_TABLE_iii = [b8,b8];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_viiiiiiiiiiii: dynCall_viiiiiiiiiiii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_viiiiii: dynCall_viiiiii, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_viiiiiiiiiiii": invoke_viiiiiiiiiiii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_viiiiii": invoke_viiiiii, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "cttz_i8": cttz_i8, "ctlz_i8": ctlz_i8, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_viiiiiiiiiiii = Module["dynCall_viiiiiiiiiiii"] = asm["dynCall_viiiiiiiiiiii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_viiiiii = Module["dynCall_viiiiii"] = asm["dynCall_viiiiii"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore18IDBDatabaseBackendD2Ev","_strlen","__ZN3WTF9HashTableIxNS_12KeyValuePairIxPN7WebCore21IDBTransactionBackendEEENS_24KeyValuePairKeyExtractorIS5_EENS_7IntHashIyEENS_7HashMapIxS4_S9_NS_10HashTraitsIxEENSB_IS4_EEE18KeyValuePairTraitsESC_E3addINS_22IdentityHashTranslatorIS9_EERKxRKS5_EENS_18HashTableAddResultINS_17HashTableIteratorIxS5_S7_S9_SF_SC_EEEEOT0_OT1_","__ZN7WebCore22IDBObjectStoreMetadataC1ERKS0_","__ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore22IDBObjectStoreMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_EaSERKSF_","__ZN7WebCore18IDBDatabaseBackend14deleteDatabaseEN3WTF10PassRefPtrINS_12IDBCallbacksEEE","__ZN7WebCore18IDBDatabaseBackend6createERKN3WTF6StringES4_PNS_26IDBFactoryBackendInterfaceERNS_19IDBServerConnectionE","__ZN7WebCore18IDBDatabaseBackend11deleteIndexExxx","__ZN7WebCore18IDBDatabaseBackend17removeObjectStoreEx","__ZN7WebCore18IDBDatabaseBackend14addObjectStoreERKNS_22IDBObjectStoreMetadataEx","__ZN7WebCore18IDBDatabaseBackend11deleteRangeExxN3WTF10PassRefPtrINS_11IDBKeyRangeEEENS2_INS_12IDBCallbacksEEE","__ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore22IDBObjectStoreMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E16lookupForWritingINS_22IdentityHashTranslatorIS8_EExEENSt3__14pairIPS4_bEERKT0_","_memcpy","__ZN7WebCore18IDBDatabaseBackend16clearObjectStoreExxN3WTF10PassRefPtrINS_12IDBCallbacksEEE","__ZN7WebCore18IDBDatabaseBackend20didOpenInternalAsyncERKNS_19IDBDatabaseMetadataEb","__ZN3WTF5DequeINS_6OwnPtrIN7WebCore18IDBPendingOpenCallEEELj0EE14expandCapacityEv","__ZN7WebCore18IDBDatabaseBackend5closeEN3WTF10PassRefPtrINS_20IDBDatabaseCallbacksEEE","___ZNSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend19deleteDatabaseAsyncEN3WTF10PassRefPtrINS2_12IDBCallbacksEEEE3$_2NS_9allocatorIS8_EEFvbEEclEOb_","__ZN7WebCore18IDBDatabaseBackendC2ERKN3WTF6StringES4_PNS_26IDBFactoryBackendInterfaceERNS_19IDBServerConnectionE","__ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore22IDBObjectStoreMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E3addINS_22IdentityHashTranslatorIS8_EERKxRKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIxS4_S6_S8_SE_SB_EEEEOT0_OT1_","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore12IDBCallbacksEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_","__ZN7WebCore18IDBDatabaseBackend17deleteObjectStoreExx","__ZN7WebCore18IDBDatabaseBackend22openConnectionInternalEN3WTF10PassRefPtrINS_12IDBCallbacksEEENS2_INS_20IDBDatabaseCallbacksEEExy","__ZN7WebCore18IDBDatabaseBackend23isDeleteDatabaseBlockedEv","__ZN7WebCore18IDBDatabaseBackend17openInternalAsyncEv","__ZN7WebCore16IDBIndexMetadataD1Ev","__ZN7WebCore18IDBDatabaseBackend18transactionStartedEPNS_21IDBTransactionBackendE","__ZN7WebCore18IDBDatabaseBackend14openConnectionEN3WTF10PassRefPtrINS_12IDBCallbacksEEENS2_INS_20IDBDatabaseCallbacksEEExy","__ZN3WTF11ListHashSetINS_6RefPtrIN7WebCore20IDBDatabaseCallbacksEEELj256ENS_7PtrHashIS4_EEE4findERKS4_","___ZNSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend17openInternalAsyncEvE3$_0NS_9allocatorIS4_EEFvRKNS2_19IDBDatabaseMetadataEbEED0Ev_","___ZNSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend19deleteDatabaseAsyncEN3WTF10PassRefPtrINS2_12IDBCallbacksEEEE3$_2NS_9allocatorIS8_EEFvbEE7destroyEv_","__ZN3WTF9HashTableIPNS_15ListHashSetNodeINS_6RefPtrIN7WebCore20IDBDatabaseCallbacksEEELj256EEES7_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS5_EEEENS_10HashTraitsIS7_EESE_E3addINS_21ListHashSetTranslatorISB_EERKS5_PNS_24ListHashSetNodeAllocatorIS5_Lj256EEEEENS_18HashTableAddResultINS_17HashTableIteratorIS7_S7_S8_SC_SE_SE_EEEEOT0_OT1_","___ZNSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend12setIndexKeysExxN3WTF10PassRefPtrINS2_6IDBKeyEEERKNS4_6VectorIxLj0ENS4_15CrashOnOverflowEEERKNS8_INS8_INS4_6RefPtrIS6_EELj0ES9_EELj0ES9_EEE3$_1NS_9allocatorISJ_EEFvNS5_INS2_16IDBDatabaseErrorEEEEED0Ev_","___ZNKSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend19deleteDatabaseAsyncEN3WTF10PassRefPtrINS2_12IDBCallbacksEEEE3$_2NS_9allocatorIS8_EEFvbEE7__cloneEPNS0_6__baseISB_EE_","__ZN7WebCore18IDBDatabaseBackend11removeIndexExx","__ZN7WebCore18IDBDatabaseBackend35transactionFinishedAndCompleteFiredEPNS_21IDBTransactionBackendE","__ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore22IDBObjectStoreMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKxRS3_EENS_18HashTableAddResultINS_17HashTableIteratorIxS4_S6_S8_SE_SB_EEEEOT0_OT1_","___ZNSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend19deleteDatabaseAsyncEN3WTF10PassRefPtrINS2_12IDBCallbacksEEEE3$_2NS_9allocatorIS8_EEFvbEED2Ev_","__ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E6rehashEiPS4_","__ZN7WebCore18IDBDatabaseBackend3getExxxN3WTF10PassRefPtrINS_11IDBKeyRangeEEEbNS2_INS_12IDBCallbacksEEE","__ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E3addINS_22IdentityHashTranslatorIS8_EERKxRKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIxS4_S6_S8_SE_SB_EEEEOT0_OT1_","__ZN7WebCore18IDBDatabaseBackend6commitEx","__ZN7WebCore18IDBDatabaseBackend32transactionFinishedAndAbortFiredEPNS_21IDBTransactionBackendE","__ZN7WebCore18IDBDatabaseBackend10openCursorExxxN3WTF10PassRefPtrINS_11IDBKeyRangeEEENS_9IndexedDB15CursorDirectionEbNS0_8TaskTypeENS2_INS_12IDBCallbacksEEE","__ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore22IDBObjectStoreMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKxRKS3_EENS_18HashTableAddResultINS_17HashTableIteratorIxS4_S6_S8_SE_SB_EEEEOT0_OT1_","__ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEEaSERKS3_","__ZN3WTF5DequeINS_6OwnPtrIN7WebCore20IDBPendingDeleteCallEEELj0EE10destroyAllEv","__ZN7WebCore18IDBDatabaseBackend15setIndexesReadyExxRKN3WTF6VectorIxLj0ENS1_15CrashOnOverflowEEE","__ZN3WTF7HashMapIxPN7WebCore21IDBTransactionBackendENS_7IntHashIyEENS_10HashTraitsIxEENS6_IS3_EEE6removeENS_24HashTableIteratorAdapterINS_9HashTableIxNS_12KeyValuePairIxS3_EENS_24KeyValuePairKeyExtractorISD_EES5_NS9_18KeyValuePairTraitsES7_EESD_EE","__ZN7WebCore18IDBDatabaseBackend19deleteDatabaseAsyncEN3WTF10PassRefPtrINS_12IDBCallbacksEEE","___ZNSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend17openInternalAsyncEvE3$_0NS_9allocatorIS4_EEFvRKNS2_19IDBDatabaseMetadataEbEE18destroy_deallocateEv_","__ZN7WebCore11IDBKeyRangeD2Ev","__ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore22IDBObjectStoreMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E6rehashEiPS4_","__ZN7WebCore18IDBDatabaseBackend17createTransactionExN3WTF10PassRefPtrINS_20IDBDatabaseCallbacksEEERKNS1_6VectorIxLj0ENS1_15CrashOnOverflowEEENS_9IndexedDB15TransactionModeE","__ZN3WTF9HashTableIxNS_12KeyValuePairIxPN7WebCore21IDBTransactionBackendEEENS_24KeyValuePairKeyExtractorIS5_EENS_7IntHashIyEENS_7HashMapIxS4_S9_NS_10HashTraitsIxEENSB_IS4_EEE18KeyValuePairTraitsESC_E16lookupForWritingINS_22IdentityHashTranslatorIS9_EExEENSt3__14pairIPS5_bEERKT0_","___ZNKSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend19deleteDatabaseAsyncEN3WTF10PassRefPtrINS2_12IDBCallbacksEEEE3$_2NS_9allocatorIS8_EEFvbEE7__cloneEv_","__ZN7WebCore22IDBObjectStoreMetadataaSERKS0_","___ZNSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend17openInternalAsyncEvE3$_0NS_9allocatorIS4_EEFvRKNS2_19IDBDatabaseMetadataEbEED2Ev_","__ZN7WebCore18IDBDatabaseBackend12setIndexKeysExxN3WTF10PassRefPtrINS_6IDBKeyEEERKNS1_6VectorIxLj0ENS1_15CrashOnOverflowEEERKNS5_INS5_INS1_6RefPtrIS3_EELj0ES6_EELj0ES6_EE","_memset","__ZN7WebCore18IDBDatabaseBackend5abortExN3WTF10PassRefPtrINS_16IDBDatabaseErrorEEE","___ZNSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend17openInternalAsyncEvE3$_0NS_9allocatorIS4_EEFvRKNS2_19IDBDatabaseMetadataEbEE7destroyEv_","___ZNSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend12setIndexKeysExxN3WTF10PassRefPtrINS2_6IDBKeyEEERKNS4_6VectorIxLj0ENS4_15CrashOnOverflowEEERKNS8_INS8_INS4_6RefPtrIS6_EELj0ES9_EELj0ES9_EEE3$_1NS_9allocatorISJ_EEFvNS5_INS2_16IDBDatabaseErrorEEEEE18destroy_deallocateEv_","__ZN7WebCore18IDBDatabaseBackend17createObjectStoreExxRKN3WTF6StringERKNS_10IDBKeyPathEb","__ZN7WebCore22IDBObjectStoreMetadataD1Ev","__ZN3WTF9HashTableIxNS_12KeyValuePairIxPN7WebCore21IDBTransactionBackendEEENS_24KeyValuePairKeyExtractorIS5_EENS_7IntHashIyEENS_7HashMapIxS4_S9_NS_10HashTraitsIxEENSB_IS4_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKxS4_EENS_18HashTableAddResultINS_17HashTableIteratorIxS5_S7_S9_SF_SC_EEEEOT0_OT1_","__ZN3WTF9HashTableIPNS_15ListHashSetNodeINS_6RefPtrIN7WebCore20IDBDatabaseCallbacksEEELj256EEES7_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS5_EEEENS_10HashTraitsIS7_EESE_E3addINS_21ListHashSetTranslatorISB_EES5_PNS_24ListHashSetNodeAllocatorIS5_Lj256EEEEENS_18HashTableAddResultINS_17HashTableIteratorIS7_S7_S8_SC_SE_SE_EEEEOT0_OT1_","___ZNSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend12setIndexKeysExxN3WTF10PassRefPtrINS2_6IDBKeyEEERKNS4_6VectorIxLj0ENS4_15CrashOnOverflowEEERKNS8_INS8_INS4_6RefPtrIS6_EELj0ES9_EELj0ES9_EEE3$_1NS_9allocatorISJ_EEFvNS5_INS2_16IDBDatabaseErrorEEEEED2Ev_","__ZN3WTF9HashTableIPNS_15ListHashSetNodeINS_6RefPtrIN7WebCore20IDBDatabaseCallbacksEEELj256EEES7_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS5_EEEENS_10HashTraitsIS7_EESE_E6rehashEiPS7_","__ZN3WTF5DequeINS_6OwnPtrIN7WebCore20IDBPendingDeleteCallEEELj0EE14expandCapacityEv","___ZNSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend12setIndexKeysExxN3WTF10PassRefPtrINS2_6IDBKeyEEERKNS4_6VectorIxLj0ENS4_15CrashOnOverflowEEERKNS8_INS8_INS4_6RefPtrIS6_EELj0ES9_EELj0ES9_EEE3$_1NS_9allocatorISJ_EEFvNS5_INS2_16IDBDatabaseErrorEEEEE7destroyEv_","__ZN7WebCore18IDBDatabaseBackend5abortEx","__ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E16lookupForWritingINS_22IdentityHashTranslatorIS8_EExEENSt3__14pairIPS4_bEERKT0_","__ZN7WebCore18IDBDatabaseBackend23processPendingOpenCallsEb","___ZNKSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend12setIndexKeysExxN3WTF10PassRefPtrINS2_6IDBKeyEEERKNS4_6VectorIxLj0ENS4_15CrashOnOverflowEEERKNS8_INS8_INS4_6RefPtrIS6_EELj0ES9_EELj0ES9_EEE3$_1NS_9allocatorISJ_EEFvNS5_INS2_16IDBDatabaseErrorEEEEE7__cloneEv_","__ZN7WebCore18IDBDatabaseBackend19processPendingCallsEv","___ZNKSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend17openInternalAsyncEvE3$_0NS_9allocatorIS4_EEFvRKNS2_19IDBDatabaseMetadataEbEE7__cloneEv_","__ZN7WebCore18IDBDatabaseBackend30runIntVersionChangeTransactionEN3WTF10PassRefPtrINS_12IDBCallbacksEEENS2_INS_20IDBDatabaseCallbacksEEExx","___ZNSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend12setIndexKeysExxN3WTF10PassRefPtrINS2_6IDBKeyEEERKNS4_6VectorIxLj0ENS4_15CrashOnOverflowEEERKNS8_INS8_INS4_6RefPtrIS6_EELj0ES9_EELj0ES9_EEE3$_1NS_9allocatorISJ_EEFvNS5_INS2_16IDBDatabaseErrorEEEEEclEOSN__","__ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EERKxRKS3_EENS_18HashTableAddResultINS_17HashTableIteratorIxS4_S6_S8_SE_SB_EEEEOT0_OT1_","__ZN7WebCore16IDBIndexMetadataaSERKS0_","___ZNKSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend12setIndexKeysExxN3WTF10PassRefPtrINS2_6IDBKeyEEERKNS4_6VectorIxLj0ENS4_15CrashOnOverflowEEERKNS8_INS8_INS4_6RefPtrIS6_EELj0ES9_EELj0ES9_EEE3$_1NS_9allocatorISJ_EEFvNS5_INS2_16IDBDatabaseErrorEEEEE7__cloneEPNS0_6__baseISO_EE_","___ZNSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend19deleteDatabaseAsyncEN3WTF10PassRefPtrINS2_12IDBCallbacksEEEE3$_2NS_9allocatorIS8_EEFvbEED0Ev_","___ZNKSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend17openInternalAsyncEvE3$_0NS_9allocatorIS4_EEFvRKNS2_19IDBDatabaseMetadataEbEE7__cloneEPNS0_6__baseISA_EE_","__ZNK3WTF7HashMapIxN7WebCore22IDBObjectStoreMetadataENS_7IntHashIyEENS_10HashTraitsIxEENS5_IS2_EEE3getERKx","__ZN7WebCore18IDBDatabaseBackend8addIndexExRKNS_16IDBIndexMetadataEx","__ZN3WTF9HashTableIxNS_12KeyValuePairIxN7WebCore16IDBIndexMetadataEEENS_24KeyValuePairKeyExtractorIS4_EENS_7IntHashIyEENS_7HashMapIxS3_S8_NS_10HashTraitsIxEENSA_IS3_EEE18KeyValuePairTraitsESB_EaSERKSF_","__ZN7WebCore18IDBDatabaseBackend19transactionFinishedEPNS_21IDBTransactionBackendE","__ZN7WebCore18IDBDatabaseBackend11createIndexExxxRKN3WTF6StringERKNS_10IDBKeyPathEbb","__ZN3WTF9HashTableIPNS_15ListHashSetNodeINS_6RefPtrIN7WebCore20IDBDatabaseCallbacksEEELj256EEES7_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS5_EEEENS_10HashTraitsIS7_EESE_E6removeERKS7_","__ZN7WebCore18IDBDatabaseBackend5countExxxN3WTF10PassRefPtrINS_11IDBKeyRangeEEENS2_INS_12IDBCallbacksEEE","__ZN7WebCore18IDBDatabaseBackend15connectionCountEv","__ZN7WebCore18IDBDatabaseBackend3putExxN3WTF10PassRefPtrINS_12SharedBufferEEENS2_INS_6IDBKeyEEENS0_7PutModeENS2_INS_12IDBCallbacksEEERKNS1_6VectorIxLj0ENS1_15CrashOnOverflowEEERKNSA_INSA_INS1_6RefPtrIS5_EELj0ESB_EELj0ESB_EE","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore12IDBCallbacksEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E8reinsertEOS4_","__ZNK3WTF7HashMapIxN7WebCore16IDBIndexMetadataENS_7IntHashIyEENS_10HashTraitsIxEENS5_IS2_EEE3getERKx","___ZNSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend19deleteDatabaseAsyncEN3WTF10PassRefPtrINS2_12IDBCallbacksEEEE3$_2NS_9allocatorIS8_EEFvbEE18destroy_deallocateEv_","__ZN3WTF5DequeINS_6OwnPtrIN7WebCore18IDBPendingOpenCallEEELj0EE10destroyAllEv","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore12IDBCallbacksEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_","___ZNSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend17openInternalAsyncEvE3$_0NS_9allocatorIS4_EEFvRKNS2_19IDBDatabaseMetadataEbEEclES9_Ob_","_i64Add","_i64Subtract","_bitshift64Shl","_bitshift64Lshr","_bitshift64Ashr","_llvm_ctlz_i32","_llvm_cttz_i32"]
