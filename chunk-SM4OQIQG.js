import{a as ae}from"./chunk-G62OKKQB.js";import{c as ie,d as oe,e as M}from"./chunk-RIDS5ZDI.js";import{O as ne}from"./chunk-GYKB7NGO.js";import{$ as te,X as k,_ as ee,j as Y,k as Z,m as w,p as B}from"./chunk-IMSU5JY7.js";import{$b as W,Ab as V,Bb as b,Ha as Q,Ib as m,Lb as C,Ma as r,Mb as q,Nb as g,Ob as y,Pb as _,Q as E,Rb as L,Sb as K,T as R,Tb as f,Ub as G,V as x,Vb as J,ab as T,ac as X,bc as v,eb as j,fb as $,gb as d,ma as D,mc as h,nb as S,oa as H,ob as I,sb as l,tb as c,ub as s,vb as u,zb as U}from"./chunk-ZUPP7Z3G.js";import{a as z,b as P}from"./chunk-4CLCTAJ7.js";var le=`
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
`;var ue=["content"],fe=["opposite"],ve=["marker"],N=e=>({$implicit:e});function he(e,i){e&1&&b(0)}function ge(e,i){e&1&&b(0)}function ye(e,i){if(e&1&&(U(0),d(1,ge,1,0,"ng-container",3),V()),e&2){let t=m().$implicit,a=m();r(),l("ngTemplateOutlet",a.markerTemplate||a._markerTemplate)("ngTemplateOutletContext",v(2,N,t))}}function _e(e,i){if(e&1&&u(0,"div",2),e&2){let t=m(2);f(t.cx("eventMarker")),l("pBind",t.ptm("eventMarker"))}}function xe(e,i){if(e&1&&u(0,"div",2),e&2){let t=m(2);f(t.cx("eventConnector")),l("pBind",t.ptm("eventConnector"))}}function Te(e,i){e&1&&b(0)}function be(e,i){if(e&1&&(c(0,"div",2)(1,"div",2),d(2,he,1,0,"ng-container",3),s(),c(3,"div",2),d(4,ye,2,4,"ng-container",4)(5,_e,1,3,"ng-template",null,0,h)(7,xe,1,3,"div",5),s(),c(8,"div",2),d(9,Te,1,0,"ng-container",3),s()()),e&2){let t=i.$implicit,a=i.last,n=_(6),o=m();f(o.cx("event")),l("pBind",o.ptm("event")),r(),f(o.cx("eventOpposite")),l("pBind",o.ptm("eventOpposite")),r(),l("ngTemplateOutlet",o.oppositeTemplate||o._oppositeTemplate)("ngTemplateOutletContext",v(19,N,t)),r(),f(o.cx("eventSeparator")),l("pBind",o.ptm("eventSeparator")),r(),l("ngIf",o.markerTemplate||o._markerTemplate)("ngIfElse",n),r(3),l("ngIf",!a),r(),f(o.cx("eventContent")),l("pBind",o.ptm("eventContent")),r(),l("ngTemplateOutlet",o.contentTemplate||o._contentTemplate)("ngTemplateOutletContext",v(21,N,t))}}var Ce={root:({instance:e})=>["p-timeline p-component","p-timeline-"+e.align,"p-timeline-"+e.layout],event:"p-timeline-event",eventOpposite:"p-timeline-event-opposite",eventSeparator:"p-timeline-event-separator",eventMarker:"p-timeline-event-marker",eventConnector:"p-timeline-event-connector",eventContent:"p-timeline-event-content"},re=(()=>{class e extends ne{name="timeline";style=le;classes=Ce;static \u0275fac=(()=>{let t;return function(n){return(t||(t=D(e)))(n||e)}})();static \u0275prov=E({token:e,factory:e.\u0275fac})}return e})();var me=new R("TIMELINE_INSTANCE"),pe=(()=>{class e extends oe{bindDirectiveInstance=x(M,{self:!0});$pcTimeline=x(me,{optional:!0,skipSelf:!0})??void 0;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}value;styleClass;align="left";layout="vertical";contentTemplate;oppositeTemplate;markerTemplate;templates;_contentTemplate;_oppositeTemplate;_markerTemplate;_componentStyle=x(re);getBlockableElement(){return this.el.nativeElement.children[0]}onAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"opposite":this._oppositeTemplate=t.template;break;case"marker":this._markerTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=D(e)))(n||e)}})();static \u0275cmp=T({type:e,selectors:[["p-timeline"]],contentQueries:function(a,n,o){if(a&1&&(C(o,ue,4),C(o,fe,4),C(o,ve,4),C(o,ee,4)),a&2){let p;g(p=y())&&(n.contentTemplate=p.first),g(p=y())&&(n.oppositeTemplate=p.first),g(p=y())&&(n.markerTemplate=p.first),g(p=y())&&(n.templates=p)}},hostVars:2,hostBindings:function(a,n){a&2&&f(n.cn(n.cx("root"),n.styleClass))},inputs:{value:"value",styleClass:"styleClass",align:"align",layout:"layout"},features:[W([re,{provide:me,useExisting:e},{provide:ie,useExisting:e}]),$([M]),j],decls:1,vars:1,consts:[["marker",""],[3,"pBind","class",4,"ngFor","ngForOf"],[3,"pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf","ngIfElse"],[3,"pBind","class",4,"ngIf"]],template:function(a,n){a&1&&d(0,be,10,23,"div",1),a&2&&l("ngForOf",n.value)},dependencies:[B,Y,Z,w,te,M],encapsulation:2,changeDetection:0})}return e})();var Me=e=>({"background-color":e});function Ee(e,i){if(e&1&&(c(0,"span",5),u(1,"i"),s()),e&2){let t=m().$implicit;K(v(4,Me,t.color)),r(),f(t.icon)}}function Se(e,i){if(e&1&&S(0,Ee,2,6,"span",4),e&2){let t=i.$implicit;I(t.icon?0:-1)}}function Ie(e,i){if(e&1&&(c(0,"small"),G(1),s()),e&2){let t=i.$implicit,a=m();L("invisible",a.isDateMarker(t.date)),r(),J(t.date)}}function we(e,i){if(e&1&&u(0,"span",6),e&2){let t=i.$implicit;l("innerHTML",t.status,Q)}}var F=class e{pt=void 0;value=[];align="left";layout="vertical";isDateMarker(i){return i.endsWith("-00")}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=T({type:e,selectors:[["app-timeline-component"]],inputs:{pt:"pt",value:"value",align:"align",layout:"layout"},decls:7,vars:4,consts:[["marker",""],["opposite",""],["content",""],[1,"h-full","w-full","overflow-auto",3,"pt","value","align","layout"],[1,"flex","size-8","shrink-0","items-center","justify-center","rounded-full",3,"style"],[1,"flex","size-8","shrink-0","items-center","justify-center","rounded-full"],[3,"innerHTML"]],template:function(t,a){t&1&&(c(0,"p-timeline",3),d(1,Se,1,1,"ng-template",null,0,h)(3,Ie,2,3,"ng-template",null,1,h)(5,we,1,1,"ng-template",null,2,h),s()),t&2&&l("pt",a.pt)("value",a.value)("align",a.align)("layout",a.layout)},dependencies:[pe],encapsulation:2})};var ce=[{name:"M\u1EB9",birthday:"20/11/1974"},{name:"Corny",birthday:"06/04/2002"},{name:"N\xF4",birthday:"16/09/2003"},{name:"Big",birthday:"30/07/2012"},{name:"Ph\xFAc H\u1EF7",birthday:"01/12/2001"},{name:"H\u1ED3ng Ph\u01B0\u1EDBc",birthday:"20/12/2002"},{name:"B\u1EA3o H\xE2n",birthday:"03/01/2002"},{name:"Ng\u1ECDc H\xF9ng",birthday:"24/02/2002"},{name:"Minh Hi\u1EBFu",birthday:"06/03/2002"},{name:"Vi\u1EC7t Anh",birthday:"26/03/2002"},{name:"Th\xE0nh \u0110\u1EA1t",birthday:"30/03/2002"},{name:"Tr\xE2m Anh",birthday:"28/06/2002"},{name:"Mai Thy",birthday:"21/12/2002"},{name:"Xu\xE2n Nam",birthday:"04/02/2002"},{name:"Vinh Kh\xE1nh",birthday:"30/03/2002"},{name:"Vi\u1EC7t Ho\xE0ng",birthday:"13/07/2002"},{name:"Tu\u1EA5n Kha",birthday:"30/07/2002"},{name:"Duy Kh\u01B0\u01A1ng",birthday:"08/08/2002"},{name:"B\xE1 Long",birthday:"26/09/2002"},{name:"Quang H\u1EA3i",birthday:"07/12/2002"},{name:"Quang H\u01B0ng",birthday:"23/01/2002"},{name:"Thi\u1EC7n Nam",birthday:"02/05/2002"}];var O=class e{getUsers=()=>new Promise((i,t)=>{try{i({data:ce})}catch(a){t(a)}});static \u0275fac=function(t){return new(t||e)};static \u0275prov=E({token:e,factory:e.\u0275fac,providedIn:"root"})};var Be=["birthdayTimeline"],Fe=()=>({class:"min-w-32"}),Oe=e=>({event:e}),De=e=>({title:"Birthdays",content:e}),Ne=e=>({title:"Template",content:e});function Ae(e,i){if(e&1&&(c(0,"div",5,3),u(2,"app-timeline-component",6),s()),e&2){let t=m();r(2),l("pt",v(3,Oe,X(2,Fe)))("value",t.users)}}function ze(e,i){if(e&1&&u(0,"app-timeline-component",7),e&2){let t=m();l("value",t.events)}}function Pe(e,i){if(e&1&&b(0,8)(1,8),e&2){m();let t=_(1),a=_(4),n=_(6);l("ngTemplateOutlet",t.panelTemplate)("ngTemplateOutletContext",v(4,De,a)),r(),l("ngTemplateOutlet",t.panelTemplate)("ngTemplateOutletContext",v(6,Ne,n))}}var se=class e{users=[{status:"January",date:"01-00",icon:"fa-solid fa-aquarius",color:"#42A5F5"},{status:"February",date:"02-00",icon:"fa-solid fa-pisces",color:"#AB47BC"},{status:"March",date:"03-00",icon:"fa-solid fa-aries",color:"#EF5350"},{status:"April",date:"04-00",icon:"fa-solid fa-taurus",color:"#66BB6A"},{status:"May",date:"05-00",icon:"fa-solid fa-gemini",color:"#FBC02D"},{status:"June",date:"06-00",icon:"fa-solid fa-cancer",color:"#26A69A"},{status:"July",date:"07-00",icon:"fa-solid fa-leo",color:"#FF9800"},{status:"August",date:"08-00",icon:"fa-solid fa-virgo",color:"#9CCC65"},{status:"September",date:"09-00",icon:"fa-solid fa-libra",color:"#EC407A"},{status:"October",date:"10-00",icon:"fa-solid fa-scorpio",color:"#8E24AA"},{status:"November",date:"11-00",icon:"fa-solid fa-sagittarius",color:"#29B6F6"},{status:"December",date:"12-00",icon:"fa-solid fa-capricorn",color:"#607D8B"}];events=[{status:"Ordered",date:"15/10/2020 10:30",icon:k.SHOPPING_CART,color:"#9C27B0"},{status:"Processing",date:"15/10/2020 14:00",icon:k.COG,color:"#673AB7"},{status:"Shipped",date:"15/10/2020 16:15",icon:k.SHOPPING_CART,color:"#FF9800"},{status:"Delivered",date:"16/10/2020 10:00",icon:k.CHECK,color:"#607D8B"}];birthdayTimeline;userService=x(O);ngOnInit(){this.fetchUsers()}fetchUsers(){this.userService.getUsers().then(i=>{let t=[...this.users,...i.data.map(n=>{let[o,p]=n.birthday.split(/[-/]/);return{status:n.name,date:`${p}-${o}`}})],a=Object.values(t.reduce((n,o)=>(n[o.date]?n[o.date].status+=`<br>${o.status}`:n[o.date]=P(z({},o),{status:o.status}),n),{})).sort((n,o)=>n.date.localeCompare(o.date));this.users=a,setTimeout(()=>this.scrollBirthdayTimeline())})}scrollBirthdayTimeline(){let i=new Date,t=this.users.findIndex(n=>{let[o,p]=n.date.split("-").map(Number);return o>i.getMonth()+1||o===i.getMonth()+1&&p>=i.getDate()});this.birthdayTimeline.nativeElement.querySelectorAll(".p-timeline-event")[Math.max(t,0)].scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"})}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=T({type:e,selectors:[["app-timeline-sandbox"]],viewQuery:function(t,a){if(t&1&&q(Be,5,H),t&2){let n;g(n=y())&&(a.birthdayTimeline=n.first)}},decls:8,vars:1,consts:[["sandbox",""],["birthdays",""],["template",""],["birthdayTimeline",""],[1,"flex","flex-col","gap-5"],[1,"h-80","w-full"],["align","top","layout","horizontal",1,"h-full","w-full",3,"pt","value"],[3,"value"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(t,a){if(t&1&&(u(0,"app-sandbox",null,0),c(2,"div",4),d(3,Ae,3,5,"ng-template",null,1,h)(5,ze,1,1,"ng-template",null,2,h),S(7,Pe,2,8),s()),t&2){let n=_(1);r(7),I(n.panelTemplate?7:-1)}},dependencies:[B,w,ae,F],encapsulation:2})};export{se as TimelineSandbox};
