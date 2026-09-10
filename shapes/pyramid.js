export const Pyramid = {
  id: 'pyramid',
  name: 'Pyramid',
  icon: '▲',
  defaultSize: { radius: 0.55, height: 1.0 },
  mass: 1.0,
  createMesh(size, color) {
    const geo = new THREE.ConeGeometry(size.radius, size.height, 4);
    return new THREE.Mesh(geo, makeMat(color));
  },
  createBody(size, mass) {
    const r = size.radius * 0.5;
    const body = new CANNON.Body({ mass, material: physicsMaterial, linearDamping: 0.1, angularDamping: 0.15 });
    body.addShape(new CANNON.Sphere(r));
    return body;
  },
};
