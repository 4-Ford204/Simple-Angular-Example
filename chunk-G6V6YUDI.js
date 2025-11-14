import{a as pt,b as dt}from"./chunk-CNVTMF22.js";import"./chunk-CWI7EQEM.js";import{c as st,e as he,f as mt,h as De}from"./chunk-T7NVD4OT.js";import{a as Ke,b as bt,c as Be}from"./chunk-4XU7HQGA.js";import{a as ve,b as ie,d as ye}from"./chunk-26SEKSNC.js";import{a as ct,b as ne,c as Q}from"./chunk-73H4HTCP.js";import{E as ee,F as N,L as Fe,O as te,P as D,T as Ae,U as Ve,W as lt,Y as ut,Z as E,ba as xe,i as ge,j as ot,k as Y,l as rt,m as Pe,n as $,r as Ie}from"./chunk-BYI6JMDY.js";import{$ as We,Ab as q,Ba as Ye,Bb as fe,Ca as V,Fb as _e,Gb as tt,Hb as nt,Ia as g,Ib as G,Ja as me,Jb as T,La as M,Ma as c,N as W,O as oe,Oa as k,Ob as it,Rb as at,S as Z,Vb as P,Wa as f,Wb as X,X as I,Xa as le,Y as h,Ya as ce,Z as v,ab as s,bb as d,cb as p,db as b,ea as re,eb as ue,f as qe,fb as pe,gb as j,hb as K,ia as y,ib as B,jb as we,ka as Je,kb as H,lb as et,mb as z,nb as r,oa as Xe,ob as de,pb as be,qb as R,rb as Ee,sb as S,ta as Se,tb as w,u as Ge,ua as se,ub as O,v as Qe,wa as l,xb as J,y as Ue,yb as u,zb as x}from"./chunk-B2FNEUU4.js";import{a as Ze,b as je}from"./chunk-4CLCTAJ7.js";var Ce=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=g({type:n,selectors:[["app-home"]],decls:2,vars:0,template:function(e,t){e&1&&(ue(0,"p"),x(1,"home works!"),pe())},encapsulation:2})};var Me=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=g({type:n,selectors:[["app-footer"]],decls:3,vars:0,consts:[[2,"height","100px"]],template:function(e,t){e&1&&(ue(0,"div",0)(1,"p"),x(2,"footer works!"),pe()())},encapsulation:2})};var ft=`
    .p-avatar {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: dt('avatar.width');
        height: dt('avatar.height');
        font-size: dt('avatar.font.size');
        background: dt('avatar.background');
        color: dt('avatar.color');
        border-radius: dt('avatar.border.radius');
    }

    .p-avatar-image {
        background: transparent;
    }

    .p-avatar-circle {
        border-radius: 50%;
    }

    .p-avatar-circle img {
        border-radius: 50%;
    }

    .p-avatar-icon {
        font-size: dt('avatar.icon.size');
        width: dt('avatar.icon.size');
        height: dt('avatar.icon.size');
    }

    .p-avatar img {
        width: 100%;
        height: 100%;
    }

    .p-avatar-lg {
        width: dt('avatar.lg.width');
        height: dt('avatar.lg.width');
        font-size: dt('avatar.lg.font.size');
    }

    .p-avatar-lg .p-avatar-icon {
        font-size: dt('avatar.lg.icon.size');
        width: dt('avatar.lg.icon.size');
        height: dt('avatar.lg.icon.size');
    }

    .p-avatar-xl {
        width: dt('avatar.xl.width');
        height: dt('avatar.xl.width');
        font-size: dt('avatar.xl.font.size');
    }

    .p-avatar-xl .p-avatar-icon {
        font-size: dt('avatar.xl.icon.size');
        width: dt('avatar.xl.icon.size');
        height: dt('avatar.xl.icon.size');
    }

    .p-avatar-group {
        display: flex;
        align-items: center;
    }

    .p-avatar-group .p-avatar + .p-avatar {
        margin-inline-start: dt('avatar.group.offset');
    }

    .p-avatar-group .p-avatar {
        border: 2px solid dt('avatar.group.border.color');
    }

    .p-avatar-group .p-avatar-lg + .p-avatar-lg {
        margin-inline-start: dt('avatar.lg.group.offset');
    }

    .p-avatar-group .p-avatar-xl + .p-avatar-xl {
        margin-inline-start: dt('avatar.xl.group.offset');
    }
`;var Tt=["*"];function Lt(n,o){if(n&1&&(d(0,"span"),x(1),p()),n&2){let e=r();u(e.cx("label")),l(),q(e.label)}}function kt(n,o){if(n&1&&b(0,"span",4),n&2){let e=r(2);u(e.icon),s("ngClass",e.cx("icon"))}}function St(n,o){if(n&1&&c(0,kt,1,3,"span",3),n&2){let e=r(),t=O(5);s("ngIf",e.icon)("ngIfElse",t)}}function wt(n,o){if(n&1){let e=H();d(0,"img",6),z("error",function(i){I(e);let a=r(2);return h(a.imageError(i))}),p()}if(n&2){let e=r(2);s("src",e.image,se),f("aria-label",e.ariaLabel)}}function Et(n,o){if(n&1&&c(0,wt,1,2,"img",5),n&2){let e=r();s("ngIf",e.image)}}var Pt={root:({instance:n})=>["p-avatar p-component",{"p-avatar-image":n.image!=null,"p-avatar-circle":n.shape==="circle","p-avatar-lg":n.size==="large","p-avatar-xl":n.size==="xlarge"}],label:"p-avatar-label",icon:"p-avatar-icon"},_t=(()=>{class n extends xe{name="avatar";theme=ft;classes=Pt;static \u0275fac=(()=>{let e;return function(i){return(e||(e=y(n)))(i||n)}})();static \u0275prov=W({token:n,factory:n.\u0275fac})}return n})();var ze=(()=>{class n extends ne{label;icon;image;size="normal";shape="square";styleClass;ariaLabel;ariaLabelledBy;onImageError=new k;_componentStyle=Z(_t);imageError(e){this.onImageError.emit(e)}static \u0275fac=(()=>{let e;return function(i){return(e||(e=y(n)))(i||n)}})();static \u0275cmp=g({type:n,selectors:[["p-avatar"]],hostVars:5,hostBindings:function(t,i){t&2&&(f("data-pc-name","avatar")("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledBy),u(i.cn(i.cx("root"),i.styleClass)))},inputs:{label:"label",icon:"icon",image:"image",size:"size",shape:"shape",styleClass:"styleClass",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onImageError:"onImageError"},features:[_e([_t]),M],ngContentSelectors:Tt,decls:6,vars:2,consts:[["iconTemplate",""],["imageTemplate",""],[3,"class",4,"ngIf","ngIfElse"],[3,"class","ngClass",4,"ngIf","ngIfElse"],[3,"ngClass"],[3,"src","error",4,"ngIf"],[3,"error","src"]],template:function(t,i){if(t&1&&(de(),be(0),c(1,Lt,2,3,"span",2)(2,St,1,2,"ng-template",null,0,T)(4,Et,1,1,"ng-template",null,1,T)),t&2){let a=O(3);l(),s("ngIf",i.label)("ngIfElse",a)}},dependencies:[$,ge,Y,E],encapsulation:2,changeDetection:0})}return n})(),It=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=me({type:n});static \u0275inj=oe({imports:[ze,E,E]})}return n})();var Ft=["data-p-icon","angle-down"],ht=(()=>{class n extends Q{static \u0275fac=(()=>{let e;return function(i){return(e||(e=y(n)))(i||n)}})();static \u0275cmp=g({type:n,selectors:[["","data-p-icon","angle-down"]],features:[M],attrs:Ft,decls:1,vars:0,consts:[["d","M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z","fill","currentColor"]],template:function(t,i){t&1&&(v(),j(0,"path",0))},encapsulation:2})}return n})();var At=["data-p-icon","angle-right"],xt=(()=>{class n extends Q{static \u0275fac=(()=>{let e;return function(i){return(e||(e=y(n)))(i||n)}})();static \u0275cmp=g({type:n,selectors:[["","data-p-icon","angle-right"]],features:[M],attrs:At,decls:1,vars:0,consts:[["d","M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z","fill","currentColor"]],template:function(t,i){t&1&&(v(),j(0,"path",0))},encapsulation:2})}return n})();var Vt=["data-p-icon","bars"],vt=(()=>{class n extends Q{static \u0275fac=(()=>{let e;return function(i){return(e||(e=y(n)))(i||n)}})();static \u0275cmp=g({type:n,selectors:[["","data-p-icon","bars"]],features:[M],attrs:Vt,decls:1,vars:0,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M13.3226 3.6129H0.677419C0.497757 3.6129 0.325452 3.54152 0.198411 3.41448C0.0713707 3.28744 0 3.11514 0 2.93548C0 2.75581 0.0713707 2.58351 0.198411 2.45647C0.325452 2.32943 0.497757 2.25806 0.677419 2.25806H13.3226C13.5022 2.25806 13.6745 2.32943 13.8016 2.45647C13.9286 2.58351 14 2.75581 14 2.93548C14 3.11514 13.9286 3.28744 13.8016 3.41448C13.6745 3.54152 13.5022 3.6129 13.3226 3.6129ZM13.3226 7.67741H0.677419C0.497757 7.67741 0.325452 7.60604 0.198411 7.479C0.0713707 7.35196 0 7.17965 0 6.99999C0 6.82033 0.0713707 6.64802 0.198411 6.52098C0.325452 6.39394 0.497757 6.32257 0.677419 6.32257H13.3226C13.5022 6.32257 13.6745 6.39394 13.8016 6.52098C13.9286 6.64802 14 6.82033 14 6.99999C14 7.17965 13.9286 7.35196 13.8016 7.479C13.6745 7.60604 13.5022 7.67741 13.3226 7.67741ZM0.677419 11.7419H13.3226C13.5022 11.7419 13.6745 11.6706 13.8016 11.5435C13.9286 11.4165 14 11.2442 14 11.0645C14 10.8848 13.9286 10.7125 13.8016 10.5855C13.6745 10.4585 13.5022 10.3871 13.3226 10.3871H0.677419C0.497757 10.3871 0.325452 10.4585 0.198411 10.5855C0.0713707 10.7125 0 10.8848 0 11.0645C0 11.2442 0.0713707 11.4165 0.198411 11.5435C0.325452 11.6706 0.497757 11.7419 0.677419 11.7419Z","fill","currentColor"]],template:function(t,i){t&1&&(v(),j(0,"path",0))},encapsulation:2})}return n})();var yt=`
    .p-menubar {
        display: flex;
        align-items: center;
        background: dt('menubar.background');
        border: 1px solid dt('menubar.border.color');
        border-radius: dt('menubar.border.radius');
        color: dt('menubar.color');
        padding: dt('menubar.padding');
        gap: dt('menubar.gap');
    }

    .p-menubar-start,
    .p-megamenu-end {
        display: flex;
        align-items: center;
    }

    .p-menubar-root-list,
    .p-menubar-submenu {
        display: flex;
        margin: 0;
        padding: 0;
        list-style: none;
        outline: 0 none;
    }

    .p-menubar-root-list {
        align-items: center;
        flex-wrap: wrap;
        gap: dt('menubar.gap');
    }

    .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content {
        border-radius: dt('menubar.base.item.border.radius');
    }

    .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
        padding: dt('menubar.base.item.padding');
    }

    .p-menubar-item-content {
        transition:
            background dt('menubar.transition.duration'),
            color dt('menubar.transition.duration');
        border-radius: dt('menubar.item.border.radius');
        color: dt('menubar.item.color');
    }

    .p-menubar-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('menubar.item.padding');
        gap: dt('menubar.item.gap');
        user-select: none;
        outline: 0 none;
    }

    .p-menubar-item-label {
        line-height: 1;
    }

    .p-menubar-item-icon {
        color: dt('menubar.item.icon.color');
    }

    .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.color');
        margin-left: auto;
        font-size: dt('menubar.submenu.icon.size');
        width: dt('menubar.submenu.icon.size');
        height: dt('menubar.submenu.icon.size');
    }

    .p-menubar-submenu .p-menubar-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-menubar-item.p-focus > .p-menubar-item-content {
        color: dt('menubar.item.focus.color');
        background: dt('menubar.item.focus.background');
    }

    .p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-item-icon {
        color: dt('menubar.item.icon.focus.color');
    }

    .p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.focus.color');
    }

    .p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover {
        color: dt('menubar.item.focus.color');
        background: dt('menubar.item.focus.background');
    }

    .p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-item-icon {
        color: dt('menubar.item.icon.focus.color');
    }

    .p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.focus.color');
    }

    .p-menubar-item-active > .p-menubar-item-content {
        color: dt('menubar.item.active.color');
        background: dt('menubar.item.active.background');
    }

    .p-menubar-item-active > .p-menubar-item-content .p-menubar-item-icon {
        color: dt('menubar.item.icon.active.color');
    }

    .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.active.color');
    }

    .p-menubar-submenu {
        display: none;
        position: absolute;
        min-width: 12.5rem;
        z-index: 1;
        background: dt('menubar.submenu.background');
        border: 1px solid dt('menubar.submenu.border.color');
        border-radius: dt('menubar.submenu.border.radius');
        box-shadow: dt('menubar.submenu.shadow');
        color: dt('menubar.submenu.color');
        flex-direction: column;
        padding: dt('menubar.submenu.padding');
        gap: dt('menubar.submenu.gap');
    }

    .p-menubar-submenu .p-menubar-separator {
        border-block-start: 1px solid dt('menubar.separator.border.color');
    }

    .p-menubar-submenu .p-menubar-item {
        position: relative;
    }

    .p-menubar-submenu > .p-menubar-item-active > .p-menubar-submenu {
        display: block;
        left: 100%;
        top: 0;
    }

    .p-menubar-end {
        margin-left: auto;
        align-self: center;
    }

    .p-menubar-end:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-menubar-button {
        display: none;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        width: dt('menubar.mobile.button.size');
        height: dt('menubar.mobile.button.size');
        position: relative;
        color: dt('menubar.mobile.button.color');
        border: 0 none;
        background: transparent;
        border-radius: dt('menubar.mobile.button.border.radius');
        transition:
            background dt('menubar.transition.duration'),
            color dt('menubar.transition.duration'),
            outline-color dt('menubar.transition.duration');
        outline-color: transparent;
    }

    .p-menubar-button:hover {
        color: dt('menubar.mobile.button.hover.color');
        background: dt('menubar.mobile.button.hover.background');
    }

    .p-menubar-button:focus-visible {
        box-shadow: dt('menubar.mobile.button.focus.ring.shadow');
        outline: dt('menubar.mobile.button.focus.ring.width') dt('menubar.mobile.button.focus.ring.style') dt('menubar.mobile.button.focus.ring.color');
        outline-offset: dt('menubar.mobile.button.focus.ring.offset');
    }

    .p-menubar-mobile {
        position: relative;
    }

    .p-menubar-mobile .p-menubar-button {
        display: flex;
    }

    .p-menubar-mobile .p-menubar-root-list {
        position: absolute;
        display: none;
        width: 100%;
        flex-direction: column;
        top: 100%;
        left: 0;
        z-index: 1;
        padding: dt('menubar.submenu.padding');
        background: dt('menubar.submenu.background');
        border: 1px solid dt('menubar.submenu.border.color');
        box-shadow: dt('menubar.submenu.shadow');
        border-radius: dt('menubar.submenu.border.radius');
        gap: dt('menubar.submenu.gap');
    }

    .p-menubar-mobile .p-menubar-root-list:dir(rtl) {
        left: auto;
        right: 0;
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
        padding: dt('menubar.item.padding');
    }

    .p-menubar-mobile-active .p-menubar-root-list {
        display: flex;
    }

    .p-menubar-mobile .p-menubar-root-list .p-menubar-item {
        width: 100%;
        position: static;
    }

    .p-menubar-mobile .p-menubar-root-list .p-menubar-separator {
        border-block-start: 1px solid dt('menubar.separator.border.color');
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon {
        margin-left: auto;
        transition: transform 0.2s;
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon:dir(rtl),
    .p-menubar-mobile .p-menubar-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
        transform: rotate(-180deg);
    }

    .p-menubar-mobile .p-menubar-submenu .p-menubar-submenu-icon {
        transition: transform 0.2s;
        transform: rotate(90deg);
    }

    .p-menubar-mobile .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
        transform: rotate(-90deg);
    }

    .p-menubar-mobile .p-menubar-submenu {
        width: 100%;
        position: static;
        box-shadow: none;
        border: 0 none;
        padding-inline-start: dt('menubar.submenu.mobile.indent');
        padding-inline-end: 0;
    }
`;var Ct=(n,o)=>({instance:n,processedItem:o}),Bt=()=>({exact:!1}),Ht=(n,o)=>({$implicit:n,root:o});function zt(n,o){if(n&1&&b(0,"li",6),n&2){let e=r().$implicit,t=r();J(t.getItemProp(e,"style")),u(t.cn(t.cx("separator"),e==null?null:e.styleClass)),f("id",t.getItemId(e))("data-pc-section","separator")}}function Rt(n,o){if(n&1&&b(0,"span"),n&2){let e=r(4).$implicit,t=r();J(t.getItemProp(e,"iconStyle")),u(t.cn(t.cx("itemIcon"),t.getItemProp(e,"icon"))),f("data-pc-section","icon")("tabindex",-1)}}function Ot(n,o){if(n&1&&(d(0,"span",17),x(1),p()),n&2){let e=r(4).$implicit,t=r();u(t.cx("itemLabel")),s("id",t.getItemLabelId(e)),f("data-pc-section","label"),l(),fe(" ",t.getItemLabel(e)," ")}}function $t(n,o){if(n&1&&b(0,"span",18),n&2){let e=r(4).$implicit,t=r();u(t.cx("itemLabel")),s("innerHTML",t.getItemLabel(e),Se)("id",t.getItemLabelId(e)),f("data-pc-section","label")}}function Nt(n,o){if(n&1&&b(0,"p-badge",19),n&2){let e=r(4).$implicit,t=r();u(t.getItemProp(e,"badgeStyleClass")),s("value",t.getItemProp(e,"badge"))}}function Zt(n,o){if(n&1&&(v(),b(0,"svg",23)),n&2){let e=r(7);u(e.cx("submenuIcon")),f("data-pc-section","submenuicon")}}function jt(n,o){if(n&1&&(v(),b(0,"svg",24)),n&2){let e=r(7);u(e.cx("submenuIcon")),f("data-pc-section","submenuicon")}}function qt(n,o){if(n&1&&(K(0),c(1,Zt,1,3,"svg",21)(2,jt,1,3,"svg",22),B()),n&2){let e=r(6);l(),s("ngIf",e.root),l(),s("ngIf",!e.root)}}function Gt(n,o){}function Qt(n,o){n&1&&c(0,Gt,0,0,"ng-template",25),n&2&&s("data-pc-section","submenuicon")}function Ut(n,o){if(n&1&&(K(0),c(1,qt,3,2,"ng-container",9)(2,Qt,1,1,null,20),B()),n&2){let e=r(5);l(),s("ngIf",!e.submenuiconTemplate),l(),s("ngTemplateOutlet",e.submenuiconTemplate)}}function Wt(n,o){if(n&1&&(d(0,"a",13),c(1,Rt,1,6,"span",14)(2,Ot,2,5,"span",15)(3,$t,1,5,"ng-template",null,1,T)(5,Nt,1,3,"p-badge",16)(6,Ut,3,2,"ng-container",9),p()),n&2){let e=O(4),t=r(3).$implicit,i=r();u(i.cx("itemLink")),f("href",i.getItemProp(t,"url"),se)("data-automationid",i.getItemProp(t,"automationId"))("data-pc-section","action")("target",i.getItemProp(t,"target"))("tabindex",-1),l(),s("ngIf",i.getItemProp(t,"icon")),l(),s("ngIf",i.getItemProp(t,"escape"))("ngIfElse",e),l(3),s("ngIf",i.getItemProp(t,"badge")),l(),s("ngIf",i.isItemGroup(t))}}function Jt(n,o){if(n&1&&b(0,"span",29),n&2){let e=r(4).$implicit,t=r();u(t.cn(t.cx("itemIcon"),t.getItemProp(e,"icon"))),s("ngStyle",t.getItemProp(e,"iconStyle")),f("data-pc-section","icon")("tabindex",-1)}}function Xt(n,o){if(n&1&&(d(0,"span"),x(1),p()),n&2){let e=r(4).$implicit,t=r();u(t.cx("itemLabel")),l(),q(t.getItemLabel(e))}}function Yt(n,o){if(n&1&&b(0,"span",30),n&2){let e=r(4).$implicit,t=r();u(t.cx("itemLabel")),s("innerHTML",t.getItemLabel(e),Se),f("data-pc-section","label")}}function en(n,o){if(n&1&&b(0,"p-badge",19),n&2){let e=r(4).$implicit,t=r();u(t.getItemProp(e,"badgeStyleClass")),s("value",t.getItemProp(e,"badge"))}}function tn(n,o){if(n&1&&(v(),b(0,"svg",23)),n&2){let e=r(7);u(e.cx("submenuIcon")),f("data-pc-section","submenuicon")}}function nn(n,o){if(n&1&&(v(),b(0,"svg",24)),n&2){let e=r(7);u(e.cx("submenuIcon")),f("data-pc-section","submenuicon")}}function an(n,o){if(n&1&&(K(0),c(1,tn,1,3,"svg",21)(2,nn,1,3,"svg",22),B()),n&2){let e=r(6);l(),s("ngIf",e.root),l(),s("ngIf",!e.root)}}function on(n,o){}function rn(n,o){n&1&&c(0,on,0,0,"ng-template",25),n&2&&s("data-pc-section","submenuicon")}function sn(n,o){if(n&1&&(K(0),c(1,an,3,2,"ng-container",9)(2,rn,1,1,null,20),B()),n&2){let e=r(5);l(),s("ngIf",!e.submenuiconTemplate),l(),s("ngTemplateOutlet",e.submenuiconTemplate)}}function mn(n,o){if(n&1&&(d(0,"a",26),c(1,Jt,1,5,"span",27)(2,Xt,2,3,"span",28)(3,Yt,1,4,"ng-template",null,2,T)(5,en,1,3,"p-badge",16)(6,sn,3,2,"ng-container",9),p()),n&2){let e=O(4),t=r(3).$implicit,i=r();u(i.cx("itemLink")),s("routerLink",i.getItemProp(t,"routerLink"))("queryParams",i.getItemProp(t,"queryParams"))("routerLinkActive","p-menubar-item-link-active")("routerLinkActiveOptions",i.getItemProp(t,"routerLinkActiveOptions")||tt(21,Bt))("target",i.getItemProp(t,"target"))("fragment",i.getItemProp(t,"fragment"))("queryParamsHandling",i.getItemProp(t,"queryParamsHandling"))("preserveFragment",i.getItemProp(t,"preserveFragment"))("skipLocationChange",i.getItemProp(t,"skipLocationChange"))("replaceUrl",i.getItemProp(t,"replaceUrl"))("state",i.getItemProp(t,"state")),f("data-automationid",i.getItemProp(t,"automationId"))("tabindex",-1)("data-pc-section","action"),l(),s("ngIf",i.getItemProp(t,"icon")),l(),s("ngIf",i.getItemProp(t,"escape"))("ngIfElse",e),l(3),s("ngIf",i.getItemProp(t,"badge")),l(),s("ngIf",i.isItemGroup(t))}}function ln(n,o){if(n&1&&(K(0),c(1,Wt,7,12,"a",11)(2,mn,7,22,"a",12),B()),n&2){let e=r(2).$implicit,t=r();l(),s("ngIf",!t.getItemProp(e,"routerLink")),l(),s("ngIf",t.getItemProp(e,"routerLink"))}}function cn(n,o){}function un(n,o){n&1&&c(0,cn,0,0,"ng-template")}function pn(n,o){if(n&1&&(K(0),c(1,un,1,0,null,31),B()),n&2){let e=r(2).$implicit,t=r();l(),s("ngTemplateOutlet",t.itemTemplate)("ngTemplateOutletContext",G(2,Ht,e.item,t.root))}}function dn(n,o){if(n&1){let e=H();d(0,"ul",32),z("itemClick",function(i){I(e);let a=r(3);return h(a.itemClick.emit(i))})("itemMouseEnter",function(i){I(e);let a=r(3);return h(a.onItemMouseEnter(i))}),p()}if(n&2){let e=r(2).$implicit,t=r();s("itemTemplate",t.itemTemplate)("items",e.items)("mobileActive",t.mobileActive)("autoDisplay",t.autoDisplay)("menuId",t.menuId)("activeItemPath",t.activeItemPath)("focusedItemId",t.focusedItemId)("level",t.level+1)("inlineStyles",t.sx("submenu",!0,G(10,Ct,t,e))),f("aria-labelledby",t.getItemLabelId(e))}}function bn(n,o){if(n&1){let e=H();d(0,"li",7,0)(2,"div",8),z("click",function(i){I(e);let a=r().$implicit,m=r();return h(m.onItemClick(i,a))})("mouseenter",function(i){I(e);let a=r().$implicit,m=r();return h(m.onItemMouseEnter({$event:i,processedItem:a}))}),c(3,ln,3,2,"ng-container",9)(4,pn,2,5,"ng-container",9),p(),c(5,dn,1,13,"ul",10),p()}if(n&2){let e=r(),t=e.$implicit,i=e.index,a=r();J(a.getItemProp(t,"style")),u(a.cn(a.cx("item",G(22,Ct,a,t)),a.getItemProp(t,"styleClass"))),s("tooltipOptions",a.getItemProp(t,"tooltipOptions")),f("id",a.getItemId(t))("data-pc-section","menuitem")("data-p-highlight",a.isItemActive(t))("data-p-focused",a.isItemFocused(t))("data-p-disabled",a.isItemDisabled(t))("aria-label",a.getItemLabel(t))("aria-disabled",a.isItemDisabled(t)||void 0)("aria-haspopup",a.isItemGroup(t)&&!a.getItemProp(t,"to")?"menu":void 0)("aria-expanded",a.isItemGroup(t)?a.isItemActive(t):void 0)("aria-setsize",a.getAriaSetSize())("aria-posinset",a.getAriaPosInset(i)),l(2),u(a.cx("itemContent")),f("data-pc-section","content"),l(),s("ngIf",!a.itemTemplate),l(),s("ngIf",a.itemTemplate),l(),s("ngIf",a.isItemVisible(t)&&a.isItemGroup(t))}}function fn(n,o){if(n&1&&c(0,zt,1,6,"li",4)(1,bn,6,25,"li",5),n&2){let e=o.$implicit,t=r();s("ngIf",t.isItemVisible(e)&&t.getItemProp(e,"separator")),l(),s("ngIf",t.isItemVisible(e)&&!t.getItemProp(e,"separator"))}}var _n=["start"],gn=["end"],In=["item"],hn=["menuicon"],xn=["submenuicon"],vn=["menubutton"],yn=["rootmenu"],Cn=["*"];function Mn(n,o){n&1&&we(0)}function Tn(n,o){if(n&1&&(d(0,"div"),c(1,Mn,1,0,"ng-container",7),p()),n&2){let e=r();u(e.cx("start")),l(),s("ngTemplateOutlet",e.startTemplate||e._startTemplate)}}function Ln(n,o){n&1&&(v(),b(0,"svg",10))}function kn(n,o){}function Sn(n,o){n&1&&c(0,kn,0,0,"ng-template")}function wn(n,o){if(n&1){let e=H();d(0,"a",8,2),z("click",function(i){I(e);let a=r();return h(a.menuButtonClick(i))})("keydown",function(i){I(e);let a=r();return h(a.menuButtonKeydown(i))}),c(2,Ln,1,0,"svg",9)(3,Sn,1,0,null,7),p()}if(n&2){let e=r();u(e.cx("button")),f("aria-haspopup",!!(e.model.length&&e.model.length>0))("aria-expanded",e.mobileActive)("aria-controls",e.id)("aria-label",e.config.translation.aria.navigation)("data-pc-section","button"),l(2),s("ngIf",!e.menuIconTemplate&&!e._menuIconTemplate),l(),s("ngTemplateOutlet",e.menuIconTemplate||e._menuIconTemplate)}}function En(n,o){n&1&&we(0)}function Pn(n,o){if(n&1&&(d(0,"div"),c(1,En,1,0,"ng-container",7),p()),n&2){let e=r();u(e.cx("end")),l(),s("ngTemplateOutlet",e.endTemplate||e._endTemplate)}}function Dn(n,o){if(n&1&&(d(0,"div"),be(1),p()),n&2){let e=r();u(e.cx("end"))}}var Fn={submenu:({instance:n,processedItem:o})=>({display:n.isItemActive(o)?"flex":"none"})},An={root:({instance:n})=>["p-menubar p-component",{"p-menubar-mobile":n.queryMatches,"p-menubar-mobile-active":n.mobileActive}],start:"p-menubar-start",button:"p-menubar-button",rootList:"p-menubar-root-list",item:({instance:n,processedItem:o})=>["p-menubar-item",{"p-menubar-item-active":n.isItemActive(o),"p-focus":n.isItemFocused(o),"p-disabled":n.isItemDisabled(o)}],itemContent:"p-menubar-item-content",itemLink:"p-menubar-item-link",itemIcon:"p-menubar-item-icon",itemLabel:"p-menubar-item-label",submenuIcon:"p-menubar-submenu-icon",submenu:"p-menubar-submenu",separator:"p-menubar-separator",end:"p-menubar-end"},Re=(()=>{class n extends xe{name="menubar";theme=yt;classes=An;inlineStyles=Fn;static \u0275fac=(()=>{let e;return function(i){return(e||(e=y(n)))(i||n)}})();static \u0275prov=W({token:n,factory:n.\u0275fac})}return n})();var Oe=(()=>{class n{autoHide;autoHideDelay;mouseLeaves=new qe;mouseLeft$=this.mouseLeaves.pipe(Ue(()=>Ge(this.autoHideDelay)),Qe(e=>this.autoHide&&e));static \u0275fac=function(t){return new(t||n)};static \u0275prov=W({token:n,factory:n.\u0275fac})}return n})(),Vn=(()=>{class n extends ne{items;itemTemplate;root=!1;autoZIndex=!0;baseZIndex=0;mobileActive;autoDisplay;menuId;ariaLabel;ariaLabelledBy;level=0;focusedItemId;activeItemPath;inlineStyles;submenuiconTemplate;itemClick=new k;itemMouseEnter=new k;menuFocus=new k;menuBlur=new k;menuKeydown=new k;mouseLeaveSubscriber;menubarService=Z(Oe);_componentStyle=Z(Re);ngOnInit(){super.ngOnInit(),this.mouseLeaveSubscriber=this.menubarService.mouseLeft$.subscribe(()=>{this.cd.markForCheck()})}onItemClick(e,t){this.getItemProp(t,"command",{originalEvent:e,item:t.item}),this.itemClick.emit({originalEvent:e,processedItem:t,isFocus:!0})}getItemProp(e,t,i=null){return e&&e.item?Ve(e.item[t],i):void 0}getItemId(e){return e.item&&e.item?.id?e.item.id:`${this.menuId}_${e.key}`}getItemLabelId(e){return`${this.menuId}_${e.key}_label`}getItemLabel(e){return this.getItemProp(e,"label")}isItemVisible(e){return this.getItemProp(e,"visible")!==!1}isItemActive(e){return this.activeItemPath?this.activeItemPath.some(t=>t.key===e.key):!1}isItemDisabled(e){return this.getItemProp(e,"disabled")}isItemFocused(e){return this.focusedItemId===this.getItemId(e)}isItemGroup(e){return D(e.items)}getAriaSetSize(){return this.items.filter(e=>this.isItemVisible(e)&&!this.getItemProp(e,"separator")).length}getAriaPosInset(e){return e-this.items.slice(0,e).filter(t=>this.isItemVisible(t)&&this.getItemProp(t,"separator")).length+1}onItemMouseEnter(e){if(this.autoDisplay){let{event:t,processedItem:i}=e;this.itemMouseEnter.emit({originalEvent:t,processedItem:i})}}ngOnDestroy(){this.mouseLeaveSubscriber?.unsubscribe(),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=y(n)))(i||n)}})();static \u0275cmp=g({type:n,selectors:[["p-menubarSub"],["p-menubarsub"],["","pMenubarSub",""]],hostAttrs:["data-pc-section","menu","role","menubar"],hostVars:6,hostBindings:function(t,i){t&2&&(et("id",i.root?i.menuId:null),f("aria-activedescendant",i.focusedItemId),J(i.inlineStyles),u(i.level===0?i.cx("rootList"):i.cx("submenu")))},inputs:{items:"items",itemTemplate:"itemTemplate",root:[2,"root","root",P],autoZIndex:[2,"autoZIndex","autoZIndex",P],baseZIndex:[2,"baseZIndex","baseZIndex",X],mobileActive:[2,"mobileActive","mobileActive",P],autoDisplay:[2,"autoDisplay","autoDisplay",P],menuId:"menuId",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",level:[2,"level","level",X],focusedItemId:"focusedItemId",activeItemPath:"activeItemPath",inlineStyles:"inlineStyles",submenuiconTemplate:"submenuiconTemplate"},outputs:{itemClick:"itemClick",itemMouseEnter:"itemMouseEnter",menuFocus:"menuFocus",menuBlur:"menuBlur",menuKeydown:"menuKeydown"},features:[M],decls:1,vars:1,consts:[["listItem",""],["htmlLabel",""],["htmlRouteLabel",""],["ngFor","",3,"ngForOf"],["role","separator",3,"style","class",4,"ngIf"],["role","menuitem","pTooltip","",3,"style","class","tooltipOptions",4,"ngIf"],["role","separator"],["role","menuitem","pTooltip","",3,"tooltipOptions"],[3,"click","mouseenter"],[4,"ngIf"],["pMenubarSub","",3,"itemTemplate","items","mobileActive","autoDisplay","menuId","activeItemPath","focusedItemId","level","inlineStyles","itemClick","itemMouseEnter",4,"ngIf"],["pRipple","",3,"class",4,"ngIf"],["pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","class","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state",4,"ngIf"],["pRipple",""],[3,"class","style",4,"ngIf"],[3,"class","id",4,"ngIf","ngIfElse"],[3,"class","value",4,"ngIf"],[3,"id"],[3,"innerHTML","id"],[3,"value"],[4,"ngTemplateOutlet"],["data-p-icon","angle-down",3,"class",4,"ngIf"],["data-p-icon","angle-right",3,"class",4,"ngIf"],["data-p-icon","angle-down"],["data-p-icon","angle-right"],[3,"data-pc-section"],["pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state"],[3,"class","ngStyle",4,"ngIf"],[3,"class",4,"ngIf","ngIfElse"],[3,"ngStyle"],[3,"innerHTML"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["pMenubarSub","",3,"itemClick","itemMouseEnter","itemTemplate","items","mobileActive","autoDisplay","menuId","activeItemPath","focusedItemId","level","inlineStyles"]],template:function(t,i){t&1&&c(0,fn,2,2,"ng-template",3),t&2&&s("ngForOf",i.items)},dependencies:[n,$,ot,Y,Pe,rt,De,he,mt,ye,Be,bt,ht,xt,ie,ve,E],encapsulation:2})}return n})(),$e=(()=>{class n extends ne{document;platformId;el;renderer;cd;menubarService;set model(e){this._model=e,this._processedItems=this.createProcessedItems(this._model||[])}get model(){return this._model}styleClass;autoZIndex=!0;baseZIndex=0;autoDisplay=!0;autoHide;breakpoint="960px";autoHideDelay=100;id;ariaLabel;ariaLabelledBy;onFocus=new k;onBlur=new k;menubutton;rootmenu;mobileActive;matchMediaListener;query;queryMatches;outsideClickListener;resizeListener;mouseLeaveSubscriber;dirty=!1;focused=!1;activeItemPath=re([]);number=re(0);focusedItemInfo=re({index:-1,level:0,parentKey:"",item:null});searchValue="";searchTimeout;_processedItems;_componentStyle=Z(Re);_model;get visibleItems(){let e=this.activeItemPath().find(t=>t.key===this.focusedItemInfo().parentKey);return e?e.items:this.processedItems}get processedItems(){return(!this._processedItems||!this._processedItems.length)&&(this._processedItems=this.createProcessedItems(this.model||[])),this._processedItems}get focusedItemId(){let e=this.focusedItemInfo();return e.item&&e.item?.id?e.item.id:e.index!==-1?`${this.id}${D(e.parentKey)?"_"+e.parentKey:""}_${e.index}`:null}constructor(e,t,i,a,m,_){super(),this.document=e,this.platformId=t,this.el=i,this.renderer=a,this.cd=m,this.menubarService=_,it(()=>{let C=this.activeItemPath();D(C)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())})}ngOnInit(){super.ngOnInit(),this.bindMatchMediaListener(),this.menubarService.autoHide=this.autoHide,this.menubarService.autoHideDelay=this.autoHideDelay,this.mouseLeaveSubscriber=this.menubarService.mouseLeft$.subscribe(()=>{this.hide()}),this.id=this.id||ct("pn_id_")}startTemplate;endTemplate;itemTemplate;menuIconTemplate;submenuIconTemplate;templates;_startTemplate;_endTemplate;_itemTemplate;_menuIconTemplate;_submenuIconTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"start":this._startTemplate=e.template;break;case"end":this._endTemplate=e.template;break;case"menuicon":this._menuIconTemplate=e.template;break;case"submenuicon":this._submenuIconTemplate=e.template;break;case"item":this._itemTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}createProcessedItems(e,t=0,i={},a=""){let m=[];return e&&e.forEach((_,C)=>{let L=(a!==""?a+"_":"")+C,A={item:_,index:C,level:t,key:L,parent:i,parentKey:a};A.items=this.createProcessedItems(_.items,t+1,A,L),m.push(A)}),m}bindMatchMediaListener(){if(Ie(this.platformId)&&!this.matchMediaListener){let e=window.matchMedia(`(max-width: ${this.breakpoint})`);this.query=e,this.queryMatches=e.matches,this.matchMediaListener=()=>{this.queryMatches=e.matches,this.mobileActive=!1,this.cd.markForCheck()},e.addEventListener("change",this.matchMediaListener)}}unbindMatchMediaListener(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)}getItemProp(e,t){return e?Ve(e[t]):void 0}menuButtonClick(e){this.toggle(e)}menuButtonKeydown(e){(e.code==="Enter"||e.code==="Space")&&this.menuButtonClick(e)}onItemClick(e){let{originalEvent:t,processedItem:i}=e,a=this.isProcessedItemGroup(i),m=te(i.parent);if(this.isSelected(i)){let{index:C,key:L,level:A,parentKey:ke,item:ae}=i;this.activeItemPath.set(this.activeItemPath().filter(U=>L!==U.key&&L.startsWith(U.key))),this.focusedItemInfo.set({index:C,level:A,parentKey:ke,item:ae}),this.dirty=!m,N(this.rootmenu?.el.nativeElement)}else if(a)this.onItemChange(e);else{let C=m?i:this.activeItemPath().find(L=>L.parentKey==="");this.hide(t),this.changeFocusedItemIndex(t,C?C.index:-1),this.mobileActive=!1,N(this.rootmenu?.el.nativeElement)}}onItemMouseEnter(e){Fe()?this.onItemChange({event:e,processedItem:e.processedItem,focus:this.autoDisplay},"hover"):this.dirty&&this.onItemChange(e,"hover")}onMouseLeave(e){let t=this.menubarService.autoHide,i=this.menubarService.autoHideDelay;t&&setTimeout(()=>{this.menubarService.mouseLeaves.next(!0)},i)}changeFocusedItemIndex(e,t){let i=this.findVisibleItem(t);if(this.focusedItemInfo().index!==t){let a=this.focusedItemInfo();this.focusedItemInfo.set(je(Ze({},a),{item:i.item,index:t})),this.scrollInView()}}scrollInView(e=-1){let t=e!==-1?`${this.id}_${e}`:this.focusedItemId,i=ee(this.rootmenu?.el.nativeElement,`li[id="${t}"]`);i&&i.scrollIntoView&&i.scrollIntoView({block:"nearest",inline:"nearest"})}onItemChange(e,t){let{processedItem:i,isFocus:a}=e;if(te(i))return;let{index:m,key:_,level:C,parentKey:L,items:A,item:ke}=i,ae=D(A),U=this.activeItemPath().filter(Ne=>Ne.parentKey!==L&&Ne.parentKey!==_);ae&&U.push(i),this.focusedItemInfo.set({index:m,level:C,parentKey:L,item:ke}),ae&&(this.dirty=!0),a&&N(this.rootmenu?.el.nativeElement),!(t==="hover"&&this.queryMatches)&&this.activeItemPath.set(U)}toggle(e){this.mobileActive?(this.mobileActive=!1,Ke.clear(this.rootmenu?.el.nativeElement),this.hide()):(this.mobileActive=!0,Ke.set("menu",this.rootmenu?.el.nativeElement,this.config.zIndex.menu),setTimeout(()=>{this.show()},0)),this.bindOutsideClickListener(),e.preventDefault()}hide(e,t){this.mobileActive&&setTimeout(()=>{N(this.menubutton?.nativeElement)},0),this.activeItemPath.set([]),this.focusedItemInfo.set({index:-1,level:0,parentKey:"",item:null}),t&&N(this.rootmenu?.el.nativeElement),this.dirty=!1}show(){let e=this.findVisibleItem(this.findFirstFocusedItemIndex());this.focusedItemInfo.set({index:this.findFirstFocusedItemIndex(),level:0,parentKey:"",item:e?.item}),N(this.rootmenu?.el.nativeElement)}onMenuFocus(e){this.focused=!0;let t=this.findVisibleItem(this.findFirstFocusedItemIndex()),i=this.focusedItemInfo().index!==-1?this.focusedItemInfo():{index:this.findFirstFocusedItemIndex(),level:0,parentKey:"",item:t?.item};this.focusedItemInfo.set(i),this.onFocus.emit(e)}onMenuBlur(e){this.focused=!1,this.focusedItemInfo.set({index:-1,level:0,parentKey:"",item:null}),this.searchValue="",this.dirty=!1,this.onBlur.emit(e)}onKeyDown(e){let t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!t&&lt(e.key)&&this.searchItems(e,e.key);break}}findVisibleItem(e){return D(this.visibleItems)?this.visibleItems[e]:null}findFirstFocusedItemIndex(){let e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e}findFirstItemIndex(){return this.visibleItems.findIndex(e=>this.isValidItem(e))}findSelectedItemIndex(){return this.visibleItems.findIndex(e=>this.isValidSelectedItem(e))}isProcessedItemGroup(e){return e&&D(e.items)}isSelected(e){return this.activeItemPath().some(t=>t.key===e.key)}isValidSelectedItem(e){return this.isValidItem(e)&&this.isSelected(e)}isValidItem(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)}isItemDisabled(e){return this.getItemProp(e,"disabled")}isItemSeparator(e){return this.getItemProp(e,"separator")}isItemMatched(e){return this.isValidItem(e)&&this.getProccessedItemLabel(e).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase())}isProccessedItemGroup(e){return e&&D(e.items)}searchItems(e,t){this.searchValue=(this.searchValue||"")+t;let i=-1,a=!1;return this.focusedItemInfo().index!==-1?(i=this.visibleItems.slice(this.focusedItemInfo().index).findIndex(m=>this.isItemMatched(m)),i=i===-1?this.visibleItems.slice(0,this.focusedItemInfo().index).findIndex(m=>this.isItemMatched(m)):i+this.focusedItemInfo().index):i=this.visibleItems.findIndex(m=>this.isItemMatched(m)),i!==-1&&(a=!0),i===-1&&this.focusedItemInfo().index===-1&&(i=this.findFirstFocusedItemIndex()),i!==-1&&this.changeFocusedItemIndex(e,i),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),a}getProccessedItemLabel(e){return e?this.getItemLabel(e.item):void 0}getItemLabel(e){return this.getItemProp(e,"label")}onArrowDownKey(e){let t=this.visibleItems[this.focusedItemInfo().index];if(t?te(t.parent):null)this.isProccessedItemGroup(t)&&(this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo.set({index:-1,parentKey:t.key,item:t.item}),this.onArrowRightKey(e));else{let a=this.focusedItemInfo().index!==-1?this.findNextItemIndex(this.focusedItemInfo().index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,a),e.preventDefault()}}onArrowRightKey(e){let t=this.visibleItems[this.focusedItemInfo().index];if(t?this.activeItemPath().find(a=>a.key===t.parentKey):null)this.isProccessedItemGroup(t)&&(this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo.set({index:-1,parentKey:t.key,item:t.item}),this.onArrowDownKey(e));else{let a=this.focusedItemInfo().index!==-1?this.findNextItemIndex(this.focusedItemInfo().index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,a),e.preventDefault()}}onArrowUpKey(e){let t=this.visibleItems[this.focusedItemInfo().index];if(te(t.parent)){if(this.isProccessedItemGroup(t)){this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo.set({index:-1,parentKey:t.key,item:t.item});let m=this.findLastItemIndex();this.changeFocusedItemIndex(e,m)}}else{let a=this.activeItemPath().find(m=>m.key===t.parentKey);if(this.focusedItemInfo().index===0){this.focusedItemInfo.set({index:-1,parentKey:a?a.parentKey:"",item:t.item}),this.searchValue="",this.onArrowLeftKey(e);let m=this.activeItemPath().filter(_=>_.parentKey!==this.focusedItemInfo().parentKey);this.activeItemPath.set(m)}else{let m=this.focusedItemInfo().index!==-1?this.findPrevItemIndex(this.focusedItemInfo().index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,m)}}e.preventDefault()}onArrowLeftKey(e){let t=this.visibleItems[this.focusedItemInfo().index],i=t?this.activeItemPath().find(a=>a.key===t.parentKey):null;if(i){this.onItemChange({originalEvent:e,processedItem:i});let a=this.activeItemPath().filter(m=>m.parentKey!==this.focusedItemInfo().parentKey);this.activeItemPath.set(a),e.preventDefault()}else{let a=this.focusedItemInfo().index!==-1?this.findPrevItemIndex(this.focusedItemInfo().index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,a),e.preventDefault()}}onHomeKey(e){this.changeFocusedItemIndex(e,this.findFirstItemIndex()),e.preventDefault()}onEndKey(e){this.changeFocusedItemIndex(e,this.findLastItemIndex()),e.preventDefault()}onSpaceKey(e){this.onEnterKey(e)}onEscapeKey(e){this.hide(e,!0),this.focusedItemInfo().index=this.findFirstFocusedItemIndex(),e.preventDefault()}onTabKey(e){if(this.focusedItemInfo().index!==-1){let t=this.visibleItems[this.focusedItemInfo().index];!this.isProccessedItemGroup(t)&&this.onItemChange({originalEvent:e,processedItem:t})}this.hide()}onEnterKey(e){if(this.focusedItemInfo().index!==-1){let t=ee(this.rootmenu?.el.nativeElement,`li[id="${`${this.focusedItemId}`}"]`),i=t&&(ee(t,'[data-pc-section="action"]')||ee(t,"a,button"));i?i.click():t&&t.click()}e.preventDefault()}findLastFocusedItemIndex(){let e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e}findLastItemIndex(){return Ae(this.visibleItems,e=>this.isValidItem(e))}findPrevItemIndex(e){let t=e>0?Ae(this.visibleItems.slice(0,e),i=>this.isValidItem(i)):-1;return t>-1?t:e}findNextItemIndex(e){let t=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(i=>this.isValidItem(i)):-1;return t>-1?t+e+1:e}bindResizeListener(){Ie(this.platformId)&&(this.resizeListener||(this.resizeListener=this.renderer.listen(this.document.defaultView,"resize",e=>{Fe()||this.hide(e,!0),this.mobileActive=!1})))}bindOutsideClickListener(){Ie(this.platformId)&&(this.outsideClickListener||(this.outsideClickListener=this.renderer.listen(this.document,"click",e=>{let t=this.rootmenu?.el.nativeElement!==e.target&&!this.rootmenu?.el.nativeElement?.contains(e.target),i=this.mobileActive&&this.menubutton?.nativeElement!==e.target&&!this.menubutton?.nativeElement?.contains(e.target);t&&(i?this.mobileActive=!1:this.hide())})))}unbindOutsideClickListener(){this.outsideClickListener&&(this.outsideClickListener(),this.outsideClickListener=null)}unbindResizeListener(){this.resizeListener&&(this.resizeListener(),this.resizeListener=null)}ngOnDestroy(){this.mouseLeaveSubscriber?.unsubscribe(),this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener(),super.ngOnDestroy()}static \u0275fac=function(t){return new(t||n)(V(We),V(Xe),V(Je),V(Ye),V(at),V(Oe))};static \u0275cmp=g({type:n,selectors:[["p-menubar"]],contentQueries:function(t,i,a){if(t&1&&(R(a,_n,4),R(a,gn,4),R(a,In,4),R(a,hn,4),R(a,xn,4),R(a,ut,4)),t&2){let m;S(m=w())&&(i.startTemplate=m.first),S(m=w())&&(i.endTemplate=m.first),S(m=w())&&(i.itemTemplate=m.first),S(m=w())&&(i.menuIconTemplate=m.first),S(m=w())&&(i.submenuIconTemplate=m.first),S(m=w())&&(i.templates=m)}},viewQuery:function(t,i){if(t&1&&(Ee(vn,5),Ee(yn,5)),t&2){let a;S(a=w())&&(i.menubutton=a.first),S(a=w())&&(i.rootmenu=a.first)}},hostAttrs:["data-pc-section","root","data-pc-name","menubar"],hostVars:2,hostBindings:function(t,i){t&2&&u(i.cn(i.cx("root"),i.styleClass))},inputs:{model:"model",styleClass:"styleClass",autoZIndex:[2,"autoZIndex","autoZIndex",P],baseZIndex:[2,"baseZIndex","baseZIndex",X],autoDisplay:[2,"autoDisplay","autoDisplay",P],autoHide:[2,"autoHide","autoHide",P],breakpoint:"breakpoint",autoHideDelay:[2,"autoHideDelay","autoHideDelay",X],id:"id",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onFocus:"onFocus",onBlur:"onBlur"},features:[_e([Oe,Re]),M],ngContentSelectors:Cn,decls:7,vars:17,consts:[["rootmenu",""],["legacy",""],["menubutton",""],[3,"class",4,"ngIf"],["tabindex","0","role","button",3,"class","click","keydown",4,"ngIf"],["pMenubarSub","","tabindex","0",3,"itemClick","focus","blur","keydown","itemMouseEnter","mouseleave","items","itemTemplate","menuId","root","baseZIndex","autoZIndex","mobileActive","autoDisplay","focusedItemId","submenuiconTemplate","activeItemPath"],[3,"class",4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet"],["tabindex","0","role","button",3,"click","keydown"],["data-p-icon","bars",4,"ngIf"],["data-p-icon","bars"]],template:function(t,i){if(t&1){let a=H();de(),c(0,Tn,2,3,"div",3)(1,wn,4,9,"a",4),d(2,"ul",5,0),z("itemClick",function(_){return I(a),h(i.onItemClick(_))})("focus",function(_){return I(a),h(i.onMenuFocus(_))})("blur",function(_){return I(a),h(i.onMenuBlur(_))})("keydown",function(_){return I(a),h(i.onKeyDown(_))})("itemMouseEnter",function(_){return I(a),h(i.onItemMouseEnter(_))})("mouseleave",function(_){return I(a),h(i.onMouseLeave(_))}),p(),c(4,Pn,2,3,"div",6)(5,Dn,2,2,"ng-template",null,1,T)}if(t&2){let a=O(6);s("ngIf",i.startTemplate||i._startTemplate),l(),s("ngIf",i.model&&i.model.length>0),l(),s("items",i.processedItems)("itemTemplate",i.itemTemplate)("menuId",i.id)("root",!0)("baseZIndex",i.baseZIndex)("autoZIndex",i.autoZIndex)("mobileActive",i.mobileActive)("autoDisplay",i.autoDisplay)("focusedItemId",i.focused?i.focusedItemId:void 0)("submenuiconTemplate",i.submenuIconTemplate||i._submenuIconTemplate)("activeItemPath",i.activeItemPath()),f("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledBy),l(2),s("ngIf",i.endTemplate||i._endTemplate)("ngIfElse",a)}},dependencies:[$,Y,Pe,De,Vn,Be,vt,ie,E],encapsulation:2,changeDetection:0})}return n})(),Mt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=me({type:n});static \u0275inj=oe({imports:[$e,E,E]})}return n})();var Bn=(n,o)=>({"ml-auto":n,"ml-2":o}),Hn=n=>["ml-auto pi",n];function zn(n,o){n&1&&(d(0,"span"),x(1,"SAE"),p())}function Rn(n,o){if(n&1&&b(0,"p-badge",5),n&2){let e=r(),t=e.$implicit,i=e.root;s("ngClass",G(2,Bn,!i,i))("value",t.badge)}}function On(n,o){if(n&1&&(d(0,"span",6),x(1),p()),n&2){let e=r().$implicit;l(),fe(" ",e.shortcut," ")}}function $n(n,o){if(n&1&&b(0,"i",7),n&2){let e=r().root;s("ngClass",nt(1,Hn,e?"pi-angle-down":"pi-angle-right"))}}function Nn(n,o){if(n&1&&(d(0,"a",4)(1,"span"),x(2),p(),le(3,Rn,1,5,"p-badge",5),le(4,On,2,1,"span",6),le(5,$n,1,3,"i",7),p()),n&2){let e=o.$implicit;s("routerLink",e.routerLink),l(2),q(e.label),l(),ce(e.badge?3:-1),l(),ce(e.shortcut?4:-1),l(),ce(e.items?5:-1)}}function Zn(n,o){n&1&&(d(0,"div",8),b(1,"input",9)(2,"p-avatar",10),p())}var Te=class n{items=[{label:"Home",icon:"pi pi-home",routerLink:["/"]},{label:"Sandbox",routerLink:["/sandbox"]},{label:"Projects",icon:"pi pi-search",badge:"3",items:[{label:"Core",icon:"pi pi-bolt",shortcut:"\u2318+S"},{label:"Blocks",icon:"pi pi-server",shortcut:"\u2318+B"},{separator:!0},{label:"UI Kit",icon:"pi pi-pencil",shortcut:"\u2318+U"}]}];static \u0275fac=function(e){return new(e||n)};static \u0275cmp=g({type:n,selectors:[["app-header"]],decls:7,vars:1,consts:[["start",""],["item",""],["end",""],[1,"rounded-none",3,"model"],["pRipple","",1,"flex","items-center","p-menubar-item-link",3,"routerLink"],[3,"ngClass","value"],[1,"ml-auto","border","border-surface","rounded","bg-emphasis","text-muted-color","text-xs","p-1"],[3,"ngClass"],[1,"flex","items-center","gap-2"],["type","text","pInputText","","placeholder","Search",1,"w-36"],["image","https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m3vzr2sm65rp4f.webp","shape","circle"]],template:function(e,t){e&1&&(d(0,"p-menubar",3),c(1,zn,2,0,"ng-template",null,0,T)(3,Nn,6,5,"ng-template",null,1,T)(5,Zn,3,0,"ng-template",null,2,T),p()),e&2&&s("model",t.items)},dependencies:[$,ge,he,It,ze,ie,ve,dt,pt,Mt,$e,ye],encapsulation:2})};var Le=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=g({type:n,selectors:[["app-main-layout"]],decls:8,vars:0,consts:[[1,"main-header"],[1,"main-body"]],template:function(e,t){e&1&&(d(0,"div")(1,"div",0),b(2,"app-header"),p(),d(3,"div",1)(4,"div"),b(5,"router-outlet"),p(),d(6,"div"),b(7,"app-footer"),p()()())},dependencies:[st,Me,Te],styles:[".main-header[_ngcontent-%COMP%]{position:fixed;top:0;left:0;right:0;height:var(--app-header-height);z-index:1000}.main-body[_ngcontent-%COMP%]{margin-top:var(--app-header-height)}"]})};var aa=[{path:"",component:Le,children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:Ce},{path:"sandbox",loadChildren:()=>import("./chunk-F5Z46TWE.js").then(n=>n.SandboxRoutes)}]},{path:"samples",loadChildren:()=>import("./chunk-IFCXVMBJ.js").then(n=>n.SampleRoutes)}];export{aa as PagesRoutes};
