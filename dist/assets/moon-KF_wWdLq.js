import"./modulepreload-polyfill-9p4a8sJU.js";/* empty css                  */import{S as Z,a as ae,T as re,m as se,b as ie,M as de,c as k,d as v,P as r,D as ce,A as le,W as g,O as y}from"./moon-displacement-4InHcW82.js";const me=""+new URL("moon-elevation-X1O3UUXY.jpg",import.meta.url).href,pe=""+new URL("moon-gravity-A7FLNW3E.jpg",import.meta.url).href,ue=""+new URL("moon-hidrogen-GNwByUkj.jpg",import.meta.url).href,he=""+new URL("moon-roughness-3UignrhA.jpg",import.meta.url).href,ge=document.querySelectorAll(".elevation"),ye=document.querySelectorAll(".gravity"),fe=document.querySelectorAll(".hydrogen"),we=document.querySelectorAll(".roughness"),P=document.getElementById("elevationCard"),_=document.getElementById("gravityCard"),A=document.getElementById("hydrogenCard"),W=document.getElementById("roughnessCard"),l=new Z,n=new Z,b=new ae(3,64,64),f=new re,ve=f.load(se),G=f.load(ie),be=new de({color:16777215,map:ve,displacementMap:G,displacementScale:.1,bumpMap:G,bumpScale:3}),F=new k({map:f.load(me)}),O=new k({map:f.load(pe)}),$=new k({map:f.load(ue)}),N=new k({map:f.load(he)}),X=new v(b,be);l.add(X);const m=new v(b,F),p=new v(b,O),u=new v(b,$),h=new v(b,N);let e,t=window.innerHeight/2;if(document.documentElement.clientWidth<800){if(document.documentElement.clientWidth>640){const o=new r(22,e/t);o.position.z=20,n.add(o);const z=new r(22,e/t);z.position.z=20,n.add(z);const j=new r(22,e/t);j.position.z=20,n.add(j),new r(22,e/t)}e=document.documentElement.clientWidth/1.5,t=window.innerHeight/2.5}else e=document.documentElement.clientWidth/3;const w=new ce(16777215,2);w.position.set(100,10,5);l.add(w);const D=new le(16751124),a=new r(20,e/t);a.position.z=20;l.add(a);const s=new r(20,e/t);s.position.z=20;n.add(s);const i=new r(20,e/t);i.position.z=20;n.add(i);const d=new r(20,e/t);d.position.z=20;n.add(d);const c=new r(20,e/t);c.position.z=20;n.add(c);const V=document.querySelector("#webgl1"),M=new g({canvas:V,antialias:!0});M.setSize(e,t);M.setClearColor(986638,0);M.render(l,a);const Y=document.querySelector("#webgl2"),E=new g({canvas:Y,antialias:!0});E.setSize(e,t);E.setClearColor(986638,0);E.render(l,a);const J=document.querySelector("#webgl3"),L=new g({canvas:J,antialias:!0});L.setSize(e,t);L.setClearColor(986638,0);L.render(n,s);const K=document.querySelector("#webgl4"),S=new g({canvas:K,antialias:!0});S.setSize(e,t);S.setClearColor(986638,0);S.render(n,i);const Q=document.querySelector("#webgl5"),x=new g({canvas:Q,antialias:!0});x.setSize(e,t);x.setClearColor(986638,0);x.render(n,d);const ee=document.querySelector("#webgl6"),C=new g({canvas:ee,antialias:!0});C.setSize(e,t);C.setClearColor(986638,0);C.render(n,c);const q=new y(a,V);q.enableDamping=!0;q.enablePen=!1;q.enableZoom=!1;const T=new y(a,Y);T.enableDamping=!0;T.enablePen=!1;T.enableZoom=!1;const B=new y(s,J);B.enableDamping=!0;B.enablePen=!1;B.enableZoom=!1;const I=new y(i,K);I.enableDamping=!0;I.enablePen=!1;I.enableZoom=!1;const R=new y(d,Q);R.enableDamping=!0;R.enablePen=!1;R.enableZoom=!1;const U=new y(c,ee);U.enableDamping=!0;U.enablePen=!1;U.enableZoom=!1;window.addEventListener("resize",()=>{document.documentElement.clientWidth<800?(e=document.documentElement.clientWidth,t=window.innerHeight/2,a.fov=22,s.fov=22,i.fov=22,d.fov=22,c.fov=22,document.documentElement.clientWidth>640&&(e=document.documentElement.clientWidth/2.5,t=window.innerHeight/2.5)):e=document.documentElement.clientWidth/3,t=window.innerHeight/2,a.aspect=e/t,s.aspect=e/t,i.aspect=e/t,d.aspect=e/t,c.aspect=e/t,a.updateProjectionMatrix(),s.updateProjectionMatrix(),i.updateProjectionMatrix(),d.updateProjectionMatrix(),c.updateProjectionMatrix(),M.setSize(e,t),E.setSize(e,t),L.setSize(e,t),S.setSize(e,t),x.setSize(e,t),C.setSize(e,t)});const ne=()=>{X.rotation.y+=.003,M.render(l,a),E.render(l,a),q.update(),T.update(),window.requestAnimationFrame(ne)},te=()=>{m.rotation.y+=.003,p.rotation.y+=.003,u.rotation.y+=.003,h.rotation.y+=.003,L.render(n,s),B.update(),S.render(n,i),I.update(),x.render(n,d),R.update(),C.render(n,c),U.update(),window.requestAnimationFrame(te)};function oe(){n.add(m),n.remove(h,p,u),m.material=F,n.add(D),n.remove(w),W.style.display="none",_.style.display="none",A.style.display="none",P.style.display="flex"}we.forEach(o=>{o.addEventListener("click",()=>{n.add(h),n.remove(m,p,u),h.material=N,n.add(D),n.remove(w),P.style.display="none",_.style.display="none",A.style.display="none",W.style.display="flex"})});fe.forEach(o=>{o.addEventListener("click",()=>{n.add(u),n.remove(m,p,h),u.material=$,n.add(D),n.remove(w),P.style.display="none",_.style.display="none",W.style.display="none",A.style.display="flex"})});ye.forEach(o=>{o.addEventListener("click",()=>{n.add(p),n.remove(m,h,u),p.material=O,n.add(D),n.remove(w),P.style.display="none",W.style.display="none",A.style.display="none",_.style.display="flex"})});ge.forEach(o=>{o.addEventListener("click",()=>{oe()})});const Me=document.getElementById("elevationLearnMore"),Ee=document.getElementById("gravityLearnMore"),Le=document.getElementById("hydrogenLearnMore"),Se=document.getElementById("roughnessLearnMore");Me.addEventListener("click",()=>{H({name:"Digital​ ​Elevation​ ​Model",img:"https://moon.nasa.gov/system/internal_resources/details/original/108_Copernicus_800x600.jpg",figcaption:"​Copernicus crater viewed from orbit.",description:`This​ ​dataset​ ​shows​ ​the​ ​Moon's​ ​topography.​ ​The​ ​LOLA​ ​instrument​
    onboard​ ​LRO​ ​has​ ​measured​ ​the altitude​ ​of​ ​more​ ​than​ ​6​ ​billion​ ​points​ ​on​ ​the
    ​lunar​ ​surface,​ ​so​ ​that​ ​scientists​ ​now​ ​have​ ​better​ ​topography for​ ​the​ ​Moon
    ​than​ ​any​ ​other​ ​planetary​ ​body​ ​in​ ​the​ ​solar​ ​system!​ ​Red​ ​and​ ​white​ ​indicate
    ​high​ ​altitudes and​ ​blue​ ​and​ ​purple​ ​indicate​ ​low​ ​altitudes.`})});Ee.addEventListener("click",()=>{H({name:"Gravity​ ​Map",img:"https://moon.nasa.gov/system/internal_resources/details/original/106_711351main_Zuber-3-pia16587-43_800-600.jpg",figcaption:`​​This perspective, known as a Mercator projection, shows the
    far side of the moon in the center and the near side (as viewed from Earth) at either side.`,description:`Gravity​ ​field​ ​maps​ ​reveal​ ​features​ ​such​ ​as​ ​tectonic​ ​structures,
    ​ ​volcanic​ ​landforms,​ ​basin​ ​rings,​ ​and crater​ ​central​ ​peaks.​ ​The​ ​moon's​ ​gravity
    ​ ​field​ ​is​ ​unlike​ ​that​ ​of​ ​any​ ​terrestrial​ ​planet​ ​in​ ​our​ ​solar​ ​system.`})});Le.addEventListener("click",()=>{H({name:"Hydrogen​ ​Abundance",img:"https://moon.nasa.gov/system/internal_resources/details/original/110_Water_Ice_800x600.jpg",figcaption:`Areas of the moon's south pole with possibly high deposits of 
    frozen water are colored blue in this map.`,description:`Data​ ​confirmed​ ​hydrogen​ ​in​ ​the​ ​permanently​ ​shaded​ ​regions​ ​of
    ​ ​the​ ​lunar​ ​poles​ ​is​ ​in​ ​the​ ​form​ ​of water-ice.​ ​This​ ​water-ice​ ​may​ ​be​ ​trapped​ ​indefinitely.`})});Se.addEventListener("click",()=>{H({name:"Surface​ ​Roughness",img:"https://moon.nasa.gov/system/internal_resources/details/original/111_555516main_053111a_800x600.jpg",figcaption:"​​​Boulders clustered on the floor of Anaxagoras crater",description:`This​ ​dataset​ ​shows​ ​the​ ​moon's​ ​surface​ ​roughness.​ ​Rough​ ​surfaces
    ​ ​indicate​ ​the​ ​presence​ ​of​ ​large rocks,​ ​which​ ​may​ ​pose​ ​hazards​ ​for​ ​future​ ​lunar
    ​ ​landers.​ ​The​ ​roughest​ ​surfaces​ ​are​ ​red​ ​and​ ​white​ ​while the​ ​smoother​ ​areas​ ​are​ ​blue.`})});function H(o){const z=`
  <style>
      body {
          background: linear-gradient(0deg, rgba(5,26,70,1) 0%, rgba(43,2,85,1) 100%);
          background-repeat: no-repeat;
          color: #EDDCFF;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          text-align:center;
      }  
      img{
        width: 80vw;
        heiht: auto;
      } 
      p{
        width: 80vw;
      }
      .center{
          display: flex;
          justify-content: center;
      }
  </style>
  <figure>
    <img src="${o.img}" />
    <figcaption>
    <div class="center">
      <p><em>${o.figcaption}</em></p>
    </div>
    </figcaption>
  </figure>
  <h2>${o.name}</h2>
  <div class="center">
      <p>${o.description}</p>
  </div>
  `,j=window.open("","EventPopup","width=600,height=450");j.document.body.innerHTML=z}ne();te();oe();
