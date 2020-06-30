import { WEBGL } from './../lib/WebGL.js';
if (WEBGL.isWebGLAvailable()) {

    // Initiate function or other initializations here    
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    
    var camera = new THREE.PerspectiveCamera(14, window.innerWidth / window.innerHeight, 1, 500);
    camera.position.set(0, 0, 100);
    camera.lookAt(0, 0, 0);

    var scene = new THREE.Scene();

    var material = new THREE.LineBasicMaterial({ color: 0xffffff });

    var points = [];
    points.push(new THREE.Vector3(- 10, 0, 0));
    points.push(new THREE.Vector3(0, 10, 0));
    points.push(new THREE.Vector3(10, 0, 0));

    var geometry = new THREE.BufferGeometry().setFromPoints(points);

    var line = new THREE.Line( geometry, material );
    scene.add(line);

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }
    animate();

} else {

    var warning = WEBGL.getWebGLErrorMessage();
    document.getElementById('container').appendChild(warning);

}