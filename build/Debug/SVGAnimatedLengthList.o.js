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
H_BASE = parentModule["_malloc"](64 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 64;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore29SVGAnimatedLengthListAnimatorC1EPNS_19SVGAnimationElementEPNS_10SVGElementE;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_fiii(index,a1,a2,a3) {
  try {
    return Module["dynCall_fiii"](index,a1,a2,a3);
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
function invoke_vifiiiii(index,a1,a2,a3,a4,a5,a6,a7) {
  try {
    Module["dynCall_vifiiiii"](index,a1,a2,a3,a4,a5,a6,a7);
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
  var __ZTVN7WebCore29SVGAnimatedLengthListAnimatorE=(H_BASE+8)|0;
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
  var invoke_fiii=env.invoke_fiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_vifiiiii=env.invoke_vifiiiii;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore29SVGAnimatedLengthListAnimator22calculateAnimatedValueEfjPNS_15SVGAnimatedTypeES2_S2_S2_(i1, d2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 d2 = +d2;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, d32 = +0, i33 = 0, i34 = 0, i35 = 0, d36 = +0, i37 = 0, i38 = 0, d39 = +0, i40 = 0, i41 = 0, d42 = +0, d43 = +0, d44 = +0, d45 = +0, d46 = +0, i47 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i9 = i8 | 0;
 i10 = i8 + 16 | 0;
 i11 = i8 + 32 | 0;
 i12 = i8 + 56 | 0;
 i13 = i1 + 8 | 0;
 i14 = HEAP32[((HEAP32[(HEAP32[i13 >> 2] | 0) + 400 >> 2] | 0) == 3 ? i7 : i4) + 8 >> 2] | 0;
 i4 = HEAP32[i14 + 4 >> 2] | 0;
 i15 = i14 + 8 | 0;
 i16 = HEAP32[i15 >> 2] | 0;
 i17 = i9 | 0;
 HEAP32[i17 >> 2] = 0;
 i18 = i9 + 4 | 0;
 HEAP32[i18 >> 2] = 0;
 i19 = i9 + 8 | 0;
 HEAP32[i19 >> 2] = i16;
 do {
  if ((i4 | 0) != 0) {
   if (i4 >>> 0 > 536870911 >>> 0) {
    _WTFCrash();
   }
   i16 = __ZN3WTF18fastMallocGoodSizeEj(i4 << 3) | 0;
   HEAP32[i18 >> 2] = i16 >>> 3;
   i20 = __ZN3WTF10fastMallocEj(i16) | 0;
   i16 = i20;
   HEAP32[i17 >> 2] = i16;
   if ((i20 | 0) == 0) {
    break;
   }
   i20 = HEAP32[i14 >> 2] | 0;
   i21 = HEAP32[i15 >> 2] | 0;
   i22 = i20 + (i21 << 3) | 0;
   if ((i21 | 0) == 0) {
    break;
   } else {
    i23 = i20;
    i24 = i16;
   }
   while (1) {
    __ZN7WebCore9SVGLengthC1ERKS0_(i24, i23);
    i16 = i23 + 8 | 0;
    if ((i16 | 0) == (i22 | 0)) {
     break;
    } else {
     i23 = i16;
     i24 = i24 + 8 | 0;
    }
   }
  }
 } while (0);
 i24 = HEAP32[i5 + 8 >> 2] | 0;
 i5 = HEAP32[i24 + 4 >> 2] | 0;
 i23 = i24 + 8 | 0;
 i15 = HEAP32[i23 >> 2] | 0;
 i14 = i10 | 0;
 HEAP32[i14 >> 2] = 0;
 i4 = i10 + 4 | 0;
 HEAP32[i4 >> 2] = 0;
 i22 = i10 + 8 | 0;
 HEAP32[i22 >> 2] = i15;
 do {
  if ((i5 | 0) != 0) {
   if (i5 >>> 0 > 536870911 >>> 0) {
    _WTFCrash();
   }
   i15 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 3) | 0;
   HEAP32[i4 >> 2] = i15 >>> 3;
   i16 = __ZN3WTF10fastMallocEj(i15) | 0;
   i15 = i16;
   HEAP32[i14 >> 2] = i15;
   if ((i16 | 0) == 0) {
    break;
   }
   i16 = HEAP32[i24 >> 2] | 0;
   i20 = HEAP32[i23 >> 2] | 0;
   i21 = i16 + (i20 << 3) | 0;
   if ((i20 | 0) == 0) {
    break;
   } else {
    i25 = i16;
    i26 = i15;
   }
   while (1) {
    __ZN7WebCore9SVGLengthC1ERKS0_(i26, i25);
    i15 = i25 + 8 | 0;
    if ((i15 | 0) == (i21 | 0)) {
     break;
    } else {
     i25 = i15;
     i26 = i26 + 8 | 0;
    }
   }
  }
 } while (0);
 i26 = HEAP32[i6 + 8 >> 2] | 0;
 i6 = HEAP32[i7 + 8 >> 2] | 0;
 i7 = HEAP32[i13 >> 2] | 0;
 i25 = i1 + 12 | 0;
 __ZN7WebCore19SVGAnimationElement20adjustForInheritanceINS_13SVGLengthListEEEvPFT_PS0_RKN3WTF6StringEENS_25AnimatedPropertyValueTypeERS3_PNS_10SVGElementE(i7, F_BASE_viii + 6 | 0, HEAP32[i7 + 320 >> 2] | 0, i9, HEAP32[i25 >> 2] | 0);
 i7 = HEAP32[i13 >> 2] | 0;
 __ZN7WebCore19SVGAnimationElement20adjustForInheritanceINS_13SVGLengthListEEEvPFT_PS0_RKN3WTF6StringEENS_25AnimatedPropertyValueTypeERS3_PNS_10SVGElementE(i7, F_BASE_viii + 6 | 0, HEAP32[i7 + 324 >> 2] | 0, i10, HEAP32[i25 >> 2] | 0);
 L19 : do {
  if (__ZN7WebCore19SVGAnimationElement22adjustFromToListValuesINS_13SVGLengthListEEEbRKT_S5_RS3_fb(HEAP32[i13 >> 2] | 0, i9, i10, i6, d2, 1) | 0) {
   i7 = HEAP32[i19 >> 2] | 0;
   i23 = HEAP32[i22 >> 2] | 0;
   i24 = i26 + 8 | 0;
   i5 = HEAP32[i24 >> 2] | 0;
   __ZN7WebCore16SVGLengthContextC1EPKNS_10SVGElementE(i11, HEAP32[i25 >> 2] | 0);
   if ((i23 | 0) == 0) {
    break;
   }
   i21 = i6 + 8 | 0;
   i15 = i6 | 0;
   i16 = HEAP32[i14 >> 2] | 0;
   i20 = (i7 | 0) == 0;
   i27 = i26 | 0;
   i28 = d2 < +.5;
   i29 = (i3 | 0) == 0;
   i30 = i1 + 16 | 0;
   i31 = i12 | 0;
   d32 = +(i3 >>> 0 >>> 0);
   i33 = HEAP32[i17 >> 2] | 0;
   i34 = 0;
   while (1) {
    if ((HEAP32[i21 >> 2] | 0) >>> 0 <= i34 >>> 0) {
     i35 = 18;
     break;
    }
    d36 = +__ZNK7WebCore9SVGLength5valueERKNS_16SVGLengthContextE((HEAP32[i15 >> 2] | 0) + (i34 << 3) | 0, i11);
    if (i23 >>> 0 <= i34 >>> 0) {
     i35 = 20;
     break;
    }
    i37 = i16 + (i34 << 3) | 0;
    i38 = __ZNK7WebCore9SVGLength8unitTypeEv(i37) | 0;
    if (i20) {
     d39 = +0;
     i40 = i38;
    } else {
     if (i28) {
      if (i7 >>> 0 <= i34 >>> 0) {
       i35 = 24;
       break;
      }
      i41 = __ZNK7WebCore9SVGLength8unitTypeEv(i33 + (i34 << 3) | 0) | 0;
     } else {
      i41 = i38;
     }
     if (i7 >>> 0 <= i34 >>> 0) {
      i35 = 27;
      break;
     }
     d39 = +__ZNK7WebCore9SVGLength5valueERKNS_16SVGLengthContextE(i33 + (i34 << 3) | 0, i11);
     i40 = i41;
    }
    if (i34 >>> 0 < i5 >>> 0) {
     if ((HEAP32[i24 >> 2] | 0) >>> 0 <= i34 >>> 0) {
      i35 = 31;
      break;
     }
     d42 = +__ZNK7WebCore9SVGLength5valueERKNS_16SVGLengthContextE((HEAP32[i27 >> 2] | 0) + (i34 << 3) | 0, i11);
    } else {
     d42 = +0;
    }
    i38 = HEAP32[i13 >> 2] | 0;
    d43 = +__ZNK7WebCore9SVGLength5valueERKNS_16SVGLengthContextE(i37, i11);
    if ((HEAP32[i38 + 396 >> 2] | 0) == 0) {
     d44 = i28 ? d39 : d43;
    } else {
     d44 = d39 + (d43 - d39) * d2;
    }
    if (i29 | (__ZNK7WebCore19SVGAnimationElement13isAccumulatedEv(i38) | 0) ^ 1) {
     d45 = d44;
    } else {
     d45 = d32 * d42 + d44;
    }
    do {
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i38 >> 2] | 0) + 668 >> 2] & 1](i38) | 0) {
      if ((HEAP32[i38 + 400 >> 2] | 0) == 3) {
       d46 = d45;
       break;
      }
      d46 = d36 + d45;
     } else {
      d46 = d45;
     }
    } while (0);
    if ((HEAP32[i21 >> 2] | 0) >>> 0 <= i34 >>> 0) {
     i35 = 42;
     break;
    }
    i38 = (HEAP32[i15 >> 2] | 0) + (i34 << 3) | 0;
    i37 = HEAP32[i30 >> 2] | 0;
    HEAP32[i31 >> 2] = 0;
    __ZN7WebCore9SVGLength8setValueERKNS_16SVGLengthContextEfNS_13SVGLengthModeENS_13SVGLengthTypeERi(i38, i11, d46, i37, i40, i31);
    i37 = i34 + 1 | 0;
    if (i37 >>> 0 < i23 >>> 0) {
     i34 = i37;
    } else {
     i47 = i23;
     i35 = 44;
     break L19;
    }
   }
   if ((i35 | 0) == 18) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i35 | 0) == 20) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i35 | 0) == 24) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i35 | 0) == 27) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i35 | 0) == 31) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i35 | 0) == 42) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  } else {
   i47 = HEAP32[i22 >> 2] | 0;
   i35 = 44;
  }
 } while (0);
 do {
  if ((i35 | 0) == 44) {
   if ((i47 | 0) == 0) {
    break;
   }
   HEAP32[i22 >> 2] = 0;
  }
 } while (0);
 i22 = HEAP32[i14 >> 2] | 0;
 if ((i22 | 0) != 0) {
  HEAP32[i14 >> 2] = 0;
  HEAP32[i4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i22);
 }
 if ((HEAP32[i19 >> 2] | 0) != 0) {
  HEAP32[i19 >> 2] = 0;
 }
 i19 = HEAP32[i17 >> 2] | 0;
 if ((i19 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 HEAP32[i17 >> 2] = 0;
 HEAP32[i18 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i19);
 STACKTOP = i8;
 return;
}
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore18SVGPropertyTearOffINS2_9SVGLengthEEEEELj0ENS_15CrashOnOverflowEE4fillERKS6_j(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i4 = i1 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if (i5 >>> 0 > i3 >>> 0) {
   i6 = HEAP32[i1 >> 2] | 0;
   i7 = i6 + (i5 << 2) | 0;
   if ((i5 | 0) != (i3 | 0)) {
    i8 = i6 + (i3 << 2) | 0;
    while (1) {
     i6 = HEAP32[i8 >> 2] | 0;
     do {
      if ((i6 | 0) != 0) {
       i9 = i6 + 4 | 0;
       i10 = i9 | 0;
       i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
       if ((i11 | 0) != 0) {
        HEAP32[i10 >> 2] = i11;
        break;
       }
       i11 = i9 - 4 | 0;
       if ((i11 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 7](i11);
      }
     } while (0);
     i8 = i8 + 4 | 0;
     if ((i8 | 0) == (i7 | 0)) {
      break;
     }
    }
   }
   HEAP32[i4 >> 2] = i3;
  } else {
   i7 = i1 + 4 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   if (i8 >>> 0 >= i3 >>> 0) {
    break;
   }
   do {
    if ((i8 | 0) != 0) {
     i6 = i1 | 0;
     if ((i5 | 0) != 0) {
      i11 = HEAP32[i6 >> 2] | 0;
      i9 = i11 + (i5 << 2) | 0;
      i10 = i11;
      while (1) {
       i11 = HEAP32[i10 >> 2] | 0;
       do {
        if ((i11 | 0) != 0) {
         i12 = i11 + 4 | 0;
         i13 = i12 | 0;
         i14 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
         if ((i14 | 0) != 0) {
          HEAP32[i13 >> 2] = i14;
          break;
         }
         i14 = i12 - 4 | 0;
         if ((i14 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 7](i14);
        }
       } while (0);
       i10 = i10 + 4 | 0;
       if ((i10 | 0) == (i9 | 0)) {
        break;
       }
      }
      HEAP32[i4 >> 2] = 0;
     }
     i9 = HEAP32[i6 >> 2] | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     HEAP32[i6 >> 2] = 0;
     HEAP32[i7 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i9);
    }
   } while (0);
   if ((HEAP32[i7 >> 2] | 0) >>> 0 >= i3 >>> 0) {
    break;
   }
   i8 = i1 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   if (i3 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   }
   i10 = HEAP32[i4 >> 2] | 0;
   i11 = __ZN3WTF18fastMallocGoodSizeEj(i3 << 2) | 0;
   HEAP32[i7 >> 2] = i11 >>> 2;
   i14 = __ZN3WTF10fastMallocEj(i11) | 0;
   HEAP32[i8 >> 2] = i14;
   i11 = i9;
   _memcpy(i14 | 0, i11 | 0, i10 << 2) | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   if ((HEAP32[i8 >> 2] | 0) == (i9 | 0)) {
    HEAP32[i8 >> 2] = 0;
    HEAP32[i7 >> 2] = 0;
   }
   __ZN3WTF8fastFreeEPv(i11);
  }
 } while (0);
 i5 = i1 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 i11 = i1 << 2;
 if ((i11 | 0) > 0) {
  i8 = i2 | 0;
  i9 = i11 >> 2;
  i11 = HEAP32[i5 >> 2] | 0;
  while (1) {
   i10 = HEAP32[i8 >> 2] | 0;
   if ((i10 | 0) != 0) {
    i14 = i10 + 4 | 0;
    HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
   }
   i14 = i11 | 0;
   i12 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = i10;
   do {
    if ((i12 | 0) != 0) {
     i10 = i12 + 4 | 0;
     i14 = i10 | 0;
     i13 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
     if ((i13 | 0) != 0) {
      HEAP32[i14 >> 2] = i13;
      break;
     }
     i13 = i10 - 4 | 0;
     if ((i13 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 7](i13);
    }
   } while (0);
   i12 = i9 - 1 | 0;
   if ((i12 | 0) > 0) {
    i9 = i12;
    i11 = i11 + 4 | 0;
   } else {
    break;
   }
  }
  i15 = HEAP32[i4 >> 2] | 0;
 } else {
  i15 = i1;
 }
 i1 = HEAP32[i5 >> 2] | 0;
 i5 = i1 + (i3 << 2) | 0;
 if ((i15 | 0) == (i3 | 0)) {
  HEAP32[i4 >> 2] = i3;
  return;
 }
 i11 = i2 | 0;
 i2 = i1 + (i15 << 2) | 0;
 while (1) {
  i15 = HEAP32[i11 >> 2] | 0;
  HEAP32[i2 >> 2] = i15;
  if ((i15 | 0) != 0) {
   i1 = i15 + 4 | 0;
   HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
  }
  i2 = i2 + 4 | 0;
  if ((i2 | 0) == (i5 | 0)) {
   break;
  }
 }
 HEAP32[i4 >> 2] = i3;
 return;
}
function __ZN7WebCore23SVGAnimatedTypeAnimator13executeActionINS_30SVGAnimatedListPropertyTearOffINS_13SVGLengthListEEEEEvNS0_15AnimationActionERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS6_15CrashOnOverflowEEEjPNT_11ContentTypeE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i1 | 0;
 i7 = i3 + 8 | 0;
 if ((HEAP32[i7 >> 2] | 0) == 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i8 = i3 | 0;
 __ZN7WebCore18SVGElementInstance21InstanceUpdateBlockerC1EPNS_10SVGElementE(i6, HEAP32[HEAP32[i8 >> 2] >> 2] | 0);
 i3 = HEAP32[i8 >> 2] | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i7 = i3 + (i8 << 4) | 0;
 if ((i8 | 0) == 0) {
  __ZN7WebCore18SVGElementInstance21InstanceUpdateBlockerD1Ev(i6);
  STACKTOP = i1;
  return;
 }
 if ((i2 | 0) == 1) {
  i8 = i3;
  while (1) {
   if ((HEAP32[i8 + 12 >> 2] | 0) >>> 0 <= i4 >>> 0) {
    i9 = 22;
    break;
   }
   __ZN7WebCore30SVGAnimatedListPropertyTearOffINS_13SVGLengthListEE14animationEndedEv(HEAP32[(HEAP32[i8 + 4 >> 2] | 0) + (i4 << 2) >> 2] | 0);
   i10 = i8 + 16 | 0;
   if ((i10 | 0) == (i7 | 0)) {
    i9 = 21;
    break;
   } else {
    i8 = i10;
   }
  }
  if ((i9 | 0) == 21) {
   __ZN7WebCore18SVGElementInstance21InstanceUpdateBlockerD1Ev(i6);
   STACKTOP = i1;
   return;
  } else if ((i9 | 0) == 22) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } else if ((i2 | 0) == 0) {
  i8 = i3;
  while (1) {
   if ((HEAP32[i8 + 12 >> 2] | 0) >>> 0 <= i4 >>> 0) {
    i9 = 23;
    break;
   }
   i10 = HEAP32[(HEAP32[i8 + 4 >> 2] | 0) + (i4 << 2) >> 2] | 0;
   if ((HEAP8[i10 + 20 | 0] & 1) == 0) {
    __ZN7WebCore30SVGAnimatedListPropertyTearOffINS_13SVGLengthListEE16animationStartedEPS1_b(i10, i5, 0);
   }
   i10 = i8 + 16 | 0;
   if ((i10 | 0) == (i7 | 0)) {
    i9 = 18;
    break;
   } else {
    i8 = i10;
   }
  }
  if ((i9 | 0) == 18) {
   __ZN7WebCore18SVGElementInstance21InstanceUpdateBlockerD1Ev(i6);
   STACKTOP = i1;
   return;
  } else if ((i9 | 0) == 23) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } else {
  i8 = i3;
  while (1) {
   if ((HEAP32[i8 + 12 >> 2] | 0) >>> 0 <= i4 >>> 0) {
    i9 = 24;
    break;
   }
   i3 = HEAP32[(HEAP32[i8 + 4 >> 2] | 0) + (i4 << 2) >> 2] | 0;
   if ((i2 | 0) == 3) {
    i5 = HEAP32[i3 + 56 >> 2] | 0;
    __ZN7WebCore15SVGListPropertyINS_13SVGLengthListEE27detachListWrappersAndResizeEPN3WTF6VectorINS3_6RefPtrINS_18SVGPropertyTearOffINS_9SVGLengthEEEEELj0ENS3_15CrashOnOverflowEEEj(HEAP32[i5 + 20 >> 2] | 0, HEAP32[(HEAP32[i5 + 16 >> 2] | 0) + 8 >> 2] | 0);
   } else if ((i2 | 0) == 2) {
    i5 = HEAP32[i3 + 56 >> 2] | 0;
    __ZN7WebCore15SVGListPropertyINS_13SVGLengthListEE27detachListWrappersAndResizeEPN3WTF6VectorINS3_6RefPtrINS_18SVGPropertyTearOffINS_9SVGLengthEEEEELj0ENS3_15CrashOnOverflowEEEj(HEAP32[i5 + 20 >> 2] | 0, HEAP32[(HEAP32[i5 + 16 >> 2] | 0) + 8 >> 2] | 0);
   }
   i5 = i8 + 16 | 0;
   if ((i5 | 0) == (i7 | 0)) {
    i9 = 19;
    break;
   } else {
    i8 = i5;
   }
  }
  if ((i9 | 0) == 19) {
   __ZN7WebCore18SVGElementInstance21InstanceUpdateBlockerD1Ev(i6);
   STACKTOP = i1;
   return;
  } else if ((i9 | 0) == 24) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 }
}
function __ZN7WebCore19SVGAnimationElement22adjustFromToListValuesINS_13SVGLengthListEEEbRKT_S5_RS3_fb(i1, i2, i3, i4, d5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i7 = i3 + 8 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i9 = 0;
  return i9 | 0;
 }
 i10 = i2 + 8 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 if (!((i11 | 0) != (i8 | 0) & (i11 | 0) != 0)) {
  if (!i6) {
   i9 = 1;
   return i9 | 0;
  }
  if ((HEAP32[i4 + 8 >> 2] | 0) >>> 0 >= i8 >>> 0) {
   i9 = 1;
   return i9 | 0;
  }
  __ZN3WTF6VectorIN7WebCore9SVGLengthELj0ENS_15CrashOnOverflowEE6resizeEj(i4 | 0, i8);
  i9 = 1;
  return i9 | 0;
 }
 if (d5 >= +.5) {
  i6 = HEAP32[i3 + 4 >> 2] | 0;
  do {
   if ((i6 | 0) == 0) {
    i12 = 0;
    i13 = 0;
   } else {
    if (i6 >>> 0 > 536870911 >>> 0) {
     _WTFCrash();
     return 0;
    }
    i14 = __ZN3WTF18fastMallocGoodSizeEj(i6 << 3) | 0;
    i15 = i14 >>> 3;
    i16 = __ZN3WTF10fastMallocEj(i14) | 0;
    i14 = i16;
    if ((i16 | 0) == 0) {
     i12 = i14;
     i13 = i15;
     break;
    }
    i16 = HEAP32[i3 >> 2] | 0;
    i17 = HEAP32[i7 >> 2] | 0;
    i18 = i16 + (i17 << 3) | 0;
    if ((i17 | 0) == 0) {
     i12 = i14;
     i13 = i15;
     break;
    } else {
     i19 = i16;
     i20 = i14;
    }
    while (1) {
     __ZN7WebCore9SVGLengthC1ERKS0_(i20, i19);
     i16 = i19 + 8 | 0;
     if ((i16 | 0) == (i18 | 0)) {
      i12 = i14;
      i13 = i15;
      break;
     } else {
      i19 = i16;
      i20 = i20 + 8 | 0;
     }
    }
   }
  } while (0);
  HEAP32[i4 + 8 >> 2] = i8;
  i8 = i4 | 0;
  i20 = HEAP32[i8 >> 2] | 0;
  HEAP32[i8 >> 2] = i12;
  HEAP32[i4 + 4 >> 2] = i13;
  if ((i20 | 0) == 0) {
   i9 = 0;
   return i9 | 0;
  }
  __ZN3WTF8fastFreeEPv(i20);
  i9 = 0;
  return i9 | 0;
 }
 if ((HEAP32[i1 + 400 >> 2] | 0) == 3) {
  i9 = 0;
  return i9 | 0;
 }
 i1 = HEAP32[i2 + 4 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i21 = 0;
   i22 = 0;
  } else {
   if (i1 >>> 0 > 536870911 >>> 0) {
    _WTFCrash();
    return 0;
   }
   i20 = __ZN3WTF18fastMallocGoodSizeEj(i1 << 3) | 0;
   i13 = i20 >>> 3;
   i12 = __ZN3WTF10fastMallocEj(i20) | 0;
   i20 = i12;
   if ((i12 | 0) == 0) {
    i21 = i20;
    i22 = i13;
    break;
   }
   i12 = HEAP32[i2 >> 2] | 0;
   i8 = HEAP32[i10 >> 2] | 0;
   i19 = i12 + (i8 << 3) | 0;
   if ((i8 | 0) == 0) {
    i21 = i20;
    i22 = i13;
    break;
   } else {
    i23 = i12;
    i24 = i20;
   }
   while (1) {
    __ZN7WebCore9SVGLengthC1ERKS0_(i24, i23);
    i12 = i23 + 8 | 0;
    if ((i12 | 0) == (i19 | 0)) {
     i21 = i20;
     i22 = i13;
     break;
    } else {
     i23 = i12;
     i24 = i24 + 8 | 0;
    }
   }
  }
 } while (0);
 HEAP32[i4 + 8 >> 2] = i11;
 i11 = i4 | 0;
 i24 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = i21;
 HEAP32[i4 + 4 >> 2] = i22;
 if ((i24 | 0) == 0) {
  i9 = 0;
  return i9 | 0;
 }
 __ZN3WTF8fastFreeEPv(i24);
 i9 = 0;
 return i9 | 0;
}
function __ZN7WebCore15SVGListPropertyINS_13SVGLengthListEE27detachListWrappersAndResizeEPN3WTF6VectorINS3_6RefPtrINS_18SVGPropertyTearOffINS_9SVGLengthEEEEELj0ENS3_15CrashOnOverflowEEEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 L1 : do {
  if ((i6 | 0) != 0) {
   i7 = i1 | 0;
   i8 = 0;
   i9 = i6;
   while (1) {
    if (i9 >>> 0 <= i8 >>> 0) {
     break;
    }
    i10 = HEAP32[(HEAP32[i7 >> 2] | 0) + (i8 << 2) >> 2] | 0;
    do {
     if ((i10 | 0) != 0) {
      i11 = i10 + 24 | 0;
      if ((HEAP8[i11] & 1) != 0) {
       break;
      }
      i12 = __ZN3WTF10fastMallocEj(8) | 0;
      i13 = i10 + 20 | 0;
      __ZN7WebCore9SVGLengthC1ERKS0_(i12, HEAP32[i13 >> 2] | 0);
      HEAP32[i13 >> 2] = i12;
      HEAP8[i11] = HEAP8[i11] | 1;
      HEAP32[i10 + 12 >> 2] = 0;
     }
    } while (0);
    i10 = i8 + 1 | 0;
    if (i10 >>> 0 >= i6 >>> 0) {
     break L1;
    }
    i8 = i10;
    i9 = HEAP32[i5 >> 2] | 0;
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 if ((i2 | 0) != 0) {
  i6 = i4 | 0;
  HEAP32[i6 >> 2] = 0;
  __ZN3WTF6VectorINS_6RefPtrIN7WebCore18SVGPropertyTearOffINS2_9SVGLengthEEEEELj0ENS_15CrashOnOverflowEE4fillERKS6_j(i1, i4, i2);
  i2 = HEAP32[i6 >> 2] | 0;
  if ((i2 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i6 = i2 + 4 | 0;
  i2 = i6 | 0;
  i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
  if ((i4 | 0) != 0) {
   HEAP32[i2 >> 2] = i4;
   STACKTOP = i3;
   return;
  }
  i4 = i6 - 4 | 0;
  if ((i4 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 7](i4);
  STACKTOP = i3;
  return;
 }
 i4 = i1 + 4 | 0;
 if ((HEAP32[i4 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = HEAP32[i5 >> 2] | 0;
 i2 = i1 | 0;
 if ((i6 | 0) != 0) {
  i1 = HEAP32[i2 >> 2] | 0;
  i9 = i1 + (i6 << 2) | 0;
  i6 = i1;
  while (1) {
   i1 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i1 | 0) != 0) {
     i8 = i1 + 4 | 0;
     i7 = i8 | 0;
     i10 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
     if ((i10 | 0) != 0) {
      HEAP32[i7 >> 2] = i10;
      break;
     }
     i10 = i8 - 4 | 0;
     if ((i10 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 7](i10);
    }
   } while (0);
   i6 = i6 + 4 | 0;
   if ((i6 | 0) == (i9 | 0)) {
    break;
   }
  }
  HEAP32[i5 >> 2] = 0;
 }
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i2 >> 2] = 0;
 HEAP32[i4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i5);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore29SVGAnimatedLengthListAnimator21startAnimValAnimationERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS1_15CrashOnOverflowEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i2 | 0;
 if ((HEAP32[i3 + 8 >> 2] | 0) == 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i2 = HEAP32[i3 >> 2] | 0;
 if ((HEAP32[i2 + 12 >> 2] | 0) == 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i7 = HEAP32[(HEAP32[HEAP32[i2 + 4 >> 2] >> 2] | 0) + 24 >> 2] | 0;
 i2 = __ZN3WTF10fastMallocEj(12) | 0;
 i8 = i2;
 i9 = HEAP32[i7 + 4 >> 2] | 0;
 i10 = i7 + 8 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 i12 = i2;
 HEAP32[i12 >> 2] = 0;
 i13 = i2 + 4 | 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i2 + 8 >> 2] = i11;
 do {
  if ((i9 | 0) != 0) {
   if (i9 >>> 0 > 536870911 >>> 0) {
    _WTFCrash();
   }
   i11 = __ZN3WTF18fastMallocGoodSizeEj(i9 << 3) | 0;
   HEAP32[i13 >> 2] = i11 >>> 3;
   i2 = __ZN3WTF10fastMallocEj(i11) | 0;
   i11 = i2;
   HEAP32[i12 >> 2] = i11;
   if ((i2 | 0) == 0) {
    break;
   }
   i2 = HEAP32[i7 >> 2] | 0;
   i14 = HEAP32[i10 >> 2] | 0;
   i15 = i2 + (i14 << 3) | 0;
   if ((i14 | 0) == 0) {
    break;
   } else {
    i16 = i2;
    i17 = i11;
   }
   while (1) {
    __ZN7WebCore9SVGLengthC1ERKS0_(i17, i16);
    i11 = i16 + 8 | 0;
    if ((i11 | 0) == (i15 | 0)) {
     break;
    } else {
     i16 = i11;
     i17 = i17 + 8 | 0;
    }
   }
  }
 } while (0);
 i17 = i5 | 0;
 HEAP32[i17 >> 2] = i8;
 __ZN7WebCore23SVGAnimatedTypeAnimator13executeActionINS_30SVGAnimatedListPropertyTearOffINS_13SVGLengthListEEEEEvNS0_15AnimationActionERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS6_15CrashOnOverflowEEEjPNT_11ContentTypeE(i6, 0, i3, 0, i8);
 __ZN7WebCore15SVGAnimatedType16createLengthListENSt3__110unique_ptrINS_13SVGLengthListENS1_14default_deleteIS3_EEEE(i1, i5);
 i5 = HEAP32[i17 >> 2] | 0;
 HEAP32[i17 >> 2] = 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i17 = i5 + 8 | 0;
 if ((HEAP32[i17 >> 2] | 0) != 0) {
  HEAP32[i17 >> 2] = 0;
 }
 i17 = i5 | 0;
 i1 = HEAP32[i17 >> 2] | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i17 >> 2] = 0;
  HEAP32[i5 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i1);
 }
 __ZN3WTF8fastFreeEPv(i5);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore30SVGAnimatedListPropertyTearOffINS_13SVGLengthListEE14animationEndedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = HEAP32[i1 + 56 >> 2] | 0;
 i3 = HEAP32[i1 + 24 >> 2] | 0;
 i4 = i1 + 28 | 0;
 i5 = i2 + 12 | 0;
 i6 = i2 + 16 | 0;
 do {
  if ((HEAP8[i5] & 1) != 0) {
   i7 = HEAP32[i6 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   i8 = i7 + 8 | 0;
   if ((HEAP32[i8 >> 2] | 0) != 0) {
    HEAP32[i8 >> 2] = 0;
   }
   i8 = i7 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i8 >> 2] = 0;
    HEAP32[i7 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i9);
   }
   __ZN3WTF8fastFreeEPv(i7);
  }
 } while (0);
 HEAP32[i6 >> 2] = i3;
 HEAP8[i5] = 0;
 HEAP32[i2 + 20 >> 2] = i4;
 i4 = i1 + 44 | 0;
 if ((HEAP32[i4 >> 2] | 0) == 0) {
  i10 = i1 + 20 | 0;
  HEAP8[i10] = 0;
  return;
 }
 i2 = i1 + 48 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 i3 = i1 + 40 | 0;
 if ((i5 | 0) != 0) {
  i6 = HEAP32[i3 >> 2] | 0;
  i7 = i6 + (i5 << 2) | 0;
  i5 = i6;
  while (1) {
   i6 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i9 = i6 + 4 | 0;
     i8 = i9 | 0;
     i11 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i11 | 0) != 0) {
      HEAP32[i8 >> 2] = i11;
      break;
     }
     i11 = i9 - 4 | 0;
     if ((i11 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 7](i11);
    }
   } while (0);
   i5 = i5 + 4 | 0;
   if ((i5 | 0) == (i7 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i10 = i1 + 20 | 0;
  HEAP8[i10] = 0;
  return;
 }
 HEAP32[i3 >> 2] = 0;
 HEAP32[i4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 i10 = i1 + 20 | 0;
 HEAP8[i10] = 0;
 return;
}
function __ZN7WebCore30SVGAnimatedListPropertyTearOffINS_13SVGLengthListEE16animationStartedEPS1_b(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   i7 = i1 + 40 | 0;
  } else {
   i8 = i5 | 0;
   HEAP32[i8 >> 2] = 0;
   i9 = i1 + 40 | 0;
   __ZN3WTF6VectorINS_6RefPtrIN7WebCore18SVGPropertyTearOffINS2_9SVGLengthEEEEELj0ENS_15CrashOnOverflowEE4fillERKS6_j(i9, i5, i6);
   i10 = HEAP32[i8 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i7 = i9;
    break;
   }
   i8 = i10 + 4 | 0;
   i10 = i8 | 0;
   i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i10 >> 2] = i11;
    i7 = i9;
    break;
   }
   i11 = i8 - 4 | 0;
   if ((i11 | 0) == 0) {
    i7 = i9;
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 7](i11);
   i7 = i9;
  }
 } while (0);
 i6 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 1](i1) | 0;
 i5 = i6 + 12 | 0;
 i9 = i6 + 16 | 0;
 do {
  if ((HEAP8[i5] & 1) != 0) {
   i11 = HEAP32[i9 >> 2] | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   i8 = i11 + 8 | 0;
   if ((HEAP32[i8 >> 2] | 0) != 0) {
    HEAP32[i8 >> 2] = 0;
   }
   i8 = i11 | 0;
   i10 = HEAP32[i8 >> 2] | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i8 >> 2] = 0;
    HEAP32[i11 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i10);
   }
   __ZN3WTF8fastFreeEPv(i11);
  }
 } while (0);
 HEAP32[i9 >> 2] = i2;
 HEAP8[i5] = i3 & 1;
 HEAP32[i6 + 20 >> 2] = i7;
 HEAP8[i1 + 20 | 0] = 1;
 STACKTOP = i4;
 return;
}
function __ZN3WTF6VectorIN7WebCore9SVGLengthELj0ENS_15CrashOnOverflowEEaSERKS4_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 if ((i2 | 0) == (i1 | 0)) {
  return i1 | 0;
 }
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i2 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if (i4 >>> 0 > i6 >>> 0) {
   HEAP32[i3 >> 2] = i6;
   i7 = i6;
  } else {
   i8 = i1 + 4 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   if (i6 >>> 0 <= i9 >>> 0) {
    i7 = i4;
    break;
   }
   do {
    if ((i9 | 0) != 0) {
     if ((i4 | 0) != 0) {
      HEAP32[i3 >> 2] = 0;
     }
     i10 = i1 | 0;
     i11 = HEAP32[i10 >> 2] | 0;
     if ((i11 | 0) == 0) {
      break;
     }
     HEAP32[i10 >> 2] = 0;
     HEAP32[i8 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i11);
    }
   } while (0);
   __ZN3WTF6VectorIN7WebCore9SVGLengthELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, HEAP32[i5 >> 2] | 0);
   i7 = HEAP32[i3 >> 2] | 0;
  }
 } while (0);
 i4 = i2 | 0;
 i2 = i1 | 0;
 _memmove(HEAP32[i2 >> 2] | 0, HEAP32[i4 >> 2] | 0, i7 << 3 | 0) | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i8 = i7 + (i6 << 3) | 0;
 if ((i4 | 0) == (i6 | 0)) {
  i12 = i4;
 } else {
  i6 = i7 + (i4 << 3) | 0;
  i7 = (HEAP32[i2 >> 2] | 0) + (i4 << 3) | 0;
  while (1) {
   __ZN7WebCore9SVGLengthC1ERKS0_(i7, i6);
   i4 = i6 + 8 | 0;
   if ((i4 | 0) == (i8 | 0)) {
    break;
   } else {
    i6 = i4;
    i7 = i7 + 8 | 0;
   }
  }
  i12 = HEAP32[i5 >> 2] | 0;
 }
 HEAP32[i3 >> 2] = i12;
 return i1 | 0;
}
function __ZN7WebCore29SVGAnimatedLengthListAnimator16addAnimatedTypesEPNS_15SVGAnimatedTypeES2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, d12 = +0, d13 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i6 + 8 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i8 = HEAP32[i3 + 8 >> 2] | 0;
 i3 = i8 + 8 | 0;
 if ((i7 | 0) != (HEAP32[i3 >> 2] | 0)) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore16SVGLengthContextC1EPKNS_10SVGElementE(i5, HEAP32[i1 + 12 >> 2] | 0);
 i1 = i8 | 0;
 i8 = i6 | 0;
 i6 = i4 + 24 | 0;
 i9 = 0;
 while (1) {
  if ((HEAP32[i3 >> 2] | 0) >>> 0 <= i9 >>> 0) {
   i10 = 5;
   break;
  }
  i11 = (HEAP32[i1 >> 2] | 0) + (i9 << 3) | 0;
  d12 = +__ZNK7WebCore9SVGLength5valueERKNS_16SVGLengthContextE(i11, i5);
  if ((HEAP32[i2 >> 2] | 0) >>> 0 <= i9 >>> 0) {
   i10 = 7;
   break;
  }
  d13 = d12 + +__ZNK7WebCore9SVGLength5valueERKNS_16SVGLengthContextE((HEAP32[i8 >> 2] | 0) + (i9 << 3) | 0, i5);
  HEAP32[i6 >> 2] = 0;
  __ZN7WebCore9SVGLength8setValueEfRKNS_16SVGLengthContextERi(i11, d13, i5, i6);
  i11 = i9 + 1 | 0;
  if (i11 >>> 0 < i7 >>> 0) {
   i9 = i11;
  } else {
   i10 = 12;
   break;
  }
 }
 if ((i10 | 0) == 12) {
  STACKTOP = i4;
  return;
 } else if ((i10 | 0) == 5) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i10 | 0) == 7) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
}
function __ZN7WebCore19SVGAnimationElement20adjustForInheritanceINS_13SVGLengthListEEEvPFT_PS0_RKN3WTF6StringEENS_25AnimatedPropertyValueTypeERS3_PNS_10SVGElementE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 if ((i3 | 0) != 2) {
  STACKTOP = i6;
  return;
 }
 i3 = i7 | 0;
 HEAP32[i3 >> 2] = 0;
 __ZN7WebCore19SVGAnimationElement20adjustForInheritanceEPNS_10SVGElementERKNS_13QualifiedNameERN3WTF6StringE(i1, i5, i1 + 92 | 0, i7);
 FUNCTION_TABLE_viii[i2 & 15](i8, i1, i7);
 i7 = i4 + 8 | 0;
 i1 = i8 + 8 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i1 >> 2] = i2;
 i7 = i4 | 0;
 i5 = i8 | 0;
 i9 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i5 >> 2] = i9;
 i7 = i4 + 4 | 0;
 i4 = i8 + 4 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i4 >> 2] = i8;
 if ((i2 | 0) != 0) {
  HEAP32[i1 >> 2] = 0;
 }
 if ((i9 | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
  HEAP32[i4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i9);
 }
 i9 = HEAP32[i3 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i3 = i9 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i9);
  STACKTOP = i6;
  return;
 } else {
  HEAP32[i3 >> 2] = i4;
  STACKTOP = i6;
  return;
 }
}
function __ZN3WTF6VectorIN7WebCore9SVGLengthELj0ENS_15CrashOnOverflowEE6resizeEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 8 | 0;
 if ((HEAP32[i5 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  HEAP32[i5 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
 i6 = HEAP32[i1 + 4 >> 2] | 0;
 if (i6 >>> 0 < i2 >>> 0) {
  i7 = i6 + 1 + (i6 >>> 2) | 0;
  i6 = i7 >>> 0 > 16 >>> 0 ? i7 : 16;
  __ZN3WTF6VectorIN7WebCore9SVGLengthELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i6 >>> 0 > i2 >>> 0 ? i6 : i2);
 }
 i6 = HEAP32[i1 >> 2] | 0;
 if ((i6 | 0) == 0) {
  HEAP32[i5 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
 i1 = HEAP32[i5 >> 2] | 0;
 i7 = i6 + (i2 << 3) | 0;
 if ((i1 | 0) == (i2 | 0)) {
  HEAP32[i5 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
 i8 = i4 | 0;
 i9 = i6 + (i1 << 3) | 0;
 while (1) {
  HEAP32[i8 >> 2] = 0;
  __ZN7WebCore9SVGLengthC1ENS_13SVGLengthModeERKN3WTF6StringE(i9, 2, i4);
  i1 = HEAP32[i8 >> 2] | 0;
  do {
   if ((i1 | 0) != 0) {
    i6 = i1 | 0;
    i10 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
    if ((i10 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i1);
     break;
    } else {
     HEAP32[i6 >> 2] = i10;
     break;
    }
   }
  } while (0);
  i9 = i9 + 8 | 0;
  if ((i9 | 0) == (i7 | 0)) {
   break;
  }
 }
 HEAP32[i5 >> 2] = i2;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore29SVGAnimatedLengthListAnimator20stopAnimValAnimationERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i1 | 0;
 i4 = i2 + 8 | 0;
 if ((HEAP32[i4 >> 2] | 0) == 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i5 = i2 | 0;
 __ZN7WebCore18SVGElementInstance21InstanceUpdateBlockerC1EPNS_10SVGElementE(i3, HEAP32[HEAP32[i5 >> 2] >> 2] | 0);
 i2 = HEAP32[i5 >> 2] | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i4 = i2 + (i5 << 4) | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore18SVGElementInstance21InstanceUpdateBlockerD1Ev(i3);
  STACKTOP = i1;
  return;
 } else {
  i6 = i2;
 }
 while (1) {
  if ((HEAP32[i6 + 12 >> 2] | 0) == 0) {
   i7 = 6;
   break;
  }
  __ZN7WebCore30SVGAnimatedListPropertyTearOffINS_13SVGLengthListEE14animationEndedEv(HEAP32[HEAP32[i6 + 4 >> 2] >> 2] | 0);
  i2 = i6 + 16 | 0;
  if ((i2 | 0) == (i4 | 0)) {
   i7 = 9;
   break;
  } else {
   i6 = i2;
  }
 }
 if ((i7 | 0) == 6) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i7 | 0) == 9) {
  __ZN7WebCore18SVGElementInstance21InstanceUpdateBlockerD1Ev(i3);
  STACKTOP = i1;
  return;
 }
}
function __ZN7WebCore29SVGAnimatedLengthListAnimator19constructFromStringERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = __ZN3WTF10fastMallocEj(12) | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i6 + 4 >> 2] = 0;
 HEAP32[i6 + 8 >> 2] = 0;
 i7 = i5 | 0;
 HEAP32[i7 >> 2] = i6;
 __ZN7WebCore15SVGAnimatedType16createLengthListENSt3__110unique_ptrINS_13SVGLengthListENS1_14default_deleteIS3_EEEE(i1, i5);
 i5 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 if ((i5 | 0) != 0) {
  i7 = i5 + 8 | 0;
  if ((HEAP32[i7 >> 2] | 0) != 0) {
   HEAP32[i7 >> 2] = 0;
  }
  i7 = i5 | 0;
  i6 = HEAP32[i7 >> 2] | 0;
  if ((i6 | 0) != 0) {
   HEAP32[i7 >> 2] = 0;
   HEAP32[i5 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i6);
  }
  __ZN3WTF8fastFreeEPv(i5);
 }
 __ZN7WebCore13SVGLengthList5parseERKN3WTF6StringENS_13SVGLengthModeE(HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] | 0, i3, HEAP32[i2 + 16 >> 2] | 0);
 STACKTOP = i4;
 return;
}
function __ZN3WTF6VectorIN7WebCore9SVGLengthELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i5 + (i6 << 3) | 0;
 if (i2 >>> 0 > 536870911 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 3) | 0;
 HEAP32[i3 >> 2] = i7 >>> 3;
 i2 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i6 | 0) != 0) {
  i6 = i5;
  i7 = i2;
  while (1) {
   __ZN7WebCore9SVGLengthC1ERKS0_(i7, i6);
   i2 = i6 + 8 | 0;
   if ((i2 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i2;
    i7 = i7 + 8 | 0;
   }
  }
 }
 if ((i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZN7WebCore29SVGAnimatedLengthListAnimator21resetAnimValToBaseValERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS1_15CrashOnOverflowEEEPNS_15SVGAnimatedTypeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = HEAP32[i3 + 8 >> 2] | 0;
 if ((HEAP32[i2 + 8 >> 2] | 0) == 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i3 = HEAP32[i2 >> 2] | 0;
 if ((HEAP32[i3 + 12 >> 2] | 0) == 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else {
  __ZN3WTF6VectorIN7WebCore9SVGLengthELj0ENS_15CrashOnOverflowEEaSERKS4_(i4 | 0, HEAP32[(HEAP32[HEAP32[i3 + 4 >> 2] >> 2] | 0) + 24 >> 2] | 0) | 0;
  __ZN7WebCore23SVGAnimatedTypeAnimator13executeActionINS_30SVGAnimatedListPropertyTearOffINS_13SVGLengthListEEEEEvNS0_15AnimationActionERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS6_15CrashOnOverflowEEEjPNT_11ContentTypeE(i1 | 0, 0, i2, 0, i4);
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
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_vifiiiii + 2;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_fiii + 2;
}
function __ZN7WebCore29SVGAnimatedLengthListAnimatorC2EPNS_19SVGAnimationElementEPNS_10SVGElementE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore23SVGAnimatedTypeAnimatorC2ENS_20AnimatedPropertyTypeEPNS_19SVGAnimationElementEPNS_10SVGElementE(i1 | 0, 7, i2, i3);
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 16 >> 2] = __ZN7WebCore9SVGLength36lengthModeForAnimatedLengthAttributeERKNS_13QualifiedNameE(i2 + 92 | 0) | 0;
 return;
}
function __ZN7WebCore29SVGAnimatedLengthListAnimatorC1EPNS_19SVGAnimationElementEPNS_10SVGElementE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore23SVGAnimatedTypeAnimatorC2ENS_20AnimatedPropertyTypeEPNS_19SVGAnimationElementEPNS_10SVGElementE(i1 | 0, 7, i2, i3);
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 16 >> 2] = __ZN7WebCore9SVGLength36lengthModeForAnimatedLengthAttributeERKNS_13QualifiedNameE(i2 + 92 | 0) | 0;
 return;
}
function __ZN7WebCore29SVGAnimatedLengthListAnimator17animValWillChangeERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore23SVGAnimatedTypeAnimator13executeActionINS_30SVGAnimatedListPropertyTearOffINS_13SVGLengthListEEEEEvNS0_15AnimationActionERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS6_15CrashOnOverflowEEEjPNT_11ContentTypeE(i1 | 0, 2, i2, 0, 0);
 return;
}
function __ZN7WebCore29SVGAnimatedLengthListAnimator16animValDidChangeERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore23SVGAnimatedTypeAnimator13executeActionINS_30SVGAnimatedListPropertyTearOffINS_13SVGLengthListEEEEEvNS0_15AnimationActionERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS6_15CrashOnOverflowEEEjPNT_11ContentTypeE(i1 | 0, 3, i2, 0, 0);
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
function __ZN7WebCoreL25parseLengthListFromStringEPNS_19SVGAnimationElementERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN7WebCore13SVGLengthList5parseERKN3WTF6StringENS_13SVGLengthModeE(i1, i3, __ZN7WebCore9SVGLength36lengthModeForAnimatedLengthAttributeERKNS_13QualifiedNameE(i2 + 92 | 0) | 0);
 return;
}
function _memmove(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 if ((i2 | 0) < (i1 | 0) & (i1 | 0) < (i2 + i3 | 0)) {
  i4 = i1;
  i2 = i2 + i3 | 0;
  i1 = i1 + i3 | 0;
  while ((i3 | 0) > 0) {
   i1 = i1 - 1 | 0;
   i2 = i2 - 1 | 0;
   i3 = i3 - 1 | 0;
   HEAP8[i1] = HEAP8[i2] | 0;
  }
  i1 = i4;
 } else {
  _memcpy(i1, i2, i3) | 0;
 }
 return i1 | 0;
}
function dynCall_vifiiiii(i1, i2, d3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 FUNCTION_TABLE_vifiiiii[i1 & 3](i2 | 0, +d3, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore29SVGAnimatedLengthListAnimatorD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore23SVGAnimatedTypeAnimatorD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore29SVGAnimatedLengthListAnimator17calculateDistanceERKN3WTF6StringES4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return +(+-1);
}
function dynCall_fiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return +FUNCTION_TABLE_fiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0);
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 15](i2 | 0, i3 | 0, i4 | 0);
}
function b6(i1, d2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 d2 = +d2;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 abort(6);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZN7WebCore29SVGAnimatedLengthListAnimatorD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore23SVGAnimatedTypeAnimatorD2Ev(i1 | 0);
 return;
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
 FUNCTION_TABLE_vii[i1 & 7](i2 | 0, i3 | 0);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 7](i2 | 0);
}
function b0(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(0);
 return +0;
}
function b4(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(4);
}
function b7(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(7);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function __ZN3WTF15CrashOnOverflow10overflowedEv() {
 _WTFCrash();
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
function b5() {
 abort(5);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_fiii = [b0,b0,__ZN7WebCore29SVGAnimatedLengthListAnimator17calculateDistanceERKN3WTF6StringES4_,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore29SVGAnimatedLengthListAnimatorD1Ev,b1,__ZN7WebCore29SVGAnimatedLengthListAnimatorD0Ev,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore29SVGAnimatedLengthListAnimator20stopAnimValAnimationERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS1_15CrashOnOverflowEEE,b2,__ZN7WebCore29SVGAnimatedLengthListAnimator16animValDidChangeERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS1_15CrashOnOverflowEEE,b2,__ZN7WebCore29SVGAnimatedLengthListAnimator17animValWillChangeERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS1_15CrashOnOverflowEEE,b2];
  var FUNCTION_TABLE_ii = [b3,b3];
  var FUNCTION_TABLE_viii = [b4,b4,__ZN7WebCore29SVGAnimatedLengthListAnimator21resetAnimValToBaseValERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS1_15CrashOnOverflowEEEPNS_15SVGAnimatedTypeE,b4,__ZN7WebCore29SVGAnimatedLengthListAnimator19constructFromStringERKN3WTF6StringE,b4,__ZN7WebCoreL25parseLengthListFromStringEPNS_19SVGAnimationElementERKN3WTF6StringE,b4,__ZN7WebCore29SVGAnimatedLengthListAnimator16addAnimatedTypesEPNS_15SVGAnimatedTypeES2_,b4,__ZN7WebCore29SVGAnimatedLengthListAnimator21startAnimValAnimationERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS1_15CrashOnOverflowEEE,b4,__ZN7WebCore29SVGAnimatedLengthListAnimatorC2EPNS_19SVGAnimationElementEPNS_10SVGElementE,b4,b4,b4];
  var FUNCTION_TABLE_v = [b5,b5];
  var FUNCTION_TABLE_vifiiiii = [b6,b6,__ZN7WebCore29SVGAnimatedLengthListAnimator22calculateAnimatedValueEfjPNS_15SVGAnimatedTypeES2_S2_S2_,b6];
  var FUNCTION_TABLE_iii = [b7,b7];
  return { _memmove: _memmove, _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_fiii: dynCall_fiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_vifiiiii: dynCall_vifiiiii, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_fiii": invoke_fiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_vifiiiii": invoke_vifiiiii, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _memmove = Module["_memmove"] = asm["_memmove"];
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_fiii = Module["dynCall_fiii"] = asm["dynCall_fiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_vifiiiii = Module["dynCall_vifiiiii"] = asm["dynCall_vifiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore19SVGAnimationElement20adjustForInheritanceINS_13SVGLengthListEEEvPFT_PS0_RKN3WTF6StringEENS_25AnimatedPropertyValueTypeERS3_PNS_10SVGElementE","__ZN3WTF6VectorINS_6RefPtrIN7WebCore18SVGPropertyTearOffINS2_9SVGLengthEEEEELj0ENS_15CrashOnOverflowEE4fillERKS6_j","__ZN3WTF6VectorIN7WebCore9SVGLengthELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN7WebCore29SVGAnimatedLengthListAnimator16animValDidChangeERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS1_15CrashOnOverflowEEE","__ZN7WebCore29SVGAnimatedLengthListAnimator21startAnimValAnimationERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS1_15CrashOnOverflowEEE","__ZN7WebCore23SVGAnimatedTypeAnimator13executeActionINS_30SVGAnimatedListPropertyTearOffINS_13SVGLengthListEEEEEvNS0_15AnimationActionERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS6_15CrashOnOverflowEEEjPNT_11ContentTypeE","__ZN7WebCore29SVGAnimatedLengthListAnimator20stopAnimValAnimationERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS1_15CrashOnOverflowEEE","_memset","__ZN7WebCore30SVGAnimatedListPropertyTearOffINS_13SVGLengthListEE16animationStartedEPS1_b","__ZN7WebCore29SVGAnimatedLengthListAnimator19constructFromStringERKN3WTF6StringE","__ZN7WebCoreL25parseLengthListFromStringEPNS_19SVGAnimationElementERKN3WTF6StringE","__ZN7WebCore29SVGAnimatedLengthListAnimator16addAnimatedTypesEPNS_15SVGAnimatedTypeES2_","__ZN7WebCore29SVGAnimatedLengthListAnimator21resetAnimValToBaseValERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS1_15CrashOnOverflowEEEPNS_15SVGAnimatedTypeE","__ZN7WebCore29SVGAnimatedLengthListAnimator17animValWillChangeERKN3WTF6VectorINS_28SVGElementAnimatedPropertiesELj0ENS1_15CrashOnOverflowEEE","__ZN7WebCore29SVGAnimatedLengthListAnimator22calculateAnimatedValueEfjPNS_15SVGAnimatedTypeES2_S2_S2_","__ZN3WTF6VectorIN7WebCore9SVGLengthELj0ENS_15CrashOnOverflowEEaSERKS4_","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore29SVGAnimatedLengthListAnimatorC2EPNS_19SVGAnimationElementEPNS_10SVGElementE","__ZN7WebCore15SVGListPropertyINS_13SVGLengthListEE27detachListWrappersAndResizeEPN3WTF6VectorINS3_6RefPtrINS_18SVGPropertyTearOffINS_9SVGLengthEEEEELj0ENS3_15CrashOnOverflowEEEj","__ZN7WebCore29SVGAnimatedLengthListAnimator17calculateDistanceERKN3WTF6StringES4_","_memmove","__ZN7WebCore29SVGAnimatedLengthListAnimatorD1Ev","_memcpy","__ZN7WebCore30SVGAnimatedListPropertyTearOffINS_13SVGLengthListEE14animationEndedEv","__ZN3WTF6VectorIN7WebCore9SVGLengthELj0ENS_15CrashOnOverflowEE6resizeEj","__ZN7WebCore29SVGAnimatedLengthListAnimatorD0Ev","__ZN7WebCore19SVGAnimationElement22adjustFromToListValuesINS_13SVGLengthListEEEbRKT_S5_RS3_fb"]
