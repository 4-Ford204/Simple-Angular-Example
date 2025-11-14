import{b as F}from"./chunk-73H4HTCP.js";import{B as G,H as T,I as Z,J,K as H,M as K,O as Q,P as _,Z as B,ba as C,n as I,r as X,v as O,w as x,x as Y}from"./chunk-BYI6JMDY.js";import{Ab as j,Fb as E,Ia as M,Ja as k,Ka as L,La as S,N as w,O as z,Ob as q,Pa as N,Qb as v,S as y,Vb as U,ia as b,ob as A,pb as $,vb as R,yb as W,zb as V}from"./chunk-B2FNEUU4.js";var ae=["*"],de={root:"p-fluid"},ee=(()=>{class s extends C{name="fluid";classes=de;static \u0275fac=(()=>{let e;return function(i){return(e||(e=b(s)))(i||s)}})();static \u0275prov=w({token:s,factory:s.\u0275fac})}return s})();var Fe=(()=>{class s extends F{_componentStyle=y(ee);static \u0275fac=(()=>{let e;return function(i){return(e||(e=b(s)))(i||s)}})();static \u0275cmp=M({type:s,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(t,i){t&2&&W(i.cx("root"))},features:[E([ee]),S],ngContentSelectors:ae,decls:1,vars:0,template:function(t,i){t&1&&(A(),$(0))},dependencies:[I],encapsulation:2,changeDetection:0})}return s})();var ce=(()=>{class s{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,t){e&&t&&(e.classList?e.classList.add(t):e.className+=" "+t)}static addMultipleClasses(e,t){if(e&&t)if(e.classList){let i=t.trim().split(" ");for(let n=0;n<i.length;n++)e.classList.add(i[n])}else{let i=t.split(" ");for(let n=0;n<i.length;n++)e.className+=" "+i[n]}}static removeClass(e,t){e&&t&&(e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,t){e&&t&&[t].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(n=>this.removeClass(e,n)))}static hasClass(e,t){return e&&t?e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(t){return t!==e})}static find(e,t){return Array.from(e.querySelectorAll(t))}static findSingle(e,t){return this.isElement(e)?e.querySelector(t):null}static index(e){let t=e.parentNode.childNodes,i=0;for(var n=0;n<t.length;n++){if(t[n]==e)return i;t[n].nodeType==1&&i++}return-1}static indexWithinGroup(e,t){let i=e.parentNode?e.parentNode.childNodes:[],n=0;for(var o=0;o<i.length;o++){if(i[o]==e)return n;i[o].attributes&&i[o].attributes[t]&&i[o].nodeType==1&&n++}return-1}static appendOverlay(e,t,i="self"){i!=="self"&&e&&t&&this.appendChild(e,t)}static alignOverlay(e,t,i="self",n=!0){e&&t&&(n&&(e.style.minWidth=`${s.getOuterWidth(t)}px`),i==="self"?this.relativePosition(e,t):this.absolutePosition(e,t))}static relativePosition(e,t,i=!0){let n=m=>{if(m)return getComputedStyle(m).getPropertyValue("position")==="relative"?m:n(m.parentElement)},o=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),r=t.offsetHeight,l=t.getBoundingClientRect(),u=this.getWindowScrollTop(),a=this.getWindowScrollLeft(),d=this.getViewport(),c=n(e)?.getBoundingClientRect()||{top:-1*u,left:-1*a},p,h,D="top";l.top+r+o.height>d.height?(p=l.top-c.top-o.height,D="bottom",l.top+p<0&&(p=-1*l.top)):(p=r+l.top-c.top,D="top");let P=l.left+o.width-d.width,le=l.left-c.left;if(o.width>d.width?h=(l.left-c.left)*-1:P>0?h=le-P:h=l.left-c.left,e.style.top=p+"px",e.style.left=h+"px",e.style.transformOrigin=D,i){let m=Y(/-anchor-gutter$/)?.value;e.style.marginTop=D==="bottom"?`calc(${m??"2px"} * -1)`:m??""}}static absolutePosition(e,t,i=!0){let n=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),o=n.height,r=n.width,l=t.offsetHeight,u=t.offsetWidth,a=t.getBoundingClientRect(),d=this.getWindowScrollTop(),g=this.getWindowScrollLeft(),c=this.getViewport(),p,h;a.top+l+o>c.height?(p=a.top+d-o,e.style.transformOrigin="bottom",p<0&&(p=d)):(p=l+a.top+d,e.style.transformOrigin="top"),a.left+r>c.width?h=Math.max(0,a.left+g+u-r):h=a.left+g,e.style.top=p+"px",e.style.left=h+"px",i&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,t=[]){return e.parentNode===null?t:this.getParents(e.parentNode,t.concat([e.parentNode]))}static getScrollableParents(e){let t=[];if(e){let i=this.getParents(e),n=/(auto|scroll)/,o=r=>{let l=window.getComputedStyle(r,null);return n.test(l.getPropertyValue("overflow"))||n.test(l.getPropertyValue("overflowX"))||n.test(l.getPropertyValue("overflowY"))};for(let r of i){let l=r.nodeType===1&&r.dataset.scrollselectors;if(l){let u=l.split(",");for(let a of u){let d=this.findSingle(r,a);d&&o(d)&&t.push(d)}}r.nodeType!==9&&o(r)&&t.push(r)}}return t}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let t=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",t}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let t=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",t}static getHiddenElementDimensions(e){let t={};return e.style.visibility="hidden",e.style.display="block",t.width=e.offsetWidth,t.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",t}static scrollInView(e,t){let i=getComputedStyle(e).getPropertyValue("borderTopWidth"),n=i?parseFloat(i):0,o=getComputedStyle(e).getPropertyValue("paddingTop"),r=o?parseFloat(o):0,l=e.getBoundingClientRect(),a=t.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-n-r,d=e.scrollTop,g=e.clientHeight,c=this.getOuterHeight(t);a<0?e.scrollTop=d+a:a+c>g&&(e.scrollTop=d+a-g+c)}static fadeIn(e,t){e.style.opacity=0;let i=+new Date,n=0,o=function(){n=+e.style.opacity.replace(",",".")+(new Date().getTime()-i)/t,e.style.opacity=n,i=+new Date,+n<1&&(window.requestAnimationFrame?window.requestAnimationFrame(o):setTimeout(o,16))};o()}static fadeOut(e,t){var i=1,n=50,o=t,r=n/o;let l=setInterval(()=>{i=i-r,i<=0&&(i=0,clearInterval(l)),e.style.opacity=i},n)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,t){var i=Element.prototype,n=i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||function(o){return[].indexOf.call(document.querySelectorAll(o),this)!==-1};return n.call(e,t)}static getOuterWidth(e,t){let i=e.offsetWidth;if(t){let n=getComputedStyle(e);i+=parseFloat(n.marginLeft)+parseFloat(n.marginRight)}return i}static getHorizontalPadding(e){let t=getComputedStyle(e);return parseFloat(t.paddingLeft)+parseFloat(t.paddingRight)}static getHorizontalMargin(e){let t=getComputedStyle(e);return parseFloat(t.marginLeft)+parseFloat(t.marginRight)}static innerWidth(e){let t=e.offsetWidth,i=getComputedStyle(e);return t+=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),t}static width(e){let t=e.offsetWidth,i=getComputedStyle(e);return t-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),t}static getInnerHeight(e){let t=e.offsetHeight,i=getComputedStyle(e);return t+=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom),t}static getOuterHeight(e,t){let i=e.offsetHeight;if(t){let n=getComputedStyle(e);i+=parseFloat(n.marginTop)+parseFloat(n.marginBottom)}return i}static getHeight(e){let t=e.offsetHeight,i=getComputedStyle(e);return t-=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom)+parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth),t}static getWidth(e){let t=e.offsetWidth,i=getComputedStyle(e);return t-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)+parseFloat(i.borderLeftWidth)+parseFloat(i.borderRightWidth),t}static getViewport(){let e=window,t=document,i=t.documentElement,n=t.getElementsByTagName("body")[0],o=e.innerWidth||i.clientWidth||n.clientWidth,r=e.innerHeight||i.clientHeight||n.clientHeight;return{width:o,height:r}}static getOffset(e){var t=e.getBoundingClientRect();return{top:t.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:t.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,t){let i=e.parentNode;if(!i)throw"Can't replace element";return i.replaceChild(t,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,t=e.indexOf("MSIE ");if(t>0)return!0;var i=e.indexOf("Trident/");if(i>0){var n=e.indexOf("rv:");return!0}var o=e.indexOf("Edge/");return o>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,t){if(this.isElement(t))t.appendChild(e);else if(t&&t.el&&t.el.nativeElement)t.el.nativeElement.appendChild(e);else throw"Cannot append "+t+" to "+e}static removeChild(e,t){if(this.isElement(t))t.removeChild(e);else if(t.el&&t.el.nativeElement)t.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+t}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode?.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let t=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(t.borderLeftWidth)-parseFloat(t.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let i=t.offsetWidth-t.clientWidth;return document.body.removeChild(t),this.calculatedScrollbarWidth=i,i}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let t=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=t,t}static invokeElementMethod(e,t,i){e[t].apply(e,i)}static clearSelection(){if(window.getSelection&&window.getSelection())window.getSelection()?.empty?window.getSelection()?.empty():window.getSelection()?.removeAllRanges&&(window.getSelection()?.rangeCount||0)>0&&(window.getSelection()?.getRangeAt(0)?.getClientRects()?.length||0)>0&&window.getSelection()?.removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,t){e&&document.activeElement!==e&&e.focus(t)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
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
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`):!1}}return s})();var ie=class{element;listener;scrollableParents;constructor(f,e=()=>{}){this.element=f,this.listener=e}bindScrollListener(){this.scrollableParents=ce.getScrollableParents(this.element);for(let f=0;f<this.scrollableParents.length;f++)this.scrollableParents[f].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let f=0;f<this.scrollableParents.length;f++)this.scrollableParents[f].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var ne=`
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
`;var ue=`
    ${ne}

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
`,ge={root:({instance:s})=>["p-badge p-component",{"p-badge-circle":_(s.value())&&String(s.value()).length===1,"p-badge-dot":Q(s.value()),"p-badge-sm":s.size()==="small"||s.badgeSize()==="small","p-badge-lg":s.size()==="large"||s.badgeSize()==="large","p-badge-xl":s.size()==="xlarge"||s.badgeSize()==="xlarge","p-badge-info":s.severity()==="info","p-badge-success":s.severity()==="success","p-badge-warn":s.severity()==="warn","p-badge-danger":s.severity()==="danger","p-badge-secondary":s.severity()==="secondary","p-badge-contrast":s.severity()==="contrast"}]},se=(()=>{class s extends C{name="badge";theme=ue;classes=ge;static \u0275fac=(()=>{let e;return function(i){return(e||(e=b(s)))(i||s)}})();static \u0275prov=w({token:s,factory:s.\u0275fac})}return s})();var pe=(()=>{class s extends F{styleClass=v();badgeSize=v();size=v();severity=v();value=v();badgeDisabled=v(!1,{transform:U});_componentStyle=y(se);static \u0275fac=(()=>{let e;return function(i){return(e||(e=b(s)))(i||s)}})();static \u0275cmp=M({type:s,selectors:[["p-badge"]],hostVars:4,hostBindings:function(t,i){t&2&&(W(i.cn(i.cx("root"),i.styleClass())),R("display",i.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[E([se]),S],decls:1,vars:1,template:function(t,i){t&1&&V(0),t&2&&j(i.value())},dependencies:[I,B],encapsulation:2,changeDetection:0})}return s})(),Ye=(()=>{class s{static \u0275fac=function(t){return new(t||s)};static \u0275mod=k({type:s});static \u0275inj=z({imports:[pe,B,B]})}return s})();var oe=`
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
`;var fe=`
    ${oe}
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
`,he={root:"p-ink"},re=(()=>{class s extends C{name="ripple";theme=fe;classes=he;static \u0275fac=(()=>{let e;return function(i){return(e||(e=b(s)))(i||s)}})();static \u0275prov=w({token:s,factory:s.\u0275fac})}return s})();var ot=(()=>{class s extends F{zone=y(N);_componentStyle=y(re);animationListener;mouseDownListener;timeout;constructor(){super(),q(()=>{X(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(e){let t=this.getInk();if(!t||this.document.defaultView?.getComputedStyle(t,null).display==="none")return;if(x(t,"p-ink-active"),!T(t)&&!H(t)){let r=Math.max(G(this.el.nativeElement),J(this.el.nativeElement));t.style.height=r+"px",t.style.width=r+"px"}let i=Z(this.el.nativeElement),n=e.pageX-i.left+this.document.body.scrollTop-H(t)/2,o=e.pageY-i.top+this.document.body.scrollLeft-T(t)/2;this.renderer.setStyle(t,"top",o+"px"),this.renderer.setStyle(t,"left",n+"px"),O(t,"p-ink-active"),this.timeout=setTimeout(()=>{let r=this.getInk();r&&x(r,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let t=0;t<e.length;t++)if(typeof e[t].className=="string"&&e[t].className.indexOf("p-ink")!==-1)return e[t];return null}resetInk(){let e=this.getInk();e&&x(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),x(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,K(e))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(t){return new(t||s)};static \u0275dir=L({type:s,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[E([re]),S]})}return s})();export{pe as a,Ye as b,Fe as c,ot as d,ce as e,ie as f};
