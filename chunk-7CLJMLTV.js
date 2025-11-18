import{b as E,c as u,d as o,e as _}from"./chunk-KD4DHOZI.js";import{B as H,O as C,T as p,b as x,d as c,j as P,r as M,t as $,u as O,v as w,x as R,z as G}from"./chunk-7JSJ5RU7.js";import{n as S,r as L}from"./chunk-AEMQLBNN.js";import{Ab as D,Bb as j,Cb as T,Da as B,Hb as g,N as d,Na as m,O as b,Oa as v,Pa as z,Q as h,Qa as l,Ra as y,Rb as I,S as s,Tb as r,Yb as V,ia as a,qb as N,rb as F,xb as A}from"./chunk-WOXGMZXR.js";var ie=["*"],ne={root:"p-fluid"},U=(()=>{class e extends p{name="fluid";classes=ne;static \u0275fac=(()=>{let t;return function(n){return(t||(t=a(e)))(n||e)}})();static \u0275prov=d({token:e,factory:e.\u0275fac})}return e})();var W=new h("FLUID_INSTANCE"),ye=(()=>{class e extends u{$pcFluid=s(W,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=s(o,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=s(U);static \u0275fac=(()=>{let t;return function(n){return(t||(t=a(e)))(n||e)}})();static \u0275cmp=m({type:e,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(i,n){i&2&&D(n.cx("root"))},features:[g([U,{provide:W,useExisting:e},{provide:E,useExisting:e}]),y([o]),l],ngContentSelectors:ie,decls:1,vars:0,template:function(i,n){i&1&&(N(),F(0))},dependencies:[S],encapsulation:2,changeDetection:0})}return e})();var X=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`;var se=`
    ${X}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`,ae={root:({instance:e})=>{let k=typeof e.value=="function"?e.value():e.value,t=typeof e.size=="function"?e.size():e.size,i=typeof e.badgeSize=="function"?e.badgeSize():e.badgeSize,n=typeof e.severity=="function"?e.severity():e.severity;return["p-badge p-component",{"p-badge-circle":H(k)&&String(k).length===1,"p-badge-dot":G(k),"p-badge-sm":t==="small"||i==="small","p-badge-lg":t==="large"||i==="large","p-badge-xl":t==="xlarge"||i==="xlarge","p-badge-info":n==="info","p-badge-success":n==="success","p-badge-warn":n==="warn","p-badge-danger":n==="danger","p-badge-secondary":n==="secondary","p-badge-contrast":n==="contrast"}]}},Y=(()=>{class e extends p{name="badge";style=se;classes=ae;static \u0275fac=(()=>{let t;return function(n){return(t||(t=a(e)))(n||e)}})();static \u0275prov=d({token:e,factory:e.\u0275fac})}return e})();var Z=new h("BADGE_INSTANCE");var oe=(()=>{class e extends u{$pcBadge=s(Z,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=s(o,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass=r();badgeSize=r();size=r();severity=r();value=r();badgeDisabled=r(!1,{transform:V});_componentStyle=s(Y);static \u0275fac=(()=>{let t;return function(n){return(t||(t=a(e)))(n||e)}})();static \u0275cmp=m({type:e,selectors:[["p-badge"]],hostVars:4,hostBindings:function(i,n){i&2&&(D(n.cn(n.cx("root"),n.styleClass())),A("display",n.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[g([Y,{provide:Z,useExisting:e},{provide:E,useExisting:e}]),y([o]),l],decls:1,vars:1,template:function(i,n){i&1&&j(0),i&2&&T(n.value())},dependencies:[S,C,_],encapsulation:2,changeDetection:0})}return e})(),Re=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=v({type:e});static \u0275inj=b({imports:[oe,C,C]})}return e})();var J=`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;var re=`
    ${J}

    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`,de={root:"p-ink"},K=(()=>{class e extends p{name="ripple";style=re;classes=de;static \u0275fac=(()=>{let t;return function(n){return(t||(t=a(e)))(n||e)}})();static \u0275prov=d({token:e,factory:e.\u0275fac})}return e})();var Qe=(()=>{class e extends u{zone=s(B);_componentStyle=s(K);animationListener;mouseDownListener;timeout;constructor(){super(),I(()=>{L(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}onAfterViewInit(){}onMouseDown(t){let i=this.getInk();if(!i||this.document.defaultView?.getComputedStyle(i,null).display==="none")return;if(c(i,"p-ink-active"),!M(i)&&!w(i)){let f=Math.max(P(this.el.nativeElement),O(this.el.nativeElement));i.style.height=f+"px",i.style.width=f+"px"}let n=$(this.el.nativeElement),Q=t.pageX-n.left+this.document.body.scrollTop-w(i)/2,ee=t.pageY-n.top+this.document.body.scrollLeft-M(i)/2;this.renderer.setStyle(i,"top",ee+"px"),this.renderer.setStyle(i,"left",Q+"px"),x(i,"p-ink-active"),this.timeout=setTimeout(()=>{let f=this.getInk();f&&c(f,"p-ink-active")},401)}getInk(){let t=this.el.nativeElement.children;for(let i=0;i<t.length;i++)if(typeof t[i].className=="string"&&t[i].className.indexOf("p-ink")!==-1)return t[i];return null}resetInk(){let t=this.getInk();t&&c(t,"p-ink-active")}onAnimationEnd(t){this.timeout&&clearTimeout(this.timeout),c(t.currentTarget,"p-ink-active")}create(){let t=this.renderer.createElement("span");this.renderer.addClass(t,"p-ink"),this.renderer.appendChild(this.el.nativeElement,t),this.renderer.setAttribute(t,"aria-hidden","true"),this.renderer.setAttribute(t,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(t,"animationend",this.onAnimationEnd.bind(this)))}remove(){let t=this.getInk();t&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,R(t))}onDestroy(){this.config&&this.config.ripple()&&this.remove()}static \u0275fac=function(i){return new(i||e)};static \u0275dir=z({type:e,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[g([K]),l]})}return e})();export{oe as a,Re as b,ye as c,Qe as d};
