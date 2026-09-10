export const Prism = {
  id: 'prism',
  name: 'Prism',
  icon: '📐',
  defaultSize: { radius: 0.5, height: 1.0 },
  mass: 1.1,
  createMesh(size, color) {
    const geo = new THREE.CylinderGeometry(size.radius, size.radius, size.height, 3);
    return new THREE.Mesh(geo, makeMat(color));
  },
  createBody(size, mass) {
    const body = new CANNON.Body({ mass, material: physicsMaterial, linearDamping: 0.08, angularDamping: 0.12 });
    body.addShape(new CANNON.Cylinder(size.radius, size.radius, size.height, 3));
    return body;
  },
};
