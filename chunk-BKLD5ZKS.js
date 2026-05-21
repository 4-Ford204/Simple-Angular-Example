import{a as U}from"./chunk-3CSWPRBR.js";import{c as J,d as K,e as k}from"./chunk-IS5FCBNF.js";import{fa as H,ga as L,ma as G}from"./chunk-JIHEE4C7.js";import{j as q,k as V,m as M,o as E}from"./chunk-HNSURZOS.js";import{$a as Q,Ab as y,Bb as C,Cb as h,Fb as $,Gb as s,Hb as w,Ib as F,N as B,Oa as x,Ob as P,Q as D,Qb as f,S as b,Sa as N,Ta as z,Ua as c,Zb as g,ab as R,fb as a,gb as p,hb as m,ia as I,ib as u,mb as j,nb as A,ob as _,vb as d,ya as r,yb as T}from"./chunk-K6DSXF3S.js";import"./chunk-4CLCTAJ7.js";var W=`
    .p-timeline {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        direction: ltr;
    }

    .p-timeline-left .p-timeline-event-opposite {
        text-align: right;
    }

    .p-timeline-left .p-timeline-event-content {
        text-align: left;
    }

    .p-timeline-right .p-timeline-event {
        flex-direction: row-reverse;
    }

    .p-timeline-right .p-timeline-event-opposite {
        text-align: left;
    }

    .p-timeline-right .p-timeline-event-content {
        text-align: right;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) {
        flex-direction: row-reverse;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite {
        text-align: right;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content {
        text-align: left;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite {
        text-align: left;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content {
        text-align: right;
    }

    .p-timeline-vertical .p-timeline-event-opposite,
    .p-timeline-vertical .p-timeline-event-content {
        padding: dt('timeline.vertical.event.content.padding');
    }

    .p-timeline-vertical .p-timeline-event-connector {
        width: dt('timeline.event.connector.size');
    }

    .p-timeline-event {
        display: flex;
        position: relative;
        min-height: dt('timeline.event.min.height');
    }

    .p-timeline-event:last-child {
        min-height: 0;
    }

    .p-timeline-event-opposite {
        flex: 1;
    }

    .p-timeline-event-content {
        flex: 1;
    }

    .p-timeline-event-separator {
        flex: 0;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .p-timeline-event-marker {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: relative;
        align-self: baseline;
        border-width: dt('timeline.event.marker.border.width');
        border-style: solid;
        border-color: dt('timeline.event.marker.border.color');
        border-radius: dt('timeline.event.marker.border.radius');
        width: dt('timeline.event.marker.size');
        height: dt('timeline.event.marker.size');
        background: dt('timeline.event.marker.background');
    }

    .p-timeline-event-marker::before {
        content: ' ';
        border-radius: dt('timeline.event.marker.content.border.radius');
        width: dt('timeline.event.marker.content.size');
        height: dt('timeline.event.marker.content.size');
        background: dt('timeline.event.marker.content.background');
    }

    .p-timeline-event-marker::after {
        content: ' ';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: dt('timeline.event.marker.border.radius');
        box-shadow: dt('timeline.event.marker.content.inset.shadow');
    }

    .p-timeline-event-connector {
        flex-grow: 1;
        background: dt('timeline.event.connector.color');
    }

    .p-timeline-horizontal {
        flex-direction: row;
    }

    .p-timeline-horizontal .p-timeline-event {
        flex-direction: column;
        flex: 1;
    }

    .p-timeline-horizontal .p-timeline-event:last-child {
        flex: 0;
    }

    .p-timeline-horizontal .p-timeline-event-separator {
        flex-direction: row;
    }

    .p-timeline-horizontal .p-timeline-event-connector {
        width: 100%;
        height: dt('timeline.event.connector.size');
    }

    .p-timeline-horizontal .p-timeline-event-opposite,
    .p-timeline-horizontal .p-timeline-event-content {
        padding: dt('timeline.horizontal.event.content.padding');
    }

    .p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even) {
        flex-direction: column-reverse;
    }

    .p-timeline-bottom .p-timeline-event {
        flex-direction: column-reverse;
    }
`;var ie=["content"],oe=["opposite"],le=["marker"],O=e=>({$implicit:e});function ae(e,i){e&1&&_(0)}function re(e,i){e&1&&_(0)}function pe(e,i){if(e&1&&(j(0),c(1,re,1,0,"ng-container",3),A()),e&2){let t=d().$implicit,n=d();r(),a("ngTemplateOutlet",n.markerTemplate||n._markerTemplate)("ngTemplateOutletContext",f(2,O,t))}}function me(e,i){if(e&1&&u(0,"div",2),e&2){let t=d(2);s(t.cx("eventMarker")),a("pBind",t.ptm("eventMarker"))}}function ce(e,i){if(e&1&&u(0,"div",2),e&2){let t=d(2);s(t.cx("eventConnector")),a("pBind",t.ptm("eventConnector"))}}function se(e,i){e&1&&_(0)}function de(e,i){if(e&1&&(p(0,"div",2)(1,"div",2),c(2,ae,1,0,"ng-container",3),m(),p(3,"div",2),c(4,pe,2,4,"ng-container",4)(5,me,1,3,"ng-template",null,0,g)(7,ce,1,3,"div",5),m(),p(8,"div",2),c(9,se,1,0,"ng-container",3),m()()),e&2){let t=i.$implicit,n=i.last,l=h(6),o=d();s(o.cx("event")),a("pBind",o.ptm("event")),r(),s(o.cx("eventOpposite")),a("pBind",o.ptm("eventOpposite")),r(),a("ngTemplateOutlet",o.oppositeTemplate||o._oppositeTemplate)("ngTemplateOutletContext",f(19,O,t)),r(),s(o.cx("eventSeparator")),a("pBind",o.ptm("eventSeparator")),r(),a("ngIf",o.markerTemplate||o._markerTemplate)("ngIfElse",l),r(3),a("ngIf",!n),r(),s(o.cx("eventContent")),a("pBind",o.ptm("eventContent")),r(),a("ngTemplateOutlet",o.contentTemplate||o._contentTemplate)("ngTemplateOutletContext",f(21,O,t))}}var ve={root:({instance:e})=>["p-timeline p-component","p-timeline-"+e.align,"p-timeline-"+e.layout],event:"p-timeline-event",eventOpposite:"p-timeline-event-opposite",eventSeparator:"p-timeline-event-separator",eventMarker:"p-timeline-event-marker",eventConnector:"p-timeline-event-connector",eventContent:"p-timeline-event-content"},X=(()=>{class e extends G{name="timeline";style=W;classes=ve;static \u0275fac=(()=>{let t;return function(l){return(t||(t=I(e)))(l||e)}})();static \u0275prov=B({token:e,factory:e.\u0275fac})}return e})();var Y=new D("TIMELINE_INSTANCE"),ee=(()=>{class e extends K{bindDirectiveInstance=b(k,{self:!0});$pcTimeline=b(Y,{optional:!0,skipSelf:!0})??void 0;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}value;styleClass;align="left";layout="vertical";contentTemplate;oppositeTemplate;markerTemplate;templates;_contentTemplate;_oppositeTemplate;_markerTemplate;_componentStyle=b(X);getBlockableElement(){return this.el.nativeElement.children[0]}onAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"opposite":this._oppositeTemplate=t.template;break;case"marker":this._markerTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(l){return(t||(t=I(e)))(l||e)}})();static \u0275cmp=x({type:e,selectors:[["p-timeline"]],contentQueries:function(n,l,o){if(n&1&&(T(o,ie,4),T(o,oe,4),T(o,le,4),T(o,H,4)),n&2){let v;y(v=C())&&(l.contentTemplate=v.first),y(v=C())&&(l.oppositeTemplate=v.first),y(v=C())&&(l.markerTemplate=v.first),y(v=C())&&(l.templates=v)}},hostVars:2,hostBindings:function(n,l){n&2&&s(l.cn(l.cx("root"),l.styleClass))},inputs:{value:"value",styleClass:"styleClass",align:"align",layout:"layout"},features:[P([X,{provide:Y,useExisting:e},{provide:J,useExisting:e}]),z([k]),N],decls:1,vars:1,consts:[["marker",""],[3,"pBind","class",4,"ngFor","ngForOf"],[3,"pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf","ngIfElse"],[3,"pBind","class",4,"ngIf"]],template:function(n,l){n&1&&c(0,de,10,23,"div",1),n&2&&a("ngForOf",l.value)},dependencies:[E,q,V,M,L,k],encapsulation:2,changeDetection:0})}return e})();var fe=e=>({"background-color":e});function ge(e,i){if(e&1&&(p(0,"span",4),u(1,"i"),m()),e&2){let t=i.$implicit;$(f(4,fe,t.color)),r(),s(t.icon??"pi pi-circle")}}function xe(e,i){if(e&1&&(p(0,"small"),w(1),m()),e&2){let t=i.$implicit;r(),F(t.date)}}function _e(e,i){if(e&1&&(p(0,"span"),w(1),m()),e&2){let t=i.$implicit;r(),F(t.status)}}var S=class e{value=[];align="left";layout="vertical";static \u0275fac=function(t){return new(t||e)};static \u0275cmp=x({type:e,selectors:[["app-timeline-component"]],inputs:{value:"value",align:"align",layout:"layout"},decls:7,vars:3,consts:[["marker",""],["opposite",""],["content",""],[3,"value","align","layout"],[1,"flex","h-8","w-8","items-center","justify-center","rounded-full"]],template:function(t,n){t&1&&(p(0,"p-timeline",3),c(1,ge,2,6,"ng-template",null,0,g)(3,xe,2,1,"ng-template",null,1,g)(5,_e,2,1,"ng-template",null,2,g),m()),t&2&&a("value",n.value)("align",n.align)("layout",n.layout)},dependencies:[ee],encapsulation:2})};var he=e=>({title:"Template",content:e});function Te(e,i){if(e&1&&u(0,"app-timeline-component",4),e&2){let t=d();a("value",t.events)}}function ye(e,i){if(e&1&&_(0,3),e&2){d();let t=h(1),n=h(4);a("ngTemplateOutlet",t.panelTemplate)("ngTemplateOutletContext",f(2,he,n))}}var te=class e{events=[{status:"Ordered",date:"15/10/2020 10:30",icon:"pi pi-shopping-cart",color:"#9C27B0"},{status:"Processing",date:"15/10/2020 14:00",icon:"pi pi-cog",color:"#673AB7"},{status:"Shipped",date:"15/10/2020 16:15",icon:"pi pi-shopping-cart",color:"#FF9800"},{status:"Delivered",date:"16/10/2020 10:00",icon:"pi pi-check",color:"#607D8B"}];static \u0275fac=function(t){return new(t||e)};static \u0275cmp=x({type:e,selectors:[["app-timeline-sandbox"]],decls:6,vars:1,consts:[["sandbox",""],["template",""],[1,"flex","flex-col","gap-5"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"value"]],template:function(t,n){if(t&1&&(u(0,"app-sandbox",null,0),p(2,"div",2),c(3,Te,1,1,"ng-template",null,1,g),Q(5,ye,1,4,"ng-container",3),m()),t&2){let l=h(1);r(5),R(l.panelTemplate?5:-1)}},dependencies:[E,M,U,S],encapsulation:2})};export{te as TimelineSandbox};
