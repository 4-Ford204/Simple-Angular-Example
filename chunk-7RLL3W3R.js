import{a as ke,b as Ce,c as ye,d as ve,e as we,f as Ve}from"./chunk-CG3UQPKN.js";import{a as Se}from"./chunk-EENYF2EA.js";import{a as ze}from"./chunk-PFTXWWR2.js";import{c as Te}from"./chunk-QCUML4DC.js";import{E as ge,F as A,J as fe,w as xe,x as _e}from"./chunk-6N2AKX3N.js";import{i as ue,k as be,m as P,n as R}from"./chunk-L2ZJBUGW.js";import{$a as ae,Ab as se,Cb as u,Db as b,Eb as x,Fb as pe,Hb as C,Ia as w,Ib as he,Ja as $,Ka as ee,Kb as y,La as F,M as K,Ma as S,N as X,O as Z,Oa as I,Ob as L,Rb as V,S as J,Wa as O,Wb as v,X as p,Xa as te,Xb as me,Y as h,Ya as ne,Z as D,Za as oe,_a as ie,ab as r,bb as d,cb as s,db as f,ea as B,gb as ce,ha as Y,hb as G,ia as z,ib as H,jb as re,kb as M,mb as m,nb as a,qb as U,rb as le,sb as W,tb as N,ub as g,wa as c,xb as de,yb as E,zb as k}from"./chunk-JIH53NCD.js";import"./chunk-4CLCTAJ7.js";var Ie=(()=>{class t extends Ve{required=V(void 0,{transform:v});invalid=V(void 0,{transform:v});disabled=V(void 0,{transform:v});name=V();_disabled=B(!1);$disabled=L(()=>this.disabled()||this._disabled());onModelChange=()=>{};onModelTouched=()=>{};writeDisabledState(e){this._disabled.set(e)}writeControlValue(e,o){}writeValue(e){this.writeControlValue(e,this.writeModelValue.bind(this))}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.writeDisabledState(e),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=z(t)))(n||t)}})();static \u0275dir=ee({type:t,inputs:{required:[1,"required"],invalid:[1,"invalid"],disabled:[1,"disabled"],name:[1,"name"]},features:[F]})}return t})();var Le=["data-p-icon","check"],Me=(()=>{class t extends Te{static \u0275fac=(()=>{let e;return function(n){return(e||(e=z(t)))(n||t)}})();static \u0275cmp=w({type:t,selectors:[["","data-p-icon","check"]],features:[F],attrs:Le,decls:1,vars:0,consts:[["d","M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z","fill","currentColor"]],template:function(o,n){o&1&&(D(),ce(0,"path",0))},encapsulation:2})}return t})();var Ee=`
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
`;var Re=["icon"],Ae=["input"],qe=(t,l)=>({checked:t,class:l});function Qe(t,l){if(t&1&&f(0,"span",7),t&2){let e=a(3);E(e.cx("icon")),r("ngClass",e.checkboxIcon),O("data-pc-section","icon")}}function je(t,l){if(t&1&&(D(),f(0,"svg",8)),t&2){let e=a(3);E(e.cx("icon")),O("data-pc-section","icon")}}function Ge(t,l){if(t&1&&(G(0),S(1,Qe,1,4,"span",5)(2,je,1,3,"svg",6),H()),t&2){let e=a(2);c(),r("ngIf",e.checkboxIcon),c(),r("ngIf",!e.checkboxIcon)}}function He(t,l){if(t&1&&(D(),f(0,"svg",9)),t&2){let e=a(2);E(e.cx("icon")),O("data-pc-section","icon")}}function Ue(t,l){if(t&1&&(G(0),S(1,Ge,3,2,"ng-container",2)(2,He,1,3,"svg",4),H()),t&2){let e=a();c(),r("ngIf",e.checked),c(),r("ngIf",e._indeterminate())}}function Ke(t,l){}function Xe(t,l){t&1&&S(0,Ke,0,0,"ng-template")}var Ze=`
    ${Ee}

    /* For PrimeNG */
    p-checkBox.ng-invalid.ng-dirty .p-checkbox-box,
    p-check-box.ng-invalid.ng-dirty .p-checkbox-box,
    p-checkbox.ng-invalid.ng-dirty .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }
`,Je={root:({instance:t})=>["p-checkbox p-component",{"p-checkbox-checked p-highlight":t.checked,"p-disabled":t.$disabled(),"p-invalid":t.invalid(),"p-variant-filled":t.$variant()==="filled","p-checkbox-sm p-inputfield-sm":t.size()==="small","p-checkbox-lg p-inputfield-lg":t.size()==="large"}],box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},Fe=(()=>{class t extends fe{name="checkbox";theme=Ze;classes=Je;static \u0275fac=(()=>{let e;return function(n){return(e||(e=z(t)))(n||t)}})();static \u0275prov=X({token:t,factory:t.\u0275fac})}return t})();var Ye={provide:ke,useExisting:K(()=>Q),multi:!0},Q=(()=>{class t extends Ie{value;binary;ariaLabelledBy;ariaLabel;tabindex;inputId;inputStyle;styleClass;inputClass;indeterminate=!1;formControl;checkboxIcon;readonly;autofocus;trueValue=!0;falseValue=!1;variant=V();size=V();onChange=new I;onFocus=new I;onBlur=new I;inputViewChild;get checked(){return this._indeterminate()?!1:this.binary?this.modelValue()===this.trueValue:_e(this.value,this.modelValue())}_indeterminate=B(void 0);checkboxIconTemplate;templates;_checkboxIconTemplate;focused=!1;_componentStyle=J(Fe);$variant=L(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"icon":this._checkboxIconTemplate=e.template;break;case"checkboxicon":this._checkboxIconTemplate=e.template;break}})}ngOnChanges(e){super.ngOnChanges(e),e.indeterminate&&this._indeterminate.set(e.indeterminate.currentValue)}updateModel(e){let o,n=this.injector.get(Ce,null,{optional:!0,self:!0}),i=n&&!this.formControl?n.value:this.modelValue();this.binary?(o=this._indeterminate()?this.trueValue:this.checked?this.falseValue:this.trueValue,this.writeModelValue(o),this.onModelChange(o)):(this.checked||this._indeterminate()?o=i.filter(_=>!xe(_,this.value)):o=i?[...i,this.value]:[this.value],this.onModelChange(o),this.writeModelValue(o),this.formControl&&this.formControl.setValue(o)),this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:o,originalEvent:e})}handleChange(e){this.readonly||this.updateModel(e)}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onBlur.emit(e),this.onModelTouched()}focus(){this.inputViewChild?.nativeElement.focus()}writeControlValue(e,o){o(e),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=z(t)))(n||t)}})();static \u0275cmp=w({type:t,selectors:[["p-checkbox"],["p-checkBox"],["p-check-box"]],contentQueries:function(o,n,i){if(o&1&&(U(i,Re,4),U(i,ge,4)),o&2){let _;W(_=N())&&(n.checkboxIconTemplate=_.first),W(_=N())&&(n.templates=_)}},viewQuery:function(o,n){if(o&1&&le(Ae,5),o&2){let i;W(i=N())&&(n.inputViewChild=i.first)}},hostVars:6,hostBindings:function(o,n){o&2&&(O("data-pc-name","checkbox")("data-p-highlight",n.checked)("data-p-checked",n.checked)("data-p-disabled",n.$disabled()),E(n.cn(n.cx("root"),n.styleClass)))},inputs:{value:"value",binary:[2,"binary","binary",v],ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:[2,"tabindex","tabindex",me],inputId:"inputId",inputStyle:"inputStyle",styleClass:"styleClass",inputClass:"inputClass",indeterminate:[2,"indeterminate","indeterminate",v],formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:[2,"readonly","readonly",v],autofocus:[2,"autofocus","autofocus",v],trueValue:"trueValue",falseValue:"falseValue",variant:[1,"variant"],size:[1,"size"]},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},features:[pe([Ye,Fe]),F,Y],decls:5,vars:22,consts:[["input",""],["type","checkbox",3,"focus","blur","change","checked"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","minus",3,"class",4,"ngIf"],[3,"class","ngClass",4,"ngIf"],["data-p-icon","check",3,"class",4,"ngIf"],[3,"ngClass"],["data-p-icon","check"],["data-p-icon","minus"]],template:function(o,n){if(o&1){let i=M();d(0,"input",1,0),m("focus",function(T){return p(i),h(n.onInputFocus(T))})("blur",function(T){return p(i),h(n.onInputBlur(T))})("change",function(T){return p(i),h(n.handleChange(T))}),s(),d(2,"div"),S(3,Ue,3,2,"ng-container",2)(4,Xe,1,0,null,3),s()}o&2&&(de(n.inputStyle),E(n.cn(n.cx("input"),n.inputClass)),r("checked",n.checked),O("id",n.inputId)("value",n.value)("name",n.name())("tabindex",n.tabindex)("required",n.required()?"":void 0)("readonly",n.readonly?"":void 0)("disabled",n.$disabled()?"":void 0)("aria-labelledby",n.ariaLabelledBy)("aria-label",n.ariaLabel),c(2),E(n.cx("box")),c(),r("ngIf",!n.checkboxIconTemplate&&!n._checkboxIconTemplate),c(),r("ngTemplateOutlet",n.checkboxIconTemplate||n._checkboxIconTemplate)("ngTemplateOutletContext",he(19,qe,n.checked,n.cx("icon"))))},dependencies:[R,ue,be,P,A,Me,ze],encapsulation:2,changeDetection:0})}return t})(),Oe=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=$({type:t});static \u0275inj=Z({imports:[Q,A,A]})}return t})();var j=class t{invalid=!1;disabled=!1;name="";value=null;binary=!1;inputId=void 0;indeterminate=!1;variant=void 0;size=void 0;model;modelChange=new I;valueChanged=new I;onValueChanged(l){this.modelChange.emit(this.model),this.valueChanged.emit(this.model)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=w({type:t,selectors:[["app-checkbox-component"]],inputs:{invalid:"invalid",disabled:"disabled",name:"name",value:"value",binary:"binary",inputId:"inputId",indeterminate:"indeterminate",variant:"variant",size:"size",model:"model"},outputs:{modelChange:"modelChange",valueChanged:"valueChanged"},decls:1,vars:10,consts:[[3,"ngModelChange","onChange","invalid","disabled","name","value","binary","inputId","indeterminate","variant","size","ngModel"]],template:function(e,o){e&1&&(d(0,"p-checkbox",0),x("ngModelChange",function(i){return b(o.model,i)||(o.model=i),i}),m("onChange",function(i){return o.onValueChanged(i)}),s()),e&2&&(r("invalid",o.invalid)("disabled",o.disabled)("name",o.name)("value",o.value)("binary",o.binary)("inputId",o.inputId)("indeterminate",o.indeterminate)("variant",o.variant)("size",o.size),u("ngModel",o.model))},dependencies:[Oe,Q,we,ye,ve],styles:["p-checkbox[_ngcontent-%COMP%]{display:flex}"]})};var tt=t=>({title:"Basic",content:t}),nt=t=>({title:"Indeterminate",content:t}),ot=t=>({title:"Group",content:t}),it=t=>({title:"Dynamic",content:t}),at=t=>({title:"Filled",content:t}),ct=t=>({title:"Size",content:t}),rt=t=>({title:"Disabled",content:t}),lt=t=>({title:"Invalid",content:t});function dt(t,l){t&1&&f(0,"app-checkbox-component",10),t&2&&r("binary",!0)("model",!1)}function st(t,l){t&1&&f(0,"app-checkbox-component",11),t&2&&r("binary",!0)("indeterminate",!0)("model",!1)}function pt(t,l){if(t&1){let e=M();d(0,"div",12)(1,"app-checkbox-component",13),x("modelChange",function(n){p(e);let i=a();return b(i.pizza,n)||(i.pizza=n),h(n)}),m("valueChanged",function(n){p(e);let i=a();return h(i.onValueChanged(n))}),s(),d(2,"label",14),k(3,"Cheese"),s()(),d(4,"div",12)(5,"app-checkbox-component",15),x("modelChange",function(n){p(e);let i=a();return b(i.pizza,n)||(i.pizza=n),h(n)}),m("valueChanged",function(n){p(e);let i=a();return h(i.onValueChanged(n))}),s(),d(6,"label",16),k(7,"Mushroom"),s()(),d(8,"div",12)(9,"app-checkbox-component",17),x("modelChange",function(n){p(e);let i=a();return b(i.pizza,n)||(i.pizza=n),h(n)}),m("valueChanged",function(n){p(e);let i=a();return h(i.onValueChanged(n))}),s(),d(10,"label",18),k(11,"Pepper"),s()(),d(12,"div",12)(13,"app-checkbox-component",19),x("modelChange",function(n){p(e);let i=a();return b(i.pizza,n)||(i.pizza=n),h(n)}),m("valueChanged",function(n){p(e);let i=a();return h(i.onValueChanged(n))}),s(),d(14,"label",20),k(15,"Onion"),s()()}if(t&2){let e=a();c(),u("model",e.pizza),c(4),u("model",e.pizza),c(4),u("model",e.pizza),c(4),u("model",e.pizza)}}function ht(t,l){if(t&1){let e=M();d(0,"div",12)(1,"app-checkbox-component",22),x("modelChange",function(n){p(e);let i=a(2);return b(i.selectedCategories,n)||(i.selectedCategories=n),h(n)}),m("valueChanged",function(n){p(e);let i=a(2);return h(i.onValueChanged(n))}),s(),d(2,"label",23),k(3),s()()}if(t&2){let e=l.$implicit,o=a(2);c(),r("value",e)("inputId",e.key),u("model",o.selectedCategories),c(),r("for",e.key),c(),se(e.name)}}function mt(t,l){if(t&1&&(d(0,"div",21),ie(1,ht,4,5,"div",12,oe),s()),t&2){let e=a();c(),ae(e.categories)}}function ut(t,l){t&1&&f(0,"app-checkbox-component",24),t&2&&r("binary",!0)("model",!1)}function bt(t,l){if(t&1){let e=M();d(0,"div",12)(1,"app-checkbox-component",25),x("modelChange",function(n){p(e);let i=a();return b(i.size,n)||(i.size=n),h(n)}),m("valueChanged",function(n){p(e);let i=a();return h(i.onValueChanged(n))}),s(),d(2,"label",26),k(3,"Small"),s()(),d(4,"div",12)(5,"app-checkbox-component",27),x("modelChange",function(n){p(e);let i=a();return b(i.size,n)||(i.size=n),h(n)}),m("valueChanged",function(n){p(e);let i=a();return h(i.onValueChanged(n))}),s(),d(6,"label",28),k(7,"Normal"),s()(),d(8,"div",12)(9,"app-checkbox-component",29),x("modelChange",function(n){p(e);let i=a();return b(i.size,n)||(i.size=n),h(n)}),m("valueChanged",function(n){p(e);let i=a();return h(i.onValueChanged(n))}),s(),d(10,"label",30),k(11,"Large"),s()()}if(t&2){let e=a();c(),u("model",e.size),c(4),u("model",e.size),c(4),u("model",e.size)}}function xt(t,l){t&1&&f(0,"app-checkbox-component",31)(1,"app-checkbox-component",31),t&2&&(r("disabled",!0)("binary",!0)("model",!1),c(),r("disabled",!0)("binary",!0)("model",!0))}function _t(t,l){if(t&1){let e=M();d(0,"app-checkbox-component",32),x("modelChange",function(n){p(e);let i=a();return b(i.checked,n)||(i.checked=n),h(n)}),s()}if(t&2){let e=a();r("invalid",!e.checked)("binary",!0),u("model",e.checked)}}function gt(t,l){if(t&1&&re(0,33)(1,33)(2,33)(3,33)(4,33)(5,33)(6,33)(7,33),t&2){a();let e=g(1),o=g(4),n=g(6),i=g(8),_=g(10),T=g(12),Be=g(14),We=g(16),Ne=g(18);r("ngTemplateOutlet",e.panelTemplate)("ngTemplateOutletContext",C(16,tt,o)),c(),r("ngTemplateOutlet",e.panelTemplate)("ngTemplateOutletContext",C(18,nt,n)),c(),r("ngTemplateOutlet",e.panelTemplate)("ngTemplateOutletContext",C(20,ot,i)),c(),r("ngTemplateOutlet",e.panelTemplate)("ngTemplateOutletContext",C(22,it,_)),c(),r("ngTemplateOutlet",e.panelTemplate)("ngTemplateOutletContext",C(24,at,T)),c(),r("ngTemplateOutlet",e.panelTemplate)("ngTemplateOutletContext",C(26,ct,Be)),c(),r("ngTemplateOutlet",e.panelTemplate)("ngTemplateOutletContext",C(28,rt,We)),c(),r("ngTemplateOutlet",e.panelTemplate)("ngTemplateOutletContext",C(30,lt,Ne))}}var De=class t{checked=!1;pizza=[];categories=[{name:"Accounting",key:"A"},{name:"Marketing",key:"M"},{name:"Production",key:"P"},{name:"Research",key:"R"}];selectedCategories=[];size=[];ngOnInit(){this.selectedCategories=[this.categories[1]]}onValueChanged(l){console.log("Pizza changed:",this.pizza),console.log("Categories changed:",this.selectedCategories),console.log("Size changed:",this.size)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=w({type:t,selectors:[["app-checkbox-sandbox"]],decls:20,vars:1,consts:[["sandbox",""],["basic",""],["indeterminate",""],["group",""],["dynamic",""],["filled",""],["size",""],["disabled",""],["invalid",""],[1,"flex","flex-col","gap-10"],[3,"binary","model"],[3,"binary","indeterminate","model"],[1,"flex","items-center"],["name","pizza","value","Cheese","inputId","ingredient1",3,"modelChange","valueChanged","model"],["for","ingredient1",1,"ml-2"],["name","pizza","value","Mushroom","inputId","ingredient2",3,"modelChange","valueChanged","model"],["for","ingredient2",1,"ml-2"],["name","pizza","value","Pepper","inputId","ingredient3",3,"modelChange","valueChanged","model"],["for","ingredient3",1,"ml-2"],["name","pizza","value","Onion","inputId","ingredient4",3,"modelChange","valueChanged","model"],["for","ingredient4",1,"ml-2"],[1,"flex","flex-col","gap-4"],["name","group",3,"modelChange","valueChanged","value","inputId","model"],[1,"ml-2",3,"for"],["variant","filled",3,"binary","model"],["name","size","value","Small","inputId","size_small","size","small",3,"modelChange","valueChanged","model"],["for","size_small",1,"ml-2","text-sm"],["name","size","value","Normal","inputId","size_normal",3,"modelChange","valueChanged","model"],["for","size_normal",1,"ml-2"],["name","size","value","Large","inputId","size_large","size","large",3,"modelChange","valueChanged","model"],["for","size_large",1,"ml-2","text-lg"],[3,"disabled","binary","model"],[3,"modelChange","invalid","binary","model"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(e,o){if(e&1&&(f(0,"app-sandbox",null,0),d(2,"div",9),S(3,dt,1,2,"ng-template",null,1,y)(5,st,1,3,"ng-template",null,2,y)(7,pt,16,4,"ng-template",null,3,y)(9,mt,3,0,"ng-template",null,4,y)(11,ut,1,2,"ng-template",null,5,y)(13,bt,12,3,"ng-template",null,6,y)(15,xt,2,6,"ng-template",null,7,y)(17,_t,1,3,"ng-template",null,8,y),te(19,gt,8,32),s()),e&2){let n=g(1);c(19),ne(n.panelTemplate?19:-1)}},dependencies:[j,R,P,Se],encapsulation:2})};export{De as CheckboxSandbox};
