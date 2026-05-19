import{a as se,b as le,f as he}from"./chunk-OGBAUOOP.js";import{a as de}from"./chunk-JMHBSSHI.js";import{b as ce,d as f,e as ae,f as re}from"./chunk-YKXIAYB2.js";import{P as ne,Q as te,ea as oe,fa as T,la as ie}from"./chunk-KBZJZ3J5.js";import{i as J,k as W,m as Y,o as ee}from"./chunk-HNSURZOS.js";import{Ab as w,Bb as V,Da as y,Fb as K,Gb as p,M as A,N as L,O,Oa as I,Ob as X,Pa as q,Q as $,Qa as Q,Rb as U,S as g,Sa as u,Ta as j,Ua as m,X as v,Y as C,Z as x,_a as D,dc as B,ea as _,fb as c,gb as F,gc as l,hb as N,ia as h,ib as M,lb as H,lc as r,mb as E,mc as Z,nb as S,pb as R,ub as G,vb as b,ya as s,yb as z,zb as P}from"./chunk-K6DSXF3S.js";var ue=(()=>{class n extends he{required=l(void 0,{transform:r});invalid=l(void 0,{transform:r});disabled=l(void 0,{transform:r});name=l();_disabled=_(!1);$disabled=B(()=>this.disabled()||this._disabled());onModelChange=()=>{};onModelTouched=()=>{};writeDisabledState(e){this._disabled.set(e)}writeControlValue(e,o){}writeValue(e){this.writeControlValue(e,this.writeModelValue.bind(this))}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.writeDisabledState(e),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(t){return(e||(e=h(n)))(t||n)}})();static \u0275dir=Q({type:n,inputs:{required:[1,"required"],invalid:[1,"invalid"],disabled:[1,"disabled"],name:[1,"name"]},features:[u]})}return n})();var ge=["data-p-icon","check"],be=(()=>{class n extends re{static \u0275fac=(()=>{let e;return function(t){return(e||(e=h(n)))(t||n)}})();static \u0275cmp=I({type:n,selectors:[["","data-p-icon","check"]],features:[u],attrs:ge,decls:1,vars:0,consts:[["d","M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z","fill","currentColor"]],template:function(o,t){o&1&&(x(),H(0,"path",0))},encapsulation:2})}return n})();var ke=`
    .p-checkbox {
        position: relative;
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        width: dt('checkbox.width');
        height: dt('checkbox.height');
    }

    .p-checkbox-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        inset-block-start: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border: 1px solid transparent;
        border-radius: dt('checkbox.border.radius');
    }

    .p-checkbox-box {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: dt('checkbox.border.radius');
        border: 1px solid dt('checkbox.border.color');
        background: dt('checkbox.background');
        width: dt('checkbox.width');
        height: dt('checkbox.height');
        transition:
            background dt('checkbox.transition.duration'),
            color dt('checkbox.transition.duration'),
            border-color dt('checkbox.transition.duration'),
            box-shadow dt('checkbox.transition.duration'),
            outline-color dt('checkbox.transition.duration');
        outline-color: transparent;
        box-shadow: dt('checkbox.shadow');
    }

    .p-checkbox-icon {
        transition-duration: dt('checkbox.transition.duration');
        color: dt('checkbox.icon.color');
        font-size: dt('checkbox.icon.size');
        width: dt('checkbox.icon.size');
        height: dt('checkbox.icon.size');
    }

    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        border-color: dt('checkbox.hover.border.color');
    }

    .p-checkbox-checked .p-checkbox-box {
        border-color: dt('checkbox.checked.border.color');
        background: dt('checkbox.checked.background');
    }

    .p-checkbox-checked .p-checkbox-icon {
        color: dt('checkbox.icon.checked.color');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        background: dt('checkbox.checked.hover.background');
        border-color: dt('checkbox.checked.hover.border.color');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
        color: dt('checkbox.icon.checked.hover.color');
    }

    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
        border-color: dt('checkbox.focus.border.color');
        box-shadow: dt('checkbox.focus.ring.shadow');
        outline: dt('checkbox.focus.ring.width') dt('checkbox.focus.ring.style') dt('checkbox.focus.ring.color');
        outline-offset: dt('checkbox.focus.ring.offset');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
        border-color: dt('checkbox.checked.focus.border.color');
    }

    .p-checkbox.p-invalid > .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }

    .p-checkbox.p-variant-filled .p-checkbox-box {
        background: dt('checkbox.filled.background');
    }

    .p-checkbox-checked.p-variant-filled .p-checkbox-box {
        background: dt('checkbox.checked.background');
    }

    .p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        background: dt('checkbox.checked.hover.background');
    }

    .p-checkbox.p-disabled {
        opacity: 1;
    }

    .p-checkbox.p-disabled .p-checkbox-box {
        background: dt('checkbox.disabled.background');
        border-color: dt('checkbox.checked.disabled.border.color');
    }

    .p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
        color: dt('checkbox.icon.disabled.color');
    }

    .p-checkbox-sm,
    .p-checkbox-sm .p-checkbox-box {
        width: dt('checkbox.sm.width');
        height: dt('checkbox.sm.height');
    }

    .p-checkbox-sm .p-checkbox-icon {
        font-size: dt('checkbox.icon.sm.size');
        width: dt('checkbox.icon.sm.size');
        height: dt('checkbox.icon.sm.size');
    }

    .p-checkbox-lg,
    .p-checkbox-lg .p-checkbox-box {
        width: dt('checkbox.lg.width');
        height: dt('checkbox.lg.height');
    }

    .p-checkbox-lg .p-checkbox-icon {
        font-size: dt('checkbox.icon.lg.size');
        width: dt('checkbox.icon.lg.size');
        height: dt('checkbox.icon.lg.size');
    }
`;var ve=["icon"],Ce=["input"],_e=(n,d)=>({checked:n,class:d});function ye(n,d){if(n&1&&M(0,"span",8),n&2){let e=b(3);p(e.cx("icon")),c("ngClass",e.checkboxIcon)("pBind",e.ptm("icon"))}}function Ie(n,d){if(n&1&&(x(),M(0,"svg",9)),n&2){let e=b(3);p(e.cx("icon")),c("pBind",e.ptm("icon"))}}function Me(n,d){if(n&1&&(E(0),m(1,ye,1,4,"span",6)(2,Ie,1,3,"svg",7),S()),n&2){let e=b(2);s(),c("ngIf",e.checkboxIcon),s(),c("ngIf",!e.checkboxIcon)}}function we(n,d){if(n&1&&(x(),M(0,"svg",10)),n&2){let e=b(2);p(e.cx("icon")),c("pBind",e.ptm("icon"))}}function Ve(n,d){if(n&1&&(E(0),m(1,Me,3,2,"ng-container",3)(2,we,1,3,"svg",5),S()),n&2){let e=b();s(),c("ngIf",e.checked),s(),c("ngIf",e._indeterminate())}}function Be(n,d){}function Te(n,d){n&1&&m(0,Be,0,0,"ng-template")}var De=`
    ${ke}

    /* For PrimeNG */
    p-checkBox.ng-invalid.ng-dirty .p-checkbox-box,
    p-check-box.ng-invalid.ng-dirty .p-checkbox-box,
    p-checkbox.ng-invalid.ng-dirty .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }
`,Fe={root:({instance:n})=>["p-checkbox p-component",{"p-checkbox-checked p-highlight":n.checked,"p-disabled":n.$disabled(),"p-invalid":n.invalid(),"p-variant-filled":n.$variant()==="filled","p-checkbox-sm p-inputfield-sm":n.size()==="small","p-checkbox-lg p-inputfield-lg":n.size()==="large"}],box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},xe=(()=>{class n extends ie{name="checkbox";style=De;classes=Fe;static \u0275fac=(()=>{let e;return function(t){return(e||(e=h(n)))(t||n)}})();static \u0275prov=L({token:n,factory:n.\u0275fac})}return n})();var me=new $("CHECKBOX_INSTANCE"),Ne={provide:se,useExisting:A(()=>fe),multi:!0},fe=(()=>{class n extends ue{hostName="";value;binary;ariaLabelledBy;ariaLabel;tabindex;inputId;inputStyle;styleClass;inputClass;indeterminate=!1;formControl;checkboxIcon;readonly;autofocus;trueValue=!0;falseValue=!1;variant=l();size=l();onChange=new y;onFocus=new y;onBlur=new y;inputViewChild;get checked(){return this._indeterminate()?!1:this.binary?this.modelValue()===this.trueValue:te(this.value,this.modelValue())}_indeterminate=_(void 0);checkboxIconTemplate;templates;_checkboxIconTemplate;focused=!1;_componentStyle=g(xe);bindDirectiveInstance=g(f,{self:!0});$pcCheckbox=g(me,{optional:!0,skipSelf:!0})??void 0;$variant=B(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"icon":this._checkboxIconTemplate=e.template;break;case"checkboxicon":this._checkboxIconTemplate=e.template;break}})}onChanges(e){e.indeterminate&&this._indeterminate.set(e.indeterminate.currentValue)}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}updateModel(e){let o,t=this.injector.get(le,null,{optional:!0,self:!0}),i=t&&!this.formControl?t.value:this.modelValue();this.binary?(o=this._indeterminate()?this.trueValue:this.checked?this.falseValue:this.trueValue,this.writeModelValue(o),this.onModelChange(o)):(this.checked||this._indeterminate()?o=i.filter(a=>!ne(a,this.value)):o=i?[...i,this.value]:[this.value],this.onModelChange(o),this.writeModelValue(o),this.formControl&&this.formControl.setValue(o)),this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:o,originalEvent:e})}handleChange(e){this.readonly||this.updateModel(e)}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onBlur.emit(e),this.onModelTouched()}focus(){this.inputViewChild?.nativeElement.focus()}writeControlValue(e,o){o(e),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(t){return(e||(e=h(n)))(t||n)}})();static \u0275cmp=I({type:n,selectors:[["p-checkbox"],["p-checkBox"],["p-check-box"]],contentQueries:function(o,t,i){if(o&1&&(z(i,ve,4),z(i,oe,4)),o&2){let a;w(a=V())&&(t.checkboxIconTemplate=a.first),w(a=V())&&(t.templates=a)}},viewQuery:function(o,t){if(o&1&&P(Ce,5),o&2){let i;w(i=V())&&(t.inputViewChild=i.first)}},hostVars:5,hostBindings:function(o,t){o&2&&(D("data-p-highlight",t.checked)("data-p-checked",t.checked)("data-p-disabled",t.$disabled()),p(t.cn(t.cx("root"),t.styleClass)))},inputs:{hostName:"hostName",value:"value",binary:[2,"binary","binary",r],ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:[2,"tabindex","tabindex",Z],inputId:"inputId",inputStyle:"inputStyle",styleClass:"styleClass",inputClass:"inputClass",indeterminate:[2,"indeterminate","indeterminate",r],formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:[2,"readonly","readonly",r],autofocus:[2,"autofocus","autofocus",r],trueValue:"trueValue",falseValue:"falseValue",variant:[1,"variant"],size:[1,"size"]},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},features:[X([Ne,xe,{provide:me,useExisting:n},{provide:ce,useExisting:n}]),j([f]),u],decls:5,vars:24,consts:[["input",""],["type","checkbox",3,"focus","blur","change","checked","pBind"],[3,"pBind"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","minus",3,"class","pBind",4,"ngIf"],[3,"class","ngClass","pBind",4,"ngIf"],["data-p-icon","check",3,"class","pBind",4,"ngIf"],[3,"ngClass","pBind"],["data-p-icon","check",3,"pBind"],["data-p-icon","minus",3,"pBind"]],template:function(o,t){if(o&1){let i=R();F(0,"input",1,0),G("focus",function(k){return v(i),C(t.onInputFocus(k))})("blur",function(k){return v(i),C(t.onInputBlur(k))})("change",function(k){return v(i),C(t.handleChange(k))}),N(),F(2,"div",2),m(3,Ve,3,2,"ng-container",3)(4,Te,1,0,null,4),N()}o&2&&(K(t.inputStyle),p(t.cn(t.cx("input"),t.inputClass)),c("checked",t.checked)("pBind",t.ptm("input")),D("id",t.inputId)("value",t.value)("name",t.name())("tabindex",t.tabindex)("required",t.required()?"":void 0)("readonly",t.readonly?"":void 0)("disabled",t.$disabled()?"":void 0)("aria-labelledby",t.ariaLabelledBy)("aria-label",t.ariaLabel),s(2),p(t.cx("box")),c("pBind",t.ptm("box")),s(),c("ngIf",!t.checkboxIconTemplate&&!t._checkboxIconTemplate),s(),c("ngTemplateOutlet",t.checkboxIconTemplate||t._checkboxIconTemplate)("ngTemplateOutletContext",U(21,_e,t.checked,t.cx("icon"))))},dependencies:[ee,J,W,Y,T,be,de,ae,f],encapsulation:2,changeDetection:0})}return n})(),hn=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=q({type:n});static \u0275inj=O({imports:[fe,T,T]})}return n})();export{be as a,ue as b,fe as c,hn as d};
