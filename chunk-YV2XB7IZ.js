import{a as G,b as R}from"./chunk-Z6V3SZHP.js";import{b as V,d as P,g as Y,i as z}from"./chunk-DOKZ7KTZ.js";import{c as W,d as H,e as d,f as $}from"./chunk-LSEUUX7Y.js";import{O}from"./chunk-IRGBBO7W.js";import{ba as f,r as _}from"./chunk-ZZBO2V7X.js";import{$b as A,A as g,D as y,Hb as L,Jb as D,Kb as S,Ma as p,Q as C,R as w,Ra as u,T as I,Tb as T,Ub as N,V as i,Vb as k,Yb as E,Zb as j,_b as B,ab as r,bb as M,eb as F,f as v,fb as x,ma as b,sb as s,tb as c,ub as m}from"./chunk-NAEPLZWI.js";var U=`
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
`;var Z=["*"],ee=`
    ${U}

    /* For PrimeNG */
    .p-floatlabel:has(.ng-invalid.ng-dirty) label {
        color: dt('floatlabel.invalid.color');
    }
`,le={root:({instance:e})=>["p-floatlabel",{"p-floatlabel-over":e.variant==="over","p-floatlabel-on":e.variant==="on","p-floatlabel-in":e.variant==="in"}]},q=(()=>{class e extends O{name="floatlabel";style=ee;classes=le;static \u0275fac=(()=>{let a;return function(t){return(a||(a=b(e)))(t||e)}})();static \u0275prov=C({token:e,factory:e.\u0275fac})}return e})();var J=new I("FLOATLABEL_INSTANCE"),h=(()=>{class e extends H{_componentStyle=i(q);$pcFloatLabel=i(J,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=i(d,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}variant="over";static \u0275fac=(()=>{let a;return function(t){return(a||(a=b(e)))(t||e)}})();static \u0275cmp=r({type:e,selectors:[["p-floatlabel"],["p-floatLabel"],["p-float-label"]],hostVars:2,hostBindings:function(l,t){l&2&&T(t.cx("root"))},inputs:{variant:"variant"},features:[A([q,{provide:J,useExisting:e},{provide:W,useExisting:e}]),x([d]),F],ngContentSelectors:Z,decls:1,vars:0,template:function(l,t){l&1&&(D(),S(0))},dependencies:[_,f,$],encapsulation:2,changeDetection:0})}return e})(),K=(()=>{class e{static \u0275fac=function(l){return new(l||e)};static \u0275mod=M({type:e});static \u0275inj=w({imports:[h,f,f]})}return e})();var Q=class e{variant="over";invalid=!1;id="";label="";fluid=!1;model;modelChange=new u;valueChanged=new u;valueChangedSubject=new v;ngOnInit(){this.valueChangedSubject.pipe(g(500),y()).subscribe(o=>{this.valueChanged.emit(o)})}onValueChanged(o){this.modelChange.emit(this.model),this.valueChangedSubject.next(this.model)}static \u0275fac=function(a){return new(a||e)};static \u0275cmp=r({type:e,selectors:[["app-float-label-input-component"]],inputs:{variant:"variant",invalid:"invalid",id:"id",label:"label",fluid:"fluid",model:"model"},outputs:{modelChange:"modelChange",valueChanged:"valueChanged"},decls:4,vars:7,consts:[[3,"variant"],["pInputText","",3,"ngModelChange","invalid","id","fluid","ngModel"],[3,"for"]],template:function(a,l){a&1&&(c(0,"p-floatLabel",0)(1,"input",1),B("ngModelChange",function(n){return j(l.model,n)||(l.model=n),n}),L("ngModelChange",function(n){return l.onValueChanged(n)}),m(),c(2,"label",2),N(3),m()()),a&2&&(s("variant",l.variant),p(),s("invalid",l.invalid)("id",l.id)("fluid",l.fluid),E("ngModel",l.model),p(),s("for",l.id),p(),k(l.label))},dependencies:[K,h,z,V,P,Y,R,G],encapsulation:2})};export{h as a,K as b,Q as c};
