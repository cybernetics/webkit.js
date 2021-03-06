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

#ifndef JSIDBObjectStore_h
#define JSIDBObjectStore_h

#if ENABLE(INDEXED_DATABASE)

#include "IDBObjectStore.h"
#include "JSDOMBinding.h"
#include <runtime/JSGlobalObject.h>
#include <runtime/JSObject.h>
#include <runtime/ObjectPrototype.h>

namespace WebCore {

class JSIDBObjectStore : public JSDOMWrapper {
public:
    typedef JSDOMWrapper Base;
    static JSIDBObjectStore* create(JSC::Structure* structure, JSDOMGlobalObject* globalObject, PassRefPtr<IDBObjectStore> impl)
    {
        JSIDBObjectStore* ptr = new (NotNull, JSC::allocateCell<JSIDBObjectStore>(globalObject->vm().heap)) JSIDBObjectStore(structure, globalObject, impl);
        ptr->finishCreation(globalObject->vm());
        return ptr;
    }

    static JSC::JSObject* createPrototype(JSC::VM&, JSC::JSGlobalObject*);
    static bool getOwnPropertySlot(JSC::JSObject*, JSC::ExecState*, JSC::PropertyName, JSC::PropertySlot&);
    static void destroy(JSC::JSCell*);
    ~JSIDBObjectStore();
    DECLARE_INFO;

    static JSC::Structure* createStructure(JSC::VM& vm, JSC::JSGlobalObject* globalObject, JSC::JSValue prototype)
    {
        return JSC::Structure::create(vm, globalObject, prototype, JSC::TypeInfo(JSC::ObjectType, StructureFlags), info());
    }

    static JSC::JSValue getConstructor(JSC::VM&, JSC::JSGlobalObject*);

    // Custom functions
    JSC::JSValue createIndex(JSC::ExecState*);
    IDBObjectStore& impl() const { return *m_impl; }
    void releaseImpl() { m_impl->deref(); m_impl = 0; }

    void releaseImplIfNotNull()
    {
        if (m_impl) {
            m_impl->deref();
            m_impl = 0;
        }
    }

private:
    IDBObjectStore* m_impl;
protected:
    JSIDBObjectStore(JSC::Structure*, JSDOMGlobalObject*, PassRefPtr<IDBObjectStore>);
    void finishCreation(JSC::VM&);
    static const unsigned StructureFlags = JSC::OverridesGetOwnPropertySlot | JSC::InterceptsGetOwnPropertySlotByIndexEvenWhenLengthIsNotZero | Base::StructureFlags;
};

class JSIDBObjectStoreOwner : public JSC::WeakHandleOwner {
public:
    virtual bool isReachableFromOpaqueRoots(JSC::Handle<JSC::Unknown>, void* context, JSC::SlotVisitor&);
    virtual void finalize(JSC::Handle<JSC::Unknown>, void* context);
};

inline JSC::WeakHandleOwner* wrapperOwner(DOMWrapperWorld&, IDBObjectStore*)
{
    DEFINE_STATIC_LOCAL(JSIDBObjectStoreOwner, jsIDBObjectStoreOwner, ());
    return &jsIDBObjectStoreOwner;
}

inline void* wrapperContext(DOMWrapperWorld& world, IDBObjectStore*)
{
    return &world;
}

JSC::JSValue toJS(JSC::ExecState*, JSDOMGlobalObject*, IDBObjectStore*);
IDBObjectStore* toIDBObjectStore(JSC::JSValue);

class JSIDBObjectStorePrototype : public JSC::JSNonFinalObject {
public:
    typedef JSC::JSNonFinalObject Base;
    static JSC::JSObject* self(JSC::VM&, JSC::JSGlobalObject*);
    static JSIDBObjectStorePrototype* create(JSC::VM& vm, JSC::JSGlobalObject* globalObject, JSC::Structure* structure)
    {
        JSIDBObjectStorePrototype* ptr = new (NotNull, JSC::allocateCell<JSIDBObjectStorePrototype>(vm.heap)) JSIDBObjectStorePrototype(vm, globalObject, structure);
        ptr->finishCreation(vm);
        return ptr;
    }

    DECLARE_INFO;
    static bool getOwnPropertySlot(JSC::JSObject*, JSC::ExecState*, JSC::PropertyName, JSC::PropertySlot&);
    static JSC::Structure* createStructure(JSC::VM& vm, JSC::JSGlobalObject* globalObject, JSC::JSValue prototype)
    {
        return JSC::Structure::create(vm, globalObject, prototype, JSC::TypeInfo(JSC::ObjectType, StructureFlags), info());
    }

private:
    JSIDBObjectStorePrototype(JSC::VM& vm, JSC::JSGlobalObject*, JSC::Structure* structure) : JSC::JSNonFinalObject(vm, structure) { }
protected:
    static const unsigned StructureFlags = JSC::OverridesGetOwnPropertySlot | Base::StructureFlags;
};

class JSIDBObjectStoreConstructor : public DOMConstructorObject {
private:
    JSIDBObjectStoreConstructor(JSC::Structure*, JSDOMGlobalObject*);
    void finishCreation(JSC::VM&, JSDOMGlobalObject*);

public:
    typedef DOMConstructorObject Base;
    static JSIDBObjectStoreConstructor* create(JSC::VM& vm, JSC::Structure* structure, JSDOMGlobalObject* globalObject)
    {
        JSIDBObjectStoreConstructor* ptr = new (NotNull, JSC::allocateCell<JSIDBObjectStoreConstructor>(vm.heap)) JSIDBObjectStoreConstructor(structure, globalObject);
        ptr->finishCreation(vm, globalObject);
        return ptr;
    }

    static bool getOwnPropertySlot(JSC::JSObject*, JSC::ExecState*, JSC::PropertyName, JSC::PropertySlot&);
    DECLARE_INFO;
    static JSC::Structure* createStructure(JSC::VM& vm, JSC::JSGlobalObject* globalObject, JSC::JSValue prototype)
    {
        return JSC::Structure::create(vm, globalObject, prototype, JSC::TypeInfo(JSC::ObjectType, StructureFlags), info());
    }
protected:
    static const unsigned StructureFlags = JSC::OverridesGetOwnPropertySlot | JSC::ImplementsHasInstance | DOMConstructorObject::StructureFlags;
};

// Functions

JSC::EncodedJSValue JSC_HOST_CALL jsIDBObjectStorePrototypeFunctionPut(JSC::ExecState*);
JSC::EncodedJSValue JSC_HOST_CALL jsIDBObjectStorePrototypeFunctionAdd(JSC::ExecState*);
JSC::EncodedJSValue JSC_HOST_CALL jsIDBObjectStorePrototypeFunctionDelete(JSC::ExecState*);
JSC::EncodedJSValue JSC_HOST_CALL jsIDBObjectStorePrototypeFunctionGet(JSC::ExecState*);
JSC::EncodedJSValue JSC_HOST_CALL jsIDBObjectStorePrototypeFunctionClear(JSC::ExecState*);
JSC::EncodedJSValue JSC_HOST_CALL jsIDBObjectStorePrototypeFunctionOpenCursor(JSC::ExecState*);
JSC::EncodedJSValue JSC_HOST_CALL jsIDBObjectStorePrototypeFunctionCreateIndex(JSC::ExecState*);
JSC::EncodedJSValue JSC_HOST_CALL jsIDBObjectStorePrototypeFunctionIndex(JSC::ExecState*);
JSC::EncodedJSValue JSC_HOST_CALL jsIDBObjectStorePrototypeFunctionDeleteIndex(JSC::ExecState*);
JSC::EncodedJSValue JSC_HOST_CALL jsIDBObjectStorePrototypeFunctionCount(JSC::ExecState*);
// Attributes

JSC::EncodedJSValue jsIDBObjectStoreName(JSC::ExecState*, JSC::EncodedJSValue, JSC::EncodedJSValue, JSC::PropertyName);
JSC::EncodedJSValue jsIDBObjectStoreKeyPath(JSC::ExecState*, JSC::EncodedJSValue, JSC::EncodedJSValue, JSC::PropertyName);
JSC::EncodedJSValue jsIDBObjectStoreIndexNames(JSC::ExecState*, JSC::EncodedJSValue, JSC::EncodedJSValue, JSC::PropertyName);
JSC::EncodedJSValue jsIDBObjectStoreTransaction(JSC::ExecState*, JSC::EncodedJSValue, JSC::EncodedJSValue, JSC::PropertyName);
JSC::EncodedJSValue jsIDBObjectStoreAutoIncrement(JSC::ExecState*, JSC::EncodedJSValue, JSC::EncodedJSValue, JSC::PropertyName);
JSC::EncodedJSValue jsIDBObjectStoreConstructor(JSC::ExecState*, JSC::EncodedJSValue, JSC::EncodedJSValue, JSC::PropertyName);

} // namespace WebCore

#endif // ENABLE(INDEXED_DATABASE)

#endif
