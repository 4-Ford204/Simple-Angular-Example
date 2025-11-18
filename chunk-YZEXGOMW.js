import{b as L,c as F,d as y,e as se}from"./chunk-KUP6GBSE.js";import{K as W,O as D,b as O,c as C,d as J,h as K,o as $,p as Q,q as ee,r as R,t as te,v as ie,x as ne}from"./chunk-RLV7YIWC.js";import{n as A,r as _}from"./chunk-SWWZH6D4.js";import{Ab as X,Bb as Y,Ca as j,Gb as x,Ma as T,N as S,Na as z,O as B,Oa as H,Pa as E,Q as k,Qa as N,Qb as P,S as h,Sb as w,Xb as Z,ia as m,pb as q,qb as G,wb as U,zb as M}from"./chunk-TDEPKAKI.js";var be=["*"],me={root:"p-fluid"},oe=(()=>{class s extends D{name="fluid";classes=me;static \u0275fac=(()=>{let e;return function(i){return(e||(e=m(s)))(i||s)}})();static \u0275prov=S({token:s,factory:s.\u0275fac})}return s})();var re=new k("FLUID_INSTANCE"),Ae=(()=>{class s extends F{$pcFluid=h(re,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=h(y,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=h(oe);static \u0275fac=(()=>{let e;return function(i){return(e||(e=m(s)))(i||s)}})();static \u0275cmp=T({type:s,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(t,i){t&2&&M(i.cx("root"))},features:[x([oe,{provide:re,useExisting:s},{provide:L,useExisting:s}]),N([y]),E],ngContentSelectors:be,decls:1,vars:0,template:function(t,i){t&1&&(q(),G(0))},dependencies:[A],encapsulation:2,changeDetection:0})}return s})();var ye=(()=>{class s{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,t){e&&t&&(e.classList?e.classList.add(t):e.className+=" "+t)}static addMultipleClasses(e,t){if(e&&t)if(e.classList){let i=t.trim().split(" ");for(let n=0;n<i.length;n++)e.classList.add(i[n])}else{let i=t.split(" ");for(let n=0;n<i.length;n++)e.className+=" "+i[n]}}static removeClass(e,t){e&&t&&(e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,t){e&&t&&[t].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(n=>this.removeClass(e,n)))}static hasClass(e,t){return e&&t?e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(t){return t!==e})}static find(e,t){return Array.from(e.querySelectorAll(t))}static findSingle(e,t){return this.isElement(e)?e.querySelector(t):null}static index(e){let t=e.parentNode.childNodes,i=0;for(var n=0;n<t.length;n++){if(t[n]==e)return i;t[n].nodeType==1&&i++}return-1}static indexWithinGroup(e,t){let i=e.parentNode?e.parentNode.childNodes:[],n=0;for(var o=0;o<i.length;o++){if(i[o]==e)return n;i[o].attributes&&i[o].attributes[t]&&i[o].nodeType==1&&n++}return-1}static appendOverlay(e,t,i="self"){i!=="self"&&e&&t&&this.appendChild(e,t)}static alignOverlay(e,t,i="self",n=!0){e&&t&&(n&&(e.style.minWidth=`${s.getOuterWidth(t)}px`),i==="self"?this.relativePosition(e,t):this.absolutePosition(e,t))}static relativePosition(e,t,i=!0){let n=v=>{if(v)return getComputedStyle(v).getPropertyValue("position")==="relative"?v:n(v.parentElement)},o=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),r=t.offsetHeight,l=t.getBoundingClientRect(),u=this.getWindowScrollTop(),a=this.getWindowScrollLeft(),d=this.getViewport(),c=n(e)?.getBoundingClientRect()||{top:-1*u,left:-1*a},f,b,I="top";l.top+r+o.height>d.height?(f=l.top-c.top-o.height,I="bottom",l.top+f<0&&(f=-1*l.top)):(f=r+l.top-c.top,I="top");let V=l.left+o.width-d.width,fe=l.left-c.left;if(o.width>d.width?b=(l.left-c.left)*-1:V>0?b=fe-V:b=l.left-c.left,e.style.top=f+"px",e.style.left=b+"px",e.style.transformOrigin=I,i){let v=J(/-anchor-gutter$/)?.value;e.style.marginTop=I==="bottom"?`calc(${v??"2px"} * -1)`:v??""}}static absolutePosition(e,t,i=!0){let n=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),o=n.height,r=n.width,l=t.offsetHeight,u=t.offsetWidth,a=t.getBoundingClientRect(),d=this.getWindowScrollTop(),g=this.getWindowScrollLeft(),c=this.getViewport(),f,b;a.top+l+o>c.height?(f=a.top+d-o,e.style.transformOrigin="bottom",f<0&&(f=d)):(f=l+a.top+d,e.style.transformOrigin="top"),a.left+r>c.width?b=Math.max(0,a.left+g+u-r):b=a.left+g,e.style.top=f+"px",e.style.left=b+"px",i&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,t=[]){return e.parentNode===null?t:this.getParents(e.parentNode,t.concat([e.parentNode]))}static getScrollableParents(e){let t=[];if(e){let i=this.getParents(e),n=/(auto|scroll)/,o=r=>{let l=window.getComputedStyle(r,null);return n.test(l.getPropertyValue("overflow"))||n.test(l.getPropertyValue("overflowX"))||n.test(l.getPropertyValue("overflowY"))};for(let r of i){let l=r.nodeType===1&&r.dataset.scrollselectors;if(l){let u=l.split(",");for(let a of u){let d=this.findSingle(r,a);d&&o(d)&&t.push(d)}}r.nodeType!==9&&o(r)&&t.push(r)}}return t}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let t=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",t}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let t=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",t}static getHiddenElementDimensions(e){let t={};return e.style.visibility="hidden",e.style.display="block",t.width=e.offsetWidth,t.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",t}static scrollInView(e,t){let i=getComputedStyle(e).getPropertyValue("borderTopWidth"),n=i?parseFloat(i):0,o=getComputedStyle(e).getPropertyValue("paddingTop"),r=o?parseFloat(o):0,l=e.getBoundingClientRect(),a=t.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-n-r,d=e.scrollTop,g=e.clientHeight,c=this.getOuterHeight(t);a<0?e.scrollTop=d+a:a+c>g&&(e.scrollTop=d+a-g+c)}static fadeIn(e,t){e.style.opacity=0;let i=+new Date,n=0,o=function(){n=+e.style.opacity.replace(",",".")+(new Date().getTime()-i)/t,e.style.opacity=n,i=+new Date,+n<1&&(window.requestAnimationFrame?window.requestAnimationFrame(o):setTimeout(o,16))};o()}static fadeOut(e,t){var i=1,n=50,o=t,r=n/o;let l=setInterval(()=>{i=i-r,i<=0&&(i=0,clearInterval(l)),e.style.opacity=i},n)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,t){var i=Element.prototype,n=i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||function(o){return[].indexOf.call(document.querySelectorAll(o),this)!==-1};return n.call(e,t)}static getOuterWidth(e,t){let i=e.offsetWidth;if(t){let n=getComputedStyle(e);i+=parseFloat(n.marginLeft)+parseFloat(n.marginRight)}return i}static getHorizontalPadding(e){let t=getComputedStyle(e);return parseFloat(t.paddingLeft)+parseFloat(t.paddingRight)}static getHorizontalMargin(e){let t=getComputedStyle(e);return parseFloat(t.marginLeft)+parseFloat(t.marginRight)}static innerWidth(e){let t=e.offsetWidth,i=getComputedStyle(e);return t+=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),t}static width(e){let t=e.offsetWidth,i=getComputedStyle(e);return t-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),t}static getInnerHeight(e){let t=e.offsetHeight,i=getComputedStyle(e);return t+=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom),t}static getOuterHeight(e,t){let i=e.offsetHeight;if(t){let n=getComputedStyle(e);i+=parseFloat(n.marginTop)+parseFloat(n.marginBottom)}return i}static getHeight(e){let t=e.offsetHeight,i=getComputedStyle(e);return t-=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom)+parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth),t}static getWidth(e){let t=e.offsetWidth,i=getComputedStyle(e);return t-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)+parseFloat(i.borderLeftWidth)+parseFloat(i.borderRightWidth),t}static getViewport(){let e=window,t=document,i=t.documentElement,n=t.getElementsByTagName("body")[0],o=e.innerWidth||i.clientWidth||n.clientWidth,r=e.innerHeight||i.clientHeight||n.clientHeight;return{width:o,height:r}}static getOffset(e){var t=e.getBoundingClientRect();return{top:t.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:t.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,t){let i=e.parentNode;if(!i)throw"Can't replace element";return i.replaceChild(t,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,t=e.indexOf("MSIE ");if(t>0)return!0;var i=e.indexOf("Trident/");if(i>0){var n=e.indexOf("rv:");return!0}var o=e.indexOf("Edge/");return o>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,t){if(this.isElement(t))t.appendChild(e);else if(t&&t.el&&t.el.nativeElement)t.el.nativeElement.appendChild(e);else throw"Cannot append "+t+" to "+e}static removeChild(e,t){if(this.isElement(t))t.removeChild(e);else if(t.el&&t.el.nativeElement)t.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+t}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode?.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let t=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(t.borderLeftWidth)-parseFloat(t.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let i=t.offsetWidth-t.clientWidth;return document.body.removeChild(t),this.calculatedScrollbarWidth=i,i}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let t=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=t,t}static invokeElementMethod(e,t,i){e[t].apply(e,i)}static clearSelection(){if(window.getSelection&&window.getSelection())window.getSelection()?.empty?window.getSelection()?.empty():window.getSelection()?.removeAllRanges&&(window.getSelection()?.rangeCount||0)>0&&(window.getSelection()?.getRangeAt(0)?.getClientRects()?.length||0)>0&&window.getSelection()?.removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,t){e&&document.activeElement!==e&&e.focus(t)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,t=""){let i=this.find(e,this.getFocusableSelectorString(t)),n=[];for(let o of i){let r=getComputedStyle(o);this.isVisible(o)&&r.display!="none"&&r.visibility!="hidden"&&n.push(o)}return n}static getFocusableElement(e,t=""){let i=this.findSingle(e,this.getFocusableSelectorString(t));if(i){let n=getComputedStyle(i);if(this.isVisible(i)&&n.display!="none"&&n.visibility!="hidden")return i}return null}static getFirstFocusableElement(e,t=""){let i=this.getFocusableElements(e,t);return i.length>0?i[0]:null}static getLastFocusableElement(e,t){let i=this.getFocusableElements(e,t);return i.length>0?i[i.length-1]:null}static getNextFocusableElement(e,t=!1){let i=s.getFocusableElements(e),n=0;if(i&&i.length>0){let o=i.indexOf(i[0].ownerDocument.activeElement);t?o==-1||o===0?n=i.length-1:n=o-1:o!=-1&&o!==i.length-1&&(n=o+1)}return i[n]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection()?.toString():document.getSelection?document.getSelection()?.toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,t){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return t?.nextElementSibling;case"@prev":return t?.previousElementSibling;case"@parent":return t?.parentElement;case"@grandparent":return t?.parentElement?.parentElement;default:let i=typeof e;if(i==="string")return document.querySelector(e);if(i==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let o=(r=>!!(r&&r.constructor&&r.call&&r.apply))(e)?e():e;return o&&o.nodeType===9||this.isExist(o)?o:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,t){if(e){let i=e.getAttribute(t);return isNaN(i)?i==="true"||i==="false"?i==="true":i:+i}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,t={},...i){if(e){let n=document.createElement(e);return this.setAttributes(n,t),n.append(...i),n}}static setAttribute(e,t="",i){this.isElement(e)&&i!==null&&i!==void 0&&e.setAttribute(t,i)}static setAttributes(e,t={}){if(this.isElement(e)){let i=(n,o)=>{let r=e?.$attrs?.[n]?[e?.$attrs?.[n]]:[];return[o].flat().reduce((l,u)=>{if(u!=null){let a=typeof u;if(a==="string"||a==="number")l.push(u);else if(a==="object"){let d=Array.isArray(u)?i(n,u):Object.entries(u).map(([g,c])=>n==="style"&&(c||c===0)?`${g.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${c}`:c?g:void 0);l=d.length?l.concat(d.filter(g=>!!g)):l}}return l},r)};Object.entries(t).forEach(([n,o])=>{if(o!=null){let r=n.match(/^on(.+)/);r?e.addEventListener(r[1].toLowerCase(),o):n==="pBind"?this.setAttributes(e,o):(o=n==="class"?[...new Set(i("class",o))].join(" ").trim():n==="style"?i("style",o).join(";").trim():o,(e.$attrs=e.$attrs||{})&&(e.$attrs[n]=o),e.setAttribute(n,o))}})}}static isFocusableElement(e,t=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`):!1}}return s})();var ae=class{element;listener;scrollableParents;constructor(p,e=()=>{}){this.element=p,this.listener=e}bindScrollListener(){this.scrollableParents=ye.getScrollableParents(this.element);for(let p=0;p<this.scrollableParents.length;p++)this.scrollableParents[p].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let p=0;p<this.scrollableParents.length;p++)this.scrollableParents[p].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var de=`
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
`;var ve=`
    ${de}

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
`,we={root:({instance:s})=>{let p=typeof s.value=="function"?s.value():s.value,e=typeof s.size=="function"?s.size():s.size,t=typeof s.badgeSize=="function"?s.badgeSize():s.badgeSize,i=typeof s.severity=="function"?s.severity():s.severity;return["p-badge p-component",{"p-badge-circle":ne(p)&&String(p).length===1,"p-badge-dot":ie(p),"p-badge-sm":e==="small"||t==="small","p-badge-lg":e==="large"||t==="large","p-badge-xl":e==="xlarge"||t==="xlarge","p-badge-info":i==="info","p-badge-success":i==="success","p-badge-warn":i==="warn","p-badge-danger":i==="danger","p-badge-secondary":i==="secondary","p-badge-contrast":i==="contrast"}]}},ce=(()=>{class s extends D{name="badge";style=ve;classes=we;static \u0275fac=(()=>{let e;return function(i){return(e||(e=m(s)))(i||s)}})();static \u0275prov=S({token:s,factory:s.\u0275fac})}return s})();var ue=new k("BADGE_INSTANCE");var Se=(()=>{class s extends F{$pcBadge=h(ue,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=h(y,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass=w();badgeSize=w();size=w();severity=w();value=w();badgeDisabled=w(!1,{transform:Z});_componentStyle=h(ce);static \u0275fac=(()=>{let e;return function(i){return(e||(e=m(s)))(i||s)}})();static \u0275cmp=T({type:s,selectors:[["p-badge"]],hostVars:4,hostBindings:function(t,i){t&2&&(M(i.cn(i.cx("root"),i.styleClass())),U("display",i.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[x([ce,{provide:ue,useExisting:s},{provide:L,useExisting:s}]),N([y]),E],decls:1,vars:1,template:function(t,i){t&1&&X(0),t&2&&Y(i.value())},dependencies:[A,W,se],encapsulation:2,changeDetection:0})}return s})(),st=(()=>{class s{static \u0275fac=function(t){return new(t||s)};static \u0275mod=z({type:s});static \u0275inj=B({imports:[Se,W,W]})}return s})();var pe=`
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
`;var Ee=`
    ${pe}

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
`,xe={root:"p-ink"},ge=(()=>{class s extends D{name="ripple";style=Ee;classes=xe;static \u0275fac=(()=>{let e;return function(i){return(e||(e=m(s)))(i||s)}})();static \u0275prov=S({token:s,factory:s.\u0275fac})}return s})();var bt=(()=>{class s extends F{zone=h(j);_componentStyle=h(ge);animationListener;mouseDownListener;timeout;constructor(){super(),P(()=>{_(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}onAfterViewInit(){}onMouseDown(e){let t=this.getInk();if(!t||this.document.defaultView?.getComputedStyle(t,null).display==="none")return;if(C(t,"p-ink-active"),!$(t)&&!R(t)){let r=Math.max(K(this.el.nativeElement),ee(this.el.nativeElement));t.style.height=r+"px",t.style.width=r+"px"}let i=Q(this.el.nativeElement),n=e.pageX-i.left+this.document.body.scrollTop-R(t)/2,o=e.pageY-i.top+this.document.body.scrollLeft-$(t)/2;this.renderer.setStyle(t,"top",o+"px"),this.renderer.setStyle(t,"left",n+"px"),O(t,"p-ink-active"),this.timeout=setTimeout(()=>{let r=this.getInk();r&&C(r,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let t=0;t<e.length;t++)if(typeof e[t].className=="string"&&e[t].className.indexOf("p-ink")!==-1)return e[t];return null}resetInk(){let e=this.getInk();e&&C(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),C(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,te(e))}onDestroy(){this.config&&this.config.ripple()&&this.remove()}static \u0275fac=function(t){return new(t||s)};static \u0275dir=H({type:s,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[x([ge]),E]})}return s})();export{Se as a,st as b,Ae as c,bt as d,ye as e,ae as f};
