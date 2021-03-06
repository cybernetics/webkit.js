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

#ifndef JSInternalSettings_h
#define JSInternalSettings_h

#include "InternalSettings.h"
#include "JSInternalSettingsGenerated.h"
#include <runtime/JSObject.h>

namespace WebCore {

class JSInternalSettings : public JSInternalSettingsGenerated {
public:
    typedef JSInternalSettingsGenerated Base;
    static JSInternalSettings* create(JSC::Structure* structure, JSDOMGlobalObject* globalObject, PassRefPtr<InternalSettings> impl)
    {
        JSInternalSettings* ptr = new (NotNull, JSC::allocateCell<JSInternalSettings>(globalObject->vm().heap)) JSInternalSettings(structure, globalObject, impl);
        ptr->finishCreation(globalObject->vm());
        return ptr;
    }

    static JSC::JSObject* createPrototype(JSC::VM&, JSC::JSGlobalObject*);
    DECLARE_INFO;

    static JSC::Structure* createStructure(JSC::VM& vm, JSC::JSGlobalObject* globalObject, JSC::JSValue prototype)
    {
        return JSC::Structure::create(vm, globalObject, prototype, JSC::TypeInfo(JSC::ObjectType, StructureFlags), info());
    }

    InternalSettings& impl() const
    {
        return static_cast<InternalSettings&>(Base::impl());
    }
protected:
    JSInternalSettings(JSC::Structure*, JSDOMGlobalObject*, PassRefPtr<InternalSettings>);
    void finishCreation(JSC::VM&);
    static const unsigned StructureFlags = Base::StructureFlags;
};

JSC::JSValue toJS(JSC::ExecState*, JSDOMGlobalObject*, InternalSettings*);

class JSInternalSettingsPrototype : public JSC::JSNonFinalObject {
public:
    typedef JSC::JSNonFinalObject Base;
    static JSC::JSObject* self(JSC::VM&, JSC::JSGlobalObject*);
    static JSInternalSettingsPrototype* create(JSC::VM& vm, JSC::JSGlobalObject* globalObject, JSC::Structure* structure)
    {
        JSInternalSettingsPrototype* ptr = new (NotNull, JSC::allocateCell<JSInternalSettingsPrototype>(vm.heap)) JSInternalSettingsPrototype(vm, globalObject, structure);
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
    JSInternalSettingsPrototype(JSC::VM& vm, JSC::JSGlobalObject*, JSC::Structure* structure) : JSC::JSNonFinalObject(vm, structure) { }
protected:
    static const unsigned StructureFlags = JSC::OverridesGetOwnPropertySlot | Base::StructureFlags;
};

// Functions

JSC::EncodedJSValue JSC_HOST_CALL jsInternalSettingsPrototypeFunctionSetMockScrollbarsEnabled(JSC::ExecState*);
JSC::EncodedJSValue JSC_HOST_CALL jsInternalSettingsPrototypeFunctionSetTouchEventEmulationEnabled(JSC::ExecState*);
JSC::EncodedJSValue JSC_HOST_CALL jsInternalSettingsPrototypeFunctionSetShadowDOMEnabled(JSC::ExecState*);
JSC::EncodedJSValue JSC_HOST_CALL jsInternalSettingsPrototypeFunctionSetAuthorShadowDOMForAnyElementEnabled(JSC::ExecState*);
JSC::EncodedJSValue JSC_HOST_CALL jsInternalSettingsPrototypeFunctionSetStandardFontFamily(JSC::ExecState*);
JSC::EncodedJSValue JSC_HOST_CALL jsInternalSettingsPrototypeFunctionSetSerifFontFamily(JSC::ExecState*);
JSC::EncodedJSValue JSC_HOST_CALL jsInternalSettingsPrototypeFunctionSetSansSerifFontFamily(JSC::ExecState*);
JSC::EncodedJSValue JSC_HOST_CALL jsInternalSettingsPrototypeFunctionSetFixedFontFamily(JSC::ExecState*);
JSC::EncodedJSValue JSC_HOST_CALL jsInternalSettingsPrototypeFunctionSetCursiveFontFamily(JSC::ExecState*);
JSC::EncodedJSValue JSC_HOST_CALL jsInternalSettingsPrototypeFunctionSetFantasyFontFamily(JSC::ExecState*);
JSC::EncodedJSValue JSC_HOST_CALL jsInternalSettingsPrototypeFunctionSetPictographFontFamily(JSC::ExecState*);
JSC::EncodedJSValue JSC_HOST_CALL jsInternalSettingsPrototypeFunctionSetTextAutosizingEnabled(JSC::ExecState*);
JSC::EncodedJSValue JSC_HOST_CALL jsInternalSettingsPrototypeFunctionSetTextAutosizingWindowSizeOverride(JSC::ExecState*);
JSC::EncodedJSValue JSC_HOST_CALL jsInternalSettingsPrototypeFunctionSetTextAutosizingFontScaleFactor(JSC::ExecState*);
JSC::EncodedJSValue JSC_HOST_CALL jsInternalSettingsPrototypeFunctionSetMediaTypeOverride(JSC::ExecState*);
JSC::EncodedJSValue JSC_HOST_CALL jsInternalSettingsPrototypeFunctionSetCSSExclusionsEnabled(JSC::ExecState*);
JSC::EncodedJSValue JSC_HOST_CALL jsInternalSettingsPrototypeFunctionSetCSSShapesEnabled(JSC::ExecState*);
JSC::EncodedJSValue JSC_HOST_CALL jsInternalSettingsPrototypeFunctionSetCanStartMedia(JSC::ExecState*);
JSC::EncodedJSValue JSC_HOST_CALL jsInternalSettingsPrototypeFunctionSetEditingBehavior(JSC::ExecState*);
JSC::EncodedJSValue JSC_HOST_CALL jsInternalSettingsPrototypeFunctionSetLangAttributeAwareFormControlUIEnabled(JSC::ExecState*);
#if ENABLE(VIDEO_TRACK)
JSC::EncodedJSValue JSC_HOST_CALL jsInternalSettingsPrototypeFunctionSetShouldDisplayTrackKind(JSC::ExecState*);
#endif
#if ENABLE(VIDEO_TRACK)
JSC::EncodedJSValue JSC_HOST_CALL jsInternalSettingsPrototypeFunctionShouldDisplayTrackKind(JSC::ExecState*);
#endif
JSC::EncodedJSValue JSC_HOST_CALL jsInternalSettingsPrototypeFunctionSetStorageBlockingPolicy(JSC::ExecState*);
JSC::EncodedJSValue JSC_HOST_CALL jsInternalSettingsPrototypeFunctionSetImagesEnabled(JSC::ExecState*);
JSC::EncodedJSValue JSC_HOST_CALL jsInternalSettingsPrototypeFunctionSetMinimumTimerInterval(JSC::ExecState*);
JSC::EncodedJSValue JSC_HOST_CALL jsInternalSettingsPrototypeFunctionSetDefaultVideoPosterURL(JSC::ExecState*);
JSC::EncodedJSValue JSC_HOST_CALL jsInternalSettingsPrototypeFunctionSetTimeWithoutMouseMovementBeforeHidingControls(JSC::ExecState*);
JSC::EncodedJSValue JSC_HOST_CALL jsInternalSettingsPrototypeFunctionSetUseLegacyBackgroundSizeShorthandBehavior(JSC::ExecState*);
JSC::EncodedJSValue JSC_HOST_CALL jsInternalSettingsPrototypeFunctionSetAutoscrollForDragAndDropEnabled(JSC::ExecState*);
JSC::EncodedJSValue JSC_HOST_CALL jsInternalSettingsPrototypeFunctionSetFontFallbackPrefersPictographs(JSC::ExecState*);
JSC::EncodedJSValue JSC_HOST_CALL jsInternalSettingsPrototypeFunctionSetPluginReplacementEnabled(JSC::ExecState*);

} // namespace WebCore

#endif
