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

#if ENABLE(INDEXED_DATABASE)

#include "JSIDBIndex.h"

#include "ExceptionCode.h"
#include "IDBAny.h"
#include "IDBIndex.h"
#include "IDBObjectStore.h"
#include "IDBRequest.h"
#include "JSDOMBinding.h"
#include "JSIDBAny.h"
#include "JSIDBKeyRange.h"
#include "JSIDBObjectStore.h"
#include "JSIDBRequest.h"
#include "URL.h"
#include <runtime/Error.h>
#include <runtime/JSString.h>
#include <wtf/GetPtr.h>

using namespace JSC;

namespace WebCore {

/* Hash table */

static const HashTableValue JSIDBIndexTableValues[] =
{
    { "name", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsIDBIndexName), (intptr_t)0 },
    { "objectStore", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsIDBIndexObjectStore), (intptr_t)0 },
    { "keyPath", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsIDBIndexKeyPath), (intptr_t)0 },
    { "multiEntry", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsIDBIndexMultiEntry), (intptr_t)0 },
    { "unique", DontDelete | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsIDBIndexUnique), (intptr_t)0 },
    { "constructor", DontEnum | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsIDBIndexConstructor), (intptr_t)0 },
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSIDBIndexTable = { 17, 15, JSIDBIndexTableValues, 0 };
/* Hash table for constructor */

static const HashTableValue JSIDBIndexConstructorTableValues[] =
{
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSIDBIndexConstructorTable = { 1, 0, JSIDBIndexConstructorTableValues, 0 };
static const HashTable& getJSIDBIndexConstructorTable(ExecState* exec)
{
    return getHashTableForGlobalData(exec->vm(), JSIDBIndexConstructorTable);
}

const ClassInfo JSIDBIndexConstructor::s_info = { "IDBIndexConstructor", &Base::s_info, 0, getJSIDBIndexConstructorTable, CREATE_METHOD_TABLE(JSIDBIndexConstructor) };

JSIDBIndexConstructor::JSIDBIndexConstructor(Structure* structure, JSDOMGlobalObject* globalObject)
    : DOMConstructorObject(structure, globalObject)
{
}

void JSIDBIndexConstructor::finishCreation(VM& vm, JSDOMGlobalObject* globalObject)
{
    Base::finishCreation(vm);
    ASSERT(inherits(info()));
    putDirect(vm, vm.propertyNames->prototype, JSIDBIndexPrototype::self(vm, globalObject), DontDelete | ReadOnly);
    putDirect(vm, vm.propertyNames->length, jsNumber(0), ReadOnly | DontDelete | DontEnum);
}

bool JSIDBIndexConstructor::getOwnPropertySlot(JSObject* object, ExecState* exec, PropertyName propertyName, PropertySlot& slot)
{
    return getStaticValueSlot<JSIDBIndexConstructor, JSDOMWrapper>(exec, getJSIDBIndexConstructorTable(exec), jsCast<JSIDBIndexConstructor*>(object), propertyName, slot);
}

/* Hash table for prototype */

static const HashTableValue JSIDBIndexPrototypeTableValues[] =
{
    { "openCursor", JSC::Function, NoIntrinsic, (intptr_t)static_cast<NativeFunction>(jsIDBIndexPrototypeFunctionOpenCursor), (intptr_t)0 },
    { "openKeyCursor", JSC::Function, NoIntrinsic, (intptr_t)static_cast<NativeFunction>(jsIDBIndexPrototypeFunctionOpenKeyCursor), (intptr_t)0 },
    { "get", JSC::Function, NoIntrinsic, (intptr_t)static_cast<NativeFunction>(jsIDBIndexPrototypeFunctionGet), (intptr_t)1 },
    { "getKey", JSC::Function, NoIntrinsic, (intptr_t)static_cast<NativeFunction>(jsIDBIndexPrototypeFunctionGetKey), (intptr_t)1 },
    { "count", JSC::Function, NoIntrinsic, (intptr_t)static_cast<NativeFunction>(jsIDBIndexPrototypeFunctionCount), (intptr_t)0 },
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSIDBIndexPrototypeTable = { 33, 31, JSIDBIndexPrototypeTableValues, 0 };
static const HashTable& getJSIDBIndexPrototypeTable(ExecState* exec)
{
    return getHashTableForGlobalData(exec->vm(), JSIDBIndexPrototypeTable);
}

const ClassInfo JSIDBIndexPrototype::s_info = { "IDBIndexPrototype", &Base::s_info, 0, getJSIDBIndexPrototypeTable, CREATE_METHOD_TABLE(JSIDBIndexPrototype) };

JSObject* JSIDBIndexPrototype::self(VM& vm, JSGlobalObject* globalObject)
{
    return getDOMPrototype<JSIDBIndex>(vm, globalObject);
}

bool JSIDBIndexPrototype::getOwnPropertySlot(JSObject* object, ExecState* exec, PropertyName propertyName, PropertySlot& slot)
{
    JSIDBIndexPrototype* thisObject = jsCast<JSIDBIndexPrototype*>(object);
    return getStaticFunctionSlot<JSObject>(exec, getJSIDBIndexPrototypeTable(exec), thisObject, propertyName, slot);
}

static const HashTable& getJSIDBIndexTable(ExecState* exec)
{
    return getHashTableForGlobalData(exec->vm(), JSIDBIndexTable);
}

const ClassInfo JSIDBIndex::s_info = { "IDBIndex", &Base::s_info, 0, getJSIDBIndexTable , CREATE_METHOD_TABLE(JSIDBIndex) };

JSIDBIndex::JSIDBIndex(Structure* structure, JSDOMGlobalObject* globalObject, PassRefPtr<IDBIndex> impl)
    : JSDOMWrapper(structure, globalObject)
    , m_impl(impl.leakRef())
{
}

void JSIDBIndex::finishCreation(VM& vm)
{
    Base::finishCreation(vm);
    ASSERT(inherits(info()));
}

JSObject* JSIDBIndex::createPrototype(VM& vm, JSGlobalObject* globalObject)
{
    return JSIDBIndexPrototype::create(vm, globalObject, JSIDBIndexPrototype::createStructure(vm, globalObject, globalObject->objectPrototype()));
}

void JSIDBIndex::destroy(JSC::JSCell* cell)
{
    JSIDBIndex* thisObject = static_cast<JSIDBIndex*>(cell);
    thisObject->JSIDBIndex::~JSIDBIndex();
}

JSIDBIndex::~JSIDBIndex()
{
    releaseImplIfNotNull();
}

bool JSIDBIndex::getOwnPropertySlot(JSObject* object, ExecState* exec, PropertyName propertyName, PropertySlot& slot)
{
    JSIDBIndex* thisObject = jsCast<JSIDBIndex*>(object);
    ASSERT_GC_OBJECT_INHERITS(thisObject, info());
    return getStaticValueSlot<JSIDBIndex, Base>(exec, getJSIDBIndexTable(exec), thisObject, propertyName, slot);
}

EncodedJSValue jsIDBIndexName(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSIDBIndex* castedThis = jsDynamicCast<JSIDBIndex*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    IDBIndex& impl = castedThis->impl();
    JSValue result = jsStringWithCache(exec, impl.name());
    return JSValue::encode(result);
}


EncodedJSValue jsIDBIndexObjectStore(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSIDBIndex* castedThis = jsDynamicCast<JSIDBIndex*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    IDBIndex& impl = castedThis->impl();
    JSValue result = toJS(exec, castedThis->globalObject(), WTF::getPtr(impl.objectStore()));
    return JSValue::encode(result);
}


EncodedJSValue jsIDBIndexKeyPath(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSIDBIndex* castedThis = jsDynamicCast<JSIDBIndex*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    IDBIndex& impl = castedThis->impl();
    JSValue result = toJS(exec, castedThis->globalObject(), WTF::getPtr(impl.keyPathAny()));
    return JSValue::encode(result);
}


EncodedJSValue jsIDBIndexMultiEntry(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSIDBIndex* castedThis = jsDynamicCast<JSIDBIndex*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    IDBIndex& impl = castedThis->impl();
    JSValue result = jsBoolean(impl.multiEntry());
    return JSValue::encode(result);
}


EncodedJSValue jsIDBIndexUnique(ExecState* exec, EncodedJSValue slotBase, EncodedJSValue thisValue, PropertyName)
{
    JSIDBIndex* castedThis = jsDynamicCast<JSIDBIndex*>(JSValue::decode(thisValue));
    UNUSED_PARAM(slotBase);
    if (!castedThis)
        return throwVMTypeError(exec);
    UNUSED_PARAM(exec);
    IDBIndex& impl = castedThis->impl();
    JSValue result = jsBoolean(impl.unique());
    return JSValue::encode(result);
}


EncodedJSValue jsIDBIndexConstructor(ExecState* exec, EncodedJSValue thisValue, EncodedJSValue, PropertyName)
{
    JSIDBIndex* domObject = jsDynamicCast<JSIDBIndex*>(JSValue::decode(thisValue));
    if (!domObject)
        return throwVMTypeError(exec);
    if (!domObject)
        return throwVMTypeError(exec);
    return JSValue::encode(JSIDBIndex::getConstructor(exec->vm(), domObject->globalObject()));
}

JSValue JSIDBIndex::getConstructor(VM& vm, JSGlobalObject* globalObject)
{
    return getDOMConstructor<JSIDBIndexConstructor>(vm, jsCast<JSDOMGlobalObject*>(globalObject));
}

static EncodedJSValue JSC_HOST_CALL jsIDBIndexPrototypeFunctionOpenCursor1(ExecState* exec)
{
    JSValue thisValue = exec->hostThisValue();
    JSIDBIndex* castedThis = jsDynamicCast<JSIDBIndex*>(thisValue);
    if (!castedThis)
        return throwVMTypeError(exec);
    ASSERT_GC_OBJECT_INHERITS(castedThis, JSIDBIndex::info());
    IDBIndex& impl = castedThis->impl();
    ExceptionCode ec = 0;
    ScriptExecutionContext* scriptContext = jsCast<JSDOMGlobalObject*>(exec->lexicalGlobalObject())->scriptExecutionContext();
    if (!scriptContext)
        return JSValue::encode(jsUndefined());

    size_t argsCount = exec->argumentCount();
    if (argsCount <= 0) {

        JSC::JSValue result = toJS(exec, castedThis->globalObject(), WTF::getPtr(impl.openCursor(scriptContext, ec)));
        setDOMException(exec, ec);
        return JSValue::encode(result);
    }

    IDBKeyRange* range(toIDBKeyRange(exec->argument(0)));
    if (exec->hadException())
        return JSValue::encode(jsUndefined());
    if (argsCount <= 1) {

        JSC::JSValue result = toJS(exec, castedThis->globalObject(), WTF::getPtr(impl.openCursor(scriptContext, range, ec)));
        setDOMException(exec, ec);
        return JSValue::encode(result);
    }

    const String& direction(exec->argument(1).isEmpty() ? String() : exec->argument(1).toString(exec)->value(exec));
    if (exec->hadException())
        return JSValue::encode(jsUndefined());

    JSC::JSValue result = toJS(exec, castedThis->globalObject(), WTF::getPtr(impl.openCursor(scriptContext, range, direction, ec)));
    setDOMException(exec, ec);
    return JSValue::encode(result);
}

static EncodedJSValue JSC_HOST_CALL jsIDBIndexPrototypeFunctionOpenCursor2(ExecState* exec)
{
    JSValue thisValue = exec->hostThisValue();
    JSIDBIndex* castedThis = jsDynamicCast<JSIDBIndex*>(thisValue);
    if (!castedThis)
        return throwVMTypeError(exec);
    ASSERT_GC_OBJECT_INHERITS(castedThis, JSIDBIndex::info());
    IDBIndex& impl = castedThis->impl();
    if (exec->argumentCount() < 1)
        return throwVMError(exec, createNotEnoughArgumentsError(exec));
    ExceptionCode ec = 0;
    ScriptExecutionContext* scriptContext = jsCast<JSDOMGlobalObject*>(exec->lexicalGlobalObject())->scriptExecutionContext();
    if (!scriptContext)
        return JSValue::encode(jsUndefined());
    Deprecated::ScriptValue key(exec->vm(), exec->argument(0));
    if (exec->hadException())
        return JSValue::encode(jsUndefined());

    size_t argsCount = exec->argumentCount();
    if (argsCount <= 1) {

        JSC::JSValue result = toJS(exec, castedThis->globalObject(), WTF::getPtr(impl.openCursor(scriptContext, key, ec)));
        setDOMException(exec, ec);
        return JSValue::encode(result);
    }

    const String& direction(exec->argument(1).isEmpty() ? String() : exec->argument(1).toString(exec)->value(exec));
    if (exec->hadException())
        return JSValue::encode(jsUndefined());

    JSC::JSValue result = toJS(exec, castedThis->globalObject(), WTF::getPtr(impl.openCursor(scriptContext, key, direction, ec)));
    setDOMException(exec, ec);
    return JSValue::encode(result);
}

EncodedJSValue JSC_HOST_CALL jsIDBIndexPrototypeFunctionOpenCursor(ExecState* exec)
{
    size_t argsCount = exec->argumentCount();
    JSValue arg0(exec->argument(0));
    if (argsCount == 0 || (argsCount == 1 && (arg0.isNull() || (arg0.isObject() && asObject(arg0)->inherits(JSIDBKeyRange::info())))) || (argsCount == 2 && (arg0.isNull() || (arg0.isObject() && asObject(arg0)->inherits(JSIDBKeyRange::info())))))
        return jsIDBIndexPrototypeFunctionOpenCursor1(exec);
    if (argsCount == 1 || argsCount == 2)
        return jsIDBIndexPrototypeFunctionOpenCursor2(exec);
    return throwVMTypeError(exec);
}

static EncodedJSValue JSC_HOST_CALL jsIDBIndexPrototypeFunctionOpenKeyCursor1(ExecState* exec)
{
    JSValue thisValue = exec->hostThisValue();
    JSIDBIndex* castedThis = jsDynamicCast<JSIDBIndex*>(thisValue);
    if (!castedThis)
        return throwVMTypeError(exec);
    ASSERT_GC_OBJECT_INHERITS(castedThis, JSIDBIndex::info());
    IDBIndex& impl = castedThis->impl();
    ExceptionCode ec = 0;
    ScriptExecutionContext* scriptContext = jsCast<JSDOMGlobalObject*>(exec->lexicalGlobalObject())->scriptExecutionContext();
    if (!scriptContext)
        return JSValue::encode(jsUndefined());

    size_t argsCount = exec->argumentCount();
    if (argsCount <= 0) {

        JSC::JSValue result = toJS(exec, castedThis->globalObject(), WTF::getPtr(impl.openKeyCursor(scriptContext, ec)));
        setDOMException(exec, ec);
        return JSValue::encode(result);
    }

    IDBKeyRange* range(toIDBKeyRange(exec->argument(0)));
    if (exec->hadException())
        return JSValue::encode(jsUndefined());
    if (argsCount <= 1) {

        JSC::JSValue result = toJS(exec, castedThis->globalObject(), WTF::getPtr(impl.openKeyCursor(scriptContext, range, ec)));
        setDOMException(exec, ec);
        return JSValue::encode(result);
    }

    const String& direction(exec->argument(1).isEmpty() ? String() : exec->argument(1).toString(exec)->value(exec));
    if (exec->hadException())
        return JSValue::encode(jsUndefined());

    JSC::JSValue result = toJS(exec, castedThis->globalObject(), WTF::getPtr(impl.openKeyCursor(scriptContext, range, direction, ec)));
    setDOMException(exec, ec);
    return JSValue::encode(result);
}

static EncodedJSValue JSC_HOST_CALL jsIDBIndexPrototypeFunctionOpenKeyCursor2(ExecState* exec)
{
    JSValue thisValue = exec->hostThisValue();
    JSIDBIndex* castedThis = jsDynamicCast<JSIDBIndex*>(thisValue);
    if (!castedThis)
        return throwVMTypeError(exec);
    ASSERT_GC_OBJECT_INHERITS(castedThis, JSIDBIndex::info());
    IDBIndex& impl = castedThis->impl();
    if (exec->argumentCount() < 1)
        return throwVMError(exec, createNotEnoughArgumentsError(exec));
    ExceptionCode ec = 0;
    ScriptExecutionContext* scriptContext = jsCast<JSDOMGlobalObject*>(exec->lexicalGlobalObject())->scriptExecutionContext();
    if (!scriptContext)
        return JSValue::encode(jsUndefined());
    Deprecated::ScriptValue key(exec->vm(), exec->argument(0));
    if (exec->hadException())
        return JSValue::encode(jsUndefined());

    size_t argsCount = exec->argumentCount();
    if (argsCount <= 1) {

        JSC::JSValue result = toJS(exec, castedThis->globalObject(), WTF::getPtr(impl.openKeyCursor(scriptContext, key, ec)));
        setDOMException(exec, ec);
        return JSValue::encode(result);
    }

    const String& direction(exec->argument(1).isEmpty() ? String() : exec->argument(1).toString(exec)->value(exec));
    if (exec->hadException())
        return JSValue::encode(jsUndefined());

    JSC::JSValue result = toJS(exec, castedThis->globalObject(), WTF::getPtr(impl.openKeyCursor(scriptContext, key, direction, ec)));
    setDOMException(exec, ec);
    return JSValue::encode(result);
}

EncodedJSValue JSC_HOST_CALL jsIDBIndexPrototypeFunctionOpenKeyCursor(ExecState* exec)
{
    size_t argsCount = exec->argumentCount();
    JSValue arg0(exec->argument(0));
    if (argsCount == 0 || (argsCount == 1 && (arg0.isNull() || (arg0.isObject() && asObject(arg0)->inherits(JSIDBKeyRange::info())))) || (argsCount == 2 && (arg0.isNull() || (arg0.isObject() && asObject(arg0)->inherits(JSIDBKeyRange::info())))))
        return jsIDBIndexPrototypeFunctionOpenKeyCursor1(exec);
    if (argsCount == 1 || argsCount == 2)
        return jsIDBIndexPrototypeFunctionOpenKeyCursor2(exec);
    return throwVMTypeError(exec);
}

static EncodedJSValue JSC_HOST_CALL jsIDBIndexPrototypeFunctionGet1(ExecState* exec)
{
    JSValue thisValue = exec->hostThisValue();
    JSIDBIndex* castedThis = jsDynamicCast<JSIDBIndex*>(thisValue);
    if (!castedThis)
        return throwVMTypeError(exec);
    ASSERT_GC_OBJECT_INHERITS(castedThis, JSIDBIndex::info());
    IDBIndex& impl = castedThis->impl();
    if (exec->argumentCount() < 1)
        return throwVMError(exec, createNotEnoughArgumentsError(exec));
    ExceptionCode ec = 0;
    ScriptExecutionContext* scriptContext = jsCast<JSDOMGlobalObject*>(exec->lexicalGlobalObject())->scriptExecutionContext();
    if (!scriptContext)
        return JSValue::encode(jsUndefined());
    IDBKeyRange* key(toIDBKeyRange(exec->argument(0)));
    if (exec->hadException())
        return JSValue::encode(jsUndefined());

    JSC::JSValue result = toJS(exec, castedThis->globalObject(), WTF::getPtr(impl.get(scriptContext, key, ec)));
    setDOMException(exec, ec);
    return JSValue::encode(result);
}

static EncodedJSValue JSC_HOST_CALL jsIDBIndexPrototypeFunctionGet2(ExecState* exec)
{
    JSValue thisValue = exec->hostThisValue();
    JSIDBIndex* castedThis = jsDynamicCast<JSIDBIndex*>(thisValue);
    if (!castedThis)
        return throwVMTypeError(exec);
    ASSERT_GC_OBJECT_INHERITS(castedThis, JSIDBIndex::info());
    IDBIndex& impl = castedThis->impl();
    if (exec->argumentCount() < 1)
        return throwVMError(exec, createNotEnoughArgumentsError(exec));
    ExceptionCode ec = 0;
    ScriptExecutionContext* scriptContext = jsCast<JSDOMGlobalObject*>(exec->lexicalGlobalObject())->scriptExecutionContext();
    if (!scriptContext)
        return JSValue::encode(jsUndefined());
    Deprecated::ScriptValue key(exec->vm(), exec->argument(0));
    if (exec->hadException())
        return JSValue::encode(jsUndefined());

    JSC::JSValue result = toJS(exec, castedThis->globalObject(), WTF::getPtr(impl.get(scriptContext, key, ec)));
    setDOMException(exec, ec);
    return JSValue::encode(result);
}

EncodedJSValue JSC_HOST_CALL jsIDBIndexPrototypeFunctionGet(ExecState* exec)
{
    size_t argsCount = exec->argumentCount();
    JSValue arg0(exec->argument(0));
    if ((argsCount == 1 && (arg0.isNull() || (arg0.isObject() && asObject(arg0)->inherits(JSIDBKeyRange::info())))))
        return jsIDBIndexPrototypeFunctionGet1(exec);
    if (argsCount == 1)
        return jsIDBIndexPrototypeFunctionGet2(exec);
    if (argsCount < 1)
        return throwVMError(exec, createNotEnoughArgumentsError(exec));
    return throwVMTypeError(exec);
}

static EncodedJSValue JSC_HOST_CALL jsIDBIndexPrototypeFunctionGetKey1(ExecState* exec)
{
    JSValue thisValue = exec->hostThisValue();
    JSIDBIndex* castedThis = jsDynamicCast<JSIDBIndex*>(thisValue);
    if (!castedThis)
        return throwVMTypeError(exec);
    ASSERT_GC_OBJECT_INHERITS(castedThis, JSIDBIndex::info());
    IDBIndex& impl = castedThis->impl();
    if (exec->argumentCount() < 1)
        return throwVMError(exec, createNotEnoughArgumentsError(exec));
    ExceptionCode ec = 0;
    ScriptExecutionContext* scriptContext = jsCast<JSDOMGlobalObject*>(exec->lexicalGlobalObject())->scriptExecutionContext();
    if (!scriptContext)
        return JSValue::encode(jsUndefined());
    IDBKeyRange* key(toIDBKeyRange(exec->argument(0)));
    if (exec->hadException())
        return JSValue::encode(jsUndefined());

    JSC::JSValue result = toJS(exec, castedThis->globalObject(), WTF::getPtr(impl.getKey(scriptContext, key, ec)));
    setDOMException(exec, ec);
    return JSValue::encode(result);
}

static EncodedJSValue JSC_HOST_CALL jsIDBIndexPrototypeFunctionGetKey2(ExecState* exec)
{
    JSValue thisValue = exec->hostThisValue();
    JSIDBIndex* castedThis = jsDynamicCast<JSIDBIndex*>(thisValue);
    if (!castedThis)
        return throwVMTypeError(exec);
    ASSERT_GC_OBJECT_INHERITS(castedThis, JSIDBIndex::info());
    IDBIndex& impl = castedThis->impl();
    if (exec->argumentCount() < 1)
        return throwVMError(exec, createNotEnoughArgumentsError(exec));
    ExceptionCode ec = 0;
    ScriptExecutionContext* scriptContext = jsCast<JSDOMGlobalObject*>(exec->lexicalGlobalObject())->scriptExecutionContext();
    if (!scriptContext)
        return JSValue::encode(jsUndefined());
    Deprecated::ScriptValue key(exec->vm(), exec->argument(0));
    if (exec->hadException())
        return JSValue::encode(jsUndefined());

    JSC::JSValue result = toJS(exec, castedThis->globalObject(), WTF::getPtr(impl.getKey(scriptContext, key, ec)));
    setDOMException(exec, ec);
    return JSValue::encode(result);
}

EncodedJSValue JSC_HOST_CALL jsIDBIndexPrototypeFunctionGetKey(ExecState* exec)
{
    size_t argsCount = exec->argumentCount();
    JSValue arg0(exec->argument(0));
    if ((argsCount == 1 && (arg0.isNull() || (arg0.isObject() && asObject(arg0)->inherits(JSIDBKeyRange::info())))))
        return jsIDBIndexPrototypeFunctionGetKey1(exec);
    if (argsCount == 1)
        return jsIDBIndexPrototypeFunctionGetKey2(exec);
    if (argsCount < 1)
        return throwVMError(exec, createNotEnoughArgumentsError(exec));
    return throwVMTypeError(exec);
}

static EncodedJSValue JSC_HOST_CALL jsIDBIndexPrototypeFunctionCount1(ExecState* exec)
{
    JSValue thisValue = exec->hostThisValue();
    JSIDBIndex* castedThis = jsDynamicCast<JSIDBIndex*>(thisValue);
    if (!castedThis)
        return throwVMTypeError(exec);
    ASSERT_GC_OBJECT_INHERITS(castedThis, JSIDBIndex::info());
    IDBIndex& impl = castedThis->impl();
    ExceptionCode ec = 0;
    ScriptExecutionContext* scriptContext = jsCast<JSDOMGlobalObject*>(exec->lexicalGlobalObject())->scriptExecutionContext();
    if (!scriptContext)
        return JSValue::encode(jsUndefined());

    size_t argsCount = exec->argumentCount();
    if (argsCount <= 0) {

        JSC::JSValue result = toJS(exec, castedThis->globalObject(), WTF::getPtr(impl.count(scriptContext, ec)));
        setDOMException(exec, ec);
        return JSValue::encode(result);
    }

    IDBKeyRange* range(toIDBKeyRange(exec->argument(0)));
    if (exec->hadException())
        return JSValue::encode(jsUndefined());

    JSC::JSValue result = toJS(exec, castedThis->globalObject(), WTF::getPtr(impl.count(scriptContext, range, ec)));
    setDOMException(exec, ec);
    return JSValue::encode(result);
}

static EncodedJSValue JSC_HOST_CALL jsIDBIndexPrototypeFunctionCount2(ExecState* exec)
{
    JSValue thisValue = exec->hostThisValue();
    JSIDBIndex* castedThis = jsDynamicCast<JSIDBIndex*>(thisValue);
    if (!castedThis)
        return throwVMTypeError(exec);
    ASSERT_GC_OBJECT_INHERITS(castedThis, JSIDBIndex::info());
    IDBIndex& impl = castedThis->impl();
    if (exec->argumentCount() < 1)
        return throwVMError(exec, createNotEnoughArgumentsError(exec));
    ExceptionCode ec = 0;
    ScriptExecutionContext* scriptContext = jsCast<JSDOMGlobalObject*>(exec->lexicalGlobalObject())->scriptExecutionContext();
    if (!scriptContext)
        return JSValue::encode(jsUndefined());
    Deprecated::ScriptValue key(exec->vm(), exec->argument(0));
    if (exec->hadException())
        return JSValue::encode(jsUndefined());

    JSC::JSValue result = toJS(exec, castedThis->globalObject(), WTF::getPtr(impl.count(scriptContext, key, ec)));
    setDOMException(exec, ec);
    return JSValue::encode(result);
}

EncodedJSValue JSC_HOST_CALL jsIDBIndexPrototypeFunctionCount(ExecState* exec)
{
    size_t argsCount = exec->argumentCount();
    JSValue arg0(exec->argument(0));
    if (argsCount == 0 || (argsCount == 1 && (arg0.isNull() || (arg0.isObject() && asObject(arg0)->inherits(JSIDBKeyRange::info())))))
        return jsIDBIndexPrototypeFunctionCount1(exec);
    if (argsCount == 1)
        return jsIDBIndexPrototypeFunctionCount2(exec);
    return throwVMTypeError(exec);
}

bool JSIDBIndexOwner::isReachableFromOpaqueRoots(JSC::Handle<JSC::Unknown> handle, void*, SlotVisitor& visitor)
{
    UNUSED_PARAM(handle);
    UNUSED_PARAM(visitor);
    return false;
}

void JSIDBIndexOwner::finalize(JSC::Handle<JSC::Unknown> handle, void* context)
{
    JSIDBIndex* jsIDBIndex = jsCast<JSIDBIndex*>(handle.get().asCell());
    DOMWrapperWorld& world = *static_cast<DOMWrapperWorld*>(context);
    uncacheWrapper(world, &jsIDBIndex->impl(), jsIDBIndex);
    jsIDBIndex->releaseImpl();
}

JSC::JSValue toJS(JSC::ExecState* exec, JSDOMGlobalObject* globalObject, IDBIndex* impl)
{
    if (!impl)
        return jsNull();
    if (JSValue result = getExistingWrapper<JSIDBIndex>(exec, impl))
        return result;
#if COMPILER(CLANG)
    // If you hit this failure the interface definition has the ImplementationLacksVTable
    // attribute. You should remove that attribute. If the class has subclasses
    // that may be passed through this toJS() function you should use the SkipVTableValidation
    // attribute to IDBIndex.
    COMPILE_ASSERT(!__is_polymorphic(IDBIndex), IDBIndex_is_polymorphic_but_idl_claims_not_to_be);
#endif
    ReportMemoryCost<IDBIndex>::reportMemoryCost(exec, impl);
    return createNewWrapper<JSIDBIndex>(exec, globalObject, impl);
}

IDBIndex* toIDBIndex(JSC::JSValue value)
{
    return value.inherits(JSIDBIndex::info()) ? &jsCast<JSIDBIndex*>(value)->impl() : 0;
}

}

#endif // ENABLE(INDEXED_DATABASE)
