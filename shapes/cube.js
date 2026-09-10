export const Cube = {
  id: 'cube',
  name: 'Cube',
  icon: '⬛',
  defaultSize: { x: 0.9, y: 0.9, z: 0.9 },
  mass: 1.1,
  createMesh(size, color) {
    const geo = new THREE.BoxGeometry(size.x, size.y, size.z);
    return new THREE.Mesh(geo, makeMat(color));
  },
  createBody(size, mass) {
    const body = new CANNON.Body({ mass, material: physicsMaterial, linearDamping: 0.08, angularDamping: 0.1 });
    body.addShape(new CANNON.Box(new CANNON.Vec3(size.x / 2, size.y / 2, size.z / 2)));
    return body;
  },
};
