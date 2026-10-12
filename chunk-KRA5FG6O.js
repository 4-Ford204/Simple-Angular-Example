import{a as de}from"./chunk-X5S4HBFE.js";import"./chunk-7UZYWCAJ.js";import{c as ce,d as N,f as R,h as P}from"./chunk-4O3FVBGX.js";import{a as ue}from"./chunk-YN2GG4KM.js";import"./chunk-JAYZXRA3.js";import{a as fe}from"./chunk-G62OKKQB.js";import{c as me,d as ge,e as w}from"./chunk-RIDS5ZDI.js";import{O as pe}from"./chunk-GYKB7NGO.js";import{$ as E,X as re,_ as le,i as ie,k as ae,m as S,p as k}from"./chunk-IMSU5JY7.js";import{$ as V,$b as se,Ac as F,Bb as h,Cb as J,Ha as W,Hb as X,Ib as a,Jb as Z,Kb as ee,Lb as C,Ma as i,Nb as T,Ob as M,Pb as m,Q,R as j,Ra as $,T as L,Tb as v,Ub as z,V as I,Vb as ne,Wb as te,_ as H,aa as q,ab as y,bb as K,bc as f,cc as oe,eb as U,fb as Y,gb as _,ha as G,ma as B,mb as D,mc as x,nb as l,ob as p,sb as t,tb as d,ub as u,vb as r}from"./chunk-ZUPP7Z3G.js";import"./chunk-4CLCTAJ7.js";var _e=`
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
`;var we=["container"],Ie=["icon"],ze=["closeicon"],Se=["*"],ke=(e,s)=>({showTransitionParams:e,hideTransitionParams:s}),Ee=e=>({value:"visible()",params:e}),Oe=e=>({closeCallback:e});function Be(e,s){e&1&&h(0)}function De(e,s){if(e&1&&_(0,Be,1,0,"ng-container",4),e&2){let n=a(2);t("ngTemplateOutlet",n.iconTemplate||n._iconTemplate)}}function Fe(e,s){if(e&1&&r(0,"i",2),e&2){let n=a(2);v(n.cn(n.cx("icon"),n.icon)),t("pBind",n.ptm("icon"))}}function Ne(e,s){e&1&&h(0)}function Re(e,s){if(e&1&&_(0,Ne,1,0,"ng-container",5),e&2){let n=a(2);t("ngTemplateOutlet",n.containerTemplate||n._containerTemplate)("ngTemplateOutletContext",f(2,Oe,n.closeCallback))}}function Pe(e,s){if(e&1&&r(0,"span",9),e&2){let n=a(4);t("pBind",n.ptm("text"))("ngClass",n.cx("text"))("innerHTML",n.text,W)}}function Ae(e,s){if(e&1&&(d(0,"div"),_(1,Pe,1,3,"span",8),u()),e&2){let n=a(3);i(),t("ngIf",!n.escape)}}function Qe(e,s){if(e&1&&(d(0,"span",7),z(1),u()),e&2){let n=a(4);t("pBind",n.ptm("text"))("ngClass",n.cx("text")),i(),ne(n.text)}}function je(e,s){if(e&1&&_(0,Qe,2,3,"span",10),e&2){let n=a(3);t("ngIf",n.escape&&n.text)}}function Le(e,s){if(e&1&&(_(0,Ae,2,1,"div",6)(1,je,1,1,"ng-template",null,0,x),d(3,"span",7),ee(4),u()),e&2){let n=m(2),o=a(2);t("ngIf",!o.escape)("ngIfElse",n),i(3),t("pBind",o.ptm("text"))("ngClass",o.cx("text"))}}function He(e,s){if(e&1&&r(0,"i",7),e&2){let n=a(3);v(n.cn(n.cx("closeIcon"),n.closeIcon)),t("pBind",n.ptm("closeIcon"))("ngClass",n.closeIcon)}}function Ve(e,s){e&1&&h(0)}function qe(e,s){if(e&1&&_(0,Ve,1,0,"ng-container",4),e&2){let n=a(3);t("ngTemplateOutlet",n.closeIconTemplate||n._closeIconTemplate)}}function Ge(e,s){if(e&1&&(q(),r(0,"svg",14)),e&2){let n=a(3);v(n.cx("closeIcon")),t("pBind",n.ptm("closeIcon"))}}function We(e,s){if(e&1){let n=J();d(0,"button",11),X("click",function(c){H(n);let b=a(2);return V(b.close(c))}),l(1,He,1,4,"i",12),l(2,qe,1,1,"ng-container"),l(3,Ge,1,3,":svg:svg",13),u()}if(e&2){let n=a(2);v(n.cx("closeButton")),t("pBind",n.ptm("closeButton")),D("aria-label",n.closeAriaLabel),i(),p(n.closeIcon?1:-1),i(),p(n.closeIconTemplate||n._closeIconTemplate?2:-1),i(),p(!n.closeIconTemplate&&!n._closeIconTemplate&&!n.closeIcon?3:-1)}}function $e(e,s){if(e&1&&(d(0,"div",2)(1,"div",2),l(2,De,1,1,"ng-container"),l(3,Fe,1,3,"i",1),l(4,Re,1,4,"ng-container")(5,Le,5,4),l(6,We,4,7,"button",3),u()()),e&2){let n=a();v(n.cn(n.cx("root"),n.styleClass)),t("pBind",n.ptm("root"))("@messageAnimation",f(16,Ee,oe(13,ke,n.showTransitionOptions,n.hideTransitionOptions))),D("aria-live","polite")("role","alert"),i(),v(n.cx("content")),t("pBind",n.ptm("content")),i(),p(n.iconTemplate||n._iconTemplate?2:-1),i(),p(n.icon?3:-1),i(),p(n.containerTemplate||n._containerTemplate?4:5),i(2),p(n.closable?6:-1)}}var Ke={root:({instance:e})=>["p-message p-component p-message-"+e.severity,"p-message-"+e.variant,{"p-message-sm":e.size==="small","p-message-lg":e.size==="large"}],content:"p-message-content",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close-button",closeIcon:"p-message-close-icon"},xe=(()=>{class e extends pe{name="message";style=_e;classes=Ke;static \u0275fac=(()=>{let n;return function(c){return(n||(n=B(e)))(c||e)}})();static \u0275prov=Q({token:e,factory:e.\u0275fac})}return e})();var be=new L("MESSAGE_INSTANCE"),A=(()=>{class e extends ge{_componentStyle=I(xe);bindDirectiveInstance=I(w,{self:!0});$pcMessage=I(be,{optional:!0,skipSelf:!0})??void 0;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}severity="info";text;escape=!0;style;styleClass;closable=!1;icon;closeIcon;life;showTransitionOptions="300ms ease-out";hideTransitionOptions="200ms cubic-bezier(0.86, 0, 0.07, 1)";size;variant;onClose=new $;get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}visible=G(!0);containerTemplate;iconTemplate;closeIconTemplate;templates;_containerTemplate;_iconTemplate;_closeIconTemplate;closeCallback=n=>{this.close(n)};onInit(){this.life&&setTimeout(()=>{this.visible.set(!1)},this.life)}onAfterContentInit(){this.templates?.forEach(n=>{switch(n.getType()){case"container":this._containerTemplate=n.template;break;case"icon":this._iconTemplate=n.template;break;case"closeicon":this._closeIconTemplate=n.template;break}})}close(n){this.visible.set(!1),this.onClose.emit({originalEvent:n})}static \u0275fac=(()=>{let n;return function(c){return(n||(n=B(e)))(c||e)}})();static \u0275cmp=y({type:e,selectors:[["p-message"]],contentQueries:function(o,c,b){if(o&1&&(C(b,we,4),C(b,Ie,4),C(b,ze,4),C(b,le,4)),o&2){let g;T(g=M())&&(c.containerTemplate=g.first),T(g=M())&&(c.iconTemplate=g.first),T(g=M())&&(c.closeIconTemplate=g.first),T(g=M())&&(c.templates=g)}},inputs:{severity:"severity",text:"text",escape:[2,"escape","escape",F],style:"style",styleClass:"styleClass",closable:[2,"closable","closable",F],icon:"icon",closeIcon:"closeIcon",life:"life",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",size:"size",variant:"variant"},outputs:{onClose:"onClose"},features:[se([xe,{provide:be,useExisting:e},{provide:me,useExisting:e}]),Y([w]),U],ngContentSelectors:Se,decls:1,vars:1,consts:[["escapeOut",""],[3,"pBind","class"],[3,"pBind"],["pRipple","","type","button",3,"pBind","class"],[4,"ngTemplateOutlet"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf","ngIfElse"],[3,"pBind","ngClass"],[3,"pBind","ngClass","innerHTML",4,"ngIf"],[3,"pBind","ngClass","innerHTML"],[3,"pBind","ngClass",4,"ngIf"],["pRipple","","type","button",3,"click","pBind"],[3,"pBind","class","ngClass"],["data-p-icon","times",3,"pBind","class"],["data-p-icon","times",3,"pBind"]],template:function(o,c){o&1&&(Z(),l(0,$e,7,18,"div",1)),o&2&&p(c.visible()?0:-1)},dependencies:[k,ie,ae,S,de,ue,E,w],encapsulation:2,data:{animation:[ce("messageAnimation",[P(":enter",[R({opacity:0,transform:"translateY(-25%)"}),N("{{showTransitionParams}}")]),P(":leave",[N("{{hideTransitionParams}}",R({height:0,marginTop:0,marginBottom:0,marginLeft:0,marginRight:0,opacity:0}))])])]},changeDetection:0})}return e})(),ye=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=K({type:e});static \u0275inj=j({imports:[A,E,E]})}return e})();var O=class e{severity="info";icon="";size=void 0;variant=void 0;text="";static \u0275fac=function(n){return new(n||e)};static \u0275cmp=y({type:e,selectors:[["app-message-component"]],inputs:{severity:"severity",icon:"icon",size:"size",variant:"variant",text:"text"},decls:2,vars:5,consts:[[3,"severity","icon","size","variant"]],template:function(n,o){n&1&&(d(0,"p-message",0),z(1),u()),n&2&&(t("severity",o.severity)("icon",o.icon)("size",o.size)("variant",o.variant),i(),te(" ",o.text,`
`))},dependencies:[ye,A],encapsulation:2})};var Je=e=>({title:"Basic",content:e}),Xe=e=>({title:"Severity",content:e}),Ze=e=>({title:"Icon",content:e}),en=e=>({title:"Outlined",content:e}),nn=e=>({title:"Simple",content:e}),tn=e=>({title:"Sizes",content:e,direction:"column"});function sn(e,s){e&1&&r(0,"app-message-component",8)}function on(e,s){e&1&&r(0,"app-message-component",9)(1,"app-message-component",10)(2,"app-message-component",11)(3,"app-message-component",12)(4,"app-message-component",13)(5,"app-message-component",14)}function an(e,s){if(e&1&&r(0,"app-message-component",15),e&2){let n=a();t("icon",n.PrimeIcons.SEND)}}function cn(e,s){e&1&&r(0,"app-message-component",16)(1,"app-message-component",17)(2,"app-message-component",18)(3,"app-message-component",19)(4,"app-message-component",20)(5,"app-message-component",21)}function rn(e,s){e&1&&r(0,"app-message-component",22)(1,"app-message-component",23)(2,"app-message-component",24)(3,"app-message-component",25)(4,"app-message-component",26)(5,"app-message-component",27)}function ln(e,s){if(e&1&&r(0,"app-message-component",28)(1,"app-message-component",29)(2,"app-message-component",30),e&2){let n=a();t("icon",n.PrimeIcons.SEND),i(),t("icon",n.PrimeIcons.USER),i(),t("icon",n.PrimeIcons.CHECK)}}function pn(e,s){if(e&1&&h(0,31)(1,31)(2,31)(3,31)(4,31)(5,31),e&2){a();let n=m(1),o=m(4),c=m(6),b=m(8),g=m(10),Ce=m(12),Te=m(14);t("ngTemplateOutlet",n.panelTemplate)("ngTemplateOutletContext",f(12,Je,o)),i(),t("ngTemplateOutlet",n.panelTemplate)("ngTemplateOutletContext",f(14,Xe,c)),i(),t("ngTemplateOutlet",n.panelTemplate)("ngTemplateOutletContext",f(16,Ze,b)),i(),t("ngTemplateOutlet",n.panelTemplate)("ngTemplateOutletContext",f(18,en,g)),i(),t("ngTemplateOutlet",n.panelTemplate)("ngTemplateOutletContext",f(20,nn,Ce)),i(),t("ngTemplateOutlet",n.panelTemplate)("ngTemplateOutletContext",f(22,tn,Te))}}var he=class e{PrimeIcons=re;static \u0275fac=function(n){return new(n||e)};static \u0275cmp=y({type:e,selectors:[["app-message-sandbox"]],decls:16,vars:1,consts:[["sandbox",""],["basic",""],["severity",""],["icon",""],["outlined",""],["simple",""],["sizes",""],[1,"flex","flex-col","gap-5"],["text","Message Content"],["severity","success","text","Success Message"],["severity","info","text","Info Message"],["severity","warn","text","Warn Message"],["severity","error","text","Error Message"],["severity","secondary","text","Secondary Message"],["severity","contrast","text","Contrast Message"],["severity","info","text","Info Message",3,"icon"],["severity","success","variant","outlined","text","Success Message"],["severity","info","variant","outlined","text","Info Message"],["severity","warn","variant","outlined","text","Warn Message"],["severity","error","variant","outlined","text","Error Message"],["severity","secondary","variant","outlined","text","Secondary Message"],["severity","contrast","variant","outlined","text","Contrast Message"],["severity","success","variant","simple","text","Success Message"],["severity","info","variant","simple","text","Info Message"],["severity","warn","variant","simple","text","Warn Message"],["severity","error","variant","simple","text","Error Message"],["severity","secondary","variant","simple","text","Secondary Message"],["severity","contrast","variant","simple","text","Contrast Message"],["size","small","text","Small Message",3,"icon"],["text","Normal Message",3,"icon"],["size","large","text","Large Message",3,"icon"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,o){if(n&1&&(r(0,"app-sandbox",null,0),d(2,"div",7),_(3,sn,1,0,"ng-template",null,1,x)(5,on,6,0,"ng-template",null,2,x)(7,an,1,1,"ng-template",null,3,x)(9,cn,6,0,"ng-template",null,4,x)(11,rn,6,0,"ng-template",null,5,x)(13,ln,3,3,"ng-template",null,6,x),l(15,pn,6,24),u()),n&2){let c=m(1);i(15),p(c.panelTemplate?15:-1)}},dependencies:[k,S,O,fe],encapsulation:2})};export{he as MessageSandbox};
