import * as THREE from "https://cdn.skypack.dev/three@0.132.2";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js";
let moonTexture = "./assets/moon-texture.jpg";
// import moonTexture from "./assets/moon-texture.jpg";
let moonElevation = "./assets/moon-elevation.jpg";
let moonGravity = "./assets/moon-gravity.jpg";
let moonHidrogen = "./assets/moon-hidrogen.jpg";
let moonRoughness = "./assets/moon-roughness.jpg";
let moonDisplacementMap = "./assets/moon-displacement.jpg";

const elevation = document.querySelectorAll(".elevation");
const gravity = document.querySelectorAll(".gravity");
const hydrogen = document.querySelectorAll(".hydrogen");
const roughness = document.querySelectorAll(".roughness");

const elevationCard = document.getElementById("elevationCard");
const gravityCard = document.getElementById("gravityCard");
const hydrogenCrad = document.getElementById("hydrogenCard");
const roughnessCrad = document.getElementById("roughnessCard");

const scene1 = new THREE.Scene();
const scene2 = new THREE.Scene();

const geometry = new THREE.SphereGeometry(3, 64, 64);
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load(moonTexture);
const displacementMap = textureLoader.load(moonDisplacementMap);

// add material
const material = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  map: texture,
  displacementMap: displacementMap,
  displacementScale: 0.1,
  bumpMap: displacementMap,
  bumpScale: 3,
});

const elevationMaterial = new THREE.MeshBasicMaterial({
  map: textureLoader.load(moonElevation),
});

const gravityMaterial = new THREE.MeshBasicMaterial({
  map: textureLoader.load(moonGravity),
});

const hydrogenMaterial = new THREE.MeshBasicMaterial({
  map: textureLoader.load(moonHidrogen),
});

const roughnessMaterial = new THREE.MeshBasicMaterial({
  map: textureLoader.load(moonRoughness),
});

const mesh = new THREE.Mesh(geometry, material);
scene1.add(mesh);
const mesh2 = new THREE.Mesh(geometry, elevationMaterial);
const mesh3 = new THREE.Mesh(geometry, gravityMaterial);
const mesh4 = new THREE.Mesh(geometry, hydrogenMaterial);
const mesh5 = new THREE.Mesh(geometry, roughnessMaterial);

// sizes
let w;
let h = window.innerHeight / 2;
if (document.documentElement.clientWidth < 800) {
  if (document.documentElement.clientWidth > 640) {
    const camera2 = new THREE.PerspectiveCamera(22, w / h);
    camera2.position.z = 20;
    scene2.add(camera2);

    const camera3 = new THREE.PerspectiveCamera(22, w / h);
    camera3.position.z = 20;
    scene2.add(camera3);

    const camera4 = new THREE.PerspectiveCamera(22, w / h);
    camera4.position.z = 20;
    scene2.add(camera4);

    const camera5 = new THREE.PerspectiveCamera(22, w / h);
  }
  w = document.documentElement.clientWidth / 1.5;
  h = window.innerHeight / 2.5;
} else {
  w = document.documentElement.clientWidth / 3;
}

// light
const light = new THREE.DirectionalLight(0xffffff, 2);
light.position.set(100, 10, 5);
scene1.add(light);

const ambientLight = new THREE.AmbientLight(0xff9a14);

// camera
const camera1 = new THREE.PerspectiveCamera(20, w / h);
camera1.position.z = 20;
scene1.add(camera1);

const camera2 = new THREE.PerspectiveCamera(20, w / h);
camera2.position.z = 20;
scene2.add(camera2);

const camera3 = new THREE.PerspectiveCamera(20, w / h);
camera3.position.z = 20;
scene2.add(camera3);

const camera4 = new THREE.PerspectiveCamera(20, w / h);
camera4.position.z = 20;
scene2.add(camera4);

const camera5 = new THREE.PerspectiveCamera(20, w / h);
camera5.position.z = 20;
scene2.add(camera5);
// renderer
const canvas1 = document.querySelector("#webgl1");
const renderer1 = new THREE.WebGLRenderer({
  canvas: canvas1,
  antialias: true,
});
renderer1.setSize(w, h);
renderer1.setClearColor(0x0f0e0e, 0);
renderer1.render(scene1, camera1);

const canvas2 = document.querySelector("#webgl2");
const renderer2 = new THREE.WebGLRenderer({
  canvas: canvas2,
  antialias: true,
});
renderer2.setSize(w, h);
renderer2.setClearColor(0x0f0e0e, 0);
renderer2.render(scene1, camera1);

const canvas3 = document.querySelector("#webgl3");
const renderer3 = new THREE.WebGLRenderer({
  canvas: canvas3,
  antialias: true,
});
renderer3.setSize(w, h);
renderer3.setClearColor(0x0f0e0e, 0);
renderer3.render(scene2, camera2);

const canvas4 = document.querySelector("#webgl4");
const renderer4 = new THREE.WebGLRenderer({
  canvas: canvas4,
  antialias: true,
});
renderer4.setSize(w, h);
renderer4.setClearColor(0x0f0e0e, 0);
renderer4.render(scene2, camera3);

const canvas5 = document.querySelector("#webgl5");
const renderer5 = new THREE.WebGLRenderer({
  canvas: canvas5,
  antialias: true,
});
renderer5.setSize(w, h);
renderer5.setClearColor(0x0f0e0e, 0);
renderer5.render(scene2, camera4);

const canvas6 = document.querySelector("#webgl6");
const renderer6 = new THREE.WebGLRenderer({
  canvas: canvas6,
  antialias: true,
});
renderer6.setSize(w, h);
renderer6.setClearColor(0x0f0e0e, 0);
renderer6.render(scene2, camera5);

// orbit controls
const controls1 = new OrbitControls(camera1, canvas1);
controls1.enableDamping = true;
controls1.enablePen = false;
controls1.enableZoom = false;

const controls2 = new OrbitControls(camera1, canvas2);
controls2.enableDamping = true;
controls2.enablePen = false;
controls2.enableZoom = false;

const controls3 = new OrbitControls(camera2, canvas3);
controls3.enableDamping = true;
controls3.enablePen = false;
controls3.enableZoom = false;

const controls4 = new OrbitControls(camera3, canvas4);
controls4.enableDamping = true;
controls4.enablePen = false;
controls4.enableZoom = false;

const controls5 = new OrbitControls(camera4, canvas5);
controls5.enableDamping = true;
controls5.enablePen = false;
controls5.enableZoom = false;

const controls6 = new OrbitControls(camera5, canvas6);
controls6.enableDamping = true;
controls6.enablePen = false;
controls6.enableZoom = false;

// window resize
window.addEventListener("resize", () => {
  if (document.documentElement.clientWidth < 800) {
    w = document.documentElement.clientWidth;
    h = window.innerHeight / 2;
    camera1.fov = 22;
    camera2.fov = 22;
    camera3.fov = 22;
    camera4.fov = 22;
    camera5.fov = 22;
    if (document.documentElement.clientWidth > 640) {
      w = document.documentElement.clientWidth / 2.5;
      h = window.innerHeight / 2.5;
    }
  } else {
    w = document.documentElement.clientWidth / 3;
  }
  h = window.innerHeight / 2;
  camera1.aspect = w / h;
  camera2.aspect = w / h;
  camera3.aspect = w / h;
  camera4.aspect = w / h;
  camera5.aspect = w / h;
  camera1.updateProjectionMatrix();
  camera2.updateProjectionMatrix();
  camera3.updateProjectionMatrix();
  camera4.updateProjectionMatrix();
  camera5.updateProjectionMatrix();
  renderer1.setSize(w, h);
  renderer2.setSize(w, h);
  renderer3.setSize(w, h);
  renderer4.setSize(w, h);
  renderer5.setSize(w, h);
  renderer6.setSize(w, h);
});

//animations
const loop1 = () => {
  mesh.rotation.y += 0.003;
  renderer1.render(scene1, camera1);
  renderer2.render(scene1, camera1);
  controls1.update();
  controls2.update();
  window.requestAnimationFrame(loop1);
};

const loop2 = () => {
  mesh2.rotation.y += 0.003;
  mesh3.rotation.y += 0.003;
  mesh4.rotation.y += 0.003;
  mesh5.rotation.y += 0.003;
  renderer3.render(scene2, camera2);
  controls3.update();
  renderer4.render(scene2, camera3);
  controls4.update();
  renderer5.render(scene2, camera4);
  controls5.update();
  renderer6.render(scene2, camera5);
  controls6.update();
  window.requestAnimationFrame(loop2);
};

function showElevation() {
  scene2.add(mesh2);
  scene2.remove(mesh5, mesh3, mesh4);
  mesh2.material = elevationMaterial;
  scene2.add(ambientLight);
  scene2.remove(light);
  roughnessCrad.style.display = "none";
  gravityCard.style.display = "none";
  hydrogenCrad.style.display = "none";
  elevationCard.style.display = "flex";
}
roughness.forEach((elem) => {
  elem.addEventListener("click", () => {
    scene2.add(mesh5);
    scene2.remove(mesh2, mesh3, mesh4);
    mesh5.material = roughnessMaterial;
    scene2.add(ambientLight);
    scene2.remove(light);
    elevationCard.style.display = "none";
    gravityCard.style.display = "none";
    hydrogenCrad.style.display = "none";
    roughnessCrad.style.display = "flex";
  });
});

hydrogen.forEach((elem) => {
  elem.addEventListener("click", () => {
    scene2.add(mesh4);
    scene2.remove(mesh2, mesh3, mesh5);
    mesh4.material = hydrogenMaterial;
    scene2.add(ambientLight);
    scene2.remove(light);
    elevationCard.style.display = "none";
    gravityCard.style.display = "none";
    roughnessCrad.style.display = "none";
    hydrogenCrad.style.display = "flex";
  });
});

gravity.forEach((elem) => {
  elem.addEventListener("click", () => {
    scene2.add(mesh3);
    scene2.remove(mesh2, mesh5, mesh4);
    mesh3.material = gravityMaterial;
    scene2.add(ambientLight);
    scene2.remove(light);
    elevationCard.style.display = "none";
    roughnessCrad.style.display = "none";
    hydrogenCrad.style.display = "none";
    gravityCard.style.display = "flex";
  });
});

elevation.forEach((elem) => {
  elem.addEventListener("click", () => {
    showElevation();
  });
});
const elevationLearnMore = document.getElementById("elevationLearnMore");
const gravityLearnMore = document.getElementById("gravityLearnMore");
const hydrogenLearnMore = document.getElementById("hydrogenLearnMore");
const roughnessLearnMore = document.getElementById("roughnessLearnMore");

elevationLearnMore.addEventListener("click", () => {
  const typeMoon = {
    name: "Digital​ ​Elevation​ ​Model",
    img: "https://moon.nasa.gov/system/internal_resources/details/original/108_Copernicus_800x600.jpg",
    figcaption: "​Copernicus crater viewed from orbit.",
    description: `This​ ​dataset​ ​shows​ ​the​ ​Moon's​ ​topography.​ ​The​ ​LOLA​ ​instrument​
    onboard​ ​LRO​ ​has​ ​measured​ ​the altitude​ ​of​ ​more​ ​than​ ​6​ ​billion​ ​points​ ​on​ ​the
    ​lunar​ ​surface,​ ​so​ ​that​ ​scientists​ ​now​ ​have​ ​better​ ​topography for​ ​the​ ​Moon
    ​than​ ​any​ ​other​ ​planetary​ ​body​ ​in​ ​the​ ​solar​ ​system!​ ​Red​ ​and​ ​white​ ​indicate
    ​high​ ​altitudes and​ ​blue​ ​and​ ​purple​ ​indicate​ ​low​ ​altitudes.`,
  };
  displayPopup(typeMoon);
});
gravityLearnMore.addEventListener("click", () => {
  const typeMoon = {
    name: "Gravity​ ​Map",
    img: "https://moon.nasa.gov/system/internal_resources/details/original/106_711351main_Zuber-3-pia16587-43_800-600.jpg",
    figcaption: `​​This perspective, known as a Mercator projection, shows the
    far side of the moon in the center and the near side (as viewed from Earth) at either side.`,
    description: `Gravity​ ​field​ ​maps​ ​reveal​ ​features​ ​such​ ​as​ ​tectonic​ ​structures,
    ​ ​volcanic​ ​landforms,​ ​basin​ ​rings,​ ​and crater​ ​central​ ​peaks.​ ​The​ ​moon's​ ​gravity
    ​ ​field​ ​is​ ​unlike​ ​that​ ​of​ ​any​ ​terrestrial​ ​planet​ ​in​ ​our​ ​solar​ ​system.`,
  };
  displayPopup(typeMoon);
});
hydrogenLearnMore.addEventListener("click", () => {
  const typeMoon = {
    name: "Hydrogen​ ​Abundance",
    img: "https://moon.nasa.gov/system/internal_resources/details/original/110_Water_Ice_800x600.jpg",
    figcaption: `Areas of the moon's south pole with possibly high deposits of 
    frozen water are colored blue in this map.`,
    description: `Data​ ​confirmed​ ​hydrogen​ ​in​ ​the​ ​permanently​ ​shaded​ ​regions​ ​of
    ​ ​the​ ​lunar​ ​poles​ ​is​ ​in​ ​the​ ​form​ ​of water-ice.​ ​This​ ​water-ice​ ​may​ ​be​ ​trapped​ ​indefinitely.`,
  };
  displayPopup(typeMoon);
});
roughnessLearnMore.addEventListener("click", () => {
  const typeMoon = {
    name: "Surface​ ​Roughness",
    img: "https://moon.nasa.gov/system/internal_resources/details/original/111_555516main_053111a_800x600.jpg",
    figcaption: "​​​Boulders clustered on the floor of Anaxagoras crater",
    description: `This​ ​dataset​ ​shows​ ​the​ ​moon's​ ​surface​ ​roughness.​ ​Rough​ ​surfaces
    ​ ​indicate​ ​the​ ​presence​ ​of​ ​large rocks,​ ​which​ ​may​ ​pose​ ​hazards​ ​for​ ​future​ ​lunar
    ​ ​landers.​ ​The​ ​roughest​ ​surfaces​ ​are​ ​red​ ​and​ ​white​ ​while the​ ​smoother​ ​areas​ ​are​ ​blue.`,
  };
  displayPopup(typeMoon);
});
function displayPopup(typeMoon) {
  const popupContent = `
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
    <img src="${typeMoon.img}" />
    <figcaption>
    <div class="center">
      <p><em>${typeMoon.figcaption}</em></p>
    </div>
    </figcaption>
  </figure>
  <h2>${typeMoon.name}</h2>
  <div class="center">
      <p>${typeMoon.description}</p>
  </div>
  `;

  // Open a new window with the content
  const popupWindow = window.open("", "EventPopup", "width=600,height=450");
  popupWindow.document.body.innerHTML = popupContent;
}

loop1();
loop2();
showElevation();
