import{a as oe,b as ie}from"./chunk-J5XQACEZ.js";import"./chunk-CSFMXEOH.js";import{b as Z,d as $,e as ee,f as te}from"./chunk-A4LS76NS.js";import{a as re}from"./chunk-HVOPMWAJ.js";import{c as ae,d as ne,e as F,f as le}from"./chunk-K4UUAXJP.js";import{ga as S,ma as X}from"./chunk-AOPYABFO.js";import{m as Q,p as w}from"./chunk-SYVSXDIH.js";import{$ as u,A as E,Ab as H,Ca as o,D as W,Fb as _,Ha as M,Jb as G,Kb as q,Lb as J,Ob as m,Pb as c,Q as D,Qb as f,R as B,Rb as K,Sa as g,T as N,Ta as O,Tb as C,V as h,Wa as j,Xa as k,Ya as P,_ as b,bc as y,db as A,eb as U,f as V,ib as p,jb as s,kb as d,lb as R,ma as L,rb as Y,sb as x,xb as v,yb as i,zb as z}from"./chunk-PXJF6HJ7.js";import"./chunk-4CLCTAJ7.js";var pe=`
    .p-floatlabel {
        display: block;
        position: relative;
    }

    .p-floatlabel label {
        position: absolute;
        pointer-events: none;
        top: 50%;
        transform: translateY(-50%);
        transition-property: all;
        transition-timing-function: ease;
        line-height: 1;
        font-weight: dt('floatlabel.font.weight');
        inset-inline-start: dt('floatlabel.position.x');
        color: dt('floatlabel.color');
        transition-duration: dt('floatlabel.transition.duration');
    }

    .p-floatlabel:has(.p-textarea) label {
        top: dt('floatlabel.position.y');
        transform: translateY(0);
    }

    .p-floatlabel:has(.p-inputicon:first-child) label {
        inset-inline-start: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-floatlabel:has(input:focus) label,
    .p-floatlabel:has(input.p-filled) label,
    .p-floatlabel:has(input:-webkit-autofill) label,
    .p-floatlabel:has(textarea:focus) label,
    .p-floatlabel:has(textarea.p-filled) label,
    .p-floatlabel:has(.p-inputwrapper-focus) label,
    .p-floatlabel:has(.p-inputwrapper-filled) label,
    .p-floatlabel:has(input[placeholder]) label,
    .p-floatlabel:has(textarea[placeholder]) label {
        top: dt('floatlabel.over.active.top');
        transform: translateY(0);
        font-size: dt('floatlabel.active.font.size');
        font-weight: dt('floatlabel.active.font.weight');
    }

    .p-floatlabel:has(input.p-filled) label,
    .p-floatlabel:has(textarea.p-filled) label,
    .p-floatlabel:has(.p-inputwrapper-filled) label {
        color: dt('floatlabel.active.color');
    }

    .p-floatlabel:has(input:focus) label,
    .p-floatlabel:has(input:-webkit-autofill) label,
    .p-floatlabel:has(textarea:focus) label,
    .p-floatlabel:has(.p-inputwrapper-focus) label {
        color: dt('floatlabel.focus.color');
    }

    .p-floatlabel-in .p-inputtext,
    .p-floatlabel-in .p-textarea,
    .p-floatlabel-in .p-select-label,
    .p-floatlabel-in .p-multiselect-label,
    .p-floatlabel-in .p-multiselect-label:has(.p-chip),
    .p-floatlabel-in .p-autocomplete-input-multiple,
    .p-floatlabel-in .p-cascadeselect-label,
    .p-floatlabel-in .p-treeselect-label {
        padding-block-start: dt('floatlabel.in.input.padding.top');
        padding-block-end: dt('floatlabel.in.input.padding.bottom');
    }

    .p-floatlabel-in:has(input:focus) label,
    .p-floatlabel-in:has(input.p-filled) label,
    .p-floatlabel-in:has(input:-webkit-autofill) label,
    .p-floatlabel-in:has(textarea:focus) label,
    .p-floatlabel-in:has(textarea.p-filled) label,
    .p-floatlabel-in:has(.p-inputwrapper-focus) label,
    .p-floatlabel-in:has(.p-inputwrapper-filled) label,
    .p-floatlabel-in:has(input[placeholder]) label,
    .p-floatlabel-in:has(textarea[placeholder]) label {
        top: dt('floatlabel.in.active.top');
    }

    .p-floatlabel-on:has(input:focus) label,
    .p-floatlabel-on:has(input.p-filled) label,
    .p-floatlabel-on:has(input:-webkit-autofill) label,
    .p-floatlabel-on:has(textarea:focus) label,
    .p-floatlabel-on:has(textarea.p-filled) label,
    .p-floatlabel-on:has(.p-inputwrapper-focus) label,
    .p-floatlabel-on:has(.p-inputwrapper-filled) label,
    .p-floatlabel-on:has(input[placeholder]) label,
    .p-floatlabel-on:has(textarea[placeholder]) label {
        top: 0;
        transform: translateY(-50%);
        border-radius: dt('floatlabel.on.border.radius');
        background: dt('floatlabel.on.active.background');
        padding: dt('floatlabel.on.active.padding');
    }

    .p-floatlabel:has([class^='p-'][class$='-fluid']) {
        width: 100%;
    }

    .p-floatlabel:has(.p-invalid) label {
        color: dt('floatlabel.invalid.color');
    }
`;var be=["*"],ue=`
    ${pe}

    /* For PrimeNG */
    .p-floatlabel:has(.ng-invalid.ng-dirty) label {
        color: dt('floatlabel.invalid.color');
    }
`,ge={root:({instance:e})=>["p-floatlabel",{"p-floatlabel-over":e.variant==="over","p-floatlabel-on":e.variant==="on","p-floatlabel-in":e.variant==="in"}]},se=(()=>{class e extends X{name="floatlabel";style=ue;classes=ge;static \u0275fac=(()=>{let t;return function(a){return(t||(t=L(e)))(a||e)}})();static \u0275prov=D({token:e,factory:e.\u0275fac})}return e})();var de=new N("FLOATLABEL_INSTANCE"),I=(()=>{class e extends ne{_componentStyle=h(se);$pcFloatLabel=h(de,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=h(F,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}variant="over";static \u0275fac=(()=>{let t;return function(a){return(t||(t=L(e)))(a||e)}})();static \u0275cmp=g({type:e,selectors:[["p-floatlabel"],["p-floatLabel"],["p-float-label"]],hostVars:2,hostBindings:function(n,a){n&2&&G(a.cx("root"))},inputs:{variant:"variant"},features:[K([se,{provide:de,useExisting:e},{provide:ae,useExisting:e}]),k([F]),j],ngContentSelectors:be,decls:1,vars:0,template:function(n,a){n&1&&(z(),H(0))},dependencies:[w,S,le],encapsulation:2,changeDetection:0})}return e})(),ce=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=O({type:e});static \u0275inj=B({imports:[I,S,S]})}return e})();var T=class e{variant="over";invalid=!1;id="";label="";model;modelChange=new M;valueChanged=new M;valueChangedSubject=new V;ngOnInit(){this.valueChangedSubject.pipe(E(500),W()).subscribe(r=>{this.valueChanged.emit(r)})}onValueChanged(r){this.modelChange.emit(this.model),this.valueChangedSubject.next(this.model)}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=g({type:e,selectors:[["app-float-label-component"]],inputs:{variant:"variant",invalid:"invalid",id:"id",label:"label",model:"model"},outputs:{modelChange:"modelChange",valueChanged:"valueChanged"},decls:4,vars:6,consts:[[3,"variant"],["pInputText","",3,"ngModelChange","invalid","id","ngModel"],[3,"for"]],template:function(t,n){t&1&&(s(0,"p-floatLabel",0)(1,"input",1),f("ngModelChange",function(l){return c(n.model,l)||(n.model=l),l}),v("ngModelChange",function(l){return n.onValueChanged(l)}),d(),s(2,"label",2),q(3),d()()),t&2&&(p("variant",n.variant),o(),p("invalid",n.invalid)("id",n.id),m("ngModel",n.model),o(),p("for",n.id),o(),J(n.label))},dependencies:[ce,I,te,Z,$,ee,ie,oe],encapsulation:2})};var xe=e=>({title:"Basic",content:e}),ve=e=>({title:"Variants",content:e}),Ce=e=>({title:"Invalid",content:e});function ye(e,r){if(e&1){let t=x();s(0,"app-float-label-component",5),f("modelChange",function(a){b(t);let l=i();return c(l.username,a)||(l.username=a),u(a)}),v("valueChanged",function(a){b(t);let l=i();return u(l.onTextChanged(a))}),d()}if(e&2){let t=i();m("model",t.username)}}function we(e,r){if(e&1){let t=x();s(0,"div",6)(1,"app-float-label-component",7),f("modelChange",function(a){b(t);let l=i();return c(l.username,a)||(l.username=a),u(a)}),d(),s(2,"app-float-label-component",8),f("modelChange",function(a){b(t);let l=i();return c(l.username,a)||(l.username=a),u(a)}),d()()}if(e&2){let t=i();o(),m("model",t.username),o(),m("model",t.username)}}function Se(e,r){if(e&1){let t=x();s(0,"div",6)(1,"app-float-label-component",9),f("modelChange",function(a){b(t);let l=i();return c(l.username,a)||(l.username=a),u(a)}),d(),s(2,"app-float-label-component",10),f("modelChange",function(a){b(t);let l=i();return c(l.username,a)||(l.username=a),u(a)}),d(),s(3,"app-float-label-component",11),f("modelChange",function(a){b(t);let l=i();return c(l.username,a)||(l.username=a),u(a)}),d()()}if(e&2){let t=i();o(),p("invalid",!t.username),m("model",t.username),o(),p("invalid",!t.username),m("model",t.username),o(),p("invalid",!t.username),m("model",t.username)}}function Fe(e,r){if(e&1&&Y(0,12)(1,12)(2,12),e&2){i();let t=_(1),n=_(4),a=_(6),l=_(8);p("ngTemplateOutlet",t.panelTemplate)("ngTemplateOutletContext",C(6,xe,n)),o(),p("ngTemplateOutlet",t.panelTemplate)("ngTemplateOutletContext",C(8,ve,a)),o(),p("ngTemplateOutlet",t.panelTemplate)("ngTemplateOutletContext",C(10,Ce,l))}}var fe=class e{username="";onTextChanged(r){console.log("Text changed:",this.username)}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=g({type:e,selectors:[["app-float-label-sandbox"]],decls:10,vars:1,consts:[["sandbox",""],["basic",""],["variants",""],["invalid",""],[1,"flex","flex-col","gap-5"],["id","username","label","Username",3,"modelChange","valueChanged","model"],[1,"flex","flex-wrap","items-end","justify-center","gap-4"],["variant","in","id","in_label","label","In Label",3,"modelChange","model"],["variant","on","id","on_label","label","On Label",3,"modelChange","model"],["variant","over","id","value1","label","Username",3,"modelChange","invalid","model"],["variant","in","id","value2","label","Username",3,"modelChange","invalid","model"],["variant","on","id","value3","label","Username",3,"modelChange","invalid","model"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(t,n){if(t&1&&(R(0,"app-sandbox",null,0),s(2,"div",4),P(3,ye,1,1,"ng-template",null,1,y)(5,we,3,2,"ng-template",null,2,y)(7,Se,4,6,"ng-template",null,3,y),A(9,Fe,3,12),d()),t&2){let a=_(1);o(9),U(a.panelTemplate?9:-1)}},dependencies:[w,Q,T,re],encapsulation:2})};export{fe as FloatLabelSandbox};
