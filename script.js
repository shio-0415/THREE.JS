let scene, camera, renderer;
let cube, cylinder, cone;

function init() {

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    65,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  renderer = new THREE.WebGLRenderer({
    antialias: true
  });

  renderer.setSize(
    window.innerWidth,
    window.innerHeight
  );

  document.body.appendChild(renderer.domElement);


  /* --------------------
     立方体
     -------------------- */

  const cubeGeometry = new THREE.BoxGeometry(
    2,
    2,
    2
  );

  const texture = new THREE.TextureLoader().load(
    "textures/renga.png"
  );

  const cubeMaterial = new THREE.MeshBasicMaterial({
    map: texture
  });

  cube = new THREE.Mesh(
    cubeGeometry,
    cubeMaterial
  );

  cube.position.x = -4;

  scene.add(cube);


  /* --------------------
     円筒
     -------------------- */

  const cylinderGeometry = new THREE.CylinderGeometry(
    1,
    1,
    2,
    32
  );

  const cylinderMaterial = new THREE.MeshBasicMaterial({
    color: 0x00ff00
  });

  cylinder = new THREE.Mesh(
    cylinderGeometry,
    cylinderMaterial
  );

  cylinder.position.x = 0;

  scene.add(cylinder);


  /* --------------------
     円錐
     -------------------- */

  const coneGeometry = new THREE.ConeGeometry(
    1,
    2,
    32
  );

  const coneMaterial = new THREE.MeshBasicMaterial({
    color: 0x0000ff
  });

  cone = new THREE.Mesh(
    coneGeometry,
    coneMaterial
  );

  cone.position.x = 4;

  scene.add(cone);


  camera.position.z = 8;
}


function animate() {

  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  cylinder.rotation.x += 0.01;
  cylinder.rotation.y += 0.01;

  cone.rotation.x += 0.01;
  cone.rotation.y += 0.01;

  renderer.render(
    scene,
    camera
  );
}


function onWindowResize() {

  camera.aspect =
    window.innerWidth /
    window.innerHeight;

  camera.updateProjectionMatrix();

  renderer.setSize(
    window.innerWidth,
    window.innerHeight
  );
}


window.addEventListener(
  "resize",
  onWindowResize
);


init();
animate();