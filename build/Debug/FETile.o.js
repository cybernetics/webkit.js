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
var __ZN7WebCore6FETileC1EPNS_6FilterE;
/* memory initializer */ allocate([93,10,0,0,0,0,0,0,91,102,101,84,105,108,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZTVN7WebCore6FETileE=(H_BASE+24)|0;
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
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore6FETile21platformApplySoftwareEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, d23 = +0, d24 = +0, d25 = +0, d26 = +0, i27 = 0, d28 = +0, i29 = 0, i30 = 0, i31 = 0, i32 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i3;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i13 = i12 | 0;
 i14 = i12;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i16 = i15;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i18 = i17;
 i19 = i1 | 0;
 i20 = __ZNK7WebCore12FilterEffect11inputEffectEj(i19, 0) | 0;
 i21 = __ZN7WebCore12FilterEffect23createImageBufferResultEv(i19) | 0;
 if ((i21 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i19 = i3 | 0;
 HEAP8[i1 + 32 | 0] = HEAP8[i20 + 32 | 0] & 1;
 i22 = i3;
 i3 = i20 + 52 | 0;
 HEAP32[i22 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i22 + 4 >> 2] = HEAP32[i3 + 4 >> 2];
 HEAP32[i22 + 8 >> 2] = HEAP32[i3 + 8 >> 2];
 HEAP32[i22 + 12 >> 2] = HEAP32[i3 + 12 >> 2];
 d23 = +HEAPF32[i19 >> 2];
 d24 = +HEAPF32[i19 + 4 >> 2];
 i19 = i1 + 52 | 0;
 d25 = +HEAPF32[i19 >> 2];
 d26 = +HEAPF32[i19 + 4 >> 2];
 i19 = i1 + 68 | 0;
 if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i20 >> 2] | 0) + 24 >> 2] & 7](i20) | 0) == 3) {
  i3 = HEAP32[i19 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 24 >> 2] & 7](i5, i3);
  i27 = i5;
  HEAP32[i22 >> 2] = HEAP32[i27 >> 2];
  HEAP32[i22 + 4 >> 2] = HEAP32[i27 + 4 >> 2];
  HEAP32[i22 + 8 >> 2] = HEAP32[i27 + 8 >> 2];
  HEAP32[i22 + 12 >> 2] = HEAP32[i27 + 12 >> 2];
  i27 = i3 + 12 | 0;
  d28 = +HEAPF32[i27 >> 2];
  __ZN7WebCore9FloatRect5scaleEff(i4, d28, +HEAPF32[i27 + 4 >> 2]);
 }
 i27 = i6 | 0;
 HEAP32[i27 >> 2] = 0;
 do {
  if (__ZN7WebCore19SVGRenderingContext27createImageBufferForPatternERKNS_9FloatRectES3_RNSt3__110unique_ptrINS_11ImageBufferENS4_14default_deleteIS6_EEEENS_10ColorSpaceENS_13RenderingModeE(i4, i4, i6, 0, HEAP32[(HEAP32[i19 >> 2] | 0) + 20 >> 2] | 0) | 0) {
   i3 = __ZNK7WebCore11ImageBuffer7contextEv(HEAP32[i27 >> 2] | 0) | 0;
   __ZN7WebCore15GraphicsContext9translateEff(i3, +-0 - d23, +-0 - d24);
   i22 = __ZN7WebCore12FilterEffect13asImageBufferEv(i20) | 0;
   i5 = i20 + 36 | 0;
   i29 = HEAP32[i5 + 4 >> 2] | 0;
   HEAP32[i7 >> 2] = HEAP32[i5 >> 2];
   HEAP32[i7 + 4 >> 2] = i29;
   __ZN7WebCore15GraphicsContext15drawImageBufferEPNS_11ImageBufferENS_10ColorSpaceERKNS_8IntPointENS_17CompositeOperatorENS_9BlendModeE(i3, i22, 0, i7, 2, 0);
   __ZNK7WebCore11ImageBuffer9copyImageENS_16BackingStoreCopyENS_13ScaleBehaviorE(i9, HEAP32[i27 >> 2] | 0, 0, 0);
   __ZN7WebCore7Pattern6createEN3WTF10PassRefPtrINS_5ImageEEEbb(i8, i9, 1, 1);
   i22 = i8 | 0;
   i3 = HEAP32[i22 >> 2] | 0;
   HEAP32[i22 >> 2] = 0;
   i22 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i22 | 0) != 0) {
     i29 = i22 + 4 | 0;
     i5 = i29 | 0;
     i30 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
     if ((i30 | 0) != 0) {
      HEAP32[i5 >> 2] = i30;
      break;
     }
     i30 = i29 - 4 | 0;
     if ((i30 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i30 >> 2] | 0) + 4 >> 2] & 15](i30);
    }
   } while (0);
   __ZN7WebCore15AffineTransformC1Ev(i10);
   __ZN7WebCore15AffineTransform9translateEdd(i10, d23 - d25, d24 - d26) | 0;
   __ZN7WebCore7Pattern24setPatternSpaceTransformERKNS_15AffineTransformE(i3, i10);
   i22 = __ZNK7WebCore11ImageBuffer7contextEv(i21) | 0;
   i30 = i11 | 0;
   HEAP32[i30 >> 2] = i3;
   i29 = (i3 | 0) == 0;
   if (!i29) {
    i5 = i3 + 4 | 0;
    HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
   }
   __ZN7WebCore15GraphicsContext14setFillPatternEN3WTF10PassRefPtrINS_7PatternEEE(i22, i11);
   i5 = HEAP32[i30 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i30 = i5 + 4 | 0;
     i31 = i30 | 0;
     i32 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
     if ((i32 | 0) != 0) {
      HEAP32[i31 >> 2] = i32;
      break;
     }
     i32 = i30 - 4 | 0;
     if ((i32 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i32 >> 2] | 0) + 4 >> 2] & 15](i32);
    }
   } while (0);
   i5 = i1 + 44 | 0;
   i32 = HEAP32[i5 + 4 >> 2] | 0;
   HEAP32[i17 >> 2] = HEAP32[i5 >> 2];
   HEAP32[i17 + 4 >> 2] = i32;
   __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i16, i18);
   HEAP32[i13 >> 2] = 0;
   HEAP32[i13 + 4 >> 2] = 0;
   i32 = i12 + 8 | 0;
   i5 = HEAP32[i15 + 4 >> 2] | 0;
   HEAP32[i32 >> 2] = HEAP32[i15 >> 2];
   HEAP32[i32 + 4 >> 2] = i5;
   __ZN7WebCore15GraphicsContext8fillRectERKNS_9FloatRectE(i22, i14);
   if (i29) {
    break;
   }
   i5 = i3 + 4 | 0;
   i32 = i5 | 0;
   i30 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
   if ((i30 | 0) != 0) {
    HEAP32[i32 >> 2] = i30;
    break;
   }
   i30 = i5 - 4 | 0;
   if ((i30 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i30 >> 2] | 0) + 4 >> 2] & 15](i30);
  }
 } while (0);
 i14 = HEAP32[i27 >> 2] | 0;
 HEAP32[i27 >> 2] = 0;
 if ((i14 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore11ImageBufferD1Ev(i14);
 __ZN3WTF8fastFreeEPv(i14);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore6FETile26determineAbsolutePaintRectEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i4;
 i6 = i1 + 52 | 0;
 HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i5 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
 HEAP32[i5 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
 HEAP32[i5 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
 __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i3, i4);
 i4 = i1 + 36 | 0;
 i1 = i3;
 HEAP32[i4 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i4 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 HEAP32[i4 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
 HEAP32[i4 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore6FETile22externalRepresentationERNS_10TextStreamEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 __ZN7WebCore11writeIndentERNS_10TextStreamEi(i2, i3);
 __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 16 | 0) | 0;
 i4 = i1 | 0;
 __ZNK7WebCore12FilterEffect22externalRepresentationERNS_10TextStreamEi(i4, i2, 0) | 0;
 __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 8 | 0) | 0;
 i1 = __ZNK7WebCore12FilterEffect11inputEffectEj(i4, 0) | 0;
 FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 28 >> 2] & 3](i1, i2, i3 + 1 | 0) | 0;
 return i2 | 0;
}
function runPostSets() {
 HEAP32[H_BASE + 32 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_ii + 4;
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
function __ZN7WebCore6FETile6createEPNS_6FilterE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = __ZN3WTF10fastMallocEj(120) | 0;
 __ZN7WebCore12FilterEffectC2EPNS_6FilterE(i3, i2);
 HEAP32[i3 >> 2] = H_BASE + 32;
 HEAP32[i1 >> 2] = i3;
 return;
}
function __ZN7WebCore12FilterEffect25transformResultColorSpaceEPS0_i(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore12FilterEffect25transformResultColorSpaceENS_10ColorSpaceE(i2, HEAP32[i1 + 112 >> 2] | 0);
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore6FETileC2EPNS_6FilterE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore12FilterEffectC2EPNS_6FilterE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 32;
 return;
}
function __ZN7WebCore6FETileC1EPNS_6FilterE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore12FilterEffectC2EPNS_6FilterE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 32;
 return;
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZN7WebCore12FilterEffect22setOperatingColorSpaceENS_10ColorSpaceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 + 112 >> 2] = i2;
 return;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 3](i2 | 0, i3 | 0, i4 | 0);
}
function __ZN7WebCore12FilterEffect19setResultColorSpaceENS_10ColorSpaceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 + 116 >> 2] = i2;
 return;
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
function __ZN7WebCore6FETileD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore12FilterEffectD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
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
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 7](i2 | 0, i3 | 0);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 7](i2 | 0) | 0;
}
function __ZN7WebCore6FETileD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore12FilterEffectD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore12FilterEffect32requiresValidPreMultipliedPixelsEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZN7WebCore12FilterEffect27correctFilterResultIfNeededEv(i1) {
 i1 = i1 | 0;
 return;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
}
function b3(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(3);
 return 0;
}
function __ZNK7WebCore6FETile16filterEffectTypeEv(i1) {
 i1 = i1 | 0;
 return 2;
}
function b4(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(4);
}
function b6(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(6);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function __ZN7WebCore6FETile4dumpEv(i1) {
 i1 = i1 | 0;
 return;
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
function b0(i1) {
 i1 = i1 | 0;
 abort(0);
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
  var FUNCTION_TABLE_ii = [b0,b0,__ZNK7WebCore6FETile16filterEffectTypeEv,b0,__ZN7WebCore12FilterEffect32requiresValidPreMultipliedPixelsEv,b0,b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore6FETileD1Ev,b1,__ZN7WebCore12FilterEffect27correctFilterResultIfNeededEv,b1,__ZN7WebCore6FETile4dumpEv,b1,__ZN7WebCore6FETile21platformApplySoftwareEv,b1,__ZN7WebCore6FETile26determineAbsolutePaintRectEv,b1,__ZN7WebCore6FETileD0Ev,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore12FilterEffect19setResultColorSpaceENS_10ColorSpaceE,b2,__ZN7WebCore12FilterEffect22setOperatingColorSpaceENS_10ColorSpaceE,b2,__ZN7WebCore6FETileC2EPNS_6FilterE,b2];
  var FUNCTION_TABLE_iiii = [b3,b3,__ZNK7WebCore6FETile22externalRepresentationERNS_10TextStreamEi,b3];
  var FUNCTION_TABLE_viii = [b4,b4,__ZN7WebCore12FilterEffect25transformResultColorSpaceEPS0_i,b4];
  var FUNCTION_TABLE_v = [b5,b5];
  var FUNCTION_TABLE_iii = [b6,b6];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_iiii: dynCall_iiii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_iiii": invoke_iiii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore6FETile6createEPNS_6FilterE","__ZNK7WebCore6FETile22externalRepresentationERNS_10TextStreamEi","__ZN7WebCore12FilterEffect27correctFilterResultIfNeededEv","__ZN7WebCore12FilterEffect25transformResultColorSpaceEPS0_i","__ZNK7WebCore6FETile16filterEffectTypeEv","_memset","__ZN7WebCore12FilterEffect32requiresValidPreMultipliedPixelsEv","__ZN7WebCore6FETile21platformApplySoftwareEv","__ZN7WebCore12FilterEffect19setResultColorSpaceENS_10ColorSpaceE","__ZN7WebCore6FETileD1Ev","__ZN7WebCore6FETile26determineAbsolutePaintRectEv","__ZN7WebCore12FilterEffect22setOperatingColorSpaceENS_10ColorSpaceE","__ZN7WebCore6FETileD0Ev","__ZN7WebCore6FETileC2EPNS_6FilterE","_memcpy","__ZN7WebCore6FETile4dumpEv"]
