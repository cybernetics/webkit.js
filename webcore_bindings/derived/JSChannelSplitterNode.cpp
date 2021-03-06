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

#if ENABLE(WEB_AUDIO)

#include "JSChannelSplitterNode.h"

#include "ChannelSplitterNode.h"
#include <wtf/GetPtr.h>

using namespace JSC;

namespace WebCore {

/* Hash table */

static const HashTableValue JSChannelSplitterNodeTableValues[] =
{
    { "constructor", DontEnum | ReadOnly, NoIntrinsic, (intptr_t)static_cast<PropertySlot::GetValueFunc>(jsChannelSplitterNodeConstructor), (intptr_t)0 },
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSChannelSplitterNodeTable = { 2, 1, JSChannelSplitterNodeTableValues, 0 };
/* Hash table for constructor */

static const HashTableValue JSChannelSplitterNodeConstructorTableValues[] =
{
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSChannelSplitterNodeConstructorTable = { 1, 0, JSChannelSplitterNodeConstructorTableValues, 0 };
const ClassInfo JSChannelSplitterNodeConstructor::s_info = { "ChannelSplitterNodeConstructor", &Base::s_info, &JSChannelSplitterNodeConstructorTable, 0, CREATE_METHOD_TABLE(JSChannelSplitterNodeConstructor) };

JSChannelSplitterNodeConstructor::JSChannelSplitterNodeConstructor(Structure* structure, JSDOMGlobalObject* globalObject)
    : DOMConstructorObject(structure, globalObject)
{
}

void JSChannelSplitterNodeConstructor::finishCreation(VM& vm, JSDOMGlobalObject* globalObject)
{
    Base::finishCreation(vm);
    ASSERT(inherits(info()));
    putDirect(vm, vm.propertyNames->prototype, JSChannelSplitterNodePrototype::self(vm, globalObject), DontDelete | ReadOnly);
    putDirect(vm, vm.propertyNames->length, jsNumber(0), ReadOnly | DontDelete | DontEnum);
}

bool JSChannelSplitterNodeConstructor::getOwnPropertySlot(JSObject* object, ExecState* exec, PropertyName propertyName, PropertySlot& slot)
{
    return getStaticValueSlot<JSChannelSplitterNodeConstructor, JSDOMWrapper>(exec, JSChannelSplitterNodeConstructorTable, jsCast<JSChannelSplitterNodeConstructor*>(object), propertyName, slot);
}

/* Hash table for prototype */

static const HashTableValue JSChannelSplitterNodePrototypeTableValues[] =
{
    { 0, 0, NoIntrinsic, 0, 0 }
};

static const HashTable JSChannelSplitterNodePrototypeTable = { 1, 0, JSChannelSplitterNodePrototypeTableValues, 0 };
const ClassInfo JSChannelSplitterNodePrototype::s_info = { "ChannelSplitterNodePrototype", &Base::s_info, &JSChannelSplitterNodePrototypeTable, 0, CREATE_METHOD_TABLE(JSChannelSplitterNodePrototype) };

JSObject* JSChannelSplitterNodePrototype::self(VM& vm, JSGlobalObject* globalObject)
{
    return getDOMPrototype<JSChannelSplitterNode>(vm, globalObject);
}

const ClassInfo JSChannelSplitterNode::s_info = { "ChannelSplitterNode", &Base::s_info, &JSChannelSplitterNodeTable, 0 , CREATE_METHOD_TABLE(JSChannelSplitterNode) };

JSChannelSplitterNode::JSChannelSplitterNode(Structure* structure, JSDOMGlobalObject* globalObject, PassRefPtr<ChannelSplitterNode> impl)
    : JSAudioNode(structure, globalObject, impl)
{
}

void JSChannelSplitterNode::finishCreation(VM& vm)
{
    Base::finishCreation(vm);
    ASSERT(inherits(info()));
}

JSObject* JSChannelSplitterNode::createPrototype(VM& vm, JSGlobalObject* globalObject)
{
    return JSChannelSplitterNodePrototype::create(vm, globalObject, JSChannelSplitterNodePrototype::createStructure(vm, globalObject, JSAudioNodePrototype::self(vm, globalObject)));
}

bool JSChannelSplitterNode::getOwnPropertySlot(JSObject* object, ExecState* exec, PropertyName propertyName, PropertySlot& slot)
{
    JSChannelSplitterNode* thisObject = jsCast<JSChannelSplitterNode*>(object);
    ASSERT_GC_OBJECT_INHERITS(thisObject, info());
    return getStaticValueSlot<JSChannelSplitterNode, Base>(exec, JSChannelSplitterNodeTable, thisObject, propertyName, slot);
}

EncodedJSValue jsChannelSplitterNodeConstructor(ExecState* exec, EncodedJSValue thisValue, EncodedJSValue, PropertyName)
{
    JSChannelSplitterNode* domObject = jsDynamicCast<JSChannelSplitterNode*>(JSValue::decode(thisValue));
    if (!domObject)
        return throwVMTypeError(exec);
    if (!domObject)
        return throwVMTypeError(exec);
    return JSValue::encode(JSChannelSplitterNode::getConstructor(exec->vm(), domObject->globalObject()));
}

JSValue JSChannelSplitterNode::getConstructor(VM& vm, JSGlobalObject* globalObject)
{
    return getDOMConstructor<JSChannelSplitterNodeConstructor>(vm, jsCast<JSDOMGlobalObject*>(globalObject));
}

#if ENABLE(BINDING_INTEGRITY)
#if PLATFORM(WIN)
#pragma warning(disable: 4483)
extern "C" { extern void (*const __identifier("??_7ChannelSplitterNode@WebCore@@6B@")[])(); }
#else
extern "C" { extern void* _ZTVN7WebCore19ChannelSplitterNodeE[]; }
#endif
#endif
JSC::JSValue toJS(JSC::ExecState* exec, JSDOMGlobalObject* globalObject, ChannelSplitterNode* impl)
{
    if (!impl)
        return jsNull();
    if (JSValue result = getExistingWrapper<JSChannelSplitterNode>(exec, impl))
        return result;

#if ENABLE(BINDING_INTEGRITY)
    void* actualVTablePointer = *(reinterpret_cast<void**>(impl));
#if PLATFORM(WIN)
    void* expectedVTablePointer = reinterpret_cast<void*>(__identifier("??_7ChannelSplitterNode@WebCore@@6B@"));
#else
    void* expectedVTablePointer = &_ZTVN7WebCore19ChannelSplitterNodeE[2];
#if COMPILER(CLANG)
    // If this fails ChannelSplitterNode does not have a vtable, so you need to add the
    // ImplementationLacksVTable attribute to the interface definition
    COMPILE_ASSERT(__is_polymorphic(ChannelSplitterNode), ChannelSplitterNode_is_not_polymorphic);
#endif
#endif
    // If you hit this assertion you either have a use after free bug, or
    // ChannelSplitterNode has subclasses. If ChannelSplitterNode has subclasses that get passed
    // to toJS() we currently require ChannelSplitterNode you to opt out of binding hardening
    // by adding the SkipVTableValidation attribute to the interface IDL definition
    RELEASE_ASSERT(actualVTablePointer == expectedVTablePointer);
#endif
    ReportMemoryCost<ChannelSplitterNode>::reportMemoryCost(exec, impl);
    return createNewWrapper<JSChannelSplitterNode>(exec, globalObject, impl);
}


}

#endif // ENABLE(WEB_AUDIO)
