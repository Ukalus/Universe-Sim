import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


// Setting up the Scene 
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.set(10,10,0);
const renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0x000000,1)
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);


// Adding orbit controls 
const controls = new OrbitControls( camera, renderer.domElement );

// Adding grid helper 
const size = 100;
const divisions = 100;

const gridHelper = new THREE.GridHelper( size, divisions);
scene.add( gridHelper );

// Adding Astral body 

const planet = new THREE.SphereGeometry(0.8)
const material = new THREE.MeshBasicMaterial({color: 0xffffff})
const mesh = new THREE.Mesh(planet,material)
scene.add(mesh)

// Important Astral body parameters

const mass = 4

// Spawn asteroid

const asteroid = new THREE.SphereGeometry(0.2)
const material2 = new THREE.MeshBasicMaterial({color: 0xffff00})
const mesh2 = new THREE.Mesh(asteroid,material2)

mesh2.position.set(10,0,0);
scene.add(mesh2)

// Calculate force Vector 
 

// visualise force vector
const length = 1;
const hex = 0xffff00;

let arrowHelper = new THREE.ArrowHelper( mesh2.position.normalize().multiplyScalar(-1), new THREE.Vector3(0,0,0), length, hex );
mesh2.add( arrowHelper );

function animate(){
    requestAnimationFrame(animate);
    controls.update()
    renderer.render( scene, camera);
    mesh2.position.x -= 0.01
    mesh2.position.z -= 0.05
    arrowHelper.setDirection(mesh2.get)

}

animate();
