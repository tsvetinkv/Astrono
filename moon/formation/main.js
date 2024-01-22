import "/style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import moonTexture from "../assets/moon-texture.jpg";
import moonDisplacementMap from "../assets/moon-displacement.jpg";

const scene1 = new THREE.Scene();

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


const mesh = new THREE.Mesh(geometry, material);
scene1.add(mesh);

// sizes
let w;
let h = window.innerHeight / 2;
if (document.documentElement.clientWidth < 800) {
    w = document.documentElement.clientWidth / 1.5;
    h = window.innerHeight / 2.5;
} else {
    w = document.documentElement.clientWidth / 3;
}

// light
const light = new THREE.DirectionalLight(0xffffff, 2);
light.position.set(100, 10, 5);
scene1.add(light);

// camera
const camera1 = new THREE.PerspectiveCamera(20, w / h);
camera1.position.z = 20;
scene1.add(camera1);

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

// orbit controls
const controls1 = new OrbitControls(camera1, canvas1);
controls1.enableDamping = true;
controls1.enablePen = false;
controls1.enableZoom = false;

const controls2 = new OrbitControls(camera1, canvas2);
controls2.enableDamping = true;
controls2.enablePen = false;
controls2.enableZoom = false;


// window resize
window.addEventListener("resize", () => {
    if (document.documentElement.clientWidth < 800) {
        w = document.documentElement.clientWidth;
        h = window.innerHeight / 2;
        camera1.fov = 22;
        if (document.documentElement.clientWidth > 640) {
            w = document.documentElement.clientWidth / 2.5;
            h = window.innerHeight / 2.5;
        }
    } else {
        w = document.documentElement.clientWidth / 3;
    }
    h = window.innerHeight / 2;
    camera1.aspect = w / h;
    camera1.updateProjectionMatrix();
    renderer1.setSize(w, h);
    renderer2.setSize(w, h);
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

loop1();
