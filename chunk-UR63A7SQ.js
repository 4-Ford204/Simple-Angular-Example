import{a as Te,b as Ve,c as Se,d as ze,e as Ie,f as Me}from"./chunk-UYQ62FR4.js";import{a as De}from"./chunk-FFNMDTMS.js";import{a as Be}from"./chunk-JUZMSGOG.js";import{b as ve,d as N,e as we,f as Ee}from"./chunk-KUP6GBSE.js";import{J as Ce,K as q,O as ye,y as fe,z as ke}from"./chunk-RLV7YIWC.js";import{i as ge,k as _e,m as A,n as R}from"./chunk-SWWZH6D4.js";import{$a as re,Ab as C,Ba as I,Bb as he,Da as ee,Db as u,Eb as b,Fb as x,Gb as ue,Ib as y,Jb as be,Lb as v,M as Z,Ma as T,N as J,Na as te,O as Y,Oa as ne,Pa as D,Pb as P,Q as $,Qa as ie,Ra as M,S as O,Sb as V,X as p,Xa as G,Xb as w,Y as m,Ya as oe,Yb as xe,Z as F,Za as ae,_a as ce,ab as le,bb as a,cb as d,db as s,ea as k,eb as f,hb as de,ia as z,ib as K,jb as X,kb as se,lb as E,nb as h,ob as c,rb as U,sb as pe,tb as W,ub as L,vb as _,wa as r,yb as me,zb as B}from"./chunk-TDEPKAKI.js";import"./chunk-4CLCTAJ7.js";var Fe=(()=>{class t extends Me{required=V(void 0,{transform:w});invalid=V(void 0,{transform:w});disabled=V(void 0,{transform:w});name=V();_disabled=k(!1);$disabled=P(()=>this.disabled()||this._disabled());onModelChange=()=>{};onModelTouched=()=>{};writeDisabledState(e){this._disabled.set(e)}writeControlValue(e,i){}writeValue(e){this.writeControlValue(e,this.writeModelValue.bind(this))}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.writeDisabledState(e),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=z(t)))(n||t)}})();static \u0275dir=ne({type:t,inputs:{required:[1,"required"],invalid:[1,"invalid"],disabled:[1,"disabled"],name:[1,"name"]},features:[D]})}return t})();var je=["data-p-icon","check"],Ne=(()=>{class t extends Ee{static \u0275fac=(()=>{let e;return function(n){return(e||(e=z(t)))(n||t)}})();static \u0275cmp=T({type:t,selectors:[["","data-p-icon","check"]],features:[D],attrs:je,decls:1,vars:0,consts:[["d","M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z","fill","currentColor"]],template:function(i,n){i&1&&(F(),de(0,"path",0))},encapsulation:2})}return t})();var Oe=`
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
`;var Ge=["icon"],Ke=["input"],Xe=(t,l)=>({checked:t,class:l});function Ue(t,l){if(t&1&&f(0,"span",8),t&2){let e=c(3);B(e.cx("icon")),a("ngClass",e.checkboxIcon)("pBind",e.ptm("icon"))}}function Ze(t,l){if(t&1&&(F(),f(0,"svg",9)),t&2){let e=c(3);B(e.cx("icon")),a("pBind",e.ptm("icon"))}}function Je(t,l){if(t&1&&(K(0),M(1,Ue,1,4,"span",6)(2,Ze,1,3,"svg",7),X()),t&2){let e=c(2);r(),a("ngIf",e.checkboxIcon),r(),a("ngIf",!e.checkboxIcon)}}function Ye(t,l){if(t&1&&(F(),f(0,"svg",10)),t&2){let e=c(2);B(e.cx("icon")),a("pBind",e.ptm("icon"))}}function $e(t,l){if(t&1&&(K(0),M(1,Je,3,2,"ng-container",3)(2,Ye,1,3,"svg",5),X()),t&2){let e=c();r(),a("ngIf",e.checked),r(),a("ngIf",e._indeterminate())}}function et(t,l){}function tt(t,l){t&1&&M(0,et,0,0,"ng-template")}var nt=`
    ${Oe}

    /* For PrimeNG */
    p-checkBox.ng-invalid.ng-dirty .p-checkbox-box,
    p-check-box.ng-invalid.ng-dirty .p-checkbox-box,
    p-checkbox.ng-invalid.ng-dirty .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }
`,it={root:({instance:t})=>["p-checkbox p-component",{"p-checkbox-checked p-highlight":t.checked,"p-disabled":t.$disabled(),"p-invalid":t.invalid(),"p-variant-filled":t.$variant()==="filled","p-checkbox-sm p-inputfield-sm":t.size()==="small","p-checkbox-lg p-inputfield-lg":t.size()==="large"}],box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},We=(()=>{class t extends ye{name="checkbox";style=nt;classes=it;static \u0275fac=(()=>{let e;return function(n){return(e||(e=z(t)))(n||t)}})();static \u0275prov=J({token:t,factory:t.\u0275fac})}return t})();var Le=new $("CHECKBOX_INSTANCE"),ot={provide:Te,useExisting:Z(()=>j),multi:!0},j=(()=>{class t extends Fe{hostName="";value;binary;ariaLabelledBy;ariaLabel;tabindex;inputId;inputStyle;styleClass;inputClass;indeterminate=!1;formControl;checkboxIcon;readonly;autofocus;trueValue=!0;falseValue=!1;variant=V();size=V();onChange=new I;onFocus=new I;onBlur=new I;inputViewChild;get checked(){return this._indeterminate()?!1:this.binary?this.modelValue()===this.trueValue:ke(this.value,this.modelValue())}_indeterminate=k(void 0);checkboxIconTemplate;templates;_checkboxIconTemplate;focused=!1;_componentStyle=O(We);bindDirectiveInstance=O(N,{self:!0});$pcCheckbox=O(Le,{optional:!0,skipSelf:!0})??void 0;$variant=P(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"icon":this._checkboxIconTemplate=e.template;break;case"checkboxicon":this._checkboxIconTemplate=e.template;break}})}onChanges(e){e.indeterminate&&this._indeterminate.set(e.indeterminate.currentValue)}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}updateModel(e){let i,n=this.injector.get(Ve,null,{optional:!0,self:!0}),o=n&&!this.formControl?n.value:this.modelValue();this.binary?(i=this._indeterminate()?this.trueValue:this.checked?this.falseValue:this.trueValue,this.writeModelValue(i),this.onModelChange(i)):(this.checked||this._indeterminate()?i=o.filter(g=>!fe(g,this.value)):i=o?[...o,this.value]:[this.value],this.onModelChange(i),this.writeModelValue(i),this.formControl&&this.formControl.setValue(i)),this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:i,originalEvent:e})}handleChange(e){this.readonly||this.updateModel(e)}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onBlur.emit(e),this.onModelTouched()}focus(){this.inputViewChild?.nativeElement.focus()}writeControlValue(e,i){i(e),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=z(t)))(n||t)}})();static \u0275cmp=T({type:t,selectors:[["p-checkbox"],["p-checkBox"],["p-check-box"]],contentQueries:function(i,n,o){if(i&1&&(U(o,Ge,4),U(o,Ce,4)),i&2){let g;W(g=L())&&(n.checkboxIconTemplate=g.first),W(g=L())&&(n.templates=g)}},viewQuery:function(i,n){if(i&1&&pe(Ke,5),i&2){let o;W(o=L())&&(n.inputViewChild=o.first)}},hostVars:5,hostBindings:function(i,n){i&2&&(G("data-p-highlight",n.checked)("data-p-checked",n.checked)("data-p-disabled",n.$disabled()),B(n.cn(n.cx("root"),n.styleClass)))},inputs:{hostName:"hostName",value:"value",binary:[2,"binary","binary",w],ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:[2,"tabindex","tabindex",xe],inputId:"inputId",inputStyle:"inputStyle",styleClass:"styleClass",inputClass:"inputClass",indeterminate:[2,"indeterminate","indeterminate",w],formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:[2,"readonly","readonly",w],autofocus:[2,"autofocus","autofocus",w],trueValue:"trueValue",falseValue:"falseValue",variant:[1,"variant"],size:[1,"size"]},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},features:[ue([ot,We,{provide:Le,useExisting:t},{provide:ve,useExisting:t}]),ie([N]),D],decls:5,vars:24,consts:[["input",""],["type","checkbox",3,"focus","blur","change","checked","pBind"],[3,"pBind"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","minus",3,"class","pBind",4,"ngIf"],[3,"class","ngClass","pBind",4,"ngIf"],["data-p-icon","check",3,"class","pBind",4,"ngIf"],[3,"ngClass","pBind"],["data-p-icon","check",3,"pBind"],["data-p-icon","minus",3,"pBind"]],template:function(i,n){if(i&1){let o=E();d(0,"input",1,0),h("focus",function(S){return p(o),m(n.onInputFocus(S))})("blur",function(S){return p(o),m(n.onInputBlur(S))})("change",function(S){return p(o),m(n.handleChange(S))}),s(),d(2,"div",2),M(3,$e,3,2,"ng-container",3)(4,tt,1,0,null,4),s()}i&2&&(me(n.inputStyle),B(n.cn(n.cx("input"),n.inputClass)),a("checked",n.checked)("pBind",n.ptm("input")),G("id",n.inputId)("value",n.value)("name",n.name())("tabindex",n.tabindex)("required",n.required()?"":void 0)("readonly",n.readonly?"":void 0)("disabled",n.$disabled()?"":void 0)("aria-labelledby",n.ariaLabelledBy)("aria-label",n.ariaLabel),r(2),B(n.cx("box")),a("pBind",n.ptm("box")),r(),a("ngIf",!n.checkboxIconTemplate&&!n._checkboxIconTemplate),r(),a("ngTemplateOutlet",n.checkboxIconTemplate||n._checkboxIconTemplate)("ngTemplateOutletContext",be(21,Xe,n.checked,n.cx("icon"))))},dependencies:[R,ge,_e,A,q,Ne,Be,we,N],encapsulation:2,changeDetection:0})}return t})(),Pe=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=te({type:t});static \u0275inj=Y({imports:[j,q,q]})}return t})();var H=class t{invalid=!1;disabled=!1;name="";value=null;binary=!1;inputId=void 0;indeterminate=!1;variant=void 0;size=void 0;model;modelChange=new I;valueChanged=new I;onValueChanged(l){this.modelChange.emit(this.model),this.valueChanged.emit(this.model)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=T({type:t,selectors:[["app-checkbox-component"]],inputs:{invalid:"invalid",disabled:"disabled",name:"name",value:"value",binary:"binary",inputId:"inputId",indeterminate:"indeterminate",variant:"variant",size:"size",model:"model"},outputs:{modelChange:"modelChange",valueChanged:"valueChanged"},decls:1,vars:10,consts:[[3,"ngModelChange","onChange","invalid","disabled","name","value","binary","inputId","indeterminate","variant","size","ngModel"]],template:function(e,i){e&1&&(d(0,"p-checkbox",0),x("ngModelChange",function(o){return b(i.model,o)||(i.model=o),o}),h("onChange",function(o){return i.onValueChanged(o)}),s()),e&2&&(a("invalid",i.invalid)("disabled",i.disabled)("name",i.name)("value",i.value)("binary",i.binary)("inputId",i.inputId)("indeterminate",i.indeterminate)("variant",i.variant)("size",i.size),u("ngModel",i.model))},dependencies:[Pe,j,Ie,Se,ze],styles:["p-checkbox[_ngcontent-%COMP%]{display:flex}"]})};var rt=t=>({title:"Basic",content:t}),lt=t=>({title:"Indeterminate",content:t}),dt=t=>({title:"Group",content:t}),st=t=>({title:"Dynamic",content:t}),pt=t=>({title:"Filled",content:t}),mt=t=>({title:"Size",content:t}),ht=t=>({title:"Disabled",content:t}),ut=t=>({title:"Invalid",content:t});function bt(t,l){t&1&&f(0,"app-checkbox-component",10),t&2&&a("binary",!0)("model",!1)}function xt(t,l){t&1&&f(0,"app-checkbox-component",11),t&2&&a("binary",!0)("indeterminate",!0)("model",!1)}function gt(t,l){if(t&1){let e=E();d(0,"div",12)(1,"app-checkbox-component",13),x("modelChange",function(n){p(e);let o=c();return b(o.pizza,n)||(o.pizza=n),m(n)}),h("valueChanged",function(n){p(e);let o=c();return m(o.onValueChanged(n))}),s(),d(2,"label",14),C(3,"Cheese"),s()(),d(4,"div",12)(5,"app-checkbox-component",15),x("modelChange",function(n){p(e);let o=c();return b(o.pizza,n)||(o.pizza=n),m(n)}),h("valueChanged",function(n){p(e);let o=c();return m(o.onValueChanged(n))}),s(),d(6,"label",16),C(7,"Mushroom"),s()(),d(8,"div",12)(9,"app-checkbox-component",17),x("modelChange",function(n){p(e);let o=c();return b(o.pizza,n)||(o.pizza=n),m(n)}),h("valueChanged",function(n){p(e);let o=c();return m(o.onValueChanged(n))}),s(),d(10,"label",18),C(11,"Pepper"),s()(),d(12,"div",12)(13,"app-checkbox-component",19),x("modelChange",function(n){p(e);let o=c();return b(o.pizza,n)||(o.pizza=n),m(n)}),h("valueChanged",function(n){p(e);let o=c();return m(o.onValueChanged(n))}),s(),d(14,"label",20),C(15,"Onion"),s()()}if(t&2){let e=c();r(),u("model",e.pizza),r(4),u("model",e.pizza),r(4),u("model",e.pizza),r(4),u("model",e.pizza)}}function _t(t,l){if(t&1){let e=E();d(0,"div",12)(1,"app-checkbox-component",22),x("modelChange",function(n){p(e);let o=c(2);return b(o.selectedCategories,n)||(o.selectedCategories=n),m(n)}),h("valueChanged",function(n){p(e);let o=c(2);return m(o.onValueChanged(n))}),s(),d(2,"label",23),C(3),s()()}if(t&2){let e=l.$implicit,i=c(2);r(),a("value",e)("inputId",e.key),u("model",i.selectedCategories),r(),a("for",e.key),r(),he(e.name)}}function ft(t,l){if(t&1&&(d(0,"div",21),re(1,_t,4,5,"div",12,ce),s()),t&2){let e=c();r(),le(e.categories)}}function kt(t,l){t&1&&f(0,"app-checkbox-component",24),t&2&&a("binary",!0)("model",!1)}function Ct(t,l){if(t&1){let e=E();d(0,"div",12)(1,"app-checkbox-component",25),x("modelChange",function(n){p(e);let o=c();return b(o.size,n)||(o.size=n),m(n)}),h("valueChanged",function(n){p(e);let o=c();return m(o.onValueChanged(n))}),s(),d(2,"label",26),C(3,"Small"),s()(),d(4,"div",12)(5,"app-checkbox-component",27),x("modelChange",function(n){p(e);let o=c();return b(o.size,n)||(o.size=n),m(n)}),h("valueChanged",function(n){p(e);let o=c();return m(o.onValueChanged(n))}),s(),d(6,"label",28),C(7,"Normal"),s()(),d(8,"div",12)(9,"app-checkbox-component",29),x("modelChange",function(n){p(e);let o=c();return b(o.size,n)||(o.size=n),m(n)}),h("valueChanged",function(n){p(e);let o=c();return m(o.onValueChanged(n))}),s(),d(10,"label",30),C(11,"Large"),s()()}if(t&2){let e=c();r(),u("model",e.size),r(4),u("model",e.size),r(4),u("model",e.size)}}function yt(t,l){t&1&&f(0,"app-checkbox-component",31)(1,"app-checkbox-component",31),t&2&&(a("disabled",!0)("binary",!0)("model",!1),r(),a("disabled",!0)("binary",!0)("model",!0))}function vt(t,l){if(t&1){let e=E();d(0,"app-checkbox-component",32),x("modelChange",function(n){p(e);let o=c();return b(o.checked,n)||(o.checked=n),m(n)}),s()}if(t&2){let e=c();a("invalid",!e.checked)("binary",!0),u("model",e.checked)}}function wt(t,l){if(t&1&&se(0,33)(1,33)(2,33)(3,33)(4,33)(5,33)(6,33)(7,33),t&2){c();let e=_(1),i=_(4),n=_(6),o=_(8),g=_(10),S=_(12),Re=_(14),qe=_(16),Qe=_(18);a("ngTemplateOutlet",e.panelTemplate)("ngTemplateOutletContext",y(16,rt,i)),r(),a("ngTemplateOutlet",e.panelTemplate)("ngTemplateOutletContext",y(18,lt,n)),r(),a("ngTemplateOutlet",e.panelTemplate)("ngTemplateOutletContext",y(20,dt,o)),r(),a("ngTemplateOutlet",e.panelTemplate)("ngTemplateOutletContext",y(22,st,g)),r(),a("ngTemplateOutlet",e.panelTemplate)("ngTemplateOutletContext",y(24,pt,S)),r(),a("ngTemplateOutlet",e.panelTemplate)("ngTemplateOutletContext",y(26,mt,Re)),r(),a("ngTemplateOutlet",e.panelTemplate)("ngTemplateOutletContext",y(28,ht,qe)),r(),a("ngTemplateOutlet",e.panelTemplate)("ngTemplateOutletContext",y(30,ut,Qe))}}var Ae=class t{checked=k(!1);pizza=k([]);categories=[{name:"Accounting",key:"A"},{name:"Marketing",key:"M"},{name:"Production",key:"P"},{name:"Research",key:"R"}];selectedCategories=k([]);size=k([]);constructor(){ee(()=>{this.selectedCategories.set([this.categories[1]])})}onValueChanged(l){console.log("Pizza changed:",this.pizza()),console.log("Categories changed:",this.selectedCategories()),console.log("Size changed:",this.size())}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=T({type:t,selectors:[["app-checkbox-sandbox"]],decls:20,vars:1,consts:[["sandbox",""],["basic",""],["indeterminate",""],["group",""],["dynamic",""],["filled",""],["size",""],["disabled",""],["invalid",""],[1,"flex","flex-col","gap-10"],[3,"binary","model"],[3,"binary","indeterminate","model"],[1,"flex","items-center"],["name","pizza","value","Cheese","inputId","ingredient1",3,"modelChange","valueChanged","model"],["for","ingredient1",1,"ml-2"],["name","pizza","value","Mushroom","inputId","ingredient2",3,"modelChange","valueChanged","model"],["for","ingredient2",1,"ml-2"],["name","pizza","value","Pepper","inputId","ingredient3",3,"modelChange","valueChanged","model"],["for","ingredient3",1,"ml-2"],["name","pizza","value","Onion","inputId","ingredient4",3,"modelChange","valueChanged","model"],["for","ingredient4",1,"ml-2"],[1,"flex","flex-col","gap-4"],["name","group",3,"modelChange","valueChanged","value","inputId","model"],[1,"ml-2",3,"for"],["variant","filled",3,"binary","model"],["name","size","value","Small","inputId","size_small","size","small",3,"modelChange","valueChanged","model"],["for","size_small",1,"ml-2","text-sm"],["name","size","value","Normal","inputId","size_normal",3,"modelChange","valueChanged","model"],["for","size_normal",1,"ml-2"],["name","size","value","Large","inputId","size_large","size","large",3,"modelChange","valueChanged","model"],["for","size_large",1,"ml-2","text-lg"],[3,"disabled","binary","model"],[3,"modelChange","invalid","binary","model"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(e,i){if(e&1&&(f(0,"app-sandbox",null,0),d(2,"div",9),M(3,bt,1,2,"ng-template",null,1,v)(5,xt,1,3,"ng-template",null,2,v)(7,gt,16,4,"ng-template",null,3,v)(9,ft,3,0,"ng-template",null,4,v)(11,kt,1,2,"ng-template",null,5,v)(13,Ct,12,3,"ng-template",null,6,v)(15,yt,2,6,"ng-template",null,7,v)(17,vt,1,3,"ng-template",null,8,v),oe(19,wt,8,32),s()),e&2){let n=_(1);r(19),ae(n.panelTemplate?19:-1)}},dependencies:[H,R,A,De],encapsulation:2})};export{Ae as CheckboxSandbox};
