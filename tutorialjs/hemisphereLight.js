let scene, camera, renderer, light;
let cube, sphere, plane;
let ADD = 0.01;


let createGeometry = function () {

    let geometry = new THREE.BoxGeometry(5, 5, 5);
    let material = new THREE.MeshPhongMaterial({
        color: 0Xdff913,
        shininess: 100, side: THREE.DoubleSide
    });
    cube = new THREE.Mesh(geometry, material);
    cube.position.set(5, 0, 0);

    geometry = new THREE.SphereGeometry(5, 30, 30);
    material = new THREE.MeshPhongMaterial({
        color: 0X66cdaa,
        shininess: 100, side: THREE.DoubleSide
    });
    sphere = new THREE.Mesh(geometry, material);
    sphere.position.set(-5, 5, -5);

    geometry = new THREE.BoxGeometry(2000, 1, 2000);
    material = new THREE.MeshPhongMaterial({
        color: 0X693421,
        side: THREE.DoubleSide
    });
    plane = new THREE.Mesh(geometry, material);
    plane.position.y = -1;

    scene.add(cube);
    scene.add(sphere);
    scene.add(plane);

};

// set up the environment - 
// initiallize scene, camera, objects and renderer
let init = function () {
    // create the scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    // create an locate the camera
    camera = new THREE.PerspectiveCamera(75,
        window.innerWidth / window.innerHeight,
        1, 1000);
    camera.position.set(0, 10, 20);

    // light = new THREE.AmbientLight(0x63b8ff);
    light = new THREE.HemisphereLight(0x00ff00, 0x0000ff);


    scene.add(light);

    createGeometry();


    // create the renderer   
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

};


// main animation loop - calls 50-60 times per second.
let mainLoop = function () {

    renderer.render(scene, camera);
    requestAnimationFrame(mainLoop);
};

///////////////////////////////////////////////
init();
mainLoop();