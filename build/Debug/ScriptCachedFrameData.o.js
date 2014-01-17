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
H_BASE = parentModule["_malloc"](0 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 0;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore21ScriptCachedFrameDataC1ERNS_5FrameE;
var __ZN7WebCore21ScriptCachedFrameDataD1Ev;
/* no memory initializer */
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENS_12KeyValuePairIS4_N3JSC6StrongINS2_11JSDOMWindowEEEEENS_24KeyValuePairKeyExtractorISA_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSG_IS9_EEEESH_E3addINS_17HashMapTranslatorISJ_SE_EERPS3_S9_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_SA_SC_SE_SJ_SH_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0;
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
  HEAP32[i5 >> 2] = __ZN3WTF16fastZeroedMallocEj(i9 << 3) | 0;
  if ((i10 | 0) != 0) {
   i9 = 0;
   while (1) {
    i8 = i9 << 3 | 0;
    i11 = HEAP32[i8 >> 2] | 0;
    if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
     __ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENS_12KeyValuePairIS4_N3JSC6StrongINS2_11JSDOMWindowEEEEENS_24KeyValuePairKeyExtractorISA_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSG_IS9_EEEESH_E8reinsertEOSA_(i2, i8) | 0;
    }
    i9 = i9 + 1 | 0;
    if ((i9 | 0) == (i10 | 0)) {
     break;
    }
   }
  }
  HEAP32[i2 + 16 >> 2] = 0;
  __ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENS_12KeyValuePairIS4_N3JSC6StrongINS2_11JSDOMWindowEEEEENS_24KeyValuePairKeyExtractorISA_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSG_IS9_EEEESH_E15deallocateTableEPSA_i(0, i10);
  i12 = HEAP32[i5 >> 2] | 0;
  i13 = i7;
 } else {
  i12 = i6;
  i13 = i2 + 8 | 0;
 }
 i6 = HEAP32[i13 >> 2] | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 i10 = i7;
 i9 = i10 + ~(i10 << 15) | 0;
 i10 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i10 >>> 6 ^ i10;
 i10 = i9 + ~(i9 << 11) | 0;
 i9 = i10 >>> 16 ^ i10;
 i10 = i9 & i6;
 i8 = i12 + (i10 << 3) | 0;
 i11 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i14 = i8;
   i15 = i7;
  } else {
   i16 = (i9 >>> 23) + ~i9 | 0;
   i17 = i16 << 12 ^ i16;
   i16 = i17 >>> 7 ^ i17;
   i17 = i16 << 2 ^ i16;
   i16 = i17 >>> 20 ^ i17 | 1;
   i17 = 0;
   i18 = 0;
   i19 = i10;
   i20 = i8;
   i21 = i11;
   while (1) {
    if ((i21 | 0) == (i7 | 0)) {
     i22 = 13;
     break;
    }
    i23 = (i21 | 0) == -1 ? i20 : i18;
    i24 = (i17 | 0) == 0 ? i16 : i17;
    i25 = i24 + i19 & i6;
    i26 = i12 + (i25 << 3) | 0;
    i27 = HEAP32[i26 >> 2] | 0;
    if ((i27 | 0) == 0) {
     i22 = 15;
     break;
    } else {
     i17 = i24;
     i18 = i23;
     i19 = i25;
     i20 = i26;
     i21 = i27;
    }
   }
   if ((i22 | 0) == 13) {
    i21 = i12 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i19 = i1;
    HEAP32[i19 >> 2] = i20;
    HEAP32[i19 + 4 >> 2] = i21;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i22 | 0) == 15) {
    if ((i23 | 0) == 0) {
     i14 = i26;
     i15 = i7;
     break;
    }
    i21 = i23;
    HEAP32[i21 >> 2] = 0;
    HEAP32[i21 + 4 >> 2] = 0;
    i21 = i2 + 16 | 0;
    HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) - 1;
    i14 = i23;
    i15 = HEAP32[i3 >> 2] | 0;
    break;
   }
  }
 } while (0);
 if ((i15 | 0) != 0) {
  i3 = i15 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 i3 = i14 | 0;
 i23 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i15;
 do {
  if ((i23 | 0) != 0) {
   i15 = i23 | 0;
   i3 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    __ZN7WebCore15DOMWrapperWorldD1Ev(i23);
    __ZN3WTF8fastFreeEPv(i23);
    break;
   } else {
    HEAP32[i15 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i23 = i14 + 4 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i4 = i23 | 0;
   i15 = HEAP32[i4 >> 2] | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   i7 = HEAP32[(i15 & -4096) + 12 >> 2] | 0;
   i26 = i15;
   i22 = i7 + 84 | 0;
   i12 = i26 + 12 | 0;
   if ((i26 | 0) == (HEAP32[i22 >> 2] | 0)) {
    HEAP32[i22 >> 2] = HEAP32[i12 >> 2];
   }
   i22 = i15 + 8 | 0;
   i15 = HEAP32[i22 >> 2] | 0;
   i6 = HEAP32[i12 >> 2] | 0;
   HEAP32[i15 + 12 >> 2] = i6;
   HEAP32[i6 + 8 >> 2] = i15;
   HEAP32[i22 >> 2] = 0;
   HEAP32[i12 >> 2] = 0;
   i22 = i7 + 80 | 0;
   HEAP32[i12 >> 2] = HEAP32[i22 >> 2];
   HEAP32[i22 >> 2] = i26;
   HEAP32[i4 >> 2] = 0;
  } else {
   if ((HEAP32[i3 + 4 >> 2] | 0) == -6) {
    i28 = 0;
   } else {
    i28 = HEAP32[i3 >> 2] | 0;
   }
   __ZN3JSC6StrongIN7WebCore11JSDOMWindowEE3setERNS_2VMEPS2_(i23, HEAP32[HEAP32[(i3 & -4096) + 12 >> 2] >> 2] | 0, i28);
  }
 } while (0);
 i28 = i2 + 12 | 0;
 i3 = (HEAP32[i28 >> 2] | 0) + 1 | 0;
 HEAP32[i28 >> 2] = i3;
 i28 = i2 + 16 | 0;
 i23 = i2 + 4 | 0;
 i4 = HEAP32[i23 >> 2] | 0;
 if (((HEAP32[i28 >> 2] | 0) + i3 << 1 | 0) < (i4 | 0)) {
  i29 = i14;
  i30 = i4;
 } else {
  if ((i4 | 0) == 0) {
   i31 = 8;
   i32 = 0;
  } else {
   i26 = i4 << 1;
   i31 = (i3 * 6 & -1 | 0) < (i26 | 0) ? i4 : i26;
   i32 = i4;
  }
  i4 = HEAP32[i5 >> 2] | 0;
  HEAP32[i23 >> 2] = i31;
  HEAP32[i13 >> 2] = i31 - 1;
  HEAP32[i5 >> 2] = __ZN3WTF16fastZeroedMallocEj(i31 << 3) | 0;
  if ((i32 | 0) == 0) {
   i33 = 0;
  } else {
   i31 = 0;
   i13 = 0;
   while (1) {
    i26 = i4 + (i31 << 3) | 0;
    i3 = HEAP32[i26 >> 2] | 0;
    if ((i3 | 0) == (-1 | 0) | (i3 | 0) == 0) {
     i34 = i13;
    } else {
     i3 = __ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENS_12KeyValuePairIS4_N3JSC6StrongINS2_11JSDOMWindowEEEEENS_24KeyValuePairKeyExtractorISA_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSG_IS9_EEEESH_E8reinsertEOSA_(i2, i26) | 0;
     i34 = (i26 | 0) == (i14 | 0) ? i3 : i13;
    }
    i3 = i31 + 1 | 0;
    if ((i3 | 0) == (i32 | 0)) {
     i33 = i34;
     break;
    } else {
     i31 = i3;
     i13 = i34;
    }
   }
  }
  HEAP32[i28 >> 2] = 0;
  __ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENS_12KeyValuePairIS4_N3JSC6StrongINS2_11JSDOMWindowEEEEENS_24KeyValuePairKeyExtractorISA_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSG_IS9_EEEESH_E15deallocateTableEPSA_i(i4, i32);
  i29 = i33;
  i30 = HEAP32[i23 >> 2] | 0;
 }
 i23 = (HEAP32[i5 >> 2] | 0) + (i30 << 3) | 0;
 i30 = i1;
 HEAP32[i30 >> 2] = i29;
 HEAP32[i30 + 4 >> 2] = i23;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore21ScriptCachedFrameData7restoreERNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 __ZN3JSC12JSLockHolderC1EPNS_2VME(i5, __ZN7WebCore15JSDOMWindowBase8commonVMEv() | 0);
 i8 = HEAP32[i2 + 460 >> 2] | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = HEAP32[i8 + 4 >> 2] | 0;
 i11 = i9 + (i10 << 3) | 0;
 if ((HEAP32[i8 + 12 >> 2] | 0) == 0) {
  __ZN3JSC12JSLockHolderD1Ev(i5);
  STACKTOP = i3;
  return;
 }
 L4 : do {
  if ((i10 | 0) == 0) {
   i12 = i9;
  } else {
   i13 = i9;
   while (1) {
    i14 = HEAP32[i13 >> 2] | 0;
    if (!((i14 | 0) == (-1 | 0) | (i14 | 0) == 0)) {
     i12 = i13;
     break L4;
    }
    i13 = i13 + 8 | 0;
    if ((i13 | 0) == (i11 | 0)) {
     break;
    }
   }
   __ZN3JSC12JSLockHolderD1Ev(i5);
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((i12 | 0) == (i11 | 0)) {
  __ZN3JSC12JSLockHolderD1Ev(i5);
  STACKTOP = i3;
  return;
 }
 i9 = i1 | 0;
 i1 = i6 | 0;
 i10 = i2 + 456 | 0;
 i13 = i7 | 0;
 i14 = i2 + 32 | 0;
 i2 = i4 | 0;
 i15 = i12;
 L13 : while (1) {
  i12 = HEAP32[i15 >> 2] | 0;
  i16 = HEAP32[i15 + 4 >> 2] | 0;
  do {
   if ((i16 | 0) == 0) {
    i17 = 0;
   } else {
    if ((HEAP32[i16 + 4 >> 2] | 0) == -6) {
     i17 = 0;
     break;
    }
    i17 = HEAP32[i16 >> 2] | 0;
   }
  } while (0);
  __ZNK3WTF7HashMapINS_6RefPtrIN7WebCore15DOMWrapperWorldEEEN3JSC6StrongINS2_11JSDOMWindowEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSB_IS8_EEE9inlineGetEPS3_(i6, i9, i12);
  i16 = HEAP32[i1 >> 2] | 0;
  do {
   if ((i16 | 0) == 0) {
    i18 = 17;
   } else {
    if ((HEAP32[i16 + 4 >> 2] | 0) == -6) {
     i19 = 0;
    } else {
     i19 = HEAP32[i16 >> 2] | 0;
    }
    i20 = HEAP32[(i16 & -4096) + 12 >> 2] | 0;
    i21 = i16;
    i22 = i20 + 84 | 0;
    i23 = i21 + 12 | 0;
    if ((i21 | 0) == (HEAP32[i22 >> 2] | 0)) {
     HEAP32[i22 >> 2] = HEAP32[i23 >> 2];
    }
    i22 = i16 + 8 | 0;
    i24 = HEAP32[i22 >> 2] | 0;
    i25 = HEAP32[i23 >> 2] | 0;
    HEAP32[i24 + 12 >> 2] = i25;
    HEAP32[i25 + 8 >> 2] = i24;
    HEAP32[i22 >> 2] = 0;
    HEAP32[i23 >> 2] = 0;
    i22 = i20 + 80 | 0;
    HEAP32[i23 >> 2] = HEAP32[i22 >> 2];
    HEAP32[i22 >> 2] = i21;
    HEAP32[i1 >> 2] = 0;
    if ((i19 | 0) == 0) {
     i18 = 17;
     break;
    }
    __ZN7WebCore16JSDOMWindowShell9setWindowERN3JSC2VMEPNS_11JSDOMWindowE(i17, HEAP32[(HEAP32[(i19 & -65536) + 1076 >> 2] | 0) + 20544 >> 2] | 0, i19);
   }
  } while (0);
  do {
   if ((i18 | 0) == 17) {
    i18 = 0;
    i16 = HEAP32[(HEAP32[i10 >> 2] | 0) + 336 >> 2] | 0;
    i12 = i17 + 12 | 0;
    if ((HEAP32[(HEAP32[i12 >> 2] | 0) + 660 >> 2] | 0) == (i16 | 0)) {
     break;
    }
    HEAP32[i13 >> 2] = i16;
    if ((i16 | 0) != 0) {
     i21 = i16 + 36 | 0;
     HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
    }
    __ZN7WebCore16JSDOMWindowShell9setWindowEN3WTF10PassRefPtrINS_9DOMWindowEEE(i17, i7);
    i21 = HEAP32[i13 >> 2] | 0;
    do {
     if ((i21 | 0) != 0) {
      i16 = i21 + 36 | 0;
      i22 = i16 | 0;
      i23 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
      if ((i23 | 0) != 0) {
       HEAP32[i22 >> 2] = i23;
       break;
      }
      i23 = i16 - 36 | 0;
      if ((i23 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i23 >> 2] | 0) + 44 >> 2] & 3](i23);
     }
    } while (0);
    i21 = HEAP32[i14 >> 2] | 0;
    if ((i21 | 0) == 0) {
     break;
    }
    __ZN7WebCore16ScriptController14attachDebuggerEPNS_16JSDOMWindowShellEPN3JSC8DebuggerE(i8, i17, HEAP32[i21 + 164 >> 2] | 0);
    i23 = HEAP32[i12 >> 2] | 0;
    i16 = i21 + 160 | 0;
    i22 = HEAP32[i16 >> 2] | 0;
    if ((i22 | 0) == 0) {
     __ZN7WebCore4Page9initGroupEv(i21);
     i26 = HEAP32[i16 >> 2] | 0;
    } else {
     i26 = i22;
    }
    i22 = HEAP32[i26 + 68 >> 2] | 0;
    i16 = i23 + 584 | 0;
    i23 = i16;
    i21 = HEAP32[i23 >> 2] | 0;
    if ((i21 | 0) == 0) {
     i20 = __Znwj(44) | 0;
     _memset(i20 | 0, 0, 44) | 0;
     HEAP32[i2 >> 2] = i20;
     __ZN3WTF6OwnPtrIN3JSC14JSGlobalObject22JSGlobalObjectRareDataEEaSERKNS_10PassOwnPtrIS3_EE(i16, i4) | 0;
     __ZN3WTF10PassOwnPtrIN3JSC14JSGlobalObject22JSGlobalObjectRareDataEED2Ev(i4);
     i27 = HEAP32[i23 >> 2] | 0;
    } else {
     i27 = i21;
    }
    HEAP32[i27 + 20 >> 2] = i22;
   }
  } while (0);
  i22 = i15 + 8 | 0;
  if ((i22 | 0) == (i11 | 0)) {
   i18 = 36;
   break;
  } else {
   i28 = i22;
  }
  while (1) {
   i22 = HEAP32[i28 >> 2] | 0;
   if (!((i22 | 0) == (-1 | 0) | (i22 | 0) == 0)) {
    break;
   }
   i22 = i28 + 8 | 0;
   if ((i22 | 0) == (i11 | 0)) {
    i18 = 41;
    break L13;
   } else {
    i28 = i22;
   }
  }
  if ((i28 | 0) == (i11 | 0)) {
   i18 = 40;
   break;
  } else {
   i15 = i28;
  }
 }
 if ((i18 | 0) == 36) {
  __ZN3JSC12JSLockHolderD1Ev(i5);
  STACKTOP = i3;
  return;
 } else if ((i18 | 0) == 40) {
  __ZN3JSC12JSLockHolderD1Ev(i5);
  STACKTOP = i3;
  return;
 } else if ((i18 | 0) == 41) {
  __ZN3JSC12JSLockHolderD1Ev(i5);
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore21ScriptCachedFrameDataC2ERNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 _memset(i1 | 0, 0, 20) | 0;
 __ZN3JSC12JSLockHolderC1EPNS_2VME(i6, __ZN7WebCore15JSDOMWindowBase8commonVMEv() | 0);
 i9 = HEAP32[i2 + 460 >> 2] | 0;
 i2 = HEAP32[i9 >> 2] | 0;
 i10 = HEAP32[i9 + 4 >> 2] | 0;
 i11 = i2 + (i10 << 3) | 0;
 if ((HEAP32[i9 + 12 >> 2] | 0) == 0) {
  __ZN7WebCore16ScriptController14attachDebuggerEPN3JSC8DebuggerE(i9, 0);
  __ZN3JSC12JSLockHolderD1Ev(i6);
  STACKTOP = i3;
  return;
 }
 L4 : do {
  if ((i10 | 0) == 0) {
   i12 = i2;
  } else {
   i13 = i2;
   while (1) {
    i14 = HEAP32[i13 >> 2] | 0;
    if (!((i14 | 0) == (-1 | 0) | (i14 | 0) == 0)) {
     i12 = i13;
     break L4;
    }
    i13 = i13 + 8 | 0;
    if ((i13 | 0) == (i11 | 0)) {
     break;
    }
   }
   __ZN7WebCore16ScriptController14attachDebuggerEPN3JSC8DebuggerE(i9, 0);
   __ZN3JSC12JSLockHolderD1Ev(i6);
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((i12 | 0) == (i11 | 0)) {
  __ZN7WebCore16ScriptController14attachDebuggerEPN3JSC8DebuggerE(i9, 0);
  __ZN3JSC12JSLockHolderD1Ev(i6);
  STACKTOP = i3;
  return;
 }
 i2 = i7 | 0;
 i10 = i4 + 4 | 0;
 i13 = i4;
 i14 = i4 | 0;
 i15 = i1 | 0;
 i1 = i12;
 L13 : while (1) {
  i12 = HEAP32[(HEAP32[HEAP32[i1 + 4 >> 2] >> 2] | 0) + 12 >> 2] | 0;
  i16 = HEAP32[i1 >> 2] | 0;
  i17 = i12;
  i18 = HEAP32[(HEAP32[(i17 & -65536) + 1076 >> 2] | 0) + 20544 >> 2] | 0;
  if ((HEAP32[i18 + 20444 >> 2] | 0) != 0) {
   i19 = 8;
   break;
  }
  i20 = i18 + 20440 | 0;
  i21 = HEAP32[i20 >> 2] | 0;
  if ((i21 | 0) == 0) {
   __ZN3JSC9HandleSet4growEv(i18 + 20360 | 0);
   i22 = HEAP32[i20 >> 2] | 0;
  } else {
   i22 = i21;
  }
  i21 = i22 + 12 | 0;
  HEAP32[i20 >> 2] = HEAP32[i21 >> 2];
  HEAP32[i22 + 4 >> 2] = -6;
  HEAP32[i22 >> 2] = 0;
  i20 = i22 + 8 | 0;
  HEAP32[i20 >> 2] = 0;
  HEAP32[i21 >> 2] = 0;
  i23 = i18 + 20420 | 0;
  i24 = HEAP32[i23 >> 2] | 0;
  HEAP32[i20 >> 2] = i18 + 20408;
  HEAP32[i21 >> 2] = i24;
  HEAP32[i23 >> 2] = i22;
  HEAP32[i24 + 8 >> 2] = i22;
  i24 = i22 | 0;
  HEAP32[i2 >> 2] = i24;
  HEAP32[i10 >> 2] = (i12 | 0) == 0 ? -6 : -5;
  HEAP32[i13 >> 2] = i17;
  __ZN3JSC9HandleSet12writeBarrierEPNS_7JSValueERKS1_(HEAP32[(i22 & -4096) + 12 >> 2] | 0, i24, i4);
  i24 = HEAP32[i14 + 4 >> 2] | 0;
  i17 = i22 | 0;
  HEAP32[i17 >> 2] = HEAP32[i14 >> 2];
  HEAP32[i17 + 4 >> 2] = i24;
  HEAP32[i5 >> 2] = i16;
  __ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENS_12KeyValuePairIS4_N3JSC6StrongINS2_11JSDOMWindowEEEEENS_24KeyValuePairKeyExtractorISA_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSG_IS9_EEEESH_E3addINS_17HashMapTranslatorISJ_SE_EERPS3_S9_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_SA_SC_SE_SJ_SH_EEEEOT0_OT1_(i8, i15, i5, i7);
  i16 = HEAP32[i2 >> 2] | 0;
  if ((i16 | 0) != 0) {
   i24 = HEAP32[(i16 & -4096) + 12 >> 2] | 0;
   i17 = i16;
   i12 = i24 + 84 | 0;
   i23 = i17 + 12 | 0;
   if ((i17 | 0) == (HEAP32[i12 >> 2] | 0)) {
    HEAP32[i12 >> 2] = HEAP32[i23 >> 2];
   }
   i12 = i16 + 8 | 0;
   i16 = HEAP32[i12 >> 2] | 0;
   i21 = HEAP32[i23 >> 2] | 0;
   HEAP32[i16 + 12 >> 2] = i21;
   HEAP32[i21 + 8 >> 2] = i16;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i23 >> 2] = 0;
   i12 = i24 + 80 | 0;
   HEAP32[i23 >> 2] = HEAP32[i12 >> 2];
   HEAP32[i12 >> 2] = i17;
   HEAP32[i2 >> 2] = 0;
  }
  i17 = i1 + 8 | 0;
  if ((i17 | 0) == (i11 | 0)) {
   i19 = 23;
   break;
  } else {
   i25 = i17;
  }
  while (1) {
   i17 = HEAP32[i25 >> 2] | 0;
   if (!((i17 | 0) == (-1 | 0) | (i17 | 0) == 0)) {
    break;
   }
   i17 = i25 + 8 | 0;
   if ((i17 | 0) == (i11 | 0)) {
    i19 = 25;
    break L13;
   } else {
    i25 = i17;
   }
  }
  if ((i25 | 0) == (i11 | 0)) {
   i19 = 24;
   break;
  } else {
   i1 = i25;
  }
 }
 if ((i19 | 0) == 8) {
  _WTFCrash();
 } else if ((i19 | 0) == 23) {
  __ZN7WebCore16ScriptController14attachDebuggerEPN3JSC8DebuggerE(i9, 0);
  __ZN3JSC12JSLockHolderD1Ev(i6);
  STACKTOP = i3;
  return;
 } else if ((i19 | 0) == 24) {
  __ZN7WebCore16ScriptController14attachDebuggerEPN3JSC8DebuggerE(i9, 0);
  __ZN3JSC12JSLockHolderD1Ev(i6);
  STACKTOP = i3;
  return;
 } else if ((i19 | 0) == 25) {
  __ZN7WebCore16ScriptController14attachDebuggerEPN3JSC8DebuggerE(i9, 0);
  __ZN3JSC12JSLockHolderD1Ev(i6);
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore21ScriptCachedFrameDataC1ERNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 _memset(i1 | 0, 0, 20) | 0;
 __ZN3JSC12JSLockHolderC1EPNS_2VME(i6, __ZN7WebCore15JSDOMWindowBase8commonVMEv() | 0);
 i9 = HEAP32[i2 + 460 >> 2] | 0;
 i2 = HEAP32[i9 >> 2] | 0;
 i10 = HEAP32[i9 + 4 >> 2] | 0;
 i11 = i2 + (i10 << 3) | 0;
 if ((HEAP32[i9 + 12 >> 2] | 0) == 0) {
  __ZN7WebCore16ScriptController14attachDebuggerEPN3JSC8DebuggerE(i9, 0);
  __ZN3JSC12JSLockHolderD1Ev(i6);
  STACKTOP = i3;
  return;
 }
 L4 : do {
  if ((i10 | 0) == 0) {
   i12 = i2;
  } else {
   i13 = i2;
   while (1) {
    i14 = HEAP32[i13 >> 2] | 0;
    if (!((i14 | 0) == (-1 | 0) | (i14 | 0) == 0)) {
     i12 = i13;
     break L4;
    }
    i13 = i13 + 8 | 0;
    if ((i13 | 0) == (i11 | 0)) {
     break;
    }
   }
   __ZN7WebCore16ScriptController14attachDebuggerEPN3JSC8DebuggerE(i9, 0);
   __ZN3JSC12JSLockHolderD1Ev(i6);
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((i12 | 0) == (i11 | 0)) {
  __ZN7WebCore16ScriptController14attachDebuggerEPN3JSC8DebuggerE(i9, 0);
  __ZN3JSC12JSLockHolderD1Ev(i6);
  STACKTOP = i3;
  return;
 }
 i2 = i7 | 0;
 i10 = i4 + 4 | 0;
 i13 = i4;
 i14 = i4 | 0;
 i15 = i1 | 0;
 i1 = i12;
 L13 : while (1) {
  i12 = HEAP32[(HEAP32[HEAP32[i1 + 4 >> 2] >> 2] | 0) + 12 >> 2] | 0;
  i16 = HEAP32[i1 >> 2] | 0;
  i17 = i12;
  i18 = HEAP32[(HEAP32[(i17 & -65536) + 1076 >> 2] | 0) + 20544 >> 2] | 0;
  if ((HEAP32[i18 + 20444 >> 2] | 0) != 0) {
   i19 = 8;
   break;
  }
  i20 = i18 + 20440 | 0;
  i21 = HEAP32[i20 >> 2] | 0;
  if ((i21 | 0) == 0) {
   __ZN3JSC9HandleSet4growEv(i18 + 20360 | 0);
   i22 = HEAP32[i20 >> 2] | 0;
  } else {
   i22 = i21;
  }
  i21 = i22 + 12 | 0;
  HEAP32[i20 >> 2] = HEAP32[i21 >> 2];
  HEAP32[i22 + 4 >> 2] = -6;
  HEAP32[i22 >> 2] = 0;
  i20 = i22 + 8 | 0;
  HEAP32[i20 >> 2] = 0;
  HEAP32[i21 >> 2] = 0;
  i23 = i18 + 20420 | 0;
  i24 = HEAP32[i23 >> 2] | 0;
  HEAP32[i20 >> 2] = i18 + 20408;
  HEAP32[i21 >> 2] = i24;
  HEAP32[i23 >> 2] = i22;
  HEAP32[i24 + 8 >> 2] = i22;
  i24 = i22 | 0;
  HEAP32[i2 >> 2] = i24;
  HEAP32[i10 >> 2] = (i12 | 0) == 0 ? -6 : -5;
  HEAP32[i13 >> 2] = i17;
  __ZN3JSC9HandleSet12writeBarrierEPNS_7JSValueERKS1_(HEAP32[(i22 & -4096) + 12 >> 2] | 0, i24, i4);
  i24 = HEAP32[i14 + 4 >> 2] | 0;
  i17 = i22 | 0;
  HEAP32[i17 >> 2] = HEAP32[i14 >> 2];
  HEAP32[i17 + 4 >> 2] = i24;
  HEAP32[i5 >> 2] = i16;
  __ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENS_12KeyValuePairIS4_N3JSC6StrongINS2_11JSDOMWindowEEEEENS_24KeyValuePairKeyExtractorISA_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSG_IS9_EEEESH_E3addINS_17HashMapTranslatorISJ_SE_EERPS3_S9_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_SA_SC_SE_SJ_SH_EEEEOT0_OT1_(i8, i15, i5, i7);
  i16 = HEAP32[i2 >> 2] | 0;
  if ((i16 | 0) != 0) {
   i24 = HEAP32[(i16 & -4096) + 12 >> 2] | 0;
   i17 = i16;
   i12 = i24 + 84 | 0;
   i23 = i17 + 12 | 0;
   if ((i17 | 0) == (HEAP32[i12 >> 2] | 0)) {
    HEAP32[i12 >> 2] = HEAP32[i23 >> 2];
   }
   i12 = i16 + 8 | 0;
   i16 = HEAP32[i12 >> 2] | 0;
   i21 = HEAP32[i23 >> 2] | 0;
   HEAP32[i16 + 12 >> 2] = i21;
   HEAP32[i21 + 8 >> 2] = i16;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i23 >> 2] = 0;
   i12 = i24 + 80 | 0;
   HEAP32[i23 >> 2] = HEAP32[i12 >> 2];
   HEAP32[i12 >> 2] = i17;
   HEAP32[i2 >> 2] = 0;
  }
  i17 = i1 + 8 | 0;
  if ((i17 | 0) == (i11 | 0)) {
   i19 = 23;
   break;
  } else {
   i25 = i17;
  }
  while (1) {
   i17 = HEAP32[i25 >> 2] | 0;
   if (!((i17 | 0) == (-1 | 0) | (i17 | 0) == 0)) {
    break;
   }
   i17 = i25 + 8 | 0;
   if ((i17 | 0) == (i11 | 0)) {
    i19 = 25;
    break L13;
   } else {
    i25 = i17;
   }
  }
  if ((i25 | 0) == (i11 | 0)) {
   i19 = 24;
   break;
  } else {
   i1 = i25;
  }
 }
 if ((i19 | 0) == 8) {
  _WTFCrash();
 } else if ((i19 | 0) == 23) {
  __ZN7WebCore16ScriptController14attachDebuggerEPN3JSC8DebuggerE(i9, 0);
  __ZN3JSC12JSLockHolderD1Ev(i6);
  STACKTOP = i3;
  return;
 } else if ((i19 | 0) == 24) {
  __ZN7WebCore16ScriptController14attachDebuggerEPN3JSC8DebuggerE(i9, 0);
  __ZN3JSC12JSLockHolderD1Ev(i6);
  STACKTOP = i3;
  return;
 } else if ((i19 | 0) == 25) {
  __ZN7WebCore16ScriptController14attachDebuggerEPN3JSC8DebuggerE(i9, 0);
  __ZN3JSC12JSLockHolderD1Ev(i6);
  STACKTOP = i3;
  return;
 }
}
function __ZN24OpaqueJSClassContextDataD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = i1 + 12 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 }
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  i2 = HEAP32[i3 >> 2] | 0;
  if ((i2 | 0) != 0) {
   i4 = HEAP32[i3 + 4 >> 2] | 0;
   if ((i4 | 0) > 0) {
    i5 = 0;
    while (1) {
     i6 = i2 + (i5 << 3) | 0;
     i7 = HEAP32[i6 >> 2] | 0;
     do {
      if ((i7 | 0) != -1) {
       i8 = i2 + (i5 << 3) + 4 | 0;
       i9 = HEAP32[i8 >> 2] | 0;
       HEAP32[i8 >> 2] = 0;
       if ((i9 | 0) == 0) {
        i10 = i7;
       } else {
        __ZN3WTF8fastFreeEPv(i9);
        i10 = HEAP32[i6 >> 2] | 0;
       }
       if ((i10 | 0) == 0) {
        break;
       }
       i9 = i10 | 0;
       i8 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
       if ((i8 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i10);
        break;
       } else {
        HEAP32[i9 >> 2] = i8;
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
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 4 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i2 >> 2] | 0;
  if ((i3 | 0) != 0) {
   i4 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i4 | 0) > 0) {
    i5 = 0;
    while (1) {
     i10 = i3 + (i5 << 3) | 0;
     i6 = HEAP32[i10 >> 2] | 0;
     do {
      if ((i6 | 0) != -1) {
       i7 = i3 + (i5 << 3) + 4 | 0;
       i8 = HEAP32[i7 >> 2] | 0;
       HEAP32[i7 >> 2] = 0;
       if ((i8 | 0) == 0) {
        i11 = i6;
       } else {
        i7 = HEAP32[i8 + 12 >> 2] | 0;
        do {
         if ((i7 | 0) != 0) {
          i9 = i7 | 0;
          if (((tempValue = HEAP32[i9 >> 2] | 0, HEAP32[i9 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
           break;
          }
          i9 = HEAP32[i7 + 4 >> 2] | 0;
          do {
           if ((i9 | 0) != 0) {
            i12 = i9 | 0;
            i13 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
            if ((i13 | 0) == 0) {
             __ZN3WTF10StringImpl7destroyEPS0_(i9);
             break;
            } else {
             HEAP32[i12 >> 2] = i13;
             break;
            }
           }
          } while (0);
          __ZN3WTF8fastFreeEPv(i7);
         }
        } while (0);
        __ZN3WTF8fastFreeEPv(i8);
        i11 = HEAP32[i10 >> 2] | 0;
       }
       if ((i11 | 0) == 0) {
        break;
       }
       i7 = i11 | 0;
       i9 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
       if ((i9 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i11);
        break;
       } else {
        HEAP32[i7 >> 2] = i9;
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
   __ZN3WTF8fastFreeEPv(i3);
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 if (((tempValue = HEAP32[i1 >> 2] | 0, HEAP32[i1 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  return;
 }
 __ZN13OpaqueJSClassD1Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENS_12KeyValuePairIS4_N3JSC6StrongINS2_11JSDOMWindowEEEEENS_24KeyValuePairKeyExtractorISA_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSG_IS9_EEEESH_E8reinsertEOSA_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2 | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 i6 = i5;
 i7 = i6 + ~(i6 << 15) | 0;
 i6 = (i7 >>> 10 ^ i7) * 9 & -1;
 i7 = i6 >>> 6 ^ i6;
 i6 = i7 + ~(i7 << 11) | 0;
 i7 = i6 >>> 16 ^ i6;
 i6 = i7 & i4;
 i8 = i3 + (i6 << 3) | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 L1 : do {
  if ((i9 | 0) == 0) {
   i10 = 0;
   i11 = i8;
   i12 = 3;
  } else {
   i13 = (i7 >>> 23) + ~i7 | 0;
   i14 = i13 << 12 ^ i13;
   i13 = i14 >>> 7 ^ i14;
   i14 = i13 << 2 ^ i13;
   i13 = i14 >>> 20 ^ i14 | 1;
   i14 = 0;
   i15 = 0;
   i16 = i6;
   i17 = i8;
   i18 = i9;
   while (1) {
    if ((i18 | 0) == (i5 | 0)) {
     i19 = i17;
     break L1;
    }
    i20 = (i18 | 0) == -1 ? i17 : i14;
    i21 = (i15 | 0) == 0 ? i13 : i15;
    i22 = i21 + i16 & i4;
    i23 = i3 + (i22 << 3) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i10 = i20;
     i11 = i23;
     i12 = 3;
     break;
    } else {
     i14 = i20;
     i15 = i21;
     i16 = i22;
     i17 = i23;
     i18 = i24;
    }
   }
  }
 } while (0);
 if ((i12 | 0) == 3) {
  i19 = (i10 | 0) != 0 ? i10 : i11;
 }
 i11 = i19 + 4 | 0;
 i10 = HEAP32[i11 >> 2] | 0;
 if ((i10 | 0) != 0) {
  i12 = HEAP32[(i10 & -4096) + 12 >> 2] | 0;
  i3 = i10;
  i4 = i12 + 84 | 0;
  i5 = i3 + 12 | 0;
  if ((i3 | 0) == (HEAP32[i4 >> 2] | 0)) {
   HEAP32[i4 >> 2] = HEAP32[i5 >> 2];
  }
  i4 = i10 + 8 | 0;
  i10 = HEAP32[i4 >> 2] | 0;
  i9 = HEAP32[i5 >> 2] | 0;
  HEAP32[i10 + 12 >> 2] = i9;
  HEAP32[i9 + 8 >> 2] = i10;
  HEAP32[i4 >> 2] = 0;
  HEAP32[i5 >> 2] = 0;
  i4 = i12 + 80 | 0;
  HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
  HEAP32[i4 >> 2] = i3;
  HEAP32[i11 >> 2] = 0;
 }
 i11 = i19 | 0;
 i3 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore15DOMWrapperWorldD1Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i11 >> 2] = i3;
 __ZN3JSC6StrongIN7WebCore11JSDOMWindowEEC2ERKS3_(i19 + 4 | 0, i2 + 4 | 0);
 return i19 | 0;
}
function __ZNK3WTF7HashMapINS_6RefPtrIN7WebCore15DOMWrapperWorldEEEN3JSC6StrongINS2_11JSDOMWindowEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSB_IS8_EEE9inlineGetEPS3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 i2 = i3;
 i8 = i2 + ~(i2 << 15) | 0;
 i2 = (i8 >>> 10 ^ i8) * 9 & -1;
 i8 = i2 >>> 6 ^ i2;
 i2 = i8 + ~(i8 << 11) | 0;
 i8 = i2 >>> 16 ^ i2;
 L1 : do {
  if ((i7 | 0) != 0) {
   i2 = i6 & i8;
   i9 = i7 + (i2 << 3) | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   if ((i10 | 0) == (i3 | 0)) {
    i11 = i9;
   } else {
    i9 = (i8 >>> 23) + ~i8 | 0;
    i12 = i9 << 12 ^ i9;
    i9 = i12 >>> 7 ^ i12;
    i12 = i9 << 2 ^ i9;
    i9 = i12 >>> 20 ^ i12 | 1;
    i12 = 0;
    i13 = i2;
    i2 = i10;
    while (1) {
     if ((i2 | 0) == 0) {
      break L1;
     }
     i10 = (i12 | 0) == 0 ? i9 : i12;
     i14 = i10 + i13 & i6;
     i15 = i7 + (i14 << 3) | 0;
     i16 = HEAP32[i15 >> 2] | 0;
     if ((i16 | 0) == (i3 | 0)) {
      i11 = i15;
      break;
     } else {
      i12 = i10;
      i13 = i14;
      i2 = i16;
     }
    }
   }
   if ((i11 | 0) == 0) {
    break;
   }
   __ZN3JSC6StrongIN7WebCore11JSDOMWindowEEC2ERKS3_(i1, i11 + 4 | 0);
   STACKTOP = i4;
   return;
  }
 } while (0);
 i11 = i5 | 0;
 HEAP32[i11 >> 2] = 0;
 __ZN3JSC6StrongIN7WebCore11JSDOMWindowEEC2ERKS3_(i1, i5);
 i5 = HEAP32[i11 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i1 = HEAP32[(i5 & -4096) + 12 >> 2] | 0;
 i3 = i5;
 i7 = i1 + 84 | 0;
 i6 = i3 + 12 | 0;
 if ((i3 | 0) == (HEAP32[i7 >> 2] | 0)) {
  HEAP32[i7 >> 2] = HEAP32[i6 >> 2];
 }
 i7 = i5 + 8 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 i8 = HEAP32[i6 >> 2] | 0;
 HEAP32[i5 + 12 >> 2] = i8;
 HEAP32[i8 + 8 >> 2] = i5;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i1 + 80 | 0;
 HEAP32[i6 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i7 >> 2] = i3;
 HEAP32[i11 >> 2] = 0;
 STACKTOP = i4;
 return;
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENS_12KeyValuePairIS4_N3JSC6StrongINS2_11JSDOMWindowEEEEENS_24KeyValuePairKeyExtractorISA_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSG_IS9_EEEESH_E15deallocateTableEPSA_i(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 if ((i2 | 0) > 0) {
  i3 = 0;
 } else {
  i4 = i1;
  __ZN3WTF8fastFreeEPv(i4);
  return;
 }
 while (1) {
  i5 = i1 + (i3 << 3) | 0;
  i6 = HEAP32[i5 >> 2] | 0;
  do {
   if ((i6 | 0) != -1) {
    i7 = i1 + (i3 << 3) + 4 | 0;
    i8 = HEAP32[i7 >> 2] | 0;
    if ((i8 | 0) == 0) {
     i9 = i6;
    } else {
     i10 = HEAP32[(i8 & -4096) + 12 >> 2] | 0;
     i11 = i8;
     i12 = i10 + 84 | 0;
     i13 = i11 + 12 | 0;
     if ((i11 | 0) == (HEAP32[i12 >> 2] | 0)) {
      HEAP32[i12 >> 2] = HEAP32[i13 >> 2];
     }
     i12 = i8 + 8 | 0;
     i8 = HEAP32[i12 >> 2] | 0;
     i14 = HEAP32[i13 >> 2] | 0;
     HEAP32[i8 + 12 >> 2] = i14;
     HEAP32[i14 + 8 >> 2] = i8;
     HEAP32[i12 >> 2] = 0;
     HEAP32[i13 >> 2] = 0;
     i12 = i10 + 80 | 0;
     HEAP32[i13 >> 2] = HEAP32[i12 >> 2];
     HEAP32[i12 >> 2] = i11;
     HEAP32[i7 >> 2] = 0;
     i9 = HEAP32[i5 >> 2] | 0;
    }
    if ((i9 | 0) == 0) {
     break;
    }
    i7 = i9 | 0;
    i11 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
    if ((i11 | 0) == 0) {
     __ZN7WebCore15DOMWrapperWorldD1Ev(i9);
     __ZN3WTF8fastFreeEPv(i9);
     break;
    } else {
     HEAP32[i7 >> 2] = i11;
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
function __ZN3JSC6StrongIN7WebCore11JSDOMWindowEEC2ERKS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
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
 do {
  if ((i9 | 0) == 0) {
   i11 = 0;
  } else {
   if ((HEAP32[i9 + 4 >> 2] | 0) == -6) {
    i11 = 0;
    break;
   }
   i11 = HEAP32[i9 >> 2] | 0;
  }
 } while (0);
 HEAP32[i4 + 4 >> 2] = (i11 | 0) == 0 ? -6 : -5;
 HEAP32[i4 >> 2] = i11;
 __ZN3JSC9HandleSet12writeBarrierEPNS_7JSValueERKS1_(HEAP32[(i8 & -4096) + 12 >> 2] | 0, i10, i4);
 i10 = i4 | 0;
 i4 = HEAP32[i10 + 4 >> 2] | 0;
 i8 = HEAP32[i5 >> 2] | 0;
 HEAP32[i8 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i8 + 4 >> 2] = i4;
 STACKTOP = i3;
 return;
}
function __ZN3WTF9HashTableINS_6RefPtrI21OpaqueJSWeakObjectMapEES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E15deallocateTableEPS3_i(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 if ((i2 | 0) > 0) {
  i3 = 0;
 } else {
  i4 = i1;
  __ZN3WTF8fastFreeEPv(i4);
  return;
 }
 while (1) {
  i5 = HEAP32[i1 + (i3 << 2) >> 2] | 0;
  i6 = i5;
  do {
   if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
    i7 = i5 | 0;
    i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
    if ((i8 | 0) != 0) {
     HEAP32[i7 >> 2] = i8;
     break;
    }
    FUNCTION_TABLE_vii[HEAP32[i5 + 32 >> 2] & 3](i5, HEAP32[i5 + 28 >> 2] | 0);
    i8 = HEAP32[i5 + 4 >> 2] | 0;
    if ((i8 | 0) != 0) {
     i7 = HEAP32[i5 + 8 >> 2] | 0;
     if ((i7 | 0) > 0) {
      i9 = 0;
      while (1) {
       do {
        if ((HEAP32[i8 + (i9 << 3) >> 2] | 0) != -1) {
         i10 = i8 + (i9 << 3) + 4 | 0;
         if ((HEAP32[i10 >> 2] | 0) == 0) {
          break;
         }
         __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i10);
        }
       } while (0);
       i9 = i9 + 1 | 0;
       if ((i9 | 0) >= (i7 | 0)) {
        break;
       }
      }
     }
     __ZN3WTF8fastFreeEPv(i8);
    }
    __ZN3WTF8fastFreeEPv(i5);
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
function __ZN3JSC6StrongIN7WebCore11JSDOMWindowEE3setERNS_2VMEPS2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i1 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 if ((i1 | 0) == 0) {
  if ((HEAP32[i2 + 20444 >> 2] | 0) != 0) {
   _WTFCrash();
  }
  i7 = i2 + 20440 | 0;
  i8 = HEAP32[i7 >> 2] | 0;
  if ((i8 | 0) == 0) {
   __ZN3JSC9HandleSet4growEv(i2 + 20360 | 0);
   i9 = HEAP32[i7 >> 2] | 0;
  } else {
   i9 = i8;
  }
  i8 = i9 + 12 | 0;
  HEAP32[i7 >> 2] = HEAP32[i8 >> 2];
  HEAP32[i9 + 4 >> 2] = -6;
  HEAP32[i9 >> 2] = 0;
  i7 = i9 + 8 | 0;
  HEAP32[i7 >> 2] = 0;
  HEAP32[i8 >> 2] = 0;
  i10 = i2 + 20420 | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  HEAP32[i7 >> 2] = i2 + 20408;
  HEAP32[i8 >> 2] = i11;
  HEAP32[i10 >> 2] = i9;
  HEAP32[i11 + 8 >> 2] = i9;
  i11 = i9 | 0;
  HEAP32[i6 >> 2] = i11;
  i12 = i11;
 } else {
  i12 = i1;
 }
 HEAP32[i5 + 4 >> 2] = (i3 | 0) == 0 ? -6 : -5;
 HEAP32[i5 >> 2] = i3;
 __ZN3JSC9HandleSet12writeBarrierEPNS_7JSValueERKS1_(HEAP32[(i12 & -4096) + 12 >> 2] | 0, i12, i5);
 i12 = i5 | 0;
 i5 = HEAP32[i12 + 4 >> 2] | 0;
 i3 = HEAP32[i6 >> 2] | 0;
 HEAP32[i3 >> 2] = HEAP32[i12 >> 2];
 HEAP32[i3 + 4 >> 2] = i5;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore21ScriptCachedFrameDataD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 if ((HEAP32[i1 + 12 >> 2] | 0) == 0) {
  i4 = i1 | 0;
 } else {
  __ZN3JSC12JSLockHolderC1EPNS_2VME(i3, __ZN7WebCore15JSDOMWindowBase8commonVMEv() | 0);
  i5 = i1 | 0;
  i6 = HEAP32[i5 >> 2] | 0;
  if ((i6 | 0) != 0) {
   __ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENS_12KeyValuePairIS4_N3JSC6StrongINS2_11JSDOMWindowEEEEENS_24KeyValuePairKeyExtractorISA_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSG_IS9_EEEESH_E15deallocateTableEPSA_i(i6, HEAP32[i1 + 4 >> 2] | 0);
   _memset(i1 | 0, 0, 16) | 0;
  }
  __ZN7WebCore12GCController18garbageCollectSoonEv(__ZN7WebCore12gcControllerEv() | 0);
  __ZN3JSC12JSLockHolderD1Ev(i3);
  i4 = i5;
 }
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENS_12KeyValuePairIS4_N3JSC6StrongINS2_11JSDOMWindowEEEEENS_24KeyValuePairKeyExtractorISA_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSG_IS9_EEEESH_E15deallocateTableEPSA_i(i5, HEAP32[i1 + 4 >> 2] | 0);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore21ScriptCachedFrameDataD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 if ((HEAP32[i1 + 12 >> 2] | 0) == 0) {
  i4 = i1 | 0;
 } else {
  __ZN3JSC12JSLockHolderC1EPNS_2VME(i3, __ZN7WebCore15JSDOMWindowBase8commonVMEv() | 0);
  i5 = i1 | 0;
  i6 = HEAP32[i5 >> 2] | 0;
  if ((i6 | 0) != 0) {
   __ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENS_12KeyValuePairIS4_N3JSC6StrongINS2_11JSDOMWindowEEEEENS_24KeyValuePairKeyExtractorISA_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSG_IS9_EEEESH_E15deallocateTableEPSA_i(i6, HEAP32[i1 + 4 >> 2] | 0);
   _memset(i1 | 0, 0, 16) | 0;
  }
  __ZN7WebCore12GCController18garbageCollectSoonEv(__ZN7WebCore12gcControllerEv() | 0);
  __ZN3JSC12JSLockHolderD1Ev(i3);
  i4 = i5;
 }
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENS_12KeyValuePairIS4_N3JSC6StrongINS2_11JSDOMWindowEEEEENS_24KeyValuePairKeyExtractorISA_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSG_IS9_EEEESH_E15deallocateTableEPSA_i(i5, HEAP32[i1 + 4 >> 2] | 0);
 STACKTOP = i2;
 return;
}
function __ZN3WTF6OwnPtrIN3JSC14JSGlobalObject22JSGlobalObjectRareDataEEaSERKNS_10PassOwnPtrIS3_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i1 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i3 >> 2] = i2;
 if ((i4 | 0) == 0) {
  return i1 | 0;
 }
 i2 = HEAP32[i4 + 24 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i4 + 28 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i5 = 0;
   while (1) {
    do {
     if ((HEAP32[i2 + (i5 << 3) >> 2] | 0) != -1) {
      i6 = i2 + (i5 << 3) + 4 | 0;
      i7 = HEAP32[i6 >> 2] | 0;
      HEAP32[i6 >> 2] = 0;
      if ((i7 | 0) == 0) {
       break;
      }
      __ZN24OpaqueJSClassContextDataD2Ev(i7);
      __ZN3WTF8fastFreeEPv(i7);
     }
    } while (0);
    i5 = i5 + 1 | 0;
    if ((i5 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF9HashTableINS_6RefPtrI21OpaqueJSWeakObjectMapEES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E15deallocateTableEPS3_i(i2, HEAP32[i4 + 4 >> 2] | 0);
 }
 __ZdlPv(i4);
 return i1 | 0;
}
function __ZN3WTF10PassOwnPtrIN3JSC14JSGlobalObject22JSGlobalObjectRareDataEED2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i2 + 24 >> 2] | 0;
 if ((i1 | 0) != 0) {
  i3 = HEAP32[i2 + 28 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    do {
     if ((HEAP32[i1 + (i4 << 3) >> 2] | 0) != -1) {
      i5 = i1 + (i4 << 3) + 4 | 0;
      i6 = HEAP32[i5 >> 2] | 0;
      HEAP32[i5 >> 2] = 0;
      if ((i6 | 0) == 0) {
       break;
      }
      __ZN24OpaqueJSClassContextDataD2Ev(i6);
      __ZN3WTF8fastFreeEPv(i6);
     }
    } while (0);
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i1);
 }
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) != 0) {
  __ZN3WTF9HashTableINS_6RefPtrI21OpaqueJSWeakObjectMapEES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E15deallocateTableEPS3_i(i1, HEAP32[i2 + 4 >> 2] | 0);
 }
 __ZdlPv(i2);
 return;
}
function __ZN7WebCore21ScriptCachedFrameData5clearEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 if ((HEAP32[i1 + 12 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN3JSC12JSLockHolderC1EPNS_2VME(i3, __ZN7WebCore15JSDOMWindowBase8commonVMEv() | 0);
 i4 = HEAP32[i1 >> 2] | 0;
 if ((i4 | 0) != 0) {
  __ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENS_12KeyValuePairIS4_N3JSC6StrongINS2_11JSDOMWindowEEEEENS_24KeyValuePairKeyExtractorISA_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSG_IS9_EEEESH_E15deallocateTableEPSA_i(i4, HEAP32[i1 + 4 >> 2] | 0);
  _memset(i1 | 0, 0, 16) | 0;
 }
 __ZN7WebCore12GCController18garbageCollectSoonEv(__ZN7WebCore12gcControllerEv() | 0);
 __ZN3JSC12JSLockHolderD1Ev(i3);
 STACKTOP = i2;
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
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 3](i2 | 0, i3 | 0);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 3](i2 | 0);
}
function b4(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(4);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function b1(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(1);
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
function b3() {
 abort(3);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore21ScriptCachedFrameDataD2Ev,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore21ScriptCachedFrameDataC2ERNS_5FrameE,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN3WTF10PassOwnPtrIN3JSC14JSGlobalObject22JSGlobalObjectRareDataEED2Ev","__ZN24OpaqueJSClassContextDataD2Ev","_memset","__ZN7WebCore21ScriptCachedFrameDataD2Ev","__ZN3WTF6OwnPtrIN3JSC14JSGlobalObject22JSGlobalObjectRareDataEEaSERKNS_10PassOwnPtrIS3_EE","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENS_12KeyValuePairIS4_N3JSC6StrongINS2_11JSDOMWindowEEEEENS_24KeyValuePairKeyExtractorISA_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSG_IS9_EEEESH_E3addINS_17HashMapTranslatorISJ_SE_EERPS3_S9_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_SA_SC_SE_SJ_SH_EEEEOT0_OT1_","_memcpy","__ZN7WebCore21ScriptCachedFrameDataC2ERNS_5FrameE","__ZN3JSC6StrongIN7WebCore11JSDOMWindowEEC2ERKS3_","__ZN3WTF9HashTableINS_6RefPtrI21OpaqueJSWeakObjectMapEES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E15deallocateTableEPS3_i","__ZNK3WTF7HashMapINS_6RefPtrIN7WebCore15DOMWrapperWorldEEEN3JSC6StrongINS2_11JSDOMWindowEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSB_IS8_EEE9inlineGetEPS3_","__ZN7WebCore21ScriptCachedFrameData5clearEv","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENS_12KeyValuePairIS4_N3JSC6StrongINS2_11JSDOMWindowEEEEENS_24KeyValuePairKeyExtractorISA_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSG_IS9_EEEESH_E15deallocateTableEPSA_i","__ZN3JSC6StrongIN7WebCore11JSDOMWindowEE3setERNS_2VMEPS2_","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENS_12KeyValuePairIS4_N3JSC6StrongINS2_11JSDOMWindowEEEEENS_24KeyValuePairKeyExtractorISA_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSG_IS9_EEEESH_E8reinsertEOSA_","__ZN7WebCore21ScriptCachedFrameData7restoreERNS_5FrameE"]