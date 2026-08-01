import{a as He,b as Pe,c as je}from"./chunk-3ITBSHH4.js";import{a as Qe}from"./chunk-NGQUPQX3.js";import{a as qe}from"./chunk-4RCAJDEF.js";import{a as Ne}from"./chunk-3DADDUFH.js";import{a as Ge}from"./chunk-J5XQACEZ.js";import{a as $e}from"./chunk-37JR57DH.js";import{a as Re}from"./chunk-CSFMXEOH.js";import{a as Be}from"./chunk-JDASHFKM.js";import{a as Ue}from"./chunk-CNXY7RVX.js";import{a as ze}from"./chunk-ED5IXLKC.js";import{a as ke,d as Ae,e as Le,f as Fe}from"./chunk-A4LS76NS.js";import{b as Te,c as De,e as N,f as Ke}from"./chunk-K4UUAXJP.js";import{K as pe,N as $,O as B,P as z,S as re,ca as Se,fa as Ve,ga as Y,ha as Ee,ma as Me,s as X,t as M}from"./chunk-AOPYABFO.js";import{i as be,j as ve,k as we,l as Ce,m as Ie,p as Oe}from"./chunk-SYVSXDIH.js";import{$ as d,Bb as C,Ca as s,Cb as k,Db as f,Eb as y,Fb as ie,Gb as fe,Ha as b,Ia as me,Ib as U,Jb as g,Kb as Q,Lb as oe,Mb as le,Na as ne,Ob as j,P as se,Pb as W,Q as ue,Qb as Z,R as ce,Rb as ye,Sa as G,Sb as xe,T as de,Ta as he,Tb as E,Ua as _e,Ub as J,V as L,Vb as ae,Wa as P,Xa as ge,Ya as u,_ as c,aa as K,bc as F,cb as v,ha as q,hc as D,ib as r,jb as m,kb as _,kc as I,lb as R,ma as H,pb as S,pc as h,qb as V,qc as A,rb as T,sb as O,xb as w,yb as p}from"./chunk-PXJF6HJ7.js";var Ze=(()=>{class n extends ze{pcFluid=L(Re,{optional:!0,host:!0,skipSelf:!0});fluid=I(void 0,{transform:h});variant=I();size=I();inputSize=I();pattern=I();min=I();max=I();step=I();minlength=I();maxlength=I();$variant=D(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());get hasFluid(){return this.fluid()??!!this.pcFluid}static \u0275fac=(()=>{let e;return function(i){return(e||(e=H(n)))(i||n)}})();static \u0275dir=_e({type:n,inputs:{fluid:[1,"fluid"],variant:[1,"variant"],size:[1,"size"],inputSize:[1,"inputSize"],pattern:[1,"pattern"],min:[1,"min"],max:[1,"max"],step:[1,"step"],minlength:[1,"minlength"],maxlength:[1,"maxlength"]},features:[P]})}return n})();var Je=`
    .p-autocomplete {
        display: inline-flex;
    }

    .p-autocomplete-loader {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        inset-inline-end: dt('autocomplete.padding.x');
    }

    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-loader {
        inset-inline-end: calc(dt('autocomplete.dropdown.width') + dt('autocomplete.padding.x'));
    }

    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input {
        flex: 1 1 auto;
        width: 1%;
    }

    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input,
    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input-multiple {
        border-start-end-radius: 0;
        border-end-end-radius: 0;
    }

    .p-autocomplete-dropdown {
        cursor: pointer;
        display: inline-flex;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        width: dt('autocomplete.dropdown.width');
        border-start-end-radius: dt('autocomplete.dropdown.border.radius');
        border-end-end-radius: dt('autocomplete.dropdown.border.radius');
        background: dt('autocomplete.dropdown.background');
        border: 1px solid dt('autocomplete.dropdown.border.color');
        border-inline-start: 0 none;
        color: dt('autocomplete.dropdown.color');
        transition:
            background dt('autocomplete.transition.duration'),
            color dt('autocomplete.transition.duration'),
            border-color dt('autocomplete.transition.duration'),
            outline-color dt('autocomplete.transition.duration'),
            box-shadow dt('autocomplete.transition.duration');
        outline-color: transparent;
    }

    .p-autocomplete-dropdown:not(:disabled):hover {
        background: dt('autocomplete.dropdown.hover.background');
        border-color: dt('autocomplete.dropdown.hover.border.color');
        color: dt('autocomplete.dropdown.hover.color');
    }

    .p-autocomplete-dropdown:not(:disabled):active {
        background: dt('autocomplete.dropdown.active.background');
        border-color: dt('autocomplete.dropdown.active.border.color');
        color: dt('autocomplete.dropdown.active.color');
    }

    .p-autocomplete-dropdown:focus-visible {
        box-shadow: dt('autocomplete.dropdown.focus.ring.shadow');
        outline: dt('autocomplete.dropdown.focus.ring.width') dt('autocomplete.dropdown.focus.ring.style') dt('autocomplete.dropdown.focus.ring.color');
        outline-offset: dt('autocomplete.dropdown.focus.ring.offset');
    }

    .p-autocomplete-overlay {
        position: absolute;
        top: 0;
        left: 0;
        background: dt('autocomplete.overlay.background');
        color: dt('autocomplete.overlay.color');
        border: 1px solid dt('autocomplete.overlay.border.color');
        border-radius: dt('autocomplete.overlay.border.radius');
        box-shadow: dt('autocomplete.overlay.shadow');
        min-width: 100%;
    }

    .p-autocomplete-list-container {
        overflow: auto;
    }

    .p-autocomplete-list {
        margin: 0;
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: dt('autocomplete.list.gap');
        padding: dt('autocomplete.list.padding');
    }

    .p-autocomplete-option {
        cursor: pointer;
        white-space: nowrap;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        padding: dt('autocomplete.option.padding');
        border: 0 none;
        color: dt('autocomplete.option.color');
        background: transparent;
        transition:
            background dt('autocomplete.transition.duration'),
            color dt('autocomplete.transition.duration'),
            border-color dt('autocomplete.transition.duration');
        border-radius: dt('autocomplete.option.border.radius');
    }

    .p-autocomplete-option:not(.p-autocomplete-option-selected):not(.p-disabled).p-focus {
        background: dt('autocomplete.option.focus.background');
        color: dt('autocomplete.option.focus.color');
    }

    .p-autocomplete-option-selected {
        background: dt('autocomplete.option.selected.background');
        color: dt('autocomplete.option.selected.color');
    }

    .p-autocomplete-option-selected.p-focus {
        background: dt('autocomplete.option.selected.focus.background');
        color: dt('autocomplete.option.selected.focus.color');
    }

    .p-autocomplete-option-group {
        margin: 0;
        padding: dt('autocomplete.option.group.padding');
        color: dt('autocomplete.option.group.color');
        background: dt('autocomplete.option.group.background');
        font-weight: dt('autocomplete.option.group.font.weight');
    }

    .p-autocomplete-input-multiple {
        margin: 0;
        list-style-type: none;
        cursor: text;
        overflow: hidden;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding: calc(dt('autocomplete.padding.y') / 2) dt('autocomplete.padding.x');
        gap: calc(dt('autocomplete.padding.y') / 2);
        color: dt('autocomplete.color');
        background: dt('autocomplete.background');
        border: 1px solid dt('autocomplete.border.color');
        border-radius: dt('autocomplete.border.radius');
        width: 100%;
        transition:
            background dt('autocomplete.transition.duration'),
            color dt('autocomplete.transition.duration'),
            border-color dt('autocomplete.transition.duration'),
            outline-color dt('autocomplete.transition.duration'),
            box-shadow dt('autocomplete.transition.duration');
        outline-color: transparent;
        box-shadow: dt('autocomplete.shadow');
    }

    .p-autocomplete-input-multiple.p-disabled {
        opacity: 1;
        background: dt('inputtext.disabled.background');
        color: dt('inputtext.disabled.color');
    }

    .p-autocomplete-input-multiple:not(.p-disabled):hover {
        border-color: dt('autocomplete.hover.border.color');
    }

    .p-autocomplete.p-focus .p-autocomplete-input-multiple:not(.p-disabled) {
        border-color: dt('autocomplete.focus.border.color');
        box-shadow: dt('autocomplete.focus.ring.shadow');
        outline: dt('autocomplete.focus.ring.width') dt('autocomplete.focus.ring.style') dt('autocomplete.focus.ring.color');
        outline-offset: dt('autocomplete.focus.ring.offset');
    }

    .p-autocomplete.p-invalid .p-autocomplete-input-multiple {
        border-color: dt('autocomplete.invalid.border.color');
    }

    .p-variant-filled.p-autocomplete-input-multiple {
        background: dt('autocomplete.filled.background');
    }

    .p-autocomplete-input-multiple.p-variant-filled:not(.p-disabled):hover {
        background: dt('autocomplete.filled.hover.background');
    }

    .p-autocomplete.p-focus .p-autocomplete-input-multiple.p-variant-filled:not(.p-disabled) {
        background: dt('autocomplete.filled.focus.background');
    }

    .p-autocomplete-chip.p-chip {
        padding-block-start: calc(dt('autocomplete.padding.y') / 2);
        padding-block-end: calc(dt('autocomplete.padding.y') / 2);
        border-radius: dt('autocomplete.chip.border.radius');
    }

    .p-autocomplete-input-multiple:has(.p-autocomplete-chip) {
        padding-inline-start: calc(dt('autocomplete.padding.y') / 2);
        padding-inline-end: calc(dt('autocomplete.padding.y') / 2);
    }

    .p-autocomplete-chip-item.p-focus .p-autocomplete-chip {
        background: dt('autocomplete.chip.focus.background');
        color: dt('autocomplete.chip.focus.color');
    }

    .p-autocomplete-input-chip {
        flex: 1 1 auto;
        display: inline-flex;
        padding-block-start: calc(dt('autocomplete.padding.y') / 2);
        padding-block-end: calc(dt('autocomplete.padding.y') / 2);
    }

    .p-autocomplete-input-chip input {
        border: 0 none;
        outline: 0 none;
        background: transparent;
        margin: 0;
        padding: 0;
        box-shadow: none;
        border-radius: 0;
        width: 100%;
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: inherit;
    }

    .p-autocomplete-input-chip input::placeholder {
        color: dt('autocomplete.placeholder.color');
    }

    .p-autocomplete.p-invalid .p-autocomplete-input-chip input::placeholder {
        color: dt('autocomplete.invalid.placeholder.color');
    }

    .p-autocomplete-empty-message {
        padding: dt('autocomplete.empty.message.padding');
    }

    .p-autocomplete-fluid {
        display: flex;
    }

    .p-autocomplete-fluid:has(.p-autocomplete-dropdown) .p-autocomplete-input {
        width: 1%;
    }

    .p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown {
        width: dt('autocomplete.dropdown.sm.width');
    }

    .p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown .p-icon {
        font-size: dt('form.field.sm.font.size');
        width: dt('form.field.sm.font.size');
        height: dt('form.field.sm.font.size');
    }

    .p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown {
        width: dt('autocomplete.dropdown.lg.width');
    }

    .p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown .p-icon {
        font-size: dt('form.field.lg.font.size');
        width: dt('form.field.lg.font.size');
        height: dt('form.field.lg.font.size');
    }

    .p-autocomplete-clear-icon {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        cursor: pointer;
        color: dt('form.field.icon.color');
        inset-inline-end: dt('autocomplete.padding.x');
    }

    .p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-clear-icon {
        inset-inline-end: calc(dt('autocomplete.padding.x') + dt('autocomplete.dropdown.width'));
    }

    .p-autocomplete:has(.p-autocomplete-clear-icon) .p-autocomplete-input {
        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-inputgroup .p-autocomplete-dropdown {
        border-radius: 0;
    }

    .p-inputgroup > .p-autocomplete:last-child:has(.p-autocomplete-dropdown) > .p-autocomplete-input {
        border-start-end-radius: 0;
        border-end-end-radius: 0;
    }

    .p-inputgroup > .p-autocomplete:last-child .p-autocomplete-dropdown {
        border-start-end-radius: dt('autocomplete.dropdown.border.radius');
        border-end-end-radius: dt('autocomplete.dropdown.border.radius');
    }
`;var ot=["item"],lt=["empty"],at=["header"],pt=["footer"],rt=["selecteditem"],st=["group"],ut=["loader"],ct=["removeicon"],dt=["loadingicon"],mt=["clearicon"],ht=["dropdownicon"],_t=["focusInput"],gt=["multiIn"],ft=["multiContainer"],yt=["ddBtn"],xt=["items"],bt=["scroller"],vt=["overlay"],wt=n=>({i:n}),et=n=>({$implicit:n}),Ct=(n,a,e)=>({removeCallback:n,index:a,class:e}),ee=n=>({height:n}),tt=(n,a)=>({$implicit:n,options:a}),It=n=>({options:n}),Ot=()=>({}),Tt=(n,a,e)=>({option:n,i:a,scrollerOptions:e}),St=(n,a)=>({$implicit:n,index:a});function Vt(n,a){if(n&1){let e=O();m(0,"input",18,2),w("input",function(i){c(e);let o=p();return d(o.onInput(i))})("keydown",function(i){c(e);let o=p();return d(o.onKeyDown(i))})("change",function(i){c(e);let o=p();return d(o.onInputChange(i))})("focus",function(i){c(e);let o=p();return d(o.onInputFocus(i))})("blur",function(i){c(e);let o=p();return d(o.onInputBlur(i))})("paste",function(i){c(e);let o=p();return d(o.onInputPaste(i))})("keyup",function(i){c(e);let o=p();return d(o.onInputKeyUp(i))}),_()}if(n&2){let e=p();g(e.cn(e.cx("pcInputText"),e.inputStyleClass)),r("pAutoFocus",e.autofocus)("pt",e.ptm("pcInputText"))("ngStyle",e.inputStyle)("variant",e.$variant())("invalid",e.invalid())("pSize",e.size())("fluid",e.hasFluid),v("type",e.type)("value",e.inputValue())("id",e.inputId)("autocomplete",e.autocomplete)("placeholder",e.placeholder)("name",e.name())("minlength",e.minlength())("min",e.min())("max",e.max())("pattern",e.pattern())("size",e.inputSize())("maxlength",e.maxlength())("tabindex",e.$disabled()?-1:e.tabindex)("required",e.required()?"":void 0)("readonly",e.readonly?"":void 0)("disabled",e.$disabled()?"":void 0)("aria-label",e.ariaLabel)("aria-labelledby",e.ariaLabelledBy)("aria-required",e.required())("aria-expanded",e.overlayVisible??!1)("aria-controls",e.overlayVisible?e.id+"_list":null)("aria-activedescendant",e.focused?e.focusedOptionId:void 0)}}function Et(n,a){if(n&1){let e=O();K(),m(0,"svg",21),w("click",function(){c(e);let i=p(2);return d(i.clear())}),_()}if(n&2){let e=p(2);g(e.cx("clearIcon")),r("pBind",e.ptm("clearIcon")),v("aria-hidden",!0)}}function Mt(n,a){}function kt(n,a){n&1&&u(0,Mt,0,0,"ng-template")}function At(n,a){if(n&1){let e=O();m(0,"span",22),w("click",function(){c(e);let i=p(2);return d(i.clear())}),u(1,kt,1,0,null,23),_()}if(n&2){let e=p(2);g(e.cx("clearIcon")),r("pBind",e.ptm("clearIcon")),v("aria-hidden",!0),s(),r("ngTemplateOutlet",e.clearIconTemplate||e._clearIconTemplate)}}function Lt(n,a){if(n&1&&(S(0),u(1,Et,1,4,"svg",19)(2,At,2,5,"span",20),V()),n&2){let e=p();s(),r("ngIf",!e.clearIconTemplate&&!e._clearIconTemplate),s(),r("ngIf",e.clearIconTemplate||e._clearIconTemplate)}}function Ft(n,a){n&1&&T(0)}function Dt(n,a){if(n&1){let e=O();m(0,"span",22),w("click",function(i){c(e);let o=p(2).index,l=p(2);return d(!l.readonly&&!l.$disabled()?l.removeOption(i,o):"")}),K(),R(1,"svg",31),_()}if(n&2){let e=p(4);g(e.cx("chipIcon")),r("pBind",e.ptm("chipIcon")),s(),g(e.cx("chipIcon")),v("aria-hidden",!0)}}function Bt(n,a){}function zt(n,a){n&1&&u(0,Bt,0,0,"ng-template")}function Kt(n,a){if(n&1&&(m(0,"span",32),u(1,zt,1,0,null,29),_()),n&2){let e=p(2).index,t=p(2);r("pBind",t.ptm("chipIcon")),v("aria-hidden",!0),s(),r("ngTemplateOutlet",t.removeIconTemplate||t._removeIconTemplate)("ngTemplateOutletContext",ae(4,Ct,t.removeOption.bind(t),e,t.cx("chipIcon")))}}function Rt(n,a){if(n&1&&u(0,Dt,2,6,"span",20)(1,Kt,2,8,"span",30),n&2){let e=p(3);r("ngIf",!e.removeIconTemplate&&!e._removeIconTemplate),s(),r("ngIf",e.removeIconTemplate||e._removeIconTemplate)}}function Qt(n,a){if(n&1){let e=O();m(0,"li",26,5)(2,"p-chip",28),w("onRemove",function(i){let o=c(e).index,l=p(2);return d(l.readonly?"":l.removeOption(i,o))}),u(3,Ft,1,0,"ng-container",29)(4,Rt,2,2,"ng-template",null,6,F),_()()}if(n&2){let e=a.$implicit,t=a.index,i=p(2);g(i.cx("chipItem",E(16,wt,t))),r("pBind",i.ptm("chipItem")),v("id",i.id+"_multiple_option_"+t)("aria-label",i.getOptionLabel(e))("aria-setsize",i.modelValue().length)("aria-posinset",t+1)("aria-selected",!0),s(2),g(i.cx("pcChip")),r("pt",i.ptm("pcChip"))("label",!i.selectedItemTemplate&&!i._selectedItemTemplate&&i.getOptionLabel(e))("disabled",i.$disabled())("removable",!0),s(),r("ngTemplateOutlet",i.selectedItemTemplate||i._selectedItemTemplate)("ngTemplateOutletContext",E(18,et,e))}}function $t(n,a){if(n&1){let e=O();m(0,"ul",24,3),w("focus",function(i){c(e);let o=p();return d(o.onMultipleContainerFocus(i))})("blur",function(i){c(e);let o=p();return d(o.onMultipleContainerBlur(i))})("keydown",function(i){c(e);let o=p();return d(o.onMultipleContainerKeyDown(i))}),u(2,Qt,6,20,"li",25),m(3,"li",26)(4,"input",27,4),w("input",function(i){c(e);let o=p();return d(o.onInput(i))})("keydown",function(i){c(e);let o=p();return d(o.onKeyDown(i))})("change",function(i){c(e);let o=p();return d(o.onInputChange(i))})("focus",function(i){c(e);let o=p();return d(o.onInputFocus(i))})("blur",function(i){c(e);let o=p();return d(o.onInputBlur(i))})("paste",function(i){c(e);let o=p();return d(o.onInputPaste(i))})("keyup",function(i){c(e);let o=p();return d(o.onInputKeyUp(i))}),_()()()}if(n&2){let e=p();g(e.cx("inputMultiple")),r("pBind",e.ptm("inputMultiple"))("tabindex",-1),v("aria-orientation","horizontal")("aria-activedescendant",e.focused?e.focusedMultipleOptionId:void 0),s(2),r("ngForOf",e.modelValue()),s(),g(e.cx("inputChip")),r("pBind",e.ptm("inputChip")),s(),g(e.cx("pcInputText")),r("pAutoFocus",e.autofocus)("pBind",e.ptm("input"))("ngStyle",e.inputStyle),v("type",e.type)("id",e.inputId)("autocomplete",e.autocomplete)("name",e.name())("minlength",e.minlength())("maxlength",e.maxlength())("size",e.size())("min",e.min())("max",e.max())("pattern",e.pattern())("placeholder",e.$filled()?null:e.placeholder)("tabindex",e.$disabled()?-1:e.tabindex)("required",e.required()?"":void 0)("readonly",e.readonly?"":void 0)("disabled",e.$disabled()?"":void 0)("aria-label",e.ariaLabel)("aria-labelledby",e.ariaLabelledBy)("aria-required",e.required())("aria-expanded",e.overlayVisible??!1)("aria-controls",e.overlayVisible?e.id+"_list":null)("aria-activedescendant",e.focused?e.focusedOptionId:void 0)}}function Nt(n,a){if(n&1&&(K(),R(0,"svg",35)),n&2){let e=p(2);g(e.cx("loader")),r("pBind",e.ptm("loader"))("spin",!0),v("aria-hidden",!0)}}function qt(n,a){}function Ht(n,a){n&1&&u(0,qt,0,0,"ng-template")}function Gt(n,a){if(n&1&&(m(0,"span",32),u(1,Ht,1,0,null,23),_()),n&2){let e=p(2);g(e.cx("loader")),r("pBind",e.ptm("loader")),v("aria-hidden",!0),s(),r("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)}}function Pt(n,a){if(n&1&&(S(0),u(1,Nt,1,5,"svg",33)(2,Gt,2,5,"span",34),V()),n&2){let e=p();s(),r("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),s(),r("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function Ut(n,a){if(n&1&&R(0,"span",38),n&2){let e=p(2);r("ngClass",e.dropdownIcon),v("aria-hidden",!0)}}function jt(n,a){if(n&1&&(K(),R(0,"svg",40)),n&2){let e=p(3);r("pBind",e.ptm("dropdown"))}}function Wt(n,a){}function Zt(n,a){n&1&&u(0,Wt,0,0,"ng-template")}function Jt(n,a){if(n&1&&(S(0),u(1,jt,1,1,"svg",39)(2,Zt,1,0,null,23),V()),n&2){let e=p(2);s(),r("ngIf",!e.dropdownIconTemplate&&!e._dropdownIconTemplate),s(),r("ngTemplateOutlet",e.dropdownIconTemplate||e._dropdownIconTemplate)}}function Xt(n,a){if(n&1){let e=O();m(0,"button",36,7),w("click",function(i){c(e);let o=p();return d(o.handleDropdownClick(i))}),u(2,Ut,1,2,"span",37)(3,Jt,3,2,"ng-container",14),_()}if(n&2){let e=p();g(e.cx("dropdown")),r("pBind",e.ptm("dropdown"))("disabled",e.$disabled()),v("aria-label",e.dropdownAriaLabel)("tabindex",e.tabindex),s(2),r("ngIf",e.dropdownIcon),s(),r("ngIf",!e.dropdownIcon)}}function Yt(n,a){n&1&&T(0)}function en(n,a){n&1&&T(0)}function tn(n,a){if(n&1&&u(0,en,1,0,"ng-container",29),n&2){let e=a.$implicit,t=a.options;p(2);let i=ie(6);r("ngTemplateOutlet",i)("ngTemplateOutletContext",J(2,tt,e,t))}}function nn(n,a){n&1&&T(0)}function on(n,a){if(n&1&&u(0,nn,1,0,"ng-container",29),n&2){let e=a.options,t=p(4);r("ngTemplateOutlet",t.loaderTemplate||t._loaderTemplate)("ngTemplateOutletContext",E(2,It,e))}}function ln(n,a){n&1&&(S(0),u(1,on,1,4,"ng-template",null,10,F),V())}function an(n,a){if(n&1){let e=O();m(0,"p-scroller",45,9),w("onLazyLoad",function(i){c(e);let o=p(2);return d(o.onLazyLoad.emit(i))}),u(2,tn,1,5,"ng-template",null,1,F)(4,ln,3,0,"ng-container",14),_()}if(n&2){let e=p(2);U(E(9,ee,e.scrollHeight)),r("pt",e.ptm("virtualScroller"))("items",e.visibleOptions())("itemSize",e.virtualScrollItemSize)("autoSize",!0)("lazy",e.lazy)("options",e.virtualScrollOptions),s(4),r("ngIf",e.loaderTemplate||e._loaderTemplate)}}function pn(n,a){n&1&&T(0)}function rn(n,a){if(n&1&&(S(0),u(1,pn,1,0,"ng-container",29),V()),n&2){p();let e=ie(6),t=p();s(),r("ngTemplateOutlet",e)("ngTemplateOutletContext",J(3,tt,t.visibleOptions(),xe(2,Ot)))}}function sn(n,a){if(n&1&&(m(0,"span"),Q(1),_()),n&2){let e=p(2).$implicit,t=p(3);s(),oe(t.getOptionGroupLabel(e.optionGroup))}}function un(n,a){n&1&&T(0)}function cn(n,a){if(n&1&&(S(0),m(1,"li",49),u(2,sn,2,1,"span",14)(3,un,1,0,"ng-container",29),_(),V()),n&2){let e=p(),t=e.$implicit,i=e.index,o=p().options,l=p(2);s(),g(l.cx("optionGroup")),r("pBind",l.ptm("optionGroup"))("ngStyle",E(8,ee,o.itemSize+"px")),v("id",l.id+"_"+l.getOptionIndex(i,o)),s(),r("ngIf",!l.groupTemplate),s(),r("ngTemplateOutlet",l.groupTemplate)("ngTemplateOutletContext",E(10,et,t.optionGroup))}}function dn(n,a){if(n&1&&(m(0,"span"),Q(1),_()),n&2){let e=p(2).$implicit,t=p(3);s(),oe(t.getOptionLabel(e))}}function mn(n,a){n&1&&T(0)}function hn(n,a){if(n&1){let e=O();S(0),m(1,"li",50),w("click",function(i){c(e);let o=p().$implicit,l=p(3);return d(l.onOptionSelect(i,o))})("mouseenter",function(i){c(e);let o=p().index,l=p().options,x=p(2);return d(x.onOptionMouseEnter(i,x.getOptionIndex(o,l)))}),u(2,dn,2,1,"span",14)(3,mn,1,0,"ng-container",29),_(),V()}if(n&2){let e=p(),t=e.$implicit,i=e.index,o=p().options,l=p(2);s(),g(l.cx("option",ae(14,Tt,t,i,o))),r("pBind",l.getPTOptions(t,o,i,"option"))("ngStyle",E(18,ee,o.itemSize+"px")),v("id",l.id+"_"+l.getOptionIndex(i,o))("aria-label",l.getOptionLabel(t))("aria-selected",l.isSelected(t))("aria-disabled",l.isOptionDisabled(t))("data-p-focused",l.focusedOptionIndex()===l.getOptionIndex(i,o))("aria-setsize",l.ariaSetSize)("aria-posinset",l.getAriaPosInset(l.getOptionIndex(i,o))),s(),r("ngIf",!l.itemTemplate&&!l._itemTemplate),s(),r("ngTemplateOutlet",l.itemTemplate||l._itemTemplate)("ngTemplateOutletContext",J(20,St,t,o.getOptions?o.getOptions(i):i))}}function _n(n,a){if(n&1&&u(0,cn,4,12,"ng-container",14)(1,hn,4,23,"ng-container",14),n&2){let e=a.$implicit,t=p(3);r("ngIf",t.isOptionGroup(e)),s(),r("ngIf",!t.isOptionGroup(e))}}function gn(n,a){if(n&1&&(S(0),Q(1),V()),n&2){let e=p(4);s(),le(" ",e.searchResultMessageText," ")}}function fn(n,a){n&1&&T(0,null,12)}function yn(n,a){if(n&1&&(m(0,"li",49),u(1,gn,2,1,"ng-container",51)(2,fn,2,0,"ng-container",23),_()),n&2){let e=p().options,t=p(2);g(t.cx("emptyMessage")),r("pBind",t.ptm("emptyMessage"))("ngStyle",E(7,ee,e.itemSize+"px")),s(),r("ngIf",!t.emptyTemplate&&!t._emptyTemplate)("ngIfElse",t.empty),s(),r("ngTemplateOutlet",t.emptyTemplate||t._emptyTemplate)}}function xn(n,a){if(n&1&&(m(0,"ul",46,11),u(2,_n,2,2,"ng-template",47)(3,yn,3,9,"li",48),_()),n&2){let e=a.$implicit,t=a.options,i=p(2);U(t.contentStyle),g(i.cn(i.cx("list"),t.contentStyleClass)),r("pBind",i.ptm("list")),v("id",i.id+"_list")("aria-label",i.listLabel),s(2),r("ngForOf",e),s(),r("ngIf",!e||e&&e.length===0&&i.showEmptyMessage)}}function bn(n,a){n&1&&T(0)}function vn(n,a){if(n&1&&(m(0,"div",41),u(1,Yt,1,0,"ng-container",23),m(2,"div",42),u(3,an,5,11,"p-scroller",43)(4,rn,2,6,"ng-container",14),_(),u(5,xn,4,9,"ng-template",null,8,F)(7,bn,1,0,"ng-container",23),_(),m(8,"span",44),Q(9),_()),n&2){let e=p();g(e.cn(e.cx("overlay"),e.panelStyleClass)),r("pBind",e.ptm("overlay"))("ngStyle",e.panelStyle),s(),r("ngTemplateOutlet",e.headerTemplate||e._headerTemplate),s(),g(e.cx("listContainer")),fe("max-height",e.virtualScroll?"auto":e.scrollHeight),r("pBind",e.ptm("listContainer"))("tabindex",-1),s(),r("ngIf",e.virtualScroll),s(),r("ngIf",!e.virtualScroll),s(3),r("ngTemplateOutlet",e.footerTemplate||e._footerTemplate),s(2),le(" ",e.selectedMessageText," ")}}var wn=`
    ${Je}

    /* For PrimeNG */
    p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input,
    p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input-multiple,
    p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input,
    p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input-multiple p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input,
    p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input-multiple {
        border-color: dt('autocomplete.invalid.border.color');
    }

    p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input:enabled:focus,
    p-autoComplete.ng-invalid.ng-dirty:not(.p-disabled).p-focus .p-autocomplete-input-multiple,
    p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input:enabled:focus,
    p-auto-complete.ng-invalid.ng-dirty:not(.p-disabled).p-focus .p-autocomplete-input-multiple,
    p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input:enabled:focus,
    p-autocomplete.ng-invalid.ng-dirty:not(.p-disabled).p-focus .p-autocomplete-input-multiple {
        border-color: dt('autocomplete.focus.border.color');
    }

    p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input-chip input::placeholder,
    p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input-chip input::placeholder,
    p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input-chip input::placeholder {
        color: dt('autocomplete.invalid.placeholder.color');
    }

    p-autoComplete.ng-invalid.ng-dirty .p-autocomplete-input::placeholder,
    p-auto-complete.ng-invalid.ng-dirty .p-autocomplete-input::placeholder,
    p-autocomplete.ng-invalid.ng-dirty .p-autocomplete-input::placeholder {
        color: dt('autocomplete.invalid.placeholder.color');
    }
`,Cn={root:{position:"relative"}},In={root:({instance:n})=>["p-autocomplete p-component p-inputwrapper",{"p-invalid":n.invalid(),"p-focus":n.focused,"p-inputwrapper-filled":n.$filled(),"p-inputwrapper-focus":n.focused&&!n.$disabled()||n.autofocus||n.overlayVisible,"p-autocomplete-open":n.overlayVisible,"p-autocomplete-clearable":n.showClear&&!n.$disabled(),"p-autocomplete-fluid":n.hasFluid}],pcInputText:"p-autocomplete-input",inputMultiple:({instance:n})=>["p-autocomplete-input-multiple",{"p-disabled":n.$disabled(),"p-variant-filled":n.$variant()==="filled"}],chipItem:({instance:n,i:a})=>["p-autocomplete-chip-item",{"p-focus":n.focusedMultipleOptionIndex()===a}],pcChip:"p-autocomplete-chip",chipIcon:"p-autocomplete-chip-icon",inputChip:"p-autocomplete-input-chip",loader:"p-autocomplete-loader",dropdown:"p-autocomplete-dropdown",overlay:({instance:n})=>["p-autocomplete-overlay p-component-overlay p-component",{"p-input-filled":n.$variant()==="filled","p-ripple-disabled":n.config.ripple()===!1}],listContainer:"p-autocomplete-list-container",list:"p-autocomplete-list",optionGroup:"p-autocomplete-option-group",option:({instance:n,option:a,i:e,scrollerOptions:t})=>({"p-autocomplete-option":!0,"p-autocomplete-option-selected":n.isSelected(a),"p-focus":n.focusedOptionIndex()===n.getOptionIndex(e,t),"p-disabled":n.isOptionDisabled(a)}),emptyMessage:"p-autocomplete-empty-message",clearIcon:"p-autocomplete-clear-icon"},Xe=(()=>{class n extends Me{name="autocomplete";style=wn;classes=In;inlineStyles=Cn;static \u0275fac=(()=>{let e;return function(i){return(e||(e=H(n)))(i||n)}})();static \u0275prov=ue({token:n,factory:n.\u0275fac})}return n})();var Ye=new de("AUTOCOMPLETE_INSTANCE"),On={provide:ke,useExisting:se(()=>te),multi:!0},te=(()=>{class n extends Ze{overlayService;zone;$pcAutoComplete=L(Ye,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=L(N,{self:!0});minLength=1;minQueryLength;delay=300;panelStyle;styleClass;panelStyleClass;inputStyle;inputId;inputStyleClass;placeholder;readonly;scrollHeight="200px";lazy=!1;virtualScroll;virtualScrollItemSize;virtualScrollOptions;autoHighlight;forceSelection;type="text";autoZIndex=!0;baseZIndex=0;ariaLabel;dropdownAriaLabel;ariaLabelledBy;dropdownIcon;unique=!0;group;completeOnFocus=!1;showClear=!1;dropdown;showEmptyMessage=!0;dropdownMode="blank";multiple;addOnTab=!1;tabindex;dataKey;emptyMessage;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";autofocus;autocomplete="off";optionGroupChildren="items";optionGroupLabel="label";overlayOptions;get suggestions(){return this._suggestions()}set suggestions(e){this._suggestions.set(e),this.handleSuggestionsChange()}optionLabel;optionValue;id;searchMessage;emptySelectionMessage;selectionMessage;autoOptionFocus=!1;selectOnFocus;searchLocale;optionDisabled;focusOnHover=!0;typeahead=!0;addOnBlur=!1;separator;appendTo=I(void 0);completeMethod=new b;onSelect=new b;onUnselect=new b;onAdd=new b;onFocus=new b;onBlur=new b;onDropdownClick=new b;onClear=new b;onInputKeydown=new b;onKeyUp=new b;onShow=new b;onHide=new b;onLazyLoad=new b;inputEL;multiInputEl;multiContainerEL;dropdownButton;itemsViewChild;scroller;overlayViewChild;itemsWrapper;itemTemplate;emptyTemplate;headerTemplate;footerTemplate;selectedItemTemplate;groupTemplate;loaderTemplate;removeIconTemplate;loadingIconTemplate;clearIconTemplate;dropdownIconTemplate;onHostClick(e){this.onContainerClick(e)}value;_suggestions=q(null);timeout;overlayVisible;suggestionsUpdated;highlightOption;highlightOptionChanged;focused=!1;loading;scrollHandler;listId;searchTimeout;dirty=!1;_itemTemplate;_groupTemplate;_selectedItemTemplate;_headerTemplate;_emptyTemplate;_footerTemplate;_loaderTemplate;_removeIconTemplate;_loadingIconTemplate;_clearIconTemplate;_dropdownIconTemplate;focusedMultipleOptionIndex=q(-1);focusedOptionIndex=q(-1);_componentStyle=L(Xe);$appendTo=D(()=>this.appendTo()||this.config.overlayAppendTo());visibleOptions=D(()=>this.group?this.flatOptions(this._suggestions()):this._suggestions()||[]);inputValue=D(()=>{let e=this.modelValue(),t=this.optionValueSelected?(this.suggestions||[]).find(i=>z(i,e,this.equalityKey())):e;if($(e))if(typeof e=="object"||this.optionValueSelected){let i=this.getOptionLabel(t);return i??e}else return e;else return""});get focusedMultipleOptionId(){return this.focusedMultipleOptionIndex()!==-1?`${this.id}_multiple_option_${this.focusedMultipleOptionIndex()}`:null}get focusedOptionId(){return this.focusedOptionIndex()!==-1?`${this.id}_${this.focusedOptionIndex()}`:null}get searchResultMessageText(){return $(this.visibleOptions())&&this.overlayVisible?this.searchMessageText.replaceAll("{0}",this.visibleOptions().length):this.emptySearchMessageText}get searchMessageText(){return this.searchMessage||this.config.translation.searchMessage||""}get emptySearchMessageText(){return this.emptyMessage||this.config.translation.emptySearchMessage||""}get selectionMessageText(){return this.selectionMessage||this.config.translation.selectionMessage||""}get emptySelectionMessageText(){return this.emptySelectionMessage||this.config.translation.emptySelectionMessage||""}get selectedMessageText(){return this.hasSelectedOption()?this.selectionMessageText.replaceAll("{0}",this.multiple?this.modelValue()?.length:"1"):this.emptySelectionMessageText}get ariaSetSize(){return this.visibleOptions().filter(e=>!this.isOptionGroup(e)).length}get listLabel(){return this.config.getTranslation(Ee.ARIA).listLabel}get virtualScrollerDisabled(){return!this.virtualScroll}get optionValueSelected(){return typeof this.modelValue()=="string"&&this.optionValue}chipItemClass(e){return this._componentStyle.classes.chipItem({instance:this,i:e})}constructor(e,t){super(),this.overlayService=e,this.zone=t}onInit(){this.id=this.id||Te("pn_id_"),this.cd.detectChanges()}templates;onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"item":this._itemTemplate=e.template;break;case"group":this._groupTemplate=e.template;break;case"selecteditem":this._selectedItemTemplate=e.template;break;case"selectedItem":this._selectedItemTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"empty":this._emptyTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"loader":this._loaderTemplate=e.template;break;case"removetokenicon":this._removeIconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;case"clearicon":this._clearIconTemplate=e.template;break;case"dropdownicon":this._dropdownIconTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"])),this.suggestionsUpdated&&this.overlayViewChild&&this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.overlayViewChild&&this.overlayViewChild.alignOverlay()},1),this.suggestionsUpdated=!1})}handleSuggestionsChange(){if(this.loading){this._suggestions()?.length>0||this.showEmptyMessage||this.emptyTemplate?this.show():this.hide();let e=this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(e),this.suggestionsUpdated=!0,this.loading=!1,this.cd.markForCheck()}}flatOptions(e){return(e||[]).reduce((t,i,o)=>{t.push({optionGroup:i,group:!0,index:o});let l=this.getOptionGroupChildren(i);return l&&l.forEach(x=>t.push(x)),t},[])}isOptionGroup(e){return this.optionGroupLabel&&e.optionGroup&&e.group}findFirstOptionIndex(){return this.visibleOptions().findIndex(e=>this.isValidOption(e))}findLastOptionIndex(){return re(this.visibleOptions(),e=>this.isValidOption(e))}findFirstFocusedOptionIndex(){let e=this.findSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e}findLastFocusedOptionIndex(){let e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e}findSelectedOptionIndex(){return this.hasSelectedOption()?this.visibleOptions().findIndex(e=>this.isValidSelectedOption(e)):-1}findNextOptionIndex(e){let t=e<this.visibleOptions().length-1?this.visibleOptions().slice(e+1).findIndex(i=>this.isValidOption(i)):-1;return t>-1?t+e+1:e}findPrevOptionIndex(e){let t=e>0?re(this.visibleOptions().slice(0,e),i=>this.isValidOption(i)):-1;return t>-1?t:e}isValidSelectedOption(e){return this.isValidOption(e)&&this.isSelected(e)}isValidOption(e){return e&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))}isOptionDisabled(e){return this.optionDisabled?B(e,this.optionDisabled):!1}isSelected(e){return this.multiple?this.unique?this.modelValue()?.some(t=>z(t,e,this.equalityKey())):!1:z(this.modelValue(),e,this.equalityKey())}isOptionMatched(e,t){return this.isValidOption(e)&&this.getOptionLabel(e).toLocaleLowerCase(this.searchLocale)===t.toLocaleLowerCase(this.searchLocale)}isInputClicked(e){return e.target===this.inputEL?.nativeElement}isDropdownClicked(e){return this.dropdownButton?.nativeElement?e.target===this.dropdownButton.nativeElement||this.dropdownButton.nativeElement.contains(e.target):!1}equalityKey(){return this.optionValue?void 0:this.dataKey}onContainerClick(e){this.$disabled()||this.loading||this.isInputClicked(e)||this.isDropdownClicked(e)||(!this.overlayViewChild||!this.overlayViewChild.overlayViewChild?.nativeElement.contains(e.target))&&M(this.inputEL?.nativeElement)}handleDropdownClick(e){let t;this.overlayVisible?this.hide(!0):(M(this.inputEL?.nativeElement),t=this.inputEL?.nativeElement?.value,this.dropdownMode==="blank"?this.search(e,"","dropdown"):this.dropdownMode==="current"&&this.search(e,t,"dropdown")),this.onDropdownClick.emit({originalEvent:e,query:t})}onInput(e){if(this.typeahead){let t=this.minQueryLength||this.minLength;this.searchTimeout&&clearTimeout(this.searchTimeout);let i=e.target.value;this.maxlength()!==null&&(i=i.split("").slice(0,this.maxlength()).join("")),!this.multiple&&!this.forceSelection&&this.updateModel(i),i.length===0&&!this.multiple?(this.onClear.emit(),setTimeout(()=>{this.hide()},this.delay/2)):i.length>=t?(this.focusedOptionIndex.set(-1),this.searchTimeout=setTimeout(()=>{this.search(e,i,"input")},this.delay)):this.hide()}}onInputChange(e){if(this.forceSelection){let t=!1;if(this.visibleOptions()){let i=this.visibleOptions().find(o=>this.isOptionMatched(o,this.inputEL?.nativeElement?.value||""));i!==void 0&&(t=!0,!this.isSelected(i)&&this.onOptionSelect(e,i))}t||(this.inputEL?.nativeElement&&(this.inputEL.nativeElement.value=""),!this.multiple&&this.updateModel(null))}}onInputFocus(e){if(this.$disabled())return;!this.dirty&&this.completeOnFocus&&this.search(e,e.target.value,"focus"),this.dirty=!0,this.focused=!0;let t=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(t),this.overlayVisible&&this.scrollInView(this.focusedOptionIndex()),this.onFocus.emit(e)}onMultipleContainerFocus(e){this.$disabled()||(this.focused=!0)}onMultipleContainerBlur(e){this.focusedMultipleOptionIndex.set(-1),this.focused=!1}onMultipleContainerKeyDown(e){if(this.$disabled()){e.preventDefault();return}switch(e.code){case"ArrowLeft":this.onArrowLeftKeyOnMultiple(e);break;case"ArrowRight":this.onArrowRightKeyOnMultiple(e);break;case"Backspace":this.onBackspaceKeyOnMultiple(e);break;default:break}}onInputBlur(e){if(this.dirty=!1,this.focused=!1,this.focusedOptionIndex.set(-1),this.addOnBlur&&this.multiple&&!this.typeahead){let t=(this.multiInputEl?.nativeElement?.value||e.target.value||"").trim();t&&!this.isSelected(t)&&(this.updateModel([...this.modelValue()||[],t]),this.onAdd.emit({originalEvent:e,value:t}),this.multiInputEl?.nativeElement?this.multiInputEl.nativeElement.value="":e.target.value="")}this.onModelTouched(),this.onBlur.emit(e)}onInputPaste(e){if(this.separator&&this.multiple&&!this.typeahead){let t=(e.clipboardData||window.clipboardData)?.getData("Text");if(t){let i=t.split(this.separator),o=[...this.modelValue()||[]];if(i.forEach(l=>{let x=l.trim();x&&!this.isSelected(x)&&o.push(x)}),o.length>(this.modelValue()||[]).length){let l=o.slice((this.modelValue()||[]).length);this.updateModel(o),l.forEach(x=>{this.onAdd.emit({originalEvent:e,value:x})}),this.multiInputEl?.nativeElement?this.multiInputEl.nativeElement.value="":e.target.value="",e.preventDefault()}}}else this.onKeyDown(e)}onInputKeyUp(e){this.onKeyUp.emit(e)}onKeyDown(e){if(this.$disabled()){e.preventDefault();return}switch(this.onInputKeydown.emit(e),e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"Backspace":this.onBackspaceKey(e);break;case"ShiftLeft":case"ShiftRight":break;default:this.handleSeparatorKey(e);break}}handleSeparatorKey(e){if(this.separator&&this.multiple&&!this.typeahead&&(this.separator===e.key||typeof this.separator=="string"&&e.key===this.separator||this.separator instanceof RegExp&&e.key.match(this.separator))){let t=(this.multiInputEl?.nativeElement?.value||e.target.value||"").trim();t&&!this.isSelected(t)&&(this.updateModel([...this.modelValue()||[],t]),this.onAdd.emit({originalEvent:e,value:t}),this.multiInputEl?.nativeElement?this.multiInputEl.nativeElement.value="":e.target.value="",e.preventDefault())}}onArrowDownKey(e){if(!this.overlayVisible)return;let t=this.focusedOptionIndex()!==-1?this.findNextOptionIndex(this.focusedOptionIndex()):this.findFirstFocusedOptionIndex();this.changeFocusedOptionIndex(e,t),e.preventDefault(),e.stopPropagation()}onArrowUpKey(e){if(this.overlayVisible)if(e.altKey)this.focusedOptionIndex()!==-1&&this.onOptionSelect(e,this.visibleOptions()[this.focusedOptionIndex()]),this.overlayVisible&&this.hide(),e.preventDefault();else{let t=this.focusedOptionIndex()!==-1?this.findPrevOptionIndex(this.focusedOptionIndex()):this.findLastFocusedOptionIndex();this.changeFocusedOptionIndex(e,t),e.preventDefault(),e.stopPropagation()}}onArrowLeftKey(e){let t=e.currentTarget;this.focusedOptionIndex.set(-1),this.multiple&&(pe(t.value)&&this.hasSelectedOption()?(M(this.multiContainerEL?.nativeElement),this.focusedMultipleOptionIndex.set(this.modelValue().length)):e.stopPropagation())}onArrowRightKey(e){this.focusedOptionIndex.set(-1),this.multiple&&e.stopPropagation()}onHomeKey(e){let{currentTarget:t}=e,i=t.value.length;t.setSelectionRange(0,e.shiftKey?i:0),this.focusedOptionIndex.set(-1),e.preventDefault()}onEndKey(e){let{currentTarget:t}=e,i=t.value.length;t.setSelectionRange(e.shiftKey?0:i,i),this.focusedOptionIndex.set(-1),e.preventDefault()}onPageDownKey(e){this.scrollInView(this.visibleOptions().length-1),e.preventDefault()}onPageUpKey(e){this.scrollInView(0),e.preventDefault()}onEnterKey(e){if(!this.typeahead&&!this.forceSelection&&this.multiple){let t=e.target.value?.trim();t&&!this.isSelected(t)&&(this.updateModel([...this.modelValue()||[],t]),this.inputEL?.nativeElement&&(this.inputEL.nativeElement.value=""))}if(this.overlayVisible)this.focusedOptionIndex()!==-1&&this.onOptionSelect(e,this.visibleOptions()[this.focusedOptionIndex()]),this.hide();else return;e.preventDefault()}onEscapeKey(e){this.overlayVisible&&this.hide(!0),e.preventDefault()}onTabKey(e){if(this.focusedOptionIndex()!==-1){this.onOptionSelect(e,this.visibleOptions()[this.focusedOptionIndex()]);return}if(this.multiple&&!this.typeahead){let t=(this.multiInputEl?.nativeElement?.value||this.inputEL?.nativeElement?.value||"").trim();if(this.addOnTab&&t&&!this.isSelected(t)){this.updateModel([...this.modelValue()||[],t]),this.onAdd.emit({originalEvent:e,value:t}),this.multiInputEl?.nativeElement?this.multiInputEl.nativeElement.value="":this.inputEL?.nativeElement&&(this.inputEL.nativeElement.value=""),this.updateInputValue(),e.preventDefault(),this.overlayVisible&&this.hide();return}}this.overlayVisible&&this.hide()}onBackspaceKey(e){if(this.multiple){if($(this.modelValue())&&!this.inputEL?.nativeElement?.value){let t=this.modelValue()[this.modelValue().length-1],i=this.modelValue().slice(0,-1);this.updateModel(i),this.onUnselect.emit({originalEvent:e,value:t})}e.stopPropagation()}}onArrowLeftKeyOnMultiple(e){let t=this.focusedMultipleOptionIndex()<1?0:this.focusedMultipleOptionIndex()-1;this.focusedMultipleOptionIndex.set(t)}onArrowRightKeyOnMultiple(e){let t=this.focusedMultipleOptionIndex();t++,this.focusedMultipleOptionIndex.set(t),t>this.modelValue().length-1&&(this.focusedMultipleOptionIndex.set(-1),M(this.inputEL?.nativeElement))}onBackspaceKeyOnMultiple(e){this.focusedMultipleOptionIndex()!==-1&&this.removeOption(e,this.focusedMultipleOptionIndex())}onOptionSelect(e,t,i=!0){this.multiple?(this.inputEL?.nativeElement&&(this.inputEL.nativeElement.value=""),this.isSelected(t)||this.updateModel([...this.modelValue()||[],t])):this.updateModel(t),this.onSelect.emit({originalEvent:e,value:t}),i&&this.hide(!0)}onOptionMouseEnter(e,t){this.focusOnHover&&this.changeFocusedOptionIndex(e,t)}search(e,t,i){t!=null&&(i==="input"&&t.trim().length===0||(this.loading=!0,this.completeMethod.emit({originalEvent:e,query:t})))}removeOption(e,t){e.stopPropagation();let i=this.modelValue()[t],o=this.modelValue().filter((l,x)=>x!==t);this.updateModel(o),this.onUnselect.emit({originalEvent:e,value:i}),M(this.inputEL?.nativeElement)}updateModel(e){let t=null;e&&(t=this.multiple?e.map(i=>this.getOptionValue(i)):this.getOptionValue(e)),this.value=t,this.writeModelValue(e),this.onModelChange(t),this.updateInputValue(),this.cd.markForCheck()}updateInputValue(){this.inputEL&&this.inputEL.nativeElement&&(this.multiple?this.inputEL.nativeElement.value="":this.inputEL.nativeElement.value=this.inputValue())}autoUpdateModel(){if((this.selectOnFocus||this.autoHighlight)&&this.autoOptionFocus&&!this.hasSelectedOption()){let e=this.findFirstFocusedOptionIndex();this.focusedOptionIndex.set(e),this.onOptionSelect(null,this.visibleOptions()[this.focusedOptionIndex()],!1)}}scrollInView(e=-1){let t=e!==-1?`${this.id}_${e}`:this.focusedOptionId;if(this.itemsViewChild&&this.itemsViewChild.nativeElement){let i=X(this.itemsViewChild.nativeElement,`li[id="${t}"]`);i?i.scrollIntoView&&i.scrollIntoView({block:"nearest",inline:"nearest"}):this.virtualScrollerDisabled||setTimeout(()=>{this.virtualScroll&&this.scroller?.scrollToIndex(e!==-1?e:this.focusedOptionIndex())},0)}}changeFocusedOptionIndex(e,t){this.focusedOptionIndex()!==t&&(this.focusedOptionIndex.set(t),this.scrollInView(),this.selectOnFocus&&this.onOptionSelect(e,this.visibleOptions()[t],!1))}show(e=!1){this.dirty=!0,this.overlayVisible=!0;let t=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(t),e&&M(this.inputEL?.nativeElement),e&&M(this.inputEL?.nativeElement),this.onShow.emit(),this.cd.markForCheck()}hide(e=!1){let t=()=>{this.dirty=e,this.overlayVisible=!1,this.focusedOptionIndex.set(-1),e&&M(this.inputEL?.nativeElement),this.onHide.emit(),this.cd.markForCheck()};setTimeout(()=>{t()},0)}clear(){this.updateModel(null),this.inputEL?.nativeElement&&(this.inputEL.nativeElement.value=""),this.onClear.emit()}hasSelectedOption(){return $(this.modelValue())}getAriaPosInset(e){return(this.optionGroupLabel?e-this.visibleOptions().slice(0,e).filter(t=>this.isOptionGroup(t)).length:e)+1}getOptionLabel(e){return this.optionLabel?B(e,this.optionLabel):e&&e.label!=null?e.label:e}getOptionValue(e){return this.optionValue?B(e,this.optionValue):e&&e.value!=null?e.value:e}getOptionIndex(e,t){return this.virtualScrollerDisabled?e:t&&t.getItemOptions(e).index}getOptionGroupLabel(e){return this.optionGroupLabel?B(e,this.optionGroupLabel):e&&e.label!=null?e.label:e}getOptionGroupChildren(e){return this.optionGroupChildren?B(e,this.optionGroupChildren):e.items}getPTOptions(e,t,i,o){return this.ptm(o,{context:{option:e,index:this.getOptionIndex(i,t),selected:this.isSelected(e),focused:this.focusedOptionIndex()===this.getOptionIndex(i,t),disabled:this.isOptionDisabled(e)}})}onOverlayAnimationStart(e){if(e.toState==="visible"&&(this.itemsWrapper=X(this.overlayViewChild.overlayViewChild?.nativeElement,this.virtualScroll?".p-scroller":".p-autocomplete-panel"),this.virtualScroll&&(this.scroller?.setContentEl(this.itemsViewChild?.nativeElement),this.scroller?.viewInit()),this.visibleOptions()&&this.visibleOptions().length))if(this.virtualScroll){let t=this.modelValue()?this.focusedOptionIndex():-1;t!==-1&&this.scroller?.scrollToIndex(t)}else{let t=X(this.itemsWrapper,".p-autocomplete-item.p-highlight");t&&t.scrollIntoView({block:"nearest",inline:"center"})}}writeControlValue(e,t){let i=this.multiple?this.visibleOptions().filter(o=>e?.some(l=>z(l,o,this.equalityKey()))):this.visibleOptions().find(o=>z(e,o,this.equalityKey()));this.value=e,t(pe(i)?e:i),this.updateInputValue(),this.cd.markForCheck()}onDestroy(){this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null)}static \u0275fac=function(t){return new(t||n)(ne(Se),ne(me))};static \u0275cmp=G({type:n,selectors:[["p-autoComplete"],["p-autocomplete"],["p-auto-complete"]],contentQueries:function(t,i,o){if(t&1&&(C(o,ot,5),C(o,lt,5),C(o,at,5),C(o,pt,5),C(o,rt,5),C(o,st,5),C(o,ut,5),C(o,ct,5),C(o,dt,5),C(o,mt,5),C(o,ht,5),C(o,Ve,4)),t&2){let l;f(l=y())&&(i.itemTemplate=l.first),f(l=y())&&(i.emptyTemplate=l.first),f(l=y())&&(i.headerTemplate=l.first),f(l=y())&&(i.footerTemplate=l.first),f(l=y())&&(i.selectedItemTemplate=l.first),f(l=y())&&(i.groupTemplate=l.first),f(l=y())&&(i.loaderTemplate=l.first),f(l=y())&&(i.removeIconTemplate=l.first),f(l=y())&&(i.loadingIconTemplate=l.first),f(l=y())&&(i.clearIconTemplate=l.first),f(l=y())&&(i.dropdownIconTemplate=l.first),f(l=y())&&(i.templates=l)}},viewQuery:function(t,i){if(t&1&&(k(_t,5),k(gt,5),k(ft,5),k(yt,5),k(xt,5),k(bt,5),k(vt,5)),t&2){let o;f(o=y())&&(i.inputEL=o.first),f(o=y())&&(i.multiInputEl=o.first),f(o=y())&&(i.multiContainerEL=o.first),f(o=y())&&(i.dropdownButton=o.first),f(o=y())&&(i.itemsViewChild=o.first),f(o=y())&&(i.scroller=o.first),f(o=y())&&(i.overlayViewChild=o.first)}},hostVars:4,hostBindings:function(t,i){t&1&&w("click",function(l){return i.onHostClick(l)}),t&2&&(U(i.sx("root")),g(i.cn(i.cx("root"),i.styleClass)))},inputs:{minLength:[2,"minLength","minLength",A],minQueryLength:[2,"minQueryLength","minQueryLength",A],delay:[2,"delay","delay",A],panelStyle:"panelStyle",styleClass:"styleClass",panelStyleClass:"panelStyleClass",inputStyle:"inputStyle",inputId:"inputId",inputStyleClass:"inputStyleClass",placeholder:"placeholder",readonly:[2,"readonly","readonly",h],scrollHeight:"scrollHeight",lazy:[2,"lazy","lazy",h],virtualScroll:[2,"virtualScroll","virtualScroll",h],virtualScrollItemSize:[2,"virtualScrollItemSize","virtualScrollItemSize",A],virtualScrollOptions:"virtualScrollOptions",autoHighlight:[2,"autoHighlight","autoHighlight",h],forceSelection:[2,"forceSelection","forceSelection",h],type:"type",autoZIndex:[2,"autoZIndex","autoZIndex",h],baseZIndex:[2,"baseZIndex","baseZIndex",A],ariaLabel:"ariaLabel",dropdownAriaLabel:"dropdownAriaLabel",ariaLabelledBy:"ariaLabelledBy",dropdownIcon:"dropdownIcon",unique:[2,"unique","unique",h],group:[2,"group","group",h],completeOnFocus:[2,"completeOnFocus","completeOnFocus",h],showClear:[2,"showClear","showClear",h],dropdown:[2,"dropdown","dropdown",h],showEmptyMessage:[2,"showEmptyMessage","showEmptyMessage",h],dropdownMode:"dropdownMode",multiple:[2,"multiple","multiple",h],addOnTab:[2,"addOnTab","addOnTab",h],tabindex:[2,"tabindex","tabindex",A],dataKey:"dataKey",emptyMessage:"emptyMessage",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",autofocus:[2,"autofocus","autofocus",h],autocomplete:"autocomplete",optionGroupChildren:"optionGroupChildren",optionGroupLabel:"optionGroupLabel",overlayOptions:"overlayOptions",suggestions:"suggestions",optionLabel:"optionLabel",optionValue:"optionValue",id:"id",searchMessage:"searchMessage",emptySelectionMessage:"emptySelectionMessage",selectionMessage:"selectionMessage",autoOptionFocus:[2,"autoOptionFocus","autoOptionFocus",h],selectOnFocus:[2,"selectOnFocus","selectOnFocus",h],searchLocale:[2,"searchLocale","searchLocale",h],optionDisabled:"optionDisabled",focusOnHover:[2,"focusOnHover","focusOnHover",h],typeahead:[2,"typeahead","typeahead",h],addOnBlur:[2,"addOnBlur","addOnBlur",h],separator:"separator",appendTo:[1,"appendTo"]},outputs:{completeMethod:"completeMethod",onSelect:"onSelect",onUnselect:"onUnselect",onAdd:"onAdd",onFocus:"onFocus",onBlur:"onBlur",onDropdownClick:"onDropdownClick",onClear:"onClear",onInputKeydown:"onInputKeydown",onKeyUp:"onKeyUp",onShow:"onShow",onHide:"onHide",onLazyLoad:"onLazyLoad"},features:[ye([On,Xe,{provide:Ye,useExisting:n},{provide:De,useExisting:n}]),ge([N]),P],decls:9,vars:13,consts:[["overlay",""],["content",""],["focusInput",""],["multiContainer",""],["focusInput","","multiIn",""],["token",""],["removeicon",""],["ddBtn",""],["buildInItems",""],["scroller",""],["loader",""],["items",""],["empty",""],["pInputText","","aria-autocomplete","list","role","combobox",3,"pAutoFocus","pt","class","ngStyle","variant","invalid","pSize","fluid","input","keydown","change","focus","blur","paste","keyup",4,"ngIf"],[4,"ngIf"],["role","listbox",3,"pBind","class","tabindex","focus","blur","keydown",4,"ngIf"],["type","button","pRipple","",3,"pBind","class","disabled","click",4,"ngIf"],[3,"visibleChange","onAnimationStart","onHide","pt","hostAttrSelector","visible","options","target","appendTo","showTransitionOptions","hideTransitionOptions"],["pInputText","","aria-autocomplete","list","role","combobox",3,"input","keydown","change","focus","blur","paste","keyup","pAutoFocus","pt","ngStyle","variant","invalid","pSize","fluid"],["data-p-icon","times",3,"pBind","class","click",4,"ngIf"],[3,"pBind","class","click",4,"ngIf"],["data-p-icon","times",3,"click","pBind"],[3,"click","pBind"],[4,"ngTemplateOutlet"],["role","listbox",3,"focus","blur","keydown","pBind","tabindex"],["role","option",3,"pBind","class",4,"ngFor","ngForOf"],["role","option",3,"pBind"],["role","combobox","aria-autocomplete","list",3,"input","keydown","change","focus","blur","paste","keyup","pAutoFocus","pBind","ngStyle"],[3,"onRemove","pt","label","disabled","removable"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"pBind",4,"ngIf"],["data-p-icon","times-circle"],[3,"pBind"],["data-p-icon","spinner",3,"pBind","class","spin",4,"ngIf"],[3,"pBind","class",4,"ngIf"],["data-p-icon","spinner",3,"pBind","spin"],["type","button","pRipple","",3,"click","pBind","disabled"],[3,"ngClass",4,"ngIf"],[3,"ngClass"],["data-p-icon","chevron-down",3,"pBind",4,"ngIf"],["data-p-icon","chevron-down",3,"pBind"],[3,"pBind","ngStyle"],[3,"pBind","tabindex"],[3,"pt","items","style","itemSize","autoSize","lazy","options","onLazyLoad",4,"ngIf"],["role","status","aria-live","polite",1,"p-hidden-accessible"],[3,"onLazyLoad","pt","items","itemSize","autoSize","lazy","options"],["role","listbox",3,"pBind"],["ngFor","",3,"ngForOf"],["role","option",3,"pBind","class","ngStyle",4,"ngIf"],["role","option",3,"pBind","ngStyle"],["pRipple","","role","option",3,"click","mouseenter","pBind","ngStyle"],[4,"ngIf","ngIfElse"]],template:function(t,i){if(t&1){let o=O();u(0,Vt,2,31,"input",13)(1,Lt,3,2,"ng-container",14)(2,$t,7,36,"ul",15)(3,Pt,3,2,"ng-container",14)(4,Xt,4,8,"button",16),m(5,"p-overlay",17,0),Z("visibleChange",function(x){return c(o),W(i.overlayVisible,x)||(i.overlayVisible=x),d(x)}),w("onAnimationStart",function(x){return c(o),d(i.onOverlayAnimationStart(x))})("onHide",function(){return c(o),d(i.hide())}),u(7,vn,10,15,"ng-template",null,1,F),_()}t&2&&(r("ngIf",!i.multiple),s(),r("ngIf",i.$filled()&&!i.$disabled()&&i.showClear&&!i.loading),s(),r("ngIf",i.multiple),s(),r("ngIf",i.loading),s(),r("ngIf",i.dropdown),s(),r("pt",i.ptm("pcOverlay"))("hostAttrSelector",i.$attrSelector),j("visible",i.overlayVisible),r("options",i.overlayOptions)("target","@parent")("appendTo",i.$appendTo())("showTransitionOptions",i.showTransitionOptions)("hideTransitionOptions",i.hideTransitionOptions))},dependencies:[Oe,be,ve,we,Ie,Ce,Pe,Ge,Ue,je,Be,qe,$e,Qe,He,Y,Ne,Ke,N],encapsulation:2,changeDetection:0})}return n})(),nt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=he({type:n});static \u0275inj=ce({imports:[te,Y,Y]})}return n})();var it=class n{dropdown=!1;suggestions=[];optionLabel=void 0;model;modelChange=new b;valueCompleted=new b;valueChanged=new b;onValueCompleted(a){this.valueCompleted.emit(a)}onValueChanged(a){this.modelChange.emit(this.model),this.valueChanged.emit(this.model)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=G({type:n,selectors:[["app-auto-complete-component"]],inputs:{dropdown:"dropdown",suggestions:"suggestions",optionLabel:"optionLabel",model:"model"},outputs:{modelChange:"modelChange",valueCompleted:"valueCompleted",valueChanged:"valueChanged"},decls:1,vars:4,consts:[[3,"ngModelChange","completeMethod","onSelect","dropdown","suggestions","optionLabel","ngModel"]],template:function(e,t){e&1&&(m(0,"p-autocomplete",0),Z("ngModelChange",function(o){return W(t.model,o)||(t.model=o),o}),w("completeMethod",function(o){return t.onValueCompleted(o)})("onSelect",function(o){return t.onValueChanged(o)}),_()),e&2&&(r("dropdown",t.dropdown)("suggestions",t.suggestions)("optionLabel",t.optionLabel),j("ngModel",t.model))},dependencies:[nt,te,Fe,Ae,Le],encapsulation:2})};export{Ze as a,it as b};
