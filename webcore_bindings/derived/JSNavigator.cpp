/*
    This file is part of the WebKit open source project.
    This file has been generated by generate-bindings.pl. DO NOT MODIFY!

    This library is free software; you can redistribute it and/or
    modify it under the terms of the GNU Library General Public
    License as published by the Free Software Foundation; either
    version 2 of the License, or (at your option) any later version.

    This library is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
    Library General Public License for more details.

    You should have received a copy of the GNU Library General Public License
    along with this library; see the file COPYING.LIB.  If not, write to
    the Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor,
    Boston, MA 02110-1301, USA.
*/

#include "config.h"
#include "JSNavigator.h"

#include "DOMMimeTypeArray.h"
#include "DOMPluginArray.h"
#include "Dictionary.h"
#include "ExceptionCode.h"
#include "JSDOMBinding.h"
#include "JSDOMMimeTypeArray.h"
#include "JSDOMPluginArray.h"
#include "JSNavigatorUserMediaErrorCallback.h"
#include "JSNavigatorUserMediaSuccessCallback.h"
#include "Navigator.h"
#include "NavigatorGeolocation.h"
#include "NavigatorMediaStream.h"
#include "NavigatorStorageQuota.h"
#include "URL.h"
#include <runtime/Error.h>
#include <runtime/JSString.h>
#include <wtf/GetPtr.h>

#if ENABLE(GEOLOCATION)
#include "Geolocation.h"
#include "JSGeolocation.h"
#endif

#if ENABLE(QUOTA)
#include "JSStorageQuota.h"
#include "StorageQuota.h"
#endif

using namespace JSC;

namespace WebCore {

/* Hash table */

static const HashTableValue JSNavigatorTableValues[] =
{
    { "appCodeName", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsNavigatorAppCodeName), (intptr_t)0 },
    { "appName", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsNavigatorAppName), (intptr_t)0 },
    { "appVersion", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsNavigatorAppVersion), (intptr_t)0 },
    { "language", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsNavigatorLanguage), (intptr_t)0 },
    { "userAgent", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsNavigatorUserAgent), (intptr_t)0 },
    { "platform", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsNavigatorPlatform), (intptr_t)0 },
    { "plugins", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsNavigatorPlugins), (intptr_t)0 },
    { "mimeTypes", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsNavigatorMimeTypes), (intptr_t)0 },
    { "product", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsNavigatorProduct), (intptr_t)0 },
    { "productSub", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsNavigatorProductSub), (intptr_t)0 },
    { "vendor", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsNavigatorVendor), (intptr_t)0 },
    { "vendorSub", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsNavigatorVendorSub), (intptr_t)0 },
    { "cookieEnabled", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsNavigatorCookieEnabled), (intptr_t)0 },
    { "onLine", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsNavigatorOnLine), (intptr_t)0 },
#if ENABLE(GEOLOCATION)
    { "geolocation", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsNavigatorGeolocation), (intptr_t)0 },
#endif
#if ENABLE(QUOTA)
    { "webkitTemporaryStorage", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsNavigatorWebkitTemporaryStorage), (intptr_t)0 },
#endif
#if ENABLE(QUOTA)
    { "webkitPersistentStorage", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsNavigatorWebkitPersistentStorage), (intptr_t)0 },
#endif
    { "constructor", DontEnum | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsNavigatorConstructor), (intptr_t)0 },
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSNavigatorTable = { 68, 63, JSNavigatorTableValues, 0 };
/* Hash table for constructor */

static const HashTableValue JSNavigatorConstructorTableValues[] =
{
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSNavigatorConstructorTable = { 1, 0, JSNavigatorConstructorTableValues, 0 };
const ClassInfo JSNavigatorConstructor::s_info = { "NavigatorConstructor", &Base::s_info, &JSNavigatorConstructorTable, 0, CREATE_METHOD_TABLE(JSNavigatorConstructor) };

JSNavigatorConstructor::JSNavigatorConstructor(Structure* structure, JSDOMGlobalObject* globalObject)
    : DOMConstructorObject(structure, globalObject)
{
}

void JSNavigatorConstructor::finishCreation(VM& vm, JSDOMGlobalObject* globalObject)
{
    Base::finishCreation(vm);
    ASSERT(inherits(info()));
    putDirect(vm, vm.propertyNames->prototype, JSNavigatorPrototype::self(vm, globalObject), DontDelete | ReadOnly);
    putDirect(vm, vm.propertyNames->length, jsNumber(0), ReadOnly | DontDelete | DontEnum);
}

bool JSNavigatorConstructor::getOwnPropertySlot(JSObject* object, ExecState* exec, PropertyName propertyName, PropertySlot& slot)
{
    return getStaticValueSlot<JSNavigatorConstructor, JSDOMWrapper>(exec, JSNavigatorConstructorTable, jsCast<JSNavigatorConstructor*>(object), propertyName, slot);
}

/* Hash table for prototype */

static const HashTableValue JSNavigatorPrototypeTableValues[] =
{
    { "javaEnabled", JSC::Function, NoIntrinsic, (intptr_t)static_cast<NativeFunction>(jsNavigatorPrototypeFunctionJavaEnabled), (intptr_t)0 },
    { "getStorageUpdates", JSC::Function, NoIntrinsic, (intptr_t)static_cast<NativeFunction>(jsNavigatorPrototypeFunctionGetStorageUpdates), (intptr_t)0 },
#if ENABLE(MEDIA_STREAM)
    { "webkitGetUserMedia", JSC::Function, NoIntrinsic, (intptr_t)static_cast<NativeFunction>(jsNavigatorPrototypeFunctionWebkitGetUserMedia), (intptr_t)2 },
#endif
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSNavigatorPrototypeTable = { 8, 7, JSNavigatorPrototypeTableValues, 0 };
const ClassInfo JSNavigatorPrototype::s_info = { "NavigatorPrototype", &Base::s_info, &JSNavigatorPrototypeTable, 0, CREATE_METHOD_TABLE(JSNavigatorPrototype) };

JSObject* JSNavigatorPrototype::self(VM& vm, JSGlobalObject* globalObject)
{
    return getDOMPrototype<JSNavigator>(vm, globalObject);
}

bool JSNavigatorPrototype::getOwnPropertySlot(JSObject* object, ExecState* exec, PropertyName propertyName, PropertySlot& slot)
{
    JSNavigatorPrototype* thisObject = jsCast<JSNavigatorPrototype*>(object);
    return getStaticFunctionSlot<JSObject>(exec, JSNavigatorPrototypeTable, thisObject, propertyName, slot);
}

const ClassInfo JSNavigator::s_info = { "Navigator", &Base::s_info, &JSNavigatorTable, 0 , CREATE_METHOD_TABLE(JSNavigator) };

JSNavigator::JSNavigator(Structure* structure, JSDOMGlobalObject* globalObject, PassRefPtr<Navigator> impl)
    : JSDOMWrapper(structure, globalObject)
    , m_impl(impl.leakRef())
{
}

void JSNavigator::finishCreation(VM& vm)
{
    Base::finishCreation(vm);
    ASSERT(inherits(info()));
}

JSObject* JSNavigator::createPrototype(VM& vm, JSGlobalObject* globalObject)
{
    return JSNavigatorPrototype::create(vm, globalObject, JSNavigatorPrototype::createStructure(vm, globalObject, globalObject->objectPrototype()));
}

void JSNavigator::destroy(JSC::JSCell* cell)
{
    JSNavigator* thisObject = static_cast<JSNavigator*>(cell);
    thisObject->JSNavigator::~JSNavigator();
}

JSNavigator::~JSNavigator()
{
    releaseImplIfNotNull();
}

bool JSNavigator::getOwnPropertySlot(JSObject* object, ExecState* exec, PropertyName propertyName, PropertySlot& slot)
{
    JSNavigator* thisObject = jsCast<JSNavigator*>(object);
    ASSERT_GC_OBJECT_INHERITS(thisObject, info());
    return getStaticValueSlot<JSNavigator, Base>(exec, JSNavigatorTable, thisObject, propertyName, slot);
}

EncodedJSValue jsNavigatorAppCodeName(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSNavigator* castedThis = jsDynamicCast<JSNavigator*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    Navigator& impl = castedThis->impl();
    JSValue result = jsStringWithCache(exec, impl.appCodeName());
    return JSValue::encode(result);
}


EncodedJSValue jsNavigatorAppName(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSNavigator* castedThis = jsDynamicCast<JSNavigator*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    Navigator& impl = castedThis->impl();
    JSValue result = jsStringWithCache(exec, impl.appName());
    return JSValue::encode(result);
}


EncodedJSValue jsNavigatorAppVersion(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSNavigator* castedThis = jsDynamicCast<JSNavigator*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    Navigator& impl = castedThis->impl();
    JSValue result = jsStringWithCache(exec, impl.appVersion());
    return JSValue::encode(result);
}


EncodedJSValue jsNavigatorLanguage(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSNavigator* castedThis = jsDynamicCast<JSNavigator*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    Navigator& impl = castedThis->impl();
    JSValue result = jsStringWithCache(exec, impl.language());
    return JSValue::encode(result);
}


EncodedJSValue jsNavigatorUserAgent(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSNavigator* castedThis = jsDynamicCast<JSNavigator*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    Navigator& impl = castedThis->impl();
    JSValue result = jsStringWithCache(exec, impl.userAgent());
    return JSValue::encode(result);
}


EncodedJSValue jsNavigatorPlatform(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSNavigator* castedThis = jsDynamicCast<JSNavigator*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    Navigator& impl = castedThis->impl();
    JSValue result = jsStringWithCache(exec, impl.platform());
    return JSValue::encode(result);
}


EncodedJSValue jsNavigatorPlugins(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSNavigator* castedThis = jsDynamicCast<JSNavigator*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    Navigator& impl = castedThis->impl();
    JSValue result = toJS(exec, castedThis->globalObject(), WTF::getPtr(impl.plugins()));
    return JSValue::encode(result);
}


EncodedJSValue jsNavigatorMimeTypes(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSNavigator* castedThis = jsDynamicCast<JSNavigator*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    Navigator& impl = castedThis->impl();
    JSValue result = toJS(exec, castedThis->globalObject(), WTF::getPtr(impl.mimeTypes()));
    return JSValue::encode(result);
}


EncodedJSValue jsNavigatorProduct(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSNavigator* castedThis = jsDynamicCast<JSNavigator*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    Navigator& impl = castedThis->impl();
    JSValue result = jsStringWithCache(exec, impl.product());
    return JSValue::encode(result);
}


EncodedJSValue jsNavigatorProductSub(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSNavigator* castedThis = jsDynamicCast<JSNavigator*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    Navigator& impl = castedThis->impl();
    JSValue result = jsStringWithCache(exec, impl.productSub());
    return JSValue::encode(result);
}


EncodedJSValue jsNavigatorVendor(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSNavigator* castedThis = jsDynamicCast<JSNavigator*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    Navigator& impl = castedThis->impl();
    JSValue result = jsStringWithCache(exec, impl.vendor());
    return JSValue::encode(result);
}


EncodedJSValue jsNavigatorVendorSub(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSNavigator* castedThis = jsDynamicCast<JSNavigator*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    Navigator& impl = castedThis->impl();
    JSValue result = jsStringWithCache(exec, impl.vendorSub());
    return JSValue::encode(result);
}


EncodedJSValue jsNavigatorCookieEnabled(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSNavigator* castedThis = jsDynamicCast<JSNavigator*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    Navigator& impl = castedThis->impl();
    JSValue result = jsBoolean(impl.cookieEnabled());
    return JSValue::encode(result);
}


EncodedJSValue jsNavigatorOnLine(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSNavigator* castedThis = jsDynamicCast<JSNavigator*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    Navigator& impl = castedThis->impl();
    JSValue result = jsBoolean(impl.onLine());
    return JSValue::encode(result);
}


#if ENABLE(GEOLOCATION)
EncodedJSValue jsNavigatorGeolocation(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSNavigator* castedThis = jsDynamicCast<JSNavigator*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    Navigator& impl = castedThis->impl();
    JSValue result = toJS(exec, castedThis->globalObject(), WTF::getPtr(NavigatorGeolocation::geolocation(&impl)));
    return JSValue::encode(result);
}

#endif

#if ENABLE(QUOTA)
EncodedJSValue jsNavigatorWebkitTemporaryStorage(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSNavigator* castedThis = jsDynamicCast<JSNavigator*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    Navigator& impl = castedThis->impl();
    JSValue result = toJS(exec, castedThis->globalObject(), WTF::getPtr(NavigatorStorageQuota::webkitTemporaryStorage(&impl)));
    return JSValue::encode(result);
}

#endif

#if ENABLE(QUOTA)
EncodedJSValue jsNavigatorWebkitPersistentStorage(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSNavigator* castedThis = jsDynamicCast<JSNavigator*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    Navigator& impl = castedThis->impl();
    JSValue result = toJS(exec, castedThis->globalObject(), WTF::getPtr(NavigatorStorageQuota::webkitPersistentStorage(&impl)));
    return JSValue::encode(result);
}

#endif

EncodedJSValue jsNavigatorConstructor(ExecState* exec, EncodedJSValue thisValue, EncodedJSValue, PropertyName)
{
    JSNavigator* domObject = jsDynamicCast<JSNavigator*>(JSValue::decode(thisValue));
    if (!domObject)
        return throwVMTypeError(exec);
    if (!domObject)
        return throwVMTypeError(exec);
    return JSValue::encode(JSNavigator::getConstructor(exec->vm(), domObject->globalObject()));
}

JSValue JSNavigator::getConstructor(VM& vm, JSGlobalObject* globalObject)
{
    return getDOMConstructor<JSNavigatorConstructor>(vm, jsCast<JSDOMGlobalObject*>(globalObject));
}

EncodedJSValue JSC_HOST_CALL jsNavigatorPrototypeFunctionJavaEnabled(ExecState* exec)
{
    JSValue thisValue = exec->hostThisValue();
    JSNavigator* castedThis = jsDynamicCast<JSNavigator*>(thisValue);
    if (!castedThis)
        return throwVMTypeError(exec);
    ASSERT_GC_OBJECT_INHERITS(castedThis, JSNavigator::info());
    Navigator& impl = castedThis->impl();

    JSC::JSValue result = jsBoolean(impl.javaEnabled());
    return JSValue::encode(result);
}

EncodedJSValue JSC_HOST_CALL jsNavigatorPrototypeFunctionGetStorageUpdates(ExecState* exec)
{
    JSValue thisValue = exec->hostThisValue();
    JSNavigator* castedThis = jsDynamicCast<JSNavigator*>(thisValue);
    if (!castedThis)
        return throwVMTypeError(exec);
    ASSERT_GC_OBJECT_INHERITS(castedThis, JSNavigator::info());
    Navigator& impl = castedThis->impl();
    impl.getStorageUpdates();
    return JSValue::encode(jsUndefined());
}

#if ENABLE(MEDIA_STREAM)
EncodedJSValue JSC_HOST_CALL jsNavigatorPrototypeFunctionWebkitGetUserMedia(ExecState* exec)
{
    JSValue thisValue = exec->hostThisValue();
    JSNavigator* castedThis = jsDynamicCast<JSNavigator*>(thisValue);
    if (!castedThis)
        return throwVMTypeError(exec);
    ASSERT_GC_OBJECT_INHERITS(castedThis, JSNavigator::info());
    Navigator& impl = castedThis->impl();
    if (exec->argumentCount() < 2)
        return throwVMError(exec, createNotEnoughArgumentsError(exec));
    ExceptionCode ec = 0;
    Dictionary options(exec, exec->argument(0));
    if (exec->hadException())
        return JSValue::encode(jsUndefined());
    if (!exec->argument(1).isFunction())
        return throwVMTypeError(exec);
    RefPtr<NavigatorUserMediaSuccessCallback> successCallback = JSNavigatorUserMediaSuccessCallback::create(asObject(exec->uncheckedArgument(1)), castedThis->globalObject());
    RefPtr<NavigatorUserMediaErrorCallback> errorCallback;
    if (!exec->argument(2).isUndefinedOrNull()) {
        if (!exec->uncheckedArgument(2).isFunction())
            return throwVMTypeError(exec);
        errorCallback = JSNavigatorUserMediaErrorCallback::create(asObject(exec->uncheckedArgument(2)), castedThis->globalObject());
    }
    NavigatorMediaStream::webkitGetUserMedia(&impl, options, successCallback, errorCallback, ec);
    setDOMException(exec, ec);
    return JSValue::encode(jsUndefined());
}

#endif

static inline bool isObservable(JSNavigator* jsNavigator)
{
    if (jsNavigator->hasCustomProperties())
        return true;
    return false;
}

bool JSNavigatorOwner::isReachableFromOpaqueRoots(JSC::Handle<JSC::Unknown> handle, void*, SlotVisitor& visitor)
{
    JSNavigator* jsNavigator = jsCast<JSNavigator*>(handle.get().asCell());
    if (!isObservable(jsNavigator))
        return false;
    Frame* root = jsNavigator->impl().frame();
    if (!root)
        return false;
    return visitor.containsOpaqueRoot(root);
}

void JSNavigatorOwner::finalize(JSC::Handle<JSC::Unknown> handle, void* context)
{
    JSNavigator* jsNavigator = jsCast<JSNavigator*>(handle.get().asCell());
    DOMWrapperWorld& world = *static_cast<DOMWrapperWorld*>(context);
    uncacheWrapper(world, &jsNavigator->impl(), jsNavigator);
    jsNavigator->releaseImpl();
}

#if ENABLE(BINDING_INTEGRITY)
#if PLATFORM(WIN)
#pragma warning(disable: 4483)
extern "C" { extern void (*const __identifier("??_7Navigator@WebCore@@6B@")[])(); }
#else
extern "C" { extern void* _ZTVN7WebCore9NavigatorE[]; }
#endif
#endif
JSC::JSValue toJS(JSC::ExecState* exec, JSDOMGlobalObject* globalObject, Navigator* impl)
{
    if (!impl)
        return jsNull();
    if (JSValue result = getExistingWrapper<JSNavigator>(exec, impl))
        return result;

#if ENABLE(BINDING_INTEGRITY)
    void* actualVTablePointer = *(reinterpret_cast<void**>(impl));
#if PLATFORM(WIN)
    void* expectedVTablePointer = reinterpret_cast<void*>(__identifier("??_7Navigator@WebCore@@6B@"));
#else
    void* expectedVTablePointer = &_ZTVN7WebCore9NavigatorE[2];
#if COMPILER(CLANG)
    // If this fails Navigator does not have a vtable, so you need to add the
    // ImplementationLacksVTable attribute to the interface definition
    COMPILE_ASSERT(__is_polymorphic(Navigator), Navigator_is_not_polymorphic);
#endif
#endif
    // If you hit this assertion you either have a use after free bug, or
    // Navigator has subclasses. If Navigator has subclasses that get passed
    // to toJS() we currently require Navigator you to opt out of binding hardening
    // by adding the SkipVTableValidation attribute to the interface IDL definition
    RELEASE_ASSERT(actualVTablePointer == expectedVTablePointer);
#endif
    ReportMemoryCost<Navigator>::reportMemoryCost(exec, impl);
    return createNewWrapper<JSNavigator>(exec, globalObject, impl);
}

Navigator* toNavigator(JSC::JSValue value)
{
    return value.inherits(JSNavigator::info()) ? &jsCast<JSNavigator*>(value)->impl() : 0;
}

}
