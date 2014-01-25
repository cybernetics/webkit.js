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
#include "JSDOMMimeTypeArray.h"

#include "DOMMimeType.h"
#include "DOMMimeTypeArray.h"
#include "ExceptionCode.h"
#include "JSDOMBinding.h"
#include "JSDOMMimeType.h"
#include "wtf/text/AtomicString.h"
#include <runtime/Error.h>
#include <runtime/PropertyNameArray.h>
#include <wtf/GetPtr.h>

using namespace JSC;

namespace WebCore {

/* Hash table */

static const HashTableValue JSDOMMimeTypeArrayTableValues[] =
{
    { "length", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsDOMMimeTypeArrayLength), (intptr_t)0 },
    { "constructor", DontEnum | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsDOMMimeTypeArrayConstructor), (intptr_t)0 },
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSDOMMimeTypeArrayTable = { 5, 3, JSDOMMimeTypeArrayTableValues, 0 };
/* Hash table for constructor */

static const HashTableValue JSDOMMimeTypeArrayConstructorTableValues[] =
{
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSDOMMimeTypeArrayConstructorTable = { 1, 0, JSDOMMimeTypeArrayConstructorTableValues, 0 };
const ClassInfo JSDOMMimeTypeArrayConstructor::s_info = { "MimeTypeArrayConstructor", &Base::s_info, &JSDOMMimeTypeArrayConstructorTable, 0, CREATE_METHOD_TABLE(JSDOMMimeTypeArrayConstructor) };

JSDOMMimeTypeArrayConstructor::JSDOMMimeTypeArrayConstructor(Structure* structure, JSDOMGlobalObject* globalObject)
    : DOMConstructorObject(structure, globalObject)
{
}

void JSDOMMimeTypeArrayConstructor::finishCreation(VM& vm, JSDOMGlobalObject* globalObject)
{
    Base::finishCreation(vm);
    ASSERT(inherits(info()));
    putDirect(vm, vm.propertyNames->prototype, JSDOMMimeTypeArrayPrototype::self(vm, globalObject), DontDelete | ReadOnly);
    putDirect(vm, vm.propertyNames->length, jsNumber(0), ReadOnly | DontDelete | DontEnum);
}

bool JSDOMMimeTypeArrayConstructor::getOwnPropertySlot(JSObject* object, ExecState* exec, PropertyName propertyName, PropertySlot& slot)
{
    return getStaticValueSlot<JSDOMMimeTypeArrayConstructor, JSDOMWrapper>(exec, JSDOMMimeTypeArrayConstructorTable, jsCast<JSDOMMimeTypeArrayConstructor*>(object), propertyName, slot);
}

/* Hash table for prototype */

static const HashTableValue JSDOMMimeTypeArrayPrototypeTableValues[] =
{
    { "item", JSC::Function, NoIntrinsic, (intptr_t)static_cast<NativeFunction>(jsDOMMimeTypeArrayPrototypeFunctionItem), (intptr_t)0 },
    { "namedItem", JSC::Function, NoIntrinsic, (intptr_t)static_cast<NativeFunction>(jsDOMMimeTypeArrayPrototypeFunctionNamedItem), (intptr_t)0 },
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSDOMMimeTypeArrayPrototypeTable = { 5, 3, JSDOMMimeTypeArrayPrototypeTableValues, 0 };
const ClassInfo JSDOMMimeTypeArrayPrototype::s_info = { "MimeTypeArrayPrototype", &Base::s_info, &JSDOMMimeTypeArrayPrototypeTable, 0, CREATE_METHOD_TABLE(JSDOMMimeTypeArrayPrototype) };

JSObject* JSDOMMimeTypeArrayPrototype::self(VM& vm, JSGlobalObject* globalObject)
{
    return getDOMPrototype<JSDOMMimeTypeArray>(vm, globalObject);
}

bool JSDOMMimeTypeArrayPrototype::getOwnPropertySlot(JSObject* object, ExecState* exec, PropertyName propertyName, PropertySlot& slot)
{
    JSDOMMimeTypeArrayPrototype* thisObject = jsCast<JSDOMMimeTypeArrayPrototype*>(object);
    return getStaticFunctionSlot<JSObject>(exec, JSDOMMimeTypeArrayPrototypeTable, thisObject, propertyName, slot);
}

const ClassInfo JSDOMMimeTypeArray::s_info = { "MimeTypeArray", &Base::s_info, &JSDOMMimeTypeArrayTable, 0 , CREATE_METHOD_TABLE(JSDOMMimeTypeArray) };

JSDOMMimeTypeArray::JSDOMMimeTypeArray(Structure* structure, JSDOMGlobalObject* globalObject, PassRefPtr<DOMMimeTypeArray> impl)
    : JSDOMWrapper(structure, globalObject)
    , m_impl(impl.leakRef())
{
}

void JSDOMMimeTypeArray::finishCreation(VM& vm)
{
    Base::finishCreation(vm);
    ASSERT(inherits(info()));
}

JSObject* JSDOMMimeTypeArray::createPrototype(VM& vm, JSGlobalObject* globalObject)
{
    return JSDOMMimeTypeArrayPrototype::create(vm, globalObject, JSDOMMimeTypeArrayPrototype::createStructure(vm, globalObject, globalObject->objectPrototype()));
}

void JSDOMMimeTypeArray::destroy(JSC::JSCell* cell)
{
    JSDOMMimeTypeArray* thisObject = static_cast<JSDOMMimeTypeArray*>(cell);
    thisObject->JSDOMMimeTypeArray::~JSDOMMimeTypeArray();
}

JSDOMMimeTypeArray::~JSDOMMimeTypeArray()
{
    releaseImplIfNotNull();
}

bool JSDOMMimeTypeArray::getOwnPropertySlot(JSObject* object, ExecState* exec, PropertyName propertyName, PropertySlot& slot)
{
    JSDOMMimeTypeArray* thisObject = jsCast<JSDOMMimeTypeArray*>(object);
    ASSERT_GC_OBJECT_INHERITS(thisObject, info());
    const HashEntry* entry = getStaticValueSlotEntryWithoutCaching<JSDOMMimeTypeArray>(exec, propertyName);
    if (entry) {
        slot.setCustom(thisObject, entry->attributes(), entry->propertyGetter());
        return true;
    }
    unsigned index = propertyName.asIndex();
    if (index != PropertyName::NotAnIndex && index < thisObject->impl().length()) {
        unsigned attributes = DontDelete | ReadOnly;
        slot.setCustomIndex(thisObject, attributes, index, indexGetter);
        return true;
    }
    if (canGetItemsForName(exec, &thisObject->impl(), propertyName)) {
        slot.setCustom(thisObject, ReadOnly | DontDelete | DontEnum, thisObject->nameGetter);
        return true;
    }
    return getStaticValueSlot<JSDOMMimeTypeArray, Base>(exec, JSDOMMimeTypeArrayTable, thisObject, propertyName, slot);
}

bool JSDOMMimeTypeArray::getOwnPropertySlotByIndex(JSObject* object, ExecState* exec, unsigned index, PropertySlot& slot)
{
    JSDOMMimeTypeArray* thisObject = jsCast<JSDOMMimeTypeArray*>(object);
    ASSERT_GC_OBJECT_INHERITS(thisObject, info());
    if (index < thisObject->impl().length()) {
        unsigned attributes = DontDelete | ReadOnly;
        slot.setCustomIndex(thisObject, attributes, index, thisObject->indexGetter);
        return true;
    }
    PropertyName propertyName = Identifier::from(exec, index);
    if (canGetItemsForName(exec, &thisObject->impl(), propertyName)) {
        slot.setCustom(thisObject, ReadOnly | DontDelete | DontEnum, thisObject->nameGetter);
        return true;
    }
    return Base::getOwnPropertySlotByIndex(thisObject, exec, index, slot);
}

EncodedJSValue jsDOMMimeTypeArrayLength(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSDOMMimeTypeArray* castedThis = jsDynamicCast<JSDOMMimeTypeArray*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    DOMMimeTypeArray& impl = castedThis->impl();
    JSValue result = jsNumber(impl.length());
    return JSValue::encode(result);
}


EncodedJSValue jsDOMMimeTypeArrayConstructor(ExecState* exec, EncodedJSValue thisValue, EncodedJSValue, PropertyName)
{
    JSDOMMimeTypeArray* domObject = jsDynamicCast<JSDOMMimeTypeArray*>(JSValue::decode(thisValue));
    if (!domObject)
        return throwVMTypeError(exec);
    if (!domObject)
        return throwVMTypeError(exec);
    return JSValue::encode(JSDOMMimeTypeArray::getConstructor(exec->vm(), domObject->globalObject()));
}

void JSDOMMimeTypeArray::getOwnPropertyNames(JSObject* object, ExecState* exec, PropertyNameArray& propertyNames, EnumerationMode mode)
{
    JSDOMMimeTypeArray* thisObject = jsCast<JSDOMMimeTypeArray*>(object);
    ASSERT_GC_OBJECT_INHERITS(thisObject, info());
    for (unsigned i = 0, count = thisObject->impl().length(); i < count; ++i)
        propertyNames.add(Identifier::from(exec, i));
     Base::getOwnPropertyNames(thisObject, exec, propertyNames, mode);
}

JSValue JSDOMMimeTypeArray::getConstructor(VM& vm, JSGlobalObject* globalObject)
{
    return getDOMConstructor<JSDOMMimeTypeArrayConstructor>(vm, jsCast<JSDOMGlobalObject*>(globalObject));
}

EncodedJSValue JSC_HOST_CALL jsDOMMimeTypeArrayPrototypeFunctionItem(ExecState* exec)
{
    JSValue thisValue = exec->hostThisValue();
    JSDOMMimeTypeArray* castedThis = jsDynamicCast<JSDOMMimeTypeArray*>(thisValue);
    if (!castedThis)
        return throwVMTypeError(exec);
    ASSERT_GC_OBJECT_INHERITS(castedThis, JSDOMMimeTypeArray::info());
    DOMMimeTypeArray& impl = castedThis->impl();
    unsigned index(toUInt32(exec, exec->argument(0), NormalConversion));
    if (exec->hadException())
        return JSValue::encode(jsUndefined());

    JSC::JSValue result = toJS(exec, castedThis->globalObject(), WTF::getPtr(impl.item(index)));
    return JSValue::encode(result);
}

EncodedJSValue JSC_HOST_CALL jsDOMMimeTypeArrayPrototypeFunctionNamedItem(ExecState* exec)
{
    JSValue thisValue = exec->hostThisValue();
    JSDOMMimeTypeArray* castedThis = jsDynamicCast<JSDOMMimeTypeArray*>(thisValue);
    if (!castedThis)
        return throwVMTypeError(exec);
    ASSERT_GC_OBJECT_INHERITS(castedThis, JSDOMMimeTypeArray::info());
    DOMMimeTypeArray& impl = castedThis->impl();
    const String& name(exec->argument(0).isEmpty() ? String() : exec->argument(0).toString(exec)->value(exec));
    if (exec->hadException())
        return JSValue::encode(jsUndefined());

    JSC::JSValue result = toJS(exec, castedThis->globalObject(), WTF::getPtr(impl.namedItem(name)));
    return JSValue::encode(result);
}


EncodedJSValue JSDOMMimeTypeArray::indexGetter(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue, unsigned index)
{
    JSDOMMimeTypeArray* thisObj = jsCast<JSDOMMimeTypeArray*>(JSValue::decode(slotBase));
    ASSERT_GC_OBJECT_INHERITS(thisObj, info());
    return JSValue::encode(toJS(exec, thisObj->globalObject(), thisObj->impl().item(index)));
}

static inline bool isObservable(JSDOMMimeTypeArray* jsDOMMimeTypeArray)
{
    if (jsDOMMimeTypeArray->hasCustomProperties())
        return true;
    return false;
}

bool JSDOMMimeTypeArrayOwner::isReachableFromOpaqueRoots(JSC::Handle<JSC::Unknown> handle, void*, SlotVisitor& visitor)
{
    JSDOMMimeTypeArray* jsDOMMimeTypeArray = jsCast<JSDOMMimeTypeArray*>(handle.get().asCell());
    if (!isObservable(jsDOMMimeTypeArray))
        return false;
    Frame* root = jsDOMMimeTypeArray->impl().frame();
    if (!root)
        return false;
    return visitor.containsOpaqueRoot(root);
}

void JSDOMMimeTypeArrayOwner::finalize(JSC::Handle<JSC::Unknown> handle, void* context)
{
    JSDOMMimeTypeArray* jsDOMMimeTypeArray = jsCast<JSDOMMimeTypeArray*>(handle.get().asCell());
    DOMWrapperWorld& world = *static_cast<DOMWrapperWorld*>(context);
    uncacheWrapper(world, &jsDOMMimeTypeArray->impl(), jsDOMMimeTypeArray);
    jsDOMMimeTypeArray->releaseImpl();
}

#if ENABLE(BINDING_INTEGRITY)
#if PLATFORM(WIN)
#pragma warning(disable: 4483)
extern "C" { extern void (*const __identifier("??_7DOMMimeTypeArray@WebCore@@6B@")[])(); }
#else
extern "C" { extern void* _ZTVN7WebCore16DOMMimeTypeArrayE[]; }
#endif
#endif
JSC::JSValue toJS(JSC::ExecState* exec, JSDOMGlobalObject* globalObject, DOMMimeTypeArray* impl)
{
    if (!impl)
        return jsNull();
    if (JSValue result = getExistingWrapper<JSDOMMimeTypeArray>(exec, impl))
        return result;

#if ENABLE(BINDING_INTEGRITY)
    void* actualVTablePointer = *(reinterpret_cast<void**>(impl));
#if PLATFORM(WIN)
    void* expectedVTablePointer = reinterpret_cast<void*>(__identifier("??_7DOMMimeTypeArray@WebCore@@6B@"));
#else
    void* expectedVTablePointer = &_ZTVN7WebCore16DOMMimeTypeArrayE[2];
#if COMPILER(CLANG)
    // If this fails DOMMimeTypeArray does not have a vtable, so you need to add the
    // ImplementationLacksVTable attribute to the interface definition
    COMPILE_ASSERT(__is_polymorphic(DOMMimeTypeArray), DOMMimeTypeArray_is_not_polymorphic);
#endif
#endif
    // If you hit this assertion you either have a use after free bug, or
    // DOMMimeTypeArray has subclasses. If DOMMimeTypeArray has subclasses that get passed
    // to toJS() we currently require DOMMimeTypeArray you to opt out of binding hardening
    // by adding the SkipVTableValidation attribute to the interface IDL definition
    RELEASE_ASSERT(actualVTablePointer == expectedVTablePointer);
#endif
    ReportMemoryCost<DOMMimeTypeArray>::reportMemoryCost(exec, impl);
    return createNewWrapper<JSDOMMimeTypeArray>(exec, globalObject, impl);
}

DOMMimeTypeArray* toDOMMimeTypeArray(JSC::JSValue value)
{
    return value.inherits(JSDOMMimeTypeArray::info()) ? &jsCast<JSDOMMimeTypeArray*>(value)->impl() : 0;
}

}