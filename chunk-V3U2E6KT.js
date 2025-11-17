import{a as Ee}from"./chunk-JUZMSGOG.js";import{a as we,b as Te,c as Ve,d as Se,e as ze,f as Ie}from"./chunk-UYQ62FR4.js";import{a as Be}from"./chunk-FFNMDTMS.js";import{b as ye,d as D,e as ve,f as Me}from"./chunk-KUP6GBSE.js";import{J as ke,K as q,O as Ce,y as ge,z as fe}from"./chunk-RLV7YIWC.js";import{i as xe,k as _e,m as A,n as R}from"./chunk-SWWZH6D4.js";import{$a as ce,Ab as k,Ba as z,Bb as me,Db as u,Eb as b,Fb as x,Gb as he,Ib as C,Jb as ue,Lb as y,M as Z,Ma as w,N as J,Na as ee,O as Y,Oa as ne,Pa as B,Pb as P,Q as $,Qa as te,Ra as I,S as O,Sb as T,X as p,Xa as G,Xb as v,Y as m,Ya as ie,Yb as be,Z as F,Za as oe,_a as ae,ab as re,bb as a,cb as d,db as s,ea as N,eb as f,hb as le,ia as S,ib as K,jb as X,kb as de,lb as M,nb as h,ob as c,rb as U,sb as se,tb as W,ub as L,vb as g,wa as r,yb as pe,zb as E}from"./chunk-TDEPKAKI.js";import"./chunk-4CLCTAJ7.js";var Fe=(()=>{class n extends Ie{required=T(void 0,{transform:v});invalid=T(void 0,{transform:v});disabled=T(void 0,{transform:v});name=T();_disabled=N(!1);$disabled=P(()=>this.disabled()||this._disabled());onModelChange=()=>{};onModelTouched=()=>{};writeDisabledState(e){this._disabled.set(e)}writeControlValue(e,i){}writeValue(e){this.writeControlValue(e,this.writeModelValue.bind(this))}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.writeDisabledState(e),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(t){return(e||(e=S(n)))(t||n)}})();static \u0275dir=ne({type:n,inputs:{required:[1,"required"],invalid:[1,"invalid"],disabled:[1,"disabled"],name:[1,"name"]},features:[B]})}return n})();var Qe=["data-p-icon","check"],De=(()=>{class n extends Me{static \u0275fac=(()=>{let e;return function(t){return(e||(e=S(n)))(t||n)}})();static \u0275cmp=w({type:n,selectors:[["","data-p-icon","check"]],features:[B],attrs:Qe,decls:1,vars:0,consts:[["d","M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z","fill","currentColor"]],template:function(i,t){i&1&&(F(),le(0,"path",0))},encapsulation:2})}return n})();var Oe=`
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
`;var He=["icon"],Ge=["input"],Ke=(n,l)=>({checked:n,class:l});function Xe(n,l){if(n&1&&f(0,"span",8),n&2){let e=c(3);E(e.cx("icon")),a("ngClass",e.checkboxIcon)("pBind",e.ptm("icon"))}}function Ue(n,l){if(n&1&&(F(),f(0,"svg",9)),n&2){let e=c(3);E(e.cx("icon")),a("pBind",e.ptm("icon"))}}function Ze(n,l){if(n&1&&(K(0),I(1,Xe,1,4,"span",6)(2,Ue,1,3,"svg",7),X()),n&2){let e=c(2);r(),a("ngIf",e.checkboxIcon),r(),a("ngIf",!e.checkboxIcon)}}function Je(n,l){if(n&1&&(F(),f(0,"svg",10)),n&2){let e=c(2);E(e.cx("icon")),a("pBind",e.ptm("icon"))}}function Ye(n,l){if(n&1&&(K(0),I(1,Ze,3,2,"ng-container",3)(2,Je,1,3,"svg",5),X()),n&2){let e=c();r(),a("ngIf",e.checked),r(),a("ngIf",e._indeterminate())}}function $e(n,l){}function en(n,l){n&1&&I(0,$e,0,0,"ng-template")}var nn=`
    ${Oe}

    /* For PrimeNG */
    p-checkBox.ng-invalid.ng-dirty .p-checkbox-box,
    p-check-box.ng-invalid.ng-dirty .p-checkbox-box,
    p-checkbox.ng-invalid.ng-dirty .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }
`,tn={root:({instance:n})=>["p-checkbox p-component",{"p-checkbox-checked p-highlight":n.checked,"p-disabled":n.$disabled(),"p-invalid":n.invalid(),"p-variant-filled":n.$variant()==="filled","p-checkbox-sm p-inputfield-sm":n.size()==="small","p-checkbox-lg p-inputfield-lg":n.size()==="large"}],box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},Ne=(()=>{class n extends Ce{name="checkbox";style=nn;classes=tn;static \u0275fac=(()=>{let e;return function(t){return(e||(e=S(n)))(t||n)}})();static \u0275prov=J({token:n,factory:n.\u0275fac})}return n})();var We=new $("CHECKBOX_INSTANCE"),on={provide:we,useExisting:Z(()=>j),multi:!0},j=(()=>{class n extends Fe{hostName="";value;binary;ariaLabelledBy;ariaLabel;tabindex;inputId;inputStyle;styleClass;inputClass;indeterminate=!1;formControl;checkboxIcon;readonly;autofocus;trueValue=!0;falseValue=!1;variant=T();size=T();onChange=new z;onFocus=new z;onBlur=new z;inputViewChild;get checked(){return this._indeterminate()?!1:this.binary?this.modelValue()===this.trueValue:fe(this.value,this.modelValue())}_indeterminate=N(void 0);checkboxIconTemplate;templates;_checkboxIconTemplate;focused=!1;_componentStyle=O(Ne);bindDirectiveInstance=O(D,{self:!0});$pcCheckbox=O(We,{optional:!0,skipSelf:!0})??void 0;$variant=P(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"icon":this._checkboxIconTemplate=e.template;break;case"checkboxicon":this._checkboxIconTemplate=e.template;break}})}onChanges(e){e.indeterminate&&this._indeterminate.set(e.indeterminate.currentValue)}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}updateModel(e){let i,t=this.injector.get(Te,null,{optional:!0,self:!0}),o=t&&!this.formControl?t.value:this.modelValue();this.binary?(i=this._indeterminate()?this.trueValue:this.checked?this.falseValue:this.trueValue,this.writeModelValue(i),this.onModelChange(i)):(this.checked||this._indeterminate()?i=o.filter(_=>!ge(_,this.value)):i=o?[...o,this.value]:[this.value],this.onModelChange(i),this.writeModelValue(i),this.formControl&&this.formControl.setValue(i)),this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:i,originalEvent:e})}handleChange(e){this.readonly||this.updateModel(e)}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onBlur.emit(e),this.onModelTouched()}focus(){this.inputViewChild?.nativeElement.focus()}writeControlValue(e,i){i(e),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(t){return(e||(e=S(n)))(t||n)}})();static \u0275cmp=w({type:n,selectors:[["p-checkbox"],["p-checkBox"],["p-check-box"]],contentQueries:function(i,t,o){if(i&1&&(U(o,He,4),U(o,ke,4)),i&2){let _;W(_=L())&&(t.checkboxIconTemplate=_.first),W(_=L())&&(t.templates=_)}},viewQuery:function(i,t){if(i&1&&se(Ge,5),i&2){let o;W(o=L())&&(t.inputViewChild=o.first)}},hostVars:5,hostBindings:function(i,t){i&2&&(G("data-p-highlight",t.checked)("data-p-checked",t.checked)("data-p-disabled",t.$disabled()),E(t.cn(t.cx("root"),t.styleClass)))},inputs:{hostName:"hostName",value:"value",binary:[2,"binary","binary",v],ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:[2,"tabindex","tabindex",be],inputId:"inputId",inputStyle:"inputStyle",styleClass:"styleClass",inputClass:"inputClass",indeterminate:[2,"indeterminate","indeterminate",v],formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:[2,"readonly","readonly",v],autofocus:[2,"autofocus","autofocus",v],trueValue:"trueValue",falseValue:"falseValue",variant:[1,"variant"],size:[1,"size"]},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},features:[he([on,Ne,{provide:We,useExisting:n},{provide:ye,useExisting:n}]),te([D]),B],decls:5,vars:24,consts:[["input",""],["type","checkbox",3,"focus","blur","change","checked","pBind"],[3,"pBind"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","minus",3,"class","pBind",4,"ngIf"],[3,"class","ngClass","pBind",4,"ngIf"],["data-p-icon","check",3,"class","pBind",4,"ngIf"],[3,"ngClass","pBind"],["data-p-icon","check",3,"pBind"],["data-p-icon","minus",3,"pBind"]],template:function(i,t){if(i&1){let o=M();d(0,"input",1,0),h("focus",function(V){return p(o),m(t.onInputFocus(V))})("blur",function(V){return p(o),m(t.onInputBlur(V))})("change",function(V){return p(o),m(t.handleChange(V))}),s(),d(2,"div",2),I(3,Ye,3,2,"ng-container",3)(4,en,1,0,null,4),s()}i&2&&(pe(t.inputStyle),E(t.cn(t.cx("input"),t.inputClass)),a("checked",t.checked)("pBind",t.ptm("input")),G("id",t.inputId)("value",t.value)("name",t.name())("tabindex",t.tabindex)("required",t.required()?"":void 0)("readonly",t.readonly?"":void 0)("disabled",t.$disabled()?"":void 0)("aria-labelledby",t.ariaLabelledBy)("aria-label",t.ariaLabel),r(2),E(t.cx("box")),a("pBind",t.ptm("box")),r(),a("ngIf",!t.checkboxIconTemplate&&!t._checkboxIconTemplate),r(),a("ngTemplateOutlet",t.checkboxIconTemplate||t._checkboxIconTemplate)("ngTemplateOutletContext",ue(21,Ke,t.checked,t.cx("icon"))))},dependencies:[R,xe,_e,A,q,De,Ee,ve,D],encapsulation:2,changeDetection:0})}return n})(),Le=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=ee({type:n});static \u0275inj=Y({imports:[j,q,q]})}return n})();var H=class n{invalid=!1;disabled=!1;name="";value=null;binary=!1;inputId=void 0;indeterminate=!1;variant=void 0;size=void 0;model;modelChange=new z;valueChanged=new z;onValueChanged(l){this.modelChange.emit(this.model),this.valueChanged.emit(this.model)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=w({type:n,selectors:[["app-checkbox-component"]],inputs:{invalid:"invalid",disabled:"disabled",name:"name",value:"value",binary:"binary",inputId:"inputId",indeterminate:"indeterminate",variant:"variant",size:"size",model:"model"},outputs:{modelChange:"modelChange",valueChanged:"valueChanged"},decls:1,vars:10,consts:[[3,"ngModelChange","onChange","invalid","disabled","name","value","binary","inputId","indeterminate","variant","size","ngModel"]],template:function(e,i){e&1&&(d(0,"p-checkbox",0),x("ngModelChange",function(o){return b(i.model,o)||(i.model=o),o}),h("onChange",function(o){return i.onValueChanged(o)}),s()),e&2&&(a("invalid",i.invalid)("disabled",i.disabled)("name",i.name)("value",i.value)("binary",i.binary)("inputId",i.inputId)("indeterminate",i.indeterminate)("variant",i.variant)("size",i.size),u("ngModel",i.model))},dependencies:[Le,j,ze,Ve,Se],styles:["p-checkbox[_ngcontent-%COMP%]{display:flex}"]})};var rn=n=>({title:"Basic",content:n}),ln=n=>({title:"Indeterminate",content:n}),dn=n=>({title:"Group",content:n}),sn=n=>({title:"Dynamic",content:n}),pn=n=>({title:"Filled",content:n}),mn=n=>({title:"Size",content:n}),hn=n=>({title:"Disabled",content:n}),un=n=>({title:"Invalid",content:n});function bn(n,l){n&1&&f(0,"app-checkbox-component",10),n&2&&a("binary",!0)("model",!1)}function xn(n,l){n&1&&f(0,"app-checkbox-component",11),n&2&&a("binary",!0)("indeterminate",!0)("model",!1)}function _n(n,l){if(n&1){let e=M();d(0,"div",12)(1,"app-checkbox-component",13),x("modelChange",function(t){p(e);let o=c();return b(o.pizza,t)||(o.pizza=t),m(t)}),h("valueChanged",function(t){p(e);let o=c();return m(o.onValueChanged(t))}),s(),d(2,"label",14),k(3,"Cheese"),s()(),d(4,"div",12)(5,"app-checkbox-component",15),x("modelChange",function(t){p(e);let o=c();return b(o.pizza,t)||(o.pizza=t),m(t)}),h("valueChanged",function(t){p(e);let o=c();return m(o.onValueChanged(t))}),s(),d(6,"label",16),k(7,"Mushroom"),s()(),d(8,"div",12)(9,"app-checkbox-component",17),x("modelChange",function(t){p(e);let o=c();return b(o.pizza,t)||(o.pizza=t),m(t)}),h("valueChanged",function(t){p(e);let o=c();return m(o.onValueChanged(t))}),s(),d(10,"label",18),k(11,"Pepper"),s()(),d(12,"div",12)(13,"app-checkbox-component",19),x("modelChange",function(t){p(e);let o=c();return b(o.pizza,t)||(o.pizza=t),m(t)}),h("valueChanged",function(t){p(e);let o=c();return m(o.onValueChanged(t))}),s(),d(14,"label",20),k(15,"Onion"),s()()}if(n&2){let e=c();r(),u("model",e.pizza),r(4),u("model",e.pizza),r(4),u("model",e.pizza),r(4),u("model",e.pizza)}}function gn(n,l){if(n&1){let e=M();d(0,"div",12)(1,"app-checkbox-component",22),x("modelChange",function(t){p(e);let o=c(2);return b(o.selectedCategories,t)||(o.selectedCategories=t),m(t)}),h("valueChanged",function(t){p(e);let o=c(2);return m(o.onValueChanged(t))}),s(),d(2,"label",23),k(3),s()()}if(n&2){let e=l.$implicit,i=c(2);r(),a("value",e)("inputId",e.key),u("model",i.selectedCategories),r(),a("for",e.key),r(),me(e.name)}}function fn(n,l){if(n&1&&(d(0,"div",21),ce(1,gn,4,5,"div",12,ae),s()),n&2){let e=c();r(),re(e.categories)}}function kn(n,l){n&1&&f(0,"app-checkbox-component",24),n&2&&a("binary",!0)("model",!1)}function Cn(n,l){if(n&1){let e=M();d(0,"div",12)(1,"app-checkbox-component",25),x("modelChange",function(t){p(e);let o=c();return b(o.size,t)||(o.size=t),m(t)}),h("valueChanged",function(t){p(e);let o=c();return m(o.onValueChanged(t))}),s(),d(2,"label",26),k(3,"Small"),s()(),d(4,"div",12)(5,"app-checkbox-component",27),x("modelChange",function(t){p(e);let o=c();return b(o.size,t)||(o.size=t),m(t)}),h("valueChanged",function(t){p(e);let o=c();return m(o.onValueChanged(t))}),s(),d(6,"label",28),k(7,"Normal"),s()(),d(8,"div",12)(9,"app-checkbox-component",29),x("modelChange",function(t){p(e);let o=c();return b(o.size,t)||(o.size=t),m(t)}),h("valueChanged",function(t){p(e);let o=c();return m(o.onValueChanged(t))}),s(),d(10,"label",30),k(11,"Large"),s()()}if(n&2){let e=c();r(),u("model",e.size),r(4),u("model",e.size),r(4),u("model",e.size)}}function yn(n,l){n&1&&f(0,"app-checkbox-component",31)(1,"app-checkbox-component",31),n&2&&(a("disabled",!0)("binary",!0)("model",!1),r(),a("disabled",!0)("binary",!0)("model",!0))}function vn(n,l){if(n&1){let e=M();d(0,"app-checkbox-component",32),x("modelChange",function(t){p(e);let o=c();return b(o.checked,t)||(o.checked=t),m(t)}),s()}if(n&2){let e=c();a("invalid",!e.checked)("binary",!0),u("model",e.checked)}}function wn(n,l){if(n&1&&de(0,33)(1,33)(2,33)(3,33)(4,33)(5,33)(6,33)(7,33),n&2){c();let e=g(1),i=g(4),t=g(6),o=g(8),_=g(10),V=g(12),Ae=g(14),Re=g(16),qe=g(18);a("ngTemplateOutlet",e.panelTemplate)("ngTemplateOutletContext",C(16,rn,i)),r(),a("ngTemplateOutlet",e.panelTemplate)("ngTemplateOutletContext",C(18,ln,t)),r(),a("ngTemplateOutlet",e.panelTemplate)("ngTemplateOutletContext",C(20,dn,o)),r(),a("ngTemplateOutlet",e.panelTemplate)("ngTemplateOutletContext",C(22,sn,_)),r(),a("ngTemplateOutlet",e.panelTemplate)("ngTemplateOutletContext",C(24,pn,V)),r(),a("ngTemplateOutlet",e.panelTemplate)("ngTemplateOutletContext",C(26,mn,Ae)),r(),a("ngTemplateOutlet",e.panelTemplate)("ngTemplateOutletContext",C(28,hn,Re)),r(),a("ngTemplateOutlet",e.panelTemplate)("ngTemplateOutletContext",C(30,un,qe))}}var Pe=class n{checked=!1;pizza=[];categories=[{name:"Accounting",key:"A"},{name:"Marketing",key:"M"},{name:"Production",key:"P"},{name:"Research",key:"R"}];selectedCategories=[];size=[];ngOnInit(){this.selectedCategories=[this.categories[1]]}onValueChanged(l){console.log("Pizza changed:",this.pizza),console.log("Categories changed:",this.selectedCategories),console.log("Size changed:",this.size)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=w({type:n,selectors:[["app-checkbox-sandbox"]],decls:20,vars:1,consts:[["sandbox",""],["basic",""],["indeterminate",""],["group",""],["dynamic",""],["filled",""],["size",""],["disabled",""],["invalid",""],[1,"flex","flex-col","gap-10"],[3,"binary","model"],[3,"binary","indeterminate","model"],[1,"flex","items-center"],["name","pizza","value","Cheese","inputId","ingredient1",3,"modelChange","valueChanged","model"],["for","ingredient1",1,"ml-2"],["name","pizza","value","Mushroom","inputId","ingredient2",3,"modelChange","valueChanged","model"],["for","ingredient2",1,"ml-2"],["name","pizza","value","Pepper","inputId","ingredient3",3,"modelChange","valueChanged","model"],["for","ingredient3",1,"ml-2"],["name","pizza","value","Onion","inputId","ingredient4",3,"modelChange","valueChanged","model"],["for","ingredient4",1,"ml-2"],[1,"flex","flex-col","gap-4"],["name","group",3,"modelChange","valueChanged","value","inputId","model"],[1,"ml-2",3,"for"],["variant","filled",3,"binary","model"],["name","size","value","Small","inputId","size_small","size","small",3,"modelChange","valueChanged","model"],["for","size_small",1,"ml-2","text-sm"],["name","size","value","Normal","inputId","size_normal",3,"modelChange","valueChanged","model"],["for","size_normal",1,"ml-2"],["name","size","value","Large","inputId","size_large","size","large",3,"modelChange","valueChanged","model"],["for","size_large",1,"ml-2","text-lg"],[3,"disabled","binary","model"],[3,"modelChange","invalid","binary","model"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(e,i){if(e&1&&(f(0,"app-sandbox",null,0),d(2,"div",9),I(3,bn,1,2,"ng-template",null,1,y)(5,xn,1,3,"ng-template",null,2,y)(7,_n,16,4,"ng-template",null,3,y)(9,fn,3,0,"ng-template",null,4,y)(11,kn,1,2,"ng-template",null,5,y)(13,Cn,12,3,"ng-template",null,6,y)(15,yn,2,6,"ng-template",null,7,y)(17,vn,1,3,"ng-template",null,8,y),ie(19,wn,8,32),s()),e&2){let t=g(1);r(19),oe(t.panelTemplate?19:-1)}},dependencies:[H,R,A,Be],encapsulation:2})};export{Pe as CheckboxSandbox};
