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

#if ENABLE(SVG)

#include "JSSVGAnimatedString.h"

#include "URL.h"
#include <runtime/JSString.h>
#include <wtf/GetPtr.h>

using namespace JSC;

namespace WebCore {

/* Hash table */

static const HashTableValue JSSVGAnimatedStringTableValues[] =
{
    { "baseVal", DontDelete, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsSVGAnimatedStringBaseVal), (intptr_t)setJSSVGAnimatedStringBaseVal },
    { "animVal", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsSVGAnimatedStringAnimVal), (intptr_t)0 },
    { "constructor", DontEnum | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsSVGAnimatedStringConstructor), (intptr_t)0 },
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSSVGAnimatedStringTable = { 8, 7, JSSVGAnimatedStringTableValues, 0 };
/* Hash table for constructor */

static const HashTableValue JSSVGAnimatedStringConstructorTableValues[] =
{
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSSVGAnimatedStringConstructorTable = { 1, 0, JSSVGAnimatedStringConstructorTableValues, 0 };
const ClassInfo JSSVGAnimatedStringConstructor::s_info = { "SVGAnimatedStringConstructor", &Base::s_info, &JSSVGAnimatedStringConstructorTable, 0, CREATE_METHOD_TABLE(JSSVGAnimatedStringConstructor) };

JSSVGAnimatedStringConstructor::JSSVGAnimatedStringConstructor(Structure* structure, JSDOMGlobalObject* globalObject)
    : DOMConstructorObject(structure, globalObject)
{
}

void JSSVGAnimatedStringConstructor::finishCreation(VM& vm, JSDOMGlobalObject* globalObject)
{
    Base::finishCreation(vm);
    ASSERT(inherits(info()));
    putDirect(vm, vm.propertyNames->prototype, JSSVGAnimatedStringPrototype::self(vm, globalObject), DontDelete | ReadOnly);
    putDirect(vm, vm.propertyNames->length, jsNumber(0), ReadOnly | DontDelete | DontEnum);
}

bool JSSVGAnimatedStringConstructor::getOwnPropertySlot(JSObject* object, ExecState* exec, PropertyName propertyName, PropertySlot& slot)
{
    return getStaticValueSlot<JSSVGAnimatedStringConstructor, JSDOMWrapper>(exec, JSSVGAnimatedStringConstructorTable, jsCast<JSSVGAnimatedStringConstructor*>(object), propertyName, slot);
}

/* Hash table for prototype */

static const HashTableValue JSSVGAnimatedStringPrototypeTableValues[] =
{
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSSVGAnimatedStringPrototypeTable = { 1, 0, JSSVGAnimatedStringPrototypeTableValues, 0 };
const ClassInfo JSSVGAnimatedStringPrototype::s_info = { "SVGAnimatedStringPrototype", &Base::s_info, &JSSVGAnimatedStringPrototypeTable, 0, CREATE_METHOD_TABLE(JSSVGAnimatedStringPrototype) };

JSObject* JSSVGAnimatedStringPrototype::self(VM& vm, JSGlobalObject* globalObject)
{
    return getDOMPrototype<JSSVGAnimatedString>(vm, globalObject);
}

const ClassInfo JSSVGAnimatedString::s_info = { "SVGAnimatedString", &Base::s_info, &JSSVGAnimatedStringTable, 0 , CREATE_METHOD_TABLE(JSSVGAnimatedString) };

JSSVGAnimatedString::JSSVGAnimatedString(Structure* structure, JSDOMGlobalObject* globalObject, PassRefPtr<SVGAnimatedString> impl)
    : JSDOMWrapper(structure, globalObject)
    , m_impl(impl.leakRef())
{
}

void JSSVGAnimatedString::finishCreation(VM& vm)
{
    Base::finishCreation(vm);
    ASSERT(inherits(info()));
}

JSObject* JSSVGAnimatedString::createPrototype(VM& vm, JSGlobalObject* globalObject)
{
    return JSSVGAnimatedStringPrototype::create(vm, globalObject, JSSVGAnimatedStringPrototype::createStructure(vm, globalObject, globalObject->objectPrototype()));
}

void JSSVGAnimatedString::destroy(JSC::JSCell* cell)
{
    JSSVGAnimatedString* thisObject = static_cast<JSSVGAnimatedString*>(cell);
    thisObject->JSSVGAnimatedString::~JSSVGAnimatedString();
}

JSSVGAnimatedString::~JSSVGAnimatedString()
{
    releaseImplIfNotNull();
}

bool JSSVGAnimatedString::getOwnPropertySlot(JSObject* object, ExecState* exec, PropertyName propertyName, PropertySlot& slot)
{
    JSSVGAnimatedString* thisObject = jsCast<JSSVGAnimatedString*>(object);
    ASSERT_GC_OBJECT_INHERITS(thisObject, info());
    return getStaticValueSlot<JSSVGAnimatedString, Base>(exec, JSSVGAnimatedStringTable, thisObject, propertyName, slot);
}

EncodedJSValue jsSVGAnimatedStringBaseVal(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSSVGAnimatedString* castedThis = jsDynamicCast<JSSVGAnimatedString*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    SVGAnimatedString& impl = castedThis->impl();
    JSValue result = jsStringWithCache(exec, impl.baseVal());
    return JSValue::encode(result);
}


EncodedJSValue jsSVGAnimatedStringAnimVal(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSSVGAnimatedString* castedThis = jsDynamicCast<JSSVGAnimatedString*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    SVGAnimatedString& impl = castedThis->impl();
    JSValue result = jsStringWithCache(exec, impl.animVal());
    return JSValue::encode(result);
}


EncodedJSValue jsSVGAnimatedStringConstructor(ExecState* exec, EncodedJSValue thisValue, EncodedJSValue, PropertyName)
{
    JSSVGAnimatedString* domObject = jsDynamicCast<JSSVGAnimatedString*>(JSValue::decode(thisValue));
    if (!domObject)
        return throwVMTypeError(exec);
    if (!domObject)
        return throwVMTypeError(exec);
    return JSValue::encode(JSSVGAnimatedString::getConstructor(exec->vm(), domObject->globalObject()));
}

void JSSVGAnimatedString::put(JSCell* cell, ExecState* exec, PropertyName propertyName, JSValue value, PutPropertySlot& slot)
{
    JSSVGAnimatedString* thisObject = jsCast<JSSVGAnimatedString*>(cell);
    ASSERT_GC_OBJECT_INHERITS(thisObject, info());
    lookupPut<JSSVGAnimatedString, Base>(exec, propertyName, value, JSSVGAnimatedStringTable, thisObject, slot);
}

void setJSSVGAnimatedStringBaseVal(ExecState* exec, EncodedJSValue thisValue, EncodedJSValue encodedValue)
{
    JSValue value = JSValue::decode(encodedValue);
    UNUSED_PARAM(exec);
    JSSVGAnimatedString* castedThis = jsDynamicCast<JSSVGAnimatedString*>(JSValue::decode(thisValue));
    if (!castedThis) {
        throwVMTypeError(exec);
        return;
    }
    SVGAnimatedString& impl = castedThis->impl();
    ExceptionCode ec = 0;
    const String& nativeValue(value.isEmpty() ? String() : value.toString(exec)->value(exec));
    if (exec->hadException())
        return;
    impl.setBaseVal(nativeValue, ec);
    setDOMException(exec, ec);
}


JSValue JSSVGAnimatedString::getConstructor(VM& vm, JSGlobalObject* globalObject)
{
    return getDOMConstructor<JSSVGAnimatedStringConstructor>(vm, jsCast<JSDOMGlobalObject*>(globalObject));
}

bool JSSVGAnimatedStringOwner::isReachableFromOpaqueRoots(JSC::Handle<JSC::Unknown> handle, void*, SlotVisitor& visitor)
{
    UNUSED_PARAM(handle);
    UNUSED_PARAM(visitor);
    return false;
}

void JSSVGAnimatedStringOwner::finalize(JSC::Handle<JSC::Unknown> handle, void* context)
{
    JSSVGAnimatedString* jsSVGAnimatedString = jsCast<JSSVGAnimatedString*>(handle.get().asCell());
    DOMWrapperWorld& world = *static_cast<DOMWrapperWorld*>(context);
    uncacheWrapper(world, &jsSVGAnimatedString->impl(), jsSVGAnimatedString);
    jsSVGAnimatedString->releaseImpl();
}

JSC::JSValue toJS(JSC::ExecState* exec, JSDOMGlobalObject* globalObject, SVGAnimatedString* impl)
{
    if (!impl)
        return jsNull();
    if (JSValue result = getExistingWrapper<JSSVGAnimatedString>(exec, impl))
        return result;
    ReportMemoryCost<SVGAnimatedString>::reportMemoryCost(exec, impl);
    return createNewWrapper<JSSVGAnimatedString>(exec, globalObject, impl);
}

SVGAnimatedString* toSVGAnimatedString(JSC::JSValue value)
{
    return value.inherits(JSSVGAnimatedString::info()) ? &jsCast<JSSVGAnimatedString*>(value)->impl() : 0;
}

}

#endif // ENABLE(SVG)
