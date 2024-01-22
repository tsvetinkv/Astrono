import "./style.css";
import * as THREE from "https://cdn.skypack.dev/three@0.132.2";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js";

// Parameters
const parameters = {};
parameters.count = 100000;
parameters.size = 0.01;
parameters.radius = 5;
parameters.branches = 3;
parameters.spin = 1;
parameters.randomness = 0.2;
parameters.randomnessPower = 3;
parameters.insideColor = "#6102dd";
parameters.outsideColor = "#021fdd";

// Scene
const scene = new THREE.Scene();

// Galaxy
const generateGalaxy = () => {
  // Destroy old galaxy
  const oldGalaxy = scene.getObjectByName("galaxy");
  if (oldGalaxy) {
    scene.remove(oldGalaxy);
    oldGalaxy.geometry.dispose();
    oldGalaxy.material.dispose();
  }
  // Geometry
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(parameters.count * 3);

  const colors = new Float32Array(parameters.count * 5);
  const colorInside = new THREE.Color(parameters.insideColor);
  const colorOutside = new THREE.Color(parameters.outsideColor);

  for (let i = 0; i < parameters.count; i++) {
    const i3 = i * 3;
    const radius = Math.random() * parameters.radius;
    const spinAngle = radius * parameters.spin;
    const branchAngle =
      ((i % parameters.branches) / parameters.branches) * Math.PI * 2;

    const randomX =
      Math.pow(Math.random(), parameters.randomnessPower) *
      (Math.random() < 0.5 ? 1 : -1) *
      parameters.randomness *
      radius;
    const randomY =
      Math.pow(Math.random(), parameters.randomnessPower) *
      (Math.random() < 0.5 ? 1 : -1) *
      parameters.randomness *
      radius;
    const randomZ =
      Math.pow(Math.random(), parameters.randomnessPower) *
      (Math.random() < 0.5 ? 1 : -1) *
      parameters.randomness *
      radius;

    positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
    positions[i3 + 1] = randomY;
    positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

    const mixedColor = colorInside.clone();
    mixedColor.lerp(colorOutside, radius / parameters.radius);
    colors[i3] = mixedColor.r;
    colors[i3 + 1] = mixedColor.g;
    colors[i3 + 2] = mixedColor.b;
  }
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  // Material
  const material = new THREE.PointsMaterial({
    size: parameters.size,
    sizeAttenuation: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexColors: true,
  });

  // Points
  const points = new THREE.Points(geometry, material);
  points.name = "galaxy";
  scene.add(points);
};
generateGalaxy();

// Sizes
const sizes = { width: window.innerWidth / 2.5, height: window.innerHeight / 2.2 };
if (document.documentElement.clientWidth < 1008) {
  sizes.width = document.documentElement.clientWidth / 1.5;
  sizes.height = window.innerHeight / 2.5;
} 
// Camera: vertical field of view (fov), aspect ratio renderer
// PerspectiveCamera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);

camera.position.x = -5;
camera.position.y = 2;
camera.position.z = 3; // move backward
scene.add(camera);

const canvas = document.querySelector("#webgl");
// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth / 3;
  sizes.height = window.innerHeight / 2.5;

  if (document.documentElement.clientWidth < 1008) {
    sizes.width = document.documentElement.clientWidth/1.5;
    sizes.height = window.innerHeight / 2;
  }
  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // if better screen is used
});

const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const tick = () => {
  const rotationSpeed = 0.005; // Set the rotation speed here

  // Update galaxy rotation
  const positions =
    scene.getObjectByName("galaxy").geometry.attributes.position.array;

  for (let i = 0; i < parameters.count; i++) {
    const i3 = i * 3;
    const x = positions[i3];
    const z = positions[i3 + 2];

    const radius = Math.sqrt(x * x + z * z);
    const angle = Math.atan2(z, x);

    positions[i3] = Math.cos(angle + rotationSpeed) * radius;
    positions[i3 + 2] = Math.sin(angle + rotationSpeed) * radius;
  }

  scene.getObjectByName(
    "galaxy"
  ).geometry.attributes.position.needsUpdate = true;

  // OrbitControls
  controls.update();

  // Render
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick); // 60 ticks per second
};

tick();
