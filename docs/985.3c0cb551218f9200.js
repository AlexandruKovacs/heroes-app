"use strict";(self.webpackChunkHeroesApp=self.webpackChunkHeroesApp||[]).push([[985],{5985:(y,i,a)=>{a.r(i),a.d(i,{AuthModule:()=>A});var p=a(6814),u=a(3403),t=a(5879);let g=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-layout-page"]],decls:3,vars:0,consts:[[1,"grid"],[1,"col-12","mt-5","md:col-6","md:col-offset-3","md:mt-8"]],template:function(o,l){1&o&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"router-outlet"),t.qZA()())},dependencies:[u.lC],encapsulation:2}),e})();var d=a(4567),c=a(2296),r=a(9157),s=a(617),m=a(2032);const f=[{path:"",component:g,children:[{path:"login",component:(()=>{class e{constructor(o,l){this.authService=o,this.router=l}onLogin(){this.authService.login("alex@gmail.com","123456").subscribe(o=>{o&&this.router.navigate(["/"])})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(d.e),t.Y36(u.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-login-page"]],decls:18,vars:0,consts:[["clasS","flex flex-column"],[1,"text-lg","mb-4"],["matInput","","placeholder","Nombre de usuario","type","text"],["matInput","","placeholder","Contrase\xf1a","type","password"],["mat-button","","mat-flat-button","","color","primary",3,"click"],[1,"flex","justify-content-end","mt-5"],["routerLink","/auth/new-account"]],template:function(o,l){1&o&&(t.TgZ(0,"div",0)(1,"span",1),t._uU(2,"Inicio de sesi\xf3n"),t.qZA(),t.TgZ(3,"mat-form-field")(4,"mat-label"),t._uU(5,"Usuario"),t.qZA(),t._UZ(6,"input",2),t.qZA(),t.TgZ(7,"mat-form-field")(8,"mat-label"),t._uU(9,"Contrase\xf1a"),t.qZA(),t._UZ(10,"input",3),t.qZA(),t.TgZ(11,"button",4),t.NdJ("click",function(){return l.onLogin()}),t._uU(12," Acceder "),t.TgZ(13,"mat-icon"),t._uU(14,"login"),t.qZA()(),t.TgZ(15,"div",5)(16,"a",6),t._uU(17,"\xbfNo tienes cuenta? Reg\xedstrate."),t.qZA()()())},dependencies:[u.rH,c.lW,r.KE,r.hX,s.Hw,m.Nt],encapsulation:2}),e})()},{path:"new-account",component:(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-register-page"]],decls:22,vars:0,consts:[["clasS","flex flex-column"],[1,"text-lg","mb-4"],["matInput","","placeholder","Nombre de usuario","type","text"],["matInput","","placeholder","Nombre","type","text"],["matInput","","placeholder","Contrase\xf1a","type","password"],["mat-button","","mat-flat-button","","color","primary"],[1,"flex","justify-content-end","mt-5"],["routerLink","/auth/login"]],template:function(o,l){1&o&&(t.TgZ(0,"div",0)(1,"span",1),t._uU(2,"Registro"),t.qZA(),t.TgZ(3,"mat-form-field")(4,"mat-label"),t._uU(5,"Usuario"),t.qZA(),t._UZ(6,"input",2),t.qZA(),t.TgZ(7,"mat-form-field")(8,"mat-label"),t._uU(9,"Nombre"),t.qZA(),t._UZ(10,"input",3),t.qZA(),t.TgZ(11,"mat-form-field")(12,"mat-label"),t._uU(13,"Contrase\xf1a"),t.qZA(),t._UZ(14,"input",4),t.qZA(),t.TgZ(15,"button",5),t._uU(16," Crear cuenta "),t.TgZ(17,"mat-icon"),t._uU(18,"person_add"),t.qZA()(),t.TgZ(19,"div",6)(20,"a",7),t._uU(21,"\xbfYa tienes una cuenta? Inicia sesi\xf3n."),t.qZA()()())},dependencies:[u.rH,c.lW,r.KE,r.hX,s.Hw,m.Nt],encapsulation:2}),e})()},{path:"**",redirectTo:"login"}]}];let Z=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.Bz.forChild(f),u.Bz]}),e})();var h=a(6889);let A=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[p.ez,Z,h.q]}),e})()}}]);