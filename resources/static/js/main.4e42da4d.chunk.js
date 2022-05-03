(window["webpackJsonpconference-form-widget"]=window["webpackJsonpconference-form-widget"]||[]).push([[0],{154:function(e){e.exports=JSON.parse('{"error":{"dataLoading":"Error during server connection"},"common":{"save":"Save","dataSaved":"Conference successfully saved","dataDeleted":"Conference successfully deleted","notAuthenticated":"User is not authenticated.","selectFile":"Upload new file","selectImageFile":"Upload new image","download":"Download","cancel":"Cancel","delete":"Delete","yes":"Yes","no":"No"},"validation":{"required":"{{field}} is required"},"entities":{"conference":{"deleteDialog":{"title":"Delete conference","description":"Are you sure?"},"notFound":"Conference not found","deleted":"Conference deleted","id":"entities.conference.id","name":"entities.conference.name","location":"entities.conference.location","date":"entities.conference.date"}}}')},155:function(e){e.exports=JSON.parse('{"error":{"dataLoading":"Errore durante la connessione al server"},"common":{"save":"Salva","dataSaved":"Conference salvato/a con successo","dataDeleted":"Conference eliminato/a con successo","notAuthenticated":"L\'utente non \xe8 autenticato.","selectFile":"Carica nuovo file","selectImageFile":"Carica nuova immagine","download":"Scarica","cancel":"Annulla","delete":"Elimina","yes":"Si","no":"No"},"validation":{"required":"{{field}} \xe8 obbligatorio"},"entities":{"conference":{"deleteDialog":{"title":"Elimina conference","description":"Sei sicuro/a?"},"notFound":"Conference non trovato/a","deleted":"Conference eliminato/a","id":"entit\xe0.conference.id","name":"entit\xe0.conference.name","location":"entit\xe0.conference.location","date":"entit\xe0.conference.date"}}}')},184:function(e,t,n){e.exports=n(305)},305:function(e,t,n){"use strict";n.r(t);var a=n(9),r=n(10),i=n(13),o=n(7),c=n(12),s=n(96),l=n(49),u=n(0),d=n.n(u),f=n(14),p=n.n(f),h=n(144),b=n.n(h),m=n(352),v=n(356),O=n(349),y=n(167),g=n(21),k=d.a.createContext(null),E=n(52),j=n(110),w=n(48),C={en:n(154),it:n(155)};function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var D=Object.keys(C).reduce((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,Object(l.a)({},t,Object(l.a)({},"translation",C[t])))}),{}),P=j.a.t,x=function(e){!function(e,t){j.a.use(w.a).init({defaultNs:"translation",interpolation:{escapeValue:!1},resources:D,lng:e||t,fallbackLng:t,react:{useSuspense:!1}})}(e,"en"),function(e){var t={mixed:{required:function(t){var n=t.path;return e("validation.required",{field:e("entities.conference.".concat(n))})}}};E.d(t)}(P)},F=function(e){return function(t){return function(e,t){var n=new CustomEvent(e,{detail:{payload:t}});window.dispatchEvent(n)}(e,t)}},N={tableAdd:"conference.table.add",tableSelect:"conference.table.select"},U={create:"conference.form.create",update:"conference.form.update",errorCreate:"conference.form.errorCreate",errorUpdate:"conference.form.errorUpdate"},T=n(17),A=n.n(T),R=n(30),M=n(23),L=n(3),z=n.n(L),I=(z.a.shape({initialized:z.a.bool,authenticated:z.a.bool}),n(168));z.a.oneOfType([z.a.func,z.a.shape({current:z.a.elementType}),z.a.shape(null)]);function H(e){var t=function(t){function n(){var t,r;Object(a.a)(this,n);for(var c=arguments.length,s=new Array(c),l=0;l<c;l++)s[l]=arguments[l];return(r=Object(i.a)(this,(t=Object(o.a)(n)).call.apply(t,[this].concat(s)))).renderWrappedComponent=function(t){var n=r.props,a=n.forwardedRef,i=Object(I.a)(n,["forwardedRef"]);return d.a.createElement(e,Object.assign({},i,{ref:a,keycloak:t}))},r}return Object(c.a)(n,t),Object(r.a)(n,[{key:"render",value:function(){return d.a.createElement(k.Consumer,null,this.renderWrappedComponent)}}]),n}(u.Component);return t.defaultProps={forwardedRef:function(){}},Object(u.forwardRef)((function(e,n){return d.a.createElement(t,Object.assign({},e,{forwardedRef:n}))}))}var W=function(e){var t=e.children,n=e.keycloak;return n.initialized&&n.authenticated?t:null},q=function(e){var t=e.children,n=e.keycloak;return n.initialized&&n.authenticated?null:t},J=function(){return{headers:new Headers({Authorization:"Bearer ".concat(window&&window.entando&&window.entando.keycloak&&window.entando.keycloak.authenticated?window.entando.keycloak.token:""),"Content-Type":"application/json"})}},K=function(){var e=Object(R.a)(A.a.mark((function e(t,n){var a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,n);case 2:if(204!==(a=e.sent).status){e.next=5;break}return e.abrupt("return",{});case 5:return e.abrupt("return",a.status>=200&&a.status<300?a.json():Promise.reject(new Error(a.statusText||a.status)));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var G="api/conferences",Y=function(){var e=Object(R.a)(A.a.mark((function e(t,n){var a,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t,"/").concat(G,"/").concat(n),r=V({},J(),{method:"GET"}),e.abrupt("return",K(a,r));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Q=function(){var e=Object(R.a)(A.a.mark((function e(t,n){var a,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t,"/").concat(G),r=V({},J(),{method:"POST",body:n?JSON.stringify(n):null}),e.abrupt("return",K(a,r));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),X=function(){var e=Object(R.a)(A.a.mark((function e(t,n,a){var r,i;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(t,"/").concat(G,"/").concat(n),i=V({},J(),{method:"PUT",body:a?JSON.stringify(a):null}),e.abrupt("return",K(r,i));case 3:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),Z=function(){var e=Object(R.a)(A.a.mark((function e(t,n){var a,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t,"/").concat(G,"/").concat(n),r=V({},J(),{method:"DELETE"}),e.abrupt("return",K(a,r));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),$=n(4),_=n(355),ee=n(340),te=n(337),ne=n(5),ae=n(341),re=n(157),ie=n.n(re),oe=n(158),ce=n.n(oe),se=n(156),le=n.n(se),ue=n(159),de=n.n(ue),fe={success:le.a,error:ie.a,info:ce.a},pe={success:3e3,error:null,info:5e3},he=function e(t){var n=t.className,a=t.classes,r=t.status,i=t.message,o=t.onClose,c=!!i,s=r||e.INFO,l=fe[s],u=pe[s],f=d.a.createElement("span",{className:a.message},d.a.createElement(l,{className:Object($.a)(a.icon,a.iconStatus)}),i);return d.a.createElement(_.a,{open:c,onClose:o,autoHideDuration:u},d.a.createElement(ee.a,{className:Object($.a)(a[s],n),message:f,action:[d.a.createElement(ae.a,{key:"close","aria-label":"close",color:"inherit",onClick:o},d.a.createElement(de.a,{className:a.icon}))]}))};he.SUCCESS="success",he.ERROR="error",he.defaultProps={message:null,className:"",status:he.INFO="info",onClose:function(){}};var be=Object(ne.a)((function(e){return{message:{display:"flex",alignItems:"center"},icon:{fontSize:20},iconStatus:{opacity:.9,marginRight:e.spacing(1)},success:{backgroundColor:te.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.main}}}),{withTheme:!0})(he),me=(z.a.shape({id:z.a.number,name:z.a.string.isRequired,location:z.a.string,date:z.a.string}),z.a.shape({id:z.a.oneOfType([z.a.string,z.a.number]),name:z.a.string,location:z.a.string,date:z.a.oneOfType([z.a.string,z.a.instanceOf(Date)])}),z.a.shape({id:z.a.oneOfType([z.a.bool,z.a.shape()]),name:z.a.oneOfType([z.a.bool,z.a.shape()]),location:z.a.oneOfType([z.a.bool,z.a.shape()]),date:z.a.oneOfType([z.a.bool,z.a.shape()])}),z.a.shape({id:z.a.oneOfType([z.a.string,z.a.shape()]),name:z.a.oneOfType([z.a.string,z.a.shape()]),location:z.a.oneOfType([z.a.string,z.a.shape()]),date:z.a.oneOfType([z.a.string,z.a.shape()])}),n(165)),ve=n(169),Oe=n(346),ye=n(347),ge=n(351),ke=n(20),Ee=n(350),je=n(166),we={en:n(64).a},Ce=n(354),Se=n(345),De=n(343),Pe=n(344),xe=n(342),Fe=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={open:!1},n.handleOpen=n.handleOpen.bind(Object(M.a)(n)),n.discard=n.discard.bind(Object(M.a)(n)),n.confirm=n.confirm.bind(Object(M.a)(n)),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"handleOpen",value:function(){this.setState((function(){return{open:!0}}))}},{key:"handleClose",value:function(e){var t=this.props.onCloseDialog;this.setState((function(){return{open:!1}})),t(e)}},{key:"discard",value:function(){this.handleClose(t.DISCARD)}},{key:"confirm",value:function(){this.handleClose(t.CONFIRM)}},{key:"render",value:function(){var e=this.state.open,t=this.props,n=t.dialog,a=n.title,r=n.description,i=n.confirmLabel,o=n.discardLabel,c=t.Renderer;return d.a.createElement("div",null,d.a.createElement(c,{onClick:this.handleOpen}),d.a.createElement(Ce.a,{open:e,onClose:this.handleClose,"aria-labelledby":"confirmation-dialog-title","aria-describedby":"confirmation-dialog-description"},d.a.createElement(xe.a,{id:"confirmation-dialog-title"},a),d.a.createElement(De.a,null,d.a.createElement(Pe.a,{id:"confirmation-dialog-description"},r)),d.a.createElement(Se.a,null,d.a.createElement(Oe.a,{onClick:this.discard,autoFocus:!0},o),d.a.createElement(Oe.a,{onClick:this.confirm,color:"primary"},i))))}}]),t}(u.PureComponent);Fe.CONFIRM="CONFIRM",Fe.DISCARD="DISCARD";var Ne=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).handleConfirmationDialogAction=n.handleConfirmationDialogAction.bind(Object(M.a)(n)),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"handleConfirmationDialogAction",value:function(e){var t=this.props,n=t.onDelete,a=t.values;switch(e){case Fe.CONFIRM:n(a)}}},{key:"render",value:function(){var e,t=this.props,n=t.classes,a=t.values,r=t.touched,i=t.errors,o=t.handleChange,c=t.handleBlur,s=t.handleSubmit,l=t.onDelete,u=t.onCancelEditing,f=t.isSubmitting,p=t.setFieldValue,h=t.t,b=t.i18n,m=function(e){return i[e]&&r[e]?i[e]:""};return d.a.createElement(ke.a,{utils:je.a,locale:we[b.language]},d.a.createElement("form",{onSubmit:function(e){e.stopPropagation(),s(e)},className:n.root,"data-testid":"conference-form"},d.a.createElement(ye.a,{container:!0,spacing:2},d.a.createElement("input",{type:"hidden",id:"conference-id","data-testid":"conference-id",value:a.id}),d.a.createElement(ye.a,{item:!0,xs:12,sm:6},d.a.createElement(ge.a,{id:"conference-name",error:i.name&&r.name,helperText:m("name"),className:n.textField,onChange:o,onBlur:c,value:a.name,name:"name",label:h("entities.conference.name")})),d.a.createElement(ye.a,{item:!0,xs:12,sm:6},d.a.createElement(ge.a,{id:"conference-location",error:i.location&&r.location,helperText:m("location"),className:n.textField,onChange:o,onBlur:c,value:a.location,name:"location",label:h("entities.conference.location")})),d.a.createElement(ye.a,{item:!0,xs:12,sm:6},d.a.createElement(Ee.a,{id:"conference-date",error:i.date&&r.date,helperText:m("date"),className:n.textField,onChange:(e="date",function(t){p(e,t)}),value:a.date,labelFunc:function(e){return e?new Date(e).toLocaleString(b.language):""},name:"date",label:h("entities.conference.date")})),l&&d.a.createElement(Fe,{onCloseDialog:this.handleConfirmationDialogAction,dialog:{title:h("entities.conference.deleteDialog.title"),description:h("entities.conference.deleteDialog.description"),confirmLabel:h("common.yes"),discardLabel:h("common.no")},Renderer:function(e){var t=e.onClick;return d.a.createElement(Oe.a,{onClick:t,disabled:f},h("common.delete"))}}),d.a.createElement(Oe.a,{onClick:u,disabled:f,"data-testid":"cancel-btn"},h("common.cancel")),d.a.createElement(Oe.a,{type:"submit",color:"primary",disabled:f,"data-testid":"submit-btn"},h("common.save")))))}}]),t}(u.PureComponent);Ne.defaultProps={onCancelEditing:function(){},classes:{},values:{},touched:{},errors:{},onDelete:null};var Ue={id:"",name:"",location:"",date:null},Te={mapPropsToValues:function(e){return e.conference||Ue},enableReinitialize:!0,validationSchema:E.c().shape({id:E.b(),name:E.e().required(),location:E.e(),date:E.a().nullable()}),handleSubmit:function(e,t){var n=t.setSubmitting;(0,t.props.onSubmit)(e),n(!1)},displayName:"ConferenceForm"},Ae=Object(ve.a)(Object(ne.a)((function(e){return{root:{margin:e.spacing(3)},textField:{width:"100%"}}}),{withTheme:!0}),Object(w.b)(),Object(me.a)(Te))(Ne),Re=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={notificationMessage:null,notificationStatus:null},n.closeNotification=n.closeNotification.bind(Object(M.a)(n)),n.handleDelete=n.handleDelete.bind(Object(M.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(M.a)(n)),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.keycloak;e.initialized&&e.authenticated&&this.fetchData()}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.keycloak,a=t.id,r=n.initialized&&n.authenticated,i=e.keycloak.authenticated!==r,o=a&&a!==e.id;r&&(o||i)&&this.fetchData()}},{key:"fetchData",value:function(){var e=Object(R.a)(A.a.mark((function e(){var t,n,a,r,i;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.keycloak,a=t.id,r=t.serviceUrl,!(n.initialized&&n.authenticated)||!a){e.next=13;break}return e.prev=3,e.next=6,Y(r,a);case 6:i=e.sent,this.setState((function(){return{conference:i}})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),this.handleError(e.t0);case 13:case"end":return e.stop()}}),e,this,[[3,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"closeNotification",value:function(){this.setState((function(){return{notificationMessage:null}}))}},{key:"handleSubmit",value:function(){var e=Object(R.a)(A.a.mark((function e(t){var n,a,r,i,o,c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props,a=n.t,r=n.onUpdate,i=n.keycloak,o=n.serviceUrl,!(i.initialized&&i.authenticated)){e.next=14;break}return e.prev=3,e.next=6,X(o,t.id,t);case 6:c=e.sent,r(c),this.setState({conference:c,notificationMessage:a("common.dataSaved"),notificationStatus:be.SUCCESS}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),this.handleError(e.t0);case 14:case"end":return e.stop()}}),e,this,[[3,11]])})));return function(t){return e.apply(this,arguments)}}()},{key:"handleDelete",value:function(){var e=Object(R.a)(A.a.mark((function e(t){var n,a,r,i,o;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props,a=n.t,r=n.onDelete,i=n.keycloak,o=n.serviceUrl,!(i.initialized&&i.authenticated)){e.next=13;break}return e.prev=3,e.next=6,Z(o,t.id);case 6:r(t),this.setState({conference:null,notificationMessage:a("common.dataDeleted"),notificationStatus:be.SUCCESS}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),this.handleError(e.t0);case 13:case"end":return e.stop()}}),e,this,[[3,10]])})));return function(t){return e.apply(this,arguments)}}()},{key:"handleError",value:function(e){var t=this.props,n=t.t;(0,t.onError)(e),this.setState((function(){return{notificationMessage:n("error.dataLoading"),notificationStatus:be.ERROR}}))}},{key:"render",value:function(){var e,t=this.props,n=t.keycloak,a=t.onCancelEditing,r=t.t,i=this.state,o=i.notificationMessage,c=i.notificationStatus,s=i.conference;return e="undefined"===typeof s?r("entities.conference.notFound"):null===s?r("entities.conference.deleted"):d.a.createElement(Ae,{conference:s,onSubmit:this.handleSubmit,onCancelEditing:a,onDelete:this.handleDelete}),d.a.createElement(d.a.Fragment,null,d.a.createElement(q,{keycloak:n},r("common.notAuthenticated")),d.a.createElement(W,{keycloak:n},e),d.a.createElement(be,{status:c,message:o,onClose:this.closeNotification}))}}]),t}(u.PureComponent);Re.defaultProps={onCancelEditing:function(){},onDelete:function(){},onUpdate:function(){},onError:function(){},serviceUrl:""};var Me=H(Object(w.b)()(Re)),Le=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={notificationMessage:null,notificationStatus:null},n.closeNotification=n.closeNotification.bind(Object(M.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(M.a)(n)),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"closeNotification",value:function(){this.setState({notificationMessage:null})}},{key:"handleSubmit",value:function(){var e=Object(R.a)(A.a.mark((function e(t){var n,a,r,i,o,c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props,a=n.t,r=n.onCreate,i=n.keycloak,o=n.serviceUrl,!(i.initialized&&i.authenticated)){e.next=14;break}return e.prev=3,e.next=6,Q(o,t);case 6:c=e.sent,r(c),this.setState({notificationMessage:a("common.dataSaved"),notificationStatus:be.SUCCESS}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),this.handleError(e.t0);case 14:case"end":return e.stop()}}),e,this,[[3,11]])})));return function(t){return e.apply(this,arguments)}}()},{key:"handleError",value:function(e){var t=this.props,n=t.onError,a=t.t;n(e),this.setState({notificationMessage:a("error.dataLoading"),notificationStatus:be.ERROR})}},{key:"render",value:function(){var e=this.props,t=e.keycloak,n=e.onCancelEditing,a=e.t,r=this.state,i=r.notificationMessage,o=r.notificationStatus;return d.a.createElement(d.a.Fragment,null,d.a.createElement(q,{keycloak:t},a("common.notAuthenticated")),d.a.createElement(W,{keycloak:t},d.a.createElement(Ae,{onSubmit:this.handleSubmit,onCancelEditing:n})),d.a.createElement(be,{status:o,message:i,onClose:this.closeNotification}))}}]),t}(u.PureComponent);Le.defaultProps={onError:function(){},onCancelEditing:function(){},onCreate:function(){},serviceUrl:""};var ze=H(Object(w.b)()(Le));function Ie(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function He(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ie(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ie(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var We=function(){return window&&window.entando&&window.entando.keycloak&&He({},window.entando.keycloak,{initialized:!0})||{initialized:!1}},qe={id:"id",hidden:"hidden",locale:"locale",disableDefaultEventHandler:"disable-default-event-handler",serviceUrl:"service-url"},Je=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(n=Object(i.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).keycloak=We(),n.onCreate=F(U.create),n.onCancelEditing=F(U.cancelEditing),n.onDelete=F(U.delete),n.onUpdate=F(U.update),n.onErrorCreate=F(U.errorCreate),n.onErrorUpdate=F(U.errorUpdate),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"attributeChangedCallback",value:function(e,t,n){if(this.container&&t!==n){if(!Object.values(qe).includes(e))throw new Error("Untracked changed attribute: ".concat(e));e===qe.disableDefaultEventHandler&&this.onToggleDisableDefaultEvent(),this.render()}}},{key:"connectedCallback",value:function(){var e=this;this.container=document.createElement("div"),this.mountPoint=document.createElement("div"),this.container.appendChild(this.mountPoint);var t,n,a=this.attachShadow({mode:"open"});a.appendChild(this.container),this.jss=Object(g.b)(He({},Object(m.a)(),{insertionPoint:this.container})),this.muiTheme=Object(y.a)({props:{MuiDialog:{container:this.mountPoint},MuiPopover:{container:this.mountPoint}}}),this.keycloak=He({},We(),{initialized:!0}),this.unsubscribeFromKeycloakEvent=(t="keycloak",n=function(){e.keycloak=He({},We(),{initialized:!0}),e.render()},window.addEventListener(t,n),function(){window.removeEventListener(t,n)}),this.onToggleDisableDefaultEvent(),this.render(),b()(a)}},{key:"disconnectedCallback",value:function(){this.unsubscribeFromWidgetEvents&&this.unsubscribeFromWidgetEvents(),this.unsubscribeFromKeycloakEvent&&this.unsubscribeFromKeycloakEvent()}},{key:"defaultWidgetEventHandler",value:function(){var e=this;return function(t){var n=N.tableAdd,a=N.cancelEditing,r=N.create,i=N.edit,o=N.delete,c=N.tableSelect,s=N.update,l=qe.id;switch(t.type){case n:e.setAttribute(l,"");break;case i:e.hidden=!1,e.setAttribute(l,t.detail.payload.id);break;case r:case a:case s:e.hidden=!0;break;case o:e.hidden=!0,e.setAttribute(l,"");break;case c:e.setAttribute(l,t.detail.payload.id);break;default:throw new Error("Unsupported event: ".concat(t.type))}}}},{key:"onToggleDisableDefaultEvent",value:function(){var e,t,n="true"===this.getAttribute(qe.disableDefaultEventHandler);if(n!==this.defaultEventHandlerDisabled){if(n)this.unsubscribeFromWidgetEvents&&this.unsubscribeFromWidgetEvents(),this.unsubscribeFromKeycloakEvent&&this.unsubscribeFromKeycloakEvent();else{var a=this.defaultWidgetEventHandler();this.unsubscribeFromWidgetEvents=(e=Object.values(N),t=a,e.forEach((function(e){return window.addEventListener(e,t)})),function(){e.forEach((function(e){return window.removeEventListener(e,t)}))})}this.defaultEventHandlerDisabled=n}}},{key:"render",value:function(){var e=this.getAttribute(qe.serviceUrl)||"";if("true"===this.getAttribute(qe.hidden))p.a.render(d.a.createElement(d.a.Fragment,null));else{var t=this.getAttribute(qe.locale);x(t);var n=this.getAttribute(qe.id),a=n?d.a.createElement(Me,{id:n,onUpdate:this.onUpdate,onError:this.onErrorUpdate,serviceUrl:e},null):d.a.createElement(ze,{onCreate:this.onCreate,onError:this.onErrorCreate,serviceUrl:e},null);p.a.render(d.a.createElement(k.Provider,{value:this.keycloak},d.a.createElement(v.b,{jss:this.jss},d.a.createElement(O.a,{theme:this.muiTheme},a))),this.mountPoint)}}}],[{key:"observedAttributes",get:function(){return Object.values(qe)}}]),t}(Object(s.a)(HTMLElement));customElements.define("conference-form",Je)}},[[184,1,2]]]);
//# sourceMappingURL=main.4e42da4d.chunk.js.map