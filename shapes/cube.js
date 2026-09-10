// shapes/cube.js
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

// Shared pastel material factory (imported from main file or defined here)
function makeMat(color, opts = {}) {
  return new THREE.MeshPhysicalMaterial({
    color,
    roughness: opts.roughness ?? 0.28,
    metalness: opts.metalness ?? 0.02,
    clearcoat: opts.clearcoat ?? 0.7,
    clearcoatRoughness: 0.25,
    reflectivity: 0.6,
    envMapIntensity: 1.1,
    sheen: opts.sheen ?? 0.3,
    sheenColor: new THREE.Color(0xffffff),
    ...opts,
  });
}

// Shared physics material
const physicsMaterial = new CANNON.Material('cozy');

export const Cube = {
  id: 'cube',
  name: 'Soft Cube',
  icon: '▣',
  defaultSize: { x: 1, y: 1, z: 1, radius: 0.15 },
  mass: 1.1,
  
  createMesh(size, color) {
    // Rounded box for cozy, no-sharp-edges look
    const geo = new RoundedBoxGeometry(
      size.x, 
      size.y, 
      size.z, 
      5, // segments
      size.radius ?? 0.15
    );
    return new THREE.Mesh(geo, makeMat(color));
  },
  
  createBody(size, mass) {
    // Use sphere for stable physics (approximates rounded cube)
    const r = Math.min(size.x, size.y, size.z) * 0.48;
    const body = new CANNON.Body({ 
      mass, 
      material: physicsMaterial, 
      linearDamping: 0.08, 
      angularDamping: 0.1 
    });
    body.addShape(new CANNON.Sphere(r));
    return body;
  },
};

export default Cube;
