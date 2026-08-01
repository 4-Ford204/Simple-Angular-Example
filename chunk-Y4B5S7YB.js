import{a as w}from"./chunk-P6XJXNM5.js";import{b as z,c as D,d as F,e as r,f as N}from"./chunk-K4UUAXJP.js";import{ga as y,ma as v}from"./chunk-AOPYABFO.js";import{p as I}from"./chunk-SYVSXDIH.js";import{Ab as h,Ca as B,Jb as C,Q as a,R as l,Rb as g,Sa as c,T as p,Ta as f,V as o,Wa as d,Xa as m,aa as x,cb as j,ma as s,mb as M,nb as E,ob as S,tb as T,zb as u}from"./chunk-PXJF6HJ7.js";var L=["data-p-icon","search"],K=(()=>{class e extends w{pathId;onInit(){this.pathId="url(#"+z()+")"}static \u0275fac=(()=>{let n;return function(t){return(n||(n=s(e)))(t||e)}})();static \u0275cmp=c({type:e,selectors:[["","data-p-icon","search"]],features:[d],attrs:L,decls:5,vars:2,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M2.67602 11.0265C3.6661 11.688 4.83011 12.0411 6.02086 12.0411C6.81149 12.0411 7.59438 11.8854 8.32483 11.5828C8.87005 11.357 9.37808 11.0526 9.83317 10.6803L12.9769 13.8241C13.0323 13.8801 13.0983 13.9245 13.171 13.9548C13.2438 13.985 13.3219 14.0003 13.4007 14C13.4795 14.0003 13.5575 13.985 13.6303 13.9548C13.7031 13.9245 13.7691 13.8801 13.8244 13.8241C13.9367 13.7116 13.9998 13.5592 13.9998 13.4003C13.9998 13.2414 13.9367 13.089 13.8244 12.9765L10.6807 9.8328C11.053 9.37773 11.3573 8.86972 11.5831 8.32452C11.8857 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0268 2.67572C10.3652 1.68564 9.42494 0.913972 8.32483 0.45829C7.22472 0.00260857 6.01418 -0.116618 4.84631 0.115686C3.67844 0.34799 2.60568 0.921393 1.76369 1.76338C0.921698 2.60537 0.348296 3.67813 0.115991 4.84601C-0.116313 6.01388 0.00291375 7.22441 0.458595 8.32452C0.914277 9.42464 1.68595 10.3649 2.67602 11.0265ZM3.35565 2.0158C4.14456 1.48867 5.07206 1.20731 6.02086 1.20731C7.29317 1.20731 8.51338 1.71274 9.41304 2.6124C10.3127 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5368 7.88088 10.0096 8.66978C9.48251 9.45868 8.73328 10.0736 7.85669 10.4367C6.98011 10.7997 6.01554 10.8947 5.08496 10.7096C4.15439 10.5245 3.2996 10.0676 2.62869 9.39674C1.95778 8.72583 1.50089 7.87104 1.31579 6.94046C1.13068 6.00989 1.22568 5.04532 1.58878 4.16874C1.95187 3.29215 2.56675 2.54292 3.35565 2.0158Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,t){i&1&&(x(),M(0,"g"),S(1,"path",0),E(),M(2,"defs")(3,"clipPath",1),S(4,"rect",2),E()()),i&2&&(j("clip-path",t.pathId),B(3),T("id",t.pathId))},encapsulation:2})}return e})();var A=`
    .p-iconfield {
        position: relative;
        display: block;
    }

    .p-inputicon {
        position: absolute;
        top: 50%;
        margin-top: calc(-1 * (dt('icon.size') / 2));
        color: dt('iconfield.icon.color');
        line-height: 1;
        z-index: 1;
    }

    .p-iconfield .p-inputicon:first-child {
        inset-inline-start: dt('form.field.padding.x');
    }

    .p-iconfield .p-inputicon:last-child {
        inset-inline-end: dt('form.field.padding.x');
    }

    .p-iconfield .p-inputtext:not(:first-child),
    .p-iconfield .p-inputwrapper:not(:first-child) .p-inputtext {
        padding-inline-start: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-iconfield .p-inputtext:not(:last-child) {
        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-iconfield:has(.p-inputfield-sm) .p-inputicon {
        font-size: dt('form.field.sm.font.size');
        width: dt('form.field.sm.font.size');
        height: dt('form.field.sm.font.size');
        margin-top: calc(-1 * (dt('form.field.sm.font.size') / 2));
    }

    .p-iconfield:has(.p-inputfield-lg) .p-inputicon {
        font-size: dt('form.field.lg.font.size');
        width: dt('form.field.lg.font.size');
        height: dt('form.field.lg.font.size');
        margin-top: calc(-1 * (dt('form.field.lg.font.size') / 2));
    }
`;var _=["*"],R={root:({instance:e})=>["p-iconfield",{"p-iconfield-left":e.iconPosition=="left","p-iconfield-right":e.iconPosition=="right"}]},b=(()=>{class e extends v{name="iconfield";style=A;classes=R;static \u0275fac=(()=>{let n;return function(t){return(n||(n=s(e)))(t||e)}})();static \u0275prov=a({token:e,factory:e.\u0275fac})}return e})();var k=new p("ICONFIELD_INSTANCE"),U=(()=>{class e extends F{hostName="";_componentStyle=o(b);$pcIconField=o(k,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=o(r,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}iconPosition="left";styleClass;static \u0275fac=(()=>{let n;return function(t){return(n||(n=s(e)))(t||e)}})();static \u0275cmp=c({type:e,selectors:[["p-iconfield"],["p-iconField"],["p-icon-field"]],hostVars:2,hostBindings:function(i,t){i&2&&C(t.cn(t.cx("root"),t.styleClass))},inputs:{hostName:"hostName",iconPosition:"iconPosition",styleClass:"styleClass"},features:[g([b,{provide:k,useExisting:e},{provide:D,useExisting:e}]),m([r]),d],ngContentSelectors:_,decls:1,vars:0,template:function(i,t){i&1&&(u(),h(0))},dependencies:[I,N],encapsulation:2,changeDetection:0})}return e})(),le=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=f({type:e});static \u0275inj=l({imports:[U]})}return e})();var Z=["*"],$={root:"p-inputicon"},V=(()=>{class e extends v{name="inputicon";classes=$;static \u0275fac=(()=>{let n;return function(t){return(n||(n=s(e)))(t||e)}})();static \u0275prov=a({token:e,factory:e.\u0275fac})}return e})(),H=new p("INPUTICON_INSTANCE"),G=(()=>{class e extends F{hostName="";styleClass;_componentStyle=o(V);$pcInputIcon=o(H,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=o(r,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=(()=>{let n;return function(t){return(n||(n=s(e)))(t||e)}})();static \u0275cmp=c({type:e,selectors:[["p-inputicon"],["p-inputIcon"]],hostVars:2,hostBindings:function(i,t){i&2&&C(t.cn(t.cx("root"),t.styleClass))},inputs:{hostName:"hostName",styleClass:"styleClass"},features:[g([V,{provide:H,useExisting:e},{provide:D,useExisting:e}]),m([r]),d],ngContentSelectors:Z,decls:1,vars:0,template:function(i,t){i&1&&(u(),h(0))},dependencies:[I,y,N],encapsulation:2,changeDetection:0})}return e})(),Me=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=f({type:e});static \u0275inj=l({imports:[G,y,y]})}return e})();export{K as a,U as b,le as c,G as d,Me as e};
