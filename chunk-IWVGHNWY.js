import{a as gt,b as It}from"./chunk-DFXKOJIA.js";import"./chunk-UYQ62FR4.js";import{c as pt,e as ye,f as dt,h as Ve}from"./chunk-HYWK6CR2.js";import{a as ze,b as ht,c as Ne}from"./chunk-GAFGZXYU.js";import{a as Me,b as ae,d as ke}from"./chunk-YZEXGOMW.js";import{a as ft,b as Te,c as ie,d as k,e as Oe,f as U}from"./chunk-KUP6GBSE.js";import{B as Ke,C as Re,H as bt,J as _t,K as B,O as Ce,l as te,m as Z,s as He,v as ne,x as F}from"./chunk-RLV7YIWC.js";import{i as xe,j as lt,k as ee,l as ut,m as Ae,n as j,r as ve}from"./chunk-SWWZH6D4.js";import{$ as tt,Ab as x,Ba as w,Bb as G,Cb as Ie,Ga as at,Gb as he,Ha as H,Hb as rt,Ib as st,Jb as Q,Lb as M,Ma as _,N as J,Na as le,O as re,Pa as T,Q as se,Qa as ue,Qb as mt,Ra as l,S,Tb as ct,X as g,Xa as h,Xb as D,Y as I,Ya as pe,Yb as Y,Z as v,Za as de,bb as s,cb as d,db as p,ea as me,eb as b,f as Je,fb as be,gb as fe,hb as q,ia as y,ib as K,jb as R,ka as nt,kb as De,lb as O,mb as ot,nb as z,oa as it,ob as m,pb as _e,qb as ge,rb as N,sb as Fe,ta as Be,tb as P,u as Xe,ua as ce,ub as E,v as Ye,vb as $,wa as c,y as et,yb as X,zb as u}from"./chunk-TDEPKAKI.js";import{a as Ue,b as We}from"./chunk-4CLCTAJ7.js";var Le=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=_({type:t,selectors:[["app-home"]],decls:2,vars:0,template:function(e,n){e&1&&(be(0,"p"),x(1,"home works!"),fe())},encapsulation:2})};var Se=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=_({type:t,selectors:[["app-footer"]],decls:3,vars:0,consts:[[2,"height","100px"]],template:function(e,n){e&1&&(be(0,"div",0)(1,"p"),x(2,"footer works!"),fe()())},encapsulation:2})};var xt=`
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
`;var Dt=["*"];function Ft(t,r){if(t&1&&(d(0,"span",3),x(1),p()),t&2){let e=m();u(e.cx("label")),s("pBind",e.ptm("label")),c(),G(e.label)}}function At(t,r){if(t&1&&b(0,"span",5),t&2){let e=m(2);u(e.icon),s("pBind",e.ptm("icon"))("ngClass",e.cx("icon"))}}function Vt(t,r){if(t&1&&l(0,At,1,4,"span",4),t&2){let e=m(),n=$(5);s("ngIf",e.icon)("ngIfElse",n)}}function Ht(t,r){if(t&1){let e=O();d(0,"img",7),z("error",function(i){g(e);let a=m(2);return I(a.imageError(i))}),p()}if(t&2){let e=m(2);s("pBind",e.ptm("image"))("src",e.image,ce),h("aria-label",e.ariaLabel)}}function Kt(t,r){if(t&1&&l(0,Ht,1,3,"img",6),t&2){let e=m();s("ngIf",e.image)}}var Rt={root:({instance:t})=>["p-avatar p-component",{"p-avatar-image":t.image!=null,"p-avatar-circle":t.shape==="circle","p-avatar-lg":t.size==="large","p-avatar-xl":t.size==="xlarge"}],label:"p-avatar-label",icon:"p-avatar-icon"},vt=(()=>{class t extends Ce{name="avatar";style=xt;classes=Rt;static \u0275fac=(()=>{let e;return function(i){return(e||(e=y(t)))(i||t)}})();static \u0275prov=J({token:t,factory:t.\u0275fac})}return t})();var yt=new se("AVATAR_INSTANCE"),je=(()=>{class t extends ie{$pcAvatar=S(yt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=S(k,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}label;icon;image;size="normal";shape="square";styleClass;ariaLabel;ariaLabelledBy;onImageError=new w;_componentStyle=S(vt);imageError(e){this.onImageError.emit(e)}static \u0275fac=(()=>{let e;return function(i){return(e||(e=y(t)))(i||t)}})();static \u0275cmp=_({type:t,selectors:[["p-avatar"]],hostVars:4,hostBindings:function(n,i){n&2&&(h("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledBy),u(i.cn(i.cx("root"),i.styleClass)))},inputs:{label:"label",icon:"icon",image:"image",size:"size",shape:"shape",styleClass:"styleClass",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onImageError:"onImageError"},features:[he([vt,{provide:yt,useExisting:t},{provide:Te,useExisting:t}]),ue([k]),T],ngContentSelectors:Dt,decls:6,vars:2,consts:[["iconTemplate",""],["imageTemplate",""],[3,"pBind","class",4,"ngIf","ngIfElse"],[3,"pBind"],[3,"pBind","class","ngClass",4,"ngIf","ngIfElse"],[3,"pBind","ngClass"],[3,"pBind","src","error",4,"ngIf"],[3,"error","pBind","src"]],template:function(n,i){if(n&1&&(_e(),ge(0),l(1,Ft,2,4,"span",2)(2,Vt,1,2,"ng-template",null,0,M)(4,Kt,1,1,"ng-template",null,1,M)),n&2){let a=$(3);c(),s("ngIf",i.label)("ngIfElse",a)}},dependencies:[j,xe,ee,B,k],encapsulation:2,changeDetection:0})}return t})(),Tt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=le({type:t});static \u0275inj=re({imports:[je,B,B]})}return t})();var zt=["data-p-icon","angle-down"],Mt=(()=>{class t extends U{static \u0275fac=(()=>{let e;return function(i){return(e||(e=y(t)))(i||t)}})();static \u0275cmp=_({type:t,selectors:[["","data-p-icon","angle-down"]],features:[T],attrs:zt,decls:1,vars:0,consts:[["d","M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z","fill","currentColor"]],template:function(n,i){n&1&&(v(),q(0,"path",0))},encapsulation:2})}return t})();var Nt=["data-p-icon","angle-right"],kt=(()=>{class t extends U{static \u0275fac=(()=>{let e;return function(i){return(e||(e=y(t)))(i||t)}})();static \u0275cmp=_({type:t,selectors:[["","data-p-icon","angle-right"]],features:[T],attrs:Nt,decls:1,vars:0,consts:[["d","M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z","fill","currentColor"]],template:function(n,i){n&1&&(v(),q(0,"path",0))},encapsulation:2})}return t})();var $t=["data-p-icon","bars"],Lt=(()=>{class t extends U{static \u0275fac=(()=>{let e;return function(i){return(e||(e=y(t)))(i||t)}})();static \u0275cmp=_({type:t,selectors:[["","data-p-icon","bars"]],features:[T],attrs:$t,decls:1,vars:0,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M13.3226 3.6129H0.677419C0.497757 3.6129 0.325452 3.54152 0.198411 3.41448C0.0713707 3.28744 0 3.11514 0 2.93548C0 2.75581 0.0713707 2.58351 0.198411 2.45647C0.325452 2.32943 0.497757 2.25806 0.677419 2.25806H13.3226C13.5022 2.25806 13.6745 2.32943 13.8016 2.45647C13.9286 2.58351 14 2.75581 14 2.93548C14 3.11514 13.9286 3.28744 13.8016 3.41448C13.6745 3.54152 13.5022 3.6129 13.3226 3.6129ZM13.3226 7.67741H0.677419C0.497757 7.67741 0.325452 7.60604 0.198411 7.479C0.0713707 7.35196 0 7.17965 0 6.99999C0 6.82033 0.0713707 6.64802 0.198411 6.52098C0.325452 6.39394 0.497757 6.32257 0.677419 6.32257H13.3226C13.5022 6.32257 13.6745 6.39394 13.8016 6.52098C13.9286 6.64802 14 6.82033 14 6.99999C14 7.17965 13.9286 7.35196 13.8016 7.479C13.6745 7.60604 13.5022 7.67741 13.3226 7.67741ZM0.677419 11.7419H13.3226C13.5022 11.7419 13.6745 11.6706 13.8016 11.5435C13.9286 11.4165 14 11.2442 14 11.0645C14 10.8848 13.9286 10.7125 13.8016 10.5855C13.6745 10.4585 13.5022 10.3871 13.3226 10.3871H0.677419C0.497757 10.3871 0.325452 10.4585 0.198411 10.5855C0.0713707 10.7125 0 10.8848 0 11.0645C0 11.2442 0.0713707 11.4165 0.198411 11.5435C0.325452 11.6706 0.497757 11.7419 0.677419 11.7419Z","fill","currentColor"]],template:function(n,i){n&1&&(v(),q(0,"path",0))},encapsulation:2})}return t})();var St=`
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
`;var Pt=(t,r)=>({instance:t,processedItem:r}),Zt=()=>({exact:!1}),qt=(t,r)=>({$implicit:t,root:r});function Gt(t,r){if(t&1&&b(0,"li",6),t&2){let e=m().$implicit,n=m();X(n.getItemProp(e,"style")),u(n.cn(n.cx("separator"),e==null?null:e.styleClass)),s("pBind",n.ptm("separator")),h("id",n.getItemId(e))}}function Qt(t,r){if(t&1&&b(0,"span",17),t&2){let e=m(4),n=e.$implicit,i=e.index,a=m();X(a.getItemProp(n,"iconStyle")),u(a.cn(a.cx("itemIcon"),a.getItemProp(n,"icon"))),s("pBind",a.getPTOptions(n,i,"itemIcon")),h("tabindex",-1)}}function Ut(t,r){if(t&1&&(d(0,"span",18),x(1),p()),t&2){let e=m(4),n=e.$implicit,i=e.index,a=m();u(a.cx("itemLabel")),s("id",a.getItemLabelId(n))("pBind",a.getPTOptions(n,i,"itemLabel")),c(),Ie(" ",a.getItemLabel(n)," ")}}function Wt(t,r){if(t&1&&b(0,"span",19),t&2){let e=m(4),n=e.$implicit,i=e.index,a=m();u(a.cx("itemLabel")),s("innerHTML",a.getItemLabel(n),Be)("id",a.getItemLabelId(n))("pBind",a.getPTOptions(n,i,"itemLabel"))}}function Jt(t,r){if(t&1&&b(0,"p-badge",20),t&2){let e=m(4),n=e.$implicit,i=e.index,a=m();u(a.getItemProp(n,"badgeStyleClass")),s("value",a.getItemProp(n,"badge"))("pt",a.getPTOptions(n,i,"pcBadge"))}}function Xt(t,r){if(t&1&&(v(),b(0,"svg",24)),t&2){let e=m(6),n=e.$implicit,i=e.index,a=m();u(a.cx("submenuIcon")),s("pBind",a.getPTOptions(n,i,"submenuIcon"))}}function Yt(t,r){if(t&1&&(v(),b(0,"svg",25)),t&2){let e=m(6),n=e.$implicit,i=e.index,a=m();u(a.cx("submenuIcon")),s("pBind",a.getPTOptions(n,i,"submenuIcon"))}}function en(t,r){if(t&1&&(K(0),l(1,Xt,1,3,"svg",22)(2,Yt,1,3,"svg",23),R()),t&2){let e=m(6);c(),s("ngIf",e.root),c(),s("ngIf",!e.root)}}function tn(t,r){}function nn(t,r){t&1&&l(0,tn,0,0,"ng-template")}function an(t,r){if(t&1&&(K(0),l(1,en,3,2,"ng-container",9)(2,nn,1,0,null,21),R()),t&2){let e=m(5);c(),s("ngIf",!e.submenuiconTemplate),c(),s("ngTemplateOutlet",e.submenuiconTemplate)}}function on(t,r){if(t&1&&(d(0,"a",13),l(1,Qt,1,6,"span",14)(2,Ut,2,5,"span",15)(3,Wt,1,5,"ng-template",null,1,M)(5,Jt,1,4,"p-badge",16)(6,an,3,2,"ng-container",9),p()),t&2){let e=$(4),n=m(3),i=n.$implicit,a=n.index,o=m();u(o.cx("itemLink")),s("pBind",o.getPTOptions(i,a,"itemLink")),h("href",o.getItemProp(i,"url"),ce)("data-automationid",o.getItemProp(i,"automationId"))("target",o.getItemProp(i,"target"))("tabindex",-1),c(),s("ngIf",o.getItemProp(i,"icon")),c(),s("ngIf",o.getItemProp(i,"escape"))("ngIfElse",e),c(3),s("ngIf",o.getItemProp(i,"badge")),c(),s("ngIf",o.isItemGroup(i))}}function rn(t,r){if(t&1&&b(0,"span",29),t&2){let e=m(4),n=e.$implicit,i=e.index,a=m();u(a.cn(a.cx("itemIcon"),a.getItemProp(n,"icon"))),s("ngStyle",a.getItemProp(n,"iconStyle"))("pBind",a.getPTOptions(n,i,"itemIcon")),h("tabindex",-1)}}function sn(t,r){if(t&1&&(d(0,"span",17),x(1),p()),t&2){let e=m(4),n=e.$implicit,i=e.index,a=m();u(a.cx("itemLabel")),s("pBind",a.getPTOptions(n,i,"itemLabel")),c(),G(a.getItemLabel(n))}}function mn(t,r){if(t&1&&b(0,"span",30),t&2){let e=m(4),n=e.$implicit,i=e.index,a=m();u(a.cx("itemLabel")),s("innerHTML",a.getItemLabel(n),Be)("pBind",a.getPTOptions(n,i,"itemLabel"))}}function cn(t,r){if(t&1&&b(0,"p-badge",20),t&2){let e=m(4),n=e.$implicit,i=e.index,a=m();u(a.getItemProp(n,"badgeStyleClass")),s("value",a.getItemProp(n,"badge"))("pt",a.getPTOptions(n,i,"pcBadge"))}}function ln(t,r){if(t&1&&(v(),b(0,"svg",24)),t&2){let e=m(6),n=e.$implicit,i=e.index,a=m();u(a.cx("submenuIcon")),s("pBind",a.getPTOptions(n,i,"submenuIcon"))}}function un(t,r){if(t&1&&(v(),b(0,"svg",25)),t&2){let e=m(6),n=e.$implicit,i=e.index,a=m();u(a.cx("submenuIcon")),s("pBind",a.getPTOptions(n,i,"submenuIcon"))}}function pn(t,r){if(t&1&&(K(0),l(1,ln,1,3,"svg",22)(2,un,1,3,"svg",23),R()),t&2){let e=m(6);c(),s("ngIf",e.root),c(),s("ngIf",!e.root)}}function dn(t,r){}function bn(t,r){t&1&&l(0,dn,0,0,"ng-template")}function fn(t,r){if(t&1&&(K(0),l(1,pn,3,2,"ng-container",9)(2,bn,1,0,null,21),R()),t&2){let e=m(5);c(),s("ngIf",!e.submenuiconTemplate),c(),s("ngTemplateOutlet",e.submenuiconTemplate)}}function _n(t,r){if(t&1&&(d(0,"a",26),l(1,rn,1,5,"span",27)(2,sn,2,4,"span",28)(3,mn,1,4,"ng-template",null,2,M)(5,cn,1,4,"p-badge",16)(6,fn,3,2,"ng-container",9),p()),t&2){let e=$(4),n=m(3),i=n.$implicit,a=n.index,o=m();u(o.cx("itemLink")),s("routerLink",o.getItemProp(i,"routerLink"))("queryParams",o.getItemProp(i,"queryParams"))("routerLinkActive","p-menubar-item-link-active")("routerLinkActiveOptions",o.getItemProp(i,"routerLinkActiveOptions")||rt(21,Zt))("target",o.getItemProp(i,"target"))("fragment",o.getItemProp(i,"fragment"))("queryParamsHandling",o.getItemProp(i,"queryParamsHandling"))("preserveFragment",o.getItemProp(i,"preserveFragment"))("skipLocationChange",o.getItemProp(i,"skipLocationChange"))("replaceUrl",o.getItemProp(i,"replaceUrl"))("state",o.getItemProp(i,"state"))("pBind",o.getPTOptions(i,a,"itemLink")),h("data-automationid",o.getItemProp(i,"automationId"))("tabindex",-1),c(),s("ngIf",o.getItemProp(i,"icon")),c(),s("ngIf",o.getItemProp(i,"escape"))("ngIfElse",e),c(3),s("ngIf",o.getItemProp(i,"badge")),c(),s("ngIf",o.isItemGroup(i))}}function gn(t,r){if(t&1&&(K(0),l(1,on,7,12,"a",11)(2,_n,7,22,"a",12),R()),t&2){let e=m(2).$implicit,n=m();c(),s("ngIf",!n.getItemProp(e,"routerLink")),c(),s("ngIf",n.getItemProp(e,"routerLink"))}}function In(t,r){}function hn(t,r){t&1&&l(0,In,0,0,"ng-template")}function xn(t,r){if(t&1&&(K(0),l(1,hn,1,0,null,31),R()),t&2){let e=m(2).$implicit,n=m();c(),s("ngTemplateOutlet",n.itemTemplate)("ngTemplateOutletContext",Q(2,qt,e.item,n.root))}}function vn(t,r){if(t&1){let e=O();d(0,"ul",32),z("itemClick",function(i){g(e);let a=m(3);return I(a.itemClick.emit(i))})("itemMouseEnter",function(i){g(e);let a=m(3);return I(a.onItemMouseEnter(i))}),p()}if(t&2){let e=m(2).$implicit,n=m();s("itemTemplate",n.itemTemplate)("items",e.items)("mobileActive",n.mobileActive)("autoDisplay",n.autoDisplay)("menuId",n.menuId)("activeItemPath",n.activeItemPath)("focusedItemId",n.focusedItemId)("level",n.level+1)("inlineStyles",n.sx("submenu",!0,Q(12,Pt,n,e)))("pt",n.pt())("pBind",n.ptm("submenu")),h("aria-labelledby",n.getItemLabelId(e))}}function yn(t,r){if(t&1){let e=O();d(0,"li",7,0)(2,"div",8),z("click",function(i){g(e);let a=m().$implicit,o=m();return I(o.onItemClick(i,a))})("mouseenter",function(i){g(e);let a=m().$implicit,o=m();return I(o.onItemMouseEnter({$event:i,processedItem:a}))}),l(3,gn,3,2,"ng-container",9)(4,xn,2,5,"ng-container",9),p(),l(5,vn,1,15,"ul",10),p()}if(t&2){let e=m(),n=e.$implicit,i=e.index,a=m();X(a.getItemProp(n,"style")),u(a.cn(a.cx("item",Q(22,Pt,a,n)),a.getItemProp(n,"styleClass"))),s("pBind",a.getPTOptions(n,i,"item"))("tooltipOptions",a.getItemProp(n,"tooltipOptions")),h("id",a.getItemId(n))("data-p-highlight",a.isItemActive(n))("data-p-focused",a.isItemFocused(n))("data-p-disabled",a.isItemDisabled(n))("aria-label",a.getItemLabel(n))("aria-disabled",a.isItemDisabled(n)||void 0)("aria-haspopup",a.isItemGroup(n)&&!a.getItemProp(n,"to")?"menu":void 0)("aria-expanded",a.isItemGroup(n)?a.isItemActive(n):void 0)("aria-setsize",a.getAriaSetSize())("aria-posinset",a.getAriaPosInset(i)),c(2),u(a.cx("itemContent")),s("pBind",a.getPTOptions(n,i,"itemContent")),c(),s("ngIf",!a.itemTemplate),c(),s("ngIf",a.itemTemplate),c(),s("ngIf",a.isItemVisible(n)&&a.isItemGroup(n))}}function Cn(t,r){if(t&1&&l(0,Gt,1,6,"li",4)(1,yn,6,25,"li",5),t&2){let e=r.$implicit,n=m();s("ngIf",n.isItemVisible(e)&&n.getItemProp(e,"separator")),c(),s("ngIf",n.isItemVisible(e)&&!n.getItemProp(e,"separator"))}}var Tn=["start"],Mn=["end"],kn=["item"],Ln=["menuicon"],Sn=["submenuicon"],wn=["menubutton"],Pn=["rootmenu"],En=["*"];function Bn(t,r){t&1&&De(0)}function Dn(t,r){if(t&1&&(d(0,"div",7),l(1,Bn,1,0,"ng-container",8),p()),t&2){let e=m();u(e.cx("start")),s("pBind",e.ptm("start")),c(),s("ngTemplateOutlet",e.startTemplate||e._startTemplate)}}function Fn(t,r){if(t&1&&(v(),b(0,"svg",11)),t&2){let e=m(2);s("pBind",e.ptm("buttonIcon"))}}function An(t,r){}function Vn(t,r){t&1&&l(0,An,0,0,"ng-template")}function Hn(t,r){if(t&1){let e=O();d(0,"a",9,2),z("click",function(i){g(e);let a=m();return I(a.menuButtonClick(i))})("keydown",function(i){g(e);let a=m();return I(a.menuButtonKeydown(i))}),l(2,Fn,1,1,"svg",10)(3,Vn,1,0,null,8),p()}if(t&2){let e=m();u(e.cx("button")),s("pBind",e.ptm("button")),h("aria-haspopup",!!(e.model.length&&e.model.length>0))("aria-expanded",e.mobileActive)("aria-controls",e.id)("aria-label",e.config.translation.aria.navigation),c(2),s("ngIf",!e.menuIconTemplate&&!e._menuIconTemplate),c(),s("ngTemplateOutlet",e.menuIconTemplate||e._menuIconTemplate)}}function Kn(t,r){t&1&&De(0)}function Rn(t,r){if(t&1&&(d(0,"div",7),l(1,Kn,1,0,"ng-container",8),p()),t&2){let e=m();u(e.cx("end")),s("pBind",e.ptm("end")),c(),s("ngTemplateOutlet",e.endTemplate||e._endTemplate)}}function On(t,r){if(t&1&&(d(0,"div"),ge(1),p()),t&2){let e=m();u(e.cx("end"))}}var zn={submenu:({instance:t,processedItem:r})=>({display:t.isItemActive(r)?"flex":"none"})},Nn={root:({instance:t})=>["p-menubar p-component",{"p-menubar-mobile":t.queryMatches,"p-menubar-mobile-active":t.mobileActive}],start:"p-menubar-start",button:"p-menubar-button",rootList:"p-menubar-root-list",item:({instance:t,processedItem:r})=>["p-menubar-item",{"p-menubar-item-active":t.isItemActive(r),"p-focus":t.isItemFocused(r),"p-disabled":t.isItemDisabled(r)}],itemContent:"p-menubar-item-content",itemLink:"p-menubar-item-link",itemIcon:"p-menubar-item-icon",itemLabel:"p-menubar-item-label",submenuIcon:"p-menubar-submenu-icon",submenu:"p-menubar-submenu",separator:"p-menubar-separator",end:"p-menubar-end"},Ze=(()=>{class t extends Ce{name="menubar";style=St;classes=Nn;inlineStyles=zn;static \u0275fac=(()=>{let e;return function(i){return(e||(e=y(t)))(i||t)}})();static \u0275prov=J({token:t,factory:t.\u0275fac})}return t})();var wt=new se("MENUBAR_INSTANCE"),qe=(()=>{class t{autoHide;autoHideDelay;mouseLeaves=new Je;mouseLeft$=this.mouseLeaves.pipe(et(()=>Xe(this.autoHideDelay)),Ye(e=>this.autoHide&&e));static \u0275fac=function(n){return new(n||t)};static \u0275prov=J({token:t,factory:t.\u0275fac})}return t})(),$n=(()=>{class t extends ie{items;itemTemplate;root=!1;autoZIndex=!0;baseZIndex=0;mobileActive;autoDisplay;menuId;ariaLabel;ariaLabelledBy;level=0;focusedItemId;activeItemPath;inlineStyles;submenuiconTemplate;itemClick=new w;itemMouseEnter=new w;menuFocus=new w;menuBlur=new w;menuKeydown=new w;mouseLeaveSubscriber;menubarService=S(qe);_componentStyle=S(Ze);hostName="Menubar";onInit(){this.mouseLeaveSubscriber=this.menubarService.mouseLeft$.subscribe(()=>{this.cd.markForCheck()})}onItemClick(e,n){this.getItemProp(n,"command",{originalEvent:e,item:n.item}),this.itemClick.emit({originalEvent:e,processedItem:n,isFocus:!0})}getItemProp(e,n,i=null){return e&&e.item?Re(e.item[n],i):void 0}getItemId(e){return e.item&&e.item?.id?e.item.id:`${this.menuId}_${e.key}`}getItemLabelId(e){return`${this.menuId}_${e.key}_label`}getItemLabel(e){return this.getItemProp(e,"label")}isItemVisible(e){return this.getItemProp(e,"visible")!==!1}isItemActive(e){return this.activeItemPath?this.activeItemPath.some(n=>n.key===e.key):!1}isItemDisabled(e){return this.getItemProp(e,"disabled")}isItemFocused(e){return this.focusedItemId===this.getItemId(e)}isItemGroup(e){return F(e.items)}getAriaSetSize(){return this.items.filter(e=>this.isItemVisible(e)&&!this.getItemProp(e,"separator")).length}getAriaPosInset(e){return e-this.items.slice(0,e).filter(n=>this.isItemVisible(n)&&this.getItemProp(n,"separator")).length+1}onItemMouseEnter(e){if(this.autoDisplay){let{event:n,processedItem:i}=e;this.itemMouseEnter.emit({originalEvent:n,processedItem:i})}}getPTOptions(e,n,i){return this.ptm(i,{context:{item:e.item,index:n,active:this.isItemActive(e),focused:this.isItemFocused(e),disabled:this.isItemDisabled(e),level:this.level}})}onDestroy(){this.mouseLeaveSubscriber?.unsubscribe()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=y(t)))(i||t)}})();static \u0275cmp=_({type:t,selectors:[["p-menubarSub"],["p-menubarsub"],["","pMenubarSub",""]],hostAttrs:["role","menubar"],hostVars:6,hostBindings:function(n,i){n&2&&(ot("id",i.root?i.menuId:null),h("aria-activedescendant",i.focusedItemId),X(i.inlineStyles),u(i.level===0?i.cx("rootList"):i.cx("submenu")))},inputs:{items:"items",itemTemplate:"itemTemplate",root:[2,"root","root",D],autoZIndex:[2,"autoZIndex","autoZIndex",D],baseZIndex:[2,"baseZIndex","baseZIndex",Y],mobileActive:[2,"mobileActive","mobileActive",D],autoDisplay:[2,"autoDisplay","autoDisplay",D],menuId:"menuId",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",level:[2,"level","level",Y],focusedItemId:"focusedItemId",activeItemPath:"activeItemPath",inlineStyles:"inlineStyles",submenuiconTemplate:"submenuiconTemplate"},outputs:{itemClick:"itemClick",itemMouseEnter:"itemMouseEnter",menuFocus:"menuFocus",menuBlur:"menuBlur",menuKeydown:"menuKeydown"},features:[T],decls:1,vars:1,consts:[["listItem",""],["htmlLabel",""],["htmlRouteLabel",""],["ngFor","",3,"ngForOf"],["role","separator",3,"style","class","pBind",4,"ngIf"],["role","menuitem","pTooltip","",3,"style","class","pBind","tooltipOptions",4,"ngIf"],["role","separator",3,"pBind"],["role","menuitem","pTooltip","",3,"pBind","tooltipOptions"],[3,"click","mouseenter","pBind"],[4,"ngIf"],["pMenubarSub","",3,"itemTemplate","items","mobileActive","autoDisplay","menuId","activeItemPath","focusedItemId","level","inlineStyles","pt","pBind","itemClick","itemMouseEnter",4,"ngIf"],["pRipple","",3,"class","pBind",4,"ngIf"],["pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","class","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","pBind",4,"ngIf"],["pRipple","",3,"pBind"],[3,"class","style","pBind",4,"ngIf"],[3,"class","id","pBind",4,"ngIf","ngIfElse"],[3,"class","value","pt",4,"ngIf"],[3,"pBind"],[3,"id","pBind"],[3,"innerHTML","id","pBind"],[3,"value","pt"],[4,"ngTemplateOutlet"],["data-p-icon","angle-down",3,"class","pBind",4,"ngIf"],["data-p-icon","angle-right",3,"class","pBind",4,"ngIf"],["data-p-icon","angle-down",3,"pBind"],["data-p-icon","angle-right",3,"pBind"],["pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","pBind"],[3,"class","ngStyle","pBind",4,"ngIf"],[3,"class","pBind",4,"ngIf","ngIfElse"],[3,"ngStyle","pBind"],[3,"innerHTML","pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["pMenubarSub","",3,"itemClick","itemMouseEnter","itemTemplate","items","mobileActive","autoDisplay","menuId","activeItemPath","focusedItemId","level","inlineStyles","pt","pBind"]],template:function(n,i){n&1&&l(0,Cn,2,2,"ng-template",3),n&2&&s("ngForOf",i.items)},dependencies:[t,j,lt,ee,Ae,ut,Ve,ye,dt,ke,Ne,ht,k,Mt,kt,ae,Me,B,Oe],encapsulation:2})}return t})(),Ge=(()=>{class t extends ie{document;platformId;el;renderer;cd;menubarService;$pcMenubar=S(wt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=S(k,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}set model(e){this._model=e,this._processedItems=this.createProcessedItems(this._model||[])}get model(){return this._model}styleClass;autoZIndex=!0;baseZIndex=0;autoDisplay=!0;autoHide;breakpoint="960px";autoHideDelay=100;id;ariaLabel;ariaLabelledBy;onFocus=new w;onBlur=new w;menubutton;rootmenu;mobileActive;matchMediaListener;query;queryMatches;outsideClickListener;resizeListener;mouseLeaveSubscriber;dirty=!1;focused=!1;activeItemPath=me([]);number=me(0);focusedItemInfo=me({index:-1,level:0,parentKey:"",item:null});searchValue="";searchTimeout;_processedItems;_componentStyle=S(Ze);_model;get visibleItems(){let e=this.activeItemPath().find(n=>n.key===this.focusedItemInfo().parentKey);return e?e.items:this.processedItems}get processedItems(){return(!this._processedItems||!this._processedItems.length)&&(this._processedItems=this.createProcessedItems(this.model||[])),this._processedItems}get focusedItemId(){let e=this.focusedItemInfo();return e.item&&e.item?.id?e.item.id:e.index!==-1?`${this.id}${F(e.parentKey)?"_"+e.parentKey:""}_${e.index}`:null}constructor(e,n,i,a,o,f){super(),this.document=e,this.platformId=n,this.el=i,this.renderer=a,this.cd=o,this.menubarService=f,mt(()=>{let C=this.activeItemPath();F(C)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())})}onInit(){this.bindMatchMediaListener(),this.menubarService.autoHide=this.autoHide,this.menubarService.autoHideDelay=this.autoHideDelay,this.mouseLeaveSubscriber=this.menubarService.mouseLeft$.subscribe(()=>{this.hide()}),this.id=this.id||ft("pn_id_")}startTemplate;endTemplate;itemTemplate;menuIconTemplate;submenuIconTemplate;templates;_startTemplate;_endTemplate;_itemTemplate;_menuIconTemplate;_submenuIconTemplate;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"start":this._startTemplate=e.template;break;case"end":this._endTemplate=e.template;break;case"menuicon":this._menuIconTemplate=e.template;break;case"submenuicon":this._submenuIconTemplate=e.template;break;case"item":this._itemTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}createProcessedItems(e,n=0,i={},a=""){let o=[];return e&&e.forEach((f,C)=>{let L=(a!==""?a+"_":"")+C,V={item:f,index:C,level:n,key:L,parent:i,parentKey:a};V.items=this.createProcessedItems(f.items,n+1,V,L),o.push(V)}),o}bindMatchMediaListener(){if(ve(this.platformId)&&!this.matchMediaListener){let e=window.matchMedia(`(max-width: ${this.breakpoint})`);this.query=e,this.queryMatches=e.matches,this.matchMediaListener=()=>{this.queryMatches=e.matches,this.mobileActive=!1,this.cd.markForCheck()},e.addEventListener("change",this.matchMediaListener)}}unbindMatchMediaListener(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)}getItemProp(e,n){return e?Re(e[n]):void 0}menuButtonClick(e){this.toggle(e)}menuButtonKeydown(e){(e.code==="Enter"||e.code==="Space")&&this.menuButtonClick(e)}onItemClick(e){let{originalEvent:n,processedItem:i}=e,a=this.isProcessedItemGroup(i),o=ne(i.parent);if(this.isSelected(i)){let{index:C,key:L,level:V,parentKey:Ee,item:oe}=i;this.activeItemPath.set(this.activeItemPath().filter(W=>L!==W.key&&L.startsWith(W.key))),this.focusedItemInfo.set({index:C,level:V,parentKey:Ee,item:oe}),this.dirty=!o,Z(this.rootmenu?.el.nativeElement)}else if(a)this.onItemChange(e);else{let C=o?i:this.activeItemPath().find(L=>L.parentKey==="");this.hide(n),this.changeFocusedItemIndex(n,C?C.index:-1),this.mobileActive=!1,Z(this.rootmenu?.el.nativeElement)}}onItemMouseEnter(e){He()?this.onItemChange({event:e,processedItem:e.processedItem,focus:this.autoDisplay},"hover"):this.dirty&&this.onItemChange(e,"hover")}onMouseLeave(e){let n=this.menubarService.autoHide,i=this.menubarService.autoHideDelay;n&&setTimeout(()=>{this.menubarService.mouseLeaves.next(!0)},i)}changeFocusedItemIndex(e,n){let i=this.findVisibleItem(n);if(this.focusedItemInfo().index!==n){let a=this.focusedItemInfo();this.focusedItemInfo.set(We(Ue({},a),{item:i.item,index:n})),this.scrollInView()}}scrollInView(e=-1){let n=e!==-1?`${this.id}_${e}`:this.focusedItemId,i=te(this.rootmenu?.el.nativeElement,`li[id="${n}"]`);i&&i.scrollIntoView&&i.scrollIntoView({block:"nearest",inline:"nearest"})}onItemChange(e,n){let{processedItem:i,isFocus:a}=e;if(ne(i))return;let{index:o,key:f,level:C,parentKey:L,items:V,item:Ee}=i,oe=F(V),W=this.activeItemPath().filter(Qe=>Qe.parentKey!==L&&Qe.parentKey!==f);oe&&W.push(i),this.focusedItemInfo.set({index:o,level:C,parentKey:L,item:Ee}),oe&&(this.dirty=!0),a&&Z(this.rootmenu?.el.nativeElement),!(n==="hover"&&this.queryMatches)&&this.activeItemPath.set(W)}toggle(e){this.mobileActive?(this.mobileActive=!1,ze.clear(this.rootmenu?.el.nativeElement),this.hide()):(this.mobileActive=!0,ze.set("menu",this.rootmenu?.el.nativeElement,this.config.zIndex.menu),setTimeout(()=>{this.show()},0)),this.bindOutsideClickListener(),e.preventDefault()}hide(e,n){this.mobileActive&&setTimeout(()=>{Z(this.menubutton?.nativeElement)},0),this.activeItemPath.set([]),this.focusedItemInfo.set({index:-1,level:0,parentKey:"",item:null}),n&&Z(this.rootmenu?.el.nativeElement),this.dirty=!1}show(){let e=this.findVisibleItem(this.findFirstFocusedItemIndex());this.focusedItemInfo.set({index:this.findFirstFocusedItemIndex(),level:0,parentKey:"",item:e?.item}),Z(this.rootmenu?.el.nativeElement)}onMenuFocus(e){this.focused=!0;let n=this.findVisibleItem(this.findFirstFocusedItemIndex()),i=this.focusedItemInfo().index!==-1?this.focusedItemInfo():{index:this.findFirstFocusedItemIndex(),level:0,parentKey:"",item:n?.item};this.focusedItemInfo.set(i),this.onFocus.emit(e)}onMenuBlur(e){this.focused=!1,this.focusedItemInfo.set({index:-1,level:0,parentKey:"",item:null}),this.searchValue="",this.dirty=!1,this.onBlur.emit(e)}onKeyDown(e){let n=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!n&&bt(e.key)&&this.searchItems(e,e.key);break}}findVisibleItem(e){return F(this.visibleItems)?this.visibleItems[e]:null}findFirstFocusedItemIndex(){let e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e}findFirstItemIndex(){return this.visibleItems.findIndex(e=>this.isValidItem(e))}findSelectedItemIndex(){return this.visibleItems.findIndex(e=>this.isValidSelectedItem(e))}isProcessedItemGroup(e){return e&&F(e.items)}isSelected(e){return this.activeItemPath().some(n=>n.key===e.key)}isValidSelectedItem(e){return this.isValidItem(e)&&this.isSelected(e)}isValidItem(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)}isItemDisabled(e){return this.getItemProp(e,"disabled")}isItemSeparator(e){return this.getItemProp(e,"separator")}isItemMatched(e){return this.isValidItem(e)&&this.getProccessedItemLabel(e).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase())}isProccessedItemGroup(e){return e&&F(e.items)}searchItems(e,n){this.searchValue=(this.searchValue||"")+n;let i=-1,a=!1;return this.focusedItemInfo().index!==-1?(i=this.visibleItems.slice(this.focusedItemInfo().index).findIndex(o=>this.isItemMatched(o)),i=i===-1?this.visibleItems.slice(0,this.focusedItemInfo().index).findIndex(o=>this.isItemMatched(o)):i+this.focusedItemInfo().index):i=this.visibleItems.findIndex(o=>this.isItemMatched(o)),i!==-1&&(a=!0),i===-1&&this.focusedItemInfo().index===-1&&(i=this.findFirstFocusedItemIndex()),i!==-1&&this.changeFocusedItemIndex(e,i),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),a}getProccessedItemLabel(e){return e?this.getItemLabel(e.item):void 0}getItemLabel(e){return this.getItemProp(e,"label")}onArrowDownKey(e){let n=this.visibleItems[this.focusedItemInfo().index];if(n?ne(n.parent):null)this.isProccessedItemGroup(n)&&(this.onItemChange({originalEvent:e,processedItem:n}),this.focusedItemInfo.set({index:-1,parentKey:n.key,item:n.item}),this.onArrowRightKey(e));else{let a=this.focusedItemInfo().index!==-1?this.findNextItemIndex(this.focusedItemInfo().index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,a),e.preventDefault()}}onArrowRightKey(e){let n=this.visibleItems[this.focusedItemInfo().index];if(n?this.activeItemPath().find(a=>a.key===n.parentKey):null)this.isProccessedItemGroup(n)&&(this.onItemChange({originalEvent:e,processedItem:n}),this.focusedItemInfo.set({index:-1,parentKey:n.key,item:n.item}),this.onArrowDownKey(e));else{let a=this.focusedItemInfo().index!==-1?this.findNextItemIndex(this.focusedItemInfo().index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,a),e.preventDefault()}}onArrowUpKey(e){let n=this.visibleItems[this.focusedItemInfo().index];if(ne(n.parent)){if(this.isProccessedItemGroup(n)){this.onItemChange({originalEvent:e,processedItem:n}),this.focusedItemInfo.set({index:-1,parentKey:n.key,item:n.item});let o=this.findLastItemIndex();this.changeFocusedItemIndex(e,o)}}else{let a=this.activeItemPath().find(o=>o.key===n.parentKey);if(this.focusedItemInfo().index===0){this.focusedItemInfo.set({index:-1,parentKey:a?a.parentKey:"",item:n.item}),this.searchValue="",this.onArrowLeftKey(e);let o=this.activeItemPath().filter(f=>f.parentKey!==this.focusedItemInfo().parentKey);this.activeItemPath.set(o)}else{let o=this.focusedItemInfo().index!==-1?this.findPrevItemIndex(this.focusedItemInfo().index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,o)}}e.preventDefault()}onArrowLeftKey(e){let n=this.visibleItems[this.focusedItemInfo().index],i=n?this.activeItemPath().find(a=>a.key===n.parentKey):null;if(i){this.onItemChange({originalEvent:e,processedItem:i});let a=this.activeItemPath().filter(o=>o.parentKey!==this.focusedItemInfo().parentKey);this.activeItemPath.set(a),e.preventDefault()}else{let a=this.focusedItemInfo().index!==-1?this.findPrevItemIndex(this.focusedItemInfo().index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,a),e.preventDefault()}}onHomeKey(e){this.changeFocusedItemIndex(e,this.findFirstItemIndex()),e.preventDefault()}onEndKey(e){this.changeFocusedItemIndex(e,this.findLastItemIndex()),e.preventDefault()}onSpaceKey(e){this.onEnterKey(e)}onEscapeKey(e){this.hide(e,!0),this.focusedItemInfo().index=this.findFirstFocusedItemIndex(),e.preventDefault()}onTabKey(e){if(this.focusedItemInfo().index!==-1){let n=this.visibleItems[this.focusedItemInfo().index];!this.isProccessedItemGroup(n)&&this.onItemChange({originalEvent:e,processedItem:n})}this.hide()}onEnterKey(e){if(this.focusedItemInfo().index!==-1){let n=te(this.rootmenu?.el.nativeElement,`li[id="${`${this.focusedItemId}`}"]`),i=n&&(te(n,'[data-pc-section="itemlink"]')||te(n,"a,button"));i?i.click():n&&n.click()}e.preventDefault()}findLastFocusedItemIndex(){let e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e}findLastItemIndex(){return Ke(this.visibleItems,e=>this.isValidItem(e))}findPrevItemIndex(e){let n=e>0?Ke(this.visibleItems.slice(0,e),i=>this.isValidItem(i)):-1;return n>-1?n:e}findNextItemIndex(e){let n=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(i=>this.isValidItem(i)):-1;return n>-1?n+e+1:e}bindResizeListener(){ve(this.platformId)&&(this.resizeListener||(this.resizeListener=this.renderer.listen(this.document.defaultView,"resize",e=>{He()||this.hide(e,!0),this.mobileActive=!1})))}bindOutsideClickListener(){ve(this.platformId)&&(this.outsideClickListener||(this.outsideClickListener=this.renderer.listen(this.document,"click",e=>{let n=this.rootmenu?.el.nativeElement!==e.target&&!this.rootmenu?.el.nativeElement?.contains(e.target),i=this.mobileActive&&this.menubutton?.nativeElement!==e.target&&!this.menubutton?.nativeElement?.contains(e.target);n&&(i?this.mobileActive=!1:this.hide())})))}unbindOutsideClickListener(){this.outsideClickListener&&(this.outsideClickListener(),this.outsideClickListener=null)}unbindResizeListener(){this.resizeListener&&(this.resizeListener(),this.resizeListener=null)}onDestroy(){this.mouseLeaveSubscriber?.unsubscribe(),this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener()}static \u0275fac=function(n){return new(n||t)(H(tt),H(it),H(nt),H(at),H(ct),H(qe))};static \u0275cmp=_({type:t,selectors:[["p-menubar"]],contentQueries:function(n,i,a){if(n&1&&(N(a,Tn,4),N(a,Mn,4),N(a,kn,4),N(a,Ln,4),N(a,Sn,4),N(a,_t,4)),n&2){let o;P(o=E())&&(i.startTemplate=o.first),P(o=E())&&(i.endTemplate=o.first),P(o=E())&&(i.itemTemplate=o.first),P(o=E())&&(i.menuIconTemplate=o.first),P(o=E())&&(i.submenuIconTemplate=o.first),P(o=E())&&(i.templates=o)}},viewQuery:function(n,i){if(n&1&&(Fe(wn,5),Fe(Pn,5)),n&2){let a;P(a=E())&&(i.menubutton=a.first),P(a=E())&&(i.rootmenu=a.first)}},hostVars:2,hostBindings:function(n,i){n&2&&u(i.cn(i.cx("root"),i.styleClass))},inputs:{model:"model",styleClass:"styleClass",autoZIndex:[2,"autoZIndex","autoZIndex",D],baseZIndex:[2,"baseZIndex","baseZIndex",Y],autoDisplay:[2,"autoDisplay","autoDisplay",D],autoHide:[2,"autoHide","autoHide",D],breakpoint:"breakpoint",autoHideDelay:[2,"autoHideDelay","autoHideDelay",Y],id:"id",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onFocus:"onFocus",onBlur:"onBlur"},features:[he([qe,Ze,{provide:wt,useExisting:t},{provide:Te,useExisting:t}]),ue([k]),T],ngContentSelectors:En,decls:7,vars:19,consts:[["rootmenu",""],["legacy",""],["menubutton",""],[3,"class","pBind",4,"ngIf"],["tabindex","0","role","button",3,"class","pBind","click","keydown",4,"ngIf"],["pMenubarSub","","tabindex","0",3,"itemClick","focus","blur","keydown","itemMouseEnter","mouseleave","items","itemTemplate","menuId","root","baseZIndex","autoZIndex","mobileActive","autoDisplay","focusedItemId","submenuiconTemplate","activeItemPath","pt","pBind"],[3,"class","pBind",4,"ngIf","ngIfElse"],[3,"pBind"],[4,"ngTemplateOutlet"],["tabindex","0","role","button",3,"click","keydown","pBind"],["data-p-icon","bars",3,"pBind",4,"ngIf"],["data-p-icon","bars",3,"pBind"]],template:function(n,i){if(n&1){let a=O();_e(),l(0,Dn,2,4,"div",3)(1,Hn,4,9,"a",4),d(2,"ul",5,0),z("itemClick",function(f){return g(a),I(i.onItemClick(f))})("focus",function(f){return g(a),I(i.onMenuFocus(f))})("blur",function(f){return g(a),I(i.onMenuBlur(f))})("keydown",function(f){return g(a),I(i.onKeyDown(f))})("itemMouseEnter",function(f){return g(a),I(i.onItemMouseEnter(f))})("mouseleave",function(f){return g(a),I(i.onMouseLeave(f))}),p(),l(4,Rn,2,4,"div",6)(5,On,2,2,"ng-template",null,1,M)}if(n&2){let a=$(6);s("ngIf",i.startTemplate||i._startTemplate),c(),s("ngIf",i.model&&i.model.length>0),c(),s("items",i.processedItems)("itemTemplate",i.itemTemplate)("menuId",i.id)("root",!0)("baseZIndex",i.baseZIndex)("autoZIndex",i.autoZIndex)("mobileActive",i.mobileActive)("autoDisplay",i.autoDisplay)("focusedItemId",i.focused?i.focusedItemId:void 0)("submenuiconTemplate",i.submenuIconTemplate||i._submenuIconTemplate)("activeItemPath",i.activeItemPath())("pt",i.pt())("pBind",i.ptm("rootList")),h("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledBy),c(2),s("ngIf",i.endTemplate||i._endTemplate)("ngIfElse",a)}},dependencies:[j,ee,Ae,Ve,$n,Ne,k,Lt,ae,B,Oe],encapsulation:2,changeDetection:0})}return t})(),Et=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=le({type:t});static \u0275inj=re({imports:[Ge,B,B]})}return t})();var Zn=(t,r)=>({"ml-auto":t,"ml-2":r}),qn=t=>["ml-auto pi",t];function Gn(t,r){t&1&&(d(0,"span"),x(1,"SAE"),p())}function Qn(t,r){if(t&1&&b(0,"p-badge",5),t&2){let e=m(),n=e.$implicit,i=e.root;s("ngClass",Q(2,Zn,!i,i))("value",n.badge)}}function Un(t,r){if(t&1&&(d(0,"span",6),x(1),p()),t&2){let e=m().$implicit;c(),Ie(" ",e.shortcut," ")}}function Wn(t,r){if(t&1&&b(0,"i",7),t&2){let e=m().root;s("ngClass",st(1,qn,e?"pi-angle-down":"pi-angle-right"))}}function Jn(t,r){if(t&1&&(d(0,"a",4)(1,"span"),x(2),p(),pe(3,Qn,1,5,"p-badge",5),pe(4,Un,2,1,"span",6),pe(5,Wn,1,3,"i",7),p()),t&2){let e=r.$implicit;s("routerLink",e.routerLink),c(2),G(e.label),c(),de(e.badge?3:-1),c(),de(e.shortcut?4:-1),c(),de(e.items?5:-1)}}function Xn(t,r){t&1&&(d(0,"div",8),b(1,"input",9)(2,"p-avatar",10),p())}var we=class t{items=[{label:"Home",icon:"pi pi-home",routerLink:["/"]},{label:"Sandbox",routerLink:["/sandbox"]},{label:"Projects",icon:"pi pi-search",badge:"3",items:[{label:"Core",icon:"pi pi-bolt",shortcut:"\u2318+S"},{label:"Blocks",icon:"pi pi-server",shortcut:"\u2318+B"},{separator:!0},{label:"UI Kit",icon:"pi pi-pencil",shortcut:"\u2318+U"}]}];static \u0275fac=function(e){return new(e||t)};static \u0275cmp=_({type:t,selectors:[["app-header"]],decls:7,vars:1,consts:[["start",""],["item",""],["end",""],[1,"rounded-none",3,"model"],["pRipple","",1,"flex","items-center","p-menubar-item-link",3,"routerLink"],[3,"ngClass","value"],[1,"ml-auto","border","border-surface","rounded","bg-emphasis","text-muted-color","text-xs","p-1"],[3,"ngClass"],[1,"flex","items-center","gap-2"],["type","text","pInputText","","placeholder","Search",1,"w-36"],["image","https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m3vzr2sm65rp4f.webp","shape","circle"]],template:function(e,n){e&1&&(d(0,"p-menubar",3),l(1,Gn,2,0,"ng-template",null,0,M)(3,Jn,6,5,"ng-template",null,1,M)(5,Xn,3,0,"ng-template",null,2,M),p()),e&2&&s("model",n.items)},dependencies:[j,xe,ye,Tt,je,ae,Me,It,gt,Et,Ge,ke],encapsulation:2})};var Pe=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=_({type:t,selectors:[["app-main-layout"]],decls:8,vars:0,consts:[[1,"main-header"],[1,"main-body"]],template:function(e,n){e&1&&(d(0,"div")(1,"div",0),b(2,"app-header"),p(),d(3,"div",1)(4,"div"),b(5,"router-outlet"),p(),d(6,"div"),b(7,"app-footer"),p()()())},dependencies:[pt,Se,we],styles:[".main-header[_ngcontent-%COMP%]{position:fixed;top:0;left:0;right:0;height:var(--app-header-height);z-index:1000}.main-body[_ngcontent-%COMP%]{margin-top:var(--app-header-height)}"]})};var _a=[{path:"",component:Pe,children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:Le},{path:"sandbox",loadChildren:()=>import("./chunk-JLRLBAT5.js").then(t=>t.SandboxRoutes)}]},{path:"samples",loadChildren:()=>import("./chunk-6C3SKMRL.js").then(t=>t.SampleRoutes)}];export{_a as PagesRoutes};
