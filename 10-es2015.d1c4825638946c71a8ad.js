(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{bmHB:function(t,e,n){},uJlR:function(t,e,n){"use strict";n.r(e),n.d(e,"SupportedPeopleModule",function(){return it});var i=n("SVse"),o=n("iInd"),a=n("mrSG");class c{}var r=n("OC8m"),s=n("SsA2"),d=n("H+bZ"),l=n("8Y7J");let g=(()=>{class t{constructor(){this.getProjects=()=>d.a.get(d.a.url.projects),this.countVerifiedProjects=()=>d.a.get(d.a.url.projects+"/count"),this.getVerifiedProjects=(t,e)=>d.a.get(`${d.a.url.projects}/page/${t}/size/${e}`),this.countUnverifiedProjects=()=>d.a.get(d.a.url.projects+"/unverified/count"),this.getUnverified=(t,e)=>d.a.get(`${d.a.url.projects}/unverified/page/${t}/size/${e}`),this.countClosedProjects=()=>d.a.get(d.a.url.projects+"/closed/count"),this.getClosed=(t,e)=>d.a.get(`${d.a.url.projects}/closed/page/${t}/size/${e}`),this.getAllActivating=()=>d.a.get(d.a.url.projects+"/activating"),this.countActivatingProjects=()=>d.a.get(d.a.url.projects+"/activating/count"),this.getActivatingProjects=(t,e)=>d.a.get(`${d.a.url.projects}/activating/page/${t}/size/${e}`),this.countReachedProjects=()=>d.a.get(d.a.url.projects+"/reached/count"),this.getReachedProjects=(t,e)=>d.a.get(`${d.a.url.projects}/reached/page/${t}/size/${e}`),this.countOverdueProjects=()=>d.a.get(d.a.url.projects+"/overdue/count"),this.getOverdueProjects=(t,e)=>d.a.get(`${d.a.url.projects}/overdue/page/${t}/size/${e}`),this.updateMoveMoneyProgress=()=>d.a.put(`${d.a.url.projects}/handle_all_money`),this.updateProjectStatus=()=>d.a.get(d.a.url.projects+"/update_donate_status"),this.createProject=(t,e)=>d.a.post(`${d.a.url.projects}/create/collaborator/${e}`,t),this.updateProject=t=>d.a.put(`${d.a.url.projects}/update`,t),this.updateAndApproveProject=t=>d.a.put(`${d.a.url.projects}/update_and_approve`,t),this.deleteProject=t=>d.a.delete(`${d.a.url.projects}/${t}`),this.approveProject=t=>d.a.put(`${d.a.url.projects}/approve/${t}`),this.closeProject=t=>d.a.put(`${d.a.url.projects}/close/${t}`),this.extendProject=(t,e)=>d.a.put(`${d.a.url.projects}/extend/${t}/num_of_date/${e}`),this.countTotalMoney=()=>d.a.get(d.a.url.projects+"/count_money"),this.disburseFund=()=>d.a.get(d.a.url.projects+"/disburse_fund")}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=l.Lb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var b=n("iELJ"),u=n("Dxy4"),p=n("Tj54"),h=n("Q2Ze"),f=n("e6WT"),m=n("s7LF");function v(t,e){1&t&&(l.Vb(0,"h3",11),l.Dc(1,"Th\xeam Ng\u01b0\u1eddi th\u1ee5 h\u01b0\u1edfng"),l.Ub())}function D(t,e){1&t&&(l.Vb(0,"h3",11),l.Dc(1,"C\u1eadp nh\u1eadt Ng\u01b0\u1eddi th\u1ee5 h\u01b0\u1edfng"),l.Ub())}let U=(()=>{class t{constructor(t,e,n){this.notificationService=t,this.dialogRef=e,this.data=n,e.disableClose=!0}ngOnInit(){}save(){""==this.data.fullName||""==this.data.address||""==this.data.phoneNumber||""==this.data.bankAccount?this.notificationService.warn("Kh\xf4ng \u0111\u01b0\u1ee3c tr\u1ed1ng th\xf4ng tin n\xe0o"):this.dialogRef.close(this.data)}}return t.\u0275fac=function(e){return new(e||t)(l.Pb(r.a),l.Pb(b.g),l.Pb(b.a))},t.\u0275cmp=l.Jb({type:t,selectors:[["app-dialog-supported-people"]],decls:29,vars:17,consts:[["mat-icon-button","","mat-dialog-close","",1,"close-button"],["color","warn",1,"close-icon"],["mat-dialog-title","",4,"ngIf"],["appearance","outline"],["name","fullname","matInput","","required","","cdkFocusInitial","",3,"ngModel","ngModelChange"],["name","address","matInput","","required","",3,"ngModel","ngModelChange"],["name","phoneNumber","matInput","","required","",3,"ngModel","ngModelChange"],["name","bankName","matInput","","required","",3,"ngModel","ngModelChange"],["name","bankAccount","matInput","","required","",3,"ngModel","ngModelChange"],["align","end"],["mat-button","",1,"btn","btn-success",3,"click"],["mat-dialog-title",""]],template:function(t,e){1&t&&(l.Vb(0,"button",0),l.Vb(1,"mat-icon",1),l.Dc(2,"close"),l.Ub(),l.Ub(),l.Bc(3,v,2,0,"h3",2),l.Bc(4,D,2,0,"h3",2),l.Vb(5,"mat-dialog-content"),l.Vb(6,"mat-form-field",3),l.Vb(7,"mat-label"),l.Dc(8,"T\xean \u0111\u1ea7y \u0111\u1ee7"),l.Ub(),l.Vb(9,"input",4),l.cc("ngModelChange",function(t){return e.data.fullName=t}),l.Ub(),l.Ub(),l.Vb(10,"mat-form-field",3),l.Vb(11,"mat-label"),l.Dc(12,"\u0110\u1ecba ch\u1ec9"),l.Ub(),l.Vb(13,"input",5),l.cc("ngModelChange",function(t){return e.data.address=t}),l.Ub(),l.Ub(),l.Vb(14,"mat-form-field",3),l.Vb(15,"mat-label"),l.Dc(16,"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"),l.Ub(),l.Vb(17,"input",6),l.cc("ngModelChange",function(t){return e.data.phoneNumber=t}),l.Ub(),l.Ub(),l.Vb(18,"mat-form-field",3),l.Vb(19,"mat-label"),l.Dc(20,"T\xean ng\xe2n h\xe0ng"),l.Ub(),l.Vb(21,"input",7),l.cc("ngModelChange",function(t){return e.data.bankName=t}),l.Ub(),l.Ub(),l.Vb(22,"mat-form-field",3),l.Vb(23,"mat-label"),l.Dc(24,"S\u1ed1 t\xe0i kho\u1ea3n"),l.Ub(),l.Vb(25,"input",8),l.cc("ngModelChange",function(t){return e.data.bankAccount=t}),l.Ub(),l.Ub(),l.Ub(),l.Vb(26,"mat-dialog-actions",9),l.Vb(27,"button",10),l.cc("click",function(){return e.save()}),l.Dc(28,"L\u01b0u"),l.Ub(),l.Ub()),2&t&&(l.Db(3),l.lc("ngIf",null==e.data.stp_ID),l.Db(1),l.lc("ngIf",null!=e.data.stp_ID),l.Db(2),l.yc("width",100,"%"),l.Db(3),l.lc("ngModel",e.data.fullName),l.Db(1),l.yc("width",100,"%"),l.Db(3),l.lc("ngModel",e.data.address),l.Db(1),l.yc("width",100,"%"),l.Db(3),l.lc("ngModel",e.data.phoneNumber),l.Db(1),l.yc("width",100,"%"),l.Db(3),l.lc("ngModel",e.data.bankName),l.Db(1),l.yc("width",100,"%"),l.Db(3),l.lc("ngModel",e.data.bankAccount))},directives:[u.a,b.d,p.a,i.k,b.e,h.b,h.e,f.b,m.c,m.m,m.i,m.k,b.c,b.h],styles:[".image-container-loading[_ngcontent-%COMP%]{background-image:url(loading.8ce64eeb4935117736d4.gif)}.image-container[_ngcontent-%COMP%], .image-container-loading[_ngcontent-%COMP%]{position:relative;background-repeat:no-repeat;background-size:70px;background-position:50%;width:300px;height:180px;margin:5px}.image-container[_ngcontent-%COMP%]{background-image:url(upload.5ca7ecf41ef411651ece.png);border:1px dashed #1c8adb;border-radius:2px}.image-container[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#9ecbec!important;opacity:.8}img[_ngcontent-%COMP%]{width:300px;height:182px;left:-2px;border-radius:2px}.button[_ngcontent-%COMP%], img[_ngcontent-%COMP%]{position:absolute;top:-2px}.button[_ngcontent-%COMP%]{right:-5px}.video-container-loading[_ngcontent-%COMP%]{background-image:url(loading.8ce64eeb4935117736d4.gif);border-radius:6px}.video-container[_ngcontent-%COMP%], .video-container-loading[_ngcontent-%COMP%]{position:relative;background-repeat:no-repeat;background-size:300px;background-position:50%;width:100%;height:400px;margin:10px auto}.video-container[_ngcontent-%COMP%]{background-image:url(upload-video.08ba7a62c53b6c43597a.png);border:2px dashed #1c8adb;border-radius:6px}.video-container[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#9ecbec!important;opacity:.8}video[_ngcontent-%COMP%]{position:absolute;border-radius:3px;width:100%;height:auto}.delete-video-button[_ngcontent-%COMP%]{position:absolute;right:0}.close-button[_ngcontent-%COMP%]{float:right;top:-24px;right:-24px}.back-button[_ngcontent-%COMP%]{float:left;top:-24px;left:-24px}"]}),t})();n("bmHB");var P=n("y84U"),V=n("nYR2"),y=n("pmY2"),M=n("Vaw3"),k=n("ZTz/"),C=n("TN/R"),j=n("pMoy"),I=n("40+f"),_=n("UhP/");let x=(()=>{class t{constructor(){this.files=new l.o,this.background="#f5fcff",this.opacity="1"}onDragOver(t){t.preventDefault(),t.stopPropagation(),this.background="#9ecbec",this.opacity="0.8"}onDragLeave(t){t.preventDefault(),t.stopPropagation(),this.background="#f5fcff",this.opacity="1"}ondrop(t){t.preventDefault(),t.stopPropagation(),this.background="#f5fcff",this.opacity="1";let e=t.dataTransfer.files;e.length>0&&this.files.emit(e)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=l.Kb({type:t,selectors:[["","imageDragDrop",""]],hostVars:4,hostBindings:function(t,e){1&t&&l.cc("dragover",function(t){return e.onDragOver(t)})("dragleave",function(t){return e.onDragLeave(t)})("drop",function(t){return e.ondrop(t)}),2&t&&l.yc("background-color",e.background)("opacity",e.opacity)},outputs:{files:"files"}}),t})(),O=(()=>{class t{constructor(){this.files=new l.o,this.background="#f5fcff",this.opacity="1"}onDragOver(t){t.preventDefault(),t.stopPropagation(),this.background="#9ecbec",this.opacity="0.8"}onDragLeave(t){t.preventDefault(),t.stopPropagation(),this.background="#f5fcff",this.opacity="1"}ondrop(t){t.preventDefault(),t.stopPropagation(),this.background="#f5fcff",this.opacity="1";let e=t.dataTransfer.files;e.length>0&&this.files.emit(e)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=l.Kb({type:t,selectors:[["","videoDragDrop",""]],hostVars:4,hostBindings:function(t,e){1&t&&l.cc("dragover",function(t){return e.onDragOver(t)})("dragleave",function(t){return e.onDragLeave(t)})("drop",function(t){return e.ondrop(t)}),2&t&&l.yc("background-color",e.background)("opacity",e.opacity)},outputs:{files:"files"}}),t})();function w(t,e){if(1&t&&(l.Vb(0,"mat-option",24),l.Vb(1,"a"),l.Dc(2),l.Ub(),l.Ub()),2&t){const t=e.$implicit;l.lc("value",t.cti_ID),l.Db(2),l.Ec(t.name)}}function S(t,e){if(1&t&&(l.Vb(0,"mat-option",24),l.Vb(1,"a"),l.Dc(2),l.Ub(),l.Ub()),2&t){const t=e.$implicit;l.lc("value",t.prt_ID),l.Db(2),l.Ec(t.projectTypeName)}}function $(t,e){if(1&t){const t=l.Wb();l.Vb(0,"div",28),l.cc("click",function(){return l.uc(t),l.sc(2).click()})("files",function(e){l.uc(t);const n=l.gc().$implicit;return l.gc().uploadImages(e,n)}),l.Vb(1,"input",29,30),l.cc("change",function(e){l.uc(t);const n=l.gc().$implicit;return l.gc().uploadImages(e.target.files,n)}),l.Ub(),l.Ub()}}function N(t,e){1&t&&l.Qb(0,"div",31)}function T(t,e){1&t&&l.Qb(0,"div",32)}function L(t,e){if(1&t&&l.Qb(0,"img",35),2&t){const t=l.gc(2).$implicit,e=l.gc();l.lc("src",e.imageUrls[t],l.wc)}}function A(t,e){if(1&t){const t=l.Wb();l.Vb(0,"button",36),l.cc("click",function(){l.uc(t);const e=l.gc(2).index;return l.gc().deleteAttachment(e)}),l.Qb(1,"i",37),l.Ub()}}function B(t,e){if(1&t&&(l.Vb(0,"div",32),l.Bc(1,L,1,1,"img",33),l.Bc(2,A,2,0,"button",34),l.Ub()),2&t){const t=l.gc().$implicit,e=l.gc();l.Db(1),l.lc("ngIf",e.imageUrls[t]),l.Db(1),l.lc("ngIf",e.imageUrls[t])}}function R(t,e){if(1&t&&(l.Vb(0,"mat-grid-tile"),l.Bc(1,$,3,0,"div",25),l.Bc(2,N,1,0,"div",26),l.Bc(3,T,1,0,"div",27),l.Bc(4,B,3,2,"div",27),l.Ub()),2&t){const t=e.$implicit,n=l.gc();l.Db(1),l.lc("ngIf",!n.imageUrls[t]&&!n.isUpLoadingImage),l.Db(1),l.lc("ngIf",!n.imageUrls[t]&&n.isUpLoadingImage&&t==n.upLoadingIndex),l.Db(1),l.lc("ngIf",!n.imageUrls[t]&&n.isUpLoadingImage&&t!=n.upLoadingIndex),l.Db(1),l.lc("ngIf",n.imageUrls[t])}}function F(t,e){if(1&t){const t=l.Wb();l.Vb(0,"div",38),l.cc("click",function(){return l.uc(t),l.sc(2).click()})("files",function(e){return l.uc(t),l.gc().uploadVideo(e)}),l.Vb(1,"input",39,40),l.cc("change",function(e){return l.uc(t),l.gc().uploadVideo(e.target.files)}),l.Ub(),l.Ub()}}function Q(t,e){1&t&&l.Qb(0,"div",41)}function z(t,e){if(1&t&&(l.Vb(0,"video",44),l.Qb(1,"source",45),l.Ub()),2&t){const t=l.gc(2);l.lc("src",t.videoUrl,l.wc)}}function W(t,e){if(1&t){const t=l.Wb();l.Vb(0,"button",46),l.cc("click",function(){return l.uc(t),l.gc(2).deleteVideo()}),l.Qb(1,"i",37),l.Ub()}}function q(t,e){if(1&t&&(l.Vb(0,"div",41),l.Bc(1,z,2,1,"video",42),l.Bc(2,W,2,0,"button",43),l.Ub()),2&t){const t=l.gc();l.Db(1),l.lc("ngIf",t.videoUrl),l.Db(1),l.lc("ngIf",t.videoUrl)}}const E=function(){return[0,1,2,3,4,5]};let J=(()=>{class t{constructor(t,e,n,i,o,a){this.notificationService=t,this.cityService=e,this.projectTypeService=n,this.dialogRef=i,this.storage=o,this.data=a,this.imageUrls=[],this.canDisburseWhenOverdue=!0,i.disableClose=!0}ngOnInit(){this.getProjectType(),this.getCity(),this.initImageArray(),this.videoUrl=this.data.videoUrl}initImageArray(){this.imageUrls=this.data.images;let t=this.imageUrls.length;for(let e=0;e<6-t;e++)this.imageUrls.push("")}uploadImages(t,e){if(this.isUpLoadingImage=!0,this.upLoadingIndex=e,t.length>1)return this.notificationService.warn("Ch\u1ec9 \u0111\u01b0\u1ee3c ch\u1ecdn 1 \u1ea3nh"),this.isUpLoadingImage=!1,void(this.upLoadingIndex=null);for(let i=0;i<t.length;i++){var n=Date.now();const o=t[i],a=this.storage.ref(`chari/${n}`);this.storage.upload(`chari/${n}`,o).snapshotChanges().pipe(Object(V.a)(()=>{this.downloadURL=a.getDownloadURL(),this.downloadURL.subscribe(t=>{t&&(this.imageUrls[e]=t,this.isUpLoadingImage=!1,this.upLoadingIndex=null)})})).subscribe(t=>{t&&console.log(t)})}}uploadVideo(t){if(this.isUploadingVideo=!0,t.length>1)return this.notificationService.warn("Ch\u1ec9 \u0111\u01b0\u1ee3c ch\u1ecdn 1 video"),void(this.isUploadingVideo=!1);for(let n=0;n<t.length;n++){var e=Date.now();const i=t[n],o=this.storage.ref(`chari_video/${e}`);this.storage.upload(`chari_video/${e}`,i).snapshotChanges().pipe(Object(V.a)(()=>{this.downloadURL=o.getDownloadURL(),this.downloadURL.subscribe(t=>{t&&(this.videoUrl=t,this.isUploadingVideo=!1)})})).subscribe(t=>{t&&console.log(t)})}}deleteAttachment(t){this.imageUrls[t]=""}deleteVideo(){this.videoUrl=null}getCity(){return Object(a.b)(this,void 0,void 0,function*(){this.Cities=yield(yield this.cityService.getCities()).data})}getProjectType(){return Object(a.b)(this,void 0,void 0,function*(){this.ProjectTypes=yield(yield this.projectTypeService.getProjectTypes()).data})}changeState(){this.canDisburseWhenOverdue=1!=this.canDisburseWhenOverdue}filterProjectType(){return this.ProjectTypes.filter(t=>t.canDisburseWhenOverdue==this.canDisburseWhenOverdue)}saveImageAndVideo(){for(this.data.videoUrl=this.videoUrl;this.imageUrls.indexOf("",0)>-1;){const t=this.imageUrls.indexOf("",0);t>-1&&this.imageUrls.splice(t,1)}this.data.imageUrl=this.imageUrls[0],this.data.images=this.imageUrls}save(){this.saveImageAndVideo(),""!=this.data.projectName&&""!=this.data.briefDescription&&""!=this.data.description&&null!=this.data.cti_ID&&""!=this.data.startDate&&""!=this.data.endDate&&""!=this.data.targetMoney&&null!=this.data.prt_ID&&null!=this.data.stp_ID?this.data.description.length<300?this.notificationService.warn("H\xe3y \u0111i\u1ec1n n\u1ed9i dung d\u1ef1 \xe1n t\u1ed1i thi\u1ec3u 100 t\u1eeb"):null!=this.data.imageUrl?this.dialogRef.close(this.data):this.notificationService.warn("H\xe3y t\u1ea3i l\xean \xedt nh\u1ea5t 1 h\xecnh \u1ea3nh cho tin t\u1ee9c"):this.notificationService.warn("H\xe3y \u0111i\u1ec1n v\xe0 ch\u1ecdn \u0111\u1ea7y \u0111\u1ee7 th\xf4ng tin")}}return t.\u0275fac=function(e){return new(e||t)(l.Pb(r.a),l.Pb(y.a),l.Pb(P.a),l.Pb(b.g),l.Pb(M.a),l.Pb(b.a))},t.\u0275cmp=l.Jb({type:t,selectors:[["app-dialog-project"]],decls:60,vars:39,consts:[["mat-icon-button","","mat-dialog-close","",1,"close-button"],["color","warn",1,"close-icon"],["mat-dialog-tile",""],["appearance","outline"],["name","project_name","matInput","","required","","cdkFocusInitial","",3,"ngModel","ngModelChange"],["name","brief_description","matInput","","required","",3,"ngModel","ngModelChange"],["matInput","","name","description","required","",3,"ngModel","ngModelChange"],["id","city_id","name","city_id","required","",1,"form-control",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["matInput","","name","startDate","required","",3,"matDatepicker","ngModel","ngModelChange"],["matSuffix","",3,"for"],["pickerStartDate",""],["matInput","","name","endDate","required","",3,"matDatepicker","ngModel","ngModelChange"],["pickerEndDate",""],["name","target_money","matInput","","required","",3,"ngModel","ngModelChange"],["name","canDisburseWhenOverdue",3,"ngModel","click","ngModelChange"],["id","project_type_id","name","project_type_id","required","",1,"form-control",3,"ngModel","ngModelChange"],["disabled","","matInput","","name","content",3,"ngModel","ngModelChange"],["cols","3"],[4,"ngFor","ngForOf"],["class","video-container","videoDragDrop","",3,"click","files",4,"ngIf"],["class","video-container-loading",4,"ngIf"],["align","end"],["mat-button","",1,"btn","btn-success",3,"click"],[3,"value"],["class","image-container","imageDragDrop","",3,"click","files",4,"ngIf"],["class","image-container-loading",4,"ngIf"],["class","image-container",4,"ngIf"],["imageDragDrop","",1,"image-container",3,"click","files"],["hidden","","type","file","multiple","false","accept",".jpg,.jpeg,.png",3,"change"],["imageInput",""],[1,"image-container-loading"],[1,"image-container"],["alt","",3,"src",4,"ngIf"],["type","button","class","button btn btn-danger btn-sm",3,"click",4,"ngIf"],["alt","",3,"src"],["type","button",1,"button","btn","btn-danger","btn-sm",3,"click"],[1,"fa","fa-remove"],["videoDragDrop","",1,"video-container",3,"click","files"],["hidden","","type","file","multiple","false","accept",".mp4",3,"change"],["fileInput",""],[1,"video-container-loading"],["controls","",3,"src",4,"ngIf"],["type","button","class","delete-video-button btn btn-danger btn-sm",3,"click",4,"ngIf"],["controls","",3,"src"],["src","videoUrl","type","video/mp4"],["type","button",1,"delete-video-button","btn","btn-danger","btn-sm",3,"click"]],template:function(t,e){if(1&t&&(l.Vb(0,"button",0),l.Vb(1,"mat-icon",1),l.Dc(2,"close"),l.Ub(),l.Ub(),l.Vb(3,"h3",2),l.Dc(4,"Th\xeam D\u1ef1 \xe1n t\u1eeb thi\u1ec7n"),l.Ub(),l.Vb(5,"mat-dialog-content"),l.Vb(6,"mat-form-field",3),l.Vb(7,"mat-label"),l.Dc(8,"T\xean D\u1ef1 \xe1n"),l.Ub(),l.Vb(9,"input",4),l.cc("ngModelChange",function(t){return e.data.projectName=t}),l.Ub(),l.Ub(),l.Vb(10,"mat-form-field",3),l.Vb(11,"mat-label"),l.Dc(12,"M\xf4 t\u1ea3 v\u1eafn t\u1eaft"),l.Ub(),l.Vb(13,"input",5),l.cc("ngModelChange",function(t){return e.data.briefDescription=t}),l.Ub(),l.Ub(),l.Vb(14,"mat-form-field",3),l.Vb(15,"mat-label"),l.Dc(16,"N\u1ed9i dung"),l.Ub(),l.Vb(17,"textarea",6),l.cc("ngModelChange",function(t){return e.data.description=t}),l.Ub(),l.Ub(),l.Vb(18,"mat-form-field"),l.Vb(19,"mat-label"),l.Dc(20,"T\u1ec9nh th\xe0nh"),l.Ub(),l.Vb(21,"mat-select",7),l.cc("ngModelChange",function(t){return e.data.cti_ID=t}),l.Bc(22,w,3,2,"mat-option",8),l.Ub(),l.Ub(),l.Vb(23,"mat-form-field",3),l.Vb(24,"mat-label"),l.Dc(25,"Ng\xe0y b\u1eaft \u0111\u1ea7u"),l.Ub(),l.Vb(26,"input",9),l.cc("ngModelChange",function(t){return e.data.startDate=t}),l.Ub(),l.Qb(27,"mat-datepicker-toggle",10),l.Qb(28,"mat-datepicker",null,11),l.Ub(),l.Vb(30,"mat-form-field",3),l.Vb(31,"mat-label"),l.Dc(32,"Ng\xe0y k\u1ebft th\xfac"),l.Ub(),l.Vb(33,"input",12),l.cc("ngModelChange",function(t){return e.data.endDate=t}),l.Ub(),l.Qb(34,"mat-datepicker-toggle",10),l.Qb(35,"mat-datepicker",null,13),l.Ub(),l.Vb(37,"mat-form-field",3),l.Vb(38,"mat-label"),l.Dc(39,"M\u1ee5c ti\xeau quy\xean g\xf3p"),l.Ub(),l.Vb(40,"input",14),l.cc("ngModelChange",function(t){return e.data.targetMoney=t}),l.Ub(),l.Ub(),l.Vb(41,"mat-checkbox",15),l.cc("click",function(){return e.changeState()})("ngModelChange",function(t){return e.data.canDisburseWhenOverdue=t}),l.Dc(42,"Cho ph\xe9p gi\u1ea3i ng\xe2n khi h\u1ebft h\u1ea1n"),l.Ub(),l.Vb(43,"mat-form-field"),l.Vb(44,"mat-label"),l.Dc(45,"G\xf3i t\u1eeb thi\u1ec7n"),l.Ub(),l.Vb(46,"mat-select",16),l.cc("ngModelChange",function(t){return e.data.prt_ID=t}),l.Bc(47,S,3,2,"mat-option",8),l.Ub(),l.Ub(),l.Vb(48,"mat-form-field",3),l.Vb(49,"mat-label"),l.Dc(50,"Ng\u01b0\u1eddi th\u1ee5 h\u01b0\u1edfng"),l.Ub(),l.Vb(51,"input",17),l.cc("ngModelChange",function(t){return e.data.supportedPeople.fullName=t}),l.Ub(),l.Ub(),l.Vb(52,"mat-grid-list",18),l.Bc(53,R,5,4,"mat-grid-tile",19),l.Ub(),l.Bc(54,F,3,0,"div",20),l.Bc(55,Q,1,0,"div",21),l.Bc(56,q,3,2,"div",21),l.Ub(),l.Vb(57,"mat-dialog-actions",22),l.Vb(58,"button",23),l.cc("click",function(){return e.save()}),l.Dc(59,"L\u01b0u"),l.Ub(),l.Ub()),2&t){const t=l.sc(29),n=l.sc(36);l.Db(6),l.yc("width",100,"%"),l.Db(3),l.lc("ngModel",e.data.projectName),l.Db(1),l.yc("width",100,"%"),l.Db(3),l.lc("ngModel",e.data.briefDescription),l.Db(1),l.yc("width",100,"%"),l.Db(3),l.lc("ngModel",e.data.description),l.Db(1),l.yc("width",24,"%"),l.Db(3),l.lc("ngModel",e.data.cti_ID),l.Db(1),l.lc("ngForOf",e.Cities),l.Db(1),l.yc("width",24,"%"),l.Db(3),l.lc("matDatepicker",t)("ngModel",e.data.startDate),l.Db(1),l.lc("for",t),l.Db(3),l.yc("width",24,"%"),l.Db(3),l.lc("matDatepicker",n)("ngModel",e.data.endDate),l.Db(1),l.lc("for",n),l.Db(3),l.yc("width",24,"%"),l.Db(3),l.lc("ngModel",e.data.targetMoney),l.Db(1),l.lc("ngModel",e.data.canDisburseWhenOverdue),l.Db(2),l.yc("width",30,"%"),l.Db(3),l.lc("ngModel",e.data.prt_ID),l.Db(1),l.lc("ngForOf",e.filterProjectType()),l.Db(1),l.yc("width",30,"%"),l.Db(3),l.lc("ngModel",e.data.supportedPeople.fullName),l.Db(2),l.lc("ngForOf",l.nc(38,E)),l.Db(1),l.lc("ngIf",!e.videoUrl&&!e.isUploadingVideo),l.Db(1),l.lc("ngIf",e.isUploadingVideo),l.Db(1),l.lc("ngIf",e.videoUrl)}},directives:[u.a,b.d,p.a,b.e,h.b,h.e,f.b,m.c,m.m,m.i,m.k,k.a,i.j,C.b,C.d,h.f,C.a,j.a,I.a,i.k,b.c,_.m,I.c,x,O],styles:[".image-container-loading[_ngcontent-%COMP%]{background-image:url(loading.8ce64eeb4935117736d4.gif)}.image-container[_ngcontent-%COMP%], .image-container-loading[_ngcontent-%COMP%]{position:relative;background-repeat:no-repeat;background-size:70px;background-position:50%;width:300px;height:180px;margin:5px}.image-container[_ngcontent-%COMP%]{background-image:url(upload.5ca7ecf41ef411651ece.png);border:1px dashed #1c8adb;border-radius:2px}.image-container[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#9ecbec!important;opacity:.8}img[_ngcontent-%COMP%]{width:300px;height:182px;left:-2px;border-radius:2px}.button[_ngcontent-%COMP%], img[_ngcontent-%COMP%]{position:absolute;top:-2px}.button[_ngcontent-%COMP%]{right:-5px}.video-container-loading[_ngcontent-%COMP%]{background-image:url(loading.8ce64eeb4935117736d4.gif);border-radius:6px}.video-container[_ngcontent-%COMP%], .video-container-loading[_ngcontent-%COMP%]{position:relative;background-repeat:no-repeat;background-size:300px;background-position:50%;width:100%;height:400px;margin:10px auto}.video-container[_ngcontent-%COMP%]{background-image:url(upload-video.08ba7a62c53b6c43597a.png);border:2px dashed #1c8adb;border-radius:6px}.video-container[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#9ecbec!important;opacity:.8}video[_ngcontent-%COMP%]{position:absolute;border-radius:3px;width:100%;height:auto}.delete-video-button[_ngcontent-%COMP%]{position:absolute;right:0}.close-button[_ngcontent-%COMP%]{float:right;top:-24px;right:-24px}.back-button[_ngcontent-%COMP%]{float:left;top:-24px;left:-24px}"]}),t})();var H=n("978R"),K=n("6No5");function Y(t,e){if(1&t){const t=l.Wb();l.Vb(0,"tbody"),l.Vb(1,"td"),l.Dc(2),l.Ub(),l.Vb(3,"td"),l.Dc(4),l.Ub(),l.Vb(5,"td"),l.Dc(6),l.Ub(),l.Vb(7,"td"),l.Dc(8),l.Ub(),l.Vb(9,"td"),l.Dc(10),l.Ub(),l.Vb(11,"td"),l.Dc(12),l.Ub(),l.Vb(13,"td"),l.Dc(14),l.Ub(),l.Vb(15,"td",11),l.Vb(16,"button",17),l.cc("click",function(){l.uc(t);const n=e.$implicit;return l.gc().openAddProjectDialog(n)}),l.Qb(17,"i",8),l.Ub(),l.Vb(18,"button",18),l.cc("click",function(){l.uc(t);const n=e.$implicit;return l.gc().openEditDialog(n)}),l.Qb(19,"i",19),l.Ub(),l.Vb(20,"button",20),l.cc("click",function(){l.uc(t);const n=e.$implicit;return l.gc().deleteSupportedPeople(n.stp_ID)}),l.Qb(21,"i",21),l.Ub(),l.Ub(),l.Ub()}if(2&t){const t=e.$implicit,n=e.index;l.Db(2),l.Ec(n+1),l.Db(2),l.Ec(t.fullName),l.Db(2),l.Ec(t.address),l.Db(2),l.Ec(t.phoneNumber),l.Db(2),l.Ec(t.bankName),l.Db(2),l.Ec(t.bankAccount),l.Db(2),l.Ec(t.collaborator.fullName)}}function Z(t,e){if(1&t&&(l.Vb(0,"mat-option",22),l.Dc(1),l.Ub()),2&t){const t=e.$implicit;l.lc("value",t.id),l.Db(1),l.Ec(t.value)}}const G=[{path:"",component:(()=>{class t{constructor(t,e,n,i){this.SupportedPeopleService=t,this.ProjectService=e,this.notificationService=n,this.dialog=i,this.maxSize=5,this.currentPage=1,this.options=[{id:1,value:5},{id:2,value:10},{id:3,value:25},{id:4,value:100}],this.selected1=this.options[0].id,this.saveSupportedPeople=t=>Object(a.b)(this,void 0,void 0,function*(){try{const e=yield(yield this.SupportedPeopleService.saveSupportedPeople(t,0)).data;e&&(this.notificationService.success(e.message),this.getList(this.currentPage,this.itemsPerPage))}catch(e){console.log(e)}}),this.deleteSupportedPeople=t=>Object(a.b)(this,void 0,void 0,function*(){try{if(confirm("B\u1ea1n c\xf3 th\u1ef1c s\u1ef1 mu\u1ed1n xo\xe1 Ng\u01b0\u1eddi th\u1ee5 h\u01b0\u1edfng n\xe0y?")){const e=yield(yield this.SupportedPeopleService.deleteSupportedPeople(t)).data;e&&(this.notificationService.warn(e.message),this.getList(this.currentPage,this.itemsPerPage))}}catch(e){console.log(e)}}),this.ceateProject=t=>Object(a.b)(this,void 0,void 0,function*(){try{(yield this.ProjectService.createProject(t,0))&&this.notificationService.success("Th\xeam d\u1ef1 \xe1n t\u1eeb thi\u1ec7n th\xe0nh c\xf4ng")}catch(e){this.notificationService.warn("Th\xeam d\u1ef1 \xe1n t\u1eeb thi\u1ec7n th\u1ea5t b\u1ea1i")}})}pageChanged(t){this.currentPage=t.page,this.getList(this.currentPage,this.itemsPerPage)}rowsChanged(t){this.itemsPerPage=this.options[t.value-1].value,this.getList(this.currentPage,this.itemsPerPage)}ngOnInit(){this.itemsPerPage=5,this.getTotalSupportedPeoples(),this.getList(1,this.itemsPerPage)}getTotalSupportedPeoples(){return Object(a.b)(this,void 0,void 0,function*(){this.totalItems=yield(yield this.SupportedPeopleService.countTotal()).data})}getList(t,e){return Object(a.b)(this,void 0,void 0,function*(){this.SupportedPeoples=yield(yield this.SupportedPeopleService.getSupportedPeoples(t,e)).data})}openDialog(){this.dialog.open(U,{width:"400px",data:this.SupportedPeople}).afterClosed().subscribe(t=>{t&&this.saveSupportedPeople(t)})}openEditDialog(t){this.SupportedPeople={stp_ID:t.stp_ID,fullName:t.fullName,address:t.address,phoneNumber:t.phoneNumber,bankName:t.bankName,bankAccount:t.bankAccount},this.openDialog()}clearData(){this.SupportedPeople=new c,this.SupportedPeople.stp_ID=null}openProjectDialog(){this.dialog.open(J,{width:"900px",data:this.Project}).afterClosed().subscribe(t=>{t&&this.ceateProject(t)})}openAddProjectDialog(t){this.Project={prj_ID:null,projectName:"",briefDescription:"",description:"",imageUrl:"",videoUrl:"",startDate:"",endDate:"",curMoney:"",targetMoney:"",canDisburseWhenOverdue:!0,prt_ID:null,projectType:null,cti_ID:null,city:null,stp_ID:t.stp_ID,supportedPeople:t,images:[]},this.openProjectDialog()}}return t.\u0275fac=function(e){return new(e||t)(l.Pb(s.a),l.Pb(g),l.Pb(r.a),l.Pb(b.b))},t.\u0275cmp=l.Jb({type:t,selectors:[["app-supported-people"]],decls:42,vars:11,consts:[[1,"col-lg"],[1,"card"],[1,"card-header"],[1,"row"],[1,"col"],[1,"card-title"],[1,"col-auto"],["type","button","tooltip","Th\xeam Ng\u01b0\u1eddi th\u1ee5 h\u01b0\u1edfng",1,"btn","btn-info",3,"click"],[1,"fa","fa-plus"],[1,"card-body"],[1,"table","table-light"],[2,"width","120px","text-align","right"],[4,"ngFor","ngForOf"],["previousText","\u2039","nextText","\u203a","firstText","\xab","lastText","\xbb",1,"pagination-sm",3,"totalItems","ngModel","maxSize","boundaryLinks","rotate","itemsPerPage","ngModelChange","pageChanged"],["align","right"],[3,"ngModel","selectionChange","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["type","button","tooltip","Th\xeam d\u1ef1 \xe1n",1,"btn","btn-facebook","btn-sm",3,"click"],["type","button","tooltip","C\u1eadp nh\u1eadt ng\u01b0\u1eddi th\u1ee5 h\u01b0\u1edfng",1,"btn","btn-info","btn-sm",3,"click"],[1,"fa","fa-pencil"],["type","button","tooltip","Xo\xe1 ng\u01b0\u1eddi th\u1ee5 h\u01b0\u1edfng",1,"btn","btn-danger","btn-sm",3,"click"],[1,"fa","fa-trash-o"],[3,"value"]],template:function(t,e){1&t&&(l.Vb(0,"div",0),l.Vb(1,"div",1),l.Vb(2,"div",2),l.Vb(3,"div",3),l.Vb(4,"div",4),l.Vb(5,"h3",5),l.Dc(6," Ng\u01b0\u1eddi th\u1ee5 h\u01b0\u1edfng "),l.Ub(),l.Ub(),l.Vb(7,"div",6),l.Vb(8,"button",7),l.cc("click",function(){return e.clearData(),e.openDialog()}),l.Qb(9,"i",8),l.Vb(10,"a"),l.Dc(11,"Th\xeam"),l.Ub(),l.Ub(),l.Ub(),l.Ub(),l.Ub(),l.Vb(12,"div",9),l.Vb(13,"table",10),l.Vb(14,"thead"),l.Vb(15,"tr"),l.Vb(16,"th"),l.Dc(17,"#"),l.Ub(),l.Vb(18,"th"),l.Dc(19,"T\xean ng\u01b0\u1eddi th\u1ee5 h\u01b0\u1edfng"),l.Ub(),l.Vb(20,"th"),l.Dc(21,"\u0110\u1ecba ch\u1ec9"),l.Ub(),l.Vb(22,"th"),l.Dc(23,"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"),l.Ub(),l.Vb(24,"th"),l.Dc(25,"T\xean ng\xe2n h\xe0ng"),l.Ub(),l.Vb(26,"th"),l.Dc(27,"S\u1ed1 t\xe0i kho\u1ea3n"),l.Ub(),l.Vb(28,"th"),l.Dc(29,"Ng\u01b0\u1eddi t\u1ea1o"),l.Ub(),l.Vb(30,"th",11),l.Dc(31,"T\xe1c v\u1ee5"),l.Ub(),l.Ub(),l.Ub(),l.Bc(32,Y,22,7,"tbody",12),l.Qb(33,"tbody"),l.Ub(),l.Vb(34,"div",3),l.Vb(35,"div",4),l.Vb(36,"pagination",13),l.cc("ngModelChange",function(t){return e.currentPage=t})("pageChanged",function(t){return e.pageChanged(t)}),l.Ub(),l.Ub(),l.Vb(37,"mat-form-field",14),l.Vb(38,"mat-label"),l.Dc(39,"S\u1ed1 h\xe0ng hi\u1ec3n th\u1ecb"),l.Ub(),l.Vb(40,"mat-select",15),l.cc("selectionChange",function(t){return e.rowsChanged(t)})("ngModelChange",function(t){return e.selected1=t}),l.Bc(41,Z,2,2,"mat-option",16),l.Ub(),l.Ub(),l.Ub(),l.Ub(),l.Ub(),l.Ub()),2&t&&(l.Db(32),l.lc("ngForOf",e.SupportedPeoples),l.Db(4),l.lc("totalItems",e.totalItems)("ngModel",e.currentPage)("maxSize",e.maxSize)("boundaryLinks",!0)("rotate",!1)("itemsPerPage",e.itemsPerPage),l.Db(1),l.yc("width",80,"px"),l.Db(3),l.lc("ngModel",e.selected1),l.Db(1),l.lc("ngForOf",e.options))},directives:[H.a,i.j,K.a,m.i,m.k,h.b,h.e,k.a,_.m],encapsulation:2}),t})(),data:{title:"Ng\u01b0\u1eddi th\u1ee5 h\u01b0\u1edfng"}}];let X=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.Nb({type:t}),t.\u0275inj=l.Mb({imports:[[o.g.forChild(G)],o.g]}),t})();var tt=n("j5wd"),et=n("spgP"),nt=n("AytR");let it=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.Nb({type:t}),t.\u0275inj=l.Mb({imports:[[i.c,X,K.b.forRoot(),m.e,i.c,tt.a,M.b,et.a.initializeApp(nt.a.firebaseConfig,"cloud"),H.b.forRoot()]]}),t})()}}]);