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
H_BASE = parentModule["_malloc"](744 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 744;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* memory initializer */ allocate([118,0,0,0,0,0,0,0,104,0,0,0,0,0,0,0,105,110,105,116,105,97,108,0,105,115,111,108,97,116,101,100,0,0,0,0,0,0,0,0,116,101,114,109,105,110,97,108,0,0,0,0,0,0,0,0,109,101,100,105,97,108,0,0,0,0,128,127,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZN7WebCore8SVGNames15horiz_adv_xAttrE=env.__ZN7WebCore8SVGNames15horiz_adv_xAttrE|0;
  var __ZN7WebCore8SVGNames17vert_origin_yAttrE=env.__ZN7WebCore8SVGNames17vert_origin_yAttrE|0;
  var __ZN7WebCore8SVGNames7fontTagE=env.__ZN7WebCore8SVGNames7fontTagE|0;
  var __ZN7WebCore8SVGNames15orientationAttrE=env.__ZN7WebCore8SVGNames15orientationAttrE|0;
  var __ZN7WebCore8SVGNames8langAttrE=env.__ZN7WebCore8SVGNames8langAttrE|0;
  var __ZN7WebCore8SVGNames17vert_origin_xAttrE=env.__ZN7WebCore8SVGNames17vert_origin_xAttrE|0;
  var __ZN3WTF8nullAtomE=env.__ZN3WTF8nullAtomE|0;
  var __ZN7WebCore8SVGNames15arabic_formAttrE=env.__ZN7WebCore8SVGNames15arabic_formAttrE|0;
  var __ZN7WebCore8SVGNames5dAttrE=env.__ZN7WebCore8SVGNames5dAttrE|0;
  var __ZN7WebCore8SVGNames14vert_adv_yAttrE=env.__ZN7WebCore8SVGNames14vert_adv_yAttrE|0;
  var __ZN7WebCore8SVGNames14glyph_nameAttrE=env.__ZN7WebCore8SVGNames14glyph_nameAttrE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZZN7WebCore8SVGGlyph14inheritedValueEvE16s_inheritedValue=(H_BASE+72)|0;
  var __ZTVN7WebCore15SVGGlyphElementE=(H_BASE+80)|0;
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
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore15SVGGlyphElement27buildGenericGlyphIdentifierEPKNS_10SVGElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, d25 = +0, d26 = +0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, d33 = +0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, d40 = +0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, d47 = +0, i48 = 0, i49 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i1 | 0;
 HEAP8[i8] = HEAP8[i8] & -2;
 i8 = i1;
 HEAP32[i8 >> 2] = HEAP32[i8 >> 2] & -63 | 4;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP16[i1 + 8 >> 1] = 0;
 i8 = i1 + 36 | 0;
 _memset(i1 + 12 | 0, 0, 24) | 0;
 __ZN7WebCore4PathC1Ev(i8);
 HEAP32[i1 + 40 >> 2] = 0;
 HEAP32[i1 + 44 >> 2] = 0;
 HEAP32[i1 + 48 >> 2] = 0;
 i9 = i2 + 48 | 0;
 i2 = HEAP32[i9 >> 2] | 0;
 L1 : do {
  if ((i2 | 0) == 0) {
   i10 = __ZN3WTF8nullAtomE;
  } else {
   i11 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i11 & 1 | 0) == 0) {
    i12 = i11 >>> 1 & 134217727;
    i13 = i2 + 20 | 0;
   } else {
    i11 = i2 + 24 | 0;
    i12 = HEAP32[i11 + 8 >> 2] | 0;
    i13 = HEAP32[i11 >> 2] | 0;
   }
   if ((i12 | 0) == 0) {
    i10 = __ZN3WTF8nullAtomE;
    break;
   }
   i11 = HEAP32[__ZN7WebCore8SVGNames5dAttrE >> 2] | 0;
   i14 = i11 + 12 | 0;
   i15 = i11 + 16 | 0;
   i16 = 0;
   while (1) {
    i17 = i13 + (i16 << 3) | 0;
    i18 = HEAP32[i17 >> 2] | 0;
    if ((i18 | 0) == (i11 | 0)) {
     break;
    }
    if ((HEAP32[i18 + 12 >> 2] | 0) == (HEAP32[i14 >> 2] | 0)) {
     if ((HEAP32[i18 + 16 >> 2] | 0) == (HEAP32[i15 >> 2] | 0)) {
      break;
     }
    }
    i18 = i16 + 1 | 0;
    if (i18 >>> 0 < i12 >>> 0) {
     i16 = i18;
    } else {
     i10 = __ZN3WTF8nullAtomE;
     break L1;
    }
   }
   i10 = (i17 | 0) == 0 ? __ZN3WTF8nullAtomE : i13 + (i16 << 3) + 4 | 0;
  }
 } while (0);
 __ZN7WebCore19buildPathFromStringERKN3WTF6StringERNS_4PathE(i10 | 0, i8) | 0;
 i8 = HEAP32[i9 >> 2] | 0;
 L16 : do {
  if ((i8 | 0) == 0) {
   i19 = __ZN3WTF8nullAtomE;
  } else {
   i10 = HEAP32[i8 + 4 >> 2] | 0;
   if ((i10 & 1 | 0) == 0) {
    i20 = i10 >>> 1 & 134217727;
    i21 = i8 + 20 | 0;
   } else {
    i10 = i8 + 24 | 0;
    i20 = HEAP32[i10 + 8 >> 2] | 0;
    i21 = HEAP32[i10 >> 2] | 0;
   }
   if ((i20 | 0) == 0) {
    i19 = __ZN3WTF8nullAtomE;
    break;
   }
   i10 = HEAP32[__ZN7WebCore8SVGNames15horiz_adv_xAttrE >> 2] | 0;
   i13 = i10 + 12 | 0;
   i17 = i10 + 16 | 0;
   i12 = 0;
   while (1) {
    i22 = i21 + (i12 << 3) | 0;
    i2 = HEAP32[i22 >> 2] | 0;
    if ((i2 | 0) == (i10 | 0)) {
     break;
    }
    if ((HEAP32[i2 + 12 >> 2] | 0) == (HEAP32[i13 >> 2] | 0)) {
     if ((HEAP32[i2 + 16 >> 2] | 0) == (HEAP32[i17 >> 2] | 0)) {
      break;
     }
    }
    i2 = i12 + 1 | 0;
    if (i2 >>> 0 < i20 >>> 0) {
     i12 = i2;
    } else {
     i19 = __ZN3WTF8nullAtomE;
     break L16;
    }
   }
   i19 = (i22 | 0) == 0 ? __ZN3WTF8nullAtomE : i21 + (i12 << 3) + 4 | 0;
  }
 } while (0);
 i21 = i6 | 0;
 i22 = HEAP32[i19 >> 2] | 0;
 HEAP32[i21 >> 2] = i22;
 do {
  if ((i22 | 0) == 0) {
   i23 = 0;
   i24 = 26;
  } else {
   i19 = i22 | 0;
   HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 2;
   i19 = HEAP32[i21 >> 2] | 0;
   if ((i19 | 0) == 0) {
    i23 = 0;
    i24 = 26;
    break;
   }
   if ((HEAP32[i19 + 4 >> 2] | 0) == 0) {
    i23 = i19;
    i24 = 26;
    break;
   }
   d25 = +__ZNK3WTF6String7toFloatEPb(i6 | 0, 0);
   d26 = d25;
   i27 = HEAP32[i21 >> 2] | 0;
  }
 } while (0);
 if ((i24 | 0) == 26) {
  d26 = +HEAPF32[H_BASE + 72 >> 2];
  i27 = i23;
 }
 do {
  if ((i27 | 0) != 0) {
   i23 = i27 | 0;
   i21 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
   if ((i21 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i27);
    break;
   } else {
    HEAP32[i23 >> 2] = i21;
    break;
   }
  }
 } while (0);
 HEAPF32[i1 + 20 >> 2] = d26;
 i27 = HEAP32[i9 >> 2] | 0;
 L44 : do {
  if ((i27 | 0) == 0) {
   i28 = __ZN3WTF8nullAtomE;
  } else {
   i21 = HEAP32[i27 + 4 >> 2] | 0;
   if ((i21 & 1 | 0) == 0) {
    i29 = i21 >>> 1 & 134217727;
    i30 = i27 + 20 | 0;
   } else {
    i21 = i27 + 24 | 0;
    i29 = HEAP32[i21 + 8 >> 2] | 0;
    i30 = HEAP32[i21 >> 2] | 0;
   }
   if ((i29 | 0) == 0) {
    i28 = __ZN3WTF8nullAtomE;
    break;
   }
   i21 = HEAP32[__ZN7WebCore8SVGNames17vert_origin_xAttrE >> 2] | 0;
   i23 = i21 + 12 | 0;
   i6 = i21 + 16 | 0;
   i22 = 0;
   while (1) {
    i31 = i30 + (i22 << 3) | 0;
    i19 = HEAP32[i31 >> 2] | 0;
    if ((i19 | 0) == (i21 | 0)) {
     break;
    }
    if ((HEAP32[i19 + 12 >> 2] | 0) == (HEAP32[i23 >> 2] | 0)) {
     if ((HEAP32[i19 + 16 >> 2] | 0) == (HEAP32[i6 >> 2] | 0)) {
      break;
     }
    }
    i19 = i22 + 1 | 0;
    if (i19 >>> 0 < i29 >>> 0) {
     i22 = i19;
    } else {
     i28 = __ZN3WTF8nullAtomE;
     break L44;
    }
   }
   i28 = (i31 | 0) == 0 ? __ZN3WTF8nullAtomE : i30 + (i22 << 3) + 4 | 0;
  }
 } while (0);
 i30 = i5 | 0;
 i31 = HEAP32[i28 >> 2] | 0;
 HEAP32[i30 >> 2] = i31;
 do {
  if ((i31 | 0) == 0) {
   i32 = 0;
   i24 = 46;
  } else {
   i28 = i31 | 0;
   HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 2;
   i28 = HEAP32[i30 >> 2] | 0;
   if ((i28 | 0) == 0) {
    i32 = 0;
    i24 = 46;
    break;
   }
   if ((HEAP32[i28 + 4 >> 2] | 0) == 0) {
    i32 = i28;
    i24 = 46;
    break;
   }
   d26 = +__ZNK3WTF6String7toFloatEPb(i5 | 0, 0);
   d33 = d26;
   i34 = HEAP32[i30 >> 2] | 0;
  }
 } while (0);
 if ((i24 | 0) == 46) {
  d33 = +HEAPF32[H_BASE + 72 >> 2];
  i34 = i32;
 }
 do {
  if ((i34 | 0) != 0) {
   i32 = i34 | 0;
   i30 = (HEAP32[i32 >> 2] | 0) - 2 | 0;
   if ((i30 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i34);
    break;
   } else {
    HEAP32[i32 >> 2] = i30;
    break;
   }
  }
 } while (0);
 HEAPF32[i1 + 24 >> 2] = d33;
 i34 = HEAP32[i9 >> 2] | 0;
 L72 : do {
  if ((i34 | 0) == 0) {
   i35 = __ZN3WTF8nullAtomE;
  } else {
   i30 = HEAP32[i34 + 4 >> 2] | 0;
   if ((i30 & 1 | 0) == 0) {
    i36 = i30 >>> 1 & 134217727;
    i37 = i34 + 20 | 0;
   } else {
    i30 = i34 + 24 | 0;
    i36 = HEAP32[i30 + 8 >> 2] | 0;
    i37 = HEAP32[i30 >> 2] | 0;
   }
   if ((i36 | 0) == 0) {
    i35 = __ZN3WTF8nullAtomE;
    break;
   }
   i30 = HEAP32[__ZN7WebCore8SVGNames17vert_origin_yAttrE >> 2] | 0;
   i32 = i30 + 12 | 0;
   i5 = i30 + 16 | 0;
   i31 = 0;
   while (1) {
    i38 = i37 + (i31 << 3) | 0;
    i28 = HEAP32[i38 >> 2] | 0;
    if ((i28 | 0) == (i30 | 0)) {
     break;
    }
    if ((HEAP32[i28 + 12 >> 2] | 0) == (HEAP32[i32 >> 2] | 0)) {
     if ((HEAP32[i28 + 16 >> 2] | 0) == (HEAP32[i5 >> 2] | 0)) {
      break;
     }
    }
    i28 = i31 + 1 | 0;
    if (i28 >>> 0 < i36 >>> 0) {
     i31 = i28;
    } else {
     i35 = __ZN3WTF8nullAtomE;
     break L72;
    }
   }
   i35 = (i38 | 0) == 0 ? __ZN3WTF8nullAtomE : i37 + (i31 << 3) + 4 | 0;
  }
 } while (0);
 i37 = i4 | 0;
 i38 = HEAP32[i35 >> 2] | 0;
 HEAP32[i37 >> 2] = i38;
 do {
  if ((i38 | 0) == 0) {
   i39 = 0;
   i24 = 66;
  } else {
   i35 = i38 | 0;
   HEAP32[i35 >> 2] = (HEAP32[i35 >> 2] | 0) + 2;
   i35 = HEAP32[i37 >> 2] | 0;
   if ((i35 | 0) == 0) {
    i39 = 0;
    i24 = 66;
    break;
   }
   if ((HEAP32[i35 + 4 >> 2] | 0) == 0) {
    i39 = i35;
    i24 = 66;
    break;
   }
   d33 = +__ZNK3WTF6String7toFloatEPb(i4 | 0, 0);
   d40 = d33;
   i41 = HEAP32[i37 >> 2] | 0;
  }
 } while (0);
 if ((i24 | 0) == 66) {
  d40 = +HEAPF32[H_BASE + 72 >> 2];
  i41 = i39;
 }
 do {
  if ((i41 | 0) != 0) {
   i39 = i41 | 0;
   i37 = (HEAP32[i39 >> 2] | 0) - 2 | 0;
   if ((i37 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i41);
    break;
   } else {
    HEAP32[i39 >> 2] = i37;
    break;
   }
  }
 } while (0);
 HEAPF32[i1 + 28 >> 2] = d40;
 i41 = HEAP32[i9 >> 2] | 0;
 L100 : do {
  if ((i41 | 0) == 0) {
   i42 = __ZN3WTF8nullAtomE;
  } else {
   i9 = HEAP32[i41 + 4 >> 2] | 0;
   if ((i9 & 1 | 0) == 0) {
    i43 = i9 >>> 1 & 134217727;
    i44 = i41 + 20 | 0;
   } else {
    i9 = i41 + 24 | 0;
    i43 = HEAP32[i9 + 8 >> 2] | 0;
    i44 = HEAP32[i9 >> 2] | 0;
   }
   if ((i43 | 0) == 0) {
    i42 = __ZN3WTF8nullAtomE;
    break;
   }
   i9 = HEAP32[__ZN7WebCore8SVGNames14vert_adv_yAttrE >> 2] | 0;
   i37 = i9 + 12 | 0;
   i39 = i9 + 16 | 0;
   i4 = 0;
   while (1) {
    i45 = i44 + (i4 << 3) | 0;
    i38 = HEAP32[i45 >> 2] | 0;
    if ((i38 | 0) == (i9 | 0)) {
     break;
    }
    if ((HEAP32[i38 + 12 >> 2] | 0) == (HEAP32[i37 >> 2] | 0)) {
     if ((HEAP32[i38 + 16 >> 2] | 0) == (HEAP32[i39 >> 2] | 0)) {
      break;
     }
    }
    i38 = i4 + 1 | 0;
    if (i38 >>> 0 < i43 >>> 0) {
     i4 = i38;
    } else {
     i42 = __ZN3WTF8nullAtomE;
     break L100;
    }
   }
   i42 = (i45 | 0) == 0 ? __ZN3WTF8nullAtomE : i44 + (i4 << 3) + 4 | 0;
  }
 } while (0);
 i44 = i7 | 0;
 i45 = HEAP32[i42 >> 2] | 0;
 HEAP32[i44 >> 2] = i45;
 do {
  if ((i45 | 0) == 0) {
   i46 = 0;
   i24 = 86;
  } else {
   i42 = i45 | 0;
   HEAP32[i42 >> 2] = (HEAP32[i42 >> 2] | 0) + 2;
   i42 = HEAP32[i44 >> 2] | 0;
   if ((i42 | 0) == 0) {
    i46 = 0;
    i24 = 86;
    break;
   }
   if ((HEAP32[i42 + 4 >> 2] | 0) == 0) {
    i46 = i42;
    i24 = 86;
    break;
   }
   d40 = +__ZNK3WTF6String7toFloatEPb(i7 | 0, 0);
   d47 = d40;
   i48 = HEAP32[i44 >> 2] | 0;
  }
 } while (0);
 if ((i24 | 0) == 86) {
  d47 = +HEAPF32[H_BASE + 72 >> 2];
  i48 = i46;
 }
 if ((i48 | 0) == 0) {
  i49 = i1 + 32 | 0;
  HEAPF32[i49 >> 2] = d47;
  STACKTOP = i3;
  return;
 }
 i46 = i48 | 0;
 i24 = (HEAP32[i46 >> 2] | 0) - 2 | 0;
 if ((i24 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i48);
  i49 = i1 + 32 | 0;
  HEAPF32[i49 >> 2] = d47;
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i46 >> 2] = i24;
  i49 = i1 + 32 | 0;
  HEAPF32[i49 >> 2] = d47;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore15SVGGlyphElement20buildGlyphIdentifierEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 __ZN7WebCore15SVGGlyphElement27buildGenericGlyphIdentifierEPKNS_10SVGElementE(i1, i2 | 0);
 i6 = i2 + 48 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 L1 : do {
  if ((i2 | 0) == 0) {
   i7 = __ZN3WTF8nullAtomE;
  } else {
   i8 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i8 & 1 | 0) == 0) {
    i9 = i8 >>> 1 & 134217727;
    i10 = i2 + 20 | 0;
   } else {
    i8 = i2 + 24 | 0;
    i9 = HEAP32[i8 + 8 >> 2] | 0;
    i10 = HEAP32[i8 >> 2] | 0;
   }
   if ((i9 | 0) == 0) {
    i7 = __ZN3WTF8nullAtomE;
    break;
   }
   i8 = HEAP32[__ZN7WebCore8SVGNames14glyph_nameAttrE >> 2] | 0;
   i11 = i8 + 12 | 0;
   i12 = i8 + 16 | 0;
   i13 = 0;
   while (1) {
    i14 = i10 + (i13 << 3) | 0;
    i15 = HEAP32[i14 >> 2] | 0;
    if ((i15 | 0) == (i8 | 0)) {
     break;
    }
    if ((HEAP32[i15 + 12 >> 2] | 0) == (HEAP32[i11 >> 2] | 0)) {
     if ((HEAP32[i15 + 16 >> 2] | 0) == (HEAP32[i12 >> 2] | 0)) {
      break;
     }
    }
    i15 = i13 + 1 | 0;
    if (i15 >>> 0 < i9 >>> 0) {
     i13 = i15;
    } else {
     i7 = __ZN3WTF8nullAtomE;
     break L1;
    }
   }
   i7 = (i14 | 0) == 0 ? __ZN3WTF8nullAtomE : i10 + (i13 << 3) + 4 | 0;
  }
 } while (0);
 i10 = HEAP32[i7 >> 2] | 0;
 if ((i10 | 0) != 0) {
  i7 = i10 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = i1 + 16 | 0;
 i14 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i10;
 do {
  if ((i14 | 0) != 0) {
   i10 = i14 | 0;
   i7 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i10 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i14 = HEAP32[i6 >> 2] | 0;
 L25 : do {
  if ((i14 | 0) == 0) {
   i16 = __ZN3WTF8nullAtomE;
  } else {
   i7 = HEAP32[i14 + 4 >> 2] | 0;
   if ((i7 & 1 | 0) == 0) {
    i17 = i7 >>> 1 & 134217727;
    i18 = i14 + 20 | 0;
   } else {
    i7 = i14 + 24 | 0;
    i17 = HEAP32[i7 + 8 >> 2] | 0;
    i18 = HEAP32[i7 >> 2] | 0;
   }
   if ((i17 | 0) == 0) {
    i16 = __ZN3WTF8nullAtomE;
    break;
   }
   i7 = HEAP32[__ZN7WebCore8SVGNames15orientationAttrE >> 2] | 0;
   i10 = i7 + 12 | 0;
   i9 = i7 + 16 | 0;
   i2 = 0;
   while (1) {
    i19 = i18 + (i2 << 3) | 0;
    i12 = HEAP32[i19 >> 2] | 0;
    if ((i12 | 0) == (i7 | 0)) {
     break;
    }
    if ((HEAP32[i12 + 12 >> 2] | 0) == (HEAP32[i10 >> 2] | 0)) {
     if ((HEAP32[i12 + 16 >> 2] | 0) == (HEAP32[i9 >> 2] | 0)) {
      break;
     }
    }
    i12 = i2 + 1 | 0;
    if (i12 >>> 0 < i17 >>> 0) {
     i2 = i12;
    } else {
     i16 = __ZN3WTF8nullAtomE;
     break L25;
    }
   }
   i16 = (i19 | 0) == 0 ? __ZN3WTF8nullAtomE : i18 + (i2 << 3) + 4 | 0;
  }
 } while (0);
 i18 = i16 | 0;
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i18 >> 2] | 0, H_BASE + 16 | 0) | 0) {
  i20 = 2;
 } else {
  i16 = __ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i18 >> 2] | 0, H_BASE + 8 | 0) | 0;
  i20 = i16 ? 0 : 4;
 }
 i16 = i1;
 HEAP32[i16 >> 2] = HEAP32[i16 >> 2] & -7 | i20;
 i20 = HEAP32[i6 >> 2] | 0;
 L43 : do {
  if ((i20 | 0) == 0) {
   i21 = __ZN3WTF8nullAtomE;
  } else {
   i18 = HEAP32[i20 + 4 >> 2] | 0;
   if ((i18 & 1 | 0) == 0) {
    i22 = i18 >>> 1 & 134217727;
    i23 = i20 + 20 | 0;
   } else {
    i18 = i20 + 24 | 0;
    i22 = HEAP32[i18 + 8 >> 2] | 0;
    i23 = HEAP32[i18 >> 2] | 0;
   }
   if ((i22 | 0) == 0) {
    i21 = __ZN3WTF8nullAtomE;
    break;
   }
   i18 = HEAP32[__ZN7WebCore8SVGNames15arabic_formAttrE >> 2] | 0;
   i19 = i18 + 12 | 0;
   i17 = i18 + 16 | 0;
   i14 = 0;
   while (1) {
    i24 = i23 + (i14 << 3) | 0;
    i9 = HEAP32[i24 >> 2] | 0;
    if ((i9 | 0) == (i18 | 0)) {
     break;
    }
    if ((HEAP32[i9 + 12 >> 2] | 0) == (HEAP32[i19 >> 2] | 0)) {
     if ((HEAP32[i9 + 16 >> 2] | 0) == (HEAP32[i17 >> 2] | 0)) {
      break;
     }
    }
    i9 = i14 + 1 | 0;
    if (i9 >>> 0 < i22 >>> 0) {
     i14 = i9;
    } else {
     i21 = __ZN3WTF8nullAtomE;
     break L43;
    }
   }
   i21 = (i24 | 0) == 0 ? __ZN3WTF8nullAtomE : i23 + (i14 << 3) + 4 | 0;
  }
 } while (0);
 i23 = i21 | 0;
 do {
  if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i23 >> 2] | 0, H_BASE + 64 | 0) | 0) {
   i25 = 32;
  } else {
   if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i23 >> 2] | 0, H_BASE + 48 | 0) | 0) {
    i25 = 16;
    break;
   }
   if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i23 >> 2] | 0, H_BASE + 32 | 0) | 0) {
    i25 = 8;
    break;
   }
   i21 = __ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i23 >> 2] | 0, H_BASE + 24 | 0) | 0;
   i25 = i21 ? 24 : 0;
  }
 } while (0);
 HEAP32[i16 >> 2] = HEAP32[i16 >> 2] & -57 | i25;
 i25 = HEAP32[i6 >> 2] | 0;
 L63 : do {
  if ((i25 | 0) == 0) {
   i26 = __ZN3WTF8nullAtomE;
  } else {
   i6 = HEAP32[i25 + 4 >> 2] | 0;
   if ((i6 & 1 | 0) == 0) {
    i27 = i6 >>> 1 & 134217727;
    i28 = i25 + 20 | 0;
   } else {
    i6 = i25 + 24 | 0;
    i27 = HEAP32[i6 + 8 >> 2] | 0;
    i28 = HEAP32[i6 >> 2] | 0;
   }
   if ((i27 | 0) == 0) {
    i26 = __ZN3WTF8nullAtomE;
    break;
   }
   i6 = HEAP32[__ZN7WebCore8SVGNames8langAttrE >> 2] | 0;
   i16 = i6 + 12 | 0;
   i23 = i6 + 16 | 0;
   i21 = 0;
   while (1) {
    i29 = i28 + (i21 << 3) | 0;
    i24 = HEAP32[i29 >> 2] | 0;
    if ((i24 | 0) == (i6 | 0)) {
     break;
    }
    if ((HEAP32[i24 + 12 >> 2] | 0) == (HEAP32[i16 >> 2] | 0)) {
     if ((HEAP32[i24 + 16 >> 2] | 0) == (HEAP32[i23 >> 2] | 0)) {
      break;
     }
    }
    i24 = i21 + 1 | 0;
    if (i24 >>> 0 < i27 >>> 0) {
     i21 = i24;
    } else {
     i26 = __ZN3WTF8nullAtomE;
     break L63;
    }
   }
   i26 = (i29 | 0) == 0 ? __ZN3WTF8nullAtomE : i28 + (i21 << 3) + 4 | 0;
  }
 } while (0);
 i28 = i4 | 0;
 i29 = HEAP32[i26 >> 2] | 0;
 HEAP32[i28 >> 2] = i29;
 if ((i29 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i26 = i29 | 0;
 HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 2;
 i26 = HEAP32[i28 >> 2] | 0;
 if ((i26 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 do {
  if ((HEAP32[i26 + 4 >> 2] | 0) != 0) {
   __ZN7WebCore20parseDelimitedStringERKN3WTF6StringEc(i5, i4, 44);
   i29 = i1 + 48 | 0;
   i27 = i5 + 8 | 0;
   i25 = HEAP32[i29 >> 2] | 0;
   HEAP32[i29 >> 2] = HEAP32[i27 >> 2];
   HEAP32[i27 >> 2] = i25;
   i29 = i1 + 40 | 0;
   i23 = i5 | 0;
   i16 = HEAP32[i29 >> 2] | 0;
   HEAP32[i29 >> 2] = HEAP32[i23 >> 2];
   HEAP32[i23 >> 2] = i16;
   i29 = i1 + 44 | 0;
   i6 = i5 + 4 | 0;
   i14 = HEAP32[i29 >> 2] | 0;
   HEAP32[i29 >> 2] = HEAP32[i6 >> 2];
   HEAP32[i6 >> 2] = i14;
   if ((i25 | 0) == 0) {
    i30 = i16;
   } else {
    i14 = i16 + (i25 << 2) | 0;
    i25 = i16;
    while (1) {
     i16 = HEAP32[i25 >> 2] | 0;
     do {
      if ((i16 | 0) != 0) {
       i29 = i16 | 0;
       i24 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
       if ((i24 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i16);
        break;
       } else {
        HEAP32[i29 >> 2] = i24;
        break;
       }
      }
     } while (0);
     i25 = i25 + 4 | 0;
     if ((i25 | 0) == (i14 | 0)) {
      break;
     }
    }
    HEAP32[i27 >> 2] = 0;
    i30 = HEAP32[i23 >> 2] | 0;
   }
   if ((i30 | 0) == 0) {
    break;
   }
   HEAP32[i23 >> 2] = 0;
   HEAP32[i6 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i30);
  }
 } while (0);
 i30 = HEAP32[i28 >> 2] | 0;
 if ((i30 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i28 = i30 | 0;
 i5 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i30);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i28 >> 2] = i5;
  STACKTOP = i3;
  return;
 }
}
function runPostSets() {
 HEAP32[H_BASE + 88 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_ii + 48;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_ii + 142;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_ii + 154;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_ii + 56;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_iiiii + 4;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_vi + 48;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_v + 8;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_vi + 36;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_vi + 46;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_ii + 114;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_vi + 34;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_vii + 54;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_ii + 52;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_ii + 140;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_ii + 44;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_ii + 152;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_ii + 158;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_ii + 138;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_ii + 54;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_ii + 62;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_ii + 60;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_ii + 58;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_vii + 30;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_ii + 46;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_ii + 42;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_ii + 82;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_vii + 36;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_ii + 88;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_ii + 104;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_ii + 124;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_ii + 74;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_ii + 108;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_vii + 52;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_vii + 38;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_vii + 50;
 HEAP32[H_BASE + 320 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_ii + 94;
 HEAP32[H_BASE + 328 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_iii + 20;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_ii + 148;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_ii + 102;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 360 >> 2] = F_BASE_ii + 64;
 HEAP32[H_BASE + 364 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 372 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_vii + 40;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_ii + 126;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_ii + 96;
 HEAP32[H_BASE + 396 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 400 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 404 >> 2] = F_BASE_vii + 44;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_v + 12;
 HEAP32[H_BASE + 412 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_ii + 136;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_viii + 16;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_vii + 48;
 HEAP32[H_BASE + 428 >> 2] = F_BASE_vii + 46;
 HEAP32[H_BASE + 432 >> 2] = F_BASE_ii + 72;
 HEAP32[H_BASE + 436 >> 2] = F_BASE_ii + 146;
 HEAP32[H_BASE + 440 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 444 >> 2] = F_BASE_ii + 134;
 HEAP32[H_BASE + 448 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 452 >> 2] = F_BASE_ii + 122;
 HEAP32[H_BASE + 456 >> 2] = F_BASE_ii + 70;
 HEAP32[H_BASE + 460 >> 2] = F_BASE_vii + 42;
 HEAP32[H_BASE + 464 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 468 >> 2] = F_BASE_iii + 22;
 HEAP32[H_BASE + 472 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 476 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 480 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 484 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 488 >> 2] = F_BASE_vi + 40;
 HEAP32[H_BASE + 492 >> 2] = F_BASE_vii + 34;
 HEAP32[H_BASE + 496 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 500 >> 2] = F_BASE_vi + 50;
 HEAP32[H_BASE + 504 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 508 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 512 >> 2] = F_BASE_vi + 52;
 HEAP32[H_BASE + 516 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 520 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 524 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 528 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 532 >> 2] = F_BASE_ii + 80;
 HEAP32[H_BASE + 536 >> 2] = F_BASE_ii + 68;
 HEAP32[H_BASE + 540 >> 2] = F_BASE_ii + 130;
 HEAP32[H_BASE + 544 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 548 >> 2] = F_BASE_ii + 78;
 HEAP32[H_BASE + 552 >> 2] = F_BASE_ii + 98;
 HEAP32[H_BASE + 556 >> 2] = F_BASE_ii + 100;
 HEAP32[H_BASE + 560 >> 2] = F_BASE_ii + 116;
 HEAP32[H_BASE + 564 >> 2] = F_BASE_ii + 120;
 HEAP32[H_BASE + 568 >> 2] = F_BASE_ii + 66;
 HEAP32[H_BASE + 572 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 576 >> 2] = F_BASE_ii + 92;
 HEAP32[H_BASE + 580 >> 2] = F_BASE_ii + 84;
 HEAP32[H_BASE + 584 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 588 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 592 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 596 >> 2] = F_BASE_iii + 16;
 HEAP32[H_BASE + 600 >> 2] = F_BASE_v + 10;
 HEAP32[H_BASE + 604 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 608 >> 2] = F_BASE_iii + 18;
 HEAP32[H_BASE + 612 >> 2] = F_BASE_vii + 32;
 HEAP32[H_BASE + 616 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 620 >> 2] = F_BASE_vi + 38;
 HEAP32[H_BASE + 624 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 628 >> 2] = F_BASE_vi + 44;
 HEAP32[H_BASE + 632 >> 2] = F_BASE_v + 6;
 HEAP32[H_BASE + 636 >> 2] = F_BASE_ii + 86;
 HEAP32[H_BASE + 640 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 644 >> 2] = F_BASE_ii + 118;
 HEAP32[H_BASE + 648 >> 2] = F_BASE_v + 4;
 HEAP32[H_BASE + 652 >> 2] = F_BASE_ii + 110;
 HEAP32[H_BASE + 656 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 660 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 664 >> 2] = F_BASE_ii + 40;
 HEAP32[H_BASE + 668 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 672 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 676 >> 2] = F_BASE_ii + 144;
 HEAP32[H_BASE + 680 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 684 >> 2] = F_BASE_ii + 90;
 HEAP32[H_BASE + 688 >> 2] = F_BASE_ii + 112;
 HEAP32[H_BASE + 692 >> 2] = F_BASE_ii + 128;
 HEAP32[H_BASE + 696 >> 2] = F_BASE_ii + 150;
 HEAP32[H_BASE + 700 >> 2] = F_BASE_vii + 56;
 HEAP32[H_BASE + 704 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 708 >> 2] = F_BASE_ii + 76;
 HEAP32[H_BASE + 712 >> 2] = F_BASE_ii + 156;
 HEAP32[H_BASE + 716 >> 2] = F_BASE_vi + 42;
 HEAP32[H_BASE + 720 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 724 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 728 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 732 >> 2] = F_BASE_ii + 132;
 HEAP32[H_BASE + 736 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 740 >> 2] = F_BASE_ii + 160;
}
function __ZN7WebCore15SVGGlyphElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((HEAP32[i2 >> 2] | 0) != (HEAP32[__ZN7WebCore8SVGNames5dAttrE >> 2] | 0)) {
  __ZN7WebCore10SVGElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1 | 0, i2, i3);
  return;
 }
 i3 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 if ((HEAP32[i3 + 12 >> 2] & 4 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i3 + 44 >> 2] | 0;
 i2 = HEAP32[__ZN7WebCore8SVGNames7fontTagE >> 2] | 0;
 do {
  if ((i1 | 0) != (i2 | 0)) {
   if ((HEAP32[i1 + 12 >> 2] | 0) != (HEAP32[i2 + 12 >> 2] | 0)) {
    return;
   }
   if ((HEAP32[i1 + 16 >> 2] | 0) == (HEAP32[i2 + 16 >> 2] | 0)) {
    break;
   }
   return;
  }
 } while (0);
 __ZN7WebCore14SVGFontElement20invalidateGlyphCacheEv(i3);
 return;
}
function __ZN7WebCore15SVGGlyphElement28inheritUnspecifiedAttributesERNS_8SVGGlyphEPKNS_11SVGFontDataE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, d4 = +0, d5 = +0, d6 = +0, d7 = +0;
 i3 = i1 + 20 | 0;
 d4 = +HEAPF32[H_BASE + 72 >> 2];
 if (+HEAPF32[i3 >> 2] == d4) {
  HEAPF32[i3 >> 2] = +HEAPF32[i2 + 16 >> 2];
  d5 = +HEAPF32[H_BASE + 72 >> 2];
 } else {
  d5 = d4;
 }
 i3 = i1 + 24 | 0;
 if (+HEAPF32[i3 >> 2] == d5) {
  HEAPF32[i3 >> 2] = +HEAPF32[i2 + 20 >> 2];
  d6 = +HEAPF32[H_BASE + 72 >> 2];
 } else {
  d6 = d5;
 }
 i3 = i1 + 28 | 0;
 if (+HEAPF32[i3 >> 2] == d6) {
  HEAPF32[i3 >> 2] = +HEAPF32[i2 + 24 >> 2];
  d7 = +HEAPF32[H_BASE + 72 >> 2];
 } else {
  d7 = d6;
 }
 i3 = i1 + 32 | 0;
 if (+HEAPF32[i3 >> 2] != d7) {
  return;
 }
 HEAPF32[i3 >> 2] = +HEAPF32[i2 + 28 >> 2];
 return;
}
function __ZN7WebCore15SVGGlyphElement11removedFromERNS_13ContainerNodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 do {
  if ((HEAP32[i2 + 12 >> 2] & 256 | 0) != 0) {
   i3 = HEAP32[i1 + 16 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   if ((HEAP32[i3 + 12 >> 2] & 4 | 0) == 0) {
    break;
   }
   i4 = HEAP32[i3 + 44 >> 2] | 0;
   i5 = HEAP32[__ZN7WebCore8SVGNames7fontTagE >> 2] | 0;
   if ((i4 | 0) != (i5 | 0)) {
    if ((HEAP32[i4 + 12 >> 2] | 0) != (HEAP32[i5 + 12 >> 2] | 0)) {
     break;
    }
    if ((HEAP32[i4 + 16 >> 2] | 0) != (HEAP32[i5 + 16 >> 2] | 0)) {
     break;
    }
   }
   __ZN7WebCore14SVGFontElement20invalidateGlyphCacheEv(i3);
  }
 } while (0);
 __ZN7WebCore10SVGElement11removedFromERNS_13ContainerNodeE(i1 | 0, i2);
 return;
}
function __ZN7WebCore15SVGGlyphElement12insertedIntoERNS_13ContainerNodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   if ((HEAP32[i3 + 12 >> 2] & 4 | 0) == 0) {
    break;
   }
   i4 = HEAP32[i3 + 44 >> 2] | 0;
   i5 = HEAP32[__ZN7WebCore8SVGNames7fontTagE >> 2] | 0;
   if ((i4 | 0) != (i5 | 0)) {
    if ((HEAP32[i4 + 12 >> 2] | 0) != (HEAP32[i5 + 12 >> 2] | 0)) {
     break;
    }
    if ((HEAP32[i4 + 16 >> 2] | 0) != (HEAP32[i5 + 16 >> 2] | 0)) {
     break;
    }
   }
   __ZN7WebCore14SVGFontElement20invalidateGlyphCacheEv(i3);
  }
 } while (0);
 return __ZN7WebCore10SVGElement12insertedIntoERNS_13ContainerNodeE(i1 | 0, i2) | 0;
}
function __ZN7WebCore15SVGGlyphElement20invalidateGlyphCacheEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 if ((HEAP32[i2 + 12 >> 2] & 4 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i2 + 44 >> 2] | 0;
 i3 = HEAP32[__ZN7WebCore8SVGNames7fontTagE >> 2] | 0;
 do {
  if ((i1 | 0) != (i3 | 0)) {
   if ((HEAP32[i1 + 12 >> 2] | 0) != (HEAP32[i3 + 12 >> 2] | 0)) {
    return;
   }
   if ((HEAP32[i1 + 16 >> 2] | 0) == (HEAP32[i3 + 16 >> 2] | 0)) {
    break;
   }
   return;
  }
 } while (0);
 __ZN7WebCore14SVGFontElement20invalidateGlyphCacheEv(i2);
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
function iiiii___ZN7WebCore10SVGElement16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore10SVGElement16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function iiiii___ZN7WebCore10SVGElement19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore10SVGElement19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZN7WebCore15SVGGlyphElement6createERKNS_13QualifiedNameERNS_8DocumentE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = __Znwj(92) | 0;
 __ZN7WebCore10SVGElementC2ERKNS_13QualifiedNameERNS_8DocumentE(i4, i2, i3);
 HEAP32[i4 >> 2] = H_BASE + 88;
 HEAP32[i1 >> 2] = i4;
 return;
}
function vii___ZNK7WebCore13StyledElement27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore13StyledElement27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE(i1 | 0, i2 | 0);
}
function viii___ZNK7WebCore10SVGElement29localCoordinateSpaceTransformENS_12SVGLocatable8CTMScopeE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore10SVGElement29localCoordinateSpaceTransformENS_12SVGLocatable8CTMScopeE(i1 | 0, i2 | 0, i3 | 0);
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
function vii___ZN7WebCore10SVGElement19svgAttributeChangedERKNS_13QualifiedNameE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore10SVGElement19svgAttributeChangedERKNS_13QualifiedNameE(i1 | 0, i2 | 0);
}
function iii___ZN7WebCore10SVGElement15willRecalcStyleENS_5Style6ChangeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore10SVGElement15willRecalcStyleENS_5Style6ChangeE(i1 | 0, i2 | 0) | 0;
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
function v___ZN7WebCore7Element18dispatchFocusEventEN3WTF10PassRefPtrIS0_EENS_14FocusDirectionE__wrapper() {
 __ZN7WebCore7Element18dispatchFocusEventEN3WTF10PassRefPtrIS0_EENS_14FocusDirectionE();
}
function iii___ZN7WebCore10SVGElement13computedStyleENS_8PseudoIdE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore10SVGElement13computedStyleENS_8PseudoIdE(i1 | 0, i2 | 0) | 0;
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
function v___ZN7WebCore7Element21createElementRendererEN3WTF7PassRefINS_11RenderStyleEEE__wrapper() {
 __ZN7WebCore7Element21createElementRendererEN3WTF7PassRefINS_11RenderStyleEEE();
}
function vii___ZN7WebCore4Node19defaultEventHandlerEPNS_5EventE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore4Node19defaultEventHandlerEPNS_5EventE(i1 | 0, i2 | 0);
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
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function v___ZN7WebCore7Element40cloneElementWithoutAttributesAndChildrenEv__wrapper() {
 __ZN7WebCore7Element40cloneElementWithoutAttributesAndChildrenEv();
}
function ii___ZNK7WebCore7Element22isSpellCheckingEnabledEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element22isSpellCheckingEnabledEv(i1 | 0) | 0;
}
function v___ZN7WebCore7Element17dispatchBlurEventEN3WTF10PassRefPtrIS0_EE__wrapper() {
 __ZN7WebCore7Element17dispatchBlurEventEN3WTF10PassRefPtrIS0_EE();
}
function v___ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE__wrapper() {
 __ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE();
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
 FUNCTION_TABLE_viii[i1 & 31](i2 | 0, i3 | 0, i4 | 0);
}
function __ZN7WebCore10SVGElement27localAttributeToPropertyMapEv(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore10SVGElement22attributeToPropertyMapEv() | 0;
}
function ii___ZNK7WebCore11EventTarget13isMessagePortEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11EventTarget13isMessagePortEv(i1 | 0) | 0;
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
function vii___ZNK7WebCore4Node9nodeValueEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore4Node9nodeValueEv(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore7Element13supportsFocusEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element13supportsFocusEv(i1 | 0) | 0;
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
function v___ZN7WebCore10SVGElement22customStyleForRendererEv__wrapper() {
 __ZN7WebCore10SVGElement22customStyleForRendererEv();
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
function __ZN7WebCore15SVGGlyphElement16rendererIsNeededERKNS_11RenderStyleE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}
function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = i1;
  threwValue = i2;
 }
}
function __ZN7WebCore15SVGGlyphElementD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore10SVGElementD2Ev(i1 | 0);
 __ZdlPv(i1);
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
function vi___ZN7WebCore4Node14refEventTargetEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore4Node14refEventTargetEv(i1 | 0);
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 63](i2 | 0, i3 | 0);
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
function ii___ZN7WebCore4Node6toNodeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node6toNodeEv(i1 | 0) | 0;
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
function __ZN7WebCore15SVGGlyphElementD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore10SVGElementD2Ev(i1 | 0);
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
function __ZNK7WebCore7Element6prefixEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 44 >> 2] | 0) + 8 | 0;
}
function __ZNK7WebCore7Element32isSearchFieldCancelButtonElementEv(i1) {
 i1 = i1 | 0;
 return 0;
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
function __ZN7WebCore10SVGElement29synchronizeRequiredExtensionsEv(i1) {
 i1 = i1 | 0;
 return;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 63](i2 | 0);
}
function __ZN7WebCore7Element31documentWillSuspendForPageCacheEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore10SVGElement27synchronizeRequiredFeaturesEv(i1) {
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
function __ZN7WebCore10SVGElement25synchronizeSystemLanguageEv(i1) {
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
function __ZNK7WebCore10SVGElement20isSVGGraphicsElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore7Element25isValidFormControlElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore10SVGElement21supplementalTransformEv(i1) {
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
function __ZNK7WebCore4Node19isFrameOwnerElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node19isCharacterDataNodeEv(i1) {
 i1 = i1 | 0;
 return 0;
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
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore7Element29privateBrowsingStateDidChangeEv,b1,__ZN7WebCore7Element20buildPendingResourceEv,b1,vi___ZN7WebCore4Node16derefEventTargetEv__wrapper,b1,__ZN7WebCore10SVGElement25synchronizeSystemLanguageEv,b1,__ZN7WebCore15SVGGlyphElementD0Ev,b1,__ZN7WebCore7Element22visibilityStateChangedEv,b1,vi___ZN7WebCore4Node18dispatchInputEventEv__wrapper,b1,vi___ZN7WebCore7Element19willAttachRenderersEv__wrapper,b1,vi___ZN7WebCore10SVGElement21finishParsingChildrenEv__wrapper,b1,__ZN7WebCore4Node24startLoadingDynamicSheetEv,b1,__ZN7WebCore7Element30willStopBeingFullscreenElementEv,b1,__ZN7WebCore10SVGElement29synchronizeRequiredExtensionsEv,b1,vi___ZN7WebCore7Element19willDetachRenderersEv__wrapper,b1,__ZN7WebCore7Element20mediaVolumeDidChangeEv
  ,b1,vi___ZN7WebCore7Element20beginParsingChildrenEv__wrapper,b1,__ZN7WebCore7Element31documentWillSuspendForPageCacheEv,b1,vi___ZN7WebCore4Node14refEventTargetEv__wrapper,b1,vi___ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv__wrapper,b1,vi___ZN7WebCore7Element18didAttachRenderersEv__wrapper,b1,vi___ZN7WebCore7Element4blurEv__wrapper,b1,__ZN7WebCore10SVGElement27synchronizeRequiredFeaturesEv,b1,vi___ZN7WebCore7Element18didDetachRenderersEv__wrapper,b1,__ZN7WebCore15SVGGlyphElementD1Ev,b1,vi___ZN7WebCore7Element23removeAllEventListenersEv__wrapper,b1,__ZN7WebCore7Element30documentDidResumeFromPageCacheEv,b1,__ZN7WebCore7Element26didBecomeFullscreenElementEv,b1,b1,b1,b1,b1,b1
  ,b1,b1,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,vii___ZN7WebCore7Element10setOnfocusEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper,b2,__ZNK7WebCore7Element6targetEv,b2,vii___ZNK7WebCore7Element8nodeNameEv__wrapper,b2,vii___ZN7WebCore7Element9setOnblurEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper,b2,__ZN7WebCore7Element25didAddUserAgentShadowRootEPNS_10ShadowRootE,b2,vii___ZN7WebCore10SVGElement15childrenChangedERKNS_13ContainerNode11ChildChangeE__wrapper,b2,vii___ZN7WebCore7Element12setScrollTopEi__wrapper,b2,vii___ZNK7WebCore13ContainerNode11boundingBoxEv__wrapper,b2,vii___ZN7WebCore7Element9setOnloadEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper,b2,vii___ZN7WebCore7Element21updateFocusAppearanceEb__wrapper,b2,vii___ZN7WebCore7Element10setOnerrorEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper,b2,vii___ZN7WebCore4Node17handleLocalEventsERNS_5EventE__wrapper,b2,vii___ZNK7WebCore7Element7baseURIEv__wrapper,b2,__ZN7WebCore4Node26didNotifySubtreeInsertionsEPNS_13ContainerNodeE
  ,b2,__ZN7WebCore4Node43notifyLoadedSheetAndAllCriticalSubresourcesEb,b2,vii___ZN7WebCore7Element14didRecalcStyleENS_5Style6ChangeE__wrapper,b2,vii___ZNK7WebCore10SVGElement5titleEv__wrapper,b2,__ZN7WebCore15SVGGlyphElement11removedFromERNS_13ContainerNodeE,b2,vii___ZN7WebCore4Node20didMoveToNewDocumentEPNS_8DocumentE__wrapper,b2,vii___ZN7WebCore7Element13setScrollLeftEi__wrapper,b2,vii___ZN7WebCore10SVGElement15accessKeyActionEb__wrapper,b2,__ZN7WebCore7Element37copyNonAttributePropertiesFromElementERKS0_,b2,vii___ZN7WebCore7Element8setFocusEb__wrapper,b2,vii___ZN7WebCore7Element10setHoveredEb__wrapper,b2,vii___ZNK7WebCore13StyledElement27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE__wrapper,b2,vii___ZN7WebCore4Node19defaultEventHandlerEPNS_5EventE__wrapper,b2,vii___ZNK7WebCore4Node9nodeValueEv__wrapper,b2,vii___ZN7WebCore10SVGElement19svgAttributeChangedERKNS_13QualifiedNameE__wrapper,b2,b2
  ,b2,b2,b2,b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3,ii___ZN7WebCore10SVGElement27haveLoadedRequiredResourcesEv__wrapper,b3,ii___ZNK7WebCore7Element14imageSourceURLEv__wrapper,b3,ii___ZN7WebCore4Node15eventTargetDataEv__wrapper,b3,__ZNK7WebCore10SVGElement14isFilterEffectEv,b3,ii___ZN7WebCore7Element7onerrorEv__wrapper,b3,ii___ZN7WebCore7Element11scrollWidthEv__wrapper,b3,__ZNK7WebCore4Node14customPseudoIdEv,b3,__ZNK7WebCore4Node21isMediaControlElementEv,b3,__ZNK7WebCore4Node19isFrameOwnerElementEv,b3,ii___ZN7WebCore7Element10scrollLeftEv__wrapper,b3,ii___ZN7WebCore7Element9scrollTopEv__wrapper,b3,ii___ZNK7WebCore7Element26matchesReadOnlyPseudoClassEv__wrapper,b3,ii___ZNK7WebCore7Element22isSpellCheckingEnabledEv__wrapper,b3,ii___ZNK7WebCore7Element27matchesReadWritePseudoClassEv__wrapper
  ,b3,__ZNK7WebCore7Element17isTextFormControlEv,b3,ii___ZN7WebCore7Element20shouldUseInputMethodEv__wrapper,b3,ii___ZNK7WebCore4Node20eventTargetInterfaceEv__wrapper,b3,__ZNK7WebCore7Element6prefixEv,b3,__ZNK7WebCore7Element21isDisabledFormControlEv,b3,__ZNK7WebCore10SVGElement15supportsMarkersEv,b3,ii___ZNK7WebCore4Node18maxCharacterOffsetEv__wrapper,b3,__ZNK7WebCore7Element12namespaceURIEv,b3,ii___ZNK7WebCore4Node18offsetInCharactersEv__wrapper,b3,__ZNK7WebCore4Node22scriptExecutionContextEv,b3,__ZNK7WebCore7Element12isOutOfRangeEv,b3,ii___ZNK7WebCore7Element8nodeTypeEv__wrapper,b3,__ZNK7WebCore4Node15isPluginElementEv,b3,ii___ZNK7WebCore11EventTarget13isMessagePortEv__wrapper,b3,__ZN7WebCore4Node11sheetLoadedEv
  ,b3,__ZNK7WebCore7Element23canContainRangeEndPointEv,b3,__ZNK7WebCore4Node20isInsertionPointNodeEv,b3,ii___ZN7WebCore7Element6onloadEv__wrapper,b3,__ZNK7WebCore7Element9isInRangeEv,b3,__ZNK7WebCore7Element20isFormControlElementEv,b3,ii___ZN7WebCore7Element13focusDelegateEv__wrapper,b3,ii___ZNK7WebCore7Element13supportsFocusEv__wrapper,b3,ii___ZN7WebCore4Node24willRespondToTouchEventsEv__wrapper,b3,ii___ZN7WebCore10SVGElement17svgLoadEventTimerEv__wrapper,b3,__ZNK7WebCore7Element21isOptionalFormControlEv,b3,ii___ZNK7WebCore7Element25shouldAppearIndeterminateEv__wrapper,b3,ii___ZNK7WebCore4Node17canStartSelectionEv__wrapper,b3,__ZNK7WebCore7Element32isSearchFieldCancelButtonElementEv,b3,__ZNK7WebCore10SVGElement23areAuthorShadowsAllowedEv,b3,ii___ZN7WebCore4Node28willRespondToMouseMoveEventsEv__wrapper
  ,b3,__ZNK7WebCore10SVGElement14isGradientStopEv,b3,__ZNK7WebCore7Element18isFrameElementBaseEv,b3,__ZNK7WebCore4Node16nonRendererStyleEv,b3,ii___ZN7WebCore13StyledElement5styleEv__wrapper,b3,__ZNK7WebCore7Element21isRequiredFormControlEv,b3,__ZNK7WebCore7Element22isDefaultButtonForFormEv,b3,ii___ZN7WebCore7Element7onfocusEv__wrapper,b3,ii___ZN7WebCore4Node29willRespondToMouseClickEventsEv__wrapper,b3,__ZNK7WebCore10SVGElement28needsPendingResourceHandlingEv,b3,ii___ZN7WebCore4Node14toInputElementEv__wrapper,b3,__ZN7WebCore13StyledElement36additionalPresentationAttributeStyleEv,b3,__ZNK7WebCore10SVGElement13isTextContentEv,b3,ii___ZN7WebCore4Node21ensureEventTargetDataEv__wrapper,b3,__ZNK7WebCore7Element12willValidateEv,b3,__ZNK7WebCore7Element31alwaysCreateUserAgentShadowRootEv
  ,b3,__ZN7WebCore7Element25isValidFormControlElementEv,b3,ii___ZNK7WebCore7Element8tabIndexEv__wrapper,b3,ii___ZN7WebCore4Node29willRespondToMouseWheelEventsEv__wrapper,b3,ii___ZN7WebCore7Element12scrollHeightEv__wrapper,b3,__ZNK7WebCore10SVGElement13isSMILElementEv,b3,__ZNK7WebCore7Element19isSpinButtonElementEv,b3,__ZNK7WebCore10SVGElement22selfHasRelativeLengthsEv,b3,ii___ZNK7WebCore10SVGElement16isMouseFocusableEv__wrapper,b3,ii___ZNK7WebCore7Element14shadowPseudoIdEv__wrapper,b3,__ZNK7WebCore4Node19isCharacterDataNodeEv,b3,__ZNK7WebCore7Element9localNameEv,b3,ii___ZN7WebCore4Node6toNodeEv__wrapper,b3,__ZNK7WebCore10SVGElement20isSVGGraphicsElementEv,b3,ii___ZNK7WebCore7Element11isFocusableEv__wrapper,b3,ii___ZN7WebCore7Element6onblurEv__wrapper
  ,b3,__ZNK7WebCore10SVGElement7isValidEv,b3,__ZNK7WebCore4Node15isMediaControlsEv,b3,ii___ZN7WebCore11EventTarget11toDOMWindowEv__wrapper,b3,__ZN7WebCore10SVGElement21supplementalTransformEv,b3,__ZNK7WebCore4Node15isAttributeNodeEv,b3,__ZN7WebCore10SVGElement27localAttributeToPropertyMapEv,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_iiii = [b4,b4,iiii___ZNK7WebCore10SVGElement11isSupportedEPN3WTF10StringImplES3___wrapper,b4];
  var FUNCTION_TABLE_viii = [b5,b5,viii___ZN7WebCore10SVGElement32animatedPropertyTypeForAttributeERKNS_13QualifiedNameERN3WTF6VectorINS_20AnimatedPropertyTypeELj0ENS4_15CrashOnOverflowEEE__wrapper,b5,viii___ZN7WebCore7Element9cloneNodeEb__wrapper,b5,viii___ZN7WebCore7Element9setPrefixERKN3WTF12AtomicStringERi__wrapper,b5,viii___ZN7WebCore4Node12setNodeValueERKN3WTF6StringERi__wrapper,b5,viii___ZN7WebCore7Element5focusEbNS_14FocusDirectionE__wrapper,b5,viii___ZNK7WebCore10SVGElement29localCoordinateSpaceTransformENS_12SVGLocatable8CTMScopeE__wrapper,b5,__ZN7WebCore15SVGGlyphElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE,b5,viii___ZN7WebCore7Element9setActiveEbb__wrapper,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5
  ,b5,b5,b5];
  var FUNCTION_TABLE_v = [b6,b6,v___ZN7WebCore7Element17dispatchBlurEventEN3WTF10PassRefPtrIS0_EE__wrapper,b6,v___ZN7WebCore7Element40cloneElementWithoutAttributesAndChildrenEv__wrapper,b6,v___ZN7WebCore10SVGElement22customStyleForRendererEv__wrapper,b6,v___ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE__wrapper,b6,v___ZN7WebCore7Element18dispatchFocusEventEN3WTF10PassRefPtrIS0_EENS_14FocusDirectionE__wrapper,b6,v___ZN7WebCore7Element21createElementRendererEN3WTF7PassRefINS_11RenderStyleEEE__wrapper,b6,b6,b6];
  var FUNCTION_TABLE_iii = [b7,b7,iii___ZN7WebCore10SVGElement13computedStyleENS_8PseudoIdE__wrapper,b7,iii___ZNK7WebCore7Element16childTypeAllowedENS_4Node8NodeTypeE__wrapper,b7,__ZN7WebCore15SVGGlyphElement16rendererIsNeededERKNS_11RenderStyleE,b7,iii___ZNK7WebCore10SVGElement23isPresentationAttributeERKNS_13QualifiedNameE__wrapper,b7,iii___ZNK7WebCore10SVGElement19isKeyboardFocusableEPNS_13KeyboardEventE__wrapper,b7,__ZN7WebCore15SVGGlyphElement12insertedIntoERNS_13ContainerNodeE,b7,__ZNK7WebCore7Element14isURLAttributeERKNS_9AttributeE,b7,iii___ZNK7WebCore10SVGElement22shouldMoveToFlowThreadERKNS_11RenderStyleE__wrapper,b7,iii___ZN7WebCore10SVGElement15willRecalcStyleENS_5Style6ChangeE__wrapper,b7,iii___ZNK7WebCore10SVGElement25childShouldCreateRendererERKNS_4NodeE__wrapper,b7,__ZNK7WebCore7Element22isHTMLContentAttributeERKNS_9AttributeE,b7,b7,b7,b7,b7,b7
  ,b7,b7,b7];
  var FUNCTION_TABLE_viiii = [b8,b8,viiii___ZN7WebCore10SVGElement36collectStyleForPresentationAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringERNS_22MutableStylePropertiesE__wrapper,b8,viiii___ZN7WebCore10SVGElement16attributeChangedERKNS_13QualifiedNameERKN3WTF12AtomicStringENS_7Element27AttributeModificationReasonE__wrapper,b8,b8,b8];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiiii: dynCall_iiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_iiii: dynCall_iiii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiiii": invoke_iiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_iiii": invoke_iiii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore8SVGNames15horiz_adv_xAttrE": __ZN7WebCore8SVGNames15horiz_adv_xAttrE, "__ZN7WebCore8SVGNames17vert_origin_yAttrE": __ZN7WebCore8SVGNames17vert_origin_yAttrE, "__ZN7WebCore8SVGNames7fontTagE": __ZN7WebCore8SVGNames7fontTagE, "__ZN7WebCore8SVGNames15orientationAttrE": __ZN7WebCore8SVGNames15orientationAttrE, "__ZN7WebCore8SVGNames8langAttrE": __ZN7WebCore8SVGNames8langAttrE, "__ZN7WebCore8SVGNames17vert_origin_xAttrE": __ZN7WebCore8SVGNames17vert_origin_xAttrE, "__ZN3WTF8nullAtomE": __ZN3WTF8nullAtomE, "__ZN7WebCore8SVGNames15arabic_formAttrE": __ZN7WebCore8SVGNames15arabic_formAttrE, "__ZN7WebCore8SVGNames5dAttrE": __ZN7WebCore8SVGNames5dAttrE, "__ZN7WebCore8SVGNames14vert_adv_yAttrE": __ZN7WebCore8SVGNames14vert_adv_yAttrE, "__ZN7WebCore8SVGNames14glyph_nameAttrE": __ZN7WebCore8SVGNames14glyph_nameAttrE }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZNK7WebCore7Element32isSearchFieldCancelButtonElementEv","__ZN7WebCore15SVGGlyphElement27buildGenericGlyphIdentifierEPKNS_10SVGElementE","__ZNK7WebCore10SVGElement23areAuthorShadowsAllowedEv","__ZNK7WebCore10SVGElement15supportsMarkersEv","__ZNK7WebCore7Element12namespaceURIEv","__ZN7WebCore7Element20buildPendingResourceEv","__ZNK7WebCore10SVGElement13isSMILElementEv","__ZNK7WebCore10SVGElement14isGradientStopEv","__ZN7WebCore10SVGElement27localAttributeToPropertyMapEv","__ZN7WebCore15SVGGlyphElement16rendererIsNeededERKNS_11RenderStyleE","__ZN7WebCore15SVGGlyphElement6createERKNS_13QualifiedNameERNS_8DocumentE","__ZN7WebCore7Element26didBecomeFullscreenElementEv","__ZNK7WebCore4Node22scriptExecutionContextEv","__ZN7WebCore7Element30documentDidResumeFromPageCacheEv","__ZNK7WebCore4Node16nonRendererStyleEv","__ZNK7WebCore7Element19isSpinButtonElementEv","__ZNK7WebCore10SVGElement14isFilterEffectEv","__ZN7WebCore7Element20mediaVolumeDidChangeEv","__ZNK7WebCore4Node15isPluginElementEv","__ZNK7WebCore7Element6targetEv","__ZNK7WebCore10SVGElement22selfHasRelativeLengthsEv","__ZNK7WebCore7Element21isRequiredFormControlEv","__ZN7WebCore15SVGGlyphElement20invalidateGlyphCacheEv","__ZNK7WebCore7Element31alwaysCreateUserAgentShadowRootEv","__ZN7WebCore4Node24startLoadingDynamicSheetEv","__ZN7WebCore7Element30willStopBeingFullscreenElementEv","__ZN7WebCore10SVGElement25synchronizeSystemLanguageEv","__ZNK7WebCore10SVGElement28needsPendingResourceHandlingEv","__ZNK7WebCore7Element22isDefaultButtonForFormEv","__ZN7WebCore15SVGGlyphElement11removedFromERNS_13ContainerNodeE","__ZN7WebCore15SVGGlyphElement28inheritUnspecifiedAttributesERNS_8SVGGlyphEPKNS_11SVGFontDataE","__ZNK7WebCore4Node19isCharacterDataNodeEv","__ZNK7WebCore7Element9localNameEv","__ZN7WebCore15SVGGlyphElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE","_memcpy","__ZN7WebCore10SVGElement29synchronizeRequiredExtensionsEv","__ZN7WebCore15SVGGlyphElement12insertedIntoERNS_13ContainerNodeE","__ZNK7WebCore7Element22isHTMLContentAttributeERKNS_9AttributeE","__ZN7WebCore4Node11sheetLoadedEv","__ZN7WebCore15SVGGlyphElementD0Ev","__ZNK7WebCore4Node14customPseudoIdEv","__ZNK7WebCore4Node21isMediaControlElementEv","__ZNK7WebCore7Element12willValidateEv","__ZNK7WebCore4Node19isFrameOwnerElementEv","__ZNK7WebCore7Element6prefixEv","__ZNK7WebCore7Element14isURLAttributeERKNS_9AttributeE","__ZN7WebCore7Element22visibilityStateChangedEv","__ZNK7WebCore7Element9isInRangeEv","__ZNK7WebCore7Element20isFormControlElementEv","__ZN7WebCore10SVGElement27synchronizeRequiredFeaturesEv","__ZN7WebCore15SVGGlyphElementD1Ev","__ZNK7WebCore7Element12isOutOfRangeEv","__ZNK7WebCore7Element17isTextFormControlEv","__ZNK7WebCore10SVGElement7isValidEv","__ZN7WebCore7Element25didAddUserAgentShadowRootEPNS_10ShadowRootE","__ZN7WebCore4Node26didNotifySubtreeInsertionsEPNS_13ContainerNodeE","__ZN7WebCore13StyledElement36additionalPresentationAttributeStyleEv","__ZNK7WebCore7Element21isDisabledFormControlEv","__ZNK7WebCore15SVGGlyphElement20buildGlyphIdentifierEv","__ZNK7WebCore7Element18isFrameElementBaseEv","__ZNK7WebCore4Node15isMediaControlsEv","__ZN7WebCore7Element29privateBrowsingStateDidChangeEv","__ZN7WebCore4Node43notifyLoadedSheetAndAllCriticalSubresourcesEb","__ZNK7WebCore7Element21isOptionalFormControlEv","__ZNK7WebCore10SVGElement20isSVGGraphicsElementEv","__ZN7WebCore10SVGElement21supplementalTransformEv","__ZNK7WebCore4Node15isAttributeNodeEv","__ZNK7WebCore7Element23canContainRangeEndPointEv","__ZNK7WebCore4Node20isInsertionPointNodeEv","__ZN7WebCore7Element37copyNonAttributePropertiesFromElementERKS0_","__ZN7WebCore7Element31documentWillSuspendForPageCacheEv","__ZN7WebCore7Element25isValidFormControlElementEv","_memset","__ZNK7WebCore10SVGElement13isTextContentEv"]
