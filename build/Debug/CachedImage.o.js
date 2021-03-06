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
H_BASE = parentModule["_malloc"](264 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 264;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore11CachedImageC1ERKNS_15ResourceRequestE;
var __ZN7WebCore11CachedImageC1EPNS_5ImageE;
var __ZN7WebCore11CachedImageC1ERKNS_3URLEPNS_5ImageE;
var __ZN7WebCore11CachedImageD1Ev;
/* memory initializer */ allocate([71,69,84,0,0,0,0,0,105,109,97,103,101,47,115,118,103,43,120,109,108,0,0,0,109,105,115,115,105,110,103,73,109,97,103,101,0,0,0,0,109,105,115,115,105,110,103,73,109,97,103,101,64,50,120,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,128,253,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZN7WebCore9FrameView22sCurrentPaintTimeStampE=env.__ZN7WebCore9FrameView22sCurrentPaintTimeStampE|0;
  var __ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE=env.__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore11CachedImageE=(H_BASE+64)|0;
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
  var invoke_ii=env.invoke_ii;
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
function __ZN7WebCore11CachedImage13finishLoadingEPNS_14ResourceBufferE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 48 | 0;
 i9 = i1 | 0;
 i10 = (i2 | 0) == 0;
 if (!i10) {
  i11 = i2 + 4 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
 }
 i11 = i1 + 448 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = i2;
 do {
  if ((i12 | 0) != 0) {
   i13 = i12 + 4 | 0;
   i14 = i13 | 0;
   i15 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i14 >> 2] = i15;
    break;
   }
   i15 = i13 - 4 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 31](i15);
  }
 } while (0);
 i12 = i1 + 664 | 0;
 i15 = HEAP32[i12 >> 2] | 0;
 if ((i15 | 0) != 0 | i10) {
  i16 = i15;
 } else {
  __ZN7WebCore11CachedImage11createImageEv(i1);
  i16 = HEAP32[i12 >> 2] | 0;
 }
 do {
  if ((i16 | 0) != 0) {
   i15 = __ZNK7WebCore14ResourceBuffer12sharedBufferEv(HEAP32[i11 >> 2] | 0) | 0;
   i10 = i8 | 0;
   HEAP32[i10 >> 2] = i15;
   if ((i15 | 0) != 0) {
    i13 = i15 | 0;
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
   }
   __ZN7WebCore5Image7setDataEN3WTF10PassRefPtrINS_12SharedBufferEEEb(i16, i8, 1) | 0;
   i13 = HEAP32[i10 >> 2] | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   i10 = i13 | 0;
   i15 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) == 0) {
    __ZN7WebCore12SharedBufferD1Ev(i13);
    __ZN3WTF8fastFreeEPv(i13);
    break;
   } else {
    HEAP32[i10 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i12 >> 2] | 0;
 L24 : do {
  if ((i8 | 0) != 0) {
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i8 >> 2] | 0) + 48 >> 2] & 31](i5, i8);
   if ((HEAP32[i5 >> 2] | 0) < 1) {
    break;
   }
   if ((HEAP32[i5 + 4 >> 2] | 0) < 1) {
    break;
   }
   i16 = i1 + 236 | 0;
   i11 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i11 | 0) != 0) {
     if ((HEAP8[i11 + 568 | 0] & 1) != 0) {
      break;
     }
     i15 = HEAP32[i12 >> 2] | 0;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 48 >> 2] & 31](i4, i15);
     i15 = HEAP32[i4 >> 2] | 0;
     i10 = HEAP32[i12 >> 2] | 0;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i10 >> 2] | 0) + 48 >> 2] & 31](i6, i10);
     i10 = Math_imul(i15 << 2, HEAP32[i6 + 4 >> 2] | 0) | 0;
     if (i10 >>> 0 > (HEAP32[(HEAP32[(HEAP32[(__ZNK7WebCore14ResourceLoader11frameLoaderEv(HEAP32[i16 >> 2] | 0) | 0) >> 2] | 0) + 36 >> 2] | 0) + 136 >> 2] | 0) >>> 0) {
      break L24;
     }
    }
   } while (0);
   __ZN7WebCore26CachedResourceClientWalkerINS_17CachedImageClientEEC2ERKN3WTF14HashCountedSetIPNS_20CachedResourceClientENS3_7PtrHashIS6_EENS3_10HashTraitsIS6_EEEE(i7, i1 + 4 | 0);
   i16 = __ZN7WebCore26CachedResourceClientWalkerINS_17CachedImageClientEE4nextEv(i7) | 0;
   if ((i16 | 0) != 0) {
    i11 = i16;
    while (1) {
     FUNCTION_TABLE_viii[HEAP32[(HEAP32[i11 >> 2] | 0) + 20 >> 2] & 31](i11, i1, 0);
     i11 = __ZN7WebCore26CachedResourceClientWalkerINS_17CachedImageClientEE4nextEv(i7) | 0;
     if ((i11 | 0) == 0) {
      break;
     }
    }
   }
   i11 = i7 + 12 | 0;
   if ((HEAP32[i11 >> 2] | 0) != 0) {
    HEAP32[i11 >> 2] = 0;
   }
   i11 = i7 + 4 | 0;
   i16 = HEAP32[i11 >> 2] | 0;
   if ((i16 | 0) != 0) {
    HEAP32[i11 >> 2] = 0;
    HEAP32[i7 + 8 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i16);
   }
   i16 = HEAP32[i12 >> 2] | 0;
   if ((i16 | 0) != 0) {
    i11 = HEAP32[i16 + 8 >> 2] | 0;
    if ((i11 | 0) == 0) {
     i17 = 0;
    } else {
     i17 = __ZNK7WebCore12SharedBuffer4sizeEv(i11) | 0;
    }
    __ZN7WebCore14CachedResource14setEncodedSizeEj(i9, i17);
   }
   __ZN7WebCore14CachedResource13finishLoadingEPNS_14ResourceBufferE(i9, i2);
   STACKTOP = i3;
   return;
  }
 } while (0);
 i2 = i1 + 588 | 0;
 i17 = (HEAP32[i2 >> 2] | 0) >>> 11 & 7;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] & 31](i1, (i17 - 3 | 0) >>> 0 < 2 >>> 0 ? i17 : 4);
 if ((HEAP8[i2] & 16) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore11MemoryCache5evictEPNS_14CachedResourceE(__ZN7WebCore11memoryCacheEv() | 0, i9);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11CachedImage34switchClientsToRevalidatedResourceEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i3 = i2 | 0;
 i4 = i2 + 24 | 0;
 if ((HEAP32[i1 + 656 >> 2] | 0) == 0) {
  __ZN7WebCore14CachedResource34switchClientsToRevalidatedResourceEv(i1 | 0);
  STACKTOP = i2;
  return;
 }
 _memset(i3 | 0, 0, 20) | 0;
 i5 = i1 + 644 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i1 + 648 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i6 + (i8 << 4) | 0;
 L5 : do {
  if ((i8 | 0) == 0) {
   i10 = i6;
   i11 = 5;
  } else {
   i12 = i6;
   while (1) {
    i13 = HEAP32[i12 >> 2] | 0;
    if (!((i13 | 0) == (-1 | 0) | (i13 | 0) == 0)) {
     i10 = i12;
     i11 = 5;
     break L5;
    }
    i13 = i12 + 16 | 0;
    if ((i13 | 0) == (i9 | 0)) {
     i11 = 6;
     break;
    } else {
     i12 = i13;
    }
   }
  }
 } while (0);
 do {
  if ((i11 | 0) == 5) {
   if ((i10 | 0) == (i9 | 0)) {
    i11 = 6;
    break;
   }
   i6 = i3 | 0;
   i8 = i4 + 8 | 0;
   i12 = i4 | 0;
   i13 = i10;
   while (1) {
    i14 = i13 + 4 | 0;
    __ZN3WTF9HashTableIPKN7WebCore17CachedImageClientENS_12KeyValuePairIS4_NSt3__14pairINS1_7IntSizeEfEEEENS_24KeyValuePairKeyExtractorISA_EENS_7PtrHashIS4_EENS_7HashMapIS4_S9_SE_NS_10HashTraitsIS4_EENSG_IS9_EEE18KeyValuePairTraitsESH_E3addINS_17HashMapTranslatorISK_SE_EERKS4_RS9_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_SA_SC_SE_SK_SH_EEEEOT0_OT1_(i4, i6, i13 | 0, i14);
    if ((HEAP8[i8] & 1) == 0) {
     i15 = HEAP32[i12 >> 2] | 0;
     i16 = i14;
     i14 = i15 + 4 | 0;
     i17 = HEAP32[i16 + 4 >> 2] | 0;
     HEAP32[i14 >> 2] = HEAP32[i16 >> 2];
     HEAP32[i14 + 4 >> 2] = i17;
     HEAPF32[i15 + 12 >> 2] = +HEAPF32[i13 + 12 >> 2];
    }
    i15 = i13 + 16 | 0;
    L17 : do {
     if ((i15 | 0) == (i9 | 0)) {
      i18 = i9;
     } else {
      i17 = i15;
      while (1) {
       i14 = HEAP32[i17 >> 2] | 0;
       if (!((i14 | 0) == (-1 | 0) | (i14 | 0) == 0)) {
        i18 = i17;
        break L17;
       }
       i14 = i17 + 16 | 0;
       if ((i14 | 0) == (i9 | 0)) {
        i18 = i9;
        break;
       } else {
        i17 = i14;
       }
      }
     }
    } while (0);
    if ((i18 | 0) == ((HEAP32[i5 >> 2] | 0) + (HEAP32[i7 >> 2] << 4) | 0)) {
     break;
    } else {
     i13 = i18;
    }
   }
   i13 = i3 | 0;
   i12 = i3 + 4 | 0;
   i19 = (HEAP32[i3 + 12 >> 2] | 0) == 0;
   i20 = HEAP32[i13 >> 2] | 0;
   i21 = HEAP32[i12 >> 2] | 0;
   i22 = i13;
   i23 = i12;
  }
 } while (0);
 if ((i11 | 0) == 6) {
  i19 = 1;
  i20 = 0;
  i21 = 0;
  i22 = i3 | 0;
  i23 = i3 + 4 | 0;
 }
 __ZN7WebCore14CachedResource34switchClientsToRevalidatedResourceEv(i1 | 0);
 i3 = HEAP32[i1 + 612 >> 2] | 0;
 i1 = i20 + (i21 << 4) | 0;
 L26 : do {
  if (i19) {
   i24 = i1;
  } else {
   if ((i21 | 0) == 0) {
    i24 = i20;
    break;
   } else {
    i25 = i20;
   }
   while (1) {
    i11 = HEAP32[i25 >> 2] | 0;
    if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
     i24 = i25;
     break L26;
    }
    i11 = i25 + 16 | 0;
    if ((i11 | 0) == (i1 | 0)) {
     i24 = i1;
     break;
    } else {
     i25 = i11;
    }
   }
  }
 } while (0);
 i25 = HEAP32[i22 >> 2] | 0;
 i22 = i25 + (HEAP32[i23 >> 2] << 4) | 0;
 if ((i24 | 0) != (i22 | 0)) {
  i23 = i24;
  while (1) {
   __ZN7WebCore11CachedImage27setContainerSizeForRendererEPKNS_17CachedImageClientERKNS_7IntSizeEf(i3, HEAP32[i23 >> 2] | 0, i23 + 4 | 0, +HEAPF32[i23 + 12 >> 2]);
   i24 = i23 + 16 | 0;
   L35 : do {
    if ((i24 | 0) == (i1 | 0)) {
     i26 = i1;
    } else {
     i20 = i24;
     while (1) {
      i21 = HEAP32[i20 >> 2] | 0;
      if (!((i21 | 0) == (-1 | 0) | (i21 | 0) == 0)) {
       i26 = i20;
       break L35;
      }
      i21 = i20 + 16 | 0;
      if ((i21 | 0) == (i1 | 0)) {
       i26 = i1;
       break;
      } else {
       i20 = i21;
      }
     }
    }
   } while (0);
   if ((i26 | 0) == (i22 | 0)) {
    break;
   } else {
    i23 = i26;
   }
  }
 }
 if ((i25 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN3WTF8fastFreeEPv(i25);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore11CachedImage24addIncrementalDataBufferEPNS_14ResourceBufferE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 48 | 0;
 i9 = i1 | 0;
 i10 = (i2 | 0) == 0;
 if (!i10) {
  i11 = i2 + 4 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
 }
 i11 = i1 + 448 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = i2;
 do {
  if ((i12 | 0) != 0) {
   i2 = i12 + 4 | 0;
   i13 = i2 | 0;
   i14 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i14 | 0) != 0) {
    HEAP32[i13 >> 2] = i14;
    break;
   }
   i14 = i2 - 4 | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 31](i14);
  }
 } while (0);
 if (i10) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore11CachedImage11createImageEv(i1);
 i10 = i1 + 664 | 0;
 i12 = HEAP32[i10 >> 2] | 0;
 i14 = __ZNK7WebCore14ResourceBuffer12sharedBufferEv(HEAP32[i11 >> 2] | 0) | 0;
 i11 = i8 | 0;
 HEAP32[i11 >> 2] = i14;
 if ((i14 | 0) != 0) {
  i2 = i14 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 i2 = __ZN7WebCore5Image7setDataEN3WTF10PassRefPtrINS_12SharedBufferEEEb(i12, i8, 0) | 0;
 i8 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i11 = i8 | 0;
   i12 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) == 0) {
    __ZN7WebCore12SharedBufferD1Ev(i8);
    __ZN3WTF8fastFreeEPv(i8);
    break;
   } else {
    HEAP32[i11 >> 2] = i12;
    break;
   }
  }
 } while (0);
 if (!i2) {
  STACKTOP = i3;
  return;
 }
 i2 = HEAP32[i10 >> 2] | 0;
 L26 : do {
  if ((i2 | 0) != 0) {
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 48 >> 2] & 31](i5, i2);
   if ((HEAP32[i5 >> 2] | 0) < 1) {
    break;
   }
   if ((HEAP32[i5 + 4 >> 2] | 0) < 1) {
    break;
   }
   i8 = i1 + 236 | 0;
   i12 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     if ((HEAP8[i12 + 568 | 0] & 1) != 0) {
      break;
     }
     i11 = HEAP32[i10 >> 2] | 0;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 48 >> 2] & 31](i4, i11);
     i11 = HEAP32[i4 >> 2] | 0;
     i14 = HEAP32[i10 >> 2] | 0;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i14 >> 2] | 0) + 48 >> 2] & 31](i6, i14);
     i14 = Math_imul(i11 << 2, HEAP32[i6 + 4 >> 2] | 0) | 0;
     if (i14 >>> 0 > (HEAP32[(HEAP32[(HEAP32[(__ZNK7WebCore14ResourceLoader11frameLoaderEv(HEAP32[i8 >> 2] | 0) | 0) >> 2] | 0) + 36 >> 2] | 0) + 136 >> 2] | 0) >>> 0) {
      break L26;
     }
    }
   } while (0);
   __ZN7WebCore26CachedResourceClientWalkerINS_17CachedImageClientEEC2ERKN3WTF14HashCountedSetIPNS_20CachedResourceClientENS3_7PtrHashIS6_EENS3_10HashTraitsIS6_EEEE(i7, i1 + 4 | 0);
   i8 = __ZN7WebCore26CachedResourceClientWalkerINS_17CachedImageClientEE4nextEv(i7) | 0;
   if ((i8 | 0) != 0) {
    i12 = i8;
    while (1) {
     FUNCTION_TABLE_viii[HEAP32[(HEAP32[i12 >> 2] | 0) + 20 >> 2] & 31](i12, i1, 0);
     i12 = __ZN7WebCore26CachedResourceClientWalkerINS_17CachedImageClientEE4nextEv(i7) | 0;
     if ((i12 | 0) == 0) {
      break;
     }
    }
   }
   i12 = i7 + 12 | 0;
   if ((HEAP32[i12 >> 2] | 0) != 0) {
    HEAP32[i12 >> 2] = 0;
   }
   i12 = i7 + 4 | 0;
   i8 = HEAP32[i12 >> 2] | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i12 >> 2] = 0;
    HEAP32[i7 + 8 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i8);
   }
   i8 = HEAP32[(HEAP32[i10 >> 2] | 0) + 8 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i15 = 0;
   } else {
    i15 = __ZNK7WebCore12SharedBuffer4sizeEv(i8) | 0;
   }
   __ZN7WebCore14CachedResource14setEncodedSizeEj(i9, i15);
   STACKTOP = i3;
   return;
  }
 } while (0);
 i15 = i1 + 588 | 0;
 i10 = (HEAP32[i15 >> 2] | 0) >>> 11 & 7;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] & 31](i1, (i10 - 3 | 0) >>> 0 < 2 >>> 0 ? i10 : 4);
 if ((HEAP8[i15] & 16) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore11MemoryCache5evictEPNS_14CachedResourceE(__ZN7WebCore11memoryCacheEv() | 0, i9);
 STACKTOP = i3;
 return;
}
function __ZN3WTF9HashTableIPKN7WebCore17CachedImageClientENS_12KeyValuePairIS4_NSt3__14pairINS1_7IntSizeEfEEEENS_24KeyValuePairKeyExtractorISA_EENS_7PtrHashIS4_EENS_7HashMapIS4_S9_SE_NS_10HashTraitsIS4_EENSG_IS9_EEE18KeyValuePairTraitsESH_E3addINS_17HashMapTranslatorISK_SE_EERKS4_RS9_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_SA_SC_SE_SK_SH_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
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
  __ZN3WTF9HashTableIPKN7WebCore17CachedImageClientENS_12KeyValuePairIS4_NSt3__14pairINS1_7IntSizeEfEEEENS_24KeyValuePairKeyExtractorISA_EENS_7PtrHashIS4_EENS_7HashMapIS4_S9_SE_NS_10HashTraitsIS4_EENSG_IS9_EEE18KeyValuePairTraitsESH_E6rehashEiPSA_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = i8;
 i7 = i9 + ~(i9 << 15) | 0;
 i9 = (i7 >>> 10 ^ i7) * 9 & -1;
 i7 = i9 >>> 6 ^ i9;
 i9 = i7 + ~(i7 << 11) | 0;
 i7 = i9 >>> 16 ^ i9;
 i9 = i7 & i6;
 i11 = i10 + (i9 << 4) | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i13 = i11;
   i14 = 11;
  } else {
   i15 = (i7 >>> 23) + ~i7 | 0;
   i16 = i15 << 12 ^ i15;
   i15 = i16 >>> 7 ^ i16;
   i16 = i15 << 2 ^ i15;
   i15 = i16 >>> 20 ^ i16 | 1;
   i16 = 0;
   i17 = 0;
   i18 = i9;
   i19 = i11;
   i20 = i12;
   while (1) {
    if ((i20 | 0) == (i8 | 0)) {
     i14 = 8;
     break;
    }
    i21 = (i20 | 0) == -1 ? i19 : i17;
    i22 = (i16 | 0) == 0 ? i15 : i16;
    i23 = i22 + i18 & i6;
    i24 = i10 + (i23 << 4) | 0;
    i25 = HEAP32[i24 >> 2] | 0;
    if ((i25 | 0) == 0) {
     i14 = 10;
     break;
    } else {
     i16 = i22;
     i17 = i21;
     i18 = i23;
     i19 = i24;
     i20 = i25;
    }
   }
   if ((i14 | 0) == 10) {
    if ((i21 | 0) == 0) {
     i13 = i24;
     i14 = 11;
     break;
    }
    HEAP32[i21 >> 2] = 0;
    i20 = i21 + 4 | 0;
    HEAP32[i20 >> 2] = 0;
    HEAP32[i20 + 4 >> 2] = 0;
    HEAPF32[i21 + 12 >> 2] = Infinity;
    i20 = i2 + 16 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) - 1;
    i26 = i21;
    i27 = HEAP32[i3 >> 2] | 0;
    i28 = i20;
    break;
   } else if ((i14 | 0) == 8) {
    i20 = i10 + (HEAP32[i2 + 4 >> 2] << 4) | 0;
    i18 = i1;
    HEAP32[i18 >> 2] = i19;
    HEAP32[i18 + 4 >> 2] = i20;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   }
  }
 } while (0);
 if ((i14 | 0) == 11) {
  i26 = i13;
  i27 = i8;
  i28 = i2 + 16 | 0;
 }
 HEAP32[i26 >> 2] = i27;
 i27 = i4;
 i8 = i26 + 4 | 0;
 i13 = HEAP32[i27 + 4 >> 2] | 0;
 HEAP32[i8 >> 2] = HEAP32[i27 >> 2];
 HEAP32[i8 + 4 >> 2] = i13;
 HEAPF32[i26 + 12 >> 2] = +HEAPF32[i4 + 8 >> 2];
 i4 = i2 + 12 | 0;
 i13 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i13;
 i4 = i2 + 4 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i28 >> 2] | 0) + i13 << 1 | 0) < (i8 | 0)) {
  i29 = i26;
  i30 = i8;
 } else {
  if ((i8 | 0) == 0) {
   i31 = 8;
  } else {
   i28 = i8 << 1;
   i31 = (i13 * 6 & -1 | 0) < (i28 | 0) ? i8 : i28;
  }
  i28 = __ZN3WTF9HashTableIPKN7WebCore17CachedImageClientENS_12KeyValuePairIS4_NSt3__14pairINS1_7IntSizeEfEEEENS_24KeyValuePairKeyExtractorISA_EENS_7PtrHashIS4_EENS_7HashMapIS4_S9_SE_NS_10HashTraitsIS4_EENSG_IS9_EEE18KeyValuePairTraitsESH_E6rehashEiPSA_(i2, i31, i26) | 0;
  i29 = i28;
  i30 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i30 << 4) | 0;
 i30 = i1;
 HEAP32[i30 >> 2] = i29;
 HEAP32[i30 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIPKN7WebCore17CachedImageClientENS_12KeyValuePairIS4_NSt3__14pairINS1_7IntSizeEfEEEENS_24KeyValuePairKeyExtractorISA_EENS_7PtrHashIS4_EENS_7HashMapIS4_S9_SE_NS_10HashTraitsIS4_EENSG_IS9_EEE18KeyValuePairTraitsESH_E3addINS_17HashMapTranslatorISK_SE_EERKS4_S9_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_SA_SC_SE_SK_SH_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
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
  __ZN3WTF9HashTableIPKN7WebCore17CachedImageClientENS_12KeyValuePairIS4_NSt3__14pairINS1_7IntSizeEfEEEENS_24KeyValuePairKeyExtractorISA_EENS_7PtrHashIS4_EENS_7HashMapIS4_S9_SE_NS_10HashTraitsIS4_EENSG_IS9_EEE18KeyValuePairTraitsESH_E6rehashEiPSA_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = i8;
 i7 = i9 + ~(i9 << 15) | 0;
 i9 = (i7 >>> 10 ^ i7) * 9 & -1;
 i7 = i9 >>> 6 ^ i9;
 i9 = i7 + ~(i7 << 11) | 0;
 i7 = i9 >>> 16 ^ i9;
 i9 = i7 & i6;
 i11 = i10 + (i9 << 4) | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i13 = i11;
   i14 = 11;
  } else {
   i15 = (i7 >>> 23) + ~i7 | 0;
   i16 = i15 << 12 ^ i15;
   i15 = i16 >>> 7 ^ i16;
   i16 = i15 << 2 ^ i15;
   i15 = i16 >>> 20 ^ i16 | 1;
   i16 = 0;
   i17 = 0;
   i18 = i9;
   i19 = i11;
   i20 = i12;
   while (1) {
    if ((i20 | 0) == (i8 | 0)) {
     i14 = 8;
     break;
    }
    i21 = (i20 | 0) == -1 ? i19 : i17;
    i22 = (i16 | 0) == 0 ? i15 : i16;
    i23 = i22 + i18 & i6;
    i24 = i10 + (i23 << 4) | 0;
    i25 = HEAP32[i24 >> 2] | 0;
    if ((i25 | 0) == 0) {
     i14 = 10;
     break;
    } else {
     i16 = i22;
     i17 = i21;
     i18 = i23;
     i19 = i24;
     i20 = i25;
    }
   }
   if ((i14 | 0) == 10) {
    if ((i21 | 0) == 0) {
     i13 = i24;
     i14 = 11;
     break;
    }
    HEAP32[i21 >> 2] = 0;
    i20 = i21 + 4 | 0;
    HEAP32[i20 >> 2] = 0;
    HEAP32[i20 + 4 >> 2] = 0;
    HEAPF32[i21 + 12 >> 2] = Infinity;
    i20 = i2 + 16 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) - 1;
    i26 = i21;
    i27 = HEAP32[i3 >> 2] | 0;
    i28 = i20;
    break;
   } else if ((i14 | 0) == 8) {
    i20 = i10 + (HEAP32[i2 + 4 >> 2] << 4) | 0;
    i18 = i1;
    HEAP32[i18 >> 2] = i19;
    HEAP32[i18 + 4 >> 2] = i20;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   }
  }
 } while (0);
 if ((i14 | 0) == 11) {
  i26 = i13;
  i27 = i8;
  i28 = i2 + 16 | 0;
 }
 HEAP32[i26 >> 2] = i27;
 i27 = i4;
 i8 = i26 + 4 | 0;
 i13 = HEAP32[i27 + 4 >> 2] | 0;
 HEAP32[i8 >> 2] = HEAP32[i27 >> 2];
 HEAP32[i8 + 4 >> 2] = i13;
 HEAPF32[i26 + 12 >> 2] = +HEAPF32[i4 + 8 >> 2];
 i4 = i2 + 12 | 0;
 i13 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i13;
 i4 = i2 + 4 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i28 >> 2] | 0) + i13 << 1 | 0) < (i8 | 0)) {
  i29 = i26;
  i30 = i8;
 } else {
  if ((i8 | 0) == 0) {
   i31 = 8;
  } else {
   i28 = i8 << 1;
   i31 = (i13 * 6 & -1 | 0) < (i28 | 0) ? i8 : i28;
  }
  i28 = __ZN3WTF9HashTableIPKN7WebCore17CachedImageClientENS_12KeyValuePairIS4_NSt3__14pairINS1_7IntSizeEfEEEENS_24KeyValuePairKeyExtractorISA_EENS_7PtrHashIS4_EENS_7HashMapIS4_S9_SE_NS_10HashTraitsIS4_EENSG_IS9_EEE18KeyValuePairTraitsESH_E6rehashEiPSA_(i2, i31, i26) | 0;
  i29 = i28;
  i30 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i30 << 4) | 0;
 i30 = i1;
 HEAP32[i30 >> 2] = i29;
 HEAP32[i30 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore11CachedImage11createImageEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i2 = i1 + 664 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  return;
 }
 i3 = i1 + 640 | 0;
 do {
  if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[(__ZNK7WebCore20ResourceResponseBase8mimeTypeEv(i1 + 272 | 0) | 0) >> 2] | 0, H_BASE + 16 | 0) | 0) {
   i4 = __ZN3WTF10fastMallocEj(40) | 0;
   i5 = i4;
   __ZN7WebCore8SVGImageC1EPNS_13ImageObserverE(i5, i3);
   i6 = __ZN3WTF10fastMallocEj(24) | 0;
   __ZN7WebCore13SVGImageCacheC1EPNS_8SVGImageE(i6, i5);
   i5 = i1 + 668 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = i6;
   if ((i7 | 0) != 0) {
    __ZN7WebCore13SVGImageCacheD1Ev(i7);
    __ZN3WTF8fastFreeEPv(i7);
   }
   i7 = i4;
   i4 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = i7;
   if ((i4 | 0) == 0) {
    i8 = i7;
    break;
   }
   i7 = i4 + 4 | 0;
   i4 = i7 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i4 >> 2] = i6;
    i9 = 15;
    break;
   }
   i6 = i7 - 4 | 0;
   if ((i6 | 0) == 0) {
    i9 = 15;
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
   i9 = 15;
  } else {
   i6 = __ZN3WTF10fastMallocEj(152) | 0;
   __ZN7WebCore11BitmapImageC1EPNS_13ImageObserverE(i6, i3);
   i7 = i6;
   i6 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = i7;
   if ((i6 | 0) == 0) {
    i8 = i7;
    break;
   }
   i7 = i6 + 4 | 0;
   i6 = i7 | 0;
   i4 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i6 >> 2] = i4;
    i9 = 15;
    break;
   }
   i4 = i7 - 4 | 0;
   if ((i4 | 0) == 0) {
    i9 = 15;
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
   i9 = 15;
  }
 } while (0);
 if ((i9 | 0) == 15) {
  i8 = HEAP32[i2 >> 2] | 0;
 }
 if ((i8 | 0) == 0) {
  return;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 32 >> 2] & 15](i8) | 0) {
  i8 = i1 + 644 | 0;
  i2 = HEAP32[i8 >> 2] | 0;
  i9 = i1 + 648 | 0;
  i3 = HEAP32[i9 >> 2] | 0;
  i4 = i2 + (i3 << 4) | 0;
  L29 : do {
   if ((HEAP32[i1 + 656 >> 2] | 0) == 0) {
    i10 = i2;
   } else {
    L31 : do {
     if ((i3 | 0) == 0) {
      i11 = i2;
     } else {
      i7 = i2;
      while (1) {
       i6 = HEAP32[i7 >> 2] | 0;
       if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
        i11 = i7;
        break L31;
       }
       i6 = i7 + 16 | 0;
       if ((i6 | 0) == (i4 | 0)) {
        i10 = i2;
        break L29;
       } else {
        i7 = i6;
       }
      }
     }
    } while (0);
    if ((i11 | 0) == (i4 | 0)) {
     i10 = i2;
     break;
    } else {
     i12 = i11;
    }
    while (1) {
     __ZN7WebCore11CachedImage27setContainerSizeForRendererEPKNS_17CachedImageClientERKNS_7IntSizeEf(i1, HEAP32[i12 >> 2] | 0, i12 + 4 | 0, +HEAPF32[i12 + 12 >> 2]);
     i7 = i12 + 16 | 0;
     L38 : do {
      if ((i7 | 0) == (i4 | 0)) {
       i13 = i4;
      } else {
       i6 = i7;
       while (1) {
        i5 = HEAP32[i6 >> 2] | 0;
        if (!((i5 | 0) == (-1 | 0) | (i5 | 0) == 0)) {
         i13 = i6;
         break L38;
        }
        i5 = i6 + 16 | 0;
        if ((i5 | 0) == (i4 | 0)) {
         i13 = i4;
         break;
        } else {
         i6 = i5;
        }
       }
      }
     } while (0);
     i7 = HEAP32[i8 >> 2] | 0;
     if ((i13 | 0) == (i7 + (HEAP32[i9 >> 2] << 4) | 0)) {
      i10 = i7;
      break;
     } else {
      i12 = i13;
     }
    }
   }
  } while (0);
  i14 = i10;
  i15 = i1 + 644 | 0;
 } else {
  i10 = i1 + 644 | 0;
  i14 = HEAP32[i10 >> 2] | 0;
  i15 = i10;
 }
 if ((i14 | 0) == 0) {
  return;
 }
 __ZN3WTF8fastFreeEPv(i14);
 _memset(i15 | 0, 0, 16) | 0;
 return;
}
function __ZN3WTF9HashTableIPKN7WebCore17CachedImageClientENS_12KeyValuePairIS4_NSt3__14pairINS1_7IntSizeEfEEEENS_24KeyValuePairKeyExtractorISA_EENS_7PtrHashIS4_EENS_7HashMapIS4_S9_SE_NS_10HashTraitsIS4_EENSG_IS9_EEE18KeyValuePairTraitsESH_E6rehashEiPSA_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 i8 = __ZN3WTF10fastMallocEj(i2 << 4) | 0;
 if ((i2 | 0) > 0) {
  i9 = 0;
  while (1) {
   HEAP32[i8 + (i9 << 4) >> 2] = 0;
   i10 = i8 + (i9 << 4) + 4 | 0;
   HEAP32[i10 >> 2] = 0;
   HEAP32[i10 + 4 >> 2] = 0;
   HEAPF32[i8 + (i9 << 4) + 12 >> 2] = Infinity;
   i9 = i9 + 1 | 0;
   if ((i9 | 0) >= (i2 | 0)) {
    break;
   }
  }
 }
 HEAP32[i6 >> 2] = i8;
 if ((i5 | 0) == 0) {
  i11 = 0;
  i12 = i1 + 16 | 0;
  HEAP32[i12 >> 2] = 0;
  i13 = i7;
  __ZN3WTF8fastFreeEPv(i13);
  return i11 | 0;
 } else {
  i14 = 0;
  i15 = 0;
 }
 while (1) {
  i8 = i7 + (i14 << 4) | 0;
  i2 = HEAP32[i8 >> 2] | 0;
  i9 = i2;
  if ((i9 | 0) == (-1 | 0) | (i9 | 0) == 0) {
   i16 = i15;
  } else {
   i10 = HEAP32[i6 >> 2] | 0;
   i17 = HEAP32[i4 >> 2] | 0;
   i18 = i9 + ~(i9 << 15) | 0;
   i9 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i9 >>> 6 ^ i9;
   i9 = i18 + ~(i18 << 11) | 0;
   i18 = i9 >>> 16 ^ i9;
   i9 = i17 & i18;
   i19 = i10 + (i9 << 4) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L11 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 7;
    } else {
     i24 = (i18 >>> 23) + ~i18 | 0;
     i25 = i24 << 12 ^ i24;
     i24 = i25 >>> 7 ^ i25;
     i25 = i24 << 2 ^ i24;
     i24 = i25 >>> 20 ^ i25 | 1;
     i25 = 0;
     i26 = 0;
     i27 = i9;
     i28 = i19;
     i29 = i20;
     while (1) {
      if ((i29 | 0) == (i2 | 0)) {
       i30 = i28;
       break L11;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i10 + (i33 << 4) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 7;
       break;
      } else {
       i25 = i31;
       i26 = i32;
       i27 = i33;
       i28 = i34;
       i29 = i35;
      }
     }
    }
   } while (0);
   if ((i23 | 0) == 7) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   i10 = i30;
   i17 = i8;
   HEAP32[i10 >> 2] = HEAP32[i17 >> 2];
   HEAP32[i10 + 4 >> 2] = HEAP32[i17 + 4 >> 2];
   HEAP32[i10 + 8 >> 2] = HEAP32[i17 + 8 >> 2];
   HEAP32[i10 + 12 >> 2] = HEAP32[i17 + 12 >> 2];
   i16 = (i8 | 0) == (i3 | 0) ? i30 : i15;
  }
  i17 = i14 + 1 | 0;
  if ((i17 | 0) == (i5 | 0)) {
   i11 = i16;
   break;
  } else {
   i14 = i17;
   i15 = i16;
  }
 }
 i12 = i1 + 16 | 0;
 HEAP32[i12 >> 2] = 0;
 i13 = i7;
 __ZN3WTF8fastFreeEPv(i13);
 return i11 | 0;
}
function __ZN7WebCore11CachedImage20imageSizeForRendererEPKNS_12RenderObjectEfNS0_8SizeTypeE(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, d18 = +0, d19 = +0, i20 = 0, i21 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i2 + 664 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  STACKTOP = i6;
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 48 >> 2] & 31](i7, i12);
 i12 = HEAP32[i7 >> 2] | 0;
 i13 = HEAP32[i7 + 4 >> 2] | 0;
 i7 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i3 | 0) == 0 | (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 12 >> 2] & 15](i7) | 0) ^ 1) {
   i14 = 6;
  } else {
   if ((__ZNK7WebCore12RenderObject29shouldRespectImageOrientationEv(i3) | 0) != 1) {
    i14 = 6;
    break;
   }
   i15 = HEAP32[i11 >> 2] | 0;
   HEAP32[i9 >> 2] = 0;
   HEAP32[i9 + 4 >> 2] = 1;
   __ZNK7WebCore11BitmapImage25sizeRespectingOrientationENS_27ImageOrientationDescriptionE(i8, i15, i9);
   i16 = HEAP32[i8 >> 2] | 0;
   i17 = HEAP32[i8 + 4 >> 2] | 0;
  }
 } while (0);
 do {
  if ((i14 | 0) == 6) {
   i8 = HEAP32[i11 >> 2] | 0;
   if (!((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] & 15](i8) | 0) & (i5 | 0) == 0)) {
    i16 = i12;
    i17 = i13;
    break;
   }
   __ZNK7WebCore13SVGImageCache20imageSizeForRendererEPKNS_12RenderObjectE(i10, HEAP32[i2 + 668 >> 2] | 0, i3);
   i16 = HEAP32[i10 >> 2] | 0;
   i17 = HEAP32[i10 + 4 >> 2] | 0;
  }
 } while (0);
 if (d4 == +1) {
  i10 = i1;
  HEAP32[i10 >> 2] = i16;
  HEAP32[i10 + 4 >> 2] = i17;
  STACKTOP = i6;
  return;
 }
 i10 = HEAP32[i11 >> 2] | 0;
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 36 >> 2] & 15](i10) | 0;
 i10 = HEAP32[i11 >> 2] | 0;
 i11 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 40 >> 2] & 15](i10) | 0;
 d18 = i11 ? +1 : d4;
 i11 = (i16 | 0) > 0 | 0;
 i10 = (i17 | 0) > 0 | 0;
 d19 = +(i16 | 0) * (i3 ? +1 : d4);
 do {
  if (d19 < +2147483647) {
   if (d19 <= +-2147483648) {
    i20 = -2147483648;
    break;
   }
   i20 = ~~d19;
  } else {
   i20 = 2147483647;
  }
 } while (0);
 d19 = +(i17 | 0) * d18;
 do {
  if (d19 < +2147483647) {
   if (d19 <= +-2147483648) {
    i21 = -2147483648;
    break;
   }
   i21 = ~~d19;
  } else {
   i21 = 2147483647;
  }
 } while (0);
 i17 = i1;
 HEAP32[i17 >> 2] = (i20 | 0) < (i11 | 0) ? i11 : i20;
 HEAP32[i17 + 4 >> 2] = (i21 | 0) < (i10 | 0) ? i10 : i21;
 STACKTOP = i6;
 return;
}
function __ZN7WebCore11CachedImage30resumeAnimatingImagesForLoaderEPNS_20CachedResourceLoaderE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 i5 = HEAP32[i1 + 28 >> 2] | 0;
 i6 = i4 + (i5 << 3) | 0;
 if ((HEAP32[i1 + 36 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 L4 : do {
  if ((i5 | 0) == 0) {
   i7 = i4;
  } else {
   i1 = i4;
   while (1) {
    i8 = HEAP32[i1 >> 2] | 0;
    if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
     i7 = i1;
     break L4;
    }
    i1 = i1 + 8 | 0;
    if ((i1 | 0) == (i6 | 0)) {
     break;
    }
   }
   STACKTOP = i2;
   return;
  }
 } while (0);
 if ((i7 | 0) == (i6 | 0)) {
  STACKTOP = i2;
  return;
 }
 i4 = i3 | 0;
 i5 = i7;
 L13 : while (1) {
  i7 = i5 + 4 | 0;
  i1 = HEAP32[i7 >> 2] | 0;
  do {
   if ((i1 | 0) != 0) {
    if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 56 >> 2] & 15](i1) | 0)) {
     break;
    }
    i8 = HEAP32[i7 >> 2] | 0;
    i9 = i8;
    i10 = HEAP32[i8 + 664 >> 2] | 0;
    if ((i10 | 0) == 0) {
     break;
    }
    do {
     if ((((HEAP32[i8 + 588 >> 2] | 0) >>> 11 & 7) - 3 | 0) >>> 0 < 2 >>> 0) {
      if ((HEAP8[i8 + 672 | 0] & 1) == 0) {
       i11 = i10;
       break;
      }
      if (HEAP8[H_BASE + 240 | 0] | 0) {
       i11 = HEAP32[H_BASE + 256 >> 2] | 0;
       break;
      } else {
       __ZN7WebCore5Image20loadPlatformResourceEPKc(i3, H_BASE + 32 | 0);
       i12 = HEAP32[i4 >> 2] | 0;
       HEAP32[i4 >> 2] = 0;
       HEAP32[H_BASE + 256 >> 2] = i12;
       HEAP8[H_BASE + 240 | 0] = 1;
       i11 = i12;
       break;
      }
     } else {
      i11 = i10;
     }
    } while (0);
    if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 12 >> 2] & 15](i11) | 0)) {
     break;
    }
    if (!(__ZN7WebCore11BitmapImage10canAnimateEv(i11) | 0)) {
     break;
    }
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i8 >> 2] | 0) + 112 >> 2] & 31](i9, i11);
   }
  } while (0);
  i7 = i5 + 8 | 0;
  if ((i7 | 0) == (i6 | 0)) {
   i13 = 27;
   break;
  } else {
   i14 = i7;
  }
  while (1) {
   i7 = HEAP32[i14 >> 2] | 0;
   if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
    break;
   }
   i7 = i14 + 8 | 0;
   if ((i7 | 0) == (i6 | 0)) {
    i13 = 26;
    break L13;
   } else {
    i14 = i7;
   }
  }
  if ((i14 | 0) == (i6 | 0)) {
   i13 = 25;
   break;
  } else {
   i5 = i14;
  }
 }
 if ((i13 | 0) == 25) {
  STACKTOP = i2;
  return;
 } else if ((i13 | 0) == 26) {
  STACKTOP = i2;
  return;
 } else if ((i13 | 0) == 27) {
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore11CachedImage5errorENS_14CachedResource6StatusE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 236 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   if ((HEAP8[i5 + 568 | 0] & 1) != 0) {
    break;
   }
   i6 = HEAP32[(__ZNK7WebCore14ResourceLoader11frameLoaderEv(i5) | 0) + 4 >> 2] | 0;
   i7 = HEAP32[(HEAP32[i6 >> 2] | 0) + 508 >> 2] | 0;
   i8 = __ZNK7WebCore19ResourceRequestBase3urlEv(i1 + 48 | 0) | 0;
   HEAP8[i1 + 672 | 0] = (FUNCTION_TABLE_iii[i7 & 15](i6, i8) | 0) & 1;
  }
 } while (0);
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 68 >> 2] & 31](i1);
 i5 = i1 + 664 | 0;
 i8 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   HEAP32[i5 >> 2] = 0;
  } else {
   HEAP32[i8 + 12 >> 2] = 0;
   i6 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i6 | 0) == 0) {
    break;
   }
   i7 = i6 + 4 | 0;
   i6 = i7 | 0;
   i9 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i6 >> 2] = i9;
    break;
   }
   i9 = i7 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 31](i9);
  }
 } while (0);
 i5 = i1 + 644 | 0;
 i8 = HEAP32[i5 >> 2] | 0;
 if ((i8 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i8);
  _memset(i5 | 0, 0, 16) | 0;
 }
 i5 = i1 | 0;
 __ZN7WebCore14CachedResource14setEncodedSizeEj(i5, 0);
 __ZN7WebCore14CachedResource5errorENS0_6StatusE(i5, i2);
 __ZN7WebCore26CachedResourceClientWalkerINS_17CachedImageClientEEC2ERKN3WTF14HashCountedSetIPNS_20CachedResourceClientENS3_7PtrHashIS6_EENS3_10HashTraitsIS6_EEEE(i4, i1 + 4 | 0);
 i2 = __ZN7WebCore26CachedResourceClientWalkerINS_17CachedImageClientEE4nextEv(i4) | 0;
 if ((i2 | 0) != 0) {
  i5 = i2;
  while (1) {
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i5 >> 2] | 0) + 20 >> 2] & 31](i5, i1, 0);
   i5 = __ZN7WebCore26CachedResourceClientWalkerINS_17CachedImageClientEE4nextEv(i4) | 0;
   if ((i5 | 0) == 0) {
    break;
   }
  }
 }
 i5 = i4 + 12 | 0;
 if ((HEAP32[i5 >> 2] | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
 }
 i5 = i4 + 4 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i5 >> 2] = 0;
 HEAP32[i4 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i1);
 STACKTOP = i3;
 return;
}
function __ZN3WTF7HashMapIPKN7WebCore17CachedImageClientENSt3__14pairINS1_7IntSizeEfEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSB_IS8_EEE6removeERKS4_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = i4 << 4 | 0;
  i6 = 0;
  i7 = i4;
 } else {
  i4 = HEAP32[i1 + 8 >> 2] | 0;
  i8 = HEAP32[i2 >> 2] | 0;
  i2 = i8;
  i9 = i2 + ~(i2 << 15) | 0;
  i2 = (i9 >>> 10 ^ i9) * 9 & -1;
  i9 = i2 >>> 6 ^ i2;
  i2 = i9 + ~(i9 << 11) | 0;
  i9 = i2 >>> 16 ^ i2;
  i2 = i9 & i4;
  i10 = i3 + (i2 << 4) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  L4 : do {
   if ((i11 | 0) == (i8 | 0)) {
    i12 = i10;
   } else {
    i13 = (i9 >>> 23) + ~i9 | 0;
    i14 = i13 << 12 ^ i13;
    i13 = i14 >>> 7 ^ i14;
    i14 = i13 << 2 ^ i13;
    i13 = i14 >>> 20 ^ i14 | 1;
    i14 = 0;
    i15 = i2;
    i16 = i11;
    while (1) {
     if ((i16 | 0) == 0) {
      i12 = 0;
      break L4;
     }
     i17 = (i14 | 0) == 0 ? i13 : i14;
     i18 = i17 + i15 & i4;
     i19 = i3 + (i18 << 4) | 0;
     i20 = HEAP32[i19 >> 2] | 0;
     if ((i20 | 0) == (i8 | 0)) {
      i12 = i19;
      break;
     } else {
      i14 = i17;
      i15 = i18;
      i16 = i20;
     }
    }
   }
  } while (0);
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = (i12 | 0) == 0 ? i3 + (i8 << 4) | 0 : i12;
  i6 = i3;
  i7 = i8;
 }
 if ((i5 | 0) == (i6 + (i7 << 4) | 0)) {
  i21 = 0;
  return i21 | 0;
 }
 HEAP32[i5 >> 2] = -1;
 i5 = i1 + 16 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = i1 + 12 | 0;
 i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i7;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if (!((i7 * 6 & -1 | 0) < (i5 | 0) & (i5 | 0) > 8)) {
  i21 = 1;
  return i21 | 0;
 }
 __ZN3WTF9HashTableIPKN7WebCore17CachedImageClientENS_12KeyValuePairIS4_NSt3__14pairINS1_7IntSizeEfEEEENS_24KeyValuePairKeyExtractorISA_EENS_7PtrHashIS4_EENS_7HashMapIS4_S9_SE_NS_10HashTraitsIS4_EENSG_IS9_EEE18KeyValuePairTraitsESH_E6rehashEiPSA_(i1 | 0, (i5 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
}
function __ZN7WebCore26CachedResourceClientWalkerINS_17CachedImageClientEEC2ERKN3WTF14HashCountedSetIPNS_20CachedResourceClientENS3_7PtrHashIS6_EENS3_10HashTraitsIS6_EEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 HEAP32[i1 >> 2] = i2;
 i3 = i2 + 12 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i1 + 4 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i1 + 8 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i1 + 12 | 0;
 HEAP32[i7 >> 2] = i4;
 do {
  if ((i4 | 0) != 0) {
   if (i4 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   } else {
    i8 = __ZN3WTF18fastMallocGoodSizeEj(i4 << 2) | 0;
    HEAP32[i6 >> 2] = i8 >>> 2;
    HEAP32[i5 >> 2] = __ZN3WTF10fastMallocEj(i8) | 0;
    break;
   }
  }
 } while (0);
 HEAP32[i1 + 16 >> 2] = 0;
 i1 = HEAP32[i2 >> 2] | 0;
 i6 = HEAP32[i2 + 4 >> 2] | 0;
 i2 = i1 + (i6 << 3) | 0;
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  return;
 }
 L10 : do {
  if ((i6 | 0) == 0) {
   i9 = i1;
  } else {
   i3 = i1;
   while (1) {
    i4 = HEAP32[i3 >> 2] | 0;
    if (!((i4 | 0) == (-1 | 0) | (i4 | 0) == 0)) {
     i9 = i3;
     break L10;
    }
    i3 = i3 + 8 | 0;
    if ((i3 | 0) == (i2 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i9 | 0) == (i2 | 0)) {
  return;
 } else {
  i10 = i9;
  i11 = 0;
 }
 L18 : while (1) {
  i9 = i11 + 1 | 0;
  if ((HEAP32[i7 >> 2] | 0) >>> 0 <= i11 >>> 0) {
   i12 = 11;
   break;
  }
  HEAP32[(HEAP32[i5 >> 2] | 0) + (i11 << 2) >> 2] = HEAP32[i10 >> 2];
  i1 = i10 + 8 | 0;
  if ((i1 | 0) == (i2 | 0)) {
   i12 = 17;
   break;
  } else {
   i13 = i1;
  }
  while (1) {
   i1 = HEAP32[i13 >> 2] | 0;
   if (!((i1 | 0) == (-1 | 0) | (i1 | 0) == 0)) {
    break;
   }
   i1 = i13 + 8 | 0;
   if ((i1 | 0) == (i2 | 0)) {
    i12 = 22;
    break L18;
   } else {
    i13 = i1;
   }
  }
  if ((i13 | 0) == (i2 | 0)) {
   i12 = 19;
   break;
  } else {
   i10 = i13;
   i11 = i9;
  }
 }
 if ((i12 | 0) == 11) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i12 | 0) == 22) {
  return;
 } else if ((i12 | 0) == 17) {
  return;
 } else if ((i12 | 0) == 19) {
  return;
 }
}
function __ZN7WebCore15ResourceRequestC2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i4);
 i6 = HEAP32[i5 >> 2] | 0;
 HEAP32[i1 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i7 = i6 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = HEAP8[i4 + 4 | 0] | 0;
 i6 = i1 + 4 | 0;
 HEAP8[i6] = HEAP8[i6] & -4 | i7 & 1 | i7 & 2;
 HEAP32[i1 + 8 >> 2] = HEAP32[i4 + 8 >> 2];
 HEAP32[i1 + 12 >> 2] = HEAP32[i4 + 12 >> 2];
 HEAP32[i1 + 16 >> 2] = HEAP32[i4 + 16 >> 2];
 HEAP32[i1 + 20 >> 2] = HEAP32[i4 + 20 >> 2];
 HEAP32[i1 + 24 >> 2] = HEAP32[i4 + 24 >> 2];
 HEAP32[i1 + 28 >> 2] = HEAP32[i4 + 28 >> 2];
 HEAP32[i1 + 32 >> 2] = HEAP32[i4 + 32 >> 2];
 HEAP32[i1 + 36 >> 2] = HEAP32[i4 + 36 >> 2];
 HEAP32[i1 + 40 >> 2] = HEAP32[i4 + 40 >> 2];
 HEAP32[i1 + 44 >> 2] = HEAP32[i4 + 44 >> 2];
 HEAP32[i1 + 48 >> 2] = 0;
 HEAPF64[i1 + 56 >> 3] = +HEAPF64[__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE >> 3];
 i4 = i1 + 64 | 0;
 HEAP32[i4 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i4);
 HEAP32[i3 >> 2] = H_BASE + 8;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i1 + 112 | 0, i3);
 __ZN7WebCore13HTTPHeaderMapC1Ev(i1 + 116 | 0);
 _memset(i1 + 136 | 0, 0, 16) | 0;
 HEAP8[i1 + 152 | 0] = 11;
 HEAP32[i1 + 156 >> 2] = 1;
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i8 = i1 + 160 | 0;
  i9 = i1 + 180 | 0;
  i10 = i8;
  _memset(i10 | 0, 0, 19) | 0;
  HEAP32[i9 >> 2] = 15;
  STACKTOP = i2;
  return;
 }
 i5 = i3 | 0;
 i4 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  i8 = i1 + 160 | 0;
  i9 = i1 + 180 | 0;
  i10 = i8;
  _memset(i10 | 0, 0, 19) | 0;
  HEAP32[i9 >> 2] = 15;
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i5 >> 2] = i4;
  i8 = i1 + 160 | 0;
  i9 = i1 + 180 | 0;
  i10 = i8;
  _memset(i10 | 0, 0, 19) | 0;
  HEAP32[i9 >> 2] = 15;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore26CachedResourceClientWalkerINS_17CachedImageClientEE4nextEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 i3 = i1 + 16 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if (i4 >>> 0 >= i2 >>> 0) {
  i5 = 0;
  return i5 | 0;
 }
 i6 = i1 + 4 | 0;
 i7 = i1 | 0;
 i1 = i4;
 L4 : while (1) {
  i4 = i1 + 1 | 0;
  HEAP32[i3 >> 2] = i4;
  if (i2 >>> 0 <= i1 >>> 0) {
   i8 = 4;
   break;
  }
  i9 = HEAP32[(HEAP32[i6 >> 2] | 0) + (i1 << 2) >> 2] | 0;
  i10 = HEAP32[i7 >> 2] | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  L7 : do {
   if ((i11 | 0) != 0) {
    i12 = HEAP32[i10 + 8 >> 2] | 0;
    i13 = i9;
    i14 = i13 + ~(i13 << 15) | 0;
    i13 = (i14 >>> 10 ^ i14) * 9 & -1;
    i14 = i13 >>> 6 ^ i13;
    i13 = i14 + ~(i14 << 11) | 0;
    i14 = i13 >>> 16 ^ i13;
    i13 = i12 & i14;
    i15 = i11 + (i13 << 3) | 0;
    i16 = HEAP32[i15 >> 2] | 0;
    if ((i16 | 0) == (i9 | 0)) {
     i17 = i15;
    } else {
     i15 = (i14 >>> 23) + ~i14 | 0;
     i14 = i15 << 12 ^ i15;
     i15 = i14 >>> 7 ^ i14;
     i14 = i15 << 2 ^ i15;
     i15 = i14 >>> 20 ^ i14 | 1;
     i14 = 0;
     i18 = i13;
     i13 = i16;
     while (1) {
      if ((i13 | 0) == 0) {
       break L7;
      }
      i16 = (i14 | 0) == 0 ? i15 : i14;
      i19 = i16 + i18 & i12;
      i20 = i11 + (i19 << 3) | 0;
      i21 = HEAP32[i20 >> 2] | 0;
      if ((i21 | 0) == (i9 | 0)) {
       i17 = i20;
       break;
      } else {
       i14 = i16;
       i18 = i19;
       i13 = i21;
      }
     }
    }
    if ((i17 | 0) != 0) {
     i8 = 12;
     break L4;
    }
   }
  } while (0);
  if (i4 >>> 0 < i2 >>> 0) {
   i1 = i4;
  } else {
   i5 = 0;
   i8 = 16;
   break;
  }
 }
 if ((i8 | 0) == 12) {
  i5 = i9;
  return i5 | 0;
 } else if ((i8 | 0) == 4) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i8 | 0) == 16) {
  return i5 | 0;
 }
 return 0;
}
function __ZN7WebCore11CachedImage12didAddClientEPNS_20CachedResourceClientE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 | 0;
 i7 = i1 + 448 | 0;
 i8 = i1 + 664 | 0;
 do {
  if ((HEAP32[i7 >> 2] | 0) != 0) {
   if ((HEAP32[i8 >> 2] | 0) != 0) {
    break;
   }
   if ((((HEAP32[i1 + 588 >> 2] | 0) >>> 11 & 7) - 3 | 0) >>> 0 < 2 >>> 0) {
    break;
   }
   __ZN7WebCore11CachedImage11createImageEv(i1);
   i9 = HEAP32[i8 >> 2] | 0;
   i10 = __ZNK7WebCore14ResourceBuffer12sharedBufferEv(HEAP32[i7 >> 2] | 0) | 0;
   i11 = i5 | 0;
   HEAP32[i11 >> 2] = i10;
   if ((i10 | 0) != 0) {
    i12 = i10 | 0;
    HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
   }
   __ZN7WebCore5Image7setDataEN3WTF10PassRefPtrINS_12SharedBufferEEEb(i9, i5, 1) | 0;
   i9 = HEAP32[i11 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   i11 = i9 | 0;
   i12 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) == 0) {
    __ZN7WebCore12SharedBufferD1Ev(i9);
    __ZN3WTF8fastFreeEPv(i9);
    break;
   } else {
    HEAP32[i11 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i8 >> 2] | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore14CachedResource12didAddClientEPNS_20CachedResourceClientE(i6, i2);
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 48 >> 2] & 31](i4, i5);
 if ((HEAP32[i4 >> 2] | 0) < 1) {
  __ZN7WebCore14CachedResource12didAddClientEPNS_20CachedResourceClientE(i6, i2);
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i4 + 4 >> 2] | 0) < 1) {
  __ZN7WebCore14CachedResource12didAddClientEPNS_20CachedResourceClientE(i6, i2);
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 31](i2, i1, 0);
 __ZN7WebCore14CachedResource12didAddClientEPNS_20CachedResourceClientE(i6, i2);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore19ResourceRequestBaseD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = HEAP32[i1 + 148 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore8FormDataD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = i1 + 144 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i3 = i1 + 136 | 0;
 if ((i4 | 0) != 0) {
  i5 = HEAP32[i3 >> 2] | 0;
  i6 = i5 + (i4 << 2) | 0;
  i4 = i5;
  while (1) {
   i5 = HEAP32[i4 >> 2] | 0;
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
   i4 = i4 + 4 | 0;
   if ((i4 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 140 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN7WebCore13HTTPHeaderMapD1Ev(i1 + 116 | 0);
 i2 = HEAP32[i1 + 112 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i6 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 64 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i6 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 >> 2] | 0;
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
function __ZN7WebCore11CachedImage27setContainerSizeForRendererEPKNS_17CachedImageClientERKNS_7IntSizeEf(i1, i2, i3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 24 | 0;
 HEAP32[i6 >> 2] = i2;
 if ((HEAP32[i3 >> 2] | 0) < 1) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i3 + 4 >> 2] | 0) < 1) {
  STACKTOP = i5;
  return;
 }
 i9 = i1 + 664 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i11 = i3;
  i12 = i7;
  i13 = HEAP32[i11 + 4 >> 2] | 0;
  HEAP32[i12 >> 2] = HEAP32[i11 >> 2];
  HEAP32[i12 + 4 >> 2] = i13;
  i13 = i7 + 8 | 0;
  HEAPF32[i13 >> 2] = d4;
  __ZN3WTF9HashTableIPKN7WebCore17CachedImageClientENS_12KeyValuePairIS4_NSt3__14pairINS1_7IntSizeEfEEEENS_24KeyValuePairKeyExtractorISA_EENS_7PtrHashIS4_EENS_7HashMapIS4_S9_SE_NS_10HashTraitsIS4_EENSG_IS9_EEE18KeyValuePairTraitsESH_E3addINS_17HashMapTranslatorISK_SE_EERKS4_S9_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_SA_SC_SE_SK_SH_EEEEOT0_OT1_(i8, i1 + 644 | 0, i6, i7);
  if ((HEAP8[i8 + 8 | 0] & 1) != 0) {
   STACKTOP = i5;
   return;
  }
  i7 = HEAP32[i8 >> 2] | 0;
  i8 = i7 + 4 | 0;
  i6 = HEAP32[i12 + 4 >> 2] | 0;
  HEAP32[i8 >> 2] = HEAP32[i12 >> 2];
  HEAP32[i8 + 4 >> 2] = i6;
  HEAPF32[i7 + 12 >> 2] = +HEAPF32[i13 >> 2];
  STACKTOP = i5;
  return;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 8 >> 2] & 15](i10) | 0) {
  __ZN7WebCore13SVGImageCache27setContainerSizeForRendererEPKNS_17CachedImageClientERKNS_7IntSizeEf(HEAP32[i1 + 668 >> 2] | 0, i2, i3, d4);
  STACKTOP = i5;
  return;
 } else {
  i2 = HEAP32[i9 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 28 >> 2] & 31](i2, i3);
  STACKTOP = i5;
  return;
 }
}
function runPostSets() {
 HEAP32[H_BASE + 72 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_viii + 16;
}
function __ZN7WebCore19ResourceRequestBaseC2ERKNS_3URLENS_26ResourceRequestCachePolicyE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i7 = i6 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = i2 + 4 | 0;
 i6 = i1 + 4 | 0;
 i8 = HEAP8[i6] & -2 | HEAP8[i7] & 1;
 HEAP8[i6] = i8;
 HEAP8[i6] = i8 & -3 | HEAP8[i7] & 2;
 HEAP32[i1 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i1 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 HEAP32[i1 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
 HEAP32[i1 + 20 >> 2] = HEAP32[i2 + 20 >> 2];
 HEAP32[i1 + 24 >> 2] = HEAP32[i2 + 24 >> 2];
 HEAP32[i1 + 28 >> 2] = HEAP32[i2 + 28 >> 2];
 HEAP32[i1 + 32 >> 2] = HEAP32[i2 + 32 >> 2];
 HEAP32[i1 + 36 >> 2] = HEAP32[i2 + 36 >> 2];
 HEAP32[i1 + 40 >> 2] = HEAP32[i2 + 40 >> 2];
 HEAP32[i1 + 44 >> 2] = HEAP32[i2 + 44 >> 2];
 HEAP32[i1 + 48 >> 2] = i3;
 HEAPF64[i1 + 56 >> 3] = +HEAPF64[__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE >> 3];
 i3 = i1 + 64 | 0;
 HEAP32[i3 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i3);
 HEAP32[i5 >> 2] = H_BASE + 8;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i1 + 112 | 0, i5);
 __ZN7WebCore13HTTPHeaderMapC1Ev(i1 + 116 | 0);
 _memset(i1 + 136 | 0, 0, 16) | 0;
 HEAP8[i1 + 152 | 0] = 11;
 HEAP32[i1 + 156 >> 2] = 1;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11CachedImageD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 72;
 HEAP32[i1 + 640 >> 2] = H_BASE + 200;
 i2 = i1 + 664 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   HEAP32[i2 >> 2] = 0;
  } else {
   HEAP32[i3 + 12 >> 2] = 0;
   i4 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i5 = i4 + 4 | 0;
   i4 = i5 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i4 >> 2] = i6;
    break;
   }
   i6 = i5 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
  }
 } while (0);
 i3 = i1 + 668 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i6 | 0) != 0) {
  __ZN7WebCore13SVGImageCacheD1Ev(i6);
  __ZN3WTF8fastFreeEPv(i6);
 }
 i6 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i2 = i6 + 4 | 0;
   i3 = i2 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i3 >> 2] = i5;
    break;
   }
   i5 = i2 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  }
 } while (0);
 i6 = HEAP32[i1 + 644 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = i1 | 0;
  __ZN7WebCore14CachedResourceD2Ev(i7);
  return;
 }
 __ZN3WTF8fastFreeEPv(i6);
 i7 = i1 | 0;
 __ZN7WebCore14CachedResourceD2Ev(i7);
 return;
}
function __ZN7WebCore11CachedImageD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 72;
 HEAP32[i1 + 640 >> 2] = H_BASE + 200;
 i2 = i1 + 664 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   HEAP32[i2 >> 2] = 0;
  } else {
   HEAP32[i3 + 12 >> 2] = 0;
   i4 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i5 = i4 + 4 | 0;
   i4 = i5 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i4 >> 2] = i6;
    break;
   }
   i6 = i5 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
  }
 } while (0);
 i3 = i1 + 668 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i6 | 0) != 0) {
  __ZN7WebCore13SVGImageCacheD1Ev(i6);
  __ZN3WTF8fastFreeEPv(i6);
 }
 i6 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i2 = i6 + 4 | 0;
   i3 = i2 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i3 >> 2] = i5;
    break;
   }
   i5 = i2 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  }
 } while (0);
 i6 = HEAP32[i1 + 644 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = i1 | 0;
  __ZN7WebCore14CachedResourceD2Ev(i7);
  return;
 }
 __ZN3WTF8fastFreeEPv(i6);
 i7 = i1 | 0;
 __ZN7WebCore14CachedResourceD2Ev(i7);
 return;
}
function __ZN7WebCore11CachedImage13isOriginCleanEPNS_14SecurityOriginE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 do {
  if ((((HEAP32[i1 + 588 >> 2] | 0) >>> 11 & 7) - 3 | 0) >>> 0 < 2 >>> 0) {
   if ((HEAP8[i1 + 672 | 0] & 1) == 0) {
    i5 = 6;
    break;
   }
   if (HEAP8[H_BASE + 240 | 0] | 0) {
    i6 = HEAP32[H_BASE + 256 >> 2] | 0;
    break;
   } else {
    __ZN7WebCore5Image20loadPlatformResourceEPKc(i4, H_BASE + 32 | 0);
    i7 = i4 | 0;
    i8 = HEAP32[i7 >> 2] | 0;
    HEAP32[i7 >> 2] = 0;
    HEAP32[H_BASE + 256 >> 2] = i8;
    HEAP8[H_BASE + 240 | 0] = 1;
    i6 = i8;
    break;
   }
  } else {
   i5 = 6;
  }
 } while (0);
 do {
  if ((i5 | 0) == 6) {
   i4 = HEAP32[i1 + 664 >> 2] | 0;
   if ((i4 | 0) != 0) {
    i6 = i4;
    break;
   }
   i6 = __ZN7WebCore5Image9nullImageEv() | 0;
  }
 } while (0);
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 24 >> 2] & 15](i6) | 0)) {
  i9 = 0;
  STACKTOP = i3;
  return i9 | 0;
 }
 if (__ZN7WebCore14CachedResource24passesAccessControlCheckEPNS_14SecurityOriginE(i1 | 0, i2) | 0) {
  i9 = 1;
  STACKTOP = i3;
  return i9 | 0;
 }
 i9 = (__ZNK7WebCore14SecurityOrigin12taintsCanvasERKNS_3URLE(i2, __ZNK7WebCore20ResourceResponseBase3urlEv(i1 + 272 | 0) | 0) | 0) ^ 1;
 STACKTOP = i3;
 return i9 | 0;
}
function __ZN7WebCore11CachedImage18destroyDecodedDataEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 664 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i4 = 0;
  } else {
   if ((HEAP32[i3 + 4 >> 2] | 0) != 1) {
    i4 = 1;
    break;
   }
   i4 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 12 >> 2] & 15](i3) | 0) ^ 1;
  }
 } while (0);
 i3 = i1 | 0;
 do {
  if (!(i4 | (__ZNK7WebCore14CachedResource21isSafeToMakePurgeableEv(i3) | 0) ^ 1)) {
   if ((HEAP8[i1 + 588 | 0] & 32) != 0) {
    break;
   }
   i5 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   do {
    if ((i5 | 0) != 0) {
     i6 = i5 + 4 | 0;
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
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 31](i8);
    }
   } while (0);
   __ZN7WebCore14CachedResource14setDecodedSizeEj(i3, 0);
   __ZN7WebCore14CachedResource13makePurgeableEb(i3, 1) | 0;
   return;
  }
 } while (0);
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 if ((((HEAP32[i1 + 588 >> 2] | 0) >>> 11 & 7) - 3 | 0) >>> 0 < 2 >>> 0) {
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 64 >> 2] & 31](i3, 1);
 return;
}
function __ZN7WebCore11CachedImage16imageForRendererEPKNS_12RenderObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 do {
  if ((((HEAP32[i1 + 588 >> 2] | 0) >>> 11 & 7) - 3 | 0) >>> 0 < 2 >>> 0) {
   if ((HEAP8[i1 + 672 | 0] & 1) == 0) {
    break;
   }
   if (HEAP8[H_BASE + 240 | 0] | 0) {
    i5 = HEAP32[H_BASE + 256 >> 2] | 0;
    STACKTOP = i3;
    return i5 | 0;
   } else {
    __ZN7WebCore5Image20loadPlatformResourceEPKc(i4, H_BASE + 32 | 0);
    i6 = i4 | 0;
    i7 = HEAP32[i6 >> 2] | 0;
    HEAP32[i6 >> 2] = 0;
    HEAP32[H_BASE + 256 >> 2] = i7;
    HEAP8[H_BASE + 240 | 0] = 1;
    i5 = i7;
    STACKTOP = i3;
    return i5 | 0;
   }
  }
 } while (0);
 i4 = i1 + 664 | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i5 = __ZN7WebCore5Image9nullImageEv() | 0;
  STACKTOP = i3;
  return i5 | 0;
 }
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 8 >> 2] & 15](i7) | 0) {
   i6 = __ZN7WebCore13SVGImageCache16imageForRendererEPKNS_12RenderObjectE(HEAP32[i1 + 668 >> 2] | 0, i2) | 0;
   if ((i6 | 0) == (__ZN7WebCore5Image9nullImageEv() | 0)) {
    break;
   } else {
    i5 = i6;
   }
   STACKTOP = i3;
   return i5 | 0;
  }
 } while (0);
 i5 = HEAP32[i4 >> 2] | 0;
 STACKTOP = i3;
 return i5 | 0;
}
function __ZN7WebCore15ResourceRequestD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 172 >> 2] | 0;
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
 i2 = HEAP32[i1 + 168 >> 2] | 0;
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
 i2 = HEAP32[i1 + 164 >> 2] | 0;
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
 i2 = HEAP32[i1 + 160 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i5 = i1 | 0;
  __ZN7WebCore19ResourceRequestBaseD2Ev(i5);
  return;
 }
 i4 = i2 | 0;
 i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  i5 = i1 | 0;
  __ZN7WebCore19ResourceRequestBaseD2Ev(i5);
  return;
 } else {
  HEAP32[i4 >> 2] = i3;
  i5 = i1 | 0;
  __ZN7WebCore19ResourceRequestBaseD2Ev(i5);
  return;
 }
}
function __ZNK7WebCore11CachedImage10canBeDrawnEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i1 + 664 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i8 = 0;
  STACKTOP = i2;
  return i8 | 0;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 48 >> 2] & 31](i4, i7);
 if ((HEAP32[i4 >> 2] | 0) < 1) {
  i8 = 0;
  STACKTOP = i2;
  return i8 | 0;
 }
 if ((HEAP32[i4 + 4 >> 2] | 0) < 1) {
  i8 = 0;
  STACKTOP = i2;
  return i8 | 0;
 }
 i4 = i1 + 236 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i8 = 1;
  STACKTOP = i2;
  return i8 | 0;
 }
 if ((HEAP8[i1 + 568 | 0] & 1) != 0) {
  i8 = 1;
  STACKTOP = i2;
  return i8 | 0;
 }
 i1 = HEAP32[i6 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 48 >> 2] & 31](i3, i1);
 i1 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[i6 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 48 >> 2] & 31](i5, i3);
 i3 = Math_imul(i1 << 2, HEAP32[i5 + 4 >> 2] | 0) | 0;
 i8 = i3 >>> 0 <= (HEAP32[(HEAP32[(HEAP32[(__ZNK7WebCore14ResourceLoader11frameLoaderEv(HEAP32[i4 >> 2] | 0) | 0) >> 2] | 0) + 36 >> 2] | 0) + 136 >> 2] | 0) >>> 0;
 STACKTOP = i2;
 return i8 | 0;
}
function __ZThn640_N7WebCore11CachedImage13changedInRectEPKNS_5ImageERKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i1 - 680 + 40 | 0;
 i1 = i6;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i6 + 664 >> 2] | 0) != (i2 | 0)) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore26CachedResourceClientWalkerINS_17CachedImageClientEEC2ERKN3WTF14HashCountedSetIPNS_20CachedResourceClientENS3_7PtrHashIS6_EENS3_10HashTraitsIS6_EEEE(i5, i6 + 4 | 0);
 i6 = __ZN7WebCore26CachedResourceClientWalkerINS_17CachedImageClientEE4nextEv(i5) | 0;
 if ((i6 | 0) != 0) {
  i2 = i6;
  while (1) {
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 31](i2, i1, i3);
   i2 = __ZN7WebCore26CachedResourceClientWalkerINS_17CachedImageClientEE4nextEv(i5) | 0;
   if ((i2 | 0) == 0) {
    break;
   }
  }
 }
 i2 = i5 + 12 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i5 + 4 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 HEAP32[i2 >> 2] = 0;
 HEAP32[i5 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i3);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11CachedImage16responseReceivedERKNS_16ResourceResponseE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = i1 | 0;
 if ((HEAP8[i1 + 388 | 0] & 1) != 0) {
  __ZN7WebCore14CachedResource16responseReceivedERKNS_16ResourceResponseE(i3, i2);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 68 >> 2] & 31](i1);
 i4 = i1 + 664 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   HEAP32[i4 >> 2] = 0;
  } else {
   HEAP32[i5 + 12 >> 2] = 0;
   i6 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = 0;
   if ((i6 | 0) == 0) {
    break;
   }
   i7 = i6 + 4 | 0;
   i6 = i7 | 0;
   i8 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i6 >> 2] = i8;
    break;
   }
   i8 = i7 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 31](i8);
  }
 } while (0);
 i4 = i1 + 644 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i1);
  _memset(i4 | 0, 0, 16) | 0;
 }
 __ZN7WebCore14CachedResource14setEncodedSizeEj(i3, 0);
 __ZN7WebCore14CachedResource16responseReceivedERKNS_16ResourceResponseE(i3, i2);
 return;
}
function __ZThn640_N7WebCore11CachedImage17animationAdvancedEPKNS_5ImageE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i1 - 680 + 40 | 0;
 i1 = i5;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i5 + 664 >> 2] | 0) != (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore26CachedResourceClientWalkerINS_17CachedImageClientEEC2ERKN3WTF14HashCountedSetIPNS_20CachedResourceClientENS3_7PtrHashIS6_EENS3_10HashTraitsIS6_EEEE(i4, i5 + 4 | 0);
 i5 = __ZN7WebCore26CachedResourceClientWalkerINS_17CachedImageClientEE4nextEv(i4) | 0;
 if ((i5 | 0) != 0) {
  i2 = i5;
  while (1) {
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 31](i2, i1, 0);
   i2 = __ZN7WebCore26CachedResourceClientWalkerINS_17CachedImageClientEE4nextEv(i4) | 0;
   if ((i2 | 0) == 0) {
    break;
   }
  }
 }
 i2 = i4 + 12 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i4 + 4 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i2 >> 2] = 0;
 HEAP32[i4 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i1);
 STACKTOP = i3;
 return;
}
function __ZThn640_N7WebCore11CachedImage20shouldPauseAnimationEPKNS_5ImageE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i1 - 680 + 40 | 0;
 i1 = i5;
 if ((i2 | 0) == 0) {
  i6 = 0;
  STACKTOP = i3;
  return i6 | 0;
 }
 if ((HEAP32[i5 + 664 >> 2] | 0) != (i2 | 0)) {
  i6 = 0;
  STACKTOP = i3;
  return i6 | 0;
 }
 __ZN7WebCore26CachedResourceClientWalkerINS_17CachedImageClientEEC2ERKN3WTF14HashCountedSetIPNS_20CachedResourceClientENS3_7PtrHashIS6_EENS3_10HashTraitsIS6_EEEE(i4, i5 + 4 | 0);
 while (1) {
  i5 = __ZN7WebCore26CachedResourceClientWalkerINS_17CachedImageClientEE4nextEv(i4) | 0;
  if ((i5 | 0) == 0) {
   i7 = 1;
   break;
  }
  if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i5 >> 2] | 0) + 24 >> 2] & 15](i5, i1) | 0) {
   i7 = 0;
   break;
  }
 }
 i1 = i4 + 12 | 0;
 if ((HEAP32[i1 >> 2] | 0) != 0) {
  HEAP32[i1 >> 2] = 0;
 }
 i1 = i4 + 4 | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = i7;
  STACKTOP = i3;
  return i6 | 0;
 }
 HEAP32[i1 >> 2] = 0;
 HEAP32[i4 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i5);
 i6 = i7;
 STACKTOP = i3;
 return i6 | 0;
}
function __ZN7WebCore11CachedImage13changedInRectEPKNS_5ImageERKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i1 + 664 >> 2] | 0) != (i2 | 0)) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore26CachedResourceClientWalkerINS_17CachedImageClientEEC2ERKN3WTF14HashCountedSetIPNS_20CachedResourceClientENS3_7PtrHashIS6_EENS3_10HashTraitsIS6_EEEE(i5, i1 + 4 | 0);
 i2 = __ZN7WebCore26CachedResourceClientWalkerINS_17CachedImageClientEE4nextEv(i5) | 0;
 if ((i2 | 0) != 0) {
  i6 = i2;
  while (1) {
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i6 >> 2] | 0) + 20 >> 2] & 31](i6, i1, i3);
   i6 = __ZN7WebCore26CachedResourceClientWalkerINS_17CachedImageClientEE4nextEv(i5) | 0;
   if ((i6 | 0) == 0) {
    break;
   }
  }
 }
 i6 = i5 + 12 | 0;
 if ((HEAP32[i6 >> 2] | 0) != 0) {
  HEAP32[i6 >> 2] = 0;
 }
 i6 = i5 + 4 | 0;
 i3 = HEAP32[i6 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 HEAP32[i6 >> 2] = 0;
 HEAP32[i5 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i3);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11CachedImage17animationAdvancedEPKNS_5ImageE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i1 + 664 >> 2] | 0) != (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore26CachedResourceClientWalkerINS_17CachedImageClientEEC2ERKN3WTF14HashCountedSetIPNS_20CachedResourceClientENS3_7PtrHashIS6_EENS3_10HashTraitsIS6_EEEE(i4, i1 + 4 | 0);
 i2 = __ZN7WebCore26CachedResourceClientWalkerINS_17CachedImageClientEE4nextEv(i4) | 0;
 if ((i2 | 0) != 0) {
  i5 = i2;
  while (1) {
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i5 >> 2] | 0) + 20 >> 2] & 31](i5, i1, 0);
   i5 = __ZN7WebCore26CachedResourceClientWalkerINS_17CachedImageClientEE4nextEv(i4) | 0;
   if ((i5 | 0) == 0) {
    break;
   }
  }
 }
 i5 = i4 + 12 | 0;
 if ((HEAP32[i5 >> 2] | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
 }
 i5 = i4 + 4 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i5 >> 2] = 0;
 HEAP32[i4 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11CachedImage20shouldPauseAnimationEPKNS_5ImageE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 if ((i2 | 0) == 0) {
  i5 = 0;
  STACKTOP = i3;
  return i5 | 0;
 }
 if ((HEAP32[i1 + 664 >> 2] | 0) != (i2 | 0)) {
  i5 = 0;
  STACKTOP = i3;
  return i5 | 0;
 }
 __ZN7WebCore26CachedResourceClientWalkerINS_17CachedImageClientEEC2ERKN3WTF14HashCountedSetIPNS_20CachedResourceClientENS3_7PtrHashIS6_EENS3_10HashTraitsIS6_EEEE(i4, i1 + 4 | 0);
 while (1) {
  i2 = __ZN7WebCore26CachedResourceClientWalkerINS_17CachedImageClientEE4nextEv(i4) | 0;
  if ((i2 | 0) == 0) {
   i6 = 1;
   break;
  }
  if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i2 >> 2] | 0) + 24 >> 2] & 15](i2, i1) | 0) {
   i6 = 0;
   break;
  }
 }
 i1 = i4 + 12 | 0;
 if ((HEAP32[i1 >> 2] | 0) != 0) {
  HEAP32[i1 >> 2] = 0;
 }
 i1 = i4 + 4 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i5 = i6;
  STACKTOP = i3;
  return i5 | 0;
 }
 HEAP32[i1 >> 2] = 0;
 HEAP32[i4 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 i5 = i6;
 STACKTOP = i3;
 return i5 | 0;
}
function __ZN7WebCore11CachedImage15notifyObserversEPKNS_7IntRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 __ZN7WebCore26CachedResourceClientWalkerINS_17CachedImageClientEEC2ERKN3WTF14HashCountedSetIPNS_20CachedResourceClientENS3_7PtrHashIS6_EENS3_10HashTraitsIS6_EEEE(i4, i1 + 4 | 0);
 i5 = __ZN7WebCore26CachedResourceClientWalkerINS_17CachedImageClientEE4nextEv(i4) | 0;
 if ((i5 | 0) != 0) {
  i6 = i5;
  while (1) {
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i6 >> 2] | 0) + 20 >> 2] & 31](i6, i1, i2);
   i6 = __ZN7WebCore26CachedResourceClientWalkerINS_17CachedImageClientEE4nextEv(i4) | 0;
   if ((i6 | 0) == 0) {
    break;
   }
  }
 }
 i6 = i4 + 12 | 0;
 if ((HEAP32[i6 >> 2] | 0) != 0) {
  HEAP32[i6 >> 2] = 0;
 }
 i6 = i4 + 4 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i6 >> 2] = 0;
 HEAP32[i4 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11CachedImage5clearEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 68 >> 2] & 31](i1);
 i2 = i1 + 664 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   HEAP32[i2 >> 2] = 0;
  } else {
   HEAP32[i3 + 12 >> 2] = 0;
   i4 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i5 = i4 + 4 | 0;
   i4 = i5 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i4 >> 2] = i6;
    break;
   }
   i6 = i5 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
  }
 } while (0);
 i2 = i1 + 644 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i7 = i1 | 0;
  __ZN7WebCore14CachedResource14setEncodedSizeEj(i7, 0);
  return;
 }
 __ZN3WTF8fastFreeEPv(i3);
 _memset(i2 | 0, 0, 16) | 0;
 i7 = i1 | 0;
 __ZN7WebCore14CachedResource14setEncodedSizeEj(i7, 0);
 return;
}
function __ZNK7WebCore11CachedImage11brokenImageEf(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 var i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i2 | 0;
 i5 = i2 + 8 | 0;
 if (d3 < +2) {
  if (!(HEAP8[H_BASE + 240 | 0] | 0)) {
   __ZN7WebCore5Image20loadPlatformResourceEPKc(i5, H_BASE + 32 | 0);
   i6 = i5 | 0;
   i5 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = 0;
   HEAP32[H_BASE + 256 >> 2] = i5;
   HEAP8[H_BASE + 240 | 0] = 1;
  }
  HEAP32[i1 >> 2] = HEAP32[H_BASE + 256 >> 2];
  HEAPF32[i1 + 4 >> 2] = +1;
  STACKTOP = i2;
  return;
 } else {
  if (!(HEAP8[H_BASE + 248 | 0] | 0)) {
   __ZN7WebCore5Image20loadPlatformResourceEPKc(i4, H_BASE + 48 | 0);
   i5 = i4 | 0;
   i4 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   HEAP32[H_BASE + 264 >> 2] = i4;
   HEAP8[H_BASE + 248 | 0] = 1;
  }
  HEAP32[i1 >> 2] = HEAP32[H_BASE + 264 >> 2];
  HEAPF32[i1 + 4 >> 2] = +2;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore11CachedImageC2ERKNS_3URLEPNS_5ImageE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 184 | 0;
 i5 = i4 | 0;
 __ZN7WebCore19ResourceRequestBaseC2ERKNS_3URLENS_26ResourceRequestCachePolicyE(i5 | 0, i2, 0);
 _memset(i5 + 160 | 0, 0, 19) | 0;
 HEAP32[i5 + 180 >> 2] = 15;
 __ZN7WebCore14CachedResourceC2ERKNS_15ResourceRequestENS0_4TypeE(i1 | 0, i5, 1);
 __ZN7WebCore15ResourceRequestD2Ev(i5);
 HEAP32[i1 >> 2] = H_BASE + 72;
 HEAP32[i1 + 640 >> 2] = H_BASE + 200;
 _memset(i1 + 644 | 0, 0, 20) | 0;
 HEAP32[i1 + 664 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i5 = i3 + 4 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 668 >> 2] = 0;
 HEAP8[i1 + 672 | 0] = 1;
 i5 = i1 + 588 | 0;
 i1 = i5;
 i3 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = i3 & -14337 | 4096;
 HEAP8[i5] = i3 & 255 & -33;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11CachedImageC1ERKNS_3URLEPNS_5ImageE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 184 | 0;
 i5 = i4 | 0;
 __ZN7WebCore19ResourceRequestBaseC2ERKNS_3URLENS_26ResourceRequestCachePolicyE(i5 | 0, i2, 0);
 _memset(i5 + 160 | 0, 0, 19) | 0;
 HEAP32[i5 + 180 >> 2] = 15;
 __ZN7WebCore14CachedResourceC2ERKNS_15ResourceRequestENS0_4TypeE(i1 | 0, i5, 1);
 __ZN7WebCore15ResourceRequestD2Ev(i5);
 HEAP32[i1 >> 2] = H_BASE + 72;
 HEAP32[i1 + 640 >> 2] = H_BASE + 200;
 _memset(i1 + 644 | 0, 0, 20) | 0;
 HEAP32[i1 + 664 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i5 = i3 + 4 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 668 >> 2] = 0;
 HEAP8[i1 + 672 | 0] = 1;
 i5 = i1 + 588 | 0;
 i1 = i5;
 i3 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = i3 & -14337 | 4096;
 HEAP8[i5] = i3 & 255 & -33;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11CachedImage5imageEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 do {
  if ((((HEAP32[i1 + 588 >> 2] | 0) >>> 11 & 7) - 3 | 0) >>> 0 < 2 >>> 0) {
   if ((HEAP8[i1 + 672 | 0] & 1) == 0) {
    break;
   }
   if (HEAP8[H_BASE + 240 | 0] | 0) {
    i4 = HEAP32[H_BASE + 256 >> 2] | 0;
    STACKTOP = i2;
    return i4 | 0;
   } else {
    __ZN7WebCore5Image20loadPlatformResourceEPKc(i3, H_BASE + 32 | 0);
    i5 = i3 | 0;
    i6 = HEAP32[i5 >> 2] | 0;
    HEAP32[i5 >> 2] = 0;
    HEAP32[H_BASE + 256 >> 2] = i6;
    HEAP8[H_BASE + 240 | 0] = 1;
    i4 = i6;
    STACKTOP = i2;
    return i4 | 0;
   }
  }
 } while (0);
 i3 = HEAP32[i1 + 664 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3;
  STACKTOP = i2;
  return i4 | 0;
 }
 i4 = __ZN7WebCore5Image9nullImageEv() | 0;
 STACKTOP = i2;
 return i4 | 0;
}
function __ZN7WebCore11CachedImageC2EPNS_5ImageE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 184 | 0;
 i4 = i3 | 0;
 __ZN7WebCore15ResourceRequestC2Ev(i4);
 __ZN7WebCore14CachedResourceC2ERKNS_15ResourceRequestENS0_4TypeE(i1 | 0, i4, 1);
 __ZN7WebCore15ResourceRequestD2Ev(i4);
 HEAP32[i1 >> 2] = H_BASE + 72;
 HEAP32[i1 + 640 >> 2] = H_BASE + 200;
 _memset(i1 + 644 | 0, 0, 20) | 0;
 HEAP32[i1 + 664 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i4 = i2 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 668 >> 2] = 0;
 HEAP8[i1 + 672 | 0] = 1;
 i4 = i1 + 588 | 0;
 i1 = i4;
 i2 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = i2 & -14337 | 4096;
 HEAP8[i4] = i2 & 255 & -33;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11CachedImageC1EPNS_5ImageE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 184 | 0;
 i4 = i3 | 0;
 __ZN7WebCore15ResourceRequestC2Ev(i4);
 __ZN7WebCore14CachedResourceC2ERKNS_15ResourceRequestENS0_4TypeE(i1 | 0, i4, 1);
 __ZN7WebCore15ResourceRequestD2Ev(i4);
 HEAP32[i1 >> 2] = H_BASE + 72;
 HEAP32[i1 + 640 >> 2] = H_BASE + 200;
 _memset(i1 + 644 | 0, 0, 20) | 0;
 HEAP32[i1 + 664 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i4 = i2 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 668 >> 2] = 0;
 HEAP8[i1 + 672 | 0] = 1;
 i4 = i1 + 588 | 0;
 i1 = i4;
 i2 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = i2 & -14337 | 4096;
 HEAP8[i4] = i2 & 255 & -33;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11CachedImage27currentFrameKnownToBeOpaqueEPKNS_13RenderElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = __ZN7WebCore11CachedImage16imageForRendererEPKNS_12RenderObjectE(i1, i2 | 0) | 0;
 i2 = i5;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 15](i5) | 0) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 80 >> 2] & 31](i4, i5);
  __ZN3WTF14derefIfNotNullI14_cairo_surfaceEEvPT_(HEAP32[i4 >> 2] | 0);
 }
 i4 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 15](i5) | 0;
 STACKTOP = i3;
 return i4 | 0;
}
function __ZN7WebCore11CachedImage15didRemoveClientEPNS_20CachedResourceClientE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2;
 HEAP32[i4 >> 2] = i5;
 __ZN3WTF7HashMapIPKN7WebCore17CachedImageClientENSt3__14pairINS1_7IntSizeEfEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSB_IS8_EEE6removeERKS4_(i1 + 644 | 0, i4) | 0;
 i4 = HEAP32[i1 + 668 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore13SVGImageCache21removeClientFromCacheEPKNS_17CachedImageClientE(i4, i5);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11CachedImage7addDataEPKcj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = __ZN3WTF10fastMallocEj(12) | 0;
 i5 = i4;
 __ZN7WebCore14ResourceBufferC1EPKcj(i5, i2, i3);
 __ZN7WebCore11CachedImage24addIncrementalDataBufferEPNS_14ResourceBufferE(i1, i5);
 if ((i4 | 0) == 0) {
  return;
 }
 i1 = i4 + 4 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i5);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
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
function __ZN7WebCore11CachedImage27checkShouldPaintBrokenImageEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 236 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 if ((HEAP8[i2 + 568 | 0] & 1) != 0) {
  return;
 }
 i3 = HEAP32[(__ZNK7WebCore14ResourceLoader11frameLoaderEv(i2) | 0) + 4 >> 2] | 0;
 i2 = HEAP32[(HEAP32[i3 >> 2] | 0) + 508 >> 2] | 0;
 i4 = __ZNK7WebCore19ResourceRequestBase3urlEv(i1 + 48 | 0) | 0;
 HEAP8[i1 + 672 | 0] = (FUNCTION_TABLE_iii[i2 & 15](i3, i4) | 0) & 1;
 return;
}
function __ZThn640_N7WebCore11CachedImage7didDrawEPKNS_5ImageE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, d4 = +0, d5 = +0;
 i3 = i1 - 680 + 40 | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 if ((HEAP32[i3 + 664 >> 2] | 0) != (i2 | 0)) {
  return;
 }
 d4 = +HEAPF64[__ZN7WebCore9FrameView22sCurrentPaintTimeStampE >> 3];
 if (d4 != +0) {
  d5 = d4;
 } else {
  d5 = +__ZN3WTF27monotonicallyIncreasingTimeEv();
 }
 __ZN7WebCore14CachedResource20didAccessDecodedDataEd(i3, d5);
 return;
}
function __ZN7WebCore11CachedImage17allClientsRemovedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 644 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i3);
  _memset(i2 | 0, 0, 16) | 0;
 }
 i2 = HEAP32[i1 + 664 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 if ((((HEAP32[i1 + 588 >> 2] | 0) >>> 11 & 7) - 3 | 0) >>> 0 < 2 >>> 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 76 >> 2] & 31](i2);
 return;
}
function __ZN7WebCore11CachedImage4loadEPNS_20CachedResourceLoaderERKNS_21ResourceLoaderOptionsE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 do {
  if ((i2 | 0) != 0) {
   if ((HEAP8[i2 + 136 | 0] & 1) != 0) {
    break;
   }
   i4 = i1 + 588 | 0;
   HEAP8[i4] = HEAP8[i4] & -33;
   return;
  }
 } while (0);
 __ZN7WebCore14CachedResource4loadEPNS_20CachedResourceLoaderERKNS_21ResourceLoaderOptionsE(i1 | 0, i2, i3);
 return;
}
function __ZN7WebCore11CachedImage7didDrawEPKNS_5ImageE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var d3 = +0, d4 = +0;
 if ((i2 | 0) == 0) {
  return;
 }
 if ((HEAP32[i1 + 664 >> 2] | 0) != (i2 | 0)) {
  return;
 }
 d3 = +HEAPF64[__ZN7WebCore9FrameView22sCurrentPaintTimeStampE >> 3];
 if (d3 != +0) {
  d4 = d3;
 } else {
  d4 = +__ZN3WTF27monotonicallyIncreasingTimeEv();
 }
 __ZN7WebCore14CachedResource20didAccessDecodedDataEd(i1 | 0, d4);
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
function __ZN7WebCore11CachedImageC2ERKNS_15ResourceRequestE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore14CachedResourceC2ERKNS_15ResourceRequestENS0_4TypeE(i1 | 0, i2, 1);
 HEAP32[i1 >> 2] = H_BASE + 72;
 HEAP32[i1 + 640 >> 2] = H_BASE + 200;
 _memset(i1 + 644 | 0, 0, 28) | 0;
 HEAP8[i1 + 672 | 0] = 1;
 i2 = i1 + 588 | 0;
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & -14337;
 return;
}
function __ZN7WebCore11CachedImageC1ERKNS_15ResourceRequestE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore14CachedResourceC2ERKNS_15ResourceRequestENS0_4TypeE(i1 | 0, i2, 1);
 HEAP32[i1 >> 2] = H_BASE + 72;
 HEAP32[i1 + 640 >> 2] = H_BASE + 200;
 _memset(i1 + 644 | 0, 0, 28) | 0;
 HEAP8[i1 + 672 | 0] = 1;
 i2 = i1 + 588 | 0;
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & -14337;
 return;
}
function __ZThn640_N7WebCore11CachedImage18decodedSizeChangedEPKNS_5ImageEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = i1 - 680 + 40 | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 + 664 >> 2] | 0) != (i2 | 0)) {
  return;
 }
 __ZN7WebCore14CachedResource14setDecodedSizeEj(i4, (HEAP32[i4 + 572 >> 2] | 0) + i3 | 0);
 return;
}
function __ZN7WebCore11CachedImage26computeIntrinsicDimensionsERNS_6LengthES2_RNS_9FloatSizeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i5 = HEAP32[i1 + 664 >> 2] | 0;
 if ((i5 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i5 >> 2] | 0) + 44 >> 2] & 1](i5, i2, i3, i4);
 return;
}
function __ZN7WebCore11CachedImage18decodedSizeChangedEPKNS_5ImageEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 if ((HEAP32[i1 + 664 >> 2] | 0) != (i2 | 0)) {
  return;
 }
 __ZN7WebCore14CachedResource14setDecodedSizeEj(i1 | 0, (HEAP32[i1 + 572 >> 2] | 0) + i3 | 0);
 return;
}
function __ZNK7WebCore11CachedImage22usesImageContainerSizeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 664 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 32 >> 2] & 15](i2) | 0;
 return i3 | 0;
}
function __ZNK7WebCore11CachedImage22imageHasRelativeHeightEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 664 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 40 >> 2] & 15](i2) | 0;
 return i3 | 0;
}
function __ZNK7WebCore11CachedImage21imageHasRelativeWidthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 664 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 36 >> 2] & 15](i2) | 0;
 return i3 | 0;
}
function __ZNK7WebCore11CachedImage14stillNeedsLoadEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 588 >> 2] | 0;
 i1 = i2 >>> 11 & 7;
 if (!((i1 - 3 | 0) >>> 0 > 1 >>> 0 & (i1 | 0) == 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (i2 & 32 | 0) == 0;
 return i3 | 0;
}
function __ZNK7WebCore11CachedImage20willPaintBrokenImageEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((((HEAP32[i1 + 588 >> 2] | 0) >>> 11 & 7) - 3 | 0) >>> 0 >= 2 >>> 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (HEAP8[i1 + 672 | 0] & 1) != 0;
 return i2 | 0;
}
function iii___ZNK7WebCore14CachedResource31mustRevalidateDueToCacheHeadersENS_11CachePolicyE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore14CachedResource31mustRevalidateDueToCacheHeadersENS_11CachePolicyE(i1 | 0, i2 | 0) | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore14CachedResource15willSendRequestERNS_15ResourceRequestERKNS_16ResourceResponseE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i3 = i1 + 588 | 0;
 HEAP8[i3] = HEAP8[i3] | 8;
 return;
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
function __ZN7WebCore11CachedImage13addDataBufferEPNS_14ResourceBufferE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore11CachedImage24addIncrementalDataBufferEPNS_14ResourceBufferE(i1, i2);
 return;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function __ZThn640_N7WebCore11CachedImageD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 680 + 40 | 0;
 __ZN7WebCore11CachedImageD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore14CachedResource11didSendDataEyy(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 31](i2 | 0, i3 | 0, i4 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function vi___ZN7WebCore14CachedResource11checkNotifyEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore14CachedResource11checkNotifyEv(i1 | 0);
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 15](i2 | 0, i3 | 0) | 0;
}
function __ZN7WebCore11CachedImageD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11CachedImageD2Ev(i1);
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
function __ZThn640_N7WebCore11CachedImageD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11CachedImageD2Ev(i1 - 680 + 40 | 0);
 return;
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
 FUNCTION_TABLE_vii[i1 & 31](i2 | 0, i3 | 0);
}
function __ZNK7WebCore14CachedResource8canReuseERKNS_15ResourceRequestE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 1;
}
function __ZNK7WebCore14CachedResource8encodingEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function b0(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(0);
}
function __ZN7WebCore14CachedResource11setEncodingERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 15](i2 | 0) | 0;
}
function __ZNK7WebCore11CachedImage32shouldIgnoreHTTPStatusCodeErrorsEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function b7(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(7);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 31](i2 | 0);
}
function __ZNK7WebCore11CachedImage24mayTryReplaceEncodedDataEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore11CachedImage13purgePriorityEv(i1) {
 i1 = i1 | 0;
 return 2;
}
function b4(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(4);
}
function __ZNK7WebCore11CachedImage7isImageEv(i1) {
 i1 = i1 | 0;
 return 1;
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
  var FUNCTION_TABLE_viiiii = [b0,b0,__ZN7WebCore14CachedResource11didSendDataEyy,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore11CachedImage18destroyDecodedDataEv,b1,__ZN7WebCore11CachedImageD0Ev,b1,__ZThn640_N7WebCore11CachedImageD1Ev,b1,vi___ZN7WebCore14CachedResource11checkNotifyEv__wrapper,b1,__ZThn640_N7WebCore11CachedImageD0Ev,b1,__ZN7WebCore11CachedImageD2Ev,b1,__ZN7WebCore11CachedImage17allClientsRemovedEv,b1,__ZN7WebCore11CachedImage34switchClientsToRevalidatedResourceEv,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1
  ,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore11CachedImage12didAddClientEPNS_20CachedResourceClientE,b2,__ZN7WebCore11CachedImageC2EPNS_5ImageE,b2,__ZThn640_N7WebCore11CachedImage17animationAdvancedEPKNS_5ImageE,b2,__ZN7WebCore11CachedImage17animationAdvancedEPKNS_5ImageE,b2,__ZN7WebCore11CachedImage16responseReceivedERKNS_16ResourceResponseE,b2,__ZN7WebCore11CachedImage5errorENS_14CachedResource6StatusE,b2,__ZN7WebCore11CachedImage13finishLoadingEPNS_14ResourceBufferE,b2,__ZN7WebCore11CachedImage7didDrawEPKNS_5ImageE,b2,__ZN7WebCore11CachedImage15didRemoveClientEPNS_20CachedResourceClientE,b2,__ZNK7WebCore14CachedResource8encodingEv,b2,__ZN7WebCore11CachedImage13addDataBufferEPNS_14ResourceBufferE,b2,__ZN7WebCore14CachedResource11setEncodingERKN3WTF6StringE,b2,__ZThn640_N7WebCore11CachedImage7didDrawEPKNS_5ImageE,b2,__ZN7WebCore11CachedImageC2ERKNS_15ResourceRequestE
  ,b2,b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3,__ZNK7WebCore11CachedImage13purgePriorityEv,b3,__ZNK7WebCore11CachedImage24mayTryReplaceEncodedDataEv,b3,__ZNK7WebCore11CachedImage14stillNeedsLoadEv,b3,__ZNK7WebCore11CachedImage32shouldIgnoreHTTPStatusCodeErrorsEv,b3,__ZNK7WebCore11CachedImage7isImageEv,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_viii = [b4,b4,__ZN7WebCore11CachedImage13changedInRectEPKNS_5ImageERKNS_7IntRectE,b4,__ZN7WebCore11CachedImage4loadEPNS_20CachedResourceLoaderERKNS_21ResourceLoaderOptionsE,b4,__ZN7WebCore11CachedImageC2ERKNS_3URLEPNS_5ImageE,b4,__ZN7WebCore11CachedImage18decodedSizeChangedEPKNS_5ImageEi,b4,__ZN7WebCore14CachedResource15willSendRequestERNS_15ResourceRequestERKNS_16ResourceResponseE,b4,__ZN7WebCore11CachedImage7addDataEPKcj,b4,__ZThn640_N7WebCore11CachedImage18decodedSizeChangedEPKNS_5ImageEi,b4,__ZThn640_N7WebCore11CachedImage13changedInRectEPKNS_5ImageERKNS_7IntRectE,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4];
  var FUNCTION_TABLE_v = [b5,b5];
  var FUNCTION_TABLE_iii = [b6,b6,__ZNK7WebCore14CachedResource8canReuseERKNS_15ResourceRequestE,b6,__ZN7WebCore11CachedImage20shouldPauseAnimationEPKNS_5ImageE,b6,iii___ZNK7WebCore14CachedResource31mustRevalidateDueToCacheHeadersENS_11CachePolicyE__wrapper,b6,__ZThn640_N7WebCore11CachedImage20shouldPauseAnimationEPKNS_5ImageE,b6,b6,b6,b6,b6,b6,b6];
  var FUNCTION_TABLE_viiii = [b7,b7];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9FrameView22sCurrentPaintTimeStampE": __ZN7WebCore9FrameView22sCurrentPaintTimeStampE, "__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE": __ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore11CachedImage12didAddClientEPNS_20CachedResourceClientE","_strlen","__ZN7WebCore11CachedImageC2EPNS_5ImageE","__ZNK7WebCore11CachedImage14stillNeedsLoadEv","__ZN7WebCore11CachedImage13changedInRectEPKNS_5ImageERKNS_7IntRectE","__ZN7WebCore11CachedImage15notifyObserversEPKNS_7IntRectE","__ZN7WebCore11CachedImage4loadEPNS_20CachedResourceLoaderERKNS_21ResourceLoaderOptionsE","__ZN7WebCore11CachedImage5clearEv","__ZN7WebCore11CachedImageC2ERKNS_3URLEPNS_5ImageE","__ZN7WebCore15ResourceRequestC2Ev","__ZN7WebCore19ResourceRequestBaseC2ERKNS_3URLENS_26ResourceRequestCachePolicyE","__ZN7WebCore11CachedImage17animationAdvancedEPKNS_5ImageE","__ZN3WTF9HashTableIPKN7WebCore17CachedImageClientENS_12KeyValuePairIS4_NSt3__14pairINS1_7IntSizeEfEEEENS_24KeyValuePairKeyExtractorISA_EENS_7PtrHashIS4_EENS_7HashMapIS4_S9_SE_NS_10HashTraitsIS4_EENSG_IS9_EEE18KeyValuePairTraitsESH_E3addINS_17HashMapTranslatorISK_SE_EERKS4_RS9_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_SA_SC_SE_SK_SH_EEEEOT0_OT1_","__ZN7WebCore11CachedImage27setContainerSizeForRendererEPKNS_17CachedImageClientERKNS_7IntSizeEf","__ZN7WebCore11CachedImageD0Ev","__ZNK7WebCore14CachedResource8encodingEv","__ZN7WebCore26CachedResourceClientWalkerINS_17CachedImageClientEEC2ERKN3WTF14HashCountedSetIPNS_20CachedResourceClientENS3_7PtrHashIS6_EENS3_10HashTraitsIS6_EEEE","__ZN7WebCore11CachedImage18decodedSizeChangedEPKNS_5ImageEi","__ZNK7WebCore11CachedImage13purgePriorityEv","__ZN7WebCore11CachedImage18destroyDecodedDataEv","__ZN7WebCore11CachedImage27checkShouldPaintBrokenImageEv","__ZN7WebCore11CachedImage7addDataEPKcj","__ZN7WebCore14CachedResource15willSendRequestERNS_15ResourceRequestERKNS_16ResourceResponseE","__ZN7WebCore14CachedResource11didSendDataEyy","_memset","__ZN7WebCore11CachedImage5imageEv","__ZN3WTF9HashTableIPKN7WebCore17CachedImageClientENS_12KeyValuePairIS4_NSt3__14pairINS1_7IntSizeEfEEEENS_24KeyValuePairKeyExtractorISA_EENS_7PtrHashIS4_EENS_7HashMapIS4_S9_SE_NS_10HashTraitsIS4_EENSG_IS9_EEE18KeyValuePairTraitsESH_E3addINS_17HashMapTranslatorISK_SE_EERKS4_S9_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_SA_SC_SE_SK_SH_EEEEOT0_OT1_","__ZN7WebCore15ResourceRequestD2Ev","__ZNK7WebCore11CachedImage20willPaintBrokenImageEv","__ZN7WebCore11CachedImage13finishLoadingEPNS_14ResourceBufferE","__ZThn640_N7WebCore11CachedImageD0Ev","__ZNK7WebCore11CachedImage21imageHasRelativeWidthEv","__ZN7WebCore11CachedImage20shouldPauseAnimationEPKNS_5ImageE","__ZThn640_N7WebCore11CachedImageD1Ev","__ZN7WebCore11CachedImage26computeIntrinsicDimensionsERNS_6LengthES2_RNS_9FloatSizeE","__ZN7WebCore11CachedImage5errorENS_14CachedResource6StatusE","__ZN7WebCore11CachedImage20imageSizeForRendererEPKNS_12RenderObjectEfNS0_8SizeTypeE","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZNK7WebCore14CachedResource8canReuseERKNS_15ResourceRequestE","__ZNK7WebCore11CachedImage7isImageEv","__ZNK7WebCore11CachedImage22usesImageContainerSizeEv","__ZN3WTF7HashMapIPKN7WebCore17CachedImageClientENSt3__14pairINS1_7IntSizeEfEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSB_IS8_EEE6removeERKS4_","__ZN7WebCore11CachedImage16responseReceivedERKNS_16ResourceResponseE","__ZThn640_N7WebCore11CachedImage18decodedSizeChangedEPKNS_5ImageEi","__ZN7WebCore19ResourceRequestBaseD2Ev","__ZN7WebCore11CachedImage7didDrawEPKNS_5ImageE","__ZN7WebCore11CachedImage13isOriginCleanEPNS_14SecurityOriginE","__ZN7WebCore11CachedImage15didRemoveClientEPNS_20CachedResourceClientE","__ZNK7WebCore11CachedImage32shouldIgnoreHTTPStatusCodeErrorsEv","__ZN7WebCore11CachedImage24addIncrementalDataBufferEPNS_14ResourceBufferE","__ZN7WebCore11CachedImageD2Ev","__ZN7WebCore26CachedResourceClientWalkerINS_17CachedImageClientEE4nextEv","__ZN7WebCore11CachedImage11createImageEv","__ZNK7WebCore11CachedImage10canBeDrawnEv","__ZThn640_N7WebCore11CachedImage17animationAdvancedEPKNS_5ImageE","__ZN7WebCore11CachedImage27currentFrameKnownToBeOpaqueEPKNS_13RenderElementE","__ZN7WebCore11CachedImage16imageForRendererEPKNS_12RenderObjectE","__ZN7WebCore11CachedImage30resumeAnimatingImagesForLoaderEPNS_20CachedResourceLoaderE","__ZNK7WebCore11CachedImage11brokenImageEf","__ZN7WebCore11CachedImage13addDataBufferEPNS_14ResourceBufferE","__ZNK7WebCore11CachedImage24mayTryReplaceEncodedDataEv","__ZN3WTF9HashTableIPKN7WebCore17CachedImageClientENS_12KeyValuePairIS4_NSt3__14pairINS1_7IntSizeEfEEEENS_24KeyValuePairKeyExtractorISA_EENS_7PtrHashIS4_EENS_7HashMapIS4_S9_SE_NS_10HashTraitsIS4_EENSG_IS9_EEE18KeyValuePairTraitsESH_E6rehashEiPSA_","__ZN7WebCore11CachedImage17allClientsRemovedEv","_memcpy","__ZN7WebCore11CachedImage34switchClientsToRevalidatedResourceEv","__ZN7WebCore14CachedResource11setEncodingERKN3WTF6StringE","__ZThn640_N7WebCore11CachedImage13changedInRectEPKNS_5ImageERKNS_7IntRectE","__ZThn640_N7WebCore11CachedImage7didDrawEPKNS_5ImageE","__ZN7WebCore11CachedImageC2ERKNS_15ResourceRequestE","__ZThn640_N7WebCore11CachedImage20shouldPauseAnimationEPKNS_5ImageE","__ZNK7WebCore11CachedImage22imageHasRelativeHeightEv"]
