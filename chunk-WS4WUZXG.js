import{e as ee}from"./chunk-XE62UYEZ.js";import{a as se}from"./chunk-GSHOJI7D.js";import{a as ie,c as ne,d as oe,e as le}from"./chunk-45ZGUUD6.js";import{c as Z,e as h,f as te}from"./chunk-IS5FCBNF.js";import{fa as X,ga as y,ma as Y}from"./chunk-JIHEE4C7.js";import{m as J,o as K}from"./chunk-HNSURZOS.js";import{$a as L,Ab as f,Bb as b,Da as a,Fb as G,Gb as g,Lb as R,M as V,Mb as P,N as E,Nb as W,O as B,Oa as m,Ob as q,Pa as F,Q as I,Qb as x,S as p,Sa as A,Ta as D,Ua as N,X as v,Y as k,_a as T,ab as O,fb as s,gb as d,gc as $,hb as r,ia as _,lc as M,mc as U,ob as H,pb as Q,ub as c,vb as z,ya as w,yb as S,zb as j}from"./chunk-K6DSXF3S.js";var ae=`
    .p-toggleswitch {
        display: inline-block;
        width: dt('toggleswitch.width');
        height: dt('toggleswitch.height');
    }

    .p-toggleswitch-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        top: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border-radius: dt('toggleswitch.border.radius');
    }

    .p-toggleswitch-slider {
        cursor: pointer;
        width: 100%;
        height: 100%;
        border-width: dt('toggleswitch.border.width');
        border-style: solid;
        border-color: dt('toggleswitch.border.color');
        background: dt('toggleswitch.background');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            border-color dt('toggleswitch.transition.duration'),
            outline-color dt('toggleswitch.transition.duration'),
            box-shadow dt('toggleswitch.transition.duration');
        border-radius: dt('toggleswitch.border.radius');
        outline-color: transparent;
        box-shadow: dt('toggleswitch.shadow');
    }

    .p-toggleswitch-handle {
        position: absolute;
        top: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: dt('toggleswitch.handle.background');
        color: dt('toggleswitch.handle.color');
        width: dt('toggleswitch.handle.size');
        height: dt('toggleswitch.handle.size');
        inset-inline-start: dt('toggleswitch.gap');
        margin-block-start: calc(-1 * calc(dt('toggleswitch.handle.size') / 2));
        border-radius: dt('toggleswitch.handle.border.radius');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            inset-inline-start dt('toggleswitch.slide.duration'),
            box-shadow dt('toggleswitch.slide.duration');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.background');
        border-color: dt('toggleswitch.checked.border.color');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.background');
        color: dt('toggleswitch.handle.checked.color');
        inset-inline-start: calc(dt('toggleswitch.width') - calc(dt('toggleswitch.handle.size') + dt('toggleswitch.gap')));
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {
        background: dt('toggleswitch.hover.background');
        border-color: dt('toggleswitch.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.hover.background');
        color: dt('toggleswitch.handle.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.hover.background');
        border-color: dt('toggleswitch.checked.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.hover.background');
        color: dt('toggleswitch.handle.checked.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {
        box-shadow: dt('toggleswitch.focus.ring.shadow');
        outline: dt('toggleswitch.focus.ring.width') dt('toggleswitch.focus.ring.style') dt('toggleswitch.focus.ring.color');
        outline-offset: dt('toggleswitch.focus.ring.offset');
    }

    .p-toggleswitch.p-invalid > .p-toggleswitch-slider {
        border-color: dt('toggleswitch.invalid.border.color');
    }

    .p-toggleswitch.p-disabled {
        opacity: 1;
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-slider {
        background: dt('toggleswitch.disabled.background');
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.disabled.background');
    }
`;var ue=["handle"],pe=["input"],we=t=>({checked:t});function me(t,u){t&1&&H(0)}function fe(t,u){if(t&1&&N(0,me,1,0,"ng-container",3),t&2){let i=z();s("ngTemplateOutlet",i.handleTemplate||i._handleTemplate)("ngTemplateOutletContext",x(2,we,i.checked()))}}var be=`
    ${ae}

    p-toggleswitch.ng-invalid.ng-dirty > .p-toggleswitch-slider {
        border-color: dt('toggleswitch.invalid.border.color');
    }
`,ye={root:{position:"relative"}},Ce={root:({instance:t})=>["p-toggleswitch p-component",{"p-toggleswitch p-component":!0,"p-toggleswitch-checked":t.checked(),"p-disabled":t.$disabled(),"p-invalid":t.invalid()}],input:"p-toggleswitch-input",slider:"p-toggleswitch-slider",handle:"p-toggleswitch-handle"},de=(()=>{class t extends Y{name="toggleswitch";style=be;classes=Ce;inlineStyles=ye;static \u0275fac=(()=>{let i;return function(e){return(i||(i=_(t)))(e||t)}})();static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var re=new I("TOGGLESWITCH_INSTANCE"),ve={provide:ie,useExisting:V(()=>C),multi:!0},C=(()=>{class t extends se{$pcToggleSwitch=p(re,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=p(h,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;tabindex;inputId;readonly;trueValue=!0;falseValue=!1;ariaLabel;size=$();ariaLabelledBy;autofocus;onChange=new a;input;handleTemplate;_handleTemplate;focused=!1;_componentStyle=p(de);templates;onHostClick(i){this.onClick(i)}onAfterContentInit(){this.templates.forEach(i=>{i.getType()==="handle"?this._handleTemplate=i.template:this._handleTemplate=i.template})}onClick(i){!this.$disabled()&&!this.readonly&&(this.writeModelValue(this.checked()?this.falseValue:this.trueValue),this.onModelChange(this.modelValue()),this.onChange.emit({originalEvent:i,checked:this.modelValue()}),this.input.nativeElement.focus())}onFocus(){this.focused=!0}onBlur(){this.focused=!1,this.onModelTouched()}checked(){return this.modelValue()===this.trueValue}writeControlValue(i,n){n(i),this.cd.markForCheck()}static \u0275fac=(()=>{let i;return function(e){return(i||(i=_(t)))(e||t)}})();static \u0275cmp=m({type:t,selectors:[["p-toggleswitch"],["p-toggleSwitch"],["p-toggle-switch"]],contentQueries:function(n,e,o){if(n&1&&(S(o,ue,4),S(o,X,4)),n&2){let l;f(l=b())&&(e.handleTemplate=l.first),f(l=b())&&(e.templates=l)}},viewQuery:function(n,e){if(n&1&&j(pe,5),n&2){let o;f(o=b())&&(e.input=o.first)}},hostVars:5,hostBindings:function(n,e){n&1&&c("click",function(l){return e.onHostClick(l)}),n&2&&(T("data-pc-name","toggleswitch"),G(e.sx("root")),g(e.cn(e.cx("root"),e.styleClass)))},inputs:{styleClass:"styleClass",tabindex:[2,"tabindex","tabindex",U],inputId:"inputId",readonly:[2,"readonly","readonly",M],trueValue:"trueValue",falseValue:"falseValue",ariaLabel:"ariaLabel",size:[1,"size"],ariaLabelledBy:"ariaLabelledBy",autofocus:[2,"autofocus","autofocus",M]},outputs:{onChange:"onChange"},features:[q([ve,de,{provide:re,useExisting:t},{provide:Z,useExisting:t}]),D([h]),A],decls:5,vars:20,consts:[["input",""],["type","checkbox","role","switch",3,"focus","blur","checked","pAutoFocus","pBind"],[3,"pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,e){if(n&1){let o=Q();d(0,"input",1,0),c("focus",function(){return v(o),k(e.onFocus())})("blur",function(){return v(o),k(e.onBlur())}),r(),d(2,"div",2)(3,"div",2),L(4,fe,1,4,"ng-container"),r()()}n&2&&(g(e.cx("input")),s("checked",e.checked())("pAutoFocus",e.autofocus)("pBind",e.ptm("input")),T("id",e.inputId)("required",e.required()?"":void 0)("disabled",e.$disabled()?"":void 0)("aria-checked",e.checked())("aria-labelledby",e.ariaLabelledBy)("aria-label",e.ariaLabel)("name",e.name())("tabindex",e.tabindex),w(2),g(e.cx("slider")),s("pBind",e.ptm("slider")),w(),g(e.cx("handle")),s("pBind",e.ptm("handle")),w(),O(e.handleTemplate||e._handleTemplate?4:-1))},dependencies:[K,J,ee,y,te,h],encapsulation:2,changeDetection:0})}return t})(),ce=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=F({type:t});static \u0275inj=B({imports:[C,y,y]})}return t})();var ge=class t{invalid=!1;disabled=!1;model=!1;modelChange=new a;valueChanged=new a;onValueChanged(u){this.modelChange.emit(this.model),this.valueChanged.emit(this.model)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=m({type:t,selectors:[["app-toggle-switch-component"]],inputs:{invalid:"invalid",disabled:"disabled",model:"model"},outputs:{modelChange:"modelChange",valueChanged:"valueChanged"},decls:1,vars:3,consts:[[3,"ngModelChange","onChange","invalid","disabled","ngModel"]],template:function(i,n){i&1&&(d(0,"p-toggleswitch",0),W("ngModelChange",function(o){return P(n.model,o)||(n.model=o),o}),c("onChange",function(o){return n.onValueChanged(o)}),r()),i&2&&(s("invalid",n.invalid)("disabled",n.disabled),R("ngModel",n.model))},dependencies:[ce,C,le,ne,oe],styles:["[_nghost-%COMP%]{display:flex;align-items:center}"]})};export{ge as a};
