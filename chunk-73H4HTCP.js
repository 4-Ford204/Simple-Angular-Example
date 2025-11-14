import{$ as a,V as x,_ as u,aa as r,ba as l,ca as E,s as B}from"./chunk-BYI6JMDY.js";import{$ as b,Ba as I,Fb as y,Ia as O,Ka as L,La as T,N as p,Rb as F,S as s,Vb as j,_ as g,ha as v,ia as d,ka as C,oa as _,ob as N,pb as D,yb as w}from"./chunk-B2FNEUU4.js";import{a as i}from"./chunk-4CLCTAJ7.js";var f={};function M(t="pui_id_"){return Object.hasOwn(f,t)||(f[t]=0),f[t]++,`${t}${f[t]}`}function c(...t){if(t){let m=[];for(let e=0;e<t.length;e++){let n=t[e];if(!n)continue;let o=typeof n;if(o==="string"||o==="number")m.push(n);else if(o==="object"){let h=Array.isArray(n)?[c(...n)]:Object.entries(n).map(([S,A])=>A?S:void 0);m=h.length?m.concat(h.filter(S=>!!S)):m}}return m.join(" ").trim()}}var k=(()=>{class t extends l{name="common";static \u0275fac=(()=>{let e;return function(o){return(e||(e=d(t)))(o||t)}})();static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),V=(()=>{class t{document=s(b);platformId=s(_);el=s(C);injector=s(g);cd=s(F);renderer=s(I);config=s(E);baseComponentStyle=s(k);baseStyle=s(l);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=M("pc");themeChangeListeners=[];_getHostInstance(e){if(e)return e?this.hostName?e.name===this.hostName?e:this._getHostInstance(e.parentInstance):e.parentInstance:void 0}_getOptionValue(e,n="",o={}){return x(e,n,o)}ngOnInit(){this.document&&(this._loadCoreStyles(),this._loadStyles())}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(e){if(this.document&&!B(this.platformId)){let{dt:n}=e;n&&n.currentValue&&(this._loadScopedThemeStyles(n.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(n.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles(),this.themeChangeListeners.forEach(e=>u.off("theme:change",e))}_loadStyles(){let e=()=>{r.isStyleNameLoaded("base")||(this.baseStyle.loadGlobalCSS(this.styleOptions),r.setLoadedStyleName("base")),this._loadThemeStyles()};e(),this._themeChangeListener(()=>e())}_loadCoreStyles(){!r.isStyleNameLoaded("base")&&this.componentStyle?.name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),r.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!a.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:o,style:h}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,i({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(n?.css,i({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(o?.css,i({name:"global-variables"},this.styleOptions)),this.baseStyle.loadGlobalTheme(i({name:"global-style"},this.styleOptions),h),a.setLoadedStyleName("common")}if(!a.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:e,style:n}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(e,i({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(i({name:`${this.componentStyle?.name}-style`},this.styleOptions),n),a.setLoadedStyleName(this.componentStyle?.name)}if(!a.isStyleNameLoaded("layer-order")){let e=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,i({name:"layer-order",first:!0},this.styleOptions)),a.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(e){let{css:n}=this.componentStyle?.getPresetTheme?.(e,`[${this.attrSelector}]`)||{},o=this.componentStyle?.load(n,i({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=o?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e=()=>{}){r.clearLoadedStyleNames(),u.on("theme:change",e),this.themeChangeListeners.push(e)}cx(e,n={}){return c(this._getOptionValue(this.$style?.classes,e,i({instance:this},n)))}sx(e="",n=!0,o={}){if(n)return this._getOptionValue(this.$style?.inlineStyles,e,i({instance:this},o))}get parent(){return this.parentInstance}get $style(){return this.parent?this.parent.componentStyle:this.componentStyle}cn=c;static \u0275fac=function(n){return new(n||t)};static \u0275dir=L({type:t,inputs:{dt:"dt"},features:[y([k,l]),v]})}return t})();var R=["*"],G=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,$=(()=>{class t extends l{name="baseicon";css=G;static \u0275fac=(()=>{let e;return function(o){return(e||(e=d(t)))(o||t)}})();static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var he=(()=>{class t extends V{spin=!1;_componentStyle=s($);getClassNames(){return c("p-icon",{"p-icon-spin":this.spin})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=d(t)))(o||t)}})();static \u0275cmp=O({type:t,selectors:[["ng-component"]],hostAttrs:["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],hostVars:2,hostBindings:function(n,o){n&2&&w(o.getClassNames())},inputs:{spin:[2,"spin","spin",j]},features:[y([$]),T],ngContentSelectors:R,decls:1,vars:0,template:function(n,o){n&1&&(N(),D(0))},encapsulation:2,changeDetection:0})}return t})();export{M as a,V as b,he as c};
