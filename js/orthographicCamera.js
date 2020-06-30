import { WEBGL } from './../lib/WebGL.js';
if (WEBGL.isWebGLAvailable()) {

    // Initiate function or other initializations here
    var scene = new THREE.Scene();
    var width = window.innerWidth;
    var height = window.innerHeight;
    var camera = new THREE.OrthographicCamera(width / -50, width / 50, height / 50, height / - 50, -500, 1000);
    camera.position.z = 50;
    camera.position.y = 40;
    camera.position.x = 130;

    var renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    document.body.appendChild(renderer.domElement);

    var geometry = new THREE.BoxGeometry();
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var cube = new THREE.Mesh(geometry, material);
    cube.castShadow = true;
    cube.position.x = -4;
    cube.position.y = 5;
    cube.position.z = 0;
    scene.add(cube);
    console.log(cube.position);
    camera.lookAt(cube.position);

    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        camera.updateProjectionMatrix();
        renderer.render(scene, camera);
    }
    var zoomLevel = 1;
    setInterval(() => {
        camera.zoom = zoomLevel++;
    }, 5000);
    animate();

} else {

    var warning = WEBGL.getWebGLErrorMessage();
    document.getElementById('container').appendChild(warning);

}