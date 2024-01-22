import "./style.css";
import * as THREE from "./node_modules/three";
import { OrbitControls } from "./node_modules/three/examples/jsm/controls/OrbitControls";

const scene = new THREE.Scene();

// Create the sphere
let sphereGeometry = new THREE.SphereGeometry(1.5, 10, 6);
let sphereMaterial = new THREE.MeshPhongMaterial({ color: 0xffe7e0 });
let sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

// Create the particle system
const particleCount = 3000;
let sphereRadius = 1;
const particleGeometry = new THREE.BufferGeometry();
const particlePositions = new Float32Array(particleCount * 3);
const particleColors = new Float32Array(particleCount * 3);

for (let i = 0; i < particleCount; i++) {
    // Generate random values within the sphere-shaped area
    const r = sphereRadius * Math.sqrt(Math.random());
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);

    // Convert from spherical to Cartesian coordinates
    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.sin(phi) * Math.sin(theta);
    const z = r * Math.cos(phi);

    // Set the positions and colors for each particle
    particlePositions[i * 3] = x;
    particlePositions[i * 3 + 1] = y;
    particlePositions[i * 3 + 2] = z;
    particleColors[i * 3] = 1.0;
    particleColors[i * 3 + 1] = 0.5;
    particleColors[i * 3 + 2] = 0.2;
}

// Add the position and color attributes to the geometry
particleGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(particlePositions, 3)
);
particleGeometry.setAttribute(
    "color",
    new THREE.BufferAttribute(particleColors, 5)
);

// Create the particle material and system
const particleMaterial = new THREE.PointsMaterial({
    size: 0.30,
    color: new THREE.Color(0xffe7e0),
});
const particleSystem = new THREE.Points(particleGeometry, particleMaterial);

// Create a group to hold the particle system and sphere
let cometGroup = new THREE.Group();
cometGroup.add(particleSystem);
cometGroup.add(sphere);
scene.add(cometGroup);

const sizes = {
    width: window.innerWidth / 3,
    height: window.innerHeight / 2.5,
};
if (document.documentElement.clientWidth < 1008) {
    sizes.width = document.documentElement.clientWidth / 1.5;
    sizes.height = window.innerHeight / 2.5;
}

// Set up the camera
const camera = new THREE.PerspectiveCamera(
    50,
    sizes.width / sizes.height,
    0.5,
    1000
);
camera.position.x = 35;
camera.position.z = 20;
camera.position.y = 5;
scene.add(camera);

const canvas = document.querySelector("#webgl2");
//controls
const controls = new OrbitControls(camera, canvas);
controls.dampingFactor = 0.1; // Reduce camera damping for smoother movement
controls.autoRotate = true; // Make the camera rotate sinuously around the spheres

window.addEventListener("resize", onWindowResize);

function onWindowResize() {
    // Update camera aspect ratio and renderer size on window resize
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width, sizes.height);
}

let renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(sizes.width, sizes.height);
renderer.toneMapping = THREE.ReinhardToneMapping;
renderer.setClearColor(0x120B35);

camera.aspect = sizes.width / sizes.height;
camera.updateProjectionMatrix();
scene.scale.normalize().multiplyScalar(1);

// Create the ambient light
const ambientLight = new THREE.AmbientLight(0xffe7e0, 10); // Parameters: color, intensity
scene.add(ambientLight);

// Create the spotlight with shadows
const spotLight = new THREE.SpotLight(0xffffff);
spotLight.position.set(10, 20, 30);
spotLight.castShadow = true;
scene.add(spotLight);

const animate = function () {
    requestAnimationFrame(animate);

    for (let i = 0; i < particleCount; i++) {
        // Move the particles down the -z axis
        particlePositions[i * 3 + 2] -= 0.7;

        // Randomly move some particles out a greater distance from the center
        if (Math.random() < 0.06) {
            particlePositions[i * 5] += (Math.random() * 2 - 1) * sphereRadius * 1;
            particlePositions[i * 3 + 1] +=
                (Math.random() * 3 - 1) * sphereRadius * 1;
        }

        if (particlePositions[i * 3 + 2] < 55) {
            // Randomly reset some of the particles back to the sphere area
            if (Math.random() < 0.02) {
                particlePositions[i * 3] =
                    (Math.random() * 1.5 - 0.75) * sphereRadius * 1.5;
                particlePositions[i * 3 + 1] =
                    (Math.random() * 1.5 - 0.75) * sphereRadius * 1.5;
                particlePositions[i * 3 + 2] =
                    (Math.random() * 1.5 - 0.75) * sphereRadius * 1.5;
            }
        }

        // Check if the particles should move randomly or not
        if (Math.random() < 0.09) {
            // Move the particles randomly within the larger sphere area
            particlePositions[i * 3] += (Math.random() * 2 - 1) * sphereRadius * 2;
            particlePositions[i * 3 + 1] +=
                (Math.random() * 2 - 1) * sphereRadius * 2;
            particlePositions[i * 3 + 2] +=
                (Math.random() * 2 - 1) * sphereRadius * 2;
        }

        // Update particle colors based on position
        if (
            Math.sqrt(
                particlePositions[i * 3] * particlePositions[i * 3] +
                particlePositions[i * 3 + 1] * particlePositions[i * 3 + 1] +
                particlePositions[i * 3 + 2] * particlePositions[i * 3 + 2]
            ) < sphereRadius
        ) {
            particleColors[i * 3] = 1.0;
            particleColors[i * 3 + 1] = 1.0;
            particleColors[i * 3 + 2] = 1.0;
        } else {
            particleColors[i * 3] = 0.0;
            particleColors[i * 3 + 1] = 0.0;
            particleColors[i * 3 + 2] = 1.0;
        }

        // Update particle color attribute
        particleGeometry.attributes.color.setXYZ(
            i,
            particleColors[i * 3],
            particleColors[i * 3 + 1],
            particleColors[i * 3 + 2]
        );
    }

    particleGeometry.attributes.position.needsUpdate = true;

    controls.update();

    renderer.render(scene, camera);
};

animate();
