/* empty css              */import{S as b,a as g,T as S,m as W,b as x,M as E,d as M,D as v,P as z,W as d,O as l}from"./moon-displacement-4InHcW82.js";const o=new b,C=new g(3,64,64),m=new S,y=m.load(W),s=m.load(x),D=new E({color:16777215,map:y,displacementMap:s,displacementScale:.1,bumpMap:s,bumpScale:3}),u=new M(C,D);o.add(u);let e,t=window.innerHeight/2;document.documentElement.clientWidth<800?(e=document.documentElement.clientWidth/1.5,t=window.innerHeight/2.5):e=document.documentElement.clientWidth/3;const w=new v(16777215,2);w.position.set(100,10,5);o.add(w);const n=new z(20,e/t);n.position.z=20;o.add(n);const p=document.querySelector("#webgl1"),a=new d({canvas:p,antialias:!0});a.setSize(e,t);a.setClearColor(986638,0);a.render(o,n);const f=document.querySelector("#webgl2"),i=new d({canvas:f,antialias:!0});i.setSize(e,t);i.setClearColor(986638,0);i.render(o,n);const c=new l(n,p);c.enableDamping=!0;c.enablePen=!1;c.enableZoom=!1;const r=new l(n,f);r.enableDamping=!0;r.enablePen=!1;r.enableZoom=!1;window.addEventListener("resize",()=>{document.documentElement.clientWidth<800?(e=document.documentElement.clientWidth,t=window.innerHeight/2,n.fov=22,document.documentElement.clientWidth>640&&(e=document.documentElement.clientWidth/2.5,t=window.innerHeight/2.5)):e=document.documentElement.clientWidth/3,t=window.innerHeight/2,n.aspect=e/t,n.updateProjectionMatrix(),a.setSize(e,t),i.setSize(e,t)});const h=()=>{u.rotation.y+=.003,a.render(o,n),i.render(o,n),c.update(),r.update(),window.requestAnimationFrame(h)};h();
