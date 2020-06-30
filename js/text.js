import { WEBGL } from './../lib/WebGL.js';
if (WEBGL.isWebGLAvailable()) {

    var FLOOR = - 250;

    var camera, controls, scene, renderer;

    var NEAR = 5, FAR = 1500;
    // Initiate function or other initializations here
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000fff);
    scene.fog = new THREE.Fog(0xffffff, 250, 1400);

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, NEAR, FAR);
    camera.position.set(100, 0, 1500);
    var cameraTarget = new THREE.Vector3(0, 150, 0);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    var textGeometry = null;
    var loader = new THREE.FontLoader();
    loader.load('fonts/helvetiker_regular.typeface.json', function (font) {

        textGeometry = new THREE.TextBufferGeometry('Hello three.js!', {
            font: font,
            size: 80,
            height: 5,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 10,
            bevelSize: 8,
            bevelOffset: 0,
            bevelSegments: 5
        });

        textGeometry.computeBoundingBox();
        textGeometry.computeVertexNormals();

        var centerOffset = - 0.5 * (textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x);

        var textMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000, specular: 0xffffff });

        var mesh = new THREE.Mesh(textGeometry, textMaterial);
        console.log(mesh);
        mesh.position.x = centerOffset;
        mesh.position.y = FLOOR + 67;

        mesh.castShadow = true;
        mesh.receiveShadow = true;
        scene.add(mesh);


        // var centerOffset = - 0.5 * ( textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x );
        // camera.position.z = 5;

        function animate() {
            requestAnimationFrame(animate);

            renderer.render(scene, camera);
        }
        animate();
    });

} else {

    var warning = WEBGL.getWebGLErrorMessage();
    document.getElementById('container').appendChild(warning);

}
