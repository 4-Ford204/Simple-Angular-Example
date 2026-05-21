import{a as ge}from"./chunk-CGT7IA7N.js";import"./chunk-7UZYWCAJ.js";import{c as ce,d as N,f as R,h as A}from"./chunk-4O3FVBGX.js";import{a as de}from"./chunk-MLUGATPR.js";import"./chunk-OVMTSP2Y.js";import{a as ue}from"./chunk-3CSWPRBR.js";import{c as pe,d as me,e as w}from"./chunk-IS5FCBNF.js";import{fa as re,ga as O,ma as le}from"./chunk-JIHEE4C7.js";import{i as ie,k as ae,m as k,o as S}from"./chunk-HNSURZOS.js";import{$a as l,Ab as T,Bb as M,Cb as m,Da as $,Gb as v,Hb as z,Ib as ne,Jb as te,N as j,O as P,Oa as y,Ob as se,Pa as Y,Q as L,Qb as f,Rb as oe,S as I,Sa as J,Ta as K,Ua as _,X as V,Y as H,Z as q,Zb as x,_a as F,ab as p,ea as G,fb as s,gb as d,hb as u,ia as B,ib as r,lc as D,ob as h,pb as U,ta as W,ub as X,vb as a,wb as Z,xb as ee,ya as i,yb as C}from"./chunk-K6DSXF3S.js";import"./chunk-4CLCTAJ7.js";var fe=`
    .p-message {
        border-radius: dt('message.border.radius');
        outline-width: dt('message.border.width');
        outline-style: solid;
    }

    .p-message-content {
        display: flex;
        align-items: center;
        padding: dt('message.content.padding');
        gap: dt('message.content.gap');
        height: 100%;
    }

    .p-message-icon {
        flex-shrink: 0;
    }

    .p-message-close-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        margin-inline-start: auto;
        overflow: hidden;
        position: relative;
        width: dt('message.close.button.width');
        height: dt('message.close.button.height');
        border-radius: dt('message.close.button.border.radius');
        background: transparent;
        transition:
            background dt('message.transition.duration'),
            color dt('message.transition.duration'),
            outline-color dt('message.transition.duration'),
            box-shadow dt('message.transition.duration'),
            opacity 0.3s;
        outline-color: transparent;
        color: inherit;
        padding: 0;
        border: none;
        cursor: pointer;
        user-select: none;
    }

    .p-message-close-icon {
        font-size: dt('message.close.icon.size');
        width: dt('message.close.icon.size');
        height: dt('message.close.icon.size');
    }

    .p-message-close-button:focus-visible {
        outline-width: dt('message.close.button.focus.ring.width');
        outline-style: dt('message.close.button.focus.ring.style');
        outline-offset: dt('message.close.button.focus.ring.offset');
    }

    .p-message-info {
        background: dt('message.info.background');
        outline-color: dt('message.info.border.color');
        color: dt('message.info.color');
        box-shadow: dt('message.info.shadow');
    }

    .p-message-info .p-message-close-button:focus-visible {
        outline-color: dt('message.info.close.button.focus.ring.color');
        box-shadow: dt('message.info.close.button.focus.ring.shadow');
    }

    .p-message-info .p-message-close-button:hover {
        background: dt('message.info.close.button.hover.background');
    }

    .p-message-info.p-message-outlined {
        color: dt('message.info.outlined.color');
        outline-color: dt('message.info.outlined.border.color');
    }

    .p-message-info.p-message-simple {
        color: dt('message.info.simple.color');
    }

    .p-message-success {
        background: dt('message.success.background');
        outline-color: dt('message.success.border.color');
        color: dt('message.success.color');
        box-shadow: dt('message.success.shadow');
    }

    .p-message-success .p-message-close-button:focus-visible {
        outline-color: dt('message.success.close.button.focus.ring.color');
        box-shadow: dt('message.success.close.button.focus.ring.shadow');
    }

    .p-message-success .p-message-close-button:hover {
        background: dt('message.success.close.button.hover.background');
    }

    .p-message-success.p-message-outlined {
        color: dt('message.success.outlined.color');
        outline-color: dt('message.success.outlined.border.color');
    }

    .p-message-success.p-message-simple {
        color: dt('message.success.simple.color');
    }

    .p-message-warn {
        background: dt('message.warn.background');
        outline-color: dt('message.warn.border.color');
        color: dt('message.warn.color');
        box-shadow: dt('message.warn.shadow');
    }

    .p-message-warn .p-message-close-button:focus-visible {
        outline-color: dt('message.warn.close.button.focus.ring.color');
        box-shadow: dt('message.warn.close.button.focus.ring.shadow');
    }

    .p-message-warn .p-message-close-button:hover {
        background: dt('message.warn.close.button.hover.background');
    }

    .p-message-warn.p-message-outlined {
        color: dt('message.warn.outlined.color');
        outline-color: dt('message.warn.outlined.border.color');
    }

    .p-message-warn.p-message-simple {
        color: dt('message.warn.simple.color');
    }

    .p-message-error {
        background: dt('message.error.background');
        outline-color: dt('message.error.border.color');
        color: dt('message.error.color');
        box-shadow: dt('message.error.shadow');
    }

    .p-message-error .p-message-close-button:focus-visible {
        outline-color: dt('message.error.close.button.focus.ring.color');
        box-shadow: dt('message.error.close.button.focus.ring.shadow');
    }

    .p-message-error .p-message-close-button:hover {
        background: dt('message.error.close.button.hover.background');
    }

    .p-message-error.p-message-outlined {
        color: dt('message.error.outlined.color');
        outline-color: dt('message.error.outlined.border.color');
    }

    .p-message-error.p-message-simple {
        color: dt('message.error.simple.color');
    }

    .p-message-secondary {
        background: dt('message.secondary.background');
        outline-color: dt('message.secondary.border.color');
        color: dt('message.secondary.color');
        box-shadow: dt('message.secondary.shadow');
    }

    .p-message-secondary .p-message-close-button:focus-visible {
        outline-color: dt('message.secondary.close.button.focus.ring.color');
        box-shadow: dt('message.secondary.close.button.focus.ring.shadow');
    }

    .p-message-secondary .p-message-close-button:hover {
        background: dt('message.secondary.close.button.hover.background');
    }

    .p-message-secondary.p-message-outlined {
        color: dt('message.secondary.outlined.color');
        outline-color: dt('message.secondary.outlined.border.color');
    }

    .p-message-secondary.p-message-simple {
        color: dt('message.secondary.simple.color');
    }

    .p-message-contrast {
        background: dt('message.contrast.background');
        outline-color: dt('message.contrast.border.color');
        color: dt('message.contrast.color');
        box-shadow: dt('message.contrast.shadow');
    }

    .p-message-contrast .p-message-close-button:focus-visible {
        outline-color: dt('message.contrast.close.button.focus.ring.color');
        box-shadow: dt('message.contrast.close.button.focus.ring.shadow');
    }

    .p-message-contrast .p-message-close-button:hover {
        background: dt('message.contrast.close.button.hover.background');
    }

    .p-message-contrast.p-message-outlined {
        color: dt('message.contrast.outlined.color');
        outline-color: dt('message.contrast.outlined.border.color');
    }

    .p-message-contrast.p-message-simple {
        color: dt('message.contrast.simple.color');
    }

    .p-message-text {
        font-size: dt('message.text.font.size');
        font-weight: dt('message.text.font.weight');
    }

    .p-message-icon {
        font-size: dt('message.icon.size');
        width: dt('message.icon.size');
        height: dt('message.icon.size');
    }

    .p-message-enter-from {
        opacity: 0;
    }

    .p-message-enter-active {
        transition: opacity 0.3s;
    }

    .p-message.p-message-leave-from {
        max-height: 1000px;
    }

    .p-message.p-message-leave-to {
        max-height: 0;
        opacity: 0;
        margin: 0;
    }

    .p-message-leave-active {
        overflow: hidden;
        transition:
            max-height 0.45s cubic-bezier(0, 1, 0, 1),
            opacity 0.3s,
            margin 0.3s;
    }

    .p-message-leave-active .p-message-close-button {
        opacity: 0;
    }

    .p-message-sm .p-message-content {
        padding: dt('message.content.sm.padding');
    }

    .p-message-sm .p-message-text {
        font-size: dt('message.text.sm.font.size');
    }

    .p-message-sm .p-message-icon {
        font-size: dt('message.icon.sm.size');
        width: dt('message.icon.sm.size');
        height: dt('message.icon.sm.size');
    }

    .p-message-sm .p-message-close-icon {
        font-size: dt('message.close.icon.sm.size');
        width: dt('message.close.icon.sm.size');
        height: dt('message.close.icon.sm.size');
    }

    .p-message-lg .p-message-content {
        padding: dt('message.content.lg.padding');
    }

    .p-message-lg .p-message-text {
        font-size: dt('message.text.lg.font.size');
    }

    .p-message-lg .p-message-icon {
        font-size: dt('message.icon.lg.size');
        width: dt('message.icon.lg.size');
        height: dt('message.icon.lg.size');
    }

    .p-message-lg .p-message-close-icon {
        font-size: dt('message.close.icon.lg.size');
        width: dt('message.close.icon.lg.size');
        height: dt('message.close.icon.lg.size');
    }

    .p-message-outlined {
        background: transparent;
        outline-width: dt('message.outlined.border.width');
    }

    .p-message-simple {
        background: transparent;
        outline-color: transparent;
        box-shadow: none;
    }

    .p-message-simple .p-message-content {
        padding: dt('message.simple.content.padding');
    }

    .p-message-outlined .p-message-close-button:hover,
    .p-message-simple .p-message-close-button:hover {
        background: transparent;
    }
`;var Me=["container"],we=["icon"],Ie=["closeicon"],ze=["*"],ke=(e,t)=>({showTransitionParams:e,hideTransitionParams:t}),Se=e=>({value:"visible()",params:e}),Oe=e=>({closeCallback:e});function Ee(e,t){e&1&&h(0)}function Be(e,t){if(e&1&&_(0,Ee,1,0,"ng-container",4),e&2){let n=a(2);s("ngTemplateOutlet",n.iconTemplate||n._iconTemplate)}}function Fe(e,t){if(e&1&&r(0,"i",2),e&2){let n=a(2);v(n.cn(n.cx("icon"),n.icon)),s("pBind",n.ptm("icon"))}}function De(e,t){e&1&&h(0)}function Ne(e,t){if(e&1&&_(0,De,1,0,"ng-container",5),e&2){let n=a(2);s("ngTemplateOutlet",n.containerTemplate||n._containerTemplate)("ngTemplateOutletContext",f(2,Oe,n.closeCallback))}}function Re(e,t){if(e&1&&r(0,"span",9),e&2){let n=a(4);s("pBind",n.ptm("text"))("ngClass",n.cx("text"))("innerHTML",n.text,W)}}function Ae(e,t){if(e&1&&(d(0,"div"),_(1,Re,1,3,"span",8),u()),e&2){let n=a(3);i(),s("ngIf",!n.escape)}}function Qe(e,t){if(e&1&&(d(0,"span",7),z(1),u()),e&2){let n=a(4);s("pBind",n.ptm("text"))("ngClass",n.cx("text")),i(),ne(n.text)}}function je(e,t){if(e&1&&_(0,Qe,2,3,"span",10),e&2){let n=a(3);s("ngIf",n.escape&&n.text)}}function Pe(e,t){if(e&1&&(_(0,Ae,2,1,"div",6)(1,je,1,1,"ng-template",null,0,x),d(3,"span",7),ee(4),u()),e&2){let n=m(2),o=a(2);s("ngIf",!o.escape)("ngIfElse",n),i(3),s("pBind",o.ptm("text"))("ngClass",o.cx("text"))}}function Le(e,t){if(e&1&&r(0,"i",7),e&2){let n=a(3);v(n.cn(n.cx("closeIcon"),n.closeIcon)),s("pBind",n.ptm("closeIcon"))("ngClass",n.closeIcon)}}function Ve(e,t){e&1&&h(0)}function He(e,t){if(e&1&&_(0,Ve,1,0,"ng-container",4),e&2){let n=a(3);s("ngTemplateOutlet",n.closeIconTemplate||n._closeIconTemplate)}}function qe(e,t){if(e&1&&(q(),r(0,"svg",14)),e&2){let n=a(3);v(n.cx("closeIcon")),s("pBind",n.ptm("closeIcon"))}}function Ge(e,t){if(e&1){let n=U();d(0,"button",11),X("click",function(c){V(n);let b=a(2);return H(b.close(c))}),l(1,Le,1,4,"i",12),l(2,He,1,1,"ng-container"),l(3,qe,1,3,":svg:svg",13),u()}if(e&2){let n=a(2);v(n.cx("closeButton")),s("pBind",n.ptm("closeButton")),F("aria-label",n.closeAriaLabel),i(),p(n.closeIcon?1:-1),i(),p(n.closeIconTemplate||n._closeIconTemplate?2:-1),i(),p(!n.closeIconTemplate&&!n._closeIconTemplate&&!n.closeIcon?3:-1)}}function We(e,t){if(e&1&&(d(0,"div",2)(1,"div",2),l(2,Be,1,1,"ng-container"),l(3,Fe,1,3,"i",1),l(4,Ne,1,4,"ng-container")(5,Pe,5,4),l(6,Ge,4,7,"button",3),u()()),e&2){let n=a();v(n.cn(n.cx("root"),n.styleClass)),s("pBind",n.ptm("root"))("@messageAnimation",f(16,Se,oe(13,ke,n.showTransitionOptions,n.hideTransitionOptions))),F("aria-live","polite")("role","alert"),i(),v(n.cx("content")),s("pBind",n.ptm("content")),i(),p(n.iconTemplate||n._iconTemplate?2:-1),i(),p(n.icon?3:-1),i(),p(n.containerTemplate||n._containerTemplate?4:5),i(2),p(n.closable?6:-1)}}var $e={root:({instance:e})=>["p-message p-component p-message-"+e.severity,"p-message-"+e.variant,{"p-message-sm":e.size==="small","p-message-lg":e.size==="large"}],content:"p-message-content",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close-button",closeIcon:"p-message-close-icon"},_e=(()=>{class e extends le{name="message";style=fe;classes=$e;static \u0275fac=(()=>{let n;return function(c){return(n||(n=B(e)))(c||e)}})();static \u0275prov=j({token:e,factory:e.\u0275fac})}return e})();var xe=new L("MESSAGE_INSTANCE"),Q=(()=>{class e extends me{_componentStyle=I(_e);bindDirectiveInstance=I(w,{self:!0});$pcMessage=I(xe,{optional:!0,skipSelf:!0})??void 0;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}severity="info";text;escape=!0;style;styleClass;closable=!1;icon;closeIcon;life;showTransitionOptions="300ms ease-out";hideTransitionOptions="200ms cubic-bezier(0.86, 0, 0.07, 1)";size;variant;onClose=new $;get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}visible=G(!0);containerTemplate;iconTemplate;closeIconTemplate;templates;_containerTemplate;_iconTemplate;_closeIconTemplate;closeCallback=n=>{this.close(n)};onInit(){this.life&&setTimeout(()=>{this.visible.set(!1)},this.life)}onAfterContentInit(){this.templates?.forEach(n=>{switch(n.getType()){case"container":this._containerTemplate=n.template;break;case"icon":this._iconTemplate=n.template;break;case"closeicon":this._closeIconTemplate=n.template;break}})}close(n){this.visible.set(!1),this.onClose.emit({originalEvent:n})}static \u0275fac=(()=>{let n;return function(c){return(n||(n=B(e)))(c||e)}})();static \u0275cmp=y({type:e,selectors:[["p-message"]],contentQueries:function(o,c,b){if(o&1&&(C(b,Me,4),C(b,we,4),C(b,Ie,4),C(b,re,4)),o&2){let g;T(g=M())&&(c.containerTemplate=g.first),T(g=M())&&(c.iconTemplate=g.first),T(g=M())&&(c.closeIconTemplate=g.first),T(g=M())&&(c.templates=g)}},inputs:{severity:"severity",text:"text",escape:[2,"escape","escape",D],style:"style",styleClass:"styleClass",closable:[2,"closable","closable",D],icon:"icon",closeIcon:"closeIcon",life:"life",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",size:"size",variant:"variant"},outputs:{onClose:"onClose"},features:[se([_e,{provide:xe,useExisting:e},{provide:pe,useExisting:e}]),K([w]),J],ngContentSelectors:ze,decls:1,vars:1,consts:[["escapeOut",""],[3,"pBind","class"],[3,"pBind"],["pRipple","","type","button",3,"pBind","class"],[4,"ngTemplateOutlet"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf","ngIfElse"],[3,"pBind","ngClass"],[3,"pBind","ngClass","innerHTML",4,"ngIf"],[3,"pBind","ngClass","innerHTML"],[3,"pBind","ngClass",4,"ngIf"],["pRipple","","type","button",3,"click","pBind"],[3,"pBind","class","ngClass"],["data-p-icon","times",3,"pBind","class"],["data-p-icon","times",3,"pBind"]],template:function(o,c){o&1&&(Z(),l(0,We,7,18,"div",1)),o&2&&p(c.visible()?0:-1)},dependencies:[S,ie,ae,k,ge,de,O,w],encapsulation:2,data:{animation:[ce("messageAnimation",[A(":enter",[R({opacity:0,transform:"translateY(-25%)"}),N("{{showTransitionParams}}")]),A(":leave",[N("{{hideTransitionParams}}",R({height:0,marginTop:0,marginBottom:0,marginLeft:0,marginRight:0,opacity:0}))])])]},changeDetection:0})}return e})(),ve=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=Y({type:e});static \u0275inj=P({imports:[Q,O,O]})}return e})();var E=class e{severity="info";icon="";size=void 0;variant=void 0;text="";static \u0275fac=function(n){return new(n||e)};static \u0275cmp=y({type:e,selectors:[["app-message-component"]],inputs:{severity:"severity",icon:"icon",size:"size",variant:"variant",text:"text"},decls:2,vars:5,consts:[[3,"severity","icon","size","variant"]],template:function(n,o){n&1&&(d(0,"p-message",0),z(1),u()),n&2&&(s("severity",o.severity)("icon",o.icon)("size",o.size)("variant",o.variant),i(),te(" ",o.text,`
`))},dependencies:[ve,Q],encapsulation:2})};var Ke=e=>({title:"Basic",content:e}),Ue=e=>({title:"Severity",content:e}),Xe=e=>({title:"Icon",content:e}),Ze=e=>({title:"Outlined",content:e}),en=e=>({title:"Simple",content:e}),nn=e=>({title:"Sizes",content:e,direction:"column"});function tn(e,t){e&1&&r(0,"app-message-component",8)}function sn(e,t){e&1&&r(0,"app-message-component",9)(1,"app-message-component",10)(2,"app-message-component",11)(3,"app-message-component",12)(4,"app-message-component",13)(5,"app-message-component",14)}function on(e,t){e&1&&r(0,"app-message-component",15)}function an(e,t){e&1&&r(0,"app-message-component",16)(1,"app-message-component",17)(2,"app-message-component",18)(3,"app-message-component",19)(4,"app-message-component",20)(5,"app-message-component",21)}function cn(e,t){e&1&&r(0,"app-message-component",22)(1,"app-message-component",23)(2,"app-message-component",24)(3,"app-message-component",25)(4,"app-message-component",26)(5,"app-message-component",27)}function rn(e,t){e&1&&r(0,"app-message-component",28)(1,"app-message-component",29)(2,"app-message-component",30)}function ln(e,t){if(e&1&&h(0,31)(1,31)(2,31)(3,31)(4,31)(5,31),e&2){a();let n=m(1),o=m(4),c=m(6),b=m(8),g=m(10),he=m(12),Ce=m(14);s("ngTemplateOutlet",n.panelTemplate)("ngTemplateOutletContext",f(12,Ke,o)),i(),s("ngTemplateOutlet",n.panelTemplate)("ngTemplateOutletContext",f(14,Ue,c)),i(),s("ngTemplateOutlet",n.panelTemplate)("ngTemplateOutletContext",f(16,Xe,b)),i(),s("ngTemplateOutlet",n.panelTemplate)("ngTemplateOutletContext",f(18,Ze,g)),i(),s("ngTemplateOutlet",n.panelTemplate)("ngTemplateOutletContext",f(20,en,he)),i(),s("ngTemplateOutlet",n.panelTemplate)("ngTemplateOutletContext",f(22,nn,Ce))}}var ye=class e{static \u0275fac=function(n){return new(n||e)};static \u0275cmp=y({type:e,selectors:[["app-message-sandbox"]],decls:16,vars:1,consts:[["sandbox",""],["basic",""],["severity",""],["icon",""],["outlined",""],["simple",""],["sizes",""],[1,"flex","flex-col","gap-5"],["text","Message Content"],["severity","success","text","Success Message"],["severity","info","text","Info Message"],["severity","warn","text","Warn Message"],["severity","error","text","Error Message"],["severity","secondary","text","Secondary Message"],["severity","contrast","text","Contrast Message"],["severity","info","icon","pi pi-send","text","Info Message"],["severity","success","variant","outlined","text","Success Message"],["severity","info","variant","outlined","text","Info Message"],["severity","warn","variant","outlined","text","Warn Message"],["severity","error","variant","outlined","text","Error Message"],["severity","secondary","variant","outlined","text","Secondary Message"],["severity","contrast","variant","outlined","text","Contrast Message"],["severity","success","variant","simple","text","Success Message"],["severity","info","variant","simple","text","Info Message"],["severity","warn","variant","simple","text","Warn Message"],["severity","error","variant","simple","text","Error Message"],["severity","secondary","variant","simple","text","Secondary Message"],["severity","contrast","variant","simple","text","Contrast Message"],["icon","pi pi-send","size","small","text","Small Message"],["icon","pi pi-user","text","Normal Message"],["icon","pi pi-check","size","large","text","Large Message"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,o){if(n&1&&(r(0,"app-sandbox",null,0),d(2,"div",7),_(3,tn,1,0,"ng-template",null,1,x)(5,sn,6,0,"ng-template",null,2,x)(7,on,1,0,"ng-template",null,3,x)(9,an,6,0,"ng-template",null,4,x)(11,cn,6,0,"ng-template",null,5,x)(13,rn,3,0,"ng-template",null,6,x),l(15,ln,6,24),u()),n&2){let c=m(1);i(15),p(c.panelTemplate?15:-1)}},dependencies:[S,k,E,ue],encapsulation:2})};export{ye as MessageSandbox};
