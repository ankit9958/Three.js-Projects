import * as THREE from "three";
import { OrbitControls } from "jsm/controls/OrbitControls.js";

const w = window.innerWidth;
const h = window.innerHeight;
const scene = new THREE.Scene();

// Set background color to light purple
scene.background = new THREE.Color(0xadd8e6);

const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);

const ctrls = new OrbitControls(camera, renderer.domElement);
ctrls.enableDamping = true;
ctrls.dampingFactor = 0.03;

// Cube geometry and material with gradient blue color
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({
  color: 0x1e90ff, // DodgerBlue color
  flatShading: true,
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Wireframe material
const wireMat = new THREE.MeshBasicMaterial({
  color: 0xffffff,
  wireframe: true,
});

const wireMesh = new THREE.Mesh(geometry, wireMat);
wireMesh.scale.setScalar(1.001);
mesh.add(wireMesh);

// Hemisphere light with soft lighting
const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
scene.add(hemiLight);

function animate() {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
  ctrls.update();
}

animate();
